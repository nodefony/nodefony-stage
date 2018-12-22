(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["stage"] = factory();
	else
		root["stage"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/core.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/expose-loader/index.js?jQuery!./node_modules/jquery/dist/jquery.js-exposed":
/*!****************************************************************************************!*\
  !*** ./node_modules/expose-loader?jQuery!./node_modules/jquery/dist/jquery.js-exposed ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["jQuery"] = __webpack_require__(/*! -!./jquery.js */ "./node_modules/jquery/dist/jquery.js");
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		noModule: true
	};

	function DOMEval( code, doc, node ) {
		doc = doc || document;

		var i,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {
				if ( node[ i ] ) {
					script[ i ] = node[ i ];
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.3.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc, node );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		div.style.position = "absolute";
		scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5
		) );
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),
		val = curCSS( elem, dimension, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox;

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = valueIsBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ dimension ] );

	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	if ( val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) {

		val = elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ];

		// offsetWidth/offsetHeight provide border-box values
		valueIsBorderBox = true;
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),
				isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra && boxModelAdjustment(
					elem,
					dimension,
					extra,
					isBorderBox,
					styles
				);

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && support.scrollboxSize() === styles.position ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js-exposed":
/*!****************************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js-exposed ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["$"] = __webpack_require__(/*! -!./node_modules/expose-loader?jQuery!./jquery.js */ "./node_modules/expose-loader/index.js?jQuery!./node_modules/jquery/dist/jquery.js-exposed");
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/nanoid/format.js":
/*!***************************************!*\
  !*** ./node_modules/nanoid/format.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Secure random string generator with custom alphabet.
 *
 * Alphabet must contain 256 symbols or less. Otherwise, the generator
 * will not be secure.
 *
 * @param {generator} random The random bytes generator.
 * @param {string} alphabet Symbols to be used in new random string.
 * @param {size} size The number of symbols in new random string.
 *
 * @return {string} Random string.
 *
 * @example
 * const format = require('nanoid/format')
 *
 * function random (size) {
 *   const result = []
 *   for (let i = 0; i < size; i++) {
 *     result.push(randomByte())
 *   }
 *   return result
 * }
 *
 * format(random, "abcdef", 5) //=> "fbaef"
 *
 * @name format
 * @function
 */
module.exports = function (random, alphabet, size) {
  var mask = (2 << Math.log(alphabet.length - 1) / Math.LN2) - 1
  var step = Math.ceil(1.6 * mask * size / alphabet.length)

  var id = ''
  while (true) {
    var bytes = random(step)
    for (var i = 0; i < step; i++) {
      var byte = bytes[i] & mask
      if (alphabet[byte]) {
        id += alphabet[byte]
        if (id.length === size) return id
      }
    }
  }
}

/**
 * @callback generator
 * @param {number} bytes The number of bytes to generate.
 * @return {number[]} Random bytes.
 */


/***/ }),

/***/ "./node_modules/path-browserify/index.js":
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/rtcpeerconnection-shim/rtcpeerconnection.js":
/*!******************************************************************!*\
  !*** ./node_modules/rtcpeerconnection-shim/rtcpeerconnection.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 *  Copyright (c) 2017 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */


var SDPUtils = __webpack_require__(/*! sdp */ "./node_modules/sdp/sdp.js");

function fixStatsType(stat) {
  return {
    inboundrtp: 'inbound-rtp',
    outboundrtp: 'outbound-rtp',
    candidatepair: 'candidate-pair',
    localcandidate: 'local-candidate',
    remotecandidate: 'remote-candidate'
  }[stat.type] || stat.type;
}

function writeMediaSection(transceiver, caps, type, stream, dtlsRole) {
  var sdp = SDPUtils.writeRtpDescription(transceiver.kind, caps);

  // Map ICE parameters (ufrag, pwd) to SDP.
  sdp += SDPUtils.writeIceParameters(
      transceiver.iceGatherer.getLocalParameters());

  // Map DTLS parameters to SDP.
  sdp += SDPUtils.writeDtlsParameters(
      transceiver.dtlsTransport.getLocalParameters(),
      type === 'offer' ? 'actpass' : dtlsRole || 'active');

  sdp += 'a=mid:' + transceiver.mid + '\r\n';

  if (transceiver.rtpSender && transceiver.rtpReceiver) {
    sdp += 'a=sendrecv\r\n';
  } else if (transceiver.rtpSender) {
    sdp += 'a=sendonly\r\n';
  } else if (transceiver.rtpReceiver) {
    sdp += 'a=recvonly\r\n';
  } else {
    sdp += 'a=inactive\r\n';
  }

  if (transceiver.rtpSender) {
    var trackId = transceiver.rtpSender._initialTrackId ||
        transceiver.rtpSender.track.id;
    transceiver.rtpSender._initialTrackId = trackId;
    // spec.
    var msid = 'msid:' + (stream ? stream.id : '-') + ' ' +
        trackId + '\r\n';
    sdp += 'a=' + msid;
    // for Chrome. Legacy should no longer be required.
    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
        ' ' + msid;

    // RTX
    if (transceiver.sendEncodingParameters[0].rtx) {
      sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
          ' ' + msid;
      sdp += 'a=ssrc-group:FID ' +
          transceiver.sendEncodingParameters[0].ssrc + ' ' +
          transceiver.sendEncodingParameters[0].rtx.ssrc +
          '\r\n';
    }
  }
  // FIXME: this should be written by writeRtpDescription.
  sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
      ' cname:' + SDPUtils.localCName + '\r\n';
  if (transceiver.rtpSender && transceiver.sendEncodingParameters[0].rtx) {
    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
        ' cname:' + SDPUtils.localCName + '\r\n';
  }
  return sdp;
}

// Edge does not like
// 1) stun: filtered after 14393 unless ?transport=udp is present
// 2) turn: that does not have all of turn:host:port?transport=udp
// 3) turn: with ipv6 addresses
// 4) turn: occurring muliple times
function filterIceServers(iceServers, edgeVersion) {
  var hasTurn = false;
  iceServers = JSON.parse(JSON.stringify(iceServers));
  return iceServers.filter(function(server) {
    if (server && (server.urls || server.url)) {
      var urls = server.urls || server.url;
      if (server.url && !server.urls) {
        console.warn('RTCIceServer.url is deprecated! Use urls instead.');
      }
      var isString = typeof urls === 'string';
      if (isString) {
        urls = [urls];
      }
      urls = urls.filter(function(url) {
        var validTurn = url.indexOf('turn:') === 0 &&
            url.indexOf('transport=udp') !== -1 &&
            url.indexOf('turn:[') === -1 &&
            !hasTurn;

        if (validTurn) {
          hasTurn = true;
          return true;
        }
        return url.indexOf('stun:') === 0 && edgeVersion >= 14393 &&
            url.indexOf('?transport=udp') === -1;
      });

      delete server.url;
      server.urls = isString ? urls[0] : urls;
      return !!urls.length;
    }
  });
}

// Determines the intersection of local and remote capabilities.
function getCommonCapabilities(localCapabilities, remoteCapabilities) {
  var commonCapabilities = {
    codecs: [],
    headerExtensions: [],
    fecMechanisms: []
  };

  var findCodecByPayloadType = function(pt, codecs) {
    pt = parseInt(pt, 10);
    for (var i = 0; i < codecs.length; i++) {
      if (codecs[i].payloadType === pt ||
          codecs[i].preferredPayloadType === pt) {
        return codecs[i];
      }
    }
  };

  var rtxCapabilityMatches = function(lRtx, rRtx, lCodecs, rCodecs) {
    var lCodec = findCodecByPayloadType(lRtx.parameters.apt, lCodecs);
    var rCodec = findCodecByPayloadType(rRtx.parameters.apt, rCodecs);
    return lCodec && rCodec &&
        lCodec.name.toLowerCase() === rCodec.name.toLowerCase();
  };

  localCapabilities.codecs.forEach(function(lCodec) {
    for (var i = 0; i < remoteCapabilities.codecs.length; i++) {
      var rCodec = remoteCapabilities.codecs[i];
      if (lCodec.name.toLowerCase() === rCodec.name.toLowerCase() &&
          lCodec.clockRate === rCodec.clockRate) {
        if (lCodec.name.toLowerCase() === 'rtx' &&
            lCodec.parameters && rCodec.parameters.apt) {
          // for RTX we need to find the local rtx that has a apt
          // which points to the same local codec as the remote one.
          if (!rtxCapabilityMatches(lCodec, rCodec,
              localCapabilities.codecs, remoteCapabilities.codecs)) {
            continue;
          }
        }
        rCodec = JSON.parse(JSON.stringify(rCodec)); // deepcopy
        // number of channels is the highest common number of channels
        rCodec.numChannels = Math.min(lCodec.numChannels,
            rCodec.numChannels);
        // push rCodec so we reply with offerer payload type
        commonCapabilities.codecs.push(rCodec);

        // determine common feedback mechanisms
        rCodec.rtcpFeedback = rCodec.rtcpFeedback.filter(function(fb) {
          for (var j = 0; j < lCodec.rtcpFeedback.length; j++) {
            if (lCodec.rtcpFeedback[j].type === fb.type &&
                lCodec.rtcpFeedback[j].parameter === fb.parameter) {
              return true;
            }
          }
          return false;
        });
        // FIXME: also need to determine .parameters
        //  see https://github.com/openpeer/ortc/issues/569
        break;
      }
    }
  });

  localCapabilities.headerExtensions.forEach(function(lHeaderExtension) {
    for (var i = 0; i < remoteCapabilities.headerExtensions.length;
         i++) {
      var rHeaderExtension = remoteCapabilities.headerExtensions[i];
      if (lHeaderExtension.uri === rHeaderExtension.uri) {
        commonCapabilities.headerExtensions.push(rHeaderExtension);
        break;
      }
    }
  });

  // FIXME: fecMechanisms
  return commonCapabilities;
}

// is action=setLocalDescription with type allowed in signalingState
function isActionAllowedInSignalingState(action, type, signalingState) {
  return {
    offer: {
      setLocalDescription: ['stable', 'have-local-offer'],
      setRemoteDescription: ['stable', 'have-remote-offer']
    },
    answer: {
      setLocalDescription: ['have-remote-offer', 'have-local-pranswer'],
      setRemoteDescription: ['have-local-offer', 'have-remote-pranswer']
    }
  }[type][action].indexOf(signalingState) !== -1;
}

function maybeAddCandidate(iceTransport, candidate) {
  // Edge's internal representation adds some fields therefore
  // not all fieldѕ are taken into account.
  var alreadyAdded = iceTransport.getRemoteCandidates()
      .find(function(remoteCandidate) {
        return candidate.foundation === remoteCandidate.foundation &&
            candidate.ip === remoteCandidate.ip &&
            candidate.port === remoteCandidate.port &&
            candidate.priority === remoteCandidate.priority &&
            candidate.protocol === remoteCandidate.protocol &&
            candidate.type === remoteCandidate.type;
      });
  if (!alreadyAdded) {
    iceTransport.addRemoteCandidate(candidate);
  }
  return !alreadyAdded;
}


function makeError(name, description) {
  var e = new Error(description);
  e.name = name;
  // legacy error codes from https://heycam.github.io/webidl/#idl-DOMException-error-names
  e.code = {
    NotSupportedError: 9,
    InvalidStateError: 11,
    InvalidAccessError: 15,
    TypeError: undefined,
    OperationError: undefined
  }[name];
  return e;
}

module.exports = function(window, edgeVersion) {
  // https://w3c.github.io/mediacapture-main/#mediastream
  // Helper function to add the track to the stream and
  // dispatch the event ourselves.
  function addTrackToStreamAndFireEvent(track, stream) {
    stream.addTrack(track);
    stream.dispatchEvent(new window.MediaStreamTrackEvent('addtrack',
        {track: track}));
  }

  function removeTrackFromStreamAndFireEvent(track, stream) {
    stream.removeTrack(track);
    stream.dispatchEvent(new window.MediaStreamTrackEvent('removetrack',
        {track: track}));
  }

  function fireAddTrack(pc, track, receiver, streams) {
    var trackEvent = new Event('track');
    trackEvent.track = track;
    trackEvent.receiver = receiver;
    trackEvent.transceiver = {receiver: receiver};
    trackEvent.streams = streams;
    window.setTimeout(function() {
      pc._dispatchEvent('track', trackEvent);
    });
  }

  var RTCPeerConnection = function(config) {
    var pc = this;

    var _eventTarget = document.createDocumentFragment();
    ['addEventListener', 'removeEventListener', 'dispatchEvent']
        .forEach(function(method) {
          pc[method] = _eventTarget[method].bind(_eventTarget);
        });

    this.canTrickleIceCandidates = null;

    this.needNegotiation = false;

    this.localStreams = [];
    this.remoteStreams = [];

    this._localDescription = null;
    this._remoteDescription = null;

    this.signalingState = 'stable';
    this.iceConnectionState = 'new';
    this.connectionState = 'new';
    this.iceGatheringState = 'new';

    config = JSON.parse(JSON.stringify(config || {}));

    this.usingBundle = config.bundlePolicy === 'max-bundle';
    if (config.rtcpMuxPolicy === 'negotiate') {
      throw(makeError('NotSupportedError',
          'rtcpMuxPolicy \'negotiate\' is not supported'));
    } else if (!config.rtcpMuxPolicy) {
      config.rtcpMuxPolicy = 'require';
    }

    switch (config.iceTransportPolicy) {
      case 'all':
      case 'relay':
        break;
      default:
        config.iceTransportPolicy = 'all';
        break;
    }

    switch (config.bundlePolicy) {
      case 'balanced':
      case 'max-compat':
      case 'max-bundle':
        break;
      default:
        config.bundlePolicy = 'balanced';
        break;
    }

    config.iceServers = filterIceServers(config.iceServers || [], edgeVersion);

    this._iceGatherers = [];
    if (config.iceCandidatePoolSize) {
      for (var i = config.iceCandidatePoolSize; i > 0; i--) {
        this._iceGatherers.push(new window.RTCIceGatherer({
          iceServers: config.iceServers,
          gatherPolicy: config.iceTransportPolicy
        }));
      }
    } else {
      config.iceCandidatePoolSize = 0;
    }

    this._config = config;

    // per-track iceGathers, iceTransports, dtlsTransports, rtpSenders, ...
    // everything that is needed to describe a SDP m-line.
    this.transceivers = [];

    this._sdpSessionId = SDPUtils.generateSessionId();
    this._sdpSessionVersion = 0;

    this._dtlsRole = undefined; // role for a=setup to use in answers.

    this._isClosed = false;
  };

  Object.defineProperty(RTCPeerConnection.prototype, 'localDescription', {
    configurable: true,
    get: function() {
      return this._localDescription;
    }
  });
  Object.defineProperty(RTCPeerConnection.prototype, 'remoteDescription', {
    configurable: true,
    get: function() {
      return this._remoteDescription;
    }
  });

  // set up event handlers on prototype
  RTCPeerConnection.prototype.onicecandidate = null;
  RTCPeerConnection.prototype.onaddstream = null;
  RTCPeerConnection.prototype.ontrack = null;
  RTCPeerConnection.prototype.onremovestream = null;
  RTCPeerConnection.prototype.onsignalingstatechange = null;
  RTCPeerConnection.prototype.oniceconnectionstatechange = null;
  RTCPeerConnection.prototype.onconnectionstatechange = null;
  RTCPeerConnection.prototype.onicegatheringstatechange = null;
  RTCPeerConnection.prototype.onnegotiationneeded = null;
  RTCPeerConnection.prototype.ondatachannel = null;

  RTCPeerConnection.prototype._dispatchEvent = function(name, event) {
    if (this._isClosed) {
      return;
    }
    this.dispatchEvent(event);
    if (typeof this['on' + name] === 'function') {
      this['on' + name](event);
    }
  };

  RTCPeerConnection.prototype._emitGatheringStateChange = function() {
    var event = new Event('icegatheringstatechange');
    this._dispatchEvent('icegatheringstatechange', event);
  };

  RTCPeerConnection.prototype.getConfiguration = function() {
    return this._config;
  };

  RTCPeerConnection.prototype.getLocalStreams = function() {
    return this.localStreams;
  };

  RTCPeerConnection.prototype.getRemoteStreams = function() {
    return this.remoteStreams;
  };

  // internal helper to create a transceiver object.
  // (which is not yet the same as the WebRTC 1.0 transceiver)
  RTCPeerConnection.prototype._createTransceiver = function(kind, doNotAdd) {
    var hasBundleTransport = this.transceivers.length > 0;
    var transceiver = {
      track: null,
      iceGatherer: null,
      iceTransport: null,
      dtlsTransport: null,
      localCapabilities: null,
      remoteCapabilities: null,
      rtpSender: null,
      rtpReceiver: null,
      kind: kind,
      mid: null,
      sendEncodingParameters: null,
      recvEncodingParameters: null,
      stream: null,
      associatedRemoteMediaStreams: [],
      wantReceive: true
    };
    if (this.usingBundle && hasBundleTransport) {
      transceiver.iceTransport = this.transceivers[0].iceTransport;
      transceiver.dtlsTransport = this.transceivers[0].dtlsTransport;
    } else {
      var transports = this._createIceAndDtlsTransports();
      transceiver.iceTransport = transports.iceTransport;
      transceiver.dtlsTransport = transports.dtlsTransport;
    }
    if (!doNotAdd) {
      this.transceivers.push(transceiver);
    }
    return transceiver;
  };

  RTCPeerConnection.prototype.addTrack = function(track, stream) {
    if (this._isClosed) {
      throw makeError('InvalidStateError',
          'Attempted to call addTrack on a closed peerconnection.');
    }

    var alreadyExists = this.transceivers.find(function(s) {
      return s.track === track;
    });

    if (alreadyExists) {
      throw makeError('InvalidAccessError', 'Track already exists.');
    }

    var transceiver;
    for (var i = 0; i < this.transceivers.length; i++) {
      if (!this.transceivers[i].track &&
          this.transceivers[i].kind === track.kind) {
        transceiver = this.transceivers[i];
      }
    }
    if (!transceiver) {
      transceiver = this._createTransceiver(track.kind);
    }

    this._maybeFireNegotiationNeeded();

    if (this.localStreams.indexOf(stream) === -1) {
      this.localStreams.push(stream);
    }

    transceiver.track = track;
    transceiver.stream = stream;
    transceiver.rtpSender = new window.RTCRtpSender(track,
        transceiver.dtlsTransport);
    return transceiver.rtpSender;
  };

  RTCPeerConnection.prototype.addStream = function(stream) {
    var pc = this;
    if (edgeVersion >= 15025) {
      stream.getTracks().forEach(function(track) {
        pc.addTrack(track, stream);
      });
    } else {
      // Clone is necessary for local demos mostly, attaching directly
      // to two different senders does not work (build 10547).
      // Fixed in 15025 (or earlier)
      var clonedStream = stream.clone();
      stream.getTracks().forEach(function(track, idx) {
        var clonedTrack = clonedStream.getTracks()[idx];
        track.addEventListener('enabled', function(event) {
          clonedTrack.enabled = event.enabled;
        });
      });
      clonedStream.getTracks().forEach(function(track) {
        pc.addTrack(track, clonedStream);
      });
    }
  };

  RTCPeerConnection.prototype.removeTrack = function(sender) {
    if (this._isClosed) {
      throw makeError('InvalidStateError',
          'Attempted to call removeTrack on a closed peerconnection.');
    }

    if (!(sender instanceof window.RTCRtpSender)) {
      throw new TypeError('Argument 1 of RTCPeerConnection.removeTrack ' +
          'does not implement interface RTCRtpSender.');
    }

    var transceiver = this.transceivers.find(function(t) {
      return t.rtpSender === sender;
    });

    if (!transceiver) {
      throw makeError('InvalidAccessError',
          'Sender was not created by this connection.');
    }
    var stream = transceiver.stream;

    transceiver.rtpSender.stop();
    transceiver.rtpSender = null;
    transceiver.track = null;
    transceiver.stream = null;

    // remove the stream from the set of local streams
    var localStreams = this.transceivers.map(function(t) {
      return t.stream;
    });
    if (localStreams.indexOf(stream) === -1 &&
        this.localStreams.indexOf(stream) > -1) {
      this.localStreams.splice(this.localStreams.indexOf(stream), 1);
    }

    this._maybeFireNegotiationNeeded();
  };

  RTCPeerConnection.prototype.removeStream = function(stream) {
    var pc = this;
    stream.getTracks().forEach(function(track) {
      var sender = pc.getSenders().find(function(s) {
        return s.track === track;
      });
      if (sender) {
        pc.removeTrack(sender);
      }
    });
  };

  RTCPeerConnection.prototype.getSenders = function() {
    return this.transceivers.filter(function(transceiver) {
      return !!transceiver.rtpSender;
    })
    .map(function(transceiver) {
      return transceiver.rtpSender;
    });
  };

  RTCPeerConnection.prototype.getReceivers = function() {
    return this.transceivers.filter(function(transceiver) {
      return !!transceiver.rtpReceiver;
    })
    .map(function(transceiver) {
      return transceiver.rtpReceiver;
    });
  };


  RTCPeerConnection.prototype._createIceGatherer = function(sdpMLineIndex,
      usingBundle) {
    var pc = this;
    if (usingBundle && sdpMLineIndex > 0) {
      return this.transceivers[0].iceGatherer;
    } else if (this._iceGatherers.length) {
      return this._iceGatherers.shift();
    }
    var iceGatherer = new window.RTCIceGatherer({
      iceServers: this._config.iceServers,
      gatherPolicy: this._config.iceTransportPolicy
    });
    Object.defineProperty(iceGatherer, 'state',
        {value: 'new', writable: true}
    );

    this.transceivers[sdpMLineIndex].bufferedCandidateEvents = [];
    this.transceivers[sdpMLineIndex].bufferCandidates = function(event) {
      var end = !event.candidate || Object.keys(event.candidate).length === 0;
      // polyfill since RTCIceGatherer.state is not implemented in
      // Edge 10547 yet.
      iceGatherer.state = end ? 'completed' : 'gathering';
      if (pc.transceivers[sdpMLineIndex].bufferedCandidateEvents !== null) {
        pc.transceivers[sdpMLineIndex].bufferedCandidateEvents.push(event);
      }
    };
    iceGatherer.addEventListener('localcandidate',
      this.transceivers[sdpMLineIndex].bufferCandidates);
    return iceGatherer;
  };

  // start gathering from an RTCIceGatherer.
  RTCPeerConnection.prototype._gather = function(mid, sdpMLineIndex) {
    var pc = this;
    var iceGatherer = this.transceivers[sdpMLineIndex].iceGatherer;
    if (iceGatherer.onlocalcandidate) {
      return;
    }
    var bufferedCandidateEvents =
      this.transceivers[sdpMLineIndex].bufferedCandidateEvents;
    this.transceivers[sdpMLineIndex].bufferedCandidateEvents = null;
    iceGatherer.removeEventListener('localcandidate',
      this.transceivers[sdpMLineIndex].bufferCandidates);
    iceGatherer.onlocalcandidate = function(evt) {
      if (pc.usingBundle && sdpMLineIndex > 0) {
        // if we know that we use bundle we can drop candidates with
        // ѕdpMLineIndex > 0. If we don't do this then our state gets
        // confused since we dispose the extra ice gatherer.
        return;
      }
      var event = new Event('icecandidate');
      event.candidate = {sdpMid: mid, sdpMLineIndex: sdpMLineIndex};

      var cand = evt.candidate;
      // Edge emits an empty object for RTCIceCandidateComplete‥
      var end = !cand || Object.keys(cand).length === 0;
      if (end) {
        // polyfill since RTCIceGatherer.state is not implemented in
        // Edge 10547 yet.
        if (iceGatherer.state === 'new' || iceGatherer.state === 'gathering') {
          iceGatherer.state = 'completed';
        }
      } else {
        if (iceGatherer.state === 'new') {
          iceGatherer.state = 'gathering';
        }
        // RTCIceCandidate doesn't have a component, needs to be added
        cand.component = 1;
        // also the usernameFragment. TODO: update SDP to take both variants.
        cand.ufrag = iceGatherer.getLocalParameters().usernameFragment;

        var serializedCandidate = SDPUtils.writeCandidate(cand);
        event.candidate = Object.assign(event.candidate,
            SDPUtils.parseCandidate(serializedCandidate));

        event.candidate.candidate = serializedCandidate;
        event.candidate.toJSON = function() {
          return {
            candidate: event.candidate.candidate,
            sdpMid: event.candidate.sdpMid,
            sdpMLineIndex: event.candidate.sdpMLineIndex,
            usernameFragment: event.candidate.usernameFragment
          };
        };
      }

      // update local description.
      var sections = SDPUtils.getMediaSections(pc._localDescription.sdp);
      if (!end) {
        sections[event.candidate.sdpMLineIndex] +=
            'a=' + event.candidate.candidate + '\r\n';
      } else {
        sections[event.candidate.sdpMLineIndex] +=
            'a=end-of-candidates\r\n';
      }
      pc._localDescription.sdp =
          SDPUtils.getDescription(pc._localDescription.sdp) +
          sections.join('');
      var complete = pc.transceivers.every(function(transceiver) {
        return transceiver.iceGatherer &&
            transceiver.iceGatherer.state === 'completed';
      });

      if (pc.iceGatheringState !== 'gathering') {
        pc.iceGatheringState = 'gathering';
        pc._emitGatheringStateChange();
      }

      // Emit candidate. Also emit null candidate when all gatherers are
      // complete.
      if (!end) {
        pc._dispatchEvent('icecandidate', event);
      }
      if (complete) {
        pc._dispatchEvent('icecandidate', new Event('icecandidate'));
        pc.iceGatheringState = 'complete';
        pc._emitGatheringStateChange();
      }
    };

    // emit already gathered candidates.
    window.setTimeout(function() {
      bufferedCandidateEvents.forEach(function(e) {
        iceGatherer.onlocalcandidate(e);
      });
    }, 0);
  };

  // Create ICE transport and DTLS transport.
  RTCPeerConnection.prototype._createIceAndDtlsTransports = function() {
    var pc = this;
    var iceTransport = new window.RTCIceTransport(null);
    iceTransport.onicestatechange = function() {
      pc._updateIceConnectionState();
      pc._updateConnectionState();
    };

    var dtlsTransport = new window.RTCDtlsTransport(iceTransport);
    dtlsTransport.ondtlsstatechange = function() {
      pc._updateConnectionState();
    };
    dtlsTransport.onerror = function() {
      // onerror does not set state to failed by itself.
      Object.defineProperty(dtlsTransport, 'state',
          {value: 'failed', writable: true});
      pc._updateConnectionState();
    };

    return {
      iceTransport: iceTransport,
      dtlsTransport: dtlsTransport
    };
  };

  // Destroy ICE gatherer, ICE transport and DTLS transport.
  // Without triggering the callbacks.
  RTCPeerConnection.prototype._disposeIceAndDtlsTransports = function(
      sdpMLineIndex) {
    var iceGatherer = this.transceivers[sdpMLineIndex].iceGatherer;
    if (iceGatherer) {
      delete iceGatherer.onlocalcandidate;
      delete this.transceivers[sdpMLineIndex].iceGatherer;
    }
    var iceTransport = this.transceivers[sdpMLineIndex].iceTransport;
    if (iceTransport) {
      delete iceTransport.onicestatechange;
      delete this.transceivers[sdpMLineIndex].iceTransport;
    }
    var dtlsTransport = this.transceivers[sdpMLineIndex].dtlsTransport;
    if (dtlsTransport) {
      delete dtlsTransport.ondtlsstatechange;
      delete dtlsTransport.onerror;
      delete this.transceivers[sdpMLineIndex].dtlsTransport;
    }
  };

  // Start the RTP Sender and Receiver for a transceiver.
  RTCPeerConnection.prototype._transceive = function(transceiver,
      send, recv) {
    var params = getCommonCapabilities(transceiver.localCapabilities,
        transceiver.remoteCapabilities);
    if (send && transceiver.rtpSender) {
      params.encodings = transceiver.sendEncodingParameters;
      params.rtcp = {
        cname: SDPUtils.localCName,
        compound: transceiver.rtcpParameters.compound
      };
      if (transceiver.recvEncodingParameters.length) {
        params.rtcp.ssrc = transceiver.recvEncodingParameters[0].ssrc;
      }
      transceiver.rtpSender.send(params);
    }
    if (recv && transceiver.rtpReceiver && params.codecs.length > 0) {
      // remove RTX field in Edge 14942
      if (transceiver.kind === 'video'
          && transceiver.recvEncodingParameters
          && edgeVersion < 15019) {
        transceiver.recvEncodingParameters.forEach(function(p) {
          delete p.rtx;
        });
      }
      if (transceiver.recvEncodingParameters.length) {
        params.encodings = transceiver.recvEncodingParameters;
      } else {
        params.encodings = [{}];
      }
      params.rtcp = {
        compound: transceiver.rtcpParameters.compound
      };
      if (transceiver.rtcpParameters.cname) {
        params.rtcp.cname = transceiver.rtcpParameters.cname;
      }
      if (transceiver.sendEncodingParameters.length) {
        params.rtcp.ssrc = transceiver.sendEncodingParameters[0].ssrc;
      }
      transceiver.rtpReceiver.receive(params);
    }
  };

  RTCPeerConnection.prototype.setLocalDescription = function(description) {
    var pc = this;

    // Note: pranswer is not supported.
    if (['offer', 'answer'].indexOf(description.type) === -1) {
      return Promise.reject(makeError('TypeError',
          'Unsupported type "' + description.type + '"'));
    }

    if (!isActionAllowedInSignalingState('setLocalDescription',
        description.type, pc.signalingState) || pc._isClosed) {
      return Promise.reject(makeError('InvalidStateError',
          'Can not set local ' + description.type +
          ' in state ' + pc.signalingState));
    }

    var sections;
    var sessionpart;
    if (description.type === 'offer') {
      // VERY limited support for SDP munging. Limited to:
      // * changing the order of codecs
      sections = SDPUtils.splitSections(description.sdp);
      sessionpart = sections.shift();
      sections.forEach(function(mediaSection, sdpMLineIndex) {
        var caps = SDPUtils.parseRtpParameters(mediaSection);
        pc.transceivers[sdpMLineIndex].localCapabilities = caps;
      });

      pc.transceivers.forEach(function(transceiver, sdpMLineIndex) {
        pc._gather(transceiver.mid, sdpMLineIndex);
      });
    } else if (description.type === 'answer') {
      sections = SDPUtils.splitSections(pc._remoteDescription.sdp);
      sessionpart = sections.shift();
      var isIceLite = SDPUtils.matchPrefix(sessionpart,
          'a=ice-lite').length > 0;
      sections.forEach(function(mediaSection, sdpMLineIndex) {
        var transceiver = pc.transceivers[sdpMLineIndex];
        var iceGatherer = transceiver.iceGatherer;
        var iceTransport = transceiver.iceTransport;
        var dtlsTransport = transceiver.dtlsTransport;
        var localCapabilities = transceiver.localCapabilities;
        var remoteCapabilities = transceiver.remoteCapabilities;

        // treat bundle-only as not-rejected.
        var rejected = SDPUtils.isRejected(mediaSection) &&
            SDPUtils.matchPrefix(mediaSection, 'a=bundle-only').length === 0;

        if (!rejected && !transceiver.rejected) {
          var remoteIceParameters = SDPUtils.getIceParameters(
              mediaSection, sessionpart);
          var remoteDtlsParameters = SDPUtils.getDtlsParameters(
              mediaSection, sessionpart);
          if (isIceLite) {
            remoteDtlsParameters.role = 'server';
          }

          if (!pc.usingBundle || sdpMLineIndex === 0) {
            pc._gather(transceiver.mid, sdpMLineIndex);
            if (iceTransport.state === 'new') {
              iceTransport.start(iceGatherer, remoteIceParameters,
                  isIceLite ? 'controlling' : 'controlled');
            }
            if (dtlsTransport.state === 'new') {
              dtlsTransport.start(remoteDtlsParameters);
            }
          }

          // Calculate intersection of capabilities.
          var params = getCommonCapabilities(localCapabilities,
              remoteCapabilities);

          // Start the RTCRtpSender. The RTCRtpReceiver for this
          // transceiver has already been started in setRemoteDescription.
          pc._transceive(transceiver,
              params.codecs.length > 0,
              false);
        }
      });
    }

    pc._localDescription = {
      type: description.type,
      sdp: description.sdp
    };
    if (description.type === 'offer') {
      pc._updateSignalingState('have-local-offer');
    } else {
      pc._updateSignalingState('stable');
    }

    return Promise.resolve();
  };

  RTCPeerConnection.prototype.setRemoteDescription = function(description) {
    var pc = this;

    // Note: pranswer is not supported.
    if (['offer', 'answer'].indexOf(description.type) === -1) {
      return Promise.reject(makeError('TypeError',
          'Unsupported type "' + description.type + '"'));
    }

    if (!isActionAllowedInSignalingState('setRemoteDescription',
        description.type, pc.signalingState) || pc._isClosed) {
      return Promise.reject(makeError('InvalidStateError',
          'Can not set remote ' + description.type +
          ' in state ' + pc.signalingState));
    }

    var streams = {};
    pc.remoteStreams.forEach(function(stream) {
      streams[stream.id] = stream;
    });
    var receiverList = [];
    var sections = SDPUtils.splitSections(description.sdp);
    var sessionpart = sections.shift();
    var isIceLite = SDPUtils.matchPrefix(sessionpart,
        'a=ice-lite').length > 0;
    var usingBundle = SDPUtils.matchPrefix(sessionpart,
        'a=group:BUNDLE ').length > 0;
    pc.usingBundle = usingBundle;
    var iceOptions = SDPUtils.matchPrefix(sessionpart,
        'a=ice-options:')[0];
    if (iceOptions) {
      pc.canTrickleIceCandidates = iceOptions.substr(14).split(' ')
          .indexOf('trickle') >= 0;
    } else {
      pc.canTrickleIceCandidates = false;
    }

    sections.forEach(function(mediaSection, sdpMLineIndex) {
      var lines = SDPUtils.splitLines(mediaSection);
      var kind = SDPUtils.getKind(mediaSection);
      // treat bundle-only as not-rejected.
      var rejected = SDPUtils.isRejected(mediaSection) &&
          SDPUtils.matchPrefix(mediaSection, 'a=bundle-only').length === 0;
      var protocol = lines[0].substr(2).split(' ')[2];

      var direction = SDPUtils.getDirection(mediaSection, sessionpart);
      var remoteMsid = SDPUtils.parseMsid(mediaSection);

      var mid = SDPUtils.getMid(mediaSection) || SDPUtils.generateIdentifier();

      // Reject datachannels which are not implemented yet.
      if (rejected || (kind === 'application' && (protocol === 'DTLS/SCTP' ||
          protocol === 'UDP/DTLS/SCTP'))) {
        // TODO: this is dangerous in the case where a non-rejected m-line
        //     becomes rejected.
        pc.transceivers[sdpMLineIndex] = {
          mid: mid,
          kind: kind,
          protocol: protocol,
          rejected: true
        };
        return;
      }

      if (!rejected && pc.transceivers[sdpMLineIndex] &&
          pc.transceivers[sdpMLineIndex].rejected) {
        // recycle a rejected transceiver.
        pc.transceivers[sdpMLineIndex] = pc._createTransceiver(kind, true);
      }

      var transceiver;
      var iceGatherer;
      var iceTransport;
      var dtlsTransport;
      var rtpReceiver;
      var sendEncodingParameters;
      var recvEncodingParameters;
      var localCapabilities;

      var track;
      // FIXME: ensure the mediaSection has rtcp-mux set.
      var remoteCapabilities = SDPUtils.parseRtpParameters(mediaSection);
      var remoteIceParameters;
      var remoteDtlsParameters;
      if (!rejected) {
        remoteIceParameters = SDPUtils.getIceParameters(mediaSection,
            sessionpart);
        remoteDtlsParameters = SDPUtils.getDtlsParameters(mediaSection,
            sessionpart);
        remoteDtlsParameters.role = 'client';
      }
      recvEncodingParameters =
          SDPUtils.parseRtpEncodingParameters(mediaSection);

      var rtcpParameters = SDPUtils.parseRtcpParameters(mediaSection);

      var isComplete = SDPUtils.matchPrefix(mediaSection,
          'a=end-of-candidates', sessionpart).length > 0;
      var cands = SDPUtils.matchPrefix(mediaSection, 'a=candidate:')
          .map(function(cand) {
            return SDPUtils.parseCandidate(cand);
          })
          .filter(function(cand) {
            return cand.component === 1;
          });

      // Check if we can use BUNDLE and dispose transports.
      if ((description.type === 'offer' || description.type === 'answer') &&
          !rejected && usingBundle && sdpMLineIndex > 0 &&
          pc.transceivers[sdpMLineIndex]) {
        pc._disposeIceAndDtlsTransports(sdpMLineIndex);
        pc.transceivers[sdpMLineIndex].iceGatherer =
            pc.transceivers[0].iceGatherer;
        pc.transceivers[sdpMLineIndex].iceTransport =
            pc.transceivers[0].iceTransport;
        pc.transceivers[sdpMLineIndex].dtlsTransport =
            pc.transceivers[0].dtlsTransport;
        if (pc.transceivers[sdpMLineIndex].rtpSender) {
          pc.transceivers[sdpMLineIndex].rtpSender.setTransport(
              pc.transceivers[0].dtlsTransport);
        }
        if (pc.transceivers[sdpMLineIndex].rtpReceiver) {
          pc.transceivers[sdpMLineIndex].rtpReceiver.setTransport(
              pc.transceivers[0].dtlsTransport);
        }
      }
      if (description.type === 'offer' && !rejected) {
        transceiver = pc.transceivers[sdpMLineIndex] ||
            pc._createTransceiver(kind);
        transceiver.mid = mid;

        if (!transceiver.iceGatherer) {
          transceiver.iceGatherer = pc._createIceGatherer(sdpMLineIndex,
              usingBundle);
        }

        if (cands.length && transceiver.iceTransport.state === 'new') {
          if (isComplete && (!usingBundle || sdpMLineIndex === 0)) {
            transceiver.iceTransport.setRemoteCandidates(cands);
          } else {
            cands.forEach(function(candidate) {
              maybeAddCandidate(transceiver.iceTransport, candidate);
            });
          }
        }

        localCapabilities = window.RTCRtpReceiver.getCapabilities(kind);

        // filter RTX until additional stuff needed for RTX is implemented
        // in adapter.js
        if (edgeVersion < 15019) {
          localCapabilities.codecs = localCapabilities.codecs.filter(
              function(codec) {
                return codec.name !== 'rtx';
              });
        }

        sendEncodingParameters = transceiver.sendEncodingParameters || [{
          ssrc: (2 * sdpMLineIndex + 2) * 1001
        }];

        // TODO: rewrite to use http://w3c.github.io/webrtc-pc/#set-associated-remote-streams
        var isNewTrack = false;
        if (direction === 'sendrecv' || direction === 'sendonly') {
          isNewTrack = !transceiver.rtpReceiver;
          rtpReceiver = transceiver.rtpReceiver ||
              new window.RTCRtpReceiver(transceiver.dtlsTransport, kind);

          if (isNewTrack) {
            var stream;
            track = rtpReceiver.track;
            // FIXME: does not work with Plan B.
            if (remoteMsid && remoteMsid.stream === '-') {
              // no-op. a stream id of '-' means: no associated stream.
            } else if (remoteMsid) {
              if (!streams[remoteMsid.stream]) {
                streams[remoteMsid.stream] = new window.MediaStream();
                Object.defineProperty(streams[remoteMsid.stream], 'id', {
                  get: function() {
                    return remoteMsid.stream;
                  }
                });
              }
              Object.defineProperty(track, 'id', {
                get: function() {
                  return remoteMsid.track;
                }
              });
              stream = streams[remoteMsid.stream];
            } else {
              if (!streams.default) {
                streams.default = new window.MediaStream();
              }
              stream = streams.default;
            }
            if (stream) {
              addTrackToStreamAndFireEvent(track, stream);
              transceiver.associatedRemoteMediaStreams.push(stream);
            }
            receiverList.push([track, rtpReceiver, stream]);
          }
        } else if (transceiver.rtpReceiver && transceiver.rtpReceiver.track) {
          transceiver.associatedRemoteMediaStreams.forEach(function(s) {
            var nativeTrack = s.getTracks().find(function(t) {
              return t.id === transceiver.rtpReceiver.track.id;
            });
            if (nativeTrack) {
              removeTrackFromStreamAndFireEvent(nativeTrack, s);
            }
          });
          transceiver.associatedRemoteMediaStreams = [];
        }

        transceiver.localCapabilities = localCapabilities;
        transceiver.remoteCapabilities = remoteCapabilities;
        transceiver.rtpReceiver = rtpReceiver;
        transceiver.rtcpParameters = rtcpParameters;
        transceiver.sendEncodingParameters = sendEncodingParameters;
        transceiver.recvEncodingParameters = recvEncodingParameters;

        // Start the RTCRtpReceiver now. The RTPSender is started in
        // setLocalDescription.
        pc._transceive(pc.transceivers[sdpMLineIndex],
            false,
            isNewTrack);
      } else if (description.type === 'answer' && !rejected) {
        transceiver = pc.transceivers[sdpMLineIndex];
        iceGatherer = transceiver.iceGatherer;
        iceTransport = transceiver.iceTransport;
        dtlsTransport = transceiver.dtlsTransport;
        rtpReceiver = transceiver.rtpReceiver;
        sendEncodingParameters = transceiver.sendEncodingParameters;
        localCapabilities = transceiver.localCapabilities;

        pc.transceivers[sdpMLineIndex].recvEncodingParameters =
            recvEncodingParameters;
        pc.transceivers[sdpMLineIndex].remoteCapabilities =
            remoteCapabilities;
        pc.transceivers[sdpMLineIndex].rtcpParameters = rtcpParameters;

        if (cands.length && iceTransport.state === 'new') {
          if ((isIceLite || isComplete) &&
              (!usingBundle || sdpMLineIndex === 0)) {
            iceTransport.setRemoteCandidates(cands);
          } else {
            cands.forEach(function(candidate) {
              maybeAddCandidate(transceiver.iceTransport, candidate);
            });
          }
        }

        if (!usingBundle || sdpMLineIndex === 0) {
          if (iceTransport.state === 'new') {
            iceTransport.start(iceGatherer, remoteIceParameters,
                'controlling');
          }
          if (dtlsTransport.state === 'new') {
            dtlsTransport.start(remoteDtlsParameters);
          }
        }

        // If the offer contained RTX but the answer did not,
        // remove RTX from sendEncodingParameters.
        var commonCapabilities = getCommonCapabilities(
          transceiver.localCapabilities,
          transceiver.remoteCapabilities);

        var hasRtx = commonCapabilities.codecs.filter(function(c) {
          return c.name.toLowerCase() === 'rtx';
        }).length;
        if (!hasRtx && transceiver.sendEncodingParameters[0].rtx) {
          delete transceiver.sendEncodingParameters[0].rtx;
        }

        pc._transceive(transceiver,
            direction === 'sendrecv' || direction === 'recvonly',
            direction === 'sendrecv' || direction === 'sendonly');

        // TODO: rewrite to use http://w3c.github.io/webrtc-pc/#set-associated-remote-streams
        if (rtpReceiver &&
            (direction === 'sendrecv' || direction === 'sendonly')) {
          track = rtpReceiver.track;
          if (remoteMsid) {
            if (!streams[remoteMsid.stream]) {
              streams[remoteMsid.stream] = new window.MediaStream();
            }
            addTrackToStreamAndFireEvent(track, streams[remoteMsid.stream]);
            receiverList.push([track, rtpReceiver, streams[remoteMsid.stream]]);
          } else {
            if (!streams.default) {
              streams.default = new window.MediaStream();
            }
            addTrackToStreamAndFireEvent(track, streams.default);
            receiverList.push([track, rtpReceiver, streams.default]);
          }
        } else {
          // FIXME: actually the receiver should be created later.
          delete transceiver.rtpReceiver;
        }
      }
    });

    if (pc._dtlsRole === undefined) {
      pc._dtlsRole = description.type === 'offer' ? 'active' : 'passive';
    }

    pc._remoteDescription = {
      type: description.type,
      sdp: description.sdp
    };
    if (description.type === 'offer') {
      pc._updateSignalingState('have-remote-offer');
    } else {
      pc._updateSignalingState('stable');
    }
    Object.keys(streams).forEach(function(sid) {
      var stream = streams[sid];
      if (stream.getTracks().length) {
        if (pc.remoteStreams.indexOf(stream) === -1) {
          pc.remoteStreams.push(stream);
          var event = new Event('addstream');
          event.stream = stream;
          window.setTimeout(function() {
            pc._dispatchEvent('addstream', event);
          });
        }

        receiverList.forEach(function(item) {
          var track = item[0];
          var receiver = item[1];
          if (stream.id !== item[2].id) {
            return;
          }
          fireAddTrack(pc, track, receiver, [stream]);
        });
      }
    });
    receiverList.forEach(function(item) {
      if (item[2]) {
        return;
      }
      fireAddTrack(pc, item[0], item[1], []);
    });

    // check whether addIceCandidate({}) was called within four seconds after
    // setRemoteDescription.
    window.setTimeout(function() {
      if (!(pc && pc.transceivers)) {
        return;
      }
      pc.transceivers.forEach(function(transceiver) {
        if (transceiver.iceTransport &&
            transceiver.iceTransport.state === 'new' &&
            transceiver.iceTransport.getRemoteCandidates().length > 0) {
          console.warn('Timeout for addRemoteCandidate. Consider sending ' +
              'an end-of-candidates notification');
          transceiver.iceTransport.addRemoteCandidate({});
        }
      });
    }, 4000);

    return Promise.resolve();
  };

  RTCPeerConnection.prototype.close = function() {
    this.transceivers.forEach(function(transceiver) {
      /* not yet
      if (transceiver.iceGatherer) {
        transceiver.iceGatherer.close();
      }
      */
      if (transceiver.iceTransport) {
        transceiver.iceTransport.stop();
      }
      if (transceiver.dtlsTransport) {
        transceiver.dtlsTransport.stop();
      }
      if (transceiver.rtpSender) {
        transceiver.rtpSender.stop();
      }
      if (transceiver.rtpReceiver) {
        transceiver.rtpReceiver.stop();
      }
    });
    // FIXME: clean up tracks, local streams, remote streams, etc
    this._isClosed = true;
    this._updateSignalingState('closed');
  };

  // Update the signaling state.
  RTCPeerConnection.prototype._updateSignalingState = function(newState) {
    this.signalingState = newState;
    var event = new Event('signalingstatechange');
    this._dispatchEvent('signalingstatechange', event);
  };

  // Determine whether to fire the negotiationneeded event.
  RTCPeerConnection.prototype._maybeFireNegotiationNeeded = function() {
    var pc = this;
    if (this.signalingState !== 'stable' || this.needNegotiation === true) {
      return;
    }
    this.needNegotiation = true;
    window.setTimeout(function() {
      if (pc.needNegotiation) {
        pc.needNegotiation = false;
        var event = new Event('negotiationneeded');
        pc._dispatchEvent('negotiationneeded', event);
      }
    }, 0);
  };

  // Update the ice connection state.
  RTCPeerConnection.prototype._updateIceConnectionState = function() {
    var newState;
    var states = {
      'new': 0,
      closed: 0,
      checking: 0,
      connected: 0,
      completed: 0,
      disconnected: 0,
      failed: 0
    };
    this.transceivers.forEach(function(transceiver) {
      if (transceiver.iceTransport && !transceiver.rejected) {
        states[transceiver.iceTransport.state]++;
      }
    });

    newState = 'new';
    if (states.failed > 0) {
      newState = 'failed';
    } else if (states.checking > 0) {
      newState = 'checking';
    } else if (states.disconnected > 0) {
      newState = 'disconnected';
    } else if (states.new > 0) {
      newState = 'new';
    } else if (states.connected > 0) {
      newState = 'connected';
    } else if (states.completed > 0) {
      newState = 'completed';
    }

    if (newState !== this.iceConnectionState) {
      this.iceConnectionState = newState;
      var event = new Event('iceconnectionstatechange');
      this._dispatchEvent('iceconnectionstatechange', event);
    }
  };

  // Update the connection state.
  RTCPeerConnection.prototype._updateConnectionState = function() {
    var newState;
    var states = {
      'new': 0,
      closed: 0,
      connecting: 0,
      connected: 0,
      completed: 0,
      disconnected: 0,
      failed: 0
    };
    this.transceivers.forEach(function(transceiver) {
      if (transceiver.iceTransport && transceiver.dtlsTransport &&
          !transceiver.rejected) {
        states[transceiver.iceTransport.state]++;
        states[transceiver.dtlsTransport.state]++;
      }
    });
    // ICETransport.completed and connected are the same for this purpose.
    states.connected += states.completed;

    newState = 'new';
    if (states.failed > 0) {
      newState = 'failed';
    } else if (states.connecting > 0) {
      newState = 'connecting';
    } else if (states.disconnected > 0) {
      newState = 'disconnected';
    } else if (states.new > 0) {
      newState = 'new';
    } else if (states.connected > 0) {
      newState = 'connected';
    }

    if (newState !== this.connectionState) {
      this.connectionState = newState;
      var event = new Event('connectionstatechange');
      this._dispatchEvent('connectionstatechange', event);
    }
  };

  RTCPeerConnection.prototype.createOffer = function() {
    var pc = this;

    if (pc._isClosed) {
      return Promise.reject(makeError('InvalidStateError',
          'Can not call createOffer after close'));
    }

    var numAudioTracks = pc.transceivers.filter(function(t) {
      return t.kind === 'audio';
    }).length;
    var numVideoTracks = pc.transceivers.filter(function(t) {
      return t.kind === 'video';
    }).length;

    // Determine number of audio and video tracks we need to send/recv.
    var offerOptions = arguments[0];
    if (offerOptions) {
      // Reject Chrome legacy constraints.
      if (offerOptions.mandatory || offerOptions.optional) {
        throw new TypeError(
            'Legacy mandatory/optional constraints not supported.');
      }
      if (offerOptions.offerToReceiveAudio !== undefined) {
        if (offerOptions.offerToReceiveAudio === true) {
          numAudioTracks = 1;
        } else if (offerOptions.offerToReceiveAudio === false) {
          numAudioTracks = 0;
        } else {
          numAudioTracks = offerOptions.offerToReceiveAudio;
        }
      }
      if (offerOptions.offerToReceiveVideo !== undefined) {
        if (offerOptions.offerToReceiveVideo === true) {
          numVideoTracks = 1;
        } else if (offerOptions.offerToReceiveVideo === false) {
          numVideoTracks = 0;
        } else {
          numVideoTracks = offerOptions.offerToReceiveVideo;
        }
      }
    }

    pc.transceivers.forEach(function(transceiver) {
      if (transceiver.kind === 'audio') {
        numAudioTracks--;
        if (numAudioTracks < 0) {
          transceiver.wantReceive = false;
        }
      } else if (transceiver.kind === 'video') {
        numVideoTracks--;
        if (numVideoTracks < 0) {
          transceiver.wantReceive = false;
        }
      }
    });

    // Create M-lines for recvonly streams.
    while (numAudioTracks > 0 || numVideoTracks > 0) {
      if (numAudioTracks > 0) {
        pc._createTransceiver('audio');
        numAudioTracks--;
      }
      if (numVideoTracks > 0) {
        pc._createTransceiver('video');
        numVideoTracks--;
      }
    }

    var sdp = SDPUtils.writeSessionBoilerplate(pc._sdpSessionId,
        pc._sdpSessionVersion++);
    pc.transceivers.forEach(function(transceiver, sdpMLineIndex) {
      // For each track, create an ice gatherer, ice transport,
      // dtls transport, potentially rtpsender and rtpreceiver.
      var track = transceiver.track;
      var kind = transceiver.kind;
      var mid = transceiver.mid || SDPUtils.generateIdentifier();
      transceiver.mid = mid;

      if (!transceiver.iceGatherer) {
        transceiver.iceGatherer = pc._createIceGatherer(sdpMLineIndex,
            pc.usingBundle);
      }

      var localCapabilities = window.RTCRtpSender.getCapabilities(kind);
      // filter RTX until additional stuff needed for RTX is implemented
      // in adapter.js
      if (edgeVersion < 15019) {
        localCapabilities.codecs = localCapabilities.codecs.filter(
            function(codec) {
              return codec.name !== 'rtx';
            });
      }
      localCapabilities.codecs.forEach(function(codec) {
        // work around https://bugs.chromium.org/p/webrtc/issues/detail?id=6552
        // by adding level-asymmetry-allowed=1
        if (codec.name === 'H264' &&
            codec.parameters['level-asymmetry-allowed'] === undefined) {
          codec.parameters['level-asymmetry-allowed'] = '1';
        }

        // for subsequent offers, we might have to re-use the payload
        // type of the last offer.
        if (transceiver.remoteCapabilities &&
            transceiver.remoteCapabilities.codecs) {
          transceiver.remoteCapabilities.codecs.forEach(function(remoteCodec) {
            if (codec.name.toLowerCase() === remoteCodec.name.toLowerCase() &&
                codec.clockRate === remoteCodec.clockRate) {
              codec.preferredPayloadType = remoteCodec.payloadType;
            }
          });
        }
      });
      localCapabilities.headerExtensions.forEach(function(hdrExt) {
        var remoteExtensions = transceiver.remoteCapabilities &&
            transceiver.remoteCapabilities.headerExtensions || [];
        remoteExtensions.forEach(function(rHdrExt) {
          if (hdrExt.uri === rHdrExt.uri) {
            hdrExt.id = rHdrExt.id;
          }
        });
      });

      // generate an ssrc now, to be used later in rtpSender.send
      var sendEncodingParameters = transceiver.sendEncodingParameters || [{
        ssrc: (2 * sdpMLineIndex + 1) * 1001
      }];
      if (track) {
        // add RTX
        if (edgeVersion >= 15019 && kind === 'video' &&
            !sendEncodingParameters[0].rtx) {
          sendEncodingParameters[0].rtx = {
            ssrc: sendEncodingParameters[0].ssrc + 1
          };
        }
      }

      if (transceiver.wantReceive) {
        transceiver.rtpReceiver = new window.RTCRtpReceiver(
            transceiver.dtlsTransport, kind);
      }

      transceiver.localCapabilities = localCapabilities;
      transceiver.sendEncodingParameters = sendEncodingParameters;
    });

    // always offer BUNDLE and dispose on return if not supported.
    if (pc._config.bundlePolicy !== 'max-compat') {
      sdp += 'a=group:BUNDLE ' + pc.transceivers.map(function(t) {
        return t.mid;
      }).join(' ') + '\r\n';
    }
    sdp += 'a=ice-options:trickle\r\n';

    pc.transceivers.forEach(function(transceiver, sdpMLineIndex) {
      sdp += writeMediaSection(transceiver, transceiver.localCapabilities,
          'offer', transceiver.stream, pc._dtlsRole);
      sdp += 'a=rtcp-rsize\r\n';

      if (transceiver.iceGatherer && pc.iceGatheringState !== 'new' &&
          (sdpMLineIndex === 0 || !pc.usingBundle)) {
        transceiver.iceGatherer.getLocalCandidates().forEach(function(cand) {
          cand.component = 1;
          sdp += 'a=' + SDPUtils.writeCandidate(cand) + '\r\n';
        });

        if (transceiver.iceGatherer.state === 'completed') {
          sdp += 'a=end-of-candidates\r\n';
        }
      }
    });

    var desc = new window.RTCSessionDescription({
      type: 'offer',
      sdp: sdp
    });
    return Promise.resolve(desc);
  };

  RTCPeerConnection.prototype.createAnswer = function() {
    var pc = this;

    if (pc._isClosed) {
      return Promise.reject(makeError('InvalidStateError',
          'Can not call createAnswer after close'));
    }

    if (!(pc.signalingState === 'have-remote-offer' ||
        pc.signalingState === 'have-local-pranswer')) {
      return Promise.reject(makeError('InvalidStateError',
          'Can not call createAnswer in signalingState ' + pc.signalingState));
    }

    var sdp = SDPUtils.writeSessionBoilerplate(pc._sdpSessionId,
        pc._sdpSessionVersion++);
    if (pc.usingBundle) {
      sdp += 'a=group:BUNDLE ' + pc.transceivers.map(function(t) {
        return t.mid;
      }).join(' ') + '\r\n';
    }
    sdp += 'a=ice-options:trickle\r\n';

    var mediaSectionsInOffer = SDPUtils.getMediaSections(
        pc._remoteDescription.sdp).length;
    pc.transceivers.forEach(function(transceiver, sdpMLineIndex) {
      if (sdpMLineIndex + 1 > mediaSectionsInOffer) {
        return;
      }
      if (transceiver.rejected) {
        if (transceiver.kind === 'application') {
          if (transceiver.protocol === 'DTLS/SCTP') { // legacy fmt
            sdp += 'm=application 0 DTLS/SCTP 5000\r\n';
          } else {
            sdp += 'm=application 0 ' + transceiver.protocol +
                ' webrtc-datachannel\r\n';
          }
        } else if (transceiver.kind === 'audio') {
          sdp += 'm=audio 0 UDP/TLS/RTP/SAVPF 0\r\n' +
              'a=rtpmap:0 PCMU/8000\r\n';
        } else if (transceiver.kind === 'video') {
          sdp += 'm=video 0 UDP/TLS/RTP/SAVPF 120\r\n' +
              'a=rtpmap:120 VP8/90000\r\n';
        }
        sdp += 'c=IN IP4 0.0.0.0\r\n' +
            'a=inactive\r\n' +
            'a=mid:' + transceiver.mid + '\r\n';
        return;
      }

      // FIXME: look at direction.
      if (transceiver.stream) {
        var localTrack;
        if (transceiver.kind === 'audio') {
          localTrack = transceiver.stream.getAudioTracks()[0];
        } else if (transceiver.kind === 'video') {
          localTrack = transceiver.stream.getVideoTracks()[0];
        }
        if (localTrack) {
          // add RTX
          if (edgeVersion >= 15019 && transceiver.kind === 'video' &&
              !transceiver.sendEncodingParameters[0].rtx) {
            transceiver.sendEncodingParameters[0].rtx = {
              ssrc: transceiver.sendEncodingParameters[0].ssrc + 1
            };
          }
        }
      }

      // Calculate intersection of capabilities.
      var commonCapabilities = getCommonCapabilities(
          transceiver.localCapabilities,
          transceiver.remoteCapabilities);

      var hasRtx = commonCapabilities.codecs.filter(function(c) {
        return c.name.toLowerCase() === 'rtx';
      }).length;
      if (!hasRtx && transceiver.sendEncodingParameters[0].rtx) {
        delete transceiver.sendEncodingParameters[0].rtx;
      }

      sdp += writeMediaSection(transceiver, commonCapabilities,
          'answer', transceiver.stream, pc._dtlsRole);
      if (transceiver.rtcpParameters &&
          transceiver.rtcpParameters.reducedSize) {
        sdp += 'a=rtcp-rsize\r\n';
      }
    });

    var desc = new window.RTCSessionDescription({
      type: 'answer',
      sdp: sdp
    });
    return Promise.resolve(desc);
  };

  RTCPeerConnection.prototype.addIceCandidate = function(candidate) {
    var pc = this;
    var sections;
    if (candidate && !(candidate.sdpMLineIndex !== undefined ||
        candidate.sdpMid)) {
      return Promise.reject(new TypeError('sdpMLineIndex or sdpMid required'));
    }

    // TODO: needs to go into ops queue.
    return new Promise(function(resolve, reject) {
      if (!pc._remoteDescription) {
        return reject(makeError('InvalidStateError',
            'Can not add ICE candidate without a remote description'));
      } else if (!candidate || candidate.candidate === '') {
        for (var j = 0; j < pc.transceivers.length; j++) {
          if (pc.transceivers[j].rejected) {
            continue;
          }
          pc.transceivers[j].iceTransport.addRemoteCandidate({});
          sections = SDPUtils.getMediaSections(pc._remoteDescription.sdp);
          sections[j] += 'a=end-of-candidates\r\n';
          pc._remoteDescription.sdp =
              SDPUtils.getDescription(pc._remoteDescription.sdp) +
              sections.join('');
          if (pc.usingBundle) {
            break;
          }
        }
      } else {
        var sdpMLineIndex = candidate.sdpMLineIndex;
        if (candidate.sdpMid) {
          for (var i = 0; i < pc.transceivers.length; i++) {
            if (pc.transceivers[i].mid === candidate.sdpMid) {
              sdpMLineIndex = i;
              break;
            }
          }
        }
        var transceiver = pc.transceivers[sdpMLineIndex];
        if (transceiver) {
          if (transceiver.rejected) {
            return resolve();
          }
          var cand = Object.keys(candidate.candidate).length > 0 ?
              SDPUtils.parseCandidate(candidate.candidate) : {};
          // Ignore Chrome's invalid candidates since Edge does not like them.
          if (cand.protocol === 'tcp' && (cand.port === 0 || cand.port === 9)) {
            return resolve();
          }
          // Ignore RTCP candidates, we assume RTCP-MUX.
          if (cand.component && cand.component !== 1) {
            return resolve();
          }
          // when using bundle, avoid adding candidates to the wrong
          // ice transport. And avoid adding candidates added in the SDP.
          if (sdpMLineIndex === 0 || (sdpMLineIndex > 0 &&
              transceiver.iceTransport !== pc.transceivers[0].iceTransport)) {
            if (!maybeAddCandidate(transceiver.iceTransport, cand)) {
              return reject(makeError('OperationError',
                  'Can not add ICE candidate'));
            }
          }

          // update the remoteDescription.
          var candidateString = candidate.candidate.trim();
          if (candidateString.indexOf('a=') === 0) {
            candidateString = candidateString.substr(2);
          }
          sections = SDPUtils.getMediaSections(pc._remoteDescription.sdp);
          sections[sdpMLineIndex] += 'a=' +
              (cand.type ? candidateString : 'end-of-candidates')
              + '\r\n';
          pc._remoteDescription.sdp =
              SDPUtils.getDescription(pc._remoteDescription.sdp) +
              sections.join('');
        } else {
          return reject(makeError('OperationError',
              'Can not add ICE candidate'));
        }
      }
      resolve();
    });
  };

  RTCPeerConnection.prototype.getStats = function(selector) {
    if (selector && selector instanceof window.MediaStreamTrack) {
      var senderOrReceiver = null;
      this.transceivers.forEach(function(transceiver) {
        if (transceiver.rtpSender &&
            transceiver.rtpSender.track === selector) {
          senderOrReceiver = transceiver.rtpSender;
        } else if (transceiver.rtpReceiver &&
            transceiver.rtpReceiver.track === selector) {
          senderOrReceiver = transceiver.rtpReceiver;
        }
      });
      if (!senderOrReceiver) {
        throw makeError('InvalidAccessError', 'Invalid selector.');
      }
      return senderOrReceiver.getStats();
    }

    var promises = [];
    this.transceivers.forEach(function(transceiver) {
      ['rtpSender', 'rtpReceiver', 'iceGatherer', 'iceTransport',
          'dtlsTransport'].forEach(function(method) {
            if (transceiver[method]) {
              promises.push(transceiver[method].getStats());
            }
          });
    });
    return Promise.all(promises).then(function(allStats) {
      var results = new Map();
      allStats.forEach(function(stats) {
        stats.forEach(function(stat) {
          results.set(stat.id, stat);
        });
      });
      return results;
    });
  };

  // fix low-level stat names and return Map instead of object.
  var ortcObjects = ['RTCRtpSender', 'RTCRtpReceiver', 'RTCIceGatherer',
    'RTCIceTransport', 'RTCDtlsTransport'];
  ortcObjects.forEach(function(ortcObjectName) {
    var obj = window[ortcObjectName];
    if (obj && obj.prototype && obj.prototype.getStats) {
      var nativeGetstats = obj.prototype.getStats;
      obj.prototype.getStats = function() {
        return nativeGetstats.apply(this)
        .then(function(nativeStats) {
          var mapStats = new Map();
          Object.keys(nativeStats).forEach(function(id) {
            nativeStats[id].type = fixStatsType(nativeStats[id]);
            mapStats.set(id, nativeStats[id]);
          });
          return mapStats;
        });
      };
    }
  });

  // legacy callback shims. Should be moved to adapter.js some days.
  var methods = ['createOffer', 'createAnswer'];
  methods.forEach(function(method) {
    var nativeMethod = RTCPeerConnection.prototype[method];
    RTCPeerConnection.prototype[method] = function() {
      var args = arguments;
      if (typeof args[0] === 'function' ||
          typeof args[1] === 'function') { // legacy
        return nativeMethod.apply(this, [arguments[2]])
        .then(function(description) {
          if (typeof args[0] === 'function') {
            args[0].apply(null, [description]);
          }
        }, function(error) {
          if (typeof args[1] === 'function') {
            args[1].apply(null, [error]);
          }
        });
      }
      return nativeMethod.apply(this, arguments);
    };
  });

  methods = ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'];
  methods.forEach(function(method) {
    var nativeMethod = RTCPeerConnection.prototype[method];
    RTCPeerConnection.prototype[method] = function() {
      var args = arguments;
      if (typeof args[1] === 'function' ||
          typeof args[2] === 'function') { // legacy
        return nativeMethod.apply(this, arguments)
        .then(function() {
          if (typeof args[1] === 'function') {
            args[1].apply(null);
          }
        }, function(error) {
          if (typeof args[2] === 'function') {
            args[2].apply(null, [error]);
          }
        });
      }
      return nativeMethod.apply(this, arguments);
    };
  });

  // getStats is special. It doesn't have a spec legacy method yet we support
  // getStats(something, cb) without error callbacks.
  ['getStats'].forEach(function(method) {
    var nativeMethod = RTCPeerConnection.prototype[method];
    RTCPeerConnection.prototype[method] = function() {
      var args = arguments;
      if (typeof args[1] === 'function') {
        return nativeMethod.apply(this, arguments)
        .then(function() {
          if (typeof args[1] === 'function') {
            args[1].apply(null);
          }
        });
      }
      return nativeMethod.apply(this, arguments);
    };
  });

  return RTCPeerConnection;
};


/***/ }),

/***/ "./node_modules/sdp/sdp.js":
/*!*********************************!*\
  !*** ./node_modules/sdp/sdp.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 /* eslint-env node */


// SDP helpers.
var SDPUtils = {};

// Generate an alphanumeric identifier for cname or mids.
// TODO: use UUIDs instead? https://gist.github.com/jed/982883
SDPUtils.generateIdentifier = function() {
  return Math.random().toString(36).substr(2, 10);
};

// The RTCP CNAME used by all peerconnections from the same JS.
SDPUtils.localCName = SDPUtils.generateIdentifier();

// Splits SDP into lines, dealing with both CRLF and LF.
SDPUtils.splitLines = function(blob) {
  return blob.trim().split('\n').map(function(line) {
    return line.trim();
  });
};
// Splits SDP into sessionpart and mediasections. Ensures CRLF.
SDPUtils.splitSections = function(blob) {
  var parts = blob.split('\nm=');
  return parts.map(function(part, index) {
    return (index > 0 ? 'm=' + part : part).trim() + '\r\n';
  });
};

// returns the session description.
SDPUtils.getDescription = function(blob) {
  var sections = SDPUtils.splitSections(blob);
  return sections && sections[0];
};

// returns the individual media sections.
SDPUtils.getMediaSections = function(blob) {
  var sections = SDPUtils.splitSections(blob);
  sections.shift();
  return sections;
};

// Returns lines that start with a certain prefix.
SDPUtils.matchPrefix = function(blob, prefix) {
  return SDPUtils.splitLines(blob).filter(function(line) {
    return line.indexOf(prefix) === 0;
  });
};

// Parses an ICE candidate line. Sample input:
// candidate:702786350 2 udp 41819902 8.8.8.8 60769 typ relay raddr 8.8.8.8
// rport 55996"
SDPUtils.parseCandidate = function(line) {
  var parts;
  // Parse both variants.
  if (line.indexOf('a=candidate:') === 0) {
    parts = line.substring(12).split(' ');
  } else {
    parts = line.substring(10).split(' ');
  }

  var candidate = {
    foundation: parts[0],
    component: parseInt(parts[1], 10),
    protocol: parts[2].toLowerCase(),
    priority: parseInt(parts[3], 10),
    ip: parts[4],
    address: parts[4], // address is an alias for ip.
    port: parseInt(parts[5], 10),
    // skip parts[6] == 'typ'
    type: parts[7]
  };

  for (var i = 8; i < parts.length; i += 2) {
    switch (parts[i]) {
      case 'raddr':
        candidate.relatedAddress = parts[i + 1];
        break;
      case 'rport':
        candidate.relatedPort = parseInt(parts[i + 1], 10);
        break;
      case 'tcptype':
        candidate.tcpType = parts[i + 1];
        break;
      case 'ufrag':
        candidate.ufrag = parts[i + 1]; // for backward compability.
        candidate.usernameFragment = parts[i + 1];
        break;
      default: // extension handling, in particular ufrag
        candidate[parts[i]] = parts[i + 1];
        break;
    }
  }
  return candidate;
};

// Translates a candidate object into SDP candidate attribute.
SDPUtils.writeCandidate = function(candidate) {
  var sdp = [];
  sdp.push(candidate.foundation);
  sdp.push(candidate.component);
  sdp.push(candidate.protocol.toUpperCase());
  sdp.push(candidate.priority);
  sdp.push(candidate.address || candidate.ip);
  sdp.push(candidate.port);

  var type = candidate.type;
  sdp.push('typ');
  sdp.push(type);
  if (type !== 'host' && candidate.relatedAddress &&
      candidate.relatedPort) {
    sdp.push('raddr');
    sdp.push(candidate.relatedAddress);
    sdp.push('rport');
    sdp.push(candidate.relatedPort);
  }
  if (candidate.tcpType && candidate.protocol.toLowerCase() === 'tcp') {
    sdp.push('tcptype');
    sdp.push(candidate.tcpType);
  }
  if (candidate.usernameFragment || candidate.ufrag) {
    sdp.push('ufrag');
    sdp.push(candidate.usernameFragment || candidate.ufrag);
  }
  return 'candidate:' + sdp.join(' ');
};

// Parses an ice-options line, returns an array of option tags.
// a=ice-options:foo bar
SDPUtils.parseIceOptions = function(line) {
  return line.substr(14).split(' ');
};

// Parses an rtpmap line, returns RTCRtpCoddecParameters. Sample input:
// a=rtpmap:111 opus/48000/2
SDPUtils.parseRtpMap = function(line) {
  var parts = line.substr(9).split(' ');
  var parsed = {
    payloadType: parseInt(parts.shift(), 10) // was: id
  };

  parts = parts[0].split('/');

  parsed.name = parts[0];
  parsed.clockRate = parseInt(parts[1], 10); // was: clockrate
  parsed.channels = parts.length === 3 ? parseInt(parts[2], 10) : 1;
  // legacy alias, got renamed back to channels in ORTC.
  parsed.numChannels = parsed.channels;
  return parsed;
};

// Generate an a=rtpmap line from RTCRtpCodecCapability or
// RTCRtpCodecParameters.
SDPUtils.writeRtpMap = function(codec) {
  var pt = codec.payloadType;
  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }
  var channels = codec.channels || codec.numChannels || 1;
  return 'a=rtpmap:' + pt + ' ' + codec.name + '/' + codec.clockRate +
      (channels !== 1 ? '/' + channels : '') + '\r\n';
};

// Parses an a=extmap line (headerextension from RFC 5285). Sample input:
// a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
// a=extmap:2/sendonly urn:ietf:params:rtp-hdrext:toffset
SDPUtils.parseExtmap = function(line) {
  var parts = line.substr(9).split(' ');
  return {
    id: parseInt(parts[0], 10),
    direction: parts[0].indexOf('/') > 0 ? parts[0].split('/')[1] : 'sendrecv',
    uri: parts[1]
  };
};

// Generates a=extmap line from RTCRtpHeaderExtensionParameters or
// RTCRtpHeaderExtension.
SDPUtils.writeExtmap = function(headerExtension) {
  return 'a=extmap:' + (headerExtension.id || headerExtension.preferredId) +
      (headerExtension.direction && headerExtension.direction !== 'sendrecv'
          ? '/' + headerExtension.direction
          : '') +
      ' ' + headerExtension.uri + '\r\n';
};

// Parses an ftmp line, returns dictionary. Sample input:
// a=fmtp:96 vbr=on;cng=on
// Also deals with vbr=on; cng=on
SDPUtils.parseFmtp = function(line) {
  var parsed = {};
  var kv;
  var parts = line.substr(line.indexOf(' ') + 1).split(';');
  for (var j = 0; j < parts.length; j++) {
    kv = parts[j].trim().split('=');
    parsed[kv[0].trim()] = kv[1];
  }
  return parsed;
};

// Generates an a=ftmp line from RTCRtpCodecCapability or RTCRtpCodecParameters.
SDPUtils.writeFmtp = function(codec) {
  var line = '';
  var pt = codec.payloadType;
  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }
  if (codec.parameters && Object.keys(codec.parameters).length) {
    var params = [];
    Object.keys(codec.parameters).forEach(function(param) {
      if (codec.parameters[param]) {
        params.push(param + '=' + codec.parameters[param]);
      } else {
        params.push(param);
      }
    });
    line += 'a=fmtp:' + pt + ' ' + params.join(';') + '\r\n';
  }
  return line;
};

// Parses an rtcp-fb line, returns RTCPRtcpFeedback object. Sample input:
// a=rtcp-fb:98 nack rpsi
SDPUtils.parseRtcpFb = function(line) {
  var parts = line.substr(line.indexOf(' ') + 1).split(' ');
  return {
    type: parts.shift(),
    parameter: parts.join(' ')
  };
};
// Generate a=rtcp-fb lines from RTCRtpCodecCapability or RTCRtpCodecParameters.
SDPUtils.writeRtcpFb = function(codec) {
  var lines = '';
  var pt = codec.payloadType;
  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }
  if (codec.rtcpFeedback && codec.rtcpFeedback.length) {
    // FIXME: special handling for trr-int?
    codec.rtcpFeedback.forEach(function(fb) {
      lines += 'a=rtcp-fb:' + pt + ' ' + fb.type +
      (fb.parameter && fb.parameter.length ? ' ' + fb.parameter : '') +
          '\r\n';
    });
  }
  return lines;
};

// Parses an RFC 5576 ssrc media attribute. Sample input:
// a=ssrc:3735928559 cname:something
SDPUtils.parseSsrcMedia = function(line) {
  var sp = line.indexOf(' ');
  var parts = {
    ssrc: parseInt(line.substr(7, sp - 7), 10)
  };
  var colon = line.indexOf(':', sp);
  if (colon > -1) {
    parts.attribute = line.substr(sp + 1, colon - sp - 1);
    parts.value = line.substr(colon + 1);
  } else {
    parts.attribute = line.substr(sp + 1);
  }
  return parts;
};

SDPUtils.parseSsrcGroup = function(line) {
  var parts = line.substr(13).split(' ');
  return {
    semantics: parts.shift(),
    ssrcs: parts.map(function(ssrc) {
      return parseInt(ssrc, 10);
    })
  };
};

// Extracts the MID (RFC 5888) from a media section.
// returns the MID or undefined if no mid line was found.
SDPUtils.getMid = function(mediaSection) {
  var mid = SDPUtils.matchPrefix(mediaSection, 'a=mid:')[0];
  if (mid) {
    return mid.substr(6);
  }
};

SDPUtils.parseFingerprint = function(line) {
  var parts = line.substr(14).split(' ');
  return {
    algorithm: parts[0].toLowerCase(), // algorithm is case-sensitive in Edge.
    value: parts[1]
  };
};

// Extracts DTLS parameters from SDP media section or sessionpart.
// FIXME: for consistency with other functions this should only
//   get the fingerprint line as input. See also getIceParameters.
SDPUtils.getDtlsParameters = function(mediaSection, sessionpart) {
  var lines = SDPUtils.matchPrefix(mediaSection + sessionpart,
      'a=fingerprint:');
  // Note: a=setup line is ignored since we use the 'auto' role.
  // Note2: 'algorithm' is not case sensitive except in Edge.
  return {
    role: 'auto',
    fingerprints: lines.map(SDPUtils.parseFingerprint)
  };
};

// Serializes DTLS parameters to SDP.
SDPUtils.writeDtlsParameters = function(params, setupType) {
  var sdp = 'a=setup:' + setupType + '\r\n';
  params.fingerprints.forEach(function(fp) {
    sdp += 'a=fingerprint:' + fp.algorithm + ' ' + fp.value + '\r\n';
  });
  return sdp;
};
// Parses ICE information from SDP media section or sessionpart.
// FIXME: for consistency with other functions this should only
//   get the ice-ufrag and ice-pwd lines as input.
SDPUtils.getIceParameters = function(mediaSection, sessionpart) {
  var lines = SDPUtils.splitLines(mediaSection);
  // Search in session part, too.
  lines = lines.concat(SDPUtils.splitLines(sessionpart));
  var iceParameters = {
    usernameFragment: lines.filter(function(line) {
      return line.indexOf('a=ice-ufrag:') === 0;
    })[0].substr(12),
    password: lines.filter(function(line) {
      return line.indexOf('a=ice-pwd:') === 0;
    })[0].substr(10)
  };
  return iceParameters;
};

// Serializes ICE parameters to SDP.
SDPUtils.writeIceParameters = function(params) {
  return 'a=ice-ufrag:' + params.usernameFragment + '\r\n' +
      'a=ice-pwd:' + params.password + '\r\n';
};

// Parses the SDP media section and returns RTCRtpParameters.
SDPUtils.parseRtpParameters = function(mediaSection) {
  var description = {
    codecs: [],
    headerExtensions: [],
    fecMechanisms: [],
    rtcp: []
  };
  var lines = SDPUtils.splitLines(mediaSection);
  var mline = lines[0].split(' ');
  for (var i = 3; i < mline.length; i++) { // find all codecs from mline[3..]
    var pt = mline[i];
    var rtpmapline = SDPUtils.matchPrefix(
        mediaSection, 'a=rtpmap:' + pt + ' ')[0];
    if (rtpmapline) {
      var codec = SDPUtils.parseRtpMap(rtpmapline);
      var fmtps = SDPUtils.matchPrefix(
          mediaSection, 'a=fmtp:' + pt + ' ');
      // Only the first a=fmtp:<pt> is considered.
      codec.parameters = fmtps.length ? SDPUtils.parseFmtp(fmtps[0]) : {};
      codec.rtcpFeedback = SDPUtils.matchPrefix(
          mediaSection, 'a=rtcp-fb:' + pt + ' ')
        .map(SDPUtils.parseRtcpFb);
      description.codecs.push(codec);
      // parse FEC mechanisms from rtpmap lines.
      switch (codec.name.toUpperCase()) {
        case 'RED':
        case 'ULPFEC':
          description.fecMechanisms.push(codec.name.toUpperCase());
          break;
        default: // only RED and ULPFEC are recognized as FEC mechanisms.
          break;
      }
    }
  }
  SDPUtils.matchPrefix(mediaSection, 'a=extmap:').forEach(function(line) {
    description.headerExtensions.push(SDPUtils.parseExtmap(line));
  });
  // FIXME: parse rtcp.
  return description;
};

// Generates parts of the SDP media section describing the capabilities /
// parameters.
SDPUtils.writeRtpDescription = function(kind, caps) {
  var sdp = '';

  // Build the mline.
  sdp += 'm=' + kind + ' ';
  sdp += caps.codecs.length > 0 ? '9' : '0'; // reject if no codecs.
  sdp += ' UDP/TLS/RTP/SAVPF ';
  sdp += caps.codecs.map(function(codec) {
    if (codec.preferredPayloadType !== undefined) {
      return codec.preferredPayloadType;
    }
    return codec.payloadType;
  }).join(' ') + '\r\n';

  sdp += 'c=IN IP4 0.0.0.0\r\n';
  sdp += 'a=rtcp:9 IN IP4 0.0.0.0\r\n';

  // Add a=rtpmap lines for each codec. Also fmtp and rtcp-fb.
  caps.codecs.forEach(function(codec) {
    sdp += SDPUtils.writeRtpMap(codec);
    sdp += SDPUtils.writeFmtp(codec);
    sdp += SDPUtils.writeRtcpFb(codec);
  });
  var maxptime = 0;
  caps.codecs.forEach(function(codec) {
    if (codec.maxptime > maxptime) {
      maxptime = codec.maxptime;
    }
  });
  if (maxptime > 0) {
    sdp += 'a=maxptime:' + maxptime + '\r\n';
  }
  sdp += 'a=rtcp-mux\r\n';

  if (caps.headerExtensions) {
    caps.headerExtensions.forEach(function(extension) {
      sdp += SDPUtils.writeExtmap(extension);
    });
  }
  // FIXME: write fecMechanisms.
  return sdp;
};

// Parses the SDP media section and returns an array of
// RTCRtpEncodingParameters.
SDPUtils.parseRtpEncodingParameters = function(mediaSection) {
  var encodingParameters = [];
  var description = SDPUtils.parseRtpParameters(mediaSection);
  var hasRed = description.fecMechanisms.indexOf('RED') !== -1;
  var hasUlpfec = description.fecMechanisms.indexOf('ULPFEC') !== -1;

  // filter a=ssrc:... cname:, ignore PlanB-msid
  var ssrcs = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
  .map(function(line) {
    return SDPUtils.parseSsrcMedia(line);
  })
  .filter(function(parts) {
    return parts.attribute === 'cname';
  });
  var primarySsrc = ssrcs.length > 0 && ssrcs[0].ssrc;
  var secondarySsrc;

  var flows = SDPUtils.matchPrefix(mediaSection, 'a=ssrc-group:FID')
  .map(function(line) {
    var parts = line.substr(17).split(' ');
    return parts.map(function(part) {
      return parseInt(part, 10);
    });
  });
  if (flows.length > 0 && flows[0].length > 1 && flows[0][0] === primarySsrc) {
    secondarySsrc = flows[0][1];
  }

  description.codecs.forEach(function(codec) {
    if (codec.name.toUpperCase() === 'RTX' && codec.parameters.apt) {
      var encParam = {
        ssrc: primarySsrc,
        codecPayloadType: parseInt(codec.parameters.apt, 10)
      };
      if (primarySsrc && secondarySsrc) {
        encParam.rtx = {ssrc: secondarySsrc};
      }
      encodingParameters.push(encParam);
      if (hasRed) {
        encParam = JSON.parse(JSON.stringify(encParam));
        encParam.fec = {
          ssrc: primarySsrc,
          mechanism: hasUlpfec ? 'red+ulpfec' : 'red'
        };
        encodingParameters.push(encParam);
      }
    }
  });
  if (encodingParameters.length === 0 && primarySsrc) {
    encodingParameters.push({
      ssrc: primarySsrc
    });
  }

  // we support both b=AS and b=TIAS but interpret AS as TIAS.
  var bandwidth = SDPUtils.matchPrefix(mediaSection, 'b=');
  if (bandwidth.length) {
    if (bandwidth[0].indexOf('b=TIAS:') === 0) {
      bandwidth = parseInt(bandwidth[0].substr(7), 10);
    } else if (bandwidth[0].indexOf('b=AS:') === 0) {
      // use formula from JSEP to convert b=AS to TIAS value.
      bandwidth = parseInt(bandwidth[0].substr(5), 10) * 1000 * 0.95
          - (50 * 40 * 8);
    } else {
      bandwidth = undefined;
    }
    encodingParameters.forEach(function(params) {
      params.maxBitrate = bandwidth;
    });
  }
  return encodingParameters;
};

// parses http://draft.ortc.org/#rtcrtcpparameters*
SDPUtils.parseRtcpParameters = function(mediaSection) {
  var rtcpParameters = {};

  // Gets the first SSRC. Note tha with RTX there might be multiple
  // SSRCs.
  var remoteSsrc = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
      .map(function(line) {
        return SDPUtils.parseSsrcMedia(line);
      })
      .filter(function(obj) {
        return obj.attribute === 'cname';
      })[0];
  if (remoteSsrc) {
    rtcpParameters.cname = remoteSsrc.value;
    rtcpParameters.ssrc = remoteSsrc.ssrc;
  }

  // Edge uses the compound attribute instead of reducedSize
  // compound is !reducedSize
  var rsize = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-rsize');
  rtcpParameters.reducedSize = rsize.length > 0;
  rtcpParameters.compound = rsize.length === 0;

  // parses the rtcp-mux attrіbute.
  // Note that Edge does not support unmuxed RTCP.
  var mux = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-mux');
  rtcpParameters.mux = mux.length > 0;

  return rtcpParameters;
};

// parses either a=msid: or a=ssrc:... msid lines and returns
// the id of the MediaStream and MediaStreamTrack.
SDPUtils.parseMsid = function(mediaSection) {
  var parts;
  var spec = SDPUtils.matchPrefix(mediaSection, 'a=msid:');
  if (spec.length === 1) {
    parts = spec[0].substr(7).split(' ');
    return {stream: parts[0], track: parts[1]};
  }
  var planB = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
  .map(function(line) {
    return SDPUtils.parseSsrcMedia(line);
  })
  .filter(function(msidParts) {
    return msidParts.attribute === 'msid';
  });
  if (planB.length > 0) {
    parts = planB[0].value.split(' ');
    return {stream: parts[0], track: parts[1]};
  }
};

// Generate a session ID for SDP.
// https://tools.ietf.org/html/draft-ietf-rtcweb-jsep-20#section-5.2.1
// recommends using a cryptographically random +ve 64-bit value
// but right now this should be acceptable and within the right range
SDPUtils.generateSessionId = function() {
  return Math.random().toString().substr(2, 21);
};

// Write boilder plate for start of SDP
// sessId argument is optional - if not supplied it will
// be generated randomly
// sessVersion is optional and defaults to 2
// sessUser is optional and defaults to 'thisisadapterortc'
SDPUtils.writeSessionBoilerplate = function(sessId, sessVer, sessUser) {
  var sessionId;
  var version = sessVer !== undefined ? sessVer : 2;
  if (sessId) {
    sessionId = sessId;
  } else {
    sessionId = SDPUtils.generateSessionId();
  }
  var user = sessUser || 'thisisadapterortc';
  // FIXME: sess-id should be an NTP timestamp.
  return 'v=0\r\n' +
      'o=' + user + ' ' + sessionId + ' ' + version +
        ' IN IP4 127.0.0.1\r\n' +
      's=-\r\n' +
      't=0 0\r\n';
};

SDPUtils.writeMediaSection = function(transceiver, caps, type, stream) {
  var sdp = SDPUtils.writeRtpDescription(transceiver.kind, caps);

  // Map ICE parameters (ufrag, pwd) to SDP.
  sdp += SDPUtils.writeIceParameters(
      transceiver.iceGatherer.getLocalParameters());

  // Map DTLS parameters to SDP.
  sdp += SDPUtils.writeDtlsParameters(
      transceiver.dtlsTransport.getLocalParameters(),
      type === 'offer' ? 'actpass' : 'active');

  sdp += 'a=mid:' + transceiver.mid + '\r\n';

  if (transceiver.direction) {
    sdp += 'a=' + transceiver.direction + '\r\n';
  } else if (transceiver.rtpSender && transceiver.rtpReceiver) {
    sdp += 'a=sendrecv\r\n';
  } else if (transceiver.rtpSender) {
    sdp += 'a=sendonly\r\n';
  } else if (transceiver.rtpReceiver) {
    sdp += 'a=recvonly\r\n';
  } else {
    sdp += 'a=inactive\r\n';
  }

  if (transceiver.rtpSender) {
    // spec.
    var msid = 'msid:' + stream.id + ' ' +
        transceiver.rtpSender.track.id + '\r\n';
    sdp += 'a=' + msid;

    // for Chrome.
    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
        ' ' + msid;
    if (transceiver.sendEncodingParameters[0].rtx) {
      sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
          ' ' + msid;
      sdp += 'a=ssrc-group:FID ' +
          transceiver.sendEncodingParameters[0].ssrc + ' ' +
          transceiver.sendEncodingParameters[0].rtx.ssrc +
          '\r\n';
    }
  }
  // FIXME: this should be written by writeRtpDescription.
  sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
      ' cname:' + SDPUtils.localCName + '\r\n';
  if (transceiver.rtpSender && transceiver.sendEncodingParameters[0].rtx) {
    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
        ' cname:' + SDPUtils.localCName + '\r\n';
  }
  return sdp;
};

// Gets the direction from the mediaSection or the sessionpart.
SDPUtils.getDirection = function(mediaSection, sessionpart) {
  // Look for sendrecv, sendonly, recvonly, inactive, default to sendrecv.
  var lines = SDPUtils.splitLines(mediaSection);
  for (var i = 0; i < lines.length; i++) {
    switch (lines[i]) {
      case 'a=sendrecv':
      case 'a=sendonly':
      case 'a=recvonly':
      case 'a=inactive':
        return lines[i].substr(2);
      default:
        // FIXME: What should happen here?
    }
  }
  if (sessionpart) {
    return SDPUtils.getDirection(sessionpart);
  }
  return 'sendrecv';
};

SDPUtils.getKind = function(mediaSection) {
  var lines = SDPUtils.splitLines(mediaSection);
  var mline = lines[0].split(' ');
  return mline[0].substr(2);
};

SDPUtils.isRejected = function(mediaSection) {
  return mediaSection.split(' ', 2)[1] === '0';
};

SDPUtils.parseMLine = function(mediaSection) {
  var lines = SDPUtils.splitLines(mediaSection);
  var parts = lines[0].substr(2).split(' ');
  return {
    kind: parts[0],
    port: parseInt(parts[1], 10),
    protocol: parts[2],
    fmt: parts.slice(3).join(' ')
  };
};

SDPUtils.parseOLine = function(mediaSection) {
  var line = SDPUtils.matchPrefix(mediaSection, 'o=')[0];
  var parts = line.substr(2).split(' ');
  return {
    username: parts[0],
    sessionId: parts[1],
    sessionVersion: parseInt(parts[2], 10),
    netType: parts[3],
    addressType: parts[4],
    address: parts[5]
  };
};

// a very naive interpretation of a valid SDP.
SDPUtils.isValidSDP = function(blob) {
  if (typeof blob !== 'string' || blob.length === 0) {
    return false;
  }
  var lines = SDPUtils.splitLines(blob);
  for (var i = 0; i < lines.length; i++) {
    if (lines[i].length < 2 || lines[i].charAt(1) !== '=') {
      return false;
    }
    // TODO: check the modifier a bit more.
  }
  return true;
};

// Expose public methods.
if (true) {
  module.exports = SDPUtils;
}


/***/ }),

/***/ "./node_modules/shortid/index.js":
/*!***************************************!*\
  !*** ./node_modules/shortid/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = __webpack_require__(/*! ./lib/index */ "./node_modules/shortid/lib/index.js");


/***/ }),

/***/ "./node_modules/shortid/lib/alphabet.js":
/*!**********************************************!*\
  !*** ./node_modules/shortid/lib/alphabet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var randomFromSeed = __webpack_require__(/*! ./random/random-from-seed */ "./node_modules/shortid/lib/random/random-from-seed.js");

var ORIGINAL = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
var alphabet;
var previousSeed;

var shuffled;

function reset() {
    shuffled = false;
}

function setCharacters(_alphabet_) {
    if (!_alphabet_) {
        if (alphabet !== ORIGINAL) {
            alphabet = ORIGINAL;
            reset();
        }
        return;
    }

    if (_alphabet_ === alphabet) {
        return;
    }

    if (_alphabet_.length !== ORIGINAL.length) {
        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. You submitted ' + _alphabet_.length + ' characters: ' + _alphabet_);
    }

    var unique = _alphabet_.split('').filter(function(item, ind, arr){
       return ind !== arr.lastIndexOf(item);
    });

    if (unique.length) {
        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. These characters were not unique: ' + unique.join(', '));
    }

    alphabet = _alphabet_;
    reset();
}

function characters(_alphabet_) {
    setCharacters(_alphabet_);
    return alphabet;
}

function setSeed(seed) {
    randomFromSeed.seed(seed);
    if (previousSeed !== seed) {
        reset();
        previousSeed = seed;
    }
}

function shuffle() {
    if (!alphabet) {
        setCharacters(ORIGINAL);
    }

    var sourceArray = alphabet.split('');
    var targetArray = [];
    var r = randomFromSeed.nextValue();
    var characterIndex;

    while (sourceArray.length > 0) {
        r = randomFromSeed.nextValue();
        characterIndex = Math.floor(r * sourceArray.length);
        targetArray.push(sourceArray.splice(characterIndex, 1)[0]);
    }
    return targetArray.join('');
}

function getShuffled() {
    if (shuffled) {
        return shuffled;
    }
    shuffled = shuffle();
    return shuffled;
}

/**
 * lookup shuffled letter
 * @param index
 * @returns {string}
 */
function lookup(index) {
    var alphabetShuffled = getShuffled();
    return alphabetShuffled[index];
}

function get () {
  return alphabet || ORIGINAL;
}

module.exports = {
    get: get,
    characters: characters,
    seed: setSeed,
    lookup: lookup,
    shuffled: getShuffled
};


/***/ }),

/***/ "./node_modules/shortid/lib/build.js":
/*!*******************************************!*\
  !*** ./node_modules/shortid/lib/build.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var generate = __webpack_require__(/*! ./generate */ "./node_modules/shortid/lib/generate.js");
var alphabet = __webpack_require__(/*! ./alphabet */ "./node_modules/shortid/lib/alphabet.js");

// Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.
// This number should be updated every year or so to keep the generated id short.
// To regenerate `new Date() - 0` and bump the version. Always bump the version!
var REDUCE_TIME = 1459707606518;

// don't change unless we change the algos or REDUCE_TIME
// must be an integer and less than 16
var version = 6;

// Counter is used when shortid is called multiple times in one second.
var counter;

// Remember the last time shortid was called in case counter is needed.
var previousSeconds;

/**
 * Generate unique id
 * Returns string id
 */
function build(clusterWorkerId) {
    var str = '';

    var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);

    if (seconds === previousSeconds) {
        counter++;
    } else {
        counter = 0;
        previousSeconds = seconds;
    }

    str = str + generate(version);
    str = str + generate(clusterWorkerId);
    if (counter > 0) {
        str = str + generate(counter);
    }
    str = str + generate(seconds);
    return str;
}

module.exports = build;


/***/ }),

/***/ "./node_modules/shortid/lib/generate.js":
/*!**********************************************!*\
  !*** ./node_modules/shortid/lib/generate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabet = __webpack_require__(/*! ./alphabet */ "./node_modules/shortid/lib/alphabet.js");
var random = __webpack_require__(/*! ./random/random-byte */ "./node_modules/shortid/lib/random/random-byte-browser.js");
var format = __webpack_require__(/*! nanoid/format */ "./node_modules/nanoid/format.js");

function generate(number) {
    var loopCounter = 0;
    var done;

    var str = '';

    while (!done) {
        str = str + format(random, alphabet.get(), 1);
        done = number < (Math.pow(16, loopCounter + 1 ) );
        loopCounter++;
    }
    return str;
}

module.exports = generate;


/***/ }),

/***/ "./node_modules/shortid/lib/index.js":
/*!*******************************************!*\
  !*** ./node_modules/shortid/lib/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabet = __webpack_require__(/*! ./alphabet */ "./node_modules/shortid/lib/alphabet.js");
var build = __webpack_require__(/*! ./build */ "./node_modules/shortid/lib/build.js");
var isValid = __webpack_require__(/*! ./is-valid */ "./node_modules/shortid/lib/is-valid.js");

// if you are using cluster or multiple servers use this to make each instance
// has a unique value for worker
// Note: I don't know if this is automatically set when using third
// party cluster solutions such as pm2.
var clusterWorkerId = __webpack_require__(/*! ./util/cluster-worker-id */ "./node_modules/shortid/lib/util/cluster-worker-id-browser.js") || 0;

/**
 * Set the seed.
 * Highly recommended if you don't want people to try to figure out your id schema.
 * exposed as shortid.seed(int)
 * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.
 */
function seed(seedValue) {
    alphabet.seed(seedValue);
    return module.exports;
}

/**
 * Set the cluster worker or machine id
 * exposed as shortid.worker(int)
 * @param workerId worker must be positive integer.  Number less than 16 is recommended.
 * returns shortid module so it can be chained.
 */
function worker(workerId) {
    clusterWorkerId = workerId;
    return module.exports;
}

/**
 *
 * sets new characters to use in the alphabet
 * returns the shuffled alphabet
 */
function characters(newCharacters) {
    if (newCharacters !== undefined) {
        alphabet.characters(newCharacters);
    }

    return alphabet.shuffled();
}

/**
 * Generate unique id
 * Returns string id
 */
function generate() {
  return build(clusterWorkerId);
}

// Export all other functions as properties of the generate function
module.exports = generate;
module.exports.generate = generate;
module.exports.seed = seed;
module.exports.worker = worker;
module.exports.characters = characters;
module.exports.isValid = isValid;


/***/ }),

/***/ "./node_modules/shortid/lib/is-valid.js":
/*!**********************************************!*\
  !*** ./node_modules/shortid/lib/is-valid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var alphabet = __webpack_require__(/*! ./alphabet */ "./node_modules/shortid/lib/alphabet.js");

function isShortId(id) {
    if (!id || typeof id !== 'string' || id.length < 6 ) {
        return false;
    }

    var nonAlphabetic = new RegExp('[^' +
      alphabet.get().replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&') +
    ']');
    return !nonAlphabetic.test(id);
}

module.exports = isShortId;


/***/ }),

/***/ "./node_modules/shortid/lib/random/random-byte-browser.js":
/*!****************************************************************!*\
  !*** ./node_modules/shortid/lib/random/random-byte-browser.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var crypto = typeof window === 'object' && (window.crypto || window.msCrypto); // IE 11 uses window.msCrypto

var randomByte;

if (!crypto || !crypto.getRandomValues) {
    randomByte = function(size) {
        var bytes = [];
        for (var i = 0; i < size; i++) {
            bytes.push(Math.floor(Math.random() * 256));
        }
        return bytes;
    };
} else {
    randomByte = function(size) {
        return crypto.getRandomValues(new Uint8Array(size));
    };
}

module.exports = randomByte;


/***/ }),

/***/ "./node_modules/shortid/lib/random/random-from-seed.js":
/*!*************************************************************!*\
  !*** ./node_modules/shortid/lib/random/random-from-seed.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Found this seed-based random generator somewhere
// Based on The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)

var seed = 1;

/**
 * return a random number based on a seed
 * @param seed
 * @returns {number}
 */
function getNextValue() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed/(233280.0);
}

function setSeed(_seed_) {
    seed = _seed_;
}

module.exports = {
    nextValue: getNextValue,
    seed: setSeed
};


/***/ }),

/***/ "./node_modules/shortid/lib/util/cluster-worker-id-browser.js":
/*!********************************************************************!*\
  !*** ./node_modules/shortid/lib/util/cluster-worker-id-browser.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = 0;


/***/ }),

/***/ "./node_modules/twig/twig.js":
/*!***********************************!*\
  !*** ./node_modules/twig/twig.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, __dirname) {!function(e,t){ true?module.exports=t():undefined}(global,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=27)}([function(e,t){e.exports=__webpack_require__(/*! path */ "./node_modules/path-browserify/index.js")},function(e,t,r){"use strict";e.exports=function(){var e=arguments,t=0,r=function(e,t,r,n){r||(r=" ");var o=e.length>=t?"":new Array(1+t-e.length>>>0).join(r);return n?e+o:o+e},n=function(e,t,n,o,i,s){var a=o-e.length;return a>0&&(e=n||!i?r(e,o,s,n):[e.slice(0,t.length),r("",a,"0",!0),e.slice(t.length)].join("")),e},o=function(e,t,o,i,s,a,p){var c=e>>>0;return e=(o=o&&c&&{2:"0b",8:"0",16:"0x"}[t]||"")+r(c.toString(t),a||0,"0",!1),n(e,o,i,s,p)},i=function(e,t,r,o,i,s){return null!==o&&void 0!==o&&(e=e.slice(0,o)),n(e,"",t,r,i,s)};return e[t++].replace(/%%|%(\d+\$)?([-+'#0 ]*)(\*\d+\$|\*|\d+)?(?:\.(\*\d+\$|\*|\d+))?([scboxXuideEfFgG])/g,function(s,a,p,c,l,u){var f,h,y,d,g;if("%%"===s)return"%";var m,x=!1,v="",b=!1,w=!1,k=" ",_=p.length;for(m=0;m<_;m++)switch(p.charAt(m)){case" ":v=" ";break;case"+":v="+";break;case"-":x=!0;break;case"'":k=p.charAt(m+1);break;case"0":b=!0,k="0";break;case"#":w=!0}if((c=c?"*"===c?+e[t++]:"*"===c.charAt(0)?+e[c.slice(1,-1)]:+c:0)<0&&(c=-c,x=!0),!isFinite(c))throw new Error("sprintf: (minimum-)width must be finite");switch(l=l?"*"===l?+e[t++]:"*"===l.charAt(0)?+e[l.slice(1,-1)]:+l:"fFeE".indexOf(u)>-1?6:"d"===u?0:void 0,g=a?e[a.slice(0,-1)]:e[t++],u){case"s":return i(g+"",x,c,l,b,k);case"c":return i(String.fromCharCode(+g),x,c,l,b);case"b":return o(g,2,w,x,c,l,b);case"o":return o(g,8,w,x,c,l,b);case"x":return o(g,16,w,x,c,l,b);case"X":return o(g,16,w,x,c,l,b).toUpperCase();case"u":return o(g,10,w,x,c,l,b);case"i":case"d":return f=+g||0,g=(h=(f=Math.round(f-f%1))<0?"-":v)+r(String(Math.abs(f)),l,"0",!1),n(g,h,x,c,b);case"e":case"E":case"f":case"F":case"g":case"G":return h=(f=+g)<0?"-":v,y=["toExponential","toFixed","toPrecision"]["efg".indexOf(u.toLowerCase())],d=["toString","toUpperCase"]["eEfFgG".indexOf(u)%2],g=h+Math.abs(f)[y](l),n(g,h,x,c,b)[d]();default:return s}})}},function(e,t){e.exports=function(e){"use strict";return e.exports={VERSION:e.VERSION},e.exports.twig=function(t){var r=t.id,n={strict_variables:t.strict_variables||!1,autoescape:null!=t.autoescape&&t.autoescape||!1,allowInlineIncludes:t.allowInlineIncludes||!1,rethrow:t.rethrow||!1,namespaces:t.namespaces};if(e.cache&&r&&e.validateId(r),void 0!==t.debug&&(e.debug=t.debug),void 0!==t.trace&&(e.trace=t.trace),void 0!==t.data)return e.Templates.parsers.twig({data:t.data,path:t.hasOwnProperty("path")?t.path:void 0,module:t.module,id:r,options:n});if(void 0!==t.ref){if(void 0!==t.id)throw new e.Error("Both ref and id cannot be set on a twig.js template.");return e.Templates.load(t.ref)}if(void 0!==t.method){if(!e.Templates.isRegisteredLoader(t.method))throw new e.Error('Loader for "'+t.method+'" is not defined.');return e.Templates.loadRemote(t.name||t.href||t.path||r||void 0,{id:r,method:t.method,parser:t.parser||"twig",base:t.base,module:t.module,precompiled:t.precompiled,async:t.async,options:n},t.load,t.error)}return void 0!==t.href?e.Templates.loadRemote(t.href,{id:r,method:"ajax",parser:t.parser||"twig",base:t.base,module:t.module,precompiled:t.precompiled,async:t.async,options:n},t.load,t.error):void 0!==t.path?e.Templates.loadRemote(t.path,{id:r,method:"fs",parser:t.parser||"twig",base:t.base,module:t.module,precompiled:t.precompiled,async:t.async,options:n},t.load,t.error):void 0},e.exports.extendFilter=function(t,r){e.filter.extend(t,r)},e.exports.extendFunction=function(t,r){e._function.extend(t,r)},e.exports.extendTest=function(t,r){e.test.extend(t,r)},e.exports.extendTag=function(t){e.logic.extend(t)},e.exports.extend=function(t){t(e)},e.exports.compile=function(t,r){var n,o=r.filename,i=r.filename;return n=new e.Template({data:t,path:i,id:o,options:r.settings["twig options"]}),function(e){return n.render(e)}},e.exports.renderFile=function(t,r,n){"function"==typeof r&&(n=r,r={});var o=(r=r||{}).settings||{},i=o["twig options"],s={path:t,base:o.views,load:function(e){i&&i.allow_async?e.renderAsync(r).then(function(e){n(null,e)},n):n(null,""+e.render(r))}};if(i)for(var a in i)i.hasOwnProperty(a)&&(s[a]=i[a]);e.exports.twig(s)},e.exports.__express=e.exports.renderFile,e.exports.cache=function(t){e.cache=t},e.exports.path=e.path,e.exports.filters=e.filters,e.exports.Promise=e.Promise,e}},function(e,t){e.exports=function(e){"use strict";var t=1,r=2;return e.parseAsync=function(t,r){return e.parse.call(this,t,r,!0)},e.expression.parseAsync=function(t,r,n){return e.expression.parse.call(this,t,r,n,!0)},e.logic.parseAsync=function(t,r,n){return e.logic.parse.call(this,t,r,n,!0)},e.Template.prototype.renderAsync=function(e,t){return this.render(e,t,!0)},e.async={},e.isPromise=function(e){return e&&e.then&&"function"==typeof e.then},e.async.potentiallyAsync=function(t,r,n){return r?e.Promise.resolve(n.call(t)):function(t,r,n){var o=n.call(t),i=null,s=!0;if(!e.isPromise(o))return o;if(o.then(function(e){o=e,s=!1}).catch(function(e){i=e}),null!==i)throw i;if(s)throw new e.Error("You are using Twig.js in sync mode in combination with async extensions.");return o}(t,0,n)},e.Thenable=function(e,t,r){this.then=e,this._value=r?t:null,this._state=r||0},e.Thenable.prototype.catch=function(e){return this._state==t?this:this.then(null,e)},e.Thenable.resolvedThen=function(t){try{return e.Promise.resolve(t(this._value))}catch(t){return e.Promise.reject(t)}},e.Thenable.rejectedThen=function(t,r){if(!r||"function"!=typeof r)return this;var n=this._value,o=e.attempt(function(){return r(n)},e.Promise.reject);return e.Promise.resolve(o)},e.Promise=function(n){var o=0,i=null,s=function(e,t){o=e,i=t};return function(e,t,r){try{e(t,r)}catch(e){r(e)}}(n,function(e){s(t,e)},function(e){s(r,e)}),o===t?e.Promise.resolve(i):o===r?e.Promise.reject(i):(s=e.FullPromise()).promise},e.FullPromise=function(){var r=null;function n(e){e(a._value)}function o(e,t){t(a._value)}var i=function(e,t){r=function(e,t,r){var n=[t,r,-2];return e?-2==e[2]?e=[e,n]:e.push(n):e=n,e}(r,e,t)};function s(s,p){a._state||(a._value=p,a._state=s,i=s==t?n:o,r&&(-2===r[2]&&(i(r[0],r[1]),r=null),e.forEach(r,function(e){i(e[0],e[1])}),r=null))}var a=new e.Thenable(function(r,n){var o="function"==typeof r;if(a._state==t&&!o)return e.Promise.resolve(a._value);if(a._state===t)return e.attempt(function(){return e.Promise.resolve(r(a._value))},e.Promise.reject);var s="function"==typeof n;return e.Promise(function(t,a){i(o?function(n){e.attempt(function(){t(r(n))},a)}:t,s?function(r){e.attempt(function(){t(n(r))},a)}:a)})});return s.promise=a,s},e.Promise.defaultResolved=new e.Thenable(e.Thenable.resolvedThen,void 0,t),e.Promise.emptyStringResolved=new e.Thenable(e.Thenable.resolvedThen,"",t),e.Promise.resolve=function(r){return arguments.length<1||void 0===r?e.Promise.defaultResolved:e.isPromise(r)?r:""===r?e.Promise.emptyStringResolved:new e.Thenable(e.Thenable.resolvedThen,r,t)},e.Promise.reject=function(t){return new e.Thenable(e.Thenable.rejectedThen,t,r)},e.Promise.all=function(r){var n=new Array(r.length);return e.async.forEach(r,function(r,o){if(e.isPromise(r)){if(r._state!=t)return r.then(function(e){n[o]=e});n[o]=r._value}else n[o]=r}).then(function(){return n})},e.async.forEach=function(r,n){var o=r.length,i=0;return function s(){var a=null;do{if(i==o)return e.Promise.resolve();a=n(r[i],i),i++}while(!a||!e.isPromise(a)||a._state==t);return a.then(s)}()},e}},function(e,t){e.exports=function(e){"use strict";return e.tests={empty:function(e){if(null===e||void 0===e)return!0;if("number"==typeof e)return!1;if(e.length&&e.length>0)return!1;for(var t in e)if(e.hasOwnProperty(t))return!1;return!0},odd:function(e){return e%2==1},even:function(e){return e%2==0},divisibleby:function(e,t){return e%t[0]==0},defined:function(e){return void 0!==e},none:function(e){return null===e},null:function(e){return this.none(e)},"same as":function(e,t){return e===t[0]},sameas:function(t,r){return console.warn("`sameas` is deprecated use `same as`"),e.tests["same as"](t,r)},iterable:function(t){return t&&(e.lib.is("Array",t)||e.lib.is("Object",t))}},e.test=function(t,r,n){if(!e.tests[t])throw"Test "+t+" is not defined.";return e.tests[t](r,n)},e.test.extend=function(t,r){e.tests[t]=r},e}},function(e,t,r){e.exports=function(e){"use strict";e.path={};var t=/.::/,n=/@/;return e.path.parsePath=function(r,o){var i=null,s=r.options.namespaces,a=o||"";if(s&&"object"==typeof s)for(i in s){if(t.test(a))return a=a.replace(i+"::",s[i]);if(n.test(a))return a=a.replace("@"+i,s[i])}return e.path.relativePath(r,a)},e.path.relativePath=function(t,n){var o,i,s,a="/",p=[];n=n||"";if(t.url)o=void 0!==t.base?t.base+("/"===t.base.charAt(t.base.length-1)?"":"/"):t.url;else if(t.path){var c=r(0),l=c.sep||a,u=new RegExp("^\\.{1,2}"+l.replace("\\","\\\\"));n=n.replace(/\//g,l),void 0!==t.base&&null==n.match(u)?(n=n.replace(t.base,""),o=t.base+l):o=c.normalize(t.path),o=o.replace(l+l,l),a=l}else{if(!t.name&&!t.id||!t.method||"fs"===t.method||"ajax"===t.method)throw new e.Error("Cannot extend an inline template.");o=t.base||t.name||t.id}for((i=o.split(a)).pop(),i=i.concat(n.split(a));i.length>0;)"."==(s=i.shift())||(".."==s&&p.length>0&&".."!=p[p.length-1]?p.pop():p.push(s));return p.join(a)},e}},function(e,t){e.exports=function(e){"use strict";e.Templates.registerParser("twig",function(t){return new e.Template(t)})}},function(e,t){e.exports=function(e){"use strict";e.Templates.registerParser("source",function(e){return e.data||""})}},function(e,t){e.exports=function(e){"use strict";for(e.logic={},e.logic.type={if_:"Twig.logic.type.if",endif:"Twig.logic.type.endif",for_:"Twig.logic.type.for",endfor:"Twig.logic.type.endfor",else_:"Twig.logic.type.else",elseif:"Twig.logic.type.elseif",set:"Twig.logic.type.set",setcapture:"Twig.logic.type.setcapture",endset:"Twig.logic.type.endset",filter:"Twig.logic.type.filter",endfilter:"Twig.logic.type.endfilter",shortblock:"Twig.logic.type.shortblock",block:"Twig.logic.type.block",endblock:"Twig.logic.type.endblock",extends_:"Twig.logic.type.extends",use:"Twig.logic.type.use",include:"Twig.logic.type.include",spaceless:"Twig.logic.type.spaceless",endspaceless:"Twig.logic.type.endspaceless",macro:"Twig.logic.type.macro",endmacro:"Twig.logic.type.endmacro",import_:"Twig.logic.type.import",from:"Twig.logic.type.from",embed:"Twig.logic.type.embed",endembed:"Twig.logic.type.endembed",with:"Twig.logic.type.with",endwith:"Twig.logic.type.endwith"},e.logic.definitions=[{type:e.logic.type.if_,regex:/^if\s+([\s\S]+)$/,next:[e.logic.type.else_,e.logic.type.elseif,e.logic.type.endif],open:!0,compile:function(t){var r=t.match[1];return t.stack=e.expression.compile.call(this,{type:e.expression.type.expression,value:r}).stack,delete t.match,t},parse:function(t,r,n){var o=this;return e.expression.parseAsync.call(this,t.stack,r).then(function(i){return n=!0,e.lib.boolval(i)?(n=!1,e.parseAsync.call(o,t.output,r)):""}).then(function(e){return{chain:n,output:e}})}},{type:e.logic.type.elseif,regex:/^elseif\s+([^\s].*)$/,next:[e.logic.type.else_,e.logic.type.elseif,e.logic.type.endif],open:!1,compile:function(t){var r=t.match[1];return t.stack=e.expression.compile.call(this,{type:e.expression.type.expression,value:r}).stack,delete t.match,t},parse:function(t,r,n){var o=this;return e.expression.parseAsync.call(this,t.stack,r).then(function(i){return n&&e.lib.boolval(i)?(n=!1,e.parseAsync.call(o,t.output,r)):""}).then(function(e){return{chain:n,output:e}})}},{type:e.logic.type.else_,regex:/^else$/,next:[e.logic.type.endif,e.logic.type.endfor],open:!1,parse:function(t,r,n){var o=e.Promise.resolve("");return n&&(o=e.parseAsync.call(this,t.output,r)),o.then(function(e){return{chain:n,output:e}})}},{type:e.logic.type.endif,regex:/^endif$/,next:[],open:!1},{type:e.logic.type.for_,regex:/^for\s+([a-zA-Z0-9_,\s]+)\s+in\s+([\S\s]+?)(?:\s+if\s+([^\s].*))?$/,next:[e.logic.type.else_,e.logic.type.endfor],open:!0,compile:function(t){var r=t.match[1],n=t.match[2],o=t.match[3],i=null;if(t.key_var=null,t.value_var=null,r.indexOf(",")>=0){if(2!==(i=r.split(",")).length)throw new e.Error("Invalid expression in for loop: "+r);t.key_var=i[0].trim(),t.value_var=i[1].trim()}else t.value_var=r;return t.expression=e.expression.compile.call(this,{type:e.expression.type.expression,value:n}).stack,o&&(t.conditional=e.expression.compile.call(this,{type:e.expression.type.expression,value:o}).stack),delete t.match,t},parse:function(t,r,n){var o,i,s=[],a=0,p=this,c=t.conditional,l=function(n,i){var l=e.ChildContext(r);return l[t.value_var]=i,t.key_var&&(l[t.key_var]=n),l.loop=function(e,t){var n=void 0!==c;return{index:e+1,index0:e,revindex:n?void 0:t-e,revindex0:n?void 0:t-e-1,first:0===e,last:n?void 0:e===t-1,length:n?void 0:t,parent:r}}(a,o),(void 0===c?e.Promise.resolve(!0):e.expression.parseAsync.call(p,c,l)).then(function(r){if(r)return e.parseAsync.call(p,t.output,l).then(function(e){s.push(e),a+=1})}).then(function(){delete l.loop,delete l[t.value_var],delete l[t.key_var],e.merge(r,l,!0)})};return e.expression.parseAsync.call(this,t.expression,r).then(function(t){return e.lib.isArray(t)?(o=t.length,e.async.forEach(t,function(e){return l(a,e)})):e.lib.is("Object",t)?(i=void 0!==t._keys?t._keys:Object.keys(t),o=i.length,e.async.forEach(i,function(e){if("_keys"!==e)return l(e,t[e])})):void 0}).then(function(){return{chain:0===s.length,output:e.output.call(p,s)}})}},{type:e.logic.type.endfor,regex:/^endfor$/,next:[],open:!1},{type:e.logic.type.set,regex:/^set\s+([a-zA-Z0-9_,\s]+)\s*=\s*([\s\S]+)$/,next:[],open:!0,compile:function(t){var r=t.match[1].trim(),n=t.match[2],o=e.expression.compile.call(this,{type:e.expression.type.expression,value:n}).stack;return t.key=r,t.expression=o,delete t.match,t},parse:function(t,r,n){var o=t.key;return e.expression.parseAsync.call(this,t.expression,r).then(function(t){return t===r&&(t=e.lib.copy(t)),r[o]=t,{chain:n,context:r}})}},{type:e.logic.type.setcapture,regex:/^set\s+([a-zA-Z0-9_,\s]+)$/,next:[e.logic.type.endset],open:!0,compile:function(e){var t=e.match[1].trim();return e.key=t,delete e.match,e},parse:function(t,r,n){var o=this,i=t.key;return e.parseAsync.call(this,t.output,r).then(function(e){return o.context[i]=e,r[i]=e,{chain:n,context:r}})}},{type:e.logic.type.endset,regex:/^endset$/,next:[],open:!1},{type:e.logic.type.filter,regex:/^filter\s+(.+)$/,next:[e.logic.type.endfilter],open:!0,compile:function(t){var r="|"+t.match[1].trim();return t.stack=e.expression.compile.call(this,{type:e.expression.type.expression,value:r}).stack,delete t.match,t},parse:function(t,r,n){var o=this;return e.parseAsync.call(this,t.output,r).then(function(n){var i=[{type:e.expression.type.string,value:n}].concat(t.stack);return e.expression.parseAsync.call(o,i,r)}).then(function(e){return{chain:n,output:e}})}},{type:e.logic.type.endfilter,regex:/^endfilter$/,next:[],open:!1},{type:e.logic.type.block,regex:/^block\s+([a-zA-Z0-9_]+)$/,next:[e.logic.type.endblock],open:!0,compile:function(e){return e.block=e.match[1].trim(),delete e.match,e},parse:function(t,r,n){var o,i=this,s=e.Promise.resolve(),a=e.indexOf(this.importedBlocks,t.block)>-1,p=this.blocks[t.block]&&e.indexOf(this.blocks[t.block],e.placeholders.parent)>-1;return e.forEach(this.parseStack,function(r){r.type==e.logic.type.for_&&(t.overwrite=!0)}),(void 0===this.blocks[t.block]||a||p||t.overwrite)&&(s=(s=t.expression?e.expression.parseAsync.call(this,t.output,r).then(function(t){return e.expression.parseAsync.call(i,{type:e.expression.type.string,value:t},r)}):e.parseAsync.call(this,t.output,r).then(function(t){return e.expression.parseAsync.call(i,{type:e.expression.type.string,value:t},r)})).then(function(r){a&&i.importedBlocks.splice(i.importedBlocks.indexOf(t.block),1),i.blocks[t.block]=p?e.Markup(i.blocks[t.block].replace(e.placeholders.parent,r)):r,i.originalBlockTokens[t.block]={type:t.type,block:t.block,output:t.output,overwrite:!0}})),s.then(function(){return o=i.child.blocks[t.block]?i.child.blocks[t.block]:i.blocks[t.block],{chain:n,output:o}})}},{type:e.logic.type.shortblock,regex:/^block\s+([a-zA-Z0-9_]+)\s+(.+)$/,next:[],open:!0,compile:function(t){return t.expression=t.match[2].trim(),t.output=e.expression.compile({type:e.expression.type.expression,value:t.expression}).stack,t.block=t.match[1].trim(),delete t.match,t},parse:function(t,r,n){for(var o=new Array(arguments.length),i=arguments.length;i-- >0;)o[i]=arguments[i];return e.logic.handler[e.logic.type.block].parse.apply(this,o)}},{type:e.logic.type.endblock,regex:/^endblock(?:\s+([a-zA-Z0-9_]+))?$/,next:[],open:!1},{type:e.logic.type.extends_,regex:/^extends\s+(.+)$/,next:[],open:!0,compile:function(t){var r=t.match[1].trim();return delete t.match,t.stack=e.expression.compile.call(this,{type:e.expression.type.expression,value:r}).stack,t},parse:function(t,r,n){var o=this,i=e.ChildContext(r);return e.expression.parseAsync.call(this,t.stack,r).then(function(t){return o.extend=t,(t instanceof e.Template?t:o.importFile(t)).renderAsync(i)}).then(function(){return e.lib.extend(r,i),{chain:n,output:""}})}},{type:e.logic.type.use,regex:/^use\s+(.+)$/,next:[],open:!0,compile:function(t){var r=t.match[1].trim();return delete t.match,t.stack=e.expression.compile.call(this,{type:e.expression.type.expression,value:r}).stack,t},parse:function(t,r,n){var o=this;return e.expression.parseAsync.call(this,t.stack,r).then(function(e){return o.importBlocks(e),{chain:n,output:""}})}},{type:e.logic.type.include,regex:/^include\s+(.+?)(?:\s|$)(ignore missing(?:\s|$))?(?:with\s+([\S\s]+?))?(?:\s|$)(only)?$/,next:[],open:!0,compile:function(t){var r=t.match,n=r[1].trim(),o=void 0!==r[2],i=r[3],s=void 0!==r[4]&&r[4].length;return delete t.match,t.only=s,t.ignoreMissing=o,t.stack=e.expression.compile.call(this,{type:e.expression.type.expression,value:n}).stack,void 0!==i&&(t.withStack=e.expression.compile.call(this,{type:e.expression.type.expression,value:i.trim()}).stack),t},parse:function(t,r,n){var o=t.only?{}:e.ChildContext(r),i=t.ignoreMissing,s=this,a={chain:n,output:""};return(void 0!==t.withStack?e.expression.parseAsync.call(this,t.withStack,r).then(function(t){e.lib.extend(o,t)}):e.Promise.resolve()).then(function(){return e.expression.parseAsync.call(s,t.stack,r)}).then(function(t){if(t instanceof e.Template)return t.renderAsync(o);try{return s.importFile(t).renderAsync(o)}catch(e){if(i)return"";throw e}}).then(function(e){return""!==e&&(a.output=e),a})}},{type:e.logic.type.spaceless,regex:/^spaceless$/,next:[e.logic.type.endspaceless],open:!0,parse:function(t,r,n){return e.parseAsync.call(this,t.output,r).then(function(t){var r=t.replace(/>\s+</g,"><").trim();return r=e.Markup(r),{chain:n,output:r}})}},{type:e.logic.type.endspaceless,regex:/^endspaceless$/,next:[],open:!1},{type:e.logic.type.macro,regex:/^macro\s+([a-zA-Z0-9_]+)\s*\(\s*((?:[a-zA-Z0-9_]+(?:\s*=\s*([\s\S]+))?(?:,\s*)?)*)\s*\)$/,next:[e.logic.type.endmacro],open:!0,compile:function(t){var r=t.match[1],n=t.match[2].split(/\s*,\s*/),o=n.map(function(e){return e.split(/\s*=\s*/)[0]}),i=o.length;if(i>1)for(var s={},a=0;a<i;a++){var p=o[a];if(s[p])throw new e.Error("Duplicate arguments for parameter: "+p);s[p]=1}return t.macroName=r,t.parameters=o,t.defaults=n.reduce(function(t,r){var n=r.split(/\s*=\s*/),o=n[0],i=n[1];return t[o]=i?e.expression.compile.call(this,{type:e.expression.type.expression,value:i}).stack:void 0,t},{}),delete t.match,t},parse:function(t,r,n){var o=this;return this.macros[t.macroName]=function(){var n={_self:o.macros},i=Array.prototype.slice.call(arguments);return e.async.forEach(t.parameters,function(o,s){return void 0!==i[s]?(n[o]=i[s],!0):void 0!==t.defaults[o]?e.expression.parseAsync.call(this,t.defaults[o],r).then(function(t){return n[o]=t,e.Promise.resolve()}):(n[o]=void 0,!0)}).then(function(){return e.parseAsync.call(o,t.output,n)})},{chain:n,output:""}}},{type:e.logic.type.endmacro,regex:/^endmacro$/,next:[],open:!1},{type:e.logic.type.import_,regex:/^import\s+(.+)\s+as\s+([a-zA-Z0-9_]+)$/,next:[],open:!0,compile:function(t){var r=t.match[1].trim(),n=t.match[2].trim();return delete t.match,t.expression=r,t.contextName=n,t.stack=e.expression.compile.call(this,{type:e.expression.type.expression,value:r}).stack,t},parse:function(t,r,n){var o=this,i={chain:n,output:""};return"_self"===t.expression?(r[t.contextName]=this.macros,e.Promise.resolve(i)):e.expression.parseAsync.call(this,t.stack,r).then(function(e){return o.importFile(e||t.expression)}).then(function(e){return r[t.contextName]=e.renderAsync({},{output:"macros"}),i})}},{type:e.logic.type.from,regex:/^from\s+(.+)\s+import\s+([a-zA-Z0-9_, ]+)$/,next:[],open:!0,compile:function(t){for(var r=t.match[1].trim(),n=t.match[2].trim().split(/\s*,\s*/),o={},i=0;i<n.length;i++){var s=n[i],a=s.match(/^([a-zA-Z0-9_]+)\s+as\s+([a-zA-Z0-9_]+)$/);a?o[a[1].trim()]=a[2].trim():s.match(/^([a-zA-Z0-9_]+)$/)&&(o[s]=s)}return delete t.match,t.expression=r,t.macroNames=o,t.stack=e.expression.compile.call(this,{type:e.expression.type.expression,value:r}).stack,t},parse:function(t,r,n){var o=this,i=e.Promise.resolve(this.macros);return"_self"!==t.expression&&(i=e.expression.parseAsync.call(this,t.stack,r).then(function(e){return o.importFile(e||t.expression)}).then(function(e){return e.renderAsync({},{output:"macros"})})),i.then(function(e){for(var o in t.macroNames)e.hasOwnProperty(o)&&(r[t.macroNames[o]]=e[o]);return{chain:n,output:""}})}},{type:e.logic.type.embed,regex:/^embed\s+(.+?)(?:\s+(ignore missing))?(?:\s+with\s+([\S\s]+?))?(?:\s+(only))?$/,next:[e.logic.type.endembed],open:!0,compile:function(t){var r=t.match,n=r[1].trim(),o=void 0!==r[2],i=r[3],s=void 0!==r[4]&&r[4].length;return delete t.match,t.only=s,t.ignoreMissing=o,t.stack=e.expression.compile.call(this,{type:e.expression.type.expression,value:n}).stack,void 0!==i&&(t.withStack=e.expression.compile.call(this,{type:e.expression.type.expression,value:i.trim()}).stack),t},parse:function(t,r,n){var o,i,s={},a=this,p=e.Promise.resolve();if(!t.only)for(o in r)r.hasOwnProperty(o)&&(s[o]=r[o]);return void 0!==t.withStack&&(p=e.expression.parseAsync.call(this,t.withStack,r).then(function(e){for(o in e)e.hasOwnProperty(o)&&(s[o]=e[o])})),p.then(function(){return p=null,e.expression.parseAsync.call(a,t.stack,s)}).then(function(r){if(r instanceof e.Template)i=r;else try{i=a.importFile(r)}catch(e){if(t.ignoreMissing)return"";throw a=null,e}return a._blocks=e.lib.copy(a.blocks),a.blocks={},e.parseAsync.call(a,t.output,s).then(function(){return i.renderAsync(s,{blocks:a.blocks})})}).then(function(t){return a.blocks=e.lib.copy(a._blocks),{chain:n,output:t}})}},{type:e.logic.type.endembed,regex:/^endembed$/,next:[],open:!1},{type:e.logic.type.with,regex:/^(?:with\s+([\S\s]+?))(?:\s|$)(only)?$/,next:[e.logic.type.endwith],open:!0,compile:function(t){var r=t.match,n=r[1],o=void 0!==r[2]&&r[2].length;return delete t.match,t.only=o,void 0!==n&&(t.withStack=e.expression.compile.call(this,{type:e.expression.type.expression,value:n.trim()}).stack),t},parse:function(t,r,n){var o,i={},s=this,a=e.Promise.resolve();return t.only||(i=e.ChildContext(r)),void 0!==t.withStack&&(a=e.expression.parseAsync.call(this,t.withStack,r).then(function(e){for(o in e)e.hasOwnProperty(o)&&(i[o]=e[o])})),a.then(function(){return e.parseAsync.call(s,t.output,i)}).then(function(e){return{chain:n,output:e}})}},{type:e.logic.type.endwith,regex:/^endwith$/,next:[],open:!1}],e.logic.handler={},e.logic.extendType=function(t,r){r=r||"Twig.logic.type"+t,e.logic.type[t]=r},e.logic.extend=function(t){if(!t.type)throw new e.Error("Unable to extend logic definition. No type provided for "+t);e.logic.extendType(t.type),e.logic.handler[t.type]=t};e.logic.definitions.length>0;)e.logic.extend(e.logic.definitions.shift());return e.logic.compile=function(t){var r=t.value.trim(),n=e.logic.tokenize.call(this,r),o=e.logic.handler[n.type];return o.compile&&(n=o.compile.call(this,n),e.log.trace("Twig.logic.compile: ","Compiled logic token to ",n)),n},e.logic.tokenize=function(t){var r=null,n=null,o=null,i=null,s=null,a=null,p=null;for(r in t=t.trim(),e.logic.handler)for(n=e.logic.handler[r].type,i=o=e.logic.handler[r].regex,e.lib.isArray(o)||(i=[o]),s=i.length,a=0;a<s;a++)if(null!==(p=i[a].exec(t)))return e.log.trace("Twig.logic.tokenize: ","Matched a ",n," regular expression of ",p),{type:n,match:p};throw new e.Error("Unable to parse '"+t.trim()+"'")},e.logic.parse=function(t,r,n,o){return e.async.potentiallyAsync(this,o,function(){e.log.debug("Twig.logic.parse: ","Parsing logic token ",t);var o,i=e.logic.handler[t.type],s=this;return i.parse?(s.parseStack.unshift(t),o=i.parse.call(s,t,r||{},n),e.isPromise(o)?o=o.then(function(e){return s.parseStack.shift(),e}):s.parseStack.shift(),o):""})},e}},function(e,t){e.exports=__webpack_require__(/*! fs */ 0)},function(e,t,r){e.exports=function(e){"use strict";var t,n;try{t=r(9),n=r(0)}catch(e){}e.Templates.registerLoader("fs",function(r,o,i,s){var a,p=null,c=o.precompiled,l=this.parsers[o.parser]||this.parser.twig;if(!t||!n)throw new e.Error('Unsupported platform: Unable to load from file because there is no "fs" or "path" implementation');var u=function(e,t){e?"function"==typeof s&&s(e):(!0===c&&(t=JSON.parse(t)),o.data=t,o.path=o.path||r,a=l.call(this,o),"function"==typeof i&&i(a))};if(o.path=o.path||r,o.async)return t.stat(o.path,function(r,n){!r&&n.isFile()?t.readFile(o.path,"utf8",u):"function"==typeof s&&s(new e.Error("Unable to find template file "+o.path))}),!0;try{if(!t.statSync(o.path).isFile())throw new e.Error("Unable to find template file "+o.path)}catch(t){throw new e.Error("Unable to find template file "+o.path)}return p=t.readFileSync(o.path,"utf8"),u(void 0,p),a})}},function(e,t){e.exports=function(e){"use strict";e.Templates.registerLoader("ajax",function(t,r,n,o){var i,s,a=r.precompiled,p=this.parsers[r.parser]||this.parser.twig;if("undefined"==typeof XMLHttpRequest)throw new e.Error('Unsupported platform: Unable to do ajax requests because there is no "XMLHTTPRequest" implementation');return(s=new XMLHttpRequest).onreadystatechange=function(){var c=null;4===s.readyState&&(200===s.status||window.cordova&&0==s.status?(e.log.debug("Got template ",s.responseText),c=!0===a?JSON.parse(s.responseText):s.responseText,r.url=t,r.data=c,i=p.call(this,r),"function"==typeof n&&n(i)):"function"==typeof o&&o(s))},s.open("GET",t,!!r.async),s.send(),!!r.async||i})}},function(e,t,r){"use strict";e.exports=function(e){return!1!==e&&(0!==e&&0!==e&&(""!==e&&"0"!==e&&((!Array.isArray(e)||0!==e.length)&&(null!==e&&void 0!==e))))}},function(e,t,r){"use strict";e.exports=function(e,t){var r,n,o=["Sun","Mon","Tues","Wednes","Thurs","Fri","Satur","January","February","March","April","May","June","July","August","September","October","November","December"],i=/\\?(.?)/gi,s=function(e,t){return n[e]?n[e]():t},a=function(e,t){for(e=String(e);e.length<t;)e="0"+e;return e};n={d:function(){return a(n.j(),2)},D:function(){return n.l().slice(0,3)},j:function(){return r.getDate()},l:function(){return o[n.w()]+"day"},N:function(){return n.w()||7},S:function(){var e=n.j(),t=e%10;return t<=3&&1===parseInt(e%100/10,10)&&(t=0),["st","nd","rd"][t-1]||"th"},w:function(){return r.getDay()},z:function(){var e=new Date(n.Y(),n.n()-1,n.j()),t=new Date(n.Y(),0,1);return Math.round((e-t)/864e5)},W:function(){var e=new Date(n.Y(),n.n()-1,n.j()-n.N()+3),t=new Date(e.getFullYear(),0,4);return a(1+Math.round((e-t)/864e5/7),2)},F:function(){return o[6+n.n()]},m:function(){return a(n.n(),2)},M:function(){return n.F().slice(0,3)},n:function(){return r.getMonth()+1},t:function(){return new Date(n.Y(),n.n(),0).getDate()},L:function(){var e=n.Y();return e%4==0&e%100!=0|e%400==0},o:function(){var e=n.n(),t=n.W();return n.Y()+(12===e&&t<9?1:1===e&&t>9?-1:0)},Y:function(){return r.getFullYear()},y:function(){return n.Y().toString().slice(-2)},a:function(){return r.getHours()>11?"pm":"am"},A:function(){return n.a().toUpperCase()},B:function(){var e=3600*r.getUTCHours(),t=60*r.getUTCMinutes(),n=r.getUTCSeconds();return a(Math.floor((e+t+n+3600)/86.4)%1e3,3)},g:function(){return n.G()%12||12},G:function(){return r.getHours()},h:function(){return a(n.g(),2)},H:function(){return a(n.G(),2)},i:function(){return a(r.getMinutes(),2)},s:function(){return a(r.getSeconds(),2)},u:function(){return a(1e3*r.getMilliseconds(),6)},e:function(){throw new Error("Not supported (see source code of date() for timezone on how to add support)")},I:function(){return new Date(n.Y(),0)-Date.UTC(n.Y(),0)!=new Date(n.Y(),6)-Date.UTC(n.Y(),6)?1:0},O:function(){var e=r.getTimezoneOffset(),t=Math.abs(e);return(e>0?"-":"+")+a(100*Math.floor(t/60)+t%60,4)},P:function(){var e=n.O();return e.substr(0,3)+":"+e.substr(3,2)},T:function(){return"UTC"},Z:function(){return 60*-r.getTimezoneOffset()},c:function(){return"Y-m-d\\TH:i:sP".replace(i,s)},r:function(){return"D, d M Y H:i:s O".replace(i,s)},U:function(){return r/1e3|0}};return function(e,t){return r=void 0===t?new Date:t instanceof Date?new Date(t):new Date(1e3*t),e.replace(i,s)}(e,t)}},function(e,t,r){"use strict";e.exports=function(e,t){var r,n,o,i,s,a,p,c,l,u,f;if(!e)return!1;e=e.replace(/^\s+|\s+$/g,"").replace(/\s{2,}/g," ").replace(/[\t\r\n]/g,"").toLowerCase();var h=new RegExp(["^(\\d{1,4})","([\\-\\.\\/:])","(\\d{1,2})","([\\-\\.\\/:])","(\\d{1,4})","(?:\\s(\\d{1,2}):(\\d{2})?:?(\\d{2})?)?","(?:\\s([A-Z]+)?)?$"].join(""));if((n=e.match(h))&&n[2]===n[4])if(n[1]>1901)switch(n[2]){case"-":return!(n[3]>12||n[5]>31)&&new Date(n[1],parseInt(n[3],10)-1,n[5],n[6]||0,n[7]||0,n[8]||0,n[9]||0)/1e3;case".":return!1;case"/":return!(n[3]>12||n[5]>31)&&new Date(n[1],parseInt(n[3],10)-1,n[5],n[6]||0,n[7]||0,n[8]||0,n[9]||0)/1e3}else if(n[5]>1901)switch(n[2]){case"-":case".":return!(n[3]>12||n[1]>31)&&new Date(n[5],parseInt(n[3],10)-1,n[1],n[6]||0,n[7]||0,n[8]||0,n[9]||0)/1e3;case"/":return!(n[1]>12||n[3]>31)&&new Date(n[5],parseInt(n[1],10)-1,n[3],n[6]||0,n[7]||0,n[8]||0,n[9]||0)/1e3}else switch(n[2]){case"-":return!(n[3]>12||n[5]>31||n[1]<70&&n[1]>38)&&(i=n[1]>=0&&n[1]<=38?+n[1]+2e3:n[1],new Date(i,parseInt(n[3],10)-1,n[5],n[6]||0,n[7]||0,n[8]||0,n[9]||0)/1e3);case".":return n[5]>=70?!(n[3]>12||n[1]>31)&&new Date(n[5],parseInt(n[3],10)-1,n[1],n[6]||0,n[7]||0,n[8]||0,n[9]||0)/1e3:n[5]<60&&!n[6]&&(!(n[1]>23||n[3]>59)&&(o=new Date,new Date(o.getFullYear(),o.getMonth(),o.getDate(),n[1]||0,n[3]||0,n[5]||0,n[9]||0)/1e3));case"/":return!(n[1]>12||n[3]>31||n[5]<70&&n[5]>38)&&(i=n[5]>=0&&n[5]<=38?+n[5]+2e3:n[5],new Date(i,parseInt(n[1],10)-1,n[3],n[6]||0,n[7]||0,n[8]||0,n[9]||0)/1e3);case":":return!(n[1]>23||n[3]>59||n[5]>59)&&(o=new Date,new Date(o.getFullYear(),o.getMonth(),o.getDate(),n[1]||0,n[3]||0,n[5]||0)/1e3)}if("now"===e)return null===t||isNaN(t)?(new Date).getTime()/1e3|0:0|t;if(!isNaN(r=Date.parse(e)))return r/1e3|0;if(h=new RegExp(["^([0-9]{4}-[0-9]{2}-[0-9]{2})","[ t]","([0-9]{2}:[0-9]{2}:[0-9]{2}(\\.[0-9]+)?)","([\\+-][0-9]{2}(:[0-9]{2})?|z)"].join("")),(n=e.match(h))&&("z"===n[4]?n[4]="Z":n[4].match(/^([+-][0-9]{2})$/)&&(n[4]=n[4]+":00"),!isNaN(r=Date.parse(n[1]+"T"+n[2]+n[4]))))return r/1e3|0;function y(e){var t=e.split(" "),r=t[0],n=t[1].substring(0,3),o=/\d+/.test(r),i="ago"===t[2],c=("last"===r?-1:1)*(i?-1:1);if(o&&(c*=parseInt(r,10)),p.hasOwnProperty(n)&&!t[1].match(/^mon(day|\.)?$/i))return s["set"+p[n]](s["get"+p[n]]()+c);if("wee"===n)return s.setDate(s.getDate()+7*c);if("next"===r||"last"===r)!function(e,t,r){var n,o=a[t];void 0!==o&&(0==(n=o-s.getDay())?n=7*r:n>0&&"last"===e?n-=7:n<0&&"next"===e&&(n+=7),s.setDate(s.getDate()+n))}(r,n,c);else if(!o)return!1;return!0}if(s=t?new Date(1e3*t):new Date,a={sun:0,mon:1,tue:2,wed:3,thu:4,fri:5,sat:6},p={yea:"FullYear",mon:"Month",day:"Date",hou:"Hours",min:"Minutes",sec:"Seconds"},u="([+-]?\\d+\\s"+(l="(years?|months?|weeks?|days?|hours?|minutes?|min|seconds?|sec|sunday|sun\\.?|monday|mon\\.?|tuesday|tue\\.?|wednesday|wed\\.?|thursday|thu\\.?|friday|fri\\.?|saturday|sat\\.?)")+"|(last|next)\\s"+l+")(\\sago)?",!(n=e.match(new RegExp(u,"gi"))))return!1;for(f=0,c=n.length;f<c;f++)if(!y(n[f]))return!1;return s.getTime()/1e3}},function(e,t,r){"use strict";e.exports=function(e,t){t=(((t||"")+"").toLowerCase().match(/<[a-z][a-z0-9]*>/g)||[]).join("");return e.replace(/<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi,"").replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,function(e,r){return t.indexOf("<"+r.toLowerCase()+">")>-1?e:""})}},function(e,t,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};e.exports=function(){var e,t,r,o=0,i=arguments,s=i.length,a=function(e){if("[object Array]"===Object.prototype.toString.call(e))return e;var t=[];for(var r in e)e.hasOwnProperty(r)&&t.push(e[r]);return t},p=function e(t,r){var o=0,i=0,s=0,p=0,c=0;if(t===r)return 0;if("object"===(void 0===t?"undefined":n(t))){if("object"===(void 0===r?"undefined":n(r))){if(t=a(t),r=a(r),c=t.length,(p=r.length)>c)return 1;if(p<c)return-1;for(o=0,i=c;o<i;++o){if(1===(s=e(t[o],r[o])))return 1;if(-1===s)return-1}return 0}return-1}return"object"===(void 0===r?"undefined":n(r))?1:isNaN(r)&&!isNaN(t)?0===t?0:t<0?1:-1:isNaN(t)&&!isNaN(r)?0===r?0:r>0?1:-1:r===t?0:r>t?1:-1};if(0===s)throw new Error("At least one value should be passed to min()");if(1===s){if("object"!==n(i[0]))throw new Error("Wrong parameter count for min()");if(0===(e=a(i[0])).length)throw new Error("Array must contain at least one element for min()")}else e=i;for(t=e[0],o=1,r=e.length;o<r;++o)-1===p(t,e[o])&&(t=e[o]);return t}},function(e,t,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};e.exports=function(){var e,t,r,o=0,i=arguments,s=i.length,a=function(e){if("[object Array]"===Object.prototype.toString.call(e))return e;var t=[];for(var r in e)e.hasOwnProperty(r)&&t.push(e[r]);return t},p=function e(t,r){var o=0,i=0,s=0,p=0,c=0;if(t===r)return 0;if("object"===(void 0===t?"undefined":n(t))){if("object"===(void 0===r?"undefined":n(r))){if(t=a(t),r=a(r),c=t.length,(p=r.length)>c)return 1;if(p<c)return-1;for(o=0,i=c;o<i;++o){if(1===(s=e(t[o],r[o])))return 1;if(-1===s)return-1}return 0}return-1}return"object"===(void 0===r?"undefined":n(r))?1:isNaN(r)&&!isNaN(t)?0===t?0:t<0?1:-1:isNaN(t)&&!isNaN(r)?0===r?0:r>0?1:-1:r===t?0:r>t?1:-1};if(0===s)throw new Error("At least one value should be passed to max()");if(1===s){if("object"!==n(i[0]))throw new Error("Wrong parameter count for max()");if(0===(e=a(i[0])).length)throw new Error("Array must contain at least one element for max()")}else e=i;for(t=e[0],o=1,r=e.length;o<r;++o)1===p(t,e[o])&&(t=e[o]);return t}},function(e,t,r){"use strict";e.exports=function(e,t,r){var n,o,i,s;if(t|=0,i=(e*=n=Math.pow(10,t))%1==.5*(s=e>0|-(e<0)),o=Math.floor(e),i)switch(r){case"PHP_ROUND_HALF_DOWN":e=o+(s<0);break;case"PHP_ROUND_HALF_EVEN":e=o+o%2*s;break;case"PHP_ROUND_HALF_ODD":e=o+!(o%2);break;default:e=o+(s>0)}return(i?e:Math.round(e))/n}},function(e,t,r){"use strict";e.exports=function(e,t){return r(1).apply(this,[e].concat(t))}},function(e,t,r){e.exports=function(e){e.lib={},e.lib.sprintf=r(1),e.lib.vsprintf=r(19),e.lib.round=r(18),e.lib.max=r(17),e.lib.min=r(16),e.lib.strip_tags=r(15),e.lib.strtotime=r(14),e.lib.date=r(13),e.lib.boolval=r(12);var t=Object.prototype.toString;return e.lib.is=function(e,r){return void 0!==r&&null!==r&&("Array"===e&&Array.isArray?Array.isArray(r):t.call(r).slice(8,-1)===e)},e.lib.isArray=Array.isArray||function(e){return"Array"===t.call(e).slice(8,-1)},e.lib.copy=function(e){var t,r={};for(t in e)r[t]=e[t];return r},e.lib.extend=function(e,t){var r,n=Object.keys(t||{});for(r=n.length;r--;)e[n[r]]=t[n[r]];return e},e.lib.replaceAll=function(e,t,r){return e.split(t).join(r)},e.lib.chunkArray=function(t,r){var n=[],o=0,i=t.length;if(r<1||!e.lib.is("Array",t))return[];for(;o<i;)n.push(t.slice(o,o+=r));return n},e}},function(e,t){e.exports=function(t){return t.functions={range:function(e,t,r){var n,o,i=[],s=r||1,a=!1;if(isNaN(e)||isNaN(t)?isNaN(e)&&isNaN(t)?(a=!0,n=e.charCodeAt(0),o=t.charCodeAt(0)):(n=isNaN(e)?0:e,o=isNaN(t)?0:t):(n=parseInt(e,10),o=parseInt(t,10)),!(n>o))for(;n<=o;)i.push(a?String.fromCharCode(n):n),n+=s;else for(;n>=o;)i.push(a?String.fromCharCode(n):n),n-=s;return i},cycle:function(e,t){return e[t%e.length]},dump:function(){var e=arguments.length;for(args=new Array(e);e-- >0;)args[e]=arguments[e];var r=0,n="",o=function(e){for(var t="";e>0;)e--,t+="  ";return t},i=function(e){n+=o(r),"object"==typeof e?s(e):"function"==typeof e?n+="function()\n":"string"==typeof e?n+="string("+e.length+') "'+e+'"\n':"number"==typeof e?n+="number("+e+")\n":"boolean"==typeof e&&(n+="bool("+e+")\n")},s=function(e){var t;if(null===e)n+="NULL\n";else if(void 0===e)n+="undefined\n";else if("object"==typeof e){for(t in n+=o(r)+typeof e,r++,n+="("+function(e){var t,r=0;for(t in e)e.hasOwnProperty(t)&&r++;return r}(e)+") {\n",e)n+=o(r)+"["+t+"]=> \n",i(e[t]);n+=o(--r)+"}\n"}else i(e)};return 0==args.length&&args.push(this.context),t.forEach(args,function(e){s(e)}),n},date:function(e,r){var n;if(void 0===e||null===e||""===e)n=new Date;else if(t.lib.is("Date",e))n=e;else if(t.lib.is("String",e))n=e.match(/^[0-9]+$/)?new Date(1e3*e):new Date(1e3*t.lib.strtotime(e));else{if(!t.lib.is("Number",e))throw new t.Error("Unable to parse date "+e);n=new Date(1e3*e)}return n},block:function(e){return this.originalBlockTokens[e]?t.logic.parse.call(this,this.originalBlockTokens[e],this.context).output:this.blocks[e]},parent:function(){return t.placeholders.parent},attribute:function(e,r,n){return t.lib.is("Object",e)&&e.hasOwnProperty(r)?"function"==typeof e[r]?e[r].apply(void 0,n):e[r]:e[r]||void 0},max:function(e){return t.lib.is("Object",e)?(delete e._keys,t.lib.max(e)):t.lib.max.apply(null,arguments)},min:function(e){return t.lib.is("Object",e)?(delete e._keys,t.lib.min(e)):t.lib.min.apply(null,arguments)},template_from_string:function(e){return void 0===e&&(e=""),t.Templates.parsers.twig({options:this.options,data:e})},random:function(e){var r=2147483648;function n(e){var t=Math.floor(Math.random()*r),n=Math.min.call(null,0,e),o=Math.max.call(null,0,e);return n+Math.floor((o-n+1)*t/r)}if(t.lib.is("Number",e))return n(e);if(t.lib.is("String",e))return e.charAt(n(e.length-1));if(t.lib.is("Array",e))return e[n(e.length-1)];if(t.lib.is("Object",e)){var o=Object.keys(e);return e[o[n(o.length-1)]]}return n(r-1)},source:function(r,n){var o,i,s,a=!1;void 0!==e&&void 0!==e.exports&&"undefined"==typeof window?(i="fs",s=__dirname+"/"+r):(i="ajax",s=r);var p={id:r,path:s,method:i,parser:"source",async:!1,fetchTemplateSource:!0};void 0===n&&(n=!1);try{void 0===(o=t.Templates.loadRemote(r,p))||null===o?o="":a=!0}catch(e){t.log.debug("Twig.functions.source: ","Problem loading template  ",e)}return a||n?o:'Template "{name}" is not defined.'.replace("{name}",r)}},t._function=function(e,r,n){if(!t.functions[e])throw"Unable to find function "+e;return t.functions[e](r,n)},t._function.extend=function(e,r){t.functions[e]=r},t}},function(e,t){e.exports=function(e){function t(e,t){var r=Object.prototype.toString.call(t).slice(8,-1);return void 0!==t&&null!==t&&r===e}return e.filters={upper:function(e){return"string"!=typeof e?e:e.toUpperCase()},lower:function(e){return"string"!=typeof e?e:e.toLowerCase()},capitalize:function(e){return"string"!=typeof e?e:e.substr(0,1).toUpperCase()+e.toLowerCase().substr(1)},title:function(e){return"string"!=typeof e?e:e.toLowerCase().replace(/(^|\s)([a-z])/g,function(e,t,r){return t+r.toUpperCase()})},length:function(t){return e.lib.is("Array",t)||"string"==typeof t?t.length:e.lib.is("Object",t)?void 0===t._keys?Object.keys(t).length:t._keys.length:0},reverse:function(e){if(t("Array",e))return e.reverse();if(t("String",e))return e.split("").reverse().join("");if(t("Object",e)){var r=e._keys||Object.keys(e).reverse();return e._keys=r,e}},sort:function(e){if(t("Array",e))return e.sort();if(t("Object",e)){delete e._keys;var r=Object.keys(e).sort(function(t,r){var n;return e[t]>e[r]==!(e[t]<=e[r])?e[t]>e[r]?1:e[t]<e[r]?-1:0:isNaN(n=parseFloat(e[t]))||isNaN(b1=parseFloat(e[r]))?"string"==typeof e[t]?e[t]>e[r].toString()?1:e[t]<e[r].toString()?-1:0:"string"==typeof e[r]?e[t].toString()>e[r]?1:e[t].toString()<e[r]?-1:0:null:n>b1?1:n<b1?-1:0});return e._keys=r,e}},keys:function(t){if(void 0!==t&&null!==t){var r=t._keys||Object.keys(t),n=[];return e.forEach(r,function(e){"_keys"!==e&&t.hasOwnProperty(e)&&n.push(e)}),n}},url_encode:function(e){if(void 0!==e&&null!==e){var t=encodeURIComponent(e);return t=t.replace("'","%27")}},join:function(r,n){if(void 0!==r&&null!==r){var o="",i=[],s=null;return n&&n[0]&&(o=n[0]),t("Array",r)?i=r:(s=r._keys||Object.keys(r),e.forEach(s,function(e){"_keys"!==e&&r.hasOwnProperty(e)&&i.push(r[e])})),i.join(o)}},default:function(t,r){if(void 0!==r&&r.length>1)throw new e.Error("default filter expects one argument");return void 0===t||null===t||""===t?void 0===r?"":r[0]:t},json_encode:function(r){if(void 0===r||null===r)return"null";if("object"==typeof r&&t("Array",r))return o=[],e.forEach(r,function(t){o.push(e.filters.json_encode(t))}),"["+o.join(",")+"]";if("object"==typeof r&&t("Date",r))return'"'+r.toISOString()+'"';if("object"==typeof r){var n=r._keys||Object.keys(r),o=[];return e.forEach(n,function(t){o.push(JSON.stringify(t)+":"+e.filters.json_encode(r[t]))}),"{"+o.join(",")+"}"}return JSON.stringify(r)},merge:function(r,n){var o=[],i=0,s=[];if(t("Array",r)?e.forEach(n,function(e){t("Array",e)||(o={})}):o={},t("Array",o)||(o._keys=[]),t("Array",r)?e.forEach(r,function(e){o._keys&&o._keys.push(i),o[i]=e,i++}):(s=r._keys||Object.keys(r),e.forEach(s,function(e){o[e]=r[e],o._keys.push(e);var t=parseInt(e,10);!isNaN(t)&&t>=i&&(i=t+1)})),e.forEach(n,function(r){t("Array",r)?e.forEach(r,function(e){o._keys&&o._keys.push(i),o[i]=e,i++}):(s=r._keys||Object.keys(r),e.forEach(s,function(e){o[e]||o._keys.push(e),o[e]=r[e];var t=parseInt(e,10);!isNaN(t)&&t>=i&&(i=t+1)}))}),0===n.length)throw new e.Error("Filter merge expects at least one parameter");return o},date:function(t,r){var n=e.functions.date(t),o=r&&r.length?r[0]:"F j, Y H:i";return e.lib.date(o,n)},date_modify:function(t,r){if(void 0!==t&&null!==t){if(void 0===r||1!==r.length)throw new e.Error("date_modify filter expects 1 argument");var n,o=r[0];return e.lib.is("Date",t)&&(n=e.lib.strtotime(o,t.getTime()/1e3)),e.lib.is("String",t)&&(n=e.lib.strtotime(o,e.lib.strtotime(t))),e.lib.is("Number",t)&&(n=e.lib.strtotime(o,t)),new Date(1e3*n)}},replace:function(t,r){if(void 0!==t&&null!==t){var n,o=r[0];for(n in o)o.hasOwnProperty(n)&&"_keys"!==n&&(t=e.lib.replaceAll(t,n,o[n]));return t}},format:function(t,r){if(void 0!==t&&null!==t)return e.lib.vsprintf(t,r)},striptags:function(t,r){if(void 0!==t&&null!==t)return e.lib.strip_tags(t,r)},escape:function(t,r){if(void 0!==t&&null!==t){var n="html";if(r&&r.length&&!0!==r[0]&&(n=r[0]),"html"==n){var o=t.toString().replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;");return e.Markup(o,"html")}if("js"==n){o=t.toString();for(var i="",s=0;s<o.length;s++){if(o[s].match(/^[a-zA-Z0-9,\._]$/))i+=o[s];else i+=(a=o.charCodeAt(s))<128?"\\x"+a.toString(16).toUpperCase():e.lib.sprintf("\\u%04s",a.toString(16).toUpperCase())}return e.Markup(i,"js")}if("css"==n){for(o=t.toString(),i="",s=0;s<o.length;s++){if(o[s].match(/^[a-zA-Z0-9]$/))i+=o[s];else i+="\\"+(a=o.charCodeAt(s)).toString(16).toUpperCase()+" "}return e.Markup(i,"css")}if("url"==n){i=e.filters.url_encode(t);return e.Markup(i,"url")}if("html_attr"==n){for(o=t.toString(),i="",s=0;s<o.length;s++)if(o[s].match(/^[a-zA-Z0-9,\.\-_]$/))i+=o[s];else if(o[s].match(/^[&<>"]$/))i+=o[s].replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");else{var a;i+=(a=o.charCodeAt(s))<=31&&9!=a&&10!=a&&13!=a?"&#xFFFD;":a<128?e.lib.sprintf("&#x%02s;",a.toString(16).toUpperCase()):e.lib.sprintf("&#x%04s;",a.toString(16).toUpperCase())}return e.Markup(i,"html_attr")}throw new e.Error("escape strategy unsupported")}},e:function(t,r){return e.filters.escape(t,r)},nl2br:function(t){if(void 0!==t&&null!==t){var r="<br />BACKSLASH_n_replace";return t=e.filters.escape(t).replace(/\r\n/g,r).replace(/\r/g,r).replace(/\n/g,r),t=e.lib.replaceAll(t,"BACKSLASH_n_replace","\n"),e.Markup(t)}},number_format:function(e,t){var r=e,n=t&&t[0]?t[0]:void 0,o=t&&void 0!==t[1]?t[1]:".",i=t&&void 0!==t[2]?t[2]:",";r=(r+"").replace(/[^0-9+\-Ee.]/g,"");var s=isFinite(+r)?+r:0,a=isFinite(+n)?Math.abs(n):0,p="";return(p=(a?function(e,t){var r=Math.pow(10,t);return""+Math.round(e*r)/r}(s,a):""+Math.round(s)).split("."))[0].length>3&&(p[0]=p[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,i)),(p[1]||"").length<a&&(p[1]=p[1]||"",p[1]+=new Array(a-p[1].length+1).join("0")),p.join(o)},trim:function(e,t){if(void 0!==e&&null!==e){var r,n=""+e;r=t&&t[0]?""+t[0]:" \n\r\t\f\v            ​\u2028\u2029　";for(var o=0;o<n.length;o++)if(-1===r.indexOf(n.charAt(o))){n=n.substring(o);break}for(o=n.length-1;o>=0;o--)if(-1===r.indexOf(n.charAt(o))){n=n.substring(0,o+1);break}return-1===r.indexOf(n.charAt(0))?n:""}},truncate:function(e,t){var r=30,n=!1,o="...";if(e+="",t&&(t[0]&&(r=t[0]),t[1]&&(n=t[1]),t[2]&&(o=t[2])),e.length>r){if(n&&-1===(r=e.indexOf(" ",r)))return e;e=e.substr(0,r)+o}return e},slice:function(t,r){if(void 0!==t&&null!==t){if(void 0===r||r.length<1)throw new e.Error("slice filter expects at least 1 argument");var n=r[0]||0,o=r.length>1?r[1]:t.length,i=n>=0?n:Math.max(t.length+n,0);if(e.lib.is("Array",t)){for(var s=[],a=i;a<i+o&&a<t.length;a++)s.push(t[a]);return s}if(e.lib.is("String",t))return t.substr(i,o);throw new e.Error("slice filter expects value to be an array or string")}},abs:function(e){if(void 0!==e&&null!==e)return Math.abs(e)},first:function(e){if(t("Array",e))return e[0];if(t("Object",e)){if("_keys"in e)return e[e._keys[0]]}else if("string"==typeof e)return e.substr(0,1)},split:function(t,r){if(void 0!==t&&null!==t){if(void 0===r||r.length<1||r.length>2)throw new e.Error("split filter expects 1 or 2 argument");if(e.lib.is("String",t)){var n=r[0],o=r[1],i=t.split(n);if(void 0===o)return i;if(o<0)return t.split(n,i.length+o);var s=[];if(""==n)for(;i.length>0;){for(var a="",p=0;p<o&&i.length>0;p++)a+=i.shift();s.push(a)}else{for(p=0;p<o-1&&i.length>0;p++)s.push(i.shift());i.length>0&&s.push(i.join(n))}return s}throw new e.Error("split filter expects value to be a string")}},last:function(t){var r;return e.lib.is("Object",t)?t[(r=void 0===t._keys?Object.keys(t):t._keys)[r.length-1]]:t[t.length-1]},raw:function(t){return e.Markup(t)},batch:function(t,r){var n,o,i,s=r.shift(),a=r.shift();if(!e.lib.is("Array",t))throw new e.Error("batch filter expects items to be an array");if(!e.lib.is("Number",s))throw new e.Error("batch filter expects size to be a number");if(s=Math.ceil(s),n=e.lib.chunkArray(t,s),a&&t.length%s!=0){for(i=s-(o=n.pop()).length;i--;)o.push(a);n.push(o)}return n},round:function(t,r){var n=(r=r||[]).length>0?r[0]:0,o=r.length>1?r[1]:"common";if(t=parseFloat(t),n&&!e.lib.is("Number",n))throw new e.Error("round filter expects precision to be a number");if("common"===o)return e.lib.round(t,n);if(!e.lib.is("Function",Math[o]))throw new e.Error("round filter expects method to be 'floor', 'ceil', or 'common'");return Math[o](t*Math.pow(10,n))/Math.pow(10,n)}},e.filter=function(t,r,n){if(!e.filters[t])throw"Unable to find filter "+t;return e.filters[t].call(this,r,n)},e.filter.extend=function(t,r){e.filters[t]=r},e}},function(e,t){e.exports=function(e){"use strict";e.expression.operator={leftToRight:"leftToRight",rightToLeft:"rightToLeft"};var t=function(e,t){if(void 0===t||null===t)return null;if(void 0!==t.indexOf)return e===t||""!==e&&t.indexOf(e)>-1;var r;for(r in t)if(t.hasOwnProperty(r)&&t[r]===e)return!0;return!1};return e.expression.operator.lookup=function(t,r){switch(t){case"..":r.precidence=20,r.associativity=e.expression.operator.leftToRight;break;case",":r.precidence=18,r.associativity=e.expression.operator.leftToRight;break;case"?:":case"?":case":":r.precidence=16,r.associativity=e.expression.operator.rightToLeft;break;case"or":r.precidence=14,r.associativity=e.expression.operator.leftToRight;break;case"and":r.precidence=13,r.associativity=e.expression.operator.leftToRight;break;case"b-or":r.precidence=12,r.associativity=e.expression.operator.leftToRight;break;case"b-xor":r.precidence=11,r.associativity=e.expression.operator.leftToRight;break;case"b-and":r.precidence=10,r.associativity=e.expression.operator.leftToRight;break;case"==":case"!=":r.precidence=9,r.associativity=e.expression.operator.leftToRight;break;case"<":case"<=":case">":case">=":case"not in":case"in":r.precidence=8,r.associativity=e.expression.operator.leftToRight;break;case"~":case"+":case"-":r.precidence=6,r.associativity=e.expression.operator.leftToRight;break;case"//":case"**":case"*":case"/":case"%":r.precidence=5,r.associativity=e.expression.operator.leftToRight;break;case"not":r.precidence=3,r.associativity=e.expression.operator.rightToLeft;break;default:throw new e.Error("Failed to lookup operator: "+t+" is an unknown operator.")}return r.operator=t,r},e.expression.operator.parse=function(r,n){var o,i,s;switch(e.log.trace("Twig.expression.operator.parse: ","Handling ",r),"?"===r&&(s=n.pop()),i=n.pop(),"not"!==r&&(o=n.pop()),"in"!==r&&"not in"!==r&&(o&&Array.isArray(o)&&(o=o.length),i&&Array.isArray(i)&&(i=i.length)),r){case":":break;case"?:":e.lib.boolval(o)?n.push(o):n.push(i);break;case"?":void 0===o&&(o=i,i=s,s=void 0),e.lib.boolval(o)?n.push(i):n.push(s);break;case"+":i=parseFloat(i),o=parseFloat(o),n.push(o+i);break;case"-":i=parseFloat(i),o=parseFloat(o),n.push(o-i);break;case"*":i=parseFloat(i),o=parseFloat(o),n.push(o*i);break;case"/":i=parseFloat(i),o=parseFloat(o),n.push(o/i);break;case"//":i=parseFloat(i),o=parseFloat(o),n.push(Math.floor(o/i));break;case"%":i=parseFloat(i),o=parseFloat(o),n.push(o%i);break;case"~":n.push((null!=o?o.toString():"")+(null!=i?i.toString():""));break;case"not":case"!":n.push(!e.lib.boolval(i));break;case"<":n.push(o<i);break;case"<=":n.push(o<=i);break;case">":n.push(o>i);break;case">=":n.push(o>=i);break;case"===":n.push(o===i);break;case"==":n.push(o==i);break;case"!==":n.push(o!==i);break;case"!=":n.push(o!=i);break;case"or":n.push(e.lib.boolval(o)||e.lib.boolval(i));break;case"b-or":n.push(o|i);break;case"b-xor":n.push(o^i);break;case"and":n.push(e.lib.boolval(o)&&e.lib.boolval(i));break;case"b-and":n.push(o&i);break;case"**":n.push(Math.pow(o,i));break;case"not in":n.push(!t(o,i));break;case"in":n.push(t(o,i));break;case"..":n.push(e.functions.range(o,i));break;default:throw new e.Error("Failed to parse operator: "+r+" is an unknown operator.")}},e}},function(e,t,r){e.exports=function(e){"use strict";function t(t,r,n){return r?e.expression.parseAsync.call(t,r,n):e.Promise.resolve(!1)}for(e.expression={},r(23)(e),e.expression.reservedWords=["true","false","null","TRUE","FALSE","NULL","_context","and","b-and","or","b-or","b-xor","in","not in","if"],e.expression.type={comma:"Twig.expression.type.comma",operator:{unary:"Twig.expression.type.operator.unary",binary:"Twig.expression.type.operator.binary"},string:"Twig.expression.type.string",bool:"Twig.expression.type.bool",slice:"Twig.expression.type.slice",array:{start:"Twig.expression.type.array.start",end:"Twig.expression.type.array.end"},object:{start:"Twig.expression.type.object.start",end:"Twig.expression.type.object.end"},parameter:{start:"Twig.expression.type.parameter.start",end:"Twig.expression.type.parameter.end"},subexpression:{start:"Twig.expression.type.subexpression.start",end:"Twig.expression.type.subexpression.end"},key:{period:"Twig.expression.type.key.period",brackets:"Twig.expression.type.key.brackets"},filter:"Twig.expression.type.filter",_function:"Twig.expression.type._function",variable:"Twig.expression.type.variable",number:"Twig.expression.type.number",_null:"Twig.expression.type.null",context:"Twig.expression.type.context",test:"Twig.expression.type.test"},e.expression.set={operations:[e.expression.type.filter,e.expression.type.operator.unary,e.expression.type.operator.binary,e.expression.type.array.end,e.expression.type.object.end,e.expression.type.parameter.end,e.expression.type.subexpression.end,e.expression.type.comma,e.expression.type.test],expressions:[e.expression.type._function,e.expression.type.bool,e.expression.type.string,e.expression.type.variable,e.expression.type.number,e.expression.type._null,e.expression.type.context,e.expression.type.parameter.start,e.expression.type.array.start,e.expression.type.object.start,e.expression.type.subexpression.start,e.expression.type.operator.unary]},e.expression.set.operations_extended=e.expression.set.operations.concat([e.expression.type.key.period,e.expression.type.key.brackets,e.expression.type.slice]),e.expression.fn={compile:{push:function(e,t,r){r.push(e)},push_both:function(e,t,r){r.push(e),t.push(e)}},parse:{push:function(e,t,r){t.push(e)},push_value:function(e,t,r){t.push(e.value)}}},e.expression.definitions=[{type:e.expression.type.test,regex:/^is\s+(not)?\s*([a-zA-Z_][a-zA-Z0-9_]*(\s?as)?)/,next:e.expression.set.operations.concat([e.expression.type.parameter.start]),compile:function(e,t,r){e.filter=e.match[2],e.modifier=e.match[1],delete e.match,delete e.value,r.push(e)},parse:function(r,n,o){var i=n.pop();return t(this,r.params,o).then(function(t){var o=e.test(r.filter,i,t);"not"==r.modifier?n.push(!o):n.push(o)})}},{type:e.expression.type.comma,regex:/^,/,next:e.expression.set.expressions.concat([e.expression.type.array.end,e.expression.type.object.end]),compile:function(t,r,n){var o,i=r.length-1;for(delete t.match,delete t.value;i>=0;i--){if((o=r.pop()).type===e.expression.type.object.start||o.type===e.expression.type.parameter.start||o.type===e.expression.type.array.start){r.push(o);break}n.push(o)}n.push(t)}},{type:e.expression.type.number,regex:/^\-?\d+(\.\d+)?/,next:e.expression.set.operations,compile:function(e,t,r){e.value=Number(e.value),r.push(e)},parse:e.expression.fn.parse.push_value},{type:e.expression.type.operator.binary,regex:/(^\?\:|^(b\-and)|^(b\-or)|^(b\-xor)|^[\+\-~%\?]|^[\:](?!\d\])|^[!=]==?|^[!<>]=?|^\*\*?|^\/\/?|^(and)[\(|\s+]|^(or)[\(|\s+]|^(in)[\(|\s+]|^(not in)[\(|\s+]|^\.\.)/,next:e.expression.set.expressions,transform:function(e,t){switch(e[0]){case"and(":case"or(":case"in(":case"not in(":return t[t.length-1].value=e[2],e[0];default:return""}},compile:function(t,r,n){delete t.match,t.value=t.value.trim();var o=t.value,i=e.expression.operator.lookup(o,t);for(e.log.trace("Twig.expression.compile: ","Operator: ",i," from ",o);r.length>0&&(r[r.length-1].type==e.expression.type.operator.unary||r[r.length-1].type==e.expression.type.operator.binary)&&(i.associativity===e.expression.operator.leftToRight&&i.precidence>=r[r.length-1].precidence||i.associativity===e.expression.operator.rightToLeft&&i.precidence>r[r.length-1].precidence);){var s=r.pop();n.push(s)}if(":"===o){if(!r[r.length-1]||"?"!==r[r.length-1].value){var a=n.pop();if(a.type===e.expression.type.string||a.type===e.expression.type.variable)t.key=a.value;else if(a.type===e.expression.type.number)t.key=a.value.toString();else{if(!a.expression||a.type!==e.expression.type.parameter.end&&a.type!=e.expression.type.subexpression.end)throw new e.Error("Unexpected value before ':' of "+a.type+" = "+a.value);t.params=a.params}return void n.push(t)}}else r.push(i)},parse:function(t,r,n){if(t.key)r.push(t);else{if(t.params)return e.expression.parseAsync.call(this,t.params,n).then(function(e){t.key=e,r.push(t),n.loop||delete t.params});e.expression.operator.parse(t.value,r)}}},{type:e.expression.type.operator.unary,regex:/(^not\s+)/,next:e.expression.set.expressions,compile:function(t,r,n){delete t.match,t.value=t.value.trim();var o=t.value,i=e.expression.operator.lookup(o,t);for(e.log.trace("Twig.expression.compile: ","Operator: ",i," from ",o);r.length>0&&(r[r.length-1].type==e.expression.type.operator.unary||r[r.length-1].type==e.expression.type.operator.binary)&&(i.associativity===e.expression.operator.leftToRight&&i.precidence>=r[r.length-1].precidence||i.associativity===e.expression.operator.rightToLeft&&i.precidence>r[r.length-1].precidence);){var s=r.pop();n.push(s)}r.push(i)},parse:function(t,r,n){e.expression.operator.parse(t.value,r)}},{type:e.expression.type.string,regex:/^(["'])(?:(?=(\\?))\2[\s\S])*?\1/,next:e.expression.set.operations_extended,compile:function(t,r,n){var o=t.value;delete t.match,o='"'===o.substring(0,1)?o.replace('\\"','"'):o.replace("\\'","'"),t.value=o.substring(1,o.length-1).replace(/\\n/g,"\n").replace(/\\r/g,"\r"),e.log.trace("Twig.expression.compile: ","String value: ",t.value),n.push(t)},parse:e.expression.fn.parse.push_value},{type:e.expression.type.subexpression.start,regex:/^\(/,next:e.expression.set.expressions.concat([e.expression.type.subexpression.end]),compile:function(e,t,r){e.value="(",r.push(e),t.push(e)},parse:e.expression.fn.parse.push},{type:e.expression.type.subexpression.end,regex:/^\)/,next:e.expression.set.operations_extended,validate:function(t,r){for(var n=r.length-1,o=!1,i=!1,s=0;!o&&n>=0;){var a=r[n];(o=a.type===e.expression.type.subexpression.start)&&i&&(i=!1,o=!1),a.type===e.expression.type.parameter.start?s++:a.type===e.expression.type.parameter.end?s--:a.type===e.expression.type.subexpression.end&&(i=!0),n--}return o&&0===s},compile:function(t,r,n){var o,i=t;for(o=r.pop();r.length>0&&o.type!=e.expression.type.subexpression.start;)n.push(o),o=r.pop();for(var s=[];t.type!==e.expression.type.subexpression.start;)s.unshift(t),t=n.pop();s.unshift(t);void 0===(o=r[r.length-1])||o.type!==e.expression.type._function&&o.type!==e.expression.type.filter&&o.type!==e.expression.type.test&&o.type!==e.expression.type.key.brackets?(i.expression=!0,s.pop(),s.shift(),i.params=s,n.push(i)):(i.expression=!1,o.params=s)},parse:function(t,r,n){if(t.expression)return e.expression.parseAsync.call(this,t.params,n).then(function(e){r.push(e)});throw new e.Error("Unexpected subexpression end when token is not marked as an expression")}},{type:e.expression.type.parameter.start,regex:/^\(/,next:e.expression.set.expressions.concat([e.expression.type.parameter.end]),validate:function(t,r){var n=r[r.length-1];return n&&e.indexOf(e.expression.reservedWords,n.value.trim())<0},compile:e.expression.fn.compile.push_both,parse:e.expression.fn.parse.push},{type:e.expression.type.parameter.end,regex:/^\)/,next:e.expression.set.operations_extended,compile:function(t,r,n){var o,i=t;for(o=r.pop();r.length>0&&o.type!=e.expression.type.parameter.start;)n.push(o),o=r.pop();for(var s=[];t.type!==e.expression.type.parameter.start;)s.unshift(t),t=n.pop();s.unshift(t);void 0===(t=n[n.length-1])||t.type!==e.expression.type._function&&t.type!==e.expression.type.filter&&t.type!==e.expression.type.test&&t.type!==e.expression.type.key.brackets?(i.expression=!0,s.pop(),s.shift(),i.params=s,n.push(i)):(i.expression=!1,t.params=s)},parse:function(t,r,n){var o=[],i=!1,s=null;if(t.expression)return e.expression.parseAsync.call(this,t.params,n).then(function(e){r.push(e)});for(;r.length>0;){if((s=r.pop())&&s.type&&s.type==e.expression.type.parameter.start){i=!0;break}o.unshift(s)}if(!i)throw new e.Error("Expected end of parameter set.");r.push(o)}},{type:e.expression.type.slice,regex:/^\[(\d*\:\d*)\]/,next:e.expression.set.operations_extended,compile:function(e,t,r){var n=e.match[1].split(":"),o=n[0]?parseInt(n[0]):void 0,i=n[1]?parseInt(n[1]):void 0;e.value="slice",e.params=[o,i],i||(e.params=[o]),r.push(e)},parse:function(t,r,n){var o=r.pop(),i=t.params;r.push(e.filter.call(this,t.value,o,i))}},{type:e.expression.type.array.start,regex:/^\[/,next:e.expression.set.expressions.concat([e.expression.type.array.end]),compile:e.expression.fn.compile.push_both,parse:e.expression.fn.parse.push},{type:e.expression.type.array.end,regex:/^\]/,next:e.expression.set.operations_extended,compile:function(t,r,n){for(var o,i=r.length-1;i>=0&&(o=r.pop()).type!==e.expression.type.array.start;i--)n.push(o);n.push(t)},parse:function(t,r,n){for(var o=[],i=!1,s=null;r.length>0;){if((s=r.pop()).type&&s.type==e.expression.type.array.start){i=!0;break}o.unshift(s)}if(!i)throw new e.Error("Expected end of array.");r.push(o)}},{type:e.expression.type.object.start,regex:/^\{/,next:e.expression.set.expressions.concat([e.expression.type.object.end]),compile:e.expression.fn.compile.push_both,parse:e.expression.fn.parse.push},{type:e.expression.type.object.end,regex:/^\}/,next:e.expression.set.operations_extended,compile:function(t,r,n){for(var o,i=r.length-1;i>=0&&(!(o=r.pop())||o.type!==e.expression.type.object.start);i--)n.push(o);n.push(t)},parse:function(t,r,n){for(var o={},i=!1,s=null,a=!1,p=null;r.length>0;){if((s=r.pop())&&s.type&&s.type===e.expression.type.object.start){i=!0;break}if(s&&s.type&&(s.type===e.expression.type.operator.binary||s.type===e.expression.type.operator.unary)&&s.key){if(!a)throw new e.Error("Missing value for key '"+s.key+"' in object definition.");o[s.key]=p,void 0===o._keys&&(o._keys=[]),o._keys.unshift(s.key),p=null,a=!1}else a=!0,p=s}if(!i)throw new e.Error("Unexpected end of object.");r.push(o)}},{type:e.expression.type.filter,regex:/^\|\s?([a-zA-Z_][a-zA-Z0-9_\-]*)/,next:e.expression.set.operations_extended.concat([e.expression.type.parameter.start]),compile:function(e,t,r){e.value=e.match[1],r.push(e)},parse:function(r,n,o){var i=this,s=n.pop();return t(this,r.params,o).then(function(t){return e.filter.call(i,r.value,s,t)}).then(function(e){n.push(e)})}},{type:e.expression.type._function,regex:/^([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/,next:e.expression.type.parameter.start,validate:function(t,r){return t[1]&&e.indexOf(e.expression.reservedWords,t[1])<0},transform:function(e,t){return"("},compile:function(e,t,r){var n=e.match[1];e.fn=n,delete e.match,delete e.value,r.push(e)},parse:function(r,n,o){var i,s=this,a=r.fn;return t(this,r.params,o).then(function(t){if(e.functions[a])i=e.functions[a].apply(s,t);else{if("function"!=typeof o[a])throw new e.Error(a+" function does not exist and is not defined in the context");i=o[a].apply(o,t)}return i}).then(function(e){n.push(e)})}},{type:e.expression.type.variable,regex:/^[a-zA-Z_][a-zA-Z0-9_]*/,next:e.expression.set.operations_extended.concat([e.expression.type.parameter.start]),compile:e.expression.fn.compile.push,validate:function(t,r){return e.indexOf(e.expression.reservedWords,t[0])<0},parse:function(t,r,n){return e.expression.resolveAsync.call(this,n[t.value],n).then(function(e){r.push(e)})}},{type:e.expression.type.key.period,regex:/^\.([a-zA-Z0-9_]+)/,next:e.expression.set.operations_extended.concat([e.expression.type.parameter.start]),compile:function(e,t,r){e.key=e.match[1],delete e.match,delete e.value,r.push(e)},parse:function(r,n,o,i){var s,a=this,p=r.key,c=n.pop();return t(this,r.params,o).then(function(t){if(null===c||void 0===c){if(a.options.strict_variables)throw new e.Error("Can't access a key "+p+" on an null or undefined object.");s=void 0}else{var r=function(e){return e.substr(0,1).toUpperCase()+e.substr(1)};s="object"==typeof c&&p in c?c[p]:void 0!==c["get"+r(p)]?c["get"+r(p)]:void 0!==c["is"+r(p)]?c["is"+r(p)]:void 0}return e.expression.resolveAsync.call(a,s,o,t,i,c)}).then(function(e){n.push(e)})}},{type:e.expression.type.key.brackets,regex:/^\[([^\]\:]*)\]/,next:e.expression.set.operations_extended.concat([e.expression.type.parameter.start]),compile:function(t,r,n){var o=t.match[1];delete t.value,delete t.match,t.stack=e.expression.compile({value:o}).stack,n.push(t)},parse:function(r,n,o,i){var s,a,p=this,c=null;return t(this,r.params,o).then(function(t){return c=t,e.expression.parseAsync.call(p,r.stack,o)}).then(function(t){if(null===(s=n.pop())||void 0===s){if(p.options.strict_variables)throw new e.Error("Can't access a key "+t+" on an null or undefined object.");return null}return a="object"==typeof s&&t in s?s[t]:null,e.expression.resolveAsync.call(p,a,s,c,i)}).then(function(e){n.push(e)})}},{type:e.expression.type._null,regex:/^(null|NULL|none|NONE)/,next:e.expression.set.operations,compile:function(e,t,r){delete e.match,e.value=null,r.push(e)},parse:e.expression.fn.parse.push_value},{type:e.expression.type.context,regex:/^_context/,next:e.expression.set.operations_extended.concat([e.expression.type.parameter.start]),compile:e.expression.fn.compile.push,parse:function(e,t,r){t.push(r)}},{type:e.expression.type.bool,regex:/^(true|TRUE|false|FALSE)/,next:e.expression.set.operations,compile:function(e,t,r){e.value="true"===e.match[0].toLowerCase(),delete e.match,r.push(e)},parse:e.expression.fn.parse.push_value}],e.expression.resolveAsync=function(t,r,n,o,i){if("function"!=typeof t)return e.Promise.resolve(t);var s=e.Promise.resolve(n);if(o&&o.type===e.expression.type.parameter.end){s=s.then(function(){return o.params&&e.expression.parseAsync.call(this,o.params,r,!0)}).then(function(e){return o.cleanup=!0,e})}return s.then(function(e){return t.apply(i||r,e||[])})},e.expression.resolve=function(t,r,n,o,i){return e.async.potentiallyAsync(this,!1,function(){return e.expression.resolveAsync.call(this,t,r,n,o,i)})},e.expression.handler={},e.expression.extendType=function(t){e.expression.type[t]="Twig.expression.type."+t},e.expression.extend=function(t){if(!t.type)throw new e.Error("Unable to extend logic definition. No type provided for "+t);e.expression.handler[t.type]=t};e.expression.definitions.length>0;)e.expression.extend(e.expression.definitions.shift());return e.expression.tokenize=function(t){var r,n,o,i,s,a,p=[],c=0,l=null,u=[];for(a=function(){for(var t=arguments.length-2,n=new Array(t);t-- >0;)n[t]=arguments[t];if(e.log.trace("Twig.expression.tokenize","Matched a ",r," regular expression of ",n),l&&e.indexOf(l,r)<0)return u.push(r+" cannot follow a "+p[p.length-1].type+" at template:"+c+" near '"+n[0].substring(0,20)+"...'"),n[0];var o=e.expression.handler[r];return o.validate&&!o.validate(n,p)?n[0]:(u=[],p.push({type:r,value:n[0],match:n}),s=!0,l=i,c+=n[0].length,o.transform?o.transform(n,p):"")},e.log.debug("Twig.expression.tokenize","Tokenizing expression ",t);t.length>0;){for(r in t=t.trim(),e.expression.handler){if(i=e.expression.handler[r].next,n=e.expression.handler[r].regex,e.log.trace("Checking type ",r," on ",t),s=!1,e.lib.isArray(n))for(o=n.length;o-- >0;)t=t.replace(n[o],a);else t=t.replace(n,a);if(s)break}if(!s)throw u.length>0?new e.Error(u.join(" OR ")):new e.Error("Unable to parse '"+t+"' at template position"+c)}return e.log.trace("Twig.expression.tokenize","Tokenized to ",p),p},e.expression.compile=function(t){var r=t.value,n=e.expression.tokenize(r),o=null,i=[],s=[],a=null;for(e.log.trace("Twig.expression.compile: ","Compiling ",r);n.length>0;)o=n.shift(),a=e.expression.handler[o.type],e.log.trace("Twig.expression.compile: ","Compiling ",o),a.compile&&a.compile(o,s,i),e.log.trace("Twig.expression.compile: ","Stack is",s),e.log.trace("Twig.expression.compile: ","Output is",i);for(;s.length>0;)i.push(s.pop());return e.log.trace("Twig.expression.compile: ","Final output is",i),t.stack=i,delete t.value,t},e.expression.parse=function(t,r,n,o){var i=this;e.lib.isArray(t)||(t=[t]);var s=[],a=[],p=e.expression.type.operator.binary;return e.async.potentiallyAsync(this,o,function(){return e.async.forEach(t,function(n,o){var c,l=null,u=null;if(!n.cleanup)return t.length>o+1&&(u=t[o+1]),(l=e.expression.handler[n.type]).parse&&(c=l.parse.call(i,n,s,r,u)),n.type===p&&r.loop&&a.push(n),c}).then(function(){for(var e=a.length,t=null;e-- >0;)(t=a[e]).params&&t.key&&delete t.key;if(n){var r=s.splice(0);s.push(r)}return s.pop()})})},e}},function(e,t){e.exports=function(e){return e.compiler={module:{}},e.compiler.compile=function(t,r){var n,o=JSON.stringify(t.tokens),i=t.id;if(r.module){if(void 0===e.compiler.module[r.module])throw new e.Error("Unable to find module type "+r.module);n=e.compiler.module[r.module](i,o,r.twig)}else n=e.compiler.wrap(i,o);return n},e.compiler.module={amd:function(t,r,n){return'define(["'+n+'"], function (Twig) {\n\tvar twig, templates;\ntwig = Twig.twig;\ntemplates = '+e.compiler.wrap(t,r)+"\n\treturn templates;\n});"},node:function(t,r){return'var twig = require("twig").twig;\nexports.template = '+e.compiler.wrap(t,r)},cjs2:function(t,r,n){return'module.declare([{ twig: "'+n+'" }], function (require, exports, module) {\n\tvar twig = require("twig").twig;\n\texports.template = '+e.compiler.wrap(t,r)+"\n});"}},e.compiler.wrap=function(e,t){return'twig({id:"'+e.replace('"','\\"')+'", data:'+t+", precompiled: true});\n"},e}},function(e,t){e.exports=function(e){"use strict";function t(t,r){if(t.options.rethrow)throw"string"==typeof r&&(r=new e.Error(r)),"TwigException"!=r.type||r.file||(r.file=t.id),r;if(e.log.error("Error parsing twig template "+t.id+": "),r.stack?e.log.error(r.stack):e.log.error(r.toString()),e.debug)return r.toString()}return e.trace=!1,e.debug=!1,e.cache=!0,e.noop=function(){},e.placeholders={parent:"{{|PARENT|}}"},e.hasIndexOf=Array.prototype.hasOwnProperty("indexOf"),e.indexOf=function(t,r){if(e.hasIndexOf)return t.indexOf(r);if(void 0===t||null===t)throw new TypeError;var n=Object(t),o=n.length>>>0;if(0===o)return-1;var i=0;if(arguments.length>0&&((i=Number(arguments[1]))!=i?i=0:0!==i&&i!==1/0&&i!==-1/0&&(i=(i>0||-1)*Math.floor(Math.abs(i)))),i>=o)return-1;for(var s=i>=0?i:Math.max(o-Math.abs(i),0);s<o;s++)if(s in n&&n[s]===r)return s;return t==r?0:-1},e.forEach=function(e,t,r){if(Array.prototype.forEach)return e.forEach(t,r);var n,o;if(null==e)throw new TypeError(" this is null or not defined");var i=Object(e),s=i.length>>>0;if("[object Function]"!={}.toString.call(t))throw new TypeError(t+" is not a function");for(r&&(n=r),o=0;o<s;){var a;o in i&&(a=i[o],t.call(n,a,o,i)),o++}},e.merge=function(t,r,n){return e.forEach(Object.keys(r),function(e){(!n||e in t)&&(t[e]=r[e])}),t},e.attempt=function(e,t){try{return e()}catch(e){return t(e)}},e.Error=function(e,t){this.message=e,this.name="TwigException",this.type="TwigException",this.file=t},e.Error.prototype.toString=function(){return this.name+": "+this.message},e.log={trace:function(){e.trace&&console&&console.log(Array.prototype.slice.call(arguments))},debug:function(){e.debug&&console&&console.log(Array.prototype.slice.call(arguments))}},"undefined"!=typeof console?void 0!==console.error?e.log.error=function(){console.error.apply(console,arguments)}:void 0!==console.log&&(e.log.error=function(){console.log.apply(console,arguments)}):e.log.error=function(){},e.ChildContext=function(t){return e.lib.copy(t)},e.token={},e.token.type={output:"output",logic:"logic",comment:"comment",raw:"raw",output_whitespace_pre:"output_whitespace_pre",output_whitespace_post:"output_whitespace_post",output_whitespace_both:"output_whitespace_both",logic_whitespace_pre:"logic_whitespace_pre",logic_whitespace_post:"logic_whitespace_post",logic_whitespace_both:"logic_whitespace_both"},e.token.definitions=[{type:e.token.type.raw,open:"{% raw %}",close:"{% endraw %}"},{type:e.token.type.raw,open:"{% verbatim %}",close:"{% endverbatim %}"},{type:e.token.type.output_whitespace_pre,open:"{{-",close:"}}"},{type:e.token.type.output_whitespace_post,open:"{{",close:"-}}"},{type:e.token.type.output_whitespace_both,open:"{{-",close:"-}}"},{type:e.token.type.logic_whitespace_pre,open:"{%-",close:"%}"},{type:e.token.type.logic_whitespace_post,open:"{%",close:"-%}"},{type:e.token.type.logic_whitespace_both,open:"{%-",close:"-%}"},{type:e.token.type.output,open:"{{",close:"}}"},{type:e.token.type.logic,open:"{%",close:"%}"},{type:e.token.type.comment,open:"{#",close:"#}"}],e.token.strings=['"',"'"],e.token.findStart=function(t){var r,n,o,i,s={position:null,def:null},a=null,p=e.token.definitions.length;for(r=0;r<p;r++)n=e.token.definitions[r],o=t.indexOf(n.open),i=t.indexOf(n.close),e.log.trace("Twig.token.findStart: ","Searching for ",n.open," found at ",o),o>=0&&n.open.length!==n.close.length&&i<0||(o>=0&&(null===s.position||o<s.position)?(s.position=o,s.def=n,a=i):o>=0&&null!==s.position&&o===s.position&&(n.open.length>s.def.open.length?(s.position=o,s.def=n,a=i):n.open.length===s.def.open.length&&(n.close.length,s.def.close.length,i>=0&&i<a&&(s.position=o,s.def=n,a=i))));return s},e.token.findEnd=function(t,r,n){for(var o,i,s=null,a=!1,p=0,c=null,l=null,u=null,f=null,h=null,y=null;!a;){if(c=null,l=null,!((u=t.indexOf(r.close,p))>=0))throw new e.Error("Unable to find closing bracket '"+r.close+"' opened near template position "+n);if(s=u,a=!0,r.type===e.token.type.comment)break;if(r.type===e.token.type.raw)break;for(i=e.token.strings.length,o=0;o<i;o+=1)(h=t.indexOf(e.token.strings[o],p))>0&&h<u&&(null===c||h<c)&&(c=h,l=e.token.strings[o]);if(null!==c)for(f=c+1,s=null,a=!1;;){if((y=t.indexOf(l,f))<0)throw"Unclosed string in template";if("\\"!==t.substr(y-1,1)){p=y+1;break}f=y+1}}return s},e.tokenize=function(t){for(var r=[],n=0,o=null,i=null;t.length>0;)if(o=e.token.findStart(t),e.log.trace("Twig.tokenize: ","Found token: ",o),null!==o.position){if(o.position>0&&r.push({type:e.token.type.raw,value:t.substring(0,o.position)}),t=t.substr(o.position+o.def.open.length),n+=o.position+o.def.open.length,i=e.token.findEnd(t,o.def,n),e.log.trace("Twig.tokenize: ","Token ends at ",i),r.push({type:o.def.type,value:t.substring(0,i).trim()}),"\n"===t.substr(i+o.def.close.length,1))switch(o.def.type){case"logic_whitespace_pre":case"logic_whitespace_post":case"logic_whitespace_both":case"logic":i+=1}t=t.substr(i+o.def.close.length),n+=i+o.def.close.length}else r.push({type:e.token.type.raw,value:t}),t="";return r},e.compile=function(t){var r=this;return e.attempt(function(){for(var n=[],o=[],i=[],s=null,a=null,p=null,c=null,l=null,u=null,f=null,h=null,y=null,d=null,g=null,m=null,x=function(t){e.expression.compile.call(r,t),o.length>0?i.push(t):n.push(t)},v=function(t){if(a=e.logic.compile.call(r,t),d=a.type,g=e.logic.handler[d].open,m=e.logic.handler[d].next,e.log.trace("Twig.compile: ","Compiled logic token to ",a," next is: ",m," open is : ",g),void 0!==g&&!g){if(c=o.pop(),f=e.logic.handler[c.type],e.indexOf(f.next,d)<0)throw new Error(d+" not expected after a "+c.type);c.output=c.output||[],c.output=c.output.concat(i),i=[],y={type:e.token.type.logic,token:c},o.length>0?i.push(y):n.push(y)}void 0!==m&&m.length>0?(e.log.trace("Twig.compile: ","Pushing ",a," to logic stack."),o.length>0&&((c=o.pop()).output=c.output||[],c.output=c.output.concat(i),o.push(c),i=[]),o.push(a)):void 0!==g&&g&&(y={type:e.token.type.logic,token:a},o.length>0?i.push(y):n.push(y))};t.length>0;){switch(s=t.shift(),l=n[n.length-1],u=i[i.length-1],h=t[0],e.log.trace("Compiling token ",s),s.type){case e.token.type.raw:o.length>0?i.push(s):n.push(s);break;case e.token.type.logic:v.call(r,s);break;case e.token.type.comment:break;case e.token.type.output:x.call(r,s);break;case e.token.type.logic_whitespace_pre:case e.token.type.logic_whitespace_post:case e.token.type.logic_whitespace_both:case e.token.type.output_whitespace_pre:case e.token.type.output_whitespace_post:case e.token.type.output_whitespace_both:switch(s.type!==e.token.type.output_whitespace_post&&s.type!==e.token.type.logic_whitespace_post&&(l&&l.type===e.token.type.raw&&(n.pop(),null===l.value.match(/^\s*$/)&&(l.value=l.value.trim(),n.push(l))),u&&u.type===e.token.type.raw&&(i.pop(),null===u.value.match(/^\s*$/)&&(u.value=u.value.trim(),i.push(u)))),s.type){case e.token.type.output_whitespace_pre:case e.token.type.output_whitespace_post:case e.token.type.output_whitespace_both:x.call(r,s);break;case e.token.type.logic_whitespace_pre:case e.token.type.logic_whitespace_post:case e.token.type.logic_whitespace_both:v.call(r,s)}s.type!==e.token.type.output_whitespace_pre&&s.type!==e.token.type.logic_whitespace_pre&&h&&h.type===e.token.type.raw&&(t.shift(),null===h.value.match(/^\s*$/)&&(h.value=h.value.trim(),t.unshift(h)))}e.log.trace("Twig.compile: "," Output: ",n," Logic Stack: ",o," Pending Output: ",i)}if(o.length>0)throw p=o.pop(),new Error("Unable to find an end tag for "+p.type+", expecting one of "+p.next);return n},function(t){if(r.options.rethrow)throw"TwigException"!=t.type||t.file||(t.file=r.id),t;e.log.error("Error compiling twig template "+r.id+": "),t.stack?e.log.error(t.stack):e.log.error(t.toString())})},e.parse=function(r,n,o){var i,s=this,a=[],p=null,c=!0,l=!0;function u(e){a.push(e)}function f(e){void 0!==e.chain&&(l=e.chain),void 0!==e.context&&(n=e.context),void 0!==e.output&&a.push(e.output)}if(i=e.async.forEach(r,function(t){switch(e.log.debug("Twig.parse: ","Parsing token: ",t),t.type){case e.token.type.raw:a.push(e.filters.raw(t.value));break;case e.token.type.logic:return e.logic.parseAsync.call(s,t.token,n,l).then(f);case e.token.type.comment:break;case e.token.type.output_whitespace_pre:case e.token.type.output_whitespace_post:case e.token.type.output_whitespace_both:case e.token.type.output:return e.log.debug("Twig.parse: ","Output token: ",t.stack),e.expression.parseAsync.call(s,t.stack,n).then(u)}}).then(function(){return a=e.output.call(s,a),c=!1,a}).catch(function(e){o&&t(s,e),p=e}),o)return i;if(null!==p)return t(this,p);if(c)throw new e.Error("You are using Twig.js in sync mode in combination with async extensions.");return a},e.prepare=function(t){var r,n;return e.log.debug("Twig.prepare: ","Tokenizing ",t),n=e.tokenize.call(this,t),e.log.debug("Twig.prepare: ","Compiling ",n),r=e.compile.call(this,n),e.log.debug("Twig.prepare: ","Compiled ",r),r},e.output=function(t){var r=this.options.autoescape;if(!r)return t.join("");var n="string"==typeof r?r:"html",o=0,i=t.length,s="",a=new Array(i);for(o=0;o<i;o++)(s=t[o])&&!0!==s.twig_markup&&s.twig_markup!=n&&(s=e.filters.escape(s,[n])),a[o]=s;return a.length<1?"":e.Markup(a.join(""),!0)},e.Templates={loaders:{},parsers:{},registry:{}},e.validateId=function(t){if("prototype"===t)throw new e.Error(t+" is not a valid twig identifier");if(e.cache&&e.Templates.registry.hasOwnProperty(t))throw new e.Error("There is already a template with the ID "+t);return!0},e.Templates.registerLoader=function(t,r,n){if("function"!=typeof r)throw new e.Error("Unable to add loader for "+t+": Invalid function reference given.");n&&(r=r.bind(n)),this.loaders[t]=r},e.Templates.unRegisterLoader=function(e){this.isRegisteredLoader(e)&&delete this.loaders[e]},e.Templates.isRegisteredLoader=function(e){return this.loaders.hasOwnProperty(e)},e.Templates.registerParser=function(t,r,n){if("function"!=typeof r)throw new e.Error("Unable to add parser for "+t+": Invalid function regerence given.");n&&(r=r.bind(n)),this.parsers[t]=r},e.Templates.unRegisterParser=function(e){this.isRegisteredParser(e)&&delete this.parsers[e]},e.Templates.isRegisteredParser=function(e){return this.parsers.hasOwnProperty(e)},e.Templates.save=function(t){if(void 0===t.id)throw new e.Error("Unable to save template with no id");e.Templates.registry[t.id]=t},e.Templates.load=function(t){return e.Templates.registry.hasOwnProperty(t)?e.Templates.registry[t]:null},e.Templates.loadRemote=function(t,r,n,o){var i=void 0===r.id?t:r.id,s=e.Templates.registry[i];return e.cache&&void 0!==s?("function"==typeof n&&n(s),s):(r.parser=r.parser||"twig",r.id=i,void 0===r.async&&(r.async=!0),(this.loaders[r.method]||this.loaders.fs).call(this,t,r,n,o))},e.Template=function(t){var r,n,o,i=t.data,s=t.id,a=t.blocks,p=t.macros||{},c=t.base,l=t.path,u=t.url,f=t.name,h=t.method,y=t.options;this.id=s,this.method=h,this.base=c,this.path=l,this.url=u,this.name=f,this.macros=p,this.options=y,this.reset(a),r="String",n=i,o=Object.prototype.toString.call(n).slice(8,-1),this.tokens=void 0!==n&&null!==n&&o===r?e.prepare.call(this,i):i,void 0!==s&&e.Templates.save(this)},e.Template.prototype.reset=function(t){e.log.debug("Twig.Template.reset","Reseting template "+this.id),this.blocks={},this.importedBlocks=[],this.originalBlockTokens={},this.child={blocks:t||{}},this.extend=null,this.parseStack=[]},e.Template.prototype.render=function(t,r,n){var o=this;return this.context=t||{},this.reset(),r&&r.blocks&&(this.blocks=r.blocks),r&&r.macros&&(this.macros=r.macros),e.async.potentiallyAsync(this,n,function(){return e.parseAsync.call(this,this.tokens,this.context).then(function(t){var n,i;return o.extend?(o.options.allowInlineIncludes&&(n=e.Templates.load(o.extend))&&(n.options=o.options),n||(i=e.path.parsePath(o,o.extend),n=e.Templates.loadRemote(i,{method:o.getLoaderMethod(),base:o.base,async:!1,id:i,options:o.options})),o.parent=n,o.parent.renderAsync(o.context,{blocks:o.blocks})):r?"blocks"==r.output?o.blocks:"macros"==r.output?o.macros:t:t})})},e.Template.prototype.importFile=function(t){var r,n;if(!this.url&&this.options.allowInlineIncludes){if(t=this.path?e.path.parsePath(this,t):t,!(n=e.Templates.load(t))&&!(n=e.Templates.loadRemote(r,{id:t,method:this.getLoaderMethod(),async:!1,path:t,options:this.options})))throw new e.Error("Unable to find the template "+t);return n.options=this.options,n}return r=e.path.parsePath(this,t),n=e.Templates.loadRemote(r,{method:this.getLoaderMethod(),base:this.base,async:!1,options:this.options,id:r})},e.Template.prototype.importBlocks=function(t,r){var n=this.importFile(t),o=this.context,i=this;r=r||!1,n.render(o),e.forEach(Object.keys(n.blocks),function(e){(r||void 0===i.blocks[e])&&(i.blocks[e]=n.blocks[e],i.importedBlocks.push(e))})},e.Template.prototype.importMacros=function(t){var r=e.path.parsePath(this,t);return e.Templates.loadRemote(r,{method:this.getLoaderMethod(),async:!1,id:r})},e.Template.prototype.getLoaderMethod=function(){return this.path?"fs":this.url?"ajax":this.method||"fs"},e.Template.prototype.compile=function(t){return e.compiler.compile(this,t)},e.Markup=function(e,t){if("string"!=typeof e||e.length<1)return e;var r=new String(e);return r.twig_markup=void 0===t||t,r},e}},function(e,t,r){
/**
 * Twig.js
 *
 * @copyright 2011-2016 John Roepke and the Twig.js Contributors
 * @license   Available under the BSD 2-Clause License
 * @link      https://github.com/twigjs/twig.js
 */
var n={VERSION:"1.12.0"};r(26)(n),r(25)(n),r(24)(n),r(22)(n),r(21)(n),r(20)(n),r(11)(n),r(10)(n),r(8)(n),r(7)(n),r(6)(n),r(5)(n),r(4)(n),r(3)(n),r(2)(n),e.exports=n.exports}])});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), "/"))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/adapter_core.js":
/*!************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/adapter_core.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adapter_factory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adapter_factory.js */ "./node_modules/webrtc-adapter/src/js/adapter_factory.js");
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */





const adapter = Object(_adapter_factory_js__WEBPACK_IMPORTED_MODULE_0__["adapterFactory"])({window});
/* harmony default export */ __webpack_exports__["default"] = (adapter);


/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/adapter_factory.js":
/*!***************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/adapter_factory.js ***!
  \***************************************************************/
/*! exports provided: adapterFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapterFactory", function() { return adapterFactory; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/webrtc-adapter/src/js/utils.js");
/* harmony import */ var _chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chrome/chrome_shim */ "./node_modules/webrtc-adapter/src/js/chrome/chrome_shim.js");
/* harmony import */ var _edge_edge_shim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edge/edge_shim */ "./node_modules/webrtc-adapter/src/js/edge/edge_shim.js");
/* harmony import */ var _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firefox/firefox_shim */ "./node_modules/webrtc-adapter/src/js/firefox/firefox_shim.js");
/* harmony import */ var _safari_safari_shim__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./safari/safari_shim */ "./node_modules/webrtc-adapter/src/js/safari/safari_shim.js");
/* harmony import */ var _common_shim__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common_shim */ "./node_modules/webrtc-adapter/src/js/common_shim.js");
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */


  // Browser shims.






// Shimming starts here.
function adapterFactory({window} = {}, options = {
  shimChrome: true,
  shimFirefox: true,
  shimEdge: true,
  shimSafari: true,
}) {
  // Utils.
  const logging = _utils__WEBPACK_IMPORTED_MODULE_0__["log"];
  const browserDetails = _utils__WEBPACK_IMPORTED_MODULE_0__["detectBrowser"](window);

  const adapter = {
    browserDetails,
    commonShim: _common_shim__WEBPACK_IMPORTED_MODULE_5__,
    extractVersion: _utils__WEBPACK_IMPORTED_MODULE_0__["extractVersion"],
    disableLog: _utils__WEBPACK_IMPORTED_MODULE_0__["disableLog"],
    disableWarnings: _utils__WEBPACK_IMPORTED_MODULE_0__["disableWarnings"]
  };

  // Shim browser if found.
  switch (browserDetails.browser) {
    case 'chrome':
      if (!_chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__ || !_chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__["shimPeerConnection"] ||
          !options.shimChrome) {
        logging('Chrome shim is not included in this adapter release.');
        return adapter;
      }
      logging('adapter.js shimming chrome.');
      // Export to the adapter global object visible in the browser.
      adapter.browserShim = _chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__;

      _chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__["shimGetUserMedia"](window);
      _chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__["shimMediaStream"](window);
      _chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__["shimPeerConnection"](window);
      _chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__["shimOnTrack"](window);
      _chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__["shimAddTrackRemoveTrack"](window);
      _chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__["shimGetSendersWithDtmf"](window);
      _chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__["shimSenderReceiverGetStats"](window);
      _chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__["fixNegotiationNeeded"](window);

      _common_shim__WEBPACK_IMPORTED_MODULE_5__["shimRTCIceCandidate"](window);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__["shimConnectionState"](window);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__["shimMaxMessageSize"](window);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__["shimSendThrowTypeError"](window);
      break;
    case 'firefox':
      if (!_firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__ || !_firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__["shimPeerConnection"] ||
          !options.shimFirefox) {
        logging('Firefox shim is not included in this adapter release.');
        return adapter;
      }
      logging('adapter.js shimming firefox.');
      // Export to the adapter global object visible in the browser.
      adapter.browserShim = _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__;

      _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__["shimGetUserMedia"](window);
      _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__["shimPeerConnection"](window);
      _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__["shimOnTrack"](window);
      _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__["shimRemoveStream"](window);
      _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__["shimSenderGetStats"](window);
      _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__["shimReceiverGetStats"](window);
      _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__["shimRTCDataChannel"](window);

      _common_shim__WEBPACK_IMPORTED_MODULE_5__["shimRTCIceCandidate"](window);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__["shimConnectionState"](window);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__["shimMaxMessageSize"](window);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__["shimSendThrowTypeError"](window);
      break;
    case 'edge':
      if (!_edge_edge_shim__WEBPACK_IMPORTED_MODULE_2__ || !_edge_edge_shim__WEBPACK_IMPORTED_MODULE_2__["shimPeerConnection"] || !options.shimEdge) {
        logging('MS edge shim is not included in this adapter release.');
        return adapter;
      }
      logging('adapter.js shimming edge.');
      // Export to the adapter global object visible in the browser.
      adapter.browserShim = _edge_edge_shim__WEBPACK_IMPORTED_MODULE_2__;

      _edge_edge_shim__WEBPACK_IMPORTED_MODULE_2__["shimGetUserMedia"](window);
      _edge_edge_shim__WEBPACK_IMPORTED_MODULE_2__["shimGetDisplayMedia"](window);
      _edge_edge_shim__WEBPACK_IMPORTED_MODULE_2__["shimPeerConnection"](window);
      _edge_edge_shim__WEBPACK_IMPORTED_MODULE_2__["shimReplaceTrack"](window);

      // the edge shim implements the full RTCIceCandidate object.

      _common_shim__WEBPACK_IMPORTED_MODULE_5__["shimMaxMessageSize"](window);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__["shimSendThrowTypeError"](window);
      break;
    case 'safari':
      if (!_safari_safari_shim__WEBPACK_IMPORTED_MODULE_4__ || !options.shimSafari) {
        logging('Safari shim is not included in this adapter release.');
        return adapter;
      }
      logging('adapter.js shimming safari.');
      // Export to the adapter global object visible in the browser.
      adapter.browserShim = _safari_safari_shim__WEBPACK_IMPORTED_MODULE_4__;

      _safari_safari_shim__WEBPACK_IMPORTED_MODULE_4__["shimRTCIceServerUrls"](window);
      _safari_safari_shim__WEBPACK_IMPORTED_MODULE_4__["shimCreateOfferLegacy"](window);
      _safari_safari_shim__WEBPACK_IMPORTED_MODULE_4__["shimCallbacksAPI"](window);
      _safari_safari_shim__WEBPACK_IMPORTED_MODULE_4__["shimLocalStreamsAPI"](window);
      _safari_safari_shim__WEBPACK_IMPORTED_MODULE_4__["shimRemoteStreamsAPI"](window);
      _safari_safari_shim__WEBPACK_IMPORTED_MODULE_4__["shimTrackEventTransceiver"](window);
      _safari_safari_shim__WEBPACK_IMPORTED_MODULE_4__["shimGetUserMedia"](window);

      _common_shim__WEBPACK_IMPORTED_MODULE_5__["shimRTCIceCandidate"](window);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__["shimMaxMessageSize"](window);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__["shimSendThrowTypeError"](window);
      break;
    default:
      logging('Unsupported browser!');
      break;
  }

  return adapter;
}


/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/chrome/chrome_shim.js":
/*!******************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/chrome/chrome_shim.js ***!
  \******************************************************************/
/*! exports provided: shimGetUserMedia, shimGetDisplayMedia, shimMediaStream, shimOnTrack, shimGetSendersWithDtmf, shimSenderReceiverGetStats, shimAddTrackRemoveTrackWithNative, shimAddTrackRemoveTrack, shimPeerConnection, fixNegotiationNeeded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimMediaStream", function() { return shimMediaStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimOnTrack", function() { return shimOnTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimGetSendersWithDtmf", function() { return shimGetSendersWithDtmf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimSenderReceiverGetStats", function() { return shimSenderReceiverGetStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimAddTrackRemoveTrackWithNative", function() { return shimAddTrackRemoveTrackWithNative; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimAddTrackRemoveTrack", function() { return shimAddTrackRemoveTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimPeerConnection", function() { return shimPeerConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixNegotiationNeeded", function() { return fixNegotiationNeeded; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/webrtc-adapter/src/js/utils.js");
/* harmony import */ var _getusermedia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getusermedia */ "./node_modules/webrtc-adapter/src/js/chrome/getusermedia.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shimGetUserMedia", function() { return _getusermedia__WEBPACK_IMPORTED_MODULE_1__["shimGetUserMedia"]; });

/* harmony import */ var _getdisplaymedia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getdisplaymedia */ "./node_modules/webrtc-adapter/src/js/chrome/getdisplaymedia.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shimGetDisplayMedia", function() { return _getdisplaymedia__WEBPACK_IMPORTED_MODULE_2__["shimGetDisplayMedia"]; });


/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */



/* iterates the stats graph recursively. */
function walkStats(stats, base, resultSet) {
  if (!base || resultSet.has(base.id)) {
    return;
  }
  resultSet.set(base.id, base);
  Object.keys(base).forEach(name => {
    if (name.endsWith('Id')) {
      walkStats(stats, stats.get(base[name]), resultSet);
    } else if (name.endsWith('Ids')) {
      base[name].forEach(id => {
        walkStats(stats, stats.get(id), resultSet);
      });
    }
  });
}

/* filter getStats for a sender/receiver track. */
function filterStats(result, track, outbound) {
  const streamStatsType = outbound ? 'outbound-rtp' : 'inbound-rtp';
  const filteredResult = new Map();
  if (track === null) {
    return filteredResult;
  }
  const trackStats = [];
  result.forEach(value => {
    if (value.type === 'track' &&
        value.trackIdentifier === track.id) {
      trackStats.push(value);
    }
  });
  trackStats.forEach(trackStat => {
    result.forEach(stats => {
      if (stats.type === streamStatsType && stats.trackId === trackStat.id) {
        walkStats(result, stats, filteredResult);
      }
    });
  });
  return filteredResult;
}




function shimMediaStream(window) {
  window.MediaStream = window.MediaStream || window.webkitMediaStream;
}

function shimOnTrack(window) {
  if (typeof window === 'object' && window.RTCPeerConnection && !('ontrack' in
      window.RTCPeerConnection.prototype)) {
    Object.defineProperty(window.RTCPeerConnection.prototype, 'ontrack', {
      get() {
        return this._ontrack;
      },
      set(f) {
        if (this._ontrack) {
          this.removeEventListener('track', this._ontrack);
        }
        this.addEventListener('track', this._ontrack = f);
      },
      enumerable: true,
      configurable: true
    });
    const origSetRemoteDescription =
        window.RTCPeerConnection.prototype.setRemoteDescription;
    window.RTCPeerConnection.prototype.setRemoteDescription = function() {
      if (!this._ontrackpoly) {
        this._ontrackpoly = (e) => {
          // onaddstream does not fire when a track is added to an existing
          // stream. But stream.onaddtrack is implemented so we use that.
          e.stream.addEventListener('addtrack', te => {
            let receiver;
            if (window.RTCPeerConnection.prototype.getReceivers) {
              receiver = this.getReceivers()
                .find(r => r.track && r.track.id === te.track.id);
            } else {
              receiver = {track: te.track};
            }

            const event = new Event('track');
            event.track = te.track;
            event.receiver = receiver;
            event.transceiver = {receiver};
            event.streams = [e.stream];
            this.dispatchEvent(event);
          });
          e.stream.getTracks().forEach(track => {
            let receiver;
            if (window.RTCPeerConnection.prototype.getReceivers) {
              receiver = this.getReceivers()
                .find(r => r.track && r.track.id === track.id);
            } else {
              receiver = {track};
            }
            const event = new Event('track');
            event.track = track;
            event.receiver = receiver;
            event.transceiver = {receiver};
            event.streams = [e.stream];
            this.dispatchEvent(event);
          });
        };
        this.addEventListener('addstream', this._ontrackpoly);
      }
      return origSetRemoteDescription.apply(this, arguments);
    };
  } else {
    // even if RTCRtpTransceiver is in window, it is only used and
    // emitted in unified-plan. Unfortunately this means we need
    // to unconditionally wrap the event.
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["wrapPeerConnectionEvent"](window, 'track', e => {
      if (!e.transceiver) {
        Object.defineProperty(e, 'transceiver',
          {value: {receiver: e.receiver}});
      }
      return e;
    });
  }
}

function shimGetSendersWithDtmf(window) {
  // Overrides addTrack/removeTrack, depends on shimAddTrackRemoveTrack.
  if (typeof window === 'object' && window.RTCPeerConnection &&
      !('getSenders' in window.RTCPeerConnection.prototype) &&
      'createDTMFSender' in window.RTCPeerConnection.prototype) {
    const shimSenderWithDtmf = function(pc, track) {
      return {
        track,
        get dtmf() {
          if (this._dtmf === undefined) {
            if (track.kind === 'audio') {
              this._dtmf = pc.createDTMFSender(track);
            } else {
              this._dtmf = null;
            }
          }
          return this._dtmf;
        },
        _pc: pc
      };
    };

    // augment addTrack when getSenders is not available.
    if (!window.RTCPeerConnection.prototype.getSenders) {
      window.RTCPeerConnection.prototype.getSenders = function() {
        this._senders = this._senders || [];
        return this._senders.slice(); // return a copy of the internal state.
      };
      const origAddTrack = window.RTCPeerConnection.prototype.addTrack;
      window.RTCPeerConnection.prototype.addTrack = function(track, stream) {
        let sender = origAddTrack.apply(this, arguments);
        if (!sender) {
          sender = shimSenderWithDtmf(this, track);
          this._senders.push(sender);
        }
        return sender;
      };

      const origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
      window.RTCPeerConnection.prototype.removeTrack = function(sender) {
        origRemoveTrack.apply(this, arguments);
        const idx = this._senders.indexOf(sender);
        if (idx !== -1) {
          this._senders.splice(idx, 1);
        }
      };
    }
    const origAddStream = window.RTCPeerConnection.prototype.addStream;
    window.RTCPeerConnection.prototype.addStream = function(stream) {
      this._senders = this._senders || [];
      origAddStream.apply(this, [stream]);
      stream.getTracks().forEach(track => {
        this._senders.push(shimSenderWithDtmf(this, track));
      });
    };

    const origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
    window.RTCPeerConnection.prototype.removeStream = function(stream) {
      this._senders = this._senders || [];
      origRemoveStream.apply(this, [stream]);

      stream.getTracks().forEach(track => {
        const sender = this._senders.find(s => s.track === track);
        if (sender) { // remove sender
          this._senders.splice(this._senders.indexOf(sender), 1);
        }
      });
    };
  } else if (typeof window === 'object' && window.RTCPeerConnection &&
             'getSenders' in window.RTCPeerConnection.prototype &&
             'createDTMFSender' in window.RTCPeerConnection.prototype &&
             window.RTCRtpSender &&
             !('dtmf' in window.RTCRtpSender.prototype)) {
    const origGetSenders = window.RTCPeerConnection.prototype.getSenders;
    window.RTCPeerConnection.prototype.getSenders = function() {
      const senders = origGetSenders.apply(this, []);
      senders.forEach(sender => sender._pc = this);
      return senders;
    };

    Object.defineProperty(window.RTCRtpSender.prototype, 'dtmf', {
      get() {
        if (this._dtmf === undefined) {
          if (this.track.kind === 'audio') {
            this._dtmf = this._pc.createDTMFSender(this.track);
          } else {
            this._dtmf = null;
          }
        }
        return this._dtmf;
      }
    });
  }
}

function shimSenderReceiverGetStats(window) {
  if (!(typeof window === 'object' && window.RTCPeerConnection &&
      window.RTCRtpSender && window.RTCRtpReceiver)) {
    return;
  }

  // shim sender stats.
  if (!('getStats' in window.RTCRtpSender.prototype)) {
    const origGetSenders = window.RTCPeerConnection.prototype.getSenders;
    if (origGetSenders) {
      window.RTCPeerConnection.prototype.getSenders = function() {
        const senders = origGetSenders.apply(this, []);
        senders.forEach(sender => sender._pc = this);
        return senders;
      };
    }

    const origAddTrack = window.RTCPeerConnection.prototype.addTrack;
    if (origAddTrack) {
      window.RTCPeerConnection.prototype.addTrack = function() {
        const sender = origAddTrack.apply(this, arguments);
        sender._pc = this;
        return sender;
      };
    }
    window.RTCRtpSender.prototype.getStats = function() {
      const sender = this;
      return this._pc.getStats().then(result =>
        /* Note: this will include stats of all senders that
         *   send a track with the same id as sender.track as
         *   it is not possible to identify the RTCRtpSender.
         */
        filterStats(result, sender.track, true));
    };
  }

  // shim receiver stats.
  if (!('getStats' in window.RTCRtpReceiver.prototype)) {
    const origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;
    if (origGetReceivers) {
      window.RTCPeerConnection.prototype.getReceivers = function() {
        const receivers = origGetReceivers.apply(this, []);
        receivers.forEach(receiver => receiver._pc = this);
        return receivers;
      };
    }
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["wrapPeerConnectionEvent"](window, 'track', e => {
      e.receiver._pc = e.srcElement;
      return e;
    });
    window.RTCRtpReceiver.prototype.getStats = function() {
      const receiver = this;
      return this._pc.getStats().then(result =>
        filterStats(result, receiver.track, false));
    };
  }

  if (!('getStats' in window.RTCRtpSender.prototype &&
      'getStats' in window.RTCRtpReceiver.prototype)) {
    return;
  }

  // shim RTCPeerConnection.getStats(track).
  const origGetStats = window.RTCPeerConnection.prototype.getStats;
  window.RTCPeerConnection.prototype.getStats = function() {
    if (arguments.length > 0 &&
        arguments[0] instanceof window.MediaStreamTrack) {
      const track = arguments[0];
      let sender;
      let receiver;
      let err;
      this.getSenders().forEach(s => {
        if (s.track === track) {
          if (sender) {
            err = true;
          } else {
            sender = s;
          }
        }
      });
      this.getReceivers().forEach(r => {
        if (r.track === track) {
          if (receiver) {
            err = true;
          } else {
            receiver = r;
          }
        }
        return r.track === track;
      });
      if (err || (sender && receiver)) {
        return Promise.reject(new DOMException(
          'There are more than one sender or receiver for the track.',
          'InvalidAccessError'));
      } else if (sender) {
        return sender.getStats();
      } else if (receiver) {
        return receiver.getStats();
      }
      return Promise.reject(new DOMException(
        'There is no sender or receiver for the track.',
        'InvalidAccessError'));
    }
    return origGetStats.apply(this, arguments);
  };
}

function shimAddTrackRemoveTrackWithNative(window) {
  // shim addTrack/removeTrack with native variants in order to make
  // the interactions with legacy getLocalStreams behave as in other browsers.
  // Keeps a mapping stream.id => [stream, rtpsenders...]
  window.RTCPeerConnection.prototype.getLocalStreams = function() {
    this._shimmedLocalStreams = this._shimmedLocalStreams || {};
    return Object.keys(this._shimmedLocalStreams)
      .map(streamId => this._shimmedLocalStreams[streamId][0]);
  };

  const origAddTrack = window.RTCPeerConnection.prototype.addTrack;
  window.RTCPeerConnection.prototype.addTrack = function(track, stream) {
    if (!stream) {
      return origAddTrack.apply(this, arguments);
    }
    this._shimmedLocalStreams = this._shimmedLocalStreams || {};

    const sender = origAddTrack.apply(this, arguments);
    if (!this._shimmedLocalStreams[stream.id]) {
      this._shimmedLocalStreams[stream.id] = [stream, sender];
    } else if (this._shimmedLocalStreams[stream.id].indexOf(sender) === -1) {
      this._shimmedLocalStreams[stream.id].push(sender);
    }
    return sender;
  };

  const origAddStream = window.RTCPeerConnection.prototype.addStream;
  window.RTCPeerConnection.prototype.addStream = function(stream) {
    this._shimmedLocalStreams = this._shimmedLocalStreams || {};

    stream.getTracks().forEach(track => {
      const alreadyExists = this.getSenders().find(s => s.track === track);
      if (alreadyExists) {
        throw new DOMException('Track already exists.',
            'InvalidAccessError');
      }
    });
    const existingSenders = this.getSenders();
    origAddStream.apply(this, arguments);
    const newSenders = this.getSenders()
      .filter(newSender => existingSenders.indexOf(newSender) === -1);
    this._shimmedLocalStreams[stream.id] = [stream].concat(newSenders);
  };

  const origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
  window.RTCPeerConnection.prototype.removeStream = function(stream) {
    this._shimmedLocalStreams = this._shimmedLocalStreams || {};
    delete this._shimmedLocalStreams[stream.id];
    return origRemoveStream.apply(this, arguments);
  };

  const origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
  window.RTCPeerConnection.prototype.removeTrack = function(sender) {
    this._shimmedLocalStreams = this._shimmedLocalStreams || {};
    if (sender) {
      Object.keys(this._shimmedLocalStreams).forEach(streamId => {
        const idx = this._shimmedLocalStreams[streamId].indexOf(sender);
        if (idx !== -1) {
          this._shimmedLocalStreams[streamId].splice(idx, 1);
        }
        if (this._shimmedLocalStreams[streamId].length === 1) {
          delete this._shimmedLocalStreams[streamId];
        }
      });
    }
    return origRemoveTrack.apply(this, arguments);
  };
}

function shimAddTrackRemoveTrack(window) {
  if (!window.RTCPeerConnection) {
    return;
  }
  const browserDetails = _utils_js__WEBPACK_IMPORTED_MODULE_0__["detectBrowser"](window);
  // shim addTrack and removeTrack.
  if (window.RTCPeerConnection.prototype.addTrack &&
      browserDetails.version >= 65) {
    return shimAddTrackRemoveTrackWithNative(window);
  }

  // also shim pc.getLocalStreams when addTrack is shimmed
  // to return the original streams.
  const origGetLocalStreams = window.RTCPeerConnection.prototype
      .getLocalStreams;
  window.RTCPeerConnection.prototype.getLocalStreams = function() {
    const nativeStreams = origGetLocalStreams.apply(this);
    this._reverseStreams = this._reverseStreams || {};
    return nativeStreams.map(stream => this._reverseStreams[stream.id]);
  };

  const origAddStream = window.RTCPeerConnection.prototype.addStream;
  window.RTCPeerConnection.prototype.addStream = function(stream) {
    this._streams = this._streams || {};
    this._reverseStreams = this._reverseStreams || {};

    stream.getTracks().forEach(track => {
      const alreadyExists = this.getSenders().find(s => s.track === track);
      if (alreadyExists) {
        throw new DOMException('Track already exists.',
            'InvalidAccessError');
      }
    });
    // Add identity mapping for consistency with addTrack.
    // Unless this is being used with a stream from addTrack.
    if (!this._reverseStreams[stream.id]) {
      const newStream = new window.MediaStream(stream.getTracks());
      this._streams[stream.id] = newStream;
      this._reverseStreams[newStream.id] = stream;
      stream = newStream;
    }
    origAddStream.apply(this, [stream]);
  };

  const origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
  window.RTCPeerConnection.prototype.removeStream = function(stream) {
    this._streams = this._streams || {};
    this._reverseStreams = this._reverseStreams || {};

    origRemoveStream.apply(this, [(this._streams[stream.id] || stream)]);
    delete this._reverseStreams[(this._streams[stream.id] ?
        this._streams[stream.id].id : stream.id)];
    delete this._streams[stream.id];
  };

  window.RTCPeerConnection.prototype.addTrack = function(track, stream) {
    if (this.signalingState === 'closed') {
      throw new DOMException(
        'The RTCPeerConnection\'s signalingState is \'closed\'.',
        'InvalidStateError');
    }
    const streams = [].slice.call(arguments, 1);
    if (streams.length !== 1 ||
        !streams[0].getTracks().find(t => t === track)) {
      // this is not fully correct but all we can manage without
      // [[associated MediaStreams]] internal slot.
      throw new DOMException(
        'The adapter.js addTrack polyfill only supports a single ' +
        ' stream which is associated with the specified track.',
        'NotSupportedError');
    }

    const alreadyExists = this.getSenders().find(s => s.track === track);
    if (alreadyExists) {
      throw new DOMException('Track already exists.',
          'InvalidAccessError');
    }

    this._streams = this._streams || {};
    this._reverseStreams = this._reverseStreams || {};
    const oldStream = this._streams[stream.id];
    if (oldStream) {
      // this is using odd Chrome behaviour, use with caution:
      // https://bugs.chromium.org/p/webrtc/issues/detail?id=7815
      // Note: we rely on the high-level addTrack/dtmf shim to
      // create the sender with a dtmf sender.
      oldStream.addTrack(track);

      // Trigger ONN async.
      Promise.resolve().then(() => {
        this.dispatchEvent(new Event('negotiationneeded'));
      });
    } else {
      const newStream = new window.MediaStream([track]);
      this._streams[stream.id] = newStream;
      this._reverseStreams[newStream.id] = stream;
      this.addStream(newStream);
    }
    return this.getSenders().find(s => s.track === track);
  };

  // replace the internal stream id with the external one and
  // vice versa.
  function replaceInternalStreamId(pc, description) {
    let sdp = description.sdp;
    Object.keys(pc._reverseStreams || []).forEach(internalId => {
      const externalStream = pc._reverseStreams[internalId];
      const internalStream = pc._streams[externalStream.id];
      sdp = sdp.replace(new RegExp(internalStream.id, 'g'),
          externalStream.id);
    });
    return new RTCSessionDescription({
      type: description.type,
      sdp
    });
  }
  function replaceExternalStreamId(pc, description) {
    let sdp = description.sdp;
    Object.keys(pc._reverseStreams || []).forEach(internalId => {
      const externalStream = pc._reverseStreams[internalId];
      const internalStream = pc._streams[externalStream.id];
      sdp = sdp.replace(new RegExp(externalStream.id, 'g'),
          internalStream.id);
    });
    return new RTCSessionDescription({
      type: description.type,
      sdp
    });
  }
  ['createOffer', 'createAnswer'].forEach(function(method) {
    const nativeMethod = window.RTCPeerConnection.prototype[method];
    window.RTCPeerConnection.prototype[method] = function() {
      const args = arguments;
      const isLegacyCall = arguments.length &&
          typeof arguments[0] === 'function';
      if (isLegacyCall) {
        return nativeMethod.apply(this, [
          (description) => {
            const desc = replaceInternalStreamId(this, description);
            args[0].apply(null, [desc]);
          },
          (err) => {
            if (args[1]) {
              args[1].apply(null, err);
            }
          }, arguments[2]
        ]);
      }
      return nativeMethod.apply(this, arguments)
      .then(description => replaceInternalStreamId(this, description));
    };
  });

  const origSetLocalDescription =
      window.RTCPeerConnection.prototype.setLocalDescription;
  window.RTCPeerConnection.prototype.setLocalDescription = function() {
    if (!arguments.length || !arguments[0].type) {
      return origSetLocalDescription.apply(this, arguments);
    }
    arguments[0] = replaceExternalStreamId(this, arguments[0]);
    return origSetLocalDescription.apply(this, arguments);
  };

  // TODO: mangle getStats: https://w3c.github.io/webrtc-stats/#dom-rtcmediastreamstats-streamidentifier

  const origLocalDescription = Object.getOwnPropertyDescriptor(
      window.RTCPeerConnection.prototype, 'localDescription');
  Object.defineProperty(window.RTCPeerConnection.prototype,
      'localDescription', {
        get() {
          const description = origLocalDescription.get.apply(this);
          if (description.type === '') {
            return description;
          }
          return replaceInternalStreamId(this, description);
        }
      });

  window.RTCPeerConnection.prototype.removeTrack = function(sender) {
    if (this.signalingState === 'closed') {
      throw new DOMException(
        'The RTCPeerConnection\'s signalingState is \'closed\'.',
        'InvalidStateError');
    }
    // We can not yet check for sender instanceof RTCRtpSender
    // since we shim RTPSender. So we check if sender._pc is set.
    if (!sender._pc) {
      throw new DOMException('Argument 1 of RTCPeerConnection.removeTrack ' +
          'does not implement interface RTCRtpSender.', 'TypeError');
    }
    const isLocal = sender._pc === this;
    if (!isLocal) {
      throw new DOMException('Sender was not created by this connection.',
          'InvalidAccessError');
    }

    // Search for the native stream the senders track belongs to.
    this._streams = this._streams || {};
    let stream;
    Object.keys(this._streams).forEach(streamid => {
      const hasTrack = this._streams[streamid].getTracks()
        .find(track => sender.track === track);
      if (hasTrack) {
        stream = this._streams[streamid];
      }
    });

    if (stream) {
      if (stream.getTracks().length === 1) {
        // if this is the last track of the stream, remove the stream. This
        // takes care of any shimmed _senders.
        this.removeStream(this._reverseStreams[stream.id]);
      } else {
        // relying on the same odd chrome behaviour as above.
        stream.removeTrack(sender.track);
      }
      this.dispatchEvent(new Event('negotiationneeded'));
    }
  };
}

function shimPeerConnection(window) {
  if (!window.RTCPeerConnection && window.webkitRTCPeerConnection) {
    // very basic support for old versions.
    window.RTCPeerConnection = window.webkitRTCPeerConnection;
  }
  if (!window.RTCPeerConnection) {
    return;
  }

  const origGetStats = window.RTCPeerConnection.prototype.getStats;
  window.RTCPeerConnection.prototype.getStats = function(selector,
      successCallback, errorCallback) {
    const args = arguments;

    // If selector is a function then we are in the old style stats so just
    // pass back the original getStats format to avoid breaking old users.
    if (arguments.length > 0 && typeof selector === 'function') {
      return origGetStats.apply(this, arguments);
    }

    // When spec-style getStats is supported, return those when called with
    // either no arguments or the selector argument is null.
    if (origGetStats.length === 0 && (arguments.length === 0 ||
        typeof arguments[0] !== 'function')) {
      return origGetStats.apply(this, []);
    }

    const fixChromeStats_ = function(response) {
      const standardReport = {};
      const reports = response.result();
      reports.forEach(report => {
        const standardStats = {
          id: report.id,
          timestamp: report.timestamp,
          type: {
            localcandidate: 'local-candidate',
            remotecandidate: 'remote-candidate'
          }[report.type] || report.type
        };
        report.names().forEach(name => {
          standardStats[name] = report.stat(name);
        });
        standardReport[standardStats.id] = standardStats;
      });

      return standardReport;
    };

    // shim getStats with maplike support
    const makeMapStats = function(stats) {
      return new Map(Object.keys(stats).map(key => [key, stats[key]]));
    };

    if (arguments.length >= 2) {
      const successCallbackWrapper_ = function(response) {
        args[1](makeMapStats(fixChromeStats_(response)));
      };

      return origGetStats.apply(this, [successCallbackWrapper_,
        arguments[0]]);
    }

    // promise-support
    return new Promise((resolve, reject) => {
      origGetStats.apply(this, [
        function(response) {
          resolve(makeMapStats(fixChromeStats_(response)));
        }, reject]);
    }).then(successCallback, errorCallback);
  };

  // shim implicit creation of RTCSessionDescription/RTCIceCandidate
  ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate']
      .forEach(function(method) {
        const nativeMethod = window.RTCPeerConnection.prototype[method];
        window.RTCPeerConnection.prototype[method] = function() {
          arguments[0] = new ((method === 'addIceCandidate') ?
              window.RTCIceCandidate :
              window.RTCSessionDescription)(arguments[0]);
          return nativeMethod.apply(this, arguments);
        };
      });

  // support for addIceCandidate(null or undefined)
  const nativeAddIceCandidate =
      window.RTCPeerConnection.prototype.addIceCandidate;
  window.RTCPeerConnection.prototype.addIceCandidate = function() {
    if (!arguments[0]) {
      if (arguments[1]) {
        arguments[1].apply(null);
      }
      return Promise.resolve();
    }
    return nativeAddIceCandidate.apply(this, arguments);
  };
}

function fixNegotiationNeeded(window) {
  _utils_js__WEBPACK_IMPORTED_MODULE_0__["wrapPeerConnectionEvent"](window, 'negotiationneeded', e => {
    const pc = e.target;
    if (pc.signalingState !== 'stable') {
      return;
    }
    return e;
  });
}


/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/chrome/getdisplaymedia.js":
/*!**********************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/chrome/getdisplaymedia.js ***!
  \**********************************************************************/
/*! exports provided: shimGetDisplayMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimGetDisplayMedia", function() { return shimGetDisplayMedia; });
/*
 *  Copyright (c) 2018 The adapter.js project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */

function shimGetDisplayMedia(window, getSourceId) {
  if (window.navigator.mediaDevices &&
    'getDisplayMedia' in window.navigator.mediaDevices) {
    return;
  }
  if (!(window.navigator.mediaDevices)) {
    return;
  }
  // getSourceId is a function that returns a promise resolving with
  // the sourceId of the screen/window/tab to be shared.
  if (typeof getSourceId !== 'function') {
    console.error('shimGetDisplayMedia: getSourceId argument is not ' +
        'a function');
    return;
  }
  window.navigator.mediaDevices.getDisplayMedia = function(constraints) {
    return getSourceId(constraints)
      .then(sourceId => {
        const widthSpecified = constraints.video && constraints.video.width;
        const heightSpecified = constraints.video && constraints.video.height;
        const frameRateSpecified = constraints.video &&
          constraints.video.frameRate;
        constraints.video = {
          mandatory: {
            chromeMediaSource: 'desktop',
            chromeMediaSourceId: sourceId,
            maxFrameRate: frameRateSpecified || 3
          }
        };
        if (widthSpecified) {
          constraints.video.mandatory.maxWidth = widthSpecified;
        }
        if (heightSpecified) {
          constraints.video.mandatory.maxHeight = heightSpecified;
        }
        return window.navigator.mediaDevices.getUserMedia(constraints);
      });
  };
}


/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/chrome/getusermedia.js":
/*!*******************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/chrome/getusermedia.js ***!
  \*******************************************************************/
/*! exports provided: shimGetUserMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimGetUserMedia", function() { return shimGetUserMedia; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/webrtc-adapter/src/js/utils.js");
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */


const logging = _utils_js__WEBPACK_IMPORTED_MODULE_0__["log"];

function shimGetUserMedia(window) {
  const navigator = window && window.navigator;

  if (!navigator.mediaDevices) {
    return;
  }

  const browserDetails = _utils_js__WEBPACK_IMPORTED_MODULE_0__["detectBrowser"](window);

  const constraintsToChrome_ = function(c) {
    if (typeof c !== 'object' || c.mandatory || c.optional) {
      return c;
    }
    const cc = {};
    Object.keys(c).forEach(key => {
      if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
        return;
      }
      const r = (typeof c[key] === 'object') ? c[key] : {ideal: c[key]};
      if (r.exact !== undefined && typeof r.exact === 'number') {
        r.min = r.max = r.exact;
      }
      const oldname_ = function(prefix, name) {
        if (prefix) {
          return prefix + name.charAt(0).toUpperCase() + name.slice(1);
        }
        return (name === 'deviceId') ? 'sourceId' : name;
      };
      if (r.ideal !== undefined) {
        cc.optional = cc.optional || [];
        let oc = {};
        if (typeof r.ideal === 'number') {
          oc[oldname_('min', key)] = r.ideal;
          cc.optional.push(oc);
          oc = {};
          oc[oldname_('max', key)] = r.ideal;
          cc.optional.push(oc);
        } else {
          oc[oldname_('', key)] = r.ideal;
          cc.optional.push(oc);
        }
      }
      if (r.exact !== undefined && typeof r.exact !== 'number') {
        cc.mandatory = cc.mandatory || {};
        cc.mandatory[oldname_('', key)] = r.exact;
      } else {
        ['min', 'max'].forEach(mix => {
          if (r[mix] !== undefined) {
            cc.mandatory = cc.mandatory || {};
            cc.mandatory[oldname_(mix, key)] = r[mix];
          }
        });
      }
    });
    if (c.advanced) {
      cc.optional = (cc.optional || []).concat(c.advanced);
    }
    return cc;
  };

  const shimConstraints_ = function(constraints, func) {
    if (browserDetails.version >= 61) {
      return func(constraints);
    }
    constraints = JSON.parse(JSON.stringify(constraints));
    if (constraints && typeof constraints.audio === 'object') {
      const remap = function(obj, a, b) {
        if (a in obj && !(b in obj)) {
          obj[b] = obj[a];
          delete obj[a];
        }
      };
      constraints = JSON.parse(JSON.stringify(constraints));
      remap(constraints.audio, 'autoGainControl', 'googAutoGainControl');
      remap(constraints.audio, 'noiseSuppression', 'googNoiseSuppression');
      constraints.audio = constraintsToChrome_(constraints.audio);
    }
    if (constraints && typeof constraints.video === 'object') {
      // Shim facingMode for mobile & surface pro.
      let face = constraints.video.facingMode;
      face = face && ((typeof face === 'object') ? face : {ideal: face});
      const getSupportedFacingModeLies = browserDetails.version < 66;

      if ((face && (face.exact === 'user' || face.exact === 'environment' ||
                    face.ideal === 'user' || face.ideal === 'environment')) &&
          !(navigator.mediaDevices.getSupportedConstraints &&
            navigator.mediaDevices.getSupportedConstraints().facingMode &&
            !getSupportedFacingModeLies)) {
        delete constraints.video.facingMode;
        let matches;
        if (face.exact === 'environment' || face.ideal === 'environment') {
          matches = ['back', 'rear'];
        } else if (face.exact === 'user' || face.ideal === 'user') {
          matches = ['front'];
        }
        if (matches) {
          // Look for matches in label, or use last cam for back (typical).
          return navigator.mediaDevices.enumerateDevices()
          .then(devices => {
            devices = devices.filter(d => d.kind === 'videoinput');
            let dev = devices.find(d => matches.some(match =>
              d.label.toLowerCase().includes(match)));
            if (!dev && devices.length && matches.includes('back')) {
              dev = devices[devices.length - 1]; // more likely the back cam
            }
            if (dev) {
              constraints.video.deviceId = face.exact ? {exact: dev.deviceId} :
                                                        {ideal: dev.deviceId};
            }
            constraints.video = constraintsToChrome_(constraints.video);
            logging('chrome: ' + JSON.stringify(constraints));
            return func(constraints);
          });
        }
      }
      constraints.video = constraintsToChrome_(constraints.video);
    }
    logging('chrome: ' + JSON.stringify(constraints));
    return func(constraints);
  };

  const shimError_ = function(e) {
    if (browserDetails.version >= 64) {
      return e;
    }
    return {
      name: {
        PermissionDeniedError: 'NotAllowedError',
        PermissionDismissedError: 'NotAllowedError',
        InvalidStateError: 'NotAllowedError',
        DevicesNotFoundError: 'NotFoundError',
        ConstraintNotSatisfiedError: 'OverconstrainedError',
        TrackStartError: 'NotReadableError',
        MediaDeviceFailedDueToShutdown: 'NotAllowedError',
        MediaDeviceKillSwitchOn: 'NotAllowedError',
        TabCaptureError: 'AbortError',
        ScreenCaptureError: 'AbortError',
        DeviceCaptureError: 'AbortError'
      }[e.name] || e.name,
      message: e.message,
      constraint: e.constraint || e.constraintName,
      toString() {
        return this.name + (this.message && ': ') + this.message;
      }
    };
  };

  const getUserMedia_ = function(constraints, onSuccess, onError) {
    shimConstraints_(constraints, c => {
      navigator.webkitGetUserMedia(c, onSuccess, e => {
        if (onError) {
          onError(shimError_(e));
        }
      });
    });
  };
  navigator.getUserMedia = getUserMedia_.bind(navigator);

  // Even though Chrome 45 has navigator.mediaDevices and a getUserMedia
  // function which returns a Promise, it does not accept spec-style
  // constraints.
  const origGetUserMedia = navigator.mediaDevices.getUserMedia.
      bind(navigator.mediaDevices);
  navigator.mediaDevices.getUserMedia = function(cs) {
    return shimConstraints_(cs, c => origGetUserMedia(c).then(stream => {
      if (c.audio && !stream.getAudioTracks().length ||
          c.video && !stream.getVideoTracks().length) {
        stream.getTracks().forEach(track => {
          track.stop();
        });
        throw new DOMException('', 'NotFoundError');
      }
      return stream;
    }, e => Promise.reject(shimError_(e))));
  };
}


/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/common_shim.js":
/*!***********************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/common_shim.js ***!
  \***********************************************************/
/*! exports provided: shimRTCIceCandidate, shimMaxMessageSize, shimSendThrowTypeError, shimConnectionState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimRTCIceCandidate", function() { return shimRTCIceCandidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimMaxMessageSize", function() { return shimMaxMessageSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimSendThrowTypeError", function() { return shimSendThrowTypeError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimConnectionState", function() { return shimConnectionState; });
/* harmony import */ var sdp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sdp */ "./node_modules/sdp/sdp.js");
/* harmony import */ var sdp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sdp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/webrtc-adapter/src/js/utils.js");
/*
 *  Copyright (c) 2017 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */





function shimRTCIceCandidate(window) {
  // foundation is arbitrarily chosen as an indicator for full support for
  // https://w3c.github.io/webrtc-pc/#rtcicecandidate-interface
  if (!window.RTCIceCandidate || (window.RTCIceCandidate && 'foundation' in
      window.RTCIceCandidate.prototype)) {
    return;
  }

  const NativeRTCIceCandidate = window.RTCIceCandidate;
  window.RTCIceCandidate = function(args) {
    // Remove the a= which shouldn't be part of the candidate string.
    if (typeof args === 'object' && args.candidate &&
        args.candidate.indexOf('a=') === 0) {
      args = JSON.parse(JSON.stringify(args));
      args.candidate = args.candidate.substr(2);
    }

    if (args.candidate && args.candidate.length) {
      // Augment the native candidate with the parsed fields.
      const nativeCandidate = new NativeRTCIceCandidate(args);
      const parsedCandidate = sdp__WEBPACK_IMPORTED_MODULE_0___default.a.parseCandidate(args.candidate);
      const augmentedCandidate = Object.assign(nativeCandidate,
          parsedCandidate);

      // Add a serializer that does not serialize the extra attributes.
      augmentedCandidate.toJSON = function() {
        return {
          candidate: augmentedCandidate.candidate,
          sdpMid: augmentedCandidate.sdpMid,
          sdpMLineIndex: augmentedCandidate.sdpMLineIndex,
          usernameFragment: augmentedCandidate.usernameFragment,
        };
      };
      return augmentedCandidate;
    }
    return new NativeRTCIceCandidate(args);
  };
  window.RTCIceCandidate.prototype = NativeRTCIceCandidate.prototype;

  // Hook up the augmented candidate in onicecandidate and
  // addEventListener('icecandidate', ...)
  _utils__WEBPACK_IMPORTED_MODULE_1__["wrapPeerConnectionEvent"](window, 'icecandidate', e => {
    if (e.candidate) {
      Object.defineProperty(e, 'candidate', {
        value: new window.RTCIceCandidate(e.candidate),
        writable: 'false'
      });
    }
    return e;
  });
}

function shimMaxMessageSize(window) {
  if (window.RTCSctpTransport || !window.RTCPeerConnection) {
    return;
  }
  const browserDetails = _utils__WEBPACK_IMPORTED_MODULE_1__["detectBrowser"](window);

  if (!('sctp' in window.RTCPeerConnection.prototype)) {
    Object.defineProperty(window.RTCPeerConnection.prototype, 'sctp', {
      get() {
        return typeof this._sctp === 'undefined' ? null : this._sctp;
      }
    });
  }

  const sctpInDescription = function(description) {
    const sections = sdp__WEBPACK_IMPORTED_MODULE_0___default.a.splitSections(description.sdp);
    sections.shift();
    return sections.some(mediaSection => {
      const mLine = sdp__WEBPACK_IMPORTED_MODULE_0___default.a.parseMLine(mediaSection);
      return mLine && mLine.kind === 'application'
          && mLine.protocol.indexOf('SCTP') !== -1;
    });
  };

  const getRemoteFirefoxVersion = function(description) {
    // TODO: Is there a better solution for detecting Firefox?
    const match = description.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
    if (match === null || match.length < 2) {
      return -1;
    }
    const version = parseInt(match[1], 10);
    // Test for NaN (yes, this is ugly)
    return version !== version ? -1 : version;
  };

  const getCanSendMaxMessageSize = function(remoteIsFirefox) {
    // Every implementation we know can send at least 64 KiB.
    // Note: Although Chrome is technically able to send up to 256 KiB, the
    //       data does not reach the other peer reliably.
    //       See: https://bugs.chromium.org/p/webrtc/issues/detail?id=8419
    let canSendMaxMessageSize = 65536;
    if (browserDetails.browser === 'firefox') {
      if (browserDetails.version < 57) {
        if (remoteIsFirefox === -1) {
          // FF < 57 will send in 16 KiB chunks using the deprecated PPID
          // fragmentation.
          canSendMaxMessageSize = 16384;
        } else {
          // However, other FF (and RAWRTC) can reassemble PPID-fragmented
          // messages. Thus, supporting ~2 GiB when sending.
          canSendMaxMessageSize = 2147483637;
        }
      } else if (browserDetails.version < 60) {
        // Currently, all FF >= 57 will reset the remote maximum message size
        // to the default value when a data channel is created at a later
        // stage. :(
        // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1426831
        canSendMaxMessageSize =
          browserDetails.version === 57 ? 65535 : 65536;
      } else {
        // FF >= 60 supports sending ~2 GiB
        canSendMaxMessageSize = 2147483637;
      }
    }
    return canSendMaxMessageSize;
  };

  const getMaxMessageSize = function(description, remoteIsFirefox) {
    // Note: 65536 bytes is the default value from the SDP spec. Also,
    //       every implementation we know supports receiving 65536 bytes.
    let maxMessageSize = 65536;

    // FF 57 has a slightly incorrect default remote max message size, so
    // we need to adjust it here to avoid a failure when sending.
    // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1425697
    if (browserDetails.browser === 'firefox'
         && browserDetails.version === 57) {
      maxMessageSize = 65535;
    }

    const match = sdp__WEBPACK_IMPORTED_MODULE_0___default.a.matchPrefix(description.sdp,
      'a=max-message-size:');
    if (match.length > 0) {
      maxMessageSize = parseInt(match[0].substr(19), 10);
    } else if (browserDetails.browser === 'firefox' &&
                remoteIsFirefox !== -1) {
      // If the maximum message size is not present in the remote SDP and
      // both local and remote are Firefox, the remote peer can receive
      // ~2 GiB.
      maxMessageSize = 2147483637;
    }
    return maxMessageSize;
  };

  const origSetRemoteDescription =
      window.RTCPeerConnection.prototype.setRemoteDescription;
  window.RTCPeerConnection.prototype.setRemoteDescription = function() {
    this._sctp = null;

    if (sctpInDescription(arguments[0])) {
      // Check if the remote is FF.
      const isFirefox = getRemoteFirefoxVersion(arguments[0]);

      // Get the maximum message size the local peer is capable of sending
      const canSendMMS = getCanSendMaxMessageSize(isFirefox);

      // Get the maximum message size of the remote peer.
      const remoteMMS = getMaxMessageSize(arguments[0], isFirefox);

      // Determine final maximum message size
      let maxMessageSize;
      if (canSendMMS === 0 && remoteMMS === 0) {
        maxMessageSize = Number.POSITIVE_INFINITY;
      } else if (canSendMMS === 0 || remoteMMS === 0) {
        maxMessageSize = Math.max(canSendMMS, remoteMMS);
      } else {
        maxMessageSize = Math.min(canSendMMS, remoteMMS);
      }

      // Create a dummy RTCSctpTransport object and the 'maxMessageSize'
      // attribute.
      const sctp = {};
      Object.defineProperty(sctp, 'maxMessageSize', {
        get() {
          return maxMessageSize;
        }
      });
      this._sctp = sctp;
    }

    return origSetRemoteDescription.apply(this, arguments);
  };
}

function shimSendThrowTypeError(window) {
  if (!(window.RTCPeerConnection &&
      'createDataChannel' in window.RTCPeerConnection.prototype)) {
    return;
  }

  // Note: Although Firefox >= 57 has a native implementation, the maximum
  //       message size can be reset for all data channels at a later stage.
  //       See: https://bugzilla.mozilla.org/show_bug.cgi?id=1426831

  function wrapDcSend(dc, pc) {
    const origDataChannelSend = dc.send;
    dc.send = function() {
      const data = arguments[0];
      const length = data.length || data.size || data.byteLength;
      if (dc.readyState === 'open' &&
          pc.sctp && length > pc.sctp.maxMessageSize) {
        throw new TypeError('Message too large (can send a maximum of ' +
          pc.sctp.maxMessageSize + ' bytes)');
      }
      return origDataChannelSend.apply(dc, arguments);
    };
  }
  const origCreateDataChannel =
    window.RTCPeerConnection.prototype.createDataChannel;
  window.RTCPeerConnection.prototype.createDataChannel = function() {
    const dataChannel = origCreateDataChannel.apply(this, arguments);
    wrapDcSend(dataChannel, this);
    return dataChannel;
  };
  _utils__WEBPACK_IMPORTED_MODULE_1__["wrapPeerConnectionEvent"](window, 'datachannel', e => {
    wrapDcSend(e.channel, e.target);
    return e;
  });
}


/* shims RTCConnectionState by pretending it is the same as iceConnectionState.
 * See https://bugs.chromium.org/p/webrtc/issues/detail?id=6145#c12
 * for why this is a valid hack in Chrome. In Firefox it is slightly incorrect
 * since DTLS failures would be hidden. See
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1265827
 * for the Firefox tracking bug.
 */
function shimConnectionState(window) {
  if (!window.RTCPeerConnection ||
      'connectionState' in window.RTCPeerConnection.prototype) {
    return;
  }
  const proto = window.RTCPeerConnection.prototype;
  Object.defineProperty(proto, 'connectionState', {
    get() {
      return {
        completed: 'connected',
        checking: 'connecting'
      }[this.iceConnectionState] || this.iceConnectionState;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(proto, 'onconnectionstatechange', {
    get() {
      return this._onconnectionstatechange || null;
    },
    set(cb) {
      if (this._onconnectionstatechange) {
        this.removeEventListener('connectionstatechange',
            this._onconnectionstatechange);
        delete this._onconnectionstatechange;
      }
      if (cb) {
        this.addEventListener('connectionstatechange',
            this._onconnectionstatechange = cb);
      }
    },
    enumerable: true,
    configurable: true
  });

  ['setLocalDescription', 'setRemoteDescription'].forEach((method) => {
    const origMethod = proto[method];
    proto[method] = function() {
      if (!this._connectionstatechangepoly) {
        this._connectionstatechangepoly = e => {
          const pc = e.target;
          if (pc._lastConnectionState !== pc.connectionState) {
            pc._lastConnectionState = pc.connectionState;
            const newEvent = new Event('connectionstatechange', e);
            pc.dispatchEvent(newEvent);
          }
          return e;
        };
        this.addEventListener('iceconnectionstatechange',
          this._connectionstatechangepoly);
      }
      return origMethod.apply(this, arguments);
    };
  });
}


/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/edge/edge_shim.js":
/*!**************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/edge/edge_shim.js ***!
  \**************************************************************/
/*! exports provided: shimGetUserMedia, shimGetDisplayMedia, shimPeerConnection, shimReplaceTrack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimPeerConnection", function() { return shimPeerConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimReplaceTrack", function() { return shimReplaceTrack; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/webrtc-adapter/src/js/utils.js");
/* harmony import */ var _filtericeservers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filtericeservers */ "./node_modules/webrtc-adapter/src/js/edge/filtericeservers.js");
/* harmony import */ var rtcpeerconnection_shim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rtcpeerconnection-shim */ "./node_modules/rtcpeerconnection-shim/rtcpeerconnection.js");
/* harmony import */ var rtcpeerconnection_shim__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rtcpeerconnection_shim__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _getusermedia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getusermedia */ "./node_modules/webrtc-adapter/src/js/edge/getusermedia.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shimGetUserMedia", function() { return _getusermedia__WEBPACK_IMPORTED_MODULE_3__["shimGetUserMedia"]; });

/* harmony import */ var _getdisplaymedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getdisplaymedia */ "./node_modules/webrtc-adapter/src/js/edge/getdisplaymedia.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shimGetDisplayMedia", function() { return _getdisplaymedia__WEBPACK_IMPORTED_MODULE_4__["shimGetDisplayMedia"]; });

/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */









function shimPeerConnection(window) {
  const browserDetails = _utils__WEBPACK_IMPORTED_MODULE_0__["detectBrowser"](window);

  if (window.RTCIceGatherer) {
    if (!window.RTCIceCandidate) {
      window.RTCIceCandidate = function(args) {
        return args;
      };
    }
    if (!window.RTCSessionDescription) {
      window.RTCSessionDescription = function(args) {
        return args;
      };
    }
    // this adds an additional event listener to MediaStrackTrack that signals
    // when a tracks enabled property was changed. Workaround for a bug in
    // addStream, see below. No longer required in 15025+
    if (browserDetails.version < 15025) {
      const origMSTEnabled = Object.getOwnPropertyDescriptor(
          window.MediaStreamTrack.prototype, 'enabled');
      Object.defineProperty(window.MediaStreamTrack.prototype, 'enabled', {
        set(value) {
          origMSTEnabled.set.call(this, value);
          const ev = new Event('enabled');
          ev.enabled = value;
          this.dispatchEvent(ev);
        }
      });
    }
  }

  // ORTC defines the DTMF sender a bit different.
  // https://github.com/w3c/ortc/issues/714
  if (window.RTCRtpSender && !('dtmf' in window.RTCRtpSender.prototype)) {
    Object.defineProperty(window.RTCRtpSender.prototype, 'dtmf', {
      get() {
        if (this._dtmf === undefined) {
          if (this.track.kind === 'audio') {
            this._dtmf = new window.RTCDtmfSender(this);
          } else if (this.track.kind === 'video') {
            this._dtmf = null;
          }
        }
        return this._dtmf;
      }
    });
  }
  // Edge currently only implements the RTCDtmfSender, not the
  // RTCDTMFSender alias. See http://draft.ortc.org/#rtcdtmfsender2*
  if (window.RTCDtmfSender && !window.RTCDTMFSender) {
    window.RTCDTMFSender = window.RTCDtmfSender;
  }

  const RTCPeerConnectionShim = rtcpeerconnection_shim__WEBPACK_IMPORTED_MODULE_2___default()(window,
      browserDetails.version);
  window.RTCPeerConnection = function(config) {
    if (config && config.iceServers) {
      config.iceServers = Object(_filtericeservers__WEBPACK_IMPORTED_MODULE_1__["filterIceServers"])(config.iceServers,
        browserDetails.version);
      _utils__WEBPACK_IMPORTED_MODULE_0__["log"]('ICE servers after filtering:', config.iceServers);
    }
    return new RTCPeerConnectionShim(config);
  };
  window.RTCPeerConnection.prototype = RTCPeerConnectionShim.prototype;
}

function shimReplaceTrack(window) {
  // ORTC has replaceTrack -- https://github.com/w3c/ortc/issues/614
  if (window.RTCRtpSender &&
      !('replaceTrack' in window.RTCRtpSender.prototype)) {
    window.RTCRtpSender.prototype.replaceTrack =
        window.RTCRtpSender.prototype.setTrack;
  }
}


/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/edge/filtericeservers.js":
/*!*********************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/edge/filtericeservers.js ***!
  \*********************************************************************/
/*! exports provided: filterIceServers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterIceServers", function() { return filterIceServers; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/webrtc-adapter/src/js/utils.js");
/*
 *  Copyright (c) 2018 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */



// Edge does not like
// 1) stun: filtered after 14393 unless ?transport=udp is present
// 2) turn: that does not have all of turn:host:port?transport=udp
// 3) turn: with ipv6 addresses
// 4) turn: occurring muliple times
function filterIceServers(iceServers, edgeVersion) {
  let hasTurn = false;
  iceServers = JSON.parse(JSON.stringify(iceServers));
  return iceServers.filter(server => {
    if (server && (server.urls || server.url)) {
      var urls = server.urls || server.url;
      if (server.url && !server.urls) {
        _utils__WEBPACK_IMPORTED_MODULE_0__["deprecated"]('RTCIceServer.url', 'RTCIceServer.urls');
      }
      const isString = typeof urls === 'string';
      if (isString) {
        urls = [urls];
      }
      urls = urls.filter(url => {
        // filter STUN unconditionally.
        if (url.indexOf('stun:') === 0) {
          return false;
        }

        const validTurn = url.startsWith('turn') &&
            !url.startsWith('turn:[') &&
            url.includes('transport=udp');
        if (validTurn && !hasTurn) {
          hasTurn = true;
          return true;
        }
        return validTurn && !hasTurn;
      });

      delete server.url;
      server.urls = isString ? urls[0] : urls;
      return !!urls.length;
    }
  });
}


/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/edge/getdisplaymedia.js":
/*!********************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/edge/getdisplaymedia.js ***!
  \********************************************************************/
/*! exports provided: shimGetDisplayMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimGetDisplayMedia", function() { return shimGetDisplayMedia; });
/*
 *  Copyright (c) 2018 The adapter.js project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */


function shimGetDisplayMedia(window) {
  if (!('getDisplayMedia' in window.navigator)) {
    return;
  }
  if (!(window.navigator.mediaDevices)) {
    return;
  }
  if (window.navigator.mediaDevices &&
    'getDisplayMedia' in window.navigator.mediaDevices) {
    return;
  }
  window.navigator.mediaDevices.getDisplayMedia =
    window.navigator.getDisplayMedia.bind(window.navigator.mediaDevices);
}


/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/edge/getusermedia.js":
/*!*****************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/edge/getusermedia.js ***!
  \*****************************************************************/
/*! exports provided: shimGetUserMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimGetUserMedia", function() { return shimGetUserMedia; });
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */


function shimGetUserMedia(window) {
  const navigator = window && window.navigator;

  const shimError_ = function(e) {
    return {
      name: {PermissionDeniedError: 'NotAllowedError'}[e.name] || e.name,
      message: e.message,
      constraint: e.constraint,
      toString() {
        return this.name;
      }
    };
  };

  // getUserMedia error shim.
  const origGetUserMedia = navigator.mediaDevices.getUserMedia.
      bind(navigator.mediaDevices);
  navigator.mediaDevices.getUserMedia = function(c) {
    return origGetUserMedia(c).catch(e => Promise.reject(shimError_(e)));
  };
}


/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/firefox/firefox_shim.js":
/*!********************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/firefox/firefox_shim.js ***!
  \********************************************************************/
/*! exports provided: shimGetUserMedia, shimGetDisplayMedia, shimOnTrack, shimPeerConnection, shimSenderGetStats, shimReceiverGetStats, shimRemoveStream, shimRTCDataChannel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimOnTrack", function() { return shimOnTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimPeerConnection", function() { return shimPeerConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimSenderGetStats", function() { return shimSenderGetStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimReceiverGetStats", function() { return shimReceiverGetStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimRemoveStream", function() { return shimRemoveStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimRTCDataChannel", function() { return shimRTCDataChannel; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/webrtc-adapter/src/js/utils.js");
/* harmony import */ var _getusermedia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getusermedia */ "./node_modules/webrtc-adapter/src/js/firefox/getusermedia.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shimGetUserMedia", function() { return _getusermedia__WEBPACK_IMPORTED_MODULE_1__["shimGetUserMedia"]; });

/* harmony import */ var _getdisplaymedia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getdisplaymedia */ "./node_modules/webrtc-adapter/src/js/firefox/getdisplaymedia.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shimGetDisplayMedia", function() { return _getdisplaymedia__WEBPACK_IMPORTED_MODULE_2__["shimGetDisplayMedia"]; });

/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */






function shimOnTrack(window) {
  if (typeof window === 'object' && window.RTCTrackEvent &&
      ('receiver' in window.RTCTrackEvent.prototype) &&
      !('transceiver' in window.RTCTrackEvent.prototype)) {
    Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
      get() {
        return {receiver: this.receiver};
      }
    });
  }
}

function shimPeerConnection(window) {
  const browserDetails = _utils__WEBPACK_IMPORTED_MODULE_0__["detectBrowser"](window);

  if (typeof window !== 'object' ||
      !(window.RTCPeerConnection || window.mozRTCPeerConnection)) {
    return; // probably media.peerconnection.enabled=false in about:config
  }
  if (!window.RTCPeerConnection && window.mozRTCPeerConnection) {
    // very basic support for old versions.
    window.RTCPeerConnection = window.mozRTCPeerConnection;
  }

  // shim away need for obsolete RTCIceCandidate/RTCSessionDescription.
  ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate']
      .forEach(function(method) {
        const nativeMethod = window.RTCPeerConnection.prototype[method];
        window.RTCPeerConnection.prototype[method] = function() {
          arguments[0] = new ((method === 'addIceCandidate') ?
              window.RTCIceCandidate :
              window.RTCSessionDescription)(arguments[0]);
          return nativeMethod.apply(this, arguments);
        };
      });

  // support for addIceCandidate(null or undefined)
  const nativeAddIceCandidate =
      window.RTCPeerConnection.prototype.addIceCandidate;
  window.RTCPeerConnection.prototype.addIceCandidate = function() {
    if (!arguments[0]) {
      if (arguments[1]) {
        arguments[1].apply(null);
      }
      return Promise.resolve();
    }
    return nativeAddIceCandidate.apply(this, arguments);
  };

  const modernStatsTypes = {
    inboundrtp: 'inbound-rtp',
    outboundrtp: 'outbound-rtp',
    candidatepair: 'candidate-pair',
    localcandidate: 'local-candidate',
    remotecandidate: 'remote-candidate'
  };

  const nativeGetStats = window.RTCPeerConnection.prototype.getStats;
  window.RTCPeerConnection.prototype.getStats = function(
    selector,
    onSucc,
    onErr
  ) {
    return nativeGetStats.apply(this, [selector || null])
      .then(stats => {
        if (browserDetails.version < 53 && !onSucc) {
          // Shim only promise getStats with spec-hyphens in type names
          // Leave callback version alone; misc old uses of forEach before Map
          try {
            stats.forEach(stat => {
              stat.type = modernStatsTypes[stat.type] || stat.type;
            });
          } catch (e) {
            if (e.name !== 'TypeError') {
              throw e;
            }
            // Avoid TypeError: "type" is read-only, in old versions. 34-43ish
            stats.forEach((stat, i) => {
              stats.set(i, Object.assign({}, stat, {
                type: modernStatsTypes[stat.type] || stat.type
              }));
            });
          }
        }
        return stats;
      })
      .then(onSucc, onErr);
  };
}

function shimSenderGetStats(window) {
  if (!(typeof window === 'object' && window.RTCPeerConnection &&
      window.RTCRtpSender)) {
    return;
  }
  if (window.RTCRtpSender && 'getStats' in window.RTCRtpSender.prototype) {
    return;
  }
  const origGetSenders = window.RTCPeerConnection.prototype.getSenders;
  if (origGetSenders) {
    window.RTCPeerConnection.prototype.getSenders = function() {
      const senders = origGetSenders.apply(this, []);
      senders.forEach(sender => sender._pc = this);
      return senders;
    };
  }

  const origAddTrack = window.RTCPeerConnection.prototype.addTrack;
  if (origAddTrack) {
    window.RTCPeerConnection.prototype.addTrack = function() {
      const sender = origAddTrack.apply(this, arguments);
      sender._pc = this;
      return sender;
    };
  }
  window.RTCRtpSender.prototype.getStats = function() {
    return this.track ? this._pc.getStats(this.track) :
        Promise.resolve(new Map());
  };
}

function shimReceiverGetStats(window) {
  if (!(typeof window === 'object' && window.RTCPeerConnection &&
      window.RTCRtpSender)) {
    return;
  }
  if (window.RTCRtpSender && 'getStats' in window.RTCRtpReceiver.prototype) {
    return;
  }
  const origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;
  if (origGetReceivers) {
    window.RTCPeerConnection.prototype.getReceivers = function() {
      const receivers = origGetReceivers.apply(this, []);
      receivers.forEach(receiver => receiver._pc = this);
      return receivers;
    };
  }
  _utils__WEBPACK_IMPORTED_MODULE_0__["wrapPeerConnectionEvent"](window, 'track', e => {
    e.receiver._pc = e.srcElement;
    return e;
  });
  window.RTCRtpReceiver.prototype.getStats = function() {
    return this._pc.getStats(this.track);
  };
}

function shimRemoveStream(window) {
  if (!window.RTCPeerConnection ||
      'removeStream' in window.RTCPeerConnection.prototype) {
    return;
  }
  window.RTCPeerConnection.prototype.removeStream = function(stream) {
    _utils__WEBPACK_IMPORTED_MODULE_0__["deprecated"]('removeStream', 'removeTrack');
    this.getSenders().forEach(sender => {
      if (sender.track && stream.getTracks().includes(sender.track)) {
        this.removeTrack(sender);
      }
    });
  };
}

function shimRTCDataChannel(window) {
  // rename DataChannel to RTCDataChannel (native fix in FF60):
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1173851
  if (window.DataChannel && !window.RTCDataChannel) {
    window.RTCDataChannel = window.DataChannel;
  }
}


/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/firefox/getdisplaymedia.js":
/*!***********************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/firefox/getdisplaymedia.js ***!
  \***********************************************************************/
/*! exports provided: shimGetDisplayMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimGetDisplayMedia", function() { return shimGetDisplayMedia; });
/*
 *  Copyright (c) 2018 The adapter.js project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */


function shimGetDisplayMedia(window, preferredMediaSource) {
  if (window.navigator.mediaDevices &&
    'getDisplayMedia' in window.navigator.mediaDevices) {
    return;
  }
  if (!(window.navigator.mediaDevices)) {
    return;
  }
  window.navigator.mediaDevices.getDisplayMedia = function(constraints) {
    if (!(constraints && constraints.video)) {
      const err = new DOMException('getDisplayMedia without video ' +
          'constraints is undefined');
      err.name = 'NotFoundError';
      // from https://heycam.github.io/webidl/#idl-DOMException-error-names
      err.code = 8;
      return Promise.reject(err);
    }
    if (constraints.video === true) {
      constraints.video = {mediaSource: preferredMediaSource};
    } else {
      constraints.video.mediaSource = preferredMediaSource;
    }
    return window.navigator.mediaDevices.getUserMedia(constraints);
  };
}


/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/firefox/getusermedia.js":
/*!********************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/firefox/getusermedia.js ***!
  \********************************************************************/
/*! exports provided: shimGetUserMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimGetUserMedia", function() { return shimGetUserMedia; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/webrtc-adapter/src/js/utils.js");
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */




function shimGetUserMedia(window) {
  const browserDetails = _utils__WEBPACK_IMPORTED_MODULE_0__["detectBrowser"](window);
  const navigator = window && window.navigator;
  const MediaStreamTrack = window && window.MediaStreamTrack;

  navigator.getUserMedia = function(constraints, onSuccess, onError) {
    // Replace Firefox 44+'s deprecation warning with unprefixed version.
    _utils__WEBPACK_IMPORTED_MODULE_0__["deprecated"]('navigator.getUserMedia',
        'navigator.mediaDevices.getUserMedia');
    navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
  };

  if (!(browserDetails.version > 55 &&
      'autoGainControl' in navigator.mediaDevices.getSupportedConstraints())) {
    const remap = function(obj, a, b) {
      if (a in obj && !(b in obj)) {
        obj[b] = obj[a];
        delete obj[a];
      }
    };

    const nativeGetUserMedia = navigator.mediaDevices.getUserMedia.
        bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = function(c) {
      if (typeof c === 'object' && typeof c.audio === 'object') {
        c = JSON.parse(JSON.stringify(c));
        remap(c.audio, 'autoGainControl', 'mozAutoGainControl');
        remap(c.audio, 'noiseSuppression', 'mozNoiseSuppression');
      }
      return nativeGetUserMedia(c);
    };

    if (MediaStreamTrack && MediaStreamTrack.prototype.getSettings) {
      const nativeGetSettings = MediaStreamTrack.prototype.getSettings;
      MediaStreamTrack.prototype.getSettings = function() {
        const obj = nativeGetSettings.apply(this, arguments);
        remap(obj, 'mozAutoGainControl', 'autoGainControl');
        remap(obj, 'mozNoiseSuppression', 'noiseSuppression');
        return obj;
      };
    }

    if (MediaStreamTrack && MediaStreamTrack.prototype.applyConstraints) {
      const nativeApplyConstraints =
        MediaStreamTrack.prototype.applyConstraints;
      MediaStreamTrack.prototype.applyConstraints = function(c) {
        if (this.kind === 'audio' && typeof c === 'object') {
          c = JSON.parse(JSON.stringify(c));
          remap(c, 'autoGainControl', 'mozAutoGainControl');
          remap(c, 'noiseSuppression', 'mozNoiseSuppression');
        }
        return nativeApplyConstraints.apply(this, [c]);
      };
    }
  }
}


/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/safari/safari_shim.js":
/*!******************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/safari/safari_shim.js ***!
  \******************************************************************/
/*! exports provided: shimLocalStreamsAPI, shimRemoteStreamsAPI, shimCallbacksAPI, shimGetUserMedia, shimRTCIceServerUrls, shimTrackEventTransceiver, shimCreateOfferLegacy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimLocalStreamsAPI", function() { return shimLocalStreamsAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimRemoteStreamsAPI", function() { return shimRemoteStreamsAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimCallbacksAPI", function() { return shimCallbacksAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimGetUserMedia", function() { return shimGetUserMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimRTCIceServerUrls", function() { return shimRTCIceServerUrls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimTrackEventTransceiver", function() { return shimTrackEventTransceiver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimCreateOfferLegacy", function() { return shimCreateOfferLegacy; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/webrtc-adapter/src/js/utils.js");
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */



function shimLocalStreamsAPI(window) {
  if (typeof window !== 'object' || !window.RTCPeerConnection) {
    return;
  }
  if (!('getLocalStreams' in window.RTCPeerConnection.prototype)) {
    window.RTCPeerConnection.prototype.getLocalStreams = function() {
      if (!this._localStreams) {
        this._localStreams = [];
      }
      return this._localStreams;
    };
  }
  if (!('addStream' in window.RTCPeerConnection.prototype)) {
    const _addTrack = window.RTCPeerConnection.prototype.addTrack;
    window.RTCPeerConnection.prototype.addStream = function(stream) {
      if (!this._localStreams) {
        this._localStreams = [];
      }
      if (!this._localStreams.includes(stream)) {
        this._localStreams.push(stream);
      }
      stream.getTracks().forEach(track => _addTrack.call(this, track, stream));
    };

    window.RTCPeerConnection.prototype.addTrack = function(track, stream) {
      if (stream) {
        if (!this._localStreams) {
          this._localStreams = [stream];
        } else if (!this._localStreams.includes(stream)) {
          this._localStreams.push(stream);
        }
      }
      return _addTrack.call(this, track, stream);
    };
  }
  if (!('removeStream' in window.RTCPeerConnection.prototype)) {
    window.RTCPeerConnection.prototype.removeStream = function(stream) {
      if (!this._localStreams) {
        this._localStreams = [];
      }
      const index = this._localStreams.indexOf(stream);
      if (index === -1) {
        return;
      }
      this._localStreams.splice(index, 1);
      const tracks = stream.getTracks();
      this.getSenders().forEach(sender => {
        if (tracks.includes(sender.track)) {
          this.removeTrack(sender);
        }
      });
    };
  }
}

function shimRemoteStreamsAPI(window) {
  if (typeof window !== 'object' || !window.RTCPeerConnection) {
    return;
  }
  if (!('getRemoteStreams' in window.RTCPeerConnection.prototype)) {
    window.RTCPeerConnection.prototype.getRemoteStreams = function() {
      return this._remoteStreams ? this._remoteStreams : [];
    };
  }
  if (!('onaddstream' in window.RTCPeerConnection.prototype)) {
    Object.defineProperty(window.RTCPeerConnection.prototype, 'onaddstream', {
      get() {
        return this._onaddstream;
      },
      set(f) {
        if (this._onaddstream) {
          this.removeEventListener('addstream', this._onaddstream);
          this.removeEventListener('track', this._onaddstreampoly);
        }
        this.addEventListener('addstream', this._onaddstream = f);
        this.addEventListener('track', this._onaddstreampoly = (e) => {
          e.streams.forEach(stream => {
            if (!this._remoteStreams) {
              this._remoteStreams = [];
            }
            if (this._remoteStreams.includes(stream)) {
              return;
            }
            this._remoteStreams.push(stream);
            const event = new Event('addstream');
            event.stream = stream;
            this.dispatchEvent(event);
          });
        });
      }
    });
    const origSetRemoteDescription =
      window.RTCPeerConnection.prototype.setRemoteDescription;
    window.RTCPeerConnection.prototype.setRemoteDescription = function() {
      const pc = this;
      if (!this._onaddstreampoly) {
        this.addEventListener('track', this._onaddstreampoly = function(e) {
          e.streams.forEach(stream => {
            if (!pc._remoteStreams) {
              pc._remoteStreams = [];
            }
            if (pc._remoteStreams.indexOf(stream) >= 0) {
              return;
            }
            pc._remoteStreams.push(stream);
            const event = new Event('addstream');
            event.stream = stream;
            pc.dispatchEvent(event);
          });
        });
      }
      return origSetRemoteDescription.apply(pc, arguments);
    };
  }
}

function shimCallbacksAPI(window) {
  if (typeof window !== 'object' || !window.RTCPeerConnection) {
    return;
  }
  const prototype = window.RTCPeerConnection.prototype;
  const createOffer = prototype.createOffer;
  const createAnswer = prototype.createAnswer;
  const setLocalDescription = prototype.setLocalDescription;
  const setRemoteDescription = prototype.setRemoteDescription;
  const addIceCandidate = prototype.addIceCandidate;

  prototype.createOffer = function(successCallback, failureCallback) {
    const options = (arguments.length >= 2) ? arguments[2] : arguments[0];
    const promise = createOffer.apply(this, [options]);
    if (!failureCallback) {
      return promise;
    }
    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };

  prototype.createAnswer = function(successCallback, failureCallback) {
    const options = (arguments.length >= 2) ? arguments[2] : arguments[0];
    const promise = createAnswer.apply(this, [options]);
    if (!failureCallback) {
      return promise;
    }
    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };

  let withCallback = function(description, successCallback, failureCallback) {
    const promise = setLocalDescription.apply(this, [description]);
    if (!failureCallback) {
      return promise;
    }
    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };
  prototype.setLocalDescription = withCallback;

  withCallback = function(description, successCallback, failureCallback) {
    const promise = setRemoteDescription.apply(this, [description]);
    if (!failureCallback) {
      return promise;
    }
    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };
  prototype.setRemoteDescription = withCallback;

  withCallback = function(candidate, successCallback, failureCallback) {
    const promise = addIceCandidate.apply(this, [candidate]);
    if (!failureCallback) {
      return promise;
    }
    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };
  prototype.addIceCandidate = withCallback;
}

function shimGetUserMedia(window) {
  const navigator = window && window.navigator;

  if (!navigator.getUserMedia && navigator.mediaDevices &&
    navigator.mediaDevices.getUserMedia) {
    navigator.getUserMedia = function(constraints, cb, errcb) {
      navigator.mediaDevices.getUserMedia(constraints)
      .then(cb, errcb);
    }.bind(navigator);
  }
}

function shimRTCIceServerUrls(window) {
  // migrate from non-spec RTCIceServer.url to RTCIceServer.urls
  const OrigPeerConnection = window.RTCPeerConnection;
  window.RTCPeerConnection = function(pcConfig, pcConstraints) {
    if (pcConfig && pcConfig.iceServers) {
      const newIceServers = [];
      for (let i = 0; i < pcConfig.iceServers.length; i++) {
        let server = pcConfig.iceServers[i];
        if (!server.hasOwnProperty('urls') &&
            server.hasOwnProperty('url')) {
          _utils__WEBPACK_IMPORTED_MODULE_0__["deprecated"]('RTCIceServer.url', 'RTCIceServer.urls');
          server = JSON.parse(JSON.stringify(server));
          server.urls = server.url;
          delete server.url;
          newIceServers.push(server);
        } else {
          newIceServers.push(pcConfig.iceServers[i]);
        }
      }
      pcConfig.iceServers = newIceServers;
    }
    return new OrigPeerConnection(pcConfig, pcConstraints);
  };
  window.RTCPeerConnection.prototype = OrigPeerConnection.prototype;
  // wrap static methods. Currently just generateCertificate.
  if ('generateCertificate' in window.RTCPeerConnection) {
    Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
      get() {
        return OrigPeerConnection.generateCertificate;
      }
    });
  }
}

function shimTrackEventTransceiver(window) {
  // Add event.transceiver member over deprecated event.receiver
  if (typeof window === 'object' && window.RTCPeerConnection &&
      ('receiver' in window.RTCTrackEvent.prototype) &&
      // can't check 'transceiver' in window.RTCTrackEvent.prototype, as it is
      // defined for some reason even when window.RTCTransceiver is not.
      !window.RTCTransceiver) {
    Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
      get() {
        return {receiver: this.receiver};
      }
    });
  }
}

function shimCreateOfferLegacy(window) {
  const origCreateOffer = window.RTCPeerConnection.prototype.createOffer;
  window.RTCPeerConnection.prototype.createOffer = function(offerOptions) {
    if (offerOptions) {
      if (typeof offerOptions.offerToReceiveAudio !== 'undefined') {
        // support bit values
        offerOptions.offerToReceiveAudio = !!offerOptions.offerToReceiveAudio;
      }
      const audioTransceiver = this.getTransceivers().find(transceiver =>
        transceiver.sender.track &&
        transceiver.sender.track.kind === 'audio');
      if (offerOptions.offerToReceiveAudio === false && audioTransceiver) {
        if (audioTransceiver.direction === 'sendrecv') {
          if (audioTransceiver.setDirection) {
            audioTransceiver.setDirection('sendonly');
          } else {
            audioTransceiver.direction = 'sendonly';
          }
        } else if (audioTransceiver.direction === 'recvonly') {
          if (audioTransceiver.setDirection) {
            audioTransceiver.setDirection('inactive');
          } else {
            audioTransceiver.direction = 'inactive';
          }
        }
      } else if (offerOptions.offerToReceiveAudio === true &&
          !audioTransceiver) {
        this.addTransceiver('audio');
      }

      if (typeof offerOptions.offerToReceiveVideo !== 'undefined') {
        // support bit values
        offerOptions.offerToReceiveVideo = !!offerOptions.offerToReceiveVideo;
      }
      const videoTransceiver = this.getTransceivers().find(transceiver =>
        transceiver.sender.track &&
        transceiver.sender.track.kind === 'video');
      if (offerOptions.offerToReceiveVideo === false && videoTransceiver) {
        if (videoTransceiver.direction === 'sendrecv') {
          if (videoTransceiver.setDirection) {
            videoTransceiver.setDirection('sendonly');
          } else {
            videoTransceiver.direction = 'sendonly';
          }
        } else if (videoTransceiver.direction === 'recvonly') {
          if (videoTransceiver.setDirection) {
            videoTransceiver.setDirection('inactive');
          } else {
            videoTransceiver.direction = 'inactive';
          }
        }
      } else if (offerOptions.offerToReceiveVideo === true &&
          !videoTransceiver) {
        this.addTransceiver('video');
      }
    }
    return origCreateOffer.apply(this, arguments);
  };
}


/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/utils.js":
/*!*****************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/utils.js ***!
  \*****************************************************/
/*! exports provided: extractVersion, wrapPeerConnectionEvent, disableLog, disableWarnings, log, deprecated, detectBrowser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractVersion", function() { return extractVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapPeerConnectionEvent", function() { return wrapPeerConnectionEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableLog", function() { return disableLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableWarnings", function() { return disableWarnings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deprecated", function() { return deprecated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detectBrowser", function() { return detectBrowser; });
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */


let logDisabled_ = true;
let deprecationWarnings_ = true;

/**
 * Extract browser version out of the provided user agent string.
 *
 * @param {!string} uastring userAgent string.
 * @param {!string} expr Regular expression used as match criteria.
 * @param {!number} pos position in the version string to be returned.
 * @return {!number} browser version.
 */
function extractVersion(uastring, expr, pos) {
  const match = uastring.match(expr);
  return match && match.length >= pos && parseInt(match[pos], 10);
}

// Wraps the peerconnection event eventNameToWrap in a function
// which returns the modified event object (or false to prevent
// the event).
function wrapPeerConnectionEvent(window, eventNameToWrap, wrapper) {
  if (!window.RTCPeerConnection) {
    return;
  }
  const proto = window.RTCPeerConnection.prototype;
  const nativeAddEventListener = proto.addEventListener;
  proto.addEventListener = function(nativeEventName, cb) {
    if (nativeEventName !== eventNameToWrap) {
      return nativeAddEventListener.apply(this, arguments);
    }
    const wrappedCallback = (e) => {
      const modifiedEvent = wrapper(e);
      if (modifiedEvent) {
        cb(modifiedEvent);
      }
    };
    this._eventMap = this._eventMap || {};
    this._eventMap[cb] = wrappedCallback;
    return nativeAddEventListener.apply(this, [nativeEventName,
      wrappedCallback]);
  };

  const nativeRemoveEventListener = proto.removeEventListener;
  proto.removeEventListener = function(nativeEventName, cb) {
    if (nativeEventName !== eventNameToWrap || !this._eventMap
        || !this._eventMap[cb]) {
      return nativeRemoveEventListener.apply(this, arguments);
    }
    const unwrappedCb = this._eventMap[cb];
    delete this._eventMap[cb];
    return nativeRemoveEventListener.apply(this, [nativeEventName,
      unwrappedCb]);
  };

  Object.defineProperty(proto, 'on' + eventNameToWrap, {
    get() {
      return this['_on' + eventNameToWrap];
    },
    set(cb) {
      if (this['_on' + eventNameToWrap]) {
        this.removeEventListener(eventNameToWrap,
            this['_on' + eventNameToWrap]);
        delete this['_on' + eventNameToWrap];
      }
      if (cb) {
        this.addEventListener(eventNameToWrap,
            this['_on' + eventNameToWrap] = cb);
      }
    },
    enumerable: true,
    configurable: true
  });
}

function disableLog(bool) {
  if (typeof bool !== 'boolean') {
    return new Error('Argument type: ' + typeof bool +
        '. Please use a boolean.');
  }
  logDisabled_ = bool;
  return (bool) ? 'adapter.js logging disabled' :
      'adapter.js logging enabled';
}

/**
 * Disable or enable deprecation warnings
 * @param {!boolean} bool set to true to disable warnings.
 */
function disableWarnings(bool) {
  if (typeof bool !== 'boolean') {
    return new Error('Argument type: ' + typeof bool +
        '. Please use a boolean.');
  }
  deprecationWarnings_ = !bool;
  return 'adapter.js deprecation warnings ' + (bool ? 'disabled' : 'enabled');
}

function log() {
  if (typeof window === 'object') {
    if (logDisabled_) {
      return;
    }
    if (typeof console !== 'undefined' && typeof console.log === 'function') {
      console.log.apply(console, arguments);
    }
  }
}

/**
 * Shows a deprecation warning suggesting the modern and spec-compatible API.
 */
function deprecated(oldMethod, newMethod) {
  if (!deprecationWarnings_) {
    return;
  }
  console.warn(oldMethod + ' is deprecated, please use ' + newMethod +
      ' instead.');
}

/**
 * Browser detector.
 *
 * @return {object} result containing browser and version
 *     properties.
 */
function detectBrowser(window) {
  const {navigator} = window;

  // Returned result object.
  const result = {browser: null, version: null};

  // Fail early if it's not a browser
  if (typeof window === 'undefined' || !window.navigator) {
    result.browser = 'Not a browser.';
    return result;
  }

  if (navigator.mozGetUserMedia) { // Firefox.
    result.browser = 'firefox';
    result.version = extractVersion(navigator.userAgent,
        /Firefox\/(\d+)\./, 1);
  } else if (navigator.webkitGetUserMedia) {
    // Chrome, Chromium, Webview, Opera.
    // Version matches Chrome/WebRTC version.
    result.browser = 'chrome';
    result.version = extractVersion(navigator.userAgent,
        /Chrom(e|ium)\/(\d+)\./, 2);
  } else if (navigator.mediaDevices &&
      navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)) { // Edge.
    result.browser = 'edge';
    result.version = extractVersion(navigator.userAgent,
        /Edge\/(\d+).(\d+)$/, 2);
  } else if (window.RTCPeerConnection &&
      navigator.userAgent.match(/AppleWebKit\/(\d+)\./)) { // Safari.
    result.browser = 'safari';
    result.version = extractVersion(navigator.userAgent,
        /AppleWebKit\/(\d+)\./, 1);
  } else { // Default fallthrough: not supported.
    result.browser = 'Not a supported browser.';
    return result;
  }

  return result;
}


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, browser, main, private, scripts, keywords, repository, bugs, license, licenses, dependencies, devDependencies, author, readmeFilename, contributors, default */
/***/ (function(module) {

module.exports = {"name":"@nodefony/stage","version":"0.1.15","description":"Nodefony Framework Client Side Nodefony web developpement","browser":"dist/stage6.min.js","main":"src/core.js","private":false,"scripts":{"build-dev":"WEBPACK_ENV=dev webpack --verbose","build-prod":"WEBPACK_ENV=prod webpack --verbose","start":"npm start --prefix ./demo/nodefony"},"keywords":["javascript","webpack","nodefony","webrtc","sip","opensip","kamailio","webaudio"],"repository":{"type":"git","url":"git@github.com:nodefony/nodefony-stage.git"},"bugs":{"url":"https://github.com/nodefony/nodefony-stage/issues"},"license":"CECILL-B","licenses":[{"type":"CECILL-B","url":"http://www.cecill.info/licences/Licence_CeCILL-B_V1-en.html"}],"dependencies":{"ascii-table":"0.0.9","asciify":"^1.3.5","jquery":"^3.3.1","opn":"^5.4.0","shortid":"^2.2.14","twig":"^1.12.0","webrtc-adapter":"^7.1.1"},"devDependencies":{"@babel/core":"^7.2.2","@babel/preset-env":"^7.2.3","babel-loader":"^8.0.4","chai":"^4.1.2","css-loader":"^2.0.2","exports-loader":"^0.7.0","expose-loader":"^0.7.5","file-loader":"^3.0.1","imports-loader":"^0.8.0","jshint":"^2.9.7","jshint-loader":"0.8.4","json-loader":"^0.5.7","mocha":"^5.2.0","node-sass":"^4.11.0","optimize-css-assets-webpack-plugin":"^5.0.1","raw-loader":"^1.0.0","sass-loader":"^7.1.0","should":"^13.2.3","sinon":"^7.2.2","sinon-chai":"^3.3.0","terser-webpack-plugin":"^1.2.0","to-string-loader":"1.1.5","tokenizer":"1.1.2","url-loader":"^1.1.2","webpack":"^4.28.2","webpack-cli":"^3.1.2","webpack-dev-server":"^3.1.12","webpack-merge":"^4.1.5"},"author":"cci <christophe.camensuli@gmail.com>","readmeFilename":"README.md","contributors":[{}]};

/***/ }),

/***/ "./src/core.js":
/*!*********************!*\
  !*** ./src/core.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var stage = __webpack_require__(/*! ./core/stage.es6 */ "./src/core/stage.es6")();

__webpack_require__(/*! ./core/notificationsCenter.es6 */ "./src/core/notificationsCenter.es6")(stage);

__webpack_require__(/*! ./syslog/syslog.es6 */ "./src/syslog/syslog.es6")(stage);

__webpack_require__(/*! ./kernel/service.es6 */ "./src/kernel/service.es6")(stage);

__webpack_require__(/*! ./kernel/container.es6 */ "./src/kernel/container.es6")(stage); // TOOLS


__webpack_require__(/*! ./tools/xml.js */ "./src/tools/xml.js")(stage);

__webpack_require__(/*! ./structs/hash/hash.es6 */ "./src/structs/hash/hash.es6")(stage);

__webpack_require__(/*! ./structs/queue/queue.es6 */ "./src/structs/queue/queue.es6")(stage); // CRYPTO


__webpack_require__(/*! ./crypto/base64.js */ "./src/crypto/base64.js")(stage);

__webpack_require__(/*! ./crypto/md5.js */ "./src/crypto/md5.js")(stage); // IO


__webpack_require__(/*! ./io/io.es6 */ "./src/io/io.es6")(stage);

__webpack_require__(/*! ./io/authentication/mechanisms/digest-md5/digestMd5.es6 */ "./src/io/authentication/mechanisms/digest-md5/digestMd5.es6")(stage);

__webpack_require__(/*! ./io/authentication/sasl/sasl.es6 */ "./src/io/authentication/sasl/sasl.es6")(stage); // IO TRANSPORT


__webpack_require__(/*! ./io/transports/socket.es6 */ "./src/io/transports/socket.es6")(stage);

__webpack_require__(/*! ./io/transports/websockets/websocket.es6 */ "./src/io/transports/websockets/websocket.es6")(stage);

__webpack_require__(/*! ./io/transports/in/poll.es6 */ "./src/io/transports/in/poll.es6")(stage);

__webpack_require__(/*! ./io/transports/in/longPoll.es6 */ "./src/io/transports/in/longPoll.es6")(stage); // IO PROTOCOLS


__webpack_require__(/*! ./io/protocols/bayeux/bayeux.es6 */ "./src/io/protocols/bayeux/bayeux.es6")(stage);

__webpack_require__(/*! ./io/protocols/sip/sdp.es6 */ "./src/io/protocols/sip/sdp.es6")(stage);

__webpack_require__(/*! ./io/protocols/sip/sip.es6 */ "./src/io/protocols/sip/sip.es6")(stage); // IO REALTIME


__webpack_require__(/*! ./io/realtime/realtime.es6 */ "./src/io/realtime/realtime.es6")(stage); // MEDIAS


__webpack_require__(/*! webrtc-adapter */ "./node_modules/webrtc-adapter/src/js/adapter_core.js");

__webpack_require__(/*! ./media/media.es6 */ "./src/media/media.es6")(stage);

__webpack_require__(/*! ./media/webAudio/webaudio.es6 */ "./src/media/webAudio/webaudio.es6")(stage);

__webpack_require__(/*! ./media/webrtc/webrtc.es6 */ "./src/media/webrtc/webrtc.es6")(stage);

__webpack_require__(/*! ./media/webrtc/user.es6 */ "./src/media/webrtc/user.es6")(stage);

__webpack_require__(/*! ./media/webrtc/transaction.es6 */ "./src/media/webrtc/transaction.es6")(stage); // KERNEL STAGE ( nodefony )


__webpack_require__(/*! ./kernel/kernel.es6 */ "./src/kernel/kernel.es6")(stage);

__webpack_require__(/*! ./kernel/appKernel.es6 */ "./src/kernel/appKernel.es6")(stage);

__webpack_require__(/*! ./kernel/autoload.es6 */ "./src/kernel/autoload.es6")(stage);

__webpack_require__(/*! ./kernel/controller.es6 */ "./src/kernel/controller.es6")(stage);

__webpack_require__(/*! ./kernel/locationService.es6 */ "./src/kernel/locationService.es6")(stage);

__webpack_require__(/*! ./kernel/module.es6 */ "./src/kernel/module.es6")(stage);

__webpack_require__(/*! ./kernel/routerService.es6 */ "./src/kernel/routerService.es6")(stage);

__webpack_require__(/*! ./kernel/translationService.es6 */ "./src/kernel/translationService.es6")(stage); // EXPORT


module.exports = stage;

/***/ }),

/***/ "./src/core/notificationsCenter.es6":
/*!******************************************!*\
  !*** ./src/core/notificationsCenter.es6 ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

module.exports = function (stage) {
  'use strict';

  var regListenOn = /^on(.*)$/;
  /**
   *      Events
   *
   *      @class Notification
   *      @module library
   *      @param {Object} settings Object to pass to `settingToListen` method
   *      @param {Object} context  to apply `settingToListen`
   *
   *      @example
   *
   *
   */

  var Notification =
  /*#__PURE__*/
  function () {
    function Notification(settings, context) {
      _classCallCheck(this, Notification);

      this.events = {};
      this.garbageEvent = {};

      if (settings) {
        this.settingsToListen(settings, context);
      }
    }
    /**
     *
     *      @method listen
     *
     */


    _createClass(Notification, [{
      key: "listen",
      value: function listen(context, eventName, callback) {
        var event = arguments[1];
        var ContextClosure = this;

        if (!this.events[eventName]) {
          this.events[eventName] = [];
          this.garbageEvent[eventName] = [];
        }

        if (typeof callback === 'function') {
          this.garbageEvent[eventName].push(callback);
          this.events[eventName].push(function (args) {
            callback.apply(context, args);
          });
        }

        return function () {
          Array.prototype.unshift.call(arguments, event);
          return ContextClosure.fire.apply(ContextClosure, arguments);
        };
      }
    }, {
      key: "on",
      value: function on(eventName, callback) {
        var event = arguments[1];
        var ContextClosure = this;

        if (!this.events[eventName]) {
          this.events[eventName] = [];
          this.garbageEvent[eventName] = [];
        }

        if (typeof callback === 'function') {
          this.garbageEvent[eventName].push(callback);
          this.events[eventName].push(function (args) {
            callback(args);
          });
        }

        return function () {
          Array.prototype.unshift.call(arguments, event);
          return ContextClosure.fire.apply(ContextClosure, arguments);
        };
      }
      /**
       *
       *      @method clearNotifications
       *
       */

    }, {
      key: "clearNotifications",
      value: function clearNotifications(eventName) {
        if (eventName) {
          if (this.events[eventName]) {
            while (this.events[eventName].length > 0) {
              this.events[eventName].pop();
              this.garbageEvent[eventName].pop();
            }

            delete this.events[eventName];
            delete this.garbageEvent[eventName];
          }
        } else {
          delete this.events;
          delete this.garbageEvent;
          this.events = {};
          this.garbageEvent = {};
        }
      }
      /**
       *
       *      @method fire
       *
       */

    }, {
      key: "fire",
      value: function fire(eventName) {
        var ret = true;

        if (this.events[eventName]) {
          var args = Array.prototype.slice.call(arguments, 1);

          for (var i = 0; i < this.events[eventName].length; i++) {
            try {
              ret = this.events[eventName][i](args);

              if (ret) {
                break;
              }
            } catch (e) {
              console.log(e);
              throw new Error(e);
            }
          }
        }

        return ret;
      }
      /**
       *
       *      @method settingsToListen
       *
       */

    }, {
      key: "settingsToListen",
      value: function settingsToListen(localSettings, context) {
        for (var i in localSettings) {
          var res = regListenOn.exec(i);

          if (!res) {
            continue;
          }

          this.listen(context || this, res[0], localSettings[i]);
        }
      }
    }, {
      key: "unListen",
      value: function unListen(eventName, callback) {
        if (this.events[eventName]) {
          if (callback) {
            for (var i = 0; i < this.garbageEvent[eventName].length; i++) {
              if (this.garbageEvent[eventName][i] === callback) {
                this.events[eventName].splice(i, 1);
                this.garbageEvent[eventName].splice(i, 1);
              }
            }
          } else {
            return this.clearNotifications(eventName);
          }
        } else {
          return this.clearNotifications();
        }
      }
    }]);

    return Notification;
  }();

  stage.notificationsCenter = {
    notification: Notification,
    create: function create(settings, context) {
      return new Notification(settings, context);
    }
  };
  return Notification;
};

/***/ }),

/***/ "./src/core/stage.es6":
/*!****************************!*\
  !*** ./src/core/stage.es6 ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function () {
  //const config = require("../../package.json");
  'use strict';

  var version = __webpack_require__(/*! ../../package.json */ "./package.json").version; // Traf indexOf IE8


  var arrayProto = Array.prototype;

  var indexOf = function () {
    if (arrayProto.indexOf) {
      return arrayProto.indexOf;
    }

    arrayProto.indexOf = function (value, startIndex) {
      var index = startIndex === null ? 0 : startIndex < 0 ? Math.max(0, this.length + startIndex) : startIndex;

      for (var i = index; i < this.length; i++) {
        if (i in this && this[i] === value) {
          return i;
        }
      }

      return -1;
    };

    return arrayProto.indexOf;
  }();

  var typeOf = function typeOf(value) {
    var t = _typeof(value);

    if (t === 'object') {
      if (value === null) {
        return "object";
      }

      if (value instanceof Array || !(value instanceof Object) && Object.prototype.toString.call(value) === '[object Array]' || typeof value.length === 'number' && typeof value.splice !== 'undefined' && typeof value.propertyIsEnumerable !== 'undefined' && !value.propertyIsEnumerable('splice')) {
        return "array";
      }

      if (!(value instanceof Object) && (Object.prototype.toString.call(value) === '[object Function]' || typeof value.call !== 'undefined' && typeof value.propertyIsEnumerable !== 'undefined' && !value.propertyIsEnumerable('call'))) {
        return 'function';
      }

      if (value.nodeType === 1) {
        return "element";
      }

      if (value.nodeType === 9) {
        return "document";
      }

      if (value === window) {
        return "window";
      }

      if (value instanceof Date) {
        return "date";
      }

      if (value.callee) {
        return "arguments";
      }

      if (value instanceof SyntaxError) {
        return "SyntaxError";
      }

      if (value instanceof Error) {
        return "Error";
      }
    } else {
      if (t === 'function' && typeof value.call === 'undefined') {
        return 'object';
      }
    }

    return t;
  };

  var getBrowser = function () {
    if (navigator.userAgent.indexOf('MSIE') > -1) {
      return "MSIE";
    }

    if (navigator.userAgent.indexOf('Firefox') > -1) {
      return "Firefox";
    }

    if (navigator.userAgent.indexOf('Chrome') > -1) {
      return "Chrome";
    }

    if (navigator.userAgent.indexOf('Safari') > -1) {
      return "Safari";
    }

    if (navigator.userAgent.indexOf('Opera') > -1) {
      return "Opera";
    }

    if (navigator.userAgent.indexOf('Iceweasel') > -1) {
      return "Firefox";
    }

    return "undefined";
  }();

  var getBrowserVersion = function () {
    if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
      return parseInt(RegExp.$1, 10);
    }

    if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
      return parseInt(RegExp.$1, 10);
    }

    if (/Chrome[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
      //if (/Chrome[\/\s](\d+\.\d+\.?\d+)/.test(navigator.userAgent))
      return parseInt(RegExp.$1, 10);
    }

    if (/Safari[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
      if (/Version[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
        return parseInt(RegExp.$1, 10);
      }
    }

    if (/Opera[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
      if (/Version[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
        return parseInt(RegExp.$1, 10);
      }
    }

    if (/Iceweasel[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
      return parseInt(RegExp.$1, 10);
    }

    return "undefined";
  }();

  var useragent = navigator.userAgent.toLowerCase();
  /**
   *  stage class
   *  The class is a **`stage client side `** .
   *  @class stage
   *  @constructor
   *  @module library
   *
   */

  var Stage =
  /*#__PURE__*/
  function () {
    function Stage() {
      _classCallCheck(this, Stage);

      this.version = version;
      this.typeOf = typeOf;
      this.indexOf = indexOf;
      this.extend = jQuery.extend;
      this.crypto = {};
      this.modules = {};
      this.media = {};
      this.structs = {};
      this.controllers = {};
      this.browser = {
        navigator: getBrowser,
        version: getBrowserVersion,
        Ie: /msie/.test(useragent) && !/opera/.test(useragent),
        Gecko: navigator.userAgent.indexOf('Gecko') > -1 && navigator.userAgent.indexOf('KHTML') === -1,
        Webkit: /webkit/.test(useragent),
        Opera: Object.prototype.toString.call(window.opera) === '[object Opera]',
        platform: navigator.userAgent.match(/ip(?:ad|od|hone)/) ? 'ios' : (navigator.userAgent.match(/(?:webos|android)/) || navigator.platform.toLowerCase().match(/mac|win|linux/) || ['other'])[0]
      };
    }

    _createClass(Stage, [{
      key: "register",
      value: function register(name, closure) {
        var reg = null;

        if (typeof closure === "function") {
          // exec closure
          reg = closure(this, name);
        } else {
          reg = closure;
        }

        return this[name] = reg;
      }
    }, {
      key: "registerModule",
      value: function registerModule(name, closure) {
        return this.register.call(this.modules, name, closure);
      }
    }, {
      key: "registerController",
      value: function registerController(name, closure) {
        return this.register.call(this.controllers, name, closure);
      }
    }, {
      key: "basename",
      value: function basename(path) {
        return path.replace(/\\/g, '/').replace(/.*\//, '');
      }
    }, {
      key: "dirname",
      value: function dirname(path) {
        return path.replace(/\\/g, '/').replace(/\/[^\/]*$/, '');
      }
    }]);

    return Stage;
  }();

  return new Stage();
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js-exposed")))

/***/ }),

/***/ "./src/crypto/base64.js":
/*!******************************!*\
  !*** ./src/crypto/base64.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 *
 *
 *
 *
 *
 *
 *
 */
module.exports = function (stage) {
  // private property
  var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="; // public method for encoding

  var encode64 = function encode64(input) {
    var output = "";
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;
    input = _utf8_encode(input);

    while (i < input.length) {
      chr1 = input.charCodeAt(i++);
      chr2 = input.charCodeAt(i++);
      chr3 = input.charCodeAt(i++);
      enc1 = chr1 >> 2;
      enc2 = (chr1 & 3) << 4 | chr2 >> 4;
      enc3 = (chr2 & 15) << 2 | chr3 >> 6;
      enc4 = chr3 & 63;

      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }

      output = output + _keyStr.charAt(enc1) + _keyStr.charAt(enc2) + _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
    }

    return output;
  }; // public method for decoding


  var decode64 = function decode64(input) {
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
      chr1 = enc1 << 2 | enc2 >> 4;
      chr2 = (enc2 & 15) << 4 | enc3 >> 2;
      chr3 = (enc3 & 3) << 6 | enc4;
      output = output + String.fromCharCode(chr1);

      if (enc3 != 64) {
        output = output + String.fromCharCode(chr2);
      }

      if (enc4 != 64) {
        output = output + String.fromCharCode(chr3);
      }
    }

    if (i != input.length) {
      throw new Error("BASE64_BROKEN : There were invalid base64 characters in the input text.\n" + "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" + "Expect errors in decoding.");
    }

    output = _utf8_decode(output);
    return output;
  };

  var decode = function decode(input, arrayBuffer) {
    //get last chars to see if are valid
    var lkey1 = _keyStr.indexOf(input.charAt(input.length - 1));

    var lkey2 = _keyStr.indexOf(input.charAt(input.length - 2));

    var bytes = input.length / 4 * 3;
    if (lkey1 == 64) bytes--; //padding chars, so skip

    if (lkey2 == 64) bytes--; //padding chars, so skip

    var uarray;
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;
    var j = 0;
    if (arrayBuffer) uarray = new Uint8Array(arrayBuffer);else uarray = new Uint8Array(bytes);
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

    for (i = 0; i < bytes; i += 3) {
      //get the 3 octects in 4 ascii chars
      enc1 = _keyStr.indexOf(input.charAt(j++));
      enc2 = _keyStr.indexOf(input.charAt(j++));
      enc3 = _keyStr.indexOf(input.charAt(j++));
      enc4 = _keyStr.indexOf(input.charAt(j++));
      chr1 = enc1 << 2 | enc2 >> 4;
      chr2 = (enc2 & 15) << 4 | enc3 >> 2;
      chr3 = (enc3 & 3) << 6 | enc4;
      uarray[i] = chr1;
      if (enc3 != 64) uarray[i + 1] = chr2;
      if (enc4 != 64) uarray[i + 2] = chr3;
    }

    return uarray;
  }; // private method for UTF-8 encoding


  var _utf8_encode = function _utf8_encode(string) {
    string = string.replace(/\r\n/g, "\n");
    var utftext = "";

    for (var n = 0; n < string.length; n++) {
      var c = string.charCodeAt(n);

      if (c < 128) {
        utftext += String.fromCharCode(c);
      } else if (c > 127 && c < 2048) {
        utftext += String.fromCharCode(c >> 6 | 192);
        utftext += String.fromCharCode(c & 63 | 128);
      } else {
        utftext += String.fromCharCode(c >> 12 | 224);
        utftext += String.fromCharCode(c >> 6 & 63 | 128);
        utftext += String.fromCharCode(c & 63 | 128);
      }

      ;
    }

    ;
    return utftext;
  }; // private method for UTF-8 decoding


  var _utf8_decode = function _utf8_decode(utftext) {
    var string = "";
    var i = 0;
    var c = 0; //var c1 = 0;

    var c2 = 0;

    while (i < utftext.length) {
      c = utftext.charCodeAt(i);

      if (c < 128) {
        string += String.fromCharCode(c);
        i++;
      } else if (c > 191 && c < 224) {
        c2 = utftext.charCodeAt(i + 1);
        string += String.fromCharCode((c & 31) << 6 | c2 & 63);
        i += 2;
      } else {
        c2 = utftext.charCodeAt(i + 1);
        var c3 = utftext.charCodeAt(i + 2);
        string += String.fromCharCode((c & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
        i += 3;
      }
    }

    return string;
  };
  /* will return a  Uint8Array type */


  var decodeArrayBuffer = function decodeArrayBuffer(input) {
    var bytes = input.length / 4 * 3;
    var ab = new ArrayBuffer(bytes);
    decode(input, ab);
    return ab;
  };

  stage.crypto.base64 = {
    decodeArrayBuffer: decodeArrayBuffer,
    encode: encode64,
    decode: decode64
  };
  return stage.crypto.base64;
};

/***/ }),

/***/ "./src/crypto/md5.js":
/*!***************************!*\
  !*** ./src/crypto/md5.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
module.exports = function (stage) {
  /*
   * Configurable variables. You may need to tweak these to be compatible with
   * the server-side, but the defaults work in most cases.
   */
  var hexcase = 0;
  /* hex output format. 0 - lowercase; 1 - uppercase        */

  var b64pad = "";
  /* base-64 pad character. "=" for strict RFC compliance   */

  /*
   * Perform a simple self-test to see if the VM is working
   */

  var md5_vm_test = function md5_vm_test() {
    return rstr2hex("abc").toLowerCase() === "900150983cd24fb0d6963f7d28e17f72";
  };
  /*
   * Calculate the MD5 of a raw string
   */


  var rstr_md5 = function rstr_md5(s) {
    return binl2rstr(binl_md5(rstr2binl(s), s.length * 8));
  };
  /*
   * Calculate the HMAC-MD5, of a key and some data (raw strings)
   */


  var rstr_hmac_md5 = function rstr_hmac_md5(key, data) {
    var bkey = rstr2binl(key);

    if (bkey.length > 16) {
      bkey = binl_md5(bkey, key.length * 8);
    }

    var ipad = Array(16),
        opad = Array(16);

    for (var i = 0; i < 16; i++) {
      ipad[i] = bkey[i] ^ 0x36363636;
      opad[i] = bkey[i] ^ 0x5C5C5C5C;
    }

    var hash = binl_md5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
    return binl2rstr(binl_md5(opad.concat(hash), 512 + 128));
  };
  /*
   * Convert a raw string to a hex string
   */


  var rstr2hex = function rstr2hex(input) {
    //try { hexcase } catch(e) { hexcase=0; }
    var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
    var output = "";
    var x;

    for (var i = 0; i < input.length; i++) {
      x = input.charCodeAt(i);
      output += hex_tab.charAt(x >>> 4 & 0x0F) + hex_tab.charAt(x & 0x0F);
    }

    return output;
  };
  /*
   * Convert a raw string to a base-64 string
   */


  var rstr2b64 = function rstr2b64(input) {
    //try { b64pad } catch(e) { b64pad=''; }
    var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var output = "";
    var len = input.length;

    for (var i = 0; i < len; i += 3) {
      var triplet = input.charCodeAt(i) << 16 | (i + 1 < len ? input.charCodeAt(i + 1) << 8 : 0) | (i + 2 < len ? input.charCodeAt(i + 2) : 0);

      for (var j = 0; j < 4; j++) {
        if (i * 8 + j * 6 > input.length * 8) {
          output += b64pad;
        } else {
          output += tab.charAt(triplet >>> 6 * (3 - j) & 0x3F);
        }
      }
    }

    return output;
  };
  /*
   * Convert a raw string to an arbitrary string encoding
   */


  var rstr2any = function rstr2any(input, encoding) {
    var divisor = encoding.length;
    var i, j, q, x, quotient;
    /* Convert to an array of 16-bit big-endian values, forming the dividend */

    var dividend = Array(Math.ceil(input.length / 2));

    for (i = 0; i < dividend.length; i++) {
      dividend[i] = input.charCodeAt(i * 2) << 8 | input.charCodeAt(i * 2 + 1);
    }
    /*
     * Repeatedly perform a long division. The binary array forms the dividend,
     * the length of the encoding is the divisor. Once computed, the quotient
     * forms the dividend for the next step. All remainders are stored for later
     * use.
     */


    var full_length = Math.ceil(input.length * 8 / (Math.log(encoding.length) / Math.log(2)));
    var remainders = Array(full_length);

    for (j = 0; j < full_length; j++) {
      quotient = Array();
      x = 0;

      for (i = 0; i < dividend.length; i++) {
        x = (x << 16) + dividend[i];
        q = Math.floor(x / divisor);
        x -= q * divisor;

        if (quotient.length > 0 || q > 0) {
          quotient[quotient.length] = q;
        }
      }

      remainders[j] = x;
      dividend = quotient;
    }
    /* Convert the remainders to the output string */


    var output = "";

    for (i = remainders.length - 1; i >= 0; i--) {
      output += encoding.charAt(remainders[i]);
    }

    return output;
  };
  /*
   * Encode a string as utf-8.
   * For efficiency, this assumes the input is valid utf-16.
   */


  var str2rstr_utf8 = function str2rstr_utf8(input) {
    var output = "";
    var i = -1;
    var x, y;

    while (++i < input.length) {
      /* Decode utf-16 surrogate pairs */
      x = input.charCodeAt(i);
      y = i + 1 < input.length ? input.charCodeAt(i + 1) : 0;

      if (0xD800 <= x && x <= 0xDBFF && 0xDC00 <= y && y <= 0xDFFF) {
        x = 0x10000 + ((x & 0x03FF) << 10) + (y & 0x03FF);
        i++;
      }
      /* Encode output as utf-8 */


      if (x <= 0x7F) {
        output += String.fromCharCode(x);
      } else if (x <= 0x7FF) {
        output += String.fromCharCode(0xC0 | x >>> 6 & 0x1F, 0x80 | x & 0x3F);
      } else if (x <= 0xFFFF) {
        output += String.fromCharCode(0xE0 | x >>> 12 & 0x0F, 0x80 | x >>> 6 & 0x3F, 0x80 | x & 0x3F);
      } else if (x <= 0x1FFFFF) {
        output += String.fromCharCode(0xF0 | x >>> 18 & 0x07, 0x80 | x >>> 12 & 0x3F, 0x80 | x >>> 6 & 0x3F, 0x80 | x & 0x3F);
      }
    }

    return output;
  };
  /*
   * Encode a string as utf-16
   */


  var str2rstr_utf16le = function str2rstr_utf16le(input) {
    var output = "";

    for (var i = 0; i < input.length; i++) {
      output += String.fromCharCode(input.charCodeAt(i) & 0xFF, input.charCodeAt(i) >>> 8 & 0xFF);
    }

    return output;
  };

  var str2rstr_utf16be = function str2rstr_utf16be(input) {
    var output = "";

    for (var i = 0; i < input.length; i++) {
      output += String.fromCharCode(input.charCodeAt(i) >>> 8 & 0xFF, input.charCodeAt(i) & 0xFF);
    }

    return output;
  };
  /*
   * Convert a raw string to an array of little-endian words
   * Characters >255 have their high-byte silently ignored.
   */


  var rstr2binl = function rstr2binl(input) {
    var output = Array(input.length >> 2);

    for (var i = 0; i < output.length; i++) {
      output[i] = 0;
    }

    for (var i = 0; i < input.length * 8; i += 8) {
      output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << i % 32;
    }

    return output;
  };
  /*
   * Convert an array of little-endian words to a string
   */


  var binl2rstr = function binl2rstr(input) {
    var output = "";

    for (var i = 0; i < input.length * 32; i += 8) {
      output += String.fromCharCode(input[i >> 5] >>> i % 32 & 0xFF);
    }

    return output;
  };
  /*
   * Calculate the MD5 of an array of little-endian words, and a bit length.
   */


  var binl_md5 = function binl_md5(x, len) {
    /* append padding */
    x[len >> 5] |= 0x80 << len % 32;
    x[(len + 64 >>> 9 << 4) + 14] = len;
    var a = 1732584193;
    var b = -271733879;
    var c = -1732584194;
    var d = 271733878;

    for (var i = 0; i < x.length; i += 16) {
      var olda = a;
      var oldb = b;
      var oldc = c;
      var oldd = d;
      a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
      d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
      c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
      b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
      a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
      d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
      c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
      b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
      a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
      d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
      c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
      b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
      a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
      d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
      c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
      b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
      a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
      d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
      c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
      b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
      a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
      d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
      c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
      b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
      a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
      d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
      c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
      b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
      a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
      d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
      c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
      b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
      a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
      d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
      c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
      b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
      a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
      d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
      c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
      b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
      a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
      d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
      c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
      b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
      a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
      d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
      c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
      b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
      a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
      d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
      c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
      b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
      a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
      d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
      c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
      b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
      a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
      d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
      c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
      b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
      a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
      d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
      c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
      b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);
      a = safe_add(a, olda);
      b = safe_add(b, oldb);
      c = safe_add(c, oldc);
      d = safe_add(d, oldd);
    }

    return Array(a, b, c, d);
  };
  /*
   * These functions implement the four basic operations the algorithm uses.
   */


  var md5_cmn = function md5_cmn(q, a, b, x, s, t) {
    return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
  };

  var md5_ff = function md5_ff(a, b, c, d, x, s, t) {
    return md5_cmn(b & c | ~b & d, a, b, x, s, t);
  };

  var md5_gg = function md5_gg(a, b, c, d, x, s, t) {
    return md5_cmn(b & d | c & ~d, a, b, x, s, t);
  };

  var md5_hh = function md5_hh(a, b, c, d, x, s, t) {
    return md5_cmn(b ^ c ^ d, a, b, x, s, t);
  };

  var md5_ii = function md5_ii(a, b, c, d, x, s, t) {
    return md5_cmn(c ^ (b | ~d), a, b, x, s, t);
  };
  /*
   * Add integers, wrapping at 2^32. This uses 16-bit operations internally
   * to work around bugs in some JS interpreters.
   */


  var safe_add = function safe_add(x, y) {
    var lsw = (x & 0xFFFF) + (y & 0xFFFF);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return msw << 16 | lsw & 0xFFFF;
  };
  /*
   * Bitwise rotate a 32-bit number to the left.
   */


  var bit_rol = function bit_rol(num, cnt) {
    return num << cnt | num >>> 32 - cnt;
  };

  stage.crypto.md5 = {
    hex_md5: function hex_md5(s) {
      return rstr2hex(rstr_md5(str2rstr_utf8(s)));
    },
    hex_md5_noUTF8: function hex_md5_noUTF8(s) {
      return rstr2hex(rstr_md5(s));
    },
    str_md5: function str_md5(s) {
      return rstr_md5(str2rstr_utf8(s));
    },
    b64_md5: function b64_md5(s) {
      return rstr2b64(rstr_md5(str2rstr_utf8(s)));
    },
    any_md5: function any_md5(s, e) {
      return rstr2any(rstr_md5(str2rstr_utf8(s)), e);
    },
    hex_hmac_md5: function hex_hmac_md5(k, d) {
      return rstr2hex(rstr_hmac_md5(str2rstr_utf8(k), str2rstr_utf8(d)));
    },
    str_hmac_md5: function str_hmac_md5(k, d) {
      return rstr_hmac_md5(str2rstr_utf8(k), str2rstr_utf8(d));
    },
    b64_hmac_md5: function b64_hmac_md5(k, d) {
      return rstr2b64(rstr_hmac_md5(str2rstr_utf8(k), str2rstr_utf8(d)));
    },
    any_hmac_md5: function any_hmac_md5(k, d, e) {
      return rstr2any(rstr_hmac_md5(str2rstr_utf8(k), str2rstr_utf8(d)), e);
    }
  };
  return stage.crypto.md5;
};

/***/ }),

/***/ "./src/io/authentication/mechanisms/digest-md5/digestMd5.es6":
/*!*******************************************************************!*\
  !*** ./src/io/authentication/mechanisms/digest-md5/digestMd5.es6 ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

module.exports = function (stage) {
  var keyWord = {
    realm: true,
    qop: true,
    charset: true,
    algorithm: true,
    nonce: true
  };
  var reg = /^([^=]+)=(.+)$/;

  var parserAuthenticate = function parserAuthenticate(str) {
    var ret = str.replace(/"/g, "");
    ret = ret.replace(/Digest /g, "");
    var head = ret.split(",");
    var obj = {};

    for (var i = 0; i < head.length; i++) {
      var res = reg.exec(head[i]);

      if (res && res[1]) {
        obj[res[1]] = res[2];
      }
    }

    return obj;
  };

  var MD5 = stage.crypto.md5.hex_md5_noUTF8;
  var BASE64 = stage.crypto.base64.encode;
  var DBASE64 = stage.crypto.base64.decode;

  var generateA1 = function generateA1(username, realm, password, nonce, cnonce) {
    var A1 = null;

    if (cnonce) {
      A1 = username + ":" + realm + ":" + password + ":" + nonce + ":" + cnonce;
    } else {
      A1 = username + ":" + realm + ":" + password; //+ ":" + nonce ;
    }

    return MD5(A1);
  };

  var generateA2 = function generateA2(method, uri, entity_body, qop) {
    var A2 = "";

    if (!qop || qop === "auth") {
      A2 = method + ":" + uri;
    } else if (qop === "auth-int") {
      if (entity_body) {
        var entity = MD5(entity_body);
        A2 = method + ":" + uri + ":" + entity;
      } else {
        A2 = method + ":" + uri + ":" + "d41d8cd98f00b204e9800998ecf8427e";
      }
    }

    return MD5(A2);
  };

  var responseDigest = function responseDigest(A1, nonce, noncecount, cnonce, qop, A2) {
    var res = "";

    if (qop === "auth" || qop === "auth-int") {
      res = A1 + ":" + nonce + ":" + noncecount + ":" + cnonce + ":" + qop + ":" + A2;
    } else {
      res = A1 + ":" + nonce + ":" + A2;
    }

    return MD5(res);
  };
  /*
  	 *
  	 */


  var digestMd5 =
  /*#__PURE__*/
  function () {
    function digestMd5(url, method, headers, body) {
      _classCallCheck(this, digestMd5);

      this.method = method;
      this.entity_body = body;
      this.url = url;
      this.uri = this.url.requestUri;
      this.protocol = this.url.protocol.replace(":", "");
      this.host = this.url.host;

      switch (_typeof(headers)) {
        case "object":
          this.parseChallenge(headers);
          break;

        default:
          throw new Error("digetMD5 bad format header");
      }
    }

    _createClass(digestMd5, [{
      key: "parseChallenge",
      value: function parseChallenge(headers) {
        //console.log(headers)
        var parsing = {};

        switch (_typeof(headers)) {
          case "string":
            //TODO
            throw new Error("digetMD5 bad format challenge");

          case "object":
            for (var ele in headers) {
              switch (ele) {
                case "challenge":
                  if (typeof headers.challenge === "string") {
                    try {
                      this.challengeB64 = DBASE64(headers.challenge);
                    } catch (e) {
                      this.challengeB64 = headers.challenge; //throw new Error("DIGEST MD5 ERROR DECODE BAS64")	
                    }
                  }

                  break;

                default:
                  parsing[ele] = headers[ele];
              }
            }

            break;

          default:
            throw new Error("digetMD5 bad format challenge");
        }

        var challenge = stage.extend(parserAuthenticate(this.challengeB64), parsing); //var challenge = parserAuthenticate(this.challengeB64);
        //console.log(challenge)

        for (var name in challenge) {
          if (name in keyWord) {
            this[name] = challenge[name];
          } else {
            console.warn("digestMd5 parser challenge header name dropped: " + name);
          }
        }
      }
    }, {
      key: "generateAuthorization",
      value: function generateAuthorization(username, password) {
        var line = 'Digest username="' + username + '"';

        if (!this.realm) {
          this.realm = username + "@" + this.url.host;
        }

        var res = {
          nonce: '"' + this.nonce + '"',
          realm: '"' + this.realm + '"',
          response: null
        };
        this["digest-uri"] = this.protocol + "/" + this.host; //this["digest-uri"] = '"'+this.protocol+"/"+this.uri+'"';

        res["digest-uri"] = '"' + this["digest-uri"] + '"';
        /*if (this.charset){
          res["charset"]=this.charset;
          }*/

        if (this.qop) {
          this.cnonce = BASE64(Math.floor(Math.random() * 100000000).toString());
          res["cnonce"] = '"' + this.cnonce + '"';
          res["qop"] = this.qop;
        }

        if (this.opaque) {
          res["opaque"] = this.opaque;
        }

        this.nc = "00000001";
        res["nc"] = this.nc;
        this.A1 = generateA1(username, this.realm, password
        /*, this.nonce, this.cnonce*/
        );
        this.A2 = generateA2(this.method, this["digest-uri"], this.entity_body, this.qop);
        res.response = responseDigest(this.A1, this.nonce, this.nc, this.cnonce, this.qop, this.A2); // generate Authorization 

        for (var ele in res) {
          line += "," + ele + "=" + res[ele];
        } //console.log(line)


        var toSend = BASE64(line);
        return toSend;
      }
    }]);

    return digestMd5;
  }();

  stage.io.authentication.Digest = digestMd5;
  stage.io.authentication.mechanisms.Digest = digestMd5;
  return digestMd5;
};

/***/ }),

/***/ "./src/io/authentication/sasl/sasl.es6":
/*!*********************************************!*\
  !*** ./src/io/authentication/sasl/sasl.es6 ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

module.exports = function (stage) {
  var reg = /^([^=]+)=(.+)$/;

  var parserSasl = function parserSasl(str) {
    //console.log(str)
    var ret = str.replace(/"/g, "");
    var head = ret.split(",");
    var obj = {};

    for (var i = 0; i < head.length; i++) {
      var res = reg.exec(head[i]);
      if (res && res[1]) obj[res[1]] = res[2];
    }

    return obj;
  };

  var Sasl =
  /*#__PURE__*/
  function () {
    function Sasl(url, method, headers, body) {
      _classCallCheck(this, Sasl);

      this.method = method;
      this.url = url;
      this.name = "sasl";
      this.headers = parserSasl(headers);
      this.body = body;
      this.mechanisms = this.headers.mechanisms;
      var mechanism = this.getBestMechanism(this.mechanisms);

      if (mechanism) {
        delete this.headers.mechanisms;
        this.bestMechanism = mechanism.name;
        this.mechanism = new mechanism.Class(this.url, this.method, this.headers, this.body);
      } else {
        throw new Error("SALS mechanism not found");
      }
    }

    _createClass(Sasl, [{
      key: "getBestMechanism",
      value: function getBestMechanism(mechanism) {
        var goodM = null;

        switch (_typeof(mechanism)) {
          case "object":
            for (var i = 0; i < mechanism.length; i++) {
              if (mechanism[i] in stage.io.authentication.mechanisms) {
                var goodM = stage.io.authentication.mechanisms[mechanism[i]];
                var name = mechanism[i];
                break;
              }
            }

            break;

          case "string":
            //console.log(mechanism.split(" "));
            return this.getBestMechanism(mechanism.split(" "));
            break;

          default:
            throw new Error("FORMAT SALS mechanism bad format");
        }

        return {
          name: name,
          Class: goodM
        };
      }
    }, {
      key: "getAuthorization",
      value: function getAuthorization(user, password) {
        return 'SASL mechanism="' + this.bestMechanism + '",' + this.mechanism.generateAuthorization(user, password);
      }
    }]);

    return Sasl;
  }();

  stage.io.authentication.SASL = Sasl;
  return Sasl;
};

/***/ }),

/***/ "./src/io/io.es6":
/*!***********************!*\
  !*** ./src/io/io.es6 ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

module.exports = function (stage) {
  'use strict';

  var isSameOrigin = function isSameOrigin(url) {
    var loc = window.location;
    var a = urlToOject(url);
    return a.hostname === loc.hostname && a.port == loc.port && a.protocol === loc.protocol;
  };

  var isSecure = function isSecure(url) {
    var loc = window.location;
    var a = urlToOject(url);
    return a.protocol === "https:";
  };
  /*
   *
   *   CLASS AUTHENTICATE
   *
   *
   *	EVENTS
   *
   *	onError:
   *
   *
   *	onSuccess:
   *
   *
   */


  var authenticate =
  /*#__PURE__*/
  function () {
    function authenticate(url, request, settings) {
      _classCallCheck(this, authenticate);

      this.url = _typeof(url) === "object" ? url : stage.io.urlToOject(url);
      this.crossDomain = !stage.io.isSameOrigin(url); // notification center

      this.notificationCenter = stage.notificationsCenter.create(settings); // get header WWW-Authenticate

      var _authenticate = request["WWW-Authenticate"].split(" "); //  get type authentification


      var authType = Array.prototype.shift.call(_authenticate);
      var headers = request["WWW-Authenticate"].replace(authType + " ", ""); //console.log(authType);

      this.method = "POST";
      var body = request.body; // intance of authentication

      var auth = this.getAuthenticationType(authType);
      this.authentication = new auth(this.url, this.method, headers, body);
      this.ajax = false;

      if (settings.ajax) {
        this.ajax = true;
      }
    }

    _createClass(authenticate, [{
      key: "getAuthenticationType",
      value: function getAuthenticationType(type) {
        if (type in stage.io.authentication) {
          return stage.io.authentication[type];
        } else {
          throw new Error("SSE client can't negociate : " + type);
        }
      }
    }, {
      key: "register",
      value: function register(username, password) {
        var _this = this;

        var line = this.authentication.getAuthorization(username, password);
        this.notificationCenter.fire("onRegister", this, line);

        if (this.ajax) {
          $.ajax({
            type: this.method,
            url: this.url.href,
            cache: false,
            crossDomain: this.crossDomain ? false : true,
            error: function error(obj, type, message) {
              _this.notificationCenter.fire("onError", obj, type, message);
            },
            beforeSend: function beforeSend(xhr) {
              xhr.setRequestHeader("Authorization", line); //if (this.crossDomain)
              //xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            },
            success: function success(data, state, obj) {
              _this.notificationCenter.fire("onSuccess", data, state, obj);
            }
          });
        }
      }
    }]);

    return authenticate;
  }();
  /**
   * We need our custom method because encodeURIComponent is too aggressive and doesn't follow
   * http://www.ietf.org/rfc/rfc3986.txt with regards to the character set (pchar) allowed in path
   * segments:
   *    segment       = *pchar
   *    pchar         = unreserved / pct-encoded / sub-delims / ":" / "@"
   *    pct-encoded   = "%" HEXDIG HEXDIG
   *    unreserved    = ALPHA / DIGIT / "-" / "." / "_" / "~"
   *    sub-delims    = "!" / "$" / "&" / "'" / "(" / ")"
   *                     / "*" / "+" / "," / ";" / "="
   */


  var encodeUriSegment = function encodeUriSegment(val) {
    return encodeUriQuery(val, true).replace(/%26/gi, '&').replace(/%3D/gi, '=').replace(/%2B/gi, '+');
  };
  /**
   * This method is intended for encoding *key* or *value* parts of query component. We need a custom
   * method because encodeURIComponent is too aggressive and encodes stuff that doesn't have to be
   * encoded per http://tools.ietf.org/html/rfc3986:
   *    query       = *( pchar / "/" / "?" )
   *    pchar         = unreserved / pct-encoded / sub-delims / ":" / "@"
   *    unreserved    = ALPHA / DIGIT / "-" / "." / "_" / "~"
   *    pct-encoded   = "%" HEXDIG HEXDIG
   *    sub-delims    = "!" / "$" / "&" / "'" / "(" / ")"
   *                     / "*" / "+" / "," / ";" / "="
   */


  var encodeUriQuery = function encodeUriQuery(val, pctEncodeSpaces) {
    return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%3B/gi, ';').replace(/%20/g, pctEncodeSpaces ? '%20' : '+');
  };

  var regSearch = /^\?(.*)/;

  var parseKeyValue = function parseKeyValue(search) {
    //console.log(search)
    var test = regSearch.exec(search); //console.log(test)

    if (test) {
      search = test[1];
    }

    var obj = {},
        key_value,
        key;
    var tab = (search || "").split('&');

    if (tab.length) {
      for (var i = 0; i < tab.length; i++) {
        try {
          var key_value = tab[i].replace(/\+/g, '%20').split('=');
          var key = decodeURIComponent(key_value[0]); //console.log(key_value)
          //console.log(key)

          if (key) {
            var val = decodeURIComponent(key_value[1]);

            if (!Object.prototype.hasOwnProperty.call(obj, key)) {
              obj[key] = val;
            } else {
              switch (stage.typeOf(obj[key])) {
                case "array":
                  obj[key].push(val);
                  break;

                default:
                  obj[key] = [obj[key], val];
              }
            }
          }
        } catch (e) {//invalid
        }
      }
    }

    return obj;
  };

  var toKeyValue = function toKeyValue(obj) {
    var parts = [];

    for (var ele in obj) {
      switch (stage.typeOf(obj[ele])) {
        case "array":
          for (var i = 0; i < obj[ele].length; i++) {
            parts.push(encodeUriQuery(ele, true) + (obj[ele][i] === true ? '' : '=' + encodeUriQuery(obj[ele][i], true)));
          }

          break;

        case "string":
        case "boolean":
          parts.push(encodeUriQuery(ele, true) + (obj[ele] === true ? '' : '=' + encodeUriQuery(obj[ele], true)));
          break;

        default:
          continue;
      }
    }

    return parts.length ? parts.join('&') : '';
  };

  var getHeaderJSON = function getHeaderJSON(xhr) {
    var json = xhr.getResponseHeader("X-Json");

    if (json) {
      try {
        return JSON.parse(json);
      } catch (e) {
        return json;
      }
    }

    return null;
  };

  var urlToOject = function urlToOject(url) {
    var result = {};
    var anchor = document.createElement('a');
    anchor.href = url;
    var keys = 'protocol hostname host pathname port search hash href'.split(' ');

    for (var keyIndex in keys) {
      var currentKey = keys[keyIndex];
      result[currentKey] = anchor[currentKey];
    }

    result.toString = function () {
      return anchor.href;
    };

    result.requestUri = result.pathname + result.search;
    result.basename = result.pathname.replace(/\\/g, '/').replace(/.*\//, '');
    result.dirname = result.pathname.replace(/\\/g, '/').replace(/\/[^\/]*$/, '');
    return result;
  };

  var nativeWebSocket = window.WebSocket ? true : false;

  var transportCore =
  /*#__PURE__*/
  function (_stage$notificationsC) {
    _inherits(transportCore, _stage$notificationsC);

    function transportCore(url, settings, context) {
      var _this2;

      _classCallCheck(this, transportCore);

      _this2 = _possibleConstructorReturn(this, _getPrototypeOf(transportCore).call(this, settings, context)); // Manage Url

      if (url) {
        _this2.url = urlToOject(url);
        _this2.crossDomain = !isSameOrigin(url);
        _this2.error = null;
      } else {
        _this2.fire("onError", new Error("Transport URL not defined"));
      }

      return _this2;
    }

    return transportCore;
  }(stage.notificationsCenter.notification);

  stage.io = {
    nativeWebSocket: nativeWebSocket,
    urlToOject: urlToOject,
    parseKeyValue: parseKeyValue,
    toKeyValue: toKeyValue,
    encodeUriSegment: encodeUriSegment,
    encodeUriQuery: encodeUriQuery,
    getHeaderJSON: getHeaderJSON,
    isSameOrigin: isSameOrigin,
    isSecure: isSecure,
    protocols: {},
    authentication: {
      authenticate: authenticate,
      mechanisms: {}
    },
    transport: transportCore,
    transports: {}
  };
  return stage.io;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js-exposed")))

/***/ }),

/***/ "./src/io/protocols/bayeux/bayeux.es6":
/*!********************************************!*\
  !*** ./src/io/protocols/bayeux/bayeux.es6 ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

module.exports = function (stage) {
  'use strict';

  var clientsCapabilities = function () {
    var tab = [];
    var ws = stage.io.nativeWebSocket ? tab.push("websocket") : null;
    var poll = stage.io.poll ? tab.push("poll") : null;
    var lpoll = stage.io.longPoll ? tab.push("long-polling") : null;
    var jsonp = stage.io.jsonp ? tab.push("callback-polling") : null;
    return tab;
  }();

  var onHandshakeResponse = function onHandshakeResponse(message) {
    var _this = this;

    if (message.successful) {
      try {
        var socket = this.getBestConnection(message.supportedConnectionTypes);
        this.socket = new socket.Class(socket.url);

        this.socket.onmessage = function (message) {
          if (message.data) {
            _this.onMessage(message.data);
          }
        };

        this.socket.onopen = function () {
          _this.socket.send(_this.connect(message));

          _this.notificationCenter.fire("onHandshake", message, _this.socket);
        };

        this.socket.onerror = this.notificationCenter.listen(this, "onError");

        this.socket.onclose = function (err) {
          delete _this.socket;

          _this.notificationCenter.fire("onClose", err);
        };
      } catch (e) {
        throw new Error(e);
      }
    } else {
      onError.call(this, message);
    }
  };

  var reconnect = function reconnect() {
    this.reconnect = true;
    this.notificationCenter.fire("reConnect", this);
  };

  var onConnectResponse = function onConnectResponse(message) {
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

  var onDisconnectResponse = function onDisconnectResponse(message) {
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

  var onSubscribeResponse = function onSubscribeResponse(message) {
    if (message.successful) {
      this.notificationCenter.fire("onSubscribe", message);
    } else {
      onError.call(this, message);
    }
  };

  var onUnsubscribeResponse = function onUnsubscribeResponse(message) {
    if (message.successful) {
      this.notificationCenter.fire("onUnsubscribe", message);
    } else {
      onError.call(this, message);
    }
  };

  var onError = function onError(message) {
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


  var bayeux =
  /*#__PURE__*/
  function () {
    function bayeux(url) {
      _classCallCheck(this, bayeux);

      this.name = "bayeux";
      this.notificationCenter = stage.notificationsCenter.create(this.settings, this);
      this.url = url;
      this.socket = null;
      this.connected = false;
      this.request = {
        version: "1.0"
      };
    }

    _createClass(bayeux, [{
      key: "getBestConnection",
      value: function getBestConnection(supportedConnectionTypes) {
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
    }, {
      key: "build",
      value: function build(obj) {
        var res = [];
        res.push(obj);
        return res;
      }
    }, {
      key: "handshake",
      value: function handshake() {
        var req = JSON.stringify(stage.extend({}, this.request, {
          channel: "/meta/handshake",
          minimumVersion: "1.0",
          supportedConnectionTypes: clientsCapabilities
        }));
        return this.send(req);
      }
    }, {
      key: "connect",
      value: function connect(message) {
        return JSON.stringify({
          channel: "/meta/connect",
          clientId: message.clientId,
          connectionType: this.socketType
        });
      }
    }, {
      key: "stopReConnect",
      value: function stopReConnect(message) {
        this.notificationCenter.unListen("onClose", reconnect);
      }
    }, {
      key: "disconnect",
      value: function disconnect() {
        return JSON.stringify({
          channel: "/meta/disconnect",
          clientId: this.idconnection
        });
      }
    }, {
      key: "subscribe",
      value: function subscribe(name, data) {
        return JSON.stringify({
          channel: "/meta/subscribe",
          clientId: this.idconnection,
          subscription: "/service/" + name,
          data: data
        });
      }
    }, {
      key: "unSubscribe",
      value: function unSubscribe(name, clientId, data) {
        return JSON.stringify({
          channel: "/meta/unsubscribe",
          clientId: clientId,
          subscription: "/service/" + name,
          data: data
        });
      }
    }, {
      key: "sendMessage",
      value: function sendMessage(service, data, clientId) {
        return JSON.stringify({
          channel: "/service/" + service,
          clientId: clientId,
          id: new Date().getTime(),
          data: data
        });
      }
    }, {
      key: "onMessage",
      value: function onMessage(message) {
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
    }, {
      key: "send",
      value: function send(data) {
        var _this2 = this;

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
          success: function success(data, type, xhr) {
            _this2.onMessage(data);
          },
          error: function error(obj, type, message) {
            _this2.notificationCenter.fire('onError', obj, type, message);
          }
        });
      }
    }]);

    return bayeux;
  }();

  stage.io.protocols.bayeux = bayeux;
  return bayeux;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js-exposed")))

/***/ }),

/***/ "./src/io/protocols/sip/sdp.es6":
/*!**************************************!*\
  !*** ./src/io/protocols/sip/sdp.es6 ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

module.exports = function (stage) {
  'use strict';

  var defaultAparser = function defaultAparser(value, block) {
    if (value) {
      return value;
    }

    return null;
  };

  var rtpmapParser = function rtpmapParser(value, block) {
    //a=rtpmap:<payload type> <encoding name>/<clock rate>[/<encoding parameters>]
    if (value) {
      var obj = {
        payloadType: null,
        encodingName: null,
        clockRate: null,
        encodingParameters: null,
        raw: value
      };
      var res = value.split(" ");

      for (var i = 0; i < res.length; i++) {
        switch (i) {
          case 0:
            obj.payloadType = res[i];
            break;

          case 1:
            var ret = res[i].split("/");
            obj.encodingName = ret[0];

            if (ret[1]) {
              obj.clockRate = ret[1];
            }

            if (ret[2]) {
              obj.encodingParameters = ret[2];
            }

            break;
        }
      }

      if (!(obj.encodingName in block.rtpmap)) {
        var index = block.rtpmap.push(obj);
        block.rtpmap["rtpmap_" + obj.payloadType] = block.rtpmap[index - 1];
      }

      return obj;
    }

    return null;
  };

  var candidateParser = function candidateParser(value, block) {
    /* a=candidate:0 1 UDP 2122252543 169.254.105.57 65488 typ host
     * a=candidate:6glsxoSzDfHGkyMz 1 UDP 2130706431 93.20.94.1 35796 typ host
     * a=candidate:2 1 UDP 1694498815 192.0.2.3 45664 typ srflx raddr 10.0.1.1 rport 8998
     * a=candidate:86628240 1 udp 2122260223 192.168.10.234 64435 typ host generation 0 network-id 3
     *
     *
     *
     *
     *   candidate-attribute   = "candidate" ":"
     *	   foundation SP
     *	   component-id SP
     *         transport SP
     *         priority SP
     *         connection-address SP     ;from RFC 4566
     *         port         ;port from RFC 4566 SP
     *         cand-type
     *          [SP rel-addr]
     *          [SP rel-port]
     *          *(SP extension-att-name SP
     *               extension-att-value)
     */
    if (value) {
      var obj = {
        foundation: null,
        componentId: null,
        transport: null,
        transportExt: null,
        priority: null,
        connectionAddress: null,
        port: null,
        candidateType: null,
        remoteAddr: null,
        remotePort: null,
        generation: null,
        networkId: null,
        raw: value
      };
      var res = value.split(" ");

      for (var i = 0; i < res.length; i++) {
        switch (i) {
          case 0:
            obj.foundation = res[i];
            break;

          case 1:
            obj.componentId = res[i];
            break;

          case 2:
            obj.transport = res[i];
            var ret = res[i].split("/");
            obj.transport = ret[0];

            if (ret[1]) {
              obj.transportExt = ret[1];
            }

            break;

          case 3:
            obj.priority = res[i];
            break;

          case 4:
            obj.connectionAddress = res[i];
            break;

          case 5:
            obj.port = res[i];
            break;

          default:
            switch (res[i]) {
              case "typ":
                obj.candidateType = res[i + 1];
                break;

              case "raddr":
                obj.remoteAddr = res[i + 1];
                break;

              case "rport":
                obj.remotePort = res[i + 1];
                break;

              case "generation":
                obj.generation = res[i + 1];
                break;

              case "network-id":
                obj.networkId = res[i + 1];
                break;
            }

            break;
        }
      }

      block.candidates.push(obj);
      return value;
    }

    return null;
  };

  var aAttribute = {
    "cat": defaultAparser,
    "keywds": defaultAparser,
    "tool": defaultAparser,
    "ptime": defaultAparser,
    "maxptime": defaultAparser,
    "rtpmap": rtpmapParser,
    "orient": defaultAparser,
    "type": defaultAparser,
    "charset": defaultAparser,
    "sdplang": defaultAparser,
    "lang": defaultAparser,
    "framerate": defaultAparser,
    "quality": defaultAparser,
    "fmtp": defaultAparser,
    "candidate": candidateParser
  };
  var aAttributeDirection = {
    "recvonly": defaultAparser,
    "sendrecv": defaultAparser,
    "sendonly": defaultAparser,
    "inactive": defaultAparser
  };
  /*
   *	SDP PROTOCOL
   *
   */

  var parserSdp =
  /*#__PURE__*/
  function () {
    function parserSdp(body) {
      _classCallCheck(this, parserSdp);

      if (!body) {
        throw new Error("SDP parser no data found !! ");
      } //this.line = body.split("\n");
      //this.nbLines = this.line.length ;
      //this.size = body.length ;


      this.raw = body;
      this.blocks = [];
      this.sessionBlock = null;
      this.audioBlock = null;
      this.videoBlock = null;
      this.detectBlocks();
      this.parseBlocks();
    }

    _createClass(parserSdp, [{
      key: "detectBlocks",
      value: function detectBlocks() {
        var line = this.raw.split("\n");
        var nbLines = line.length;
        var first = 0;
        var m = null;

        for (var i = 0; i < nbLines; i++) {
          var res = line[i].split("=");
          var key = res[0].replace(/ |\n|\r/g, "");
          var value = res[1];
          var _data = null;
          var _size = null;
          var _media = null;
          var _type = null;

          switch (key) {
            case "m":
              if (first === 0) {
                _data = line.slice(first, i);
                _size = _data.length;
              } else {
                _data = line.slice(first + 1, i);
                _size = _data.length;
              }

              var _parseM = this.parseMline(m);

              if (_parseM) {
                _media = _parseM;
                _type = _parseM.media;
              } else {
                _media = null;
                _type = "session";
              }

              this.blocks.push({
                type: _type,
                direction: null,
                //start		: first,
                //end		: i,
                data: _data,
                //size		: size,
                media: _media,
                information: "",
                attributes: [],
                bandwidths: [],
                candidates: [],
                connection: null,
                encryption: null
              });
              first = i;
              m = value;
              break;
          }
        }

        var data = line.slice(first + 1, nbLines);
        var size = data.length;
        var media = null;
        var type = null;
        var parseM = this.parseMline(m);

        if (parseM) {
          media = parseM;
          type = parseM.media;
        } else {
          media = null;
          type = "session";
        }

        this.blocks.push({
          type: type,
          direction: null,
          //start		: first,
          //end		: nbLines,
          data: data,
          //size		: size,
          media: media,
          information: "",
          attributes: [],
          bandwidths: [],
          candidates: [],
          connection: null,
          encryption: null
        });
      }
    }, {
      key: "parseMline",
      value: function parseMline(data) {
        // RFC https://tools.ietf.org/html/rfc4566#section-5.14
        //=<media> <port>/<number of ports> <proto> <fmt> ...
        var obj = null;

        if (data) {
          obj = {
            media: "",
            port: "",
            nbPort: 0,
            proto: "",
            fmt: [],
            raw: data
          };
          var res = data.split(" ");

          for (var i = 0; i < res.length; i++) {
            switch (i) {
              case 0:
                obj.media = res[i];
                break;

              case 1:
                var ret = res[i].split("/");
                obj.port = ret[0];

                if (ret[1]) {
                  obj.nbPort = ret[1];
                } else {
                  obj.nbPort = 1;
                }

                break;

              case 2:
                obj.proto = res[i];
                break;

              default:
                obj.fmt.push(res[i]);
            }
          }

          return obj;
        }

        return null;
      }
    }, {
      key: "parseAline",
      value: function parseAline(data, block) {
        //a=<attribute>:<value>
        var obj = {};

        if (!data) {
          return obj;
        }

        var res = data.split(":");
        var attribute = res[0].replace(/ |\n|\r/g, "");
        var value = res[1];

        if (aAttribute[attribute]) {
          obj[attribute] = aAttribute[attribute](value, block);
        } else {
          switch (attribute) {
            case "setup":
              obj[attribute] = value;
              block.setup = value;
              break;

            default:
              if (aAttributeDirection[attribute]) {
                var ele = aAttributeDirection[attribute](attribute, block);
                obj[attribute] = ele;
                block.direction = ele;
              } else {
                obj[attribute] = value;
              }

          }
        }

        return obj;
      }
    }, {
      key: "parseCline",
      value: function parseCline(data) {
        //c=<nettype> <addrtype> <connection-address>
        if (data) {
          var obj = {
            nettype: null,
            addrtype: null,
            address: null,
            raw: data
          };
          var res = data.split(" ");

          for (var i = 0; i < res.length; i++) {
            switch (i) {
              case 0:
                obj.nettype = res[i];
                break;

              case 1:
                obj.addrtype = res[i];
                break;

              case 2:
                obj.address = res[i];
                break;
            }
          }

          return obj;
        }

        return null;
      }
    }, {
      key: "parseOline",
      value: function parseOline(data) {
        //o=<username> <sess-id> <sess-version> <nettype> <addrtype> <unicast-address>
        var obj = null;

        if (data) {
          obj = {
            username: null,
            sessId: null,
            sessVersion: null,
            nettype: null,
            addrtype: null,
            unicastAddr: null,
            raw: data
          };
          var res = data.split(" ");

          for (var i = 0; i < res.length; i++) {
            switch (i) {
              case 0:
                obj.username = res[i];
                break;

              case 1:
                obj.sessId = res[i];
                break;

              case 2:
                obj.sessVersion = res[i];
                break;

              case 3:
                obj.nettype = res[i];
                break;

              case 4:
                obj.addrtype = res[i];
                break;

              case 5:
                obj.unicastAddr = res[i];
                break;
            }
          }

          return obj;
        }

        return null;
      }
      /*
       *	TIME DESCRIPTION
       */

    }, {
      key: "parseTline",
      value: function parseTline(data) {
        //t=<start-time> <stop-time>
        if (data) {
          var obj = {
            start: null,
            stop: null,
            raw: data
          };
          var res = data.split(" ");

          for (var i = 0; i < res.length; i++) {
            switch (i) {
              case 0:
                obj.start = res[i];
                break;

              case 1:
                obj.stop = res[i];
                break;
            }
          }

          return obj;
        }

        return null;
      }
    }, {
      key: "parseRline",
      value: function parseRline(data) {
        //r=<repeat interval> <active duration> <offsets from start-time>
        if (data) {
          var obj = {
            interval: null,
            duration: null,
            offsets: null,
            raw: data
          };
          var res = data.split(" ");

          for (var i = 0; i < res.length; i++) {
            switch (i) {
              case 0:
                obj.interval = res[i];
                break;

              case 1:
                obj.duration = res[i];
                break;

              case 2:
                obj.offsets = res[i];
                break;
            }
          }

          return obj;
        }

        return null;
      }
      /** BLOCK MEDIA
       *    Media description, if present
       *  m=  (media name and transport address)
       *  i= (media title)
       *  c= (connection information -- optional if included at
       *     session level)
       *  b= (zero or more bandwidth information lines)
       *  k= (encryption key)
       *  a= (zero or more media attribute lines)
       */

    }, {
      key: "blockMediaParser",
      value: function blockMediaParser(block) {
        block.rtpmap = [];

        for (var j = 0; j < block.data.length; j++) {
          var res = block.data[j].split("=");
          var key = res[0].replace(/ |\n|\r/g, "");
          var value = res[1];

          switch (key) {
            case "a":
              block.attributes.push(this.parseAline(value, block));
              break;

            case "c":
              block.connection = this.parseCline(value);
              break;

            case "i":
              block.information = value;
              break;

            case "b":
              block.bandwidths.push(value);
              break;

            case "k":
              block.encryption = value;
              break;
          }
        }

        return block;
      }
      /*  BLOCK SESSION
       *    session description
       *  v=  (protocol version)
       *  o=  (originator and session identifier)
       *  s=  (session name)
       *  i= (session information)
       *  u= (URI of description)
       *  e= (email address)
       *  p= (phone number)
       *  c= (connection information -- not required if included in
       *     all media)
       *  b= (zero or more bandwidth information lines)
       *     One or more time descriptions ("t=" and "r=" lines; see below)
       *  z= (time zone adjustments)
       *  k= (encryption key)
       *  a= (zero or more session attribute lines)
       *     Zero or more media descriptions
       */

    }, {
      key: "blockSessionParser",
      value: function blockSessionParser(block) {
        block.protocol = null;
        block.originator = null;
        block.timeZone = null;
        block.sessionName = null;
        block.originator = null;
        block.protocol = null;
        block.uri = null;
        block.phoneNumber = null;
        block.email = null;
        block.timeDescription = null;
        block.timeRepeat = null;

        for (var j = 0; j < block.data.length; j++) {
          var res = block.data[j].split("=");
          var key = res[0].replace(/ |\n|\r/g, "");
          var value = res[1];

          switch (key) {
            case "v":
              block.protocol = value;
              break;

            case "o":
              block.originator = this.parseOline(value);
              break;

            case "s":
              block.sessionName = value;
              break;

            case "u":
              block.uri = value;
              break;

            case "e":
              block.email = value;
              break;

            case "p":
              block.phoneNumber = value;
              break;

            case "z":
              block.timeZone = value;
              break;

            case "a":
              block.attributes.push(this.parseAline(value, block));
              break;

            case "c":
              block.connection = this.parseCline(value);
              break;

            case "i":
              block.information = value;
              break;

            case "b":
              block.bandwidths.push(value);
              break;

            case "k":
              block.encryption = value;
              break;
            // TIME DESCRIPTION

            case "t":
              block.timeDescription = this.parseTline(value);
              break;

            case "r":
              block.timeRepeat = this.parseRline(value);
              break;
          }
        }

        return block;
      }
    }, {
      key: "parseBlocks",
      value: function parseBlocks() {
        for (var i = 0; i < this.blocks.length; i++) {
          switch (this.blocks[i].type) {
            case "session":
              this.sessionBlock = this.blockSessionParser(this.blocks[i]);
              break;

            case "audio":
              this.audioBlock = this.blockMediaParser(this.blocks[i]);
              break;

            case "video":
              this.videoBlock = this.blockMediaParser(this.blocks[i]);
              break;
          }
        }
      }
    }]);

    return parserSdp;
  }();

  stage.io.protocols.sdp = parserSdp;
  return parserSdp;
};

/***/ }),

/***/ "./src/io/protocols/sip/sip.es6":
/*!**************************************!*\
  !*** ./src/io/protocols/sip/sip.es6 ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

module.exports = function (stage) {
  'use strict';

  var byteToHex = function byteToHex(byte) {
    return ('0' + byte.toString(16)).slice(-2);
  };

  var generateId = function generateId(len) {
    var arr = new Uint8Array((len || 40) / 2);
    window.crypto.getRandomValues(arr);
    return [].map.call(arr, byteToHex).join("");
  };
  /*
   *
   *	DIGEST authenticate
   *
   *
   */


  var stringify = function stringify(value) {
    return '"' + value + '"';
  };

  var reg = /^([^=]+)=(.+)$/;

  var parserAuthenticate = function parserAuthenticate(str) {
    var ret = str.replace(/"/g, "");
    ret = ret.replace(/Digest /g, "");
    var head = ret.split(",");
    var obj = [];

    for (var i = 0; i < head.length; i++) {
      var res = reg.exec(head[i]);
      var key = res[1].replace(/ |\n|\r/g, "");

      if (res && key) {
        obj[key] = res[2];
      }
    }

    return obj;
  };

  var MD5 = stage.crypto.md5.hex_md5_noUTF8; //var BASE64 = stage.crypto.base64.encode ;

  var digest = {
    generateA1: function generateA1(username, realm, password, nonce, cnonce) {
      var A1 = null;

      if (cnonce) {
        A1 = username + ":" + realm + ":" + password + ":" + nonce + ":" + cnonce;
      } else {
        A1 = username + ":" + realm + ":" + password; //+ ":" + nonce ;
      } //console.log(A1)


      return MD5(A1);
    },
    generateA2: function generateA2(method, uri, entity_body, qop) {
      var A2 = "";

      if (!qop || qop === "auth") {
        A2 = method + ":" + uri;
      } else if (qop === "auth-int") {
        if (entity_body) {
          var entity = MD5(entity_body);
          A2 = method + ":" + uri + ":" + entity;
        } else {
          A2 = method + ":" + uri + ":" + "d41d8cd98f00b204e9800998ecf8427e";
        }
      } //console.log(A2)


      return MD5(A2);
    },
    generateResponse: function generateResponse(A1, nonce, noncecount, cnonce, qop, A2) {
      var res = "";

      if (qop === "auth" || qop === "auth-int") {
        res = A1 + ":" + nonce + ":" + noncecount + ":" + cnonce + ":" + qop + ":" + A2;
      } else {
        res = A1 + ":" + nonce + ":" + A2;
      } //console.log(res)


      return MD5(res);
    }
  };

  var authenticate =
  /*#__PURE__*/
  function () {
    function authenticate(dialog, username, password) {
      _classCallCheck(this, authenticate);

      this.dialog = dialog;
      this.userName = username;
      this.password = password;
      this.uri = "sip:" + this.dialog.sip.server;
      this.realm = "nodefony.com";
      this.nonce = null;
      this.cnonce = null;
      this.nonceCount = null;
      this.qop = null;
      this.algorithm = null;
      this.entity_body = null;
      this.timeout = null;
      this.unregisterSended = false;
    }

    _createClass(authenticate, [{
      key: "register",
      value: function register(message, type) {
        //console.log("AUTH REGISTER")
        //console.log(message);
        var head = message.authenticate;

        if (!head) {
          head = this.dialog.authenticate;
        } else {
          this.dialog.authenticate = head;
        }

        this.realm = head.realm;
        this.nonce = head.nonce;
        this.cnonce = head.cnonce;
        this.qop = head.qop;
        this.algorithm = head.Digestalgorithm ? head.Digestalgorithm : "md5";

        if (message.rawBody) {
          this.entity_body = message.rawBody;
        }

        switch (this.algorithm.toLowerCase()) {
          case "md5":
            this.response = this.digestMD5(message.method);
            break;
        }

        var method = "";

        if (!type) {
          method = "Authorization: ";
        } else {
          if (type === "proxy") {
            method = "Proxy-Authorization: ";
          } else {
            method = "Authorization: ";
          }
        }

        var line = "Digest username=" + stringify(this.userName) + ", realm=" + stringify(this.realm) + ", nonce=" + stringify(this.nonce) + ", uri=" + stringify(this.uri) + ", algorithm=" + this.algorithm + ", response=" + stringify(this.response);
        this.lineResponse = method + line; //var transac = message.transaction ;

        var transac = this.dialog.createTransaction(message.transaction.to);
        this.dialog.tagTo = null; //this.dialog.sip.fire("onInitCall", this.dialog.toName, this.dialog, transac);

        var request = transac.createRequest(this.dialog.body, this.dialog.bodyType);
        request.header.response = this.lineResponse;
        request.send();
        this.dialog.sip.createDialogTimeout(this.dialog);
        return transac;
      }
    }, {
      key: "unregister",
      value: function unregister() {
        this.dialog.expires = 0;
        this.dialog.contact = "*";
        var trans = this.dialog.createTransaction(this.dialog.from);
        this.dialog.to = this.dialog.from;
        this.dialog.tagTo = null;
        var request = trans.createRequest();

        if (this.lineResponse) {
          request.header.response = this.lineResponse;
        }

        this.unregisterSended = true;
        request.send();
        return trans;
      }
    }, {
      key: "digestMD5",
      value: function digestMD5(method) {
        var A1 = digest.generateA1(this.userName, this.realm, this.password, this.nonce, this.cnonce);
        var A2 = digest.generateA2(method, this.uri, this.entity_body, this.qop);
        return digest.generateResponse(A1, this.nonce, this.nonceCount, this.cnonce, this.qop, A2);
      }
    }]);

    return authenticate;
  }();
  /*
   *
   * CLASS PARSER HEADER SIP
   *
   *
   */
  //var regContact = /.*<(sip:.*)>(.*)|.*<(sips:.*)>(.*)/g;


  var regHeaders = {
    line: /\r\n|\r|\n/,
    headName: /: */,
    Allow: /, */,
    Via: /; */,
    CallId: /^(.*)@.*$/,
    algorithm: /= */,
    fromTo: /<sip:(.*)@(.*)>/,
    fromToG: /(.*)?<sip:(.*)@(.*)>/,
    contact: /.*<(sips?:.*)>(.*)?$/
  };

  var parsefromTo = function parsefromTo(type, value) {
    try {
      var sp = value.split(";");
      this.message[type + "Tag"] = null;
      var res = sp.shift();
      var res2 = regHeaders.fromTo.exec(res); //console.log(regHeaders.fromToG.exec(res))
      //console.log(res2)

      this.message[type + "Name"] = res2.length > 2 ? res2[1].replace(/ |\n|\r/g, "").replace(/"/g, "") : "";
      this.message[type] = res2[1].replace(" ", "") + "@" + res2[2].replace(/ |\n|\r/g, "");
      var ret = regHeaders.fromToG.exec(res);

      if (ret && ret[1]) {
        var displayName = ret[1].replace(/"/g, ""); //this.message[type+"Name"] = displayName ;

        this.message[type + "NameDisplay"] = displayName; //console.log(displayName)
      }

      for (var i = 0; i < sp.length; i++) {
        var res3 = sp[i].split("=");

        if (res3[0].replace(/ |\n|\r/g, "") === "tag") {
          this.message[type + "Tag"] = res3[1];
        } else {
          this.message[res3[0]] = res3[1];
        }
      }

      return value;
    } catch (e) {
      throw e;
    }
  };

  var headerSip =
  /*#__PURE__*/
  function () {
    function headerSip(message, header) {
      _classCallCheck(this, headerSip);

      this.rawHeader = {};
      this.message = message;
      this.method = null;
      this.firstLine = null;
      this.branch = null;
      this.Via = [];
      this.routes = [];
      this.recordRoutes = [];

      if (header && typeof header === "string") {
        try {
          this.parse(header);
        } catch (e) {
          //throw new Error("PARSE ERROR MESSAGE SIP", 500);
          throw e;
        }
      }
    }

    _createClass(headerSip, [{
      key: "parse",
      value: function parse(header) {
        var _this = this;

        var tab = header.split(regHeaders.line);
        var type = tab.shift();
        this.firstLine = type.split(" ");
        $.each(tab, function (Index, ele) {
          var res = regHeaders.headName.exec(ele);
          var size = res[0].length;
          var headName = res.input.substr(0, res.index);
          var headValue = res.input.substr(res.index + size);
          _this.rawHeader[headName] = headValue;
          var func = "set" + headName;

          if (func === "setVia") {
            var index = _this.Via.push(headValue);

            _this[headName][index - 1] = _this[func](headValue, ele);
          } else {
            _this[headName] = headValue;

            if (_this[func]) {
              try {
                _this[headName] = _this[func](headValue);
              } catch (e) {
                _this.message.sip.logger("Parse : " + headName, "ERROR");

                throw e;
              }
            }
          }
        });

        if (!this["Content-Type"]) {
          this.message.contentType = null;
        } else {
          this.message.contentType = this["Content-Type"];
        }
      }
    }, {
      key: "setFrom",
      value: function setFrom(value) {
        parsefromTo.call(this, "from", value);
        return value;
      }
    }, {
      key: "setTo",
      value: function setTo(value) {
        parsefromTo.call(this, "to", value);
        return value;
      }
    }, {
      key: "setWWW-Authenticate",
      value: function setWWWAuthenticate(value) {
        this.message.authenticate = parserAuthenticate(value);
        /*var ele ={};
        var res = value.split(",")
        for (var i=0 ; i < res.length ;i++){
        var ret = regHeaders.algorithm.exec(res[i]);
        var size = ret[0].length;
        var headName = ret.input.substr(0,ret.index).replace(" ","");
        var headValue = ret.input.substr(ret.index+size).replace(/"/g,"");
        ele[headName] = headValue.replace(/"/g,"");
        }
        this.message.authenticate = ele ;*/

        return value;
      }
    }, {
      key: "setProxy-Authenticate",
      value: function setProxyAuthenticate(value) {
        this.message.authenticate = parserAuthenticate(value);
        return value;
      }
    }, {
      key: "setRecord-Route",
      value: function setRecordRoute(value) {
        this.recordRoutes.push(value);
        return value;
      }
    }, {
      key: "setRoute",
      value: function setRoute(value) {
        this.routes.push(value);
        return value;
      }
    }, {
      key: "setDate",
      value: function setDate(value) {
        try {
          this.message.date = new Date(value);
        } catch (e) {
          this.message.date = value;
        }

        return value;
      }
    }, {
      key: "setCall-ID",
      value: function setCallID(value) {
        this.message.callId = value;
        return value;
        /*this.callIdRaw = value ;
        var res = regHeaders.CallId.exec(value);
        if (res){
        this.message.callId =res[1];
        return res[1];
        }else{
        this.message.callId =value;
        return value;
        }*/
      }
    }, {
      key: "setCSeq",
      value: function setCSeq(value) {
        var res = value.split(" ");
        this.message.cseq = parseInt(res[0], 10);
        this.message.method = res[1];
        return value;
      }
    }, {
      key: "setContact",
      value: function setContact(value) {
        var parseValue = regHeaders.contact.exec(value);

        if (parseValue) {
          this.message.contact = parseValue[1];

          if (parseValue[2]) {
            var clean = parseValue[2].replace(/^;(.*)/, "$1");
            var sp = clean.split(";");

            for (var i = 0; i < sp.length; i++) {
              var res = sp[i].split("=");

              if (!res) {
                continue;
              }

              var name = res[0].toLowerCase();

              if (name === "expires") {
                this["contact-" + name] = res[1];
              }
            }
          }
        } else {
          throw new Error("Contact parse error : " + value);
        }

        return value;
      }
    }, {
      key: "setAllow",
      value: function setAllow(value) {
        if (value) {
          return this.Allow.split(regHeaders.Allow);
        } else {
          return this.Allow;
        }
      }
    }, {
      key: "setSupported",
      value: function setSupported(value) {
        if (value) {
          return this.Supported.split(regHeaders.Allow);
        } else {
          return this.Supported;
        }
      }
    }, {
      key: "setVia",
      value: function setVia(value, raw) {
        if (value) {
          var res = value.split(regHeaders.Via);
          var obj = {
            line: Array.prototype.shift.call(res),
            raw: raw
          };

          for (var i = 0; i < res.length; i++) {
            var tab = res[i].split('=');

            if (tab) {
              if (tab[0] === "branch") {
                if (!this.branch) {
                  this.branch = tab[1];
                }
              }

              obj[tab[0]] = tab[1];
            }
          }

          return obj;
        } else {
          return value;
        }
      }
    }]);

    return headerSip;
  }();
  /*
   *
   * CLASS PARSER BODY SIP
   *
   *
   *
   */


  var bodySip =
  /*#__PURE__*/
  function () {
    function bodySip(message, body) {
      _classCallCheck(this, bodySip);

      this.message = message;
      this.message.rawBody = body;
      this.size = this.message.contentLength;

      if (this.size !== body.length) {
        throw new Error("BAD SIZE SIP BODY ");
      }

      if (body) {
        this.parse(this.message.contentType, body);
      }
    }

    _createClass(bodySip, [{
      key: "parse",
      value: function parse(type, body) {
        switch (type) {
          case "application/sdp":
            this.sdpParser(body);
            break;

          case "application/dtmf-relay":
            this.dtmfParser(body);
            break;

          default:
            this.body = body;
        }
      }
    }, {
      key: "sdpParser",
      value: function sdpParser(body) {
        // Parser SDP
        this.body = body || "";

        if (!body) {
          this.sdp = null;
        } else {
          try {
            this.sdp = new stage.io.protocols.sdp(body); //console.log(this.sdp)
          } catch (e) {
            throw e;
          }
        }
      }
    }, {
      key: "dtmfParser",
      value: function dtmfParser(body) {
        // Parser DTMF
        this.body = body || "";

        if (!body) {
          this.dtmf = null;
        } else {
          // Parser dtmf
          var obj = {};
          var line = body.split("\n");

          for (var i = 0; i < line.length; i++) {
            var res = line[i].split("=");
            obj[res[0].replace(/ |\n|\r/g, "")] = res[1];
          }

          this.dtmf = obj;
        }
      }
    }]);

    return bodySip;
  }();
  /*
   *
   * CLASS REQUEST
   *
   *
   *
   */


  var endline = "\r\n";
  var endHeader = "\r\n\r\n";

  var sipRequest =
  /*#__PURE__*/
  function () {
    function sipRequest(transaction, bodyMessage, typeBody) {
      _classCallCheck(this, sipRequest);

      this.transaction = transaction;
      this["request-port"] = this.transaction.dialog.sip.serverPort;
      this.type = "request";
      this.requestLine = {};
      this.buildRequestline();
      this.header = {};
      this.buildHeader();
      this.buildBody(bodyMessage || "", typeBody);
    }

    _createClass(sipRequest, [{
      key: "buildRequestline",
      value: function buildRequestline() {
        this.requestLine.method = this.transaction.method.toUpperCase();
        this.requestLine.version = this.transaction.dialog.sip.version;
      }
    }, {
      key: "getRequestline",
      value: function getRequestline(uri) {
        switch (this.transaction.method) {
          case "REGISTER":
            this["request-uri"] = "sip:" + this.transaction.dialog.sip.server;
            return this.transaction.method + " " + this["request-uri"] + " " + this.requestLine.version + endline;

          case "INVITE":
          case "BYE":
          case "NOTIFY":
          case "INFO":
          case "CANCEL":
          case "ACK":
            this["request-uri"] = this.transaction.dialog["request-uri"];
            return this.transaction.method + " " + this["request-uri"] + " " + this.requestLine.version + endline;
        }
      }
    }, {
      key: "buildHeader",
      value: function buildHeader() {
        //FIXE ME RPORT IN VIA PARSER
        var rport = this.transaction.dialog.sip.rport;
        var ip = this.transaction.dialog.sip.publicAddress;
        this.header.via = "Via: " + this.transaction.dialog.sip.via + ";" + "branch=" + this.transaction.branch; //if ( rport ){
        //this.header.via  = "Via: "+this.transaction.dialog.sip.version+"/"+this.transaction.dialog.sip.settings.transport+" " +ip+":"+rport+";"+"branch="+this.transaction.branch;
        //}else{
        //this.header.via  = "Via: "+this.transaction.dialog.sip.version+"/"+this.transaction.dialog.sip.settings.transport+" " +ip+":"+this["request-port"]+";"+"branch="+this.transaction.branch;
        //}

        this.header.cseq = "CSeq: " + this.transaction.dialog.cseq + " " + this.transaction.method;
        this.header.from = "From: " + this.transaction.dialog.from + ";tag=" + this.transaction.dialog.tagFrom;
        var tagTo = this.transaction.dialog.tagTo ? ";tag=" + this.transaction.dialog.tagTo : "";
        this.header.to = "To: " + this.transaction.to + tagTo;
        this.header.callId = "Call-ID: " + this.transaction.dialog.callId;
        this.header.expires = "Expires: " + this.transaction.dialog.expires;
        this.header.maxForward = "Max-Forwards: " + this.transaction.dialog.maxForward;
        this.header.userAgent = "User-Agent: " + this.transaction.dialog.sip.settings.userAgent;
        this.header.contact = "Contact: " + this.transaction.dialog.contact;

        if (this.transaction.dialog.routes && this.transaction.dialog.routes.length) {
          this.header.routes = [];

          for (var i = this.transaction.dialog.routes.length - 1; i >= 0; i--) {
            this.header.routes.push("Route: " + this.transaction.dialog.routes[i]);
          }
        }
      }
    }, {
      key: "getHeader",
      value: function getHeader() {
        var head = "";

        for (var line in this.header) {
          switch (stage.typeOf(this.header[line])) {
            case "string":
              head += this.header[line] + endline;
              break;

            case "array":
              for (var i = 0; i < this.header[line].length; i++) {
                head += this.header[line][i] + endline;
              }

              break;
          }
        }

        return head;
      }
    }, {
      key: "buildBody",
      value: function buildBody(body, type) {
        this.header.contentLength = "Content-Length: " + body.length;

        if (type) {
          this.header.contentType = "Content-Type: " + type;
        }

        this.body = body || "";
      }
    }, {
      key: "getBody",
      value: function getBody() {
        return this.body;
      }
    }, {
      key: "getMessage",
      value: function getMessage() {
        //console.log(this.getRequestline() + this.getHeader() + endline + this.getBody())
        //console.log(this.getRequestline() + this.getHeader() + endline + this.getBody())
        return this.rawResponse = this.getRequestline() + this.getHeader() + endline + this.getBody();
      }
    }, {
      key: "send",
      value: function send() {
        return this.transaction.send(this.getMessage());
      }
    }]);

    return sipRequest;
  }();
  /*
   *
   * CLASS RESPONSE
   *
   *
   *
   */


  var codeMessage = {
    200: "OK"
  };

  var sipResponse =
  /*#__PURE__*/
  function () {
    function sipResponse(message, code, messageCode, bodyMessage, typeBody) {
      _classCallCheck(this, sipResponse);

      this.message = message;
      this.transaction = message.transaction;
      this.dialog = message.dialog;
      this.responseLine = {};
      this.buildResponseLine(code, messageCode);
      this.header = []; // message.header.messageHeaders;

      this.buildHeader(message);
      this.buildBody(bodyMessage || "", typeBody);
    }

    _createClass(sipResponse, [{
      key: "buildHeader",
      value: function buildHeader(message) {
        for (var head in message.rawHeader) {
          var i = 0;

          switch (head) {
            case "Allow":
            case "Supported":
              var ptr = "";

              for (i = 0; i < message.header[head].length; i++) {
                if (i < message.header[head].length - 1) {
                  ptr += message.header[head][i] + ",";
                } else {
                  ptr += message.header[head][i];
                }
              }

              this.header.push(head + ": " + ptr);
              break;

            case "Via":
              if (this.responseLine.code == "487") {
                for (i = 0; i < this.dialog[head].length; i++) {
                  this.header.push(this.dialog[head][i].raw);
                }
              } else {
                for (i = 0; i < message.header[head].length; i++) {
                  this.header.push(message.header[head][i].raw);
                }
              }

              break;

            case "User-Agent":
              this.header.push("User-Agent: " + this.transaction.dialog.sip.settings.userAgent);
              break;

            case "Contact":
              /*var rport = this.transaction.dialog.sip.rport ;
              var ip = this.transaction.dialog.sip.publicAddress;
              if ( rport ){
              	this.header.push( "Contact: <sip:" +this.transaction.to+"@"+ip+":"+rport+";transport="+this.transaction.dialog.sip.settings.transport.toLowerCase()+">");
              }else{
              	this.header.push( "Contact: <sip:" +this.transaction.to+"@"+ip+";transport="+this.transaction.dialog.sip.settings.transport.toLowerCase()+">");
              }*/
              this.header.push("Contact: " + this.dialog.contact);
              break;

            case "To":
              //console.log(message.header[head] )
              //console.log(this.dialog.sip.displayName )
              var ret = regHeaders.fromToG.exec(message.header[head]); //console.log(ret)

              if (ret && !ret[1]) {
                //console.log("traff to")
                message.header[head] = '"' + this.dialog.sip.displayName + '"' + message.header[head];
              } //console.log(message.header[head])


              if (!message.header[head].match(/;tag=/)) {
                this.header.push(head + ": " + message.header[head] + (this.transaction.dialog.tagFrom ? ";tag=" + this.transaction.dialog.tagFrom : ""));
              } else {
                this.header.push(head + ": " + message.header[head]);
              }

              break;

            case "Record-Route":
              for (i = this.message.dialog.routes.length - 1; i >= 0; i--) {
                this.header.push(head + ": " + this.message.header.recordRoutes[i]);
              }

              break;

            case "CSeq":
              if (this.responseLine.code == "487" && this.dialog.method === "CANCEL") {
                this.header.push(head + ": " + message.header[head].replace("CANCEL", "INVITE"));
              } else {
                this.header.push(head + ": " + message.header[head]);
              }

              break;

            case "Content-Type":
            case "Organization":
            case "Server":
            case "Content-Length":
              break;

            default:
              this.header.push(head + ": " + message.header[head]);
          }
        }
      }
    }, {
      key: "getHeader",
      value: function getHeader() {
        var head = "";

        for (var line in this.header) {
          head += this.header[line] + endline;
        }

        return head;
      }
    }, {
      key: "buildBody",
      value: function buildBody(body, type) {
        this.header.contentLength = "Content-Length: " + body.length;

        if (type) {
          this.header.contentType = "Content-Type: " + type;
        }

        this.body = body || "";
      }
    }, {
      key: "getBody",
      value: function getBody() {
        return this.body;
      }
    }, {
      key: "buildResponseLine",
      value: function buildResponseLine(code, messageCode) {
        this.responseLine.method = this.transaction.method.toUpperCase();
        this.responseLine.version = this.transaction.dialog.sip.version;
        this.responseLine.code = code;
        this.responseLine.message = messageCode || codeMessage[code];
      }
    }, {
      key: "getResponseline",
      value: function getResponseline() {
        if (this.responseLine.method === "ACK") {
          return this.responseLine.method + " " + "sip:" + this.transaction.from + "@" + this.transaction.dialog.sip.server + " " + this.responseLine.version + endline;
        }

        return this.responseLine.version + " " + this.responseLine.code + " " + this.responseLine.message + endline;
      }
    }, {
      key: "getMessage",
      value: function getMessage() {
        //console.log("RESPONSE : " +this.getResponseline() + this.getHeader() + endline + this.getBody())
        return this.rawResponse = this.getResponseline() + this.getHeader() + endline + this.getBody();
      }
    }, {
      key: "send",
      value: function send() {
        return this.transaction.send(this.getMessage());
      }
    }]);

    return sipResponse;
  }();
  /*
   *
   * CLASS TRANSACTION
   *
   *
   */


  var generateHex = function generateHex() {
    return Math.floor(Math.random() * 167772150000000).toString(16);
  };

  var Transaction =
  /*#__PURE__*/
  function () {
    function Transaction(to, dialog) {
      _classCallCheck(this, Transaction);

      this.dialog = dialog;

      if (to instanceof Message) {
        this.hydrate(to);
      } else {
        this.to = to;
        this.from = dialog.from;
        this.method = dialog.method;
        this.branch = this.generateBranchId();
      }

      this.responses = {};
      this.requests = {};
      this.interval = null;
    }

    _createClass(Transaction, [{
      key: "hydrate",
      value: function hydrate(message) {
        this.message = message;

        if (message.type === "REQUEST") {
          this.to = this.dialog.to;
          this.from = this.dialog.from;
          this.method = this.dialog.method;
          this.branch = this.message.header.branch;
        }

        if (message.type === "RESPONSE") {
          this.to = this.dialog.to;
          this.from = this.dialog.from;
          this.method = this.dialog.method;
          this.branch = this.message.header.branch;
        }
      }
    }, {
      key: "generateBranchId",
      value: function generateBranchId() {
        var hex = generateHex();

        if (hex.length === 12) {
          return "z9hG4bK" + hex;
        } else {
          return this.generateBranchId();
        }
      }
    }, {
      key: "createRequest",
      value: function createRequest(body, typeBody) {
        if (this.method !== "ACK" && this.method !== "CANCEL") {
          this.dialog.incCseq();
        }

        this.request = new sipRequest(this, body || "", typeBody);
        this.message = null;
        return this.request;
      }
    }, {
      key: "createResponse",
      value: function createResponse(code, message, body, typeBody) {
        if (this.method === "INVITE" || this.method === "ACK") {
          switch (true) {
            case code < 200:
              this.dialog.status = this.dialog.statusCode.EARLY;
              break;

            case code < 300:
              this.dialog.status = this.dialog.statusCode.ESTABLISHED;
              break;

            default:
              this.dialog.status = this.dialog.statusCode.TERMINATED;
          }
        }

        this.response = new sipResponse(this.message, code, message, body, typeBody);
        return this.response;
      }
    }, {
      key: "send",
      value: function send(message) {
        return this.dialog.sip.send(message);
      }
    }, {
      key: "cancel",
      value: function cancel() {
        this.method = "CANCEL";
        this.dialog.routes = null;
        this.dialog.tagTo = "";
        var request = this.createRequest();
        request.send();
        this.dialog.status = this.dialog.statusCode.CANCEL;
        return request;
      }
    }, {
      key: "decline",
      value: function decline() {
        var ret = this.createResponse(603, "Declined");
        ret.send();
        return ret;
      }
    }, {
      key: "clear",
      value: function clear() {
        // CLEAR INTERVAL
        if (this.interval) {
          clearInterval(this.interval);
        }
      }
    }]);

    return Transaction;
  }();
  /*
   *
   * CLASS DIALOG
   *
   */


  var statusCode = {
    INITIAL: 0,
    EARLY: 1,
    // on 1xx
    ESTABLISHED: 2,
    // on 200 ok
    TERMINATED: 3,
    // on by
    CANCEL: 4 // cancel

  };

  var Dialog =
  /*#__PURE__*/
  function () {
    function Dialog(method, sip) {
      _classCallCheck(this, Dialog);

      this.sip = sip;
      this.transactions = {};
      this.statusCode = statusCode;
      this.status = this.statusCode.INITIAL;
      this.routes = null;
      this.from = this.sip.from;
      this.maxForward = this.sip.settings.maxForward;
      this.expires = this.sip.settings.expires;
      this.tagFrom = this.generateTag();
      this.cseq = this.generateCseq();
      this.unregisterSended = false;

      if (method instanceof Message) {
        this.hydrate(method);
      } else {
        this.method = method;
        this.callId = this.generateCallId();
        this.status = this.statusCode.INITIAL;
        this.to = null;
        this.tagTo = null;
      } //this.contact = this.sip.generateContact( null, null, true) ;


      this.contact = this.sip.contact;
    }

    _createClass(Dialog, [{
      key: "hydrate",
      value: function hydrate(message) {
        if (message.type === "REQUEST") {
          this.cseq = message.cseq;
          this.method = message.method;
          this.callId = message.callId; // to

          if (message.fromNameDisplay) {
            this.to = '"' + message.fromNameDisplay + '"' + "<sip:" + message.from + ">";
          } else {
            this.to = "<sip:" + message.from + ">";
          }

          this.toName = message.fromName;
          this.tagTo = message.fromTag || this.generateTag(); //from

          this.tagFrom = message.toTag || this.tagFrom;

          if (message.toNameDisplay) {
            this.from = '"' + message.toNameDisplay + '"' + '<sip:' + message.to + '>';
          } else {
            this.from = "<sip:" + message.to + ">";
          }

          this.fromName = message.toName; // manage routes

          if (message.header.recordRoutes.length) {
            this.routes = message.header.recordRoutes.reverse();
          } // FIXME if (  ! this["request-uri"] &&  message.contact )


          if (message.contact) {
            //this["request-uri"] =  message.contact + ":" + message.rport
            this["request-uri"] = message.contact;
          }
        }

        if (message.type === "RESPONSE") {
          this.cseq = message.cseq;

          if (!this.callId) {
            this.callId = message.callId;
          }

          if (!this.to) {
            if (message.toNameDisplay) {
              this.to = '"' + message.toNameDisplay + '"' + "<sip:" + message.to + ">";
            } else {
              this.to = "<sip:" + message.to + ">";
            }
          } else {
            if (message.toNameDisplay) {
              this.to = '"' + message.toNameDisplay + '"' + "<sip:" + message.to + ">";
            }
          }

          if (message.toTag) {
            this.tagTo = message.toTag;
          }

          if (message.fromTag) {
            this.tagFrom = message.fromTag;
          } // FIXME if (  ! this["request-uri"] &&  message.contact )


          if (message.contact) {
            //this["request-uri"] =  message.contact + ":" + message.rport
            this["request-uri"] = message.contact;
          } // manage routes


          if (message.header.recordRoutes.length) {
            this.routes = message.header.recordRoutes;
          }
        }
      }
    }, {
      key: "generateCallId",
      value: function generateCallId() {
        return generateId() + "@nodefony";
      }
    }, {
      key: "generateTag",
      value: function generateTag() {
        return "nodefony" + parseInt(Math.random() * 1000000000, 10);
      }
    }, {
      key: "generateCseq",
      value: function generateCseq() {
        return 1;
      }
    }, {
      key: "incCseq",
      value: function incCseq() {
        this.cseq = this.cseq + 1;
        return this.cseq;
      }
    }, {
      key: "getTransaction",
      value: function getTransaction(id) {
        if (id in this.transactions) {
          return this.transactions[id];
        }

        return null;
      }
    }, {
      key: "createTransaction",
      value: function createTransaction(to) {
        this.currentTransaction = new Transaction(to || this.to, this);
        this.sip.logger("SIP NEW TRANSACTION :" + this.currentTransaction.branch, "DEBUG");
        this.transactions[this.currentTransaction.branch] = this.currentTransaction;
        return this.currentTransaction;
      }
    }, {
      key: "register",
      value: function register() {
        var trans = this.createTransaction(this.from);
        this.to = this.from;
        var request = trans.createRequest();
        request.send();
        return trans;
      }
    }, {
      key: "unregister",
      value: function unregister() {
        this.expires = 0;
        this.contact = "*";
        var trans = this.createTransaction(this.from);
        this.to = this.from;
        this.tagTo = null;
        var request = trans.createRequest();
        request.send();
        this.unregisterSended = true;
        return trans;
      }
    }, {
      key: "ack",
      value: function ack()
      /*message*/
      {
        if (!this["request-uri"]) {
          this["request-uri"] = this.sip["request-uri"];
        } //this.method = "ACK" ;


        var trans = this.createTransaction();
        trans.method = "ACK";
        var request = trans.createRequest();
        request.send();
        return request;
      }
    }, {
      key: "invite",
      value: function invite(userTo, description, type) {
        if (this.status === this.statusCode.CANCEL) {
          return null;
        }

        this.sip.logger("SIP INVITE DIALOG");

        if (userTo) {
          this.to = "<sip:" + userTo + ">";
        }

        this.method = "INVITE";

        if (!this["request-uri"]) {
          this["request-uri"] = "sip:" + userTo;
        }

        if (description.sdp) {
          this.bodyType = "application/sdp";
          this.body = description.sdp;
        } else {
          this.bodyType = type;
          this.body = description;
        }

        var trans = this.createTransaction(this.to);
        var request = trans.createRequest(this.body, this.bodyType);
        request.send();
        return trans;
      }
    }, {
      key: "notify",
      value: function notify(userTo, _notify, typeNotify) {
        this.method = "NOTIFY";

        if (userTo) {
          this.to = "<sip:" + userTo + ">";
        }

        if (!this["request-uri"]) {
          this["request-uri"] = "sip:" + userTo;
        }

        if (typeNotify) {
          this.bodyType = typeNotify;
        }

        if (_notify) {
          this.body = _notify;
        }

        var trans = this.createTransaction(this.to);
        var request = trans.createRequest(this.body, this.bodyType);
        request.send();
        return this;
      }
    }, {
      key: "info",
      value: function info(_info, typeInfo) {
        this.method = "INFO";

        if (typeInfo) {
          this.bodyType = typeInfo;
        }

        if (_info) {
          this.body = _info;
        }

        var trans = this.createTransaction(this.to);
        var request = trans.createRequest(this.body, this.bodyType);
        request.send();
        return this;
      }
    }, {
      key: "bye",
      value: function bye() {
        this.method = "BYE";
        var trans = this.createTransaction();
        var request = trans.createRequest();
        request.send();
        return this;
      }
    }, {
      key: "clear",
      value: function clear(id) {
        if (id) {
          if (this.transactions[id]) {
            this.transactions[id].clear();
            delete this.transactions[id];
          } else {
            throw new Error("TRANSACTION not found :" + id);
          }
        } else {
          for (var transac in this.transactions) {
            this.transactions[transac].clear();
            delete this.transactions[transac];
          }
        }
      }
    }]);

    return Dialog;
  }();
  /*
   *
   *	MESSAGE SIP
   *
   *
   */


  var firstline = function firstline(firstLine) {
    var method = firstLine[0];
    var code = firstLine[1];

    if (method === "BYE" && !code) {
      code = 200;
    }

    var message = "";

    for (var i = 2; i < firstLine.length; i++) {
      message += firstLine[i] + " ";
    }

    return {
      method: method,
      code: code,
      message: message
    };
  };

  var regSIP = /\r\n\r\n/;

  var Message =
  /*#__PURE__*/
  function () {
    function Message(message, sip) {
      _classCallCheck(this, Message);

      this.sip = sip;

      if (message) {
        this.rawMessage = message;
        this.header = null;
        this.body = null;
        this.statusLine = null;
        this.contentLength = 0;
        this.code = null;
        this.statusLine = "";
        this.split = message.split(regSIP);

        if (this.split.length && this.split.length <= 2) {
          try {
            this.parseHeader();
            this.contentLength = parseInt(this.header["Content-Length"], 10);
            this.parseBody();
            this.statusLine = firstline(this.header.firstLine);
            this.code = parseInt(this.statusLine.code, 10);
            this.getType();
          } catch (e) {
            throw e;
          }

          this.rawHeader = this.header.rawHeader; //console.log(this.rawHeader)
        }

        this.getDialog();
        this.getTransaction();
      } else {
        throw new Error("BAD FORMAT MESSAGE SIP no message", 500);
      }
    }

    _createClass(Message, [{
      key: "getType",
      value: function getType() {
        if (this.code) {
          if (typeof this.code === "number" && !isNaN(this.code)) {
            this.type = "RESPONSE";
          } else {
            throw new Error("BAD FORMAT MESSAGE SIP message code   ");
          }
        } else {
          if (this.method) {
            this.type = "REQUEST";
          } else {
            this.type = null;
            throw new Error("BAD FORMAT MESSAGE SIP message type not defined  ");
          }
        }
      }
    }, {
      key: "parseBody",
      value: function parseBody() {
        try {
          if (this.split[1]) {
            this.body = new bodySip(this, this.split[1]);
          } else {
            this.body = new bodySip(this, "");
          }
        } catch (e) {
          this.sip.logger("SIP parseBody Message :" + this.split[1], "ERROR");
          throw e;
        }
      }
    }, {
      key: "parseHeader",
      value: function parseHeader() {
        if (this.split[0]) {
          try {
            this.header = new headerSip(this, this.split[0]);
          } catch (e) {
            this.sip.logger("SIP parseHeader Message :" + this.split[0], "ERROR");
            throw e;
          }
        } else {
          throw "BAD FORMAT MESSAGE SIP no header ", 500;
        }
      }
    }, {
      key: "getContact",
      value: function getContact() {
        return this.contact;
      }
    }, {
      key: "getHeader",
      value: function getHeader() {
        return this.header;
      }
    }, {
      key: "getBody",
      value: function getBody() {
        return this.body;
      }
    }, {
      key: "getStatusLine",
      value: function getStatusLine() {
        return this.statusLine;
      }
    }, {
      key: "getCode",
      value: function getCode() {
        return this.code;
      }
    }, {
      key: "getDialog",
      value: function getDialog() {
        if (this.header["Call-ID"]) {
          this.dialog = this.sip.getDialog(this.header["Call-ID"]);

          if (!this.dialog) {
            this.dialog = this.sip.createDialog(this);
          } else {
            this.sip.logger("SIP HYDRATE DIALOG :" + this.dialog.callId, "DEBUG");
            this.dialog.hydrate(this);
          }

          return this.dialog;
        } else {
          throw new Error("BAD FORMAT SIP MESSAGE no Call-ID", 500);
        }
      }
    }, {
      key: "getTransaction",
      value: function getTransaction() {
        if (this.header.branch) {
          if (!this.dialog) {
            this.getDialog();
          }

          if (this.dialog) {
            this.transaction = this.dialog.getTransaction(this.header.branch);

            if (!this.transaction) {
              this.transaction = this.dialog.createTransaction(this);
            } else {
              this.sip.logger("SIP HYDRATE TRANSACTION :" + this.transaction.branch, "DEBUG");
              this.transaction.hydrate(this);
            }
          } else {
            this.transaction = null;
          }

          return this.transaction;
        } else {
          // TODO CSEQ mandatory
          this.sip.logger(this.rawMessage, "ERROR");
          throw new Error("BAD FORMAT SIP MESSAGE no Branch", 500);
        }
      }
    }]);

    return Message;
  }();
  /*
   *
   *
   *	CLASS SIP
   *
   *
   */
  // entry point response transport


  var onMessage = function onMessage(response) {
    var _this2 = this;

    this.logger(response, "INFO", "RECIEVE");
    var message = null;
    var res = null;

    try {
      //console.log(this.fragment)
      if (this.fragment) {
        this.lastResponse += response; //console.log(this.lastResponse);
      } else {
        this.lastResponse = response;
      }

      message = new Message(this.lastResponse, this);
      this.fragment = false;
    } catch (e) {
      //console.log(e);
      // bad split
      for (var i = 0; i < e.length; i++) {
        if (e[i]) {
          try {
            onMessage.call(this, e[i]);
            continue;
          } catch (e) {
            //console.log("FRAGMENTE")
            this.fragment = true;
            return;
          }
        }
      }

      this.logger(e, "ERROR");
      this.logger("SIP DROP : " + response, "ERROR");
      this.notificationsCenter.fire("onDrop", response);
      return;
    }

    this.fire("onMessage", message.rawMessage);

    switch (message.method) {
      case "REGISTER":
        this.rport = message.header.Via[0].rport;

        if (message.dialog) {
          this.clearDialogTimeout(message.dialog);
        }

        if (this.rport) {
          this["request-uri"] = "sip:" + this.userName + "@" + this.publicAddress + ":" + this.rport + ";transport=" + this.transportType;
        }

        switch (message.code) {
          case 401:
          case 407:
            if (this.registered === 200) {
              if (this.registerInterval) {
                clearInterval(this.registerInterval);
              }

              this.registerInterval = null;
            } else {
              if (this.registered === 401 || this.registered === 407) {
                if (this.registerInterval) {
                  clearInterval(this.registerInterval);
                }

                this.registerInterval = null;
                this.registered = null;
                this.notificationsCenter.fire("onError", this, message);
                break;
              }

              this.registered = message.code;
            }

            delete this.authenticateRegister;
            this.authenticateRegister = null;
            this.authenticateRegister = new authenticate(message.dialog, this.userName, this.settings.password);
            this.authenticateRegister.register(message, message.code === 407 ? "proxy" : null);
            break;

          case 403:
            if (this.registerInterval) {
              clearInterval(this.registerInterval);
            }

            this.registered = message.code; //console.log("Forbidden (bad auth)")

            delete this.authenticateRegister;
            this.authenticateRegister = null;
            this.notificationsCenter.fire("onError", this, message);
            break;

          case 404:
            if (this.registerInterval) {
              clearInterval(this.registerInterval);
            }

            this.registered = message.code;
            delete this.authenticateRegister;
            this.authenticateRegister = null;
            this.notificationsCenter.fire("onError", this, message);
            break;

          case 200:
            if (this.registerInterval) {
              clearInterval(this.registerInterval);
            }

            if (this.authenticateRegister && this.authenticateRegister.unregisterSended) {
              this.registered = "404";
              this.notificationsCenter.fire("onUnRegister", this, message);
              this.clear();
              return;
            }

            if (message.dialog.unregisterSended) {
              this.registered = "404";
              this.notificationsCenter.fire("onUnRegister", this, message);
              this.clear();
              return;
            }

            if (this.registered === 401 || this.registered === null) {
              this.notificationsCenter.fire("onRegister", this, message);
            }

            this.registered = message.code;
            var expires = message.header["contact-expires"] || this.settings.expires;
            expires = parseInt(expires, 10) * 900; // 10% (ms)

            this.registerInterval = setInterval(function () {
              _this2.authenticateRegister.register(message);

              _this2.notificationsCenter.fire("onRenew", _this2, _this2.authenticateRegister, message);
            }, expires);
            break;

          default:
            this.registered = message.code;
            delete this.authenticateRegister;
            this.authenticateRegister = null; //console.log(message);

            this.notificationsCenter.fire("on" + message.code, this, message);
            break;
        }

        break;

      case "INVITE":
        //this.rport = message.rport || this.rport;
        if (message.dialog) {
          this.clearDialogTimeout(message.dialog);
        }

        switch (message.type) {
          case "REQUEST":
            if (message.dialog.status === message.dialog.statusCode.INITIAL) {
              this.fire("onInitCall", message.dialog.toName, message.dialog, message.transaction);

              if (message.header.Via) {
                message.dialog.Via = message.header.Via;
              }

              this.notificationsCenter.fire("onInvite", message, message.dialog);
            } else {
              //console.log(message.dialog.statusCode[message.dialog.status])
              if (message.dialog.status === message.dialog.statusCode.ESTABLISHED) {
                this.notificationsCenter.fire("onInvite", message, message.dialog);
              } else {
                var ret = message.transaction.createResponse(200, "OK");
                ret.send();
              }
            }

            break;

          case "RESPONSE":
            if (message.code >= 200) {
              message.dialog.ack(message);
            }

            switch (message.code) {
              case 407:
              case 401:
                delete this.authenticate;
                this.authenticate = null;
                this.authenticate = new authenticate(message.dialog, this.userName, this.settings.password);
                var transaction = this.authenticate.register(message, message.code === 407 ? "proxy" : null);
                this.fire("onInitCall", message.dialog.toName, message.dialog, transaction);
                break;

              case 180:
                this.notificationsCenter.fire("onRinging", this, message);
                message.dialog.status = message.dialog.statusCode.EARLY;
                break;

              case 100:
                this.notificationsCenter.fire("onTrying", this, message);
                message.dialog.status = message.dialog.statusCode.EARLY;
                break;

              case 200:
                this.notificationsCenter.fire("onCall", message);
                message.dialog.status = message.dialog.statusCode.ESTABLISHED;
                break;

              case 486:
              case 603:
                this.notificationsCenter.fire("onDecline", message);
                break;

              case 403:
                this.authenticate = false;
                this.notificationsCenter.fire("onError", this, message);
                break;

              case 487:
              case 404:
              case 477:
              case 480:
              case 484:
              case 488:
                this.notificationsCenter.fire("onError", this, message);
                break;

              case 408:
                this.notificationsCenter.fire("onTimeout", this, message);
                break;

              case 500:
                this.notificationsCenter.fire("onError", this, message);
                break;

              default:
                this.notificationsCenter.fire("on" + message.code, this, message);
                break;
            }

            break;

          default: // error BAD FORMAT

        }

        break;

      case "ACK":
        //console.log("ACK");
        //TODO manage interval messages timer retransmission
        break;

      case "BYE":
        switch (message.code) {
          case 200:
            //console.log("200")
            this.notificationsCenter.fire("onBye", message);
            break;

          default:
            this.notificationsCenter.fire("onBye", message);

            if (message.type === "REQUEST") {
              res = message.transaction.createResponse(200, "OK");
              res.send();
            }

        }

        break;

      case "INFO":
        switch (message.type) {
          case "REQUEST":
            //console.log("SIP   :"+ message.method + " "+" type: "+message.contentType );
            this.notificationsCenter.fire("onInfo", message);
            res = message.transaction.createResponse(200, "OK");
            res.send();
            break;

          case "RESPONSE":
            //console.log("SIP   :"+ message.method + " "+" code:"+message.code );
            this.notificationsCenter.fire("onDrop", message);
            break;
        }

        break;

      case "CANCEL":
        switch (message.type) {
          case "REQUEST":
            this.notificationsCenter.fire("onCancel", message);
            res = message.transaction.createResponse(200, "OK");
            res.send();
            message.dialog.status = message.dialog.statusCode.CANCEL;
            res = message.transaction.createResponse(487, "Request Terminated");
            res.send();
            message.dialog.status = message.dialog.statusCode.TERMINATED;
            break;

          case "RESPONSE":
            this.notificationsCenter.fire("onDrop", message);
            break;
        }

        break;

      case "REFER":
        this.logger("SIP REFER NOT ALLOWED :" + message.method, "WARNING");
        this.notificationsCenter.fire("onDrop", message);
        break;

      default:
        this.logger("SIP DROP :" + message.method + " " + " code:" + message.code, "WARNING");
        this.notificationsCenter.fire("onDrop", message);
      // TODO RESPONSE WITH METHOD NOT ALLOWED
    }
  };

  var onStart = function onStart() {
    this.fire("onStart", this);
  };

  var onStop = function onStop() {
    this.stop();
  };

  var defaultSettings = {
    expires: 200,
    // en secondes
    maxForward: 70,
    version: "SIP/2.0",
    userAgent: "nodefony",
    portServer: "5060",
    userName: "userName",
    displayName: "",
    pwd: "password",
    transport: "TCP"
  }; // CLASS

  var SIP =
  /*#__PURE__*/
  function (_stage$Service) {
    _inherits(SIP, _stage$Service);

    function SIP(server, transport, settings) {
      var _this3;

      _classCallCheck(this, SIP);

      _this3 = _possibleConstructorReturn(this, _getPrototypeOf(SIP).call(this, "SIP", null, null, settings));
      _this3.settings = stage.extend({}, defaultSettings, settings);
      _this3.dialogs = {};
      _this3.version = _this3.settings.version; //

      _this3.server = server;
      _this3.serverPort = _this3.settings.portServer;
      _this3.authenticate = false;
      _this3.authenticateRegister = null; // REGISTER

      _this3.registerInterval = null;
      _this3.registerTimeout = {};
      _this3.registered = null;
      _this3.diagRegister = null; // TRANSPORT

      _this3.transport = transport;

      if (_this3.transport) {
        _this3.initTransport();
      }

      _this3.transportType = _this3.settings.transport.toLowerCase();
      _this3.contact = null;
      _this3.via = null; // IDENTIFIANT
      //  USER
      //this.userName = this.settings.userName ;
      //this.from = "<sip:"+this.userName+"@"+this.publicAddress+">" ;
      //this.contact = this.generateContact();
      //this["request-uri"] =  "sip:"+this.userName+"@"+this.publicAddress+";transport="+this.transportType ;

      return _this3;
    }

    _createClass(SIP, [{
      key: "generateInvalid",
      value: function generateInvalid() {
        return parseInt(Math.random() * 1000000000, 10) + ".nodefony.invalid";
      }
    }, {
      key: "generateVia",
      value: function generateVia(addr) {
        if (this.rport) {
          return this.version + "/" + this.settings.transport + " " + addr + ";rport";
        } else {
          return this.version + "/" + this.settings.transport + " " + addr;
        }
      }
    }, {
      key: "generateContact",
      value: function generateContact(userName, password, force, settings) {
        if (userName) {
          this.userName = userName;

          if (settings && settings.displayName) {
            this.displayName = settings.displayName;
          } else {
            this.displayName = userName;
          }

          this.from = '"' + this.displayName + '"' + '<sip:' + this.userName + '@' + this.publicAddress + '>';
          this["request-uri"] = "sip:" + this.userName + "@" + this.publicAddress + ";transport=" + this.transportType;

          if (password) {
            this.settings.password = password;
          }
        }

        if (!this.contact || force) {
          var invalid = null;

          switch (this.transportType) {
            case "ws":
            case "wss":
              invalid = this.generateInvalid();
              this.via = this.generateVia(invalid);

              if (this.rport) {
                return '"' + this.displayName + '"' + "<sip:" + this.userName + "@" + invalid + ":" + this.rport + ";transport=" + this.transportType + ">";
              } else {
                return '"' + this.displayName + '"' + "<sip:" + this.userName + "@" + invalid + ";transport=" + this.transportType + ">";
              }

              break;

            case "tcp":
            case "udp":
              invalid = this.generateInvalid();
              this.via = this.generateVia(invalid); //this.via = this.generateVia(this.publicAddress);

              if (this.rport) {
                return '"' + this.displayName + '"' + "<sip:" + this.userName + "@" + invalid + ":" + this.rport + ";transport=" + this.transportType + ">";
              } else {
                return '"' + this.displayName + '"' + "<sip:" + this.userName + "@" + invalid + ";transport=" + this.transportType + ">";
              }

              break;

            default:
              throw new Error("SIP TRANSPORT TYPE NOT ALLOWED");
          }
        }

        return this.contact;
      }
    }, {
      key: "getDialog",
      value: function getDialog(id) {
        if (id in this.dialogs) {
          return this.dialogs[id];
        }

        return null;
      }
    }, {
      key: "initTransport",
      value: function initTransport(transport) {
        if (transport) {
          this.transport = transport;
        } // GET REMOTE IP


        if (this.transport.publicAddress) {
          this.publicAddress = this.transport.domain.hostname;
          this.publicAddress = this.server;
        } else {
          this.publicAddress = this.server;
        }

        switch (this.settings.transport) {
          // realtime nodefony
          case "TCP":
          case "UDP":
            this.transport.listen(this, "onSubscribe", function (service, message) {
              if (service === "SIP" || service === "OPENSIP") {
                onStart.call(this, message);
              }
            });
            this.transport.listen(this, "onUnsubscribe", function (service, message) {
              if (service === "SIP" || service === "OPENSIP") {
                onStop.call(this, message);
              }
            });
            this.transport.listen(this, "onMessage", function (service, message) {
              if (service === "SIP" || service === "OPENSIP") {
                onMessage.call(this, message);
              }
            });
            this.transport.listen(this, "onClose", function (message) {
              this.quit(message);
            });
            break;

          case "WS":
          case "WSS":
            this.transport.listen(this, "onMessage", function (message) {
              //this.notificationsCenter.fire("onMessage",message.data);
              onMessage.call(this, message.data);
            });
            this.transport.listen(this, "onError", function (message) {
              this.notificationsCenter.fire("onError", this.transport, message);
            });
            this.transport.listen(this, "onConnect", function (message) {
              this.connect(message);
            });
            this.transport.listen(this, "onClose", function (message) {
              this.quit(message);
            });
            break;

          default:
            this.fire("onError", new Error("TRANSPORT LAYER NOT DEFINED"));
        }
      }
    }, {
      key: "clear",
      value: function clear() {
        if (this.registerInterval) {
          clearInterval(this.registerInterval);
        }

        if (this.registerTimeout) {
          this.clearDialogTimeout();
          delete this.registerTimeout;
        } //TODO
        //clean all setinterval


        for (var dia in this.dialogs) {
          //this.dialogs[dia].unregister();
          this.dialogs[dia].clear();
        }

        this.notificationsCenter.clearNotifications();
      }
    }, {
      key: "quit",
      value: function quit(message) {
        this.fire("onQuit", this, message); //this.unregister();

        this.clear();
      }
    }, {
      key: "connect",
      value: function connect(message) {
        this.fire("onConnect", this, message);
      }
    }, {
      key: "createDialog",
      value: function createDialog(method) {
        var dialog = new Dialog(method, this);
        this.logger("SIP NEW DIALOG :" + dialog.callId, "DEBUG");
        this.dialogs[dialog.callId] = dialog;
        return dialog;
      }
    }, {
      key: "createDialogTimeout",
      value: function createDialogTimeout(dialog) {
        var _this4 = this;

        if (dialog) {
          this.registerTimeout[dialog.callId] = setTimeout(function () {
            var error = new Error(" DIALOG ID : " + dialog.callId + " TIMEOUT : " + dialog.method + "  no response ");

            _this4.logger(error, "ERROR");

            _this4.fire("onError", _this4, error);
          }, parseInt(this.settings.expires, 10) * 900);
        }
      }
    }, {
      key: "clearDialogTimeout",
      value: function clearDialogTimeout(dialog) {
        if (dialog) {
          var id = dialog.callId;

          if (this.registerTimeout[id]) {
            clearTimeout(this.registerTimeout[id]);
            delete this.registerTimeout[id];
          }
        } else {
          for (var ele in this.registerTimeout) {
            clearTimeout(this.registerTimeout[ele]);
            delete this.registerTimeout[ele];
          }
        }
      }
    }, {
      key: "register",
      value: function register(userName, password, settings) {
        this.logger("TRY TO REGISTER SIP : " + userName + password, "DEBUG");
        this.contact = this.generateContact(userName, password, false, settings);
        this.diagRegister = this.createDialog("REGISTER");
        this.diagRegister.register();
        this.createDialogTimeout(this.diagRegister);
        return this.diagRegister;
      }
    }, {
      key: "unregister",
      value: function unregister() {
        if (this.authenticateRegister && this.registered === 200) {
          return this.authenticateRegister.unregister();
        }

        if (this.diagRegister && this.registered === 200) {
          return this.diagRegister.unregister();
        }
      }
    }, {
      key: "invite",
      value: function invite(userTo, description) {
        var diagInv = this.createDialog("INVITE");
        var transaction = diagInv.invite(userTo + "@" + this.publicAddress, description);
        diagInv.toName = userTo;
        this.fire("onInitCall", userTo, diagInv, transaction);
        return diagInv;
      }
    }, {
      key: "notify",
      value: function notify(userTo, description, type) {
        var diagNotify = this.createDialog("NOTIFY");
        diagNotify.notify(userTo + "@" + this.publicAddress, description, type);
        return diagNotify;
      }
    }, {
      key: "send",
      value: function send(data) {
        this.logger(data, "INFO", "SEND");
        this.fire("onSend", data);
        this.transport.send(data);
      }
    }, {
      key: "bye",
      value: function bye(callId) {
        for (var dialog in this.dialogs) {
          if (callId) {
            if (this.dialogs[dialog].callId === callId && this.dialogs[dialog].method !== "REGISTER" && this.dialogs[dialog].status === this.dialogs[dialog].statusCode.ESTABLISHED) {
              this.dialogs[dialog].bye();
              break;
            }
          } else {
            this.dialogs[dialog].bye();
          }
        }
      }
    }]);

    return SIP;
  }(stage.Service);

  stage.io.protocols.sip = SIP;
  return SIP;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js-exposed")))

/***/ }),

/***/ "./src/io/realtime/realtime.es6":
/*!**************************************!*\
  !*** ./src/io/realtime/realtime.es6 ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

module.exports = function (stage) {
  'use strict';

  var defaultSettings = {};
  var settingsSyslog = {
    moduleName: "REALTIME",
    defaultSeverity: "INFO"
  };

  var send = function send(data) {
    this.protocol.send(data);
  };

  var realtime =
  /*#__PURE__*/
  function () {
    function realtime(urlServer, settings) {
      _classCallCheck(this, realtime);

      if (!urlServer) {
        throw new Error("realtime url server is not defined");
      }

      this.settings = stage.extend({}, defaultSettings, settings);
      this.notificationCenter = stage.notificationsCenter.create(this.settings, this);
      this.syslog = new stage.syslog(settingsSyslog);
      this.url = stage.io.urlToOject(urlServer); //this.crossDomain =  ! stage.io.isSameOrigin(this.url.href);

      this.protocol = new stage.io.protocols.bayeux(this.url);
      this.services = null;
      this.subscribedService = {};
      this.nbSubscribed = 0;
      this.connected = false;
      this.publicAddress = null;
      this.domain = null;
      /*
       *	EVENT REALTIME
       */

      this.notificationCenter.listen(this, "onAuthorized", function () {
        this.protocol.handshake(this.url.href);
      });
      /*
       *	EVENTS PROTOCOL BAYEUX
       */

      this.protocol.notificationCenter.listen(this, "onMessage", this.onMessage);
      this.protocol.notificationCenter.listen(this, "onHandshake", function (message, socket) {
        if (message.ext && message.ext.address) {
          var addr = JSON.parse(message.ext.address);
          this.publicAddress = addr.remoteAddress;
          this.domain = addr.host;
        }

        this.notificationCenter.fire("onHandshake", message, socket, this);
      });
      this.protocol.notificationCenter.listen(this, "onConnect", function (message) {
        this.services = message.data;
        this.connected = true;

        if (message.ext && message.ext.address) {
          var addr = JSON.parse(message.ext.address);
          this.publicAddress = addr.remoteAddress;
          this.domain = addr.host;
        }

        this.notificationCenter.fire("onConnect", message, this);
      });
      this.protocol.notificationCenter.listen(this, "onDisconnect", function (message) {
        this.services = message.data;
        this.connected = false;
        this.notificationCenter.fire("onDisconnect", message, this);
      });
      this.protocol.notificationCenter.listen(this, "reConnect", function (bayeux) {
        var _this = this;

        setTimeout(function () {
          _this.start();
        }, 60000);
      });
      this.protocol.notificationCenter.listen(this, "onSubscribe", function (message) {
        var service = message.subscription.split("/")[2];
        this.subscribedService[service] = message;
        this.nbSubscribed++;
        this.notificationCenter.fire("onSubscribe", service, message, this);
      });
      this.protocol.notificationCenter.listen(this, "onUnsubscribe", function (message) {
        var service = message.subscription.split("/")[2];
        delete this.subscribedService[service];
        this.nbSubscribed--;
        this.notificationCenter.fire("onUnSubscribe", service, message, this);
      });
      this.protocol.notificationCenter.listen(this, "onError", function (code, arg, message) {
        this.notificationCenter.fire("onError", code, arg, message);
      });
      this.protocol.notificationCenter.listen(this, "onClose", function (message) {
        this.connected = false;
        this.notificationCenter.fire("onClose", message);

        for (var service in this.subscribedService) {
          //this.unSubscribe(service);
          delete this.subscribedService[service];
        }
      }); //this.start();
    }

    _createClass(realtime, [{
      key: "listen",
      value: function listen() {
        return this.notificationCenter.listen.apply(this.notificationCenter, arguments);
      }
    }, {
      key: "unListen",
      value: function unListen() {
        return this.notificationCenter.unListen.apply(this.notificationCenter, arguments);
      }
    }, {
      key: "start",
      value: function start() {
        var _this2 = this;

        if (this.connected) {
          //throw new Error("connection already started");
          this.notificationCenter.fire("onError", 500, this, "connection already started");
          return false;
        }

        var statusCode = {
          401: function _(request, type, message) {
            var auth = request.getResponseHeader("WWW-Authenticate");
            var res = request.responseText;
            var obj = {
              "WWW-Authenticate": request.getResponseHeader("WWW-Authenticate"),
              body: request.responseText
            };
            _this2.authenticate = new stage.io.authentication.authenticate(_this2.url, obj, {
              ajax: true,
              onSuccess: function onSuccess(data, type, xhr) {
                _this2.notificationCenter.fire('onAuthorized', data, type, xhr);
              },
              onError: function onError(obj, type, message) {
                var res = stage.io.getHeaderJSON(obj);

                if (res) {
                  _this2.notificationCenter.fire('onError', 401, obj, res);
                } else {
                  _this2.notificationCenter.fire('onError', 401, obj, message);
                }
              }
            });

            _this2.notificationCenter.fire('onUnauthorized', _this2.authenticate, _this2);
          },
          404: function _(obj, type, message) {
            // '404 - realtimeD server not available'
            _this2.notificationCenter.fire('onError', 404, obj, message);
          },
          503: function _(obj, type, message) {
            //  '503 - Service Unavailable'
            _this2.notificationCenter.fire('onError', 503, obj, message);
          }
        };
        return $.ajax({
          method: 'GET',
          cache: false,
          url: this.url.href,
          statusCode: statusCode,
          success: function success(data, type, xhr) {
            _this2.notificationCenter.fire('onAuthorized', data, type, xhr);
          },
          error: function error(obj, type, message) {
            if (obj.status in statusCode) {
              return;
            }

            _this2.notificationCenter.fire('onError', obj.status, obj, message);
          }
        });
      }
    }, {
      key: "subscribe",
      value: function subscribe(name, data) {
        if (!this.connected) {
          this.notificationCenter.fire('onError', 500, this, "Not connected");
          return false;
        }

        if (name in this.services) {
          if (name in this.subscribedService) {
            this.notificationCenter.fire('onError', 500, this, "already subscribed");
            return false;
          }

          return send.call(this, this.protocol.subscribe(name, data));
        }

        this.notificationCenter.fire('onError', 500, this, "service : " + name + " not exist");
        return false;
      }
    }, {
      key: "unSubscribe",
      value: function unSubscribe(name, data) {
        if (!this.connected) {
          this.notificationCenter.fire('onError', 500, this, "Not connected");
          return false;
        }

        if (name in this.services) {
          if (name in this.subscribedService) {
            var clientId = this.subscribedService[name].clientId;
            return send.call(this, this.protocol.unSubscribe(name, clientId, data));
          } else {
            this.notificationCenter.fire('onError', 500, this, "service : " + name + " not subcribed");
            return false;
          }
        }

        this.notificationCenter.fire('onError', 404, this, "service : " + name + " not exist");
        return false;
      }
    }, {
      key: "sendMessage",
      value: function sendMessage(service, data) {
        if (!this.connected) {
          this.notificationCenter.fire('onError', 500, this, "Not connected");
          return false;
        }

        if (service in this.services) {
          if (service in this.subscribedService) {
            var clientId = this.subscribedService[service].clientId;

            try {
              var proto = this.protocol.sendMessage(service, data, clientId);
              send.call(this, proto);
              return JSON.parse(proto).id;
            } catch (e) {
              this.fire("onError", 500, e, e.message);
            }
          } else {
            this.notificationCenter.fire('onError', 500, this, "service : " + service + " not subcribed");
            return false;
          }
        } else {
          this.fire("onError", 404, this, "service :" + service + " not exit");
        }

        return false;
      }
    }, {
      key: "stop",
      value: function stop() {
        if (this.connected) {
          this.protocol.stopReConnect();

          for (var service in this.subscribedService) {
            //this.unSubscribe(service);
            delete this.subscribedService[service];
          }

          return send.call(this, this.protocol.disconnect());
        }

        throw new Error("connection already stoped");
      }
    }, {
      key: "onMessage",
      value: function onMessage(message) {
        if (message.error) {
          if (message.channel) {
            this.notificationCenter.fire("onError", message.error);
          } else {
            this.notificationCenter.fire("onError", message.id, message.successful);
          }
        } else {
          if (message.channel) {
            this.notificationCenter.fire("onMessage", message.channel.split("/")[2], message.data);
          } else {
            this.notificationCenter.fire("onMessage", message.id, message.successful);
          }
        }
      }
    }]);

    return realtime;
  }();

  stage.realtime = realtime;
  return realtime;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js-exposed")))

/***/ }),

/***/ "./src/io/transports/in/longPoll.es6":
/*!*******************************************!*\
  !*** ./src/io/transports/in/longPoll.es6 ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

module.exports = function (stage) {
  var defaultSettings = {
    delay: 0,
    async: false,
    ajax: {
      cache: true,
      dataType: 'json',
      type: 'GET',
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  };

  var pollAction = function pollAction(ajaxConfig) {
    ajaxConfig.data = this.data.get();
    this.transport = jQuery.ajax(ajaxConfig);
  };

  var pollling = function pollling(ajaxConfig) {
    if (this.settings.delay) {
      this.timer = setTimeout(pollAction.bind(this, ajaxConfig), this.settings.delay);
    } else {
      pollAction.call(this, ajaxConfig);
    }
  };
  /*
  	 *
  	 *
  	 */


  var longPoll =
  /*#__PURE__*/
  function (_stage$io$transports$) {
    _inherits(longPoll, _stage$io$transports$);

    function longPoll(url, settings) {
      var _this;

      _classCallCheck(this, longPoll);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(longPoll).call(this, url, settings));
      _this.settings = stage.extend(true, {}, defaultSettings, settings);
      return _this;
    }

    _createClass(longPoll, [{
      key: "start",
      value: function start() {
        var _this2 = this;

        var ajaxConfig = this.buildAjaxSettings();
        this.transport = null;

        ajaxConfig.complete = function (xhr, status) {
          pollling.call(_this2, ajaxConfig);
        };

        pollling.call(this, ajaxConfig);
        return this;
      }
    }, {
      key: "stop",
      value: function stop() {
        this.transport.abort();
        this.transport = null;

        if (this.timer) {
          clearTimeout(this.timer);
        }

        this.connectState = false;
        this.fire('onStop', this);
        return this;
      }
    }]);

    return longPoll;
  }(stage.io.transports.poll);

  stage.io.transports.longPoll = longPoll;
  return longPoll;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js-exposed")))

/***/ }),

/***/ "./src/io/transports/in/poll.es6":
/*!***************************************!*\
  !*** ./src/io/transports/in/poll.es6 ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

module.exports = function (stage) {
  var defaultSettings = {
    delay: 1000,
    async: true,
    ajax: {
      cache: true,
      dataType: 'json',
      type: 'GET',
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  };

  var pollling = function pollling(ajaxConfig) {
    var tokenKey = new Date().getTime();
    ajaxConfig.data = this.data.get();
    var transport = jQuery.ajax(ajaxConfig);
    transport.tokenKey = tokenKey;
    this.transport[tokenKey] = transport;
  };
  /*
  	 *
  	 */


  var httpData =
  /*#__PURE__*/
  function () {
    function httpData(contentType, method) {
      _classCallCheck(this, httpData);

      this.reset();

      if (contentType) {
        this.contentType = contentType;
      }

      if (method) {
        this.method = method;
      }
    }

    _createClass(httpData, [{
      key: "add",
      value: function add(data, permanent) {
        this[permanent ? "permanent" : "transient"] = data;
      }
    }, {
      key: "get",
      value: function get() {
        var data = this.transient ? this.transient : this.permanent;
        this.transient = ''; //return this.contentType.search('json') >= 0 && typeof(data) == 'object' && this.method.toUpperCase() != 'GET' ? JSON.stringify(data) : data;

        switch (this.contentType.split(';')[0].replace(/ /g, '')) {
          case 'application/json':
          case 'text/json':
            if (this.method.toUpperCase() != 'GET' && _typeof(data) == 'object') {
              data = JSON.stringify(data);
            }

            break;
        }

        return data;
      }
    }, {
      key: "reset",
      value: function reset() {
        this.contentType = '';
        this.method = 'GET';
        this.permanent = '';
        this.transient = '';
      }
    }]);

    return httpData;
  }();
  /*
   *	EVENT :
   *		onStart
   *		onStop
   *		onMessage
   *		onError 
   */


  var poll =
  /*#__PURE__*/
  function (_stage$io$transport) {
    _inherits(poll, _stage$io$transport);

    function poll(url, settings) {
      var _this;

      _classCallCheck(this, poll);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(poll).call(this, url, settings));
      _this.settings = jQuery.extend(true, {}, defaultSettings, settings);
      _this.data = new httpData(_this.settings.ajax.contentType, _this.settings.ajax.type);
      _this.connectState = false;
      return _this;
    }

    _createClass(poll, [{
      key: "buildAjaxSettings",
      value: function buildAjaxSettings() {
        var settings = jQuery.extend(true, {}, this.settings.ajax, {
          url: this.url.href,
          crossDomain: this.crossDomain,
          beforeSend: function (xhr) {
            if (!this.connectState) {
              this.fire.call(this, "onStart", this);
              this.connectState = true;
            }
          }.bind(this),
          success: function (data, state, xhr) {
            this.fire("onMessage", data, this, xhr);
          }.bind(this),
          error: function (xhr, status, error) {
            switch (status) {
              case 'abort':
                this.fire("onAbort", error, this, xhr);
                break;

              case 'timeout':
                this.fire("onTimeout", error, this, xhr);
                break;

              default:
                this.fire("onError", error, this, xhr);
            }
          }.bind(this)
        });
        return settings;
      }
    }, {
      key: "start",
      value: function start() {
        var ajaxConfig = this.buildAjaxSettings();
        this.transport = {};

        ajaxConfig.complete = function (xhr, status) {
          if (this.transport[xhr.tokenKey]) delete this.transport[xhr.tokenKey];
        }.bind(this);

        pollling.call(this, ajaxConfig);
        this.idInterval = setInterval(pollling.bind(this, ajaxConfig), this.settings.delay);
        return this;
      }
    }, {
      key: "setData",
      value: function setData(data, permanent) {
        this.data.add(data, permanent);
        return this;
      }
    }, {
      key: "stop",
      value: function stop() {
        if (Object.keys(this.transport).length > 0) {
          for (var tokenKey in this.transport) {
            this.transport[tokenKey].abort();
            delete this.transport[tokenKey];
          }
        }

        if (this.idInterval) {
          clearInterval(this.idInterval);
          this.idInterval = null;
        }

        this.connectState = false;
        this.fire('onStop', this);
        return this;
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.close();
        return this;
      }
    }]);

    return poll;
  }(stage.io.transport);

  stage.io.transports.poll = poll;
  return poll;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js-exposed")))

/***/ }),

/***/ "./src/io/transports/socket.es6":
/*!**************************************!*\
  !*** ./src/io/transports/socket.es6 ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

module.exports = function (stage) {
  var defaultSettings = {
    type: "websocket" //   websocket | poll | longPoll

  };

  var bestTransport = function bestTransport() {};

  var socket =
  /*#__PURE__*/
  function (_stage$notificationsC) {
    _inherits(socket, _stage$notificationsC);

    function socket(url, localSettings) {
      var _this;

      _classCallCheck(this, socket);

      var settings = stage.extend({}, defaultSettings, localSettings);
      _this = _possibleConstructorReturn(this, _getPrototypeOf(socket).call(this, settings));
      _this.settings = settings;

      switch (_this.settings.type) {
        case "websocket":
          _this.socket = stage.io.transports.websocket;
          break;

        case "poll":
          _this.socket = stage.io.transports.ajax;
          break;

        case "longPoll":
          _this.socket = stage.io.transports.ajax;
          break;
      }

      _this.listen(_assertThisInitialized(_assertThisInitialized(_this)), "onConnect");

      _this.listen(_assertThisInitialized(_assertThisInitialized(_this)), "onClose");

      _this.listen(_assertThisInitialized(_assertThisInitialized(_this)), "onError");

      _this.listen(_assertThisInitialized(_assertThisInitialized(_this)), "onMessage");

      _this.listen(_assertThisInitialized(_assertThisInitialized(_this)), "onTimeout");

      return _this;
    }

    _createClass(socket, [{
      key: "write",
      value: function write(settings) {
        this.transport.send();
      }
    }, {
      key: "close",
      value: function close(settings) {
        this.transport.close();
      }
    }, {
      key: "connect",
      value: function connect(url, settings) {
        this.transport = new this.socket(url, settings);
        this.transport.onmessage = this.listen(this, "onMessage");
      }
    }, {
      key: "destroy",
      value: function destroy(settings) {
        this.transport = null;
        this.clearNotifications();
      }
    }]);

    return socket;
  }(stage.notificationsCenter.notification);

  stage.io.socket = socket;
  return socket;
};

/***/ }),

/***/ "./src/io/transports/websockets/websocket.es6":
/*!****************************************************!*\
  !*** ./src/io/transports/websockets/websocket.es6 ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

module.exports = function (stage) {
  /*
   *
   */
  var websocket =
  /*#__PURE__*/
  function (_stage$io$transport) {
    _inherits(websocket, _stage$io$transport);

    function websocket(url, settings) {
      var _this;

      _classCallCheck(this, websocket);

      if (url) {
        _this = _possibleConstructorReturn(this, _getPrototypeOf(websocket).call(this, url, settings));

        _this.connect(url, settings);
      } else {
        _this = _possibleConstructorReturn(this, _getPrototypeOf(websocket).call(this));
        _this.socket = null;
      }

      return _possibleConstructorReturn(_this);
    }

    _createClass(websocket, [{
      key: "connect",
      value: function connect(url, settings) {
        try {
          this.socket = new WebSocket(url, settings.protocol);
        } catch (e) {
          this.fire("onError", e);
          throw e;
        }

        this.socket.onmessage = this.listen(this, "onMessage");
        this.socket.onerror = this.listen(this, "onError");
        this.socket.onopen = this.listen(this, "onConnect");
        this.socket.onclose = this.listen(this, "onClose");
        return this.socket;
      }
    }, {
      key: "close",
      value: function close(url, settings) {
        this.socket.close();
      }
    }, {
      key: "send",
      value: function send(data) {
        this.socket.send(data);
      }
    }, {
      key: "destroy",
      value: function destroy(data) {
        delete this.socket;
        this.socket = null;
      }
    }]);

    return websocket;
  }(stage.io.transport);

  stage.io.transports.websocket = websocket;
  return websocket;
};

/***/ }),

/***/ "./src/kernel/appKernel.es6":
/*!**********************************!*\
  !*** ./src/kernel/appKernel.es6 ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

module.exports = function (stage) {
  'use strict';

  var appKernel =
  /*#__PURE__*/
  function (_stage$kernel) {
    _inherits(appKernel, _stage$kernel);

    function appKernel(url, environnement, settings) {
      var _this;

      _classCallCheck(this, appKernel);

      switch (arguments.length) {
        case 0:
          url = null;
          environnement = "prod";
          settings = {};
          break;

        case 1:
          environnement = url;
          settings = {};
          break;

        case 2:
          settings = environnement;
          environnement = url;
          url = null;
          break;
      }

      _this = _possibleConstructorReturn(this, _getPrototypeOf(appKernel).call(this, environnement, settings));

      if (url) {
        _this.loadModule(url, {
          async: false
        });
      } else {
        _this.fire("onBoot", _assertThisInitialized(_assertThisInitialized(_this)));
      }

      return _this;
    }

    return appKernel;
  }(stage.kernel);

  stage.appKernel = appKernel;
  return appKernel;
};

/***/ }),

/***/ "./src/kernel/autoload.es6":
/*!*********************************!*\
  !*** ./src/kernel/autoload.es6 ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($, jQuery) {function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var shortId = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");

module.exports = function (stage) {
  'use strict';

  var generateId = function generateId() {
    return shortId.generate();
  };

  var loader = function () {
    var AJAX = {
      css: {
        mineType: "text/css",
        tag: "style",
        media: "screen",
        type: "stylesheet",
        position: "HEAD"
      },
      js: {
        mineType: "text/javascript",
        tag: "script",
        position: "BODY"
      }
    };
    var SCRIPT = {
      css: {
        mineType: "text/css",
        tag: "link",
        media: "screen",
        type: "stylesheet",
        position: "HEAD"
      },
      js: {
        mineType: "text/javascript",
        tag: "script",
        position: "BODY"
      }
    };

    var insert = function insert(position, script) {
      switch (position) {
        case "HEAD":
          var head = document.getElementsByTagName('head')[0];
          head.appendChild(script);
          break;

        case "BODY":
          var body = document.getElementsByTagName('body')[0];
          body.appendChild(script);
          break;
      }
    };

    return function (src, tag, id, transport, callback) {
      var _this = this;

      //if (tag == "js") transport = "ajax";
      //if (tag == "css") transport = "ajax";
      switch (tag) {
        case "js":
          /*var def = AJAX[tag];
          var script = document.createElement(def.tag);
          script.setAttribute('type', def.mineType);
          script.setAttribute('id', id + '_'+tag);
          if ( tag === "css" ){
          	script.setAttribute('media', def.media);
          }
          $.ajax(src, {
          	async:false,
          	//cache:true,
          	dataType:"text",
          	success:function(data, status, xhr){
          		this.cache[id] = script ;
          		insert(def.position, script);
          		$(script).text(data);
          		this.logger("LOAD FILE :" + src,"DEBUG");
          		callback(null, xhr);
          	}.bind(this),
          	error:function(xhr, status, message){
          		this.logger(src+" :" +message,"ERROR");
          		callback(message, xhr);
          	}.bind(this)
          });*/
          return $.ajax({
            url: src,
            async: false,
            dataType: "script",
            success: function success(data, status, xhr) {
              //this.logger("LOAD FILE :" + src,"DEBUG");
              callback(null, xhr);
            },
            error: function error(xhr, status, message) {
              _this.logger(src + " :" + message, "ERROR");

              callback(message, xhr);
            }
          });
          break;

        case "css":
          var def = SCRIPT[tag];
          var script = document.createElement(def.tag);
          script.setAttribute('type', def.mineType);
          script.setAttribute('id', id + '_' + tag);

          if (tag === "css") {
            script.setAttribute('media', def.media);
            script.href = src;
            /*+ '?time=' + id;*/

            script.rel = def.type;
            script.async = false;
          }

          if (tag === "js") {
            script.src = src;
            /*+ '?time=' + id;*/

            script.async = false;
          }

          script.onload = function () {
            _this.cache[id] = script;

            _this.logger("LOAD FILE :" + src, "DEBUG");

            callback(null, script);
          };

          script.onerror = function (error) {
            _this.logger(src, "ERROR");

            callback(error, script);
          };

          insert(def.position, script);
          break;

        default:
          this.logger(new Error("autoload  type transport error "), "ERROR");
          return null;
      }

      return script;
    };
  }();
  /*
  	 *
  	 * CLASS AUTOLOAD
  	 *
  	 */


  var defaultSetting = {
    transport: "script",
    prefix: null
  };
  var regType = /(.*)\.(js)$|(.*)\.(css)$/;

  var autoload =
  /*#__PURE__*/
  function () {
    function autoload(kernel, settings) {
      _classCallCheck(this, autoload);

      this.settings = jQuery.extend({}, defaultSetting, settings);
      this.cache = {};
      this.prefix = this.settings.prefix;
      this.syslog = kernel.syslog || null;
      this.transport = this.settings.transport;
      this.logger("INITIALIZE AUTOLOAD SERVICE", "DEBUG");
    }

    _createClass(autoload, [{
      key: "load",
      value: function load(file, callback) {
        var id = generateId();
        var res = regType.exec(file);

        if (!res) {
          this.logger("autoload error type file  ", "ERROR");
          return null;
        }

        var script = loader.call(this, file, res[2] || res[4], id, this.transport, callback);
        return id;
      }
    }, {
      key: "logger",
      value: function logger(pci, severity, msgid, msg) {
        if (this.syslog) {
          if (!msgid) msgid = "AUTOLOADER  ";
          return this.syslog.logger(pci, severity, msgid, msg);
        } else {
          console.log(pci);
        }
      }
    }, {
      key: "unLoad",
      value: function unLoad(id, callback) {
        if (id in this.cache) {
          var tag = this.cache[id];
          tag.parentNode.removeChild(tag);
          delete this.cache[id];
          return callback(id);
        } else {
          this.logger("Autoload unLoad no tag find :" + id, "ERROR");
        }
      }
    }]);

    return autoload;
  }();

  stage.autoload = autoload;
  return autoload;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js-exposed"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js-exposed")))

/***/ }),

/***/ "./src/kernel/container.es6":
/*!**********************************!*\
  !*** ./src/kernel/container.es6 ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var shortId = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");

module.exports = function (stage) {
  'use strict';

  var ISDefined = function ISDefined(ele) {
    if (ele !== null && ele !== undefined) {
      return true;
    }

    return false;
  };

  var generateId = function generateId() {
    return shortId.generate();
  };

  var parseParameterString = function parseParameterString(str, value) {
    var ns = null;

    switch (stage.typeOf(str)) {
      case "string":
        return parseParameterString.call(this, str.split("."), value);

      case "array":
        switch (str.length) {
          case 1:
            ns = Array.prototype.shift.call(str);

            if (!this[ns]) {
              this[ns] = value;
            } else {
              if (ISDefined(value)) {
                this[ns] = value;
              } else {
                return this[ns];
              }
            }

            return value;

          default:
            ns = Array.prototype.shift.call(str);

            if (!this[ns] && ISDefined(value)) {
              this[ns] = {};
            }

            return parseParameterString.call(this[ns], str, value);
        }

        break;

      default:
        return false;
    }
  };
  /*
  	 *
  	 *	CONTAINER CLASS
  	 *
  	 */


  var Container =
  /*#__PURE__*/
  function () {
    function Container(services, parameters) {
      _classCallCheck(this, Container);

      this.protoService = function () {};

      this.protoParameters = function () {};

      this.scope = {};
      this.services = new this.protoService();

      if (services && _typeof(services) === "object") {
        for (var service in services) {
          this.set(service, services[service]);
        }
      }

      this.parameters = new this.protoParameters();

      if (parameters && _typeof(parameters) === "object") {
        for (var parameter in parameters) {
          this.set(parameter, parameters[parameter]);
        }
      }
    }

    _createClass(Container, [{
      key: "logger",
      value: function logger(pci, severity, msgid, msg) {
        var syslog = this.get("syslog");

        if (!msgid) {
          msgid = "CONTAINER SERVICES ";
        }

        return syslog.logger(pci, severity, msgid, msg);
      }
    }, {
      key: "set",
      value: function set(name, object) {
        return this.protoService.prototype[name] = object;
      }
    }, {
      key: "get",
      value: function get(name) {
        if (name in this.services) {
          return this.services[name];
        }

        return null; //this.logger("GET : " + name+" don't exist", "WARNING");	
      }
    }, {
      key: "has",
      value: function has(name) {
        return this.services[name];
      }
    }, {
      key: "addScope",
      value: function addScope(name) {
        if (!this.scope[name]) {
          return this.scope[name] = {};
        }

        return this.scope[name];
      }
    }, {
      key: "enterScope",
      value: function enterScope(name) {
        var sc = new Scope(name, this);
        this.scope[name][sc.id] = sc;
        return sc;
      }
    }, {
      key: "enterScopeExtended",
      value: function enterScopeExtended(name) {
        var sc = new ExtendedScope(name, this);
        this.scope[name][sc.id] = sc;
        return sc;
      }
    }, {
      key: "leaveScope",
      value: function leaveScope(scope) {
        if (this.scope[scope.name]) {
          var sc = this.scope[scope.name][scope.id];

          if (sc) {
            sc.clean(); //console.log("pass leaveScope "+ scope.id)

            delete this.scope[scope.name][scope.id];
            sc = null;
          } //console.log(this.scope)

        }
      }
    }, {
      key: "removeScope",
      value: function removeScope(name) {
        if (this.scope[name]) {
          for (var scope in this.scope[name]) {
            this.leaveScope(this.scope[name][scope]);
          }

          delete this.scope[name];
        }
      }
    }, {
      key: "setParameters",
      value: function setParameters(name, str) {
        if (typeof name !== "string") {
          this.logger(new Error("setParameters : container parameter name must be a string"));
          return false;
        }

        if (!ISDefined(str)) {
          this.logger(new Error("setParameters : " + name + " container parameter value must be define"));
          return false;
        }

        if (parseParameterString.call(this.protoParameters.prototype, name, str) === str) {
          return str;
        } else {
          this.logger(new Error("container parameter " + name + " parse error"));
          return false;
        }
      }
    }, {
      key: "getParameters",
      value: function getParameters(name) {
        if (typeof name !== "string") {
          this.logger(new Error("container parameter name must be a string"));
          return false;
        } //return parseParameterString.call(this.protoParameters.prototype, name, null);  


        return parseParameterString.call(this.parameters, name, null);
      }
    }]);

    return Container;
  }();
  /*
  	 *
  	 *	SCOPE CLASS
  	 *
  	 */


  var Scope =
  /*#__PURE__*/
  function (_Container) {
    _inherits(Scope, _Container);

    function Scope(name, parent) {
      var _this;

      _classCallCheck(this, Scope);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Scope).call(this));
      _this.name = name;
      _this.parent = parent;
      _this.services = new parent.protoService();
      _this.parameters = new parent.protoParameters();
      _this.scope = parent.scope;
      _this.id = generateId();
      return _this;
    }

    _createClass(Scope, [{
      key: "set",
      value: function set(name, obj) {
        this.services[name] = obj;
        return _get(_getPrototypeOf(Scope.prototype), "set", this).call(this, name, obj);
      }
    }, {
      key: "clean",
      value: function clean() {
        this.services = null;
        delete this.services;
        this.parameters = null;
        delete this.parameters;
      }
    }, {
      key: "setParameters",
      value: function setParameters(name, str) {
        if (parseParameterString.call(this.parameters, name, str) === str) {
          return _get(_getPrototypeOf(Scope.prototype), "setParameters", this).call(this, name, str);
        } else {
          this.logger(new Error("container parameter " + name + " parse error"));
          return false;
        }
      }
    }]);

    return Scope;
  }(Container);
  /*
  	 *
  	 *	ExtendedScope CLASS
  	 *
  	 */


  var ExtendedScope =
  /*#__PURE__*/
  function (_Container2) {
    _inherits(ExtendedScope, _Container2);

    function ExtendedScope(name, parent) {
      var _this2;

      _classCallCheck(this, ExtendedScope);

      _this2 = _possibleConstructorReturn(this, _getPrototypeOf(ExtendedScope).call(this));
      _this2.name = name;
      _this2.parent = parent;
      _this2.services = new parent.protoService();
      _this2.parameters = new parent.protoParameters();
      _this2.scope = parent.scope;
      _this2.id = generateId();

      _this2.protoService = function () {};

      _this2.protoService.prototype = stage.extend({}, _this2.parent.protoService.prototype);

      _this2.protoParameters = function () {};

      _this2.protoParameters.prototype = stage.extend({}, _this2.parent.protoParameters.prototype);
      return _this2;
    }

    _createClass(ExtendedScope, [{
      key: "clean",
      value: function clean() {
        this.services = null;
        delete this.services;
        this.parameters = null;
        delete this.parameters;
        this.protoService = null;
        this.protoParameters = null;
      }
    }, {
      key: "set",
      value: function set(name, obj) {
        this.services[name] = obj;
        return _get(_getPrototypeOf(ExtendedScope.prototype), "set", this).call(this, name, obj);
      }
    }, {
      key: "setParameters",
      value: function setParameters(name, str) {
        if (parseParameterString.call(this.parameters, name, str) === str) {
          return _get(_getPrototypeOf(ExtendedScope.prototype), "setParameters", this).call(this, name, str);
        } else {
          this.logger(new Error("container parameter " + name + " parse error"));
          return false;
        }
      }
    }]);

    return ExtendedScope;
  }(Container);

  stage.Container = Container;
  return Container;
};

/***/ }),

/***/ "./src/kernel/controller.es6":
/*!***********************************!*\
  !*** ./src/kernel/controller.es6 ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery, $) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

module.exports = function (stage) {
  'use strict';
  /*
  	 *
  	 *	CLASS CONTROLLER
  	 *
  	 */

  var tabFxEvent = ["stage-click", "stage-dblclick", "stage-focus", "stage-blur", "stage-mouseover", "stage-mouseout", "stage-mouseenter", "stage-mouseleave", "stage-change"];

  var Controller =
  /*#__PURE__*/
  function (_stage$Service) {
    _inherits(Controller, _stage$Service);

    function Controller(name, container, module) {
      var _this;

      _classCallCheck(this, Controller);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Controller).call(this, name, container, container.get("notificationsCenter")));
      _this.module = module;
      _this.i18n = _this.kernel.i18n;
      _this.router = _this.kernel.router;
      return _this;
    }

    _createClass(Controller, [{
      key: "redirect",
      value: function redirect(url) {
        return this.router.redirect.apply(this.router, arguments);
      }
      /*
      	*
      	*
      	*/

    }, {
      key: "forward",
      value: function forward(pattern, args) {
        return this.router.forward(pattern, args);
      }
      /*
      	*
      	*
      	*/

    }, {
      key: "generateUrl",
      value: function generateUrl(name, variables, absolute) {
        if (absolute === true) {
          var url = this.router.url().split("#");
          absolute = this.router.url[0];
        }

        return this.router.generateUrl.apply(this.router, arguments);
      }
    }, {
      key: "evalInContext",
      value: function evalInContext(js, context) {
        var func = function (context) {
          var $controller = context;
          return function (js) {
            "use strict";

            return eval(js);
          };
        }(this);

        try {
          return func.call(context || this, jQuery.trim(js));
        } catch (e) {
          this.logger("DOM PARSER TWIG ERROR " + e, "ERROR");
        }
      }
    }, {
      key: "domParser",
      value: function domParser(domElement) {
        var _this2 = this;

        domElement.find('[' + tabFxEvent.join('],[') + ']').each(function (index, ele) {
          var attributes = ele.attributes;
          var jElement = $(ele);
          var ctrl = jElement.closest('[stage-ctrl]');
          var scope = null;

          if (ctrl.length) {
            var pattern = $(ctrl).attr("stage-ctrl");

            try {
              scope = _this2.router.resolvePattern(pattern).controller;
            } catch (e) {
              _this2.logger("DOM PARSER ERROR : " + e, "ERROR");

              return;
            }
          } else {
            scope = _this2;
          }

          for (var i = 0; i < attributes.length; i++) {
            var attribute = attributes[i];

            if (tabFxEvent.indexOf(attribute.name) > -1) {
              var ele = function () {
                var content = attribute.value;
                jElement.on(attribute.name.replace('stage-', ''), function () {
                  scope.evalInContext(content, this);
                });
              }();
            }
          }
        });
      }
      /*
      	*
      	*
      	*/

    }, {
      key: "render",
      value: function render(element, partial, type) {
        var ele = $(element);

        try {
          switch (type) {
            case "append":
              ele.append(partial);
              break;

            case "prepend":
              ele.prepend(partial);
              break;

            default:
              ele.empty();
              ele.html(partial);
          }

          return this.domParser(ele);
        } catch (e) {
          this.logger("DOM PARSER TWIG ERROR : " + e, "ERROR");
        }
      }
    }, {
      key: "renderPartial",
      value: function renderPartial(pattern, obj) {
        try {
          var template = this.module.getTemplatePattern(pattern);
          return template.render(obj);
        } catch (e) {
          this.logger(e, "ERROR");
        }
      }
    }]);

    return Controller;
  }(stage.Service);

  stage.Controller = Controller;
  return Controller;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js-exposed"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js-exposed")))

/***/ }),

/***/ "./src/kernel/kernel.es6":
/*!*******************************!*\
  !*** ./src/kernel/kernel.es6 ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var Twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js");

module.exports = function (stage) {
  'use strict';

  var settingsSyslog = {
    //rateLimit:100,
    //burstLimit:10,
    moduleName: "KERNEL",
    defaultSeverity: "INFO"
  };
  var defaultSettings = {
    debug: false,
    router: true,
    i18n: true,
    location: {
      html5Mode: false,
      hashPrefix: "/"
    }
  };
  var defaultEnvEnable = {
    dev: true,
    development: true,
    prod: true,
    production: true
  };
  /*
  	 *	OVERRIDE TWIG IMPORT TEMPLATE
  	 */

  var loadRemoteTwig = function loadRemoteTwig(Twig, location, params, callback, error_callback) {
    var _this = this;

    var id = params.id,
        method = params.method,
        async = params.async,
        precompiled = params.precompiled,
        template = null; // Default to async

    if (async === undefined) async = true; // Default to the URL so the template is cached.

    if (id === undefined) {
      id = location;
    }

    params.id = id; // Check for existing template

    if (Twig.cache && Twig.Templates.registry.hasOwnProperty(id)) {
      // A template is already saved with the given id.
      if (callback) {
        callback(Twig.Templates.registry[id]);
      }

      return Twig.Templates.registry[id];
    } //console.log(params.async)


    $.ajax({
      url: location,
      async: async,
      success: function success(mydata, status, xhr) {
        var moduleName = _this.getModuleName(location);

        if (precompiled === true) {
          mydata = JSON.parse(mydata);
        }

        params.url = location;
        params.data = mydata;
        template = new Twig.Template(params);

        if (_this.modules[moduleName]) {
          var module = _this.modules[moduleName];
          var name = module.getTemplateName(location);
          module.registerTemplate(name, template, "template");
        }

        if (callback) {
          callback(template);
        }
      },
      error: function error(xrh, status, message) {
        error_callback(xrh, status, message);
      }
    });

    if (async === false) {
      return template;
    } else {
      // placeholder for now, should eventually return a deferred object.
      return true;
    }
  };
  /*
  *
  *	KERNEL CLASS	
  */


  var Kernel =
  /*#__PURE__*/
  function (_stage$Service) {
    _inherits(Kernel, _stage$Service);

    function Kernel(environment, settings) {
      var _this2;

      _classCallCheck(this, Kernel);

      _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Kernel).call(this, "KERNEL", null, null, {
        syslog: settingsSyslog
      }));

      _this2.container.set("kernel", _assertThisInitialized(_assertThisInitialized(_this2)));

      _this2.modules = {};
      _this2.settings = stage.extend(true, {}, defaultSettings, settings);

      if (environment in defaultEnvEnable) {
        switch (environment) {
          case "dev":
          case "development":
            _this2.environment = "dev";
            break;

          case "prod":
          case "production":
            _this2.environment = "prod";
            break;
        }
      } else {
        _this2.logger("Bad Variable environment :" + environment, "WARNING");

        _this2.environment = "prod";
      }

      _this2.debug = _this2.settings.debug;
      _this2.booted = false;
      _this2.isDomReady = false;
      _this2.uiContainer = null; // syslog

      _this2.initializeLog(settingsSyslog); // autoloader


      _this2.autoloader = new stage.autoload(_assertThisInitialized(_assertThisInitialized(_this2)), {
        transport: "script"
      });

      _this2.container.set("autoloader", _this2.autoloader); // Router


      _this2.initRouter(); // template


      _this2.initTwig(); // translation i18n


      _this2.initTranslation(); // Service REST


      _this2.initRest(); // EVENT NATIF


      $(document).ready(_this2.listen(_assertThisInitialized(_assertThisInitialized(_this2)), "onDomReady", _this2.domReady));
      $(window).resize(_this2.listen(_assertThisInitialized(_assertThisInitialized(_this2)), "onResize"));
      $(window).on("unload", _this2.unLoad.bind(_assertThisInitialized(_assertThisInitialized(_this2))));
      $(window).on("load", _this2.onLoad.bind(_assertThisInitialized(_assertThisInitialized(_this2)))); //BOOT	

      _this2.listen(_assertThisInitialized(_assertThisInitialized(_this2)), "onBoot", _this2.boot); //READY


      _this2.listen(_assertThisInitialized(_assertThisInitialized(_this2)), "onReady", _this2.ready);

      _this2.notificationsCenter.settingsToListen(_this2.settings, _assertThisInitialized(_assertThisInitialized(_this2)));

      return _this2;
    }

    _createClass(Kernel, [{
      key: "initRouter",
      value: function initRouter() {
        if (this.settings.router) {
          // location
          this.initLocation();
          this.router = new stage.router(this, this.container);
          this.container.set("router", this.router);
        }
      }
    }, {
      key: "initLocation",
      value: function initLocation() {
        this.locationService = new stage.location(this, this.settings.location);
        this.container.set("location", this.locationService);
      }
    }, {
      key: "initRest",
      value: function initRest() {
        if (stage.Rest) {
          this.restService = new stage.Rest(this.container);
          this.set("rest", this.restService);
        }
      }
    }, {
      key: "initTranslation",
      value: function initTranslation() {
        if (this.settings.i18n) {
          if (!stage.i18n) {
            this.logger("you must load transation i18n services js file !!!!!", "ERROR");
            return;
          }

          this.i18n = new stage.i18n(this, this.container);
          this.container.set("i18n", this.i18n);
        }
      }
    }, {
      key: "initTwig",
      value: function initTwig() {
        var _this3 = this;

        this.logger("INITIALIZE TWIG SERVICE", "DEBUG");

        if (this.environment === "dev") {
          Twig.cache = false;
        }

        this.templateEngine = Twig.twig; //extended log error traf

        Twig.extend(function (Twig) {
          Twig.log.error = function (message) {
            _this3.logger(message, "ERROR");
          };
        });
        Twig.extend(function (Twig) {
          Twig.Templates.loadRemote = loadRemoteTwig.bind(_this3, Twig);
        }); //extended FUNCTION

        Twig.extendFunction("controller", function () {
          var pattern = Array.prototype.shift.call(arguments);
          var sp = pattern.split(":");
          var module = this.getModule(sp[0]);

          if (module) {
            var controller = module.getController(sp[1]);

            if (controller) {
              var action = sp[2];

              if (controller[action]) {
                return controller[action].apply(controller, arguments);
              }
            }
          }
        }.bind(this));
        this.container.set("twig", this.templateEngine);
        return this.templateEngine;
      }
    }, {
      key: "domReady",
      value: function domReady() {
        if (!this.booted) return;
        this.logger("domReady", "DEBUG");
        this.fire("onDomLoad", this);
        var element = this.uiContainer ? $(this.uiContainer) : $("body");

        try {
          if (this.modules.app) {
            this.modules.app.initialize(element);
          }

          for (var module in this.modules) {
            if (module === "app") continue;
            this.modules[module].initialize(element);
          }

          this.fire("onReady", this);
          this.isDomReady = true;
        } catch (e) {
          this.logger(e, "ERROR");
        }
      }
    }, {
      key: "onLoad",
      value: function onLoad(event) {
        this.fire("onLoad", this, event);
      }
    }, {
      key: "unLoad",
      value: function unLoad(event) {
        this.fire("onUnLoad", this, event);
      }
    }, {
      key: "getModule",
      value: function getModule(name) {
        return this.modules[name];
      }
    }, {
      key: "initializeLog",
      value: function initializeLog(settings) {
        if (this.environment === "dev") {
          // CRITIC ERROR
          this.syslog.listenWithConditions(this, {
            severity: {
              data: "CRITIC,ERROR"
            }
          }, function (pdu) {
            if (pdu.payload.stack) {
              console.error("SYSLOG " + pdu.severityName + " " + pdu.msgid + " " + new Date(pdu.timeStamp) + " " + pdu.msg + " : " + pdu.payload.stack);
            } else {
              console.error("SYSLOG " + pdu.severityName + " " + pdu.msgid + " " + new Date(pdu.timeStamp) + " " + pdu.msg + " : " + pdu.payload);
            }
            /*if (pdu.typePayload === "Error" ){
            	if (pdu.payload.stack ){
            		console.error( "SYSLOG " + pdu.severityName +" " + pdu.msgid + " "+new Date(pdu.timeStamp) + " " + pdu.msg+" : "+  pdu.payload.stack);
            	}
            	return;
            }
            console.error( "SYSLOG " + pdu.severityName +" " + pdu.msgid + " "+new Date(pdu.timeStamp) + " " + pdu.msg+" : "+  pdu.payload);*/

          }); // INFO DEBUG

          var data;
          this.debug ? data = "INFO,DEBUG" : data = "INFO";
          this.syslog.listenWithConditions(this, {
            severity: {
              data: data
            }
          }, function (pdu) {
            console.info("SYSLOG " + pdu.severityName + " " + pdu.msgid + " " + new Date(pdu.timeStamp) + " " + pdu.msg + " : " + pdu.payload);
          });
          this.syslog.listenWithConditions(this, {
            severity: {
              data: "WARNING"
            }
          }, function (pdu) {
            console.warn("SYSLOG " + pdu.severityName + " " + pdu.msgid + " " + new Date(pdu.timeStamp) + " " + pdu.msg + " : " + pdu.payload);
          });
        }

        return this.syslog;
      }
    }, {
      key: "boot",
      value: function boot() {
        this.booted = true;
      }
    }, {
      key: "ready",
      value: function ready() {//this.fire("onUrlChange", this.router.url() )
      }
    }, {
      key: "loadModule",
      value: function loadModule(url, settings) {
        var _this4 = this;

        var res = stage.io.urlToOject(url);
        var moduleName = res.basename;
        return $.ajax(url, stage.extend({
          cache: false,
          method: "GET",
          //async:false,
          dataType: "xml",
          success: function success(data, status, xhr) {
            try {
              //FIXME try to parse with url
              var res = stage.xml.parseXml(data);
              var moduleName = res.module["@id"];
              var type = res.module["@type"];
              var moduleSrc = res.module["@src"];

              switch (type) {
                case "application/javascript":
                  if (moduleSrc) {
                    if (moduleName in _this4.modules) {
                      _this4.modules[moduleName].initialize();

                      _this4.modules[moduleName].fire("onInitialize", moduleName);

                      _this4.fire("onInitializeModule", moduleName);
                    } else {
                      _this4.autoloader.load(moduleSrc, function (error, transport) {
                        if (error) {
                          _this4.fire("onError", error);

                          throw error;
                        }

                        _this4.registerModule(moduleName, res);

                        if (moduleName === "app") _this4.fire("onBoot", _this4);
                      });
                    }
                  }

                  break;
              }
            } catch (e) {
              _this4.logger(e, "ERROR");

              _this4.fire("onError", e);

              throw e;
            }
          },
          error: function error(xhr, status, message) {
            _this4.fire("onGetConfigError", moduleName);

            _this4.fire("onError", message);
          }
        }, settings));
      }
    }, {
      key: "registerModule",
      value: function registerModule(name, xml) {
        var _this5 = this;

        if (name in stage.modules) {
          var kernelcontext = this;
          var Class = stage.modules[name]; //.herite(stage.Module);

          this.container.addScope(name);
          Class.prototype.name = name;

          try {
            if (this.isDomReady) {
              this.modules[name] = new Class(this, xml, {
                onReady: function onReady() {
                  if (_this5.initialize) {
                    try {
                      _this5.initialize();

                      _this5.fire("onInitialize", name);

                      kernelcontext.fire("onInitializeModule", name);
                    } catch (e) {
                      _this5.logger("INITIALIZE MODULE : " + name + " " + e, "ERRROR");

                      throw e;
                    }
                  }
                }
              });
            } else {
              this.modules[name] = new Class(this, xml);
            }

            this.container.set(name, this.modules[name]);
          } catch (e) {
            this.logger("INSTANCE MODULE : " + name + " " + e, "ERRROR");
            throw e;
          }
        }
      }
    }, {
      key: "getModuleName",
      value: function getModuleName(url) {
        var module = stage.dirname(url);
        var tab = module.split("/");
        return tab[tab.indexOf("Resources") - 1];
      }
    }]);

    return Kernel;
  }(stage.Service);

  stage.kernel = Kernel;
  return Kernel;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js-exposed")))

/***/ }),

/***/ "./src/kernel/locationService.es6":
/*!****************************************!*\
  !*** ./src/kernel/locationService.es6 ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

module.exports = function (stage) {
  'use strict';

  var nativeHistory = !!(window.history && window.history.pushState);
  var PATH_MATCH = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/;
  var DEFAULT_PORTS = {
    'http': 80,
    'https': 443
  };
  /*
  	 *	CLASS BROWSER
  	 *
  	 */

  var changeUrl = function changeUrl(event) {
    var cache = null;
    var location = this.kernel.locationService;
    var url = this.url();

    if (url === this.lastUrl && url === this.location.href && this.lastUrl !== location.initialUrl) {
      //console.log(" changeUrl PASS SAME")
      return;
    }

    if (!event) {
      this.kernel.logger(" FORCE URL CHANGE BROWER EVENT NOT FIRE", "WARNING"); //console.log(location.url())

      var newUrl = location.url();
      this.kernel.notificationsCenter.fire("onUrlChange", newUrl, this.lastHash, url, cache);
      this.lastUrlr = url;
      this.lastHash = newUrl;
      return;
    } //console.log("change URL :" + url +" IINIT "+location.initialUrl)
    //console.log("change LAST URL :" + this.lastUrl)


    var parse = location.parse(url); //console.log(location)

    if (!parse) {
      this.kernel.notificationsCenter.fire("onUrlChange", "", this.lastHash, url, cache);
      this.lastUrl = "";
      this.lastHash = "";
      return;
    }

    var newUrl = location.url();
    this.kernel.notificationsCenter.fire("onUrlChange", newUrl, this.lastHash, url, cache);
    this.lastUrl = url;
    this.lastHash = newUrl;
  };

  var myurl = function myurl(options) {
    if (nativeHistory && options.html5Mode) {
      return function (url, replace, state) {//TODO

        /*if (this.location !== window.location) this.location = window.location;
        if (this.history !== window.History) this.history = window.History;
        	if (url){
        	this.kernel.logger(replace ? "REPLACE URL : " + url : "CHANGE URL : " + url,"WARNING")
        		this.history[replace ? 'replaceState' : 'pushState'](state, '', url);
        }else{
        	return this.location.href.replace(/%27/g,"'");	
        }*/
      };
    } else {
      return function (url, replace, state) {
        if (url) {
          if (this.kernel && this.kernel.get("location")) if (this.location !== window.location) this.location = window.location;
          var same = url === this.lastUrl && url === this.location.href ? true : false;
          if (this.history !== window.history) this.history = window.history;
          this.kernel.logger(replace ? "REPLACE URL : " + url : "CHANGE URL : " + url, "WARNING");

          if (same) {
            if (url === this.kernel.locationService.initialUrl) {
              //FORCE changeUrl 
              changeUrl.call(this);
            }

            return url;
          } //console.log(url)


          if (replace) {
            this.location.replace(url);
            return url;
          }

          return this.location.href = url;
        } else {
          return this.location.href.replace(/%27/g, "'");
        }
      };
    }
  };

  var urlBrowser = null;

  var browser =
  /*#__PURE__*/
  function () {
    function browser(kernel, settings) {
      _classCallCheck(this, browser);

      this.location = window.location;
      this.history = window.History;
      urlBrowser = myurl.call(this, settings);
      this.lastUrl = this.url();
      this.kernel = kernel;
      $(window).bind('hashchange', changeUrl.bind(this)); //if (nativeHistory){
      //	$(window).bind('popstate', changeUrl.bind(this))
      //}
    }

    _createClass(browser, [{
      key: "url",
      value: function url(_url, replace, state) {
        return urlBrowser.call(this, _url, replace, state);
      }
    }]);

    return browser;
  }();
  /*
  	 *	CLASS LOCATION
  	 *
  	 */


  var beginsWith = function beginsWith(begin, whole) {
    if (whole.indexOf(begin) === 0) {
      return whole.substr(begin.length);
    }
  };

  var stripHash = function stripHash(url) {
    var index = url.indexOf('#');
    return index == -1 ? url : url.substr(0, index);
  };

  var Location =
  /*#__PURE__*/
  function (_stage$Service) {
    _inherits(Location, _stage$Service);

    function Location(browser, base, kernel, settings) {
      var _this;

      _classCallCheck(this, Location);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Location).call(this, "LOCATION", kernel.container, kernel.notificationsCenter));
      _this.settings = settings;
      _this.browser = browser;
      _this.replace = false;
      _this.initialUrl = _this.browser.url();
      _this.base = base;
      _this.hashPrefix = "#" + _this.settings.hashPrefix;
      _this.proto = _this.stripFile(_this.base);

      _this.parseAbsoluteUrl(_this.initialUrl);

      _this.parse(_this.initialUrl);

      _this.logger("INITIALIZE LOCATION SERVICE", "DEBUG"); // rewrite hashbang url <> html5 url
      //var abs = this.absUrl();
      //if ( abs != this.initialUrl) {
      //	this.browser.url(abs, true);
      //}


      return _this;
    }

    _createClass(Location, [{
      key: "absUrl",
      value: function absUrl() {
        return this._absUrl;
      }
    }, {
      key: "url",
      value: function url(_url2) {
        if (typeof _url2 === "undefined") return this._url;
        var match = PATH_MATCH.exec(_url2);
        if (match[1]) this.path(decodeURIComponent(match[1]));
        if (match[2] || match[1]) this.search(match[3] || '');
        this.hash(match[5] || '');
      }
    }, {
      key: "protocol",
      value: function protocol() {
        return this._protocol;
      }
    }, {
      key: "host",
      value: function host() {
        return this._host;
      }
    }, {
      key: "port",
      value: function port() {
        return this._port;
      }
    }, {
      key: "path",
      value: function path(_path) {
        if (typeof _path === "undefined") {
          return this._path;
        }

        this._path = _path;

        try {
          this.change();
        } catch (e) {
          this.logger(e, "ERROR");
          throw e;
        }

        return this._path;
      }
    }, {
      key: "search",
      value: function search(_search) {
        if (typeof _search === "undefined") {
          return this._search;
        }

        this._search = _search;

        try {
          this.change();
        } catch (e) {
          this.logger(e, "ERROR");
          throw e;
        }

        return this._search;
      }
    }, {
      key: "hash",
      value: function hash(_hash) {
        if (typeof _hash === "undefined") {
          return this._hash;
        }

        this._hash = _hash;

        try {
          this.change();
        } catch (e) {
          this.logger(e, "ERROR");
          throw e;
        }

        return this._hash;
      }
    }, {
      key: "state",
      value: function state() {}
    }, {
      key: "replace",
      value: function replace(value) {
        if (value) return this.replace = value;
        return this.replace;
      }
    }, {
      key: "encodePath",
      value: function encodePath(path) {
        var segments = path.split('/');
        var i = segments.length;

        while (i--) {
          segments[i] = stage.io.encodeUriSegment(segments[i]);
        }

        return segments.join('/');
      }
    }, {
      key: "stripFile",
      value: function stripFile(url) {
        return url.substr(0, stripHash(url).lastIndexOf('/') + 1);
      } // parsing end URL ex : http://domain.com:port(/path)(?search)(#hash)

    }, {
      key: "parseRelativeUrl",
      value: function parseRelativeUrl(relativeUrl) {
        //console.log("relative :" + relativeUrl)
        var prefixed = relativeUrl.charAt(0) !== '/';

        if (prefixed) {
          relativeUrl = '/' + relativeUrl;
        }

        var resolve = stage.io.urlToOject(relativeUrl); //console.log(resolve)

        this._path = decodeURIComponent(prefixed && resolve.pathname.charAt(0) === '/' ? resolve.pathname.substring(1) : resolve.pathname);
        this._search = stage.io.parseKeyValue(resolve.search);
        this._hash = decodeURIComponent(resolve.hash); // make sure path starts with '/';

        if (typeof this._path !== "undefined" && this._path.charAt(0) != '/') {
          this._path = '/' + this._path;
        } //console.log("PATH:" + this._path)

      } // parsing begin URL ex : (http)://(domain.com):(port)

    }, {
      key: "parseAbsoluteUrl",
      value: function parseAbsoluteUrl(absoluteUrl) {
        var resolve = stage.io.urlToOject(absoluteUrl);
        this._protocol = resolve.protocol.replace(":", "");
        this._host = resolve.hostname;
        this._port = parseInt(resolve.port, 10) || DEFAULT_PORTS[this._protocol] || null;
      }
    }]);

    return Location;
  }(stage.Service);
  /**
  	 * LocationHashbangUrl represents url
  	 * This object is exposed as $location service when developer doesn't opt into html5 mode.
  	 * It also serves as the base class for html5 mode fallback on legacy browsers.
  	 *
  	 * @constructor
  	 * @param {string} appBase application base URL
  	 * @param {string} hashPrefix hashbang prefix
  	*/


  var LocationHashbangUrl =
  /*#__PURE__*/
  function (_Location) {
    _inherits(LocationHashbangUrl, _Location);

    function LocationHashbangUrl(browser, base, kernel, settings) {
      _classCallCheck(this, LocationHashbangUrl);

      return _possibleConstructorReturn(this, _getPrototypeOf(LocationHashbangUrl).call(this, browser, base, kernel, settings));
    }

    _createClass(LocationHashbangUrl, [{
      key: "parse",
      value: function parse(url) {
        //console.log("URL to parse LocationHashbangUrl  :" + url)
        //console.log("base : " + this.base)
        //console.log("beginsWith BASE : "+beginsWith(this.base, url))
        //console.log("beginsWith PROTO  :"+beginsWith(this.proto, url))
        var withoutBaseUrl = beginsWith(this.base, url) || beginsWith(this.proto, url); //console.log("withoutBaseUrl : " +withoutBaseUrl)

        var withoutHashUrl = withoutBaseUrl.charAt(0) == '#' ? beginsWith(this.hashPrefix, withoutBaseUrl) : "";

        if (typeof withoutHashUrl !== "string") {
          this.logger('Invalid url ' + url + ', missing hash prefix ' + this.hashPrefix, "ERROR");
          return null;
        } //console.log("withoutHashUrl : " +withoutHashUrl)


        this.parseRelativeUrl(withoutHashUrl);
        return this.change();
      }
    }, {
      key: "change",
      value: function change() {
        var search = stage.io.toKeyValue(this._search); //console.log(this._search)
        //var hash = this._hash ? '#' + stage.io.encodeUriSegment(this._hash) : '';

        var hash = this._hash ? '#' + this._hash : ''; //console.log(this._path)

        this._url = this.encodePath(this._path) + (search ? '?' + search : '') + hash; //console.log(this._url)
        //var temp = (this._url ? this.hashPrefix + this._url : '').replace("//","/");
        //this._absUrl = this.base + temp;	
        //console.log( this.hashPrefix)
        //console.log( this._url)

        this._absUrl = this.base + (this._url ? "#" + this._url : ''); //console.log("URL :"+ this._url)
        //console.log("HASH :"+ this._hash)
        //console.log("ABSURL :"+ this._absUrl)
        //console.log("PATH :"+ this._path)

        return this;
      }
    }]);

    return LocationHashbangUrl;
  }(Location);
  /**
  	 * LocationHashbangInHtml5Url represents url
  	 * This object is exposed as location service when html5 history api is enabled but the browser
  	 * does not support it.
  	 *
  	 * @constructor
  	 * @param {string} appBase application base URL
  	 * @param {string} hashPrefix hashbang prefix
  	*/


  var LocationHashbangInHtml5Url =
  /*#__PURE__*/
  function (_LocationHashbangUrl) {
    _inherits(LocationHashbangInHtml5Url, _LocationHashbangUrl);

    function LocationHashbangInHtml5Url(browser, base, kernel, settings) {
      _classCallCheck(this, LocationHashbangInHtml5Url);

      return _possibleConstructorReturn(this, _getPrototypeOf(LocationHashbangInHtml5Url).call(this, browser, base, kernel, settings));
    }

    _createClass(LocationHashbangInHtml5Url, [{
      key: "parse",
      value: function parse(url) {
        return this.change();
      }
    }, {
      key: "change",
      value: function change() {
        return this;
      }
    }]);

    return LocationHashbangInHtml5Url;
  }(LocationHashbangUrl);
  /**
  	 * LocationHtml5Url represents an url
  	 * This object is exposed as location service when HTML5 mode is enabled and supported
  	 *
  	 * @constructor
  	 * @param {string} appBase application base URL
  	 * @param {string} basePrefix url path prefix
  	*/


  var LocationHtml5Url =
  /*#__PURE__*/
  function (_Location2) {
    _inherits(LocationHtml5Url, _Location2);

    function LocationHtml5Url(browser, base, kernel, settings) {
      _classCallCheck(this, LocationHtml5Url);

      return _possibleConstructorReturn(this, _getPrototypeOf(LocationHtml5Url).call(this, browser, base, kernel, settings));
    }

    _createClass(LocationHtml5Url, [{
      key: "parse",
      value: function parse(url) {
        var pathUrl = beginsWith(this.proto, url);

        if (pathUrl) {
          this.parseRelativeUrl(pathUrl);
        }

        if (!this._path) this._path = "/";
        return this.change();
      }
    }, {
      key: "change",
      value: function change() {
        var search = stage.io.toKeyValue(this._search);
        var hash = this._hash ? '#' + stage.io.encodeUriSegment(this._hash) : '';
        this._url = this.encodePath(this._path) + (search ? '?' + search : '') + hash;
        this._absUrl = this.proto + this._url.substr(1);
        return this;
      }
    }]);

    return LocationHtml5Url;
  }(Location);
  /*
  	 *	SERVICE LOCATION
  	 */


  var defaultSettings = {
    html5Mode: true,
    hashPrefix: "/"
  };

  var serverBase = function serverBase(url) {
    return url.substring(0, url.indexOf('/', url.indexOf('//') + 2));
  };

  var service = function service(kernel, settings) {
    var options = $.extend(defaultSettings, settings);
    var browserService = new browser(kernel, options);
    kernel.set("browser", browserService);
    var initialUrl = browserService.url();
    var baseHref = options.base || "";
    var mode = null;
    var base = null;

    if (options.html5Mode) {
      mode = nativeHistory ? LocationHtml5Url : LocationHashbangInHtml5Url;
      base = serverBase(initialUrl) + (baseHref || '/');
    } else {
      mode = LocationHashbangUrl;
      base = stripHash(initialUrl);
    }

    return new mode(browserService, base, kernel, options);
  };

  stage.location = service;
  return service;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js-exposed")))

/***/ }),

/***/ "./src/kernel/module.es6":
/*!*******************************!*\
  !*** ./src/kernel/module.es6 ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

module.exports = function (stage) {
  'use strict';
  /*
  	 *
  	 *	Model
  	 *
  	 */

  var urlParser = function urlParser(container, url, name, template, obj) {
    var index = url.indexOf("views");

    if (index < 0) {
      var text = "URL TEMPLATE BAD PATH :" + url;
      this.logger(text, "ERROR");
      throw new Error(text);
    }

    var res = url.slice(index + "views".length + 1).split("/");
    res.pop();

    if (res.length) {
      var obj = container;

      for (var i = 0; i < res.length; i++) {
        if (obj[res[i]]) {
          if (i !== res.length - 1) {
            obj = obj[res[i]];
          } else {
            obj[res[i]][name] = template;
          }
        } else {
          if (i !== res.length - 1) {
            obj[res[i]] = {};
            obj = obj[res[i]];
          } else {
            obj[res[i]] = {};
            obj[res[i]][name] = template;
          }
        }
      }
    } else {
      container[name] = template;
    }
  };

  var regI18n = new RegExp("^(.*)\.(.._..)\.(.*)$");

  var modelModule =
  /*#__PURE__*/
  function () {
    function modelModule(config) {
      _classCallCheck(this, modelModule);

      this.rootName = "module";
      var documentXml = this.parser(config); //this.name = this.config.name["@short"];

      this.name = documentXml.module['@id'];
    }

    _createClass(modelModule, [{
      key: "parser",
      value: function parser(ele) {
        switch (stage.typeOf(ele)) {
          case "document":
            var res = stage.xml.parseXml(ele);
            break;

          case "object":
            res = ele;
            break;
        }

        if (!res[this.rootName]) {
          throw new Error("BAD MODULE CONFIG ");
        }

        this.config = res[this.rootName];
        return res;
      }
    }, {
      key: "registerScript",
      value: function registerScript(src) {
        var _this = this;

        this.autoloader.load(src, function (error, transport) {
          if (error) {
            _this.logger(error, "ERROR");

            return;
          }

          _this.logger("LOAD SCRIPT : " + src, "DEBUG");
        });
      }
    }, {
      key: "registerStyle",
      value: function registerStyle(src) {
        var _this2 = this;

        this.autoloader.load(src, function (error, transport) {
          if (error) {
            _this2.logger(error, "ERROR");

            return;
          }

          _this2.logger("LOAD STYLE : " + src, "DEBUG");
        });
      }
    }, {
      key: "cacheFont",
      value: function cacheFont(src) {
        var _this3 = this;

        $.ajax({
          async: false,
          cache: true,
          url: src,
          beforeSend: function beforeSend(xhr) {
            xhr.overrideMimeType("application/octet-stream");
          },
          success: function success() {
            _this3.logger("LOAD FONT : " + src, "DEBUG");
          },
          error: function error(e) {
            console.log(e);

            _this3.logger(src + " : " + message, "ERROR");
          }
        });
      }
    }, {
      key: "registerTemplate",
      value: function registerTemplate(name, src, type) {
        var _this4 = this;

        //console.log("NAME :" + name)
        switch (type) {
          case "application/twig":
            //var obj = urlParser.call(this, this.templates, src, name);
            this.twig({
              id: this.name + ":" + name,
              href: src,
              async: false,
              //debug:true,
              load: function load(template) {
                urlParser.call(_this4, _this4.templates, src, name, template);

                _this4.logger("LOAD TEMPLATE : " + name + " ==>" + src, "DEBUG"); //console.log(this.templates)
                //obj[name] = template;
                //console.log(template.extend)
                //this.templateEngine

              },
              error: function error(xrh, status, message) {
                _this4.logger("TEMPLATE :" + src + " : " + message, "ERROR");
              }
            });
            break;

          case "text/html":
            break;

          case "application/xml":
          case "text/xml":
            break;

          case "template":
            var obj = urlParser.call(this, this.templates, src.url, name, src); //obj[name] = src;

            this.logger("LOAD IMPORT TEMPLATE : " + name + " ==>" + src.url, "DEBUG");
            break;

          default:
            this.registerTemplate(name, src, "application/twig");
            break;
        }
      }
    }, {
      key: "registerView",
      value: function registerView(name, src, type) {
        var _this5 = this;

        switch (type) {
          case "text/javascript":
          case "application/javascript":
            this.autoloader.load(src, function (error, transport) {
              if (error) {
                _this5.logger(error, "ERROR");

                return;
              } //this.views[name] = new ;


              var Class = stage.views[name];
              _this5.views[name] = new Class(_this5.container, _this5);

              _this5.logger("LOAD VIEW : " + src, "DEBUG");
            });
            break;

          default:
        }
      }
    }, {
      key: "registerController",
      value: function registerController(name, src) {
        var _this6 = this;

        this.autoloader.load(src, function (error, transport) {
          if (error) {
            _this6.logger(error, "ERROR");

            throw error;
          }

          try {
            var Class = stage.controllers[name];
            _this6.controllers[name] = new Class(name, _this6.container, _this6);

            _this6.logger("LOAD CONTROLLER : " + name + " ==>" + src, "DEBUG");
          } catch (e) {
            throw e;
          }
        });
      }
    }, {
      key: "initialiseRest",
      value: function initialiseRest(name, url, optionsGlobal) {
        var rest = this.kernel.restService;
        var ele = rest.addApi(name, url, optionsGlobal);
        this.kernel.set(name, ele);
      }
    }, {
      key: "registerTranslation",
      value: function registerTranslation(src, type) {
        var _this7 = this;

        var service = this.get("i18n");

        if (!service) {
          this.logger("SERVICE I18N not loaded abort load Translation : " + src, "WARNING");
          return;
        }

        $.ajax({
          url: src,
          async: false,
          success: function success(data, status, xhr) {
            var name = stage.basename(src);

            _this7.logger("LOAD TRANSLATION " + type + " : " + name + " URL = " + src, "DEBUG");

            var res = regI18n.exec(name);

            if (!res) {
              _this7.logger("SERVICE I18N  abort load Translation : " + src + " Bad File name format", "WARNING");

              return;
            }

            var domain = res[1];
            var locale = res[2];
            service.registerI18n(name, locale, domain, data);
          },
          dataType: type || "json",
          error: function error(xhr, status, err) {
            _this7.logger(err, "ERROR");
          }
        });
      }
    }, {
      key: "reader",
      value: function reader() {
        var root = this.config;

        for (var node in this.config) {
          switch (node) {
            case "content":
              break;

            case "controllers":
              var controllers = root[node].controller;

              if (controllers) {
                var tab = stage.typeOf(controllers) === "object" ? [controllers] : controllers;

                for (var i = 0; i < tab.length; i++) {
                  var name = tab[i]["@name"];
                  var src = tab[i]["@src"];
                  this.registerController(name, src);
                }
              }

              break;

            case "views":
              var views = root[node].view;

              if (views) {
                var tab = stage.typeOf(views) === "object" ? [views] : views;

                for (var i = 0; i < tab.length; i++) {
                  var name = tab[i]["@name"];
                  var src = tab[i]["@src"];
                  var type = tab[i]["@type"];
                  this.registerView(name, src, type);
                }
              }

              break;

            case "modules":
              var modules = root[node].module;

              if (modules) {
                var tab = stage.typeOf(modules) === "object" ? [modules] : modules;

                for (var i = 0; i < tab.length; i++) {
                  //var name = tab[i]["@name"];
                  var url = tab[i]["@href"];

                  if (!this.isDomReady) {
                    this.kernel.listen(this, "onBoot", function (url) {
                      this.kernel.loadModule(url, {
                        async: false
                      });
                    }.bind(this, url));
                  } else {
                    this.kernel.loadModule(url);
                  }
                }
              }

              break;

            case "templates":
              var templates = root[node].template;

              if (templates) {
                var tab = stage.typeOf(templates) === "object" ? [templates] : templates;

                for (var i = 0; i < tab.length; i++) {
                  var name = tab[i]["@name"];
                  var src = tab[i]["@src"];
                  var type = tab[i]["@type"];

                  if (!name) {
                    name = this.getTemplateName(src);
                  }

                  this.registerTemplate(name, src, type);
                }
              }

              break;

            case "styles":
              var styles = root[node].style;

              if (styles) {
                var tab = stage.typeOf(styles) === "object" ? [styles] : styles;

                for (var i = 0; i < tab.length; i++) {
                  var src = tab[i]["@src"];
                  this.registerStyle(src);
                }
              }

              break;

            case "scripts":
              var scripts = root[node].script;

              if (scripts) {
                var tab = stage.typeOf(scripts) === "object" ? [scripts] : scripts;

                for (var i = 0; i < tab.length; i++) {
                  var src = tab[i]["@src"];
                  this.registerScript(src);
                }
              }

              break;

            case "fonts":
              var fonts = root[node].font;

              if (fonts) {
                var tab = stage.typeOf(fonts) === "object" ? [fonts] : fonts;

                for (var i = 0; i < tab.length; i++) {
                  var src = tab[i]["@src"];
                  this.cacheFont(src);
                }
              }

              break;

            case "translations":
              var translations = root[node].translation;

              if (translations) {
                var tab = stage.typeOf(translations) === "object" ? [translations] : translations;

                for (var i = 0; i < tab.length; i++) {
                  var src = tab[i]["@src"];
                  var type = tab[i]["@type"];
                  this.registerTranslation(src, type);
                }
              }

              break;

            case "icon":
              this.icon = root[node]["@src"];
              break;

            /*case "name" :
              console.log(root[node])
              this.name = root[node]["@short"];
              break;*/

            case "preference":
              break;

            case "author":
              var author = root[node];
              this.author = author["#text"];
              this.emailAuthor = author["@email"];
              this.authorLink = author["@href"];
              break;

            case "description":
              this.description = root[node];
              break;

            case "api":
              //console.log(root[node]);
              for (var ele in root[node]) {
                var mvc = root[node][ele];
                var tab = stage.typeOf(mvc) === "object" ? [mvc] : mvc;

                for (var i = 0; i < tab.length; i++) {
                  if (ele === "rest") {
                    if (this.kernel.restService) this.initialiseRest(tab[i]["@name"], tab[i]["@url"]);else this.logger("Api " + ele + " SERVICE REST NOT FOUND", "ERROR");
                  } else {
                    this.logger("Api " + ele + " not exist for modules", "ERROR");
                  }
                }
              }

              break;
              break;

            case "routes":
              var routes = root[node].route;

              switch (stage.typeOf(routes)) {
                case "array":
                  for (var i = 0; i < routes.length; i++) {
                    var id = routes[i]["@id"];
                    var path = routes[i]["@path"];
                    var defaultParam = {};

                    switch (stage.typeOf(routes[i]["default"])) {
                      case "array":
                        for (var j = 0; j < routes[i]["default"].length; j++) {
                          defaultParam[routes[i]["default"][j]["@key"]] = routes[i]["default"][j]["#text"]; //console.log(defaultParam)
                        }

                        break;

                      case "object":
                        if (routes[i]["default"]["@key"]) defaultParam[routes[i]["default"]["@key"]] = routes[i]["default"]["#text"];
                        break;
                    }

                    this.routes[id] = this.router.createRoute(id, path, defaultParam);
                  }

                  break;

                case "object":
                  for (var route in routes) {
                    switch (route) {
                      case "@id":
                        var id = routes[route];
                        break;

                      case "@path":
                        var path = routes[route];
                        break;

                      case "default":
                        var defaultParam = {};

                        switch (stage.typeOf(routes[route])) {
                          case "array":
                            for (var j = 0; j < routes[route].length; j++) {
                              defaultParam[routes[route][j]["@key"]] = routes[route][j]["#text"];
                            }

                            break;

                          case "object":
                            defaultParam[routes[route]["@key"]] = routes[route]["#text"];
                            break;
                        }

                        break;
                    }
                  }

                  this.routes[id] = this.router.createRoute(id, path, defaultParam);
                  break;
              }

              break;
          }
        }
      }
    }]);

    return modelModule;
  }();
  /*
  	*
  	*	CLASS Module
  	*
  	*/


  var regPattern = /(.*)Module:(.*):(.*)$/;

  var Module =
  /*#__PURE__*/
  function (_modelModule) {
    _inherits(Module, _modelModule);

    function Module(kernel, config, settings) {
      var _this8;

      _classCallCheck(this, Module);

      _this8 = _possibleConstructorReturn(this, _getPrototypeOf(Module).call(this, config));
      _this8.kernel = kernel;
      _this8.container = kernel.container;
      _this8.syslog = _this8.get("syslog");

      _this8.logger("REGISTER MODULE " + _this8.name, "DEBUG");

      _this8.autoloader = new stage.autoload(_assertThisInitialized(_assertThisInitialized(_this8)), {
        transport: "script"
      });
      _this8.views = {};
      _this8.controllers = {};
      _this8.templates = {};
      _this8.routes = {};
      _this8.twig = _this8.get("twig");

      _this8.setParameters("module." + _this8.name, _this8.config);

      _this8.set(_this8.name, _assertThisInitialized(_assertThisInitialized(_this8)));

      _this8.boot(settings);

      return _this8;
    }

    _createClass(Module, [{
      key: "listen",
      value: function listen() {
        return this.notificationsCenter.listen.apply(this.notificationsCenter, arguments);
      }
    }, {
      key: "fire",
      value: function fire(event) {
        this.logger(event + " : " + this.name, "DEBUG", "EVENT MODULE");
        return this.notificationsCenter.fire.apply(this.notificationsCenter, arguments);
      }
    }, {
      key: "logger",
      value: function logger(pci, severity, msgid, msg) {
        if (!msgid) msgid = "MODULE  " + this.name;
        return this.syslog.logger(pci, severity, msgid, msg);
      }
      /**
      		*	@method get
      		*	@param {String} name of service
             		*/

    }, {
      key: "get",
      value: function get(name) {
        return this.container.get(name);
      }
      /**
      		*	@method set
      		*	@param {String} name of service
      		*	@param {Object} instance of service
             		*/

    }, {
      key: "set",
      value: function set(name, obj) {
        return this.container.set(name, obj);
      }
    }, {
      key: "setParameters",
      value: function setParameters(name, value) {
        return this.container.setParameters(name, value);
      }
    }, {
      key: "getParameters",
      value: function getParameters(name) {
        return this.container.getParameters(name);
      }
    }, {
      key: "getController",
      value: function getController(name) {
        return this.controllers[name];
      }
    }, {
      key: "getTemplate",
      value: function getTemplate(name) {
        return this.templates[name];
      }
    }, {
      key: "getTemplateName",
      value: function getTemplateName(url) {
        var name = stage.basename(url);
        var index = name.indexOf(".");
        if (index < 0) return url;
        return name.slice(0, name.indexOf("."));
      }
    }, {
      key: "getTemplatePattern",
      value: function getTemplatePattern(pattern) {
        var res = regPattern.exec(pattern);

        if (!res) {
          var txt = "IN PATTERN :" + pattern + " BAD FORMAT ";
          this.logger(txt, "ERROR");
          throw new Error(txt);
        }

        var moduleName = res[1];
        var pathName = res[2];
        var templateName = res[3];
        var module = this.kernel.getModule(moduleName);

        if (!module) {
          var txt = "IN PATTERN :" + pattern + " MODULE :" + moduleName + " not defined";
          this.logger(txt, "ERROR");
          throw new Error(txt);
        }

        var obj = module.templates;

        if (pathName !== "") {
          var tab = pathName.split("/");

          for (var i = 0; i < tab.length; i++) {
            if (tab[i]) {
              if (tab[i] in obj) {
                obj = obj[tab[i]];
              } else {
                var txt = "IN PATTERN :" + pattern + " pathName :" + pathName + " not defined";
                this.logger(txt, "ERROR");
                throw new Error(txt);
              }
            }
          }
        }

        if (templateName !== "") {
          var name = this.getTemplateName(templateName);

          if (obj[name]) {
            return obj[name];
          } else {
            var txt = "IN PATTERN :" + pattern + " MODULE :" + moduleName + "  template : " + templateName + " not defined";
            this.logger(txt, "ERROR");
            throw new Error(txt);
          }
        } else {
          if (obj["index"]) {
            return obj["index"];
          } else {
            var txt = "IN PATTERN :" + pattern + " MODULE :" + moduleName + " default template not defined";
            this.logger(txt, "ERROR");
            throw new Error(txt);
          }
        }
      }
    }, {
      key: "getView",
      value: function getView(name) {
        return this.views[name];
      }
    }, {
      key: "boot",
      value: function boot(settings) {
        this.logger("BOOT " + this.name, "DEBUG");
        this.container = this.kernel.container.enterScope(this.name);
        this.notificationsCenter = stage.notificationsCenter.create(settings, this);
        this.set("notificationsCenter", this.notificationsCenter);
        this.router = this.kernel.router;

        try {
          this.fire("onBoot", this);
          this.reader();
          this.fire("onReady", this);
        } catch (e) {
          this.logger("MODULE : " + this.name + "  " + e, "ERROR");
          throw e;
        }
      }
    }]);

    return Module;
  }(modelModule);

  stage.Module = Module;
  return Module;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js-exposed")))

/***/ }),

/***/ "./src/kernel/routerService.es6":
/*!**************************************!*\
  !*** ./src/kernel/routerService.es6 ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js");

module.exports = function (stage) {
  'use strict';
  /*
  	 *
  	 *	ROUTE
  	 *
  	 */

  var decode = function decode(str) {
    try {
      return decodeURIComponent(str);
    } catch (err) {
      return str;
    }
  };

  var Route =
  /*#__PURE__*/
  function () {
    function Route(id, path, defaultParams) {
      _classCallCheck(this, Route);

      this.id = id;
      this.path = path;
      this.template = null;
      this.controller = null;
      this.defaults = defaultParams;
      this.variables = [];
      this.pattern = this.compile();
    }

    _createClass(Route, [{
      key: "compile",
      value: function compile() {
        var _this = this;

        var pattern = this.path.replace(/(\/)?(\.)?\{([^}]+)\}(?:\(([^)]*)\))?(\?)?/g, function (match, slash, dot, key, capture, opt, offset) {
          var incl = (_this.path[match.length + offset] || '/') === '/';

          _this.variables.push(key);

          return (incl ? '(?:' : '') + (slash || '') + (incl ? '' : '(?:') + (dot || '') + '(' + (capture || '[^/]+') + '))' + (opt || '');
        });
        pattern = pattern.replace(/([\/.])/g, '\\$1').replace(/\*/g, '(.+)');
        this.pattern = new RegExp('^' + pattern + '[\\/]?$', 'i');
        return this.pattern;
      }
    }, {
      key: "match",
      value: function match(url) {
        var res = url.match(this.pattern); //console.log(res)

        if (!res) {
          return res;
        }

        var map = [];
        var tab = res.slice(1);

        for (var i = 0; i < tab.length; i++) {
          var k = this.variables[i] || 'wildcard';
          var param = tab[i] && decode(tab[i]); //var index = map.push( map[k] ? [].concat(map[k]).concat(param) : param );

          var index = map.push(param);
          map[k] = map[index - 1];
        }

        if (map && map.wildcard) {
          map['*'] = map.wildcard;
        }

        return map;
      }
    }]);

    return Route;
  }();
  /*
  	 *
  	 *	RESOLVER
  	 *
  	 */


  var regModuleName = /^(.*)Module[\.js]{0,3}$/;

  var Resolver =
  /*#__PURE__*/
  function () {
    function Resolver(container) {
      _classCallCheck(this, Resolver);

      this.container = container;
      this.resolve = false;
      this.kernel = this.container.get("kernel");
      this.defaultAction = null;
      this.defaultView = null;
      this.variables = new Array();
      this.router = this.container.get("router");
      this.browser = this.container.get("browser"); //this.notificationsCenter = this.container.get("notificationsCenter") ;
    }

    _createClass(Resolver, [{
      key: "match",
      value: function match(route, url) {
        var match = route.match(url);

        if (match) {
          this.variables = match;
          this.url = url;
          this.route = route;
          this.parsePathernController(route.defaults.controller);
        }

        return match;
      }
    }, {
      key: "getModuleName",
      value: function getModuleName(str) {
        var ret = regModuleName.exec(str);

        if (ret) {
          return ret[1];
        } else {
          throw "BAD MODULE PATTERN ";
        }
      }
    }, {
      key: "getController",
      value: function getController(name) {
        return this.module.controllers[name + "Controller"];
      }
    }, {
      key: "getAction",
      value: function getAction(name) {
        var ele = name + "Action";

        if (ele in this.controller) {
          return this.controller[ele];
        }

        return null;
      }
    }, {
      key: "getDefaultView",
      value: function getDefaultView(controller, action) {
        var res = this.module.name + "Module" + ":" + controller + ":" + action + ".html.twig";
        return res;
      }
    }, {
      key: "parsePathernController",
      value: function parsePathernController(pattern) {
        if (typeof pattern !== "string") {
          throw new Error("Resolver : pattern : " + pattern + " MUST be a string");
        }

        this.route = this.router.getRouteByPattern(pattern);
        var tab = pattern.split(":");

        try {
          this.module = this.kernel.getModule(this.getModuleName(tab[0]));
        } catch (e) {
          throw new Error("Resolver pattern error module :  " + pattern + " : " + e);
        }

        if (this.module) {
          this.controller = this.getController(tab[1]);

          if (this.controller) {
            if (tab[2]) {
              this.action = this.getAction(tab[2]);

              if (!this.action) {
                throw new Error("Resolver :In CONTROLLER: " + tab[1] + " ACTION  :" + tab[2] + " not exist");
              }
            } else {
              this.action = null;
            }
          } else {
            throw new Error("Resolver :controller not exist :" + tab[1]);
          }

          this.defaultView = this.getDefaultView(tab[1], tab[2]);
          this.resolve = true;
        } else {
          //this.logger("Resolver : not exist :"+tab[0] , "ERROR")
          throw new Error("Resolver : module not exist :" + tab[0]);
        }
      }
    }, {
      key: "callController",
      value: function callController(arg) {
        try {
          var ret = this.action.apply(this.controller, arg || []);
        } catch (e) {
          this.controller.logger.call(this.controller, e, "ERROR");
          throw e;
        }

        return ret;
      }
    }]);

    return Resolver;
  }();
  /*
   *	ROUTER
   */


  var cacheState = function cacheState() {
    var cacheState = window.history.state === undefined ? null : window.history.state;
    return cacheState;
  };

  var nativeHistory = !!(window.history && window.history.pushState);
  var regSerch = /(.*)\?.*$/;

  var service =
  /*#__PURE__*/
  function (_stage$Service) {
    _inherits(service, _stage$Service);

    function service(kernel, container) {
      var _this2;

      _classCallCheck(this, service);

      _this2 = _possibleConstructorReturn(this, _getPrototypeOf(service).call(this, "ROUTER", container)); //this.kernel = kernel ;
      //this.container = container ;
      //this.notificationsCenter = this.container.get("notificationsCenter");
      //this.syslog = kernel.syslog ;	

      _this2.routes = {};
      _this2.routePattern = {};
      _this2.location = _this2.get("location");
      _this2.browser = _this2.get("browser");

      _this2.logger("INITIALIZE ROUTER SERVICE", "DEBUG");
      /*
       	* Extend Twig js	
       	*/


      Twig.extendFunction("path", function (name, variables, host) {
        try {
          if (host) {
            return _this2.generateUrl.call(_assertThisInitialized(_assertThisInitialized(_this2)), name, variables, host);
          } else {
            var generatedPath = _this2.generateUrl.call(_assertThisInitialized(_assertThisInitialized(_this2)), name, variables, host);

            return generatedPath ? "#" + generatedPath : "";
          }
        } catch (e) {
          _this2.logger(e.error);

          throw e.error;
        }
      });

      _this2.notificationsCenter.listen(_assertThisInitialized(_assertThisInitialized(_this2)), "onUrlChange", function (url, lastUrl, absUrl, cache) {
        try {
          var res = _this2.resolve(url);

          if (!res.resolve) {
            _this2.forward("appModule:app:404");

            return;
          }

          var last = _this2.resolveRoute(lastUrl);

          if (last) {
            _this2.notificationsCenter.fire("onRouteChange", {
              id: res.route.id,
              route: res.route,
              args: res.variables
            }, {
              id: last.route.id,
              route: last.route,
              args: last.variables
            });
          }
        } catch (e) {
          _this2.logger(e, "ERROR");
        }
      });

      return _this2;
    }

    _createClass(service, [{
      key: "createRoute",
      value: function createRoute(id, path, defaultParams) {
        if (id in this.routes) {
          this.logger("CREATE ROUTE : " + id + "Already exist ", "ERROR");
        }

        var route = new Route(id, path, defaultParams);
        this.routes[id] = route;
        this.routePattern[this.routes[id].defaults.controller] = {
          route: this.routes[id],
          path: path
        };
        this.logger("CREATE ROUTE : " + id, "DEBUG");
        return route;
      }
    }, {
      key: "getRoute",
      value: function getRoute(name) {
        if (this.routes[name]) return this.routes[name];
        return null;
      }
    }, {
      key: "resolveRoute",
      value: function resolveRoute(url) {
        var resolver = new Resolver(this.container);
        var res = [];

        for (var routes in this.routes) {
          var route = this.routes[routes];

          try {
            res = resolver.match(route, url);

            if (res) {
              return resolver;
            }
          } catch (e) {
            continue;
          }
        }

        return null;
      }
    }, {
      key: "resolve",
      value: function resolve(url) {
        //console.log("RESOLVE " +url)
        //console.log(regSerch.exec(url) );
        var test = regSerch.exec(url);
        if (test) url = test[1];
        var resolver = new Resolver(this.container);
        var res = [];

        for (var routes in this.routes) {
          var route = this.routes[routes];

          try {
            res = resolver.match(route, url);

            if (res) {
              this.notificationsCenter.fire("onBeforeAction", url, resolver);
              var ret = resolver.callController(res);
              this.notificationsCenter.fire("onAfterAction", url, resolver, ret);
              break;
            }
          } catch (e) {
            this.logger("RESOLVE URL : " + url + " " + e, "ERROR");
            this.forward("appModule:app:500", [e]);
          }
        }

        return resolver;
      }
    }, {
      key: "getRouteByPattern",
      value: function getRouteByPattern(pattern, args) {
        //console.log(pattern)
        //console.log(this.routePattern)
        if (pattern in this.routePattern) {
          //console.log("FIND")
          var route = this.routePattern[pattern].route;
          return route;
        } //console.log("NOT FIND")


        return null;
      }
    }, {
      key: "resolvePattern",
      value: function resolvePattern(pattern) {
        var resolver = new Resolver(this.container);
        var route = resolver.parsePathernController(pattern);
        return resolver;
      }
    }, {
      key: "forward",
      value: function forward(pattern, args) {
        var resolver = this.resolvePattern(pattern);

        if (resolver.resolve) {
          try {
            if (resolver.route) {
              this.logger("FORWARD PATTERN : " + pattern + "  FIND ROUTE ==> REDIRECT ", "DEBUG");
              this.redirect(resolver.route.path); //this.location.url(resolver.route.path);
              //this.logger("FORWARD PATTERN : "+ pattern + " find ROUTE : "+resolver.route.path +" redirect to URL :" + this.location.absUrl(),"DEBUG")
              //this.browser.url(this.location.absUrl(), true);
            } else {
              this.logger("FORWARD PATTERN : " + pattern + "  NO ROUTE FIND  ==> CALL CONTROLLER", "DEBUG");
              var ret = resolver.callController(args);
            }
          } catch (e) {
            this.logger("FORWARD " + pattern + " CALL CONTROLER  " + resolver.controller.name + " : " + e, "ERROR");
            this.forward("appModule:app:500", [e]);
          }
        } else {
          this.logger("Router Can't resolve : " + pattern, "ERROR");
        }

        return false;
      }
    }, {
      key: "redirect",
      value: function redirect(url) {
        this.location.url(url);
        this.logger("REDIRECT URL : " + url + " BROWSER  URL :" + this.location.absUrl(), "DEBUG");
        this.browser.url(this.location.absUrl(), true);
      }
    }, {
      key: "generateUrl",
      value: function generateUrl(name, variables, host) {
        var route = this.getRoute(name);

        if (!route) {
          this.logger("no route to host  :" + name, "WARNING"); //throw {error:"no route to host  "+ name};

          return null;
        }

        var path = route.path;

        if (route.variables.length) {
          if (!variables) {
            var txt = "";

            for (var i = 0; i < route.variables.length; i++) {
              txt += "{" + route.variables[i] + "} ";
            }

            this.logger("router generate path route '" + name + "' must have variable " + txt, "ERROR");
            return null;
          }

          for (var ele in variables) {
            if (ele === "_keys") continue;
            var index = route.variables.indexOf(ele);

            if (index >= 0) {
              path = path.replace("{" + ele + "}", variables[ele]);
            } else {
              this.logger("router generate path route '" + name + "' don't  have variable " + ele, "WARNING");
              return null;
            }
          }
        }

        if (host) {
          return host + "#" + path;
        }

        return path;
      }
    }]);

    return service;
  }(stage.Service);

  stage.router = service;
  return service;
};

/***/ }),

/***/ "./src/kernel/service.es6":
/*!********************************!*\
  !*** ./src/kernel/service.es6 ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

module.exports = function (stage) {
  'use strict';

  var settingsSyslog = {
    //rateLimit:100,
    //burstLimit:10,
    moduleName: "SERVICE ",
    defaultSeverity: "INFO"
  };
  var defaultOptions = {};

  var Service =
  /*#__PURE__*/
  function () {
    function Service(name, container, notificationsCenter, options) {
      _classCallCheck(this, Service);

      if (name) {
        this.name = name;
      }

      options = stage.extend({}, defaultOptions, options);

      if (container instanceof stage.Container) {
        this.container = container;
      } else {
        if (container) {
          throw new Error("Service stage container not valid must be instance of stage.Container");
        }

        this.container = new stage.Container();
        this.container.set("container", this.container);
      }

      this.kernel = this.container.get("kernel");
      this.syslog = this.container.get("syslog");

      if (!this.syslog) {
        this.settingsSyslog = stage.extend({}, settingsSyslog, {
          moduleName: this.name
        }, options.syslog || {});
        this.syslog = new stage.syslog(this.settingsSyslog);
        this.set("syslog", this.syslog);
      } else {
        this.settingsSyslog = this.syslog.settings;
      }

      if (notificationsCenter instanceof stage.notificationsCenter.notification) {
        this.notificationsCenter = notificationsCenter;
      } else {
        if (notificationsCenter) {
          throw new Error("Service stage notificationsCenter not valid must be instance of stage.notificationsCenter.notification");
        }

        this.notificationsCenter = this.container.get("notificationsCenter");

        if (!this.notificationsCenter) {
          this.notificationsCenter = stage.notificationsCenter.create(options, this);

          if (!this.kernel) {
            this.set("notificationsCenter", this.notificationsCenter);
          } else {
            if (this.kernel.container !== this.container) {
              this.set("notificationsCenter", this.notificationsCenter);
            }
          }
        }
      }
    }

    _createClass(Service, [{
      key: "getName",
      value: function getName() {
        return this.name;
      }
    }, {
      key: "clean",
      value: function clean() {
        this.settingsSyslog = null;
        delete this.settingsSyslog;
        this.syslog = null;
        delete this.syslog;
        this.removeAllListeners();
        this.notificationsCenter = null;
        delete this.notificationsCenter;
        this.container = null;
        delete this.container;
        this.kernel = null;
        delete this.kernel;
      }
    }, {
      key: "logger",
      value: function logger(pci, severity, msgid, msg) {
        try {
          if (!msgid) {
            msgid = "SERVICE " + this.name + " ";
          }

          return this.syslog.logger(pci, severity, msgid, msg);
        } catch (e) {
          console.log(pci);
        }
      }
      /**
      	*	@method fire
      	*	@param {String} event name 
      	*	@param {Arguments} ... arguments to inject  
             	*/

    }, {
      key: "fire",
      value: function fire() {
        //this.logger(ev, "DEBUG", "EVENT KERNEL")
        return this.notificationsCenter.fire.apply(this.notificationsCenter, arguments);
      }
      /**
      	*	@method listen
      	*	@param {Oject} context
      	*	@param {String} eventName
      	*	@param {Function} listener
             	*/

    }, {
      key: "listen",
      value: function listen() {
        return this.notificationsCenter.listen.apply(this.notificationsCenter, arguments);
      }
      /**
      	*	@method removeListener
      	*	@param {Oject} eventName 
      	*	@param {String} listener
             	*/

    }, {
      key: "removeListener",
      value: function removeListener() {
        return this.notificationsCenter.unListen.apply(this.notificationsCenter, arguments);
      }
    }, {
      key: "unListen",
      value: function unListen() {
        return this.notificationsCenter.unListen.apply(this.notificationsCenter, arguments);
      }
      /**
      	*	@method removeAllListeners
             	*/

    }, {
      key: "removeAllListeners",
      value: function removeAllListeners() {
        return this.notificationsCenter.clearNotifications.apply(this.notificationsCenter, arguments);
      }
      /**
      	 *	@method get
      	 *	@param {String} name of service
             	 */

    }, {
      key: "get",
      value: function get(name) {
        if (this.container) {
          return this.container.get(name);
        }

        return null;
      }
      /**
      	*	@method set
      	*	@param {String} name of service
      	*	@param {Object} instance of service
             	*/

    }, {
      key: "set",
      value: function set(name, obj) {
        if (this.container) {
          return this.container.set(name, obj);
        }

        return null;
      }
    }, {
      key: "getParameters",
      value: function getParameters() {
        return this.container.getParameters.apply(this.container, arguments);
      }
    }, {
      key: "setParameters",
      value: function setParameters() {
        return this.container.setParameters.apply(this.container, arguments);
      }
    }, {
      key: "has",
      value: function has() {
        return this.container.has.apply(this.container, arguments);
      }
    }]);

    return Service;
  }();

  stage.Service = Service;
  return Service;
};

/***/ }),

/***/ "./src/kernel/translationService.es6":
/*!*******************************************!*\
  !*** ./src/kernel/translationService.es6 ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var Twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js");

module.exports = function (stage) {
  'use strict';

  var translate = {};
  var translateDispo = {
    fr_FR: "français",
    en_EN: "english"
  };
  var regNavLang = /(..)-?.*/;

  var service =
  /*#__PURE__*/
  function (_stage$Service) {
    _inherits(service, _stage$Service);

    function service(kernel, container) {
      var _this;

      _classCallCheck(this, service);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(service).call(this, "I18N", container, container.get("notificationsCenter")));

      _this.logger("INITIALIZE I18N SERVICE", "DEBUG");

      _this.container.setParameters("translate", translate);

      _this.defaultDomain = _this.trans_default_domain();
      var locale = navigator.language || navigator.userLanguage;
      var res = regNavLang.exec(locale);

      if (res) {
        _this.defaultLocale = res[1] + "_" + locale.toUpperCase();
      } else {
        _this.defaultLocale = "fr_FR";
      }

      translate[_this.defaultLocale] = {};

      _this.listen(_assertThisInitialized(_assertThisInitialized(_this)), "onBoot", function () {
        _this.boot();
      });

      return _this;
    }

    _createClass(service, [{
      key: "boot",
      value: function boot() {
        //GET APP locale
        if (this.kernel.modules.app && this.container.getParameters("module.app")) {
          this.defaultLocale = this.container.getParameters("module.app").locale || this.defaultLocale;
        }

        if (!translate[this.defaultLocale]) {
          translate[this.defaultLocale] = {};
        }

        this.logger("DEFAULT LOCALE APPLICATION ==> " + this.defaultLocale, "DEBUG");

        if (Twig) {
          Twig.extendFunction("getLangs", this.getLangs.bind(this));
          Twig.extendFunction("trans_default_domain", this.trans_default_domain.bind(this));
          Twig.extendFilter("trans", this.translation.bind(this));
          Twig.extendFunction("trans", this.translation.bind(this));
          Twig.extendFilter("getLangs", this.getLangs.bind(this));
        }
      }
    }, {
      key: "getLangs",
      value: function getLangs(locale, data) {
        var obj = [];

        for (var ele in translateDispo) {
          obj.push({
            name: translateDispo[ele],
            value: ele
          });
        }

        return obj;
      }
    }, {
      key: "registerI18n",
      value: function registerI18n(name, locale, domain, data) {
        if (locale) {
          if (!translate[locale]) translate[locale] = stage.extend(true, {}, translate[this.defaultLocale]);
        }

        if (domain) {
          if (!translate[locale][domain]) {
            translate[locale][domain] = stage.extend(true, {}, translate[this.defaultLocale][domain]);
          }

          stage.extend(true, translate[locale][domain], data);
        } else {
          stage.extend(true, translate[locale], data);
        }
      }
    }, {
      key: "trans_default_domain",
      value: function trans_default_domain(domain) {
        if (!domain) {
          return this.defaultDomain = "messages";
        }

        return this.defaultDomain = domain;
      }
      /*
       	*
       	*
       	*
       	*
       	*/

    }, {
      key: "translation",
      value: function translation(value, args) {
        var defaulDomain = args && args[1] ? args[1] : this.defaultDomain;
        var str = this.container.getParameters("translate." + this.defaultLocale + "." + defaulDomain + "." + value) || value;

        if (args) {
          if (args[0]) {
            for (var ele in args[0]) {
              str = str.replace(ele, args[0][ele]);
            }
          }
        }

        return str;
      }
    }]);

    return service;
  }(stage.Service);

  stage.i18n = service;
  return service;
};

/***/ }),

/***/ "./src/media/media.es6":
/*!*****************************!*\
  !*** ./src/media/media.es6 ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

module.exports = function (stage) {
  'use strict'; // UDPATER

  var mediaStream = null;
  var getMediaStream = null;

  var updaterMedia = function () {
    // MediaStream	API
    try {
      if (stage.browser.Webkit) {
        getMediaStream = function getMediaStream(stream) {
          try {
            return URL.createObjectURL(stream);
          } catch (e) {
            return stream;
          }
        };

        mediaStream = webkitMediaStream; // The representation of tracks in a stream is changed in M26.
        // Unify them for earlier Chrome versions in the coexisting period.

        if (!webkitMediaStream.prototype.getVideoTracks) {
          webkitMediaStream.prototype.getVideoTracks = function () {
            return this.videoTracks;
          };

          webkitMediaStream.prototype.getAudioTracks = function () {
            return this.audioTracks;
          };
        }

        return true;
      }

      if (stage.browser.Gecko) {
        getMediaStream = function getMediaStream(stream) {
          try {
            return window.URL.createObjectURL(stream);
          } catch (e) {
            return stream;
          }
        };

        mediaStream = MediaStream;

        if (MediaStream && !MediaStream.prototype.getVideoTracks) {
          MediaStream.prototype.getVideoTracks = function () {
            return [];
          };
        }

        if (MediaStream && !MediaStream.prototype.getAudioTracks) {
          MediaStream.prototype.getAudioTracks = function () {
            return [];
          };
        }

        return true;
      }

      if (stage.browser.Opera) {
        getMediaStream = function getMediaStream(stream) {
          return stream;
        };

        if (!MediaStream.prototype.getVideoTracks) {
          MediaStream.prototype.getVideoTracks = function () {
            return [];
          };
        }

        if (!MediaStream.prototype.getAudioTracks) {
          MediaStream.prototype.getAudioTracks = function () {
            return [];
          };
        }

        return true;
      }

      console.error("Browser does not appear to be mediaStream-capable");
    } catch (e) {
      console.error(e);
    }
  }();
  /*
   *	MEDIA STREAM
   *
   */


  var defaultSettingsStream = {
    audio: true,
    video: true
  };

  var MediaStream =
  /*#__PURE__*/
  function () {
    function mediaStream(mediaElement, settings) {
      _classCallCheck(this, mediaStream);

      this.settings = stage.extend({}, defaultSettingsStream, settings);
      this.notificationsCenter = stage.notificationsCenter.create(this.settings, this);
      this.urlStream = null;
      this.stream = this.settings.stream ? this.setStream(this.settings.stream) : null;
      this.mediaElement = mediaElement ? mediaElement : null;
      this.getMediaStream = getMediaStream;
    }

    _createClass(mediaStream, [{
      key: "getUserMedia",
      value: function getUserMedia(settings, success, error) {
        var _this = this;

        if (settings) {
          this.settings = stage.extend({}, defaultSettingsStream, settings);
          this.notificationsCenter.settingsToListen(settings);
        }

        return navigator.getUserMedia({
          video: this.settings.video,
          audio: this.settings.audio
        }, function (stream) {
          _this.setStream(stream);

          if (success) {
            success(_this);
          }

          _this.notificationsCenter.fire("onSucces", stream, _this);
        }, function (e) {
          if (error) {
            error(e);
          }

          _this.notificationsCenter.listen(_this, "onError");
        });
      }
    }, {
      key: "setStream",
      value: function setStream(stream) {
        this.stream = stream;
        this.urlStream = this.getMediaStream(stream);
        this.videotracks = this.getVideoTracks();
        this.audiotracks = this.getAudioTracks();
        return stream;
      }
    }, {
      key: "stop",
      value: function stop() {
        if (this.stream) {
          this.stream.stop();
        }
      }
    }, {
      key: "attachMediaStream",
      value: function attachMediaStream(element) {
        this.mediaElement = element || this.mediaElement;
        this.mediaElement.srcObject = this.stream;
        this.mediaElement.play();
        /*this.mediaElement.onloadedmetadata = (e) => {
          if (e) {
            this.notificationsCenter.fire("onError", e);
          }
          this.mediaElement.play();
        };*/
      }
    }, {
      key: "reattachMediaStream",
      value: function reattachMediaStream(stream) {
        this.stream = stream;
        this.attachMediaStream(this.mediaElement);
      }
    }, {
      key: "getVideoTracks",
      value: function getVideoTracks() {
        return this.stream.getVideoTracks();
      }
    }, {
      key: "getAudioTracks",
      value: function getAudioTracks() {
        return this.stream.getAudioTracks();
      }
      /*startRecording (stream){
      	var mediaStreamSource = this.audioContext.createMediaStreamSource(stream);
      	console.log(mediaStreamSource);
      	mediaStreamSource.connect(this.audioContext.destination);
      	this.recorder = new Recorder(mediaStreamSource);
      }
      stopRecording (){
      	this.recorder.stop();
      	this.recorder.exportWAV((stream) => {
      		this.recordSource = window.URL.createObjectURL(stream);
      	});
      }*/

    }]);

    return mediaStream;
  }();

  stage.extend(stage.media, {
    mediaStream: MediaStream
  });
  return stage.media;
};

/***/ }),

/***/ "./src/media/webAudio/webaudio.es6":
/*!*****************************************!*\
  !*** ./src/media/webAudio/webaudio.es6 ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

module.exports = function (stage) {
  'use strict';

  var audioContext = null;

  var webAudioApi = function () {
    audioContext = window.AudioContext || window.webkitAudioContext;

    if (audioContext) {
      return true;
    }

    return false;
  }();
  /*
   *
   *
   *	MEDIA MIX
   *
   *
   */


  var mixSettings = {};

  var mediaMix =
  /*#__PURE__*/
  function () {
    function mediaMix(settings) {
      _classCallCheck(this, mediaMix);

      this.audioBus = {};
      this.nbBus = 0;
      this.settings = stage.extend({}, mixSettings, settings);
      this.eventsManager = new stage.notificationsCenter.create(this.settings, this);
      this.createAudioBus("MASTER", {
        panner: true,
        analyser: true
      });
      this.masterBus = this.audioBus.MASTER;
      this.tracks = this.masterBus.tracks;
      this.audioContext = this.masterBus.audioContext;
      this.muted = this.masterBus.muted;
      this.panner = this.masterBus.audioNodes.panner;
      this.analyserLeft = this.masterBus.audioNodes.analyserLeft;
      this.analyserRight = this.masterBus.audioNodes.analyserRight;
      this.gain = this.masterBus.audioNodes.gain;
      this.connect(this.audioContext.destination);
    }

    _createClass(mediaMix, [{
      key: "listen",
      value: function listen() {
        return this.eventsManager.listen.apply(this.eventsManager, arguments);
      }
    }, {
      key: "unListen",
      value: function unListen() {
        return this.eventsManager.unListen.apply(this.eventsManager, arguments);
      }
    }, {
      key: "fire",
      value: function fire() {
        return this.eventsManager.fire.apply(this.eventsManager, arguments);
      }
    }, {
      key: "createAudioBus",
      value: function createAudioBus(name, settings) {
        var bus = null;

        try {
          bus = new audioBus(name, this, settings);
        } catch (e) {
          throw e;
        }

        this.audioBus[name] = bus;
        this.nbBus++;
        bus.listen(this, "onCreateTrack", function (track, bus) {
          this.fire("onCreateTrack", track, bus, this);
        });
        bus.listen(this, "onRemoveTrack", function (track, bus) {
          this.fire("onRemoveTrack", track, bus, this);
        });
        return bus;
      }
    }, {
      key: "removeAudioBus",
      value: function removeAudioBus(bus) {
        var ele = null;

        switch (true) {
          case bus instanceof audioBus:
            break;

          case typeof track === "number":
          case typeof track === "string":
            break;
        }

        if (!ele) {
          throw new Error("remove bus : this bus doesn't exist in  mixer  ");
        }

        return true;
      }
    }, {
      key: "connect",
      value: function connect(audioNode) {
        this.destination = audioNode;
        var ret = this.masterBus.connect(audioNode);
        this.fire("onConnect", audioNode, this);
        return ret;
      }
    }, {
      key: "disconnect",
      value: function disconnect() {
        this.masterBus.disconnect();
        this.destination = null;
        this.fire("onDisconnect", this);
      }
    }, {
      key: "setGain",
      value: function setGain(value) {
        this.masterBus.setGain(value);
        return this;
      }
    }, {
      key: "getGain",
      value: function getGain() {
        return this.masterBus.getGain();
      }
    }, {
      key: "mute",
      value: function mute() {
        this.masterBus.mute();
        this.muted = this.masterBus.muted;
        return this;
      }
    }, {
      key: "unmute",
      value: function unmute() {
        this.masterBus.unmute();
        this.muted = this.masterBus.muted;
        return this;
      }
    }, {
      key: "createTrack",
      value: function createTrack(media, settings) {
        return this.masterBus.createTrack(media, settings);
      }
    }, {
      key: "removeTrack",
      value: function removeTrack(track) {
        return this.masterBus.removeTrack(track);
      }
    }, {
      key: "playTracks",
      value: function playTracks(time, loop) {
        for (var i = 0; i < this.tracks.length; i++) {
          this.tracks[i].play(time, loop);
        }
      }
    }, {
      key: "createGain",
      value: function createGain() {
        return this.audioContext.createGain();
      }
    }, {
      key: "createPanner",
      value: function createPanner() {
        return this.audioContext.createPanner();
      }
    }, {
      key: "createStereoPanner",
      value: function createStereoPanner() {
        return this.audioContext.createStereoPanner();
      }
    }, {
      key: "createFilter",
      value: function createFilter() {
        return this.audioContext.createBiquadFilter();
      }
    }, {
      key: "createAnalyser",
      value: function createAnalyser() {
        return this.audioContext.createAnalyser();
      }
    }, {
      key: "createChannelSplitter",
      value: function createChannelSplitter(nbChannel) {
        return this.audioContext.createChannelSplitter(nbChannel);
      }
    }, {
      key: "createChannelMerger",
      value: function createChannelMerger(nbChannel) {
        return this.audioContext.createChannelMerger(nbChannel);
      }
    }, {
      key: "createOscillator",
      value: function createOscillator() {
        return this.audioContext.createOscillator();
      }
    }]);

    return mediaMix;
  }();
  /*
   *
   *	CLASS AUDIOBUS
   *
   */


  var defaultAudioBusSettings = {
    panner: false,
    analyser: false
  };

  var audioBus =
  /*#__PURE__*/
  function () {
    function audioBus(name, mixer, settings) {
      _classCallCheck(this, audioBus);

      this.name = name;
      this.mixer = mixer;
      this.settings = stage.extend({}, defaultAudioBusSettings, settings);
      this.eventsManager = stage.notificationsCenter.create(this.settings, this);
      this.audioContext = new audioContext();
      this.tracks = [];
      this.nbTracks = 0;
      this.audioNodes = {};
      this.in = null;
      this.out = null;
      this.destination = null;
      this.muted = false;
      this.createNodes();
    }

    _createClass(audioBus, [{
      key: "listen",
      value: function listen() {
        return this.eventsManager.listen.apply(this.eventsManager, arguments);
      }
    }, {
      key: "unListen",
      value: function unListen() {
        return this.eventsManager.unListen.apply(this.eventsManager, arguments);
      }
    }, {
      key: "fire",
      value: function fire() {
        return this.eventsManager.fire.apply(this.eventsManager, arguments);
      }
    }, {
      key: "createNodes",
      value: function createNodes() {
        // mute
        this.audioNodes.mute = this.createGain();
        this.in = this.audioNodes.mute; // gain

        this.audioNodes.gain = this.createGain();
        this.in.connect(this.audioNodes.gain);
        this.out = this.audioNodes.gain; // analyseur stéreo

        if (this.settings.analyser) {
          this.audioNodes.splitter = this.createChannelSplitter(2);
          this.out.connect(this.audioNodes.splitter);
          this.audioNodes.analyserLeft = this.createAnalyser();
          this.audioNodes.analyserLeft.smoothingTimeConstant = 0.85;
          this.audioNodes.splitter.connect(this.audioNodes.analyserLeft, 0, 0);
          this.audioNodes.analyserRight = this.createAnalyser();
          this.audioNodes.analyserRight.smoothingTimeConstant = 0.85;
          this.audioNodes.splitter.connect(this.audioNodes.analyserRight, 1, 0);
        } // panoramique


        if (this.settings.panner) {
          this.audioNodes.panner = this.createStereoPanner();
          this.out.connect(this.audioNodes.panner);
          this.out = this.audioNodes.panner;
        }
      }
    }, {
      key: "connect",
      value: function connect(audioNode) {
        this.destination = audioNode;
        this.out.connect(audioNode);
        this.fire("onConnect", audioNode, this);
      }
    }, {
      key: "disconnect",
      value: function disconnect() {
        if (this.destination) {
          this.out.disconnect(this.destination);
          this.destination = null;
          this.fire("onDisconnect", this);
        }
      }
    }, {
      key: "setGain",
      value: function setGain(value) {
        //this.audioNodes.gain.gain.value = value;
        this.audioNodes.gain.gain.setValueAtTime(value, this.audioContext.currentTime + 1);
        this.fire("onSetGain", value);
        return this;
      }
    }, {
      key: "getGain",
      value: function getGain() {
        return this.audioNodes.gain.gain.value;
      }
    }, {
      key: "mute",
      value: function mute() {
        //this.audioNodes.mute.gain.value = 0;
        this.audioNodes.mute.gain.setValueAtTime(0, this.audioContext.currentTime + 1);
        this.muted = true;
        this.fire("onMute", this);
        return this;
      }
    }, {
      key: "unmute",
      value: function unmute() {
        //this.audioNodes.mute.gain.value = 1;
        this.audioNodes.mute.gain.setValueAtTime(1, this.audioContext.currentTime + 1);
        this.muted = false;
        this.fire("onUnMute", this);
        return this;
      }
    }, {
      key: "createGain",
      value: function createGain() {
        return this.audioContext.createGain();
      }
    }, {
      key: "createPanner",
      value: function createPanner() {
        return this.audioContext.createPanner();
      }
    }, {
      key: "createStereoPanner",
      value: function createStereoPanner() {
        return this.audioContext.createStereoPanner();
      }
    }, {
      key: "createFilter",
      value: function createFilter() {
        return this.audioContext.createBiquadFilter();
      }
    }, {
      key: "createAnalyser",
      value: function createAnalyser() {
        return this.audioContext.createAnalyser();
      }
    }, {
      key: "createChannelSplitter",
      value: function createChannelSplitter(nbChannel) {
        return this.audioContext.createChannelSplitter(nbChannel);
      }
    }, {
      key: "createChannelMerger",
      value: function createChannelMerger(nbChannel) {
        return this.audioContext.createChannelMerger(nbChannel);
      }
    }, {
      key: "createOscillator",
      value: function createOscillator() {
        return this.audioContext.createOscillator();
      }
    }, {
      key: "createMediaStreamDestination",
      value: function createMediaStreamDestination() {
        var destination = this.audioContext.createMediaStreamDestination();
        this.disconnect();
        this.connect(destination);
        return destination;
      }
    }, {
      key: "createTrack",
      value: function createTrack(media, settings) {
        var track = new Track(media, this, settings);
        this.tracks.push(track);
        this.nbTracks++;
        this.fire("onCreateTrack", track, this);
        return track;
      }
    }, {
      key: "removeTrack",
      value: function removeTrack(track) {
        var ele = null;
        var name = null;

        switch (true) {
          case track instanceof Track:
            for (var i = 0; i < this.tracks.length; i++) {
              if (this.tracks[i] === track) {
                name = track.name;
                track.pause();
                track.disconnect(); // remove from tab

                ele = this.tracks.splice(i, 1);
                this.nbTracks--;
                this.fire("onRemoveTrack", ele[0], this);
                delete ele[0];
                break;
              }
            }

            break;

          case typeof track === "number":
          case typeof track === "string":
            name = track;

            for (var _i = 0; _i < this.tracks.length; _i++) {
              if (this.tracks[_i].name === name) {
                this.tracks[_i].pause();

                this.tracks[_i].disconnect(); // remove from tab


                ele = this.tracks.splice(_i, 1);
                this.nbTracks--;
                this.fire("onRemoveTrack", ele[0], this);
                delete ele[0];
                break;
              }
            }

            break;
        }

        if (!ele) {
          throw new Error("this track doesn't exist in  bus : " + this.name);
        }

        return true;
      }
    }]);

    return audioBus;
  }();
  /*
   *
   *	TRACK
   *
   *
   */


  var trackSettings = {
    gain: true,
    panner: true,
    filter: false,
    analyser: false,
    connect: true
  };

  var Track =
  /*#__PURE__*/
  function () {
    function Track(media, bus, settings) {
      var _this = this;

      _classCallCheck(this, Track);

      this.media = media;
      this.bus = bus;
      this.settings = stage.extend({}, trackSettings, settings);
      this.audioNodes = {};
      this.audioBus = {};
      this.transport = null;
      this.context = bus.audioContext;
      this.source = null;
      this.buffer = null;
      this.out = null;
      this.in = null;
      this.name = this.settings.name;
      this.id = this.generateId();
      this.sync = 0;
      this.retry = 0;
      this.ready = false;
      this.muted = false;
      this.currentTime = 0;
      this.eventsManager = stage.notificationsCenter.create(this.settings, this);
      this.createNodes();

      if (this.settings.connect) {
        this.connect(this.bus.in);
      }

      this.listen(this, "onReady", function () {
        this.bus.mixer.fire('onReadyTrack', this.bus, this);
      });
      var type = stage.typeOf(media);
      var error = null;

      switch (type) {
        case "object":
          switch (true) {
            case media instanceof stage.media.mediaStream:
              this.mediaType = "stream";
              this.buffer = media.stream;
              this.url = stage.io.urlToOject(media.urlStream);
              this.ready = true;
              this.fire("onReady", this);
              break;

            case media instanceof AudioNode:
              this.mediaType = "audioNode";
              this.buffer = media;
              this.ready = true;
              this.fire("onReady", this);
              break;

            default:
              error = new Error("media type not allowed ");
              this.fire("onError", error);
              throw error;
          }

          break;

        case "element":
          this.mediaType = "element";
          /*this.media.onloadstart = () => {
          	console.log("loadstart");
          }
          this.media.onloadeddata = () => {
          	console.log("onloadeddata");
          }*/

          this.media.oncanplay = function () {
            _this.connectSource(_this.media);

            _this.ready = true;

            _this.fire("onReady", _this);
          };

          break;

        case "string":
          this.url = stage.io.urlToOject(media);
          this.load(media);
          break;

        default:
          error = new Error("Track media type error");
          this.fire("onError", error);
          throw error;
      }
    }

    _createClass(Track, [{
      key: "generateId",
      value: function generateId() {
        return parseInt(Math.random() * 1000000000, 10);
      }
    }, {
      key: "setName",
      value: function setName(name) {
        this.name = name;
      }
    }, {
      key: "listen",
      value: function listen() {
        return this.eventsManager.listen.apply(this.eventsManager, arguments);
      }
    }, {
      key: "unListen",
      value: function unListen() {
        return this.eventsManager.unListen.apply(this.eventsManager, arguments);
      }
    }, {
      key: "fire",
      value: function fire() {
        return this.eventsManager.fire.apply(this.eventsManager, arguments);
      }
    }, {
      key: "createNodes",
      value: function createNodes() {
        this.audioNodes.mute = this.bus.createGain();
        this.in = this.audioNodes.mute;
        this.out = this.audioNodes.mute;

        if (this.settings.gain) {
          this.audioNodes.gain = this.bus.createGain();
          this.out.connect(this.audioNodes.gain);
          this.out = this.audioNodes.gain;
        }

        if (this.settings.filter) {
          this.audioNodes.filter = this.bus.createFilter();
          this.out.connect(this.audioNodes.filter);
          this.out = this.audioNodes.filter;
        }

        if (this.settings.panner) {
          this.audioNodes.panner = this.bus.createStereoPanner();
          this.out.connect(this.audioNodes.panner);
          this.out = this.audioNodes.panner;
        }

        if (this.settings.analyser) {
          this.audioNodes.analyser = this.bus.createAnalyser();
          this.audioNodes.analyser.smoothingTimeConstant = 0.85;
          this.out.connect(this.audioNodes.analyser);
        }
      }
    }, {
      key: "setGain",
      value: function setGain(value) {
        //this.audioNodes.gain.gain.value = value;
        this.audioNodes.gain.gain.setValueAtTime(value, this.context.currentTime + 1);
        this.fire("onSetGain", value);
        return this;
      }
    }, {
      key: "getGain",
      value: function getGain() {
        return this.audioNodes.gain.gain.value;
      }
    }, {
      key: "mute",
      value: function mute() {
        //this.audioNodes.mute.gain.value = 0;
        this.audioNodes.mute.gain.setValueAtTime(0, this.context.currentTime + 1);
        this.muted = true;
        this.fire("onMute", this);
        return this;
      }
    }, {
      key: "unmute",
      value: function unmute() {
        //this.audioNodes.mute.gain.value = 1;
        this.audioNodes.mute.gain.setValueAtTime(1, this.context.currentTime + 1);
        this.muted = false;
        this.fire("onUnMute", this);
        return this;
      }
    }, {
      key: "pause",
      value: function pause(when) {
        switch (this.mediaType) {
          case "element":
            this.media.pause();
            this.fire("onPause", this);
            break;

          default:
            if (this.source) {
              if (this.source.node && this.source.playbackState === this.source.node.PLAYING_STATE) {
                this.source.node.stop(when || 0);
              }

              this.disconnectSource();
              this.fire("onPause", this);
            }

        }

        return this;
      }
    }, {
      key: "play",
      value: function play(time, loop) {
        switch (this.mediaType) {
          case "element":
            this.media.play();
            this.fire("onPlay", this);
            break;

          default:
            this.pause().connectSource();

            if (loop) {
              this.source.loop = true;
            }

            if (this.source.noteOn) {
              this.source.noteOn(this.context.currentTime, time);
            }

            if (this.source.start) {
              this.source.start(this.context.currentTime, time);
            }

        }

        this.fire("onPlay", this);
        return this;
      }
    }, {
      key: "connectSource",
      value: function connectSource() {
        this.source = this.createSource();
        this.source.connect(this.in);
      }
    }, {
      key: "disconnectSource",
      value: function disconnectSource() {
        this.source.disconnect(this.in);
        this.source = null;
        this.fire("onDisconnectSource", this);
      }
    }, {
      key: "connect",
      value: function connect(audioNode) {
        this.destination = audioNode;
        this.out.connect(audioNode);
        this.fire("onConnect", audioNode, this);
      }
    }, {
      key: "disconnect",
      value: function disconnect() {
        this.out.disconnect(this.destination);
        this.destination = null;
        this.fire("onDisconnect", this);
      }
    }, {
      key: "createSource",
      value: function createSource(buffer) {
        var _this2 = this;

        //console.log(arguments);
        var source = null;

        switch (this.mediaType) {
          case "audioNode":
            source = buffer || this.buffer;
            break;

          case "video":
          case "audio":
            source = this.context.createBufferSource();
            source.buffer = buffer || this.buffer;
            break;

          case "decode":
            this.rawBuffer = buffer;
            this.urlStream = URL.createObjectURL(new Blob([this.rawBuffer]));
            this.context.decodeAudioData(buffer, function (decoded) {
              _this2.buffer = decoded;
              _this2.ready = true;

              _this2.fire("onReady", _this2);
            }, function (error) {
              _this2.eventsManager.fire("onError", _this2, error); // only on error attempt to sync on frame boundary
              //if(this.syncStream()) this.createSource(type, buffer);

            });
            break;

          case "stream":
            source = this.context.createMediaStreamSource(buffer || this.buffer);
            break;

          case "element":
            source = this.context.createMediaElementSource(this.media);
            break;
        }

        return source;
      }
    }, {
      key: "syncStream",
      value: function syncStream() {
        var buf8 = new Uint8Array(this.buffer);
        Uint8Array.prototype.indexOf = Array.prototype.indexOf;
        var i = this.sync,
            b = buf8;

        while (1) {
          this.retry++; //nodeGain

          i = b.indexOf(0xFF, i);

          if (i === -1 || b[i + 1] & 0xE0 === 0xE0) {
            break;
          }

          i++;
        }

        if (i !== -1) {
          var tmp = this.buffer.slice(i); //carefull there it returns copy

          delete this.buffer;
          this.buffer = null;
          this.buffer = tmp;
          this.sync = i;
          return true;
        }

        return false;
      }
    }, {
      key: "load",
      value: function load(url) {
        var _this3 = this;

        this.transport = new XMLHttpRequest();
        this.transport.open("GET", url, true);
        this.transport.responseType = "arraybuffer";

        this.transport.onload = function () {
          // Asynchronously decode the audio file data in request.response
          _this3.mediaType = "decode";

          _this3.createSource(_this3.transport.response);

          _this3.contentType = _this3.transport.getResponseHeader("content-type").split(";")[0];

          switch (_this3.contentType) {
            case /audio\/.*/.test(_this3.contentType) ? _this3.contentType : null:
              _this3.mediaType = "audio";
              break;

            case /video\/.*/.test(_this3.contentType) ? _this3.contentType : null:
              _this3.mediaType = "video";
              break;
          }
        };

        this.transport.onerror = function () {
          console.error('BufferLoader: XHR error');
        };

        this.transport.send();
      }
    }]);

    return Track;
  }();

  stage.extend(stage.media, {
    webAudioApi: webAudioApi,
    mediaMix: mediaMix,
    Track: Track,
    audioBus: audioBus
  });
  return stage.media;
};

/***/ }),

/***/ "./src/media/webrtc/transaction.es6":
/*!******************************************!*\
  !*** ./src/media/webrtc/transaction.es6 ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

module.exports = function (stage) {
  // CALLBACK SDP PARSER
  var parseSdp = function parseSdp(description) {
    var sdpLines = description.sdp.split('\r\n');
    var newline = ""; // Search for m line.

    for (var i = 0; i < sdpLines.length; i++) {
      var line = sdpLines[i];

      switch (description.type) {
        case "offer":
          /*if (line.search('a=crypto') !== -1) {
            console.log("PARSE SDP DELETE CRYPTO ");
            continue ;
          }*/

          /*if (line.search('a=setup:actpass') !== -1) {
            console.log("PARSE SDP REPLACE setup :  actpass by active  ");
            line = line.replace("a=setup:actpass", "a=setup:active")
          }*/
          break;

        case "answer":
          /*if (line.search('a=crypto') !== -1) {
            console.log("PARSE SDP DELETE CRYPTO ");
            continue ;
          }*/

          /*if (line.search('a=setup:actpass') !== -1) {
            console.log("PARSE SDP REPLACE setup :  actpass by active  ");
            line = line.replace("a=setup:actpass", "a=setup:active")
          }*/
          break;
      }

      if (i === sdpLines.length - 1) {
        newline += line;
      } else {
        newline += line + "\r\n";
      }
    }

    description.sdp = newline;
    return description;
  };
  /*
   *
   *  CLASS TRANSACTION WEBRTC
   *
   */


  var Transaction =
  /*#__PURE__*/
  function (_stage$Service) {
    _inherits(Transaction, _stage$Service);

    function Transaction(webrtc, from, to, dialog, settings) {
      var _this;

      _classCallCheck(this, Transaction);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Transaction).call(this, "WEBRTC TRANSACTION", webrtc.container, stage.notificationsCenter.create(settings || {})));
      _this.webrtc = webrtc; //this.notificationsCenter = stage.notificationsCenter.create(settings || {}, this);

      _this.dialog = dialog || null;
      _this.error = null;

      if (_this.dialog) {
        _this.callId = _this.dialog.callId;
      }

      _this.protocol = webrtc.protocol;
      _this.from = from;

      try {
        if (to instanceof stage.media.userMedia) {
          _this.to = to;
        } else {
          _this.to = new stage.media.userMedia(to, settings);
        }
      } catch (e) {
        throw e;
      }

      _this.asyncCandidates = _this.webrtc.settings.asyncCandidates;

      _this.logger("CREATE TRANSATION WEBRTC", "DEBUG");

      _this.RTCPeerConnection = _this.createPeerConnection();

      _this.RTCPeerConnection.addStream(_this.from.stream); // MANAGE DTMF


      _this.dtmfSender = null;

      if (_this.webrtc.settings.dtmf) {
        try {
          _this.initDtmfSender(_this.from.stream);

          _this.webrtc.listen(_assertThisInitialized(_assertThisInitialized(_this)), "onKeyPress", _this.sendDtmf); // FIXME TRY TO RECEIVE DTMF RTP-EVENT

          /*this.webrtc.listen(this, "onRemoteStream",function(event, mediaStream, transaction){
            this.logger( "DTMF setRemoteStream", "DEBUG")
            this.initDtmfReceiver( this.from.stream );
          });*/

        } catch (e) {
          _this.webrtc.logger(e, "ERROR");

          throw e;
        }
      } // MANAGE CANDIDATES


      _this.candidates = [];

      _this.listen(_assertThisInitialized(_assertThisInitialized(_this)), "onIcecandidate", function (transaction, candidates, peerConnection) {
        //console.log(" onIcecandidate : " + peerConnection.localDescription.type )
        var to = null;

        if (this.asyncCandidates && this.candidates.length) {
          //console.log( message.dailog)
          to = this.dialog.to.replace("<sip:", "").replace(">", "");
          this.logger("CANDIDATE TO" + to, "DEBUG");
          this.logger("CANDIDATE TO" + this.to.name, "DEBUG");
          this.dialog.invite(to, JSON.stringify(this.candidates), "ice/candidate");
        } else {
          if (peerConnection.localDescription.type === "offer") {
            this.sessionDescription = parseSdp.call(this, peerConnection.localDescription);

            if (this.dialog) {
              to = this.dialog.to.replace("<sip:", "").replace(">", "");
              this.logger("CANDIDATE TO" + to, "DEBUG");
              this.logger("CANDIDATE TO" + this.to.name, "DEBUG");
              this.dialog.invite(to, this.sessionDescription);
            } else {
              this.dialog = this.webrtc.protocol.invite(this.to.name, this.sessionDescription);
              this.callId = this.dialog.callId;
              this.webrtc.fire("onInvite", this, this.to, this.sessionDescription);
            }
          }

          if (peerConnection.localDescription.type === "answer") {
            this.sessionDescription = peerConnection.localDescription;

            if (this.sessionDescription && !this.error) {
              this.fire("onCreateAnwser", this.to, this.sessionDescription, this, this.dialog);
            }
          }
        }
      });

      _this.listen(_assertThisInitialized(_assertThisInitialized(_this)), "onCreateAnwser", function (to, sessionDescription, webrtcTransaction, diag) {
        var response = this.dialog.currentTransaction.createResponse(200, "OK", this.sessionDescription.sdp, "application/sdp");
        response.send();
      });

      return _this;
    }

    _createClass(Transaction, [{
      key: "createPeerConnection",
      value: function createPeerConnection() {
        var _this2 = this;

        try {
          // CREATE PeerConnection
          this.logger(this.webrtc.settings.optional, "DEBUG"); //console.log(this.webrtc.settings.optional)

          this.RTCPeerConnection = new RTCPeerConnection(this.webrtc.settings.optional); // MANAGE EVENT CANDIDATES

          this.RTCPeerConnection.onicecandidate = function (event) {
            // FIX firefox fire many time onicecandidate  iceGatheringState === complete
            var old = _this2.iceGatheringState;

            if (event.target) {
              _this2.iceGatheringState = event.target.iceGatheringState || _this2.RTCPeerConnection.iceGatheringState;
            } else {
              _this2.iceGatheringState = _this2.RTCPeerConnection.iceGatheringState;
            }

            var type = _this2.RTCPeerConnection.localDescription.type; //console.log(this.iceGatheringState)
            //console.log(type)

            if (type === "offer" && _this2.iceGatheringState === 'complete' && old !== "complete") {
              //console.log("PASSS CANDIDATE")
              _this2.fire("onIcecandidate", _this2, _this2.candidates, _this2.RTCPeerConnection);
            } else if (event && event.candidate === null) {// candidates null !!!
            } else {
              _this2.logger("WEBRTC : ADD CANDIDATE", "DEBUG");

              if (event.candidate) {
                _this2.candidates.push(event.candidate);
              }

              if (type === "answer") {
                _this2.fire("onIcecandidate", _this2, _this2.candidates, _this2.RTCPeerConnection);

                _this2.RTCPeerConnection.onicecandidate = null;
              }
            }
          }; // MANAGE STREAM


          this.RTCPeerConnection.onaddstream = function (event) {
            //console.log(event)
            _this2.setRemoteStream(event);

            _this2.logger("WEBRTC : ADD STREAM ", "DEBUG");
          };

          return this.RTCPeerConnection;
        } catch (e) {
          this.logger(e, "ERROR");
          this.webrtc.fire("onError", this, e);
        }
      } // FIXME TRY TO RECEIVE DTMF RTP-EVENT

      /*initDtmfReceiver (mediaStream){
        console.log(this.RTCPeerConnection)
        if ( ! this.RTCPeerConnection.createDTMFSender ) {
          throw new Error(" RTCPeerConnection method createDTMFSender() !!!! which is not support by this browser");
        }
          if (mediaStream !== null) {
          try {
            var remoteAudioTrack = mediaStream.getAudioTracks()[0];
            var dtmfSender = this.RTCPeerConnection.createDTMFSender(remoteAudioTrack);
            dtmfSender.ontonechange = (tone) => {
              this.logger("dtmfOnToneChange", "DEBUG") ;
              this.webrtc.fire("dtmfOnToneChange", tone , this);
            };
          }catch(e){
            throw e ;
          }
           } else {
          throw new Error( 'No local stream to create DTMF Sender', 500)
          }
      }*/

    }, {
      key: "initDtmfSender",
      value: function initDtmfSender(mediaStream) {
        var _this3 = this;

        switch (this.webrtc.settings.dtmf) {
          case "SIP-INFO":
            var func = function func() {};

            func.prototype.insertDTMF = function (key, duration, gap) {
              var description = "Signal=" + key + "\nDuration=" + duration;
              var type = "application/dtmf-relay";

              _this3.dialog.info(description, type);
            };

            this.dtmfSender = new func();
            break;

          case "RTP-EVENT":
            if (!this.RTCPeerConnection.createDTMFSender) {
              throw new Error(" RTCPeerConnection method createDTMFSender() !!!! which is not support by this browser", 500);
            }

            if (mediaStream !== null) {
              var localAudioTrack = mediaStream.getAudioTracks()[0];
              this.dtmfSender = this.RTCPeerConnection.createDTMFSender(localAudioTrack);

              this.dtmfSender.ontonechange = function (tone) {
                _this3.webrtc.fire("dtmfOnToneChange", tone, _this3);
              };
            } else {
              throw new Error('No local stream to create DTMF Sender', 500);
            }

            break;
        }
      }
    }, {
      key: "sendDtmf",
      value: function sendDtmf(code, key, event) {
        if (this.dialog.status !== this.dialog.statusCode.ESTABLISHED) {
          return;
        }

        if (this.dtmfSender) {
          var duration = 500;
          var gap = 50;
          this.logger('DTMF SEND ' + key + '  duration :  ' + duration + ' gap :  ' + gap, "DEBUG");
          return this.dtmfSender.insertDTMF(key, duration, gap);
        }

        throw new Error(" DTMF SENDER not ready");
      }
    }, {
      key: "createOffer",
      value: function createOffer() {
        var _this4 = this;

        return this.RTCPeerConnection.createOffer(function (sessionDescription) {
          try {
            _this4.sessionDescription = parseSdp.call(_this4, sessionDescription);

            _this4.from.setDescription(_this4.RTCPeerConnection.setLocalDescription(_this4.sessionDescription, function () {
              // ASYNC CANDIDATES
              if (_this4.asyncCandidates) {
                // INVITE
                _this4.dialog = _this4.webrtc.protocol.invite(_this4.to.name, _this4.sessionDescription);
                _this4.callId = _this4.dialog.callId;

                _this4.webrtc.fire("onInvite", _this4, _this4.to, _this4.sessionDescription);
              } else {// SYNC CANDIDATES

                /*this.webrtc.listen(this, "onIcecandidate" , function(transaction, candidates, peerConnection){
                  if ( peerConnection.localDescription.type == "offer" ){
                    this.sessionDescription = parseSdp.call(this, peerConnection.localDescription ) ;
                    if ( this.dialog ){
                      var to = this.dialog.to.replace("<sip:", "").replace(">","") ;
                      this.dialog.invite(to, this.sessionDescription);
                    }else{
                      this.dialog = this.webrtc.protocol.invite(this.to.name, this.sessionDescription);
                      this.webrtc.fire("onInvite", this, this.to.name, this.sessionDescription );
                      this.callId = this.dialog.callId ;
                    }
                  }
                })*/
              }
            }, function (error) {
              _this4.error = error;

              _this4.webrtc.fire("onError", _this4, error);
            }));
          } catch (e) {
            throw e;
          }
        }, function (error) {
          _this4.webrtc.fire("onError", _this4, error);
        }, this.from.settings.constraintsOffer);
      }
    }, {
      key: "setRemoteStream",
      value: function setRemoteStream(event) {
        if (event) {
          //console.log(event.stream.getVideoTracks());
          this.to.createMediaStream(null, null);
          this.to.mediaStream.setStream(event.stream);
          var type = this.RTCPeerConnection.remoteDescription.type;

          if (event.type === "video" || event.type === "addstream") {
            this.webrtc.notificationsCenter.fire("onRemoteStream", type, event, this.to.mediaStream, this);
          }
        }

        return this.to.createMediaStream;
      }
    }, {
      key: "setRemoteDescription",
      value: function setRemoteDescription(type, user, description, dialog) {
        var _this5 = this;

        //console.log("setRemoteDescription")
        this.currentTransaction = dialog.currentTransaction;
        var desc = {
          type: type,
          sdp: description
        }; //console.log( desc );

        var remoteDesc = parseSdp.call(this, desc);
        var ClassDesc = new RTCSessionDescription(remoteDesc);
        this.remoteDescription = this.RTCPeerConnection.setRemoteDescription(ClassDesc, function () {
          if (_this5.RTCPeerConnection.remoteDescription.type === "offer") {
            //console.log("WEBRTC : onRemoteDescription ");
            //this.doAnswer(dialog);
            _this5.webrtc.fire("onOffer", _this5.webrtc, _this5);

            _this5.webrtc.fire("onRemoteDescription", _this5.from, _this5, _this5.to);
          } else {
            _this5.webrtc.fire("onOffHook", _this5, dialog);
          }
        }, function (error) {
          _this5.error = error;

          _this5.webrtc.fire("onError", _this5, error);
        });
        return this.remoteDescription;
      }
    }, {
      key: "doAnswer",
      value: function doAnswer(dialog) {
        var _this6 = this;

        return this.RTCPeerConnection.createAnswer(function (sessionDescription) {
          _this6.from.setDescription(sessionDescription);

          _this6.RTCPeerConnection.setLocalDescription(sessionDescription, function () {
            _this6.sessionDescription = sessionDescription;

            if (_this6.asyncCandidates) {
              _this6.fire("onCreateAnwser", _this6.to, _this6.sessionDescription, _this6, dialog);
            }

            _this6.webrtc.fire("onOffHook", _this6, dialog);
          }, function (error) {
            _this6.error = error;

            _this6.webrtc.fire("onError", _this6, error);
          });
        }, // error
        function (e) {
          _this6.error = e;

          _this6.webrtc.fire("onError", _this6, e);
        }, this.from.settings.constraints);
      }
    }, {
      key: "bye",
      value: function bye() {
        if (this.dialog) {
          this.dialog.bye();
        }
      }
    }, {
      key: "cancel",
      value: function cancel() {
        if (this.currentTransaction) {
          this.currentTransaction.cancel();
        }

        this.webrtc.closeTransaction(this, this.to.name);
      }
    }, {
      key: "decline",
      value: function decline() {
        if (this.currentTransaction) {
          this.currentTransaction.decline();
        }

        this.webrtc.closeTransaction(this, this.to.name);
      }
    }, {
      key: "close",
      value: function close() {
        this.logger("WEBRTC CLOSE TRANSACTION  : " + this.callId, "DEBUG");

        if (this.RTCPeerConnection) {
          this.RTCPeerConnection.close();
        } else {
          this.logger("WEBRTC  TRANSACTION ALREADY CLOSED : " + this.callId, "WARNING");
        }

        if (this.webrtc) {
          this.webrtc.unListen("onKeyPress", this.sendDtmf);
        }

        this.clear();
        return this;
      }
    }, {
      key: "clear",
      value: function clear() {
        if (this.RTCPeerConnection) {
          this.RTCPeerConnection = null;
          delete this.RTCPeerConnection;
        }

        if (this.webrtc) {
          this.webrtc = null;
          delete this.webrtc;
        }

        if (this.currentTransaction) {
          this.currentTransaction = null;
          delete this.currentTransaction;
        }

        if (this.candidates) {
          this.candidates = null;
          delete this.candidates;
        }

        if (this.dialog) {
          this.dialog = null;
          delete this.dialog;
        }

        if (this.from) {
          this.from = null;
          delete this.from;
        }

        if (this.to) {
          this.to = null;
          delete this.to;
        }

        if (this.error) {
          this.error = null;
          delete this.error;
        }
      }
    }]);

    return Transaction;
  }(stage.Service);

  stage.extend(stage.media, {
    webrtcTransaction: Transaction
  });
  return Transaction;
};

/***/ }),

/***/ "./src/media/webrtc/user.es6":
/*!***********************************!*\
  !*** ./src/media/webrtc/user.es6 ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

module.exports = function (stage) {
  /*
   *
   *  CLASS USER
   *
   */
  var userSettings = {
    constraintsOffer: {
      mandatory: {
        'OfferToReceiveAudio': true,
        'OfferToReceiveVideo': true
      }
    },
    //constraintsOffer: stage.browser.Gecko ? {'mandatory': {'MozDontOfferDataChannel':true}} : null
    displayName: ""
  };

  var User =
  /*#__PURE__*/
  function () {
    function User(userName, settings) {
      _classCallCheck(this, User);

      this.name = userName;
      this.settings = stage.extend(true, {}, userSettings, settings);
      this.displayName = this.settings.displayName || userName;
      this.audio = this.settings.constraintsOffer.mandatory.OfferToReceiveAudio;
      this.video = this.settings.constraintsOffer.mandatory.OfferToReceiveVideo;
      this.mediaStream = null;
      this.description = "";
    }

    _createClass(User, [{
      key: "createMediaStream",
      value: function createMediaStream(succesCallback, errorMedia) {
        this.mediaStream = new stage.media.mediaStream(null, {
          audio: this.audio,
          video: this.video,
          onSucces: succesCallback,
          onError: errorMedia
        });
        return this.mediaStream;
      }
    }, {
      key: "setDescription",
      value: function setDescription(desc) {
        this.description = desc;
      }
    }]);

    return User;
  }();

  stage.extend(stage.media, {
    userMedia: User
  });
  return User;
};

/***/ }),

/***/ "./src/media/webrtc/webrtc.es6":
/*!*************************************!*\
  !*** ./src/media/webrtc/webrtc.es6 ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

module.exports = function (stage) {
  /*
   *
   *  CLASS WEBRTC
   *
   */
  var defaultSettings = {
    audio: true,
    video: true,
    protocol: "SIP",
    sipPort: 5060,
    sipTransport: "WSS",
    dtmf: "SIP-INFO",
    // "SIP-INFO", "RTP-EVENT"

    /*
     * STUN  => { iceServers: [{ url: ! stage.browser.Gecko ? 'stun:stun.l.google.com:19302' : 'stun:23.21.150.121'}] }
     * TURN  => { iceServers: [{ url: "turn:webrtc%40live.com@numb.viagenie.ca", credential: ""}] }
     */
    iceServers: [],
    optional: stage.browser.Gecko ? {
      'DtlsSrtpKeyAgreement': 'true'
    } : {
      'DtlsSrtpKeyAgreement': 'true',
      'rtcpMuxPolicy': 'negotiate'
    },
    asyncCandidates: false
  };

  var WebRtc =
  /*#__PURE__*/
  function (_stage$Service) {
    _inherits(WebRtc, _stage$Service);

    function WebRtc(server, transport, settings) {
      var _this;

      _classCallCheck(this, WebRtc);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(WebRtc).call(this, "WEBRTC", null, null, settings));
      _this.settings = stage.extend(true, {}, defaultSettings, settings);
      _this.settings.optional.iceServers = _this.settings.iceServers;
      _this.protocol = null;
      _this.socketState = "close";
      _this.transactions = {}; //this.users = {};

      _this.transport = _this.connect(transport);

      if (_this.transport && _this.transport.publicAddress) {
        _this.publicAddress = _this.transport.publicAddress; //this.publicAddress = server;
        //this.publicAddress = this.transport.domain;
      }

      _this.server = server;

      _this.init();

      return _this;
    }

    _createClass(WebRtc, [{
      key: "init",
      value: function init() {
        delete this.protocol;
        this.protocol = null; // EVENTS WEBRTC

        this.listen(this, "onInvite", function (transaction, userTo, description) {
          this.transactions[transaction.callId] = transaction;
        });
        this.listen(this, "onOffer", function (webrtc, transaction) {
          this.transactions[transaction.callId] = transaction;
        });
        this.listen(this, "onAccept", function (webrtc, transac) {
          transac.doAnswer(transac.dialog); //transac.setRemoteDescription("offer", transac.to, transac.to.description, transac.dialog);
        });
        this.listen(this, "onDeclineOffer", function (webrtc, transac) {
          var ret = transac.dialog.currentTransaction.createResponse(603, "Declined");
          ret.send();
          /*var ret = message.transaction.createResponse(
            603,
            "Declined"
          );
          ret.send();*/

          this.closeTransaction(transac);
        }); // MANAGE PROTOCOL

        switch (this.settings.protocol) {
          case "SIP":
            this.protocol = new stage.io.protocols.sip(this.server, this.transport, {
              portServer: this.settings.sipPort,
              transport: this.settings.sipTransport
            });
            this.protocol.listen(this, "onRegister", function (sip, message) {
              var _this2 = this;

              switch (message.code) {
                case 200:
                  this.user.createMediaStream(function (stream) {
                    _this2.user.stream = stream;

                    _this2.notificationsCenter.fire("onMediaSucces", _this2.user.mediaStream, _this2.user);
                  }, function (e) {
                    _this2.notificationsCenter.fire("onError", _this2, e);
                  });
                  this.notificationsCenter.fire("onRegister", this.user, this);
                  break;

                default:
                  this.notificationsCenter.fire("onError", this.protocol, message);
                  break;
              }
            });
            this.protocol.listen(this, "onUnRegister", function (sip, message) {
              this.fire("onUnRegister", sip, message);
            });
            this.protocol.listen(this, "onRinging", function (sip, message) {
              var transaction = this.transactions[message.callId];

              if (transaction) {
                this.notificationsCenter.fire("onRinging", message.toName, transaction);
              }
            });
            this.protocol.listen(this, "onTrying", function (sip, message) {
              var transaction = this.transactions[message.callId];

              if (transaction) {
                this.notificationsCenter.fire("onTrying", message.toName, transaction);
              }
            });
            this.protocol.listen(this, "onInfo", function (message) {
              var transaction = this.transactions[message.callId]; //console.log(message);

              if (message.contentType === "application/dtmf-relay") {
                this.fire("onDtmf", message.body.dtmf, transaction);
              }
            });
            this.protocol.listen(this, "onCancel", function (message) {
              var transaction = this.transactions[message.callId];

              if (transaction) {
                this.notificationsCenter.fire("onCancel", message.body.body, transaction);
                this.closeTransaction(transaction, message.fromName);
              }
            });
            this.protocol.listen(this, "onInvite", function (message, dialog) {
              var _this3 = this;

              var res = null;
              var transac = null;

              switch (message.header["Content-Type"]) {
                case "application/sdp":
                  if (message.rawBody) {
                    if (dialog.status === dialog.statusCode.INITIAL) {
                      // TODO MANAGE MULTI CALL
                      res = message.transaction.createResponse(100, "trying");
                      res.send(); // transaction WEBRTC

                      try {
                        transac = this.createTransaction(message.fromName, dialog, {
                          displayName: message.fromNameDisplay || ""
                        });
                        transac.to.setDescription(message.rawBody);
                      } catch (e) {
                        res = message.transaction.createResponse(500, e.message || e);
                        res.send();
                        return;
                      }

                      res = message.transaction.createResponse(180, "Ringing");
                      res.send();

                      try {
                        transac.setRemoteDescription("offer", transac.to, transac.to.description, transac.dialog);
                      } catch (e) {
                        res = message.transaction.createResponse(500, e.message || e);
                        res.send();
                      }

                      return;
                    }

                    if (dialog.status === dialog.statusCode.ESTABLISHED) {
                      // HOLD THE LINE
                      message.transaction.decline();
                    }
                  }

                  break;

                case "ice/candidate":
                  if (message.rawBody) {
                    var transaction = this.transactions[message.callId];
                    var ret = null;

                    if (!transaction) {
                      ret = message.transaction.createResponse(500, "no transaction ");
                      ret.send();
                      return;
                    }

                    res = JSON.parse(message.rawBody);
                    ret = message.transaction.createResponse(100, "trying");
                    ret.send();

                    var _loop = function _loop(i) {
                      candidate = new RTCIceCandidate(res[i]);
                      transaction.RTCPeerConnection.addIceCandidate(candidate, function () {
                        _this3.logger("WEBRTC remote CANDIDATES   " + res[i].candidate, "DEBUG");
                      }, function (e) {
                        console.log(e);

                        _this3.logger("WEBRTC Error CANDIDATES " + res[i].candidate, "ERROR");
                      });
                    };

                    for (var i = 0; i < res.length; i++) {
                      var candidate;

                      _loop(i);
                    }

                    if (transaction.candidates.length) {
                      ret = message.transaction.createResponse(200, "OK", JSON.stringify(transaction.candidates), "ice/candidate");
                      ret.send();
                      transaction.candidates = [];
                    } else {
                      ret = message.transaction.createResponse(200, "OK");
                      ret.send(); //transaction.candidates= [];

                      /*this.listen(this, "onIcecandidate" , function(transaction, candidates, peerConnection){
                        var ret = message.transaction.createResponse(200, "OK", JSON.stringify(transaction.candidates), "ice/candidate");
                        ret.send();
                        transaction.candidates= [];
                      });*/
                    }
                  }

                  break;

                default:
                  this.notificationsCenter.fire("onError", this.protocol, message);
              }
            });
            this.protocol.listen(this, "onTimeout", function (sip, message) {
              this.notificationsCenter.fire("onTimeout", message.method, 408, message);
              var transac = this.transactions[message.callId];

              if (transac) {
                this.closeTransaction(transac, transac.to.name);
              }
            });
            this.protocol.listen(this, "onDecline", function (message) {
              if (message.callId in this.transactions) {
                var transac = this.transactions[message.callId];
                this.fire("onDecline", this, transac);
                this.closeTransaction(transac);
              }
            });
            this.protocol.listen(this, "onError", function (Class, message) {
              this.notificationsCenter.fire("onError", Class, message);
              var transac = this.transactions[message.callId];

              if (transac) {
                this.closeTransaction(transac, transac.to.name);
              }
            });
            this.protocol.listen(this, "onQuit", function (protocol) {
              this.fire("onQuit", this);
              this.close();
            });
            this.protocol.listen(this, "onInitCall", function (to, dialog, transaction) {
              if (dialog.callId in this.transactions) {
                var transac = this.transactions[dialog.callId];
                transac.currentTransaction = transaction;
                this.notificationsCenter.fire("onInitCall", transac);
              }
            });
            this.protocol.listen(this, "onBye", function (message) {
              var transac = null;
              var name = null;

              if (message.callId in this.transactions) {
                transac = this.transactions[message.callId];
                name = message.fromName;
              }

              if (transac) {
                this.notificationsCenter.fire("onOnHook", transac, message);
                this.closeTransaction(transac, name);
              } else {
                // WHEN USER LOCAL STOP REGISTRATION
                if (message.fromName === this.user.name) {
                  this.close();
                }
              }
            });
            this.protocol.listen(this, "onCall", function (message) {
              var _this4 = this;

              var transac = this.transactions[message.callId];

              if (message.toNameDisplay) {
                transac.to.displayName = message.toNameDisplay;
              } //var from = this.users[message.toName];


              if (message.dialog.status === message.dialog.statusCode.EARLY && message.header["Content-Type"] === "application/sdp") {
                this.notificationsCenter.fire("onAnwer", message);
                transac.to.setDescription(message.rawBody);
                transac.setRemoteDescription("answer", transac.to, message.rawBody, message.dialog);
                /*if ( this.settings.asyncCandidates && transac.candidates.length){
                  //console.log( message.dailog)
                  message.dialog.invite(message.to, JSON.stringify(transac.candidates), "ice/candidate")
                }*/
                //this.notificationsCenter.fire( "onOffHook", transac , message );
              } else {}

              if (message.header["Content-Type"] === "ice/candidate") {
                if (transac.candidates.length) {
                  var res = JSON.parse(message.rawBody);

                  var _loop2 = function _loop2(i) {
                    candidate = new RTCIceCandidate(res[i]);
                    transac.RTCPeerConnection.addIceCandidate(candidate, function () {
                      //console.log("Succes Candidate")
                      _this4.logger("WEBRTC ADD remote CANDIDATES :  " + res[i].candidate);
                    }, function (e) {
                      console.log(e);

                      _this4.logger("WEBRTC Error CANDIDATES " + res[i].candidate, "ERROR");
                    });
                  };

                  for (var i = 0; i < res.length; i++) {
                    var candidate;

                    _loop2(i);
                  }
                }
              }
            });
            this.protocol.listen(this, "onMessage", function (message) {
              this.fire("onMessage", message);
            });
            this.protocol.listen(this, "onSend", function (message) {
              this.fire("onSend", message);
            });
            this.listen(this, "onError", function (Class, error) {
              switch (true) {
                case Class instanceof WebRtc:
                  break;

                case Class instanceof stage.media.webrtcTransaction:
                  //console.log(Class.currentTransaction )
                  if (Class.currentTransaction) {
                    var response = Class.currentTransaction.createResponse(500, error.message || error);
                    response.send();
                  }

                  this.closeTransaction(Class, Class.to.name);
                  break;

                case Class instanceof Error:
                  break;
              }
            });
            break;

          default:
            throw new Error("WEBRTC Protocol not found ");
        }
      }
    }, {
      key: "connect",
      value: function connect(transport) {
        //console.log(transport instanceof stage.realtime  )
        if (transport) {
          transport.listen(this, "onConnect", function () {
            this.socketState = "open";
          });
          transport.listen(this, "onClose", function () {
            this.socketState = "close";
          });
          return transport;
        }
      }
    }, {
      key: "createTransaction",
      value: function createTransaction(userTo, dialog, settings) {
        try {
          var transaction = new stage.media.webrtcTransaction(this, this.user, userTo, dialog, settings);
          return transaction;
        } catch (e) {
          this.fire("onError", this, e);
          throw e;
        }
      }
    }, {
      key: "unRegister",
      value: function unRegister() {
        if (this.protocol) {
          this.protocol.unregister();
        } //console.log( "WEBRTC unregister")


        this.close();
      }
    }, {
      key: "register",
      value: function register(userName, password, settings) {
        this.user = new stage.media.userMedia(userName, settings);
        this.protocol.register(userName, password, settings);
      }
    }, {
      key: "createOffer",
      value: function createOffer(userTo) {
        var to = new stage.media.userMedia(userTo); //this.users[userTo] = to ;

        var transac = this.createTransaction(to);
        transac.createOffer();
        return transac;
      }
    }, {
      key: "acceptOffer",
      value: function acceptOffer(transaction) {
        this.fire("onAccept", this, transaction);
        return transaction;
      }
    }, {
      key: "declineOffer",
      value: function declineOffer(transaction) {
        this.fire("onDeclineOffer", this, transaction);
        return transaction;
      }
    }, {
      key: "closeTransaction",
      value: function closeTransaction(transation, name) {
        if (transation) {
          transation.close();
          delete this.transactions[transation.callId]; //delete this.users[name];
        }
      }
    }, {
      key: "close",
      value: function close() {
        var _this5 = this;

        this.fire("onClose", this);
        setTimeout(function () {
          _this5.clean();
        }, 2000);
      }
    }, {
      key: "clean",
      value: function clean() {
        this.cleanTransactions();

        if (this.protocol) {
          this.protocol.clear();
          this.protocol = null;
          delete this.protocol;
        }

        this.notificationsCenter.clearNotifications();
      }
    }, {
      key: "cleanTransactions",
      value: function cleanTransactions() {
        for (var trans in this.transactions) {
          try {
            this.transactions[trans].bye();
            this.transactions[trans].close();
          } catch (e) {
            this.logger(e, "ERROR");
          }

          delete this.transactions[trans];
        }
      }
    }, {
      key: "quit",
      value: function quit() {
        this.protocol.bye();
      }
    }]);

    return WebRtc;
  }(stage.Service);

  stage.media.webrtc = WebRtc;
  return WebRtc;
};

/***/ }),

/***/ "./src/structs/hash/hash.es6":
/*!***********************************!*\
  !*** ./src/structs/hash/hash.es6 ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

module.exports = function (stage) {
  'use strict';

  var ea = function () {
    if (stage.browser.Ie) {
      return function (callback) {
        var iterator = 0;

        for (var key in this.data) {
          //if ( ! Array.prototype[key] ){
          if (this.data.hasOwnProperty(key)) {
            var value = this.data[key];
            var pair = [key, value];
            pair.key = key;
            pair.value = value;
            callback(pair, iterator);
          }

          iterator++;
        }
      };
    } else {
      return function (callback) {
        var iterator = 0;

        for (var key in this.data) {
          var value = this.data[key];
          var pair = [key, value];
          pair.key = key;
          pair.value = value;
          callback(pair, iterator);
          iterator++;
        }
      };
    }
  }();

  var struct =
  /*#__PURE__*/
  function () {
    function struct(data) {
      _classCallCheck(this, struct);

      this.data = stage.typeOf(data) === "object" ? stage.extend(true, {}, data) : {};
    }

    _createClass(struct, [{
      key: "get",
      value: function get(key) {
        if (key === null || key === undefined) {
          return this.data;
        }

        if (key in this.data) {
          return this.data[key];
        }

        return false;
      }
    }, {
      key: "set",
      value: function set(key, value) {
        if (key !== null || key !== undefined) {
          return this.data[key] = value;
        }

        return false;
      }
    }, {
      key: "unset",
      value: function unset(key) {
        if (key in this.data) {
          delete this.data[key];
          return true;
        }

        return false;
      }
    }, {
      key: "hasKey",
      value: function hasKey(key) {
        if (key in this.data) {
          return true;
        }

        return false;
      }
    }, {
      key: "clear",
      value: function clear() {
        this.data = {};
        return true;
      }
    }, {
      key: "clone",
      value: function clone() {
        return stage.extend(true, {}, this.data);
      } //TODO

    }, {
      key: "inspect",
      value: function inspect() {} //TODO

    }, {
      key: "keys",
      value: function keys() {} //TODO

    }, {
      key: "values",
      value: function values() {}
    }, {
      key: "each",
      value: function each() {
        return ea.apply(this, arguments);
      }
    }, {
      key: "clone",
      value: function clone() {
        return new struct(this.data);
      }
    }, {
      key: "toObject",
      value: function toObject(key) {
        return stage.extend(true, {}, this.data);
      }
    }, {
      key: "merge",
      value: function merge(hash) {
        this.data = stage.extend(true, {}, this.data, hash);
      }
    }, {
      key: "toJson",
      value: function toJson(key) {
        if (key) return stage.json.stringify(this.get(key));
        return stage.json.stringify(this.data);
      } //TODO

    }, {
      key: "toQueryString",
      value: function toQueryString() {}
    }]);

    return struct;
  }();

  var obj = {
    struct: struct,
    local: {
      createHash: function createHash(data) {
        return new struct(data);
      }
    }
  };
  stage.structs.hash = obj;
  return obj;
};

/***/ }),

/***/ "./src/structs/queue/queue.es6":
/*!*************************************!*\
  !*** ./src/structs/queue/queue.es6 ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

module.exports = function (stage) {
  'use strict';

  var defaultSettings = {
    type: "FIFO",
    active: true
  };
  var codeError = {
    empty: 0,
    notFound: 1,
    stopped: 2
  };
  /*
  	*
  	*
  	*
  	*  EVENTS QUEUE : 
  	*	onQueued(queue) :	// fire when add value to queue
  	*	onDeQueued(queue) :	// fire when add value to queue
  	*	onRunStart:(queue)	// fire when begin to run along the queue
  	*	onRunFinish:(queue)	// fire when finish to run along the queue
  	*	onError(queue, error, errorCode):	// fire when an error 
  	*
  	*  ERROR CODES :
  	*	0 : 	empty
  	*	1 :	notFound
  	*	2 :	stopped
  	*
  	*  SETTINGS : default
  	*	type : "FIFO"  // "LIFO"
  	*
  	*
  	*
  	*/

  var struct =
  /*#__PURE__*/
  function () {
    function struct(localSettings) {
      _classCallCheck(this, struct);

      // Manage settings
      this.settings = stage.extend(true, {}, defaultSettings, localSettings);
      this.data = [];
      this.error = null;
      this.eventsQueue = stage.createEventsManager();
    }

    _createClass(struct, [{
      key: "listen",
      value: function listen(context, eventName, callback) {
        return this.eventsQueue.listen(context, eventName, callback);
      } // TODO LIFO

    }, {
      key: "enqueue",
      value: function enqueue(value) {
        if (this.settings.active) {
          var ret = this.data.push(value);
          this.eventsQueue.fireEvent("onQueued", this);
          return ret;
        } else {
          this.error = new Error("QUEUE is stoped");
          this.eventsQueue.fireEvent("onError", this, this.error, codeError.stopped);
          return null;
        }
      }
    }, {
      key: "remove",
      value: function remove(data) {
        if (this.isEmpty()) {
          this.error = new Error("QUEUE is empty");
          this.eventsQueue.fireEvent("onError", this, this.error, codeError.empty);
          return null;
        }

        if (stage.array.contain(this.data, data)) return stage.array.remove(this.data, data);
        this.error = new Error(data + " Not found");
        this.eventsQueue.fireEvent("onError", this, this.error, codeError.notFound);
        return null;
      } // TODO LIFO

    }, {
      key: "dequeue",
      value: function dequeue() {
        if (this.settings.active) {
          if (this.isEmpty()) {
            this.error = new Error("QUEUE is empty");
            this.eventsQueue.fireEvent("onError", this, this.error, codeError.empty);
            return null;
          }

          var value = this.data[0];
          stage.array.removeIndexOf(this.data, 0);
          this.eventsQueue.fireEvent("onDeQueued", this);
          return value;
        } else {
          this.error = new Error("QUEUE is stoped");
          this.eventsQueue.fireEvent("onError", this, this.error, codeError.stopped);
          return null;
        }
      }
    }, {
      key: "peek",
      value: function peek(data) {
        if (this.isEmpty()) {
          return null;
        }

        return this.data[0];
      }
    }, {
      key: "purge",
      value: function purge() {
        this.data.length = 0;
      }
    }, {
      key: "isEmpty",
      value: function isEmpty() {
        return this.data.length === 0;
      }
    }, {
      key: "count",
      value: function count() {
        return this.data.length;
      }
    }, {
      key: "getQueue",
      value: function getQueue() {
        return this.data;
      }
    }, {
      key: "start",
      value: function start() {
        this.settings.active = true;
      }
    }, {
      key: "stop",
      value: function stop() {
        this.settings.active = false;
      }
    }, {
      key: "run",
      value: function run(callback) {
        if (this.settings.active) {
          this.eventsQueue.fireEvent("onRunStart", this);
          stage.each(this.data, callback);
          this.eventsQueue.fireEvent("onRunFinish", this);
        } else {
          this.error = new Error("QUEUE is stoped");
          this.eventsQueue.fireEvent("onError", this, this.error, codeError.stopped);
          return null;
        }
      }
    }]);

    return struct;
  }();

  var createStruct = function createStruct(localSettings) {
    var Structs = new struct(localSettings);
    Structs.eventsQueue.settingsToListen(localSettings);

    if (Structs.error) {
      Structs.eventsQueue.fireEvent("onError", Structs, Structs.error);
      return Structs;
    }

    return Structs;
  };

  var obj = {
    struct: struct,
    local: {
      createQueue: function createQueue(localSettings) {
        if (!localSettings) {
          localSettings = {};
        }

        return createStruct(localSettings);
      }
    }
  };
  stage.structs.queues = obj;
  return obj;
};

/***/ }),

/***/ "./src/syslog/syslog.es6":
/*!*******************************!*\
  !*** ./src/syslog/syslog.es6 ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 *
 *
 *
 */
module.exports = function (stage) {
  'use strict';
  /*
   * default settings
   * <pre>
   *   moduleName:      "stage"
   *   maxStack:        100
   *   rateLimit:       false
   *   burstLimit:      3
   *   defaultSeverity: "DEBUG"
   *   checkConditions: "&&"
   *   async:         false
   *
   * </pre>
   */

  var defaultSettings = {
    moduleName: "SYSLOG",
    maxStack: 100,
    rateLimit: false,
    burstLimit: 3,
    defaultSeverity: "DEBUG",
    checkConditions: "&&",
    async: false
  };
  /*
   * Severity syslog
   * <pre>
   *    EMERGENCY   = 0
   *    ALERT       = 1
   *    CRITIC      = 2
   *    ERROR       = 3
   *    WARNING     = 4
   *    NOTICE      = 5
   *    INFO        = 6
   *    DEBUG       = 7
   * </pre>
   */

  var sysLogSeverity = ["EMERGENCY", "ALERT", "CRITIC", "ERROR", "WARNING", "NOTICE", "INFO", "DEBUG"];
  sysLogSeverity["EMERGENCY"] = 0;
  sysLogSeverity["ALERT"] = 1;
  sysLogSeverity["CRITIC"] = 2;
  sysLogSeverity["ERROR"] = 3;
  sysLogSeverity["WARNING"] = 4;
  sysLogSeverity["NOTICE"] = 5;
  sysLogSeverity["INFO"] = 6;
  sysLogSeverity["DEBUG"] = 7;
  /**
   *  Protocol Data Unit
   * @class  PDU
   * @constructor
   * @module library
   * @return {PDU}
   */

  var guid = 0;

  var PDU =
  /*#__PURE__*/
  function () {
    function PDU(pci, severity, moduleName, msgid, msg, date) {
      _classCallCheck(this, PDU);

      /* timeStamp @type Date*/
      this.timeStamp = new Date(date).getTime() || new Date().getTime();
      /* uid */

      this.uid = ++guid;
      /* severity */

      this.severity = translateSeverity(severity);
      /* severityName */

      this.severityName = sysLogSeverity[this.severity];
      /* typePayload */

      this.typePayload = stage.typeOf(pci);
      /*
       * protocole controle information
       * @type Void
       */

      this.payload = pci;
      /* moduleName */

      this.moduleName = moduleName;
      /* msgid */

      this.msgid = msgid || "";
      /* msg */

      this.msg = msg || "";
    }
    /**
     * Get Date in string format
     * @method getDate
     * @return {String} a date in string format .
     */


    _createClass(PDU, [{
      key: "getDate",
      value: function getDate() {
        return new Date(this.timeStamp).toTimeString();
      }
      /**
       * get a string representating the PDU protocole
       * @method toString
       * @return {String}  .
       */

    }, {
      key: "toString",
      value: function toString() {
        return "TimeStamp:" + this.getDate() + "  Log:" + this.payload + "  ModuleName:" + this.moduleName + "  SeverityName:" + this.severityName + "  MessageID:" + this.msgid + "  UID:" + this.uid + "  Message:" + this.msg;
      }
    }, {
      key: "parseJson",
      value: function parseJson(str) {
        var json = null;

        try {
          json = JSON.parse(str);

          for (var ele in json) {
            if (ele in this) {
              this[ele] = json[ele];
            }
          }
        } catch (e) {
          throw e;
        }

        return json;
      }
    }]);

    return PDU;
  }();

  var operators = {
    "<": function _(ele1, ele2) {
      return ele1 < ele2;
    },
    ">": function _(ele1, ele2) {
      return ele1 > ele2;
    },
    "<=": function _(ele1, ele2) {
      return ele1 <= ele2;
    },
    ">=": function _(ele1, ele2) {
      return ele1 >= ele2;
    },
    "==": function _(ele1, ele2) {
      return ele1 === ele2;
    },
    "!=": function _(ele1, ele2) {
      return ele1 !== ele2;
    },
    "RegExp": function RegExp(ele1, ele2) {
      return ele2.test(ele1);
    }
  };
  var conditionsObj = {
    severity: function severity(pdu, condition) {
      if (condition.operator !== "==") {
        //console.log(pdu.severity);
        //console.log(condition.data)
        return operators[condition.operator](pdu.severity, condition.data);
      } else {
        for (var sev in condition.data) {
          if (sev === pdu.severityName) return true;
        }
      }

      return false;
    },
    msgid: function msgid(pdu, condition) {
      if (condition.operator !== "==") {
        return operators[condition.operator](pdu.msgid, condition.data);
      } else {
        for (var sev in condition.data) {
          if (sev === pdu.msgid) return true;
        }
      }

      return false;
    },
    date: function date(pdu, condition) {
      return operators[condition.operator](pdu.timeStamp, condition.data);
    }
  };
  var logicCondition = {
    "&&": function _(myConditions, pdu) {
      var res = null;

      for (var ele in myConditions) {
        var res = conditionsObj[ele](pdu, myConditions[ele]); //console.log("condition :" +ele +"  "+res)

        if (!res) {
          break;
        }
      }

      return res;
    },
    "||": function _(myConditions, pdu) {
      var res = null;

      for (var ele in myConditions) {
        var res = conditionsObj[ele](pdu, myConditions[ele]);

        if (res) {
          break;
        }
      }

      return res;
    }
  };

  var checkFormatSeverity = function checkFormatSeverity(ele) {
    var res = false;

    switch (stage.typeOf(ele)) {
      case "string":
        res = ele.split(/,| /);
        break;

      case "number":
        res = ele;
        break;

      default:
        throw new Error("checkFormatSeverity bad format " + stage.typeOf(ele) + " : " + ele);
    }

    return res;
  };

  var checkFormatDate = function checkFormatDate(ele) {
    var res = false;

    switch (stage.typeOf(ele)) {
      case "date":
        res = ele.getTime();
        break;

      case "string":
        res = new Date(ele);
        break;

      default:
        throw new Error("checkFormatDate bad format " + stage.typeOf(ele) + " : " + ele);
    }

    return res;
  };

  var checkFormatMsgId = function checkFormatMsgId(ele) {
    var res = false;

    switch (stage.typeOf(ele)) {
      case "string":
        res = ele.split(/,| /);
        break;

      case "number":
        res = ele;
        break;

      case "object":
        if (ele instanceof RegExp) {
          res = ele;
        }

        break;

      default:
        throw new Error("checkFormatMsgId bad format " + stage.typeOf(ele) + " : " + ele);
    }

    return res;
  };

  var severityToString = function severityToString(severity) {
    var myint = parseInt(severity, 10);

    if (!isNaN(myint)) {
      var ele = sysLogSeverity[myint];
    } else {
      var ele = severity;
    }

    if (ele in sysLogSeverity) return ele;
    return false;
  };

  var sanitizeConditions = function sanitizeConditions(settingsCondition) {
    var res = true;
    if (stage.typeOf(settingsCondition) !== "object") return false;

    for (var ele in settingsCondition) {
      if (!ele in conditionsObj) {
        return false;
      }

      var condi = settingsCondition[ele];

      if (condi.operator && !(condi.operator in operators)) {
        throw new Error("Contitions bad operator : " + condi.operator);
      }

      if (condi.data) {
        switch (ele) {
          case "severity":
            if (condi.operator) {
              res = checkFormatSeverity(condi.data);

              if (res !== false) {
                condi.data = sysLogSeverity[severityToString(res[0])];
              } else {
                return false;
              }
            } else {
              condi.operator = "==";
              res = checkFormatSeverity(condi.data);

              if (res !== false) {
                condi.data = {};

                if (stage.typeOf(res) === "array") {
                  for (var i = 0; i < res.length; i++) {
                    var mySeverity = severityToString(res[i]);

                    if (mySeverity) {
                      condi.data[mySeverity] = sysLogSeverity[mySeverity];
                    } else {
                      return false;
                    }
                  }
                } else {
                  return false;
                }
              } else {
                return false;
              }
            }

            break;

          case "msgid":
            if (!condi.operator) {
              condi.operator = "==";
            }

            res = checkFormatMsgId(condi.data);

            if (res !== false) {
              if (stage.typeOf(res) === "array") {
                condi.data = {};

                for (var i = 0; i < res.length; i++) {
                  condi.data[res[i]] = "||";
                }
              } else {
                condi.data = res;
              }
            } else {
              return false;
            }

            break;

          case "date":
            res = checkFormatDate(condi.data);
            if (res) condi.data = res;else return false;
            break;

          default:
            return false;
        }
      } else {
        return false;
      }
    }

    return settingsCondition; //console.log(settingsCondition);
  };

  var translateSeverity = function translateSeverity(severity) {
    if (severity in sysLogSeverity) {
      if (typeof severity === 'number') var myseverity = sysLogSeverity[sysLogSeverity[severity]];else var myseverity = sysLogSeverity[severity];
    } else {
      if (!severity) return null;else throw new Error("not stage syslog severity :" + severity);
    }

    return myseverity;
  };

  var createPDU = function createPDU(payload, severity, moduleName, msgid, msg) {
    if (!severity) {
      var myseverity = sysLogSeverity[this.settings.defaultSeverity];
    } else {
      var myseverity = severity;
    }

    return new PDU(payload, myseverity, moduleName, msgid, msg);
  };
  /**
   * A class for product log in stage.
   * @example
   *
   *    var ERROR_DEFINE = {
   *       '-101': 'I18N string'
   *    };
   *
   *    var settings = {
   *        rateLimit:100,
   *        burstLimit:10,
   *        moduleName:"LIVE",
   *        defaultSeverity:"ERROR"
   *    };
   *
   *    var logIntance = new stage.syslog(settings);
   *
   *
   *    controller.logIntance.listen(context,function(pdu){
   *        logView(pdu)
   *    } )
   *
   *    controller.logIntance.listenWithConditions(context,{
   *        checkConditions: "&&",
   *        severity:{
   *            data:"CRITIC,ERROR"
   *            //data:"1,7"
   *        },
   *        date:{
   *            operator:">=",
   *            data:new Date()
   *        },
   *        msgid:{
   *            data:"myFunction"
   *        }
   *
   *
   *    },function(pdu){
   *        logView(pdu)
   *    } )
   *
   *
   *    var myFunction = function(error){
   *        controller.logIntance.logger(error, "ERROR", "myFunction", ERROR_DEFINE[error] );
   *    }
   *
   *
   *
   *    @class syslog
   *    @module library
   *    @constructor
   *    @param {Object} settings The settings to extend.
   *    @return syslog
   */


  var syslog =
  /*#__PURE__*/
  function (_stage$notificationsC) {
    _inherits(syslog, _stage$notificationsC);

    function syslog(settings) {
      var _this;

      _classCallCheck(this, syslog);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(syslog).call(this, settings));
      /**
       * extended settings
       * @property settings
       * @type Object
       * @see defaultSettings
       */

      _this.settings = stage.extend({}, defaultSettings, settings);
      /**
       * ring buffer structure container instances of PDU
       * @property ringStack
       * @type Array
       */

      _this.ringStack = new Array();
      /**
       * Ratelimit  Management log printed
       * @property burstPrinted
       * @type Number
       */

      _this.burstPrinted = 0;
      /**
       * Ratelimit  Management log dropped
       * @property missed
       * @type Number
       */

      _this.missed = 0;
      /**
       * Management log invalid
       * @property invalid
       * @type Number
       */

      _this.invalid = 0;
      /**
       * Counter log valid
       * @property valid
       * @type Number
       */

      _this.valid = 0;
      /**
       * Ratelimit  Management begin of burst
       * @property start
       * @private
       * @type Number
       */

      _this.start = 0;
      _this.fire = _this.settings.async ? _get(_getPrototypeOf(syslog.prototype), "fireAsync", _assertThisInitialized(_this)) : _get(_getPrototypeOf(syslog.prototype), "fire", _assertThisInitialized(_this));
      return _this;
    }

    _createClass(syslog, [{
      key: "pushStack",
      value: function pushStack(pdu) {
        if (this.ringStack.length === this.settings.maxStack) {
          this.ringStack.shift();
        }

        var index = this.ringStack.push(pdu); //console.log(this);

        this.valid++;
        return index;
      }
      /**
       * logger message
       * @method logger
       * @param {void} payload payload for log. protocole controle information
       * @param {Number || String} severity severity syslog like.
       * @param {String} msgid informations for message. example(Name of function for debug)
       * @param {String} msg  message to add in log. example (I18N)
       */

    }, {
      key: "logger",
      value: function logger(payload, severity, msgid, msg) {
        if (this.settings.rateLimit) {
          var now = new Date().getTime();
          this.start = this.start || now;

          if (now > this.start + this.settings.rateLimit) {
            this.burstPrinted = 0;
            this.missed = 0;
            this.start = 0;
          }

          if (this.settings.burstLimit && this.settings.burstLimit > this.burstPrinted) {
            try {
              if (payload instanceof PDU) {
                var pdu = payload;
              } else {
                var pdu = createPDU.call(this, payload, severity, this.settings.moduleName, msgid, msg);
              }
            } catch (e) {
              console.error(e);
              this.invalid++;
              return "INVALID";
            }

            this.pushStack(pdu);
            this.fire("onLog", pdu);
            this.burstPrinted++;
            return "ACCEPTED";
          }

          this.missed++;
          return "DROPPED";
        } else {
          try {
            if (payload instanceof PDU) {
              var pdu = payload;
            } else {
              var pdu = createPDU.call(this, payload, severity, this.settings.moduleName, msgid, msg);
            }
          } catch (e) {
            console.error(e);
            this.invalid++;
            return "INVALID";
          }

          this.pushStack(pdu);
          this.fire("onLog", pdu);
          return "ACCEPTED";
        }
      }
      /**
       * Clear stack of logs
       *
       * @method clearLogStack
       *
       *
       *
       */

    }, {
      key: "clearLogStack",
      value: function clearLogStack() {
        this.ringStack.length = 0;
      }
      /**
       * get hitory of stack
       * @method getLogStack
       * @param {Number} start .
       * @param {Number} end .
       * @return {array} new array between start end
       * @return {PDU} pdu
       */

    }, {
      key: "getLogStack",
      value: function getLogStack(start, end, contition) {
        if (contition) {
          var stack = this.getLogs(contition);
        } else {
          var stack = this.ringStack;
        }

        if (arguments.length === 0) return stack[stack.length - 1];
        if (!end) return stack.slice(start);
        if (start === end) return stack[stack.length - start - 1];
        return stack.slice(start, end);
      }
      /**
       * get logs with conditions
       * @method getLogs
       * @param {Object} conditions .
       * @return {array} new array with matches conditions
       */

    }, {
      key: "getLogs",
      value: function getLogs(conditions, stack) {
        var myStack = stack || this.ringStack;

        if (conditions.checkConditions && conditions.checkConditions in logicCondition) {
          var myFuncCondition = logicCondition[conditions.checkConditions];
          delete conditions.checkConditions;
        } else {
          var myFuncCondition = logicCondition[this.settings.checkConditions];
        }

        var tab = [];

        try {
          var Conditions = sanitizeConditions(conditions);
        } catch (e) {
          throw new Error("registreNotification conditions format error: " + e);
        }

        if (Conditions) {
          for (var i = 0; i < myStack.length; i++) {
            var res = myFuncCondition(Conditions, myStack[i]);
            if (res) tab.push(myStack[i]);
          }
        }

        return tab;
      }
      /**
       * take the stack and build a JSON string
       * @method logToJson
       * @return {String} string in JSON format
       */

    }, {
      key: "logToJson",
      value: function logToJson(conditions) {
        if (conditions) var stack = this.getLogs(conditions);else var stack = this.ringStack;
        return JSON.stringify(stack);
      }
      /**
       * load the stack as JSON string
       * @method loadStack
       * @param {Object} json or string stack serialize
       * @param {boolean} fire conditions events  .
       * @param {function} callback before fire conditions events
       * @return {String}
       */

    }, {
      key: "loadStack",
      value: function loadStack(stack, doEvent, beforeConditions) {
        if (!stack) throw new Error("syslog loadStack : not stack in arguments ");

        switch (stage.typeOf(stack)) {
          case "string":
            try {
              //console.log(stack);
              var st = JSON.parse(stack);
              return arguments.callee.call(this, st, doEvent);
            } catch (e) {
              throw e;
            }

            break;

          case "array":
          case "object":
            try {
              for (var i = 0; i < stack.length; i++) {
                var pdu = new PDU(stack[i].payload, stack[i].severity, stack[i].moduleName || this.settings.moduleName, stack[i].msgid, stack[i].msg, stack[i].timeStamp);
                this.pushStack(pdu);

                if (doEvent) {
                  if (beforeConditions && typeof beforeConditions === "function") beforeConditions.call(this, pdu, stack[i]);
                  this.fire("onLog", pdu);
                }
              }
            } catch (e) {
              throw e;
            }

            break;

          default:
            throw new Error("syslog loadStack : bad stack in arguments type");
        }

        ;
        return st || stack;
      }
      /**
       *
       *    @method  listenWithConditions
       *
       */

    }, {
      key: "listenWithConditions",
      value: function listenWithConditions(context, conditions, callback) {
        if (conditions.checkConditions && conditions.checkConditions in logicCondition) {
          var myFuncCondition = logicCondition[conditions.checkConditions];
          delete conditions.checkConditions;
        } else {
          var myFuncCondition = logicCondition[this.settings.checkConditions];
        }

        try {
          var Conditions = sanitizeConditions(conditions);
        } catch (e) {
          throw new Error("registreNotification conditions format error: " + e);
        }

        if (Conditions) {
          var func = function func(pdu) {
            var res = myFuncCondition(Conditions, pdu);

            if (res) {
              callback.apply(context || this, arguments);
            }
          };

          _get(_getPrototypeOf(syslog.prototype), "listen", this).call(this, this, "onLog", func);

          return func;
        }
      }
    }]);

    return syslog;
  }(stage.notificationsCenter.notification);

  stage.syslog = syslog;
  stage.PDU = PDU;
  return syslog;
};

/***/ }),

/***/ "./src/tools/xml.js":
/*!**************************!*\
  !*** ./src/tools/xml.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 *
 *
 *
 *
 *
 *
 *
 */
module.exports = function (stage) {
  /**
    	* \brief changes the given string to XML doc.
    	*
    	* \param string an XML string
    	* \return  the document  node root
    	*/
  var stringToDocumentXML = function () {
    if (!document.implementation.createDocument) {
      return function (str) {
        var doc = createDocument();
        doc.async = "false";
        doc.loadXML(str);
        return doc;
      };
    }

    return function (str) {
      try {
        var oDomDoc = new DOMParser().parseFromString(str, 'application/xml');
      } catch (e) {
        throw Error('xml function stringToDocumentXML : ' + e);
      }

      return oDomDoc;
    };
  }();

  var getDocumentRoot = function getDocumentRoot(doc) {
    var type = stage.typeOf(doc);

    if (type === "document") {
      return doc.documentElement || doc.childNodes[0];
    }

    if (type === "element") {
      var myDoc = doc.ownerDocument;
      return myDoc.documentElement || myDoc.childNodes[0];
    }
  }; //parseXML


  var parseXml = function parseXml(xml) {
    switch (stage.typeOf(xml)) {
      case "string":
        var root = getDocumentRoot(stringToDocumentXML(xml));
        break;

      case "document":
        var root = getDocumentRoot(xml);
        break;

      case "element":
        var root = xml;
        break;

      default:
        throw new Error("parseXml  bad type arguments");
    }

    return parseDOM(root);
  };

  var __force_array = null;

  var parseDOM = function parseDOM(root) {
    if (!root) return null;
    var force_array = null;
    __force_array = {};

    if (force_array) {
      for (var i = 0; i < force_array.length; i++) {
        __force_array[force_array[i]] = 1;
      }
    }

    var json = parseNode(root); // parse root node

    if (__force_array[root.nodeName]) {
      json = [json];
    }

    if (root.nodeType != 11) {
      // DOCUMENT_FRAGMENT_NODE
      var tmp = {};
      tmp[root.nodeName] = json; // root nodeName

      json = tmp;
    }

    return json;
  };

  var attr_prefix = "@";
  var name_space = ":";

  var parseNode = function parseNode(node) {
    if (!node) return null;

    switch (node.nodeType) {
      // COMMENT_NODE
      case 7:
        return null;
      // TEXT_NODE 

      case 3: // CDATA_SECTION_NODE

      case 4:
        if (node.nodeValue.match(/[^\x00-\x20]/)) return node.nodeValue;
        return null;
        break;
    }

    var ret = null;
    var data = {}; // parse Attributes 

    if (node.attributes && node.attributes.length) {
      ret = {};

      for (var i = 0; i < node.attributes.length; i++) {
        var key = node.attributes[i].nodeName;
        if (typeof key !== "string") continue;
        var val = node.attributes[i].value || node.attributes[i].nodeValue;
        if (!val) continue;
        key = attr_prefix + key;
        if (typeof data[key] == "undefined") data[key] = 0;
        data[key]++;
        addNode(ret, key, data[key], val);
      } //console.log(data)

    }

    if (node.childNodes && node.childNodes.length) {
      var textonly = true;
      if (ret) textonly = false; // some attributes exists

      for (var i = 0; i < node.childNodes.length && textonly; i++) {
        var ntype = node.childNodes[i].nodeType;
        if (ntype == 3 || ntype == 4) continue;
        textonly = false;
      }

      if (textonly) {
        if (!ret) ret = "";

        for (var i = 0; i < node.childNodes.length; i++) {
          ret += node.childNodes[i].nodeValue;
        }
      } else {
        if (!ret) ret = {};

        for (var i = 0; i < node.childNodes.length; i++) {
          var key = node.childNodes[i].nodeName;
          if (typeof key !== "string") continue;
          var val = parseNode(node.childNodes[i]);
          if (!val) continue;
          if (typeof data[key] === "undefined") data[key] = 0;
          data[key]++;
          addNode(ret, key, data[key], val);
        }
      }
    }

    return ret;
  };

  var addNode = function addNode(hash, key, cnts, val) {
    key = removeColon(key);

    if (__force_array && __force_array[key]) {
      if (cnts == 1) hash[key] = [];
      hash[key][hash[key].length] = val; // push
    } else if (cnts == 1) {
      // 1st sibling
      hash[key] = val;
    } else if (cnts == 2) {
      // 2nd sibling
      hash[key] = [hash[key], val];
    } else {
      // 3rd sibling and more
      hash[key][hash[key].length] = val;
    }
  };

  var removeColon = function removeColon(name) {
    return name ? name.replace(':', name_space) : name;
  };

  return stage.xml = {
    parseXml: parseXml,
    //parseNode:parseDOM,
    stringToDocumentXML: stringToDocumentXML //getDocumentRoot :getDocumentRoot

  };
};

/***/ }),

/***/ 0:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
});
//# sourceMappingURL=stage.js.map