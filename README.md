# nodefony-stage


Nodefony-Stage is an Experimental Port of **[Nodefony](https://github.com/nodefony/nodefony)** Project for client side (Browser).

It is used in the nodefony project for **[Monitoring](https://nodefony.net/nodefony)** management.


#### Documentation in progress !!


Nodefony-stage use webpack to build :

- [WEBPACK](https://webpack.js.org/) Module bundler for assets management of application .


## <a name="requirements"></a>LIBRARY  Requirements :

#### On your system _you must have Installed_ :

-   **[GIT](http://git-scm.com/)**  is Distributed version control system

-   **[Node.js](https://nodejs.org/)** ® is a Platform built on Chrome's JavaScript runtime ( >= 8 )

-   **[npm](https://www.npmjs.com/)** or **[yarn](https://yarnpkg.com/lang/en/)**  Packages Manager for javascript application

-   **[OpenSSL](https://www.openssl.org/)** Toolkit for the Transport Layer Security (TLS) and Secure Sockets Layer (SSL) protocols

-   **[GNU Bash](https://www.gnu.org/software/bash/)** Bash is the GNU Project's shell

**[NVM](https://github.com/creationix/nvm) Installation (Node Version Manager )** :
-   [NVM](https://github.com/creationix/nvm) Node Version Manager - Simple bash script to manage multiple active node.js versions

  To install or update nvm, you can use the install script:
```sh
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
# or
$ wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash

$ source ~/.bashrc # or source ~/.bash_profile
$ nvm ls-remote # show all remote versions  
$ nvm ls # show local versions
```

**[Node.js](https://nodejs.org/) Installation with [NVM](https://github.com/creationix/nvm)** :
```sh
nvm install node # "node" is an alias for the latest version
```

## <a name="install"></a>BUILD LIBRARY :

```sh
$ git clone https://github.com/nodefony/nodefony-stage.git

$ cd nodefony-stage
$ npm install
```

```sh
$ ./stage
                     _           __                                         _                          
 _ __     ___     __| |   ___   / _|   ___    _ __    _   _           ___  | |_    __ _    __ _    ___
| '_ \   / _ \   / _` |  / _ \ | |_   / _ \  | '_ \  | | | |  _____  / __| | __|  / _` |  / _` |  / _ \
| | | | | (_) | | (_| | |  __/ |  _| | (_) | | | | | | |_| | |_____| \__ \ | |_  | (_| | | (_| | |  __/
|_| |_|  \___/   \__,_|  \___| |_|    \___/  |_| |_|  \__, |         |___/  \__|  \__,_|  \__, |  \___|
                                                      |___/                               |___/        

Version : 0.2.0   Platform : darwin   Process : nodefony-sta   Pid : 44055

? Stage CLI  (Use arrow keys)
❯ Build Stage ES6 Tools Chain
Run ES6 Tools Chain Tests
Install demo
Run Demo

> @nodefony/stage@0.2.0 build /Users/cci/repository/nodefony-stage
> WEBPACK_ENV=prod webpack; WEBPACK_ENV=dev webpack --verbose

Hash: 68b72b0dfec2918760500cf6c4de3ec6805bf40f
Version: webpack 4.39.1
Child
    Hash: 68b72b0dfec291876050
    Time: 3401ms
    Built at: 2019-08-12 11:49:24
           Asset      Size  Chunks             Chunk Names
        stage.js  1.15 MiB    main  [emitted]  main
    stage.js.map  1.51 MiB    main  [emitted]  main
    Entrypoint main = stage.js stage.js.map
    chunk {main} stage.js, stage.js.map (main) 1.1 MiB [entry] [rendered]
        > /Users/cci/repository/nodefony-stage/src/core.js main
     [0] fs (ignored) 15 bytes {main} [depth 3] [built]
         cjs require fs [./node_modules/twig/twig.js] 5994:17-30
     [./node_modules/webpack/buildin/global.js] (webpack)/buildin/global.js 472 bytes {main} [depth 3] [built]
         cjs require global [./node_modules/expose-loader/index.js?jQuery!./node_modules/jquery/dist/jquery.js-exposed] ./node_modules/expose-loader?jQuery!./node_modules/jquery/dist/jquery.js-exposed 1:0-44
         cjs require global [./node_modules/jquery/dist/jquery.js-exposed] 1:0-44
         cjs require global [./node_modules/twig/twig.js] 1:0-41
     [./package.json] 2.42 KiB {main} [depth 2] [built]
         [exports: name, version, description, browser, main, private, scripts, bin, keywords, repository, bugs, license, licenses, dependencies, devDependencies, author, readmeFilename, contributors, default]
         cjs require ../../package.json [./src/core/stage.es6] 13:16-45
     [./src/core.js] 3.42 KiB {main} [depth 0] [built]
         single entry /Users/cci/repository/nodefony-stage/src/core.js  main
     [./src/core/container.es6] 10.9 KiB {main} [depth 1] [built]
         cjs require ./core/container.es6 [./src/core.js] 47:0-31
     [./src/core/notificationsCenter.es6] 5.19 KiB {main} [depth 1] [built]
         cjs require ./core/notificationsCenter.es6 [./src/core.js] 41:0-41
     [./src/core/service.es6] 7.32 KiB {main} [depth 1] [built]
         cjs require ./core/service.es6 [./src/core.js] 45:0-29
     [./src/core/stage.es6] 6.6 KiB {main} [depth 1] [built]
         cjs require ./core/stage.es6 [./src/core.js] 39:12-39
     [./src/crypto/base64.js] 4.81 KiB {main} [depth 1] [built]
         cjs require ./crypto/base64.js [./src/core.js] 57:0-29
     [./src/crypto/md5.js] 12.6 KiB {main} [depth 1] [built]
         cjs require ./crypto/md5.js [./src/core.js] 59:0-26
     [./src/io/authentication/mechanisms/digest-md5/digestMd5.es6] 6.35 KiB {main} [depth 1] [built]
         cjs require ./io/authentication/mechanisms/digest-md5/digestMd5.es6 [./src/core.js] 64:0-66
     [./src/io/authentication/sasl/sasl.es6] 3.18 KiB {main} [depth 1] [built]
         cjs require ./io/authentication/sasl/sasl.es6 [./src/core.js] 66:0-44
     [./src/io/io.es6] 10.3 KiB {main} [depth 1] [built]
         cjs require ./io/io.es6 [./src/core.js] 62:0-22
     [./src/io/protocols/bayeux/bayeux.es6] 8.73 KiB {main} [depth 1] [built]
         cjs require ./io/protocols/bayeux/bayeux.es6 [./src/core.js] 78:0-43
     [./src/io/protocols/sip/sdp.es6] 17.6 KiB {main} [depth 1] [built]
         cjs require ./io/protocols/sip/sdp.es6 [./src/core.js] 80:0-37
     [./src/io/protocols/sip/sip.es6] 63.8 KiB {main} [depth 1] [built]
         cjs require ./io/protocols/sip/sip.es6 [./src/core.js] 82:0-37
     [./src/io/realtime/realtime.es6] 10.4 KiB {main} [depth 1] [built]
         cjs require ./io/realtime/realtime.es6 [./src/core.js] 85:0-37
     [./src/io/transports/in/longPoll.es6] 3.93 KiB {main} [depth 1] [built]
         cjs require ./io/transports/in/longPoll.es6 [./src/core.js] 75:0-42
     [./src/io/transports/in/poll.es6] 6.81 KiB {main} [depth 1] [built]
         cjs require ./io/transports/in/poll.es6 [./src/core.js] 73:0-38
     [./src/io/transports/socket.es6] 4.04 KiB {main} [depth 1] [built]
         cjs require ./io/transports/socket.es6 [./src/core.js] 69:0-37
     [./src/io/transports/websockets/websocket.es6] 3.71 KiB {main} [depth 1] [built]
         cjs require ./io/transports/websockets/websocket.es6 [./src/core.js] 71:0-51
     [./src/kernel/appKernel.es6] 2.6 KiB {main} [depth 1] [built]
         cjs require ./kernel/appKernel.es6 [./src/core.js] 103:0-33
     [./src/kernel/autoload.es6] 6.06 KiB {main} [depth 1] [built]
         cjs require ./kernel/autoload.es6 [./src/core.js] 105:0-32
     [./src/kernel/controller.es6] 6.12 KiB {main} [depth 1] [built]
         cjs require ./kernel/controller.es6 [./src/core.js] 107:0-34
     [./src/kernel/kernel.es6] 15.3 KiB {main} [depth 1] [built]
         cjs require ./kernel/kernel.es6 [./src/core.js] 101:0-30
     [./src/kernel/locationService.es6] 16.5 KiB {main} [depth 1] [built]
         cjs require ./kernel/locationService.es6 [./src/core.js] 109:0-39
     [./src/kernel/module.es6] 22.2 KiB {main} [depth 1] [built]
         cjs require ./kernel/module.es6 [./src/core.js] 111:0-30
     [./src/kernel/routerService.es6] 15.1 KiB {main} [depth 1] [built]
         cjs require ./kernel/routerService.es6 [./src/core.js] 113:0-37
     [./src/kernel/translationService.es6] 5.81 KiB {main} [depth 1] [built]
         cjs require ./kernel/translationService.es6 [./src/core.js] 115:0-42
     [./src/media/media.es6] 6.12 KiB {main} [depth 1] [built]
         cjs require ./media/media.es6 [./src/core.js] 90:0-28
     [./src/media/webAudio/webaudio.es6] 23.3 KiB {main} [depth 1] [built]
         cjs require ./media/webAudio/webaudio.es6 [./src/core.js] 92:0-40
     [./src/media/webrtc/transaction.es6] 18.7 KiB {main} [depth 1] [built]
         cjs require ./media/webrtc/transaction.es6 [./src/core.js] 98:0-41
     [./src/media/webrtc/user.es6] 2.12 KiB {main} [depth 1] [built]
         cjs require ./media/webrtc/user.es6 [./src/core.js] 96:0-34
     [./src/media/webrtc/webrtc.es6] 19.5 KiB {main} [depth 1] [built]
         cjs require ./media/webrtc/webrtc.es6 [./src/core.js] 94:0-36
     [./src/structs/hash/hash.es6] 3.91 KiB {main} [depth 1] [built]
         cjs require ./structs/hash/hash.es6 [./src/core.js] 52:0-34
     [./src/structs/queue/queue.es6] 5.32 KiB {main} [depth 1] [built]
         cjs require ./structs/queue/queue.es6 [./src/core.js] 54:0-36
     [./src/syslog/syslog.es6] 22.7 KiB {main} [depth 1] [built]
         cjs require ./syslog/syslog.es6 [./src/core.js] 43:0-30
     [./src/tools/xml.js] 4.64 KiB {main} [depth 1] [built]
         cjs require ./tools/xml.js [./src/core.js] 50:0-25
         + 33 hidden modules

    LOG from webpack.buildChunkGraph.visitModules
    <t> prepare: 0.308865ms
    <t> visiting: 0.317143ms
Child
    Hash: 0cf6c4de3ec6805bf40f
    Time: 2961ms
    Built at: 2019-08-12 11:49:24
            Asset      Size  Chunks             Chunk Names
        stage6.js  1.05 MiB    main  [emitted]  main
    stage6.js.map  1.26 MiB    main  [emitted]  main
    Entrypoint main = stage6.js stage6.js.map
    chunk {main} stage6.js, stage6.js.map (main) 1.01 MiB [entry] [rendered]
        > /Users/cci/repository/nodefony-stage/src/core.js main
     [0] fs (ignored) 15 bytes {main} [depth 3] [built]
         cjs require fs [./node_modules/twig/twig.js] 5994:17-30
     [./node_modules/webpack/buildin/global.js] (webpack)/buildin/global.js 472 bytes {main} [depth 3] [built]
         cjs require global [./node_modules/expose-loader/index.js?jQuery!./node_modules/jquery/dist/jquery.js-exposed] ./node_modules/expose-loader?jQuery!./node_modules/jquery/dist/jquery.js-exposed 1:0-44
         cjs require global [./node_modules/jquery/dist/jquery.js-exposed] 1:0-44
         cjs require global [./node_modules/twig/twig.js] 1:0-41
     [./package.json] 2.42 KiB {main} [depth 2] [built]
         [exports: name, version, description, browser, main, private, scripts, bin, keywords, repository, bugs, license, licenses, dependencies, devDependencies, author, readmeFilename, contributors, default]
         cjs require ../../package.json [./src/core/stage.es6] 5:18-47
     [./src/core.js] 3.39 KiB {main} [depth 0] [built]
         single entry /Users/cci/repository/nodefony-stage/src/core.js  main
     [./src/core/container.es6] 6.23 KiB {main} [depth 1] [built]
         cjs require ./core/container.es6 [./src/core.js] 44:0-31
     [./src/core/notificationsCenter.es6] 3.85 KiB {main} [depth 1] [built]
         cjs require ./core/notificationsCenter.es6 [./src/core.js] 41:0-41
     [./src/core/service.es6] 5.44 KiB {main} [depth 1] [built]
         cjs require ./core/service.es6 [./src/core.js] 43:0-29
     [./src/core/stage.es6] 5.3 KiB {main} [depth 1] [built]
         cjs require ./core/stage.es6 [./src/core.js] 40:14-41
     [./src/crypto/base64.js] 4.87 KiB {main} [depth 1] [built]
         cjs require ./crypto/base64.js [./src/core.js] 53:0-29
     [./src/crypto/md5.js] 12.5 KiB {main} [depth 1] [built]
         cjs require ./crypto/md5.js [./src/core.js] 54:0-26
     [./src/io/authentication/mechanisms/digest-md5/digestMd5.es6] 4.37 KiB {main} [depth 1] [built]
         cjs require ./io/authentication/mechanisms/digest-md5/digestMd5.es6 [./src/core.js] 58:0-66
     [./src/io/authentication/sasl/sasl.es6] 1.7 KiB {main} [depth 1] [built]
         cjs require ./io/authentication/sasl/sasl.es6 [./src/core.js] 59:0-44
     [./src/io/io.es6] 7.52 KiB {main} [depth 1] [built]
         cjs require ./io/io.es6 [./src/core.js] 57:0-22
     [./src/io/protocols/bayeux/bayeux.es6] 6.93 KiB {main} [depth 1] [built]
         cjs require ./io/protocols/bayeux/bayeux.es6 [./src/core.js] 68:0-43
     [./src/io/protocols/sip/sdp.es6] 14.9 KiB {main} [depth 1] [built]
         cjs require ./io/protocols/sip/sdp.es6 [./src/core.js] 69:0-37
     [./src/io/protocols/sip/sip.es6] 53.1 KiB {main} [depth 1] [built]
         cjs require ./io/protocols/sip/sip.es6 [./src/core.js] 70:0-37
     [./src/io/realtime/realtime.es6] 8.79 KiB {main} [depth 1] [built]
         cjs require ./io/realtime/realtime.es6 [./src/core.js] 73:0-37
     [./src/io/transports/in/longPoll.es6] 1.26 KiB {main} [depth 1] [built]
         cjs require ./io/transports/in/longPoll.es6 [./src/core.js] 65:0-42
     [./src/io/transports/in/poll.es6] 3.53 KiB {main} [depth 1] [built]
         cjs require ./io/transports/in/poll.es6 [./src/core.js] 64:0-38
     [./src/io/transports/socket.es6] 1.3 KiB {main} [depth 1] [built]
         cjs require ./io/transports/socket.es6 [./src/core.js] 62:0-37
     [./src/io/transports/websockets/websocket.es6] 1 KiB {main} [depth 1] [built]
         cjs require ./io/transports/websockets/websocket.es6 [./src/core.js] 63:0-51
     [./src/kernel/appKernel.es6] 668 bytes {main} [depth 1] [built]
         cjs require ./kernel/appKernel.es6 [./src/core.js] 86:0-33
     [./src/kernel/autoload.es6] 4.35 KiB {main} [depth 1] [built]
         cjs require ./kernel/autoload.es6 [./src/core.js] 87:0-32
     [./src/kernel/controller.es6] 2.76 KiB {main} [depth 1] [built]
         cjs require ./kernel/controller.es6 [./src/core.js] 88:0-34
     [./src/kernel/kernel.es6] 9.93 KiB {main} [depth 1] [built]
         cjs require ./kernel/kernel.es6 [./src/core.js] 85:0-30
     [./src/kernel/locationService.es6] 11.2 KiB {main} [depth 1] [built]
         cjs require ./kernel/locationService.es6 [./src/core.js] 89:0-39
     [./src/kernel/module.es6] 14.8 KiB {main} [depth 1] [built]
         cjs require ./kernel/module.es6 [./src/core.js] 90:0-30
     [./src/kernel/routerService.es6] 9.71 KiB {main} [depth 1] [built]
         cjs require ./kernel/routerService.es6 [./src/core.js] 91:0-37
     [./src/kernel/translationService.es6] 2.83 KiB {main} [depth 1] [built]
         cjs require ./kernel/translationService.es6 [./src/core.js] 92:0-42
     [./src/media/media.es6] 4.8 KiB {main} [depth 1] [built]
         cjs require ./media/media.es6 [./src/core.js] 77:0-28
     [./src/media/webAudio/webaudio.es6] 18.1 KiB {main} [depth 1] [built]
         cjs require ./media/webAudio/webaudio.es6 [./src/core.js] 78:0-40
     [./src/media/webrtc/transaction.es6] 15 KiB {main} [depth 1] [built]
         cjs require ./media/webrtc/transaction.es6 [./src/core.js] 81:0-41
     [./src/media/webrtc/user.es6] 1.22 KiB {main} [depth 1] [built]
         cjs require ./media/webrtc/user.es6 [./src/core.js] 80:0-34
     [./src/media/webrtc/webrtc.es6] 15 KiB {main} [depth 1] [built]
         cjs require ./media/webrtc/webrtc.es6 [./src/core.js] 79:0-36
     [./src/structs/hash/hash.es6] 2.09 KiB {main} [depth 1] [built]
         cjs require ./structs/hash/hash.es6 [./src/core.js] 49:0-34
     [./src/structs/queue/queue.es6] 3.49 KiB {main} [depth 1] [built]
         cjs require ./structs/queue/queue.es6 [./src/core.js] 50:0-36
     [./src/syslog/syslog.es6] 18.3 KiB {main} [depth 1] [built]
         cjs require ./syslog/syslog.es6 [./src/core.js] 42:0-30
     [./src/tools/xml.js] 5 KiB {main} [depth 1] [built]
         cjs require ./tools/xml.js [./src/core.js] 48:0-25
         + 33 hidden modules

    LOG from webpack.buildChunkGraph.visitModules
    <t> prepare: 1.022981ms
    <t> visiting: 0.818721ms

```
