module.exports = function (stage) {

  'use strict';

  const clientsCapabilities = function () {
    var tab = [];
    var ws = stage.io.nativeWebSocket ? tab.push("websocket") : null;
    var poll = stage.io.poll ? tab.push("poll") : null;
    var lpoll = stage.io.longPoll ? tab.push("long-polling") : null;
    var jsonp = stage.io.jsonp ? tab.push("callback-polling") : null;
    return tab;
  }();

  const onHandshakeResponse = function (message) {
    if (message.successful) {
      try {
        var socket = this.getBestConnection(message.supportedConnectionTypes);
        this.socket = new socket.Class(socket.url);
        this.socket.onmessage = (message) => {
          if (message.data) {
            this.onMessage(message.data);
          }
        };
        this.socket.onopen = () => {
          this.socket.send(this.connect(message));
          this.notificationCenter.fire("onHandshake", message, this.socket);
        };
        this.socket.onerror = this.notificationCenter.listen(this, "onError");
        this.socket.onclose = (err) => {
          delete this.socket;
          this.notificationCenter.fire("onClose", err);
        };
      } catch (e) {
        throw new Error(e);
      }
    } else {
      onError.call(this, message);
    }
  };

  const reconnect = function () {
    this.reconnect = true;
    this.notificationCenter.fire("reConnect", this);
  };

  const onConnectResponse = function (message) {
    if (message.successful) {
      this.connected = true;
      this.idconnection = message.clientId;
      if (message.advice) {
        for (var ele in message.advice) {
          switch (ele) {
          case "reconnect":
            if (message.advice[ele] === "retry") {
              if (!this.reconnect) {
                this.notificationCenter.listen(this, "onClose", reconnect);
              }
            }
            break;
          }
        }
      }
      this.notificationCenter.fire("onConnect", message);
    } else {
      this.connected = false;
      onError.call(this, message);
    }
  };

  const onDisconnectResponse = function (message) {
    if (message.successful) {
      if (this.socket) {
        this.socket.close();
        this.socket = null;
        this.notificationCenter.fire("onDisconnect", message);
      }
    } else {
      onError.call(this, message);
    }
  };

  const onSubscribeResponse = function (message) {
    if (message.successful) {
      this.notificationCenter.fire("onSubscribe", message);
    } else {
      onError.call(this, message);
    }
  };

  const onUnsubscribeResponse = function (message) {
    if (message.successful) {
      this.notificationCenter.fire("onUnsubscribe", message);
    } else {
      onError.call(this, message);
    }
  };

  const onError = function (message) {
    if (message.error) {
      try {
        switch (stage.typeOf(message.error)) {
        case "string":
          var res = message.error.split(":");
          var code = res[0];
          var arg = res[1];
          var mess = res[2];
          break;
        case "object":
          if (message.error) {
            return onError.call(this, message.error);
          }
          break;
        case "Error":
          message.error = "500::" + message.error.message;
          return onError.call(this, message.error);
        default:
          throw new Error("Bad protocole error BAYEUX");

        }
        return this.notificationCenter.fire("onError", code, arg, mess);
      } catch (e) {
        throw new Error("Bad protocole error BAYEUX" + e);
      }
    }
  };

  /*
   *	BAYEUX PROTOCOL
   *
   */
  const bayeux = class bayeux {

    constructor(url) {
      this.name = "bayeux";
      this.notificationCenter = stage.notificationsCenter.create(this.settings, this);
      this.url = url;
      this.socket = null;
      this.connected = false;
      this.request = {
        version: "1.0"
      };
    }

    getBestConnection(supportedConnectionTypes) {
      if (this.url.protocol === "https:" || this.url.protocol === "wss:") {
        this.url.protocol = "wss:";
      } else {
        this.url.protocol = "ws:";
      }
      this.socketType = "WEBSOCKET";
      return {
        Class: window.WebSocket,
        url: this.url.protocol + "//" + this.url.host + this.url.requestUri
      };
    }

    build(obj) {
      var res = [];
      res.push(obj);
      return res;
    }

    handshake() {
      var req = JSON.stringify(stage.extend({}, this.request, {
        channel: "/meta/handshake",
        minimumVersion: "1.0",
        supportedConnectionTypes: clientsCapabilities
      }));
      return this.send(req);
    }

    connect(message) {
      return JSON.stringify({
        channel: "/meta/connect",
        clientId: message.clientId,
        connectionType: this.socketType
      });
    }

    stopReConnect(message) {
      this.notificationCenter.unListen("onClose", reconnect);
    }

    disconnect() {
      return JSON.stringify({
        channel: "/meta/disconnect",
        clientId: this.idconnection,
      });
    }

    subscribe(name, data) {
      return JSON.stringify({
        channel: "/meta/subscribe",
        clientId: this.idconnection,
        subscription: "/service/" + name,
        data: data
      });
    }

    unSubscribe(name, clientId, data) {
      return JSON.stringify({
        channel: "/meta/unsubscribe",
        clientId: clientId,
        subscription: "/service/" + name,
        data: data
      });
    }

    sendMessage(service, data, clientId) {
      return JSON.stringify({
        channel: "/service/" + service,
        clientId: clientId,
        id: new Date().getTime(),
        data: data
      });
    }

    onMessage(message) {
      try {
        if (typeof message === "string") {
          message = JSON.parse(message);
        }
      } catch (e) {
        message.error = e;
        onError.call(this, message);
        return;
      }
      switch (message.channel) {
      case "/meta/handshake":
        return onHandshakeResponse.call(this, message);
      case "/meta/connect":
        return onConnectResponse.call(this, message);
      case "/meta/disconnect":
        return onDisconnectResponse.call(this, message);
      case "/meta/subscribe":
        return onSubscribeResponse.call(this, message);
      case "/meta/unsubscribe":
        return onUnsubscribeResponse.call(this, message);
      default:
        // /some/channel
        this.notificationCenter.fire("onMessage", message);
      }
    }

    send(data) {
      if (this.socket) {
        return this.socket.send(data);
      }
      return $.ajax({
        method: 'POST',
        cache: false,
        url: this.url.href,
        dataType: "json",
        contentType: "application/json",
        data: data,
        success: (data, type, xhr) => {
          this.onMessage(data);
        },
        error: (obj, type, message) => {
          this.notificationCenter.fire('onError', obj, type, message);
        }
      });
    }
  };

  stage.io.protocols.bayeux = bayeux;
  return bayeux;
};