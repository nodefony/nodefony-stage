module.exports = function (stage) {

  /*
   *
   */
  const websocket = class websocket extends stage.io.transport {

    constructor(url, settings) {
      if (url) {
        super(url, settings);
        this.connect(url, settings);
      } else {
        super();
        this.socket = null;
      }
    }

    connect(url, settings) {
      this.socket = new WebSocket(url, settings.protocol);
      this.socket.onmessage = this.listen(this, "onMessage");
      this.socket.onerror = this.listen(this, "onError");
      this.socket.onopen = this.listen(this, "onConnect");
      this.socket.onclose = this.listen(this, "onClose");
      return this.socket;
    }


    close(url, settings) {
      this.socket.close();
    }

    send(data) {
      this.socket.send(data);
    }

    destroy(data) {
      delete this.socket;
      this.socket = null;
    }
  };

  stage.io.transports.websocket = websocket;

  return websocket;
};