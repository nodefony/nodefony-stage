/*
 *
 *	The CeCILL-B License
 *
 *	Copyright (c) {{ projectYear }}/{{ projectYearNow }} {{authorName}} | {{authorEmail}}
 *
 *
 *	This software is a computer program whose purpose is to [describe
 *	functionalities and technical features of your software].
 *
 *	This software is governed by the CeCILL-B license under French law and
 *	abiding by the rules of distribution of free software.  You can  use,
 *	modify and/ or redistribute the software under the terms of the CeCILL-B
 *	license as circulated by CEA, CNRS and INRIA at the following URL
 *	"http://www.cecill.info".
 *
 *	As a counterpart to the access to the source code and  rights to copy,
 *	modify and redistribute granted by the license, users are provided only
 *	with a limited warranty  and the software's author,  the holder of the
 *	economic rights,  and the successive licensors  have only  limited
 *	liability.
 *
 *	In this respect, the user's attention is drawn to the risks associated
 *	with loading,  using,  modifying and/or developing or reproducing the
 *	software by the user in light of its specific status of free software,
 *	that may mean  that it is complicated to manipulate,  and  that  also
 *	therefore means  that it is reserved for developers  and  experienced
 *	professionals having in-depth computer knowledge. Users are therefore
 *	encouraged to load and test the software's suitability as regards their
 *	requirements in conditions enabling the security of their systems and/or
 *	data to be ensured and,  more generally, to use and operate it in the
 *	same conditions as regards security.
 *
 *	The fact that you are presently reading this means that you have had
 *	knowledge of the CeCILL-B license and that you accept its terms.
 *
 */

// CORE
const stage = require('./core/stage.es6')();
require('./core/notificationsCenter.es6')(stage);
require('./syslog/syslog.es6')(stage);
require('./core/service.es6')(stage);
require('./core/container.es6')(stage);


// TOOLS
require('./tools/xml.js')(stage);
require('./structs/hash/hash.es6')(stage);
require('./structs/queue/queue.es6')(stage);

// CRYPTO
require('./crypto/base64.js')(stage);
require('./crypto/md5.js')(stage);

// IO
require('./io/io.es6')(stage);
require('./io/authentication/mechanisms/digest-md5/digestMd5.es6')(stage);
require('./io/authentication/sasl/sasl.es6')(stage);

// IO TRANSPORT
require('./io/transports/socket.es6')(stage);
require('./io/transports/websockets/websocket.es6')(stage);
require('./io/transports/in/poll.es6')(stage);
require('./io/transports/in/longPoll.es6')(stage);

// IO PROTOCOLS
require('./io/protocols/bayeux/bayeux.es6')(stage);
require('./io/protocols/sip/sdp.es6')(stage);
require('./io/protocols/sip/sip.es6')(stage);

// IO REALTIME
require('./io/realtime/realtime.es6')(stage);

// MEDIAS
require("webrtc-adapter");
require('./media/media.es6')(stage);
require('./media/webAudio/webaudio.es6')(stage);
require('./media/webrtc/webrtc.es6')(stage);
require('./media/webrtc/user.es6')(stage);
require('./media/webrtc/transaction.es6')(stage);


// KERNEL STAGE ( nodefony )
require('./kernel/kernel.es6')(stage);
require('./kernel/appKernel.es6')(stage);
require('./kernel/autoload.es6')(stage);
require('./kernel/controller.es6')(stage);
require('./kernel/locationService.es6')(stage);
require('./kernel/module.es6')(stage);
require('./kernel/routerService.es6')(stage);
require('./kernel/translationService.es6')(stage);

// EXPORT
module.exports = stage;
