/*
 *
 *
 *
 *
 *
 *
 *
 */
stage.provide("base64");



stage.register.call(stage.crypto, "base64", function(){

	// private property
	var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

	// public method for encoding
	var encode64 = function (input) {
		var output = "";
		var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
		var i = 0;

		input = _utf8_encode(input);

		while (i < input.length) {

			chr1 = input.charCodeAt(i++);
			chr2 = input.charCodeAt(i++);
			chr3 = input.charCodeAt(i++);

			enc1 = chr1 >> 2;
			enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
			enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
			enc4 = chr3 & 63;

			if (isNaN(chr2)) {
        			enc3 = enc4 = 64;
			} else if (isNaN(chr3)) {
        			enc4 = 64;
			}

			output = output +
			_keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
			_keyStr.charAt(enc3) + _keyStr.charAt(enc4);

		}
		return output;
	};

    	// public method for decoding
	var decode64 = function (input) {
        	 var output = "";
        	 var chr1, chr2, chr3;
        	 var enc1, enc2, enc3, enc4;
        	 var i = 0;

        	 input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

        	 while (i < input.length) {

            		 enc1 = _keyStr.indexOf(input.charAt(i++));
            		 enc2 = _keyStr.indexOf(input.charAt(i++));
            		 enc3 = _keyStr.indexOf(input.charAt(i++));
            		 enc4 = _keyStr.indexOf(input.charAt(i++));

            		 chr1 = (enc1 << 2) | (enc2 >> 4);
            		 chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            		 chr3 = ((enc3 & 3) << 6) | enc4;

            		 output = output + String.fromCharCode(chr1);

            		 if (enc3 != 64) {
                		 output = output + String.fromCharCode(chr2);
            		 }
            		 if (enc4 != 64) {
                		 output = output + String.fromCharCode(chr3);
            		 }

        	 }

        	 if (i != input.length) {
			 throw new Error ("BASE64_BROKEN : There were invalid base64 characters in the input text.\n" +
	              			"Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +
	              			"Expect errors in decoding.");
        	 }

        	 output = _utf8_decode(output);

        	 return output;

    	 };

	
	var decode =  function(input, arrayBuffer) {
		//get last chars to see if are valid
		var lkey1 = _keyStr.indexOf(input.charAt(input.length-1));		 
		var lkey2 = _keyStr.indexOf(input.charAt(input.length-2));		 

		var bytes = (input.length/4) * 3;
		if (lkey1 == 64) bytes--; //padding chars, so skip
		if (lkey2 == 64) bytes--; //padding chars, so skip

		var uarray;
		var chr1, chr2, chr3;
		var enc1, enc2, enc3, enc4;
		var i = 0;
		var j = 0;

		if (arrayBuffer)
			uarray = new Uint8Array(arrayBuffer);
		else
			uarray = new Uint8Array(bytes);

		input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

		for (i=0; i<bytes; i+=3) {	
			//get the 3 octects in 4 ascii chars
			enc1 = _keyStr.indexOf(input.charAt(j++));
			enc2 = _keyStr.indexOf(input.charAt(j++));
			enc3 = _keyStr.indexOf(input.charAt(j++));
			enc4 = _keyStr.indexOf(input.charAt(j++));

			chr1 = (enc1 << 2) | (enc2 >> 4);
			chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
			chr3 = ((enc3 & 3) << 6) | enc4;

			uarray[i] = chr1;			
			if (enc3 != 64) uarray[i+1] = chr2;
			if (enc4 != 64) uarray[i+2] = chr3;
		}
		return uarray;	
	}




    	 // private method for UTF-8 encoding
	var _utf8_encode = function (string) {
        	string = string.replace(/\r\n/g,"\n");
        	var utftext = "";

        	for (var n = 0; n < string.length; n++) {

            		var c = string.charCodeAt(n);

            		if (c < 128) {
                		utftext += String.fromCharCode(c);
            		}
            		else if((c > 127) && (c < 2048)) {
                		utftext += String.fromCharCode((c >> 6) | 192);
                		utftext += String.fromCharCode((c & 63) | 128);
            		}
            		else {
                		utftext += String.fromCharCode((c >> 12) | 224);
                		utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                		utftext += String.fromCharCode((c & 63) | 128);
            		};

        	};
        	return utftext;
    	};

    	// private method for UTF-8 decoding
	var _utf8_decode = function(utftext){
        	var string = "";
        	var i = 0;
        	var c = 0;
		//var c1 = 0;
		var c2 = 0;

        	while ( i < utftext.length ) {

            		c = utftext.charCodeAt(i);

            		if (c < 128) {
                		string += String.fromCharCode(c);
                		i++;
            		}
            		else if((c > 191) && (c < 224)) {
                		c2 = utftext.charCodeAt(i+1);
                		string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                		i += 2;
            		}
            		else {
                		c2 = utftext.charCodeAt(i+1);
                		var c3 = utftext.charCodeAt(i+2);
                		string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                		i += 3;
            		}

        	}
        	return string;
    	};


	/* will return a  Uint8Array type */
	var decodeArrayBuffer =  function(input) {
		var bytes = (input.length/4) * 3;
		var ab = new ArrayBuffer(bytes);
		decode(input, ab);
		return ab;
	};


	return {
		decodeArrayBuffer:decodeArrayBuffer,
		encode:encode64,
		decode:decode64
	}
});


