/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 44);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(18);

var iterableToArray = __webpack_require__(19);

var nonIterableSpread = __webpack_require__(20);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Get; });
function Get(obj, path, emptyVal) {
  var modifyFn = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (v) {
    return v;
  };

  /** If nothing to search, return */
  if (!obj) {
    return emptyVal;
  }
  /** The search array, initial search item being the source */


  var Path = [obj];
  /** Populate the search array */

  if (path && path.toString().split) {
    Path = [obj].concat(path.toString().split("."));
  }

  var result = Path.reduce(function (accumulator, currentValue) {
    /** If through reduce, accumulator comes out empty, stop */
    if (accumulator === undefined || accumulator === null) {
      return emptyVal;
    }
    /** If a function, call it */


    if (currentValue.indexOf(".") === -1 && currentValue.indexOf("(") > -1) {
      var reg = /\((.*?)\)/g.exec(currentValue);
      var argsString = reg[1];
      var args = argsString.split(",").map(function (arg) {
        return !isNaN(arg) ? parseFloat(arg) : arg.trim();
      } // if has quotes -> string, no? -> number, obj, whatever
      );
      var functionName = currentValue.split("(")[0];

      if (typeof accumulator[functionName] === "function") {
        return accumulator[functionName].apply(accumulator, args);
      }
    }

    return accumulator[currentValue];
  });
  /** If nothing was found return emptyVal */

  if (result === undefined || result === null) {
    return emptyVal;
  }

  return modifyFn(result);
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(24);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentStore; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* eslint-disable tree-shaking/no-side-effects-in-initialization */

var ComponentStoreKey = Symbol["for"]("builtjs.ComponentStore");
var globalSymbols = Object.getOwnPropertySymbols(global);
var hasComponentStore = globalSymbols.indexOf(ComponentStoreKey) > -1;

var getTag = function getTag(element) {
  return Object(___WEBPACK_IMPORTED_MODULE_0__[/* Get */ "a"])(element, "tagName", "").toLowerCase();
};

if (!hasComponentStore) {
  global[ComponentStoreKey] = {
    components: {},
    themes: {},
    theme: function theme(_theme, element) {
      return Object.keys(_theme).forEach(function (property) {
        return element[property] = _theme[property];
      });
    },
    addComponent: function addComponent(element) {
      var tag = getTag(element);

      if (tag === "") {
        return;
      }

      if (!global[ComponentStoreKey].components[tag]) {
        global[ComponentStoreKey].components[tag] = [];
      }

      global[ComponentStoreKey].components[tag].push(element);
      global[ComponentStoreKey].triggerTagSubscriptions(tag, element);

      if (global[ComponentStoreKey].themes[tag]) {
        Object.keys(global[ComponentStoreKey].themes[tag]).forEach(function (property) {
          return element[property] = global[ComponentStoreKey].themes[tag][property];
        });
      }
    },
    removeComponent: function removeComponent(element) {
      var tag = getTag(element);

      if (tag === "") {
        return;
      }

      if (!global[ComponentStoreKey].components[tag]) {
        return;
      }

      var index = global[ComponentStoreKey].components[tag].indexOf(element);

      if (index === -1) {
        return;
      }

      global[ComponentStoreKey].components[tag].splice(index, 1);
    },
    addTheme: function addTheme(tag, theme) {
      global[ComponentStoreKey].themes[tag] = theme;

      if (!global[ComponentStoreKey].components[tag]) {
        return;
      }

      global[ComponentStoreKey].components[tag].forEach(function (element) {
        return global[ComponentStoreKey].theme(global[ComponentStoreKey].themes[tag], element);
      });
    },
    tagSubscriptions: {},
    triggerTagSubscriptions: function triggerTagSubscriptions(tag, data) {
      if (!global[ComponentStoreKey].tagSubscriptions[tag]) {
        return;
      }

      global[ComponentStoreKey].tagSubscriptions[tag].forEach(function (sub) {
        return sub(data);
      });
    },
    watchForTag: function watchForTag(tag, cb) {
      if (!global[ComponentStoreKey].tagSubscriptions[tag]) {
        global[ComponentStoreKey].tagSubscriptions[tag] = [];
      }

      global[ComponentStoreKey].tagSubscriptions[tag].push(cb);
      return function () {
        if (!global[ComponentStoreKey].tagSubscriptions[tag]) {
          return;
        }

        var indexToRemove;
        var i = global[ComponentStoreKey].tagSubscriptions[tag].length;

        while (indexToRemove === undefined && i) {
          i = i - 1;

          if (global[ComponentStoreKey].tagSubscriptions[tag][i] === cb) {
            indexToRemove = i;
          }
        }

        global[ComponentStoreKey].tagSubscriptions[tag].splice(indexToRemove, 1);
      };
    }
  };
}

var ComponentStore = Object.freeze(global[ComponentStoreKey]); // Object.defineProperty(ComponentStore, "instance", {
//     get: function () {
//         return global[ComponentStoreKey];
//     }
// })
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(25)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, ":host(content-transition){display:block;width:100%;position:relative}:host(content-transition).flex-stretch{-webkit-box-flex:1;flex-grow:1;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}content-transition{display:block;width:100%;position:relative}content-transition.flex-stretch{-webkit-box-flex:1;flex-grow:1;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.content-transition-container{position:relative}.content-transition-container .current-slot{opacity:1}.content-transition-container .next-slot{width:100%;height:100%;position:absolute;top:0;left:0;opacity:0}.content-transition-container .hidden-slot{width:100%;height:100%;overflow:hidden;opacity:0;pointer-events:none;position:absolute;top:0;left:0;z-index:-1;visibility:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.content-transition-container .hidden-slot .hidden-slot-inner{width:100%;height:100%;display:inline-block;position:absolute;top:0;left:0}.content-transition-container.keepchildren .next-slot{pointer-events:none;opacity:0;-webkit-transform:translateZ(0) translateX(-100%);transform:translateZ(0) translateX(-100%)}.content-transition-container.keepchildren[type=\"fade\"] .next-slot{-webkit-transform:translateZ(0) translateX(0);transform:translateZ(0) translateX(0)}.content-transition-container.sliding{overflow:hidden}.content-transition-container.flex-stretch{-webkit-box-flex:1;flex-grow:1;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.content-transition-container.flex-stretch .content-transition-inner,.content-transition-container.flex-stretch .current-slot,.content-transition-container.flex-stretch .next-slot,.content-transition-container.flex-stretch .hidden-slot{-webkit-box-flex:1;flex-grow:1;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}\n", ""]);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, ":host(grid-layout){display:block}grid-layout{display:block}.grid-layout-items{display:-webkit-box;display:flex;display:grid;justify-items:center;grid-auto-flow:dense;width:100%;flex-wrap:wrap}.grid-layout-items>*,.grid-layout-items ::slotted(*){width:100%}\n", ""]);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/utils/set-style-rules/index.js
function SetStyleRules(styleElement, ruleString) {
  if (!styleElement || !ruleString || ruleString === "undefined" || ruleString === "null") {
    return;
  }

  if (styleElement.styleSheet) {
    // IE
    styleElement.styleSheet.cssText = "".concat(styleElement.styleSheet.cssText ? styleElement.styleSheet.cssText : "").concat(ruleString);
  } else {
    // the world
    styleElement.innerHTML = "";
    var tt1 = document.createTextNode(ruleString);
    styleElement.appendChild(tt1);
  }
}
// CONCATENATED MODULE: ./src/utils/pipe/index.js
/*
TODO - def has room for improvement. takes a little over 2.5x as long to run
*/
function PipeInnerFunctionReducer(result, currentFunction) {
  return typeof currentFunction !== "function" ? result : currentFunction(result);
}

function Pipe() {
  for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
    functions[_key] = arguments[_key];
  }

  return function PipeInnerFunction(value) {
    return functions.reduce(PipeInnerFunctionReducer, value);
  };
} // export function Pipe(...functions) {
//     return function PipeInnerFunction(value) {
//         return functions.reduce(
//             function PipeInnerFunctionReducer(result, currentFunction) {
//                 return typeof currentFunction !== `function` ?
//                     result :
//                     currentFunction(result)
//             },
//             value
//         )
//     }
// }
// EXTERNAL MODULE: ./src/utils/get/index.js
var utils_get = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(1);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// CONCATENATED MODULE: ./src/utils/is-empty/index.js


/**
 * Determines if the value is empty, whether it's an empty array, object, string or is falsey
 * @function IsEmpty
 * @param {any} value 
 * @return {boolean} Whether or not the value is empty
 * @example
 * IsEmpty() // true
 * IsEmpty(`undefined`) // true
 * IsEmpty(``) // true
 * IsEmpty(false) // true
 * IsEmpty(`false`) // true
 * IsEmpty(`null`) // true
 * IsEmpty(null) // true
 * IsEmpty({}) // true
 * IsEmpty([]) // true
 * IsEmpty([`value`]) // false
 */
function IsEmpty(value) {
  return value === undefined || value === null || value === "" || Array.isArray(value) && value.length === 0 || typeof_default()(value).indexOf("object") > -1 && Object.keys(value).length === 0 || value === false || value === "false" || value === "undefined" || value === "null";
}
// CONCATENATED MODULE: ./src/utils/is-object/index.js


/**
 * Determines if the value is an object
 * @function IsObject
 * @param {any} value 
 * @return {boolean} Whether or not the value is an object
 * @example
 * IsObject() // false
 * IsObject(()=>{}) // false
 * IsObject(``) // false
 * IsObject(true) // false
 * IsObject(null) // false
 * IsObject(new Date()) // false
 * IsObject([]) // false
 * IsObject({}) // true
 */
function IsObject(value) {
  return typeof_default()(value).indexOf("object") > -1 && value !== null && !Array.isArray(value) && !(value instanceof Date);
}
// CONCATENATED MODULE: ./src/utils/reduce-filter/index.js
function ReduceFilter(predicateFunction) {
  return function ReduceFilterResult(result, current) {
    return predicateFunction(current) ? result.concat([current]) : result;
  };
}
// CONCATENATED MODULE: ./src/utils/is-non-collection/index.js


/**
 * Determines if a value is not a collection 
 * @function IsNonCollection
 * @param {any} value - The value to test
 * @return {boolean} Whether or not the value is a collection
 * @example
 * IsNonCollection({}) // false
 * IsNonCollection([]) // false
 * IsNonCollection(``) // true
 * IsNonCollection(1) // true
 * IsNonCollection(null) // true
 * IsNonCollection(undefined) // true
 * IsNonCollection(()=>{}) // true
 * IsNonCollection(true) // true
 */
var nonCollections = ["string", "number", "null", "undefined", "function", "boolean", "date"];
function IsNonCollection(value) {
  return nonCollections.indexOf(typeof_default()(value)) > -1 || value === null || value instanceof Date;
}
// CONCATENATED MODULE: ./src/utils/is-dom/index.js
/**
 * Determines if a value is a valid DOM element
 * @function IsDom
 * @param {any} value - The value to test
 * @return {boolean} If the value is a DOM element
 * @example
 * const element = document.createElement(`div`)
 * IsDom(element) // true
 * IsDom(`nope`) // false
 */
function IsDom(value) {
  return value instanceof Element || value instanceof Node;
}
// CONCATENATED MODULE: ./src/utils/is-date/index.js
/**
 * Determines if a value is or can be a valid date
 * @function IsDate
 * @param {any} value - The value to test
 * @return (boolean) If the value is a valid date
 * @example 
 * IsDate(`Mon Nov 18 2019 07:41:48 GMT-0800`).value // true
 * IsDate(`Not a date`).value // false
 */
function IsDate(value) {
  var tempValue = new Date(Date.parse(value));
  return tempValue !== "Invalid Date" && !isNaN(tempValue) && tempValue instanceof Date;
}
// CONCATENATED MODULE: ./src/utils/type/index.js


function Type(value) {
  return value === null ? "null" : IsNonCollection(value) ? typeof_default()(value) : IsDom(value) ? "dom" : Array.isArray(value) ? "array" : IsDate(value) ? "date" : IsObject(value) ? "object" : typeof thing === "undefined" ? "undefined" : typeof_default()(thing);
}
// CONCATENATED MODULE: ./src/utils/is-t-monad/index.js

/**
 * Determines if a value is a TMonad
 * @function IsTMonad
 * @param {any} value - The value to test
 * @return {boolean} Whether or not the value is a TMonad
 * @example
 * IsTMonad({}) // false
 * IsTMonad([]) // false
 * IsTMonad(``) // false
 * IsTMonad({
 *      value:``,
 *      valid: true,
 *      type: `string`
 * }) // true
 */

function IsTMonad(value) {
  if (IsEmpty(value) || !IsObject(value)) {
    return false;
  }

  var keysItShouldHave = [{
    key: "valid",
    type: "boolean"
  }, {
    key: "type",
    type: "string"
  }, {
    key: "value"
  }];
  return keysItShouldHave.reduce(ReduceFilter(function hasValue(keyObj) {
    return Object.prototype.hasOwnProperty.call(value, keyObj.key) && (!keyObj.type || Type(value[keyObj.key]) === keyObj.type);
  }), []).length === keysItShouldHave.length;
}
// CONCATENATED MODULE: ./src/utils/t-monad/index.js

function TMonad(value) {
  if (IsTMonad(value)) {
    return Object.assign({}, value, {
      type: Type(value.value)
    });
  }

  return {
    valid: true,
    value: value,
    type: Type(value),
    stringChanges: [],
    // not required
    stop: false // not required

  };
}
// CONCATENATED MODULE: ./src/utils/to-string/index.js

function ToString(value) {
  var stop = Object(utils_get["a" /* Get */])(value, "stop", false);

  if (stop) {
    return TMonad(value);
  }

  var result = TMonad(value);

  try {
    if (!!result.value || result.value === "") {
      result.value = result.value.toString();
      result.valid = typeof result.value === "string";
    } else {
      result.value = "";
      result.valid = false;
    }
  } catch (error) {
    result.valid = false;
  }

  result.type = Type(result.value);
  return result;
}
// CONCATENATED MODULE: ./src/utils/if-invalid/index.js

/**
 * Returns a function that then takes a TMonad. If that value is invalid, it returns the replacement instead
 * @function TMonad
 * @param {any} replacement - The value to be returned if the resulting funtion is invalid
 * @return {any} Either the original value or the replacement
 * @example
 * 
 * const ifInvalid = IfInvalid(`hey`)
 * const value = ToNumber(`hola`)
 * const result = ifInvalid(value).value // `hey`
 */

function IfInvalid(replacement) {
  /** Return a new function that takes a TMonad */
  return function IfInvalidInternal(value) {
    var result = TMonad(value);
    /** If the stop flag is true or the TMonad is valid, continue */

    if (result.stop || !!result.valid) {
      return result;
    }
    /** If not valid, return replacement */


    return TMonad(replacement);
  };
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(2);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// CONCATENATED MODULE: ./src/utils/stop-if-invalid/index.js

function StopIfInvalid(value) {
  var result = TMonad(value);

  if (!result.valid) {
    result.stop = true;
  }

  return result;
}
// CONCATENATED MODULE: ./src/utils/do-uri/index.js


var do_uri_doURI = function doURI(value) {
  var encode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var component = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var result = TMonad(value);

  if (result.stop) {
    return result;
  }

  try {
    if (encode) {
      if (component) {
        result.value = encodeURIComponent(result.value);
      } else {
        result.value = encodeURI(result.value);
      }
    } else {
      if (component) {
        result.value = decodeURIComponent(result.value);
      } else {
        result.value = decodeURI(result.value);
      }
    }
  } catch (error) {
    result.valid = false;
  }

  result.type = Type(result.value);
  return result;
};
// CONCATENATED MODULE: ./src/utils/from-uri-component/index.js

function FromURIComponent(value) {
  return do_uri_doURI(value, false, true);
}
// CONCATENATED MODULE: ./src/utils/from-entities/index.js

function FromEntities(value) {
  var result = TMonad(value);

  if (result.stop) {
    return result;
  }

  if (result.type === "string" && !!result.value) {
    result.value = result.value.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;|&#8220;|&#8221;|&ldquo;|&rdquo;/g, "\"").replace(/&apos;|&lsquo;|&rsquo;|&#8216;/g, "'");
    result.valid = true;
  } else {
    result.valid = false;
  }

  return result;
}
// CONCATENATED MODULE: ./src/utils/t-monad-update/index.js

function TMonadUpdate(tmonad, expectedType) {
  return Object.assign(tmonad, {
    type: Type(tmonad.value),
    valid: expectedType === "?" ? true : tmonad.type === expectedType // '?' signifies any

  });
}
// CONCATENATED MODULE: ./src/utils/to-plain-text/index.js

function ToPlainText(value) {
  var result = TMonad(value);

  if (result.stop) {
    return result;
  }

  if (result.type !== "string") {
    result = Pipe(ToString, StopIfInvalid, FromURIComponent, FromEntities)(result);
  } else {
    result = Pipe(FromURIComponent, FromEntities)(result);
  }

  return TMonadUpdate(result, "string", "ToPlainText");
}
// CONCATENATED MODULE: ./src/utils/to-regex/index.js

function ToRegex(string) {
  var result = TMonad(string);

  if (!result.value) {
    result.value = new RegExp("");
  } else if (typeof result.value.split !== "function" && typeof result.value === "object") {
    // already regex, clone
    result.value = new RegExp(result.value);
  } else if (typeof result.value === "string") {
    if (result.value.indexOf("/") === 0) {
      // regex that has been converted to string and needs to be prepared
      // split and make sure to remove empties(usually begining/end or if json escaped) for the join later
      var parts = result.value.split("/").filter(function (p) {
        return !!p;
      });
      var options = parts.pop();

      if (options.match(/[^gmisuy]/)) {
        // if anything other than standard flag, send back to regex
        parts.push(options);
        options = undefined;
      }

      result.value = new RegExp(parts.join("/"), options);
    } else {
      // proper first argument
      result.value = new RegExp(result.value);
    }
  }

  result.valid = true;
  result.type = "object";
  return result;
}
// CONCATENATED MODULE: ./src/utils/to-split-meta/index.js

function ToSplitMeta(string) {
  var delimeter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var match;
  var arr = [];
  var result = {
    value: string,
    stringChanges: []
  };

  try {
    if (!string || !delimeter && delimeter !== "") {
      return result;
    }

    delimeter = ToRegex(delimeter).value;
    var str = result.value ? result.value.toString() : "";

    if (delimeter.toString() === "/(?:)/") {
      return {
        value: str.split(""),
        stringChanges: []
      };
    }

    while ((match = ToRegex(delimeter).value.exec(str)) !== null) {
      var length = match.toString().length;
      var matched = {
        start: match.index,
        end: match.index + length,
        input: match.input,
        length: length,
        result: [],
        removed: match[0]
      };
      var first = matched.start !== 0 ? str.slice(0, matched.start) : "";
      var second = str.slice(matched.end);
      matched.result = [first, second];
      result.stringChanges.push(matched);
      arr.push(first);
      str = second;
    }

    arr.push(str);
    result.value = arr.filter(function (v) {
      return !!v;
    });
  } catch (error) {}

  return result;
}
// CONCATENATED MODULE: ./src/utils/to-split/index.js

function ToSplit(delimeter) {
  return function ToSplitInner(value) {
    var result = TMonad(value);

    if (result.stop) {
      return result;
    }

    if (result.type !== "string") {
      result = ToString(result);
    }

    var splat = ToSplitMeta(result.value, delimeter);

    if (typeof splat.value === "string") {
      result.valid = false;
      return TMonadUpdate(result, "array", "Split");
    }

    result.stringChanges = result.stringChanges.concat(splat.stringChanges);
    result.value = splat.value;
    return TMonadUpdate(result, "array", "Split");
  };
}
// CONCATENATED MODULE: ./src/utils/from-json/index.js

function FromJSON(value) {
  var result = TMonad(value);

  if (result.stop) {
    return result;
  }

  try {
    result.value = JSON.parse(FromURIComponent(result.value).value);
    result.valid = true;
  } catch (error) {
    result.valid = false;
  }

  result.type = Type(result.value);

  if (["object", "array"].indexOf(result.type) > -1) {
    result.valid = true;
  }

  return result;
}
/* harmony default export */ var from_json = (FromJSON);
// CONCATENATED MODULE: ./src/utils/to-array/index.js

function ToArray(value) {
  var temp = TMonad(value);

  if (temp.stop) {
    return value;
  }

  var result = Array.isArray(temp.value) ? temp : typeof temp.value === "string" ? Pipe(ToPlainText, FromJSON)(temp) : temp;
  result.type = Type(result.value);
  result.valid = result.type === "array";
  return result;
}
// CONCATENATED MODULE: ./src/utils/to-map/index.js

function ToMap(fn) {
  return function (value) {
    var result = TMonad(value);

    if (result.stop) {
      return result;
    }

    var map = function map(v) {
      if (Type(v.value) !== "array") {
        v.valid = false;
        return v;
      }

      v.value = v.value.map(fn);
      return v;
    };

    return TMonadUpdate(Pipe(ToArray, StopIfInvalid, map)(result), "array", "Map");
  };
}
// CONCATENATED MODULE: ./src/utils/to-trim/index.js

function ToTrim(value) {
  var stop = Object(utils_get["a" /* Get */])(value, "stop", false);

  if (stop) {
    return TMonad(value);
  }

  var result = TMonad(value);

  try {
    result.value = result.value.trim();
  } catch (error) {}

  return result;
}
// CONCATENATED MODULE: ./src/utils/commas-to-array/index.js

function CommasToArray(value) {
  var result = TMonad(value);

  if (result.stop) {
    return result;
  }

  if (result.type === "array") {
    return result;
  }

  if (result.type === "undefined") {
    result.valid = false;
    return result;
  }

  var piped = Pipe(ToPlainText, ToSplit(","), ToMap(function (v) {
    return ToTrim(v).value;
  }))(result);
  return piped;
}
// CONCATENATED MODULE: ./src/utils/to-filter/index.js

function ToFilter(predicate) {
  return function (value) {
    var result = TMonad(value);

    if (result.stop) {
      return result;
    }

    var filter = function filter(v) {
      v.value = v.value.filter(predicate);
      return v;
    };

    return TMonadUpdate(Pipe(ToArray, StopIfInvalid, filter)(result), "array", "Filter");
  };
}
// CONCATENATED MODULE: ./src/utils/component-class-object/index.js



var component_class_object_wcClass = function wcClass(el, newClasses, previousClasses) {
  if (!el) {
    return;
  }

  if (Array.isArray(el)) {
    el = el[0];
  }

  var oldBrowser = !window.DOMTokenList.prototype.replace;
  var newClassArray = Pipe(CommasToArray, IfInvalid([]))(newClasses).value;
  var previousClassArray = Pipe(CommasToArray, IfInvalid([]))(previousClasses).value;

  if (oldBrowser) {
    if (previousClassArray.length && !!el.className) {
      previousClassArray.forEach(function (c) {
        return el.className = el.className.split(c).map(function (cl) {
          return cl.trim();
        }).join("");
      });
    }

    if (newClassArray.length) {
      newClassArray.forEach(function (c) {
        return el.className = "".concat(el.className ? el.className : "", " ").concat(c);
      });
    }

    return;
  }

  if (previousClassArray.length) {
    var _el$classList;

    (_el$classList = el.classList).remove.apply(_el$classList, toConsumableArray_default()(previousClassArray));
  }

  if (newClassArray.length) {
    var _el$classList2;

    (_el$classList2 = el.classList).add.apply(_el$classList2, toConsumableArray_default()(newClassArray));
  }
};

var ComponentClassObject = {
  format: function format(val) {
    return Pipe(ToString, IfInvalid(""), ToSplit(" "), ToMap(function (v) {
      return v.trim();
    }), ToFilter(function (v) {
      return !!v;
    }))(val).value;
  },
  onChange: function onChange(val, host) {
    return component_class_object_wcClass(host.elements.root, val, host.state["class"].previous);
  }
};
// CONCATENATED MODULE: ./src/utils/to-bool/index.js

function ToBool(value) {
  var result = TMonad(value);

  if (result.stop) {
    return result;
  }

  switch (result.value) {
    case "0":
    case 0:
    case "off":
    case "false":
    case false:
      result.value = false;
      result.valid = true;
      break;

    case "1":
    case 1:
    case "on":
    case "true":
    case true:
      result.value = true;
      result.valid = true;
      break;

    default:
      result.value = false;
      result.valid = false;
      break;
  }

  result.type = Type(result.value);
  return result;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(13);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(14);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(6);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(5);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(7);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(15);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/wrapNativeSuper.js
var wrapNativeSuper = __webpack_require__(16);
var wrapNativeSuper_default = /*#__PURE__*/__webpack_require__.n(wrapNativeSuper);

// CONCATENATED MODULE: ./src/utils/to-function/index.js

function ToFunction(value) {
  var result = TMonad(value);

  if (result.stop) {
    return result;
  }

  return TMonadUpdate(result, "function", "ToFunction");
}
// CONCATENATED MODULE: ./src/utils/equals/index.js

function Equals(value1, value2) {
  var type = Type(value1);

  if (Type(value2) !== type) {
    return false;
  }

  if (IsNonCollection(value1)) {
    return value2 === value1;
  }

  if (type === "boolean" && value1 !== value2) {
    return false;
  }

  if (type === "array" && value1.length !== value2.length) {
    return false;
  }

  if (type === "object" && Object.keys(value1).length !== Object.keys(value2).length) {
    return false;
  }

  if (type === "object" && value1.constructor !== value2.constructor) {
    return false;
  }

  if (type === "date") {
    var d = value1 === value2;

    try {
      d = new Date(value1).getTime() === new Date(value2).getTime();
    } catch (error) {}

    return d;
  }

  if (type === "dom") {
    return value1.isEqualNode(value2);
  } // Start walking


  if (type === "array") {
    var len = value1.length;

    while (len--) {
      if (!Equals(value1[len], value2[len])) {
        return false;
      }
    }
  }

  if (type === "object") {
    var keys = Object.keys(value1);
    var _len = keys.length;

    while (_len--) {
      if (!Equals(value1[keys[_len]], value2[keys[_len]])) {
        return false;
      }
    }
  }

  return true;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(8);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// CONCATENATED MODULE: ./src/utils/id/index.js


var _marked =
/*#__PURE__*/
regenerator_default.a.mark(idGenerator);

/**
 * Generates a runtime unique ID
 * @generator
 * @yields { string }
 */
function idGenerator() {
  var index, objectIds, doHash, doId, objectId;
  return regenerator_default.a.wrap(function idGenerator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          index = 0;
          objectIds = [];

          doHash = function doHash() {
            return "".concat((new Date().getTime() / 1000 | 0).toString(16), " xxxxxxxxxxxxxxxx").replace(/[x]/g, function () {
              return (Math.random() * 16 | 0).toString(16);
            });
          };

          doId = function doId(indx) {
            return "".concat(indx, " ").concat(doHash().toLowerCase()).split(" ").join("");
          };

        case 4:
          if (false) {}

          index = index + 1;
          objectId = doId(index);
          objectIds.push(objectId);
          _context.next = 10;
          return objectId;

        case 10:
          _context.next = 4;
          break;

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

var idIterator;
/**
 * Returns a runtime unique ID
 * @function ID
 * @return { string }
 */

function ID() {
  if (!idIterator) {
    idIterator = idGenerator();
  }

  return idIterator.next().value;
}
// CONCATENATED MODULE: ./src/utils/observer/index.js


function Observer(initialValue) {
  var noInit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var onSubscribe = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
  var values = Object.assign({}, {
    value: initialValue,
    errors: [],
    previousValue: undefined,
    updated: new Date().getTime(),
    subscriptions: {},
    isComplete: false
  });

  var destroy = function destroy() {
    Object.keys(values.subscriptions).forEach(function (subscriptionId) {
      return values.subscriptions[subscriptionId].unsubscribe();
    });
    Object.defineProperties(result, {
      value: {
        get: function get() {
          return undefined;
        }
      },
      previous: {
        get: function get() {
          return undefined;
        }
      },
      subscriptions: {
        get: function get() {
          return undefined;
        }
      },
      next: {
        value: function value() {}
      },
      error: {
        value: function value() {}
      },
      complete: {
        value: function value() {}
      },
      subscribe: {
        value: function value() {}
      },
      unsubscribe: {
        value: function value() {}
      }
    });
    values.isComplete = true;
  };

  var loop = function loop(key, val) {
    var valuesObj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    Object.keys(values.subscriptions).forEach(function (subscriptionId) {
      var subscriptionFn = values.subscriptions[subscriptionId][key];

      if (typeof subscriptionFn !== "function") {
        return;
      }

      subscriptionFn(val, valuesObj, subscriptionId);
    });

    if (key === "complete") {
      destroy();
    }
  };

  var _unsubscribe = function unsubscribe(subscription) {
    return function () {
      values.subscriptions[subscription.id] = null;
      delete values.subscriptions[subscription.id];
    };
  };

  var result = {
    get isComplete() {
      return values.isComplete;
    },

    get value() {
      return values.value;
    },

    get previous() {
      return values.previousValue;
    },

    get subscriptions() {
      return values.subscriptions;
    },

    next: function next(v) {
      values = Object.assign({}, values, {
        value: v,
        previousValue: values.value,
        updated: new Date().getTime()
      });
      loop("next", values.value, values);
    },
    error: function error(err) {
      values = Object.assign({}, values, {
        errors: values.errors.concat([err]),
        updated: new Date().getTime()
      });
      loop("error", err, values);
    },
    complete: function complete() {
      loop("complete", values);
    },
    subscribe: function subscribe(next) {
      var error = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
      var complete = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
      var subscription = Object.assign({}, {
        next: next,
        error: error,
        complete: complete,
        id: ID()
      });
      subscription.unsubscribe = _unsubscribe(subscription);
      values.subscriptions[subscription.id] = subscription;

      if (!noInit && values.value !== undefined && typeof subscription.next === "function") {
        subscription.next(values.value, values, subscription.id);
      }

      onSubscribe(subscription);
      return _unsubscribe(subscription);
    },
    unsubscribe: function unsubscribe(subscription) {
      if (!subscription || !subscription.id || !values.subscriptions[subscription.id]) {
        return;
      }

      return _unsubscribe(subscription);
    }
  };
  return result;
}


// CONCATENATED MODULE: ./src/utils/append-style-element/index.js

/**
 * Appends a style element with the provided rules to a provided element
 * @function AppendStyleElement
 * @param {string} rulesString - The rules to add to the style element
 * @param {HTMLElement} parent - The element to append to
 * @param {string} name - Optional. A name to give the style element
 * @example
 * AppendStyleElement(`.selector { color: black;}`, document.head, `dark-text-n-stuff`)
 */

function AppendStyleElement(rulesString, parent) {
  var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

  if (!parent || !rulesString) {
    return;
  }
  /** First create and add the style element */


  var style = document.createElement("style");
  style.setAttribute("type", "text/css");
  style.setAttribute("name", name);
  style.style.display = "none";
  parent.appendChild(style);
  /** Then set the rules */

  SetStyleRules(style, rulesString);
  return style;
}
// CONCATENATED MODULE: ./src/utils/observer-unsubscribe/index.js

/**
 * Looks for subscriptions in an object, DOM element or a subscription itself and unsubscribes.
 * @function ObserverUnsubscribe
 * @param {Object|HTMLElement|function()} subscription - An element that has or is a observer subscription. If is a DOM element, must be under `subscriptions` or `eventSubscriptions` properties
 * @return {void}
 */

function ObserverUnsubscribe(subscription) {
  if (typeof subscription === "function") {
    return subscription();
  }

  if (Array.isArray(subscription)) {
    return subscription.reduce(function (result, current) {
      return typeof current === "function" ? current() : undefined;
    }, []);
  }

  if (IsDom(subscription)) {
    var key;

    if (subscription.subscriptions) {
      key = "subscriptions";
    }

    if (subscription.eventSubscriptions) {
      key = "eventSubscriptions";
    }

    if (!key) {
      return;
    }

    return Object.keys(subscription[key]).reduce(function (result, current) {
      typeof subscription[key][current] === "function" ? subscription[key][current]() : undefined;
      return false;
    }, []);
  }

  if (IsObject(subscription)) {
    Object.keys(subscription).reduce(function (result, current) {
      return typeof subscription[current] === "function" ? subscription[current]() : undefined;
    }, []);
  }
}
// CONCATENATED MODULE: ./src/utils/wc-elements/index.js


var removeOld = function removeOld(el) {
  if (!el || !el.parentNode) {
    return;
  }

  el.parentNode.removeChild(el);
};

function WCElements(host, elements) {
  var elStates = {};
  var state = {};

  var getEl = function getEl(key) {
    var els = host.shadowRoot.querySelectorAll(elements[key].selector);

    if (els.length > 1) {
      var e = Array.from(els);
      return e;
    }

    return els[0];
  };

  Object.keys(elements).sort().forEach(function (key) {
    elStates[key] = Observer(getEl(key));
    Object.defineProperty(state, key, {
      get: function get() {
        return elStates[key].value;
      },
      set: function set(value) {
        if (value !== elStates[key].value) {
          elStates[key].next(value);
        }
      }
    });
    elStates[key].subscribe(function (newElement) {
      host.unsubscribeEvents(elStates[key].previous);
      removeOld(elStates[key].previous);

      if (typeof elements[key].onChange === "function") {
        elements[key].onChange(newElement, host);
      }
    });
  });
  return {
    state: state,
    disconnect: function disconnect() {
      return Object.keys(elStates).forEach(function (key) {
        var el = host.elements[key];
        elStates[key].complete();

        if (el) {
          ObserverUnsubscribe(el);
        }
      });
    }
  };
}
// CONCATENATED MODULE: ./src/utils/set-shadow-root/index.js

function SetShadowRoot(tagname, element, templateString, styleString) {
  var notWebComponent = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var appendStylesToHead = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

  if (notWebComponent) {
    element.shadowRoot = element;
    return element.innerHTML = "".concat(templateString, "<style type=\"text/css\">").concat(styleString, "</style>");
  }

  var Template = document.createElement("template");
  Template.innerHTML = templateString;
  AppendStyleElement(styleString, Template.content);
  var clone = document.importNode(Template.content, true);
  element.attachShadow({
    mode: "open"
  }).appendChild(clone);

  if ((!("registerElement" in document) || appendStylesToHead) && !document.head.querySelector("style[name=\"".concat(tagname, "\"]"))) {
    AppendStyleElement(styleString, document.head, tagname);
  }
}
// EXTERNAL MODULE: ./src/services/componentStore.js
var componentStore = __webpack_require__(9);

// CONCATENATED MODULE: ./src/utils/wc-constructor/index.js









var wc_constructor_unsub = function unsub(el, elementProperty, eventKey) {
  return Pipe(ToFunction, IfInvalid(function () {}))(Object(utils_get["a" /* Get */])(el, "".concat(elementProperty, ".").concat(eventKey))).value();
};

var unsubscribeEvents = function unsubscribeEvents(el) {
  var elementProperty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "eventSubscriptions";

  if (!el || !el[elementProperty]) {
    return;
  }

  Object.keys(el[elementProperty]).forEach(function (eventKey) {
    return wc_constructor_unsub(el, elementProperty, eventKey);
  });
};

var unsubscribeEvent = function unsubscribeEvent(el, eventKey) {
  var elementProperty = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "eventSubscriptions";

  if (!el || !el[elementProperty]) {
    return;
  }

  wc_constructor_unsub(el, elementProperty, eventKey);
};

var wc_constructor_setProperty = function setProperty(host, key, formatter, getter, setter) {
  try {
    Object.defineProperty(host, key, {
      get: function get() {
        if (typeof getter === "function") {
          return getter(host);
        }

        return host.state[key].value;
      },
      set: function set(value) {
        if (!host.state[key]) {
          return;
        }

        if (typeof setter === "function") {
          return setter(host)(value);
        }

        var formattedValue = formatter(value, host);
        var previous = host.state[key].value;

        if (typeof previous === "function" && typeof formattedValue === "function" && formattedValue.toString() !== previous.toString()) {
          return host.state[key].next(formattedValue);
        }

        if (!Equals(host.state[key].value, formattedValue)) {
          host.state[key].next(formattedValue);
        }
      }
    }); // eslint-disable-next-line no-empty
  } catch (error) {}
};

var wc_constructor_setStateProperty = function setStateProperty(host, key, formatter, onChange, getter, setter) {
  if (typeof formatter !== "function") {
    return;
  }

  host.state[key] = Observer(formatter(host[key], host));
  wc_constructor_setProperty(host, key, formatter, getter, setter);

  if (typeof onChange !== "function") {
    return;
  }

  host.state[key].subscribe(function (val) {
    return onChange(val, host);
  });
};

function WCConstructor(options) {
  var componentName = options.componentName;
  var observedAttributes = options.observedAttributes || [];
  var template = options.template || "<slot></slot>";
  var style = options.style || "";
  var properties = options.properties || {};
  var elements = options.elements || {};
  var methods = options.methods;
  var computed = options.computed;
  var getters = options.getters || {};
  var setters = options.setters || {};
  var onConnected = options.onConnected;
  var onDisconnected = options.onDisconnected;
  var onReady = options.onReady;

  if (!componentName) {
    return;
  }

  var ConnectedFn = function ConnectedFn(element) {
    if (options.appendStylesToParent) {
      AppendStyleElement(style, element.parentElement, componentName);
    }

    element.wcID = ID();
    element.unsubscribeEvent = unsubscribeEvent;
    element.unsubscribeEvents = unsubscribeEvents;

    if (computed) {
      Object.keys(computed).forEach(function (key) {
        // eslint-disable-next-line no-empty
        try {
          Object.defineProperty(element, key, computed[key](element));
        } catch (error) {}
      });
    }

    if (methods) {
      Object.keys(methods).forEach(function (key) {
        return element[key] = methods[key](element);
      });
    }

    if (elements) {
      var ElementData = WCElements(element, elements);
      element.elements = ElementData.state;
      element.disconnectElements = ElementData.disconnect;
    }

    if (properties && !properties.ready) {
      wc_constructor_setStateProperty(element, "ready", function (val) {
        return Pipe(ToBool, IfInvalid(false))(val).value;
      }, function () {}, getters.ready, setters.ready);
    }

    if (properties) {
      Object.keys(properties).forEach(function (key) {
        return wc_constructor_setStateProperty(element, key, properties[key].format, properties[key].onChange, getters[key], setters[key]);
      });
    }

    if (onConnected) {
      onConnected(element);
    }

    if (element.state["ready"]) {
      element.state["ready"].subscribe(function () {
        return element.dispatchEvent(new CustomEvent("ready", {
          detail: element
        }));
      });
    }

    element["ready"] = true;

    if (onReady) {
      onReady(element);
    }

    element.dispatchEvent(new CustomEvent("ready", {
      detail: element
    }));
  };

  var componentClass =
  /*#__PURE__*/
  function (_HTMLElement) {
    inherits_default()(componentClass, _HTMLElement);

    createClass_default()(componentClass, null, [{
      key: "observedAttributes",
      get: function get() {
        return observedAttributes;
      }
    }]);

    function componentClass() {
      var _this;

      classCallCheck_default()(this, componentClass);

      _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(componentClass).call(this));
      _this.wcID = "";
      _this.state = {};
      _this.elements = {};

      _this.disconnectElements = function () {};

      SetShadowRoot(componentName, assertThisInitialized_default()(_this), template, style, false, options.appendStylesToHead);
      return _this;
    }

    createClass_default()(componentClass, [{
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(attrName, oldValue, newValue) {
        if (newValue !== oldValue) {
          this[attrName] = newValue;
        }
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        componentStore["a" /* ComponentStore */].addComponent(this);
        ConnectedFn(this);
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        var _this2 = this;

        componentStore["a" /* ComponentStore */].removeComponent(this);

        if (this.state) {
          Object.keys(this.state).forEach(function (key) {
            _this2.state[key].complete();
          });
        }

        this.disconnectElements();
        ObserverUnsubscribe(this);

        if (onDisconnected) {
          onDisconnected(this);
        }
      }
    }]);

    return componentClass;
  }(wrapNativeSuper_default()(HTMLElement));

  function newComponentObject() {
    return function (element) {
      element.observedAttributes = observedAttributes.slice();
      element.state = {};
      element.elements = {};

      element.disconnectElements = function () {};

      element.attributeChangedCallback = function () {};

      element.disconnectedCallback = function () {};

      SetShadowRoot(componentName, element, template, style, true, options.appendStylesToHead);
      ConnectedFn(element);
      return element;
    };
  }

  return {
    object: newComponentObject(),
    component: componentClass
  };
}
// CONCATENATED MODULE: ./src/utils/polyfill-object-assign/index.js
function PolyfillObjectAssign() {
  if (typeof Object.assign !== "function") {
    // Must be writable: true, enumerable: false, configurable: true
    Object.defineProperty(Object, "assign", {
      value: function assign(target) {
        // .length of function is 2
        'use strict';

        if (target === null || target === undefined) {
          throw new TypeError("Cannot convert undefined or null to object");
        }

        var to = Object(target);

        for (var index = 1; index < arguments.length; index++) {
          var nextSource = arguments[index];

          if (nextSource !== null && nextSource !== undefined) {
            for (var nextKey in nextSource) {
              // Avoid bugs when hasOwnProperty is shadowed
              if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }

        return to;
      },
      writable: true,
      configurable: true
    });
  }
}
// CONCATENATED MODULE: ./src/services/timer.js

var timer_subscriptions = {};
var timer_isRunning = false;

var timer_loop = function loop() {
  timer_isRunning = true;
  var subscriptionKeys = Object.keys(timer_subscriptions);

  if (!subscriptionKeys.length) {
    timer_isRunning = false;
    return;
  }

  subscriptionKeys.forEach(function (key) {
    var subscription = timer_subscriptions[key];
    var currentFrame = new Date().getTime() - subscription.started;

    if (!!subscription.duration && typeof subscription.frames[currentFrame] === "undefined") {
      return timer_subscriptions[key].cancel();
    }

    subscription.fn(subscription.frames[currentFrame]);
  });
  requestAnimationFrame(loop);
};

function Timer(duration, stepFn) {
  var frameValues = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  var completeFn = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};

  if (!duration && duration !== 0) {
    return;
  }

  var id = ID();
  timer_subscriptions[id] = {
    id: id,
    duration: duration,
    complete: typeof completeFn !== "function" ? function () {} : completeFn,
    fn: typeof stepFn !== "function" ? function () {} : stepFn,
    frames: frameValues ? frameValues.slice() : duration ? Array(duration).fill(0) : [],
    cancel: function cancel() {
      timer_subscriptions[id].complete();
      timer_subscriptions[id] = null;
      delete timer_subscriptions[id];
    },
    started: new Date().getTime()
  };

  if (!timer_isRunning) {
    timer_loop();
  }

  return timer_subscriptions[id];
}
// CONCATENATED MODULE: ./src/utils/polyfill-mutation-observer/index.js

function PolyfillMutationObserver(w) {
  (function () {
    if (w.MutationObserver !== null && w.MutationObserver !== undefined) {
      return;
    }

    w.MutationObserver = function (cb) {
      this.callBack = cb;
      return this;
    };

    w.MutationObserver.prototype.observe = function (element) {
      var cb = this.callBack;
      var oldHtml;
      this.interval = Timer(0, function () {
        var html = element.innerHTML;

        if (html !== oldHtml) {
          oldHtml = html;
          return cb.apply(null);
        }
      });
    };

    w.MutationObserver.prototype.disconnect = function () {
      return this.interval.cancel();
    };
  }).call(this);
}
// CONCATENATED MODULE: ./src/utils/polyfill-wc/index.js
var setBUIltComponents = function setBUIltComponents(w) {
  return w.bUIltComponents ? undefined : w.bUIltComponents = {};
};

var setBUIltComponentsListener = function setBUIltComponentsListener(w) {
  if (!w.bUIltComponents.listener) {
    w.bUIltComponents.listener = new w.MutationObserver(function () {
      Object.keys(w.bUIltComponents).forEach(function (key) {
        Array.from(document.body.querySelectorAll(key)).forEach(function (el) {
          if (!el.ready) {
            w.bUIltComponents[key](el);
          }
        });
      });
    });
    w.bUIltComponents.listener.observe(document.body);
  }
};

function PolyFillWC(w, componentName, componentClass) {
  setBUIltComponents(w);

  if (w.bUIltComponents[componentName]) {
    return;
  }

  setBUIltComponentsListener(w);
  w.bUIltComponents[componentName] = componentClass;
}
// CONCATENATED MODULE: ./src/utils/wc-define/index.js

function WCDefine(componentName, componentClass) {
  var wc = window.WebComponents;
  var ce = window.customElements;

  var defineComponent = function defineComponent() {
    if (!ce) {
      PolyfillObjectAssign();
      PolyfillMutationObserver(window);
      return PolyFillWC(window, componentName, componentClass.object);
    }

    if (!ce.get(componentName)) {
      ce.define(componentName, componentClass.component);
    }
  };

  if (wc && wc.ready) {
    defineComponent();
  } else {
    window.addEventListener("WebComponentsReady", function () {
      defineComponent();
    });
  }
}
// CONCATENATED MODULE: ./src/components/button-element/index.js
 // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization

var button_element_style = __webpack_require__(17).toString();

var button_element_setStyles = function setStyles(el, host, styles) {
  if (!el) {
    return;
  }

  SetStyleRules(el, styles || host.styles);
};

var button_element_setTheme = function setTheme(value, host) {
  var themeElement = host.elements.theme;

  if (!themeElement || value === undefined) {
    return;
  }

  SetStyleRules(themeElement, value);
};

var setName = function setName(btn, name) {
  return btn ? btn.setAttribute("name", name) : undefined;
};

var button_element_properties = {
  accentcolor: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid("#59a2d8"))(val).value;
    },
    onChange: function onChange(val, host) {
      if (host.hasRipple) {
        host.elements.ripple.color = val;
      }

      if (host.hasBounce) {
        host.elements.bounce.color = val;
      }
    }
  },
  "class": ComponentClassObject,
  ready: {
    format: function format(val) {
      return Pipe(ToBool, IfInvalid(false))(val).value;
    },
    onChange: function onChange(val, host) {
      if (!val) {
        return;
      }

      setBounce(host);
      setRipple(host);
    }
  },
  ripple: {
    format: function format(val) {
      return Pipe(ToBool, IfInvalid(true))(val).value;
    },
    onChange: function onChange(_val, host) {
      return setRipple(host);
    }
  },
  bounce: {
    format: function format(val) {
      return Pipe(ToBool, IfInvalid(true))(val).value;
    },
    onChange: function onChange(_val, host) {
      return setBounce(host);
    }
  },
  name: {
    format: function format(val, host) {
      return Pipe(ToString, IfInvalid(host.textContent))(val).value;
    },
    onChange: function onChange(val, host) {
      return setName(host.elements.button, val);
    }
  },
  styles: {
    format: function format(val) {
      return typeof val === "string" ? val : "";
    },
    onChange: function onChange(val, host) {
      return button_element_setStyles(host.elements.injectedStyles, host, val);
    }
  },
  theme: {
    format: function format(val, host) {
      return typeof val === "string" ? val : host.theme;
    },
    onChange: button_element_setTheme
  }
};
var button_element_observedAttributes = Object.keys(button_element_properties);
var button_element_elements = {
  root: {
    selector: ".button-element",
    onChange: function onChange() {}
  },
  button: {
    selector: ".button-element > button",
    onChange: function onChange(el, host) {
      setBounce(host);
      setRipple(host);

      if (!el.getAttribute("name")) {
        setName(el, host.name);
      }
    }
  },
  ripple: {
    selector: "effect-ripple",
    onChange: function onChange(_el, host) {
      return setRipple(host);
    }
  },
  bounce: {
    selector: "effect-bounce-z",
    onChange: function onChange(_el, host) {
      return setBounce(host);
    }
  },
  injectedStyles: {
    selector: "style.injectedStyles",
    onChange: button_element_setStyles
  },
  theme: {
    selector: "style.themeStyles",
    onChange: function onChange(_el, host) {
      return button_element_setTheme(host.theme, host);
    }
  }
};

var setRipple = function setRipple(host) {
  var ripple = host.elements.ripple;

  if (!ripple) {
    return;
  }

  ripple.color = host.accentcolor;
  ripple.targets = host.ripple ? [host.elements.button] : [];
};

var setBounce = function setBounce(host) {
  var bounce = host.elements.bounce;
  var button = host.elements.button;

  if (!bounce || !button) {
    return;
  }

  bounce.targets = host.bounce ? [button] : [];
};

var button_element_template = __webpack_require__(21);

var button_element_componentName = "button-element";
var componentRoot = ".button-element";
var ButtonElement = WCConstructor({
  componentName: button_element_componentName,
  componentRoot: componentRoot,
  template: button_element_template,
  style: button_element_style,
  observedAttributes: button_element_observedAttributes,
  properties: button_element_properties,
  elements: button_element_elements,
  computed: {
    hasRipple: function hasRipple(host) {
      return {
        get: function get() {
          var el = host.elements.ripple;
          return !!el && el.ready === true;
        }
      };
    },
    hasBounce: function hasBounce(host) {
      return {
        get: function get() {
          var el = host.elements.bounce;
          return !!el && el.ready === true;
        }
      };
    },
    canRipple: function canRipple(host) {
      return {
        get: function get() {
          var can = !!host.ripple;
          return host.hasRipple && can && !!host.elements.button && host.ready === true;
        }
      };
    },
    canBounce: function canBounce(host) {
      return {
        get: function get() {
          var can = !!host.bounce;
          return host.hasBounce && can && !!host.elements.button && host.ready === true;
        }
      };
    }
  },
  onConnected: function onConnected(host) {
    host.elements.button.classList.add("ready");
  }
});
WCDefine(button_element_componentName, ButtonElement);
// CONCATENATED MODULE: ./src/utils/throttle/index.js
function Throttle(fn) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 33;
  var timer = null;
  var start = null;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    cancelAnimationFrame(timer);
    start = new Date().getTime();

    var _this = this;

    var test = function test() {
      var now = new Date().getTime();

      if (now - start >= wait) {
        fn.apply(_this, args);
        cancelAnimationFrame(timer);
        start = null;
        timer = null;
        return;
      }

      timer = requestAnimationFrame(test);
    };

    test();
  };
}
// CONCATENATED MODULE: ./src/utils/to-number/index.js

function ToNumber(value) {
  var result = TMonad(value);

  if (result.stop) {
    return result;
  }

  if (result.type === "string" && !IsEmpty(result.value)) {
    result.value = parseFloat(result.value);
  }

  result.type = Type(result.value);
  result.valid = !isNaN(result.value);
  return result;
}
// CONCATENATED MODULE: ./src/utils/index-of/index.js

function IndexOf(array) {
  return function (value) {
    var result = TMonad(value);

    if (result.stop) {
      return result;
    }

    var arr = ToArray(array);

    if (!arr.valid) {
      result.valid = false;
      return result;
    }

    result.valid = arr.value.indexOf(result.value) > -1;
    return result;
  };
}
// CONCATENATED MODULE: ./src/utils/observe-event/index.js

function ObserveEvent(element, eventName) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (!element || !eventName) {
    return;
  }

  var isRunning = false;
  var mObserver = {
    disconnect: function disconnect() {}
  };
  options = Object.assign({}, {
    preventDefault: false,
    stopPropagation: false,
    useCapture: true
  }, options);

  var isWindow = function isWindow() {
    return element && element.document && element.location && element.alert && element.setInterval;
  };

  var getParent = function getParent() {
    return element ? element.parentNode ? element.parentNode : element.host ? element.host : undefined : undefined;
  };

  var startup = function startup() {
    if (!element || !element.parentNode && !element.host || isRunning) {
      return;
    }

    isRunning = true;
    element.addEventListener(eventName, eventHandler, options.useCapture);
  };

  var observer = Observer(undefined, undefined, startup);

  var eventHandler = function eventHandler(event) {
    if (!observer || !observer.subscriptions || Object.keys(observer.subscriptions).length === 0) {
      return shutDown();
    }

    if (!isWindow() && !getParent()) {
      return dispose();
    }

    if (options.preventDefault) {
      event.preventDefault();
    }

    if (options.stopPropagation) {
      event.stopPropagation();
    }

    observer.next(event);
  };

  var shutDown = function shutDown() {
    element.removeEventListener(eventName, eventHandler, options.useCapture);
    isRunning = false;
  };

  var dispose = function dispose() {
    shutDown();
    observer.complete();
    mObserver.disconnect();
  };

  mObserver = new MutationObserver(function (e) {
    var elementIsRemoved = false;
    var ii = e.length;

    while (!elementIsRemoved && ii) {
      ii = ii - 1;
      var i = e[ii].removedNodes.length;

      while (!elementIsRemoved && i) {
        i = i - 1;
        elementIsRemoved = e[ii].removedNodes[i] === element;
      }
    }

    if (elementIsRemoved) {
      dispose();
    }
  });
  var max = 1000;

  var tryToObserveIt = function tryToObserveIt() {
    var parent = getParent();
    max = max - 1;

    if (!max) {
      return dispose();
    }

    if (!parent) {
      return requestAnimationFrame(tryToObserveIt);
    }

    mObserver.observe(parent, {
      childList: true
    });
    startup();
  };

  if (isWindow()) {
    startup();
  } else {
    tryToObserveIt();
  }

  return observer;
}
// CONCATENATED MODULE: ./src/utils/was-clicked-on/index.js
function WasClickedOn(element, event) {
  if (!element) {
    return false;
  }

  var isArray = Array.isArray(element);

  var isIt = function isIt(el, par) {
    var isEqual = el === par;
    var isContained = par instanceof Node && el.contains(par);

    if (isEqual || isContained) {
      return true;
    }

    return false;
  };

  var target = Array.isArray(event.path) ? event.path[0] : event.composedPath && typeof event.composedPath === "function" && event.composedPath()[0] ? event.composedPath()[0] : event.originalTarget ? event.originalTarget : event.explicitOriginalTarget ? event.explicitOriginalTarget : event.target;

  var cycleUp = function cycleUp(parent) {
    while (parent && parent !== document.body) {
      if (isArray) {
        if (element.length == 1) {
          if (isIt(element[0], parent)) {
            return true;
          }
        } else {
          var len = element.length;

          while (len) {
            len = len - 1;

            if (isIt(element[len], parent)) {
              return true;
            }
          }
        }
      } else {
        if (isIt(element, parent)) {
          return true;
        }
      }

      parent = parent.parentNode || parent.host;
    }

    return false;
  };

  return cycleUp(target);
}
// CONCATENATED MODULE: ./src/components/collapse-menu/index.js
/**
 * add ripple and bounce to toggle container
 */
 // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization

var collapse_menu_style = __webpack_require__(26).toString(); // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization


var collapse_menu_template = __webpack_require__(27);

var collapse_menu_componentName = "collapse-menu";
var collapse_menu_componentRoot = ".".concat(collapse_menu_componentName, "-container");
var directions = ["horizontal", "vertical"];
var alignments = ["left", "right"];

var collapse_menu_setStyles = function setStyles(el, styles) {
  return el ? SetStyleRules(el, styles) : undefined;
};

var setAttr = function setAttr(el, attr, value) {
  return el ? el.setAttribute(attr, value) : undefined;
};

var collapse_menu_setStyleElement = function setStyleElement(host) {
  var outerStyle = host.querySelector("style[name=\"outer\"]");
  var componentStyle = host.shadowRoot.querySelector("style[name=\"\"]");
  var styleString = [collapse_menu_style, host.theme, host.styles].join("");

  if (!outerStyle) {
    AppendStyleElement(styleString, host, "outer");
    outerStyle = host.querySelector("style[name=\"outer\"]");
  }

  collapse_menu_setStyles(componentStyle, styleString);
  collapse_menu_setStyles(outerStyle, styleString);
};

var removeSizer = function removeSizer(el) {
  (el.parentElement || el.parentNode.host).removeChild(el);
};

var createSizer = function createSizer() {
  var iframe = document.createElement("iframe");
  iframe.style.opacity = "0";
  iframe.style.position = "absolute";
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.top = "0%";
  iframe.style.left = "0%";
  iframe.style.zIndex = "-1";
  iframe.style.pointerEvents = "none";
  iframe.style.border = "none";
  return iframe;
};

var collapse_menu_handleCollapse = function handleCollapse(container, host) {
  Throttle(function () {
    if (!host.collapseonwrap || host.expanded) {
      return;
    }

    var scrollWidth = container.scrollWidth;
    var width = container.offsetWidth;
    var itemsWidth = host.elements.items.scrollWidth;
    var hostWidth = host.scrollWidth;
    var siblingsWidth = Array.from(container.children).reduce(function (total, current) {
      return total + current.scrollWidth;
    }, -(hostWidth + host.sizer.scrollWidth));

    if (scrollWidth > width && !host.expandable) {
      host.expandable = true;
    } else if (width >= itemsWidth + siblingsWidth) {
      host.expandable = false;
    }
  }, host.throttle || 0)();
};

var setContainer = function setContainer(container, host) {
  if (host.sizer) {
    removeSizer(host.sizer);
  }

  if (!container || !host.collapseonwrap) {
    return;
  }

  host.sizer = createSizer();
  container.appendChild(host.sizer);
  host.sizer.contentWindow.addEventListener("resize", function () {
    return collapse_menu_handleCollapse(container, host);
  });
  requestAnimationFrame(function () {
    return collapse_menu_handleCollapse(container, host);
  });
};

var handleMinWidth = function handleMinWidth(host) {
  if (!host.minwidth) {
    return;
  }

  if (host.minWidthSizer.scrollWidth < host.minwidth) {
    host.expandable = true;
  } else {
    host.expandable = false;
  }
};

var setMinWidth = function setMinWidth(minWidth, host) {
  if (!minWidth && host.minWidthSizer) {
    return removeSizer(host.minWidthSizer);
  }

  if (!minWidth) {
    return;
  }

  var root = host.elements.root;
  host.minWidthSizer = createSizer();
  root.appendChild(host.minWidthSizer);
  host.minWidthSizer.contentWindow.addEventListener("resize", function () {
    return handleMinWidth(host);
  });
  requestAnimationFrame(function () {
    return handleMinWidth(host);
  });
};

var collapse_menu_setMinPageWidth = function setMinPageWidth(minWidth, host) {
  if (!minWidth) {
    return;
  }

  var handlePageWidth = Throttle(function (host) {
    if (!host.minpagewidth) {
      return;
    }

    if (window.innerWidth < host.minpagewidth) {
      host.expandable = true;
    } else {
      host.expandable = false;
    }
  }, 333);
  window.addEventListener("resize", function () {
    return handlePageWidth(host);
  });
  handlePageWidth(host);
};

var setBackground = function setBackground(color, el) {
  return !el ? undefined : el.style.backgroundColor = color;
};

var collapse_menu_properties = {
  "class": ComponentClassObject,
  expanded: {
    format: function format(val) {
      return Pipe(ToBool, IfInvalid(false))(val).value;
    },
    onChange: function onChange(val, host) {
      setAttr(host.elements.root, "expanded", val);
      setAttr(host, "expanded", val);
    }
  },
  expandable: {
    format: function format(val) {
      return Pipe(ToBool, IfInvalid(false))(val).value;
    },
    onChange: function onChange(val, host) {
      setAttr(host.elements.root, "expandable", val);
      setAttr(host, "expandable", val);

      if (!val) {
        host.expanded = false;
      }
    }
  },
  throttle: {
    format: function format(val) {
      return Pipe(ToNumber, IfInvalid(0))(val).value;
    }
  },
  minwidth: {
    format: function format(val) {
      return Pipe(ToNumber, IfInvalid(null))(val).value;
    },
    onChange: setMinWidth
  },
  minpagewidth: {
    format: function format(val) {
      return Pipe(ToNumber, IfInvalid(null))(val).value;
    },
    onChange: collapse_menu_setMinPageWidth
  },
  collapseonwrap: {
    format: function format(val) {
      return Pipe(ToBool, IfInvalid(false))(val).value;
    },
    onChange: function onChange(val, host) {
      var root = host.elements.root;

      if (!root) {
        return;
      }

      root.classList[val ? "add" : "remove"]("collapseonwrap");
    }
  },
  direction: {
    format: function format(val) {
      return Pipe(ToString, IndexOf(directions), IfInvalid(directions[0]))(val).value;
    },
    onChange: function onChange(val, host) {
      return setAttr(host.elements.root, "direction", val);
    }
  },
  align: {
    format: function format(val) {
      return Pipe(ToString, IndexOf(alignments), IfInvalid(alignments[0]))(val).value;
    },
    onChange: function onChange(val, host) {
      return setAttr(host.elements.root, "align", val);
    }
  },
  background: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid("none"))(val).value;
    },
    onChange: function onChange(val, host) {
      setBackground(val, host.elements.background);
    }
  },
  container: {
    format: function format(val, host) {
      return Object(utils_get["a" /* Get */])(host, val, host);
    },
    onChange: setContainer
  },
  styles: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid(""))(val).value;
    },
    onChange: function onChange(_val, host) {
      return collapse_menu_setStyleElement(host);
    }
  },
  theme: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid(""))(val).value;
    },
    onChange: function onChange(_val, host) {
      return collapse_menu_setStyleElement(host);
    }
  }
};
var collapse_menu_observedAttributes = Object.keys(collapse_menu_properties);
var collapse_menu_elements = {
  root: {
    selector: collapse_menu_componentRoot,
    onChange: function onChange(el, host) {
      setAttr(host.elements.root, "direction", host.direction);
      el.classList[host.collapseonwrap ? "add" : "remove"]("collapseonwrap");
      el.eventSubscriptions = {
        click: ObserveEvent(el, "click").subscribe(function (e) {
          var items = Array.from(host.querySelectorAll("[slot=\"item\"]"));
          var len = items.length;

          while (len) {
            len = len - 1;

            if (WasClickedOn(items[len], e)) {
              return host.dispatchEvent(new CustomEvent("itemclick", {
                detail: e
              }));
            }
          }
        })
      };
    }
  },
  items: {
    selector: ".collapse-menu-items"
  },
  background: {
    selector: ".collapse-menu-items-bg",
    onChange: function onChange(el, host) {
      setBackground(host.background, el);
    }
  },
  internalStyles: {
    selector: "style.internalStyles"
  },
  toggle: {
    selector: ".collapse-menu-toggle",
    onChange: function onChange(el, host) {
      el.eventSubscriptions = {
        click: ObserveEvent(el, "click").subscribe(function () {
          return host.expanded = !host.expanded;
        })
      };
    }
  },
  toggleInner: {
    selector: ".collapse-menu-toggle-inner",
    onChange: function onChange(el, host) {
      el.eventSubscriptions = {
        click: ObserveEvent(el, "click").subscribe(function () {
          return host.expanded = !host.expanded;
        })
      };
    }
  }
};
var CollapseMenu = WCConstructor({
  componentName: collapse_menu_componentName,
  componentRoot: collapse_menu_componentRoot,
  template: collapse_menu_template,
  style: collapse_menu_style,
  observedAttributes: collapse_menu_observedAttributes,
  properties: collapse_menu_properties,
  elements: collapse_menu_elements,
  onConnected: function onConnected(host) {
    collapse_menu_setStyleElement(host);
    requestAnimationFrame(function () {
      collapse_menu_setStyleElement(host);
      host.eventSubscriptions = {
        click: ObserveEvent(window, "click").subscribe(function (e) {
          if (!host.expanded) {
            return;
          }

          if (WasClickedOn(host.elements.root, e)) {
            host.expanded = false;
          }
        })
      };
    });
  },
  onDisconnected: function onDisconnected(host) {
    ObserverUnsubscribe(host);
  }
});
WCDefine(collapse_menu_componentName, CollapseMenu);
// CONCATENATED MODULE: ./src/services/icons.js
var iconArrow = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z\"/></svg>";
var iconChevron = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg>";
var iconDelete = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z\"/></svg>";
var iconFilter = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M15.96 10.29l-2.75 3.54-1.96-2.36L8.5 15h11l-3.54-4.71zM3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z\"/></svg>";
var iconGear = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z\"/></svg>";
var iconPencil = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z\"/></svg>";
var iconPlay = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M8 5v14l11-7z\"/></svg>";
var iconTriangle = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M7 10l5 5 5-5z\"/></svg>";
var Icons = {
  arrow: iconArrow,
  chevron: iconChevron,
  "delete": iconDelete,
  filter: iconFilter,
  gear: iconGear,
  pencil: iconPencil,
  play: iconPlay,
  triangle: iconTriangle
};
// CONCATENATED MODULE: ./src/components/content-collapse/index.js
/**
 * add ripple and bounce to toggle container
 */

 // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization

var content_collapse_style = __webpack_require__(28).toString(); // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization


var content_collapse_template = __webpack_require__(29);

var content_collapse_componentName = "content-collapse";
var content_collapse_componentRoot = ".".concat(content_collapse_componentName, "-container");

var content_collapse_setStyles = function setStyles(el, styles) {
  return el ? SetStyleRules(el, styles) : undefined;
};

var content_collapse_setStyleElement = function setStyleElement(host) {
  var outerStyle = host.querySelector("style[name=\"outer\"]");
  var componentStyle = host.shadowRoot.querySelector("style[name=\"\"]");
  var styleString = [content_collapse_style, host.theme, host.styles].join("");

  if (!outerStyle) {
    AppendStyleElement(styleString, host, "outer");
    outerStyle = host.querySelector("style[name=\"outer\"]");
  }

  content_collapse_setStyles(componentStyle, styleString);
  content_collapse_setStyles(outerStyle, styleString);
};
var content_collapse_properties = {
  "class": ComponentClassObject,
  expanded: {
    format: function format(val) {
      return Pipe(ToBool, IfInvalid(false))(val).value;
    },
    onChange: function onChange(val, host) {
      var transition = host.elements.transition;

      if (transition && typeof transition.transitionTo === "function") {
        transition.transitionTo(val ? 1 : 0);
        host.elements.icon.setAttribute("rotation", val ? "down" : "right");
      }
    }
  },
  speed: {
    format: function format(val) {
      return Pipe(ToNumber, IfInvalid(333))(val).value;
    },
    onChange: function onChange(val, host) {
      var transition = host.elements.transition;

      if (transition) {
        transition.speed = val;
      }
    }
  },
  styles: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid(""))(val).value;
    },
    onChange: function onChange(_val, host) {
      return content_collapse_setStyleElement(host);
    }
  },
  theme: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid(""))(val).value;
    },
    onChange: function onChange(_val, host) {
      return content_collapse_setStyleElement(host);
    }
  }
};
var content_collapse_observedAttributes = Object.keys(content_collapse_properties);
var content_collapse_elements = {
  root: {
    selector: content_collapse_componentRoot
  },
  transition: {
    selector: ".".concat(content_collapse_componentName, "-transition")
  },
  icon: {
    selector: ".".concat(content_collapse_componentName, "-toggler-icon"),
    onChange: function onChange(el) {
      el.svg = iconTriangle;
    }
  },
  toggler: {
    selector: ".".concat(content_collapse_componentName, "-toggler"),
    onChange: function onChange(el, host) {
      el.eventSubscriptions = {
        click: ObserveEvent(el, "click").subscribe(function () {
          return host.expanded = !host.expanded;
        }),
        mouseenter: ObserveEvent(el, "mouseenter").subscribe(function () {
          return el.classList.add("hovering");
        }),
        mouseleave: ObserveEvent(el, "mouseleave").subscribe(function () {
          return el.classList.remove("hovering");
        })
      };
    }
  }
};
var ContentCollapse = WCConstructor({
  componentName: content_collapse_componentName,
  componentRoot: content_collapse_componentRoot,
  template: content_collapse_template,
  style: content_collapse_style,
  observedAttributes: content_collapse_observedAttributes,
  properties: content_collapse_properties,
  elements: content_collapse_elements,
  onConnected: function onConnected(host) {
    content_collapse_setStyleElement(host);
  }
});
WCDefine(content_collapse_componentName, ContentCollapse);
// CONCATENATED MODULE: ./src/utils/if-empty/index.js

function IfEmpty(newValue) {
  return function (value) {
    var result = TMonad(value);

    if (result.stop || IsEmpty(result.value)) {
      return result;
    }

    return TMonad(newValue);
  };
}
// CONCATENATED MODULE: ./src/components/content-drawer/methods.js
var methods_toggle = function toggle(host, open) {
  if (!host.ready) {
    return;
  }

  var root = host.elements.root;

  if (root) {
    root.classList[open ? "add" : "remove"]("open");
  }

  var header = host.elements.header;
  var scaler = host.elements.scaler;
  var inner = host.elements.contentInner;
  var bounce = host.elements.bounce;
  var underline = host.elements.underline;
  var ripple = host.elements.ripple;
  var fader = host.elements.fader;
  scaler.scaled = !open;

  if (!!host.bounce && host.bounce !== "false") {
    var target;

    if (host.bounce === "header") {
      target = header;
    }

    if (host.bounce === "content") {
      target = inner;
    }

    if (host.bounce === "true" || host.bounce === "all") {
      target = root;
    }

    bounce.targets = [target];
    bounce.amount = host.bounceamount || -4;
    bounce.speed = host.bouncespeed;

    if (typeof bounce.trigger === "function") {
      bounce.trigger();
    }
  } else if (bounce.targets && bounce.targets.length) {
    bounce.targets = [];
  }

  if (fader) {
    if (!host.fade && fader.targets.length) {
      fader.targets = [];
    }

    if (host.fade && !fader.targets.length && inner) {
      fader.targets = [inner];
    }

    if (host.fade && fader.opacity !== host.fadeamount) {
      fader.opacity = host.fadeamount;
    }

    if (host.fade && fader.speed !== host.fadespeed) {
      fader.speed = host.fadespeed;
    }
  }

  if (underline) {
    if (!host.underline && underline.targets.length) {
      underline.targets = [];
    }

    if (host.underline && !underline.targets.length && header) {
      underline.targets = [header];
    }

    if (host.underline && underline.opacity !== host.underlineamount) {
      underline.opacity = host.underlineamount;
    }

    if (host.underline && underline.speed !== host.underlinespeed) {
      underline.speed = host.underlinespeed;
    }

    if (host.underline && underline.color !== host.accentcolor && ripple.color !== host.underlinecolor) {
      underline.color = host.underlinecolor || host.accentcolor;
    }

    if (!!host.underline && underline.direction !== host.underline) {
      underline.direction = host.underline;
    }
  }

  if (ripple) {
    if (!host.ripple && ripple.targets.length) {
      ripple.targets = [];
    }

    if (host.ripple && !ripple.targets.length && header) {
      ripple.targets = [header];
    }

    if (host.ripple && ripple.opacity !== host.rippleamount) {
      ripple.opacity = host.rippleamount;
    }

    if (host.ripple && ripple.speed !== host.ripplespeed) {
      ripple.speed = host.ripplespeed;
    }

    if (host.ripple && ripple.color !== host.accentcolor && ripple.color !== host.ripplecolor) {
      ripple.color = host.ripplecolor || host.accentcolor;
    }

    if (!!host.ripple && ripple.direction !== host.ripple) {
      ripple.direction = host.ripple;
    }
  }

  var others = [];

  if (host.drawergroup) {
    others = Array.from(document.querySelectorAll("content-drawer[drawergroup=\"".concat(host.drawergroup, "\"]")));
  }

  if (open) {
    if (host.canUnderline) {
      underline.open();
    }

    if (host.canFade) {
      fader.open();
    }

    if (host.canRipple) {
      ripple.trigger();
    }

    others.forEach(function (other) {
      if (other !== host) {
        other.open = false;
      }
    });
  } else {
    if (host.canUnderline) {
      underline.close();
    }

    if (host.canFade) {
      fader.close();
    }
  }
};
// CONCATENATED MODULE: ./src/components/content-drawer/elements.js
/* eslint-disable tree-shaking/no-side-effects-in-initialization */


var elementSelectors = {
  root: ".content-drawer-container",
  header: ".content-drawer-header",
  content: ".content-drawer-content",
  contentInner: ".content-drawer-content-inner",
  scaler: "effect-scale",
  underline: "effect-underline",
  ripple: "effect-ripple",
  fader: "effect-fade",
  headerIcon: "icon-element",
  bounce: "effect-bounce-z",
  injectedStyles: "style.injectedStyles"
};
var elements_elements = {};
var elements_setScaler = function setScaler(host) {
  var inner = host.elements.contentInner;
  var scaler = host.elements.scaler;
  scaler.targets = [inner];
  scaler.x = ["left", "right"].indexOf(host.openfrom) > -1;
  scaler.y = ["top", "bottom"].indexOf(host.openfrom) > -1;
  scaler.startfrom = toEffectStartFrom(host.openfrom);
  scaler.scaled = !host.open;
};
var setFader = function setFader(host) {
  host.elements.fader.targets = [host.elements.contentInner];
};
var setUnderline = function setUnderline(host) {
  var underline = host.elements.underline;

  if (!underline) {
    return;
  }

  underline.color = host.accentcolor;
  underline.direction = host.underline;
  underline.targets = [host.elements.header];

  if (typeof underline.open !== "function") {
    return;
  }

  if (host.open) {
    underline.open();
  } else {
    underline.close();
  }
};
var elements_setRipple = function setRipple(host) {
  var ripple = host.elements.ripple;
  ripple.targets = [host.elements.header];
  ripple.color = host.accentcolor;
  ripple.direction = host.ripple;
};
var setHeaderIcon = function setHeaderIcon(host) {
  var prop = host.headericon.slice(0, 4) === "<svg" ? "svg" : "type";
  host.elements.headerIcon[prop] = host.headericon;
};
var elements_setStyles = function setStyles(el, styles) {
  if (!el) {
    return;
  }

  SetStyleRules(el, styles);
};
var elementMethods = {
  header: function header(el, host) {
    el.eventSubscriptions = {
      click: ObserveEvent(el, "click").subscribe(function () {
        return host.open = !host.open;
      })
    };
  },
  injectedStyles: function injectedStyles(el, host) {
    return elements_setStyles(el, host.styles);
  }
};
Object.keys(elementSelectors).forEach(function (key) {
  elements_elements[key] = {
    selector: elementSelectors[key],
    onChange: elementMethods[key] ? elementMethods[key] : function () {}
  };
});
/* harmony default export */ var content_drawer_elements = (elements_elements);
// CONCATENATED MODULE: ./src/components/content-drawer/properties.js



var arrowIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg>";
var properties_directions = ["auto", "left", "right", "top", "bottom"];
var toEffectStartFrom = function toEffectStartFrom(val) {
  return val === "auto" ? "auto" : val === "top" ? "center top" : val === "bottom" ? "center bottom" : val === "left" ? "left center" : "right center";
};

var setElementParam = function setElementParam(el, key, value) {
  return !el ? undefined : el[key] = value;
};

var attributes = {
  accentcolor: {
    format: function format(val) {
      return Pipe(ToString, IfEmpty("#59a2d8"))(val).value;
    },
    onChange: function onChange(val, host) {
      setElementParam(host.elements.ripple, "color", val);
      setElementParam(host.elements.underline, "color", val);
    }
  },
  bounce: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid("all"))(val).value;
    }
  },
  bounceamount: {
    format: function format(val) {
      return Pipe(ToNumber, IfInvalid(null))(val).value;
    }
  },
  bouncespeed: {
    format: function format(val) {
      return Pipe(ToNumber, IfInvalid(null))(val).value;
    }
  },
  "class": ComponentClassObject,
  drawergroup: {
    format: function format(val) {
      return val;
    }
  },
  fade: {
    format: function format(val) {
      return Pipe(ToBool, IfInvalid(true))(val).value;
    }
  },
  fadeamount: {
    format: function format(val) {
      return Pipe(CommasToArray, IfInvalid([0, 1]), ToMap(function (v) {
        return ToNumber(v).value;
      }))(val).value;
    }
  },
  fadespeed: {
    format: function format(val) {
      return Pipe(ToNumber, IfInvalid(null))(val).value;
    }
  },
  headericon: {
    format: function format(val) {
      return val === "true" || val === undefined || val === null ? arrowIcon : val === "false" ? false : val;
    },
    onChange: function onChange(_val, host) {
      return setHeaderIcon(host);
    }
  },
  openfrom: {
    format: function format(val) {
      return Pipe(IndexOf(properties_directions), IfInvalid("top"))(val).value;
    },
    onChange: function onChange(val, host) {
      setElementParam(host.elements.scaler, "startfrom", toEffectStartFrom(val));
      setElementParam(host.elements.scaler, "x", ["left", "right"].indexOf(val) > -1);
      setElementParam(host.elements.scaler, "y", ["top", "bottom"].indexOf(val) > -1);
    }
  },
  open: {
    format: function format(val) {
      return ToBool(val).value;
    },
    onChange: function onChange(val, host) {
      return methods_toggle(host, val);
    }
  },
  ripple: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid("auto"))(val).value;
    }
  },
  rippleamount: {
    format: function format(val) {
      return Pipe(ToNumber, IfInvalid(undefined))(val).value;
    }
  },
  ripplecolor: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid(undefined))(val).value;
    }
  },
  ripplespeed: {
    format: function format(val) {
      return Pipe(ToNumber, IfInvalid(undefined))(val).value;
    }
  },
  speed: {
    format: function format(val) {
      return Pipe(ToNumber, IfInvalid(333))(val).value;
    },
    onChange: function onChange(val, host) {
      return setElementParam(host.elements.scaler, "speed", val);
    }
  },
  styles: {
    format: function format(val) {
      return typeof val === "string" ? val : "";
    },
    onChange: function onChange(val, host) {
      return elements_setStyles(host.elements.injectedStyles, val);
    }
  },
  underline: {
    format: function format(val) {
      return val;
    }
  },
  underlineamount: {
    format: function format(val) {
      return Pipe(ToNumber, IfInvalid(undefined))(val).value;
    }
  },
  underlinecolor: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid(undefined))(val).value;
    }
  },
  underlinespeed: {
    format: function format(val) {
      return Pipe(ToNumber, IfInvalid(undefined))(val).value;
    }
  }
};
var properties_properties = Object.assign({}, attributes);
var properties_observedAttributes = Object.keys(attributes);
var hasScaler = function hasScaler(host) {
  return {
    get: function get() {
      var el = host.elements.scaler;
      return !!el && el.ready === true;
    }
  };
};
var hasUnderline = function hasUnderline(host) {
  return {
    get: function get() {
      var el = host.elements.underline;
      return !!el && el.ready === true;
    }
  };
};
var hasRipple = function hasRipple(host) {
  return {
    get: function get() {
      var el = host.elements.ripple;
      return !!el && el.ready === true;
    }
  };
};
var hasHeaderIcon = function hasHeaderIcon(host) {
  return {
    get: function get() {
      var el = host.elements.headerIcon;
      return !!el && !!el.ready && host.headericon !== false;
    }
  };
};
var canScale = function canScale(host) {
  return {
    get: function get() {
      return host.hasScaler && !!host.elements.header && !!host.elements.contentInner;
    }
  };
};
var canUnderline = function canUnderline(host) {
  return {
    get: function get() {
      var can = !!host.underline && host.underline !== "false";
      return host.hasUnderline && can && !!host.elements.header && host.ready === true;
    }
  };
};
var canRipple = function canRipple(host) {
  return {
    get: function get() {
      var can = !!host.ripple && host.ripple !== "false";
      return host.hasRipple && can && !!host.elements.header && host.ready === true;
    }
  };
};
var hasFader = function hasFader(host) {
  return {
    get: function get() {
      var el = host.elements.fader;
      return !!el && el.ready === true;
    }
  };
};
var canFade = function canFade(host) {
  return {
    get: function get() {
      var can = !!host.fade && host.fade !== "false";
      return host.hasFader && can && !!host.elements.contentInner && host.ready === true;
    }
  };
};
// CONCATENATED MODULE: ./src/components/content-drawer/index.js


 // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization

var content_drawer_style = __webpack_require__(30).toString(); // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization


var content_drawer_template = __webpack_require__(31);

var content_drawer_componentName = "content-drawer";
var content_drawer_componentRoot = ".content-drawer-container";
var ContentDrawer =
/*#__PURE__*/
WCConstructor({
  componentName: content_drawer_componentName,
  componentRoot: content_drawer_componentRoot,
  template: content_drawer_template,
  style: content_drawer_style,
  observedAttributes: properties_observedAttributes,
  properties: properties_properties,
  elements: content_drawer_elements,
  computed: {
    hasScaler: hasScaler,
    hasUnderline: hasUnderline,
    hasRipple: hasRipple,
    hasHeaderIcon: hasHeaderIcon,
    hasFader: hasFader,
    canUnderline: canUnderline,
    canScale: canScale,
    canRipple: canRipple,
    canFade: canFade
  },
  onReady: function onReady(host) {
    host.elements.root.classList[host.open ? "add" : "remove"]("open");
    elements_setScaler(host);
    setFader(host);
    setUnderline(host);
    elements_setRipple(host);
    setHeaderIcon(host);
  }
});
WCDefine(content_drawer_componentName, ContentDrawer);
// CONCATENATED MODULE: ./src/components/content-transition/elements.js


var content_transition_elements_setStyles = function setStyles(el, host, styles) {
  if (!el) {
    return;
  }

  SetStyleRules(el, styles || host.styles);
};
var setKeepChildren = function setKeepChildren(host) {
  var root = host.elements.root;

  if (!root) {
    return;
  }

  root.classList[host.keepchildren ? "add" : "remove"]("keepchildren");
};
var content_transition_elements_elements = {
  root: {
    selector: ".content-transition-container",
    onChange: function onChange(el, host) {
      content_transition_setStyleElement(host);
      el.setAttribute("type", host.type);
    }
  },
  current: {
    selector: "slot[name=\"current\"]"
  },
  injectedStyles: {
    selector: "style.injectedStyles",
    onChange: content_transition_elements_setStyles
  },
  themeStyles: {
    selector: "style.themeStyles",
    onChange: function onChange(el, host) {
      return content_transition_elements_setStyles(el, host, host.theme);
    }
  },
  next: {
    selector: "slot[name=\"next\"]"
  },
  nextContainer: {
    selector: ".next-slot"
  },
  hidden: {
    selector: "slot[name=\"hidden\"]"
  },
  hiddentContainer: {
    selector: ".hidden-slot"
  },
  currentContainer: {
    selector: ".current-slot"
  }
};
/* harmony default export */ var content_transition_elements = (content_transition_elements_elements);
// CONCATENATED MODULE: ./src/components/content-transition/properties.js


var content_transition_properties_properties = {
  "class": ComponentClassObject,
  styles: {
    format: function format(val) {
      return typeof val === "string" ? val : "";
    },
    onChange: function onChange(val, host) {
      return content_transition_elements_setStyles(host.elements.injectedStyles, host, val);
    }
  },
  theme: {
    format: function format(val) {
      return typeof val === "string" ? val : "";
    },
    onChange: function onChange(val, host) {
      return content_transition_elements_setStyles(host.elements.themeStyles, host, val);
    }
  },
  speed: {
    format: function format(val) {
      return isNaN(val) ? 300 : val;
    }
  },
  type: {
    format: function format(val) {
      return ["fade", "slide", "height"].indexOf(val) > -1 ? val : "fade";
    },
    onChange: function onChange(val, host) {
      var root = host.elements.root;

      if (!root) {
        return;
      }

      root.setAttribute("type", val);
    }
  },
  keepchildren: {
    format: function format(val) {
      return Pipe(ToBool, IfInvalid(false))(val).value;
    },
    onChange: function onChange(_val, host) {
      return setKeepChildren(host);
    }
  },
  current: {
    format: function format(val) {
      return val;
    }
  },
  start: {
    format: function format(val) {
      return val;
    }
  },
  end: {
    format: function format(val) {
      return val;
    }
  }
};
var content_transition_properties_observedAttributes = Object.keys(content_transition_properties_properties);
// CONCATENATED MODULE: ./src/utils/get-ease/index.js
var distance = function distance(v) {
  return v[1] - v[0];
};

function GetEase(values, duration, pow, powerFn) {
  var results = [];
  var index = 0;

  while (index < duration - 1) {
    var current = Math.round(distance(values) * powerFn(index, duration, pow) * 1000) / 1000;
    results.push(values[0] + current);
    index = index + 1;
  }

  results.push(values[1]);
  return results;
}
// CONCATENATED MODULE: ./src/utils/ease-power/index.js
function EasePower(stepDecimal) {
  var pow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
  return 1 - Math.pow(1 - stepDecimal, pow);
}
// CONCATENATED MODULE: ./src/utils/ease-in-out/index.js

function EaseInOut(values, duration) {
  var pow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4;
  return GetEase(values, duration, pow, function (index, frames, pow) {
    return EasePower(index / frames * (index / frames), pow);
  });
}
// CONCATENATED MODULE: ./src/components/content-transition/methods.js
 // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization

var methods_style = __webpack_require__(10).toString();

var dispatchTransition = function dispatchTransition(host, from, to) {
  host.dispatchEvent(new CustomEvent("transitioning", {
    detail: {
      host: host,
      from: from,
      to: to
    }
  }));
};

var dispatchTransitioned = function dispatchTransitioned(host, from, to) {
  host.dispatchEvent(new CustomEvent("transitioned", {
    detail: {
      host: host,
      from: from,
      to: to
    }
  }));
};

var removeElement = function removeElement(el) {
  try {
    el.parentNode.removeChild(el);
  } catch (error) {}
};

var methods_animator = function animator(from, to, speed, stepFn) {
  return new Promise(function (resolve) {
    return Timer(speed, stepFn, EaseInOut([from, to], speed), resolve);
  });
};

var animateHeight = function animateHeight(from, to, el, speed) {
  return methods_animator(from, to, speed, function (heightStep) {
    return el.style.height = "".concat(heightStep, "px");
  });
};

var animateLeft = function animateLeft(from, to, el, speed) {
  return methods_animator(from, to, speed, function (leftStep) {
    return el.style.transform = "translateZ(0) translateX(".concat(leftStep, "%)");
  });
};

var animateOpacity = function animateOpacity(from, to, el, speed) {
  return methods_animator(from, to, speed, function (opacityStep) {
    return el.style.opacity = opacityStep;
  });
};

var getChildren = function getChildren(host) {
  return function () {
    return Array.from(host.querySelectorAll("[slot]"));
  };
};
var getCurrent = function getCurrent(host) {
  return function () {
    return host.querySelector("[slot=\"current\"]");
  };
};

var getTransitionElements = function getTransitionElements(host, indexOrChild) {
  var nextContainer = host.elements.nextContainer;
  var currentContainer = host.elements.currentContainer;
  var root = host.elements.root;
  var child = isNaN(indexOrChild) ? indexOrChild : host.getChildren()[indexOrChild];
  var current = host.current || host.getCurrent();

  if (!root || !nextContainer || !currentContainer || !child) {
    return;
  }

  host.current = child;
  return {
    nextContainer: nextContainer,
    currentContainer: currentContainer,
    root: root,
    child: child,
    current: current
  };
};

var cleanup = function cleanup(host) {
  var children = host.getChildren(); // TODO watch if this is needed. Causes issues with content-transition inside of content-transition being incorrectly changed
  // children.forEach(child => child === host.current ? undefined : child.setAttribute(`slot`, `hidden`))

  var current = host.getCurrent();
  host.end = {
    current: current,
    index: children.indexOf(current)
  };
  return host.current;
};

var transitionStart = function transitionStart(current) {
  return new Promise(function (resolve) {
    if (current) {
      current.className = current.className.split("content-transition-shown").join("").split(" ").filter(function (s) {
        return !!s.trim();
      }).join(" ");
    }

    requestAnimationFrame(resolve);
  });
};

var transitionEnd = function transitionEnd(next) {
  next.className = "content-transition-shown ".concat(next.className.split("content-transition-shown").join("").split(" ").filter(function (s) {
    return !!s.trim();
  }).join(" "));
};

var transitionSlide = function transitionSlide(host, index, speed, keepchildren) {
  return new Promise(function (resolve) {
    var elements = getTransitionElements(host, index);

    if (!elements) {
      return resolve();
    }

    dispatchTransition(host, elements.current, elements.child);
    host.start = {
      from: elements.current,
      to: elements.child
    };
    var startHeight = elements.root.offsetHeight;
    elements.root.style.height = "".concat(startHeight, "px");
    elements.root.classList.add("sliding");
    elements.child.setAttribute("slot", "next");
    var endHeight = elements.child.offsetHeight;
    transitionStart(elements.current).then(function () {
      if (startHeight !== endHeight) {
        animateHeight(startHeight, elements.child.offsetHeight, elements.root, speed).then(function () {
          requestAnimationFrame(function () {
            elements.root.style.removeProperty("height");
            transitionEnd(elements.child);
          });
        });
      }

      setTimeout(function () {
        requestAnimationFrame(function () {
          animateOpacity(0, 1, elements.nextContainer, speed * 0.25);
        });
      }, speed * 0.1);
      animateOpacity(1, 0, elements.currentContainer, speed * 0.8);
      animateLeft(0, 100, elements.currentContainer, speed * 0.8);
      animateLeft(-100, 0, elements.nextContainer, speed).then(function () {
        if (elements.current) {
          elements.current.setAttribute("slot", "hidden");
        }

        elements.currentContainer.removeAttribute("style");
        elements.child.setAttribute("slot", "current");
        elements.nextContainer.removeAttribute("style");
        elements.root.classList.remove("sliding");
        transitionEnd(elements.child);
        dispatchTransitioned(host, elements.current, elements.child);

        if (!keepchildren) {
          removeElement(elements.current);
        }

        return resolve(cleanup(host));
      });
    });
  });
};

var runHeight = function runHeight(elements, speed, keepchildren, host) {
  return new Promise(function (resolve) {
    dispatchTransition(host, elements.current, elements.child);
    host.start = {
      from: elements.current,
      to: elements.child
    };
    var startHeight = elements.root.offsetHeight;
    elements.root.style.height = "".concat(startHeight, "px");
    elements.child.setAttribute("slot", "next");

    if (!host.contains(elements.child)) {
      host.appendChild(elements.child);
    }

    var endHeight = elements.child.offsetHeight;
    transitionStart(elements.current).then(function () {
      var afterHeightSet = function afterHeightSet() {
        if (!keepchildren) {
          while (host.getChildren().length > 1) {
            removeElement(host.getChildren()[0]);
          }
        }

        if (elements.current) {
          elements.current.setAttribute("slot", "hidden");
        }

        elements.child.setAttribute("slot", "current");
        elements.child.style.removeProperty("opacity");
        elements.currentContainer.style.removeProperty("opacity");
        elements.nextContainer.style.removeProperty("opacity");
        requestAnimationFrame(function () {
          dispatchTransitioned(host, elements.current, elements.child);
          transitionEnd(elements.child);
          cleanup(host);
          elements.root.style.removeProperty("height");
          return resolve(host.current);
        });
      };

      if (endHeight === startHeight) {
        return setTimeout(afterHeightSet, speed);
      }

      animateHeight(startHeight, endHeight, elements.root, speed).then(afterHeightSet);
    });
  });
};

var transitionFade = function transitionFade(host, child, speed, keepchildren) {
  return new Promise(function (resolve) {
    var elements = getTransitionElements(host, child);

    if (!elements) {
      return resolve();
    }

    animateOpacity(1, 0, elements.currentContainer, speed * 0.75);
    animateOpacity(0, 1, elements.nextContainer, speed);
    return runHeight(elements, speed, keepchildren, host).then(resolve);
  });
};

var transitionHeight = function transitionHeight(host, child, speed, keepchildren) {
  return new Promise(function (resolve) {
    var elements = getTransitionElements(host, child);

    if (!elements) {
      return resolve();
    }

    return runHeight(elements, speed, keepchildren, host).then(resolve);
  });
};

var transitionTo = function transitionTo(host) {
  return function (index) {
    return new Promise(function (resolve) {
      switch (host.type) {
        case "slide":
          return transitionSlide(host, index, host.speed, host.keepchildren).then(resolve);

        case "fade":
          return transitionFade(host, index, host.speed, host.keepchildren).then(resolve);

        case "height":
          return transitionHeight(host, index, host.speed, host.keepchildren).then(resolve);
      }
    });
  };
};
var transitionChild = function transitionChild(host) {
  return function (child) {
    return new Promise(function (resolve) {
      switch (host.type) {
        case "slide":
          return transitionSlide(host, child, host.speed, host.keepchildren).then(resolve);

        case "fade":
          return transitionFade(host, child, host.speed, host.keepchildren).then(resolve);

        case "height":
          return transitionHeight(host, child, host.speed, host.keepchildren).then(resolve);
      }
    });
  };
};
var getComponentStyles = function getComponentStyles(host) {
  return function () {
    return "".concat(methods_style).concat(host.styles);
  };
};
var getIndex = function getIndex(host) {
  return function () {
    return host.getChildren().indexOf(host.getCurrent());
  };
};
var start$ = function start$(host) {
  return function (next) {
    var error = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
    var complete = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
    return host.state.start.subscribe(next, error, complete);
  };
};
var end$ = function end$(host) {
  return function (next) {
    var error = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
    var complete = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
    return host.state.end.subscribe(next, error, complete);
  };
};
var setCurrent = function setCurrent(host) {
  return function (index) {
    var elements = getTransitionElements(host, index);

    var end = function end() {
      if (elements.current && elements.current.slot !== "hidden") {
        elements.current.slot = "hidden";
      }

      if (elements.child && elements.child.slot !== "current") {
        elements.child.slot = "current";
      }
    };

    if (elements.current === elements.child) {
      return Promise.resolve(end());
    }

    return transitionStart(elements.current).then(function () {
      transitionEnd(elements.child);
      cleanup(host);
      return end();
    });
  };
};
// CONCATENATED MODULE: ./src/components/content-transition/index.js



 // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization

var content_transition_style = __webpack_require__(10).toString(); // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization


var content_transition_template = __webpack_require__(32);

var content_transition_componentName = "content-transition";
var content_transition_componentRoot = ".content-transition-container";
var content_transition_setStyleElement = function setStyleElement(host) {
  var outerStyle = host.querySelector("style[name=\"outer\"]");
  var componentStyle = host.shadowRoot.querySelector("style[name=\"\"]");
  var themeStyles = host.elements.themeStyles;
  var injectedStyles = host.elements.injectedStyles;
  var styleString = [content_transition_style, themeStyles ? themeStyles.innerHTML : "", injectedStyles ? injectedStyles.innerHTML : ""].join("");

  if (!outerStyle) {
    AppendStyleElement(styleString, host, "outer");
    outerStyle = host.querySelector("style[name=\"outer\"]");
    outerStyle.nonchild = true;
  }

  content_transition_elements_setStyles(componentStyle, host, styleString);
  content_transition_elements_setStyles(outerStyle, host, styleString);
};
var ContentTransition = WCConstructor({
  componentName: content_transition_componentName,
  componentRoot: content_transition_componentRoot,
  template: content_transition_template,
  style: content_transition_style,
  observedAttributes: content_transition_properties_observedAttributes,
  properties: content_transition_properties_properties,
  elements: content_transition_elements,
  methods: {
    transitionChild: transitionChild,
    transitionTo: transitionTo,
    getComponentStyles: getComponentStyles,
    getIndex: getIndex,
    getCurrent: getCurrent,
    getChildren: getChildren,
    start$: start$,
    end$: end$,
    setCurrent: setCurrent
  }
});
WCDefine(content_transition_componentName, ContentTransition);
// CONCATENATED MODULE: ./src/components/cookie-message/index.js
 // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization

var cookie_message_style = __webpack_require__(33).toString(); // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization


var cookie_message_template = __webpack_require__(34);

var cookie_message_componentName = "cookie-message";
var cookie_message_componentRoot = ".cookie-message-container";

var cookie_message_setStyles = function setStyles(el, host, styles) {
  if (!el) {
    return;
  }

  SetStyleRules(el, styles || host.styles);
};

var cookie_message_setButton = function setButton(host) {
  var button = host.elements.button;

  if (!button) {
    return;
  }

  button.innerHTML = host.buttontext || "";
  button.accentcolor = host.buttonaccent;
  button.ripple = host.buttonripple;
  button.bounce = host.buttonbounce;

  if (typeof button.clickListener === "function") {
    button.clickListener();
  }

  button.clickListener = ObserveEvent(button, "click").subscribe(function () {
    host.shown = false;
  });
};

var setMessage = function setMessage(host) {
  var message = host.elements.message;

  if (!message) {
    return;
  }

  message.innerHTML = host.message || "";
};

var cookieName = "accepted_cookies";

var setCookie = function setCookie() {
  document.cookie = "".concat(cookieName, "=true");
};

var getCookie = function getCookie() {
  try {
    return !!document.cookie.split(";").filter(function (c) {
      return c.indexOf(cookieName) > -1;
    }).map(function (c) {
      return JSON.parse(c.split("=")[1]);
    })[0];
  } catch (error) {}
};

var cookie_message_properties = {
  "class": ComponentClassObject,
  shown: {
    format: function format(val) {
      return Pipe(ToBool, IfInvalid(!getCookie()))(val).value;
    },
    onChange: function onChange(val, host) {
      if (val) {
        try {
          localStorage.removeItem(cookieName);
        } catch (error) {}

        host.elements.root.classList.add("shown");
      } else {
        setCookie();
        host.elements.root.classList.remove("shown");
      }
    }
  },
  message: {
    format: function format(val) {
      return typeof val === "string" ? val : "By clicking \"Continue\" or continuing to use our site, you acknowledge that you accept our use of cookies, which are used to provide you with the best possible experience and no personal information is stored.";
    },
    onChange: function onChange(_val, host) {
      return setMessage(host);
    }
  },
  buttontext: {
    format: function format(val) {
      return typeof val === "string" ? val : "Continue";
    },
    onChange: function onChange(_val, host) {
      return cookie_message_setButton(host);
    }
  },
  buttonripple: {
    format: function format(val) {
      return Pipe(ToBool, IfInvalid(true))(val).value;
    },
    onChange: function onChange(_val, host) {
      return cookie_message_setButton(host);
    }
  },
  buttonbounce: {
    format: function format(val) {
      return Pipe(ToBool, IfInvalid(true))(val).value;
    },
    onChange: function onChange(_val, host) {
      return cookie_message_setButton(host);
    }
  },
  buttonaccent: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid("#59a2d8"))(val).value;
    },
    onChange: function onChange(_val, host) {
      return cookie_message_setButton(host);
    }
  },
  styles: {
    format: function format(val) {
      return typeof val === "string" ? val : "";
    },
    onChange: function onChange(val, host) {
      return cookie_message_setStyles(host.elements.injectedStyles, host, val);
    }
  }
};
var cookie_message_observedAttributes = Object.keys(cookie_message_properties);
var cookie_message_elements = {
  root: {
    selector: cookie_message_componentRoot,
    onChange: function onChange() {}
  },
  button: {
    selector: "button-element",
    onChange: function onChange(_el, host) {
      return cookie_message_setButton(host);
    }
  },
  message: {
    selector: ".cookie-message-text",
    onChange: function onChange(_el, host) {
      return setMessage(host);
    }
  },
  injectedStyles: {
    selector: "style.injectedStyles",
    onChange: cookie_message_setStyles
  }
};
var CookieMessage = WCConstructor({
  componentName: cookie_message_componentName,
  componentRoot: cookie_message_componentRoot,
  template: cookie_message_template,
  style: cookie_message_style,
  observedAttributes: cookie_message_observedAttributes,
  properties: cookie_message_properties,
  elements: cookie_message_elements,
  onConnected: function onConnected(host) {
    host.shown = !getCookie();
  }
});
WCDefine(cookie_message_componentName, CookieMessage);
// CONCATENATED MODULE: ./src/utils/observe-slots/index.js

function ObserveSlots(element, mustHaveSlotAttribute) {
  if (!element) {
    return;
  }

  var mObserver = {
    disconnect: function disconnect() {}
  };
  var slotObserver = {
    disconnect: function disconnect() {}
  };
  var observer = Observer();

  var dispose = function dispose() {
    observer.complete();
    mObserver.disconnect();
    slotObserver.disconnect();
  };

  var newSlots = function newSlots(added, removed) {
    observer.next({
      added: added,
      removed: removed
    });
  };

  slotObserver = new MutationObserver(function (mutationsList) {
    var list = Array.from(mutationsList);

    while (list.length) {
      var mutation = list.shift();

      if (mutation.type === "childList" && (mutation.addedNodes.length || mutation.removedNodes.length)) {
        if (mustHaveSlotAttribute) {
          (function () {
            var added = [];
            var removed = [];
            mutation.addedNodes.forEach(function (a) {
              return a.getAttribute("slot") ? added.push(a) : undefined;
            });
            mutation.removedNodes.forEach(function (r) {
              return r.getAttribute("slot") ? removed.push(r) : undefined;
            });

            if (added.length || removed.length) {
              newSlots(added, removed);
            }
          })();
        } else {
          return newSlots(mutation.addedNodes, mutation.removedNodes);
        }
      }
    }
  });
  mObserver = new MutationObserver(function (e) {
    var elementIsRemoved = false;
    var ii = e.length;

    while (!elementIsRemoved && ii) {
      ii = ii - 1;
      var i = e[ii].removedNodes.length;

      while (!elementIsRemoved && i) {
        i = i - 1;
        elementIsRemoved = e[ii].removedNodes[i] === element;
      }
    }

    if (elementIsRemoved) {
      dispose();
    }
  });
  var max = 1000;

  var tryIt = function tryIt() {
    max = max - 1;

    if (!max) {
      return dispose();
    }

    var parent = element.parentNode || element.host;

    if (!parent) {
      return requestAnimationFrame(tryIt);
    }

    mObserver.observe(parent, {
      childList: true
    });
    slotObserver.observe(element, {
      childList: true
    });
  };

  tryIt();
  return observer;
}
// CONCATENATED MODULE: ./src/components/drop-down/index.js
 // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization

var drop_down_style = __webpack_require__(35).toString();

var drop_down_setStyles = function setStyles(el, styles) {
  if (!el) {
    return;
  }

  SetStyleRules(el, styles);
};

var drop_down_toggleOptions = function toggleOptions(show, host) {
  var overlay = host.elements.overlay;
  var root = host.elements.root;

  if (!root || !overlay) {
    return;
  }

  if (show && overlay.showing) {
    return;
  }

  try {
    overlay[show ? "show" : "hide"]();
  } catch (error) {}

  if (!show) {
    root.classList.remove("opened");
  } else {
    root.classList.add("opened");
  }

  host.dispatchEvent(new CustomEvent(show ? "selectopen" : "selectclose", {
    detail: host
  }));
};

var drop_down_properties = {
  "class": ComponentClassObject,
  styles: {
    format: function format(val) {
      return typeof val === "string" ? val : "";
    },
    onChange: function onChange(_el, host) {
      return drop_down_setStyleElement(host);
    }
  },
  theme: {
    format: function format(val) {
      return typeof val === "string" ? val : "";
    },
    onChange: function onChange(_el, host) {
      return drop_down_setStyleElement(host);
    }
  },
  open: {
    format: function format(val) {
      return Pipe(ToBool, IfInvalid(false))(val).value;
    },
    onChange: drop_down_toggleOptions
  },
  closeonclick: {
    format: function format(val) {
      return Pipe(ToBool, IfInvalid(true))(val).value;
    }
  }
}; // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization

var drop_down_template = __webpack_require__(36);

var drop_down_componentName = "drop-down";
var drop_down_componentRoot = ".".concat(drop_down_componentName, "-container");

var openClose = function openClose(open, host) {
  var change = function change() {
    var needsFocusBlur = host.open !== open;
    host.open = open;

    if (needsFocusBlur) {
      if (open) {
        host.focus();
      } else {
        host.blur();
      }
    }

    Array.from(host.children).forEach(function (c) {
      return c.blur();
    });
  };

  if (open) {
    return change();
  }

  setTimeout(change, 333);
};

var drop_down_elements = {
  root: {
    selector: drop_down_componentRoot
  },
  heading: {
    selector: ".drop-down-heading"
  },
  overlay: {
    selector: ".drop-down-overlay"
  },
  injectedStyles: {
    selector: "style.injectedStyles",
    onChange: function onChange(_el, host) {
      return drop_down_setStyleElement(host);
    }
  },
  themedStyles: {
    selector: "style.themedStyles",
    onChange: function onChange(_el, host) {
      return drop_down_setStyleElement(host);
    }
  }
};
var drop_down_setStyleElement = function setStyleElement(host) {
  var outerStyle = host.querySelector("style[name=\"outer\"]");
  var componentStyle = host.shadowRoot.querySelector("style[name=\"\"]");
  var styleString = [drop_down_style, host.theme, host.styles].join("");

  if (!outerStyle) {
    AppendStyleElement(styleString, host, "outer");
    outerStyle = host.querySelector("style[name=\"outer\"]");
    outerStyle.nonchild = true;
  }

  drop_down_setStyles(host.elements.injectedStyles, styleString);
  drop_down_setStyles(host.elements.themedStyles, styleString);
  drop_down_setStyles(componentStyle, styleString);
  drop_down_setStyles(outerStyle, styleString);
};
var DropDown = WCConstructor({
  componentName: drop_down_componentName,
  componentRoot: drop_down_componentRoot,
  template: drop_down_template,
  style: drop_down_style,
  properties: drop_down_properties,
  elements: drop_down_elements,
  observedAttributes: Object.keys(drop_down_properties),
  onConnected: function onConnected(host) {
    host.tabIndex = "0";

    var addClasses = function addClasses() {
      Array.from(host.children).forEach(function (child) {
        if (child.getAttribute("slot") === "option") {
          child.tabIndex = "0";
          child.classList.add("drop-down-option");
        }
      });
    };

    addClasses();
    host.eventSubscriptions = {
      slotObserver: ObserveSlots(host, true).subscribe(addClasses),
      docClick: ObserveEvent(document.body, "click").subscribe(function (e) {
        if (!WasClickedOn(host, e)) {
          if (host.open) {
            return openClose(false, host);
          }

          return;
        }

        if (WasClickedOn(Array.from(host.querySelectorAll("[slot=\"option\"]")), e)) {
          host.dispatchEvent(new CustomEvent("optionclick", {
            detail: {
              host: host,
              event: e
            }
          }));
        }

        if (WasClickedOn([host.elements.heading, host.querySelector("[slot=\"label\"]")], e)) {
          host.dispatchEvent(new CustomEvent("labelclick", {
            detail: {
              host: host,
              event: e
            }
          }));

          if (host.open) {
            return requestAnimationFrame(function () {
              return openClose(false, host);
            });
          } else {
            return openClose(true, host);
          }
        }

        if (host.closeonclick && host.open) {
          return requestAnimationFrame(function () {
            return openClose(false, host);
          });
        }
      })
    };
    var overlay = host.elements.overlay;
    overlay.target = host;
  },
  onDisconnected: function onDisconnected(host) {
    ObserverUnsubscribe(host);
  }
});
WCDefine(drop_down_componentName, DropDown);
// CONCATENATED MODULE: ./src/utils/if-is/index.js

function IfIs(compare, replace) {
  return function (value) {
    var result = TMonad(value);
    compare = TMonad(compare);
    result.valid = result.value === compare.value;

    if (result.value === compare.value) {
      result.value = TMonad(replace).value;
      result = TMonad(result.value);
    }

    return result;
  };
}
// CONCATENATED MODULE: ./src/utils/if-not/index.js

function IfNot(compare, replace) {
  return function (value) {
    var result = TMonad(value);
    compare = TMonad(compare);
    result.valid = result.value === compare.value;

    if (!result.valid) {
      var res = TMonad(replace);
      return res;
    }

    return result;
  };
}
// CONCATENATED MODULE: ./src/utils/set-attribute/index.js
function SetAttribute(element, name, value) {
  var asProperty = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (!element || !name) {
    return element;
  }

  var set = function set(n, v) {
    if (!asProperty) {
      return v ? element.setAttribute(n, v) : element.removeAttribute(n);
    }

    return v ? element[n] = v : element[n] = undefined;
  };

  if (Array.isArray(name)) {
    name.forEach(function (n, i) {
      return set(n, value[i]);
    });
  } else {
    set(name, value);
  }

  return element;
}
// CONCATENATED MODULE: ./src/utils/add-remove-attribute/index.js

function AddRemoveAttribute(el, attr, value) {
  if (!el) {
    return;
  }

  if (attr === "accept") {
    return SetAttribute(el, "accept", value ? value.join(", ") : undefined);
  }

  var arias = ["disabled", "required"];

  if (arias.indexOf(attr) > -1) {
    SetAttribute(el, "aria-".concat(attr), value);
  }

  SetAttribute(el, attr, value);
  return el;
}
// CONCATENATED MODULE: ./src/utils/is-mobile/index.js
var IsMobile = typeof window.orientation !== "undefined" || window.navigator.userAgent.indexOf("IEMobile") !== -1;
// CONCATENATED MODULE: ./src/utils/to-options/index.js

function ToOptions(value) {
  var result = TMonad(value);

  if (result.stop) {
    return result;
  }

  var mapper = ToMap(function (value) {
    if (typeof value === "object" && Object.prototype.hasOwnProperty.call(value, "value")) {
      if (!Object.prototype.hasOwnProperty.call(value, "label")) {
        value.label = value.value;
      }

      return value;
    }

    return {
      value: value,
      label: value
    };
  });
  return TMonadUpdate(Pipe(CommasToArray, IfInvalid([]), mapper)(result), "array", "Options");
}
// CONCATENATED MODULE: ./src/utils/to-json/index.js

function ToJSON(value) {
  var result = FromJSON(value);

  if (result.stop) {
    return result;
  }

  try {
    result.value = JSON.stringify(result.value);
    result.valid = true;
  } catch (error) {
    result.valid = false;
  }

  result.type = Type(result.value);
  return result;
}
// CONCATENATED MODULE: ./src/utils/find-element-in/index.js
function FindElementIn(parent, selector) {
  var all = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return !parent ? undefined : parent[all ? "querySelectorAll" : "querySelector"](selector);
}
// CONCATENATED MODULE: ./src/utils/svg-tags.js
var svgTags = ["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "audio", "canvas", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "video", "view", "vkern"];
// CONCATENATED MODULE: ./src/utils/html-tags.js
var htmlTags = ["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"];
// CONCATENATED MODULE: ./src/utils/validate-html/index.js

function ValidateHtml(str, allowedHtmlTags, disallowedHtmlTags) {
  var original = str;
  var converted = Pipe(ToString, FromEntities)(str);
  var val = converted.value;

  var getElements = function getElements(Doc, selector) {
    return Array.from(Doc.body.querySelectorAll(selector));
  };

  if (!str || !str.length || converted.type !== "string") {
    return {
      original: original,
      valid: false,
      sanitized: val,
      reason: ["no value"]
    };
  }

  var doc;

  try {
    doc = new DOMParser().parseFromString(val, "text/html");
  } catch (error) {
    return {
      original: original,
      valid: true,
      sanitized: val,
      reason: ["no html present"]
    };
  }

  var totalElements = getElements(doc, "*");
  var tagsToDestroy = [];
  var elementsToDestroy = [];

  if (disallowedHtmlTags && disallowedHtmlTags.length) {
    tagsToDestroy = disallowedHtmlTags.slice(0);
  } else {
    tagsToDestroy = [].concat(svgTags, htmlTags);
  }

  if (allowedHtmlTags && allowedHtmlTags.length) {
    allowedHtmlTags.forEach(function (tag) {
      var index = tagsToDestroy.indexOf(tag);

      if (index > -1) {
        tagsToDestroy.splice(index, 1);
      }
    });
  }

  tagsToDestroy.forEach(function (tag) {
    elementsToDestroy = [].concat(getElements(doc, tag), elementsToDestroy);
  });
  elementsToDestroy.forEach(function (el) {
    if (el && el.parentNode) {
      var childrenLength = el.children.length;
      var index = 0;

      while (index < childrenLength) {
        try {
          el.parentNode.insertBefore(el.children[index], el);
        } catch (error) {}

        index = index + 1;
      }

      el.parentNode.removeChild(el);
    }
  });
  var leftOverElements = getElements(doc, "*");
  var diff = totalElements.length - leftOverElements.length;
  var valid = diff === 0;
  return {
    original: original,
    valid: valid,
    sanitized: valid ? val : !doc.body.innerHTML || !doc.body.innerHTML.length ? "" : doc.body.innerHTML,
    reason: valid ? [] : ["".concat(diff, " element").concat(diff > 1 ? "s were" : " was", " removed")]
  };
}
// CONCATENATED MODULE: ./src/utils/replace-element-contents/index.js
function ReplaceElementContents(element, contents) {
  var respond = function respond() {
    return {
      element: element,
      contents: contents
    };
  };

  if (!element) {
    return respond();
  }

  element.innerHTML = "";

  if (typeof contents === "string") {
    element.innerHTML = contents;
    return respond();
  }

  if (!Array.isArray(contents)) {
    return respond();
  }

  contents.forEach(function (content) {
    return element.appendChild(content);
  });
  return respond();
}
// CONCATENATED MODULE: ./src/components/dropdown-select/elements.js


var dropdown_select_elements_elements = {
  root: {
    selector: ".dropdown-select-container",
    onChange: function onChange(el, host) {
      el.eventSubscriptions = {
        blur: ObserveEvent(el, "blur").subscribe(function () {
          return requestAnimationFrame(host.elements.overlay.hide);
        })
      };
    }
  },
  input: {
    selector: "select.dropdown-select-input"
  },
  filter: {
    selector: "input.dropdown-select-filter",
    onChange: function onChange(el, host) {
      el.eventSubscriptions = {
        focus: ObserveEvent(el, "focus").subscribe(function () {
          if (host["native"]) {
            return;
          }

          el.value = "";
          methods_toggleOptions(host, true);
        }),
        blur: ObserveEvent(el, "blur").subscribe(function () {
          if (host["native"]) {
            return;
          }

          var overlay = host.elements.overlay;
          var selectedOption = FindElementIn(overlay, ".select-option.selected");
          host.value = selectedOption ? selectedOption.value : "";
          elements_setLabel(host);
          requestAnimationFrame(overlay.hide);
        }),
        keydown: ObserveEvent(el, "keydown").subscribe(function (e) {
          if (host["native"]) {
            return;
          }

          var overlay = host.elements.overlay;
          var key = Object(utils_get["a" /* Get */])(e, "key", "").toLowerCase();

          var newSelection = function newSelection(option) {
            setSelectedOption(host, option);
          };

          if (["arrowup", "arrowdown"].indexOf(key) > -1) {
            e.preventDefault();
            var $options = FindElementIn(overlay, ".select-option:not(.filtered-out)", true);
            var $previous;
            var $next;
            var $newSelected;

            for (var i = 0; i < $options.length; i++) {
              var $option = $options[i];
              var isSelected = $option.classList.contains("selected");
              setUnselectedOption($option);

              if (isSelected) {
                $previous = $options[i - 1] ? $options[i - 1] : $options[i];
                $next = $options[i + 1] ? $options[i + 1] : $options[i];
                break;
              }
            }

            if (!$previous && !$next) {
              $previous = $next = $options[0];
            }

            if (key === "arrowup") {
              $newSelected = $previous;
            } else if (key === "arrowdown") {
              $newSelected = $next;
            }

            if ($newSelected && !$newSelected.classList.contains("selected")) {
              newSelection($newSelected);
            }
          }

          if (key === "enter") {
            var visibleOptions = FindElementIn(overlay, ".select-option:not(.filtered-out)", true);

            if (visibleOptions.length === 1) {
              newSelection(visibleOptions[0]);
            }

            el.blur();
          }

          if (key === "escape") {
            Array.from(FindElementIn(overlay, ".select-option.selected", true)).forEach(function (o) {
              return o.classList.remove("selected");
            });
            var selected = host.selectedOptionElement;

            if (selected) {
              selected.classList.add("selected");
            }

            el.blur();
          }
        }),
        input: ObserveEvent(el, "input").subscribe(function () {
          host["native"] ? undefined : methods_filter(host, el.value);
        })
      };
    }
  },
  overlay: {
    selector: "overlay-content",
    onChange: function onChange(el, host) {
      var filter = host.elements.filter;

      if (filter) {
        el.target = host.elements.filter;
      }

      var loop = function loop() {
        if (!el || !el.parentNode) {
          return;
        }

        if (el.state && el.state.showing) {
          return el.state.showing.subscribe(function (e) {
            methods_toggleOptions(host, e);
          });
        }

        requestAnimationFrame(loop);
      };

      loop();
    }
  },
  label: {
    selector: ".dropdown-select-label",
    onChange: function onChange(el, host) {
      el.eventSubscriptions = el.eventSubscriptions ? el.eventSubscriptions : {};
      el.eventSubscriptions.click = ObserveEvent(el, "click").subscribe(function () {
        return methods_toggleOptions(host, true);
      });
    }
  },
  arrow: {
    selector: ".dropdown-select-arrow",
    onChange: function onChange(el, host) {
      el.eventSubscriptions = {
        click: ObserveEvent(el, "click").subscribe(function () {
          return methods_toggleOptions(host, true);
        })
      };
    }
  },
  injectedStyles: {
    selector: "style.injectedStyles",
    onChange: function onChange(_el, host) {
      return dropdown_select_elements_setStyles(host);
    }
  }
};
var elements_setInput = function setInput(host) {
  var filter = host.elements.filter;
  var overlay = host.elements.overlay;

  if (filter && overlay) {
    overlay.target = host.elements.root;
  }
};
var elements_setLabel = function setLabel(host) {
  if (host.statictext) {
    return ReplaceElementContents(host.elements.label, ValidateHtml(host.statictext, [], ["script"]).sanitized || "");
  }

  var formatFunction = host.formatvaluelabel && typeof host.formatvaluelabel === "function" ? host.formatvaluelabel : function (o) {
    return o.label;
  };
  var emptyOption = host.emptyoption ? host.emptyoption : "";
  var option = !host.options ? {
    value: "",
    label: emptyOption
  } : host.options[host.selectedIndex];
  var label = option ? formatFunction(option) : host.showempty ? emptyOption : "";
  ReplaceElementContents(host.elements.label, ValidateHtml(label, [], ["script"]).sanitized || "");
};
var dropdown_select_elements_setStyles = function setStyles(host) {
  var el = host.elements.injectedStyles;

  if (!el) {
    return;
  }

  var labelSize = ".dropdown-select-container .dropdown-select-label{font-size:".concat(host.labelsize, ";}");
  var optionColors = ".dropdown-select-container overlay-content .select-option{font-size:".concat(host.optionsize, ";color:").concat(host.optioncolor, ";background-color:").concat(host.optionbackground, ";}");
  var optionSelectedColors = ".dropdown-select-container overlay-content .select-option.selected,.dropdown-select-container overlay-content .select-option:hover{color:".concat(host.optionselectedcolor, ";background-color:").concat(host.optionselectedbackground, ";}");
  var styles = "".concat(host.styles).concat(optionColors).concat(optionSelectedColors).concat(labelSize);
  SetStyleRules(el, styles);
};
/* harmony default export */ var dropdown_select_elements = (dropdown_select_elements_elements);
// CONCATENATED MODULE: ./src/components/dropdown-select/methods.js


var methods_dispatch = function dispatch(host, type) {
  return host.dispatchEvent(new CustomEvent(type, {
    detail: host
  }));
};
var methods_initInput = function initInput(host) {
  setSelectOptions(host);
  elements_setInput(host);
  elements_setLabel(host);
};

var methods_setOptions = function setOptions(input, options, emptySelect) {
  var optionTag = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "option";

  if (!input || !options) {
    return;
  }

  var optionElements = [];

  var createOption = function createOption(option) {
    var optionElement = document.createElement(optionTag);
    optionElement.className = "select-option".concat(option["class"] ? " ".concat(option["class"]) : "");
    optionElement["value"] = option.value;
    optionElement.innerHTML = ValidateHtml(option.label, [], ["script"]).sanitized || "";
    optionElements.push(optionElement);
  };

  if (emptySelect !== false) {
    createOption({
      value: "",
      label: emptySelect,
      "class": "blank"
    });
  }

  options.forEach(function (option) {
    return createOption(option);
  });
  ReplaceElementContents(input, optionElements);

  if (optionTag !== "option") {
    optionElements.forEach(function (optionElement) {
      var link = optionElement.href ? optionElement : optionElement.querySelector("a");
      optionElement.eventSubscriptions = {
        mousedown: ObserveEvent(optionElement, "mousedown").subscribe(function () {
          optionElements.forEach(function (o) {
            return o.classList.remove("selected");
          });
          optionElement.classList.add("selected");
          input.value = optionElement.value;
          input.dispatchEvent(new Event("input"));
          optionElement.dispatchEvent(new Event("click"));

          if (link) {
            link.click();
          }
        })
      };
    });
  }

  return {
    input: input,
    options: options,
    optionElements: optionElements
  };
};

var scrollToSelectedOption = function scrollToSelectedOption(overlay, option) {
  if (!overlay || !option) {
    return;
  }

  var optionBox = option.getBoundingClientRect();
  var containerPosition = overlay.position;
  var optionTop = optionBox.top - containerPosition.top;
  var optionBottom = optionBox.height + optionTop;

  if (optionBottom > containerPosition.height) {
    overlay.scrollContent(0, containerPosition.scrollTop + (optionBottom - containerPosition.height));
  }

  if (optionTop < 0) {
    overlay.scrollContent(0, containerPosition.scrollTop + optionTop);
  }
};
var setSelectedOption = function setSelectedOption(host, option) {
  option.classList.add("selected");
  scrollToSelectedOption(host.elements.overlay, option);
};
var setUnselectedOption = function setUnselectedOption(option) {
  option.classList.remove("selected");
};
var methods_toggleOptions = function toggleOptions(host, show) {
  var overlay = host.elements.overlay;
  var root = host.elements.root;

  if (!root || !overlay) {
    return;
  }

  if (show && overlay.showing) {
    return;
  }

  var options = Array.from(FindElementIn(overlay, ".select-option", true));
  var selectedOption;
  options.forEach(function (option) {
    option.classList.remove("filtered-out");

    if (host.value === option.value) {
      selectedOption = option;
      setSelectedOption(host, option);
    } else {
      setUnselectedOption(option);
    }
  });
  root.classList[show ? "add" : "remove"]("hidden-label");
  overlay[show ? "show" : "hide"]().then(function () {
    scrollToSelectedOption(overlay, selectedOption);
  });

  if (!show) {
    root.classList.remove("opened");
    host.elements.filter.blur();
  } else {
    root.classList.add("opened");
    host.elements.filter.focus();
  }

  host.dispatchEvent(new CustomEvent(show ? "selectopen" : "selectclose", {
    detail: host
  }));
};
var methods_filter = function filter(host, value) {
  var filterValue = (value || "").toLowerCase();
  var options = Array.from(FindElementIn(host.elements.overlay, ".select-option", true));
  var emptyFilter = filterValue === "";
  options.forEach(function (o) {
    var label = o.textContent.toLowerCase();

    if (!emptyFilter) {
      if (label === filterValue || label.indexOf(filterValue) > -1) {
        o.classList.remove("filtered-out");
      } else {
        o.classList.add("filtered-out");
      }
    } else {
      o.classList.remove("filtered-out");
    }
  });
};
var setSelectOptions = function setSelectOptions(host) {
  if (!host.ready) {
    return;
  }

  var overlay = host.elements.overlay;
  var options = host.options.map(function (o) {
    return {
      value: host.formatvalue(o),
      label: host.formatlabel(o)
    };
  });
  methods_setOptions(host.elements.input, options, host.emptyoption);
  methods_setOptions(overlay, options, host.emptyoption, "div");
};
var methods_focus = function focus(host) {
  return function () {
    return host["native"] ? host.elements.input.focus() : host.elements.filter.focus();
  };
};
var methods_blur = function blur(host) {
  return function () {
    return host["native"] ? host.elements.input.blur() : host.elements.filter.blur();
  };
};
// CONCATENATED MODULE: ./src/components/dropdown-select/properties.js




var properties_attributes = {
  arrow: {
    format: function format(val) {
      return Pipe(ToString, IndexOf(["right", "left", "true", "false"]), IfInvalid("true"), IfIs("true", "right"))(val).value;
    },
    onChange: function onChange(val, host) {
      return host.elements.root.setAttribute("arrow", val);
    }
  },
  "class": ComponentClassObject,
  disabled: {
    format: function format(val) {
      return Pipe(ToBool, IfNot(true, null))(val).value;
    },
    onChange: function onChange(val, host) {
      host.elements.root.classList[val ? "add" : "remove"]("disabled");
      AddRemoveAttribute(host.elements.input, "disabled", val);
    }
  },
  disablefilter: {
    format: function format(val) {
      return Pipe(ToBool, IfInvalid(false))(val).value;
    },
    onChange: function onChange(val, host) {
      return host.elements.root.classList[val ? "add" : "remove"]("disablefilter");
    }
  },
  statictext: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid(""))(val).value;
    },
    onChange: function onChange(_val, host) {
      return elements_setLabel(host);
    }
  },
  showempty: {
    format: function format(val) {
      return Pipe(ToBool, IfInvalid(true))(val).value;
    },
    onChange: function onChange(_val, host) {
      return elements_setLabel(host);
    }
  },
  emptyoption: {
    format: function format(val) {
      return val === false || val === "false" ? false : val === undefined ? "Select..." : val;
    },
    onChange: function onChange(_val, host) {
      return setSelectOptions(host);
    }
  },
  hideonfilter: {
    format: function format(val) {
      return Pipe(ToBool, IfInvalid(true))(val).value;
    },
    onChange: function onChange(val, host) {
      return host.elements.root.classList[val ? "add" : "remove"]("hidefilteredout");
    }
  },
  multiple: {
    format: function format(val) {
      return Pipe(ToBool, IfInvalid(false))(val).value;
    },
    onChange: function onChange(val, host) {
      AddRemoveAttribute(host.elements.input, "multiple", val);
    }
  },
  name: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid(null))(val).value;
    },
    onChange: function onChange(val, host) {
      AddRemoveAttribute(host.elements.input, "name", val);
    }
  },
  "native": {
    format: function format(val) {
      return Pipe(ToBool, IfInvalid(  false || IsMobile))(val).value;
    },
    onChange: function onChange(val, host) {
      host.elements.root.classList[val ? "add" : "remove"]("native-select");
    }
  },
  options: {
    format: function format(val) {
      return Pipe(ToOptions, IfInvalid([]))(val).value;
    },
    onChange: function onChange(_val, host) {
      return setSelectOptions(host);
    }
  },
  formatlabel: {
    format: function format(val) {
      return Pipe(ToFunction, IfInvalid(function (v) {
        return v.label;
      }))(val).value;
    },
    onChange: function onChange(_val, host) {
      return setSelectOptions(host);
    }
  },
  formatvaluelabel: {
    format: function format(val) {
      return typeof val === "function" ? val : function (v) {
        return v.label;
      };
    },
    onChange: function onChange(_val, host) {
      return setSelectOptions(host);
    }
  },
  formatvalue: {
    format: function format(val) {
      return Pipe(ToFunction, IfInvalid(function (v) {
        return v.value;
      }))(val).value;
    },
    onChange: function onChange(_val, host) {
      return setSelectOptions(host);
    }
  },
  readonly: {
    format: function format(val) {
      return Pipe(ToBool, IfNot(true, null))(val).value;
    },
    onChange: function onChange(val, host) {
      host.elements.root.classList[val ? "add" : "remove"]("readonly");
      AddRemoveAttribute(host.elements.input, "readonly", val);
    }
  },
  required: {
    format: function format(val) {
      return Pipe(ToBool, IfNot(true, null))(val).value;
    },
    onChange: function onChange(val, host) {
      AddRemoveAttribute(host.elements.input, "required", val);
    }
  },
  styles: {
    format: function format(val) {
      return typeof val === "string" ? val : "";
    },
    onChange: function onChange(_val, host) {
      return dropdown_select_elements_setStyles(host);
    }
  },
  tabindex: {
    format: function format(val) {
      return Pipe(ToNumber, IfInvalid(-1))(val).value;
    },
    onChange: function onChange(val, host) {
      AddRemoveAttribute(host.elements.input, "tabindex", val);
    }
  },
  value: {
    format: function format(val) {
      return val;
    },
    onChange: function onChange(_val, host) {
      var overlay = host.elements.overlay;

      if (overlay && typeof overlay.hide === "function") {
        overlay.hide();
      }

      elements_setLabel(host);
      methods_dispatch(host, "input");
    }
  },
  optioncolor: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid("inherit"))(val).value;
    },
    onChange: function onChange(_val, host) {
      return dropdown_select_elements_setStyles(host);
    }
  },
  optionbackground: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid("#fafafa"))(val).value;
    },
    onChange: function onChange(_val, host) {
      return dropdown_select_elements_setStyles(host);
    }
  },
  optionselectedcolor: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid("#fff"))(val).value;
    },
    onChange: function onChange(_val, host) {
      return dropdown_select_elements_setStyles(host);
    }
  },
  optionselectedbackground: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid("#59a2d8"))(val).value;
    },
    onChange: function onChange(_val, host) {
      return dropdown_select_elements_setStyles(host);
    }
  },
  labelsize: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid("inherit"))(val).value;
    },
    onChange: function onChange(_val, host) {
      return dropdown_select_elements_setStyles(host);
    }
  },
  optionsize: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid("inherit"))(val).value;
    },
    onChange: function onChange(_val, host) {
      return dropdown_select_elements_setStyles(host);
    }
  }
}; // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization

var dropdown_select_properties_properties = Object.assign({}, properties_attributes);
var dropdown_select_properties_observedAttributes = Object.keys(properties_attributes);
var properties_selectedIndex = function selectedIndex(host) {
  return {
    get: function get() {
      if (!host.options || !host.options.length) {
        return undefined;
      }

      var parsed = Pipe(ToJSON, ToString)(host.value);

      if (parsed.type === "undefined" || parsed.value === "" || parsed.value === "\"\"") {
        if (host.emptyoption === false) {
          host.value = host.formatvalue(host.options[0]);
          return 0;
        }

        return undefined;
      }

      var i = 0;

      while (i < host.options.length) {
        var formatted = host.formatvalue(host.options[i]);
        var val = Pipe(ToJSON, ToString)(formatted).value;

        if (val === parsed.value) {
          return i;
        }

        i = i + 1;
      }

      return;
    }
  };
};
var properties_selectedOptionElement = function selectedOptionElement(host) {
  return {
    get: function get() {
      var overlay = host.elements.overlay;

      if (!overlay) {
        return;
      }

      return Array.from(FindElementIn(overlay, ".select-option", true))[host.selectedIndex + (host.emptyoption !== false ? 1 : 0)];
    }
  };
};
var properties_optionElements = function optionElements(host) {
  return {
    get: function get() {
      var overlay = host.elements.overlay;

      if (!overlay) {
        return [];
      }

      return Array.from(FindElementIn(overlay, ".select-option", true));
    }
  };
};
// CONCATENATED MODULE: ./src/components/dropdown-select/index.js



 // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization

var dropdown_select_style = __webpack_require__(37).toString();

var dropdown_select_formatter = function formatter(host, value, key) {
  if (value === undefined && typeof host.state[key].value === "function") {
    return;
  }

  var formatted = host.properties[key].format(value);

  if (formatted !== host.state[key].value) {
    host.state[key].next(formatted);
  }
}; // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization


var dropdown_select_template = __webpack_require__(38);

var dropdown_select_componentName = "dropdown-select";
var dropdown_select_componentRoot = ".".concat(dropdown_select_componentName, "-container");
var DropdownSelect =
/*#__PURE__*/
WCConstructor({
  componentName: dropdown_select_componentName,
  componentRoot: dropdown_select_componentRoot,
  template: dropdown_select_template,
  style: dropdown_select_style,
  observedAttributes: dropdown_select_properties_observedAttributes,
  properties: dropdown_select_properties_properties,
  elements: dropdown_select_elements,
  methods: {
    focus: methods_focus,
    blur: methods_blur
  },
  computed: {
    selectedIndex: properties_selectedIndex,
    selectedOptionElement: properties_selectedOptionElement,
    optionElements: properties_optionElements
  },
  setters: {
    formatlabel: function formatlabel(host) {
      return function (value) {
        return dropdown_select_formatter(host, value, "formatlabel");
      };
    },
    formatvalue: function formatvalue(host) {
      return function (value) {
        return dropdown_select_formatter(host, value, "formatvalue");
      };
    },
    formatvaluelabel: function formatvaluelabel(host) {
      return function (value) {
        return dropdown_select_formatter(host, value, "formatvaluelabel");
      };
    }
  },
  onReady: function onReady(host) {
    return methods_initInput(host);
  }
});
WCDefine(dropdown_select_componentName, DropdownSelect);
// CONCATENATED MODULE: ./src/utils/use-if/index.js

function UseIf(condition, ifNot, value) {
  return TMonad(condition(value) ? value : ifNot(value));
}
// CONCATENATED MODULE: ./src/utils/is-element/index.js

function IsElement(value) {
  var result = TMonad(value);

  if (result.stop) {
    return result;
  }

  result.valid = Object(utils_get["a" /* Get */])(result, "value.nodeType") === 1;
  return result;
}
// CONCATENATED MODULE: ./src/utils/selector-to-element/index.js

function SelectorToElement(parent, value) {
  var Value = TMonad(value);

  if (Value.stop) {
    return Value;
  }

  if (!parent) {
    parent = document.firstElementChild;
  }

  if (Value.type === "string") {
    Value.value = parent.querySelector(Value.value);
  }

  var result = IsElement(Value);
  return result;
}
// CONCATENATED MODULE: ./src/utils/selector-array-to-elements/index.js

function SelectorArrayToElements(parent, value) {
  var Value = ToArray(value);

  if (Value.stop) {
    return Value;
  }

  if (!Value.valid || Value.type !== "array") {
    return Value;
  }

  if (!parent) {
    parent = document.firstElementChild;
  }

  Value.value = Value.value.map(function (el) {
    return UseIf(function (v) {
      return v.valid;
    }, function () {
      return {
        value: null
      };
    }, SelectorToElement(null, el)).value;
  }).filter(function (v) {
    return !!v;
  });
  Value.valid = Value.value.length;
  return Value;
}
// CONCATENATED MODULE: ./src/utils/get-curve/index.js
/** BORROWED HEAVILY FROM: https://stackoverflow.com/a/15528789 */
function GetCurve(points) {
  var tension = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.5;
  var closedPath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var frames = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 16;
  var numOfSegments = Math.round(frames * .3295);
  var isPairs = Array.isArray(points[0]);
  var res = [];
  var pts = points.slice(0);
  var pts2 = pts.slice(0);
  var x;
  var y;
  var t1x;
  var t2x;
  var t1y;
  var t2y;
  var c1;
  var c2;
  var c3;
  var c4;
  var st;
  var t;
  var i;

  if (isPairs) {
    pts = pts.concat.apply([], pts);
  } else {
    pts = pts.concat.apply([], pts.map(function (p) {
      return [p, p];
    }));
  }

  pts2 = pts.slice(0);

  if (closedPath) {
    pts.unshift(pts2[pts2.length - 1]);
    pts.unshift(pts2[pts2.length - 2]);
    pts.unshift(pts2[pts2.length - 1]);
    pts.unshift(pts2[pts2.length - 2]);
    pts.push(pts2[0]);
    pts.push(pts2[1]);
  } else {
    pts.unshift(pts2[1]);
    pts.unshift(pts2[0]);
    pts.push(pts[pts2.length - 2]);
    pts.push(pts[pts2.length - 1]);
  }

  for (i = 2; i < pts.length - 4; i += 2) {
    for (t = 0; t <= numOfSegments; t++) {
      // calc tension vectors
      t1x = (pts[i + 2] - pts[i - 2]) * tension;
      t2x = (pts[i + 4] - pts[i]) * tension;
      t1y = (pts[i + 3] - pts[i - 1]) * tension;
      t2y = (pts[i + 5] - pts[i + 1]) * tension; // calc step

      st = t / numOfSegments; // calc cardinals

      c1 = 2 * Math.pow(st, 3) - 3 * Math.pow(st, 2) + 1;
      c2 = -(2 * Math.pow(st, 3)) + 3 * Math.pow(st, 2);
      c3 = Math.pow(st, 3) - 2 * Math.pow(st, 2) + st;
      c4 = Math.pow(st, 3) - Math.pow(st, 2); // calc x and y cords with common control vectors

      x = c1 * pts[i] + c2 * pts[i + 2] + c3 * t1x + c4 * t2x;
      y = c1 * pts[i + 1] + c2 * pts[i + 3] + c3 * t1y + c4 * t2y;
      res.push([x, y]);
    }
  }

  return isPairs ? res : res.map(function (p) {
    return p[0];
  });
}
// CONCATENATED MODULE: ./src/components/effect-bounce-z/methods.js


var getDimension = function getDimension(target) {
  var max = Math.max(target.offsetWidth, target.offsetHeight);
  var min = Math.min(target.offsetWidth, target.offsetHeight);
  return (max - min) / 2 + min;
};

var methods_runStart = function runStart(host) {
  return function () {
    if (host.on || !host.targets || !host.ready) {
      return;
    }

    host.on = true;

    if (!Array.isArray(host.targets)) {
      return;
    }

    Timer(host.speed, function (scale) {
      var set = function set(el) {
        var dimension = getDimension(el);
        var scaleFactor = (dimension - scale) / dimension;
        el.style.transform = "perspective(1px) translateZ(0) scaleX(".concat(scaleFactor, ") scaleY(").concat(scaleFactor, ")");
      };

      Object(utils_get["a" /* Get */])(host, "targets", []).forEach(function (target) {
        return Array.isArray(target) ? target.forEach(set) : set(target);
      });
    }, GetCurve([1, -host.amount, -host.amount * 1.125, 1], 0.5, false, host.speed), function () {
      var set = function set(el) {
        return el.style.removeProperty("transform");
      };

      Object(utils_get["a" /* Get */])(host, "targets", []).forEach(function (target) {
        return Array.isArray(target) ? target.forEach(set) : set(target);
      });
      host.on = false;
    });
  };
};

var methods_trigger = function trigger(host) {
  return methods_runStart(host);
};
var methods_unloadTargets = function unloadTargets(host) {
  if (!host.targets$ || !host.ready) {
    return;
  }

  Object(utils_get["a" /* Get */])(host, "targets$", []).forEach(function (ob$) {
    return ob$();
  });
  host.targets$ = [];
};
var methods_loadTargets = function loadTargets(host) {
  if (!host.targets || !host.start) {
    return;
  }

  var set = function set(el) {
    el.style.transformStyle = "preserve-3d";
    el.style.backfaceVisibility = "hidden";
    host.targets$.push(ObserveEvent(el, host.start).subscribe(methods_runStart(host)));
  };

  if (!Array.isArray(host.targets)) {
    return;
  }

  Object(utils_get["a" /* Get */])(host, "targets", []).forEach(function (target) {
    if (Array.isArray(target)) {
      return target.forEach(set);
    }

    set(target);
  });
};
// CONCATENATED MODULE: ./src/components/effect-bounce-z/properties.js



var properties_resetTargets = function resetTargets(host) {
  methods_unloadTargets(host);
  methods_loadTargets(host);
};

var properties_onChange = function onChange() {};

var properties_selectorsToDom = function selectorsToDom(val) {
  return SelectorArrayToElements(null, val).value;
};

var effect_bounce_z_properties_attributes = {
  amount: {
    format: function format(val) {
      return Pipe(ToNumber, IfInvalid(0))(val).value;
    },
    onChange: properties_onChange
  },
  "class": ComponentClassObject,
  speed: {
    format: function format(val) {
      return Pipe(ToNumber, IfInvalid(300))(val).value;
    },
    onChange: properties_onChange
  },
  start: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid("mousedown"))(val).value;
    },
    onChange: function onChange(_val, host) {
      return properties_resetTargets(host);
    }
  },
  targets: {
    format: properties_selectorsToDom,
    onChange: function onChange(_val, host) {
      return properties_resetTargets(host);
    }
  }
};
var effect_bounce_z_properties_properties = Object.assign({
  targets$: {
    format: function format() {
      return [];
    },
    onChange: properties_onChange
  }
}, effect_bounce_z_properties_attributes);
var effect_bounce_z_properties_observedAttributes = Object.keys(effect_bounce_z_properties_attributes);
// CONCATENATED MODULE: ./src/components/effect-bounce-z/index.js


 // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization

var effect_bounce_z_template = __webpack_require__(39);

var effect_bounce_z_componentName = "effect-bounce-z";
var effect_bounce_z_componentRoot = ".effect-push-container";
var EffectBounceZ = WCConstructor({
  componentName: effect_bounce_z_componentName,
  componentRoot: effect_bounce_z_componentRoot,
  template: effect_bounce_z_template,
  observedAttributes: effect_bounce_z_properties_observedAttributes,
  properties: effect_bounce_z_properties_properties,
  methods: {
    trigger: methods_trigger
  },
  onDisconnected: function onDisconnected(host) {
    return methods_unloadTargets(host);
  }
});
WCDefine(effect_bounce_z_componentName, EffectBounceZ);
// CONCATENATED MODULE: ./src/components/effect-fade/methods.js


var methods_runAnimation = function runAnimation(host, isOn) {
  if (!Array.isArray(host.targets)) {
    return;
  }

  Timer(host.speed, function (opacity) {
    var set = function set(el) {
      return el.style.opacity = opacity;
    };

    host.targets.forEach(function (target) {
      return Array.isArray(target) ? target.forEach(set) : set(target);
    });
  }, GetCurve(isOn ? host.opacity.slice() : host.opacity.slice().reverse(), isOn ? host.spring : 0.5, false, host.speed), function () {
    var set = function set(el) {
      return el.style.opacity = isOn ? 1 : 0;
    };

    host.targets.forEach(function (target) {
      return Array.isArray(target) ? target.forEach(set) : set(target);
    });
  });
};

var runEnd = function runEnd(host) {
  return function () {
    if (!host.canRunEnd) {
      return;
    }

    host.on = false;
    methods_runAnimation(host, false);
  };
};

var effect_fade_methods_runStart = function runStart(host) {
  return function () {
    if (!host.canRunStart) {
      return;
    }

    host.on = true;
    methods_runAnimation(host, true);
  };
};

var effect_fade_methods_toggle = function toggle(host) {
  return host.on ? runEnd(host) : effect_fade_methods_runStart(host);
};
var methods_open = function open(host) {
  return effect_fade_methods_runStart(host);
};
var methods_close = function close(host) {
  return runEnd(host);
};
var unloadTriggers = function unloadTriggers(host) {
  if (!host.hasTriggers$) {
    return;
  }

  host.triggers$.forEach(function (ob$) {
    return ob$();
  });
  host.triggers$ = [];
};
var methods_loadTriggers = function loadTriggers(host) {
  if (!host.canLoadTriggers) {
    return;
  }

  var set = function set(el) {
    host.triggers$.push(ObserveEvent(el, host.start, {
      useCapture: true
    }).subscribe(effect_fade_methods_runStart(host)));

    if (host.canEnd) {
      host.triggers$.push(ObserveEvent(el, host.end).subscribe(runEnd(host)));
    }
  };

  host.triggers.forEach(function (trigger) {
    if (Array.isArray(trigger)) {
      return trigger.forEach(set);
    }

    set(trigger);
  });
};
// CONCATENATED MODULE: ./src/components/effect-fade/properties.js



var properties_resetTriggers = function resetTriggers(host) {
  unloadTriggers(host);
  methods_loadTriggers(host);
};

var effect_fade_properties_onChange = function onChange() {};

var effect_fade_properties_selectorsToDom = function selectorsToDom(val) {
  return SelectorArrayToElements(null, CommasToArray(val).value).value;
};

var effect_fade_properties_attributes = {
  end: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid(null))(val).value;
    },
    onChange: function onChange(_val, host) {
      return properties_resetTriggers(host);
    }
  },
  opacity: {
    format: function format(val) {
      return Pipe(CommasToArray, IfInvalid([0, 1]), ToMap(function (v) {
        return ToNumber(v).value;
      }))(val).value;
    },
    onChange: effect_fade_properties_onChange
  },
  speed: {
    format: function format(val) {
      return Pipe(ToNumber, IfInvalid(600))(val).value;
    },
    onChange: effect_fade_properties_onChange
  },
  start: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid("mousedown"))(val).value;
    },
    onChange: function onChange(_val, host) {
      return properties_resetTriggers(host);
    }
  },
  targets: {
    format: effect_fade_properties_selectorsToDom,
    onChange: function onChange(_val, host) {
      return properties_resetTriggers(host);
    }
  },
  triggers: {
    format: effect_fade_properties_selectorsToDom,
    onChange: function onChange(_val, host) {
      return properties_resetTriggers(host);
    }
  },
  "class": ComponentClassObject
};
var effect_fade_properties_properties = Object.assign({
  on: {
    format: function format(val) {
      return Pipe(ToBool, IfInvalid(false))(val).value;
    },
    onChange: effect_fade_properties_onChange
  },
  triggers$: {
    format: function format() {
      return [];
    },
    onChange: effect_fade_properties_onChange
  }
}, effect_fade_properties_attributes);
var effect_fade_properties_observedAttributes = Object.keys(effect_fade_properties_attributes);
var hasTargets = function hasTargets(host) {
  return {
    get: function get() {
      return !!host.ready && !!host.targets && Array.isArray(host.targets) && !!host.targets.length;
    }
  };
};
var hasTriggers = function hasTriggers(host) {
  return {
    get: function get() {
      return !!host.ready && !!host.triggers && Array.isArray(host.triggers) && !!host.triggers.length;
    }
  };
};
var hasTriggers$ = function hasTriggers$(host) {
  return {
    get: function get() {
      return !!host.triggers$ && Array.isArray(host.triggers$);
    }
  };
};
var hasStart = function hasStart(host) {
  return {
    get: function get() {
      return !!host.start;
    }
  };
};
var canStart = function canStart(host) {
  return {
    get: function get() {
      return host.hasTargets && host.hasStart && host.start !== "none";
    }
  };
};
var canEnd = function canEnd(host) {
  return {
    get: function get() {
      return host.hasTargets && !!host.end && host.end !== "none";
    }
  };
};
var canRunStart = function canRunStart(host) {
  return {
    get: function get() {
      return host.hasTargets;
    }
  };
};
var canRunEnd = function canRunEnd(host) {
  return {
    get: function get() {
      return host.hasTargets;
    }
  };
};
var canLoadTriggers = function canLoadTriggers(host) {
  return {
    get: function get() {
      return host.hasTriggers && host.hasTriggers$ && host.hasStart;
    }
  };
};
// CONCATENATED MODULE: ./src/components/effect-fade/elements.js
var elements_elementSelectors = {
  root: ".effect-fade-container"
};
var effect_fade_elements_elements = {};
Object.keys(elements_elementSelectors).forEach(function (key) {
  effect_fade_elements_elements[key] = {
    selector: elements_elementSelectors[key],
    onChange: function onChange() {}
  };
});
/* harmony default export */ var effect_fade_elements = (effect_fade_elements_elements);
// CONCATENATED MODULE: ./src/components/effect-fade/index.js



 // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization

var effect_fade_style = __webpack_require__(40).toString(); // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization


var effect_fade_template = __webpack_require__(41);

var effect_fade_componentName = "effect-fade";
var effect_fade_componentRoot = ".effect-fade-container";
var EffectFade =
/*#__PURE__*/
WCConstructor({
  componentName: effect_fade_componentName,
  componentRoot: effect_fade_componentRoot,
  template: effect_fade_template,
  style: effect_fade_style,
  observedAttributes: effect_fade_properties_observedAttributes,
  properties: effect_fade_properties_properties,
  elements: effect_fade_elements,
  methods: {
    toggle: effect_fade_methods_toggle,
    open: methods_open,
    close: methods_close
  },
  computed: {
    hasTargets: hasTargets,
    hasTriggers: hasTriggers,
    hasTriggers$: hasTriggers$,
    hasStart: hasStart,
    canLoadTriggers: canLoadTriggers,
    canStart: canStart,
    canEnd: canEnd,
    canRunStart: canRunStart,
    canRunEnd: canRunEnd
  },
  onReady: function onReady(host) {
    unloadTriggers(host);
    methods_loadTriggers(host);
  },
  onDisconnected: unloadTriggers
});
WCDefine(effect_fade_componentName, EffectFade);
// CONCATENATED MODULE: ./src/components/effect-ripple/methods.js

var maxScale = 1.3;

var effect_ripple_methods_runStart = function runStart(host) {
  if (!host.ready || host.isRunning) {
    return;
  }

  host.isRunning = true;
  var rippleInner = document.createElement("span");
  var style = rippleInner.style;
  rippleInner.className = "ripple-inner";
  rippleInner.style.backgroundColor = host.color;
  host.elements.ripple.appendChild(rippleInner);
  setOrigin(host, rippleInner);
  Timer(host.speed, function (scale) {
    var scaleAmount = Math.max(Math.min(maxScale, scale), 0);
    style.transform = "perspective(1px) translateZ(0) scaleX(".concat(scaleAmount, ") scaley(").concat(scaleAmount, ")");
  }, GetCurve([0, maxScale], 0, false, host.speed));
  Timer(host.speed, function (opacity) {
    return style.opacity = "".concat(Math.max(Math.min(1, opacity), 0));
  }, GetCurve([host.opacity * 0.5, host.opacity, host.opacity * 0.5, host.opacity * 0.125, host.opacity * 0.03, 0], 0, false, host.speed), function () {
    requestAnimationFrame(function () {
      if (host.elements.ripple) {
        host.elements.ripple.removeChild(rippleInner);
      }

      host.isRunning = false;
    });
  });
};

var setOrigin = function setOrigin(host, rippleInner) {
  if (!host.ready) {
    return;
  }

  var nonAutoOrigin = host.nonAutoOrigin;
  var rippleInnerStyle = rippleInner.style;

  if (nonAutoOrigin) {
    return rippleInnerStyle.transformOrigin = nonAutoOrigin;
  }

  if (!host.downEvent || !host.downEvent.target) {
    return rippleInnerStyle.transformOrigin = "50% 50%";
  }

  var eventX = host.downEvent.x;
  var eventY = host.downEvent.y;
  var targetBox = host.downEvent.target.getBoundingClientRect();
  var left = Math.round((eventX - targetBox.left) / targetBox.width * 100);
  var top = Math.round((eventY - targetBox.top) / targetBox.height * 100);
  rippleInnerStyle.transformOrigin = "".concat(left, "% ").concat(top, "%");
};

var effect_ripple_methods_trigger = function trigger(host) {
  return function () {
    return effect_ripple_methods_runStart(host);
  };
};
var effect_ripple_methods_unloadTargets = function unloadTargets(host) {
  if (!host.hasTargets$) {
    return;
  }

  host.targets$.forEach(function (ob$) {
    return ob$();
  });
  host.targets$ = [];
};
var effect_ripple_methods_loadTargets = function loadTargets(host) {
  if (!host.targets || !host.start) {
    return;
  }

  if (!Array.isArray(host.targets)) {
    return;
  }

  host.targets.forEach(function (target) {
    host.targets$.push(ObserveEvent(target, "mousedown").subscribe(function (e) {
      return host.downEvent = e;
    }));
    host.targets$.push(ObserveEvent(target, host.start).subscribe(function () {
      return effect_ripple_methods_runStart(host);
    }));
  });
};
// CONCATENATED MODULE: ./src/components/effect-ripple/elements.js

var effect_ripple_elements_elementSelectors = {
  root: ".effect-ripple-container",
  ripple: ".ripple",
  injectedStyles: "style.injectedStyles"
};
var effect_ripple_elements_setStyles = function setStyles(el, styles) {
  if (!el) {
    return;
  }

  SetStyleRules(el, styles);
};
var effect_ripple_elements_elements = {};
Object.keys(effect_ripple_elements_elementSelectors).forEach(function (key) {
  effect_ripple_elements_elements[key] = {
    selector: effect_ripple_elements_elementSelectors[key],
    onChange: key === "injectedStyles" ? function (el, host) {
      return effect_ripple_elements_setStyles(el, host.styles);
    } : function () {}
  };
});
/* harmony default export */ var effect_ripple_elements = (effect_ripple_elements_elements);
// CONCATENATED MODULE: ./src/components/effect-ripple/properties.js




var effect_ripple_properties_resetTargets = function resetTargets(host) {
  effect_ripple_methods_unloadTargets(host);
  effect_ripple_methods_loadTargets(host);
};

var effect_ripple_properties_onChange = function onChange() {};

var effect_ripple_properties_selectorsToDom = function selectorsToDom(val) {
  return SelectorArrayToElements(null, val).value;
};

var effect_ripple_properties_attributes = {
  "class": ComponentClassObject,
  color: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid("#59a2d8"))(val).value;
    },
    onChange: effect_ripple_properties_onChange
  },
  opacity: {
    format: function format(val) {
      return Math.min(1, Math.max(0, Pipe(ToNumber, IfInvalid(0.2))(val).value));
    },
    onChange: effect_ripple_properties_onChange
  },
  speed: {
    format: function format(val) {
      return Pipe(ToNumber, IfInvalid(600))(val).value;
    },
    onChange: effect_ripple_properties_onChange
  },
  start: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid("mousedown"))(val).value;
    },
    onChange: function onChange(_val, host) {
      return effect_ripple_properties_resetTargets(host);
    }
  },
  styles: {
    format: function format(val) {
      return typeof val === "string" ? val : "";
    },
    onChange: function onChange(val, host) {
      return effect_ripple_elements_setStyles(host.elements.injectedStyles, val);
    }
  },
  direction: {
    format: function format(val) {
      return typeof val === "string" ? val : "auto";
    },
    onChange: function onChange() {}
  },
  targets: {
    format: effect_ripple_properties_selectorsToDom,
    onChange: function onChange(_val, host) {
      return effect_ripple_properties_resetTargets(host);
    }
  }
}; // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization

var effect_ripple_properties_properties = Object.assign({
  downEvent: {
    format: function format(val) {
      return val;
    },
    onChange: effect_ripple_properties_onChange
  },
  targets$: {
    format: function format() {
      return [];
    },
    onChange: effect_ripple_properties_onChange
  }
}, effect_ripple_properties_attributes);
var effect_ripple_properties_observedAttributes = Object.keys(effect_ripple_properties_attributes);
var properties_hasTargets = function hasTargets(host) {
  return {
    get: function get() {
      return host.ready && !!host.targets && Array.isArray(host.targets) && !!host.targets.length;
    }
  };
};
var hasTargets$ = function hasTargets$(host) {
  return {
    get: function get() {
      return host.hasTargets && host.targets$ && Array.isArray(host.targets$);
    }
  };
};
var properties_hasStart = function hasStart(host) {
  return {
    get: function get() {
      return host.hasTargets && host.hasTargets$ && !!host.start;
    }
  };
};
var properties_canStart = function canStart(host) {
  return {
    get: function get() {
      return host.hasTargets && host.hasTargets$ && host.start && host.start !== "none";
    }
  };
};
var nonAutoOrigin = function nonAutoOrigin(host) {
  return {
    get: function get() {
      return host.downEvent === undefined || host.downEvent && !host.downEvent.target || host.direction !== undefined && host.direction !== "auto" ? host.direction === "to left" ? "100% center" : ["center", "auto"].indexOf(host.direction) > -1 ? "center center" : "0% center" : false;
    }
  };
};
var canLoadTargets = function canLoadTargets(host) {
  return {
    get: function get() {
      return host.hasTargets && host.hasTargets$ && host.hasStart;
    }
  };
};
// CONCATENATED MODULE: ./src/components/effect-ripple/index.js



 // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization

var effect_ripple_style = __webpack_require__(42).toString(); // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization


var effect_ripple_template = __webpack_require__(43);

var effect_ripple_componentName = "effect-ripple";
var effect_ripple_componentRoot = ".effect-ripple-container";
var EffectRipple =
/*#__PURE__*/
WCConstructor({
  componentName: effect_ripple_componentName,
  componentRoot: effect_ripple_componentRoot,
  template: effect_ripple_template,
  style: effect_ripple_style,
  observedAttributes: effect_ripple_properties_observedAttributes,
  properties: effect_ripple_properties_properties,
  elements: effect_ripple_elements,
  methods: {
    trigger: effect_ripple_methods_trigger
  },
  computed: {
    hasTargets: properties_hasTargets,
    hasTargets$: hasTargets$,
    hasStart: properties_hasStart,
    canLoadTargets: canLoadTargets,
    canStart: properties_canStart,
    nonAutoOrigin: nonAutoOrigin
  },
  onDisconnected: function onDisconnected(host) {
    return effect_ripple_methods_unloadTargets(host);
  }
});
WCDefine(effect_ripple_componentName, EffectRipple);
// CONCATENATED MODULE: ./src/utils/selector-to-elements/index.js

function SelectorToElements(parent, value) {
  var result = TMonad(value);

  if (result.stop) {
    return result;
  }

  if (!parent) {
    parent = document.firstElementChild || document.documentElement;
  }

  var isEl = IsElement(result);

  if (result.type === "string") {
    result.value = Array.from(parent.querySelectorAll(result.value));
  } else if (isEl.valid) {
    result.value = [result.value];
  }

  result.valid = result.value.length && result.value.filter(function (e) {
    return IsElement(e).valid;
  }).length;
  return result;
}
// CONCATENATED MODULE: ./src/utils/selector-array-to-all-elements/index.js

function SelectorArrayToAllElements(parent, value) {
  var Value = ToArray(value);

  if (Value.stop) {
    return Value;
  }

  if (!Value.valid || Value.type !== "array") {
    return Value;
  }

  if (!parent) {
    parent = document.firstElementChild;
  }

  Value.value = Value.value.map(function (el) {
    var values = UseIf(function (v) {
      return v.valid;
    }, function () {
      return {
        value: null
      };
    }, SelectorToElements(null, el)).value;
    return values.value;
  }).filter(function (v) {
    return !!v;
  });
  Value.valid = Value.value.length;
  return Value;
}
// CONCATENATED MODULE: ./src/components/effect-scale/methods.js

var idealFPS = 60;

var methods_frames = function frames(speed) {
  return Math.round(idealFPS * (speed / 1000));
};

var setTransform = function setTransform(element, X, Y, doX, doY, lastFrame, toScaledState) {
  element.style.transform = "perspective(1px) translateZ(0) scaleX(".concat(X, ") scaleY(").concat(Y, ")");

  if (doX === true) {
    element.style.width = "unset";
  }

  if (doY === true) {
    element.style.height = "unset";
  }

  if (lastFrame && !toScaledState) {
    return;
  }

  var box = element.getBoundingClientRect();

  if (doX === true) {
    element.style.width = lastFrame && !toScaledState ? "unset" : "".concat(box.width, "px");
  }

  if (doY === true) {
    element.style.height = lastFrame && !toScaledState ? "unset" : "".concat(box.height, "px");
  }
  /*
  if (doX === true) {
      const calculatedWidth = element.scrollWidth * X
      element.style.width = lastFrame && !toScaledState ? `unset` : `${calculatedWidth}px`
  }
   if (doY === true) {
      const calculatedHeight = element.scrollHeight * Y
      element.style.height = lastFrame && !toScaledState ? `unset` : `${calculatedHeight}px`
  }
  */

};

var transformElements = function transformElements(targets, X, Y, doX, doY, lastFrame, toScaledState) {
  targets.forEach(function (element) {
    if (Array.isArray(element)) {
      return element.forEach(function (el) {
        return setTransform(el, X, Y, doX, doY, lastFrame, toScaledState);
      });
    }

    setTransform(element, X, Y, doX, doY, lastFrame, toScaledState);
  });
};

var setStaticTransform = function setStaticTransform(targets) {
  var set = function set(el) {
    el.style.transformStyle = "preserve-3d";
    el.style.backfaceVisibility = "hidden";
  };

  targets.forEach(function (element) {
    if (Array.isArray(element)) {
      return element.forEach(set);
    }

    set(element);
  });
};

var canNotRun = function canNotRun(host) {
  return host.ready !== true || !host.hasTargets || typeof host.x !== "boolean" || typeof host.y !== "boolean" || typeof host.scaled !== "boolean";
};

var methods_run = function run(scaled, host) {
  var quickSet = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (canNotRun(host)) {
    return;
  }

  scaled = host.scaled;
  setStaticTransform(host.targets);
  var initial = 1;
  var amount = initial + host.amount;
  var startAmount = !scaled ? amount : initial;
  var endAmount = !scaled ? initial : amount;
  var scalePoints = GetCurve([startAmount, endAmount], !scaled ? host.spring : 0.5, false, quickSet || host.isInitialized !== true ? 1 : methods_frames(scaled ? host.speed * 0.618 : host.speed));
  host.isInitialized = true;

  var loop = function loop() {
    if (scaled !== host.scaled) {
      return;
    }

    var scale = scalePoints.shift();
    var lastFrame = !scalePoints.length;

    var getXY = function getXY(key) {
      return !!host[key] && lastFrame ? endAmount : host[key] ? scale : 1;
    };

    host.isScaling = lastFrame ? false : true;
    host.isScaled = scaled && lastFrame ? true : false;
    transformElements(host.targets, getXY("x"), getXY("y"), host.x, host.y, lastFrame, scaled);

    if (!lastFrame) {
      return requestAnimationFrame(loop);
    }
  };

  loop();
};
var methods_setOrigin = function setOrigin(val, host) {
  if (!host.hasTargets) {
    return;
  }

  var parts = val.split(" ");
  var x = parts[0];
  var y = parts.length > 1 ? parts[1] : parts[0];
  var origin = "".concat(x, " ").concat(y);

  if (!Array.isArray(host.targets)) {
    return;
  }

  host.targets.forEach(function (target) {
    if (Array.isArray(target)) {
      return target.forEach(function (element) {
        return element.style.transformOrigin = origin;
      });
    }

    target.style.transformOrigin = origin;
  });
};
var methods_dispose = function dispose(host) {
  unloadElements(host, "targets");
  unloadElements(host, "triggers");
};

var unloadElements = function unloadElements(host, key) {
  if (!host["".concat(key, "$")]) {
    return;
  }

  host["".concat(key, "$")].forEach(function (ob$) {
    return ob$();
  });
  host["".concat(key, "$")] = [];
};

var methods_loadElements = function loadElements(host, key) {
  if (key === "targets") {
    return methods_run(host.scaled, host);
  }

  if (!host.hasTriggers || !host.start || !host.triggers$) {
    return;
  }

  var toggle = !host.end;

  var setEvents = function setEvents(trigger) {
    if (toggle) {
      return host.triggers$.push(ObserveEvent(trigger, host.start).subscribe(function () {
        return host.scaled = !host.scaled;
      }));
    }

    host.triggers$.push(ObserveEvent(trigger, host.start).subscribe(function () {
      return host.scaled = true;
    }));
    host.triggers$.push(ObserveEvent(trigger, host.end).subscribe(function () {
      return host.scaled = false;
    }));
  };

  host.triggers.forEach(function (trigger) {
    if (Array.isArray(trigger)) {
      return trigger.forEach(setEvents);
    }

    setEvents(trigger);
  });
};

var effect_scale_methods_unloadTargets = function unloadTargets(host) {
  return unloadElements(host, "targets");
};
var methods_unloadTriggers = function unloadTriggers(host) {
  return unloadElements(host, "triggers");
};
var effect_scale_methods_loadTargets = function loadTargets(host) {
  return methods_loadElements(host, "targets");
};
var effect_scale_methods_loadTriggers = function loadTriggers(host) {
  return methods_loadElements(host, "triggers");
};
// CONCATENATED MODULE: ./src/components/effect-scale/properties.js



var properties_reset = function reset(host) {
  effect_scale_methods_unloadTargets(host);
  methods_unloadTriggers(host);
  effect_scale_methods_loadTargets(host);
  effect_scale_methods_loadTriggers(host);
  methods_setOrigin(host.startfrom, host);
};

var effect_scale_properties_directions = ["center", "center top", "center bottom", "left top", "left center", "left bottom", "right top", "right center", "right bottom"];

var effect_scale_properties_onChange = function onChange() {};

var effect_scale_properties_selectorsToDom = function selectorsToDom(val) {
  return SelectorArrayToAllElements(null, val).value;
};

var effect_scale_properties_attributes = {
  amount: {
    format: function format(val) {
      return Pipe(ToNumber, IfInvalid(-1))(val).value;
    },
    onChange: effect_scale_properties_onChange
  },
  "class": ComponentClassObject,
  end: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid(null))(val).value;
    },
    onChange: function onChange(_val, host) {
      return properties_reset(host);
    }
  },
  scaled: {
    format: function format(val) {
      return Pipe(ToBool, IfInvalid(null))(val).value;
    },
    onChange: function onChange(val, host) {
      return host.ready ? methods_run(val, host) : undefined;
    }
  },
  speed: {
    format: function format(val) {
      return Pipe(ToNumber, IfInvalid(333))(val).value;
    },
    onChange: effect_scale_properties_onChange
  },
  spring: {
    format: function format(val) {
      return Pipe(ToNumber, IfInvalid(4))(val).value;
    },
    onChange: effect_scale_properties_onChange
  },
  start: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid("mousedown"))(val).value;
    },
    onChange: function onChange(_val, host) {
      return properties_reset(host);
    }
  },
  startfrom: {
    format: function format(val) {
      return Pipe(IndexOf(effect_scale_properties_directions), IfInvalid("center"))(val).value;
    },
    onChange: methods_setOrigin
  },
  targets: {
    format: effect_scale_properties_selectorsToDom,
    onChange: function onChange(_val, host) {
      return properties_reset(host);
    }
  },
  triggers: {
    format: effect_scale_properties_selectorsToDom,
    onChange: function onChange(_val, host) {
      return properties_reset(host);
    }
  },
  x: {
    format: function format(val) {
      return Pipe(ToBool, IfInvalid(false))(val).value;
    },
    onChange: effect_scale_properties_onChange
  },
  y: {
    format: function format(val) {
      return Pipe(ToBool, IfInvalid(false))(val).value;
    },
    onChange: effect_scale_properties_onChange
  }
}; // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization

var effect_scale_properties_properties = Object.assign({
  targets$: {
    format: function format() {
      return [];
    },
    onChange: effect_scale_properties_onChange
  },
  triggers$: {
    format: function format() {
      return [];
    },
    onChange: effect_scale_properties_onChange
  },
  isScaling: {
    format: function format(val) {
      return val;
    },
    onChange: effect_scale_properties_onChange
  },
  isScaled: {
    format: function format(val) {
      return val;
    },
    onChange: effect_scale_properties_onChange
  }
}, effect_scale_properties_attributes);
var effect_scale_properties_observedAttributes = Object.keys(effect_scale_properties_attributes);
// CONCATENATED MODULE: ./src/components/effect-scale/elements.js
var effect_scale_elements_elementSelectors = {
  root: ".effect-scale-container"
};
var effect_scale_elements_elements = {}; // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization

Object.keys(effect_scale_elements_elementSelectors).forEach(function (key) {
  effect_scale_elements_elements[key] = {
    selector: effect_scale_elements_elementSelectors[key],
    onChange: function onChange() {}
  };
});
/* harmony default export */ var effect_scale_elements = (effect_scale_elements_elements);
// CONCATENATED MODULE: ./src/components/effect-scale/index.js



 // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization

var effect_scale_style = __webpack_require__(44).toString(); // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization


var effect_scale_template = __webpack_require__(45);

var effect_scale_componentName = "effect-scale";
var effect_scale_componentRoot = ".effect-scale-container";
var EffectScale = WCConstructor({
  componentName: effect_scale_componentName,
  componentRoot: effect_scale_componentRoot,
  template: effect_scale_template,
  style: effect_scale_style,
  observedAttributes: effect_scale_properties_observedAttributes,
  properties: effect_scale_properties_properties,
  elements: effect_scale_elements,
  computed: {
    hasTargets: function hasTargets(host) {
      return {
        get: function get() {
          return !!host.targets && host.targets.length && typeof host.targets.forEach === "function";
        }
      };
    },
    hasTriggers: function hasTriggers(host) {
      return {
        get: function get() {
          return !!host.triggers && host.triggers.length && typeof host.triggers.forEach === "function";
        }
      };
    },
    hasScale: function hasScale(host) {
      return {
        get: function get() {
          return host.isScaling || host.isScaled;
        }
      };
    }
  },
  onReady: function onReady(host) {
    methods_run(host.scaled, host, true);
  },
  onDisconnected: function onDisconnected(host) {
    return methods_dispose(host);
  }
});
WCDefine(effect_scale_componentName, EffectScale);
// CONCATENATED MODULE: ./src/components/effect-underline/methods.js


var signalEnd = function signalEnd(host) {
  return methods_runEnd(host);
};

var effect_underline_methods_runAnimation = function runAnimation(host, isOn) {
  var underlineStyle = host.elements.underline.style;

  if (isOn) {
    underlineStyle.opacity = host.opacity;
    effect_underline_methods_setOrigin(host);
  }

  Timer(host.speed, function (scale) {
    return underlineStyle.transform = "perspective(1px) translateZ(0) scaleX(".concat(scale, ")");
  }, GetCurve(isOn ? [0, 1] : [1, 0], isOn ? host.spring : 0.5, false, host.speed), function () {
    return underlineStyle.transform = "perspective(1px) translateZ(0) scaleX(".concat(isOn ? 1 : 0, ")");
  });
};

var methods_runEnd = function runEnd(host) {
  return function () {
    if (!host.canRunEnd) {
      return;
    }

    host.on = false;
    effect_underline_methods_runAnimation(host, false);
  };
};

var effect_underline_methods_runStart = function runStart(host) {
  return function () {
    if (!host.canRunStart) {
      return;
    }

    host.on = true;
    effect_underline_methods_runAnimation(host, true);
    host.downEvent = undefined;
  };
};

var effect_underline_methods_setOrigin = function setOrigin(host) {
  if (!host.ready) {
    return;
  }

  var nonAutoOrigin = host.nonAutoOrigin;
  var underlineStyle = host.elements.underline.style;

  if (nonAutoOrigin) {
    return underlineStyle.transformOrigin = nonAutoOrigin;
  }

  var eventX = host.downEvent.x;
  var targetBox = host.downEvent.target.getBoundingClientRect();
  var left = Math.round((eventX - targetBox.left) / targetBox.width * 100);
  underlineStyle.transformOrigin = "".concat(left, "% center");
};

var effect_underline_methods_toggle = function toggle(host) {
  return host.on ? methods_runEnd(host) : effect_underline_methods_runStart(host);
};
var effect_underline_methods_open = function open(host) {
  return effect_underline_methods_runStart(host);
};
var effect_underline_methods_close = function close(host) {
  return methods_runEnd(host);
};
var effect_underline_methods_unloadTargets = function unloadTargets(host) {
  if (!host.hasTargets$) {
    return;
  }

  host.targets$.forEach(function (ob$) {
    return ob$();
  });
  host.targets$ = [];
};
var effect_underline_methods_loadTargets = function loadTargets(host) {
  if (!host.canLoadTargets) {
    return;
  }

  effect_underline_methods_unloadTargets(host);

  if (!Array.isArray(host.targets)) {
    return;
  }

  host.targets.forEach(function (target) {
    if (host.canStart) {
      host.targets$.push(ObserveEvent(target, "mousedown").subscribe(function (e) {
        return host.downEvent = e;
      }));
      host.targets$.push(ObserveEvent(target, host.start).subscribe(effect_underline_methods_runStart(host)));
    }

    if (host.canEnd) {
      host.targets$.push(ObserveEvent(target, host.end).subscribe(signalEnd(host)));
    }
  });
};
// CONCATENATED MODULE: ./src/components/effect-underline/elements.js

var effect_underline_elements_elementSelectors = {
  root: ".effect-underline-container",
  underline: ".underline",
  injectedStyles: "style.injectedStyles"
};
var effect_underline_elements_setStyles = function setStyles(el, styles) {
  if (!el) {
    return;
  }

  SetStyleRules(el, styles);
};
var effect_underline_elements_elements = {};
Object.keys(effect_underline_elements_elementSelectors).forEach(function (key) {
  effect_underline_elements_elements[key] = {
    selector: effect_underline_elements_elementSelectors[key],
    onChange: key === "injectedStyles" ? function (el, host) {
      return effect_underline_elements_setStyles(el, host.styles);
    } : function () {}
  };
});
/* harmony default export */ var effect_underline_elements = (effect_underline_elements_elements);
// CONCATENATED MODULE: ./src/components/effect-underline/properties.js




var effect_underline_properties_resetTargets = function resetTargets(host) {
  effect_underline_methods_unloadTargets(host);
  effect_underline_methods_loadTargets(host);
};

var effect_underline_properties_onChange = function onChange() {};

var effect_underline_properties_selectorsToDom = function selectorsToDom(val) {
  return SelectorArrayToElements(null, val).value;
};

var effect_underline_properties_attributes = {
  color: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid("#59a2d8"))(val).value;
    },
    onChange: function onChange(val, host) {
      return !val || !host.elements.underline ? undefined : host.elements.underline.style.backgroundColor = "".concat(val);
    }
  },
  direction: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid("auto"))(val).value;
    },
    onChange: effect_underline_properties_onChange
  },
  end: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid(null))(val).value;
    },
    onChange: function onChange(_val, host) {
      return effect_underline_properties_resetTargets(host);
    }
  },
  opacity: {
    format: function format(val) {
      return Math.min(1, Math.max(0, Pipe(ToNumber, IfInvalid(0.2))(val).value));
    },
    onChange: effect_underline_properties_onChange
  },
  speed: {
    format: function format(val) {
      return Pipe(ToNumber, IfInvalid(700))(val).value;
    },
    onChange: effect_underline_properties_onChange
  },
  start: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid("mousedown"))(val).value;
    },
    onChange: function onChange(_val, host) {
      return effect_underline_properties_resetTargets(host);
    }
  },
  styles: {
    format: function format(val) {
      return typeof val === "string" ? val : "";
    },
    onChange: function onChange(val, host) {
      return effect_underline_elements_setStyles(host.elements.injectedStyles, val);
    }
  },
  spring: {
    format: function format(val) {
      return Pipe(ToNumber, IfInvalid(4))(val).value;
    },
    onChange: effect_underline_properties_onChange
  },
  targets: {
    format: effect_underline_properties_selectorsToDom,
    onChange: function onChange(_val, host) {
      return effect_underline_properties_resetTargets(host);
    }
  },
  "class": ComponentClassObject
}; // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization

var effect_underline_properties_properties = Object.assign({
  downEvent: {
    format: function format(val) {
      return val;
    },
    onChange: effect_underline_properties_onChange
  },
  on: {
    format: function format(val) {
      return Pipe(ToBool, IfInvalid(false))(val).value;
    },
    onChange: effect_underline_properties_onChange
  },
  targets$: {
    format: function format() {
      return [];
    },
    onChange: effect_underline_properties_onChange
  }
}, effect_underline_properties_attributes);
var effect_underline_properties_observedAttributes = Object.keys(effect_underline_properties_attributes);
var effect_underline_properties_hasTargets = function hasTargets(host) {
  return {
    get: function get() {
      return host.ready && !!host.targets && Array.isArray(host.targets) && !!host.targets.length;
    }
  };
};
var properties_hasTargets$ = function hasTargets$(host) {
  return {
    get: function get() {
      return host.hasTargets && host.targets$ && Array.isArray(host.targets$);
    }
  };
};
var effect_underline_properties_hasStart = function hasStart(host) {
  return {
    get: function get() {
      return host.hasTargets && host.hasTargets$ && host.start;
    }
  };
};
var effect_underline_properties_canStart = function canStart(host) {
  return {
    get: function get() {
      return host.hasTargets && host.hasTargets$ && host.start && host.start !== "none";
    }
  };
};
var properties_canEnd = function canEnd(host) {
  return {
    get: function get() {
      return host.hasTargets && host.hasTargets$ && host.end && host.end !== "none";
    }
  };
};
var properties_canRunStart = function canRunStart(host) {
  return {
    get: function get() {
      return host.hasTargets && !host.on;
    }
  };
};
var properties_canRunEnd = function canRunEnd(host) {
  return {
    get: function get() {
      return host.hasTargets && host.on;
    }
  };
};
var properties_nonAutoOrigin = function nonAutoOrigin(host) {
  return {
    get: function get() {
      return host.downEvent === undefined || host.downEvent && !host.downEvent.target || host.direction !== undefined && host.direction !== "auto" ? host.direction === "to left" ? "100% center" : ["center", "auto"].indexOf(host.direction) > -1 ? "center center" : "0% center" : false;
    }
  };
};
var properties_canLoadTargets = function canLoadTargets(host) {
  return {
    get: function get() {
      return host.hasTargets && host.hasTargets$ && host.hasStart;
    }
  };
};
// CONCATENATED MODULE: ./src/components/effect-underline/index.js



 // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization

var effect_underline_style = __webpack_require__(46).toString(); // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization


var effect_underline_template = __webpack_require__(47);

var effect_underline_componentName = "effect-underline";
var effect_underline_componentRoot = ".effect-underline-container";
var EffectUnderline =
/*#__PURE__*/
WCConstructor({
  componentName: effect_underline_componentName,
  componentRoot: effect_underline_componentRoot,
  template: effect_underline_template,
  style: effect_underline_style,
  observedAttributes: effect_underline_properties_observedAttributes,
  properties: effect_underline_properties_properties,
  elements: effect_underline_elements,
  methods: {
    toggle: effect_underline_methods_toggle,
    open: effect_underline_methods_open,
    close: effect_underline_methods_close
  },
  computed: {
    hasTargets: effect_underline_properties_hasTargets,
    hasTargets$: properties_hasTargets$,
    hasStart: effect_underline_properties_hasStart,
    canLoadTargets: properties_canLoadTargets,
    canStart: effect_underline_properties_canStart,
    canEnd: properties_canEnd,
    canRunStart: properties_canRunStart,
    canRunEnd: properties_canRunEnd,
    nonAutoOrigin: properties_nonAutoOrigin
  },
  onDisconnected: function onDisconnected(host) {
    return effect_underline_methods_unloadTargets(host);
  }
});
WCDefine(effect_underline_componentName, EffectUnderline);
// CONCATENATED MODULE: ./src/components/grid-layout/index.js
 // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization

var grid_layout_style = __webpack_require__(11).toString(); // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization


var grid_layout_template = __webpack_require__(48);

var grid_layout_componentName = "grid-layout";
var grid_layout_componentRoot = ".".concat(grid_layout_componentName, "-container");
var defaultWidth = 240;
var defaultGap = 16;

var grid_layout_setStyles = function setStyles(el, styles) {
  if (!el) {
    return;
  }

  SetStyleRules(el, styles);
};

var grid_layout_setAllStyles = function setAllStyles(host, string) {
  var componentStyle = host.shadowRoot.querySelector("style[name=\"\"]");
  var themeStyles = host.elements.themeStyles;
  var injectedStyles = host.elements.injectedStyles;
  var outerStyle = host.querySelector("style[name=\"outer\"]");
  var styleString = [grid_layout_style, themeStyles ? themeStyles.innerHTML : "", injectedStyles ? injectedStyles.innerHTML : "", string].join("");

  if (!outerStyle) {
    AppendStyleElement(styleString, host, "outer");
    outerStyle = host.querySelector("style[name=\"outer\"]");
    outerStyle.nongrid = true;
  }

  grid_layout_setStyles(componentStyle, styleString);
  grid_layout_setStyles(outerStyle, styleString);
};

var unsupportedCSS = function unsupportedCSS(host, gap, columnwidth) {
  return typeof host.style.grid === "string" ? "" : ".grid-layout-items{margin-left:-".concat(gap, "px;margin-right:-").concat(gap, "px;}.grid-layout-items .grid-layout-item{max-width:").concat(columnwidth, "px;margin:").concat(gap, "px;}");
};

var setScale = function setScale(host) {
  if (!host.scaletofit) {
    return;
  }

  var gap = host.gap || defaultGap;
  var columnwidth = host.columnwidth || defaultWidth;
  var contentWidth = host.elements.root.offsetWidth + gap;
  var columnGapPercent = 100 / Math.round(contentWidth / (gap + columnwidth));
  var ratio = 1 - gap / columnwidth;

  if (columnwidth === "100%") {
    columnwidth = 100;
    gap = 0;
  } else {
    if (columnGapPercent > 50) {
      columnGapPercent = 50;
    }

    columnwidth = columnGapPercent * ratio;
    gap = (columnGapPercent - columnwidth) / 2;
  }

  grid_layout_setAllStyles(host, ".grid-layout-items{display:flex; width:".concat(100 + gap * 2, "%;margin-left:-").concat(gap, "%;}.grid-layout-item{width:").concat(columnwidth, "%;padding:").concat(gap === 0 ? 4 : gap / 2, "% ").concat(gap, "%;}"));
};

var setDimensions = function setDimensions(host) {
  if (host.scaletofit) {
    return setScale(host);
  }

  var gap = host.gap || defaultGap;
  var columnwidth = host.columnwidth || defaultWidth;
  grid_layout_setAllStyles(host, ".grid-layout-items{grid-gap:".concat(gap, "px; grid-template-columns:repeat(auto-fit, minmax(").concat(columnwidth, "px, 0fr));}").concat(unsupportedCSS(host, gap, columnwidth)));
};

var grid_layout_elements = {
  root: {
    selector: grid_layout_componentRoot
  },
  itemsContainer: {
    selector: ".".concat(grid_layout_componentName, "-items")
  },
  injectedStyles: {
    selector: "style.injectedStyles",
    onChange: function onChange(el, host) {
      return grid_layout_setStyles(el, host.styles);
    }
  },
  themeStyles: {
    selector: "style.themeStyles",
    onChange: function onChange(el, host) {
      return grid_layout_setStyles(el, host.theme);
    }
  }
};
var grid_layout_properties = {
  columnwidth: {
    format: function format(val) {
      return val === "100%" ? val : Pipe(ToNumber, IfInvalid(defaultWidth))(val).value;
    },
    onChange: function onChange(_val, host) {
      return setDimensions(host);
    }
  },
  gap: {
    format: function format(val) {
      return Pipe(ToNumber, IfInvalid(defaultGap))(val).value;
    },
    onChange: function onChange(_val, host) {
      return setDimensions(host);
    }
  },
  styles: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid(""))(val).value;
    },
    onChange: function onChange(val, host) {
      return grid_layout_setStyles(host.elements.injectedStyles, val);
    }
  },
  theme: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid(""))(val).value;
    },
    onChange: function onChange(val, host) {
      return grid_layout_setStyles(host.elements.themeStyles, val);
    }
  },
  scaletofit: {
    format: function format(val) {
      return Pipe(ToBool, IfInvalid(false))(val).value;
    }
  }
};

var grid_layout_getComponentStyles = function getComponentStyles(host) {
  return function () {
    return "".concat(__webpack_require__(11).toString()).concat(host.theme || "").concat(host.styles);
  };
};

var GridLayout = WCConstructor({
  componentName: grid_layout_componentName,
  componentRoot: grid_layout_componentRoot,
  template: grid_layout_template,
  style: grid_layout_style,
  observedAttributes: Object.keys(grid_layout_properties),
  properties: grid_layout_properties,
  elements: grid_layout_elements,
  computed: {
    items: function items(host) {
      return {
        get: function get() {
          Array.from(host.children).filter(function (el) {
            return el.tagName.toLowerCase() !== "style";
          });
        }
      };
    }
  },
  methods: {
    getComponentStyles: grid_layout_getComponentStyles
  },
  onConnected: function onConnected(host) {
    var itemsContainer = host.elements.itemsContainer;

    var wrapItem = function wrapItem(el) {
      var id = ID();
      var slotWrapper = document.createElement("div");
      slotWrapper.className = "grid-layout-item";
      slotWrapper.id = id;
      itemsContainer.appendChild(slotWrapper);
      var slot = document.createElement("slot");
      slot.name = id;
      slotWrapper.appendChild(slot);
      el.slot = id;
      el.container = slotWrapper;
      return el;
    };

    var observeEl = function observeEl(el) {
      if (el.nongrid) {
        return;
      }

      wrapItem(el);
    };

    var disconnectEl = function disconnectEl(el) {
      var containerParent = Object(utils_get["a" /* Get */])(el, "container.parentElement");
      Object(utils_get["a" /* Get */])(el, "eventSubscriptions.span.disconnect()");

      if (containerParent) {
        containerParent.removeChild(el.container);
      }
    };

    Array.from(host.children).forEach(observeEl);
    host.slotObserver = new MutationObserver(function (mutationsList) {
      var list = Array.from(mutationsList);

      while (list.length) {
        var mutation = list.shift();

        if (mutation.type === "childList") {
          Array.from(mutation.addedNodes).forEach(observeEl);
          Array.from(mutation.removedNodes).forEach(disconnectEl);
        }
      }
    });
    host.slotObserver.observe(host, {
      childList: true
    });
    window.addEventListener("resize", function () {
      return setScale(host);
    });
  }
});
WCDefine(grid_layout_componentName, GridLayout);
// CONCATENATED MODULE: ./src/components/horizontal-slider/methods.js


function whichTransitionEvent() {
  var t;
  var el = document.createElement("fakeelement");
  var transitions = {
    'transition': "transitionend",
    'OTransition': "oTransitionEnd",
    'MozTransition': "transitionend",
    'WebkitTransition': "webkitTransitionEnd"
  };

  for (t in transitions) {
    if (el.style[t] !== undefined) {
      return transitions[t];
    }
  }
}

var setLoop = function setLoop(host) {
  var itemContainer = host.elements.itemContainer;
  var inner = host.elements.inner;

  if (!host.items || !itemContainer || !inner) {
    return;
  }

  var transitionEvent = whichTransitionEvent();

  if (!transitionEvent) {
    setTimeout(function () {
      finish();
    }, 300);
  } else {
    itemContainer.addEventListener(transitionEvent, function endHandler() {
      finish();
      window.removeEventListener(transitionEvent, endHandler, false);
    }, false);
  }

  var items = host.items;
  var currentItem = items[host.currentindex];

  var getLeft = function getLeft() {
    return currentItem.offsetLeft + currentItem.offsetWidth / 2 - inner.offsetWidth / 2;
  };

  itemContainer.style.transform = "translateZ(0) translateX(".concat(-getLeft(), "px)");

  var finish = function finish() {
    itemContainer.style.transition = "none";
    var indexShift = Math.ceil(host.items.length / 2) - host.currentindex;
    var beforeCurrent = host.currentindex - 1;
    var afterCurrent = host.currentindex + 1;
    currentItem.style.order = Math.ceil(host.items.length / 2);

    var getShift = function getShift(index) {
      if (index + indexShift > items.length) {
        return -items.length + index + indexShift;
      }

      if (index + indexShift < 1) {
        return index + indexShift + items.length;
      }

      return index + indexShift;
    };

    while (items[beforeCurrent]) {
      items[beforeCurrent].style.order = getShift(beforeCurrent);
      itemContainer.style.transform = "translateZ(0) translateX(".concat(-getLeft(), "px)");
      beforeCurrent = beforeCurrent - 1;
    }

    while (items[afterCurrent]) {
      items[afterCurrent].style.order = getShift(afterCurrent);
      itemContainer.style.transform = "translateZ(0) translateX(".concat(-getLeft(), "px)");
      afterCurrent = afterCurrent + 1;
    }

    itemContainer.style.removeProperty("transition");
  };
};
var autoplay = function autoplay(host) {
  if (!Array.isArray(host.items)) {
    return;
  }

  var canPlay = function canPlay() {
    return !!host.intervalplay && host.intervalplay > 0 && host.paused !== true;
  };

  if (host.playing && canPlay()) {
    return;
  }

  var time = new Date().getTime();

  var run = function run() {
    if (!canPlay()) {
      host.playing = false;
      return;
    }

    var newTime = new Date().getTime();

    if (newTime - time > host.intervalplay) {
      host.playing = true;
      host.currentindex = host.currentindex + 1 > host.items.length - 1 ? 0 : host.currentindex + 1;
      time = new Date().getTime();
    }

    requestAnimationFrame(run);
  };

  if (canPlay()) {
    run();
  }
};
var methods_scrollToIndex = function scrollToIndex(host) {
  return function (index) {
    var itemContainer = host.elements.itemContainer;

    if (!host.items || !itemContainer) {
      return;
    }

    var finish = function finish() {
      setActiveItem(host);
      setActiveChicklet(host, index);
    };

    if (host.loop) {
      setLoop(host);
      return finish();
    }

    var item = host.items[index];
    host.currentindex = index;

    if (!item) {
      return;
    }

    var left = -(item.offsetLeft - (host.center ? host.elements.inner.offsetWidth / 2 - item.offsetWidth / 2 : 0));
    itemContainer.style.transform = "translateZ(0) translateX(".concat(left, "px)");
    finish();
  };
};
var goToNextPage = function goToNextPage(host, currentIndex) {
  var inner = host.elements.inner;
  var itemContainer = host.elements.itemContainer;

  if (!inner || !itemContainer) {
    return;
  }

  var targeWidth = inner.offsetWidth;
  var currentWidth = 0;
  var i = currentIndex;

  while (host.items[i]) {
    var itemWidth = host.items[i].offsetWidth;
    currentWidth = currentWidth + itemWidth;

    if (currentWidth > targeWidth) {
      break;
    }

    i = i + 1;
  }

  host.currentindex = i;
};
var goToPreviousPage = function goToPreviousPage(host, currentIndex) {
  var inner = host.elements.inner;
  var itemContainer = host.elements.itemContainer;

  if (!inner || !itemContainer) {
    return;
  }

  var currentWidth = inner.offsetWidth;
  var i = currentIndex;

  while (host.items[i]) {
    var itemWidth = host.items[i].offsetWidth;
    currentWidth = currentWidth - itemWidth;

    if (currentWidth < 0) {
      break;
    }

    i = i - 1;
  }

  host.currentindex = i;
};
// CONCATENATED MODULE: ./src/components/horizontal-slider/elements.js


var sliderItemSelectedClass = "active-horizontal-slider-item";
var sliderItemClass = "horizontal-slider-item";

var handleItemEnter = function handleItemEnter(item) {
  return item.hovering = true;
};

var handleItemLeave = function handleItemLeave(item) {
  return item.hovering = false;
};

var handleItemUp = function handleItemUp(item) {
  return item.touching = false;
};

var handleItemDown = function handleItemDown(item, host) {
  item.touching = true;
  host.currentindex = item.itemIndex;
  host.dispatchEvent(new CustomEvent("itemclick", {
    detail: {
      index: host.currentindex,
      item: item,
      host: host
    }
  }));
};

var elements_unsetItemEvents = function unsetItemEvents(items) {
  if (!items || !Array.isArray(items)) {
    return;
  }

  items.forEach(function (item) {
    Object.keys(Object(utils_get["a" /* Get */])(item, "eventSubscriptions", {})).forEach(function (key) {
      if (item.eventSubscriptions[key] && typeof item.eventSubscriptions[key] === "function") {
        item.eventSubscriptions[key]();
      }
    });
    item.classList.remove(sliderItemClass);
  });
};
var elements_setItemEvents = function setItemEvents(items, host) {
  if (!items || !Array.isArray(items)) {
    return;
  }

  items.forEach(function (item) {
    item.classList.add(sliderItemClass);
    item.eventSubscriptions = {
      mouseenter: ObserveEvent(item, "mouseenter").subscribe(function () {
        return handleItemEnter(item);
      }),
      mouseleave: ObserveEvent(item, "mouseleave").subscribe(function () {
        return handleItemLeave(item);
      }),
      mousedown: ObserveEvent(item, "mousedown").subscribe(function () {
        return handleItemDown(item, host);
      }),
      mouseup: ObserveEvent(item, "mouseup").subscribe(function () {
        return handleItemUp(item);
      })
    };
  });
};
var horizontal_slider_elements_setStyles = function setStyles(el, host, styles) {
  if (!el) {
    return;
  }

  SetStyleRules(el, styles || host.styles);
};
var elements_setSlot = function setSlot(el, host) {
  if (!el) {
    return;
  }

  el.eventSubscriptions = {
    slot: ObserveEvent(el, "slotchange").subscribe(function () {
      var images = [];
      var items = Array.from(host.children).map(function (item, index) {
        item.itemIndex = index;
        item.style.order = index + 1;
        images = images.concat(Array.from(item.querySelectorAll("img")));
        return item;
      });
      Promise.all(images.map(function (image) {
        return new Promise(function (resolve) {
          if (image.complete) {
            return resolve(image);
          }

          function onComplete() {
            image.removeEventListener("load", onComplete, true);
            image.removeEventListener("error", onComplete, true);
            return resolve(image);
          }

          image.addEventListener("load", onComplete, true);
          image.addEventListener("error", onComplete, true);
        });
      })).then(function () {
        return host.items = items;
      });
    })
  };
};
var setActiveItem = function setActiveItem(host) {
  if (!Array.isArray(host.items)) {
    return;
  }

  var index = host.currentindex;
  host.items.forEach(function (item) {
    return item.classList[item.itemIndex === index ? "add" : "remove"](sliderItemSelectedClass);
  });
};
var chickletSelector = "horizontal-slider-chicklet";
var setActiveChicklet = function setActiveChicklet(host, selectedIndex) {
  var chickletContainer = host.elements.chicklets;
  Array.from(chickletContainer.querySelectorAll(".".concat(chickletSelector))).forEach(function (chicklet, index) {
    chicklet.classList[index === selectedIndex ? "add" : "remove"]("active");
  });
};
var elements_setChicklets = function setChicklets(host) {
  var chicklets = host.elements.chicklets;
  var root = host.elements.root;

  if (!chicklets || !Array.isArray(host.items)) {
    return;
  }

  if (!host.chicklets) {
    var currentChicklets = Array.from(chicklets.querySelectorAll(".".concat(chickletSelector)));
    currentChicklets.forEach(function (chicklet) {
      return host.unsubscribeEvents(chicklet);
    });
    chicklets.innerHTML = "";
  }

  root.classList[host.chicklets ? "add" : "remove"]("has-chicklets");
  host.items.forEach(function (_item, index) {
    var chicklet = document.createElement("div");
    chicklet.className = chickletSelector;
    chicklet.itemIndex = index;
    chicklets.appendChild(chicklet);
    chicklet.eventSubscriptions = {
      click: ObserveEvent(chicklet, "click").subscribe(function () {
        return host.currentindex = index;
      })
    };
  });
  setActiveChicklet(host, host.currentindex);
};
var arrowClass = "show-horizontal-slider-arrows";
var elements_setPrevious = function setPrevious(el, host) {
  if (!el) {
    return;
  }

  el.classList[host.arrows ? "add" : "remove"](arrowClass);
  host.unsubscribeEvents(el);
  el.eventSubscriptions = {
    click: ObserveEvent(el, "click").subscribe(function () {
      return goToPreviousPage(host, host.currentindex);
    })
  };
};
var elements_setNext = function setNext(el, host) {
  if (!el) {
    return;
  }

  el.classList[host.arrows ? "add" : "remove"](arrowClass);
  host.unsubscribeEvents(el);
  el.eventSubscriptions = {
    click: ObserveEvent(el, "click").subscribe(function () {
      return goToNextPage(host, host.currentindex);
    })
  };
};
var horizontal_slider_elements_elements = {
  root: {
    selector: ".horizontal-slider-container",
    onChange: function onChange(el, host) {
      el.eventSubscriptions = {
        mouseenter: ObserveEvent(el, "mouseenter").subscribe(function () {
          host.paused = true;
        }),
        mouseleave: ObserveEvent(el, "mouseleave").subscribe(function () {
          host.paused = false;
          autoplay(host);
        })
      };
    }
  },
  injectedStyles: {
    selector: "style.injectedStyles",
    onChange: horizontal_slider_elements_setStyles
  },
  slot: {
    selector: "slot:not([name])",
    onChange: elements_setSlot
  },
  inner: {
    selector: ".horizontal-slider-inner"
  },
  itemContainer: {
    selector: ".horizontal-slider-items"
  },
  previous: {
    selector: ".horizontal-slider-previous",
    onChange: elements_setPrevious
  },
  next: {
    selector: ".horizontal-slider-next",
    onChange: elements_setNext
  },
  chicklets: {
    selector: ".horizontal-slider-chicklets",
    onChange: function onChange(_el, host) {
      return elements_setChicklets(host);
    }
  }
};
/* harmony default export */ var horizontal_slider_elements = (horizontal_slider_elements_elements);
// CONCATENATED MODULE: ./src/components/horizontal-slider/properties.js



var horizontal_slider_properties_attributes = {
  "class": ComponentClassObject,
  styles: {
    format: function format(val) {
      return typeof val === "string" ? val : "";
    },
    onChange: function onChange(val, host) {
      return horizontal_slider_elements_setStyles(host.elements.injectedStyles, host, val);
    }
  },
  chicklets: {
    format: function format(val) {
      return Pipe(ToBool, IfInvalid(true))(val).value;
    },
    onChange: function onChange(_val, host) {
      return elements_setChicklets(host);
    }
  },
  arrows: {
    format: function format(val) {
      return Pipe(ToBool, IfInvalid(true))(val).value;
    },
    onChange: function onChange(_val, host) {
      elements_setPrevious(host.elements.previous, host);
      elements_setNext(host.elements.next, host);
    }
  },
  intervalplay: {
    format: function format(val) {
      return Pipe(ToNumber, IfInvalid(0))(val).value;
    },
    onChange: function onChange(_val, host) {
      return autoplay(host);
    }
  },
  currentindex: {
    format: function format(val, host) {
      var num = Pipe(ToNumber, IfInvalid(0))(val).value;

      if (Array.isArray(host.items) && num >= host.items.length) {
        num = host.items.length - 1;
      }

      if (num < 0) {
        num = 0;
      }

      return num;
    },
    onChange: function onChange(val, host) {
      return host.scrollToIndex(val);
    }
  },
  loop: {
    format: function format(val) {
      return Pipe(ToBool, IfInvalid(true))(val).value;
    },
    onChange: function onChange(_val, host) {
      setLoop(host);
    }
  },
  center: {
    format: function format(val) {
      return Pipe(ToBool, IfInvalid(true))(val).value;
    },
    onChange: function onChange(_val, host) {
      host.scrollToIndex(host.currentindex);
    }
  }
};
var horizontal_slider_properties_properties = Object.assign({}, horizontal_slider_properties_attributes, {
  items: {
    format: function format(val, host) {
      return Pipe(ToArray, IfInvalid(Object(utils_get["a" /* Get */])(host, "state.items.value", [])))(val).value;
    },
    onChange: function onChange(val, host) {
      elements_unsetItemEvents(host.state.items.previous);
      elements_setItemEvents(val, host);
      host.scrollToIndex(host.currentindex);
      elements_setChicklets(host);
      setLoop(host);
      autoplay(host);
      host.classList.add("isready");
    }
  }
});
var horizontal_slider_properties_observedAttributes = Object.keys(horizontal_slider_properties_attributes);
// CONCATENATED MODULE: ./src/components/horizontal-slider/index.js
/**
 * on load, images seem stretched then go to normal
 * cover flow
 * single item
 * onslidestart
 * onslideend
 * odd flicker when scrolling back
 * page scroll when center is messed up
 */



 // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization

var horizontal_slider_style = __webpack_require__(49).toString(); // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization


var horizontal_slider_template = __webpack_require__(50);

var horizontal_slider_componentName = "horizontal-slider";
var horizontal_slider_componentRoot = ".horizontal-slider-container";
var HorizontalSlider =
/*#__PURE__*/
WCConstructor({
  componentName: horizontal_slider_componentName,
  componentRoot: horizontal_slider_componentRoot,
  template: horizontal_slider_template,
  style: horizontal_slider_style,
  observedAttributes: horizontal_slider_properties_observedAttributes,
  properties: horizontal_slider_properties_properties,
  elements: horizontal_slider_elements,
  methods: {
    scrollToIndex: methods_scrollToIndex
  },
  onConnected: function onConnected(host) {
    window.addEventListener("resize", function () {
      return host.scrollToIndex(host.currentindex);
    });

    if (!document.head.querySelector("style[name=\"horizontal-slider-styles\"]")) {
      AppendStyleElement(horizontal_slider_style, document.head, "horizontal-slider-styles");
    }
  }
});
WCDefine(horizontal_slider_componentName, HorizontalSlider);
// CONCATENATED MODULE: ./src/utils/observe-worker/index.js

function ObserveWorker(func) {
  var value;
  var previous;
  var worker;
  var functionString = ToString(func).value;
  var subscriptions = {};
  var firstBracket = functionString.indexOf("{");
  var beginingSlice = functionString.slice(firstBracket);
  var pendingSubscriptions = [];
  functionString = "function webworker()".concat(beginingSlice, "webworker()");

  var loop = function loop(method, data, subs) {
    return Object.keys(subs).forEach(function (key) {
      return Object(utils_get["a" /* Get */])(subs, "".concat(key, ".").concat(method), function () {})(data);
    });
  };

  var shutDown = function shutDown() {
    if (worker) {
      worker.terminate();
    }

    worker = undefined;
    return false;
  };

  var startUp = function startUp() {
    if (worker) {
      return;
    }

    var blob;

    try {
      blob = window.URL.createObjectURL(new Blob([functionString], {
        type: "application/javascript"
      }));
    } catch (error) {}

    if (!blob) {
      return;
    }

    worker = new Worker(blob);

    worker.onmessage = function (e) {
      previous = value;
      value = e.data;
      return loop("next", value, subscriptions);
    };

    worker.onerror = function (e) {
      return loop("error", e.message, subscriptions);
    };

    return worker;
  };

  var noShutdown = function noShutdown(subs) {
    return Object.keys(subs).length === 0 ? shutDown() : true;
  };

  var unSubscribe = function unSubscribe(subscriberId) {
    return function () {
      subscriptions[subscriberId] = null;
      delete subscriptions[subscriberId];
      noShutdown(subscriptions);
    };
  };

  var completeAll = function completeAll(subs) {
    return Object.keys(subs).forEach(function (key) {
      subs[key].complete();
      unSubscribe(key);
    });
  };

  var methods = {
    get value() {
      return value;
    },

    get previous() {
      return previous;
    },

    get functionString() {
      return functionString;
    },

    get subscriptions() {
      return subscriptions;
    },

    get pending() {
      return pendingSubscriptions;
    },

    dispose: function dispose() {
      completeAll(subscriptions);
    },
    post: function post(msg) {
      var index = pendingSubscriptions.length;
      return new Promise(function (resolve, reject) {
        var res = function res(e) {
          pendingSubscriptions[index]();
          return resolve(e);
        };

        var rej = function rej(e) {
          pendingSubscriptions[index]();
          return reject(e);
        };

        pendingSubscriptions.push(methods.subscribe(res, rej, rej));
        worker.postMessage(ToJSON(msg).value);
      });
    },
    subscribe: function subscribe(next) {
      var error = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
      var complete = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

      if (typeof next !== "function") {
        return;
      }

      var subscriber = {
        next: next,
        error: error,
        complete: complete,
        id: ID()
      };
      subscriptions[subscriber.id] = subscriber;

      if (typeof subscriptions[subscriber.id].error !== "function") {
        subscriptions[subscriber.id].error = unSubscribe(subscriber.id);
      }

      if (typeof subscriptions[subscriber.id].complete !== "function") {
        subscriptions[subscriber.id].complete = unSubscribe(subscriber.id);
      }

      startUp();
      return unSubscribe(subscriber.id);
    }
  };
  return methods;
}
// CONCATENATED MODULE: ./src/components/icon-element/index.js
 // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization

var icon_element_style = __webpack_require__(51).toString();

var icon_element_elementSelectors = {
  root: ".icon-element-container",
  svgContainer: ".svg-container",
  injectedStyles: "style.injectedStyles"
};

var icon_element_setStyles = function setStyles(el, styles) {
  if (!el) {
    return;
  }

  SetStyleRules(el, styles);
};

var icon_element_elements = {}; // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization

Object.keys(icon_element_elementSelectors).forEach(function (key) {
  icon_element_elements[key] = {
    selector: icon_element_elementSelectors[key],
    onChange: key === "injectedStyles" ? function (el, host) {
      return icon_element_setStyles(el, host.styles);
    } : function () {}
  };
});
var AvailableIcons = {};

var icon_element_getIcon = function getIcon(path) {
  if (!path) {
    if (!AvailableIcons[path]) {
      AvailableIcons[path] = Observer("");
    }

    AvailableIcons[path].next("");
    return Promise.resolve(AvailableIcons[path]);
  }

  return new Promise(function (resolve) {
    if (path.slice(0, 5) === "<svg") {
      return resolve(Observer(path));
    }

    if (path.indexOf("https://") === -1 && path.indexOf("http://") === -1) {
      path = "".concat(location.protocol, "//").concat(location.host).concat(path[0] === "/" ? path : "/".concat(path));
    }

    if (AvailableIcons[path]) {
      return resolve(AvailableIcons[path]);
    }

    AvailableIcons[path] = Observer("");
    resolve(AvailableIcons[path]);
    var worker$ = ObserveWorker(function () {
      self.onmessage = function (e) {
        var xhr = new XMLHttpRequest();
        var data = JSON.parse(e.data);
        xhr.open(data.method, data.path, false);

        xhr.onload = function () {
          return postMessage({
            status: xhr.status,
            svg: xhr.responseText
          });
        };

        xhr.send();
      };
    });
    var workerSubscription = worker$.subscribe(function (e) {
      workerSubscription();
      AvailableIcons[path].next(e.svg);
    }, function (e) {
      workerSubscription();
      AvailableIcons[path].error(e.status);
    });
    worker$.post({
      path: path,
      method: "GET"
    });
  });
};

var trySet = function trySet(host, icon) {
  if (!host.elements.svgContainer) {
    return requestAnimationFrame(function () {
      return trySet(host, icon);
    });
  }

  host.elements.svgContainer.innerHTML = icon;
  host.dispatchEvent(new CustomEvent("iconloaded", {
    detail: host
  }));
};

var icon_element_attributes = {
  type: {
    format: function format(val) {
      return typeof val === "string" ? val : null;
    },
    onChange: function onChange(value, host) {
      if (!value) {
        return;
      }

      if (host.subscription) {
        host.subscription();
      }

      return icon_element_getIcon(value).then(function (subject) {
        host.subscription = subject.subscribe(function (icon) {
          trySet(host, icon);
        });
      });
    }
  },
  svg: {
    format: function format(val) {
      return typeof val === "string" ? val : null;
    },
    onChange: function onChange(value, host) {
      if (!value) {
        return;
      }

      if (host.subscription) {
        host.subscription();
      }

      host.elements.svgContainer.innerHTML = value;
      host.dispatchEvent(new CustomEvent("iconloaded", {
        detail: host
      }));
    }
  },
  color: {
    format: function format(val) {
      return typeof val === "string" ? val : null;
    },
    onChange: function onChange(value, host) {
      return host.elements.svgContainer.style.color = value;
    }
  },
  size: {
    format: function format(val) {
      return typeof val === "string" ? val : "1.5em";
    },
    onChange: function onChange(value, host) {
      return host.elements.svgContainer.style.height = host.elements.svgContainer.style.width = value;
    }
  },
  "class": ComponentClassObject,
  styles: {
    format: function format(val) {
      return typeof val === "string" ? val : "";
    },
    onChange: function onChange(val, host) {
      return icon_element_setStyles(host.elements.injectedStyles, val);
    }
  }
}; // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization

var icon_element_properties = Object.assign({}, {
  subscription: {
    format: function format(val) {
      return val;
    }
  }
}, icon_element_attributes); // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization

var icon_element_template = __webpack_require__(52);

var icon_element_componentName = "icon-element";
var icon_element_componentRoot = ".icon-element-container";
var IconElement = WCConstructor({
  componentName: icon_element_componentName,
  componentRoot: icon_element_componentRoot,
  template: icon_element_template,
  style: icon_element_style,
  observedAttributes: Object.keys(icon_element_attributes),
  properties: icon_element_properties,
  elements: icon_element_elements
});
WCDefine(icon_element_componentName, IconElement);
// CONCATENATED MODULE: ./src/components/image-loader/index.js
 // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization

var image_loader_style = __webpack_require__(53).toString(); // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization


var image_loader_template = __webpack_require__(54);

var image_loader_componentName = "image-loader";
var image_loader_componentRoot = ".image-loader-container";

var image_loader_setStyles = function setStyles(el, styles) {
  if (!el) {
    return;
  }

  SetStyleRules(el, styles);
};

var image_loader_setStyleElement = function setStyleElement(host) {
  var outerStyle = host.querySelector("style[name=\"outer\"]");
  var componentStyle = host.shadowRoot.querySelector("style[name=\"\"]");
  var styleString = [image_loader_style, host.theme, host.styles].join("");

  if (!outerStyle) {
    AppendStyleElement(styleString, host, "outer");
    outerStyle = host.querySelector("style[name=\"outer\"]");
  }

  image_loader_setStyles(host.elements.themedStyles, styleString);
  image_loader_setStyles(componentStyle, styleString);
  image_loader_setStyles(outerStyle, styleString);
};

var setInternalStyle = function setInternalStyle(host) {
  var internalStyle = !host.fit ? "" : ".image-loader-container>img.image-loader-image{\n            object-position:".concat(host.position ? host.position : "50% 50%", ";\n            object-fit:").concat(host.fit ? host.fit : "contain", ";\n        }");
  image_loader_setStyles(host.elements.internalStyles, internalStyle);
  waitForEl(host, "root").then(function (root) {
    if (host.fit) {
      root.classList.add("fill");
      root.setAttribute("fit", host.fit);
    } else {
      root.classList.remove("fill");
      root.removeAttribute("fit");
    }
  });
};

var waitForEl = function waitForEl(host, key) {
  return new Promise(function (resolve) {
    var el = host.elements[key];

    var checkIfReady = function checkIfReady() {
      cancelAnimationFrame(host["timerFor".concat(key)]);
      el = host.elements[key];
      return !el ? host["timerFor".concat(key)] = requestAnimationFrame(checkIfReady) : resolve(el);
    };

    checkIfReady();
  });
};

var waitForEls = function waitForEls(host, keys) {
  return Promise.all(keys.map(function (key) {
    return waitForEl(host, key);
  }));
};

var toggleLoad = function toggleLoad(host) {
  return waitForEls(host, ["root", "spinner"]).then(function (elements) {
    clearTimeout(host.spinnerTimer);
    var root = elements[0];
    var spinner = elements[1];
    var loaded = !host.loading && !!host.src;
    host.setAttribute("loaded", loaded);
    host.setAttribute("errored", host.error);
    root.setAttribute("loaded", loaded);
    root.classList[host.loading ? "add" : "remove"]("loading");
    root.classList[host.error ? "add" : "remove"]("errored");
    host.dispatchEvent(new CustomEvent(host.error ? "imageerror" : host.loading ? "imageloading" : "imageloaded", {
      detail: host
    }));

    if (!host.loading) {
      host.complete = true;
      host.dispatchEvent(new CustomEvent("imagecomplete", {
        detail: host
      }));
    }

    toggleText(host);

    if (!host.loading) {
      spinner.setAttribute("visible", false);
      return;
    }

    host.spinnerTimer = setTimeout(function () {
      return spinner.setAttribute("visible", host.loading && host.spinner ? true : false);
    }, 333);
  });
};

var toggleText = function toggleText(host) {
  return waitForEl(host, "root").then(function (root) {
    var showingtext = host.error && !host.loading || !host.src;
    root.classList[showingtext ? "add" : "remove"]("show-text");
    host.setAttribute("showingtext", showingtext);
  });
};

var image_loader_properties = {
  src: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid(null))(val).value;
    },
    onChange: function onChange(val, host) {
      return loadSrc(host, val);
    }
  },
  altsrc: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid(null))(val).value;
    }
  },
  alttext: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid(null))(val).value;
    },
    onChange: function onChange(val, host) {
      if (!val) {
        return;
      }

      waitForEl(host, "text").then(function (textEl) {
        textEl.innerHTML = ValidateHtml(val, [], ["script"]).sanitized;
        toggleText(host);
      });
    }
  },
  loading: {
    format: function format(val) {
      return Pipe(ToBool, IfInvalid(false))(val).value;
    },
    onChange: function onChange(_val, host) {
      toggleLoad(host);
    }
  },
  error: {
    format: function format(val) {
      return Pipe(ToBool, IfInvalid(false))(val).value;
    }
  },
  complete: {
    format: function format(val) {
      return Pipe(ToBool, IfInvalid(false))(val).value;
    }
  },
  theme: {
    format: function format(val) {
      return typeof val === "string" ? val : "";
    },
    onChange: function onChange(_val, host) {
      return image_loader_setStyleElement(host);
    }
  },
  fit: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid(null))(val).value;
    },
    onChange: function onChange(_val, host) {
      setInternalStyle(host);
    }
  },
  position: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid(null))(val).value;
    },
    onChange: function onChange(_val, host) {
      setInternalStyle(host);
    }
  },
  spinner: {
    format: function format(val) {
      return Pipe(ToBool, IfInvalid(false))(val).value;
    }
  }
};
var image_loader_observedAttributes = Object.keys(image_loader_properties);
var image_loader_elements = {
  root: {
    selector: image_loader_componentRoot,
    onChange: function onChange(el) {
      requestAnimationFrame(function () {
        el.classList.remove("notready");
        el.style.removeProperty("opacity");
      });
    }
  },
  spinner: {
    selector: "".concat(image_loader_componentRoot, " spinner-element"),
    onChange: function onChange(el) {
      var remove = function remove() {
        return el.style.removeProperty("opacity");
      };

      setTimeout(function () {
        return requestAnimationFrame(remove);
      }, 66);
    }
  },
  img: {
    selector: "img",
    onChange: function onChange(el, host) {
      el.eventSubscriptions = {
        load: ObserveEvent(el, "load").subscribe(function () {
          host.error = false;
          host.loading = false;
        }),
        error: ObserveEvent(el, "error").subscribe(function () {
          host.error = true;
          host.loading = false;
        })
      };
    }
  },
  text: {
    selector: ".image-loader-text"
  },
  themedStyles: {
    selector: "style.themeStyles",
    onChange: function onChange(_el, host) {
      return image_loader_setStyleElement(host);
    }
  },
  internalStyles: {
    selector: "style.internalStyles",
    onChange: function onChange(_el, host) {
      return setInternalStyle(host);
    }
  }
};

var loadSrc = function loadSrc(host, src) {
  return new Promise(function (resolve) {
    if (!src) {
      return resolve();
    }

    waitForEl(host, "img").then(function (img) {
      if (img.src === src) {
        return resolve(img);
      }

      host.error = false;
      host.loading = true;
      img.src = src;
    });
  });
};

var image_loader_methods = {
  toCanvas: function toCanvas(host) {
    return function () {
      try {
        var dpr = window.devicePixelRatio || 1;
        var ctx = document.createElement("canvas").getContext("2d");
        ctx.canvas.width = host.image.width * dpr;
        ctx.canvas.height = host.image.height * dpr;
        ctx.scale(dpr, dpr);
        ctx.drawImage(host.image, 0, 0);
        return ctx.canvas;
      } catch (error) {
        throw Error(error);
      }
    };
  },
  toDataUrl: function toDataUrl(host) {
    return function () {
      var mime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "image/jpeg";
      var quality = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      return host.toCanvas().then(function (canvas) {
        return canvas.toDataURL(mime, quality);
      });
    };
  },
  toObjectUrl: function toObjectUrl(host) {
    return function () {
      var mime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "image/jpeg";
      var quality = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      return host.toBlob(mime, quality).then(function (blob) {
        return URL.createObjectURL(blob);
      });
    };
  },
  toBlob: function toBlob(host) {
    return function () {
      var mime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "image/jpeg";
      var quality = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      return host.toCanvas().then(function (canvas) {
        return new Promise(function (resolve) {
          return canvas.toBlob(resolve, mime, quality);
        });
      });
    };
  },
  toData: function toData(host) {
    return function () {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var w = arguments.length > 2 ? arguments[2] : undefined;
      var h = arguments.length > 3 ? arguments[3] : undefined;
      return host.toCanvas().then(function (canvas) {
        return canvas.getContext("2d").getImageData(x, y, w ? w : canvas.width, h ? h : canvas.height);
      });
    };
  }
};
var ImageLoader = WCConstructor({
  componentName: image_loader_componentName,
  componentRoot: image_loader_componentRoot,
  template: image_loader_template,
  style: image_loader_style,
  observedAttributes: image_loader_observedAttributes,
  properties: image_loader_properties,
  elements: image_loader_elements,
  methods: image_loader_methods,
  onConnected: function onConnected(host) {
    image_loader_setStyleElement(host);
    setInternalStyle(host);
  }
});
WCDefine(image_loader_componentName, ImageLoader);
// CONCATENATED MODULE: ./src/utils/to-object/index.js






var to_object_ToObject = function ToObject(value) {
  var result = TMonad(value);

  if (result.stop) {
    return result;
  }

  if (result.type === "string") {
    result = Pipe(FromURIComponent, FromEntities, FromJSON)(result);
  }

  result.valid = Type(result.value) === "object";
  return result;
};
// CONCATENATED MODULE: ./src/utils/set/index.js
function Set(source, path, value) {
  if (path) {
    path = [source].concat(path.split("."));
  } else {
    path = [source];
  }

  path.reduce(function (accumulator, currentValue) {
    if (!accumulator) {
      accumulator = {};
    }

    if (!accumulator[currentValue]) {
      accumulator[currentValue] = {};
    }

    if (currentValue) {
      if (currentValue === path[path.length - 1]) {
        accumulator[currentValue] = value;
      }

      return accumulator[currentValue];
    } else {
      accumulator[currentValue] = null;
      return accumulator;
    }
  });
  return source;
}
// CONCATENATED MODULE: ./src/utils/validate-number/index.js

function ValidateNumber(num) {
  var original = num;
  var reasons = [];
  var formatted = ToNumber(num);

  if (!formatted.valid) {
    reasons.push("not a number");
  }

  return {
    original: original,
    valid: reasons.length === 0,
    sanitized: formatted.value,
    reason: reasons
  };
}
// CONCATENATED MODULE: ./src/utils/validate-bool/index.js
function ValidateBool(val) {
  var original = val;
  var reasons = [];
  var result;

  if (val === true || val === "on" || val === "true") {
    result = true;
  }

  if (val === false || val === "off" || val === "false") {
    result = false;
  }

  if (result === undefined) {
    result = false;
    reasons.push("not valid");
  }

  return {
    original: original,
    valid: reasons.length === 0,
    sanitized: !!result,
    reason: reasons
  };
}
// CONCATENATED MODULE: ./src/utils/validate-email/index.js

function ValidateEmail(str) {
  var original = str;
  var converted = Pipe(ToString, FromEntities)(str);
  var val = converted.value;

  if (!val || !val.length || converted.type !== "string") {
    return {
      original: original,
      valid: false,
      sanitized: val,
      reason: ["no value"]
    };
  }

  var reasons = [];
  var split = val.split("@");

  if (!split[0] || !split[0].length) {
    reasons.push("missing username");
  }

  if (split.length < 2) {
    reasons.push("missing @ symbol");
    reasons.push("missing domain, i.e. \"mail.com\"");
  }

  if (split.length > 1) {
    var domain = split[1].split(".");

    if (!domain[0] || !domain[0].length || !domain[1] || !domain[1].length) {
      reasons.push("missing domain, i.e. \"mail.com\"");
    }
  }

  if (reasons.length) {
    return {
      original: original,
      valid: false,
      sanitized: val,
      reason: reasons
    };
  }

  return ValidateHtml(val);
}
// CONCATENATED MODULE: ./src/utils/validate-us-phone/index.js

function ValidateUsPhone(val) {
  var original = val;
  var reason = [];
  var converted = Pipe(ToString, FromEntities, IfInvalid(""))(val);
  var value = converted.value.replace(/[^\d]+/g, "");

  if (value.length < 10) {
    reason.push("needs at least 10 digits");
  }

  return {
    original: original,
    valid: reason.length === 0,
    sanitized: original,
    reason: reason
  };
}
// CONCATENATED MODULE: ./src/utils/validate-intl-phone/index.js

function ValidateIntlPhone(val) {
  var original = val;
  var reason = [];
  var converted = Pipe(ToString, FromEntities, IfInvalid(""))(val);
  var value = converted.value.replace(/[^\d]+/g, "");

  if (value.length < 11) {
    reason.push("needs at least 11 digits");
  }

  return {
    original: original,
    valid: reason.length === 0,
    sanitized: original,
    reason: reason
  };
}
// CONCATENATED MODULE: ./src/utils/remove-meta/index.js

function RemoveMeta(string, search) {
  var match;
  var result = {
    value: string.toString(),
    stringChanges: []
  };

  while ((match = ToRegex(search).value.exec(result.value)) !== null) {
    var matched = {
      start: match.index,
      end: match.index + match[0].length,
      input: match.input,
      length: match[0].length,
      result: "",
      removed: match[0]
    };
    var first = matched.start !== 0 ? result.value.slice(0, matched.start) : "";
    var second = result.value.slice(matched.end);
    matched.result = "".concat(first).concat(second);
    result.stringChanges.push(matched);
    result.value = matched.result;
  }

  return result;
}
// CONCATENATED MODULE: ./src/utils/to-digits/index.js

function ToDigits(value) {
  var result = TMonad(value);

  if (result.stop) {
    return result;
  }

  if (result.type !== "string") {
    result = ToString(result);
  }

  try {
    var cleaned = RemoveMeta(result.value, /[^\d]+/g);
    result.stringChanges = result.stringChanges.concat(cleaned.stringChanges);
    result.value = cleaned.value.toString();
    result.valid = !!result.value;
  } catch (error) {
    result.valid = false;
  }

  result.type = Type(result.value);
  return result;
}
// CONCATENATED MODULE: ./src/utils/to-join-meta/index.js
function ToJoinMeta(array, delimeter) {
  var result = {
    value: array,
    stringChanges: []
  };

  if (!delimeter) {
    result.value = result.value.join(delimeter);
    return result;
  }

  try {
    var index = 1;
    var joinedValue = result.value[index] || "";

    while (index < result.value.length) {
      result.stringChanges.push({
        start: joinedValue.length,
        end: joinedValue.length + delimeter.length,
        input: result.value[index],
        length: delimeter.length,
        result: "",
        added: delimeter
      });
      joinedValue = "".concat(joinedValue).concat(delimeter).concat(result.value[index]);
      index = index + 1;
    }

    result.value = joinedValue;
  } catch (error) {}

  return result;
}
// CONCATENATED MODULE: ./src/utils/to-join/index.js

function ToJoin(delimeter) {
  return function (value) {
    var result = TMonad(value);

    if (result.stop) {
      return result;
    }

    var resultingMeta = ToJoinMeta(result.value, delimeter);
    result.value = resultingMeta.value;
    result.stringChanges = result.stringChanges.concat(resultingMeta.stringChanges);
    result.valid = typeof result.value === "string";
    return TMonadUpdate(result, "string", "Join");
  };
}
// CONCATENATED MODULE: ./src/utils/to-us-zip/index.js

function ToUsZip(value) {
  var result = TMonad(value);

  if (result.stop) {
    return result;
  }

  var mapper = ToMap(function (val, index) {
    if (index < 5 || index > 5 && index < 9) {
      return val;
    }

    if (index === 5) {
      return "-".concat(val);
    }

    return "";
  });
  result = Pipe(ToDigits, ToSplit(""), mapper, ToJoin(""))(result);
  result.valid = typeof result.value === "string" && (result.value.length === 5 || result.value.length === 10);
  return result;
}
// CONCATENATED MODULE: ./src/utils/validate-us-zip/index.js

function ValidateUsZip(val) {
  var original = val;
  var reason = [];
  var result = ToUsZip(val);

  if (!result.valid) {
    if (result.value.length < 5) {
      reason.push("minimum of 5 digits");
    }

    if (result.value.length > 5 && result.value.length < 10) {
      reason.push("needs to be 5 or 9 digits");
    }
  }

  return {
    original: original,
    valid: result.valid,
    sanitized: original,
    reason: reason
  };
}
// CONCATENATED MODULE: ./src/utils/validate-url/index.js

function ValidateUrl(str) {
  var original = str;
  var converted = Pipe(ToString, FromEntities)(str);
  var val = converted.value;

  if (!str || str.length === 0 || converted.type !== "string") {
    return {
      original: str,
      valid: false,
      sanitized: null,
      reason: ["no value"]
    };
  }

  var reasons = [];
  var link = document.createElement("a");
  link.href = val;

  if (!link.protocol) {
    reasons.push("Missing url protocol");
  }

  if (!link.host) {
    reasons.push("Missing url host");
  }

  return {
    original: original,
    valid: reasons.length === 0,
    sanitized: val,
    reason: reasons
  };
}
/* harmony default export */ var validate_url = (ValidateUrl);
// CONCATENATED MODULE: ./src/utils/validate-text/index.js

function ValidateText(str) {
  var original = str;
  var reasons = [];
  var converted = Pipe(ToString, FromEntities)(str);
  var val = converted.value;

  if (!val || !val.length || converted.type !== "string") {
    return {
      original: original,
      valid: false,
      sanitized: val,
      reason: reasons.concat(["no value"])
    };
  }

  var htmlResults = ValidateHtml(val);
  htmlResults.reason = htmlResults.reason.concat(reasons);
  return htmlResults;
}
// CONCATENATED MODULE: ./src/utils/to-slice/index.js

function ToSlice(start, end) {
  return function (value) {
    var result = TMonad(value);

    if (result.stop) {
      return result;
    }

    try {
      var v = result.value.slice();
      result.value = v.slice(start, end);

      if (typeof v === "string") {
        if (start !== 0) {
          result.stringChanges.push({
            start: 0,
            end: start,
            input: v,
            length: start,
            result: v.slice(0, start),
            removed: v.slice(0, start)
          });
        }

        if (end < v.length) {
          result.stringChanges.push({
            start: end,
            end: v.length,
            input: v,
            length: v.length - end,
            result: v.slice(end),
            removed: v.slice(end)
          });
        }
      }
    } catch (error) {
      result.valid = false;
    }

    return result;
  };
}
// CONCATENATED MODULE: ./src/utils/to-match-meta/index.js

function ToMatchMeta(string, search) {
  var justOne = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var matches = [];
  var changes = [];
  var value = typeof string === "string" ? string : ToString(string).value;

  var lastMatch = function lastMatch() {
    return changes[changes.length - 1];
  };

  var hasMatched = false;
  value.replace(ToRegex(search).value, function () {
    if (justOne && hasMatched) {
      return;
    }

    hasMatched = true;
    var arr = [].slice.call(arguments, 0);

    if (arr[0] === "") {
      return;
    }

    var extras = arr.splice(-2);
    arr.index = extras[0];
    arr.input = extras[1];
    var last = lastMatch();
    var length = arr[0].length;
    var match = {
      start: arr.index,
      end: arr.index + length,
      input: arr.input,
      length: length,
      result: arr[0],
      removed: undefined
    };

    if (match.start && last && last.end !== match.start) {
      match.removed = match.input.slice(last.end, match.start);
    } else {
      delete match.removed;
    }

    matches.push(match.result);
    changes.push(match);
  });
  var last = lastMatch();

  if (last.end < value.length) {
    var removed = value.slice(last.end);
    changes.push({
      start: last.end,
      end: value.length,
      input: value,
      length: value.length - last.end,
      result: removed,
      removed: removed
    });
  }

  return {
    value: matches,
    stringChanges: changes
  };
}
// CONCATENATED MODULE: ./src/utils/to-match/index.js

function ToMatch(search) {
  return function (value) {
    var result = TMonad(value);

    if (result.stop) {
      return result;
    }

    if (result.type !== "string") {
      result = ToString(result);
    }

    var matches = ToMatchMeta(result.value, search, true);
    result.value = matches.value;
    result.valid = result.value.length === 1;
    result.stringChanges = result.stringChanges.concat(matches.stringChanges);
    return result;
  };
}
// CONCATENATED MODULE: ./src/utils/to-match-all/index.js

function ToMatchAll(search) {
  return function (value) {
    var result = TMonad(value);

    if (result.stop) {
      return result;
    }

    if (result.type !== "string") {
      result = ToString(result);
    }

    var matches = ToMatchMeta(result.value, search);
    result.value = matches.value;
    result.valid = result.value.length > 0;
    result.stringChanges = result.stringChanges.concat(matches.stringChanges);
    return result;
  };
}
// CONCATENATED MODULE: ./src/utils/to-replacement-pattern/index.js

var to_replacement_pattern_ToReplacementPattern = function ToReplacementPattern(string) {
  if (!string) {
    return [];
  }

  var str = ToString(string).value;
  var matches = str.match(/(\$\d+)+/g) || [];
  var extras = str.split(new RegExp("[".concat(matches.join("|"), "]")));
  var parsedMatches = matches ? matches.map(function (match) {
    return Pipe(ToDigits, ToNumber)(match).value;
  }) : [];
  var result = [];
  extras.forEach(function (extra, index) {
    if (extra === "") {
      if (index === 0 || index === extras.length - 1) {
        var replacement = parsedMatches.shift();
        return result.push({
          index: replacement,
          original: "$".concat(replacement)
        });
      }

      return;
    }

    result.push(extra);
  });
  return result;
};
// CONCATENATED MODULE: ./src/utils/to-replace-meta/index.js

function ToReplaceMeta(string, search, insert) {
  var replacements = to_replacement_pattern_ToReplacementPattern(insert);
  var result = {
    value: string.toString(),
    stringChanges: []
  };
  var testString = result.value;
  var match;
  var index = 0;

  while ((match = ToRegex(search).value.exec(testString)) !== null) {
    var end = match.index + match[0].length;
    var matched = {
      start: match.index,
      end: end,
      input: match.input,
      length: match[0].length,
      result: "",
      removed: match[0],
      pre: "",
      post: "",
      index: index
    };
    matched.pre = matched.start !== 0 ? testString.slice(0, matched.start) : "";
    matched.post = testString.slice(end);
    matched.result = "".concat(matched.pre).concat(matched.post);

    if (match.length > 1 && replacements.length) {
      matched.added = replacements.reduce(function (previous, current) {
        if (typeof current === "string") {
          return "".concat(previous).concat(current);
        }

        return "".concat(previous).concat(match[current.index] || "");
      }, "");
      matched.length = matched.added.length;
      matched.end = match.index + matched.length;
      matched.result = "".concat(matched.pre).concat(matched.added || "").concat(matched.post);
    }

    result.stringChanges.push(matched);
    testString = matched.post;
    index = index + 1;
  }

  if (result.stringChanges.length) {
    result.value = result.stringChanges.reduce(function (previous, current, i) {
      var added = current.added || "";
      var post = i !== result.stringChanges.length - 1 ? "" : current.post;
      return "".concat(previous).concat(current.pre).concat(added).concat(post);
    }, "");
  }

  return result;
}
// CONCATENATED MODULE: ./src/utils/to-replace/index.js

function ToReplace(search, replace) {
  return function (value) {
    var result = TMonad(value);

    if (result.stop) {
      return result;
    }

    if (result.type !== "string") {
      result = ToString(result);
    }

    try {
      var replaced = ToReplaceMeta(result.value, search, replace);
      result.value = replaced.value;
      result.valid = true;
      result.stringChanges = result.stringChanges.concat(replaced.stringChanges);
    } catch (error) {
      result.valid = false;
    }

    return TMonadUpdate(result, "string", "Replace");
  };
}
// CONCATENATED MODULE: ./src/utils/to-upper-case/index.js

function ToUpperCase(string) {
  var result = TMonad(string);

  try {
    result.value = result.value.toUpperCase();
  } catch (error) {
    result.valid = false;
  }

  return result;
}
// CONCATENATED MODULE: ./src/utils/to-lower-case/index.js

function ToLowerCase(string) {
  var result = TMonad(string);

  try {
    result.value = result.value.toLowerCase();
  } catch (error) {
    result.valid = false;
  }

  return result;
}
// CONCATENATED MODULE: ./src/utils/to-capitalize/index.js

function ToCapitalize(string) {
  var result = TMonad(string);

  try {
    result.value = "".concat(result.value.slice(0, 1).toUpperCase()).concat(result.value.slice(1) || "");
  } catch (error) {
    result.valid = false;
  }

  return result;
}
// CONCATENATED MODULE: ./src/utils/after-every-nth/index.js

function AfterEveryNth(nth, insert) {
  return function (value) {
    var result = TMonad(value);
    var pointer = 0;
    var changes = [];

    if (result.stop) {
      return result;
    }

    if (result.type !== "string") {
      result = ToString(result);
    }

    var mapper = ToMap(function (val, index) {
      var mapped = "";

      if ((index + 1) % nth === 0 && index !== 0) {
        mapped = "".concat(val).concat(insert);
        changes.push({
          start: pointer,
          end: pointer + (1 + insert.length),
          input: val,
          length: 1 + insert.length,
          result: mapped,
          added: insert
        });
        pointer = pointer + insert.length;
      } else {
        mapped = val;
        pointer = pointer + 1;
      }

      return mapped;
    });
    var r = Pipe(ToSplit(""), mapper, ToJoin(""))(result);
    r.stringChanges = r.stringChanges.concat(changes);
    r.valid = typeof r.value === "string" && r.value.length === 14;
    return r;
  };
}
// CONCATENATED MODULE: ./src/utils/before-every-nth/index.js

function BeforeEveryNth(nth, insert) {
  return function (value) {
    var result = TMonad(value);
    var pointer = 0;
    var changes = [];

    if (result.stop) {
      return result;
    }

    if (result.type !== "string") {
      result = ToString(result);
    }

    var mapper = ToMap(function (val, index) {
      var mapped = "";

      if ((index + 1) % nth === 0 && index !== 0) {
        mapped = "".concat(insert).concat(val);
        changes.push({
          start: pointer,
          end: pointer + (1 + insert.length),
          input: val,
          length: 1 + insert.length,
          result: mapped,
          added: insert
        });
        pointer = pointer + insert.length;
      } else {
        mapped = val;
        pointer = pointer + 1;
      }

      return mapped;
    });
    var r = Pipe(ToSplit(""), mapper, ToJoin(""))(result);
    r.stringChanges = r.stringChanges.concat(changes);
    r.valid = typeof r.value === "string" && r.value.length === 14;
    return r;
  };
}
// CONCATENATED MODULE: ./src/utils/to-phone/index.js

function ToPhone(value) {
  var result = TMonad(value);
  var pointer = 0;
  var changes = [];

  if (result.stop) {
    return result;
  }

  var mapper = ToMap(function (val, index) {
    var length = "".concat(result.value || "").length;
    var mapped = "";

    if (index === 0) {
      mapped = length ? "(".concat(val) : val;
      changes.push({
        start: pointer,
        end: pointer + 1,
        input: val,
        length: 1,
        result: mapped,
        added: "("
      });
      pointer = pointer + 2;
    }

    if (index === 3) {
      mapped = length > 4 ? ") ".concat(val) : val;
      changes.push({
        start: pointer,
        end: pointer + 2,
        input: val,
        length: 2,
        result: mapped,
        added: ") "
      });
      pointer = pointer + 3;
    }

    if (index === 6) {
      mapped = length > 9 ? "-".concat(val) : val;
      changes.push({
        start: pointer,
        end: pointer + 1,
        input: val,
        length: 1,
        result: mapped,
        added: "-"
      });
      pointer = pointer + 2;
    }

    if ([9, 8, 7, 5, 4, 2, 1].indexOf(index) > -1) {
      mapped = val;
      pointer = pointer + 1;
    }

    if (index > 9) {
      mapped = "";
      changes.push({
        start: pointer,
        end: pointer + 1,
        input: val,
        length: 1,
        result: mapped,
        removed: val
      });
      pointer = pointer + 1;
    }

    return mapped;
  });
  var r = Pipe(ToDigits, ToSplit(""), mapper, ToJoin(""))(result);
  r.stringChanges = r.stringChanges.concat(changes);
  r.valid = typeof r.value === "string" && r.value.length === 14;
  return r;
}
// CONCATENATED MODULE: ./src/utils/to-intl-phone/index.js

function ToIntlPhone(value) {
  var result = TMonad(value);

  if (result.stop) {
    return result;
  }

  var parts = result.value.split(" ");
  var countryCode = parts[0].indexOf("+") > -1 ? "".concat(parts.shift(), " ") : "";
  var countryCodeMonad = ToDigits(countryCode);
  var r = ToPhone(parts.join(" "));
  result.value = "+".concat(countryCodeMonad.value, " ").concat(r.value).trim();
  result.stringChanges = r.stringChanges;
  return result;
}
// CONCATENATED MODULE: ./src/utils/is-autofilled/index.js
function IsAutoFilled(input) {
  var nativeMatches = input.matches || input["msMatchesSelector"];

  try {
    return nativeMatches.call(input, ":-webkit-autofill");
  } catch (error) {
    try {
      return nativeMatches.call(input, ":-moz-autofill");
    } catch (error) {
      try {
        return nativeMatches.call(input, ":-ms-autofill");
      } catch (error) {
        try {
          return nativeMatches.call(input, ":-o-autofill");
        } catch (error) {
          try {
            return nativeMatches.call(input, ":autofill");
          } catch (error) {
            return false;
          }
        }
      }
    }
  }
}
// CONCATENATED MODULE: ./src/utils/set-caret/index.js
function SetCaret(input, position, doc) {
  if (!input || !doc || doc.activeElement !== input) {
    return;
  }

  if (input.createTextRange) {
    var range = input.createTextRange();
    range.move("character", position);
    range.select();
  } else if (input.selectionStart) {
    input.setSelectionRange(position, position);
  }

  return input;
}
// CONCATENATED MODULE: ./src/components/input-field/definitions.js
var labelPositions = ["top", "bottom", "left", "right", "inside"];
var resizeOptions = ["true", "false", "horizontal", "vertical", "auto"];
var InputFieldInputAttributes = {
  all: ["accept", "aria-describedby", "aria-labelledby", "autocomplete", "autofocus", "disabled", "id", "maxlength", "name", "placeholder", "readonly", "required", "tabindex", "value"],
  bool: ["aria-describedby", "aria-labelledby", "disabled", "id", "name", "readonly", "required", "tabindex", "value"]
};
var supportedInputTypes = ["file", "email", "password", "url", "text", "textarea", "number", "radio", "checkbox", "tel", "usphone", "intlphone", "uszip"];
var processedNullValue = function processedNullValue() {
  return {
    original: "",
    sanitized: "",
    valid: true,
    reason: []
  };
};
var processedFileValue = function processedFileValue(file) {
  return {
    original: file,
    sanitized: file,
    valid: true,
    reason: []
  };
};
// CONCATENATED MODULE: ./src/components/input-field/methods-value.js
/* eslint-disable no-fallthrough */



var setMaskPositions = function setMaskPositions(input, positions) {
  if (!input) {
    return;
  }

  if (input.setSelectionRange) {
    input.setSelectionRange(positions[0], positions[1]);
  } else if (input.createTextRange) {
    var range = input.createTextRange();
    range.collapse(true);
    range.moveEnd("character", positions[1]);
    range.moveStart("character", positions[0]);
    range.select();
  }
};
var valueToMask = function valueToMask(value, masks, positions) {
  var initial = "+_ (___) ___-____";
  var newPositions = positions.slice(0);

  if (!value) {
    return {
      value: initial,
      positions: [1, 1]
    };
  }

  var incrementPositions = function incrementPositions(index) {
    if (positions[0] > index) {
      newPositions[0] = newPositions[0] + 1;
    }

    if (positions[1] > index) {
      newPositions[1] = newPositions[1] + 1;
    }
  };

  var getAreaCode = function getAreaCode(v) {
    var parts = v.split(/\D/g);
    var i = 0;

    while (i < parts.length) {
      if (parts[i] !== "") {
        return parts[i];
      }

      i = i + 1;
    }

    return "";
  };

  var valueAreaCode = getAreaCode(value);
  var possibles = [];
  var mask;
  var i = masks.length;

  while (!mask && i--) {
    var maskAreaCode = getAreaCode(masks[i].mask);

    if (valueAreaCode === maskAreaCode) {
      mask = masks[i].mask;
      break;
    }

    if (maskAreaCode.indexOf(valueAreaCode) === 0 || valueAreaCode.indexOf(maskAreaCode) === 0) {
      possibles.push(masks[i].mask);
    }
  }

  if (!mask && possibles[0]) {
    mask = possibles[0];
  }

  if (!mask) {
    return {
      value: "",
      positions: positions
    };
  }

  var valueParts = value.split("");
  var newValue = mask.split("").map(function (_char, index) {
    if (_char === valueParts[0]) {
      valueParts.shift();
      return _char;
    }

    if (_char === "#") {
      if (!valueParts.length) {
        // incrementPositions(index)
        return "_";
      }

      var v = valueParts.shift();

      while (v && /\D/.test(v)) {
        v = valueParts.shift();
      }

      return v;
    }

    if (/\d/.test(_char)) {
      valueParts.shift();
    } else {
      incrementPositions(index);
    }

    return _char;
  });
  return {
    value: newValue.join(""),
    positions: newPositions
  };
};
var valueFromMask = function valueFromMask(value, masks) {
  if (!value) {
    return value;
  }

  var split = function split(v) {
    return v.split(/\D/g).filter(function (v) {
      return !!v;
    });
  };

  var valueParts = split(value);
  var mask;
  var i = masks.length;

  while (i--) {
    var maskCode = split(masks[i].mask)[0];

    if (valueParts[0] === maskCode || maskCode.indexOf(valueParts[0]) > -1) {
      mask = masks[i].mask;
    }
  }

  if (!mask) {
    return value;
  }
};
var masker = function masker(input, value, positions, masks) {
  var unmask = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  if (!masks || masks.length === 0) {
    return {
      input: input,
      value: value,
      newValue: value,
      masks: masks,
      positions: positions
    };
  }

  var newValue;

  if (unmask) {
    newValue = valueFromMask(value, masks);
  } else {
    newValue = valueToMask(value, masks, positions);
  }

  input.value = newValue.value || "";
  setMaskPositions(input, newValue.positions);
  return {
    input: input,
    value: value,
    newValue: newValue.value,
    masks: masks,
    positions: newValue.positions
  };
};
var inputCaretPositions = function inputCaretPositions(input) {
  return !input ? [0, 0] : [input.selectionStart || 0, input.selectionEnd || 0];
};
var clearInput = function clearInput(host) {
  return host.value = "";
};
var setError = function setError(host) {
  return function (error) {
    host.processedError = error;
    host.invalid = !error ? false : true;
  };
};
var isEmpty = function isEmpty(val) {
  return val === "" || val === null || val === undefined;
};
var methods_value_sanitizeValue = function sanitizeValue(val, type, allowhtml, disallowhtml) {
  if (Array.isArray(type)) {
    return type.map(function (t, i) {
      return sanitizeValue(val[i], t.type, allowhtml, disallowhtml);
    });
  }

  var validation;

  switch (type) {
    case "number":
    case "month":
      validation = ValidateNumber(val);
      break;

    case "radio":
    case "checkbox":
      validation = ValidateBool(val);
      break;

    case "email":
      validation = ValidateEmail(val);
      break;

    case "tel":
    case "usphone":
      validation = ValidateUsPhone(val);
      break;

    case "intlphone":
      validation = ValidateIntlPhone(val);
      break;

    case "uszip":
      validation = ValidateUsZip(val);
      break;

    case "url":
      validation = ValidateUrl(val);
      break;

    case "file":
      validation = processedFileValue(val);
      break;

    default:
      if (allowhtml || disallowhtml) {
        validation = ValidateHtml(val, allowhtml, disallowhtml);
      } else {
        validation = ValidateText(val);
      }

  }

  if (validation && !validation.valid && validation.reason[0] === "no value") {
    validation.reason.shift();
    validation.valid = true;
  }

  return validation;
};

var methods_value_getFunction = function getFunction(functionString) {
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  switch (functionString) {
    case "Slice":
    case "slice":
      return ToSlice.apply(null, args || []);

    case "Split":
    case "split":
      return ToSplit(args[0]);

    case "Join":
    case "join":
      return ToJoin(args[0]);

    case "Match":
    case "match":
      return ToMatch.call(null, args[0]);

    case "MatchAll":
      return ToMatchAll.call(null, args[0]);

    case "Replace":
    case "replace":
      return ToReplace.apply(null, args || []);

    case "UpperCase":
    case "toUpperCase":
      return ToUpperCase;

    case "LowerCase":
    case "toLowerCase":
      return ToLowerCase;

    case "Capitalize":
      return ToCapitalize;

    case "AfterEveryNth":
      return AfterEveryNth.apply(null, args || []);

    case "BeforeEveryNth":
      return BeforeEveryNth.apply(null, args || []);
  }

  return TMonad;
};

var methods_value_InputFieldFormatValue = function InputFieldFormatValue(value, format) {
  if (!format) {
    return TMonad(value);
  }

  var Format;

  if (typeof format === "string") {
    try {
      Format = JSON.parse(format).slice();
    } catch (error) {
      switch (format) {
        case "tel":
        case "telephone":
        case "phone":
        case "usphone":
          return ToPhone(value);

        case "intlphone":
          return ToIntlPhone(value);

        case "uszip":
          return ToUsZip(value);
      }

      return TMonad(value);
    }
  } else if (!Array.isArray(format)) {
    return TMonad(value);
  }

  var functions = Format.map(function (f) {
    if (!f) {
      return false;
    }

    if (!Array.isArray(f)) {
      return methods_value_getFunction(f);
    }

    return methods_value_getFunction(f.slice(0, 1)[0], f.slice(1));
  }).filter(function (f) {
    return !!f;
  });
  return Pipe.apply(null, functions)(value);
};
var maxMin = function maxMin(host, value) {
  var nonStringTypes = ["number", "checkbox", "radio", "file"];
  var valid = true;
  var errorText = "";

  if (value === undefined || value === null) {
    return {
      value: value,
      valid: valid,
      errorText: errorText
    };
  }

  if (host.type === "number") {
    if (!!host.max && host.max < value) {
      value = host.max;
    }

    if (!!host.min && host.min > value) {
      value = host.min;
    }
  }

  if (nonStringTypes.indexOf(host.type) === -1) {
    if (!!host.max && host.max < value.length) {
      value = value.slice(0, host.max);
    }

    if (!!host.min && !!value && host.min > value.length && !host.focused) {
      errorText = "Must be at least ".concat(host.min, " characters");
      valid = false;
    }
  }

  return {
    value: value,
    valid: valid,
    errorText: errorText
  };
};
var methods_value_pattern = function pattern(host, value) {
  if (!host.pattern) {
    return value;
  }

  return RemoveMeta(value, host.pattern).value;
};
var getFileValue = function getFileValue(input) {
  return !input || !input.files || input.files.length === 0 ? null : Array.from(input.files);
};

var getDroppedFiles = function getDroppedFiles(value) {
  return Array.isArray(value) && value.filter(function (f) {
    return f instanceof File;
  }).length ? value : null;
};

var methods_value_processValue = function processValue(host) {
  var input = host.elements.input;

  if (!input) {
    return;
  }

  var processed = host.processedValue;
  var sanitized = processed.sanitized;
  host.processedError = processed.reason.join(", ");
  var errors = host.validationMessage;
  var valid = (errors.length ? false : processed.valid) || !host.focused && host.valid;
  var autofilled = IsAutoFilled(input);
  var stringEmpty = (isNaN(sanitized) || typeof sanitized === "string") && !sanitized.length;
  var empty = stringEmpty && !autofilled;
  host.count = host.type === "number" ? sanitized : sanitized ? sanitized.length : 0;
  host.elements.container.classList[sanitized ? "add" : "remove"]("checked");

  if (host.type === "file") {
    var files = getDroppedFiles(sanitized) || getFileValue(input);
    var filenames = !files ? [] : files.map(function (f) {
      return f.name;
    });
    SetAttribute(host.elements.inputContainer, "title", filenames.join(", "));

    try {
      input.files = (new ClipboardEvent("").clipboardData || new DataTransfer()).files;
    } catch (error) {}

    if (!filenames.length && host.pathvalue) {
      host.notempty = true;
      return;
    } else if (filenames.length) {
      host.pathvalue = "";
    }
  } else {
    try {
      var selectionEnd = input.selectionEnd;
      var cursorPosition = selectionEnd; // masker(input, sanitized, [input.selectionStart, input.selectionEnd], countries)

      var formatted = methods_value_InputFieldFormatValue(sanitized, host.format || host.type);
      var newValue = formatted.value || "";
      var current = input.value;

      if (formatted.stringChanges && formatted.stringChanges.length) {
        formatted.stringChanges.forEach(function (change) {
          if (!!change.added && !!change.removed && change.start < cursorPosition) {
            return cursorPosition = cursorPosition + (change.added.length - change.removed.length);
          }

          if (!!change.removed && change.start < cursorPosition) {
            return cursorPosition = cursorPosition - change.removed.length;
          }

          if (!!change.added && change.start < cursorPosition) {
            return cursorPosition = cursorPosition + change.added.length;
          }
        });
      }

      input.cursorPosition = cursorPosition;

      if (current !== newValue || host.type === "intlphone") {
        input.value = newValue;

        if (formatted.stringChanges && formatted.stringChanges.length) {
          SetCaret(input, cursorPosition, host.shadowRoot);
        }
      }
    } catch (error) {}
  }

  textareaHeight(host.resize, input);
  host.notempty = !empty;

  if (valid) {
    return host.invalid = false;
  }

  if (empty) {
    return host.invalid = false;
  }

  if (!host.focused) {
    return host.invalid = true;
  }
};
// CONCATENATED MODULE: ./src/utils/get-input-value/index.js
function GetInputValue(input) {
  var type = input.type;

  if (type === "checkbox" || type === "radio") {
    return input["checked"];
  }

  if (type === "select" && input["selectedOptions"]) {
    var value = Array.from(input["selectedOptions"]).map(function (o) {
      return o.value;
    });

    if (value.length < 2) {
      return value[0];
    }

    return value;
  }

  return input.value;
}
// CONCATENATED MODULE: ./src/services/dragDrop.js
function DragDropService(element) {
  var draggables = [];
  var htmlElement = document.firstElementChild;

  var filterElements = function filterElements(elements) {
    return elements.filter(function (el) {
      return el.parentNode;
    });
  };

  var handleDataTransfer = function handleDataTransfer(dataTransfer) {
    return element.dispatchEvent(new CustomEvent("dropped", {
      detail: dataTransfer
    }));
  };

  var setUserSelect = function setUserSelect() {
    var remove = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (!remove) {
      htmlElement.style.userSelect = "none";
    } else {
      htmlElement.style.removeProperty("user-select");
    }
  };

  var startDrag = function startDrag(e) {
    var target = e.target;

    if (target && target.getAttribute("draggable") === "false") {
      return;
    }

    e.preventDefault();
    setUserSelect();
    element.dispatchEvent(new CustomEvent("dragstarted"));
  };

  var drop = function drop(e) {
    e.preventDefault();
    element.classList.remove("dragging");
    element.classList.remove("dragover");
    setUserSelect(true);
    handleDataTransfer(e.dataTransfer || e.originalEvent.dataTransfer);
  };

  var dragover = function dragover(e) {
    e.preventDefault();
    element.classList.add("dragover");
  };

  var dragleave = function dragleave(e) {
    e.preventDefault();
    element.classList.remove("dragover");
  };

  var dragend = function dragend(e) {
    e.preventDefault();
    element.classList.remove("dragging");
    element.classList.remove("dragover");
    setUserSelect(true);
    element.dispatchEvent(new CustomEvent("dragended"));
  };

  element.addEventListener("dragstart", startDrag);
  element.addEventListener("dragover", dragover);
  element.addEventListener("drop", drop);
  element.addEventListener("dragleave", dragleave);
  element.addEventListener("dragend", dragend);
  var methods = {
    get draggables() {
      return filterElements(draggables);
    },

    set draggables(elements) {
      draggables = [];
      filterElements(Array.from(elements)).forEach(function (d) {
        draggables.push(d);
      });
    },

    get dropZone() {
      return element;
    },

    destroy: function destroy() {
      element.removeEventListener("dragstart", startDrag);
      element.removeEventListener("dragover", dragover);
      element.removeEventListener("drop", drop);
      element.removeEventListener("dragleave", dragleave);
      element.removeEventListener("dragend", dragleave);
      var isDragging = element.classList.contains("dragging");

      if (isDragging) {
        element.classList.remove("dragging");
        document.body.classList.remove("dragging-elements");
      }
    }
  };
  return methods;
}
// CONCATENATED MODULE: ./src/components/input-field/methods-events.js


var methods_events_dispatch = function dispatch(host, type, data) {
  return host.dispatchEvent(new CustomEvent(type, {
    detail: data ? data : data === false ? false : host.state
  }));
};
var methods_events_onInput = function onInput(host) {
  var input = host.elements.input;
  var value = GetInputValue(input);

  if (host.type === "file") {
    value = UseIf(function (v) {
      return v.length;
    }, function () {
      return "";
    }, getFileValue(input)).value;
  }

  host.value = value;
  methods_events_dispatch(host, "inputchange", host.value);
};
var methods_events_onFocus = function onFocus(host) {
  if (host.focused) {
    return;
  }

  host.focused = true;
  host.setAttribute("focused", "true");
  methods_value_processValue(host);
  methods_events_dispatch(host, "focus", host);
};
var methods_events_onBlur = function onBlur(host) {
  if (!host.focused) {
    return;
  }

  host.focused = false;
  host.setAttribute("focused", "false");
  methods_events_dispatch(host, "blur", host);
  host.elements.input.blur();
  methods_value_processValue(host);
};
var onKeyDown = function onKeyDown(e, host) {
  if (!e) {
    return;
  }

  if (e.key && e.key.toLowerCase() === "enter" && host.type !== "textarea") {
    return onDone(host);
  }
};
var onLabelClick = function onLabelClick(e, host) {
  var input = host.elements.input;

  if (!input) {
    return;
  }

  methods_events_dispatch(host, "labelClick", host);

  if (["checkbox", "radio"].indexOf(host.type) === -1) {
    var bounceZ = host.elements.bounceZ;
    var ripple = host.elements.ripple;

    if (bounceZ) {
      bounceZ.trigger();
    }

    if (ripple) {
      ripple.trigger(e);
    }
  } else {
    input.focus();
  }
};
var onDone = function onDone(host) {
  var input = host.elements.input;

  if (!input) {
    return;
  }

  input.blur();
  var valid = host.valid;
  var error = host.validationMessage.join(", ");

  if (!valid && error) {
    return host.setError(error);
  }

  methods_events_dispatch(host, "done", {
    processedValue: host.processedValue,
    value: host.value,
    valid: valid,
    error: error
  });
};
var onInvalid = function onInvalid(host) {
  return methods_events_dispatch(host, "invalid", {
    processedValue: host.processedValue,
    value: host.value,
    error: host.validationMessage.join(", ")
  });
};
var methods_events_setDroppable = function setDroppable(host) {
  var input = host.elements.input;
  var container = host.elements.container;

  function drop(e) {
    host.value = UseIf(function (v) {
      return v.length > 0;
    }, function () {
      return "";
    }, !host.accept ? Array.from(e.detail.files) : Array.from(e.detail.files).filter(function (file) {
      return host.accept.indexOf(file.type) > -1;
    })).value;
    methods_value_processValue(host);
    methods_events_dispatch(host, "input", host.value);
  }

  if (!input || !container) {
    return;
  }

  if (container.dragDrop && typeof container.dragDrop.destroy === "function") {
    container.dragDrop.destroy();
  }

  if (container.drop$ && typeof container.drop$ === "function") {
    container.drop$();
  }

  if (container.dragended$ && typeof container.dragended$ === "function") {
    container.dragended$();
  }

  if (container.dragstarted$ && typeof container.dragstarted$ === "function") {
    container.dragstarted$();
  }

  if (!host.droppable) {
    return;
  }

  container.dragDrop = DragDropService(container);
  container.drop$ = ObserveEvent(container, "dropped").subscribe(drop);
  container.dragended$ = ObserveEvent(container, "dragended").subscribe(function () {
    return document.body.classList.remove("dragging-elements");
  });
  container.dragstarted$ = ObserveEvent(container, "dragstarted").subscribe(function () {
    return document.body.classList.add("dragging-elements");
  });
};
// CONCATENATED MODULE: ./src/components/input-field/elements.js




var input_field_elements_setStyles = function setStyles(el, styles) {
  if (!el) {
    return;
  }

  SetStyleRules(el, styles);
}; // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization

var input_field_elements_elementSelectors = Object.freeze({
  bounceZ: ".input-field-input-container effect-bounce-z",
  checkIcon: ".input-field-checkbox-icon",
  clearButton: ".input-field-clear",
  container: ".input-field-container-inner",
  count: ".input-field-character-count",
  error: ".input-field-message-error",
  help: ".input-field-message-help",
  icon: ".input-field-icon",
  inputContainer: ".input-field-input-container-inner",
  inputContainerOuter: ".input-field-input-container",
  input: ".input-field-input",
  label: ".input-field-container-inner label",
  max: ".input-field-character-count-max",
  ripple: ".input-field-input-container effect-ripple",
  root: ".input-field-container",
  underline: ".input-field-input-container effect-underline",
  injectedStyles: "style.injectedStyles",
  themeStyles: "style.themeStyles",
  filePathInput: ".input-field-file-path-overlay"
});

var elements_setInputEvents = function setInputEvents(input, host) {
  if (host.inputContainerClick$) {
    host.inputContainerClick$();
  }

  input.eventSubscriptions = {
    onFocus: ObserveEvent(input, "focus").subscribe(function () {
      return methods_events_onFocus(host);
    }),
    onBlur: ObserveEvent(input, "blur").subscribe(function () {
      return methods_events_onBlur(host);
    }),
    onKeyDown: ObserveEvent(input, "keydown").subscribe(function (e) {
      return onKeyDown(e, host);
    })
  };

  if (["checkbox", "radio"].indexOf(host.type) > -1) {
    host.inputContainerClick$ = ObserveEvent(host.elements.inputContainer, "click", {
      stopPropagation: true,
      preventDefault: true
    }).subscribe(function () {
      host.value = !host.value;
      methods_events_dispatch(host, "input", host.value);
      methods_events_dispatch(host, "inputchange", host.value);
    });
  } else if (host.type === "intlphone") {
    input.eventSubscriptions.onInput = ObserveEvent(input, "inputchange").subscribe(function (e) {
      host.value = e.detail;
    });
  } else {
    input.eventSubscriptions.onInput = ObserveEvent(input, "input").subscribe(function () {
      methods_events_onInput(host);
    });
  }
};

var elements_setElementColor = function setElementColor(element, property, color) {
  return element ? Set(element, property, color) : undefined;
};

var setColors = function setColors(host, invalid) {
  var color = invalid ? host.warningcolor : host.accentcolor;
  elements_setElementColor(host.elements.ripple, "color", color);
  elements_setElementColor(host.elements.underline, "color", color);

  if (["checkbox", "radio"].indexOf(host.type) > -1) {
    elements_setElementColor(host.elements.inputContainer, "style.color", color);
  }
};
var elements_elementMethods = {
  input: function input(_input, host) {
    methods_elements_inputAttributeList(host).forEach(function (attr) {
      return attr === "value" ? methods_elements_setInputValue(_input, host) : AddRemoveAttribute(_input, attr, host[attr]);
    });
    elements_setInputEvents(_input, host);
    methods_elements_setInputID(host, host.inputID);
    setEffects(host);
    methods_events_setDroppable(host);
  },
  clearButton: function clearButton(el, host) {
    el.eventSubscriptions = {
      click: ObserveEvent(el, "click").subscribe(function () {
        return clearInput(host);
      })
    };
  },
  label: function label(el, host) {
    el.eventSubscriptions = {
      click: ObserveEvent(el, "click").subscribe(function (e) {
        return onLabelClick(e, host);
      })
    };
  },
  ripple: function ripple(_el, host) {
    return setColors(host, host.invalid);
  },
  underline: function underline(_el, host) {
    return setColors(host, host.invalid);
  },
  injectedStyles: function injectedStyles(el, host) {
    return input_field_elements_setStyles(el, host.styles);
  },
  themeStyles: function themeStyles(el, host) {
    return input_field_elements_setStyles(el, host.theme);
  },
  icon: function icon(el, host) {
    el.eventSubscriptions = {
      click: ObserveEvent(el, "click").subscribe(function () {
        // const input = host.elements.input
        // if (input) {
        //     input.focus()
        // }
        host.dispatchEvent(new CustomEvent("iconclick", {
          detail: host
        }));
      })
    };
  },
  filePathInput: function filePathInput(el, host) {
    if (host.type === "file" && host.pathvalue) {
      el.value = host.pathvalue;
      return;
    }

    el.value = "";

    if (host.type !== "file") {
      el.style.display = "none";
    }
  }
};
var input_field_elements_elements = {}; // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization

Object.keys(input_field_elements_elementSelectors).forEach(function (key) {
  input_field_elements_elements[key] = {
    selector: input_field_elements_elementSelectors[key],
    onChange: elements_elementMethods[key] ? elements_elementMethods[key] : function () {}
  };
});
/* harmony default export */ var input_field_elements = (input_field_elements_elements);
// CONCATENATED MODULE: ./src/components/input-field/methods-elements.js



var setDefaultLabelPosition = function setDefaultLabelPosition(host) {
  return ["checkbox", "radio"].indexOf(host.type) === -1 ? "inside" : "left";
};

var tagType = function tagType(type) {
  return type === "textarea" ? "textarea" : "input";
};

var getInputType = function getInputType(tag, type) {
  if (tag === "input") {
    switch (type) {
      case "checkbox":
      case "date":
      case "email":
      case "file":
      case "number":
      case "password":
      case "radio":
      case "tel":
      case "url":
        return type;
    }

    return "text";
  }

  return false;
};

var methods_elements_setInputValue = function setInputValue(input, host) {
  SetAttribute(input, "value", host.processedValue.original);
  return input;
};
var methods_elements_setInput = function setInput(host) {
  var inputContainer = host.elements.inputContainer;

  if (!inputContainer) {
    return;
  }

  var currentInput = host.elements.input;

  if (currentInput && typeof currentInput.dispose === "function") {
    currentInput.dispose();
  }

  var filePathInput = host.elements.filePathInput;

  if (filePathInput) {
    filePathInput.style.display = host.type !== "file" ? "none" : "block";
  }

  if (host.type && Array.isArray(host.type) && host.type.length) {
    var container = document.createElement("div");
    container.className = "".concat(input_field_elements_elementSelectors.input.split(".").join(""), " multi-input");
    container.inputElements = [];
    container.focusedElement = null;
    container.tabIndex = -1;
    host.type.forEach(function (type) {
      var input = type.type === "span" ? document.createElement("span") : methods_elements_createInput(type.type);
      input.className = "input-field-input-input";
      container.appendChild(input);

      if (type.type !== "span") {
        Object.keys(type).forEach(function (key) {
          if (key !== "type") {
            input[key] = type[key];
          }
        });
        container.inputElements.push(input);
        input.eventSubscriptions = {
          input: ObserveEvent(input, "input").subscribe(function () {
            return container.dispatchEvent(new Event("input"));
          }),
          focus: ObserveEvent(input, "focus").subscribe(function () {
            if (!container.focusedElement) {
              container.dispatchEvent(new Event("focus"));
            }

            container.focusedElement = input;
          }),
          blur: ObserveEvent(input, "blur").subscribe(function () {
            if (container.focusedElement === input) {
              container.focusedElement = null;
              container.dispatchEvent(new Event("blur"));
            }
          })
        };
      }
    });

    if (!!host.value && Array.isArray(host.value)) {
      container.inputElements.forEach(function (input, index) {
        input.value = host.value[index] ? host.value[index] : "";
      });
    }

    Object.Property(container, "value", {
      get: function get() {
        return this.inputElements.map(function (i) {
          return i.value ? i.value : "";
        });
      },
      set: function set(values) {
        this.inputElements.forEach(function (inp, i) {
          return inp.value = values[i] ? values[i] : "";
        });
      }
    });
    host.elements.input = container;

    container.dispose = function () {
      container.inputElements.forEach(function (innerInput) {
        return Object.keys(innerInput.eventSubscriptions).forEach(function (key) {
          return innerInput.eventSubscriptions[key]();
        });
      });
    };

    inputContainer.appendChild(container);

    if (host.getAttribute("labelposition") === undefined) {
      host.labelposition = setDefaultLabelPosition(host);
    }

    return;
  }

  host.elements.input = ReplaceElementContents(FindElementIn(SetAttribute(host.elements.container, "input-kind", host.type), input_field_elements_elementSelectors.inputContainer), [methods_elements_createInput(host.type)]).contents[0];
};
var methods_elements_createInput = function createInput(type) {
  var tag = tagType(type);
  var input = document.createElement(tag);
  var typeAttribute = getInputType(tag, type);
  input.className = input_field_elements_elementSelectors.input.split(".").join("");

  if (typeAttribute) {
    input.setAttribute("type", typeAttribute);
  }

  return input;
};
var setEffects = function setEffects(host) {
  if (["checkbox", "radio"].indexOf(host.type) > -1) {
    host.elements.bounceZ["targets"] = [host.elements.inputContainerOuter];
  } else {
    host.elements.bounceZ["targets"] = [host.elements.inputContainerOuter];
    host.elements.ripple["targets"] = host.elements.underline["targets"] = [host.elements.input];
  }
};
var methods_elements_setInputID = function setInputID(host, value) {
  SetAttribute(host.elements.label, ["id", "for"], [value, "".concat(value, "-input")]);
  SetAttribute(host.elements.help, "id", "".concat(value, "-help"));
  methods_elements_setInputAttribute(host, ["id", "aria-labelledby", "aria-describedby"], ["".concat(value, "-input"), value, "".concat(value, "-help")]);
};
var methods_elements_inputAttributeList = function inputAttributeList(host) {
  return ["radio", "checkbox"].indexOf(host.inputType) > -1 ? InputFieldInputAttributes.bool : InputFieldInputAttributes.all;
};
var methods_elements_setInputAttribute = function setInputAttribute(host, name, value) {
  var input = host.elements.input;
  var attrs = methods_elements_inputAttributeList(host);

  var updateAttr = function updateAttr(n, v) {
    return attrs.indexOf(n) === -1 ? undefined : name === "value" ? methods_elements_setInputValue(input, host) : AddRemoveAttribute(input, n, v);
  };

  if (Array.isArray(name)) {
    name.forEach(function (n, i) {
      return updateAttr(n, value[i]);
    });
  } else {
    updateAttr(name, value);
  }
};
var methods_elements_setLabel = function setLabel(value, labelposition, host) {
  var labs = ReplaceElementContents(host.labelContainer, [SetAttribute(ReplaceElementContents(document.createElement("label"), ValidateHtml(value, [], ["script"]).sanitized || "").element, ["id", "tabIndex", "for", "class"], [host.inputID, -1, "".concat(host.inputID, "-input"), "input-field-".concat(labelposition, "-label")])]).contents[0];
  host.elements.label = labs;
};
var textareaHeight = function textareaHeight(resize, input) {
  if (input.tagName.toLowerCase() !== "textarea" || resize !== "auto") {
    return;
  }

  input.style.overflow = "hidden";
  input.style.height = "inherit";
  input.style.height = "".concat(input.scrollHeight, "px");
};
// CONCATENATED MODULE: ./src/components/input-field/properties.js







var properties_trueOrNull = function trueOrNull(val) {
  return Pipe(ToBool, IfNot(true, null))(val).value;
};

var addRemoveContainerClass = function addRemoveContainerClass(val, host, clss) {
  return host.elements.container.classList[val ? "add" : "remove"](clss);
};

var input_field_properties_onChange = function onChange() {};

var inputStates = {
  focused: {
    format: properties_trueOrNull,
    onChange: function onChange(val, host) {
      return addRemoveContainerClass(val, host, "focused");
    }
  },
  notempty: {
    format: properties_trueOrNull,
    onChange: function onChange(val, host) {
      return addRemoveContainerClass(val, SetAttribute(host, "has-value", "".concat(val)), "notempty");
    }
  },
  invalid: {
    format: function format(val) {
      return ToBool(val).value;
    },
    onChange: function onChange(val, host) {
      setColors(host, val);
      SetAttribute(host.elements.container, "valid", val);
      addRemoveContainerClass(val, host, "invalid");
    }
  },
  ready: {
    format: properties_trueOrNull,
    onChange: function onChange(val, host) {
      return addRemoveContainerClass(val, host, "ready");
    }
  },
  count: {
    format: function format(val) {
      return Pipe(ToNumber, IfInvalid(0))(val).value;
    },
    onChange: function onChange(val, host) {
      return ReplaceElementContents(host.elements.count, val);
    }
  }
};
var inputAttributes = {
  accept: {
    format: function format(val) {
      return Pipe(CommasToArray, IfInvalid(null))(val).value;
    },
    onChange: function onChange(val, host) {
      return methods_elements_setInputAttribute(host, "accept", val);
    }
  },
  autocomplete: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid(null))(val).value;
    },
    onChange: function onChange(val, host) {
      return methods_elements_setInputAttribute(host, "autocomplete", val);
    }
  },
  autofocus: {
    format: function format(val) {
      return Pipe(ToBool, IfNot(true, null))(val).value;
    },
    onChange: function onChange(val, host) {
      return methods_elements_setInputAttribute(host, "autofocus", val);
    }
  },
  disabled: {
    format: function format(val) {
      return Pipe(ToBool, IfNot(true, null))(val).value;
    },
    onChange: function onChange(val, host) {
      methods_elements_setInputAttribute(host, "disabled", val);
      addRemoveContainerClass(val, host, "disabled");
    }
  },
  maxlength: {
    format: function format(val) {
      return Pipe(ToNumber, IfInvalid(null))(val).value;
    },
    onChange: function onChange(val, host) {
      ReplaceElementContents(host.elements.max, val || "");
      addRemoveContainerClass(val, host, "maxlength");
      methods_value_processValue(host);
    }
  },
  max: {
    format: function format(val) {
      return Pipe(ToNumber, IfInvalid(null))(val).value;
    },
    onChange: function onChange(val, host) {
      ReplaceElementContents(host.elements.max, val || "");
      addRemoveContainerClass(val, host, "max");
      methods_value_processValue(host);
    }
  },
  min: {
    format: function format(val) {
      return Pipe(ToNumber, IfInvalid(null))(val).value;
    },
    onChange: function onChange(val, host) {
      addRemoveContainerClass(val, host, "min");
      methods_value_processValue(host);
    }
  },
  name: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid(null))(val).value;
    },
    onChange: function onChange(val, host) {
      return methods_elements_setInputAttribute(host, "name", val);
    }
  },
  pattern: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid(null))(val).value;
    },
    onChange: function onChange(_val, host) {
      return methods_value_processValue(host);
    }
  },
  placeholder: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid(null))(val).value;
    },
    onChange: function onChange(val, host) {
      return methods_elements_setInputAttribute(host, "placeholder", val);
    }
  },
  readonly: {
    format: properties_trueOrNull,
    onChange: function onChange(val, host) {
      return methods_elements_setInputAttribute(host, "readonly", val);
    }
  },
  required: {
    format: properties_trueOrNull,
    onChange: function onChange(val, host) {
      return methods_elements_setInputAttribute(host, "required", val);
    }
  },
  step: {
    format: function format(val) {
      return Pipe(ToNumber, IfInvalid(null))(val).value;
    },
    onChange: function onChange(val, host) {
      return methods_elements_setInputAttribute(host, "step", val);
    }
  },
  tabindex: {
    format: function format(val) {
      return Pipe(ToNumber, IfInvalid(0))(val).value;
    },
    onChange: function onChange(val, host) {
      return methods_elements_setInputAttribute(host, "tabIndex", val);
    }
  },
  type: {
    format: function format(val) {
      return Pipe(ToArray, IfInvalid(val))(val).value || "text";
    },
    onChange: function onChange(_val, host) {
      return methods_elements_setInput(host);
    }
  },
  value: {
    format: function format(val) {
      return val;
    },
    onChange: function onChange(_val, host) {
      return methods_value_processValue(host);
    }
  }
};
var inputFieldProperties = {
  accentcolor: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid("#59a2d8"))(val).value;
    },
    onChange: function onChange(_val, host) {
      return setColors(host, host.invalid);
    }
  },
  allowhtml: {
    format: function format(val) {
      return Pipe(CommasToArray, IfInvalid(null))(val).value;
    },
    onChange: input_field_properties_onChange
  },
  "class": ComponentClassObject,
  clearbutton: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid(null))(val).value;
    },
    onChange: function onChange(val, host) {
      SetAttribute(host.elements.clearButton, "type", val);
      addRemoveContainerClass(!!val, host, "clearbutton");
    }
  },
  disablefilter: {
    format: function format(val) {
      return ToBool(val).value;
    },
    onChange: function onChange(val, host) {
      return addRemoveContainerClass(val, host, "disablefilter");
    }
  },
  disallowhtml: {
    format: function format(val) {
      return Pipe(CommasToArray, IfInvalid(null))(val).value;
    },
    onChange: input_field_properties_onChange
  },
  droppable: {
    format: function format(val) {
      return ToBool(val).value;
    },
    onChange: function onChange(_val, host) {
      return methods_events_setDroppable(host);
    }
  },
  format: {
    format: function format(val) {
      return Pipe(to_object_ToObject, IfInvalid(Pipe(ToString, IfInvalid(null))(val).value))(val).value;
    },
    onChange: function onChange(_val, host) {
      return methods_value_processValue(host);
    }
  },
  helptext: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid(""))(val).value;
    },
    onChange: function onChange(val, host) {
      return ReplaceElementContents(host.elements.help, ValidateHtml(val, [], ["script"]).sanitized || "");
    }
  },
  icon: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid(null))(val).value;
    },
    onChange: function onChange(val, host) {
      if (val) {
        SetAttribute(host.elements.icon, val.slice(0, 5) === "<svg " ? "svg" : "type", val);
      }

      addRemoveContainerClass(val, host, "icon");
    }
  },
  iconalign: {
    format: function format(val) {
      return typeof val === "string" && (val === "left" || val === "right") ? val : "left";
    },
    onChange: function onChange(val, host) {
      return SetAttribute(host.elements.container, "icon-align", val);
    }
  },
  inputID: {
    format: function format(val) {
      return val ? val : "";
    },
    onChange: function onChange(val, host) {
      return methods_elements_setInputID(host, val);
    }
  },
  // Needs to be before the label property otherwise won't be able to find labelContainer in computed
  labelposition: {
    format: function format(val, host) {
      return Pipe(IndexOf(labelPositions), IfInvalid(setDefaultLabelPosition(host)))(val).value;
    },
    onChange: function onChange(val, host) {
      SetAttribute(host.elements.container, "label-position", val);
      methods_elements_setLabel(host.label, val, host);
    }
  },
  label: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid(""))(val).value;
    },
    onChange: function onChange(val, host) {
      return methods_elements_setLabel(val, host.labelposition, host);
    }
  },
  musthave: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid(null))(val).value;
    }
  },
  matchinput: {
    format: function format(val) {
      return val;
    }
  },
  pathvalue: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid(""))(val).value;
    },
    onChange: function onChange(val, host) {
      var filePathInput = host.elements.filePathInput;

      if (!filePathInput || host.type !== "file") {
        return;
      }

      filePathInput.value = val.split("/").pop();
      methods_value_processValue(host);
    }
  },
  processedError: {
    format: function format(val) {
      return ValidateHtml(Pipe(ToString, IfInvalid(""))(val).value, [], ["script"]).sanitized || "";
    },
    onChange: function onChange(val, host) {
      return val ? ReplaceElementContents(host.elements.error, val) : undefined;
    }
  },
  resize: {
    format: function format(val) {
      return Pipe(IndexOf(resizeOptions), IfInvalid("auto"))(val).value;
    },
    onChange: function onChange(val, host) {
      return SetAttribute(host.elements.container, "resize", val);
    }
  },
  showcount: {
    format: properties_trueOrNull,
    onChange: function onChange(val, host) {
      return addRemoveContainerClass(val, host, "showcount");
    }
  },
  styles: {
    format: function format(val) {
      return typeof val === "string" ? val : "";
    },
    onChange: function onChange(val, host) {
      return input_field_elements_setStyles(host.elements.injectedStyles, val);
    }
  },
  theme: {
    format: function format(val) {
      return typeof val === "string" ? val : "";
    },
    onChange: function onChange(val, host) {
      return input_field_elements_setStyles(host.elements.themeStyles, val);
    }
  },
  warningcolor: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid("#a10005"))(val).value;
    },
    onChange: function onChange(_val, host) {
      return setColors(host, host.invalid);
    }
  }
};
var input_field_properties_observedAttributes = Object.keys(inputAttributes) // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization
.concat(Object.keys(inputFieldProperties), Object.keys(inputStates)); // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization

var input_field_properties_properties = Object.assign({}, inputAttributes, inputFieldProperties, inputStates);
// CONCATENATED MODULE: ./src/components/input-field/computed.js




var processedErrorText = function processedErrorText(sanitized) {
  return sanitized && sanitized.reason ? sanitized.reason.join(", ") : "";
};

var computed_multiProcessedValue = function multiProcessedValue(host, value) {
  var sanitized = host.type.map(function (t, i) {
    return methods_value_sanitizeValue(value[i], t.type, host.allowhtml, host.disallowhtml);
  });
  host.processedError = sanitized.map(processedErrorText).filter(function (s) {
    return !!s;
  }).join(", ");
  return sanitized;
};

var computed_getVal = function getVal(host, value) {
  var sanitized = methods_value_sanitizeValue(value, host.type, host.allowhtml, host.disallowhtml);
  var maxMined = maxMin(host, methods_value_pattern(host, sanitized.sanitized));
  var mustHaveValid = true;
  var matchInputValid = true;

  if (host.musthave) {
    mustHaveValid = new RegExp(host.musthave, "g").test(maxMined.value);
  }

  if (host.matchinput) {
    matchInputValid = maxMined.value === Object(utils_get["a" /* Get */])(host, "matchinput.value");
  }

  sanitized.valid = sanitized.valid && maxMined.valid && mustHaveValid && matchInputValid;

  if (maxMined.errorText) {
    sanitized.reason.push(maxMined.errorText);
  }

  if (!mustHaveValid) {
    sanitized.reason.push("Invalid value.");
  }

  if (!matchInputValid) {
    var toMatch = host.matchinput;
    var label = toMatch.label || toMatch.getAttribute("label");
    var placeholder = toMatch.placeholder || toMatch.getAttribute("placeholder");
    var name = toMatch.name || toMatch.getAttribute("name");
    var toMatchName = label || placeholder || name;
    sanitized.reason.push("Value does not match".concat(toMatchName ? " '".concat(toMatchName, "'") : "", "."));
  }

  host.processedError = processedErrorText(sanitized);
  sanitized.sanitized = maxMined.value;
  return sanitized;
};

var computed_processedValue = function processedValue(host) {
  return {
    get: function get() {
      var value = Object(utils_get["a" /* Get */])(host.state, "value.value");

      if (isEmpty(value)) {
        return processedNullValue();
      }

      return computed_getVal(host, value);
    }
  };
};
var computed_multiFormattedValue = function multiFormattedValue(host, value) {
  var sanitized = host.type.map(function (t, i) {
    return methods_value_sanitizeValue(methods_value_InputFieldFormatValue(value[i], host.format || t.type).value, t.type, host.allowhtml, host.disallowhtml);
  });
  var values = [];
  var errors = [];
  sanitized.forEach(function (s) {
    values.push(s.sanitized);
    errors.push(processedErrorText(s));
  });
  host.processedError = errors.filter(function (s) {
    return !!s;
  }).join(", ");
  return values;
};
var computed_formattedValue = function formattedValue(host) {
  return {
    get: function get() {
      var value = Object(utils_get["a" /* Get */])(host.state, "value.value");

      if (isEmpty(value)) {
        return processedNullValue().sanitized;
      }

      var formatted = methods_value_InputFieldFormatValue(value, host.format || host.type);
      return computed_getVal(host, formatted.value).sanitized;
    }
  };
};
var labelContainer = function labelContainer(host) {
  return {
    get: function get() {
      if (!host.shadowRoot) {
        return;
      }

      return host.shadowRoot.querySelector(".input-field-label-".concat(host.labelposition));
    }
  };
};
var computed_valid = function valid(host) {
  return {
    get: function get() {
      return (!host.processedError || host.processedError === "") && Object(utils_get["a" /* Get */])(host, "elements.input.validity.valid");
    }
  };
};
var computed_validationMessage = function validationMessage(host) {
  return {
    get: function get() {
      return [host.processedError, Object(utils_get["a" /* Get */])(host, "elements.input.validationMessage")].filter(function (m) {
        return !!m;
      });
    }
  };
};
// CONCATENATED MODULE: ./src/components/input-field/index.js
// eslint-disable-next-line tree-shaking/no-side-effects-in-initialization





 // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization

var input_field_style = __webpack_require__(55).toString(); // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization


var input_field_template = __webpack_require__(56);

var input_field_componentName = "input-field";
var input_field_componentRoot = ".input-field-container";
var InputField = WCConstructor({
  componentName: input_field_componentName,
  componentRoot: input_field_componentRoot,
  template: input_field_template,
  style: input_field_style,
  observedAttributes: input_field_properties_observedAttributes,
  properties: input_field_properties_properties,
  elements: input_field_elements,
  methods: {
    setError: setError
  },
  computed: {
    processedValue: computed_processedValue,
    formattedValue: computed_formattedValue,
    labelContainer: labelContainer,
    valid: computed_valid,
    validationMessage: computed_validationMessage
  },
  getters: {
    value: function value(host) {
      return host.formattedValue;
    },
    invalid: function invalid(host) {
      return !host.valid;
    }
  },
  setters: {
    value: function value(host) {
      return function (value) {
        return host.state.value.next(value);
      };
    }
  },
  onConnected: function onConnected(host) {
    host.inputID = ID();
    setEffects(host);
    requestAnimationFrame(function () {
      host.elements.checkIcon.svg = "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"stroke:currentColor;stroke-width:2px;\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z\"/></svg>";
    });
  }
});
WCDefine(input_field_componentName, InputField);
// CONCATENATED MODULE: ./src/components/overlay-content/index.js
 // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization

var overlay_content_style = __webpack_require__(57).toString();

var overlay_content_setStyles = function setStyles(el, styles) {
  if (!el) {
    return;
  }

  SetStyleRules(el, styles);
};
var overlay_content_alignments = ["center", "left", "right", "top", "bottom", "center center", "center top", "center bottom", "left center", "left top", "left bottom", "right center", "right top", "right bottom"];

var overlay_content_template = __webpack_require__(58);

var overlay_content_componentName = "overlay-content";
var overlay_content_componentRoot = ".overlay-content-container";
var positionPadding = 40;
var overlay_content_elements = {};
var overlay_content_elementSelectors = {
  root: overlay_content_componentRoot,
  contentContainer: ".overlay-content-content-container",
  contentInner: ".overlay-content-content-inner",
  inner: ".overlay-content-container-inner",
  themeStyles: "style.themeStyles",
  injectedStyles: "style.injectedStyles"
}; // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization

Object.keys(overlay_content_elementSelectors).forEach(function (key) {
  overlay_content_elements[key] = {
    selector: overlay_content_elementSelectors[key],
    onChange: key === "injectedStyles" ? function (el, host) {
      return overlay_content_setStyles(el, host.styles);
    } : function () {}
  };
});
var overlay_content_widths = ["content", "target"];
var overlay_content_attributes = {
  target: {
    format: function format(val) {
      return val instanceof HTMLElement ? val : null;
    }
  },
  align: {
    format: function format(val) {
      return Pipe(IndexOf(overlay_content_alignments), IfInvalid("center"))(val).value;
    }
  },
  from: {
    format: function format(val) {
      return Pipe(IndexOf(overlay_content_alignments), IfInvalid("center"))(val).value;
    }
  },
  speed: {
    format: function format(val) {
      return Pipe(ToNumber, IfInvalid(333))(val).value;
    }
  },
  "class": ComponentClassObject,
  widthbasis: {
    format: function format(val) {
      return Pipe(IndexOf(overlay_content_widths), IfInvalid("content"))(val).value;
    }
  },
  theme: {
    format: function format(val) {
      return typeof val === "string" ? val : "";
    },
    onChange: function onChange(val, host) {
      return overlay_content_setStyles(host.elements.themeStyles, val);
    }
  },
  styles: {
    format: function format(val) {
      return typeof val === "string" ? val : "";
    },
    onChange: function onChange(val, host) {
      return overlay_content_setStyles(host.elements.injectedStyles, val);
    }
  }
};

var getWidth = function getWidth(host) {
  var targetWidth = host.target ? "".concat(host.target.getBoundingClientRect().width, "px") : "auto";
  return {
    width: !host.widthbasis || host.widthbasis === "content" ? "auto" : targetWidth,
    minWidth: targetWidth
  };
};

var setPositions = function setPositions(host) {
  return function () {
    cancelAnimationFrame(host.positionTimer);
    var target = host.target;

    if (!host.showing || !target) {
      return;
    }

    var container = host.elements.contentContainer;
    var inner = host.elements.inner;
    var rootBox = host.elements.root.getBoundingClientRect();

    if (rootBox.y !== 0) {
      inner.style.top = "-".concat(rootBox.y, "px");
    }

    if (rootBox.x !== 0) {
      inner.style.left = "-".concat(rootBox.x, "px");
    }

    if (rootBox.width !== document.documentElement.clientWidth) {
      inner.style.width = "".concat(document.documentElement.clientWidth, "px");
    }

    if (rootBox.height !== document.documentElement.clientHeight) {
      inner.style.height = "".concat(document.documentElement.clientHeight, "px");
    }

    var targetBox = target.getBoundingClientRect();
    var isOnTop = host.isOnTop;

    if (targetBox.top - 10 > document.documentElement.clientHeight || targetBox.bottom + 10 < 0) {
      return host.hide();
    }

    var widths = getWidth(host);
    container.style.width = widths.width;
    container.style.minWidth = widths.minWidth;
    container.style.height = "auto";
    container.style.maxHeight = "".concat(host.height, "px");
    var left = targetBox.left + container.offsetWidth >= window.innerWidth - 10 ? targetBox.right - container.offsetWidth : targetBox.left;
    container.style.left = "".concat(left, "px");
    container.style.top = "".concat(isOnTop ? targetBox.top - container.offsetHeight : host.spaceAbove + targetBox.height, "px");
    var origin = "center ".concat(isOnTop ? "bottom" : "top");
    host.width = container.offsetWidth;
    container.style.transformOrigin = "".concat(origin);

    if (inner.classList.contains("bottom") && isOnTop) {
      inner.classList.remove("bottom");
    }

    if (!inner.classList.contains("bottom") && !isOnTop) {
      inner.classList.add("bottom");
    }

    host.positionTimer = requestAnimationFrame(function () {
      setPositions(host)();
    });
  };
};

var OverlayContent = WCConstructor({
  componentName: overlay_content_componentName,
  componentRoot: overlay_content_componentRoot,
  template: overlay_content_template,
  style: overlay_content_style,
  observedAttributes: Object.keys(overlay_content_attributes),
  // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization
  properties: Object.assign({}, {
    positionTimer: {
      format: function format(val) {
        return val;
      }
    },
    showing: {
      format: function format(val) {
        return ToBool(val).value;
      }
    },
    width: {
      format: function format(val) {
        return val;
      },
      onChange: function onChange(_val, host) {
        host.dispatchEvent(new CustomEvent("widthchange", {
          detail: host
        }));
      }
    }
  }, overlay_content_attributes),
  computed: {
    height: function height(host) {
      return {
        get: function get() {
          return (host.isOnTop ? host.spaceAbove : host.spaceBelow) - positionPadding;
        }
      };
    },
    isOnTop: function isOnTop(host) {
      return {
        get: function get() {
          return host.spaceAbove > host.spaceBelow;
        }
      };
    },
    spaceAbove: function spaceAbove(host) {
      return {
        get: function get() {
          return host.target ? host.target.getBoundingClientRect().top : 0;
        }
      };
    },
    spaceBelow: function spaceBelow(host) {
      return {
        get: function get() {
          return document.documentElement.clientHeight - (host.spaceAbove + (host.target ? host.target.getBoundingClientRect().height : 0));
        }
      };
    },
    position: function position(host) {
      return {
        get: function get() {
          var container = host.elements.contentContainer;

          if (!container) {
            return {
              top: 0,
              y: 0,
              bottom: 0,
              left: 0,
              x: 0,
              right: 0,
              width: 0,
              height: 0,
              scrollTop: 0,
              scrollLeft: 0
            };
          }

          var box = container.getBoundingClientRect();
          return {
            top: box.top,
            y: box.y,
            bottom: box.bottom,
            left: box.left,
            x: box.x,
            right: box.right,
            width: box.width,
            height: box.height,
            scrollTop: container.scrollTop,
            scrollLeft: container.scrollLeft
          };
        }
      };
    }
  },
  methods: {
    scrollContent: function scrollContent(host) {
      return function (x, y) {
        var container = host.elements.contentContainer;
        container.scrollTop = y;
        container.scrollLeft = x;
      };
    },
    show: function show(host) {
      return function () {
        if (host.showing) {
          return Promise.resolve();
        }

        return new Promise(function (resolve) {
          host.elements.root.classList.add("activating");
          host.showing = true;
          setPositions(host)();
          var scalePoints = GetCurve([0, 1.02, 0.99, 1]);
          var timeout = GetCurve([0, host.speed / scalePoints.length]);
          var widths = getWidth(host);
          var container = host.elements.contentContainer;
          container.style.width = widths.width;
          container.style.minWidth = widths.minWidth;

          var loop = function loop() {
            if (!host.showing) {
              return Promise.resolve();
            }

            var scalePoint = scalePoints.shift();
            var time = timeout[scalePoints.length];
            container.style.transform = "scale(1, ".concat(scalePoint, ")");

            if (scalePoints.length) {
              setTimeout(function () {
                return loop();
              }, time);
            } else {
              host.elements.root.classList.add("active");
              host.elements.root.classList.remove("activating");
              resolve();
              host.dispatchEvent(new CustomEvent("shown"));
            }
          };

          loop();
        });
      };
    },
    hide: function hide(host) {
      return function () {
        if (!host.showing) {
          return Promise.resolve();
        }

        return new Promise(function (resolve) {
          host.elements.root.classList.remove("activating");
          host.showing = false;
          var scalePoints = GetCurve([1, 0]);
          var timeout = GetCurve([0, host.speed / scalePoints.length]);
          var container = host.elements.contentContainer;

          var loop = function loop() {
            if (host.showing) {
              return resolve();
            }

            var scalePoint = scalePoints.shift();
            var time = timeout[scalePoint.length];
            container.style.transform = "scale(1, ".concat(scalePoint, ")");

            if (scalePoints.length) {
              setTimeout(function () {
                return loop();
              }, time);
            } else {
              host.elements.root.classList.remove("active");
              resolve();
              host.dispatchEvent(new CustomEvent("hidden"));
            }
          };

          loop();
        });
      };
    }
  },
  elements: overlay_content_elements
});
WCDefine(overlay_content_componentName, OverlayContent);
// CONCATENATED MODULE: ./src/utils/event-name/index.js
var events = {
  transitionend: {
    transition: "transitionend",
    OTransition: "oTransitionEnd",
    MozTransition: "transitionend",
    WebkitTransition: "webkitTransitionEnd",
    msTransition: "msTransitionEnd"
  },
  transitionstart: {
    transition: "transitionstart",
    OTransition: "oTransitionStart",
    MozTransition: "transitionstart",
    WebkitTransition: "webkitTransitionStart",
    msTransition: "msTransitionStart"
  }
};
var event_name_el = document.createElement("fake-element");
function EventName(key) {
  if (!events[key]) {
    return "";
  }

  var e;

  for (e in events[key]) {
    if (event_name_el.style[e] !== undefined) {
      return events[key][e];
    }
  }

  return "";
}
// CONCATENATED MODULE: ./src/components/overlay-message/index.js
 // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization

var overlay_message_style = __webpack_require__(59).toString(); // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization


var overlay_message_template = __webpack_require__(60);

var overlay_message_componentName = "overlay-message";
var overlay_message_componentRoot = ".".concat(overlay_message_componentName, "-container");

var overlay_message_setStyles = function setStyles(el, styles) {
  if (!el) {
    return;
  }

  SetStyleRules(el, styles);
};

var overlay_message_setShown = function setShown(host) {
  var root = host.elements.root;

  if (!root) {
    return;
  }

  var endEventName = EventName("transitionend");

  var dispatch = function dispatch() {
    return host.dispatchEvent(new CustomEvent(host.shown ? "opened" : "closed", {
      detail: host
    }));
  };

  if (endEventName) {
    root.addEventListener(endEventName, function startEvent() {
      root.removeEventListener(endEventName, startEvent);
      requestAnimationFrame(dispatch);
    });
  } else {
    requestAnimationFrame(dispatch);
  }

  root.classList[host.shown ? "add" : "remove"]("shown");
};

var setColorTheme = function setColorTheme(host) {
  var root = host.elements.root;

  if (!root) {
    return;
  }

  root.setAttribute("colortheme", host.colortheme);
};

var overlay_message_setCloseButton = function setCloseButton(host) {
  Array.from(host.querySelectorAll("*")).forEach(function (el) {
    try {
      Object(utils_get["a" /* Get */])(el, "eventSubscriptions.closeOverlay", function () {})();
    } catch (error) {}
  });

  if (!host.closeselector) {
    return;
  }

  Array.from(host.querySelectorAll(host.closeselector)).forEach(function (el) {
    return Set(el, "eventSubscriptions.closeOverlay", ObserveEvent(el, "click").subscribe(function () {
      return host.shown = false;
    }));
  });
};

var overlay_message_properties = {
  "class": ComponentClassObject,
  shown: {
    format: function format(val) {
      return Pipe(ToBool, IfInvalid(false))(val).value;
    },
    onChange: function onChange(_val, host) {
      return overlay_message_setShown(host);
    }
  },
  colortheme: {
    format: function format(val) {
      return Pipe(IndexOf(["dark", "light", "transparent"]), IfInvalid("light"))(val).value;
    },
    onChange: function onChange(_val, host) {
      return setColorTheme(host);
    }
  },
  closeselector: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid("[overlay-message-close]"))(val).value;
    },
    onChange: function onChange(_val, host) {
      return overlay_message_setCloseButton(host);
    }
  },
  styles: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid(""))(val).value;
    },
    onChange: function onChange(val, host) {
      return overlay_message_setStyles(host.elements.injectedStyles, val);
    }
  },
  theme: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid(""))(val).value;
    },
    onChange: function onChange(val, host) {
      return overlay_message_setStyles(host.elements.themeStyles, val);
    }
  }
};
var overlay_message_observedAttributes = Object.keys(overlay_message_properties);
var overlay_message_elements = {
  root: {
    selector: overlay_message_componentRoot,
    onChange: function onChange(_el, host) {
      setColorTheme(host);
      overlay_message_setShown(host);
    }
  },
  injectedStyles: {
    selector: "style.injectedStyles",
    onChange: function onChange(el, host) {
      return overlay_message_setStyles(el, host.styles);
    }
  },
  themeStyles: {
    selector: "style.themeStyles",
    onChange: function onChange(el, host) {
      return overlay_message_setStyles(el, host.theme);
    }
  }
};
var OverlayMessage = WCConstructor({
  componentName: overlay_message_componentName,
  componentRoot: overlay_message_componentRoot,
  template: overlay_message_template,
  style: overlay_message_style,
  observedAttributes: overlay_message_observedAttributes,
  properties: overlay_message_properties,
  elements: overlay_message_elements,
  onDisconnected: function onDisconnected(host) {
    ObserverUnsubscribe(host);
  },
  onConnected: function onConnected(host) {
    host.subscriptions = {
      slots: ObserveSlots(host, true).subscribe(function () {
        return overlay_message_setCloseButton(host);
      })
    };
  }
});
WCDefine(overlay_message_componentName, OverlayMessage);
// CONCATENATED MODULE: ./src/components/progress-bar/index.js

 // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization

var progress_bar_style = __webpack_require__(61).toString(); // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization


var progress_bar_template = __webpack_require__(62);

var progress_bar_componentName = "progress-bar";
var progress_bar_componentRoot = ".".concat(progress_bar_componentName, "-container");
var types = ["bar", "circle"];
var animations = ["indeterminate", "linear", "volley"];

var progress_bar_setStyles = function setStyles(el, styles) {
  return el ? SetStyleRules(el, styles) : undefined;
};

var setVisible = function setVisible(val, root) {
  return root ? root.classList[val ? "add" : "remove"]("visible") : undefined;
};

var setOverlay = function setOverlay(val, root) {
  return root ? root.classList[val ? "add" : "remove"]("overlay") : undefined;
};

var setPercentage = function setPercentage(val, root) {
  return root ? root.classList[val ? "add" : "remove"]("percentage") : undefined;
};

var setScrimColor = function setScrimColor(val, root) {
  return root ? val ? root.style.backgroundColor = val : root.style.removeProperty("background-color") : undefined;
};

var setTrack = function setTrack(val, root) {
  return root ? root.classList[val ? "add" : "remove"]("track") : undefined;
};

var setScrimBlur = function setScrimBlur(val, root) {
  return root ? root.style.backdropFilter = "blur(".concat(val, "px)") : undefined;
};

var setThickness = function setThickness(val, el) {
  return el ? el.style.height = val : undefined;
};

var progress_bar_setHeading = function setHeading(val, el) {
  return el ? el.innerHTML = ValidateHtml(val, [], ["script"]).sanitized : undefined;
};

var progress_bar_setText = function setText(val, el) {
  return el ? el.innerHTML = ValidateHtml(val, [], ["script"]).sanitized : undefined;
};

var setColor = function setColor(val, el) {
  return el && val ? el.style.color = val : el ? el.style.removeProperty("color") : undefined;
};

var setAnimation = function setAnimation(val, root) {
  return root ? root.setAttribute("animation", val) : undefined;
};

var setScrim = function setScrim(val, root) {
  if (!root) {
    return;
  }

  if (!val) {
    root.style.removeProperty("background-color");
  }

  root.classList[val ? "add" : "remove"]("scrim");
};

var progress_bar_setButton = function setButton(val, el) {
  if (val && el) {
    el.classList.add("show");
    el.innerHTML = ValidateHtml(val, [], ["script"]).sanitized;
  } else if (el) {
    el.classList.remove("show");
  }
};

var setValues = function setValues(vals, host) {
  var top = host.elements.top;
  var bottom = host.elements.bottom;
  var percentage = host.elements.percentage;
  var mainVal = "".concat(Math.min(100, vals[0] || 0), "%");
  var secondaryVal = "".concat(Math.min(100, vals[1] || 0), "%");

  if (!top || !bottom) {
    return;
  }

  top.style.width = mainVal;
  bottom.style.width = secondaryVal;
  percentage.textContent = mainVal;
};

var progress_bar_properties = {
  "class": ComponentClassObject,
  styles: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid(""))(val).value;
    },
    onChange: function onChange(val, host) {
      return progress_bar_setStyles(host.elements.injectedStyles, val);
    }
  },
  theme: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid(""))(val).value;
    },
    onChange: function onChange(val, host) {
      return progress_bar_setStyles(host.elements.themeStyles, val);
    }
  },
  value: {
    format: function format(val) {
      return Pipe(CommasToArray, IfInvalid([val]), ToMap(function (v) {
        return isNaN(parseInt(v)) ? 0 : parseInt(v);
      }))(val).value;
    },
    onChange: function onChange(val, host) {
      setValues(val, host);
    }
  },
  color: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid(null))(val).value;
    },
    onChange: function onChange(val, host) {
      setColor(val, host.elements.trackInner);
    }
  },
  button: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid(null))(val).value;
    },
    onChange: function onChange(val, host) {
      progress_bar_setButton(val, host.elements.button);
    }
  },
  text: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid(""))(val).value;
    },
    onChange: function onChange(val, host) {
      progress_bar_setText(val, host.elements.text);
    }
  },
  header: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid(""))(val).value;
    },
    onChange: function onChange(val, host) {
      progress_bar_setHeading(val, host.elements.header);
    }
  },
  percentage: {
    format: function format(val) {
      return Pipe(ToBool, IfInvalid(true))(val).value;
    },
    onChange: function onChange(val, host) {
      setPercentage(val, host.elements.root);
    }
  },
  thickness: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid("3px"))(val).value;
    },
    onChange: function onChange(val, host) {
      setThickness(val, host.elements.container);
    }
  },
  visible: {
    format: function format(val) {
      return Pipe(ToBool, IfInvalid(false))(val).value;
    },
    onChange: function onChange(val, host) {
      setVisible(val, host.elements.root);
    }
  },
  overlay: {
    format: function format(val) {
      return Pipe(ToBool, IfInvalid(true))(val).value;
    },
    onChange: function onChange(val, host) {
      setOverlay(val, host.elements.root);
    }
  },
  scrim: {
    format: function format(val) {
      return Pipe(ToBool, IfInvalid(true))(val).value;
    },
    onChange: function onChange(val, host) {
      setScrim(val, host.elements.root);
    }
  },
  track: {
    format: function format(val) {
      return Pipe(ToBool, IfInvalid(true))(val).value;
    },
    onChange: function onChange(val, host) {
      setTrack(val, host.elements.root);
    }
  },
  scrimcolor: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid("rgba(0,0,0,0.84)"))(val).value;
    },
    onChange: function onChange(val, host) {
      setScrimColor(val, host.elements.root);
    }
  },
  scrimblur: {
    format: function format(val) {
      return Pipe(ToNumber, IfInvalid(0))(val).value;
    },
    onChange: function onChange(val, host) {
      setScrimBlur(val, host.elements.root);
    }
  },
  animation: {
    format: function format(val) {
      return Pipe(IndexOf(animations), IfInvalid(animations[0]))(val).value;
    },
    onChange: function onChange(val, host) {
      setAnimation(val, host.elements.root);
    }
  },

  /** TODO */
  type: {
    format: function format(val) {
      return Pipe(IndexOf(types), IfInvalid(types[0]))(val).value;
    }
  }
};
var progress_bar_observedAttributes = Object.keys(progress_bar_properties);
var progress_bar_elements = {
  root: {
    selector: progress_bar_componentRoot,
    onChange: function onChange(el, host) {
      setOverlay(host.overlay, el);
      setScrim(host.scrim, el);
      setScrimColor(host.scrimcolor, el);
      setVisible(host.visible, el);
      setTrack(host.visible, el);
      setScrimBlur(host.scrimblur, el);
      setPercentage(host.percentage, el);
      setAnimation(host.animation, el);
    }
  },
  injectedStyles: {
    selector: "style.injectedStyles",
    onChange: function onChange(el, host) {
      return progress_bar_setStyles(el, host.styles);
    }
  },
  themeStyles: {
    selector: "style.themeStyles",
    onChange: function onChange(el, host) {
      return progress_bar_setStyles(el, host.theme);
    }
  },
  container: {
    selector: ".progress-bar-inner",
    onChange: function onChange(el, host) {
      setThickness(host.thickness, el);
    }
  },
  trackInner: {
    selector: ".progress-bar-track-inner",
    onChange: function onChange(el, host) {
      setColor(host.color, el);
    }
  },
  header: {
    selector: ".progress-bar-header",
    onChange: function onChange(el, host) {
      progress_bar_setHeading(host.header, el);
    }
  },
  text: {
    selector: ".progress-bar-text",
    onChange: function onChange(el, host) {
      progress_bar_setText(host.text, el);
    }
  },
  button: {
    selector: ".progress-bar-button",
    onChange: function onChange(el, host) {
      el.eventSubscriptions = {
        click: ObserveEvent(el, "click").subscribe(function () {
          return host.dispatchEvent(new CustomEvent("buttonclick", {
            detail: host
          }));
        })
      };
      progress_bar_setButton(host.button, el);
    }
  },
  percentage: {
    selector: ".progress-bar-percentage"
  },
  bottom: {
    selector: ".progress-bar-bottom"
  },
  top: {
    selector: ".progress-bar-top"
  }
};
var ProgressBar = WCConstructor({
  componentName: progress_bar_componentName,
  componentRoot: progress_bar_componentRoot,
  template: progress_bar_template,
  style: progress_bar_style,
  observedAttributes: progress_bar_observedAttributes,
  properties: progress_bar_properties,
  elements: progress_bar_elements
});
WCDefine(progress_bar_componentName, ProgressBar);
// CONCATENATED MODULE: ./src/components/snack-bar/index.js
 // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization

var snack_bar_style = __webpack_require__(63).toString(); // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization


var snack_bar_template = __webpack_require__(64);

var snack_bar_componentName = "snack-bar";
var snack_bar_componentRoot = ".".concat(snack_bar_componentName, "-container");
var infoiconSvg = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z\"/></svg>";
var successiconSvg = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z\"/></svg>";
var erroriconSvg = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"/></svg>";
var warningiconSvg = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z\"/></svg>";

var snack_bar_setStyles = function setStyles(el, styles) {
  if (!el) {
    return;
  }

  SetStyleRules(el, styles);
};

var snack_bar_setShown = function setShown(host) {
  var root = host.elements.root;

  if (!root) {
    return;
  }

  var endEventName = EventName("transitionend");

  var dispatch = function dispatch() {
    return host.dispatchEvent(new CustomEvent(host.shown ? "opened" : "closed", {
      detail: host
    }));
  };

  if (endEventName) {
    root.addEventListener(endEventName, function startEvent() {
      root.removeEventListener(endEventName, startEvent);
      requestAnimationFrame(dispatch);
    });
  } else {
    requestAnimationFrame(dispatch);
  }

  root.classList[host.shown ? "add" : "remove"]("shown");
};

var setAlign = function setAlign(host) {
  var root = host.elements.root;

  if (!root) {
    return;
  }

  root.setAttribute("align", host.align);
};

var setType = function setType(host) {
  var root = host.elements.root;

  if (!root) {
    return;
  }

  root.setAttribute("type", host.type);
};

var setIcon = function setIcon(host, key) {
  var icon = host.elements[key];

  if (!icon) {
    return;
  }

  icon[host[key][0] === "<" ? "svg" : "type"] = host[key];
};

var showHideClose = function showHideClose(el, show) {
  if (!el) {
    return;
  }

  el.classList[show ? "remove" : "add"]("hide-close-btn");
};

var snack_bar_properties = {
  "class": ComponentClassObject,
  shown: {
    format: function format(val) {
      return Pipe(ToBool, IfInvalid(false))(val).value;
    },
    onChange: function onChange(_val, host) {
      return snack_bar_setShown(host);
    }
  },
  align: {
    format: function format(val) {
      return Pipe(ToString, IndexOf(["top", "bottom", "none"]), IfInvalid("bottom"))(val).value;
    },
    onChange: function onChange(_val, host) {
      return setAlign(host);
    }
  },
  type: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid(""))(val).value;
    },
    onChange: function onChange(_val, host) {
      return setType(host);
    }
  },
  infoicon: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid(infoiconSvg), IfEmpty(infoiconSvg))(val).value;
    },
    onChange: function onChange(_val, host) {
      return setIcon(host, "infoicon");
    }
  },
  successicon: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid(successiconSvg), IfEmpty(successiconSvg))(val).value;
    },
    onChange: function onChange(_val, host) {
      return setIcon(host, "successicon");
    }
  },
  erroricon: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid(erroriconSvg), IfEmpty(erroriconSvg))(val).value;
    },
    onChange: function onChange(_val, host) {
      return setIcon(host, "erroricon");
    }
  },
  warningicon: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid(warningiconSvg), IfEmpty(warningiconSvg))(val).value;
    },
    onChange: function onChange(_val, host) {
      return setIcon(host, "warningicon");
    }
  },
  hideclose: {
    format: function format(val) {
      return Pipe(ToBool, IfInvalid(false))(val).value;
    },
    onChange: function onChange(val, host) {
      return showHideClose(host.elements.root, !val);
    }
  },
  styles: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid(""))(val).value;
    },
    onChange: function onChange(val, host) {
      return snack_bar_setStyles(host.elements.injectedStyles, val);
    }
  },
  theme: {
    format: function format(val) {
      return Pipe(ToString, IfInvalid(""))(val).value;
    },
    onChange: function onChange(val, host) {
      return snack_bar_setStyles(host.elements.themeStyles, val);
    }
  }
};
var snack_bar_observedAttributes = Object.keys(snack_bar_properties);
var snack_bar_elements = {
  root: {
    selector: snack_bar_componentRoot,
    onChange: function onChange(_el, host) {
      setAlign(host);
      snack_bar_setShown(host);
    }
  },
  button: {
    selector: ".snack-bar-close",
    onChange: function onChange(el, host) {
      el.eventListeners = {
        click: ObserveEvent(el, "click").subscribe(function () {
          return host.shown = false;
        })
      };
      showHideClose(host.elements.root, !host.hideclose);
    }
  },
  injectedStyles: {
    selector: "style.injectedStyles",
    onChange: function onChange(el, host) {
      return snack_bar_setStyles(el, host.styles);
    }
  },
  themeStyles: {
    selector: "style.themeStyles",
    onChange: function onChange(el, host) {
      return snack_bar_setStyles(el, host.theme);
    }
  },
  infoicon: {
    selector: ".infoicon",
    onChange: function onChange(_el, host) {
      return setIcon(host, "infoicon");
    }
  },
  successicon: {
    selector: ".successicon",
    onChange: function onChange(_el, host) {
      return setIcon(host, "successicon");
    }
  },
  erroricon: {
    selector: ".erroricon",
    onChange: function onChange(_el, host) {
      return setIcon(host, "erroricon");
    }
  },
  warningicon: {
    selector: ".warningicon",
    onChange: function onChange(_el, host) {
      return setIcon(host, "warningicon");
    }
  }
};
var SnackBar = WCConstructor({
  componentName: snack_bar_componentName,
  componentRoot: snack_bar_componentRoot,
  template: snack_bar_template,
  style: snack_bar_style,
  observedAttributes: snack_bar_observedAttributes,
  properties: snack_bar_properties,
  elements: snack_bar_elements
});
WCDefine(snack_bar_componentName, SnackBar);
// CONCATENATED MODULE: ./src/components/spinner-element/index.js
 // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization

var spinner_element_style = __webpack_require__(65).toString();

var spinner_element_setStyles = function setStyles(el, styles) {
  if (!el) {
    return;
  }

  SetStyleRules(el, styles);
};

var spinner_element_setTheme = function setTheme(value, host) {
  var themeElement = host.elements.theme;

  if (!themeElement || value === undefined) {
    return;
  }

  SetStyleRules(themeElement, value);
}; // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization


var spinner_element_template = __webpack_require__(66);

var spinner_element_componentName = "spinner-element";
var spinner_element_componentRoot = ".".concat(spinner_element_componentName, "-container");

var doAllTheThings = function doAllTheThings(host) {
  var root = host.elements.root;

  if (!root) {
    return;
  }

  root.setAttribute("type", host.type);
  setRootClass(host, host.page, "fullpage");
  setRootClass(host, host.scrim, "showscrim");
  spinner_element_setType(host);
  spinner_element_setScrimColor(host);
  setScrimOpacity(host);
  setBlur(host);
};

var setRootClass = function setRootClass(host, condition, clss) {
  var root = host.elements.root;

  if (!root) {
    return;
  }

  root.classList[condition ? "add" : "remove"](clss);
};

var spinner_element_setType = function setType(host) {
  var root = host.elements.root;

  if (!root) {
    return;
  }

  root.setAttribute("type", host.type);
};

var setBlur = function setBlur(host) {
  var scrim = host.elements.scrim;

  if (!scrim) {
    return;
  }

  scrim.style.backdropFilter = "blur(".concat(host.blur, "px)");
};

var spinner_element_setScrimColor = function setScrimColor(host) {
  var scrim = host.elements.scrim;

  if (!scrim) {
    return;
  }

  scrim.style.background = host.scrimcolor;
};

var setScrimOpacity = function setScrimOpacity(host) {
  var scrim = host.elements.scrim;

  if (!scrim) {
    return;
  }

  if (host.scrim) {
    return scrim.style.opacity = host.scrimopacity;
  }

  scrim.style.opacity = 0;
};

var toggleVisibility = function toggleVisibility(host) {
  host.elements.root.classList[host.visible ? "add" : "remove"]("shown");
};

var spinner_element_elements = {
  root: {
    selector: spinner_element_componentRoot,
    onChange: function onChange(_el, host) {
      return doAllTheThings(host);
    }
  },
  scrim: {
    selector: ".spinner-element-scrim",
    onChange: function onChange(_el, host) {
      return doAllTheThings(host);
    }
  },
  inner: {
    selector: ".spinner-element-inner"
  },
  slot: {
    selector: "slot"
  },
  injectedStyles: {
    selector: "style.injectedStyles",
    onChange: function onChange(el, host) {
      return spinner_element_setStyles(el, host.styles);
    }
  },
  theme: {
    selector: "style.themeStyles",
    onChange: function onChange(_el, host) {
      return spinner_element_setTheme(host.theme, host);
    }
  }
};
var spinner_element_properties = {
  "class": ComponentClassObject,
  visible: {
    format: function format(val) {
      return Pipe(ToBool, IfInvalid(false))(val).value;
    },
    onChange: function onChange(_val, host) {
      return toggleVisibility(host);
    }
  },
  page: {
    format: function format(val) {
      return Pipe(ToBool, IfInvalid(false))(val).value;
    },
    onChange: function onChange(_val, host) {
      return doAllTheThings(host);
    }
  },
  scrim: {
    format: function format(val) {
      return Pipe(ToBool, IfInvalid(false))(val).value;
    },
    onChange: function onChange(_val, host) {
      return doAllTheThings(host);
    }
  },
  blur: {
    format: function format(val) {
      return Pipe(ToNumber, IfInvalid(0))(val).value;
    },
    onChange: function onChange(_val, host) {
      return doAllTheThings(host);
    }
  },
  scrimopacity: {
    format: function format(val) {
      return Pipe(ToNumber, IfInvalid(1))(val).value;
    },
    onChange: function onChange(_val, host) {
      return doAllTheThings(host);
    }
  },
  styles: {
    format: function format(val) {
      return typeof val === "string" ? val : "";
    },
    onChange: function onChange(val, host) {
      return spinner_element_setStyles(host.elements.injectedStyles, val);
    }
  },
  type: {
    format: function format(val) {
      return typeof val === "string" ? val : "column";
    },
    onChange: function onChange(_val, host) {
      return doAllTheThings(host);
    }
  },
  theme: {
    format: function format(val, host) {
      return typeof val === "string" ? val : host.theme;
    },
    onChange: spinner_element_setTheme
  }
};
var SpinnerElement = WCConstructor({
  componentName: spinner_element_componentName,
  componentRoot: spinner_element_componentRoot,
  template: spinner_element_template,
  style: spinner_element_style,
  observedAttributes: Object.keys(spinner_element_properties),
  properties: spinner_element_properties,
  elements: spinner_element_elements
});
WCDefine(spinner_element_componentName, SpinnerElement);
// CONCATENATED MODULE: ./src/services/router/invalid-query.js
var invalidQuery = function invalidQuery(searchString) {
  return !searchString || typeof searchString.split !== "function" || searchString === "";
};

/* harmony default export */ var invalid_query = (invalidQuery);
// CONCATENATED MODULE: ./src/services/router/get-query.js


var get_query_getQuery = function getQuery(url) {
  var result = {};
  var searchString = !!url && typeof url === "string" ? url.slice() : undefined;

  if (!!url && typeof url.search === "string") {
    searchString = url.search;
  }

  if (invalid_query(searchString)) {
    return result;
  }

  var queryString = searchString.split("?")[1];

  if (invalid_query(queryString)) {
    return result;
  }

  queryString.split("&").forEach(function (v) {
    if (!v || typeof v.split !== "function") {
      return;
    }

    result[v.split("=")[0]] = v.split("=")[1];
  });
  return result;
};

/* harmony default export */ var get_query = (get_query_getQuery);
// CONCATENATED MODULE: ./src/services/router/query-object-to-string.js


var query_object_to_string_queryObjectToString = function queryObjectToString() {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (!Object.keys(query).length) {
    return "";
  }

  var queries = Object.keys(query).map(function (q) {
    return IsEmpty(query[q]) ? false : "".concat(q, "=").concat(query[q]);
  }).filter(function (v) {
    return !!v;
  }).join("&");

  if (queries) {
    return "?".concat(queries);
  }

  return "";
};

/* harmony default export */ var query_object_to_string = (query_object_to_string_queryObjectToString);
// CONCATENATED MODULE: ./src/services/router/get-route-by-path.js
var get_route_by_path_getRouteByPath = function getRouteByPath(routes) {
  return function (path) {
    path = typeof path === "string" ? path.toLowerCase() : path;
    var r;
    var i = 0;
    var keys = Object.keys(routes || {});
    var urlParts = typeof path === "string" ? path.split("/") : [];

    while (i < keys.length && !r) {
      if (routes[keys[i]].pathname === path) {
        return routes[keys[i]];
      }

      if (routes[keys[i]].pathname.indexOf("/*") > -1) {
        var pathParts = routes[keys[i]].pathname.split("/");

        if (pathParts.length > urlParts.length) {
          if (pathParts[urlParts.length - 1] !== "**") {
            i = i + 1;
            continue;
          }
        }

        if (pathParts.length < urlParts.length) {
          if (pathParts[pathParts.length - 1] !== "**") {
            i = i + 1;
            continue;
          }
        }

        var match = false;
        var partsIndex = 0;

        while (partsIndex < pathParts.length) {
          if (urlParts[partsIndex] !== pathParts[partsIndex] && pathParts[partsIndex].indexOf("*") === -1) {
            match = false;
            break;
          }

          match = true;
          partsIndex = partsIndex + 1;
        }

        if (match) {
          return routes[keys[i]];
        }
      }

      i = i + 1;
    }

    return {};
  };
};

/* harmony default export */ var get_route_by_path = (get_route_by_path_getRouteByPath);
// CONCATENATED MODULE: ./src/services/router/click-listener.js


var click_listener_findParentLink = function findParentLink(parent) {
  var link;

  try {
    while (!link && parent && parent !== document.body) {
      if (Object(utils_get["a" /* Get */])(parent, "tagName").toLowerCase() === "a") {
        link = parent;
      }

      parent = parent.parentNode;
    } // eslint-disable-next-line no-empty

  } catch (error) {}

  return link;
};

var click_listener_clickListener = function clickListener(methods) {
  document.documentElement.addEventListener("click", function (e) {
    var target = e.target;
    var tag = target.tagName.toLowerCase();
    var link;

    if (tag === "a") {
      link = target;
    }

    if (!link && Array.isArray(e.path)) {
      var pathIndex = 0;

      while (!link && pathIndex < e.path.length) {
        if (Object(utils_get["a" /* Get */])(e, "path.".concat(pathIndex, ".tagName"), "").toLowerCase() === "a" && !!Object(utils_get["a" /* Get */])(e, "path.".concat(pathIndex, ".href"))) {
          link = Object(utils_get["a" /* Get */])(e, "path.".concat(pathIndex));
        }

        pathIndex = pathIndex + 1;
      }
    } // Safari


    if (!link && e.composedPath && typeof e.composedPath === "function") {
      var ePath = e.composedPath();
      var _pathIndex = 0;

      while (!link && _pathIndex < ePath.length) {
        if (Object(utils_get["a" /* Get */])(ePath, "".concat(_pathIndex, ".tagName"), "").toLowerCase() === "a" && !!Object(utils_get["a" /* Get */])(ePath, "".concat(_pathIndex, ".href"))) {
          link = ePath[_pathIndex];
        }

        _pathIndex = _pathIndex + 1;
      }
    } // FF and IE


    if (!link && e.originalTarget) {
      link = click_listener_findParentLink(e.originalTarget);
    }

    if (!link && e.explicitOriginalTarget) {
      link = click_listener_findParentLink(e.explicitOriginalTarget);
    }

    if (!link) {
      link = click_listener_findParentLink(e.parentNode);
    }

    if (!link || link.getAttribute("target") === "_blank") {
      return;
    }

    try {
      var url = new URL(link.href);

      if (url.host !== location.host) {
        return;
      }

      if (methods.route(url)) {
        e.preventDefault();
      } // eslint-disable-next-line no-empty

    } catch (error) {}
  }, true);
};

/* harmony default export */ var click_listener = (click_listener_clickListener);
// CONCATENATED MODULE: ./src/services/router/pop-state-listener.js
var popStateListener = function popStateListener(methods) {
  window.addEventListener("popstate", function () {
    return methods.route("".concat(location.pathname).concat(location.search), true);
  }, false);
};

/* harmony default export */ var pop_state_listener = (popStateListener);
// CONCATENATED MODULE: ./src/services/router/parse-url.js


var parse_url_parseUrl = function parseUrl(url) {
  return typeof url === "string" ? ValidateHtml(url.split("?")[0]).sanitized // prevent XSS
  : url.pathname ? ValidateHtml(url.pathname).sanitized // prevent XSS
  : "";
};

/* harmony default export */ var parse_url = (parse_url_parseUrl);
// CONCATENATED MODULE: ./src/services/router/get-route.js



var get_route_getRoute = function getRoute(routes, url) {
  return get_route_by_path(routes)(parse_url(url));
};

/* harmony default export */ var get_route = (get_route_getRoute);
// CONCATENATED MODULE: ./src/services/router/update-state.js


var addLeadingSlash = function addLeadingSlash(pathname) {
  return !pathname ? "" : pathname[0] === "/" ? pathname : "/".concat(pathname);
};

var update_state_joinUrl = function joinUrl(pathname, query) {
  return "".concat(location.protocol, "//").concat(location.host).concat(addLeadingSlash(pathname)).concat(query_object_to_string(query));
};

var update_state_UpdateState = function UpdateState(methods) {
  var replace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (!methods.current) {
    return;
  }

  var lastQuery = query_object_to_string(methods.lastState.query);
  var currentQuery = query_object_to_string(methods.current.query);
  var full = update_state_joinUrl(methods.current.pathname, methods.current.query);
  var state = {
    title: methods.current.title || document.title,
    pathname: methods.current.pathname,
    full: full,
    query: methods.current.query || {}
  };

  if (methods.current.pathname === methods.lastState.pathname && lastQuery === currentQuery && !force) {
    return;
  }

  if ((replace || force) && history.replaceState) {
    history.replaceState(state, document.title, full);
  }

  if (!replace && !force && history.pushState) {
    history.pushState(state, document.title, full);
  }

  if (lastQuery !== currentQuery || force) {
    methods.query$.next(methods.current.query);
  }

  methods.lastState = state;
};

/* harmony default export */ var update_state = (update_state_UpdateState);
// CONCATENATED MODULE: ./src/services/router/handle-route.js







var handle_route_handleRoute = function handleRoute(methods, url) {
  var replace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var force = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var parsedUrl = parse_url(url).toLowerCase();
  var route = get_route(methods.routes, url);

  if (!route) {
    return replace ? false : methods.route("/");
  }

  if (route.title) {
    document.title = route.title;
  }

  var currentPath = Object(utils_get["a" /* Get */])(methods.current, "pathname");
  var routePath = Object(utils_get["a" /* Get */])(route, "pathname");
  var currentQuery = query_object_to_string(Object(utils_get["a" /* Get */])(methods.current, "query", {}));
  var query = get_query(url);

  if (route.allowedQueries && Array.isArray(route.allowedQueries)) {
    if (route.allowedQueries.length === 0) {
      query = {};
    }

    var allowed = {};
    Object.keys(query).forEach(function (queryKey) {
      return route.allowedQueries.indexOf(queryKey) > -1 ? allowed[queryKey] = query[queryKey] : undefined;
    });
    query = allowed;
  }

  var routeQuery = query_object_to_string(query);

  if (routePath === currentPath && currentQuery === routeQuery && !force) {
    return true;
  }

  methods.current = Object.assign({}, route, {
    query: query,
    pathname: parsedUrl
  });

  if (replace) {
    update_state(methods, true, force);
  } else {
    update_state(methods, false, force);
  }

  methods.route$.next(methods.current);
  return true;
};

/* harmony default export */ var handle_route = (handle_route_handleRoute);
// CONCATENATED MODULE: ./src/services/router/index.js









function Router(routes) {
  var _routes = Object.assign({}, routes);

  var getRouteByPath = get_route_by_path(_routes); // internal state

  var lastState = {};
  var current = Object.assign({}, {
    path: location.pathname,
    query: get_query(location.search),
    base: "".concat(location.protocol, "//").concat(location.host).concat(location.port ? ":".concat(location.port) : "")
  }, getRouteByPath(location.pathname));
  var initialPath = "".concat(location.pathname).concat(location.search);
  var initialRoute = Object.assign({}, get_route(_routes, initialPath), current);
  var methods = {
    get current() {
      return Object.assign({}, current || {}, {
        path: location.pathname,
        base: "".concat(location.protocol, "//").concat(location.host).concat(location.port ? ":".concat(location.port) : "")
      });
    },

    // TODO should not be accesible but handle-route needs it, refactor later
    set current(cur) {
      current = cur;
    },

    get lastState() {
      return lastState;
    },

    set lastState(l) {
      lastState = l;
    },

    getRouteByPath: getRouteByPath,
    getQuery: get_query,
    queryObjectToString: query_object_to_string,
    routes: _routes,
    has: function has(url) {
      return !!get_route(_routes, url);
    },
    route: function route(url) {
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return handle_route(methods, url, false, force);
    },
    replaceRoute: function replaceRoute(url) {
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return handle_route(methods, url, true, force);
    },
    route$: Observer(initialRoute),
    query$: Observer(initialRoute.query),
    updateQuery: function updateQuery(query) {
      if (!methods.current) {
        return;
      }

      methods.current = Object.assign({}, methods.current, {
        query: query
      });
      update_state(methods);
    },
    addQuery: function addQuery(query) {
      if (!methods.current) {
        return;
      }

      methods.current = Object.assign({}, methods.current, {
        query: Object.assign({}, methods.current.query, query)
      });
      update_state(methods);
    },
    replaceQuery: function replaceQuery(query) {
      if (!methods.current) {
        return;
      }

      methods.current = Object.assign({}, methods.current);
      methods.current.query = query;
      update_state(methods, true);
    },
    removeQuery: function removeQuery(query) {
      if (!methods.current) {
        return;
      }

      if (!query || Array.isArray(query) && !query.length) {
        methods.current.query = {};
      } else {
        if (typeof query === "string") {
          methods.current.query[query] = undefined;
          delete methods.current.query[query];
        } else if (Array.isArray(query)) {
          query.forEach(function (key) {
            methods.current.query[key] = undefined;
            delete methods.current.query[key];
          });
        }
      }

      update_state(methods, true, true);
    }
  };
  click_listener(methods);
  pop_state_listener(methods);
  return methods;
}
// CONCATENATED MODULE: ./src/services/request.js

function Request(apiBase) {
  return function (reqData) {
    var base = apiBase;
    var path = "".concat(base).concat("/".concat(reqData.path || "").split("//").join("/"));
    var REQ = Object.assign({}, {
      data: undefined,
      headers: {},
      method: "POST"
    }, reqData, {
      path: path
    });
    var isFormData = REQ.data instanceof FormData;

    if (!isFormData && REQ.data && typeof REQ.data !== "string") {
      REQ.data = JSON.stringify(REQ.data);
    }

    if (isFormData) {
      REQ.toForm = true;
      var jsonData = {};
      REQ.data.forEach(function (value, key) {
        jsonData[key] = value;
      });
      REQ.data = JSON.stringify(REQ.data);
    }

    return new Promise(function (resolve, reject) {
      var worker$ = ObserveWorker(function () {
        self.onmessage = function (e) {
          var xhr = new XMLHttpRequest();
          var data = JSON.parse(e.data);
          var formData = data.data;

          if (data.toForm) {
            var form = new FormData();
            Object.keys(formData).forEach(function (key) {
              return form.append(key, formData[key]);
            });
            formData = form;
          }

          xhr.open(data.method, data.path, false);
          Object.keys(data.headers).forEach(function (key) {
            return xhr.setRequestHeader(key, data.headers[key]);
          });

          xhr.onload = function () {
            return postMessage({
              status: xhr.status,
              response: xhr.responseText || xhr.statusText
            });
          };

          xhr.onerror = function () {
            return postMessage({
              status: xhr.status,
              response: xhr.statusText
            });
          };

          xhr.send(data.data);
        };
      });
      var workerSubscription = worker$.subscribe(function (e) {
        workerSubscription();
        var res = e.response; // eslint-disable-next-line no-empty

        try {
          res = JSON.parse(res);
        } catch (error) {}

        if (e.status === 200) {
          return resolve(res);
        } else {
          return reject(e);
        }
      }, function (e) {
        workerSubscription();
        reject(e);
      });
      worker$.post(REQ);
    });
  };
}
// CONCATENATED MODULE: ./src/services/unsupported.js

function WCSupportClass() {
  var setUnsupportedClass = function setUnsupportedClass() {
    return document.body.className = "wc-unsupported";
  };

  var wc = window.WebComponents;
  var safariVersions = ["Version/9", "Version/8", "Version/7"];

  var tryCustomElements = function tryCustomElements() {
    requestAnimationFrame(function () {
      try {
        var t = typeof_default()(window.customElements.define);

        if (t !== "function") {
          setUnsupportedClass();
        }
      } catch (error) {
        setUnsupportedClass();
      }
    });
  };

  if (navigator.userAgent.indexOf("Safari") > -1 && safariVersions.reduce(function (prev, cur) {
    return prev ? true : navigator.userAgent.indexOf(cur) > -1;
  }, false)) {
    setUnsupportedClass();
  }

  if (wc && wc.ready) {
    tryCustomElements();
  } else {
    window.addEventListener("WebComponentsReady", tryCustomElements);
  }
}
// CONCATENATED MODULE: ./src/services/uploader.js
/* eslint-disable tree-shaking/no-side-effects-in-initialization */
 // TODO pako is not so great, minimal size savings. Is there anything else?
// const pako = require('../lib/pako/dist/pako.min.js')
// var reader = new FileReader();
// reader.onload = function () {
//     var compressed_file = pako.deflate(this.result, { level: 5 });
//     var myBlob = new Blob([compressed_file], { type: `application/x-gzip` })
//     // Pass it back to the main thread
// }
// reader.readAsArrayBuffer(fileObject)
// TODO API get urls
// TODO API save to disc
// TODO API stitch
// TODO check is there has been progress already, resume
// TODO pre upload chunk function?
// TODO pre upload function?

function UploadService(options, file) {
  if (!file) {
    return {
      upload: function upload() {},
      cancel: function cancel() {}
    };
  }

  var Options = Object.assign({}, {
    progressCB: function progressCB() {},
    completeCB: function completeCB() {},
    errorCB: function errorCB() {},
    url: location.href,
    bytesPerChunk: 647212,
    withCredentials: false,
    uploadMethod: "POST",
    headers: {},
    parallel: false
  }, options);

  var getFile = function getFile() {
    return file[0] ? file[0] : file;
  };

  var getTotal = function getTotal(file, bytesPerChunk) {
    return !!bytesPerChunk && bytesPerChunk > 0 ? Math.ceil(file.size / bytesPerChunk) : 1;
  };

  var uploadMessages = [];
  var completedChunks = [];
  var fileObject = getFile();
  var size = fileObject.size;
  var total = getTotal(fileObject, Options.bytesPerChunk);
  var uploadData = Object.assign({}, Options, {
    size: size,
    total: total,
    fileObject: fileObject
  });
  var stop = false;
  var chunkIndex = 0;
  var worker$ = ObserveWorker(function workerFunction() {
    self.onmessage = function (e) {
      var data = JSON.parse(e.data);
      var x = new XMLHttpRequest();
      x.open(data.method, data.url, true);
      x.withCredentials = data.withCredentials;
      Object.keys(data.headers).forEach(function (key) {
        return x.setRequestHeader(key, data.headers[key]);
      });

      x.onloadend = function () {
        self.postMessage(JSON.stringify({
          response: x.response,
          statusText: x.statusText,
          status: x.status
        }));
      };

      x.send(data.data);
    };
  });

  var setProgress = function setProgress() {
    return Options.progressCB(UseIf(function (p) {
      return p <= 1;
    }, function () {
      return 1;
    }, uploadData.total === 1 ? 1 : !completedChunks.length ? 0 : Math.ceil(completedChunks.length / uploadData.total * 100) / 100).value);
  };

  var getHeaders = function getHeaders(index, chunkSize, fileSize) {
    return Object.assign({}, {
      'Content-Type': "application/octet-stream",
      'X-Chunk-Id': index,
      'X-Chunk-Length': chunkSize,
      'X-File-Length': fileSize
    }, uploadData.headers);
  };

  var uploadUrl = function uploadUrl(index, url) {
    return !Array.isArray(url) ? url : url[index];
  };

  var getChunk = function getChunk(index) {
    return uploadData.total === 1 ? uploadData.fileObject : uploadData.fileObject.slice(index * uploadData.bytesPerChunk, (index + 1) * uploadData.bytesPerChunk);
  };

  var populateData = function populateData(index) {
    var data = getChunk(index);
    return {
      data: data,
      url: uploadUrl(index, uploadData.url),
      method: uploadData.uploadMethod,
      withCredentials: uploadData.withCredentials,
      headers: getHeaders(index, data.size, uploadData.fileObject.size)
    };
  };

  var onChunkUploaded = function onChunkUploaded(e) {
    // If no event, reject
    if (!e) {
      return Promise.reject();
    }

    var data = to_object_ToObject(e).value;

    if (data.status !== 200) {
      return Promise.reject(data.statusText);
    }

    completedChunks.push(chunkIndex);
    uploadMessages.push({
      chunk: chunkIndex,
      data: data
    }); // increment current chunk index

    chunkIndex = chunkIndex + 1; // update progress

    setProgress(); // if more chunks to upload

    if (chunkIndex < uploadData.total) {
      return uploadChunk(chunkIndex);
    } else {
      worker$.dispose();
      return Promise.resolve();
    }
  };

  var onChunkUploadedAsync = function onChunkUploadedAsync(index, e) {
    if (!e) {
      return Promise.reject();
    }

    var data = to_object_ToObject(e).value;

    if (data.status !== 200) {
      return Promise.reject(data.statusText);
    }

    completedChunks.push(index);
    uploadMessages.push({
      chunk: index,
      data: data
    }); // update progress

    setProgress();
    return Promise.resolve();
  };

  var uploadChunk = function uploadChunk(index) {
    return new Promise(function (resolve, reject) {
      if (stop) {
        return reject("upload was canceled");
      }

      return worker$.post(populateData(index)).then(onChunkUploaded).then(resolve)["catch"](reject);
    });
  };

  var uploadChunkAsync = function uploadChunkAsync(index) {
    return new Promise(function (resolve, reject) {
      if (stop) {
        return reject("upload was canceled");
      }

      return worker$.post(populateData(index)).then(function (res) {
        return onChunkUploadedAsync(index, res);
      }).then(resolve)["catch"](reject);
    });
  };

  var methods = {
    get currentChunk() {
      return chunkIndex;
    },

    cancel: function cancel() {
      stop = true;
    },
    upload: function upload() {
      if (!uploadData.size || !uploadData.total) {
        worker$.dispose();
        return Options.errorCB("invalid file");
      }

      if (!uploadData.url) {
        worker$.dispose();
        return Options.errorCB("invalid upload url");
      }

      if (stop) {
        worker$.dispose();
        return Options.errorCB("upload stopped");
      }

      if (!uploadData.parallel) {
        return uploadChunk(chunkIndex).then(Options.completeCB)["catch"](Options.errorCB);
      }

      var chunkArray = [];
      var index = 0;

      while (index < uploadData.total) {
        chunkArray.push(index);
        index = index + 1;
      }

      return Promise.all(chunkArray.map(function (c) {
        return uploadChunkAsync(c);
      })).then(function () {
        return Options.completeCB(uploadMessages);
      })["catch"](Options.errorCB);
    }
  };
  return methods;
}
window.UploadService = UploadService;
// CONCATENATED MODULE: ./src/utils/between/index.js
function Between(start, end, value) {
  var regex = new RegExp("".concat(start, "([^").concat(end, "]+)").concat(end), "gm");

  var getAll = function getAll() {
    var match;
    var matches = [];

    while ((match = regex.exec(value)) !== null) {
      matches.push(match[1]);
    }

    return matches;
  };

  return {
    all: function all() {
      return getAll();
    },
    first: function first() {
      return regex.exec(value)[1];
    },
    last: function last() {
      var results = getAll();
      return results[results.length - 1];
    },
    at: function at(index) {
      var results = getAll();
      return results[index];
    },
    get: function get() {
      return regex.exec(value);
    }
  };
}
// CONCATENATED MODULE: ./src/utils/browser-is/index.js
var isChrome = navigator.userAgent.indexOf("Chrome") > -1;
var isExplorer = navigator.userAgent.indexOf("MSIE") > -1;
var isFirefox = navigator.userAgent.indexOf("Firefox") > -1;
var isSafari = navigator.userAgent.indexOf("Safari") > -1;
var isOpera = navigator.userAgent.toLowerCase().indexOf("op") > -1;

if (isChrome && isSafari) {
  isSafari = false;
}

if (isChrome && isOpera) {
  isChrome = false;
}

var BrowserIs = {
  safari: isSafari,
  chrome: isChrome,
  ie: isExplorer,
  firefox: isFirefox,
  opera: isOpera,
  which: isSafari ? "safari" : isChrome ? "chrome" : isExplorer ? "ie" : isFirefox ? "firefox" : isOpera ? "opera" : undefined
};
// CONCATENATED MODULE: ./src/utils/create-element/index.js

var create_element_CreateElement = function CreateElement(obj) {
  var el = document.createElement(obj.tagName || "div");
  Object.keys(obj).forEach(function (key) {
    if (key === "tagName") {
      return;
    }

    if (["textContent", "innerHTML"].indexOf(key) > -1) {
      return el[key] = obj[key];
    }

    if (["string", "number", "boolean"].indexOf(Type(obj[key])) > -1) {
      el.setAttribute(key, obj[key]);
    } else {
      el[key] = obj[key];
    }
  });
  return el;
};
// CONCATENATED MODULE: ./src/utils/to-date/index.js

function ToDate(value) {
  var result = TMonad(value);

  if (result.stop) {
    return result;
  }

  try {
    result.value = new Date(Date.parse(result.value));
  } catch (error) {}

  var isDate = result.value !== "Invalid Date" && !isNaN(result.value) && result.value instanceof Date;
  result.type = isDate ? "date" : Type(result.value);
  result.valid = result.type === "date";
  return result;
}
// CONCATENATED MODULE: ./src/utils/date-to-object/index.js

function DateToObject(value) {
  var result = ToDate(value);

  if (result.stop || !result.valid) {
    return result;
  }

  var hour = parseInt(result.value.toLocaleTimeString(navigator.language, {
    hour: "numeric",
    hour12: true
  }));
  result.value = {
    year: result.value.getFullYear(),
    yearShort: result.value.toLocaleDateString(navigator.language, {
      year: "2-digit"
    }),
    monthIndex: result.value.getMonth(),
    month: result.value.getMonth() + 1,
    monthDouble: result.value.toLocaleDateString(navigator.language, {
      month: "2-digit"
    }),
    monthName: result.value.toLocaleString(navigator.language, {
      month: "long"
    }),
    monthNameShort: result.value.toLocaleString(navigator.language, {
      month: "short"
    }),
    day: result.value.getDate(),
    dayDouble: result.value.toLocaleDateString(navigator.language, {
      day: "2-digit"
    }),
    dayOfWeek: result.value.toLocaleString(navigator.language, {
      weekday: "long"
    }),
    dayOfWeekShort: result.value.toLocaleString(navigator.language, {
      weekday: "short"
    }),
    dayIndex: result.value.getDay(),
    hour24: parseInt(result.value.toLocaleTimeString(navigator.language, {
      hour: "numeric",
      hour12: false
    })),
    hour: hour,
    hourDouble: result.value.toLocaleTimeString(navigator.language, {
      hour: "2-digit",
      hour12: true
    }).replace(/[^0-9\.]+/g, ""),
    hourDouble24: result.value.toLocaleTimeString(navigator.language, {
      hour: "2-digit",
      hour12: false
    }).replace(/[^0-9\.]+/g, ""),
    minutes: parseInt(result.value.toLocaleTimeString(navigator.language, {
      minute: "numeric"
    })),
    minutesDouble: "0".concat(result.value.getMinutes()).slice(-2),
    seconds: parseInt(result.value.toLocaleTimeString(navigator.language, {
      second: "numeric"
    })),
    secondsDouble: "0".concat(result.value.getSeconds()).slice(-2),
    milliseconds: result.value.getMilliseconds(),
    ampm: result.value.toLocaleTimeString(navigator.language, {
      hour12: true,
      hour: "numeric"
    }).replace(/[:\d]/g, "").trim(),
    //result.value.getHours() > 11 ? `PM` : `AM`,
    date: result.value
  };
  return result;
}
// CONCATENATED MODULE: ./src/utils/ease-bounce/index.js

function EaseBounce(values, duration) {
  var pow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4;
  return GetEase(values, duration, pow, function (index, frames, pow) {
    return EasePower(1 - index / frames, pow);
  });
}
// CONCATENATED MODULE: ./src/utils/ease-in/index.js

function EaseIn(values, duration) {
  var pow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4;
  return GetEase(values, duration, pow, function (index, frames) {
    var t = index / frames;
    return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  });
}
// CONCATENATED MODULE: ./src/utils/ease-out/index.js

function EaseOut(values, duration) {
  var pow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4;
  return GetEase(values, duration, pow, function (index, frames, pow) {
    return EasePower(index / frames, pow);
  });
}
// CONCATENATED MODULE: ./src/utils/first-of-month/index.js

var first_of_month_FirstOfMonth = function FirstOfMonth(value) {
  var result = ToDate(value);

  if (result.stop || !result.valid) {
    return result;
  }

  result.value = DateToObject(new Date(result.value.getFullYear(), result.value.getMonth(), 1)).value;
  return result;
};
// CONCATENATED MODULE: ./src/utils/from-uri/index.js

function FromURI(value) {
  return do_uri_doURI(value);
}
// CONCATENATED MODULE: ./src/utils/function-to-partial/index.js


/**
 * Converts a function to a curried partial function. Arguments are added by calling the 
 * partial(no set arity) until all possible arguments are met, which then
 * calls the original function
 * 
 * @function FunctionToPartial
 * @param  {function()} function - The function to convert
 * @param  {?any} args - The arguments to prepopulate the curried version of the function
 * @return {function()} - A curried proxy of the passed in function
 * 
 * @example
 * const curried = FunctionToPartial( (a, b, c) => { console.log(a, b, c) })
 * curried(`one`) // proxy with argument `a` populated with `one`
 * curried(`two`) // proxy with argument `b` populated with `two`
 * curried(`three`) // `one two three`
 */
function FunctionToPartial() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var argArray = [].concat(args);
  var fn = argArray.shift();
  /** If no function passed in, return */

  if (!fn) {
    return;
  }
  /** If the passed in arguments equal the original functions arity, just call the function */


  if (argArray.length >= fn.length) {
    return fn.apply(fn, argArray);
  }
  /** return function that takes new arguments which then returns a new FunctionToPartial */


  return function () {
    for (var _len2 = arguments.length, newArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      newArgs[_key2] = arguments[_key2];
    }

    return FunctionToPartial.apply(void 0, [fn].concat(toConsumableArray_default()(argArray.concat([].concat(newArgs)))));
  };
}
// CONCATENATED MODULE: ./src/utils/has-keys/index.js

function HasKeys(compare) {
  return function (value) {
    var result = to_object_ToObject(value);

    if (result.stop) {
      return result;
    }

    if (!result.valid) {
      return result;
    }

    var keys = Object.keys(result.value);
    result.valid = !keys.length && !compare.length ? true : keys.length && !compare.length ? false : compare.filter(function (v) {
      return keys.indexOf(v) > -1;
    }).length === compare.length;
    return result;
  };
}
// CONCATENATED MODULE: ./src/utils/has-method/index.js
function HasMethod(obj, method) {
  return !!obj && typeof obj[method] === "function";
}
// CONCATENATED MODULE: ./src/utils/is-element-type/index.js

function IsElementType(tag) {
  return function (value) {
    var result = TMonad(value);

    if (result.stop) {
      return result;
    }

    result.valid = Object(utils_get["a" /* Get */])(result, "value.tagName", "").toLowerCase() === tag.toLowerCase();
    return result;
  };
}
// CONCATENATED MODULE: ./src/utils/last-of-month/index.js

var last_of_month_LastOfMonth = function LastOfMonth(value) {
  var result = ToDate(value);

  if (result.stop || !result.valid) {
    return result;
  }

  result.value = DateToObject(new Date(result.value.getFullYear(), result.value.getMonth() + 1, 0)).value;
  return result;
};
// CONCATENATED MODULE: ./src/utils/reduce-map/index.js
/**
 * Takes a mapping function and returns a reducer
 * @function ReduceMap
 * @param {function( item:any ) :any } mapFunction - The function to be called on every element, performs the mapping operation
 * @return {function( accumulator:[], current:any ):[] } ReduceMapResult - The reducer function
 * @example 
 * [`A`, `B`].reduce(ReduceMap(mapFunction), []) // [`a`, `b`,]
 */
function ReduceMap(mapFunction) {
  return function ReduceMapResult(result, current) {
    return result.concat([mapFunction(current)]);
  };
}
// CONCATENATED MODULE: ./src/utils/map/index.js

/**
 * Performs a provided mapping operation to a provided collection. Intended to be used inconjunction with a transducer.
 * @function Map
 * @param {function() } mapFunction - The function to be called on every element, performs the mapping operation
 * @param {any[]} collection - The collection to iterate over
 * @return {any[]} Mapped collection
 * @example
 * Map(v=>v.toLowerCase(), [`A`, `B`]) // [`a`, `b`]
 * TODO - be able to take an object, Set, Weak map, etc
 */

function Map(mapFunction, collection) {
  return collection.reduce(ReduceMap(mapFunction), []);
}


// CONCATENATED MODULE: ./src/utils/match/index.js

var match_Match = function Match(toSearchFor, toSearchIn) {
  var doSearch = function doSearch(search) {
    return search.match(ToRegex(toSearchFor).value);
  };

  if (toSearchIn === undefined) {
    return function (toSearchIn) {
      return doSearch(toSearchIn);
    };
  }

  return doSearch(toSearchIn);
};
// CONCATENATED MODULE: ./src/utils/memoize/index.js
var cache = new WeakMap();
function Memoize(fn) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var obj = {
      fn: fn,
      args: [].concat(args)
    };
    var cached = cache.get(obj);
    console.log(cached, obj);

    if (cached) {
      return cached;
    }

    var result = fn.apply(fn, obj.args);
    cache.set(obj, result);
    return result; // const argArray = [...args]
    // const id = JSON.stringify(argArray)
    // const isCached = id in cache
    // function newOne() {
    //     cache.add = fn.apply(fn, argArray)
    //     return cache[id]
    // }
    // console.log(isCached, id)
    // return isCached ?
    //     cache[id] :
    //     newOne()
  };
} // export function Memoize() {
//     const cache = {}
//     function cacheHandler(fn) {
//         return function () {
//             const id = JSON.stringify(arguments)
//             if (cache[id]) { return cache[id] }
//             cache[id] = fn.apply(this, arguments)
//             return cache[id]
//         }
//     }
//     return {
//         go(fn) { return cacheHandler(fn) },
//         get cached() { return cache }
//     }
// }
// CONCATENATED MODULE: ./src/utils/merge/index.js


var mergeArray = function mergeArray(arr1, arr2) {
  var result = arr1.slice(0);
  arr2.forEach(function (value, index) {
    return result[index] = value;
  });
  return result;
};

var merge_merge = function merge(obj1, obj2) {
  if (!obj1) {
    return Object.assign({}, obj2);
  }

  if (!obj2) {
    return Object.assign({}, obj1);
  }

  var type1 = Type(obj1);
  var type2 = Type(obj2);

  if (type1 !== type2 || ["array", "object"].indexOf(type1) === -1) {
    return obj2;
  }

  if (type1 === "array") {
    return mergeArray(obj1, obj2);
  }

  var result = Object.assign({}, obj1);

  for (var key in obj2) {
    if (!obj2[key]) {
      continue;
    }

    result[key] = merge(obj1[key], obj2[key]);
  }

  return result;
};

var mutateMergeArray = function mutateMergeArray(arr1, arr2) {
  arr2.forEach(function (value, index) {
    return arr1[index] = value;
  });
  return arr1;
};

var merge_mutateMerge = function mutateMerge(obj1, obj2) {
  if (!obj1) {
    return obj2;
  }

  if (!obj2) {
    return obj1;
  }

  var type1 = Type(obj1);
  var type2 = Type(obj2);

  if (type1 !== type2 || ["array", "object"].indexOf(type1) === -1) {
    return obj2;
  }

  if (type1 === "array") {
    return mutateMergeArray(obj1, obj2);
  }

  for (var key in obj2) {
    if (!obj2[key]) {
      continue;
    }

    obj1[key] = mutateMerge(obj1[key], obj2[key]);
  }

  return obj1;
};

var Merge = function Merge(obj1, obj2) {
  var mutate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return !mutate ? merge_merge(obj1, obj2) : merge_mutateMerge(obj1, obj2);
};
// CONCATENATED MODULE: ./src/utils/month-data/index.js

var month_data_MonthData = function MonthData(value) {
  var result = ToDate(value);

  if (result.stop || !result.valid) {
    return result;
  }

  var first = first_of_month_FirstOfMonth(result.value).value;
  var last = last_of_month_LastOfMonth(result.value).value;
  var startIndex = first.dayIndex;
  var bufferStart = [];

  while (startIndex) {
    var d = DateToObject(new Date(first.year, first.monthIndex, 1 - startIndex)).value;
    d.outOfRange = true;
    bufferStart.push(d);
    startIndex = startIndex - 1;
  }

  var endIndex = 6 - last.dayIndex;
  var bufferEnd = [];

  while (endIndex) {
    var _d = DateToObject(new Date(last.year, last.monthIndex, last.day + (7 - (endIndex + last.dayIndex)))).value;
    _d.outOfRange = true;
    bufferEnd.push(_d);
    endIndex = endIndex - 1;
  }

  var daysArray = [].concat(bufferStart.slice());
  var dayIndex = 0;

  while (dayIndex < last.day) {
    var _d2 = DateToObject(new Date(first.year, first.monthIndex, first.day + dayIndex)).value;
    daysArray.push(_d2);
    dayIndex = dayIndex + 1;
  }

  result.value = daysArray.concat(bufferEnd.slice());
  return result;
};
// CONCATENATED MODULE: ./src/utils/properties-are/index.js

function PropertiesAre(compare) {
  return function (value) {
    var result = to_object_ToObject(value);

    if (result.stop) {
      return result;
    }

    if (!result.valid) {
      return result;
    }

    var keys = Object.keys(result.value);
    result.valid = keys.length === 0 ? true : keys.filter(function (v) {
      return Type(v) === compare;
    }).length > 0;
    return result;
  };
}
// CONCATENATED MODULE: ./src/utils/scroll-to/index.js


var scroll_to_animator = function animator(from, to, speed, stepFn) {
  return new Promise(function (resolve) {
    return Timer(speed, stepFn, EaseInOut([from, to], speed), resolve);
  });
};

function ScrollTo(options) {
  if (!options) {
    return;
  }

  if (options.element) {
    var box = options.element.getBoundingClientRect();
    options.x = box.left;
    options.y = box.top;
  }

  options = Object.assign({}, {
    speed: 300,
    x: 0,
    y: 0,
    target: window
  }, options);
  var target = Object(utils_get["a" /* Get */])(options, "target");

  if (!target) {
    return;
  }
  /** TODO - handle x */


  var fromY = target.scrollY || target.scrollTop;
  var toY = Object(utils_get["a" /* Get */])(options, "y");
  var toX = Object(utils_get["a" /* Get */])(options, "x");
  var speed = Object(utils_get["a" /* Get */])(options, "speed");
  scroll_to_animator(fromY || 0, toY || 0, speed, function (y) {
    return target.scrollTo(toX, y);
  });
}
// CONCATENATED MODULE: ./src/utils/super-function/index.js



/**
 * Gives functions super powers. Allows functions to be curried, passing in 
 * arguments one at a time, as well as remove or completely replace arguments.
 * Also has Observers to subscribe to for when arguments, curried version are
 * updated as well as when the function is called
 * 
 * @function SuperFunction
 * 
 * @param {function()} fn - The function to wrap
 * 
 * @param {any[]} args - Arguments to set, for currying
 * 
 * @param {?string} name - Name of the function, curried functions inherit this. 
 * Defaults to passed in function's name
 * 
 * @param {?number} length - Arity of function, curried functions inherit this. 
 * Defaults to passed in function's length
 * 
 * @property {string[]} args - Returns or sets the stored arguments
 * @property {boolean} complete - Returns true if the stored arguments length is that of the original functions argument length
 * @property {function} curried - Returns a new super copy of the function
 * @property {function(...args)} curry - Returns a copy of the current curried function, adding in any passed arguments
 * @property {function(arg)} pushArgument - Adds a new argument
 * @property {function()} popArgument - Removes the last argument
 * @property {function(property:string, next:function, error:function, complete:function)} subscribe - Subscribes to a state property observer, if it exists
 * 
 * @return {function()} A proxy version of the original function with the above properties/methods
 * 
 * @example
 * const wonderFunction = SuperFunction( (a, b, c) => `${a} | ${b} | ${c}` )
 * 
 * wonderFunction(`one`) // `one undefined undefined`
 * 
 * const curried = wonderFunction.curried
 * curried(`one`) // proxy with argument `a` populated with `one`
 * curried(`two`) // proxy with argument `b` populated with `two`
 * curried(`three`) // `one | two | three`
 * 
 * const curried2 = wonderFunction.curried
 * curried2.pushArgument(`Aquaman`) // (`Aquaman`, b, c) => `${a} | ${b} | ${c}`
 * 
 * const curried3 = curried2.curried
 * curried3.pushArgument(`Skateman`) // (`Aquaman`, `Skateman`, c) => `${a} | ${b} | ${c}`
 * curried3.length // 3
 * curried3.args // [`Aquaman`, `Skateman`]
 * curried3.complete // false
 * curried3.versions // [curried, curried2]
 * 
 * curried3.popArgument()
 * curried3.args // [`Aquaman`]
 * 
 * curried3.curry(`Krypto the Superdog`, `Arm Rip Off Boy`) // `Aquaman | Krypto the Superdog | Arm Rip Off Boy`
 * 
 * curried3.subscribe(`args`, console.log)
 * curried3.pushArgument(`Squirrel Girl`) 
 * // subscription triggered -> [`Aquaman`, `Squirrel Girl`]
 * 
 * curried3.subscribe(`call`, console.log)
 * curried3(`Razorback`)
 * // subscription triggered -> {
 * //   arguments:[
 * //       `Aquaman`, 
 * //       `Squirrel Girl`, 
 * //       `Razorback`
 * //   ], 
 * //   returned: `Aquaman | Squirrel Girl | Razorback`, 
 * //   self:curried3 
 * // }
 */

function SuperFunction(fn) {
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : fn ? fn.name : "";
  var length = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : fn ? fn.length : 0;

  if (!fn) {
    return;
  }
  /** State object, holds observers to subscribe to */


  var state = {
    curried: Observer([FunctionToPartial(fn)]),
    args: Observer(toConsumableArray_default()(args)),
    call: Observer({})
  };
  /** Gets last curried function */

  function currentCurry() {
    return state.curried.value[state.curried.value.length - 1];
  }
  /** Object to store a proxy of the passed in function. It's stored in an object so that properties like name and length can be set to the proxy */


  var result = {};
  /** Proxy, a function that wraps the original function, passing in the stored arguments and any arguments passed in */

  result[name] = function () {
    for (var _len = arguments.length, proxyArgs = new Array(_len), _key = 0; _key < _len; _key++) {
      proxyArgs[_key] = arguments[_key];
    }

    // concat the arguments, call the original function and store it's result
    var newArgs = state.args.value.concat(proxyArgs).slice(0, length);
    /** TODO - this is duplicate code, needs to be DRY but not sure how yet */

    var newResult = {};
    newResult[name] = fn.apply(result[name], newArgs);

    if (typeof newResult[name] === "function" && newResult[name].name === "") {
      newResult[name] = SuperFunction(newResult[name], [], name, length);
    } // Triggers 'call' observer subscriptions


    state.call.next({
      arguments: newArgs,
      returned: newResult[name],
      self: result[name]
    });
    return newResult[name];
  };
  /** Define new properties for the proxy function */


  Object.defineProperties(result[name], {
    /** @prototype Inherit original function name */
    name: {
      value: name
    },

    /** @prototype Inherit original function arity */
    length: {
      get: function get() {
        return length;
      }
    },

    /** @prototype Stored arguments */
    args: {
      get: function get() {
        return state.args.value;
      },

      /** Replaces all stored arguments and resets the curried versions */
      set: function set(arg) {
        state.args.next(!Array.isArray(arg) ? [arg] : arg);
        state.curried.next([FunctionToPartial(fn)]);
      }
    },

    /** Returns a new super copy of the function */
    curried: {
      get: function get() {
        return SuperFunction(currentCurry(), state.args.value, name, length);
      }
    },

    /** Returns true if the stored arguments length is that of the original functions argument length */
    complete: {
      get: function get() {
        return state.args.value.length === length;
      }
    },
    isSuperFunction: {
      value: true
    }
  });
  /**
   * @prototype Adds a new argument to the end of the stored arguments
   * @param {any} arg - the argument to add
   */

  result[name].pushArgument = function (arg) {
    /** Do not add more arguments than the function can take */
    if (length === state.args.value.length) {
      return;
    }
    /** Add the argument to the curried state, creating a new version */


    var curried = state.curried.value.slice();
    curried.push(curried[curried.length - 1](arg));
    state.curried.next(curried);
    /** Add the argument */

    state.args.next(state.args.value.concat([arg]));
  };
  /** @prototype Removes the last argument from the stored arguments as well as the last curry */


  result[name].popArgument = function () {
    if (state.args.value.length === 0) {
      return;
    }

    state.args.next(state.args.value.slice(0, state.args.value.length - 1));
    state.curried.next(state.curried.value.slice(0, state.curried.value.length - 1));
  };
  /** @prototype Returns a copy of the current curried function, adding in any passed arguments */


  result[name].curry = function () {
    var proxy = result[name].curried;

    for (var _len2 = arguments.length, argsToAdd = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      argsToAdd[_key2] = arguments[_key2];
    }

    argsToAdd.forEach(proxy.pushArgument);
    return proxy;
  };
  /** 
   * @prototype Subscribes to a state property observer, if it exists
   * @param {string} property - the property in which to subscribe
   * @param {any} callbacks - Observer callbacks, next, error, complete
   */


  result[name].subscribe = function () {
    for (var _len3 = arguments.length, subscribeArguments = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      subscribeArguments[_key3] = arguments[_key3];
    }

    return !state[subscribeArguments[0]] ? undefined : state[subscribeArguments[0]].subscribe(subscribeArguments[1], subscribeArguments[2], subscribeArguments[3]);
  };

  return result[name];
}


// CONCATENATED MODULE: ./src/utils/to-entities/index.js

function ToEntities(value) {
  var result = TMonad(value);

  if (result.stop) {
    return result;
  }

  if (result.type === "string" && !!result.value) {
    result.value = result.value.replace(/\&/g, "&amp;").replace(/\>/g, "&gt;").replace(/\</g, "&lt;").replace(/"/g, "&quot;").replace(/`/g, "&apos;");
    result.valid = true;
  } else {
    result.valid = false;
  }

  return result;
}
// CONCATENATED MODULE: ./src/utils/to-uri/index.js

function ToURI(value) {
  return do_uri_doURI(value, true);
}
// CONCATENATED MODULE: ./src/utils/to-uri-component/index.js

function ToURIComponent(value) {
  return do_uri_doURI(value, true, true);
}
// CONCATENATED MODULE: ./src/utils/transduce-filter/index.js
function TransduceFilter(predicateFunction) {
  return function (nextReducer) {
    return function (result, current) {
      return predicateFunction(current) ? nextReducer(result, current) : result;
    };
  };
}
// CONCATENATED MODULE: ./src/utils/transduce-map/index.js
function TransduceMap(conversionFunction) {
  return function (nextReducer) {
    return function (result, current) {
      return nextReducer(result, conversionFunction(current));
    };
  };
}
// CONCATENATED MODULE: ./src/utils/wc-css-rules-from-selector/index.js
function WCCSSRulesFromSelector(selector) {
  var sheets = Array.from(document.body.ownerDocument.styleSheets);
  var rules = [];
  sheets.forEach(function (sheet) {
    return Array.from(sheet.rules).forEach(function (rule) {
      return rule.cssText.split("{")[0].trim().indexOf(selector) > -1 ? rules.push(rule.cssText) : undefined;
    });
  });
  return rules;
}
// CONCATENATED MODULE: ./src/utils/wc-render-markup/index.js


var getRegex = function getRegex(r) {
  return new RegExp(r, "igm");
};

var getBegining = function getBegining(m, t) {
  return m.index !== 0 ? t.slice(0, m.index) : "";
};

var getEnd = function getEnd(m, t) {
  return t.slice(m.index + m[0].length);
};

var wc_render_markup_r = /\$(.*?)\$/;
function WCRenderMarkup(templateStr, values) {
  var regex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : wc_render_markup_r;
  var template = document.createElement("template");
  var match;

  while ((match = getRegex(regex).exec(templateStr)) !== null) {
    templateStr = "".concat(getBegining(match, templateStr)).concat(values[match[1]]).concat(getEnd(match, templateStr));
  }

  template.innerHTML = ValidateHtml(templateStr, [], ["script"]).sanitized;
  return document.importNode(template.content, true);
}
// CONCATENATED MODULE: ./src/index.js
/* concated harmony reexport ButtonElement */__webpack_require__.d(__webpack_exports__, "ButtonElement", function() { return ButtonElement; });
/* concated harmony reexport CollapseMenu */__webpack_require__.d(__webpack_exports__, "CollapseMenu", function() { return CollapseMenu; });
/* concated harmony reexport ContentCollapse */__webpack_require__.d(__webpack_exports__, "ContentCollapse", function() { return ContentCollapse; });
/* concated harmony reexport ContentDrawer */__webpack_require__.d(__webpack_exports__, "ContentDrawer", function() { return ContentDrawer; });
/* concated harmony reexport ContentTransition */__webpack_require__.d(__webpack_exports__, "ContentTransition", function() { return ContentTransition; });
/* concated harmony reexport CookieMessage */__webpack_require__.d(__webpack_exports__, "CookieMessage", function() { return CookieMessage; });
/* concated harmony reexport DropDown */__webpack_require__.d(__webpack_exports__, "DropDown", function() { return DropDown; });
/* concated harmony reexport DropdownSelect */__webpack_require__.d(__webpack_exports__, "DropdownSelect", function() { return DropdownSelect; });
/* concated harmony reexport EffectBounceZ */__webpack_require__.d(__webpack_exports__, "EffectBounceZ", function() { return EffectBounceZ; });
/* concated harmony reexport EffectFade */__webpack_require__.d(__webpack_exports__, "EffectFade", function() { return EffectFade; });
/* concated harmony reexport EffectRipple */__webpack_require__.d(__webpack_exports__, "EffectRipple", function() { return EffectRipple; });
/* concated harmony reexport EffectScale */__webpack_require__.d(__webpack_exports__, "EffectScale", function() { return EffectScale; });
/* concated harmony reexport EffectUnderline */__webpack_require__.d(__webpack_exports__, "EffectUnderline", function() { return EffectUnderline; });
/* concated harmony reexport GridLayout */__webpack_require__.d(__webpack_exports__, "GridLayout", function() { return GridLayout; });
/* concated harmony reexport HorizontalSlider */__webpack_require__.d(__webpack_exports__, "HorizontalSlider", function() { return HorizontalSlider; });
/* concated harmony reexport IconElement */__webpack_require__.d(__webpack_exports__, "IconElement", function() { return IconElement; });
/* concated harmony reexport ImageLoader */__webpack_require__.d(__webpack_exports__, "ImageLoader", function() { return ImageLoader; });
/* concated harmony reexport InputField */__webpack_require__.d(__webpack_exports__, "InputField", function() { return InputField; });
/* concated harmony reexport OverlayContent */__webpack_require__.d(__webpack_exports__, "OverlayContent", function() { return OverlayContent; });
/* concated harmony reexport OverlayMessage */__webpack_require__.d(__webpack_exports__, "OverlayMessage", function() { return OverlayMessage; });
/* concated harmony reexport ProgressBar */__webpack_require__.d(__webpack_exports__, "ProgressBar", function() { return ProgressBar; });
/* concated harmony reexport SnackBar */__webpack_require__.d(__webpack_exports__, "SnackBar", function() { return SnackBar; });
/* concated harmony reexport SpinnerElement */__webpack_require__.d(__webpack_exports__, "SpinnerElement", function() { return SpinnerElement; });
/* concated harmony reexport Router */__webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* concated harmony reexport ComponentStore */__webpack_require__.d(__webpack_exports__, "ComponentStore", function() { return componentStore["a" /* ComponentStore */]; });
/* concated harmony reexport DragDropService */__webpack_require__.d(__webpack_exports__, "DragDropService", function() { return DragDropService; });
/* concated harmony reexport Request */__webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* concated harmony reexport Timer */__webpack_require__.d(__webpack_exports__, "Timer", function() { return Timer; });
/* concated harmony reexport WCSupportClass */__webpack_require__.d(__webpack_exports__, "WCSupportClass", function() { return WCSupportClass; });
/* concated harmony reexport UploadService */__webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* concated harmony reexport iconArrow */__webpack_require__.d(__webpack_exports__, "iconArrow", function() { return iconArrow; });
/* concated harmony reexport iconChevron */__webpack_require__.d(__webpack_exports__, "iconChevron", function() { return iconChevron; });
/* concated harmony reexport iconDelete */__webpack_require__.d(__webpack_exports__, "iconDelete", function() { return iconDelete; });
/* concated harmony reexport iconFilter */__webpack_require__.d(__webpack_exports__, "iconFilter", function() { return iconFilter; });
/* concated harmony reexport iconGear */__webpack_require__.d(__webpack_exports__, "iconGear", function() { return iconGear; });
/* concated harmony reexport iconPencil */__webpack_require__.d(__webpack_exports__, "iconPencil", function() { return iconPencil; });
/* concated harmony reexport iconPlay */__webpack_require__.d(__webpack_exports__, "iconPlay", function() { return iconPlay; });
/* concated harmony reexport iconTriangle */__webpack_require__.d(__webpack_exports__, "iconTriangle", function() { return iconTriangle; });
/* concated harmony reexport Icons */__webpack_require__.d(__webpack_exports__, "Icons", function() { return Icons; });
/* concated harmony reexport AddRemoveAttribute */__webpack_require__.d(__webpack_exports__, "AddRemoveAttribute", function() { return AddRemoveAttribute; });
/* concated harmony reexport AfterEveryNth */__webpack_require__.d(__webpack_exports__, "AfterEveryNth", function() { return AfterEveryNth; });
/* concated harmony reexport AppendStyleElement */__webpack_require__.d(__webpack_exports__, "AppendStyleElement", function() { return AppendStyleElement; });
/* concated harmony reexport BeforeEveryNth */__webpack_require__.d(__webpack_exports__, "BeforeEveryNth", function() { return BeforeEveryNth; });
/* concated harmony reexport Between */__webpack_require__.d(__webpack_exports__, "Between", function() { return Between; });
/* concated harmony reexport BrowserIs */__webpack_require__.d(__webpack_exports__, "BrowserIs", function() { return BrowserIs; });
/* concated harmony reexport CommasToArray */__webpack_require__.d(__webpack_exports__, "CommasToArray", function() { return CommasToArray; });
/* concated harmony reexport ComponentClassObject */__webpack_require__.d(__webpack_exports__, "ComponentClassObject", function() { return ComponentClassObject; });
/* concated harmony reexport CreateElement */__webpack_require__.d(__webpack_exports__, "CreateElement", function() { return create_element_CreateElement; });
/* concated harmony reexport DateToObject */__webpack_require__.d(__webpack_exports__, "DateToObject", function() { return DateToObject; });
/* concated harmony reexport EaseBounce */__webpack_require__.d(__webpack_exports__, "EaseBounce", function() { return EaseBounce; });
/* concated harmony reexport EaseIn */__webpack_require__.d(__webpack_exports__, "EaseIn", function() { return EaseIn; });
/* concated harmony reexport EaseInOut */__webpack_require__.d(__webpack_exports__, "EaseInOut", function() { return EaseInOut; });
/* concated harmony reexport EaseOut */__webpack_require__.d(__webpack_exports__, "EaseOut", function() { return EaseOut; });
/* concated harmony reexport EasePower */__webpack_require__.d(__webpack_exports__, "EasePower", function() { return EasePower; });
/* concated harmony reexport Equals */__webpack_require__.d(__webpack_exports__, "Equals", function() { return Equals; });
/* concated harmony reexport EventName */__webpack_require__.d(__webpack_exports__, "EventName", function() { return EventName; });
/* concated harmony reexport FindElementIn */__webpack_require__.d(__webpack_exports__, "FindElementIn", function() { return FindElementIn; });
/* concated harmony reexport FirstOfMonth */__webpack_require__.d(__webpack_exports__, "FirstOfMonth", function() { return first_of_month_FirstOfMonth; });
/* concated harmony reexport FromJSON */__webpack_require__.d(__webpack_exports__, "FromJSON", function() { return FromJSON; });
/* concated harmony reexport FromEntities */__webpack_require__.d(__webpack_exports__, "FromEntities", function() { return FromEntities; });
/* concated harmony reexport FromURI */__webpack_require__.d(__webpack_exports__, "FromURI", function() { return FromURI; });
/* concated harmony reexport FromURIComponent */__webpack_require__.d(__webpack_exports__, "FromURIComponent", function() { return FromURIComponent; });
/* concated harmony reexport FunctionToPartial */__webpack_require__.d(__webpack_exports__, "FunctionToPartial", function() { return FunctionToPartial; });
/* concated harmony reexport Get */__webpack_require__.d(__webpack_exports__, "Get", function() { return utils_get["a" /* Get */]; });
/* concated harmony reexport GetCurve */__webpack_require__.d(__webpack_exports__, "GetCurve", function() { return GetCurve; });
/* concated harmony reexport GetEase */__webpack_require__.d(__webpack_exports__, "GetEase", function() { return GetEase; });
/* concated harmony reexport GetInputValue */__webpack_require__.d(__webpack_exports__, "GetInputValue", function() { return GetInputValue; });
/* concated harmony reexport HasKeys */__webpack_require__.d(__webpack_exports__, "HasKeys", function() { return HasKeys; });
/* concated harmony reexport HasMethod */__webpack_require__.d(__webpack_exports__, "HasMethod", function() { return HasMethod; });
/* concated harmony reexport htmlTags */__webpack_require__.d(__webpack_exports__, "htmlTags", function() { return htmlTags; });
/* concated harmony reexport ID */__webpack_require__.d(__webpack_exports__, "ID", function() { return ID; });
/* concated harmony reexport IfEmpty */__webpack_require__.d(__webpack_exports__, "IfEmpty", function() { return IfEmpty; });
/* concated harmony reexport IfInvalid */__webpack_require__.d(__webpack_exports__, "IfInvalid", function() { return IfInvalid; });
/* concated harmony reexport IfIs */__webpack_require__.d(__webpack_exports__, "IfIs", function() { return IfIs; });
/* concated harmony reexport IfNot */__webpack_require__.d(__webpack_exports__, "IfNot", function() { return IfNot; });
/* concated harmony reexport IndexOf */__webpack_require__.d(__webpack_exports__, "IndexOf", function() { return IndexOf; });
/* concated harmony reexport IsAutoFilled */__webpack_require__.d(__webpack_exports__, "IsAutoFilled", function() { return IsAutoFilled; });
/* concated harmony reexport IsDate */__webpack_require__.d(__webpack_exports__, "IsDate", function() { return IsDate; });
/* concated harmony reexport IsDom */__webpack_require__.d(__webpack_exports__, "IsDom", function() { return IsDom; });
/* concated harmony reexport IsElement */__webpack_require__.d(__webpack_exports__, "IsElement", function() { return IsElement; });
/* concated harmony reexport IsElementType */__webpack_require__.d(__webpack_exports__, "IsElementType", function() { return IsElementType; });
/* concated harmony reexport IsEmpty */__webpack_require__.d(__webpack_exports__, "IsEmpty", function() { return IsEmpty; });
/* concated harmony reexport IsMobile */__webpack_require__.d(__webpack_exports__, "IsMobile", function() { return IsMobile; });
/* concated harmony reexport IsNonCollection */__webpack_require__.d(__webpack_exports__, "IsNonCollection", function() { return IsNonCollection; });
/* concated harmony reexport IsObject */__webpack_require__.d(__webpack_exports__, "IsObject", function() { return IsObject; });
/* concated harmony reexport IsTMonad */__webpack_require__.d(__webpack_exports__, "IsTMonad", function() { return IsTMonad; });
/* concated harmony reexport LastOfMonth */__webpack_require__.d(__webpack_exports__, "LastOfMonth", function() { return last_of_month_LastOfMonth; });
/* concated harmony reexport Map */__webpack_require__.d(__webpack_exports__, "Map", function() { return Map; });
/* concated harmony reexport Match */__webpack_require__.d(__webpack_exports__, "Match", function() { return match_Match; });
/* concated harmony reexport Memoize */__webpack_require__.d(__webpack_exports__, "Memoize", function() { return Memoize; });
/* concated harmony reexport Merge */__webpack_require__.d(__webpack_exports__, "Merge", function() { return Merge; });
/* concated harmony reexport MonthData */__webpack_require__.d(__webpack_exports__, "MonthData", function() { return month_data_MonthData; });
/* concated harmony reexport ObserveEvent */__webpack_require__.d(__webpack_exports__, "ObserveEvent", function() { return ObserveEvent; });
/* concated harmony reexport ObserveSlots */__webpack_require__.d(__webpack_exports__, "ObserveSlots", function() { return ObserveSlots; });
/* concated harmony reexport ObserveWorker */__webpack_require__.d(__webpack_exports__, "ObserveWorker", function() { return ObserveWorker; });
/* concated harmony reexport Observer */__webpack_require__.d(__webpack_exports__, "Observer", function() { return Observer; });
/* concated harmony reexport ObserverUnsubscribe */__webpack_require__.d(__webpack_exports__, "ObserverUnsubscribe", function() { return ObserverUnsubscribe; });
/* concated harmony reexport Pipe */__webpack_require__.d(__webpack_exports__, "Pipe", function() { return Pipe; });
/* concated harmony reexport PolyfillMutationObserver */__webpack_require__.d(__webpack_exports__, "PolyfillMutationObserver", function() { return PolyfillMutationObserver; });
/* concated harmony reexport PolyfillObjectAssign */__webpack_require__.d(__webpack_exports__, "PolyfillObjectAssign", function() { return PolyfillObjectAssign; });
/* concated harmony reexport PolyFillWC */__webpack_require__.d(__webpack_exports__, "PolyFillWC", function() { return PolyFillWC; });
/* concated harmony reexport PropertiesAre */__webpack_require__.d(__webpack_exports__, "PropertiesAre", function() { return PropertiesAre; });
/* concated harmony reexport ReduceFilter */__webpack_require__.d(__webpack_exports__, "ReduceFilter", function() { return ReduceFilter; });
/* concated harmony reexport ReduceMap */__webpack_require__.d(__webpack_exports__, "ReduceMap", function() { return ReduceMap; });
/* concated harmony reexport RemoveMeta */__webpack_require__.d(__webpack_exports__, "RemoveMeta", function() { return RemoveMeta; });
/* concated harmony reexport ReplaceElementContents */__webpack_require__.d(__webpack_exports__, "ReplaceElementContents", function() { return ReplaceElementContents; });
/* concated harmony reexport ScrollTo */__webpack_require__.d(__webpack_exports__, "ScrollTo", function() { return ScrollTo; });
/* concated harmony reexport SelectorArrayToAllElements */__webpack_require__.d(__webpack_exports__, "SelectorArrayToAllElements", function() { return SelectorArrayToAllElements; });
/* concated harmony reexport SelectorArrayToElements */__webpack_require__.d(__webpack_exports__, "SelectorArrayToElements", function() { return SelectorArrayToElements; });
/* concated harmony reexport SelectorToElement */__webpack_require__.d(__webpack_exports__, "SelectorToElement", function() { return SelectorToElement; });
/* concated harmony reexport SelectorToElements */__webpack_require__.d(__webpack_exports__, "SelectorToElements", function() { return SelectorToElements; });
/* concated harmony reexport Set */__webpack_require__.d(__webpack_exports__, "Set", function() { return Set; });
/* concated harmony reexport SetAttribute */__webpack_require__.d(__webpack_exports__, "SetAttribute", function() { return SetAttribute; });
/* concated harmony reexport SetCaret */__webpack_require__.d(__webpack_exports__, "SetCaret", function() { return SetCaret; });
/* concated harmony reexport SetShadowRoot */__webpack_require__.d(__webpack_exports__, "SetShadowRoot", function() { return SetShadowRoot; });
/* concated harmony reexport SetStyleRules */__webpack_require__.d(__webpack_exports__, "SetStyleRules", function() { return SetStyleRules; });
/* concated harmony reexport StopIfInvalid */__webpack_require__.d(__webpack_exports__, "StopIfInvalid", function() { return StopIfInvalid; });
/* concated harmony reexport svgTags */__webpack_require__.d(__webpack_exports__, "svgTags", function() { return svgTags; });
/* concated harmony reexport SuperFunction */__webpack_require__.d(__webpack_exports__, "SuperFunction", function() { return SuperFunction; });
/* concated harmony reexport Throttle */__webpack_require__.d(__webpack_exports__, "Throttle", function() { return Throttle; });
/* concated harmony reexport TMonad */__webpack_require__.d(__webpack_exports__, "TMonad", function() { return TMonad; });
/* concated harmony reexport TMonadUpdate */__webpack_require__.d(__webpack_exports__, "TMonadUpdate", function() { return TMonadUpdate; });
/* concated harmony reexport ToArray */__webpack_require__.d(__webpack_exports__, "ToArray", function() { return ToArray; });
/* concated harmony reexport ToBool */__webpack_require__.d(__webpack_exports__, "ToBool", function() { return ToBool; });
/* concated harmony reexport ToCapitalize */__webpack_require__.d(__webpack_exports__, "ToCapitalize", function() { return ToCapitalize; });
/* concated harmony reexport ToDate */__webpack_require__.d(__webpack_exports__, "ToDate", function() { return ToDate; });
/* concated harmony reexport ToDigits */__webpack_require__.d(__webpack_exports__, "ToDigits", function() { return ToDigits; });
/* concated harmony reexport ToEntities */__webpack_require__.d(__webpack_exports__, "ToEntities", function() { return ToEntities; });
/* concated harmony reexport ToFilter */__webpack_require__.d(__webpack_exports__, "ToFilter", function() { return ToFilter; });
/* concated harmony reexport ToFunction */__webpack_require__.d(__webpack_exports__, "ToFunction", function() { return ToFunction; });
/* concated harmony reexport ToIntlPhone */__webpack_require__.d(__webpack_exports__, "ToIntlPhone", function() { return ToIntlPhone; });
/* concated harmony reexport ToJoin */__webpack_require__.d(__webpack_exports__, "ToJoin", function() { return ToJoin; });
/* concated harmony reexport ToJoinMeta */__webpack_require__.d(__webpack_exports__, "ToJoinMeta", function() { return ToJoinMeta; });
/* concated harmony reexport ToJSON */__webpack_require__.d(__webpack_exports__, "ToJSON", function() { return ToJSON; });
/* concated harmony reexport ToLowerCase */__webpack_require__.d(__webpack_exports__, "ToLowerCase", function() { return ToLowerCase; });
/* concated harmony reexport ToMap */__webpack_require__.d(__webpack_exports__, "ToMap", function() { return ToMap; });
/* concated harmony reexport ToMatch */__webpack_require__.d(__webpack_exports__, "ToMatch", function() { return ToMatch; });
/* concated harmony reexport ToMatchAll */__webpack_require__.d(__webpack_exports__, "ToMatchAll", function() { return ToMatchAll; });
/* concated harmony reexport ToMatchMeta */__webpack_require__.d(__webpack_exports__, "ToMatchMeta", function() { return ToMatchMeta; });
/* concated harmony reexport ToNumber */__webpack_require__.d(__webpack_exports__, "ToNumber", function() { return ToNumber; });
/* concated harmony reexport ToObject */__webpack_require__.d(__webpack_exports__, "ToObject", function() { return to_object_ToObject; });
/* concated harmony reexport ToOptions */__webpack_require__.d(__webpack_exports__, "ToOptions", function() { return ToOptions; });
/* concated harmony reexport ToPhone */__webpack_require__.d(__webpack_exports__, "ToPhone", function() { return ToPhone; });
/* concated harmony reexport ToPlainText */__webpack_require__.d(__webpack_exports__, "ToPlainText", function() { return ToPlainText; });
/* concated harmony reexport ToRegex */__webpack_require__.d(__webpack_exports__, "ToRegex", function() { return ToRegex; });
/* concated harmony reexport ToReplace */__webpack_require__.d(__webpack_exports__, "ToReplace", function() { return ToReplace; });
/* concated harmony reexport ToReplacementPattern */__webpack_require__.d(__webpack_exports__, "ToReplacementPattern", function() { return to_replacement_pattern_ToReplacementPattern; });
/* concated harmony reexport ToReplaceMeta */__webpack_require__.d(__webpack_exports__, "ToReplaceMeta", function() { return ToReplaceMeta; });
/* concated harmony reexport ToSlice */__webpack_require__.d(__webpack_exports__, "ToSlice", function() { return ToSlice; });
/* concated harmony reexport ToSplit */__webpack_require__.d(__webpack_exports__, "ToSplit", function() { return ToSplit; });
/* concated harmony reexport ToSplitMeta */__webpack_require__.d(__webpack_exports__, "ToSplitMeta", function() { return ToSplitMeta; });
/* concated harmony reexport ToString */__webpack_require__.d(__webpack_exports__, "ToString", function() { return ToString; });
/* concated harmony reexport ToTrim */__webpack_require__.d(__webpack_exports__, "ToTrim", function() { return ToTrim; });
/* concated harmony reexport ToUpperCase */__webpack_require__.d(__webpack_exports__, "ToUpperCase", function() { return ToUpperCase; });
/* concated harmony reexport ToURI */__webpack_require__.d(__webpack_exports__, "ToURI", function() { return ToURI; });
/* concated harmony reexport ToURIComponent */__webpack_require__.d(__webpack_exports__, "ToURIComponent", function() { return ToURIComponent; });
/* concated harmony reexport ToUsZip */__webpack_require__.d(__webpack_exports__, "ToUsZip", function() { return ToUsZip; });
/* concated harmony reexport TransduceFilter */__webpack_require__.d(__webpack_exports__, "TransduceFilter", function() { return TransduceFilter; });
/* concated harmony reexport TransduceMap */__webpack_require__.d(__webpack_exports__, "TransduceMap", function() { return TransduceMap; });
/* concated harmony reexport Type */__webpack_require__.d(__webpack_exports__, "Type", function() { return Type; });
/* concated harmony reexport UseIf */__webpack_require__.d(__webpack_exports__, "UseIf", function() { return UseIf; });
/* concated harmony reexport ValidateBool */__webpack_require__.d(__webpack_exports__, "ValidateBool", function() { return ValidateBool; });
/* concated harmony reexport ValidateEmail */__webpack_require__.d(__webpack_exports__, "ValidateEmail", function() { return ValidateEmail; });
/* concated harmony reexport ValidateHtml */__webpack_require__.d(__webpack_exports__, "ValidateHtml", function() { return ValidateHtml; });
/* concated harmony reexport ValidateIntlPhone */__webpack_require__.d(__webpack_exports__, "ValidateIntlPhone", function() { return ValidateIntlPhone; });
/* concated harmony reexport ValidateNumber */__webpack_require__.d(__webpack_exports__, "ValidateNumber", function() { return ValidateNumber; });
/* concated harmony reexport ValidateText */__webpack_require__.d(__webpack_exports__, "ValidateText", function() { return ValidateText; });
/* concated harmony reexport ValidateUrl */__webpack_require__.d(__webpack_exports__, "ValidateUrl", function() { return ValidateUrl; });
/* concated harmony reexport ValidateUsPhone */__webpack_require__.d(__webpack_exports__, "ValidateUsPhone", function() { return ValidateUsPhone; });
/* concated harmony reexport ValidateUsZip */__webpack_require__.d(__webpack_exports__, "ValidateUsZip", function() { return ValidateUsZip; });
/* concated harmony reexport WasClickedOn */__webpack_require__.d(__webpack_exports__, "WasClickedOn", function() { return WasClickedOn; });
/* concated harmony reexport WCConstructor */__webpack_require__.d(__webpack_exports__, "WCConstructor", function() { return WCConstructor; });
/* concated harmony reexport WCCSSRulesFromSelector */__webpack_require__.d(__webpack_exports__, "WCCSSRulesFromSelector", function() { return WCCSSRulesFromSelector; });
/* concated harmony reexport WCDefine */__webpack_require__.d(__webpack_exports__, "WCDefine", function() { return WCDefine; });
/* concated harmony reexport WCElements */__webpack_require__.d(__webpack_exports__, "WCElements", function() { return WCElements; });
/* concated harmony reexport WCRenderMarkup */__webpack_require__.d(__webpack_exports__, "WCRenderMarkup", function() { return WCRenderMarkup; });
/** COMPONENTS */























/** SERVICES */









/** UTILS */











































































































































/***/ }),
/* 13 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(1);

var assertThisInitialized = __webpack_require__(5);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(3);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(6);

var setPrototypeOf = __webpack_require__(3);

var isNativeFunction = __webpack_require__(22);

var construct = __webpack_require__(23);

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

module.exports = _wrapNativeSuper;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, ":host(button-element){font:inherit;line-height:inherit;display:inline-block;position:relative}button-element{font:inherit;line-height:inherit;display:inline-block;position:relative}.button-element{display:block;position:relative;margin:1.4em 0}.button-element.nomargin{margin:0}.button-element.slim button{padding:0.25em}.button-element.short button{padding:0.5em 1em}.button-element button{opacity:0;background:#fafafa;position:relative;border:none;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;margin:0px;width:auto;padding:1em;font:inherit;color:inherit;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;box-sizing:border-box;text-overflow:ellipsis;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;box-shadow:inset 0px -2px 0px rgba(0,0,0,0.13),inset 0px 0px 0px 1px rgba(0,0,0,0.25);border-radius:2px;outline:0px !important;-webkit-transform:scale(1);transform:scale(1);white-space:nowrap;-webkit-transition:box-shadow 0.2s, color 0.4s, background-color 0.4s, opacity 0.2s ease-in-out 0.01s;transition:box-shadow 0.2s, color 0.4s, background-color 0.4s, opacity 0.2s ease-in-out 0.01s}.button-element button.ready{opacity:1}.button-element button:hover{background-color:#fff;box-shadow:inset 0px -2px 0px rgba(0,0,0,0.13),inset 0px 0px 0px 1px rgba(0,0,0,0.25),0px 10px 9px -6px rgba(0,0,0,0.2)}.button-element slot{pointer-events:none}\n", ""]);


/***/ }),
/* 18 */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = "<div class=button-element> <button> <effect-ripple start=mousedown end=mouseup speed=600 opacity=0.25 direction=auto></effect-ripple> <effect-bounce-z start=mousedown amount=-4 speed=300></effect-bounce-z> <slot></slot> <style type=text/css rel=stylesheet style=display:none class=themeStyles></style> <style type=text/css rel=stylesheet style=display:none class=injectedStyles></style> </button> </div> ";

/***/ }),
/* 22 */
/***/ (function(module, exports) {

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

module.exports = _isNativeFunction;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(3);

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),
/* 25 */
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, ":host(collapse-menu){display:block}collapse-menu{display:block}.collapse-menu-container{position:relative}.collapse-menu-container .toggle-arrow,.collapse-menu-container .default-toggle-icon{display:inline-block;cursor:pointer;pointer-events:none;opacity:0;position:absolute;top:0;left:0;z-index:-1}.collapse-menu-container .toggle-arrow{position:relative;margin-left:-0.5em;margin-right:-0.5em}.collapse-menu-container .toggle-arrow svg{fill:currentColor}.collapse-menu-container .collapse-menu-items{-webkit-transition:-webkit-transform 0.2s;transition:-webkit-transform 0.2s;transition:transform 0.2s;transition:transform 0.2s, -webkit-transform 0.2s}.collapse-menu-container .collapse-menu-items .collapse-menu-items-inner{flex-wrap:nowrap;white-space:nowrap}.collapse-menu-container:not(.collapseonwrap) .collapse-menu-items .collapse-menu-items-inner{flex-wrap:wrap;white-space:normal}.collapse-menu-container .collapse-menu-items-bg{position:absolute;width:100%;height:100%;opacity:0;-webkit-transition:opacity 0s;transition:opacity 0s}.collapse-menu-container .collapse-menu-toggle{position:absolute;opacity:0;pointer-events:none;height:1.5em;display:-webkit-box;display:flex;cursor:pointer;-webkit-transition:opacity 0.2s;transition:opacity 0.2s}.collapse-menu-container .collapse-menu-toggle-icon{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.collapse-menu-container .collapse-menu-toggle-inner{padding-left:1em;position:relative;display:none;cursor:pointer;margin:0;opacity:0;height:0}.collapse-menu-container .collapse-menu-toggle-inner .default-toggle-inner-icon{position:relative;left:-0.33em;pointer-events:none}.collapse-menu-container[direction=\"horizontal\"] .collapse-menu-items{display:-webkit-box;display:flex}.collapse-menu-container[direction=\"horizontal\"] .collapse-menu-items .collapse-menu-items-inner{display:-webkit-box;display:flex}.collapse-menu-container[expandable=\"true\"] .toggle-arrow,.collapse-menu-container[expandable=\"true\"] .default-toggle-icon{opacity:1;position:relative;pointer-events:all;z-index:unset}.collapse-menu-container[expandable=\"true\"] .collapse-menu-items{opacity:0;pointer-events:none;z-index:-1;position:fixed;-webkit-transform:translateX(-105%);transform:translateX(-105%)}.collapse-menu-container[expandable=\"true\"] .collapse-menu-items-bg{opacity:1;-webkit-transition:opacity 0s linear 0.3s;transition:opacity 0s linear 0.3s}.collapse-menu-container[expandable=\"true\"] .collapse-menu-toggle-inner{display:block;margin:1em 0;height:1.5em;-webkit-transition:margin 0.01s linear 0.4s, height 0.01s linear 0.4s;transition:margin 0.01s linear 0.4s, height 0.01s linear 0.4s}.collapse-menu-container[expandable=\"true\"] .collapse-menu-toggle{position:relative;opacity:1;pointer-events:all}.collapse-menu-container[expandable=\"true\"][align=\"right\"] .collapse-menu-items{-webkit-transform:translateX(105%);transform:translateX(105%)}.collapse-menu-container[expandable=\"false\"] .collapse-menu-items{position:relative;-webkit-transform:translateX(0%);transform:translateX(0%)}.collapse-menu-container[expandable=\"false\"] .collapse-menu-toggle-inner{opacity:0;z-index:-1;pointer-events:none}.collapse-menu-container[expandable=\"true\"][expanded=\"true\"] .collapse-menu-items{-webkit-transform:translateX(0em);transform:translateX(0em);opacity:1;z-index:unset;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;top:0;left:0;height:100vh;-webkit-box-align:start;align-items:flex-start;pointer-events:all}.collapse-menu-container[expandable=\"true\"][expanded=\"true\"] .collapse-menu-items .collapse-menu-items-inner{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;height:calc(100vh - 3.5em);overflow:auto}.collapse-menu-container[expandable=\"true\"][expanded=\"true\"] .collapse-menu-toggle{opacity:0}.collapse-menu-container[expandable=\"true\"][expanded=\"true\"] .collapse-menu-toggle-inner{opacity:1;-webkit-transition:opacity 0.5s ease-in-out 0.1s;transition:opacity 0.5s ease-in-out 0.1s}.collapse-menu-container[expandable=\"true\"][expanded=\"true\"][align=\"right\"] .collapse-menu-items{right:0;left:unset}.collapse-menu-container[expandable=\"true\"][expanded=\"true\"][align=\"right\"] .collapse-menu-toggle-inner{-webkit-transform:rotate(180deg);transform:rotate(180deg);padding-left:0;padding-right:7%}collapse-menu>[slot=\"item\"]{padding-right:1em;box-sizing:border-box;opacity:0}collapse-menu>[slot=\"item\"]:last-of-type{padding-right:0}collapse-menu[expandable=\"false\"]>[slot=\"item\"],collapse-menu:not([expandable])>[slot=\"item\"],collapse-menu[expanded=\"true\"]>[slot=\"item\"]{opacity:1}collapse-menu[expandable=\"false\"]>[slot=\"item\"]:last-of-type,collapse-menu:not([expandable])>[slot=\"item\"]:last-of-type{padding-right:0}collapse-menu[expandable=\"true\"][expanded=\"true\"]>[slot=\"item\"]{padding:0.5em 1em;position:relative}\n", ""]);


/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = "<div class=collapse-menu-container expanded=false expandable=false> <div class=collapse-menu-toggle> <div class=collapse-menu-toggle-icon> <slot name=toggle-icon> <icon-element style=height:1.5em class=default-toggle-icon size=1.5em svg='<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z\"/></svg>'></icon-element> <div class=toggle-arrow style=height:1.5em;margin-top:-.3em> <svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox=\"0 0 24 24\"> <path d=\"M7 10l5 5 5-5z\"/></svg> </div> </slot> </div> </div> <div class=collapse-menu-items> <div class=collapse-menu-items-bg></div> <div class=collapse-menu-toggle-inner> <icon-element class=default-toggle-inner-icon size=1.5em svg='<svg class=\"default-inner-toggle-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z\" /></svg>'></icon-element> </div> <div class=collapse-menu-items-inner> <slot name=item></slot> </div> </div> <style type=text/css rel=stylesheet style=display:none class=internalStyles></style> </div> ";

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, ":host(content-collapse){display:block}.content-collapse-toggler{cursor:pointer;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:100%}.content-collapse-toggler .content-collapse-toggler-content{-webkit-box-flex:1;flex-grow:1}.content-collapse-toggler .content-collapse-toggler-icon{margin-left:-0.33em;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transition:-webkit-transform 0.2s;transition:-webkit-transform 0.2s;transition:transform 0.2s;transition:transform 0.2s, -webkit-transform 0.2s}.content-collapse-toggler .content-collapse-toggler-icon[rotation=\"down\"]{-webkit-transform:rotate(0deg);transform:rotate(0deg)}\n", ""]);


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = "<div class=content-collapse-container> <div class=content-collapse-toggler> <icon-element class=content-collapse-toggler-icon size=1.5em></icon-element> <div class=content-collapse-toggler-content> <slot name=content-collapse-toggler></slot> </div> </div> <div class=content-collapse-content> <content-transition class=content-collapse-transition keepchildren=true type=fade> <div class=content-collapse-empty slot=hidden></div> <div class=content-collapse-content-holder slot=hidden> <slot name=content-collapse-content></slot> </div> </content-transition> </div> <style type=text/css rel=stylesheet style=display:none class=themedStyles></style> <style type=text/css rel=stylesheet style=display:none class=injectedStyles></style> </div> ";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, ":host(content-drawer){display:block;width:100%;position:relative;height:auto;left:0%;top:0px}content-drawer{display:block;width:100%;position:relative;height:auto;left:0%;top:0px}.content-drawer-container{display:block;width:100%;position:relative;height:auto;left:0%;top:0px}.content-drawer-container.open icon-element.content-drawer-header-icon{-webkit-transform:translateZ(0) translateX(-0.3em) translateY(0.05em) rotate(90deg);transform:translateZ(0) translateX(-0.3em) translateY(0.05em) rotate(90deg)}.content-drawer-container .content-drawer-header,.content-drawer-container .content-drawer-content,.content-drawer-container .content-drawer-content-inner,.content-drawer-container .content-drawer-content-inner-inner{position:relative;width:100%;padding:1em 1em 1em 1.5em;box-sizing:border-box}.content-drawer-container .content-drawer-content-inner-inner{padding:0em 1em 1em 1.5em}.content-drawer-container .content-drawer-header{cursor:pointer;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;flex-wrap:nowrap}.content-drawer-container icon-element.content-drawer-header-icon{position:absolute;-webkit-transform:translateZ(0) translateX(-0.4em) translateY(0em) rotate(0deg);transform:translateZ(0) translateX(-0.4em) translateY(0em) rotate(0deg);left:0;-webkit-transition:-webkit-transform 0.2s ease-in-out;transition:-webkit-transform 0.2s ease-in-out;transition:transform 0.2s ease-in-out;transition:transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out}.content-drawer-container .content-drawer-content{overflow:hidden;padding:0em}.content-drawer-container .content-drawer-content-inner{padding:1px}\n", ""]);


/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = "<div class=content-drawer-container> <div class=content-drawer-header> <icon-element class=content-drawer-header-icon size=1.38em></icon-element> <slot name=header></slot> <effect-underline start=none opacity=1 speed=700></effect-underline> <effect-ripple start=none speed=600></effect-ripple> <effect-fade start=none speed=600 opacity=0,1></effect-fade> </div> <div class=content-drawer-content> <div class=content-drawer-content-inner> <div class=content-drawer-content-inner-inner> <slot name=content></slot> </div> </div> </div> <effect-scale start=click></effect-scale> <effect-bounce-z></effect-bounce-z> <style type=text/css rel=stylesheet style=display:none class=injectedStyles></style> </div> ";

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = "<div class=content-transition-container> <div class=content-transition-inner> <div class=next-slot> <slot name=next></slot> </div> <div class=current-slot> <slot current=true name=current></slot> </div> <div class=hidden-slot> <div class=hidden-slot-inner> <slot name=hidden></slot> </div> </div> </div> <style type=text/css rel=stylesheet style=display:none class=themeStyles></style> <style type=text/css rel=stylesheet style=display:none class=injectedStyles></style> </div> ";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, ":host(cookie-message){font:inherit;line-height:inherit;position:fixed;width:100%;height:100%;top:0;left:0;pointer-events:none;z-index:99999999999;display:-webkit-box;display:flex;-webkit-box-align:end;align-items:flex-end}cookie-message{font:inherit;line-height:inherit;position:fixed;width:100%;height:100%;top:0;left:0;pointer-events:none;z-index:99999999999;display:-webkit-box;display:flex;-webkit-box-align:end;align-items:flex-end}.cookie-message-container{position:relative;width:90%;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;margin:1em auto;opacity:0;-webkit-transition:opacity 0.2s ease-in-out;transition:opacity 0.2s ease-in-out}.cookie-message-container button-element{white-space:nowrap}.cookie-message-container.shown{pointer-events:all;opacity:1}.cookie-message-inner{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;padding:0.5em;margin:0 -1em;background-color:#333;color:#fff;border-radius:2px;box-shadow:inset 0px -2px 0px rgba(0,0,0,0.13),inset 0px 0px 0px 1px rgba(0,0,0,0.25)}.cookie-message-inner>*{margin:0 1em}.cookie-message-text{-webkit-box-flex:1;flex-grow:1}\n", ""]);


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = "<div class=cookie-message-container> <div class=cookie-message-inner> <div class=cookie-message-text></div> <button-element class=cookie-message-button></button-element> </div> </div> ";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, "drop-down{outline:none !important}.drop-down-container{display:-webkit-box;display:flex;flex-wrap:nowrap;-webkit-box-align:center;align-items:center;width:100%;position:relative;cursor:pointer;outline:none !important}.drop-down-container.opened overlay-content{z-index:4}.drop-down-container .drop-down-heading{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;flex-wrap:nowrap}.drop-down-container .drop-down-arrow{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;margin:0 0.25em 0 -0.5em}.drop-down-container .drop-down-arrow svg{fill:currentColor}.drop-down-container .drop-down-label{position:relative;display:-webkit-inline-box;display:inline-flex;-webkit-box-align:center;align-items:center;opacity:1;-webkit-transition:opacity 0.2s ease-in-out;transition:opacity 0.2s ease-in-out}.drop-down-container .drop-down-label:after{position:relative;display:inline-block;content:\"\\00a0\"}.drop-down-option{padding:0.5em 1em;color:inherit;background-color:#fafafa;outline:none !important}\n", ""]);


/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = "<div class=drop-down-container> <div class=drop-down-heading> <div class=drop-down-label> <slot name=label></slot> </div> <div class=drop-down-arrow> <svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox=\"0 0 24 24\"> <path d=\"M7 10l5 5 5-5z\"/></svg> </div> </div> <overlay-content align=\"center bottom\" class=drop-down-overlay> <slot name=option></slot> </overlay-content> <style type=text/css rel=stylesheet style=display:none class=themedStyles></style> <style type=text/css rel=stylesheet style=display:none class=injectedStyles></style> <slot name=nonitem></slot> </div> ";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, ":host(dropdown-select){display:inline-block;max-width:100%;vertical-align:top;position:relative;font:inherit;color:inherit;line-height:inherit;height:100%;width:100%}dropdown-select{display:inline-block;max-width:100%;vertical-align:top;position:relative;font:inherit;color:inherit;line-height:inherit;height:100%;width:100%}.dropdown-select-container{display:-webkit-box;display:flex;flex-wrap:nowrap;-webkit-box-align:center;align-items:center;width:100%;height:100%;position:relative;cursor:pointer}.dropdown-select-container[arrow=\"left\"]{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;flex-direction:row-reverse}.dropdown-select-container[arrow=\"left\"] .dropdown-select-arrow{margin:0 -1.25em 0 0;padding-left:0.25em}.dropdown-select-container.disabled{opacity:0.25}.dropdown-select-container.disabled,.dropdown-select-container.readonly{cursor:not-allowed}.dropdown-select-container.disabled .dropdown-select-input-container,.dropdown-select-container.readonly .dropdown-select-input-container{pointer-events:none}.dropdown-select-container[arrow=\"false\"] .dropdown-select-arrow{display:none}.dropdown-select-container.disablefilter input.dropdown-select-filter,.dropdown-select-container.hidden-label.disablefilter input.dropdown-select-filter{pointer-events:none;opacity:0}.dropdown-select-container.disablefilter .dropdown-select-label,.dropdown-select-container.hidden-label.disablefilter .dropdown-select-label{opacity:1}.dropdown-select-container.native-select .dropdown-select-label-container{display:none}.dropdown-select-container.native-select input.dropdown-select-filter{pointer-events:none;opacity:0}.dropdown-select-container.native-select overlay-content{display:none}.dropdown-select-container.native-select select.dropdown-select-input{pointer-events:all;opacity:1}.dropdown-select-container.hidefilteredout .select-option.filtered-out{display:none}.dropdown-select-container.hidden-label input.dropdown-select-filter{opacity:1}.dropdown-select-container.native-select .dropdown-select-label,.dropdown-select-container.hidden-label .dropdown-select-label{opacity:0}.dropdown-select-container.opened overlay-content{z-index:4}.dropdown-select-container .dropdown-select-input-container{position:relative;width:100%;height:100%;-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex}.dropdown-select-container select.dropdown-select-input,.dropdown-select-container input.dropdown-select-filter{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;border:none;box-shadow:none;font:inherit;color:inherit;line-height:inherit;outline:none !important;cursor:pointer;width:100%;padding:1em;height:100%;display:block;text-overflow:ellipsis;box-sizing:border-box}.dropdown-select-container select.dropdown-select-input{position:absolute;top:0px;left:0px;pointer-events:none;opacity:0}.dropdown-select-container input.dropdown-select-filter{opacity:0;position:absolute;-webkit-transition:opacity 0.2s ease-in-out;transition:opacity 0.2s ease-in-out}.dropdown-select-container .dropdown-select-arrow{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;margin:0 0.25em 0 -0.5em}.dropdown-select-container .dropdown-select-arrow svg{fill:currentColor}.dropdown-select-container .select-option{color:inherit;background-color:#fafafa;padding:0.5em 1em;cursor:pointer;-webkit-transition:color 0.2s ease-in-out, background-color 0.2s ease-in-out;transition:color 0.2s ease-in-out, background-color 0.2s ease-in-out}.dropdown-select-container .select-option:hover{color:#fff;background-color:#59a2d8}.dropdown-select-container .select-option.selected{color:#fff;background-color:#59a2d8}.dropdown-select-container .dropdown-select-label-container{position:relative;width:100%;height:100%;top:0;left:0;padding:1em 0.25em 1em 1em;box-sizing:border-box}.dropdown-select-container .dropdown-select-label{position:relative;width:100%;height:100%;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;opacity:1;-webkit-transition:opacity 0.2s ease-in-out;transition:opacity 0.2s ease-in-out}.dropdown-select-container .dropdown-select-label:after{position:relative;display:inline-block;content:\"\\00a0\"}\n", ""]);


/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = "<div class=dropdown-select-container> <div class=dropdown-select-input-container> <div class=dropdown-select-label-container> <div class=dropdown-select-label></div> </div> <input class=dropdown-select-filter> <select class=dropdown-select-input></select> </div> <div class=dropdown-select-arrow> <svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox=\"0 0 24 24\"> <path d=\"M7 10l5 5 5-5z\"/></svg> </div> <overlay-content align=\"center bottom\"></overlay-content> <slot name=effects></slot> <style type=text/css rel=stylesheet style=display:none class=injectedStyles></style> </div> ";

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = "<div class=effect-push-container></div> ";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, ":host(effect-fade){pointer-events:none;box-sizing:border-box}effect-fade,.effect-fade-container,.effect-fade-container *{pointer-events:none;box-sizing:border-box}\n", ""]);


/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = "<div class=effect-fade-container></div> ";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, ".effect-ripple-container,.effect-ripple-container *{pointer-events:none;box-sizing:border-box}.effect-ripple-container{overflow:hidden}.effect-ripple-container .ripple{position:absolute;top:0px;left:0px;height:100%;width:100%;max-width:100%;pointer-events:none;overflow:hidden;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.effect-ripple-container .ripple-inner{display:none;height:0%;padding:50% 0px;width:100%;background:#59a2d8;border-radius:50%;-webkit-transform:perspective(1px) translateZ(0) scaleX(0) scaley(0);transform:perspective(1px) translateZ(0) scaleX(0) scaley(0);-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-backface-visibility:hidden;backface-visibility:hidden;position:absolute}.effect-ripple-container .ripple-inner:nth-child(1){display:block}\n", ""]);


/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = "<div class=effect-ripple-container> <span class=ripple></span> <style type=text/css rel=stylesheet style=display:none class=injectedStyles></style> </div> ";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, ":host(effect-scale){pointer-events:none;box-sizing:border-box}effect-scale,.effect-scale-container,.effect-scale-container *{pointer-events:none;box-sizing:border-box}\n", ""]);


/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = "<div class=effect-scale-container></div> ";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, ":host(effect-underline){pointer-events:none;box-sizing:border-box}effect-underline,.effect-underline-container,.effect-underline-container *{pointer-events:none;box-sizing:border-box}.effect-underline-container .underline{position:absolute;top:calc(100% - 2px);left:0px;height:2px;width:100%;background:#59a2d8;opacity:0;pointer-events:none;display:block;-webkit-transform:perspective(1px) translateZ(0) scaleX(0);transform:perspective(1px) translateZ(0) scaleX(0);-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-backface-visibility:hidden;backface-visibility:hidden}\n", ""]);


/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = "<div class=effect-underline-container> <span class=underline></span> <style type=text/css rel=stylesheet style=display:none class=injectedStyles></style> </div> ";

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = "<div class=grid-layout-container> <div class=grid-layout-items></div> <style type=text/css rel=stylesheet style=display:none class=themeStyles></style> <style type=text/css rel=stylesheet style=display:none class=injectedStyles></style> </div> ";

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, ":host(horizontal-slider){display:-webkit-box;display:flex;width:100%;height:100%;pointer-events:none;overflow:hidden;position:relative;padding:0 0 2.5em;box-sizing:border-box}horizontal-slider{display:-webkit-box;display:flex;width:100%;height:100%;pointer-events:none;overflow:hidden;position:relative;padding:0;box-sizing:border-box}.horizontal-slider-container{width:100%;height:100%;display:-webkit-box;display:flex;-webkit-box-align:start;align-items:flex-start;flex-wrap:nowrap;padding:0;box-sizing:border-box;pointer-events:all;opacity:0;-webkit-transition:opacity 0.2s;transition:opacity 0.2s}.horizontal-slider-container.isready{opacity:1}.horizontal-slider-container.isready .horizontal-slider-items{-webkit-transition:-webkit-transform 0.4s;transition:-webkit-transform 0.4s;transition:transform 0.4s;transition:transform 0.4s, -webkit-transform 0.4s}.horizontal-slider-container.has-chicklets .horizontal-slider-inner{height:calc(100% - 2em)}.horizontal-slider-inner{display:-webkit-box;display:flex;height:100%;-webkit-box-flex:1;flex-grow:1;position:relative;overflow:visible;background:rgba(0,0,0,0.62)}.horizontal-slider-items{display:-webkit-box;display:flex;width:auto;height:100%;-webkit-box-align:center;align-items:center;-webkit-box-pack:start;justify-content:flex-start;flex-wrap:nowrap;position:absolute;touch-action:pan-y;-webkit-perspective:1px;perspective:1px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden;outline:1px solid transparent}.horizontal-slider-item{display:inline-block;height:100%;max-height:100%;width:auto;cursor:pointer;position:relative;z-index:1;pointer-events:all;-webkit-transition:opacity 0.5s ease-in-out;transition:opacity 0.5s ease-in-out}.horizontal-slider-item:before{content:\"\";position:absolute;top:0;bottom:0;width:100%;height:100%;opacity:0;box-shadow:0 5px 25px 0px rgba(0,0,0,0.18),0 12px 12px -10px rgba(0,0,0,0.48);-webkit-transition:opacity 0.5s linear 0.3s;transition:opacity 0.5s linear 0.3s}.horizontal-slider-item:hover,.horizontal-slider-item.active-horizontal-slider-item{z-index:2}.horizontal-slider-item:hover:before,.horizontal-slider-item.active-horizontal-slider-item:before{opacity:1;-webkit-transition:opacity 0.5s;transition:opacity 0.5s}.horizontal-slider-item>*{position:relative}.horizontal-slider-item img{-webkit-perspective:1px;perspective:1px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden;outline:1px solid transparent}.horizontal-slider-item.not-visible-item{opacity:0;pointer-events:none}.horizontal-slider-next,.horizontal-slider-previous{width:2em;min-width:2em;height:100%;display:none;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;flex-basis:0;pointer-events:all;position:relative;z-index:2;background:transparent;cursor:pointer;color:inherit;opacity:0.7;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transition:opacity 0.2s;transition:opacity 0.2s}.horizontal-slider-next:hover,.horizontal-slider-previous:hover{opacity:1}.horizontal-slider-next .horizontal-slider-default-arrow,.horizontal-slider-previous .horizontal-slider-default-arrow{fill:currentColor;stroke:currentColor;stroke-width:0.5px;border-radius:50%;background-color:rgba(0,0,0,0.37);padding:0.25em;display:block;width:2em;height:2em;box-sizing:border-box;box-shadow:inset 0 0 0 1px rgba(0,0,0,0.2)}.horizontal-slider-next.show-horizontal-slider-arrows,.horizontal-slider-previous.show-horizontal-slider-arrows{display:-webkit-box;display:flex}.horizontal-slider-chicklets{position:absolute;width:100%;bottom:5px;left:0;pointer-events:none;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;margin:0 -0.25em;flex-wrap:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.horizontal-slider-chicklets .horizontal-slider-chicklet{width:0.8em;min-width:0.8em;max-width:0.8em;height:0.8em;min-height:0.8em;max-height:0.8em;background-color:rgba(129,133,138,0.49);position:relative;border-radius:50%;pointer-events:all;margin:0 0.25em;cursor:pointer;box-shadow:inset 0 1px 0 0 rgba(0,0,0,0.25),0 1px 0 0 rgba(255,255,255,0.25)}.horizontal-slider-chicklets .horizontal-slider-chicklet:after{content:\"\";width:100%;height:100%;position:absolute;top:0;left:0;background-color:#59a2d8;box-shadow:inset 0 0 0 1px rgba(0,0,0,0.15);opacity:0;border-radius:50%;pointer-events:none;-webkit-transition:opacity 0.2s ease-in-out;transition:opacity 0.2s ease-in-out}.horizontal-slider-chicklets .horizontal-slider-chicklet:hover:after,.horizontal-slider-chicklets .horizontal-slider-chicklet.active:after{opacity:1}\n", ""]);


/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = "<div class=horizontal-slider-container> <div class=horizontal-slider-chicklets></div> <div class=horizontal-slider-previous> <slot name=previous-button> <svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox=\"0 0 24 24\" class=horizontal-slider-default-arrow> <path d=\"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z\"/></svg> </slot> </div> <div class=horizontal-slider-inner> <div class=horizontal-slider-items> <slot></slot> </div> </div> <div class=horizontal-slider-next> <slot name=next-button> <svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox=\"0 0 24 24\" class=horizontal-slider-default-arrow> <path d=\"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z\"/></svg> </slot> </div> </div> ";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, ":host(icon-element){display:-webkit-inline-box;display:inline-flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:start;justify-content:flex-start}icon-element{display:-webkit-inline-box;display:inline-flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:start;justify-content:flex-start}.icon-element-container{display:-webkit-inline-box;display:inline-flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:start;justify-content:flex-start}.icon-element-container .svg-container{display:-webkit-inline-box;display:inline-flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:start;justify-content:flex-start}.icon-element-container svg{width:100%;height:100%;fill:currentColor}\n", ""]);


/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = "<div class=icon-element-container> <div class=svg-container></div> <style type=text/css rel=stylesheet style=display:none class=injectedStyles></style> </div> ";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, ":host(image-loader){display:inline-block}image-loader{display:inline-block}image-loader[fit]{width:100%;height:100%}image-loader[fit][error=\"true\"]{width:auto;height:auto}.image-loader-container{position:relative;width:0%;height:0%}.image-loader-container spinner-element{top:0;left:0}.image-loader-container.animate{-webkit-transition:width 0.2s, height 0.2s;transition:width 0.2s, height 0.2s}.image-loader-container.notready spinner-element{opacity:0}.image-loader-container.fill.show-text[loaded=\"false\"],.image-loader-container.fill[loaded=\"true\"],.image-loader-container.fill[loaded=\"true\"]>img{width:100%;height:100%}.image-loader-container.fill[loaded=\"true\"][fit=\"width\"]>img{width:100%;height:auto}.image-loader-container.errored,.image-loader-container.errored>img{width:auto;height:auto}.image-loader-container,.image-loader-container>img{display:inline-block}.image-loader-container .image-loader-text{display:none}.image-loader-container.show-text .image-loader-text{display:inline-block}.image-loader-container.show-text>img{display:none}.image-loader-container>img{-o-object-fit:contain;object-fit:contain;display:block;opacity:1;-webkit-transition:opacity 0.3s;transition:opacity 0.3s}.image-loader-container.loading>img{opacity:0}\n", ""]);


/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = "<div class=\"image-loader-container notready\" style=opacity:0> <img class=image-loader-image> <div class=image-loader-text></div> <spinner-element scrim=true page=false type=circle visible=false style=opacity:0></spinner-element> <style type=text/css rel=stylesheet style=display:none class=internalStyles></style> <style type=text/css rel=stylesheet style=display:none class=themeStyles></style> </div> ";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, ":host(input-field){display:inline-block;width:300px;max-width:100%;vertical-align:top;position:relative;color:inherit}input-field{display:inline-block;width:300px;max-width:100%;vertical-align:top;position:relative;color:inherit}.input-field-container{display:inline-block;width:100%;max-width:100%;vertical-align:top;opacity:1;pointer-events:all;position:relative}.input-field-container *{box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.input-field-container label{padding:0.1em;font-weight:bold;min-height:1.6em;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;outline:none !important;opacity:1;cursor:pointer;-webkit-transition:opacity 0.2s ease-in-out 0.1s, -webkit-transform 0.2s ease-in-out;transition:opacity 0.2s ease-in-out 0.1s, -webkit-transform 0.2s ease-in-out;transition:opacity 0.2s ease-in-out 0.1s, transform 0.2s ease-in-out;transition:opacity 0.2s ease-in-out 0.1s, transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out}.input-field-container label.input-field-left-label{padding-right:1em}.input-field-container label.input-field-right-label{padding-left:1em}.input-field-container label.input-field-inside-label{position:relative;pointer-events:none;padding:0;font-weight:normal;opacity:0.5;font-size:85%;-webkit-transform:scale(1.1) translateY(2.5em) translateX(1em);transform:scale(1.1) translateY(2.5em) translateX(1em);-webkit-transform-origin:left center;transform-origin:left center;min-height:1.6em;max-width:calc(100% - 4em)}.input-field-container .input-field-container-inner{position:relative;padding:1em 0em;min-height:1em;opacity:0;pointer-events:none;max-width:100%;-webkit-transition:opacity 0.2s ease-in-out 0.01s;transition:opacity 0.2s ease-in-out 0.01s}.input-field-container .input-field-container-inner.ready{opacity:1;pointer-events:all}.input-field-container .input-field-container-inner[label-position=\"inside\"]{padding:0 0 1.3em}.input-field-container .input-field-container-inner[label-position=\"left\"] .input-field-bottom-content{-webkit-box-pack:end;justify-content:flex-end;text-align:right}.input-field-container .input-field-container-inner[label-position=\"right\"] .input-field-bottom-content{-webkit-box-pack:start;justify-content:flex-start}.input-field-container .input-field-container-inner.invalid[label-position=\"inside\"]{padding:0}.input-field-container .input-field-container-inner.invalid .input-field-message-help{opacity:0;font-size:0%;-webkit-transform:scale(0);transform:scale(0)}.input-field-container .input-field-container-inner.invalid .input-field-message-error{opacity:1;font-size:90%;-webkit-transform:scale(1);transform:scale(1)}.input-field-container .input-field-container-inner.invalid .input-field-border{box-shadow:inset 0px 0px 0px 1px #a10005}.input-field-container .input-field-container-inner[input-kind=\"checkbox\"],.input-field-container .input-field-container-inner[input-kind=\"radio\"]{min-height:5.25em;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center}.input-field-container .input-field-container-inner[input-kind=\"checkbox\"] label.input-field-left-label,.input-field-container .input-field-container-inner[input-kind=\"checkbox\"] label.input-field-right-label,.input-field-container .input-field-container-inner[input-kind=\"radio\"] label.input-field-left-label,.input-field-container .input-field-container-inner[input-kind=\"radio\"] label.input-field-right-label{margin-top:-0.2em}.input-field-container .input-field-container-inner[input-kind=\"checkbox\"] .input-field-input-container-inner,.input-field-container .input-field-container-inner[input-kind=\"radio\"] .input-field-input-container-inner{width:1.7em;height:1.7em;left:-.25em;top:-.25em;position:relative;margin-right:-0.5em;margin-bottom:-0.25em;cursor:pointer;pointer-events:all}.input-field-container .input-field-container-inner[input-kind=\"checkbox\"] .input-field-border,.input-field-container .input-field-container-inner[input-kind=\"radio\"] .input-field-border{box-shadow:none}.input-field-container .input-field-container-inner[input-kind=\"checkbox\"] .input-field-input,.input-field-container .input-field-container-inner[input-kind=\"radio\"] .input-field-input{width:100%;height:100%;padding:0;position:relative;opacity:0;pointer-events:none}.input-field-container .input-field-container-inner[input-kind=\"checkbox\"] .input-field-input::-webkit-input-placeholder,.input-field-container .input-field-container-inner[input-kind=\"radio\"] .input-field-input::-webkit-input-placeholder{color:currentColor;opacity:0.62}.input-field-container .input-field-container-inner[input-kind=\"checkbox\"] .input-field-input:-webkit-input-placeholder,.input-field-container .input-field-container-inner[input-kind=\"radio\"] .input-field-input:-webkit-input-placeholder{color:currentColor;opacity:0.62}.input-field-container .input-field-container-inner[input-kind=\"checkbox\"] .input-field-input:-ms-input-placeholder,.input-field-container .input-field-container-inner[input-kind=\"radio\"] .input-field-input:-ms-input-placeholder{color:currentColor;opacity:0.62}.input-field-container .input-field-container-inner[input-kind=\"checkbox\"] .input-field-input::-webkit-input-placeholder,.input-field-container .input-field-container-inner[input-kind=\"radio\"] .input-field-input::-webkit-input-placeholder{color:currentColor;opacity:0.62}.input-field-container .input-field-container-inner[input-kind=\"checkbox\"] .input-field-input::-moz-placeholder,.input-field-container .input-field-container-inner[input-kind=\"radio\"] .input-field-input::-moz-placeholder{color:currentColor;opacity:0.62}.input-field-container .input-field-container-inner[input-kind=\"checkbox\"] .input-field-input::-ms-input-placeholder,.input-field-container .input-field-container-inner[input-kind=\"radio\"] .input-field-input::-ms-input-placeholder{color:currentColor;opacity:0.62}.input-field-container .input-field-container-inner[input-kind=\"checkbox\"] .input-field-input::placeholder,.input-field-container .input-field-container-inner[input-kind=\"radio\"] .input-field-input::placeholder{color:currentColor;opacity:0.62}.input-field-container .input-field-container-inner[input-kind=\"checkbox\"] effect-underline,.input-field-container .input-field-container-inner[input-kind=\"radio\"] effect-underline{display:none}.input-field-container .input-field-container-inner[input-kind=\"checkbox\"] .input-field-middle-section,.input-field-container .input-field-container-inner[input-kind=\"checkbox\"] .input-field-input-section,.input-field-container .input-field-container-inner[input-kind=\"radio\"] .input-field-middle-section,.input-field-container .input-field-container-inner[input-kind=\"radio\"] .input-field-input-section{width:auto;-webkit-box-flex:0;flex-grow:0}.input-field-container .input-field-container-inner[input-kind=\"checkbox\"] .input-field-middle-section,.input-field-container .input-field-container-inner[input-kind=\"radio\"] .input-field-middle-section{-webkit-box-align:start;align-items:flex-start}.input-field-container .input-field-container-inner[input-kind=\"checkbox\"] .input-field-input-container-inner:after{content:\"\";display:block;position:absolute;top:0.24em;left:0.24em;width:1.2em;height:1.2em;pointer-events:none;background:rgba(255,255,255,0.4);box-shadow:inset 0px 0px 0px 1px;-webkit-transition:background-color .4s, box-shadow .4s;transition:background-color .4s, box-shadow .4s}.input-field-container .input-field-container-inner[input-kind=\"checkbox\"].checked .input-field-input-container-inner:after{background:currentColor}.input-field-container .input-field-container-inner[input-kind=\"radio\"] .input-field-input-overlay{border-radius:50%}.input-field-container .input-field-container-inner[input-kind=\"radio\"] .input-field-input-container-inner:before{content:\"\";display:block;position:absolute;top:0.235em;left:0.235em;width:1.2em;height:1.2em;pointer-events:none;background:rgba(255,255,255,0.4);border-radius:50%;box-shadow:inset 0px 0px 0px 1px;-webkit-transition:background-color .4s, box-shadow .4s;transition:background-color .4s, box-shadow .4s}.input-field-container .input-field-container-inner[input-kind=\"radio\"].checked .input-field-input-container-inner:before{background:currentColor}.input-field-container .input-field-container-inner[input-kind=\"radio\"].checked .input-field-input-container-inner:after{content:\"\\00b7\";color:#fff;display:-webkit-box;display:flex;position:absolute;pointer-events:none;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;font-size:2.3em;top:0;left:0;width:100%;height:100%;line-height:2.3em}.input-field-container .input-field-container-inner[input-kind=\"textarea\"] .input-field-input-overlay{padding-top:0.85em;-webkit-box-align:start;align-items:flex-start}.input-field-container .input-field-container-inner[input-kind=\"checkbox\"] input,.input-field-container .input-field-container-inner[input-kind=\"radio\"] input{cursor:pointer}.input-field-container .input-field-container-inner.notempty label.input-field-inside-label,.input-field-container .input-field-container-inner.focused label.input-field-inside-label,.input-field-container .input-field-container-inner.icon.notempty[icon-align=\"left\"] label.input-field-inside-label,.input-field-container .input-field-container-inner.icon.notempty[icon-align=\"right\"] label.input-field-inside-label,.input-field-container .input-field-container-inner.icon.focused[icon-align=\"left\"] label.input-field-inside-label,.input-field-container .input-field-container-inner.icon.focused[icon-align=\"right\"] label.input-field-inside-label,.input-field-container .input-field-container-inner.icon.clearbutton.notempty label.input-field-inside-label,.input-field-container .input-field-container-inner.icon.clearbutton.focused label.input-field-inside-label{pointer-events:all;padding:0;font-weight:bold;opacity:1;font-size:85%;-webkit-transform:scale(1) translateY(0em) translateX(0em);transform:scale(1) translateY(0em) translateX(0em);max-width:100%}.input-field-container .input-field-container-inner.icon .input-field-icon{pointer-events:all;cursor:pointer}.input-field-container .input-field-container-inner.notempty.checked[input-kind=\"checkbox\"] .input-field-checkbox-overlay{opacity:1}.input-field-container .input-field-container-inner:not(.focused){-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.input-field-container .input-field-container-inner:not(.focused) .input-field-label-inside{-webkit-transform:translate3d(0, 0, 1px);transform:translate3d(0, 0, 1px)}.input-field-container .input-field-container-inner[resize=\"auto\"] .input-field-input,.input-field-container .input-field-container-inner[resize=\"none\"] .input-field-input{resize:none}.input-field-container .input-field-container-inner[resize=\"horizontal\"] .input-field-input{resize:horizontal}.input-field-container .input-field-container-inner[resize=\"vertical\"] .input-field-input{resize:vertical}.input-field-container .input-field-container-inner[input-kind=\"file\"] .input-field-input-container-inner{background:rgba(255,255,255,0.4);position:relative;cursor:pointer;border-radius:2px}.input-field-container .input-field-container-inner[input-kind=\"file\"] .input-field-input-container-inner:after{content:attr(title) \"\";position:absolute;width:100%;height:100%;top:0;left:0;padding:1em;box-sizing:border-box;pointer-events:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.input-field-container .input-field-container-inner[input-kind=\"file\"] .input-field-input{opacity:0;font-weight:normal;padding:0.929em 1em;cursor:pointer}.input-field-container .input-field-container-inner.max .input-field-character-count-max-divider,.input-field-container .input-field-container-inner.max .input-field-character-count-max,.input-field-container .input-field-container-inner.maxlength .input-field-character-count-max-divider,.input-field-container .input-field-container-inner.maxlength .input-field-character-count-max{display:block}.input-field-container .input-field-container-inner.showcount .input-field-character-count-container{display:block}.input-field-container .input-field-container-inner.clearbutton .input-field-clear{opacity:1;pointer-events:all;cursor:pointer;display:-webkit-box;display:flex}.input-field-container .input-field-container-inner.icon[icon-align=\"right\"] .input-field-input,.input-field-container .input-field-container-inner.clearbutton .input-field-input{padding-right:2.2em}.input-field-container .input-field-container-inner.icon[icon-align=\"left\"] .input-field-input{padding-left:2.2em}.input-field-container .input-field-container-inner.icon[icon-align=\"left\"] label.input-field-inside-label,.input-field-container .input-field-container-inner.icon.clearbutton label.input-field-inside-label{padding-left:1.2em}.input-field-container .input-field-container-inner.icon.clearbutton .input-field-input{padding-left:2.2em;padding-right:2.2em}.input-field-container .input-field-container-inner.icon[icon-align=\"right\"] .input-field-input-overlay{-webkit-box-pack:end;justify-content:flex-end}.input-field-container .input-field-container-inner.icon.clearbutton[icon-align=\"right\"] .input-field-input-overlay{-webkit-box-pack:justify;justify-content:space-between}.input-field-container .input-field-bottom-content{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between;font-size:90%;padding:0.1em}.input-field-container .input-field-message-help{opacity:0.6;line-height:1.6em;font-size:90%;-webkit-transform:scale(1);transform:scale(1);-webkit-transition:opacity 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;transition:opacity 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;transition:opacity 0.2s ease-in-out, transform 0.2s ease-in-out;transition:opacity 0.2s ease-in-out, transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out}.input-field-container .input-field-message-error{opacity:0;line-height:1.6em;-webkit-transform:scale(0);transform:scale(0);font-size:0%;color:#a10005;-webkit-transition:opacity 0.2s ease-in-out 0.1s, -webkit-transform 0.2s ease-in-out;transition:opacity 0.2s ease-in-out 0.1s, -webkit-transform 0.2s ease-in-out;transition:opacity 0.2s ease-in-out 0.1s, transform 0.2s ease-in-out;transition:opacity 0.2s ease-in-out 0.1s, transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out}.input-field-container .input-field-character-count-inner{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:end;justify-content:flex-end;opacity:0.6;padding:0em 0em 0em 1em}.input-field-container .input-field-character-count-container,.input-field-container .input-field-character-count-max-divider,.input-field-container .input-field-character-count-max{display:none}.input-field-container icon-element{-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;display:-webkit-box;display:flex}.input-field-container .input-field-clear{display:none}.input-field-container .input-field-middle-section{display:-webkit-box;display:flex;flex-wrap:nowrap;width:100%;-webkit-box-align:center;align-items:center;position:relative}.input-field-container .input-field-input-section{width:100%;max-width:100%;position:relative;-webkit-box-flex:1;flex-grow:1;flex-basis:0}.input-field-container .input-field-input-container{position:relative}.input-field-container .input-field-input,.input-field-container .input-field-input.multi-input input{background:rgba(255,255,255,0.4);position:relative;border:none;border-radius:2px;display:block;margin:0em;width:100%;padding:1em;opacity:1;font:inherit;color:inherit;outline:none !important;-webkit-appearance:none;-moz-appearance:none;appearance:none;box-sizing:border-box;text-overflow:ellipsis;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;box-shadow:none;-webkit-transition:color 0.4s, background-color 0.4s, opacity 0.2s, box-shadow 0.3s;transition:color 0.4s, background-color 0.4s, opacity 0.2s, box-shadow 0.3s}.input-field-container .input-field-input[disabled],.input-field-container .input-field-input.multi-input input[disabled]{pointer-events:none;cursor:not-allowed;opacity:0.6;background:rgba(200,200,200,0.6)}.input-field-container .input-field-input[readonly],.input-field-container .input-field-input.multi-input input[readonly]{cursor:not-allowed;pointer-events:none}.input-field-container .input-field-input.intl-phone-input,.input-field-container .input-field-input.multi-input input.intl-phone-input{padding:0;display:-webkit-box;display:flex;flex-wrap:nowrap;-webkit-box-align:center;align-items:center}.input-field-container .input-field-input.intl-phone-input input,.input-field-container .input-field-input.multi-input input.intl-phone-input input{-webkit-box-flex:1;flex-grow:1;width:100%;padding:1em 1em 1em 0.25em;margin:0;border:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;outline:none !important;font:inherit;line-height:inherit}.input-field-container .input-field-input.multi-input,.input-field-container .input-field-input.multi-input input.multi-input{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;padding:0}.input-field-container .input-field-input.multi-input>input,.input-field-container .input-field-input.multi-input input.multi-input>input{background:transparent}.input-field-container input,.input-field-container textarea{cursor:text}.input-field-container input::-ms-clear{display:none}@supports (-webkit-overflow-scrolling: touch){.input-field-container input.input-field-input:focus,.input-field-container textarea.input-field-input:focus{font-size:16px !important}}.input-field-container .input-field-border{position:absolute;width:100%;height:100%;top:0;left:0;border-radius:2px;pointer-events:none;box-shadow:inset 0px 0px 0px 1px;color:inherit;-webkit-transition:box-shadow 0.4s;transition:box-shadow 0.4s}.input-field-container .input-field-input-effects{position:absolute;width:100%;height:100%;top:0px;left:0px;pointer-events:none;padding:0em;overflow:hidden;border-radius:2px}.input-field-container .input-field-input-overlay{position:absolute;width:100%;height:100%;top:0px;left:0px;pointer-events:none;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between;padding:0em 0.5em}.input-field-container .input-field-checkbox-overlay{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;position:absolute;width:1.2em;height:1.2em;top:0px;left:0px;pointer-events:none;color:#fff;opacity:0;margin-left:0.009em;-webkit-transition:opacity 0.2s ease-in-out;transition:opacity 0.2s ease-in-out}.input-field-file-path-overlay{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;background:transparent;border:none;display:block;margin:0em;padding:1em;opacity:1;font:inherit;color:inherit;outline:none !important;-webkit-appearance:none;-moz-appearance:none;appearance:none;box-sizing:border-box;text-overflow:ellipsis;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;box-shadow:none}\n", ""]);


/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = "<div class=input-field-container> <div class=input-field-container-inner> <div class=input-field-top-section> <div class=input-field-label-top></div> </div> <div class=input-field-middle-section> <div class=input-field-label-left></div> <div class=input-field-input-section> <div class=input-field-label-inside></div> <div class=input-field-input-container> <div class=input-field-input-container-inner></div> <div class=input-field-input-effects> <effect-underline start=focus end=blur opacity=0.8 speed=700></effect-underline> <effect-ripple start=focus opacity=0.25 speed=600></effect-ripple> <effect-bounce-z amount=-4 speed=300></effect-bounce-z> </div> <div class=input-field-input-overlay> <icon-element class=input-field-icon size=1.25em></icon-element> <icon-element class=input-field-clear size=1.25em></icon-element> <input type=text class=input-field-file-path-overlay> <div class=input-field-checkbox-overlay> <icon-element class=input-field-checkbox-icon size=0.7em></icon-element> </div> </div> <div class=input-field-border></div> <input type=hidden class=input-field-hidden-input> </div> </div> <div class=input-field-label-right></div> </div> <div class=input-field-bottom-section> <div class=input-field-label-bottom></div> <div class=input-field-bottom-content> <div class=input-field-messages> <div class=input-field-message-help></div> <div class=input-field-message-error></div> </div> <div class=input-field-character-count-container> <div class=input-field-character-count-inner> <div class=input-field-character-count></div> <div class=input-field-character-count-max-divider>/</div> <div class=input-field-character-count-max></div> </div> </div> </div> </div> </div> <style type=text/css rel=stylesheet style=display:none class=themeStyles></style> <style type=text/css rel=stylesheet style=display:none class=injectedStyles></style> </div> ";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, ":host(overlay-content){display:block;position:fixed;height:0px;width:0px;top:0px;left:0px;z-index:99999;overflow:visible;pointer-events:none}overlay-content{display:block;position:fixed;height:0px;width:0px;top:0px;left:0px;z-index:99999;overflow:visible;pointer-events:none}.overlay-content-container{display:block;position:absolute;height:0px;width:0px;top:0px;left:0px;z-index:99999;overflow:visible;pointer-events:none}.overlay-content-container .overlay-content-container-inner{position:absolute;width:100%;height:100%;top:0px;left:0px;pointer-events:none;overflow:hidden;display:none}.overlay-content-container .overlay-content-content-container{max-height:80vh;max-width:80vw;overflow:auto;position:absolute;width:100%;-webkit-transform-origin:center center;transform-origin:center center;-webkit-transform:scale(1, 0);transform:scale(1, 0);pointer-events:none;opacity:0;display:-webkit-inline-box;display:inline-flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-transition:opacity 0.2s ease-in-out;transition:opacity 0.2s ease-in-out}.overlay-content-container.active .overlay-content-container-inner{display:block}.overlay-content-container.active .overlay-content-content-container{pointer-events:all;opacity:1}.overlay-content-container.activating .overlay-content-container-inner{display:block}.overlay-content-container .overlay-content-content-inner{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:end;justify-content:flex-end;min-height:0}.overlay-content-container .overlay-content-content-inner.bottom{-webkit-box-pack:start;justify-content:flex-start}\n", ""]);


/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = "<div class=overlay-content-container> <div class=overlay-content-container-inner> <div class=overlay-content-content-container> <div class=overlay-content-content-inner> <slot></slot> </div> </div> </div> <style type=text/css rel=stylesheet style=display:none class=themeStyles></style> <style type=text/css rel=stylesheet style=display:none class=injectedStyles></style> </div> ";

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, ".overlay-message-container{position:fixed;width:100%;height:100%;top:0;left:0;opacity:0;pointer-events:none;-webkit-transition:opacity 0.3s;transition:opacity 0.3s}.overlay-message-container .overlay-message-scrim{position:absolute;width:100%;height:100%;background:rgba(31,31,31,0.9);-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}.overlay-message-container .overlay-message-content-container{position:relative;top:50%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;width:80%;max-width:600px;max-height:90vh;overflow:auto;margin:auto;border-radius:5px;color:#fff;text-shadow:0 1px 3px rgba(0,0,0,0.25),0 2px 22px rgba(0,0,0,0.62);-webkit-transform:translateY(-50%);transform:translateY(-50%)}.overlay-message-container .overlay-message-content{padding:0.62em}.overlay-message-container .overlay-message-header{font-size:162%;text-transform:capitalize;font-weight:bold;padding:0.125em 0;box-sizing:border-box;position:relative;white-space:nowrap;-webkit-box-flex:1;flex-grow:1}.overlay-message-container .overlay-message-header:after{content:\"\";display:block;width:100%;box-shadow:0 1px 0 0;height:1px;opacity:0.25;margin-top:0.25em;margin-bottom:0.75em}.overlay-message-container .overlay-message-header:empty{display:none}.overlay-message-container .overlay-message-body{opacity:0.62}.overlay-message-container .overlay-message-buttons{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:end;justify-content:flex-end;width:calc(100% + 0.5em);margin-left:-0.25em;padding:1.5em 0 0;box-sizing:border-box;white-space:nowrap;-webkit-box-flex:1;flex-grow:1}.overlay-message-container .overlay-message-buttons ::slotted(*){margin:0 0.25em}.overlay-message-container.shown{opacity:1;pointer-events:all;z-index:99999999999999999}.overlay-message-container[colortheme=\"light\"] .overlay-message-content-container,.overlay-message-container[colortheme=\"dark\"] .overlay-message-content-container{text-shadow:none;padding:1.5em;box-sizing:border-box;box-shadow:0 10px 10px -5px rgba(0,0,0,0.38)}.overlay-message-container[colortheme=\"light\"] .overlay-message-content-container{background:#fafafa;color:#333}.overlay-message-container[colortheme=\"dark\"] .overlay-message-content-container{background:#1f1f1f;color:#e2e2e2}\n", ""]);


/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = "<div class=overlay-message-container> <div class=overlay-message-scrim></div> <div class=overlay-message-content-container> <div class=overlay-message-header> <slot name=header></slot> </div> <div class=overlay-message-body> <slot name=body></slot> </div> <div class=overlay-message-buttons> <slot name=button></slot> </div> </div> <style type=text/css rel=stylesheet style=display:none class=themeStyles></style> <style type=text/css rel=stylesheet style=display:none class=injectedStyles></style> </div> ";

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, "@-webkit-keyframes indeterminate{0%{-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:translateX(0%) scale(0, 1);transform:translateX(0%) scale(0, 1)}100%{-webkit-transform-origin:50% 0;transform-origin:50% 0;-webkit-transform:translateX(100%) scale(0.8, 1);transform:translateX(100%) scale(0.8, 1)}}@keyframes indeterminate{0%{-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:translateX(0%) scale(0, 1);transform:translateX(0%) scale(0, 1)}100%{-webkit-transform-origin:50% 0;transform-origin:50% 0;-webkit-transform:translateX(100%) scale(0.8, 1);transform:translateX(100%) scale(0.8, 1)}}.progress-bar-container{width:100%;height:100%;opacity:0;pointer-events:none;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;-webkit-transition:opacity 0.3s;transition:opacity 0.3s}.progress-bar-container.overlay{position:fixed;top:0;left:0}.progress-bar-container.overlay .progress-bar-inner{width:90%}.progress-bar-container.overlay .progress-bar-heading{width:90%;left:0;-webkit-box-pack:center;justify-content:center}.progress-bar-container.overlay .progress-bar-bottom-container{width:90%;-webkit-box-align:center;align-items:center}.progress-bar-container.visible{opacity:1;pointer-events:all}.progress-bar-container.percentage .progress-bar-percentage{display:block}.progress-bar-container:not(.scrim){background-color:transparent}.progress-bar-container:not(.track) .progress-bar-track:before{background-color:transparent}.progress-bar-container[animation=\"indeterminate\"] .progress-bar-top,.progress-bar-container[animation=\"indeterminate\"] .progress-bar-bottom{width:100% !important;-webkit-transform-origin:0 0;transform-origin:0 0}.progress-bar-container[animation=\"indeterminate\"].visible .progress-bar-top{-webkit-animation-name:indeterminate;animation-name:indeterminate;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-timing-function:cubic-bezier(0.445, 0.05, 0.55, 0.95);animation-timing-function:cubic-bezier(0.445, 0.05, 0.55, 0.95)}.progress-bar-container[animation=\"indeterminate\"].visible .progress-bar-bottom{opacity:1;-webkit-animation-name:indeterminate;animation-name:indeterminate;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-timing-function:cubic-bezier(0.445, 0.05, 0.55, 0.95);animation-timing-function:cubic-bezier(0.445, 0.05, 0.55, 0.95);-webkit-animation-delay:1.382s;animation-delay:1.382s}.progress-bar-heading{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:start;justify-content:flex-start;position:relative;left:-0.25em;width:calc(100% + 0.5em);font-size:1.25em}.progress-bar-heading>*{margin:0 0.5em;padding:1em 0}.progress-bar-heading:empty{display:none}.progress-bar-header:empty{display:none}.progress-bar-percentage{display:none}.progress-bar-inner{width:100%;position:relative;height:3px;overflow:hidden}.progress-bar-track{width:100%;height:100%}.progress-bar-track:before{content:'';position:absolute;width:100%;height:100%;top:0;left:0;opacity:0.33;background:currentColor}.progress-bar-bottom,.progress-bar-top{position:absolute;width:0;height:100%;top:0;left:0;background-color:currentColor;-webkit-transition:width 0.2s linear;transition:width 0.2s linear}.progress-bar-bottom{opacity:0.33}.progress-bar-cancel{display:none}.progress-bar-cancel.show{display:block}.progress-bar-bottom-container{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:start;align-items:flex-start;width:100%}.progress-bar-text{padding:1em 0}.progress-bar-text:empty{display:none}\n", ""]);


/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = "<div class=progress-bar-container> <div class=progress-bar-heading> <div class=progress-bar-header></div> <div class=progress-bar-percentage></div> </div> <div class=progress-bar-inner> <div class=progress-bar-track> <div class=progress-bar-track-inner> <div class=progress-bar-bottom></div> <div class=progress-bar-top></div> </div> </div> </div> <div class=progress-bar-bottom-container> <div class=progress-bar-text></div> <button-element class=progress-bar-button></button-element> </div> <style type=text/css rel=stylesheet style=display:none class=themeStyles></style> <style type=text/css rel=stylesheet style=display:none class=injectedStyles></style> </div> ";

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, ".snack-bar-container{pointer-events:none;opacity:0;position:fixed;left:0;width:100%;z-index:10;box-sizing:border-box;-webkit-transition:opacity 0.2s ease-in-out;transition:opacity 0.2s ease-in-out}.snack-bar-container[align=\"none\"]{top:unset;left:unset;position:relative}.snack-bar-container[align=\"top\"]{top:4em}.snack-bar-container[align=\"bottom\"]{bottom:2em}.snack-bar-container.shown{pointer-events:all;opacity:1}.snack-bar-container .snack-bar-inner{width:90%;max-width:600px;background-color:#fff;box-shadow:0 7px 10px -5px rgba(0,0,0,0.61);margin:0 auto;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;flex-wrap:nowrap;-webkit-box-flex:0;flex:0 1 auto}.snack-bar-container .snack-bar-inner [slot=\"body\"]{padding:1em;box-sizing:border-box;-webkit-box-align:center;align-items:center;display:block;width:100%;word-break:break-word}.snack-bar-container .snack-bar-inner ::slotted(*){padding:1em;box-sizing:border-box;-webkit-box-align:center;align-items:center;display:block;width:100%;word-break:break-word}.snack-bar-container .snack-bar-text{-webkit-box-flex:1;flex-grow:1;width:calc(100% - 7.5em)}.snack-bar-container .snack-bar-text .snack-bar-text-inner{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;width:100%;-webkit-box-flex:0;flex:0 1 auto}.snack-bar-container .snack-bar-text,.snack-bar-container .snack-bar-icon,.snack-bar-container .snack-bar-close,.snack-bar-container .snack-bar-type-bar{display:-webkit-box;display:flex;align-self:stretch;-webkit-box-flex:0;flex:0 1 auto}.snack-bar-container .snack-bar-type-bar{width:3px;min-width:3px;display:none}.snack-bar-container .snack-bar-close{width:4em;-ms-flex-preferred-size:4em}.snack-bar-container .snack-bar-close .snack-bar-close-inner{padding:1em;box-sizing:border-box;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.snack-bar-container .snack-bar-icon{width:3.5em;-ms-flex-preferred-size:3.5em;color:#fff;background-image:linear-gradient(-75deg, rgba(0,0,0,0.125), transparent 36%)}.snack-bar-container .snack-bar-icon .snack-bar-icon-inner{width:100%;padding:1em;box-sizing:border-box;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.snack-bar-container .infoicon,.snack-bar-container .successicon,.snack-bar-container .warningicon,.snack-bar-container .erroricon{display:none;box-sizing:border-box;-webkit-box-align:center;align-items:center}.snack-bar-container[type=\"info\"] .infoicon{display:-webkit-box;display:flex}.snack-bar-container[type=\"info\"] .snack-bar-icon{background-color:#4fa8b8}.snack-bar-container[type=\"info\"] .snack-bar-type-bar{display:-webkit-box;display:flex;background-color:#4fa8b8}.snack-bar-container[type=\"error\"] .erroricon{display:-webkit-box;display:flex}.snack-bar-container[type=\"error\"] .snack-bar-icon{background-color:#ce0000}.snack-bar-container[type=\"error\"] .snack-bar-type-bar{display:-webkit-box;display:flex;background-color:#ce0000}.snack-bar-container[type=\"warning\"] .warningicon{display:-webkit-box;display:flex}.snack-bar-container[type=\"warning\"] .snack-bar-icon{background-color:#f1813a}.snack-bar-container[type=\"warning\"] .snack-bar-type-bar{display:-webkit-box;display:flex;background-color:#f1813a}.snack-bar-container[type=\"success\"] .successicon{display:-webkit-box;display:flex}.snack-bar-container[type=\"success\"] .snack-bar-icon{background-color:#5eb344}.snack-bar-container[type=\"success\"] .snack-bar-type-bar{display:-webkit-box;display:flex;background-color:#5eb344}.snack-bar-container.hide-close-btn .snack-bar-close{display:none}.snack-bar-container.hide-close-btn .snack-bar-text{width:calc(100% - 3.5em)}\n", ""]);


/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = "<div class=snack-bar-container> <div class=snack-bar-inner> <div class=snack-bar-icon> <div class=snack-bar-icon-inner> <icon-element size=1.5em class=infoicon></icon-element> <icon-element size=1.5em class=successicon></icon-element> <icon-element size=1.5em class=erroricon></icon-element> <icon-element size=1.5em class=warningicon></icon-element> </div> </div> <div class=snack-bar-text> <div class=snack-bar-text-inner> <slot name=body></slot> </div> </div> <div class=snack-bar-close> <div class=snack-bar-close-inner> <button-element class=\"snack-bar-default-button nomargin slim\" styles=\".button-element.snack-bar-default-button button,.button-element.snack-bar-default-button button:hover{background-color:transparent;box-shadow:none;}\"> <icon-element size=1.5em svg='<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"/></svg>'></icon-element> </button-element> </div> </div> <div class=snack-bar-type-bar></div> </div> <style type=text/css rel=stylesheet style=display:none class=themeStyles></style> <style type=text/css rel=stylesheet style=display:none class=injectedStyles></style> </div> ";

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, ":host(spinner-element){position:absolute;height:100%;width:100%;display:block;pointer-events:none;z-index:999999999999999999}:host(spinner-element)[page=\"true\"]{top:0;left:0}spinner-element{position:absolute;height:100%;width:100%;display:block;pointer-events:none;z-index:999999999999999999}spinner-element[page=\"true\"]{top:0;left:0}.spinner-element-container{width:100%;height:100%;top:0;left:0;opacity:0;pointer-events:none;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;-webkit-transition:opacity 0.3s;transition:opacity 0.3s}.spinner-element-container.fullpage{position:fixed}.spinner-element-container.shown{opacity:1;pointer-events:all}.spinner-element-container.shown[type=\"column\"] .spin,.spinner-element-container.shown[type=\"column\"] .spin:before,.spinner-element-container.shown[type=\"column\"] .spin:after{background:currentColor;width:1em;height:4em;position:relative;box-shadow:0 0px;-webkit-animation:column 1s infinite ease-in-out;animation:column 1s infinite ease-in-out}.spinner-element-container.shown[type=\"column\"] .spin:before,.spinner-element-container.shown[type=\"column\"] .spin:after{content:\"\";position:absolute;top:0}.spinner-element-container.shown[type=\"column\"] .spin{-webkit-animation-delay:-0.16s;animation-delay:-0.16s}.spinner-element-container.shown[type=\"column\"] .spin:before{left:-1.38em;-webkit-animation-delay:-0.32s;animation-delay:-0.32s}.spinner-element-container.shown[type=\"column\"] .spin:after{left:1.38em}@-webkit-keyframes column{0%,80%,100%{box-shadow:0 0;height:4em}40%{box-shadow:0 -2em;height:5em}}@keyframes column{0%,80%,100%{box-shadow:0 0;height:4em}40%{box-shadow:0 -2em;height:5em}}.spinner-element-container.shown[type=\"circle\"] .spin,.spinner-element-container.shown[type=\"circle\"] .spin:after{border-radius:50%;box-sizing:content-box}.spinner-element-container.shown[type=\"circle\"] .spin{position:relative;border:0.5em solid transparent;border-top-color:inherit;width:4em;height:4em;-webkit-animation:circle 1s infinite linear;animation:circle 1s infinite linear}.spinner-element-container.shown[type=\"circle\"] .spin:after{content:\"\";position:absolute;border:0.5em solid currentColor;opacity:0.19;top:-0.5em;left:-0.5em;width:100%;height:100%}@-webkit-keyframes circle{0%{-webkit-transform:translateZ(0) rotate(0deg);transform:translateZ(0) rotate(0deg)}100%{-webkit-transform:translateZ(0) rotate(360deg);transform:translateZ(0) rotate(360deg)}}@keyframes circle{0%{-webkit-transform:translateZ(0) rotate(0deg);transform:translateZ(0) rotate(0deg)}100%{-webkit-transform:translateZ(0) rotate(360deg);transform:translateZ(0) rotate(360deg)}}.spinner-element-container.shown[type=\"ripple\"] .spin,.spinner-element-container.shown[type=\"ripple\"] .spin:after,.spinner-element-container.shown[type=\"ripple\"] .spin:before{border-radius:50%;box-sizing:content-box}.spinner-element-container.shown[type=\"ripple\"] .spin{position:relative;width:5em;height:5em}.spinner-element-container.shown[type=\"ripple\"] .spin:after,.spinner-element-container.shown[type=\"ripple\"] .spin:before{content:\"\";position:absolute;width:100%;height:100%;border:0.5em solid;opacity:0;-webkit-transform:translateZ(0) scale(0);transform:translateZ(0) scale(0);-webkit-animation:ripple 1s infinite ease-in-out;animation:ripple 1s infinite ease-in-out}.spinner-element-container.shown[type=\"ripple\"] .spin:after{-webkit-animation-delay:0.33s;animation-delay:0.33s}@-webkit-keyframes ripple{0%{opacity:0;-webkit-transform:translateZ(0) scale(0);transform:translateZ(0) scale(0)}7%{opacity:0.38}100%{opacity:0;-webkit-transform:translateZ(0) scale(1);transform:translateZ(0) scale(1)}}@keyframes ripple{0%{opacity:0;-webkit-transform:translateZ(0) scale(0);transform:translateZ(0) scale(0)}7%{opacity:0.38}100%{opacity:0;-webkit-transform:translateZ(0) scale(1);transform:translateZ(0) scale(1)}}.spinner-element-container.shown[type=\"boading\"] .spin,.spinner-element-container.shown[type=\"boading\"] .spin:after,.spinner-element-container.shown[type=\"boading\"] .spin:before{border-radius:50%;box-sizing:content-box}.spinner-element-container.shown[type=\"boading\"] .spin{position:relative;width:5em;height:5em;margin-left:2em}.spinner-element-container.shown[type=\"boading\"] .spin:after,.spinner-element-container.shown[type=\"boading\"] .spin:before{content:\"\";position:absolute;width:50%;height:50%;background:currentColor;opacity:1;-webkit-transform:translateZ(0) translateX(0) scale(0);transform:translateZ(0) translateX(0) scale(0);-webkit-animation:boading 1s infinite linear;animation:boading 1s infinite linear}.spinner-element-container.shown[type=\"boading\"] .spin:after{opacity:0.75;-webkit-animation-delay:0.5s;animation-delay:0.5s}@-webkit-keyframes boading{0%{-webkit-transform:translateZ(0) translateX(25%) scale(0);transform:translateZ(0) translateX(25%) scale(0)}25%{-webkit-transform:translateZ(0) translateX(75%) scale(0.5);transform:translateZ(0) translateX(75%) scale(0.5)}50%{-webkit-transform:translateZ(0) translateX(0%) scale(1);transform:translateZ(0) translateX(0%) scale(1)}75%{-webkit-transform:translateZ(0) translateX(-75%) scale(0.5);transform:translateZ(0) translateX(-75%) scale(0.5)}100%{-webkit-transform:translateZ(0) translateX(-25%) scale(0);transform:translateZ(0) translateX(-25%) scale(0)}}@keyframes boading{0%{-webkit-transform:translateZ(0) translateX(25%) scale(0);transform:translateZ(0) translateX(25%) scale(0)}25%{-webkit-transform:translateZ(0) translateX(75%) scale(0.5);transform:translateZ(0) translateX(75%) scale(0.5)}50%{-webkit-transform:translateZ(0) translateX(0%) scale(1);transform:translateZ(0) translateX(0%) scale(1)}75%{-webkit-transform:translateZ(0) translateX(-75%) scale(0.5);transform:translateZ(0) translateX(-75%) scale(0.5)}100%{-webkit-transform:translateZ(0) translateX(-25%) scale(0);transform:translateZ(0) translateX(-25%) scale(0)}}.spinner-element-container.shown[type=\"tail\"] .spin{font-size:300%;overflow:hidden;width:1em;height:1em;border-radius:50%;position:relative;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-animation:tail 1.2s infinite ease, tail-round 1.2s infinite ease;animation:tail 1.2s infinite ease, tail-round 1.2s infinite ease}@-webkit-keyframes tail{0%{box-shadow:0 -.83em 0 -.3em,0 -.83em 0 -.34em,0 -.83em 0 -.37em,0 -.83em 0 -.41em,0 -.83em 0 -.44em}5%,95%{box-shadow:0 -.83em 0 -.3em,0 -.83em 0 -.34em,0 -.83em 0 -.37em,0 -.83em 0 -.41em,0 -.83em 0 -.44em}10%,59%{box-shadow:0 -.83em 0 -.3em,-.10292em -.80842em 0 -.34em,-.18924em -.79514em 0 -.37em,-.27224em -.7719em 0 -.41em,-.31291em -.75779em 0 -.44em}20%{box-shadow:0 -.83em 0 -.3em,-.20501em -.73289em 0 -.34em,-.48804em -.58349em 0 -.37em,-.63744em -.42081em 0 -.41em,-.73206em -.20667em 0 -.44em}38%{box-shadow:0 -.83em 0 -.3em,-.24402em -.72293em 0 -.34em,-.57851em -.48804em 0 -.37em,-.74119em -.22991em 0 -.41em,-.80261em -.00664em 0 -.44em}100%{box-shadow:0 -.83em 0 -.3em,0 -.83em 0 -.34em,0 -.83em 0 -.37em,0 -.83em 0 -.41em,0 -.83em 0 -.44em}}@keyframes tail{0%{box-shadow:0 -.83em 0 -.3em,0 -.83em 0 -.34em,0 -.83em 0 -.37em,0 -.83em 0 -.41em,0 -.83em 0 -.44em}5%,95%{box-shadow:0 -.83em 0 -.3em,0 -.83em 0 -.34em,0 -.83em 0 -.37em,0 -.83em 0 -.41em,0 -.83em 0 -.44em}10%,59%{box-shadow:0 -.83em 0 -.3em,-.10292em -.80842em 0 -.34em,-.18924em -.79514em 0 -.37em,-.27224em -.7719em 0 -.41em,-.31291em -.75779em 0 -.44em}20%{box-shadow:0 -.83em 0 -.3em,-.20501em -.73289em 0 -.34em,-.48804em -.58349em 0 -.37em,-.63744em -.42081em 0 -.41em,-.73206em -.20667em 0 -.44em}38%{box-shadow:0 -.83em 0 -.3em,-.24402em -.72293em 0 -.34em,-.57851em -.48804em 0 -.37em,-.74119em -.22991em 0 -.41em,-.80261em -.00664em 0 -.44em}100%{box-shadow:0 -.83em 0 -.3em,0 -.83em 0 -.34em,0 -.83em 0 -.37em,0 -.83em 0 -.41em,0 -.83em 0 -.44em}}@-webkit-keyframes tail-round{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes tail-round{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.spinner-element-container.showscrim .spinner-element-scrim{opacity:1}.spinner-element-container .spinner-element-scrim{position:absolute;width:100%;height:100%;top:0;left:0;opacity:0;pointer-events:none;background:rgba(0,0,0,0.38);-webkit-transition:opacity 0.3s;transition:opacity 0.3s}.spinner-element-container .spinner-element-inner{width:100%;height:100%;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;max-height:100vh;max-width:100vw;position:absolute;top:0;left:0}\n", ""]);


/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = "<div class=spinner-element-container> <div class=spinner-element-scrim></div> <div class=spinner-element-inner> <slot> <div class=spin></div> </slot> </div> <style type=text/css rel=stylesheet style=display:none class=themeStyles></style> <style type=text/css rel=stylesheet style=display:none class=injectedStyles></style> </div> ";

/***/ })
/******/ ]);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".w-100{width:100%}.flex{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.dim-text{color:rgba(228,228,228,0.62)}.danger-background{background-color:#de084b}.danger-text{color:#de084b}.primary-text{color:#46b5d0}.warning-text{color:#eca600}.result-coverage-score{min-width:2.5em;width:2.5em;height:2.5em;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;background:#000;border-radius:50%;padding:0.25em;font-size:80%;color:#fff}.result-coverage-score[evaluated=\"good\"]{background:#37afcc}.result-coverage-score[evaluated=\"ok\"]{background:#d99800}.result-coverage-score[evaluated=\"bad\"]{background:#cb0745}.result-coverage-score-text[evaluated=\"good\"]{color:#46b5d0}.result-coverage-score-text[evaluated=\"ok\"]{color:#eca600}.result-coverage-score-text[evaluated=\"bad\"]{color:#de084b}\n", ""]);
// Exports
exports.locals = {
	"primary": "#46b5d0",
	"warning": "#eca600",
	"danger": "#de084b",
	"base": "#202427",
	"offset": "#e4e4e4"
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

/**
@license @nocompile
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
(function(){/*

 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
'use strict';var w;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function ca(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}function da(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var ea="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,ha="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};function ia(){ia=function(){};ea.Symbol||(ea.Symbol=ja)}function ma(a,b){this.a=a;ha(this,"description",{configurable:!0,writable:!0,value:b})}ma.prototype.toString=function(){return this.a};
var ja=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new ma("jscomp_symbol_"+(c||"")+"_"+b++,c)}var b=0;return a}();function na(){ia();var a=ea.Symbol.iterator;a||(a=ea.Symbol.iterator=ea.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&ha(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return oa(aa(this))}});na=function(){}}
function oa(a){na();a={next:a};a[ea.Symbol.iterator]=function(){return this};return a}var pa;if("function"==typeof Object.setPrototypeOf)pa=Object.setPrototypeOf;else{var ta;a:{var ua={Fa:!0},wa={};try{wa.__proto__=ua;ta=wa.Fa;break a}catch(a){}ta=!1}pa=ta?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var xa=pa;function ya(){this.f=!1;this.b=null;this.U=void 0;this.a=1;this.F=0;this.c=null}
function za(a){if(a.f)throw new TypeError("Generator is already running");a.f=!0}ya.prototype.u=function(a){this.U=a};function Aa(a,b){a.c={Ia:b,Ma:!0};a.a=a.F}ya.prototype.return=function(a){this.c={return:a};this.a=this.F};function Ba(a,b){a.a=3;return{value:b}}function Ca(a){this.a=new ya;this.b=a}function Da(a,b){za(a.a);var c=a.a.b;if(c)return Ea(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.a.return);a.a.return(b);return Fa(a)}
function Ea(a,b,c,d){try{var e=b.call(a.a.b,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.a.f=!1,e;var f=e.value}catch(g){return a.a.b=null,Aa(a.a,g),Fa(a)}a.a.b=null;d.call(a.a,f);return Fa(a)}function Fa(a){for(;a.a.a;)try{var b=a.b(a.a);if(b)return a.a.f=!1,{value:b.value,done:!1}}catch(c){a.a.U=void 0,Aa(a.a,c)}a.a.f=!1;if(a.a.c){b=a.a.c;a.a.c=null;if(b.Ma)throw b.Ia;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ga(a){this.next=function(b){za(a.a);a.a.b?b=Ea(a,a.a.b.next,b,a.a.u):(a.a.u(b),b=Fa(a));return b};this.throw=function(b){za(a.a);a.a.b?b=Ea(a,a.a.b["throw"],b,a.a.u):(Aa(a.a,b),b=Fa(a));return b};this.return=function(b){return Da(a,b)};na();this[Symbol.iterator]=function(){return this}}function Ha(a,b){b=new Ga(new Ca(b));xa&&xa(b,a.prototype);return b}Array.from||(Array.from=function(a){return[].slice.call(a)});
Object.assign||(Object.assign=function(a){for(var b=[].slice.call(arguments,1),c=0,d;c<b.length;c++)if(d=b[c])for(var e=a,f=d,g=Object.getOwnPropertyNames(f),h=0;h<g.length;h++)d=g[h],e[d]=f[d];return a});(function(){if(!function(){var f=document.createEvent("Event");f.initEvent("foo",!0,!0);f.preventDefault();return f.defaultPrevented}()){var a=Event.prototype.preventDefault;Event.prototype.preventDefault=function(){this.cancelable&&(a.call(this),Object.defineProperty(this,"defaultPrevented",{get:function(){return!0},configurable:!0}))}}var b=/Trident/.test(navigator.userAgent);if(!window.Event||b&&"function"!==typeof window.Event){var c=window.Event;window.Event=function(f,g){g=g||{};var h=document.createEvent("Event");
h.initEvent(f,!!g.bubbles,!!g.cancelable);return h};if(c){for(var d in c)window.Event[d]=c[d];window.Event.prototype=c.prototype}}if(!window.CustomEvent||b&&"function"!==typeof window.CustomEvent)window.CustomEvent=function(f,g){g=g||{};var h=document.createEvent("CustomEvent");h.initCustomEvent(f,!!g.bubbles,!!g.cancelable,g.detail);return h},window.CustomEvent.prototype=window.Event.prototype;if(!window.MouseEvent||b&&"function"!==typeof window.MouseEvent){b=window.MouseEvent;window.MouseEvent=
function(f,g){g=g||{};var h=document.createEvent("MouseEvent");h.initMouseEvent(f,!!g.bubbles,!!g.cancelable,g.view||window,g.detail,g.screenX,g.screenY,g.clientX,g.clientY,g.ctrlKey,g.altKey,g.shiftKey,g.metaKey,g.button,g.relatedTarget);return h};if(b)for(var e in b)window.MouseEvent[e]=b[e];window.MouseEvent.prototype=b.prototype}})();(function(){function a(){}function b(p,t){if(!p.childNodes.length)return[];switch(p.nodeType){case Node.DOCUMENT_NODE:return F.call(p,t);case Node.DOCUMENT_FRAGMENT_NODE:return C.call(p,t);default:return r.call(p,t)}}var c="undefined"===typeof HTMLTemplateElement,d=!(document.createDocumentFragment().cloneNode()instanceof DocumentFragment),e=!1;/Trident/.test(navigator.userAgent)&&function(){function p(z,S){if(z instanceof DocumentFragment)for(var cb;cb=z.firstChild;)D.call(this,cb,S);else D.call(this,
z,S);return z}e=!0;var t=Node.prototype.cloneNode;Node.prototype.cloneNode=function(z){z=t.call(this,z);this instanceof DocumentFragment&&(z.__proto__=DocumentFragment.prototype);return z};DocumentFragment.prototype.querySelectorAll=HTMLElement.prototype.querySelectorAll;DocumentFragment.prototype.querySelector=HTMLElement.prototype.querySelector;Object.defineProperties(DocumentFragment.prototype,{nodeType:{get:function(){return Node.DOCUMENT_FRAGMENT_NODE},configurable:!0},localName:{get:function(){},
configurable:!0},nodeName:{get:function(){return"#document-fragment"},configurable:!0}});var D=Node.prototype.insertBefore;Node.prototype.insertBefore=p;var K=Node.prototype.appendChild;Node.prototype.appendChild=function(z){z instanceof DocumentFragment?p.call(this,z,null):K.call(this,z);return z};var ba=Node.prototype.removeChild,ka=Node.prototype.replaceChild;Node.prototype.replaceChild=function(z,S){z instanceof DocumentFragment?(p.call(this,z,S),ba.call(this,S)):ka.call(this,z,S);return S};Document.prototype.createDocumentFragment=
function(){var z=this.createElement("df");z.__proto__=DocumentFragment.prototype;return z};var qa=Document.prototype.importNode;Document.prototype.importNode=function(z,S){S=qa.call(this,z,S||!1);z instanceof DocumentFragment&&(S.__proto__=DocumentFragment.prototype);return S}}();var f=Node.prototype.cloneNode,g=Document.prototype.createElement,h=Document.prototype.importNode,k=Node.prototype.removeChild,l=Node.prototype.appendChild,m=Node.prototype.replaceChild,q=DOMParser.prototype.parseFromString,
H=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML")||{get:function(){return this.innerHTML},set:function(p){this.innerHTML=p}},E=Object.getOwnPropertyDescriptor(window.Node.prototype,"childNodes")||{get:function(){return this.childNodes}},r=Element.prototype.querySelectorAll,F=Document.prototype.querySelectorAll,C=DocumentFragment.prototype.querySelectorAll,N=function(){if(!c){var p=document.createElement("template"),t=document.createElement("template");t.content.appendChild(document.createElement("div"));
p.content.appendChild(t);p=p.cloneNode(!0);return 0===p.content.childNodes.length||0===p.content.firstChild.content.childNodes.length||d}}();if(c){var y=document.implementation.createHTMLDocument("template"),X=!0,v=document.createElement("style");v.textContent="template{display:none;}";var ra=document.head;ra.insertBefore(v,ra.firstElementChild);a.prototype=Object.create(HTMLElement.prototype);var fa=!document.createElement("div").hasOwnProperty("innerHTML");a.S=function(p){if(!p.content&&p.namespaceURI===
document.documentElement.namespaceURI){p.content=y.createDocumentFragment();for(var t;t=p.firstChild;)l.call(p.content,t);if(fa)p.__proto__=a.prototype;else if(p.cloneNode=function(D){return a.b(this,D)},X)try{n(p),I(p)}catch(D){X=!1}a.a(p.content)}};var sa={option:["select"],thead:["table"],col:["colgroup","table"],tr:["tbody","table"],th:["tr","tbody","table"],td:["tr","tbody","table"]},n=function(p){Object.defineProperty(p,"innerHTML",{get:function(){return va(this)},set:function(t){var D=sa[(/<([a-z][^/\0>\x20\t\r\n\f]+)/i.exec(t)||
["",""])[1].toLowerCase()];if(D)for(var K=0;K<D.length;K++)t="<"+D[K]+">"+t+"</"+D[K]+">";y.body.innerHTML=t;for(a.a(y);this.content.firstChild;)k.call(this.content,this.content.firstChild);t=y.body;if(D)for(K=0;K<D.length;K++)t=t.lastChild;for(;t.firstChild;)l.call(this.content,t.firstChild)},configurable:!0})},I=function(p){Object.defineProperty(p,"outerHTML",{get:function(){return"<template>"+this.innerHTML+"</template>"},set:function(t){if(this.parentNode){y.body.innerHTML=t;for(t=this.ownerDocument.createDocumentFragment();y.body.firstChild;)l.call(t,
y.body.firstChild);m.call(this.parentNode,t,this)}else throw Error("Failed to set the 'outerHTML' property on 'Element': This element has no parent node.");},configurable:!0})};n(a.prototype);I(a.prototype);a.a=function(p){p=b(p,"template");for(var t=0,D=p.length,K;t<D&&(K=p[t]);t++)a.S(K)};document.addEventListener("DOMContentLoaded",function(){a.a(document)});Document.prototype.createElement=function(){var p=g.apply(this,arguments);"template"===p.localName&&a.S(p);return p};DOMParser.prototype.parseFromString=
function(){var p=q.apply(this,arguments);a.a(p);return p};Object.defineProperty(HTMLElement.prototype,"innerHTML",{get:function(){return va(this)},set:function(p){H.set.call(this,p);a.a(this)},configurable:!0,enumerable:!0});var la=/[&\u00A0"]/g,Xb=/[&\u00A0<>]/g,db=function(p){switch(p){case "&":return"&amp;";case "<":return"&lt;";case ">":return"&gt;";case '"':return"&quot;";case "\u00a0":return"&nbsp;"}};v=function(p){for(var t={},D=0;D<p.length;D++)t[p[D]]=!0;return t};var Ra=v("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),
eb=v("style script xmp iframe noembed noframes plaintext noscript".split(" ")),va=function(p,t){"template"===p.localName&&(p=p.content);for(var D="",K=t?t(p):E.get.call(p),ba=0,ka=K.length,qa;ba<ka&&(qa=K[ba]);ba++){a:{var z=qa;var S=p;var cb=t;switch(z.nodeType){case Node.ELEMENT_NODE:for(var Yb=z.localName,fb="<"+Yb,cg=z.attributes,ud=0;S=cg[ud];ud++)fb+=" "+S.name+'="'+S.value.replace(la,db)+'"';fb+=">";z=Ra[Yb]?fb:fb+va(z,cb)+"</"+Yb+">";break a;case Node.TEXT_NODE:z=z.data;z=S&&eb[S.localName]?
z:z.replace(Xb,db);break a;case Node.COMMENT_NODE:z="\x3c!--"+z.data+"--\x3e";break a;default:throw window.console.error(z),Error("not implemented");}}D+=z}return D}}if(c||N){a.b=function(p,t){var D=f.call(p,!1);this.S&&this.S(D);t&&(l.call(D.content,f.call(p.content,!0)),u(D.content,p.content));return D};var u=function(p,t){if(t.querySelectorAll&&(t=b(t,"template"),0!==t.length)){p=b(p,"template");for(var D=0,K=p.length,ba,ka;D<K;D++)ka=t[D],ba=p[D],a&&a.S&&a.S(ka),m.call(ba.parentNode,G.call(ka,
!0),ba)}},G=Node.prototype.cloneNode=function(p){if(!e&&d&&this instanceof DocumentFragment)if(p)var t=J.call(this.ownerDocument,this,!0);else return this.ownerDocument.createDocumentFragment();else this.nodeType===Node.ELEMENT_NODE&&"template"===this.localName&&this.namespaceURI==document.documentElement.namespaceURI?t=a.b(this,p):t=f.call(this,p);p&&u(t,this);return t},J=Document.prototype.importNode=function(p,t){t=t||!1;if("template"===p.localName)return a.b(p,t);var D=h.call(this,p,t);if(t){u(D,
p);p=b(D,'script:not([type]),script[type="application/javascript"],script[type="text/javascript"]');for(var K,ba=0;ba<p.length;ba++){K=p[ba];t=g.call(document,"script");t.textContent=K.textContent;for(var ka=K.attributes,qa=0,z;qa<ka.length;qa++)z=ka[qa],t.setAttribute(z.name,z.value);m.call(K.parentNode,t,K)}}return D}}c&&(window.HTMLTemplateElement=a)})();var Ia=setTimeout;function Ja(){}function Ka(a,b){return function(){a.apply(b,arguments)}}function x(a){if(!(this instanceof x))throw new TypeError("Promises must be constructed via new");if("function"!==typeof a)throw new TypeError("not a function");this.K=0;this.pa=!1;this.w=void 0;this.V=[];La(a,this)}
function Ma(a,b){for(;3===a.K;)a=a.w;0===a.K?a.V.push(b):(a.pa=!0,Na(function(){var c=1===a.K?b.Oa:b.Pa;if(null===c)(1===a.K?Oa:Pa)(b.na,a.w);else{try{var d=c(a.w)}catch(e){Pa(b.na,e);return}Oa(b.na,d)}}))}function Oa(a,b){try{if(b===a)throw new TypeError("A promise cannot be resolved with itself.");if(b&&("object"===typeof b||"function"===typeof b)){var c=b.then;if(b instanceof x){a.K=3;a.w=b;Qa(a);return}if("function"===typeof c){La(Ka(c,b),a);return}}a.K=1;a.w=b;Qa(a)}catch(d){Pa(a,d)}}
function Pa(a,b){a.K=2;a.w=b;Qa(a)}function Qa(a){2===a.K&&0===a.V.length&&Na(function(){a.pa||"undefined"!==typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",a.w)});for(var b=0,c=a.V.length;b<c;b++)Ma(a,a.V[b]);a.V=null}function Sa(a,b,c){this.Oa="function"===typeof a?a:null;this.Pa="function"===typeof b?b:null;this.na=c}function La(a,b){var c=!1;try{a(function(d){c||(c=!0,Oa(b,d))},function(d){c||(c=!0,Pa(b,d))})}catch(d){c||(c=!0,Pa(b,d))}}
x.prototype["catch"]=function(a){return this.then(null,a)};x.prototype.then=function(a,b){var c=new this.constructor(Ja);Ma(this,new Sa(a,b,c));return c};x.prototype["finally"]=function(a){var b=this.constructor;return this.then(function(c){return b.resolve(a()).then(function(){return c})},function(c){return b.resolve(a()).then(function(){return b.reject(c)})})};
function Ta(a){return new x(function(b,c){function d(h,k){try{if(k&&("object"===typeof k||"function"===typeof k)){var l=k.then;if("function"===typeof l){l.call(k,function(m){d(h,m)},c);return}}e[h]=k;0===--f&&b(e)}catch(m){c(m)}}if(!a||"undefined"===typeof a.length)throw new TypeError("Promise.all accepts an array");var e=Array.prototype.slice.call(a);if(0===e.length)return b([]);for(var f=e.length,g=0;g<e.length;g++)d(g,e[g])})}
function Ua(a){return a&&"object"===typeof a&&a.constructor===x?a:new x(function(b){b(a)})}function Va(a){return new x(function(b,c){c(a)})}function Wa(a){return new x(function(b,c){for(var d=0,e=a.length;d<e;d++)a[d].then(b,c)})}var Na="function"===typeof setImmediate&&function(a){setImmediate(a)}||function(a){Ia(a,0)};/*

Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
if(!window.Promise){window.Promise=x;x.prototype.then=x.prototype.then;x.all=Ta;x.race=Wa;x.resolve=Ua;x.reject=Va;var Xa=document.createTextNode(""),Ya=[];(new MutationObserver(function(){for(var a=Ya.length,b=0;b<a;b++)Ya[b]();Ya.splice(0,a)})).observe(Xa,{characterData:!0});Na=function(a){Ya.push(a);Xa.textContent=0<Xa.textContent.length?"":"a"}};/*
 Copyright (C) 2015 by WebReflection

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
(function(a,b){if(!(b in a)){var c=typeof global===typeof c?window:global,d=0,e=""+Math.random(),f="__\u0001symbol@@"+e,g=a.getOwnPropertyNames,h=a.getOwnPropertyDescriptor,k=a.create,l=a.keys,m=a.freeze||a,q=a.defineProperty,H=a.defineProperties,E=h(a,"getOwnPropertyNames"),r=a.prototype,F=r.hasOwnProperty,C=r.propertyIsEnumerable,N=r.toString,y=function(u,G,J){F.call(u,f)||q(u,f,{enumerable:!1,configurable:!1,writable:!1,value:{}});u[f]["@@"+G]=J},X=function(u,G){var J=k(u);g(G).forEach(function(p){sa.call(G,
p)&&Ra(J,p,G[p])});return J},v=function(){},ra=function(u){return u!=f&&!F.call(la,u)},fa=function(u){return u!=f&&F.call(la,u)},sa=function(u){var G=""+u;return fa(G)?F.call(this,G)&&this[f]["@@"+G]:C.call(this,u)},n=function(u){q(r,u,{enumerable:!1,configurable:!0,get:v,set:function(G){va(this,u,{enumerable:!1,configurable:!0,writable:!0,value:G});y(this,u,!0)}});return m(la[u]=q(a(u),"constructor",Xb))},I=function(u){if(this&&this!==c)throw new TypeError("Symbol is not a constructor");return n("__\u0001symbol:".concat(u||
"",e,++d))},la=k(null),Xb={value:I},db=function(u){return la[u]},Ra=function(u,G,J){var p=""+G;if(fa(p)){G=va;if(J.enumerable){var t=k(J);t.enumerable=!1}else t=J;G(u,p,t);y(u,p,!!J.enumerable)}else q(u,G,J);return u},eb=function(u){return g(u).filter(fa).map(db)};E.value=Ra;q(a,"defineProperty",E);E.value=eb;q(a,b,E);E.value=function(u){return g(u).filter(ra)};q(a,"getOwnPropertyNames",E);E.value=function(u,G){var J=eb(G);J.length?l(G).concat(J).forEach(function(p){sa.call(G,p)&&Ra(u,p,G[p])}):H(u,
G);return u};q(a,"defineProperties",E);E.value=sa;q(r,"propertyIsEnumerable",E);E.value=I;q(c,"Symbol",E);E.value=function(u){u="__\u0001symbol:".concat("__\u0001symbol:",u,e);return u in r?la[u]:n(u)};q(I,"for",E);E.value=function(u){if(ra(u))throw new TypeError(u+" is not a symbol");return F.call(la,u)?u.slice(20,-e.length):void 0};q(I,"keyFor",E);E.value=function(u,G){var J=h(u,G);J&&fa(G)&&(J.enumerable=sa.call(u,G));return J};q(a,"getOwnPropertyDescriptor",E);E.value=function(u,G){return 1===
arguments.length?k(u):X(u,G)};q(a,"create",E);E.value=function(){var u=N.call(this);return"[object String]"===u&&fa(this)?"[object Symbol]":u};q(r,"toString",E);try{var va=k(q({},"__\u0001symbol:",{get:function(){return q(this,"__\u0001symbol:",{value:!1})["__\u0001symbol:"]}}))["__\u0001symbol:"]||q}catch(u){va=function(G,J,p){var t=h(r,J);delete r[J];q(G,J,p);q(r,J,t)}}}})(Object,"getOwnPropertySymbols");
(function(a){var b=a.defineProperty,c=a.prototype,d=c.toString,e;"iterator match replace search split hasInstance isConcatSpreadable unscopables species toPrimitive toStringTag".split(" ").forEach(function(f){if(!(f in Symbol))switch(b(Symbol,f,{value:Symbol(f)}),f){case "toStringTag":e=a.getOwnPropertyDescriptor(c,"toString"),e.value=function(){var g=d.call(this),h=this[Symbol.toStringTag];return"undefined"===typeof h?g:"[object "+h+"]"},b(c,"toString",e)}})})(Object,Symbol);
(function(a,b,c){function d(){return this}b[a]||(b[a]=function(){var e=0,f=this,g={next:function(){var h=f.length<=e;return h?{done:h}:{done:h,value:f[e++]}}};g[a]=d;return g});c[a]||(c[a]=function(){var e=String.fromCodePoint,f=this,g=0,h=f.length,k={next:function(){var l=h<=g,m=l?"":e(f.codePointAt(g));g+=m.length;return l?{done:l}:{done:l,value:m}}};k[a]=d;return k})})(Symbol.iterator,Array.prototype,String.prototype);/*

Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var Za=Object.prototype.toString;Object.prototype.toString=function(){return void 0===this?"[object Undefined]":null===this?"[object Null]":Za.call(this)};Object.keys=function(a){return Object.getOwnPropertyNames(a).filter(function(b){return(b=Object.getOwnPropertyDescriptor(a,b))&&b.enumerable})};var $a=window.Symbol.iterator;
String.prototype[$a]&&String.prototype.codePointAt||(String.prototype[$a]=function ab(){var b,c=this;return Ha(ab,function(d){1==d.a&&(b=0);if(3!=d.a)return b<c.length?d=Ba(d,c[b]):(d.a=0,d=void 0),d;b++;d.a=2})});Set.prototype[$a]||(Set.prototype[$a]=function bb(){var b,c=this,d;return Ha(bb,function(e){1==e.a&&(b=[],c.forEach(function(f){b.push(f)}),d=0);if(3!=e.a)return d<b.length?e=Ba(e,b[d]):(e.a=0,e=void 0),e;d++;e.a=2})});
Map.prototype[$a]||(Map.prototype[$a]=function gb(){var b,c=this,d;return Ha(gb,function(e){1==e.a&&(b=[],c.forEach(function(f,g){b.push([g,f])}),d=0);if(3!=e.a)return d<b.length?e=Ba(e,b[d]):(e.a=0,e=void 0),e;d++;e.a=2})});/*

 Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
window.WebComponents=window.WebComponents||{flags:{}};var hb=document.querySelector('script[src*="webcomponents-bundle"]'),ib=/wc-(.+)/,A={};if(!A.noOpts){location.search.slice(1).split("&").forEach(function(a){a=a.split("=");var b;a[0]&&(b=a[0].match(ib))&&(A[b[1]]=a[1]||!0)});if(hb)for(var jb=0,kb=void 0;kb=hb.attributes[jb];jb++)"src"!==kb.name&&(A[kb.name]=kb.value||!0);if(A.log&&A.log.split){var lb=A.log.split(",");A.log={};lb.forEach(function(a){A.log[a]=!0})}else A.log={}}
window.WebComponents.flags=A;var mb=A.shadydom;if(mb){window.ShadyDOM=window.ShadyDOM||{};window.ShadyDOM.force=mb;var nb=A.noPatch;window.ShadyDOM.noPatch="true"===nb?!0:nb}var ob=A.register||A.ce;ob&&window.customElements&&(window.customElements.forcePolyfill=ob);/*

Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function pb(){}pb.prototype.toJSON=function(){return{}};function B(a){a.__shady||(a.__shady=new pb);return a.__shady}function L(a){return a&&a.__shady};var M=window.ShadyDOM||{};M.Ka=!(!Element.prototype.attachShadow||!Node.prototype.getRootNode);var qb=Object.getOwnPropertyDescriptor(Node.prototype,"firstChild");M.D=!!(qb&&qb.configurable&&qb.get);M.ia=M.force||!M.Ka;M.G=M.noPatch||!1;M.ma=M.preferPerformance;M.la="on-demand"===M.G;M.ya=navigator.userAgent.match("Trident");function rb(a){return(a=L(a))&&void 0!==a.firstChild}function O(a){return a instanceof ShadowRoot}function sb(a){return(a=(a=L(a))&&a.root)&&tb(a)}
var ub=Element.prototype,vb=ub.matches||ub.matchesSelector||ub.mozMatchesSelector||ub.msMatchesSelector||ub.oMatchesSelector||ub.webkitMatchesSelector,wb=document.createTextNode(""),xb=0,yb=[];(new MutationObserver(function(){for(;yb.length;)try{yb.shift()()}catch(a){throw wb.textContent=xb++,a;}})).observe(wb,{characterData:!0});function zb(a){yb.push(a);wb.textContent=xb++}var Ab=!!document.contains;function Bb(a,b){for(;b;){if(b==a)return!0;b=b.__shady_parentNode}return!1}
function Cb(a){for(var b=a.length-1;0<=b;b--){var c=a[b],d=c.getAttribute("id")||c.getAttribute("name");d&&"length"!==d&&isNaN(d)&&(a[d]=c)}a.item=function(e){return a[e]};a.namedItem=function(e){if("length"!==e&&isNaN(e)&&a[e])return a[e];for(var f=ca(a),g=f.next();!g.done;g=f.next())if(g=g.value,(g.getAttribute("id")||g.getAttribute("name"))==e)return g;return null};return a}function Db(a){var b=[];for(a=a.__shady_native_firstChild;a;a=a.__shady_native_nextSibling)b.push(a);return b}
function Eb(a){var b=[];for(a=a.__shady_firstChild;a;a=a.__shady_nextSibling)b.push(a);return b}function Fb(a,b,c){c.configurable=!0;if(c.value)a[b]=c.value;else try{Object.defineProperty(a,b,c)}catch(d){}}function P(a,b,c,d){c=void 0===c?"":c;for(var e in b)d&&0<=d.indexOf(e)||Fb(a,c+e,b[e])}function Gb(a,b){for(var c in b)c in a&&Fb(a,c,b[c])}function Q(a){var b={};Object.getOwnPropertyNames(a).forEach(function(c){b[c]=Object.getOwnPropertyDescriptor(a,c)});return b};var Hb=[],Ib;function Jb(a){Ib||(Ib=!0,zb(Kb));Hb.push(a)}function Kb(){Ib=!1;for(var a=!!Hb.length;Hb.length;)Hb.shift()();return a}Kb.list=Hb;function Lb(){this.a=!1;this.addedNodes=[];this.removedNodes=[];this.ba=new Set}function Mb(a){a.a||(a.a=!0,zb(function(){a.flush()}))}Lb.prototype.flush=function(){if(this.a){this.a=!1;var a=this.takeRecords();a.length&&this.ba.forEach(function(b){b(a)})}};Lb.prototype.takeRecords=function(){if(this.addedNodes.length||this.removedNodes.length){var a=[{addedNodes:this.addedNodes,removedNodes:this.removedNodes}];this.addedNodes=[];this.removedNodes=[];return a}return[]};
function Nb(a,b){var c=B(a);c.W||(c.W=new Lb);c.W.ba.add(b);var d=c.W;return{Ca:b,P:d,Da:a,takeRecords:function(){return d.takeRecords()}}}function Ob(a){var b=a&&a.P;b&&(b.ba.delete(a.Ca),b.ba.size||(B(a.Da).W=null))}
function Pb(a,b){var c=b.getRootNode();return a.map(function(d){var e=c===d.target.getRootNode();if(e&&d.addedNodes){if(e=Array.from(d.addedNodes).filter(function(f){return c===f.getRootNode()}),e.length)return d=Object.create(d),Object.defineProperty(d,"addedNodes",{value:e,configurable:!0}),d}else if(e)return d}).filter(function(d){return d})};var Qb=/[&\u00A0"]/g,Rb=/[&\u00A0<>]/g;function Sb(a){switch(a){case "&":return"&amp;";case "<":return"&lt;";case ">":return"&gt;";case '"':return"&quot;";case "\u00a0":return"&nbsp;"}}function Tb(a){for(var b={},c=0;c<a.length;c++)b[a[c]]=!0;return b}var Ub=Tb("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),Vb=Tb("style script xmp iframe noembed noframes plaintext noscript".split(" "));
function Wb(a,b){"template"===a.localName&&(a=a.content);for(var c="",d=b?b(a):a.childNodes,e=0,f=d.length,g=void 0;e<f&&(g=d[e]);e++){a:{var h=g;var k=a,l=b;switch(h.nodeType){case Node.ELEMENT_NODE:k=h.localName;for(var m="<"+k,q=h.attributes,H=0,E;E=q[H];H++)m+=" "+E.name+'="'+E.value.replace(Qb,Sb)+'"';m+=">";h=Ub[k]?m:m+Wb(h,l)+"</"+k+">";break a;case Node.TEXT_NODE:h=h.data;h=k&&Vb[k.localName]?h:h.replace(Rb,Sb);break a;case Node.COMMENT_NODE:h="\x3c!--"+h.data+"--\x3e";break a;default:throw window.console.error(h),
Error("not implemented");}}c+=h}return c};var Zb=M.D,$b={querySelector:function(a){return this.__shady_native_querySelector(a)},querySelectorAll:function(a){return this.__shady_native_querySelectorAll(a)}},ac={};function bc(a){ac[a]=function(b){return b["__shady_native_"+a]}}function cc(a,b){P(a,b,"__shady_native_");for(var c in b)bc(c)}function R(a,b){b=void 0===b?[]:b;for(var c=0;c<b.length;c++){var d=b[c],e=Object.getOwnPropertyDescriptor(a,d);e&&(Object.defineProperty(a,"__shady_native_"+d,e),e.value?$b[d]||($b[d]=e.value):bc(d))}}
var dc=document.createTreeWalker(document,NodeFilter.SHOW_ALL,null,!1),ec=document.createTreeWalker(document,NodeFilter.SHOW_ELEMENT,null,!1),fc=document.implementation.createHTMLDocument("inert");function gc(a){for(var b;b=a.__shady_native_firstChild;)a.__shady_native_removeChild(b)}var hc=["firstElementChild","lastElementChild","children","childElementCount"],ic=["querySelector","querySelectorAll"];
function jc(){var a=["dispatchEvent","addEventListener","removeEventListener"];window.EventTarget?R(window.EventTarget.prototype,a):(R(Node.prototype,a),R(Window.prototype,a));Zb?R(Node.prototype,"parentNode firstChild lastChild previousSibling nextSibling childNodes parentElement textContent".split(" ")):cc(Node.prototype,{parentNode:{get:function(){dc.currentNode=this;return dc.parentNode()}},firstChild:{get:function(){dc.currentNode=this;return dc.firstChild()}},lastChild:{get:function(){dc.currentNode=
this;return dc.lastChild()}},previousSibling:{get:function(){dc.currentNode=this;return dc.previousSibling()}},nextSibling:{get:function(){dc.currentNode=this;return dc.nextSibling()}},childNodes:{get:function(){var b=[];dc.currentNode=this;for(var c=dc.firstChild();c;)b.push(c),c=dc.nextSibling();return b}},parentElement:{get:function(){ec.currentNode=this;return ec.parentNode()}},textContent:{get:function(){switch(this.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:for(var b=
document.createTreeWalker(this,NodeFilter.SHOW_TEXT,null,!1),c="",d;d=b.nextNode();)c+=d.nodeValue;return c;default:return this.nodeValue}},set:function(b){if("undefined"===typeof b||null===b)b="";switch(this.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:gc(this);(0<b.length||this.nodeType===Node.ELEMENT_NODE)&&this.__shady_native_insertBefore(document.createTextNode(b),void 0);break;default:this.nodeValue=b}}}});R(Node.prototype,"appendChild insertBefore removeChild replaceChild cloneNode contains".split(" "));
R(HTMLElement.prototype,["parentElement","contains"]);a={firstElementChild:{get:function(){ec.currentNode=this;return ec.firstChild()}},lastElementChild:{get:function(){ec.currentNode=this;return ec.lastChild()}},children:{get:function(){var b=[];ec.currentNode=this;for(var c=ec.firstChild();c;)b.push(c),c=ec.nextSibling();return Cb(b)}},childElementCount:{get:function(){return this.children?this.children.length:0}}};Zb?(R(Element.prototype,hc),R(Element.prototype,["previousElementSibling","nextElementSibling",
"innerHTML","className"]),R(HTMLElement.prototype,["children","innerHTML","className"])):(cc(Element.prototype,a),cc(Element.prototype,{previousElementSibling:{get:function(){ec.currentNode=this;return ec.previousSibling()}},nextElementSibling:{get:function(){ec.currentNode=this;return ec.nextSibling()}},innerHTML:{get:function(){return Wb(this,Db)},set:function(b){var c="template"===this.localName?this.content:this;gc(c);var d=this.localName||"div";d=this.namespaceURI&&this.namespaceURI!==fc.namespaceURI?
fc.createElementNS(this.namespaceURI,d):fc.createElement(d);d.innerHTML=b;for(b="template"===this.localName?d.content:d;d=b.__shady_native_firstChild;)c.__shady_native_insertBefore(d,void 0)}},className:{get:function(){return this.getAttribute("class")||""},set:function(b){this.setAttribute("class",b)}}}));R(Element.prototype,"setAttribute getAttribute hasAttribute removeAttribute focus blur".split(" "));R(Element.prototype,ic);R(HTMLElement.prototype,["focus","blur"]);window.HTMLTemplateElement&&
R(window.HTMLTemplateElement.prototype,["innerHTML"]);Zb?R(DocumentFragment.prototype,hc):cc(DocumentFragment.prototype,a);R(DocumentFragment.prototype,ic);Zb?(R(Document.prototype,hc),R(Document.prototype,["activeElement"])):cc(Document.prototype,a);R(Document.prototype,["importNode","getElementById"]);R(Document.prototype,ic)};var kc=Q({get childNodes(){return this.__shady_childNodes},get firstChild(){return this.__shady_firstChild},get lastChild(){return this.__shady_lastChild},get childElementCount(){return this.__shady_childElementCount},get children(){return this.__shady_children},get firstElementChild(){return this.__shady_firstElementChild},get lastElementChild(){return this.__shady_lastElementChild},get shadowRoot(){return this.__shady_shadowRoot}}),lc=Q({get textContent(){return this.__shady_textContent},set textContent(a){this.__shady_textContent=
a},get innerHTML(){return this.__shady_innerHTML},set innerHTML(a){return this.__shady_innerHTML=a}}),mc=Q({get parentElement(){return this.__shady_parentElement},get parentNode(){return this.__shady_parentNode},get nextSibling(){return this.__shady_nextSibling},get previousSibling(){return this.__shady_previousSibling},get nextElementSibling(){return this.__shady_nextElementSibling},get previousElementSibling(){return this.__shady_previousElementSibling},get className(){return this.__shady_className},
set className(a){return this.__shady_className=a}});function nc(a){for(var b in a){var c=a[b];c&&(c.enumerable=!1)}}nc(kc);nc(lc);nc(mc);var oc=M.D||!0===M.G,pc=oc?function(){}:function(a){var b=B(a);b.Aa||(b.Aa=!0,Gb(a,mc))},qc=oc?function(){}:function(a){var b=B(a);b.za||(b.za=!0,Gb(a,kc),window.customElements&&!M.G||Gb(a,lc))};var rc="__eventWrappers"+Date.now(),sc=function(){var a=Object.getOwnPropertyDescriptor(Event.prototype,"composed");return a?function(b){return a.get.call(b)}:null}(),tc=function(){function a(){}var b=!1,c={get capture(){b=!0;return!1}};window.addEventListener("test",a,c);window.removeEventListener("test",a,c);return b}();function uc(a){if(a&&"object"===typeof a){var b=!!a.capture;var c=!!a.once;var d=!!a.passive;var e=a.O}else b=!!a,d=c=!1;return{wa:e,capture:b,once:c,passive:d,ua:tc?a:b}}
var vc={blur:!0,focus:!0,focusin:!0,focusout:!0,click:!0,dblclick:!0,mousedown:!0,mouseenter:!0,mouseleave:!0,mousemove:!0,mouseout:!0,mouseover:!0,mouseup:!0,wheel:!0,beforeinput:!0,input:!0,keydown:!0,keyup:!0,compositionstart:!0,compositionupdate:!0,compositionend:!0,touchstart:!0,touchend:!0,touchmove:!0,touchcancel:!0,pointerover:!0,pointerenter:!0,pointerdown:!0,pointermove:!0,pointerup:!0,pointercancel:!0,pointerout:!0,pointerleave:!0,gotpointercapture:!0,lostpointercapture:!0,dragstart:!0,
drag:!0,dragenter:!0,dragleave:!0,dragover:!0,drop:!0,dragend:!0,DOMActivate:!0,DOMFocusIn:!0,DOMFocusOut:!0,keypress:!0},wc={DOMAttrModified:!0,DOMAttributeNameChanged:!0,DOMCharacterDataModified:!0,DOMElementNameChanged:!0,DOMNodeInserted:!0,DOMNodeInsertedIntoDocument:!0,DOMNodeRemoved:!0,DOMNodeRemovedFromDocument:!0,DOMSubtreeModified:!0};function xc(a){return a instanceof Node?a.__shady_getRootNode():a}
function yc(a,b){var c=[],d=a;for(a=xc(a);d;)c.push(d),d.__shady_assignedSlot?d=d.__shady_assignedSlot:d.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&d.host&&(b||d!==a)?d=d.host:d=d.__shady_parentNode;c[c.length-1]===document&&c.push(window);return c}function zc(a){a.__composedPath||(a.__composedPath=yc(a.target,!0));return a.__composedPath}function Ac(a,b){if(!O)return a;a=yc(a,!0);for(var c=0,d,e=void 0,f,g=void 0;c<b.length;c++)if(d=b[c],f=xc(d),f!==e&&(g=a.indexOf(f),e=f),!O(f)||-1<g)return d}
function Bc(a){function b(c,d){c=new a(c,d);c.__composed=d&&!!d.composed;return c}b.__proto__=a;b.prototype=a.prototype;return b}var Cc={focus:!0,blur:!0};function Dc(a){return a.__target!==a.target||a.__relatedTarget!==a.relatedTarget}function Ec(a,b,c){if(c=b.__handlers&&b.__handlers[a.type]&&b.__handlers[a.type][c])for(var d=0,e;(e=c[d])&&(!Dc(a)||a.target!==a.relatedTarget)&&(e.call(b,a),!a.__immediatePropagationStopped);d++);}
function Fc(a){var b=a.composedPath();Object.defineProperty(a,"currentTarget",{get:function(){return d},configurable:!0});for(var c=b.length-1;0<=c;c--){var d=b[c];Ec(a,d,"capture");if(a.ea)return}Object.defineProperty(a,"eventPhase",{get:function(){return Event.AT_TARGET}});var e;for(c=0;c<b.length;c++){d=b[c];var f=L(d);f=f&&f.root;if(0===c||f&&f===e)if(Ec(a,d,"bubble"),d!==window&&(e=d.__shady_getRootNode()),a.ea)break}}
function Gc(a,b,c,d,e,f){for(var g=0;g<a.length;g++){var h=a[g],k=h.type,l=h.capture,m=h.once,q=h.passive;if(b===h.node&&c===k&&d===l&&e===m&&f===q)return g}return-1}function Hc(a){Kb();return this.__shady_native_dispatchEvent(a)}
function Ic(a,b,c){var d=uc(c),e=d.capture,f=d.once,g=d.passive,h=d.wa;d=d.ua;if(b){var k=typeof b;if("function"===k||"object"===k)if("object"!==k||b.handleEvent&&"function"===typeof b.handleEvent){if(wc[a])return this.__shady_native_addEventListener(a,b,d);var l=h||this;if(h=b[rc]){if(-1<Gc(h,l,a,e,f,g))return}else b[rc]=[];h=function(m){f&&this.__shady_removeEventListener(a,b,c);m.__target||Jc(m);if(l!==this){var q=Object.getOwnPropertyDescriptor(m,"currentTarget");Object.defineProperty(m,"currentTarget",
{get:function(){return l},configurable:!0})}m.__previousCurrentTarget=m.currentTarget;if(!O(l)&&"slot"!==l.localName||-1!=m.composedPath().indexOf(l))if(m.composed||-1<m.composedPath().indexOf(l))if(Dc(m)&&m.target===m.relatedTarget)m.eventPhase===Event.BUBBLING_PHASE&&m.stopImmediatePropagation();else if(m.eventPhase===Event.CAPTURING_PHASE||m.bubbles||m.target===l||l instanceof Window){var H="function"===k?b.call(l,m):b.handleEvent&&b.handleEvent(m);l!==this&&(q?(Object.defineProperty(m,"currentTarget",
q),q=null):delete m.currentTarget);return H}};b[rc].push({node:l,type:a,capture:e,once:f,passive:g,$a:h});Cc[a]?(this.__handlers=this.__handlers||{},this.__handlers[a]=this.__handlers[a]||{capture:[],bubble:[]},this.__handlers[a][e?"capture":"bubble"].push(h)):this.__shady_native_addEventListener(a,h,d)}}}
function Kc(a,b,c){if(b){var d=uc(c);c=d.capture;var e=d.once,f=d.passive,g=d.wa;d=d.ua;if(wc[a])return this.__shady_native_removeEventListener(a,b,d);var h=g||this;g=void 0;var k=null;try{k=b[rc]}catch(l){}k&&(e=Gc(k,h,a,c,e,f),-1<e&&(g=k.splice(e,1)[0].$a,k.length||(b[rc]=void 0)));this.__shady_native_removeEventListener(a,g||b,d);g&&Cc[a]&&this.__handlers&&this.__handlers[a]&&(a=this.__handlers[a][c?"capture":"bubble"],b=a.indexOf(g),-1<b&&a.splice(b,1))}}
function Lc(){for(var a in Cc)window.__shady_native_addEventListener(a,function(b){b.__target||(Jc(b),Fc(b))},!0)}
var Mc=Q({get composed(){void 0===this.__composed&&(sc?this.__composed="focusin"===this.type||"focusout"===this.type||sc(this):!1!==this.isTrusted&&(this.__composed=vc[this.type]));return this.__composed||!1},composedPath:function(){this.__composedPath||(this.__composedPath=yc(this.__target,this.composed));return this.__composedPath},get target(){return Ac(this.currentTarget||this.__previousCurrentTarget,this.composedPath())},get relatedTarget(){if(!this.__relatedTarget)return null;this.__relatedTargetComposedPath||
(this.__relatedTargetComposedPath=yc(this.__relatedTarget,!0));return Ac(this.currentTarget||this.__previousCurrentTarget,this.__relatedTargetComposedPath)},stopPropagation:function(){Event.prototype.stopPropagation.call(this);this.ea=!0},stopImmediatePropagation:function(){Event.prototype.stopImmediatePropagation.call(this);this.ea=this.__immediatePropagationStopped=!0}});
function Jc(a){a.__target=a.target;a.__relatedTarget=a.relatedTarget;if(M.D){var b=Object.getPrototypeOf(a);if(!b.hasOwnProperty("__shady_patchedProto")){var c=Object.create(b);c.__shady_sourceProto=b;P(c,Mc);b.__shady_patchedProto=c}a.__proto__=b.__shady_patchedProto}else P(a,Mc)}var Nc=Bc(Event),Oc=Bc(CustomEvent),Pc=Bc(MouseEvent);
function Qc(){if(!sc&&Object.getOwnPropertyDescriptor(Event.prototype,"isTrusted")){var a=function(){var b=new MouseEvent("click",{bubbles:!0,cancelable:!0,composed:!0});this.__shady_dispatchEvent(b)};Element.prototype.click?Element.prototype.click=a:HTMLElement.prototype.click&&(HTMLElement.prototype.click=a)}}var Rc=Object.getOwnPropertyNames(Document.prototype).filter(function(a){return"on"===a.substring(0,2)});function Sc(a,b){return{index:a,X:[],aa:b}}
function Tc(a,b,c,d){var e=0,f=0,g=0,h=0,k=Math.min(b-e,d-f);if(0==e&&0==f)a:{for(g=0;g<k;g++)if(a[g]!==c[g])break a;g=k}if(b==a.length&&d==c.length){h=a.length;for(var l=c.length,m=0;m<k-g&&Uc(a[--h],c[--l]);)m++;h=m}e+=g;f+=g;b-=h;d-=h;if(0==b-e&&0==d-f)return[];if(e==b){for(b=Sc(e,0);f<d;)b.X.push(c[f++]);return[b]}if(f==d)return[Sc(e,b-e)];k=e;g=f;d=d-g+1;h=b-k+1;b=Array(d);for(l=0;l<d;l++)b[l]=Array(h),b[l][0]=l;for(l=0;l<h;l++)b[0][l]=l;for(l=1;l<d;l++)for(m=1;m<h;m++)if(a[k+m-1]===c[g+l-1])b[l][m]=
b[l-1][m-1];else{var q=b[l-1][m]+1,H=b[l][m-1]+1;b[l][m]=q<H?q:H}k=b.length-1;g=b[0].length-1;d=b[k][g];for(a=[];0<k||0<g;)0==k?(a.push(2),g--):0==g?(a.push(3),k--):(h=b[k-1][g-1],l=b[k-1][g],m=b[k][g-1],q=l<m?l<h?l:h:m<h?m:h,q==h?(h==d?a.push(0):(a.push(1),d=h),k--,g--):q==l?(a.push(3),k--,d=l):(a.push(2),g--,d=m));a.reverse();b=void 0;k=[];for(g=0;g<a.length;g++)switch(a[g]){case 0:b&&(k.push(b),b=void 0);e++;f++;break;case 1:b||(b=Sc(e,0));b.aa++;e++;b.X.push(c[f]);f++;break;case 2:b||(b=Sc(e,
0));b.aa++;e++;break;case 3:b||(b=Sc(e,0)),b.X.push(c[f]),f++}b&&k.push(b);return k}function Uc(a,b){return a===b};var Vc=Q({dispatchEvent:Hc,addEventListener:Ic,removeEventListener:Kc});var Wc=null;function Xc(){Wc||(Wc=window.ShadyCSS&&window.ShadyCSS.ScopingShim);return Wc||null}function Yc(a,b,c){var d=Xc();return d&&"class"===b?(d.setElementClass(a,c),!0):!1}function Zc(a,b){var c=Xc();c&&c.unscopeNode(a,b)}function $c(a,b){var c=Xc();if(!c)return!0;if(a.nodeType===Node.DOCUMENT_FRAGMENT_NODE){c=!0;for(a=a.__shady_firstChild;a;a=a.__shady_nextSibling)c=c&&$c(a,b);return c}return a.nodeType!==Node.ELEMENT_NODE?!0:c.currentScopeForNode(a)===b}
function ad(a){if(a.nodeType!==Node.ELEMENT_NODE)return"";var b=Xc();return b?b.currentScopeForNode(a):""}function bd(a,b){if(a)for(a.nodeType===Node.ELEMENT_NODE&&b(a),a=a.__shady_firstChild;a;a=a.__shady_nextSibling)a.nodeType===Node.ELEMENT_NODE&&bd(a,b)};var cd=window.document,dd=M.ma,ed=Object.getOwnPropertyDescriptor(Node.prototype,"isConnected"),fd=ed&&ed.get;function gd(a){for(var b;b=a.__shady_firstChild;)a.__shady_removeChild(b)}function hd(a){var b=L(a);if(b&&void 0!==b.da)for(b=a.__shady_firstChild;b;b=b.__shady_nextSibling)hd(b);if(a=L(a))a.da=void 0}function id(a){var b=a;a&&"slot"===a.localName&&(b=(b=(b=L(a))&&b.T)&&b.length?b[0]:id(a.__shady_nextSibling));return b}
function jd(a,b,c){if(a=(a=L(a))&&a.W){if(b)if(b.nodeType===Node.DOCUMENT_FRAGMENT_NODE)for(var d=0,e=b.childNodes.length;d<e;d++)a.addedNodes.push(b.childNodes[d]);else a.addedNodes.push(b);c&&a.removedNodes.push(c);Mb(a)}}
var qd=Q({get parentNode(){var a=L(this);a=a&&a.parentNode;return void 0!==a?a:this.__shady_native_parentNode},get firstChild(){var a=L(this);a=a&&a.firstChild;return void 0!==a?a:this.__shady_native_firstChild},get lastChild(){var a=L(this);a=a&&a.lastChild;return void 0!==a?a:this.__shady_native_lastChild},get nextSibling(){var a=L(this);a=a&&a.nextSibling;return void 0!==a?a:this.__shady_native_nextSibling},get previousSibling(){var a=L(this);a=a&&a.previousSibling;return void 0!==a?a:this.__shady_native_previousSibling},
get childNodes(){if(rb(this)){var a=L(this);if(!a.childNodes){a.childNodes=[];for(var b=this.__shady_firstChild;b;b=b.__shady_nextSibling)a.childNodes.push(b)}var c=a.childNodes}else c=this.__shady_native_childNodes;c.item=function(d){return c[d]};return c},get parentElement(){var a=L(this);(a=a&&a.parentNode)&&a.nodeType!==Node.ELEMENT_NODE&&(a=null);return void 0!==a?a:this.__shady_native_parentElement},get isConnected(){if(fd&&fd.call(this))return!0;if(this.nodeType==Node.DOCUMENT_FRAGMENT_NODE)return!1;
var a=this.ownerDocument;if(Ab){if(a.__shady_native_contains(this))return!0}else if(a.documentElement&&a.documentElement.__shady_native_contains(this))return!0;for(a=this;a&&!(a instanceof Document);)a=a.__shady_parentNode||(O(a)?a.host:void 0);return!!(a&&a instanceof Document)},get textContent(){if(rb(this)){for(var a=[],b=this.__shady_firstChild;b;b=b.__shady_nextSibling)b.nodeType!==Node.COMMENT_NODE&&a.push(b.__shady_textContent);return a.join("")}return this.__shady_native_textContent},set textContent(a){if("undefined"===
typeof a||null===a)a="";switch(this.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:if(!rb(this)&&M.D){var b=this.__shady_firstChild;(b!=this.__shady_lastChild||b&&b.nodeType!=Node.TEXT_NODE)&&gd(this);this.__shady_native_textContent=a}else gd(this),(0<a.length||this.nodeType===Node.ELEMENT_NODE)&&this.__shady_insertBefore(document.createTextNode(a));break;default:this.nodeValue=a}},insertBefore:function(a,b){if(this.ownerDocument!==cd&&a.ownerDocument!==cd)return this.__shady_native_insertBefore(a,
b),a;if(a===this)throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");if(b){var c=L(b);c=c&&c.parentNode;if(void 0!==c&&c!==this||void 0===c&&b.__shady_native_parentNode!==this)throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");}if(b===a)return a;jd(this,a);var d=[],e=(c=kd(this))?c.host.localName:ad(this),f=a.__shady_parentNode;if(f){var g=ad(a);var h=!!c||!kd(a)||
dd&&void 0!==this.__noInsertionPoint;f.__shady_removeChild(a,h)}f=!0;var k=(!dd||void 0===a.__noInsertionPoint&&void 0===this.__noInsertionPoint)&&!$c(a,e),l=c&&!a.__noInsertionPoint&&(!dd||a.nodeType===Node.DOCUMENT_FRAGMENT_NODE);if(l||k)k&&(g=g||ad(a)),bd(a,function(m){l&&"slot"===m.localName&&d.push(m);if(k){var q=g;Xc()&&(q&&Zc(m,q),(q=Xc())&&q.scopeNode(m,e))}});d.length&&(ld(c),c.c.push.apply(c.c,d instanceof Array?d:da(ca(d))),md(c));rb(this)&&(nd(a,this,b),c=L(this),sb(this)?(md(c.root),
f=!1):c.root&&(f=!1));f?(c=O(this)?this.host:this,b?(b=id(b),c.__shady_native_insertBefore(a,b)):c.__shady_native_appendChild(a)):a.ownerDocument!==this.ownerDocument&&this.ownerDocument.adoptNode(a);return a},appendChild:function(a){if(this!=a||!O(a))return this.__shady_insertBefore(a)},removeChild:function(a,b){b=void 0===b?!1:b;if(this.ownerDocument!==cd)return this.__shady_native_removeChild(a);if(a.__shady_parentNode!==this)throw Error("The node to be removed is not a child of this node: "+a);
jd(this,null,a);var c=kd(a),d=c&&od(c,a),e=L(this);if(rb(this)&&(pd(a,this),sb(this))){md(e.root);var f=!0}if(Xc()&&!b&&c&&a.nodeType!==Node.TEXT_NODE){var g=ad(a);bd(a,function(h){Zc(h,g)})}hd(a);c&&((b=this&&"slot"===this.localName)&&(f=!0),(d||b)&&md(c));f||(f=O(this)?this.host:this,(!e.root&&"slot"!==a.localName||f===a.__shady_native_parentNode)&&f.__shady_native_removeChild(a));return a},replaceChild:function(a,b){this.__shady_insertBefore(a,b);this.__shady_removeChild(b);return a},cloneNode:function(a){if("template"==
this.localName)return this.__shady_native_cloneNode(a);var b=this.__shady_native_cloneNode(!1);if(a&&b.nodeType!==Node.ATTRIBUTE_NODE){a=this.__shady_firstChild;for(var c;a;a=a.__shady_nextSibling)c=a.__shady_cloneNode(!0),b.__shady_appendChild(c)}return b},getRootNode:function(a){if(this&&this.nodeType){var b=B(this),c=b.da;void 0===c&&(O(this)?(c=this,b.da=c):(c=(c=this.__shady_parentNode)?c.__shady_getRootNode(a):this,document.documentElement.__shady_native_contains(this)&&(b.da=c)));return c}},
contains:function(a){return Bb(this,a)}});var sd=Q({get assignedSlot(){var a=this.__shady_parentNode;(a=a&&a.__shady_shadowRoot)&&rd(a);return(a=L(this))&&a.assignedSlot||null}});function td(a,b,c){var d=[];vd(a,b,c,d);return d}function vd(a,b,c,d){for(a=a.__shady_firstChild;a;a=a.__shady_nextSibling){var e;if(e=a.nodeType===Node.ELEMENT_NODE){e=a;var f=b,g=c,h=d,k=f(e);k&&h.push(e);g&&g(k)?e=k:(vd(e,f,g,h),e=void 0)}if(e)break}}
var wd=Q({get firstElementChild(){var a=L(this);if(a&&void 0!==a.firstChild){for(a=this.__shady_firstChild;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.__shady_nextSibling;return a}return this.__shady_native_firstElementChild},get lastElementChild(){var a=L(this);if(a&&void 0!==a.lastChild){for(a=this.__shady_lastChild;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.__shady_previousSibling;return a}return this.__shady_native_lastElementChild},get children(){return rb(this)?Cb(Array.prototype.filter.call(Eb(this),
function(a){return a.nodeType===Node.ELEMENT_NODE})):this.__shady_native_children},get childElementCount(){var a=this.__shady_children;return a?a.length:0}}),xd=Q({querySelector:function(a){return td(this,function(b){return vb.call(b,a)},function(b){return!!b})[0]||null},querySelectorAll:function(a,b){if(b){b=Array.prototype.slice.call(this.__shady_native_querySelectorAll(a));var c=this.__shady_getRootNode();return Cb(b.filter(function(d){return d.__shady_getRootNode()==c}))}return Cb(td(this,function(d){return vb.call(d,
a)}))}}),yd=M.ma&&!M.G?Object.assign({},wd):wd;Object.assign(wd,xd);var zd=window.document;function Ad(a,b){if("slot"===b)a=a.__shady_parentNode,sb(a)&&md(L(a).root);else if("slot"===a.localName&&"name"===b&&(b=kd(a))){if(b.a){Bd(b);var c=a.Ba,d=Cd(a);if(d!==c){c=b.b[c];var e=c.indexOf(a);0<=e&&c.splice(e,1);c=b.b[d]||(b.b[d]=[]);c.push(a);1<c.length&&(b.b[d]=Dd(c))}}md(b)}}
var Ed=Q({get previousElementSibling(){var a=L(this);if(a&&void 0!==a.previousSibling){for(a=this.__shady_previousSibling;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.__shady_previousSibling;return a}return this.__shady_native_previousElementSibling},get nextElementSibling(){var a=L(this);if(a&&void 0!==a.nextSibling){for(a=this.__shady_nextSibling;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.__shady_nextSibling;return a}return this.__shady_native_nextElementSibling},get slot(){return this.getAttribute("slot")},
set slot(a){this.__shady_setAttribute("slot",a)},get className(){return this.getAttribute("class")||""},set className(a){this.__shady_setAttribute("class",a)},setAttribute:function(a,b){this.ownerDocument!==zd?this.__shady_native_setAttribute(a,b):Yc(this,a,b)||(this.__shady_native_setAttribute(a,b),Ad(this,a))},removeAttribute:function(a){this.ownerDocument!==zd?this.__shady_native_removeAttribute(a):Yc(this,a,"")?""===this.getAttribute(a)&&this.__shady_native_removeAttribute(a):(this.__shady_native_removeAttribute(a),
Ad(this,a))}}),Jd=Q({attachShadow:function(a){if(!this)throw Error("Must provide a host.");if(!a)throw Error("Not enough arguments.");if(a.shadyUpgradeFragment&&!M.ya){var b=a.shadyUpgradeFragment;b.__proto__=ShadowRoot.prototype;Fd(b,this,a);Gd(b,b);a=b.__noInsertionPoint?null:b.querySelectorAll("slot");b.__noInsertionPoint=void 0;if(a&&a.length){var c=b;ld(c);c.c.push.apply(c.c,a instanceof Array?a:da(ca(a)));md(b)}b.host.__shady_native_appendChild(b)}else b=new Hd(Id,this,a);return this.__CE_shadowRoot=
b},get shadowRoot(){var a=L(this);return a&&a.Sa||null}});Object.assign(Ed,Jd);var Kd=document.implementation.createHTMLDocument("inert"),Ld=Q({get innerHTML(){return rb(this)?Wb("template"===this.localName?this.content:this,Eb):this.__shady_native_innerHTML},set innerHTML(a){if("template"===this.localName)this.__shady_native_innerHTML=a;else{gd(this);var b=this.localName||"div";b=this.namespaceURI&&this.namespaceURI!==Kd.namespaceURI?Kd.createElementNS(this.namespaceURI,b):Kd.createElement(b);for(M.D?b.__shady_native_innerHTML=a:b.innerHTML=a;a=b.__shady_firstChild;)this.__shady_insertBefore(a)}}});var Md=Q({blur:function(){var a=L(this);(a=(a=a&&a.root)&&a.activeElement)?a.__shady_blur():this.__shady_native_blur()}});M.ma||Rc.forEach(function(a){Md[a]={set:function(b){var c=B(this),d=a.substring(2);c.N||(c.N={});c.N[a]&&this.removeEventListener(d,c.N[a]);this.__shady_addEventListener(d,b);c.N[a]=b},get:function(){var b=L(this);return b&&b.N&&b.N[a]},configurable:!0}});var Nd=Q({assignedNodes:function(a){if("slot"===this.localName){var b=this.__shady_getRootNode();b&&O(b)&&rd(b);return(b=L(this))?(a&&a.flatten?b.T:b.assignedNodes)||[]:[]}},addEventListener:function(a,b,c){if("slot"!==this.localName||"slotchange"===a)Ic.call(this,a,b,c);else{"object"!==typeof c&&(c={capture:!!c});var d=this.__shady_parentNode;if(!d)throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");c.O=this;d.__shady_addEventListener(a,b,c)}},removeEventListener:function(a,
b,c){if("slot"!==this.localName||"slotchange"===a)Kc.call(this,a,b,c);else{"object"!==typeof c&&(c={capture:!!c});var d=this.__shady_parentNode;if(!d)throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");c.O=this;d.__shady_removeEventListener(a,b,c)}}});var Od=Q({getElementById:function(a){return""===a?null:td(this,function(b){return b.id==a},function(b){return!!b})[0]||null}});var Pd=Q({get activeElement(){var a=M.D?document.__shady_native_activeElement:document.activeElement;if(!a||!a.nodeType)return null;var b=!!O(this);if(!(this===document||b&&this.host!==a&&this.host.__shady_native_contains(a)))return null;for(b=kd(a);b&&b!==this;)a=b.host,b=kd(a);return this===document?b?null:a:b===this?a:null}});var Qd=window.document,Rd=Q({importNode:function(a,b){if(a.ownerDocument!==Qd||"template"===a.localName)return this.__shady_native_importNode(a,b);var c=this.__shady_native_importNode(a,!1);if(b)for(a=a.__shady_firstChild;a;a=a.__shady_nextSibling)b=this.__shady_importNode(a,!0),c.__shady_appendChild(b);return c}});var Sd=Q({dispatchEvent:Hc,addEventListener:Ic.bind(window),removeEventListener:Kc.bind(window)});var Td={};Object.getOwnPropertyDescriptor(HTMLElement.prototype,"parentElement")&&(Td.parentElement=qd.parentElement);Object.getOwnPropertyDescriptor(HTMLElement.prototype,"contains")&&(Td.contains=qd.contains);Object.getOwnPropertyDescriptor(HTMLElement.prototype,"children")&&(Td.children=wd.children);Object.getOwnPropertyDescriptor(HTMLElement.prototype,"innerHTML")&&(Td.innerHTML=Ld.innerHTML);Object.getOwnPropertyDescriptor(HTMLElement.prototype,"className")&&(Td.className=Ed.className);
var Ud={EventTarget:[Vc],Node:[qd,window.EventTarget?null:Vc],Text:[sd],Comment:[sd],CDATASection:[sd],ProcessingInstruction:[sd],Element:[Ed,wd,sd,!M.D||"innerHTML"in Element.prototype?Ld:null,window.HTMLSlotElement?null:Nd],HTMLElement:[Md,Td],HTMLSlotElement:[Nd],DocumentFragment:[yd,Od],Document:[Rd,yd,Od,Pd],Window:[Sd]},Vd=M.D?null:["innerHTML","textContent"];function Wd(a,b,c,d){b.forEach(function(e){return a&&e&&P(a,e,c,d)})}
function Xd(a){var b=a?null:Vd,c;for(c in Ud)Wd(window[c]&&window[c].prototype,Ud[c],a,b)}["Text","Comment","CDATASection","ProcessingInstruction"].forEach(function(a){var b=window[a],c=Object.create(b.prototype);c.__shady_protoIsPatched=!0;Wd(c,Ud.EventTarget);Wd(c,Ud.Node);Ud[a]&&Wd(c,Ud[a]);b.prototype.__shady_patchedProto=c});function Yd(a){a.__shady_protoIsPatched=!0;Wd(a,Ud.EventTarget);Wd(a,Ud.Node);Wd(a,Ud.Element);Wd(a,Ud.HTMLElement);Wd(a,Ud.HTMLSlotElement);return a};var Zd=M.la,$d=M.D;function ae(a,b){if(Zd&&!a.__shady_protoIsPatched&&!O(a)){var c=Object.getPrototypeOf(a),d=c.hasOwnProperty("__shady_patchedProto")&&c.__shady_patchedProto;d||(d=Object.create(c),Yd(d),c.__shady_patchedProto=d);Object.setPrototypeOf(a,d)}$d||(1===b?pc(a):2===b&&qc(a))}
function be(a,b,c,d){ae(a,1);d=d||null;var e=B(a),f=d?B(d):null;e.previousSibling=d?f.previousSibling:b.__shady_lastChild;if(f=L(e.previousSibling))f.nextSibling=a;if(f=L(e.nextSibling=d))f.previousSibling=a;e.parentNode=b;d?d===c.firstChild&&(c.firstChild=a):(c.lastChild=a,c.firstChild||(c.firstChild=a));c.childNodes=null}
function nd(a,b,c){ae(b,2);var d=B(b);void 0!==d.firstChild&&(d.childNodes=null);if(a.nodeType===Node.DOCUMENT_FRAGMENT_NODE)for(a=a.__shady_native_firstChild;a;a=a.__shady_native_nextSibling)be(a,b,d,c);else be(a,b,d,c)}
function pd(a,b){var c=B(a);b=B(b);a===b.firstChild&&(b.firstChild=c.nextSibling);a===b.lastChild&&(b.lastChild=c.previousSibling);a=c.previousSibling;var d=c.nextSibling;a&&(B(a).nextSibling=d);d&&(B(d).previousSibling=a);c.parentNode=c.previousSibling=c.nextSibling=void 0;void 0!==b.childNodes&&(b.childNodes=null)}
function Gd(a,b){var c=B(a);if(b||void 0===c.firstChild){c.childNodes=null;var d=c.firstChild=a.__shady_native_firstChild;c.lastChild=a.__shady_native_lastChild;ae(a,2);c=d;for(d=void 0;c;c=c.__shady_native_nextSibling){var e=B(c);e.parentNode=b||a;e.nextSibling=c.__shady_native_nextSibling;e.previousSibling=d||null;d=c;ae(c,1)}}};var ce=Q({addEventListener:function(a,b,c){"object"!==typeof c&&(c={capture:!!c});c.O=c.O||this;this.host.__shady_addEventListener(a,b,c)},removeEventListener:function(a,b,c){"object"!==typeof c&&(c={capture:!!c});c.O=c.O||this;this.host.__shady_removeEventListener(a,b,c)}});function de(a,b){P(a,ce,b);P(a,Pd,b);P(a,Ld,b);P(a,wd,b);M.G&&!b?(P(a,qd,b),P(a,Od,b)):M.D||(P(a,mc),P(a,kc),P(a,lc))};var Id={},ee=M.deferConnectionCallbacks&&"loading"===document.readyState,fe;function ge(a){var b=[];do b.unshift(a);while(a=a.__shady_parentNode);return b}function Hd(a,b,c){if(a!==Id)throw new TypeError("Illegal constructor");this.a=null;Fd(this,b,c)}
function Fd(a,b,c){a.host=b;a.mode=c&&c.mode;Gd(a.host);b=B(a.host);b.root=a;b.Sa="closed"!==a.mode?a:null;b=B(a);b.firstChild=b.lastChild=b.parentNode=b.nextSibling=b.previousSibling=null;if(M.preferPerformance)for(;b=a.host.__shady_native_firstChild;)a.host.__shady_native_removeChild(b);else md(a)}function md(a){a.R||(a.R=!0,Jb(function(){return rd(a)}))}
function rd(a){var b;if(b=a.R){for(var c;a;)a:{a.R&&(c=a),b=a;a=b.host.__shady_getRootNode();if(O(a)&&(b=L(b.host))&&0<b.Z)break a;a=void 0}b=c}(c=b)&&c._renderSelf()}
Hd.prototype._renderSelf=function(){var a=ee;ee=!0;this.R=!1;if(this.a){Bd(this);for(var b=0,c;b<this.a.length;b++){c=this.a[b];var d=L(c),e=d.assignedNodes;d.assignedNodes=[];d.T=[];if(d.ra=e)for(d=0;d<e.length;d++){var f=L(e[d]);f.fa=f.assignedSlot;f.assignedSlot===c&&(f.assignedSlot=null)}}for(b=this.host.__shady_firstChild;b;b=b.__shady_nextSibling)he(this,b);for(b=0;b<this.a.length;b++){c=this.a[b];e=L(c);if(!e.assignedNodes.length)for(d=c.__shady_firstChild;d;d=d.__shady_nextSibling)he(this,
d,c);(d=(d=L(c.__shady_parentNode))&&d.root)&&(tb(d)||d.R)&&d._renderSelf();ie(this,e.T,e.assignedNodes);if(d=e.ra){for(f=0;f<d.length;f++)L(d[f]).fa=null;e.ra=null;d.length>e.assignedNodes.length&&(e.ha=!0)}e.ha&&(e.ha=!1,je(this,c))}c=this.a;b=[];for(e=0;e<c.length;e++)d=c[e].__shady_parentNode,(f=L(d))&&f.root||!(0>b.indexOf(d))||b.push(d);for(c=0;c<b.length;c++){f=b[c];e=f===this?this.host:f;d=[];for(f=f.__shady_firstChild;f;f=f.__shady_nextSibling)if("slot"==f.localName)for(var g=L(f).T,h=0;h<
g.length;h++)d.push(g[h]);else d.push(f);f=Db(e);g=Tc(d,d.length,f,f.length);for(var k=h=0,l=void 0;h<g.length&&(l=g[h]);h++){for(var m=0,q=void 0;m<l.X.length&&(q=l.X[m]);m++)q.__shady_native_parentNode===e&&e.__shady_native_removeChild(q),f.splice(l.index+k,1);k-=l.aa}k=0;for(l=void 0;k<g.length&&(l=g[k]);k++)for(h=f[l.index],m=l.index;m<l.index+l.aa;m++)q=d[m],e.__shady_native_insertBefore(q,h),f.splice(m,0,q)}}if(!M.preferPerformance&&!this.qa)for(b=this.host.__shady_firstChild;b;b=b.__shady_nextSibling)c=
L(b),b.__shady_native_parentNode!==this.host||"slot"!==b.localName&&c.assignedSlot||this.host.__shady_native_removeChild(b);this.qa=!0;ee=a;fe&&fe()};function he(a,b,c){var d=B(b),e=d.fa;d.fa=null;c||(c=(a=a.b[b.__shady_slot||"__catchall"])&&a[0]);c?(B(c).assignedNodes.push(b),d.assignedSlot=c):d.assignedSlot=void 0;e!==d.assignedSlot&&d.assignedSlot&&(B(d.assignedSlot).ha=!0)}
function ie(a,b,c){for(var d=0,e=void 0;d<c.length&&(e=c[d]);d++)if("slot"==e.localName){var f=L(e).assignedNodes;f&&f.length&&ie(a,b,f)}else b.push(c[d])}function je(a,b){b.__shady_native_dispatchEvent(new Event("slotchange"));b=L(b);b.assignedSlot&&je(a,b.assignedSlot)}function ld(a){a.c=a.c||[];a.a=a.a||[];a.b=a.b||{}}
function Bd(a){if(a.c&&a.c.length){for(var b=a.c,c,d=0;d<b.length;d++){var e=b[d];Gd(e);var f=e.__shady_parentNode;Gd(f);f=L(f);f.Z=(f.Z||0)+1;f=Cd(e);a.b[f]?(c=c||{},c[f]=!0,a.b[f].push(e)):a.b[f]=[e];a.a.push(e)}if(c)for(var g in c)a.b[g]=Dd(a.b[g]);a.c=[]}}function Cd(a){var b=a.name||a.getAttribute("name")||"__catchall";return a.Ba=b}
function Dd(a){return a.sort(function(b,c){b=ge(b);for(var d=ge(c),e=0;e<b.length;e++){c=b[e];var f=d[e];if(c!==f)return b=Eb(c.__shady_parentNode),b.indexOf(c)-b.indexOf(f)}})}
function od(a,b){if(a.a){Bd(a);var c=a.b,d;for(d in c)for(var e=c[d],f=0;f<e.length;f++){var g=e[f];if(Bb(b,g)){e.splice(f,1);var h=a.a.indexOf(g);0<=h&&(a.a.splice(h,1),(h=L(g.__shady_parentNode))&&h.Z&&h.Z--);f--;g=L(g);if(h=g.T)for(var k=0;k<h.length;k++){var l=h[k],m=l.__shady_native_parentNode;m&&m.__shady_native_removeChild(l)}g.T=[];g.assignedNodes=[];h=!0}}return h}}function tb(a){Bd(a);return!(!a.a||!a.a.length)}
(function(a){a.__proto__=DocumentFragment.prototype;de(a,"__shady_");de(a);Object.defineProperties(a,{nodeType:{value:Node.DOCUMENT_FRAGMENT_NODE,configurable:!0},nodeName:{value:"#document-fragment",configurable:!0},nodeValue:{value:null,configurable:!0}});["localName","namespaceURI","prefix"].forEach(function(b){Object.defineProperty(a,b,{value:void 0,configurable:!0})});["ownerDocument","baseURI","isConnected"].forEach(function(b){Object.defineProperty(a,b,{get:function(){return this.host[b]},
configurable:!0})})})(Hd.prototype);
if(window.customElements&&M.ia&&!M.preferPerformance){var ke=new Map;fe=function(){var a=[];ke.forEach(function(d,e){a.push([e,d])});ke.clear();for(var b=0;b<a.length;b++){var c=a[b][0];a[b][1]?c.__shadydom_connectedCallback():c.__shadydom_disconnectedCallback()}};ee&&document.addEventListener("readystatechange",function(){ee=!1;fe()},{once:!0});var le=function(a,b,c){var d=0,e="__isConnected"+d++;if(b||c)a.prototype.connectedCallback=a.prototype.__shadydom_connectedCallback=function(){ee?ke.set(this,
!0):this[e]||(this[e]=!0,b&&b.call(this))},a.prototype.disconnectedCallback=a.prototype.__shadydom_disconnectedCallback=function(){ee?this.isConnected||ke.set(this,!1):this[e]&&(this[e]=!1,c&&c.call(this))};return a},me=window.customElements.define,define=function(a,b){var c=b.prototype.connectedCallback,d=b.prototype.disconnectedCallback;me.call(window.customElements,a,le(b,c,d));b.prototype.connectedCallback=c;b.prototype.disconnectedCallback=d};window.customElements.define=define;Object.defineProperty(window.CustomElementRegistry.prototype,
"define",{value:define,configurable:!0})}function kd(a){a=a.__shady_getRootNode();if(O(a))return a};function ne(a){this.node=a}w=ne.prototype;w.addEventListener=function(a,b,c){return this.node.__shady_addEventListener(a,b,c)};w.removeEventListener=function(a,b,c){return this.node.__shady_removeEventListener(a,b,c)};w.appendChild=function(a){return this.node.__shady_appendChild(a)};w.insertBefore=function(a,b){return this.node.__shady_insertBefore(a,b)};w.removeChild=function(a){return this.node.__shady_removeChild(a)};w.replaceChild=function(a,b){return this.node.__shady_replaceChild(a,b)};
w.cloneNode=function(a){return this.node.__shady_cloneNode(a)};w.getRootNode=function(a){return this.node.__shady_getRootNode(a)};w.contains=function(a){return this.node.__shady_contains(a)};w.dispatchEvent=function(a){return this.node.__shady_dispatchEvent(a)};w.setAttribute=function(a,b){this.node.__shady_setAttribute(a,b)};w.getAttribute=function(a){return this.node.__shady_native_getAttribute(a)};w.hasAttribute=function(a){return this.node.__shady_native_hasAttribute(a)};w.removeAttribute=function(a){this.node.__shady_removeAttribute(a)};
w.attachShadow=function(a){return this.node.__shady_attachShadow(a)};w.focus=function(){this.node.__shady_native_focus()};w.blur=function(){this.node.__shady_blur()};w.importNode=function(a,b){if(this.node.nodeType===Node.DOCUMENT_NODE)return this.node.__shady_importNode(a,b)};w.getElementById=function(a){if(this.node.nodeType===Node.DOCUMENT_NODE)return this.node.__shady_getElementById(a)};w.querySelector=function(a){return this.node.__shady_querySelector(a)};
w.querySelectorAll=function(a,b){return this.node.__shady_querySelectorAll(a,b)};w.assignedNodes=function(a){if("slot"===this.node.localName)return this.node.__shady_assignedNodes(a)};
ea.Object.defineProperties(ne.prototype,{activeElement:{configurable:!0,enumerable:!0,get:function(){if(O(this.node)||this.node.nodeType===Node.DOCUMENT_NODE)return this.node.__shady_activeElement}},_activeElement:{configurable:!0,enumerable:!0,get:function(){return this.activeElement}},host:{configurable:!0,enumerable:!0,get:function(){if(O(this.node))return this.node.host}},parentNode:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_parentNode}},firstChild:{configurable:!0,
enumerable:!0,get:function(){return this.node.__shady_firstChild}},lastChild:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_lastChild}},nextSibling:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_nextSibling}},previousSibling:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_previousSibling}},childNodes:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_childNodes}},parentElement:{configurable:!0,enumerable:!0,
get:function(){return this.node.__shady_parentElement}},firstElementChild:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_firstElementChild}},lastElementChild:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_lastElementChild}},nextElementSibling:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_nextElementSibling}},previousElementSibling:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_previousElementSibling}},
children:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_children}},childElementCount:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_childElementCount}},shadowRoot:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_shadowRoot}},assignedSlot:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_assignedSlot}},isConnected:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_isConnected}},innerHTML:{configurable:!0,
enumerable:!0,get:function(){return this.node.__shady_innerHTML},set:function(a){this.node.__shady_innerHTML=a}},textContent:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_textContent},set:function(a){this.node.__shady_textContent=a}},slot:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_slot},set:function(a){this.node.__shady_slot=a}},className:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_className},set:function(a){return this.node.__shady_className=
a}}});Rc.forEach(function(a){Object.defineProperty(ne.prototype,a,{get:function(){return this.node["__shady_"+a]},set:function(b){this.node["__shady_"+a]=b},configurable:!0})});var oe=new WeakMap;function pe(a){if(O(a)||a instanceof ne)return a;var b=oe.get(a);b||(b=new ne(a),oe.set(a,b));return b};if(M.ia){var qe=M.D?function(a){return a}:function(a){qc(a);pc(a);return a},ShadyDOM={inUse:M.ia,patch:qe,isShadyRoot:O,enqueue:Jb,flush:Kb,flushInitial:function(a){!a.qa&&a.R&&rd(a)},settings:M,filterMutations:Pb,observeChildren:Nb,unobserveChildren:Ob,deferConnectionCallbacks:M.deferConnectionCallbacks,preferPerformance:M.preferPerformance,handlesDynamicScoping:!0,wrap:M.G?pe:qe,wrapIfNeeded:!0===M.G?pe:function(a){return a},Wrapper:ne,composedPath:zc,noPatch:M.G,patchOnDemand:M.la,nativeMethods:$b,
nativeTree:ac,patchElementProto:Yd};window.ShadyDOM=ShadyDOM;jc();Xd("__shady_");Object.defineProperty(document,"_activeElement",Pd.activeElement);P(Window.prototype,Sd,"__shady_");M.G?M.la&&P(Element.prototype,Jd):(Xd(),Qc());Lc();window.Event=Nc;window.CustomEvent=Oc;window.MouseEvent=Pc;window.ShadowRoot=Hd};var re=window.Document.prototype.createElement,se=window.Document.prototype.createElementNS,te=window.Document.prototype.importNode,ue=window.Document.prototype.prepend,ve=window.Document.prototype.append,we=window.DocumentFragment.prototype.prepend,xe=window.DocumentFragment.prototype.append,ye=window.Node.prototype.cloneNode,ze=window.Node.prototype.appendChild,Ae=window.Node.prototype.insertBefore,Be=window.Node.prototype.removeChild,Ce=window.Node.prototype.replaceChild,De=Object.getOwnPropertyDescriptor(window.Node.prototype,
"textContent"),Ee=window.Element.prototype.attachShadow,Fe=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),Ge=window.Element.prototype.getAttribute,He=window.Element.prototype.setAttribute,Ie=window.Element.prototype.removeAttribute,Je=window.Element.prototype.getAttributeNS,Ke=window.Element.prototype.setAttributeNS,Le=window.Element.prototype.removeAttributeNS,Me=window.Element.prototype.insertAdjacentElement,Ne=window.Element.prototype.insertAdjacentHTML,Oe=window.Element.prototype.prepend,
Pe=window.Element.prototype.append,Qe=window.Element.prototype.before,Re=window.Element.prototype.after,Se=window.Element.prototype.replaceWith,Te=window.Element.prototype.remove,Ue=window.HTMLElement,Ve=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),We=window.HTMLElement.prototype.insertAdjacentElement,Xe=window.HTMLElement.prototype.insertAdjacentHTML;var Ye=new Set;"annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" ").forEach(function(a){return Ye.add(a)});function Ze(a){var b=Ye.has(a);a=/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(a);return!b&&a}var $e=document.contains?document.contains.bind(document):document.documentElement.contains.bind(document.documentElement);
function T(a){var b=a.isConnected;if(void 0!==b)return b;if($e(a))return!0;for(;a&&!(a.__CE_isImportDocument||a instanceof Document);)a=a.parentNode||(window.ShadowRoot&&a instanceof ShadowRoot?a.host:void 0);return!(!a||!(a.__CE_isImportDocument||a instanceof Document))}function af(a){var b=a.children;if(b)return Array.prototype.slice.call(b);b=[];for(a=a.firstChild;a;a=a.nextSibling)a.nodeType===Node.ELEMENT_NODE&&b.push(a);return b}
function bf(a,b){for(;b&&b!==a&&!b.nextSibling;)b=b.parentNode;return b&&b!==a?b.nextSibling:null}
function cf(a,b,c){for(var d=a;d;){if(d.nodeType===Node.ELEMENT_NODE){var e=d;b(e);var f=e.localName;if("link"===f&&"import"===e.getAttribute("rel")){d=e.import;void 0===c&&(c=new Set);if(d instanceof Node&&!c.has(d))for(c.add(d),d=d.firstChild;d;d=d.nextSibling)cf(d,b,c);d=bf(a,e);continue}else if("template"===f){d=bf(a,e);continue}if(e=e.__CE_shadowRoot)for(e=e.firstChild;e;e=e.nextSibling)cf(e,b,c)}d=d.firstChild?d.firstChild:bf(a,d)}}function U(a,b,c){a[b]=c};function df(a){var b=document;this.b=a;this.a=b;this.P=void 0;ef(this.b,this.a);"loading"===this.a.readyState&&(this.P=new MutationObserver(this.c.bind(this)),this.P.observe(this.a,{childList:!0,subtree:!0}))}function ff(a){a.P&&a.P.disconnect()}df.prototype.c=function(a){var b=this.a.readyState;"interactive"!==b&&"complete"!==b||ff(this);for(b=0;b<a.length;b++)for(var c=a[b].addedNodes,d=0;d<c.length;d++)ef(this.b,c[d])};function gf(){var a=this;this.a=this.w=void 0;this.b=new Promise(function(b){a.a=b;a.w&&b(a.w)})}gf.prototype.resolve=function(a){if(this.w)throw Error("Already resolved.");this.w=a;this.a&&this.a(a)};function V(a){this.f=new Map;this.u=new Map;this.ta=new Map;this.U=!1;this.b=a;this.ja=new Map;this.c=function(b){return b()};this.a=!1;this.F=[];this.va=a.f?new df(a):void 0}w=V.prototype;w.Qa=function(a,b){var c=this;if(!(b instanceof Function))throw new TypeError("Custom element constructor getters must be functions.");hf(this,a);this.f.set(a,b);this.F.push(a);this.a||(this.a=!0,this.c(function(){return jf(c)}))};
w.define=function(a,b){var c=this;if(!(b instanceof Function))throw new TypeError("Custom element constructors must be functions.");hf(this,a);kf(this,a,b);this.F.push(a);this.a||(this.a=!0,this.c(function(){return jf(c)}))};function hf(a,b){if(!Ze(b))throw new SyntaxError("The element name '"+b+"' is not valid.");if(lf(a,b))throw Error("A custom element with name '"+b+"' has already been defined.");if(a.U)throw Error("A custom element is already being defined.");}
function kf(a,b,c){a.U=!0;var d;try{var e=function(m){var q=f[m];if(void 0!==q&&!(q instanceof Function))throw Error("The '"+m+"' callback must be a function.");return q},f=c.prototype;if(!(f instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");var g=e("connectedCallback");var h=e("disconnectedCallback");var k=e("adoptedCallback");var l=(d=e("attributeChangedCallback"))&&c.observedAttributes||[]}catch(m){throw m;}finally{a.U=!1}c={localName:b,constructorFunction:c,
connectedCallback:g,disconnectedCallback:h,adoptedCallback:k,attributeChangedCallback:d,observedAttributes:l,constructionStack:[]};a.u.set(b,c);a.ta.set(c.constructorFunction,c);return c}w.upgrade=function(a){ef(this.b,a)};
function jf(a){if(!1!==a.a){a.a=!1;for(var b=[],c=a.F,d=new Map,e=0;e<c.length;e++)d.set(c[e],[]);ef(a.b,document,{upgrade:function(k){if(void 0===k.__CE_state){var l=k.localName,m=d.get(l);m?m.push(k):a.u.has(l)&&b.push(k)}}});for(e=0;e<b.length;e++)mf(a.b,b[e]);for(e=0;e<c.length;e++){for(var f=c[e],g=d.get(f),h=0;h<g.length;h++)mf(a.b,g[h]);(f=a.ja.get(f))&&f.resolve(void 0)}c.length=0}}w.get=function(a){if(a=lf(this,a))return a.constructorFunction};
w.whenDefined=function(a){if(!Ze(a))return Promise.reject(new SyntaxError("'"+a+"' is not a valid custom element name."));var b=this.ja.get(a);if(b)return b.b;b=new gf;this.ja.set(a,b);var c=this.u.has(a)||this.f.has(a);a=-1===this.F.indexOf(a);c&&a&&b.resolve(void 0);return b.b};w.polyfillWrapFlushCallback=function(a){this.va&&ff(this.va);var b=this.c;this.c=function(c){return a(function(){return b(c)})}};
function lf(a,b){var c=a.u.get(b);if(c)return c;if(c=a.f.get(b)){a.f.delete(b);try{return kf(a,b,c())}catch(d){nf(d)}}}window.CustomElementRegistry=V;V.prototype.define=V.prototype.define;V.prototype.upgrade=V.prototype.upgrade;V.prototype.get=V.prototype.get;V.prototype.whenDefined=V.prototype.whenDefined;V.prototype.polyfillDefineLazy=V.prototype.Qa;V.prototype.polyfillWrapFlushCallback=V.prototype.polyfillWrapFlushCallback;function of(){var a=pf&&pf.noDocumentConstructionObserver,b=pf&&pf.shadyDomFastWalk;this.b=[];this.c=[];this.a=!1;this.shadyDomFastWalk=b;this.f=!a}function qf(a,b,c,d){var e=window.ShadyDOM;if(a.shadyDomFastWalk&&e&&e.inUse){if(b.nodeType===Node.ELEMENT_NODE&&c(b),b.querySelectorAll)for(a=e.nativeMethods.querySelectorAll.call(b,"*"),b=0;b<a.length;b++)c(a[b])}else cf(b,c,d)}function rf(a,b){a.a=!0;a.b.push(b)}function sf(a,b){a.a=!0;a.c.push(b)}
function tf(a,b){a.a&&qf(a,b,function(c){return uf(a,c)})}function uf(a,b){if(a.a&&!b.__CE_patched){b.__CE_patched=!0;for(var c=0;c<a.b.length;c++)a.b[c](b);for(c=0;c<a.c.length;c++)a.c[c](b)}}function vf(a,b){var c=[];qf(a,b,function(e){return c.push(e)});for(b=0;b<c.length;b++){var d=c[b];1===d.__CE_state?a.connectedCallback(d):mf(a,d)}}function wf(a,b){var c=[];qf(a,b,function(e){return c.push(e)});for(b=0;b<c.length;b++){var d=c[b];1===d.__CE_state&&a.disconnectedCallback(d)}}
function ef(a,b,c){c=void 0===c?{}:c;var d=c.Za,e=c.upgrade||function(g){return mf(a,g)},f=[];qf(a,b,function(g){a.a&&uf(a,g);if("link"===g.localName&&"import"===g.getAttribute("rel")){var h=g.import;h instanceof Node&&(h.__CE_isImportDocument=!0,h.__CE_registry=document.__CE_registry);h&&"complete"===h.readyState?h.__CE_documentLoadHandled=!0:g.addEventListener("load",function(){var k=g.import;if(!k.__CE_documentLoadHandled){k.__CE_documentLoadHandled=!0;var l=new Set;d&&(d.forEach(function(m){return l.add(m)}),
l.delete(k));ef(a,k,{Za:l,upgrade:e})}})}else f.push(g)},d);for(b=0;b<f.length;b++)e(f[b])}
function mf(a,b){try{var c=b.ownerDocument,d=c.__CE_registry;var e=d&&(c.defaultView||c.__CE_isImportDocument)?lf(d,b.localName):void 0;if(e&&void 0===b.__CE_state){e.constructionStack.push(b);try{try{if(new e.constructorFunction!==b)throw Error("The custom element constructor did not produce the element being upgraded.");}finally{e.constructionStack.pop()}}catch(k){throw b.__CE_state=2,k;}b.__CE_state=1;b.__CE_definition=e;if(e.attributeChangedCallback&&b.hasAttributes()){var f=e.observedAttributes;
for(e=0;e<f.length;e++){var g=f[e],h=b.getAttribute(g);null!==h&&a.attributeChangedCallback(b,g,null,h,null)}}T(b)&&a.connectedCallback(b)}}catch(k){nf(k)}}of.prototype.connectedCallback=function(a){var b=a.__CE_definition;if(b.connectedCallback)try{b.connectedCallback.call(a)}catch(c){nf(c)}};of.prototype.disconnectedCallback=function(a){var b=a.__CE_definition;if(b.disconnectedCallback)try{b.disconnectedCallback.call(a)}catch(c){nf(c)}};
of.prototype.attributeChangedCallback=function(a,b,c,d,e){var f=a.__CE_definition;if(f.attributeChangedCallback&&-1<f.observedAttributes.indexOf(b))try{f.attributeChangedCallback.call(a,b,c,d,e)}catch(g){nf(g)}};
function xf(a,b,c,d){var e=b.__CE_registry;if(e&&(null===d||"http://www.w3.org/1999/xhtml"===d)&&(e=lf(e,c)))try{var f=new e.constructorFunction;if(void 0===f.__CE_state||void 0===f.__CE_definition)throw Error("Failed to construct '"+c+"': The returned value was not constructed with the HTMLElement constructor.");if("http://www.w3.org/1999/xhtml"!==f.namespaceURI)throw Error("Failed to construct '"+c+"': The constructed element's namespace must be the HTML namespace.");if(f.hasAttributes())throw Error("Failed to construct '"+
c+"': The constructed element must not have any attributes.");if(null!==f.firstChild)throw Error("Failed to construct '"+c+"': The constructed element must not have any children.");if(null!==f.parentNode)throw Error("Failed to construct '"+c+"': The constructed element must not have a parent node.");if(f.ownerDocument!==b)throw Error("Failed to construct '"+c+"': The constructed element's owner document is incorrect.");if(f.localName!==c)throw Error("Failed to construct '"+c+"': The constructed element's local name is incorrect.");
return f}catch(g){return nf(g),b=null===d?re.call(b,c):se.call(b,d,c),Object.setPrototypeOf(b,HTMLUnknownElement.prototype),b.__CE_state=2,b.__CE_definition=void 0,uf(a,b),b}b=null===d?re.call(b,c):se.call(b,d,c);uf(a,b);return b}
function nf(a){var b=a.message,c=a.sourceURL||a.fileName||"",d=a.line||a.lineNumber||0,e=a.column||a.columnNumber||0,f=void 0;void 0===ErrorEvent.prototype.initErrorEvent?f=new ErrorEvent("error",{cancelable:!0,message:b,filename:c,lineno:d,colno:e,error:a}):(f=document.createEvent("ErrorEvent"),f.initErrorEvent("error",!1,!0,b,c,d),f.preventDefault=function(){Object.defineProperty(this,"defaultPrevented",{configurable:!0,get:function(){return!0}})});void 0===f.error&&Object.defineProperty(f,"error",
{configurable:!0,enumerable:!0,get:function(){return a}});window.dispatchEvent(f);f.defaultPrevented||console.error(a)};var yf=new function(){};function zf(a){window.HTMLElement=function(){function b(){var c=this.constructor;var d=document.__CE_registry.ta.get(c);if(!d)throw Error("Failed to construct a custom element: The constructor was not registered with `customElements`.");var e=d.constructionStack;if(0===e.length)return e=re.call(document,d.localName),Object.setPrototypeOf(e,c.prototype),e.__CE_state=1,e.__CE_definition=d,uf(a,e),e;var f=e.length-1,g=e[f];if(g===yf)throw Error("Failed to construct '"+d.localName+"': This element was already constructed.");
e[f]=yf;Object.setPrototypeOf(g,c.prototype);uf(a,g);return g}b.prototype=Ue.prototype;Object.defineProperty(b.prototype,"constructor",{writable:!0,configurable:!0,enumerable:!1,value:b});return b}()};function Af(a,b,c){function d(e){return function(f){for(var g=[],h=0;h<arguments.length;++h)g[h]=arguments[h];h=[];for(var k=[],l=0;l<g.length;l++){var m=g[l];m instanceof Element&&T(m)&&k.push(m);if(m instanceof DocumentFragment)for(m=m.firstChild;m;m=m.nextSibling)h.push(m);else h.push(m)}e.apply(this,g);for(g=0;g<k.length;g++)wf(a,k[g]);if(T(this))for(g=0;g<h.length;g++)k=h[g],k instanceof Element&&vf(a,k)}}void 0!==c.prepend&&U(b,"prepend",d(c.prepend));void 0!==c.append&&U(b,"append",d(c.append))}
;function Bf(a){U(Document.prototype,"createElement",function(b){return xf(a,this,b,null)});U(Document.prototype,"importNode",function(b,c){b=te.call(this,b,!!c);this.__CE_registry?ef(a,b):tf(a,b);return b});U(Document.prototype,"createElementNS",function(b,c){return xf(a,this,c,b)});Af(a,Document.prototype,{prepend:ue,append:ve})};function Cf(a){function b(c,d){Object.defineProperty(c,"textContent",{enumerable:d.enumerable,configurable:!0,get:d.get,set:function(e){if(this.nodeType===Node.TEXT_NODE)d.set.call(this,e);else{var f=void 0;if(this.firstChild){var g=this.childNodes,h=g.length;if(0<h&&T(this)){f=Array(h);for(var k=0;k<h;k++)f[k]=g[k]}}d.set.call(this,e);if(f)for(e=0;e<f.length;e++)wf(a,f[e])}}})}U(Node.prototype,"insertBefore",function(c,d){if(c instanceof DocumentFragment){var e=af(c);c=Ae.call(this,c,d);if(T(this))for(d=
0;d<e.length;d++)vf(a,e[d]);return c}e=c instanceof Element&&T(c);d=Ae.call(this,c,d);e&&wf(a,c);T(this)&&vf(a,c);return d});U(Node.prototype,"appendChild",function(c){if(c instanceof DocumentFragment){var d=af(c);c=ze.call(this,c);if(T(this))for(var e=0;e<d.length;e++)vf(a,d[e]);return c}d=c instanceof Element&&T(c);e=ze.call(this,c);d&&wf(a,c);T(this)&&vf(a,c);return e});U(Node.prototype,"cloneNode",function(c){c=ye.call(this,!!c);this.ownerDocument.__CE_registry?ef(a,c):tf(a,c);return c});U(Node.prototype,
"removeChild",function(c){var d=c instanceof Element&&T(c),e=Be.call(this,c);d&&wf(a,c);return e});U(Node.prototype,"replaceChild",function(c,d){if(c instanceof DocumentFragment){var e=af(c);c=Ce.call(this,c,d);if(T(this))for(wf(a,d),d=0;d<e.length;d++)vf(a,e[d]);return c}e=c instanceof Element&&T(c);var f=Ce.call(this,c,d),g=T(this);g&&wf(a,d);e&&wf(a,c);g&&vf(a,c);return f});De&&De.get?b(Node.prototype,De):rf(a,function(c){b(c,{enumerable:!0,configurable:!0,get:function(){for(var d=[],e=this.firstChild;e;e=
e.nextSibling)e.nodeType!==Node.COMMENT_NODE&&d.push(e.textContent);return d.join("")},set:function(d){for(;this.firstChild;)Be.call(this,this.firstChild);null!=d&&""!==d&&ze.call(this,document.createTextNode(d))}})})};function Df(a){function b(d){return function(e){for(var f=[],g=0;g<arguments.length;++g)f[g]=arguments[g];g=[];for(var h=[],k=0;k<f.length;k++){var l=f[k];l instanceof Element&&T(l)&&h.push(l);if(l instanceof DocumentFragment)for(l=l.firstChild;l;l=l.nextSibling)g.push(l);else g.push(l)}d.apply(this,f);for(f=0;f<h.length;f++)wf(a,h[f]);if(T(this))for(f=0;f<g.length;f++)h=g[f],h instanceof Element&&vf(a,h)}}var c=Element.prototype;void 0!==Qe&&U(c,"before",b(Qe));void 0!==Re&&U(c,"after",b(Re));void 0!==
Se&&U(c,"replaceWith",function(d){for(var e=[],f=0;f<arguments.length;++f)e[f]=arguments[f];f=[];for(var g=[],h=0;h<e.length;h++){var k=e[h];k instanceof Element&&T(k)&&g.push(k);if(k instanceof DocumentFragment)for(k=k.firstChild;k;k=k.nextSibling)f.push(k);else f.push(k)}h=T(this);Se.apply(this,e);for(e=0;e<g.length;e++)wf(a,g[e]);if(h)for(wf(a,this),e=0;e<f.length;e++)g=f[e],g instanceof Element&&vf(a,g)});void 0!==Te&&U(c,"remove",function(){var d=T(this);Te.call(this);d&&wf(a,this)})};function Ef(a){function b(e,f){Object.defineProperty(e,"innerHTML",{enumerable:f.enumerable,configurable:!0,get:f.get,set:function(g){var h=this,k=void 0;T(this)&&(k=[],qf(a,this,function(q){q!==h&&k.push(q)}));f.set.call(this,g);if(k)for(var l=0;l<k.length;l++){var m=k[l];1===m.__CE_state&&a.disconnectedCallback(m)}this.ownerDocument.__CE_registry?ef(a,this):tf(a,this);return g}})}function c(e,f){U(e,"insertAdjacentElement",function(g,h){var k=T(h);g=f.call(this,g,h);k&&wf(a,h);T(g)&&vf(a,h);return g})}
function d(e,f){function g(h,k){for(var l=[];h!==k;h=h.nextSibling)l.push(h);for(k=0;k<l.length;k++)ef(a,l[k])}U(e,"insertAdjacentHTML",function(h,k){h=h.toLowerCase();if("beforebegin"===h){var l=this.previousSibling;f.call(this,h,k);g(l||this.parentNode.firstChild,this)}else if("afterbegin"===h)l=this.firstChild,f.call(this,h,k),g(this.firstChild,l);else if("beforeend"===h)l=this.lastChild,f.call(this,h,k),g(l||this.firstChild,null);else if("afterend"===h)l=this.nextSibling,f.call(this,h,k),g(this.nextSibling,
l);else throw new SyntaxError("The value provided ("+String(h)+") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");})}Ee&&U(Element.prototype,"attachShadow",function(e){e=Ee.call(this,e);if(a.a&&!e.__CE_patched){e.__CE_patched=!0;for(var f=0;f<a.b.length;f++)a.b[f](e)}return this.__CE_shadowRoot=e});Fe&&Fe.get?b(Element.prototype,Fe):Ve&&Ve.get?b(HTMLElement.prototype,Ve):sf(a,function(e){b(e,{enumerable:!0,configurable:!0,get:function(){return ye.call(this,!0).innerHTML},
set:function(f){var g="template"===this.localName,h=g?this.content:this,k=se.call(document,this.namespaceURI,this.localName);for(k.innerHTML=f;0<h.childNodes.length;)Be.call(h,h.childNodes[0]);for(f=g?k.content:k;0<f.childNodes.length;)ze.call(h,f.childNodes[0])}})});U(Element.prototype,"setAttribute",function(e,f){if(1!==this.__CE_state)return He.call(this,e,f);var g=Ge.call(this,e);He.call(this,e,f);f=Ge.call(this,e);a.attributeChangedCallback(this,e,g,f,null)});U(Element.prototype,"setAttributeNS",
function(e,f,g){if(1!==this.__CE_state)return Ke.call(this,e,f,g);var h=Je.call(this,e,f);Ke.call(this,e,f,g);g=Je.call(this,e,f);a.attributeChangedCallback(this,f,h,g,e)});U(Element.prototype,"removeAttribute",function(e){if(1!==this.__CE_state)return Ie.call(this,e);var f=Ge.call(this,e);Ie.call(this,e);null!==f&&a.attributeChangedCallback(this,e,f,null,null)});U(Element.prototype,"removeAttributeNS",function(e,f){if(1!==this.__CE_state)return Le.call(this,e,f);var g=Je.call(this,e,f);Le.call(this,
e,f);var h=Je.call(this,e,f);g!==h&&a.attributeChangedCallback(this,f,g,h,e)});We?c(HTMLElement.prototype,We):Me&&c(Element.prototype,Me);Xe?d(HTMLElement.prototype,Xe):Ne&&d(Element.prototype,Ne);Af(a,Element.prototype,{prepend:Oe,append:Pe});Df(a)};var pf=window.customElements;function Ff(){var a=new of;zf(a);Bf(a);Af(a,DocumentFragment.prototype,{prepend:we,append:xe});Cf(a);Ef(a);a=new V(a);document.__CE_registry=a;Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:a})}pf&&!pf.forcePolyfill&&"function"==typeof pf.define&&"function"==typeof pf.get||Ff();window.__CE_installPolyfill=Ff;function Gf(){this.end=this.start=0;this.rules=this.parent=this.previous=null;this.cssText=this.parsedCssText="";this.atRule=!1;this.type=0;this.parsedSelector=this.selector=this.keyframesName=""}
function Hf(a){var b=a=a.replace(If,"").replace(Jf,""),c=new Gf;c.start=0;c.end=b.length;for(var d=c,e=0,f=b.length;e<f;e++)if("{"===b[e]){d.rules||(d.rules=[]);var g=d,h=g.rules[g.rules.length-1]||null;d=new Gf;d.start=e+1;d.parent=g;d.previous=h;g.rules.push(d)}else"}"===b[e]&&(d.end=e+1,d=d.parent||c);return Kf(c,a)}
function Kf(a,b){var c=b.substring(a.start,a.end-1);a.parsedCssText=a.cssText=c.trim();a.parent&&(c=b.substring(a.previous?a.previous.end:a.parent.start,a.start-1),c=Lf(c),c=c.replace(Mf," "),c=c.substring(c.lastIndexOf(";")+1),c=a.parsedSelector=a.selector=c.trim(),a.atRule=0===c.indexOf("@"),a.atRule?0===c.indexOf("@media")?a.type=Nf:c.match(Of)&&(a.type=Pf,a.keyframesName=a.selector.split(Mf).pop()):a.type=0===c.indexOf("--")?Qf:Rf);if(c=a.rules)for(var d=0,e=c.length,f=void 0;d<e&&(f=c[d]);d++)Kf(f,
b);return a}function Lf(a){return a.replace(/\\([0-9a-f]{1,6})\s/gi,function(b,c){b=c;for(c=6-b.length;c--;)b="0"+b;return"\\"+b})}
function Sf(a,b,c){c=void 0===c?"":c;var d="";if(a.cssText||a.rules){var e=a.rules,f;if(f=e)f=e[0],f=!(f&&f.selector&&0===f.selector.indexOf("--"));if(f){f=0;for(var g=e.length,h=void 0;f<g&&(h=e[f]);f++)d=Sf(h,b,d)}else b?b=a.cssText:(b=a.cssText,b=b.replace(Tf,"").replace(Uf,""),b=b.replace(Vf,"").replace(Wf,"")),(d=b.trim())&&(d="  "+d+"\n")}d&&(a.selector&&(c+=a.selector+" {\n"),c+=d,a.selector&&(c+="}\n\n"));return c}
var Rf=1,Pf=7,Nf=4,Qf=1E3,If=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,Jf=/@import[^;]*;/gim,Tf=/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,Uf=/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,Vf=/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,Wf=/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,Of=/^@[^\s]*keyframes/,Mf=/\s+/g;var W=!(window.ShadyDOM&&window.ShadyDOM.inUse),Xf;function Yf(a){Xf=a&&a.shimcssproperties?!1:W||!(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)||!window.CSS||!CSS.supports||!CSS.supports("box-shadow","0 0 0 var(--foo)"))}var Zf;window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(Zf=window.ShadyCSS.cssBuild);var $f=!(!window.ShadyCSS||!window.ShadyCSS.disableRuntime);
window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?Xf=window.ShadyCSS.nativeCss:window.ShadyCSS?(Yf(window.ShadyCSS),window.ShadyCSS=void 0):Yf(window.WebComponents&&window.WebComponents.flags);var Y=Xf;var ag=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,bg=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,dg=/(--[\w-]+)\s*([:,;)]|$)/gi,eg=/(animation\s*:)|(animation-name\s*:)/,fg=/@media\s(.*)/,gg=/\{[^}]*\}/g;var hg=new Set;function ig(a,b){if(!a)return"";"string"===typeof a&&(a=Hf(a));b&&jg(a,b);return Sf(a,Y)}function kg(a){!a.__cssRules&&a.textContent&&(a.__cssRules=Hf(a.textContent));return a.__cssRules||null}function lg(a){return!!a.parent&&a.parent.type===Pf}function jg(a,b,c,d){if(a){var e=!1,f=a.type;if(d&&f===Nf){var g=a.selector.match(fg);g&&(window.matchMedia(g[1]).matches||(e=!0))}f===Rf?b(a):c&&f===Pf?c(a):f===Qf&&(e=!0);if((a=a.rules)&&!e)for(e=0,f=a.length,g=void 0;e<f&&(g=a[e]);e++)jg(g,b,c,d)}}
function mg(a,b,c,d){var e=document.createElement("style");b&&e.setAttribute("scope",b);e.textContent=a;ng(e,c,d);return e}var og=null;function pg(a){a=document.createComment(" Shady DOM styles for "+a+" ");var b=document.head;b.insertBefore(a,(og?og.nextSibling:null)||b.firstChild);return og=a}function ng(a,b,c){b=b||document.head;b.insertBefore(a,c&&c.nextSibling||b.firstChild);og?a.compareDocumentPosition(og)===Node.DOCUMENT_POSITION_PRECEDING&&(og=a):og=a}
function qg(a,b){for(var c=0,d=a.length;b<d;b++)if("("===a[b])c++;else if(")"===a[b]&&0===--c)return b;return-1}function rg(a,b){var c=a.indexOf("var(");if(-1===c)return b(a,"","","");var d=qg(a,c+3),e=a.substring(c+4,d);c=a.substring(0,c);a=rg(a.substring(d+1),b);d=e.indexOf(",");return-1===d?b(c,e.trim(),"",a):b(c,e.substring(0,d).trim(),e.substring(d+1).trim(),a)}function sg(a,b){W?a.setAttribute("class",b):window.ShadyDOM.nativeMethods.setAttribute.call(a,"class",b)}
var tg=window.ShadyDOM&&window.ShadyDOM.wrap||function(a){return a};function ug(a){var b=a.localName,c="";b?-1<b.indexOf("-")||(c=b,b=a.getAttribute&&a.getAttribute("is")||""):(b=a.is,c=a.extends);return{is:b,Y:c}}function vg(a){for(var b=[],c="",d=0;0<=d&&d<a.length;d++)if("("===a[d]){var e=qg(a,d);c+=a.slice(d,e+1);d=e}else","===a[d]?(b.push(c),c=""):c+=a[d];c&&b.push(c);return b}
function wg(a){if(void 0!==Zf)return Zf;if(void 0===a.__cssBuild){var b=a.getAttribute("css-build");if(b)a.__cssBuild=b;else{a:{b="template"===a.localName?a.content.firstChild:a.firstChild;if(b instanceof Comment&&(b=b.textContent.trim().split(":"),"css-build"===b[0])){b=b[1];break a}b=""}if(""!==b){var c="template"===a.localName?a.content.firstChild:a.firstChild;c.parentNode.removeChild(c)}a.__cssBuild=b}}return a.__cssBuild||""}
function xg(a){a=void 0===a?"":a;return""!==a&&Y?W?"shadow"===a:"shady"===a:!1};function yg(){}function zg(a,b){Ag(Bg,a,function(c){Cg(c,b||"")})}function Ag(a,b,c){b.nodeType===Node.ELEMENT_NODE&&c(b);var d;"template"===b.localName?d=(b.content||b._content||b).childNodes:d=b.children||b.childNodes;if(d)for(b=0;b<d.length;b++)Ag(a,d[b],c)}
function Cg(a,b,c){if(b)if(a.classList)c?(a.classList.remove("style-scope"),a.classList.remove(b)):(a.classList.add("style-scope"),a.classList.add(b));else if(a.getAttribute){var d=a.getAttribute("class");c?d&&(b=d.replace("style-scope","").replace(b,""),sg(a,b)):sg(a,(d?d+" ":"")+"style-scope "+b)}}function Dg(a,b,c){Ag(Bg,a,function(d){Cg(d,b,!0);Cg(d,c)})}function Eg(a,b){Ag(Bg,a,function(c){Cg(c,b||"",!0)})}
function Fg(a,b,c,d,e){var f=Bg;e=void 0===e?"":e;""===e&&(W||"shady"===(void 0===d?"":d)?e=ig(b,c):(a=ug(a),e=Gg(f,b,a.is,a.Y,c)+"\n\n"));return e.trim()}function Gg(a,b,c,d,e){var f=Hg(c,d);c=c?"."+c:"";return ig(b,function(g){g.c||(g.selector=g.B=Ig(a,g,a.b,c,f),g.c=!0);e&&e(g,c,f)})}function Hg(a,b){return b?"[is="+a+"]":a}
function Ig(a,b,c,d,e){var f=vg(b.selector);if(!lg(b)){b=0;for(var g=f.length,h=void 0;b<g&&(h=f[b]);b++)f[b]=c.call(a,h,d,e)}return f.filter(function(k){return!!k}).join(",")}function Jg(a){return a.replace(Kg,function(b,c,d){-1<d.indexOf("+")?d=d.replace(/\+/g,"___"):-1<d.indexOf("___")&&(d=d.replace(/___/g,"+"));return":"+c+"("+d+")"})}
function Lg(a){for(var b=[],c;c=a.match(Mg);){var d=c.index,e=qg(a,d);if(-1===e)throw Error(c.input+" selector missing ')'");c=a.slice(d,e+1);a=a.replace(c,"\ue000");b.push(c)}return{oa:a,matches:b}}function Ng(a,b){var c=a.split("\ue000");return b.reduce(function(d,e,f){return d+e+c[f+1]},c[0])}
yg.prototype.b=function(a,b,c){var d=!1;a=a.trim();var e=Kg.test(a);e&&(a=a.replace(Kg,function(h,k,l){return":"+k+"("+l.replace(/\s/g,"")+")"}),a=Jg(a));var f=Mg.test(a);if(f){var g=Lg(a);a=g.oa;g=g.matches}a=a.replace(Og,":host $1");a=a.replace(Pg,function(h,k,l){d||(h=Qg(l,k,b,c),d=d||h.stop,k=h.Ga,l=h.value);return k+l});f&&(a=Ng(a,g));e&&(a=Jg(a));return a=a.replace(Rg,function(h,k,l,m){return'[dir="'+l+'"] '+k+m+", "+k+'[dir="'+l+'"]'+m})};
function Qg(a,b,c,d){var e=a.indexOf("::slotted");0<=a.indexOf(":host")?a=Sg(a,d):0!==e&&(a=c?Tg(a,c):a);c=!1;0<=e&&(b="",c=!0);if(c){var f=!0;c&&(a=a.replace(Ug,function(g,h){return" > "+h}))}return{value:a,Ga:b,stop:f}}function Tg(a,b){a=a.split(/(\[.+?\])/);for(var c=[],d=0;d<a.length;d++)if(1===d%2)c.push(a[d]);else{var e=a[d];if(""!==e||d!==a.length-1)e=e.split(":"),e[0]+=b,c.push(e.join(":"))}return c.join("")}
function Sg(a,b){var c=a.match(Vg);return(c=c&&c[2].trim()||"")?c[0].match(Wg)?a.replace(Vg,function(d,e,f){return b+f}):c.split(Wg)[0]===b?c:"should_not_match":a.replace(":host",b)}function Xg(a){":root"===a.selector&&(a.selector="html")}yg.prototype.c=function(a){return a.match(":host")?"":a.match("::slotted")?this.b(a,":not(.style-scope)"):Tg(a.trim(),":not(.style-scope)")};ea.Object.defineProperties(yg.prototype,{a:{configurable:!0,enumerable:!0,get:function(){return"style-scope"}}});
var Kg=/:(nth[-\w]+)\(([^)]+)\)/,Pg=/(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g,Wg=/[[.:#*]/,Og=/^(::slotted)/,Vg=/(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,Ug=/(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,Rg=/(.*):dir\((?:(ltr|rtl))\)(.*)/,Mg=/:(?:matches|any|-(?:webkit|moz)-any)/,Bg=new yg;function Yg(a,b,c,d,e){this.J=a||null;this.b=b||null;this.ka=c||[];this.H=null;this.cssBuild=e||"";this.Y=d||"";this.a=this.I=this.M=null}function Zg(a){return a?a.__styleInfo:null}function $g(a,b){return a.__styleInfo=b}Yg.prototype.c=function(){return this.J};Yg.prototype._getStyleRules=Yg.prototype.c;function ah(a){var b=this.matches||this.matchesSelector||this.mozMatchesSelector||this.msMatchesSelector||this.oMatchesSelector||this.webkitMatchesSelector;return b&&b.call(this,a)}var bh=/:host\s*>\s*/,ch=navigator.userAgent.match("Trident");function dh(){}function eh(a){var b={},c=[],d=0;jg(a,function(f){fh(f);f.index=d++;f=f.A.cssText;for(var g;g=dg.exec(f);){var h=g[1];":"!==g[2]&&(b[h]=!0)}},function(f){c.push(f)});a.b=c;a=[];for(var e in b)a.push(e);return a}
function fh(a){if(!a.A){var b={},c={};gh(a,c)&&(b.L=c,a.rules=null);b.cssText=a.parsedCssText.replace(gg,"").replace(ag,"");a.A=b}}function gh(a,b){var c=a.A;if(c){if(c.L)return Object.assign(b,c.L),!0}else{c=a.parsedCssText;for(var d;a=ag.exec(c);){d=(a[2]||a[3]).trim();if("inherit"!==d||"unset"!==d)b[a[1].trim()]=d;d=!0}return d}}
function hh(a,b,c){b&&(b=0<=b.indexOf(";")?ih(a,b,c):rg(b,function(d,e,f,g){if(!e)return d+g;(e=hh(a,c[e],c))&&"initial"!==e?"apply-shim-inherit"===e&&(e="inherit"):e=hh(a,c[f]||f,c)||f;return d+(e||"")+g}));return b&&b.trim()||""}
function ih(a,b,c){b=b.split(";");for(var d=0,e,f;d<b.length;d++)if(e=b[d]){bg.lastIndex=0;if(f=bg.exec(e))e=hh(a,c[f[1]],c);else if(f=e.indexOf(":"),-1!==f){var g=e.substring(f);g=g.trim();g=hh(a,g,c)||g;e=e.substring(0,f)+g}b[d]=e&&e.lastIndexOf(";")===e.length-1?e.slice(0,-1):e||""}return b.join(";")}
function jh(a,b){var c={},d=[];jg(a,function(e){e.A||fh(e);var f=e.B||e.parsedSelector;b&&e.A.L&&f&&ah.call(b,f)&&(gh(e,c),e=e.index,f=parseInt(e/32,10),d[f]=(d[f]||0)|1<<e%32)},null,!0);return{L:c,key:d}}
function kh(a,b,c,d){b.A||fh(b);if(b.A.L){var e=ug(a);a=e.is;e=e.Y;e=a?Hg(a,e):"html";var f=b.parsedSelector;var g=!!f.match(bh)||"html"===e&&-1<f.indexOf("html");var h=0===f.indexOf(":host")&&!g;"shady"===c&&(g=f===e+" > *."+e||-1!==f.indexOf("html"),h=!g&&0===f.indexOf(e));if(g||h)c=e,h&&(b.B||(b.B=Ig(Bg,b,Bg.b,a?"."+a:"",e)),c=b.B||e),g&&"html"===e&&(c=b.B||b.u),d({oa:c,Na:h,ab:g})}}
function lh(a,b,c){var d={},e={};jg(b,function(f){kh(a,f,c,function(g){ah.call(a._element||a,g.oa)&&(g.Na?gh(f,d):gh(f,e))})},null,!0);return{Ta:e,La:d}}
function mh(a,b,c,d){var e=ug(b),f=Hg(e.is,e.Y),g=new RegExp("(?:^|[^.#[:])"+(b.extends?"\\"+f.slice(0,-1)+"\\]":f)+"($|[.:[\\s>+~])"),h=Zg(b);e=h.J;h=h.cssBuild;var k=nh(e,d);return Fg(b,e,function(l){var m="";l.A||fh(l);l.A.cssText&&(m=ih(a,l.A.cssText,c));l.cssText=m;if(!W&&!lg(l)&&l.cssText){var q=m=l.cssText;null==l.sa&&(l.sa=eg.test(m));if(l.sa)if(null==l.ca){l.ca=[];for(var H in k)q=k[H],q=q(m),m!==q&&(m=q,l.ca.push(H))}else{for(H=0;H<l.ca.length;++H)q=k[l.ca[H]],m=q(m);q=m}l.cssText=q;l.B=
l.B||l.selector;m="."+d;H=vg(l.B);q=0;for(var E=H.length,r=void 0;q<E&&(r=H[q]);q++)H[q]=r.match(g)?r.replace(f,m):m+" "+r;l.selector=H.join(",")}},h)}function nh(a,b){a=a.b;var c={};if(!W&&a)for(var d=0,e=a[d];d<a.length;e=a[++d]){var f=e,g=b;f.f=new RegExp("\\b"+f.keyframesName+"(?!\\B|-)","g");f.a=f.keyframesName+"-"+g;f.B=f.B||f.selector;f.selector=f.B.replace(f.keyframesName,f.a);c[e.keyframesName]=oh(e)}return c}function oh(a){return function(b){return b.replace(a.f,a.a)}}
function ph(a,b){var c=qh,d=kg(a);a.textContent=ig(d,function(e){var f=e.cssText=e.parsedCssText;e.A&&e.A.cssText&&(f=f.replace(Tf,"").replace(Uf,""),e.cssText=ih(c,f,b))})}ea.Object.defineProperties(dh.prototype,{a:{configurable:!0,enumerable:!0,get:function(){return"x-scope"}}});var qh=new dh;var rh={},sh=window.customElements;if(sh&&!W&&!$f){var th=sh.define;sh.define=function(a,b,c){rh[a]||(rh[a]=pg(a));th.call(sh,a,b,c)}};function uh(){this.cache={}}uh.prototype.store=function(a,b,c,d){var e=this.cache[a]||[];e.push({L:b,styleElement:c,I:d});100<e.length&&e.shift();this.cache[a]=e};function vh(){}var wh=new RegExp(Bg.a+"\\s*([^\\s]*)");function xh(a){return(a=(a.classList&&a.classList.value?a.classList.value:a.getAttribute("class")||"").match(wh))?a[1]:""}function yh(a){var b=tg(a).getRootNode();return b===a||b===a.ownerDocument?"":(a=b.host)?ug(a).is:""}
function zh(a){for(var b=0;b<a.length;b++){var c=a[b];if(c.target!==document.documentElement&&c.target!==document.head)for(var d=0;d<c.addedNodes.length;d++){var e=c.addedNodes[d];if(e.nodeType===Node.ELEMENT_NODE){var f=e.getRootNode(),g=xh(e);if(g&&f===e.ownerDocument&&("style"!==e.localName&&"template"!==e.localName||""===wg(e)))Eg(e,g);else if(f instanceof ShadowRoot)for(f=yh(e),f!==g&&Dg(e,g,f),e=window.ShadyDOM.nativeMethods.querySelectorAll.call(e,":not(."+Bg.a+")"),g=0;g<e.length;g++){f=e[g];
var h=yh(f);h&&Cg(f,h)}}}}}
if(!(W||window.ShadyDOM&&window.ShadyDOM.handlesDynamicScoping)){var Ah=new MutationObserver(zh),Bh=function(a){Ah.observe(a,{childList:!0,subtree:!0})};if(window.customElements&&!window.customElements.polyfillWrapFlushCallback)Bh(document);else{var Ch=function(){Bh(document.body)};window.HTMLImports?window.HTMLImports.whenReady(Ch):requestAnimationFrame(function(){if("loading"===document.readyState){var a=function(){Ch();document.removeEventListener("readystatechange",a)};document.addEventListener("readystatechange",
a)}else Ch()})}vh=function(){zh(Ah.takeRecords())}};var Dh={};var Eh=Promise.resolve();function Fh(a){if(a=Dh[a])a._applyShimCurrentVersion=a._applyShimCurrentVersion||0,a._applyShimValidatingVersion=a._applyShimValidatingVersion||0,a._applyShimNextVersion=(a._applyShimNextVersion||0)+1}function Gh(a){return a._applyShimCurrentVersion===a._applyShimNextVersion}function Hh(a){a._applyShimValidatingVersion=a._applyShimNextVersion;a._validating||(a._validating=!0,Eh.then(function(){a._applyShimCurrentVersion=a._applyShimNextVersion;a._validating=!1}))};var Ih={},Jh=new uh;function Z(){this.F={};this.c=document.documentElement;var a=new Gf;a.rules=[];this.f=$g(this.c,new Yg(a));this.u=!1;this.a=this.b=null}w=Z.prototype;w.flush=function(){vh()};w.Ja=function(a){return kg(a)};w.Xa=function(a){return ig(a)};w.prepareTemplate=function(a,b,c){this.prepareTemplateDom(a,b);this.prepareTemplateStyles(a,b,c)};
w.prepareTemplateStyles=function(a,b,c){if(!a._prepared&&!$f){W||rh[b]||(rh[b]=pg(b));a._prepared=!0;a.name=b;a.extends=c;Dh[b]=a;var d=wg(a),e=xg(d);c={is:b,extends:c};for(var f=[],g=a.content.querySelectorAll("style"),h=0;h<g.length;h++){var k=g[h];if(k.hasAttribute("shady-unscoped")){if(!W){var l=k.textContent;hg.has(l)||(hg.add(l),l=k.cloneNode(!0),document.head.appendChild(l));k.parentNode.removeChild(k)}}else f.push(k.textContent),k.parentNode.removeChild(k)}f=f.join("").trim()+(Ih[b]||"");
Kh(this);if(!e){if(g=!d)g=bg.test(f)||ag.test(f),bg.lastIndex=0,ag.lastIndex=0;h=Hf(f);g&&Y&&this.b&&this.b.transformRules(h,b);a._styleAst=h}g=[];Y||(g=eh(a._styleAst));if(!g.length||Y)h=W?a.content:null,b=rh[b]||null,d=Fg(c,a._styleAst,null,d,e?f:""),d=d.length?mg(d,c.is,h,b):null,a._style=d;a.a=g}};w.Ra=function(a,b){Ih[b]=a.join(" ")};w.prepareTemplateDom=function(a,b){if(!$f){var c=wg(a);W||"shady"===c||a._domPrepared||(a._domPrepared=!0,zg(a.content,b))}};
function Lh(a){var b=ug(a),c=b.is;b=b.Y;var d=rh[c]||null,e=Dh[c];if(e){c=e._styleAst;var f=e.a;e=wg(e);b=new Yg(c,d,f,b,e);$g(a,b);return b}}function Mh(a){!a.a&&window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface&&(a.a=window.ShadyCSS.CustomStyleInterface,a.a.transformCallback=function(b){a.xa(b)},a.a.validateCallback=function(){requestAnimationFrame(function(){(a.a.enqueued||a.u)&&a.flushCustomStyles()})})}
function Kh(a){if(!a.b&&window.ShadyCSS&&window.ShadyCSS.ApplyShim){a.b=window.ShadyCSS.ApplyShim;a.b.invalidCallback=Fh;var b=!0}else b=!1;Mh(a);return b}
w.flushCustomStyles=function(){if(!$f){var a=Kh(this);if(this.a){var b=this.a.processStyles();if((a||this.a.enqueued)&&!xg(this.f.cssBuild)){if(Y){if(!this.f.cssBuild)for(a=0;a<b.length;a++){var c=this.a.getStyleForCustomStyle(b[a]);if(c&&Y&&this.b){var d=kg(c);Kh(this);this.b.transformRules(d);c.textContent=ig(d)}}}else{Nh(this,b);Oh(this,this.c,this.f);for(a=0;a<b.length;a++)(c=this.a.getStyleForCustomStyle(b[a]))&&ph(c,this.f.M);this.u&&this.styleDocument()}this.a.enqueued=!1}}}};
function Nh(a,b){b=b.map(function(c){return a.a.getStyleForCustomStyle(c)}).filter(function(c){return!!c});b.sort(function(c,d){c=d.compareDocumentPosition(c);return c&Node.DOCUMENT_POSITION_FOLLOWING?1:c&Node.DOCUMENT_POSITION_PRECEDING?-1:0});a.f.J.rules=b.map(function(c){return kg(c)})}
w.styleElement=function(a,b){if($f){if(b){Zg(a)||$g(a,new Yg(null));var c=Zg(a);c.H=c.H||{};Object.assign(c.H,b);Ph(this,a,c)}}else if(c=Zg(a)||Lh(a))if(a!==this.c&&(this.u=!0),b&&(c.H=c.H||{},Object.assign(c.H,b)),Y)Ph(this,a,c);else if(this.flush(),Oh(this,a,c),c.ka&&c.ka.length){b=ug(a).is;var d;a:{if(d=Jh.cache[b])for(var e=d.length-1;0<=e;e--){var f=d[e];b:{var g=c.ka;for(var h=0;h<g.length;h++){var k=g[h];if(f.L[k]!==c.M[k]){g=!1;break b}}g=!0}if(g){d=f;break a}}d=void 0}g=d?d.styleElement:
null;e=c.I;(f=d&&d.I)||(f=this.F[b]=(this.F[b]||0)+1,f=b+"-"+f);c.I=f;f=c.I;h=qh;h=g?g.textContent||"":mh(h,a,c.M,f);k=Zg(a);var l=k.a;l&&!W&&l!==g&&(l._useCount--,0>=l._useCount&&l.parentNode&&l.parentNode.removeChild(l));W?k.a?(k.a.textContent=h,g=k.a):h&&(g=mg(h,f,a.shadowRoot,k.b)):g?g.parentNode||(ch&&-1<h.indexOf("@media")&&(g.textContent=h),ng(g,null,k.b)):h&&(g=mg(h,f,null,k.b));g&&(g._useCount=g._useCount||0,k.a!=g&&g._useCount++,k.a=g);f=g;W||(g=c.I,k=h=a.getAttribute("class")||"",e&&(k=
h.replace(new RegExp("\\s*x-scope\\s*"+e+"\\s*","g")," ")),k+=(k?" ":"")+"x-scope "+g,h!==k&&sg(a,k));d||Jh.store(b,c.M,f,c.I)}};
function Ph(a,b,c){var d=ug(b).is;if(c.H){var e=c.H,f;for(f in e)null===f?b.style.removeProperty(f):b.style.setProperty(f,e[f])}e=Dh[d];if(!(!e&&b!==a.c||e&&""!==wg(e))&&e&&e._style&&!Gh(e)){if(Gh(e)||e._applyShimValidatingVersion!==e._applyShimNextVersion)Kh(a),a.b&&a.b.transformRules(e._styleAst,d),e._style.textContent=Fg(b,c.J),Hh(e);W&&(a=b.shadowRoot)&&(a=a.querySelector("style"))&&(a.textContent=Fg(b,c.J));c.J=e._styleAst}}
function Qh(a,b){return(b=tg(b).getRootNode().host)?Zg(b)||Lh(b)?b:Qh(a,b):a.c}function Oh(a,b,c){var d=Qh(a,b),e=Zg(d),f=e.M;d===a.c||f||(Oh(a,d,e),f=e.M);a=Object.create(f||null);d=lh(b,c.J,c.cssBuild);b=jh(e.J,b).L;Object.assign(a,d.La,b,d.Ta);b=c.H;for(var g in b)if((e=b[g])||0===e)a[g]=e;g=qh;b=Object.getOwnPropertyNames(a);for(e=0;e<b.length;e++)d=b[e],a[d]=hh(g,a[d],a);c.M=a}w.styleDocument=function(a){this.styleSubtree(this.c,a)};
w.styleSubtree=function(a,b){var c=tg(a),d=c.shadowRoot,e=a===this.c;(d||e)&&this.styleElement(a,b);if(a=e?c:d)for(a=Array.from(a.querySelectorAll("*")).filter(function(f){return tg(f).shadowRoot}),b=0;b<a.length;b++)this.styleSubtree(a[b])};
w.xa=function(a){var b=this,c=wg(a);c!==this.f.cssBuild&&(this.f.cssBuild=c);if(!xg(c)){var d=kg(a);jg(d,function(e){if(W)Xg(e);else{var f=Bg;e.selector=e.parsedSelector;Xg(e);e.selector=e.B=Ig(f,e,f.c,void 0,void 0)}Y&&""===c&&(Kh(b),b.b&&b.b.transformRule(e))});Y?a.textContent=ig(d):this.f.J.rules.push(d)}};w.getComputedStyleValue=function(a,b){var c;Y||(c=(Zg(a)||Zg(Qh(this,a))).M[b]);return(c=c||window.getComputedStyle(a).getPropertyValue(b))?c.trim():""};
w.Wa=function(a,b){var c=tg(a).getRootNode(),d;b?d=("string"===typeof b?b:String(b)).split(/\s/):d=[];b=c.host&&c.host.localName;if(!b&&(c=a.getAttribute("class"))){c=c.split(/\s/);for(var e=0;e<c.length;e++)if(c[e]===Bg.a){b=c[e+1];break}}b&&d.push(Bg.a,b);Y||(b=Zg(a))&&b.I&&d.push(qh.a,b.I);sg(a,d.join(" "))};w.Ea=function(a){return Zg(a)};w.Va=function(a,b){Cg(a,b)};w.Ya=function(a,b){Cg(a,b,!0)};w.Ua=function(a){return yh(a)};w.Ha=function(a){return xh(a)};Z.prototype.flush=Z.prototype.flush;
Z.prototype.prepareTemplate=Z.prototype.prepareTemplate;Z.prototype.styleElement=Z.prototype.styleElement;Z.prototype.styleDocument=Z.prototype.styleDocument;Z.prototype.styleSubtree=Z.prototype.styleSubtree;Z.prototype.getComputedStyleValue=Z.prototype.getComputedStyleValue;Z.prototype.setElementClass=Z.prototype.Wa;Z.prototype._styleInfoForNode=Z.prototype.Ea;Z.prototype.transformCustomStyleForDocument=Z.prototype.xa;Z.prototype.getStyleAst=Z.prototype.Ja;Z.prototype.styleAstToString=Z.prototype.Xa;
Z.prototype.flushCustomStyles=Z.prototype.flushCustomStyles;Z.prototype.scopeNode=Z.prototype.Va;Z.prototype.unscopeNode=Z.prototype.Ya;Z.prototype.scopeForNode=Z.prototype.Ua;Z.prototype.currentScopeForNode=Z.prototype.Ha;Z.prototype.prepareAdoptedCssText=Z.prototype.Ra;Object.defineProperties(Z.prototype,{nativeShadow:{get:function(){return W}},nativeCss:{get:function(){return Y}}});var Rh=new Z,Sh,Th;window.ShadyCSS&&(Sh=window.ShadyCSS.ApplyShim,Th=window.ShadyCSS.CustomStyleInterface);
window.ShadyCSS={ScopingShim:Rh,prepareTemplate:function(a,b,c){Rh.flushCustomStyles();Rh.prepareTemplate(a,b,c)},prepareTemplateDom:function(a,b){Rh.prepareTemplateDom(a,b)},prepareTemplateStyles:function(a,b,c){Rh.flushCustomStyles();Rh.prepareTemplateStyles(a,b,c)},styleSubtree:function(a,b){Rh.flushCustomStyles();Rh.styleSubtree(a,b)},styleElement:function(a){Rh.flushCustomStyles();Rh.styleElement(a)},styleDocument:function(a){Rh.flushCustomStyles();Rh.styleDocument(a)},flushCustomStyles:function(){Rh.flushCustomStyles()},
getComputedStyleValue:function(a,b){return Rh.getComputedStyleValue(a,b)},nativeCss:Y,nativeShadow:W,cssBuild:Zf,disableRuntime:$f};Sh&&(window.ShadyCSS.ApplyShim=Sh);Th&&(window.ShadyCSS.CustomStyleInterface=Th);(function(a){function b(r){""==r&&(f.call(this),this.i=!0);return r.toLowerCase()}function c(r){var F=r.charCodeAt(0);return 32<F&&127>F&&-1==[34,35,60,62,63,96].indexOf(F)?r:encodeURIComponent(r)}function d(r){var F=r.charCodeAt(0);return 32<F&&127>F&&-1==[34,35,60,62,96].indexOf(F)?r:encodeURIComponent(r)}function e(r,F,C){function N(la){sa.push(la)}var y=F||"scheme start",X=0,v="",ra=!1,fa=!1,sa=[];a:for(;(void 0!=r[X-1]||0==X)&&!this.i;){var n=r[X];switch(y){case "scheme start":if(n&&q.test(n))v+=
n.toLowerCase(),y="scheme";else if(F){N("Invalid scheme.");break a}else{v="";y="no scheme";continue}break;case "scheme":if(n&&H.test(n))v+=n.toLowerCase();else if(":"==n){this.h=v;v="";if(F)break a;void 0!==l[this.h]&&(this.C=!0);y="file"==this.h?"relative":this.C&&C&&C.h==this.h?"relative or authority":this.C?"authority first slash":"scheme data"}else if(F){void 0!=n&&N("Code point not allowed in scheme: "+n);break a}else{v="";X=0;y="no scheme";continue}break;case "scheme data":"?"==n?(this.o="?",
y="query"):"#"==n?(this.v="#",y="fragment"):void 0!=n&&"\t"!=n&&"\n"!=n&&"\r"!=n&&(this.ga+=c(n));break;case "no scheme":if(C&&void 0!==l[C.h]){y="relative";continue}else N("Missing scheme."),f.call(this),this.i=!0;break;case "relative or authority":if("/"==n&&"/"==r[X+1])y="authority ignore slashes";else{N("Expected /, got: "+n);y="relative";continue}break;case "relative":this.C=!0;"file"!=this.h&&(this.h=C.h);if(void 0==n){this.j=C.j;this.m=C.m;this.l=C.l.slice();this.o=C.o;this.s=C.s;this.g=C.g;
break a}else if("/"==n||"\\"==n)"\\"==n&&N("\\ is an invalid code point."),y="relative slash";else if("?"==n)this.j=C.j,this.m=C.m,this.l=C.l.slice(),this.o="?",this.s=C.s,this.g=C.g,y="query";else if("#"==n)this.j=C.j,this.m=C.m,this.l=C.l.slice(),this.o=C.o,this.v="#",this.s=C.s,this.g=C.g,y="fragment";else{y=r[X+1];var I=r[X+2];if("file"!=this.h||!q.test(n)||":"!=y&&"|"!=y||void 0!=I&&"/"!=I&&"\\"!=I&&"?"!=I&&"#"!=I)this.j=C.j,this.m=C.m,this.s=C.s,this.g=C.g,this.l=C.l.slice(),this.l.pop();y=
"relative path";continue}break;case "relative slash":if("/"==n||"\\"==n)"\\"==n&&N("\\ is an invalid code point."),y="file"==this.h?"file host":"authority ignore slashes";else{"file"!=this.h&&(this.j=C.j,this.m=C.m,this.s=C.s,this.g=C.g);y="relative path";continue}break;case "authority first slash":if("/"==n)y="authority second slash";else{N("Expected '/', got: "+n);y="authority ignore slashes";continue}break;case "authority second slash":y="authority ignore slashes";if("/"!=n){N("Expected '/', got: "+
n);continue}break;case "authority ignore slashes":if("/"!=n&&"\\"!=n){y="authority";continue}else N("Expected authority, got: "+n);break;case "authority":if("@"==n){ra&&(N("@ already seen."),v+="%40");ra=!0;for(n=0;n<v.length;n++)I=v[n],"\t"==I||"\n"==I||"\r"==I?N("Invalid whitespace in authority."):":"==I&&null===this.g?this.g="":(I=c(I),null!==this.g?this.g+=I:this.s+=I);v=""}else if(void 0==n||"/"==n||"\\"==n||"?"==n||"#"==n){X-=v.length;v="";y="host";continue}else v+=n;break;case "file host":if(void 0==
n||"/"==n||"\\"==n||"?"==n||"#"==n){2!=v.length||!q.test(v[0])||":"!=v[1]&&"|"!=v[1]?(0!=v.length&&(this.j=b.call(this,v),v=""),y="relative path start"):y="relative path";continue}else"\t"==n||"\n"==n||"\r"==n?N("Invalid whitespace in file host."):v+=n;break;case "host":case "hostname":if(":"!=n||fa)if(void 0==n||"/"==n||"\\"==n||"?"==n||"#"==n){this.j=b.call(this,v);v="";y="relative path start";if(F)break a;continue}else"\t"!=n&&"\n"!=n&&"\r"!=n?("["==n?fa=!0:"]"==n&&(fa=!1),v+=n):N("Invalid code point in host/hostname: "+
n);else if(this.j=b.call(this,v),v="",y="port","hostname"==F)break a;break;case "port":if(/[0-9]/.test(n))v+=n;else if(void 0==n||"/"==n||"\\"==n||"?"==n||"#"==n||F){""!=v&&(v=parseInt(v,10),v!=l[this.h]&&(this.m=v+""),v="");if(F)break a;y="relative path start";continue}else"\t"==n||"\n"==n||"\r"==n?N("Invalid code point in port: "+n):(f.call(this),this.i=!0);break;case "relative path start":"\\"==n&&N("'\\' not allowed in path.");y="relative path";if("/"!=n&&"\\"!=n)continue;break;case "relative path":if(void 0!=
n&&"/"!=n&&"\\"!=n&&(F||"?"!=n&&"#"!=n))"\t"!=n&&"\n"!=n&&"\r"!=n&&(v+=c(n));else{"\\"==n&&N("\\ not allowed in relative path.");if(I=m[v.toLowerCase()])v=I;".."==v?(this.l.pop(),"/"!=n&&"\\"!=n&&this.l.push("")):"."==v&&"/"!=n&&"\\"!=n?this.l.push(""):"."!=v&&("file"==this.h&&0==this.l.length&&2==v.length&&q.test(v[0])&&"|"==v[1]&&(v=v[0]+":"),this.l.push(v));v="";"?"==n?(this.o="?",y="query"):"#"==n&&(this.v="#",y="fragment")}break;case "query":F||"#"!=n?void 0!=n&&"\t"!=n&&"\n"!=n&&"\r"!=n&&(this.o+=
d(n)):(this.v="#",y="fragment");break;case "fragment":void 0!=n&&"\t"!=n&&"\n"!=n&&"\r"!=n&&(this.v+=n)}X++}}function f(){this.s=this.ga=this.h="";this.g=null;this.m=this.j="";this.l=[];this.v=this.o="";this.C=this.i=!1}function g(r,F){void 0===F||F instanceof g||(F=new g(String(F)));this.a=r;f.call(this);e.call(this,this.a.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g,""),null,F)}var h=!1;try{var k=new URL("b","http://a");k.pathname="c%20d";h="http://a/c%20d"===k.href}catch(r){}if(!h){var l=Object.create(null);
l.ftp=21;l.file=0;l.gopher=70;l.http=80;l.https=443;l.ws=80;l.wss=443;var m=Object.create(null);m["%2e"]=".";m[".%2e"]="..";m["%2e."]="..";m["%2e%2e"]="..";var q=/[a-zA-Z]/,H=/[a-zA-Z0-9\+\-\.]/;g.prototype={toString:function(){return this.href},get href(){if(this.i)return this.a;var r="";if(""!=this.s||null!=this.g)r=this.s+(null!=this.g?":"+this.g:"")+"@";return this.protocol+(this.C?"//"+r+this.host:"")+this.pathname+this.o+this.v},set href(r){f.call(this);e.call(this,r)},get protocol(){return this.h+
":"},set protocol(r){this.i||e.call(this,r+":","scheme start")},get host(){return this.i?"":this.m?this.j+":"+this.m:this.j},set host(r){!this.i&&this.C&&e.call(this,r,"host")},get hostname(){return this.j},set hostname(r){!this.i&&this.C&&e.call(this,r,"hostname")},get port(){return this.m},set port(r){!this.i&&this.C&&e.call(this,r,"port")},get pathname(){return this.i?"":this.C?"/"+this.l.join("/"):this.ga},set pathname(r){!this.i&&this.C&&(this.l=[],e.call(this,r,"relative path start"))},get search(){return this.i||
!this.o||"?"==this.o?"":this.o},set search(r){!this.i&&this.C&&(this.o="?","?"==r[0]&&(r=r.slice(1)),e.call(this,r,"query"))},get hash(){return this.i||!this.v||"#"==this.v?"":this.v},set hash(r){this.i||(r?(this.v="#","#"==r[0]&&(r=r.slice(1)),e.call(this,r,"fragment")):this.v="")},get origin(){var r;if(this.i||!this.h)return"";switch(this.h){case "data":case "file":case "javascript":case "mailto":return"null"}return(r=this.host)?this.h+"://"+r:""}};var E=a.URL;E&&(g.createObjectURL=function(r){return E.createObjectURL.apply(E,
arguments)},g.revokeObjectURL=function(r){E.revokeObjectURL(r)});a.URL=g}})(window);Object.getOwnPropertyDescriptor(Node.prototype,"baseURI")||Object.defineProperty(Node.prototype,"baseURI",{get:function(){var a=(this.ownerDocument||this).querySelector("base[href]");return a&&a.href||window.location.href},configurable:!0,enumerable:!0});var Uh=document.createElement("style");Uh.textContent="body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";var Vh=document.querySelector("head");Vh.insertBefore(Uh,Vh.firstChild);var Wh=window.customElements,Xh=!1,Yh=null;Wh.polyfillWrapFlushCallback&&Wh.polyfillWrapFlushCallback(function(a){Yh=a;Xh&&a()});function Zh(){window.HTMLTemplateElement.bootstrap&&window.HTMLTemplateElement.bootstrap(window.document);Yh&&Yh();Xh=!0;window.WebComponents.ready=!0;document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0}))}
"complete"!==document.readyState?(window.addEventListener("load",Zh),window.addEventListener("DOMContentLoaded",function(){window.removeEventListener("load",Zh);Zh()})):Zh();}).call(this);

//# sourceMappingURL=webcomponents-bundle.js.map


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/**
@license @nocompile
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
(function () {
  'use strict';

  (function(){if(void 0===window.Reflect||void 0===window.customElements||window.customElements.polyfillWrapFlushCallback)return;const a=HTMLElement;window.HTMLElement={HTMLElement:function HTMLElement(){return Reflect.construct(a,[],this.constructor)}}.HTMLElement,HTMLElement.prototype=a.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,a);})();

}());


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "<div class=project-link-container> <div class=project-link-link> <div class=project-link-link-text></div> </div> </div> ";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".w-100{width:100%}.flex{display:flex;align-items:center}.dim-text{color:rgba(228,228,228,0.62)}.danger-background{background-color:#de084b}.danger-text{color:#de084b}.primary-text{color:#46b5d0}.warning-text{color:#eca600}.result-coverage-score{min-width:2.5em;width:2.5em;height:2.5em;display:flex;align-items:center;justify-content:center;background:#000;border-radius:50%;padding:0.25em;font-size:80%;color:#fff}.result-coverage-score[evaluated=\"good\"]{background:#37afcc}.result-coverage-score[evaluated=\"ok\"]{background:#d99800}.result-coverage-score[evaluated=\"bad\"]{background:#cb0745}.result-coverage-score-text[evaluated=\"good\"]{color:#46b5d0}.result-coverage-score-text[evaluated=\"ok\"]{color:#eca600}.result-coverage-score-text[evaluated=\"bad\"]{color:#de084b}.project-link-link{padding:1em 1.25em;margin:0 -1em;display:block;box-sizing:border-box;width:calc(100% + 2em);position:relative;cursor:pointer}.project-link-link>*{position:relative}.project-link-link:before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;display:block;background:#202427;-webkit-transition:opacity 0.3s ease-in-out;transition:opacity 0.3s ease-in-out}.project-link-link.active:before,.project-link-link:hover:before{opacity:1}\n", ""]);
// Exports
exports.locals = {
	"primary": "#46b5d0",
	"warning": "#eca600",
	"danger": "#de084b",
	"base": "#202427",
	"offset": "#e4e4e4"
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "<div class=project-list-container></div> ";

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "<div class=project-buttons-container> <button-element class=\"project-buttons-run dim-background primary-color slim circle\"> <icon-element class=run-project-icon size=1.5em></icon-element> </button-element> <button-element class=\"project-buttons-edit dim-background warning-color slim circle\"> <icon-element class=edit-project-icon size=1.5em></icon-element> </button-element> </div> ";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".w-100{width:100%}.flex{display:flex;align-items:center}.dim-text{color:rgba(228,228,228,0.62)}.danger-background{background-color:#de084b}.danger-text{color:#de084b}.primary-text{color:#46b5d0}.warning-text{color:#eca600}.result-coverage-score{min-width:2.5em;width:2.5em;height:2.5em;display:flex;align-items:center;justify-content:center;background:#000;border-radius:50%;padding:0.25em;font-size:80%;color:#fff}.result-coverage-score[evaluated=\"good\"]{background:#37afcc}.result-coverage-score[evaluated=\"ok\"]{background:#d99800}.result-coverage-score[evaluated=\"bad\"]{background:#cb0745}.result-coverage-score-text[evaluated=\"good\"]{color:#46b5d0}.result-coverage-score-text[evaluated=\"ok\"]{color:#eca600}.result-coverage-score-text[evaluated=\"bad\"]{color:#de084b}.project-buttons-container{position:relative;left:-.25em;width:calc($width + $amount)}.project-buttons-container>*{margin-left:.25em;margin-right:.25em}.project-buttons-container button-element.hide{opacity:0;pointer-events:none}\n", ""]);
// Exports
exports.locals = {
	"primary": "#46b5d0",
	"warning": "#eca600",
	"danger": "#de084b",
	"base": "#202427",
	"offset": "#e4e4e4"
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "<div class=project-header-container> <div class=project-header-bar> <div class=header-right> <h2 class=project-header-text></h2> </div> <project-buttons></project-buttons> </div> </div> ";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".w-100{width:100%}.flex{display:flex;align-items:center}.dim-text{color:rgba(228,228,228,0.62)}.danger-background{background-color:#de084b}.danger-text{color:#de084b}.primary-text{color:#46b5d0}.warning-text{color:#eca600}.result-coverage-score{min-width:2.5em;width:2.5em;height:2.5em;display:flex;align-items:center;justify-content:center;background:#000;border-radius:50%;padding:0.25em;font-size:80%;color:#fff}.result-coverage-score[evaluated=\"good\"]{background:#37afcc}.result-coverage-score[evaluated=\"ok\"]{background:#d99800}.result-coverage-score[evaluated=\"bad\"]{background:#cb0745}.result-coverage-score-text[evaluated=\"good\"]{color:#46b5d0}.result-coverage-score-text[evaluated=\"ok\"]{color:#eca600}.result-coverage-score-text[evaluated=\"bad\"]{color:#de084b}:host(project-header){max-width:100%;width:100%;box-sizing:border-box;display:block}.project-header-bar{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;position:relative;left:-.75em;width:calc($width + $amount)}.project-header-bar>*{margin-left:.75em;margin-right:.75em}.project-header-text{margin:0;padding-top:0.25em}.header-right{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.run-project{margin-right:0.5em}.run-project.hide{pointer-events:none;margin-right:0;opacity:0;width:0;overflow:hidden}\n", ""]);
// Exports
exports.locals = {
	"primary": "#46b5d0",
	"warning": "#eca600",
	"danger": "#de084b",
	"base": "#202427",
	"offset": "#e4e4e4"
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "<div class=suite-content-container> <content-collapse class=toggler-hover-dim> <div class=suite-content-name-container slot=content-collapse-toggler> <div class=suite-content-name></div> <span class=suite-content-state> <span class=suite-content-skips></span>&nbsp;&middot;&nbsp;<span class=suite-content-fails></span>&nbsp;&middot;&nbsp;<span class=suite-content-passes></span> </span> </div> <div class=suite-content-tests slot=content-collapse-content></div> </content-collapse> </div> ";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".w-100{width:100%}.flex{display:flex;align-items:center}.dim-text{color:rgba(228,228,228,0.62)}.danger-background{background-color:#de084b}.danger-text{color:#de084b}.primary-text{color:#46b5d0}.warning-text{color:#eca600}.result-coverage-score{min-width:2.5em;width:2.5em;height:2.5em;display:flex;align-items:center;justify-content:center;background:#000;border-radius:50%;padding:0.25em;font-size:80%;color:#fff}.result-coverage-score[evaluated=\"good\"]{background:#37afcc}.result-coverage-score[evaluated=\"ok\"]{background:#d99800}.result-coverage-score[evaluated=\"bad\"]{background:#cb0745}.result-coverage-score-text[evaluated=\"good\"]{color:#46b5d0}.result-coverage-score-text[evaluated=\"ok\"]{color:#eca600}.result-coverage-score-text[evaluated=\"bad\"]{color:#de084b}.suite-content-name-container{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between;flex-wrap:nowrap}.suite-content-name[state=\"failed\"]{color:#de084b}.suite-content-name[state=\"skipped\"]{color:rgba(228,228,228,0.62)}.suite-content-skips{color:#e4e4e4;opacity:0.62}.suite-content-fails{color:#de084b}.suite-content-passes{color:#46b5d0}.suite-content-tests{padding-bottom:0.5em;font-size:12px}.suite-content-test-result{margin:0.25em;padding:0.5em;width:calc(100% - 0.25em);box-sizing:border-box;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between;border-radius:0.25em;font-weight:100}.suite-content-test-result .failed{color:#de084b}.suite-content-test-result .skipped{color:rgba(228,228,228,0.62)}\n", ""]);
// Exports
exports.locals = {
	"primary": "#46b5d0",
	"warning": "#eca600",
	"danger": "#de084b",
	"base": "#202427",
	"offset": "#e4e4e4"
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "<div class=suites-content-container></div> ";

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "<div class=coverage-line-container> <div class=coverage-line-count></div> <div class=\"coverage-line-number dim-text\"></div> <div class=coverage-line-content-container> <pre><code class=coverage-line-content></code></pre> </div> </div> ";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".w-100{width:100%}.flex{display:flex;align-items:center}.dim-text{color:rgba(228,228,228,0.62)}.danger-background{background-color:#de084b}.danger-text{color:#de084b}.primary-text{color:#46b5d0}.warning-text{color:#eca600}.result-coverage-score{min-width:2.5em;width:2.5em;height:2.5em;display:flex;align-items:center;justify-content:center;background:#000;border-radius:50%;padding:0.25em;font-size:80%;color:#fff}.result-coverage-score[evaluated=\"good\"]{background:#37afcc}.result-coverage-score[evaluated=\"ok\"]{background:#d99800}.result-coverage-score[evaluated=\"bad\"]{background:#cb0745}.result-coverage-score-text[evaluated=\"good\"]{color:#46b5d0}.result-coverage-score-text[evaluated=\"ok\"]{color:#eca600}.result-coverage-score-text[evaluated=\"bad\"]{color:#de084b}:host(coverage-line){display:inline-block}.coverage-line-container{display:-webkit-box;display:flex;flex-wrap:nowrap;-webkit-box-align:center;align-items:center;width:100%}.coverage-line-container>*{padding:0.25em;box-sizing:border-box}.coverage-line-container .coverage-line-count,.coverage-line-container .coverage-line-number{width:2.76em;min-width:2.76em;max-width:2.76em}.coverage-line-container .coverage-line-count{color:#46b5d0}.coverage-line-container .coverage-line-count.no-coverage{color:#eca600}.coverage-line-container .coverage-line-number{background:#262d32}.coverage-line-container .coverage-line-content-container pre{margin:0}\n", ""]);
// Exports
exports.locals = {
	"primary": "#46b5d0",
	"warning": "#eca600",
	"danger": "#de084b",
	"base": "#202427",
	"offset": "#e4e4e4"
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = "<div class=coverage-result-container> <content-collapse class=toggler-hover-dim> <div class=coverage-result-toggler slot=content-collapse-toggler></div> <div class=coverage-result-content slot=content-collapse-content></div> </content-collapse> </div> ";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".w-100{width:100%}.flex{display:flex;align-items:center}.dim-text{color:rgba(228,228,228,0.62)}.danger-background{background-color:#de084b}.danger-text{color:#de084b}.primary-text{color:#46b5d0}.warning-text{color:#eca600}.result-coverage-score{min-width:2.5em;width:2.5em;height:2.5em;display:flex;align-items:center;justify-content:center;background:#000;border-radius:50%;padding:0.25em;font-size:80%;color:#fff}.result-coverage-score[evaluated=\"good\"]{background:#37afcc}.result-coverage-score[evaluated=\"ok\"]{background:#d99800}.result-coverage-score[evaluated=\"bad\"]{background:#cb0745}.result-coverage-score-text[evaluated=\"good\"]{color:#46b5d0}.result-coverage-score-text[evaluated=\"ok\"]{color:#eca600}.result-coverage-score-text[evaluated=\"bad\"]{color:#de084b}:host(coverage-result){max-width:100%;width:100%;box-sizing:border-box;display:block}.coverage-result-container{max-width:100%;width:100%;box-sizing:border-box;display:block}.coverage-result-content{padding:1em 0.5em;max-width:100%;width:100%;box-sizing:border-box;display:-webkit-box;display:flex;overflow:auto;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}\n", ""]);
// Exports
exports.locals = {
	"primary": "#46b5d0",
	"warning": "#eca600",
	"danger": "#de084b",
	"base": "#202427",
	"offset": "#e4e4e4"
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = "<div class=coverage-results-container> <div class=coverage-results-overview> <div class=coverage-results-branches></div> <div class=coverage-results-functions></div> <div class=coverage-results-statements></div> </div> <div class=coverage-results-files></div> </div> ";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".w-100{width:100%}.flex{display:flex;align-items:center}.dim-text{color:rgba(228,228,228,0.62)}.danger-background{background-color:#de084b}.danger-text{color:#de084b}.primary-text{color:#46b5d0}.warning-text{color:#eca600}.result-coverage-score{min-width:2.5em;width:2.5em;height:2.5em;display:flex;align-items:center;justify-content:center;background:#000;border-radius:50%;padding:0.25em;font-size:80%;color:#fff}.result-coverage-score[evaluated=\"good\"]{background:#37afcc}.result-coverage-score[evaluated=\"ok\"]{background:#d99800}.result-coverage-score[evaluated=\"bad\"]{background:#cb0745}.result-coverage-score-text[evaluated=\"good\"]{color:#46b5d0}.result-coverage-score-text[evaluated=\"ok\"]{color:#eca600}.result-coverage-score-text[evaluated=\"bad\"]{color:#de084b}:host(coverage-results){max-width:100%;width:100%;box-sizing:border-box;display:block}.coverage-results-overview{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between;position:relative;left:-0.25em;padding:0.5em 0 0 1.5em}.coverage-results-overview .coverage-results-lines,.coverage-results-overview .coverage-results-branches,.coverage-results-overview .coverage-results-functions,.coverage-results-overview .coverage-results-statements{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;position:relative;left:-0.25em;margin:0 0.25em}.coverage-results-overview .coverage-results-lines>*,.coverage-results-overview .coverage-results-branches>*,.coverage-results-overview .coverage-results-functions>*,.coverage-results-overview .coverage-results-statements>*{margin:0 0.25em}.coverage-results-files coverage-result{display:block;padding:0.5em;margin:0.25em 0;border-radius:0.25em}\n", ""]);
// Exports
exports.locals = {
	"primary": "#46b5d0",
	"warning": "#eca600",
	"danger": "#de084b",
	"base": "#202427",
	"offset": "#e4e4e4"
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = "<div class=result-body-container> <content-collapse class=toggler-hover-dim> <div slot=content-collapse-toggler>Test results</div> <div slot=content-collapse-content class=\"result-body-content result-body-test-content\"></div> </content-collapse> <content-collapse class=toggler-hover-dim> <div slot=content-collapse-toggler>Coverage</div> <coverage-results slot=content-collapse-content class=\"result-body-content result-body-coverage-results\"></coverage-results> </content-collapse> <content-collapse class=toggler-hover-dim> <div slot=content-collapse-toggler>Logs</div> <div slot=content-collapse-content class=\"result-body-content result-body-logs-content\"></div> </content-collapse> </div> ";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".w-100{width:100%}.flex{display:flex;align-items:center}.dim-text{color:rgba(228,228,228,0.62)}.danger-background{background-color:#de084b}.danger-text{color:#de084b}.primary-text{color:#46b5d0}.warning-text{color:#eca600}.result-coverage-score{min-width:2.5em;width:2.5em;height:2.5em;display:flex;align-items:center;justify-content:center;background:#000;border-radius:50%;padding:0.25em;font-size:80%;color:#fff}.result-coverage-score[evaluated=\"good\"]{background:#37afcc}.result-coverage-score[evaluated=\"ok\"]{background:#d99800}.result-coverage-score[evaluated=\"bad\"]{background:#cb0745}.result-coverage-score-text[evaluated=\"good\"]{color:#46b5d0}.result-coverage-score-text[evaluated=\"ok\"]{color:#eca600}.result-coverage-score-text[evaluated=\"bad\"]{color:#de084b}:host(result-body){display:block;padding:0;position:relative;top:-0.5em}.result-body-container content-collapse{display:block;padding:0 0.5em;margin:0.25em 0}.result-body-content{padding:0em 1em 1em;position:relative}.result-body-content suites-content{margin:0.25em 0;display:block;width:100%}.result-body-content suites-content:first-of-type{margin-top:0.125em}.result-body-content suites-content:last-of-type{margin-bottom:0.5em}.result-body-logs-content{white-space:pre;overflow:auto;font-size:90%}\n", ""]);
// Exports
exports.locals = {
	"primary": "#46b5d0",
	"warning": "#eca600",
	"danger": "#de084b",
	"base": "#202427",
	"offset": "#e4e4e4"
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = "<div class=result-header-container> <div class=result-date></div> <div class=result-passes-fails></div> <div class=result-coverage-score></div> <button-element class=\"result-delete danger nomargin slim\"> <icon-element size=1.25em class=result-delete-icon></icon-element> </button-element> </div> ";

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".w-100{width:100%}.flex{display:flex;align-items:center}.dim-text{color:rgba(228,228,228,0.62)}.danger-background{background-color:#de084b}.danger-text{color:#de084b}.primary-text{color:#46b5d0}.warning-text{color:#eca600}.result-coverage-score{min-width:2.5em;width:2.5em;height:2.5em;display:flex;align-items:center;justify-content:center;background:#000;border-radius:50%;padding:0.25em;font-size:80%;color:#fff}.result-coverage-score[evaluated=\"good\"]{background:#37afcc}.result-coverage-score[evaluated=\"ok\"]{background:#d99800}.result-coverage-score[evaluated=\"bad\"]{background:#cb0745}.result-coverage-score-text[evaluated=\"good\"]{color:#46b5d0}.result-coverage-score-text[evaluated=\"ok\"]{color:#eca600}.result-coverage-score-text[evaluated=\"bad\"]{color:#de084b}.result-header-container{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between;flex-wrap:nowrap;position:relative;left:-0.5em;padding:0.5em 0;cursor:pointer}.result-header-container>*{margin:0 0.5em}.result-header-container .skipped{opacity:0.62}.result-header-container .passed{color:#46b5d0}.result-header-container .failed{color:#de084b}\n", ""]);
// Exports
exports.locals = {
	"primary": "#46b5d0",
	"warning": "#eca600",
	"danger": "#de084b",
	"base": "#202427",
	"offset": "#e4e4e4"
};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = "<div class=test-result-container> <content-collapse class=\"test-result-collapse toggler-hover-dim\"> <result-header slot=content-collapse-toggler></result-header> <result-body slot=content-collapse-content></result-body> </content-collapse> </div> ";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".w-100{width:100%}.flex{display:flex;align-items:center}.dim-text{color:rgba(228,228,228,0.62)}.danger-background{background-color:#de084b}.danger-text{color:#de084b}.primary-text{color:#46b5d0}.warning-text{color:#eca600}.result-coverage-score{min-width:2.5em;width:2.5em;height:2.5em;display:flex;align-items:center;justify-content:center;background:#000;border-radius:50%;padding:0.25em;font-size:80%;color:#fff}.result-coverage-score[evaluated=\"good\"]{background:#37afcc}.result-coverage-score[evaluated=\"ok\"]{background:#d99800}.result-coverage-score[evaluated=\"bad\"]{background:#cb0745}.result-coverage-score-text[evaluated=\"good\"]{color:#46b5d0}.result-coverage-score-text[evaluated=\"ok\"]{color:#eca600}.result-coverage-score-text[evaluated=\"bad\"]{color:#de084b}:host(test-result){max-width:100%;width:100%;box-sizing:border-box;display:block}.test-result-container{position:relative;max-width:100%;width:100%;box-sizing:border-box;display:block}\n", ""]);
// Exports
exports.locals = {
	"primary": "#46b5d0",
	"warning": "#eca600",
	"danger": "#de084b",
	"base": "#202427",
	"offset": "#e4e4e4"
};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = "<div class=project-results-container></div> ";

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ":host(project-results){max-width:100%;width:100%;box-sizing:border-box;display:block}.project-results-container{max-width:100%;width:100%;box-sizing:border-box;display:block}\n", ""]);


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = "<div class=project-settings-container> <content-transition class=project-settings-transition keepchildren=true speed=400> <div class=project-settings-empty></div> <div class=project-settings-content slot=hidden> <div class=input> <input-field label=Name class=project-settings-name></input-field> </div> <div class=input> <input-field label=Package.json type=file class=project-settings-package></input-field> </div> <div class=input> <input-field label=\"Tests path pattern\" type=text class=project-settings-tests-path></input-field> </div> <div class=input> <input-field label=\"Requires Babel?\" type=checkbox labelposition=right class=project-settings-requires-babel style=\"margin:-.75em 0 -1.25em\"></input-field> </div> <div class=input style=padding-bottom:2em> <button-element class=project-settings-submit>Save</button-element> <button-element class=\"project-settings-delete danger\">Delete</button-element> </div> </div> </content-transition> </div> ";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".w-100{width:100%}.flex{display:flex;align-items:center}.dim-text{color:rgba(228,228,228,0.62)}.danger-background{background-color:#de084b}.danger-text{color:#de084b}.primary-text{color:#46b5d0}.warning-text{color:#eca600}.result-coverage-score{min-width:2.5em;width:2.5em;height:2.5em;display:flex;align-items:center;justify-content:center;background:#000;border-radius:50%;padding:0.25em;font-size:80%;color:#fff}.result-coverage-score[evaluated=\"good\"]{background:#37afcc}.result-coverage-score[evaluated=\"ok\"]{background:#d99800}.result-coverage-score[evaluated=\"bad\"]{background:#cb0745}.result-coverage-score-text[evaluated=\"good\"]{color:#46b5d0}.result-coverage-score-text[evaluated=\"ok\"]{color:#eca600}.result-coverage-score-text[evaluated=\"bad\"]{color:#de084b}.flex input-field{width:auto;max-width:300px}.input-field-container:not(foo) .input-field-border{opacity:0.25}:host(project-settings){max-width:100%;width:100%;box-sizing:border-box;display:block}.project-settings-container.new-project .project-settings-delete{display:none}\n", ""]);
// Exports
exports.locals = {
	"primary": "#46b5d0",
	"warning": "#eca600",
	"danger": "#de084b",
	"base": "#202427",
	"offset": "#e4e4e4"
};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = "<div class=no-project-container> <content-transition class=no-project-transition keepchildren=true> <div slot=hidden></div> <div slot=hidden class=no-project-content> <h2>Equipt Test Manager</h2> <p>Create a new project or select an existing one in the left sidebar</p> </div> </content-transition> </div> ";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ":host(no-project){max-width:100%;width:100%;box-sizing:border-box;display:block}.no-project-content{padding-top:0.5em}\n", ""]);


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = " <div class=test-progress-container> <div class=test-progress-inner> <div class=test-progress-header></div> <div class=test-progress-messages></div> </div> <button-element class=\"test-progress-cancel-btn nomargin\">Cancel</button-element> </div> ";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".w-100{width:100%}.flex{display:flex;align-items:center}.dim-text{color:rgba(228,228,228,0.62)}.danger-background{background-color:#de084b}.danger-text{color:#de084b}.primary-text{color:#46b5d0}.warning-text{color:#eca600}.result-coverage-score{min-width:2.5em;width:2.5em;height:2.5em;display:flex;align-items:center;justify-content:center;background:#000;border-radius:50%;padding:0.25em;font-size:80%;color:#fff}.result-coverage-score[evaluated=\"good\"]{background:#37afcc}.result-coverage-score[evaluated=\"ok\"]{background:#d99800}.result-coverage-score[evaluated=\"bad\"]{background:#cb0745}.result-coverage-score-text[evaluated=\"good\"]{color:#46b5d0}.result-coverage-score-text[evaluated=\"ok\"]{color:#eca600}.result-coverage-score-text[evaluated=\"bad\"]{color:#de084b}.test-progress-container{position:fixed;top:0;left:0;width:100%;height:100%;box-sizing:border-box;pointer-events:none;background:rgba(0,0,0,0.8);overflow:hidden;-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);opacity:0;display:-webkit-box;display:flex;-webkit-transition:opacity 0.2s;transition:opacity 0.2s}.test-progress-container.show{pointer-events:all;opacity:1}.test-progress-inner{-webkit-box-flex:1;flex-grow:1;padding:0 4vw;box-sizing:border-box;overflow:auto;font-weight:100;line-height:150%;white-space:pre-line;width:100%;height:100%;font-size:12px;direction:rtl}.test-progress-header{margin:4vh 0;font-size:200%;line-height:150%;text-align:left;direction:ltr}.test-progress-messages{margin:4vh 0;text-align:left;direction:ltr}.test-progress-content-entry:empty{display:none}.test-progress-content-entry{margin:1em 0;text-shadow:0 0 1em #000, 0 0.125em 0.5em #000}.test-progress-cancel-btn{padding:4vh 4vw;box-sizing:border-box}\n", ""]);
// Exports
exports.locals = {
	"primary": "#46b5d0",
	"warning": "#eca600",
	"danger": "#de084b",
	"base": "#202427",
	"offset": "#e4e4e4"
};

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = "<div class=app-content-container> <div id=home-container> <div id=home-sidebar> <button-element id=new-project-btn class=w-100>New project</button-element> <project-list></project-list> </div> <div id=home-main> <no-project></no-project> <project-header></project-header> <project-settings></project-settings> <project-results></project-results> </div> </div> <test-progress></test-progress> <overlay-message id=app-messages></overlay-message> <spinner-element id=app-spinner page=true scrim=true type=circle></spinner-element> </div> ";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".w-100{width:100%}.flex{display:flex;align-items:center}.dim-text{color:rgba(228,228,228,0.62)}.danger-background{background-color:#de084b}.danger-text{color:#de084b}.primary-text{color:#46b5d0}.warning-text{color:#eca600}.result-coverage-score{min-width:2.5em;width:2.5em;height:2.5em;display:flex;align-items:center;justify-content:center;background:#000;border-radius:50%;padding:0.25em;font-size:80%;color:#fff}.result-coverage-score[evaluated=\"good\"]{background:#37afcc}.result-coverage-score[evaluated=\"ok\"]{background:#d99800}.result-coverage-score[evaluated=\"bad\"]{background:#cb0745}.result-coverage-score-text[evaluated=\"good\"]{color:#46b5d0}.result-coverage-score-text[evaluated=\"ok\"]{color:#eca600}.result-coverage-score-text[evaluated=\"bad\"]{color:#de084b}:host(app-content){width:100%;height:100%;display:block;overflow:hidden}.app-content-container{width:100%;height:100%;display:block;overflow:hidden}#home-container{display:-webkit-box;display:flex;width:100%;height:100%;overflow:hidden}#home-sidebar{min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content;background:#262d32;color:#fff;padding:1em;box-sizing:border-box;height:100%;max-height:100vh;overflow:auto}#home-main{-webkit-box-flex:1;flex-grow:1;padding:1em 2em;box-sizing:border-box;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;overflow:auto}#chromebar{position:fixed;top:0;left:0;width:100%;height:22px;background:#1b1f21;-webkit-app-region:drag;-webkit-user-select:none;cursor:-webkit-grab;cursor:grab}project-results{display:block;margin-top:1em}\n", ""]);
// Exports
exports.locals = {
	"primary": "#46b5d0",
	"warning": "#eca600",
	"danger": "#de084b",
	"base": "#202427",
	"offset": "#e4e4e4"
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".w-100{width:100%}.flex{display:flex;align-items:center}.dim-text{color:rgba(228,228,228,0.62)}.danger-background{background-color:#de084b}.danger-text{color:#de084b}.primary-text{color:#46b5d0}.warning-text{color:#eca600}.result-coverage-score{min-width:2.5em;width:2.5em;height:2.5em;display:flex;align-items:center;justify-content:center;background:#000;border-radius:50%;padding:0.25em;font-size:80%;color:#fff}.result-coverage-score[evaluated=\"good\"]{background:#37afcc}.result-coverage-score[evaluated=\"ok\"]{background:#d99800}.result-coverage-score[evaluated=\"bad\"]{background:#cb0745}.result-coverage-score-text[evaluated=\"good\"]{color:#46b5d0}.result-coverage-score-text[evaluated=\"ok\"]{color:#eca600}.result-coverage-score-text[evaluated=\"bad\"]{color:#de084b}html{height:100%}body{font-family:sans-serif;font-size:14px;color:#e4e4e4;margin:0px 0px 0px 0px;padding:0em;box-sizing:border-box;min-height:100%;height:100%;background:#202427}*{box-sizing:border-box}#app{width:100%;height:100%;position:relative;overflow:hidden}input{box-shadow:0px 0px 0px 1px rgba(0,0,0,0.11);width:100%;max-width:300px;margin:0.5em 0 1em}input[type=\"file\"]{cursor:pointer}input,button{-webkit-appearance:none;-moz-appearance:none;appearance:none;font-size:1em;line-height:1.5;font-family:inherit;box-sizing:border-box;border-radius:.175em;outline:none !important;border:none !important;background:#fff;padding:.5em 1em;position:relative}button{background:#46a8d0;color:#fff;text-align:center;white-space:nowrap;position:relative;cursor:pointer;text-transform:uppercase}button:after,button:before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;box-shadow:0px 0.25em 0.25em -0.25em rgba(0,0,0,0.42),0px 0.75em 1.25em -0.75em rgba(0,0,0,0.36),0px 0em 2em 0em rgba(0,0,0,0.075);opacity:0;display:block;border-radius:.175em;-webkit-transition:opacity 0.3s ease-in-out;transition:opacity 0.3s ease-in-out}button:before{opacity:0.85;color:#388bab;box-shadow:0 0 0 1px}button:hover:after{opacity:1}button.on-dark:after{box-shadow:0px 0.25em 0.25em -0.25em rgba(0,0,0,0.75),0px 0.75em 1.25em -0.75em rgba(0,0,0,0.65),0px 0em 2em 0em rgba(0,0,0,0.25)}button.on-dark:before{opacity:1;color:#1e4a5a}label{display:block;margin:1em 0 0.25em}a{color:inherit;text-decoration:none !important;cursor:pointer}\n", ""]);
// Exports
exports.locals = {
	"primary": "#46b5d0",
	"warning": "#eca600",
	"danger": "#de084b",
	"base": "#202427",
	"offset": "#e4e4e4"
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".w-100{width:100%}.flex{display:flex;align-items:center}.dim-text{color:rgba(228,228,228,0.62)}.danger-background{background-color:#de084b}.danger-text{color:#de084b}.primary-text{color:#46b5d0}.warning-text{color:#eca600}.result-coverage-score{min-width:2.5em;width:2.5em;height:2.5em;display:flex;align-items:center;justify-content:center;background:#000;border-radius:50%;padding:0.25em;font-size:80%;color:#fff}.result-coverage-score[evaluated=\"good\"]{background:#37afcc}.result-coverage-score[evaluated=\"ok\"]{background:#d99800}.result-coverage-score[evaluated=\"bad\"]{background:#cb0745}.result-coverage-score-text[evaluated=\"good\"]{color:#46b5d0}.result-coverage-score-text[evaluated=\"ok\"]{color:#eca600}.result-coverage-score-text[evaluated=\"bad\"]{color:#de084b}.button-element:not(foo) button{background:#46b5d0;color:#fff;border-radius:4px;box-shadow:none;text-transform:uppercase}.button-element:not(foo) button:hover{background:#66cbe3;color:#fff;box-shadow:none}.button-element:not(foo).dim-background button{background:rgba(228,228,228,0.12)}.button-element:not(foo).dim-background button:hover{background:rgba(228,228,228,0.38)}.button-element:not(foo).primary-color button{color:#46b5d0}.button-element:not(foo).primary-color button:hover{color:#46b5d0}.button-element:not(foo).warning button{background:#eca600}.button-element:not(foo).warning button:hover{background:#eba600}.button-element:not(foo).warning-color button{color:#eba600}.button-element:not(foo).warning-color button:hover{color:#eca600}.button-element:not(foo).danger button{background:#de084b}.button-element:not(foo).danger button:hover{background:#de084b}.button-element:not(foo).slim button{padding:0.5em}.button-element:not(foo).circle{border-radius:50%}.button-element:not(foo).circle button{border-radius:50%}.button-element:not(foo).w-100 button{width:100%}button-element.circle{border-radius:50%}\n", ""]);
// Exports
exports.locals = {
	"primary": "#46b5d0",
	"warning": "#eca600",
	"danger": "#de084b",
	"base": "#202427",
	"offset": "#e4e4e4"
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".flex input-field{width:auto;max-width:300px}.input-field-container:not(foo) .input-field-border{opacity:0.25}\n", ""]);


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".w-100{width:100%}.flex{display:flex;align-items:center}.dim-text{color:rgba(228,228,228,0.62)}.danger-background{background-color:#de084b}.danger-text{color:#de084b}.primary-text{color:#46b5d0}.warning-text{color:#eca600}.result-coverage-score{min-width:2.5em;width:2.5em;height:2.5em;display:flex;align-items:center;justify-content:center;background:#000;border-radius:50%;padding:0.25em;font-size:80%;color:#fff}.result-coverage-score[evaluated=\"good\"]{background:#37afcc}.result-coverage-score[evaluated=\"ok\"]{background:#d99800}.result-coverage-score[evaluated=\"bad\"]{background:#cb0745}.result-coverage-score-text[evaluated=\"good\"]{color:#46b5d0}.result-coverage-score-text[evaluated=\"ok\"]{color:#eca600}.result-coverage-score-text[evaluated=\"bad\"]{color:#de084b}:host(progress-bar){color:rgba(255,255,255,0.7)}.danger{color:#de084b}\n", ""]);
// Exports
exports.locals = {
	"primary": "#46b5d0",
	"warning": "#eca600",
	"danger": "#de084b",
	"base": "#202427",
	"offset": "#e4e4e4"
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".w-100{width:100%}.flex{display:flex;align-items:center}.dim-text{color:rgba(228,228,228,0.62)}.danger-background{background-color:#de084b}.danger-text{color:#de084b}.primary-text{color:#46b5d0}.warning-text{color:#eca600}.result-coverage-score{min-width:2.5em;width:2.5em;height:2.5em;display:flex;align-items:center;justify-content:center;background:#000;border-radius:50%;padding:0.25em;font-size:80%;color:#fff}.result-coverage-score[evaluated=\"good\"]{background:#37afcc}.result-coverage-score[evaluated=\"ok\"]{background:#d99800}.result-coverage-score[evaluated=\"bad\"]{background:#cb0745}.result-coverage-score-text[evaluated=\"good\"]{color:#46b5d0}.result-coverage-score-text[evaluated=\"ok\"]{color:#eca600}.result-coverage-score-text[evaluated=\"bad\"]{color:#de084b}.content-collapse-container.toggler-hover-dim .content-collapse-toggler{border-radius:0.25em;background-color:transparent;padding:0.5em;-webkit-transition:background-color 0.33s ease-in-out;transition:background-color 0.33s ease-in-out}.content-collapse-container.toggler-hover-dim .content-collapse-toggler.hovering{background-color:#262d32}\n", ""]);
// Exports
exports.locals = {
	"primary": "#46b5d0",
	"warning": "#eca600",
	"danger": "#de084b",
	"base": "#202427",
	"offset": "#e4e4e4"
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".w-100{width:100%}.flex{display:flex;align-items:center}.dim-text{color:rgba(228,228,228,0.62)}.danger-background{background-color:#de084b}.danger-text{color:#de084b}.primary-text{color:#46b5d0}.warning-text{color:#eca600}.result-coverage-score{min-width:2.5em;width:2.5em;height:2.5em;display:flex;align-items:center;justify-content:center;background:#000;border-radius:50%;padding:0.25em;font-size:80%;color:#fff}.result-coverage-score[evaluated=\"good\"]{background:#37afcc}.result-coverage-score[evaluated=\"ok\"]{background:#d99800}.result-coverage-score[evaluated=\"bad\"]{background:#cb0745}.result-coverage-score-text[evaluated=\"good\"]{color:#46b5d0}.result-coverage-score-text[evaluated=\"ok\"]{color:#eca600}.result-coverage-score-text[evaluated=\"bad\"]{color:#de084b}.spinner-element-container:not(.meh) .spinner-element-scrim{background:rgba(38,45,50,0.62)}.spinner-element-container:not(.meh) .spinner-element-inner{color:#eca600}\n", ""]);
// Exports
exports.locals = {
	"primary": "#46b5d0",
	"warning": "#eca600",
	"danger": "#de084b",
	"base": "#202427",
	"offset": "#e4e4e4"
};

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js
var webcomponents_bundle = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js
var custom_elements_es5_adapter = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/builtjs/dist/built.js
var built = __webpack_require__(0);

// EXTERNAL MODULE: external "electron"
var external_electron_ = __webpack_require__(2);

// CONCATENATED MODULE: ./src/client/services/server.js

var Server = {
  send: function send(name, data) {
    return external_electron_["ipcRenderer"].sendSync(name, data);
  },
  sendAsync: function sendAsync(name, data) {
    return external_electron_["ipcRenderer"].send(name, data);
  },
  subscriptions: {},
  subscribe: function subscribe(event, cb) {
    if (!Server.subscriptions[event]) {
      Server.subscriptions[event] = [];
    }

    Server.subscriptions[event].push(cb);
  },
  trigger: function trigger(event, data) {
    if (!Server.subscriptions[event]) {
      return;
    }

    Server.subscriptions[event].forEach(function (cb) {
      return cb(data);
    });
  }
};
external_electron_["ipcRenderer"].on("appError", function (_event, data) {
  return Server.trigger("appError", data);
});
external_electron_["ipcRenderer"].on("projectsUpdate", function (_event, data) {
  return Server.trigger("projectsUpdate", data);
});
external_electron_["ipcRenderer"].on("projectUpdate", function (_event, data) {
  return Server.trigger("projectUpdate", data);
});
external_electron_["ipcRenderer"].on("runnerUpdate", function (_event, data) {
  return Server.trigger("runnerUpdate", data);
});
external_electron_["ipcRenderer"].on("runningTests", function (_event, data) {
  return Server.trigger("runningTests", data);
});
external_electron_["ipcRenderer"].on("testResults", function (_event, data) {
  return Server.trigger("testResults", data);
});
/* harmony default export */ var server = (Server);
// CONCATENATED MODULE: ./src/client/services/projects.js


var Projects = {
  projects$: Object(built["Observer"])({}),
  project$: Object(built["Observer"])({}),
  editing$: Object(built["Observer"])(false),
  loading$: Object(built["Observer"])(false),
  getProjects: function getProjects() {
    Projects.loading = true;
    server.send("getProjects");
  },
  open: function open(key) {
    Projects.loading = true;
    Projects.editing = false;
    server.send("openProject", key); // if not current project

    if (Projects.projects[key] && Projects.project.id !== key) {
      Projects.project$.next({
        id: Projects.projects[key].id
      });
    }

    if (Projects.lastOpenedProject !== key) {
      Projects.lastOpenedProject = key;
    }
  },
  newProject: function newProject() {
    if (Projects.isNew) {
      return;
    }

    Projects.project$.next({
      id: Object(built["ID"])(),
      name: "",
      packagePath: "",
      testsPath: "",
      requiresBabel: true
    });
    Projects.editing = true;
  },
  "delete": function _delete(project) {
    Projects.loading = true;
    Projects.editing = false;
    server.send("deleteProject", project);
  },
  save: function save(project) {
    Projects.loading = true;
    Projects.editing = false;
    server.send("updateProject", project);
    Projects.open(project.id);
  },
  run: function run(project) {
    server.sendAsync("runProject", project);
  },
  storage: {
    lastOpenedProject: {
      clearInvalids: function clearInvalids() {
        var projectHistory = Projects.storage.lastOpenedProject.history();
        var projectIds = Object.keys(Projects.projects);
        var i = projectHistory.length;

        if (projectIds.length === 0) {
          return projectHistory;
        }

        while (i) {
          i = i - 1;

          if (projectIds.indexOf(projectHistory[i]) === -1) {
            projectHistory.pop();
          }
        }

        localStorage.setItem(Projects.storage.lastOpenedProject.storageKey, JSON.stringify(projectHistory));
        return projectHistory;
      },
      history: function history() {
        return Object(built["Pipe"])(built["FromJSON"], Object(built["IfInvalid"])([]))(localStorage.getItem(Projects.storage.lastOpenedProject.storageKey) || []).value;
      },
      storageKey: "openedProjectHistory"
    }
  }
};
Object.defineProperties(Projects, {
  projects: {
    get: function get() {
      return Projects.projects$.value || {};
    },
    set: function set(value) {
      if (Object(built["Equals"])(value, Projects.projects$.value)) {
        return;
      }

      Projects.projects$.next(value);
    }
  },
  project: {
    get: function get() {
      return Projects.project$.value || {};
    },
    set: function set(value) {
      if (Object(built["Equals"])(value, Projects.project$.value)) {
        return;
      }

      Projects.project$.next(value);
    }
  },
  isNew: {
    get: function get() {
      return Projects.project$.value.id && Object.keys(Projects.projects$.value).indexOf(Projects.project$.value.id) === -1;
    }
  },
  editing: {
    get: function get() {
      return Projects.editing$.value;
    },
    set: function set(value) {
      Projects.editing$.next(value);
    }
  },
  loading: {
    get: function get() {
      return Projects.editing$.value;
    },
    set: function set(value) {
      if (Projects.loading$.value === value) {
        return;
      }

      Projects.loading$.next(value);
    }
  },
  lastOpenedProject: {
    get: function get() {
      var projectHistory = Projects.storage.lastOpenedProject.clearInvalids();
      return projectHistory[projectHistory.length - 1];
    },
    set: function set(id) {
      var projectHistory = Projects.storage.lastOpenedProject.clearInvalids();
      projectHistory.push(id);
      localStorage.setItem(Projects.storage.lastOpenedProject.storageKey, JSON.stringify(projectHistory.slice(-10)));
    }
  }
});

var projects_projectsUpdate = function projectsUpdate(data) {
  Projects.projects = data;
  var currentProjectId = Object(built["Get"])(Projects, "project.id");
  var lastOpenedProject = Projects.lastOpenedProject;

  if (currentProjectId || lastOpenedProject) {
    server.send("openProject", currentProjectId || lastOpenedProject);
  } else {
    Projects.loading = false;
  }
};

var projectUpdate = function projectUpdate(data) {
  Projects.project = data;
  Projects.loading = false;
};

window.Projects = Projects;
server.subscribe("testResults", function () {
  return Projects.open(Projects.project.id);
});
server.subscribe("appError", function () {
  return Projects.loading = false;
});
server.subscribe("projectsUpdate", projects_projectsUpdate);
server.subscribe("projectUpdate", projectUpdate);
/* harmony default export */ var services_projects = (Projects);
// CONCATENATED MODULE: ./src/client/views/project-link/index.js



var setLinkText = function setLinkText(el, project) {
  if (!el || !project) {
    return;
  }

  el.textContent = project.name;
};

var project_link_setLink = function setLink(el, project) {
  if (!el || !project) {
    return;
  }

  if (el.eventSubscriptions) {
    el.eventSubscriptions.click();
  }

  el.eventSubscriptions = {
    click: Object(built["ObserveEvent"])(el, "click").subscribe(function () {
      return services_projects.open(project.id);
    })
  };
};

var componentName = "project-link";
var componentRoot = ".".concat(componentName, "-container");

var template = __webpack_require__(6);

var style = __webpack_require__(7).toString();

var project_link_elements = {
  link: {
    selector: ".".concat(componentName, "-link"),
    onChange: function onChange(el, host) {
      project_link_setLink(el, host.project);
    }
  },
  linkText: {
    selector: ".".concat(componentName, "-link-text"),
    onChange: function onChange(el, host) {
      setLinkText(el, host.project);
    }
  }
};
var properties = {
  project: {
    format: function format(val) {
      return val;
    },
    onChange: function onChange(val, host) {
      project_link_setLink(host.elements.link, val);
      setLinkText(host.elements.linkText, val);
    }
  }
};
var ProjectLink = Object(built["WCConstructor"])({
  componentName: componentName,
  componentRoot: componentRoot,
  template: template,
  style: style,
  elements: project_link_elements,
  properties: properties,
  observedAttributes: Object.keys(properties),
  onConnected: function onConnected(host) {
    host.subscriptions = {
      projects: services_projects.project$.subscribe(function (project) {
        if (!host.project) {
          return;
        }

        var isActive = project.id === host.project.id;
        host.elements.link.classList[isActive ? "add" : "remove"]("active");
      })
    };
  },
  onDisconnected: function onDisconnected(host) {
    if (host.subscriptions.projects) {
      host.subscriptions.projects();
    }
  }
});
Object(built["WCDefine"])(componentName, ProjectLink);
/* harmony default export */ var project_link = (ProjectLink);
// CONCATENATED MODULE: ./src/client/views/project-list/index.js




var project_list_populate = function populate(root, projects) {
  root.innerHTML = "";
  var keys = Object.keys(projects);
  keys.sort(function (a, b) {
    var aName = projects[a].name.toLowerCase();
    var bName = projects[b].name.toLowerCase();
    return aName < bName ? -1 : aName > bName ? 1 : 0;
  });
  keys.forEach(function (key) {
    return root.appendChild(Object(built["CreateElement"])({
      tagName: "project-link",
      project: projects[key]
    }));
  });
};

var project_list_componentName = "project-list";
var project_list_componentRoot = ".".concat(project_list_componentName, "-container");

var project_list_template = __webpack_require__(8);

var project_list_elements = {
  root: {
    selector: project_list_componentRoot
  }
};
var ProjectList = Object(built["WCConstructor"])({
  componentName: project_list_componentName,
  componentRoot: project_list_componentRoot,
  template: project_list_template,
  elements: project_list_elements,
  onDisconnected: built["ObserverUnsubscribe"],
  onConnected: function onConnected(host) {
    host.subscriptions = {
      projects: services_projects.projects$.subscribe(function (projects) {
        return project_list_populate(host.elements.root, projects);
      })
    };
    services_projects.getProjects();
  }
});
Object(built["WCDefine"])(project_list_componentName, ProjectList);
/* harmony default export */ var project_list = (ProjectList);
// CONCATENATED MODULE: ./src/client/views/project-buttons/index.js


var project_buttons_componentName = "project-buttons";
var project_buttons_componentRoot = ".".concat(project_buttons_componentName, "-container");

var project_buttons_template = __webpack_require__(9);

var project_buttons_style = __webpack_require__(10).toString();

var project_buttons_elements = {
  "delete": {
    selector: ".".concat(project_buttons_componentName, "-delete")
  },
  edit: {
    selector: ".".concat(project_buttons_componentName, "-edit"),
    onChange: function onChange(el) {
      el.eventSubscriptions = {
        click: Object(built["ObserveEvent"])(el, "click").subscribe(function () {
          return services_projects.editing = !services_projects.editing;
        })
      };
    }
  },
  editIcon: {
    selector: ".edit-project-icon",
    onChange: function onChange(el) {
      el.svg = built["iconPencil"];
    }
  },
  runBtn: {
    selector: ".project-buttons-run",
    onChange: function onChange(el) {
      el.eventSubscriptions = {
        click: Object(built["ObserveEvent"])(el, "click").subscribe(function () {
          return services_projects.run(services_projects.project);
        })
      };
    }
  },
  runBtnIcon: {
    selector: ".run-project-icon",
    onChange: function onChange(el) {
      el.svg = built["iconPlay"];
    }
  }
};
var ProjectButtons = Object(built["WCConstructor"])({
  componentName: project_buttons_componentName,
  componentRoot: project_buttons_componentRoot,
  template: project_buttons_template,
  style: project_buttons_style,
  elements: project_buttons_elements,
  onConnected: function onConnected(host) {
    services_projects.project$.subscribe(function (project) {
      host.elements.edit.classList[!project.name ? "add" : "remove"]("hide");
      host.elements.runBtn.classList[!project.name ? "add" : "remove"]("hide");
    });
  }
});
Object(built["WCDefine"])(project_buttons_componentName, ProjectButtons);
/* harmony default export */ var project_buttons = (ProjectButtons);
// CONCATENATED MODULE: ./src/client/views/project-header/index.js



var project_header_componentName = "project-header";
var project_header_componentRoot = ".".concat(project_header_componentName, "-container");

var project_header_template = __webpack_require__(11);

var project_header_style = __webpack_require__(12).toString();

var project_header_elements = {
  root: {
    selector: project_header_componentRoot
  },
  headerText: {
    selector: ".".concat(project_header_componentName, "-text")
  }
};
var ProjectHeader = Object(built["WCConstructor"])({
  componentName: project_header_componentName,
  componentRoot: project_header_componentRoot,
  template: project_header_template,
  style: project_header_style,
  elements: project_header_elements,
  onConnected: function onConnected(host) {
    services_projects.project$.subscribe(function (project) {
      if (project.name) {
        host.elements.headerText.textContent = project.name;
      } else if (services_projects.isNew) {
        host.elements.headerText.textContent = "New project";
      } else {
        host.elements.headerText.textContent = "";
      }
    });
  }
});
Object(built["WCDefine"])(project_header_componentName, ProjectHeader);
/* harmony default export */ var project_header = (ProjectHeader);
// CONCATENATED MODULE: ./src/client/views/suite-content/index.js

var suite_content_componentName = "suite-content";
var suite_content_componentRoot = ".".concat(suite_content_componentName, "-container");

var suite_content_template = __webpack_require__(13);

var suite_content_style = __webpack_require__(14).toString();

var suite_content_elements = {
  root: {
    selector: suite_content_componentRoot
  },
  name: {
    selector: ".".concat(suite_content_componentName, "-name")
  },
  passes: {
    selector: ".".concat(suite_content_componentName, "-passes")
  },
  fails: {
    selector: ".".concat(suite_content_componentName, "-fails")
  },
  skips: {
    selector: ".".concat(suite_content_componentName, "-skips")
  },
  testsContainer: {
    selector: ".".concat(suite_content_componentName, "-tests")
  }
};
var suite_content_properties = {
  suite: {
    format: function format(val) {
      return val;
    },
    onChange: function onChange(val, host) {
      var nameElement = host.elements.name;
      var testsContainer = host.elements.testsContainer;
      testsContainer.innerHTML = "";
      nameElement.innerHTML = Object(built["Get"])(val, "name");
      var passes = 0;
      var fails = 0;
      var skips = 0;

      var errorHTML = function errorHTML(t) {
        return t.error ? "<span class=\"dim-text\">&nbsp;-&nbsp;".concat(t.error, "</span>") : "";
      };

      var nameHTML = function nameHTML(t) {
        return "<span class=\"suite-content-test-result-name ".concat(t.state, "\">&middot;&nbsp;").concat(t.name).concat(errorHTML(t), "</span>");
      };

      var durationHTML = function durationHTML(t) {
        return "<span class=\"suite-content-test-result-duration\">".concat(t.duration, "ms</span>");
      };

      Object(built["Get"])(val, "tests", []).forEach(function (t, i) {
        t.state === "failed" ? fails = fails + 1 : t.state === "passed" ? passes = passes + 1 : skips = skips + 1;
        testsContainer.appendChild(Object(built["CreateElement"])({
          tagName: "div",
          "class": "suite-content-test-result ".concat(t.state, " ").concat(i % 2 === 0 ? "odd" : "even"),
          innerHTML: "".concat(nameHTML(t)).concat(durationHTML(t))
        }));
      });
      host.elements.passes.textContent = passes;
      host.elements.fails.textContent = fails;
      host.elements.skips.textContent = skips;
      nameElement.setAttribute("state", fails ? "failed" : skips ? "skipped" : "passed");
    }
  }
};
var SuiteContent = Object(built["WCConstructor"])({
  componentName: suite_content_componentName,
  componentRoot: suite_content_componentRoot,
  template: suite_content_template,
  style: suite_content_style,
  elements: suite_content_elements,
  properties: suite_content_properties,
  observedAttributes: Object.keys(suite_content_properties)
});
Object(built["WCDefine"])(suite_content_componentName, SuiteContent);
/* harmony default export */ var suite_content = (SuiteContent);
// CONCATENATED MODULE: ./src/client/views/suites-content/index.js


var suites_content_componentName = "suites-content";
var suites_content_componentRoot = ".".concat(suites_content_componentName, "-container");

var suites_content_template = __webpack_require__(15);

var suites_content_elements = {
  root: {
    selector: suites_content_componentRoot
  }
};
var suites_content_properties = {
  suites: {
    format: function format(val) {
      return val;
    },
    onChange: function onChange(val, host) {
      var root = host.elements.root;
      root.innerHTML = "";

      if (!val || !Array.isArray(val) || !val.length) {
        return;
      }

      val.forEach(function (suite) {
        return root.appendChild(Object(built["CreateElement"])({
          tagName: "suite-content",
          suite: suite
        }));
      });
    }
  }
};
var SuitesContent = Object(built["WCConstructor"])({
  componentName: suites_content_componentName,
  componentRoot: suites_content_componentRoot,
  template: suites_content_template,
  elements: suites_content_elements,
  properties: suites_content_properties,
  observedAttributes: Object.keys(suites_content_properties)
});
Object(built["WCDefine"])(suites_content_componentName, SuitesContent);
/* harmony default export */ var suites_content = (SuitesContent);
// CONCATENATED MODULE: ./src/client/views/coverage-line/index.js

var coverage_line_componentName = "coverage-line";
var coverage_line_componentRoot = ".".concat(coverage_line_componentName, "-container");

var coverage_line_template = __webpack_require__(16);

var coverage_line_style = __webpack_require__(17).toString();

var coverage_line_elements = {
  root: {
    selector: coverage_line_componentRoot
  },
  count: {
    selector: ".".concat(coverage_line_componentName, "-count")
  },
  number: {
    selector: ".".concat(coverage_line_componentName, "-number")
  },
  content: {
    selector: ".".concat(coverage_line_componentName, "-content")
  }
};
var coverage_line_properties = {
  number: {
    format: function format(val) {
      return val;
    },
    onChange: function onChange(val, host) {
      return host.elements.number.textContent = val;
    }
  },
  count: {
    format: function format(val) {
      return val;
    },
    onChange: function onChange(val, host) {
      var count = host.elements.count;
      count.textContent = "".concat(val, "x");
      count.classList[val === "0" ? "add" : "remove"]("no-coverage");
    }
  },
  content: {
    format: function format(val) {
      return val;
    },
    onChange: function onChange(val, host) {
      return host.elements.content.textContent = val;
    }
  }
};
var CoverageLine = Object(built["WCConstructor"])({
  componentName: coverage_line_componentName,
  componentRoot: coverage_line_componentRoot,
  template: coverage_line_template,
  style: coverage_line_style,
  elements: coverage_line_elements,
  properties: coverage_line_properties,
  observedAttributes: Object.keys(coverage_line_properties)
});
Object(built["WCDefine"])(coverage_line_componentName, CoverageLine);
/* harmony default export */ var coverage_line = (CoverageLine);
// CONCATENATED MODULE: ./src/client/views/coverage-result/index.js


var coverage_result_componentName = "coverage-result";
var coverage_result_componentRoot = ".".concat(coverage_result_componentName, "-container");

var coverage_result_template = __webpack_require__(18);

var coverage_result_style = __webpack_require__(19).toString();

var coverage_result_elements = {
  root: {
    selector: coverage_result_componentRoot
  },
  toggler: {
    selector: ".".concat(coverage_result_componentName, "-toggler")
  },
  content: {
    selector: ".".concat(coverage_result_componentName, "-content")
  }
};
var coverage_result_properties = {
  coverage: {
    format: function format(val) {
      return val;
    },
    onChange: function onChange(val, host) {
      var toggler = host.elements.toggler;
      var content = host.elements.content;
      toggler.innerHTML = "<span>".concat(val.file, "&nbsp;<span class=\"result-coverage-score-text\" evaluated=\"").concat(val.scoreEvaluation, "\">").concat(val.score, "%</span></span>");
      val.lines.forEach(function (line, lineIndex) {
        return content.appendChild(Object(built["CreateElement"])({
          tagName: "coverage-line",
          number: lineIndex,
          count: line.covered,
          content: line.content
        }));
      });
    }
  }
};
var CoverageResult = Object(built["WCConstructor"])({
  componentName: coverage_result_componentName,
  componentRoot: coverage_result_componentRoot,
  template: coverage_result_template,
  style: coverage_result_style,
  elements: coverage_result_elements,
  properties: coverage_result_properties,
  observedAttributes: Object.keys(coverage_result_properties)
});
Object(built["WCDefine"])(coverage_result_componentName, CoverageResult);
/* harmony default export */ var coverage_result = (CoverageResult);
// CONCATENATED MODULE: ./src/client/views/coverage-results/index.js


var coverage_results_componentName = "coverage-results";
var coverage_results_componentRoot = ".".concat(coverage_results_componentName, "-container");

var coverage_results_template = __webpack_require__(20);

var coverage_results_style = __webpack_require__(21).toString();

var coverage_results_elements = {
  root: {
    selector: coverage_results_componentRoot
  },
  branch: {
    selector: ".".concat(coverage_results_componentName, "-branches")
  },
  "function": {
    selector: ".".concat(coverage_results_componentName, "-functions")
  },
  statement: {
    selector: ".".concat(coverage_results_componentName, "-statements")
  },
  files: {
    selector: ".".concat(coverage_results_componentName, "-files")
  }
};

var coverage_results_populate = function populate(results, elements) {
  if (!results) {
    return;
  }

  var overviewItems = ["branch", "function", "statement"];
  var files = elements.files;

  var scoreHTML = function scoreHTML(key) {
    return "<div class=\"result-coverage-score\" evaluated=\"".concat(results.coverageSummary["".concat(key, "ScoreEvaluation")], "\">").concat(results.coverageSummary["".concat(key, "Score")], "%</div>");
  };

  var doOverviewItem = function doOverviewItem(key) {
    return elements[key].innerHTML = "".concat(Object(built["ToCapitalize"])("".concat(key).concat(key === "branch" ? "es" : "s")).value, "&nbsp;").concat(scoreHTML(key));
  };

  overviewItems.forEach(doOverviewItem);

  if (!Array.isArray(results.coverage)) {
    return;
  }

  results.coverage.sort(function (a, b) {
    var aName = a.file.toLowerCase();
    var bName = b.file.toLowerCase();
    return aName < bName ? 1 : aName > bName ? -1 : 0;
  }).forEach(function (file) {
    files.appendChild(Object(built["CreateElement"])({
      tagName: "coverage-result",
      coverage: file
    }));
  });
};

var coverage_results_properties = {
  results: {
    format: function format(val) {
      return val;
    },
    onChange: function onChange(val, host) {
      return coverage_results_populate(val, host.elements);
    }
  }
};
var CoverageResults = Object(built["WCConstructor"])({
  componentName: coverage_results_componentName,
  componentRoot: coverage_results_componentRoot,
  template: coverage_results_template,
  style: coverage_results_style,
  elements: coverage_results_elements,
  properties: coverage_results_properties,
  observedAttributes: Object.keys(coverage_results_properties)
});
Object(built["WCDefine"])(coverage_results_componentName, CoverageResults);
/* harmony default export */ var coverage_results = (CoverageResults);
// CONCATENATED MODULE: ./src/client/views/result-body/index.js



var result_body_componentName = "result-body";
var result_body_componentRoot = ".".concat(result_body_componentName, "-container");

var result_body_template = __webpack_require__(22);

var result_body_style = __webpack_require__(23).toString();

var result_body_elements = {
  root: {
    selector: result_body_componentRoot
  },
  testContent: {
    selector: ".".concat(result_body_componentName, "-test-content")
  },
  coverageResults: {
    selector: ".".concat(result_body_componentName, "-coverage-results")
  },
  logResults: {
    selector: ".".concat(result_body_componentName, "-logs-content")
  }
};
var result_body_properties = {
  testdata: {
    format: function format(val) {
      return val;
    },
    onChange: function onChange(val, host) {
      var testContent = host.elements.testContent;
      var coverageResults = host.elements.coverageResults;
      var logResults = host.elements.logResults;
      coverageResults.innerHTML = testContent.innerHTML = "";

      if (!val || !val.tests.length) {
        return;
      }

      val.tests.forEach(function (test, index) {
        testContent.appendChild(Object(built["CreateElement"])({
          tagName: "suites-content",
          suites: test.suites,
          "class": index % 2 == 0 ? "even" : "odd"
        }));
      });
      coverageResults.results = val;
      logResults.innerHTML = val.logs;
    }
  }
};
var ResultBody = Object(built["WCConstructor"])({
  componentName: result_body_componentName,
  componentRoot: result_body_componentRoot,
  template: result_body_template,
  style: result_body_style,
  elements: result_body_elements,
  properties: result_body_properties,
  observedAttributes: Object.keys(result_body_properties)
});
Object(built["WCDefine"])(result_body_componentName, ResultBody);
/* harmony default export */ var result_body = (ResultBody);
// CONCATENATED MODULE: ./src/client/views/result-header/index.js



var result_header_componentName = "result-header";
var result_header_componentRoot = ".".concat(result_header_componentName, "-container");

var result_header_template = __webpack_require__(24);

var result_header_style = __webpack_require__(25).toString();

var result_header_setDate = function setDate(val, el) {
  var date = Object(built["DateToObject"])(new Date(Object(built["Get"])(val, "time"))).value;
  el.innerHTML = "<span>".concat(date.hourDouble, ":").concat(date.minutesDouble, "&nbsp;").concat(date.ampm, "&nbsp;&middot;&nbsp;").concat(date.monthNameShort, "&nbsp;").concat(date.day, "</span>");
};

var result_header_setPassFailSkip = function setPassFailSkip(val, el) {
  var passed = 0;
  var failed = 0;
  var skipped = 0;
  Object(built["Get"])(val, "tests", []).forEach(function (test) {
    passed = passed + test.state.passed;
    failed = failed + test.state.failed;
    skipped = skipped + test.state.skipped;
  });
  el.innerHTML = "<span><span class=\"skipped\">".concat(skipped, " skipped</span>&nbsp;&middot;&nbsp;<span class=\"failed\">").concat(failed, " failed</span>&nbsp;&middot;&nbsp;<span class=\"passed\">").concat(passed, " passed</span></span>");
};

var setCoverageScore = function setCoverageScore(val, el) {
  el.setAttribute("evaluated", val.coverageSummary.scoreEvaluation);
  el.innerHTML = "<span>".concat(val.coverageSummary.score, "%</span>");
};

var result_header_elements = {
  root: {
    selector: result_header_componentRoot
  },
  resultDate: {
    selector: ".result-date"
  },
  passesFails: {
    selector: ".result-passes-fails"
  },
  coverageScore: {
    selector: ".result-coverage-score"
  },
  "delete": {
    selector: ".result-delete",
    onChange: function onChange(el, host) {
      el.eventSubscriptions = {
        click: Object(built["ObserveEvent"])(el, "click").subscribe(function () {
          server.send("deleteResult", {
            result: host.testdata,
            project: services_projects.project
          });
          host.parentElement.parentElement.removeChild(host.parentElement);
        })
      };
    }
  },
  deleteIcon: {
    selector: ".result-delete-icon",
    onChange: function onChange(el) {
      el.svg = built["iconDelete"];
    }
  }
};
var result_header_properties = {
  testdata: {
    format: function format(val) {
      return val;
    },
    onChange: function onChange(val, host) {
      result_header_setDate(val, host.elements.resultDate);
      result_header_setPassFailSkip(val, host.elements.passesFails);
      setCoverageScore(val, host.elements.coverageScore);
    }
  }
};
var ResultHeader = Object(built["WCConstructor"])({
  componentName: result_header_componentName,
  componentRoot: result_header_componentRoot,
  template: result_header_template,
  style: result_header_style,
  elements: result_header_elements,
  properties: result_header_properties,
  observedAttributes: Object.keys(result_header_properties)
});
Object(built["WCDefine"])(result_header_componentName, ResultHeader);
/* harmony default export */ var result_header = (ResultHeader);
// CONCATENATED MODULE: ./src/client/views/test-result/index.js



var test_result_componentName = "test-result";
var test_result_componentRoot = ".".concat(test_result_componentName, "-container");

var test_result_template = __webpack_require__(26);

var test_result_style = __webpack_require__(27).toString();

var test_result_elements = {
  root: {
    selector: test_result_componentRoot
  },
  header: {
    selector: "result-header"
  },
  body: {
    selector: "result-body"
  }
};
var test_result_properties = {
  "class": built["ComponentClassObject"],
  testdata: {
    format: function format(val) {
      return val;
    },
    onChange: function onChange(val, host) {
      host.elements.header.testdata = val;
      host.elements.body.testdata = val;
    }
  }
};
var TestResult = Object(built["WCConstructor"])({
  componentName: test_result_componentName,
  componentRoot: test_result_componentRoot,
  template: test_result_template,
  style: test_result_style,
  elements: test_result_elements,
  properties: test_result_properties,
  observedAttributes: Object.keys(test_result_properties)
});
Object(built["WCDefine"])(test_result_componentName, TestResult);
/* harmony default export */ var test_result = (TestResult);
// CONCATENATED MODULE: ./src/client/views/project-results/index.js



var project_results_componentName = "project-results";
var project_results_componentRoot = ".".concat(project_results_componentName, "-container");

var project_results_template = __webpack_require__(28);

var project_results_style = __webpack_require__(29).toString();

var project_results_elements = {
  root: {
    selector: project_results_componentRoot
  }
};

var project_results_populate = function populate(root, results) {
  root.innerHTML = "";

  if (!results) {
    return;
  }

  results.slice().sort(function (a, b) {
    return a.time < b.time ? 1 : a.time > b.time ? -1 : 0;
  }).forEach(function (testdata, index) {
    return root.appendChild(Object(built["CreateElement"])({
      testdata: testdata,
      tagName: "test-result",
      "class": index % 2 == 0 ? "even" : "odd"
    }));
  });
};

var project_results_properties = {
  results: {
    format: function format(val) {
      return val;
    },
    onChange: function onChange(val, host) {
      return project_results_populate(host.elements.root, val);
    }
  }
};
var ProjectResults = Object(built["WCConstructor"])({
  componentName: project_results_componentName,
  componentRoot: project_results_componentRoot,
  template: project_results_template,
  style: project_results_style,
  elements: project_results_elements,
  properties: project_results_properties,
  observedAttributes: Object.keys(project_results_properties),
  onConnected: function onConnected(host) {
    host.subscriptions = {
      projects: services_projects.project$.subscribe(function (project) {
        project_results_populate(host.elements.root, project.results);
      })
    };
  }
});
Object(built["WCDefine"])(project_results_componentName, ProjectResults);
/* harmony default export */ var project_results = (ProjectResults);
// CONCATENATED MODULE: ./src/client/services/messages.js


var Messages = {
  messages$: Object(built["Observer"])([]),
  find: function find(message) {
    var messages = Messages.messages;
    var foundExisting = false;
    var index = messages.length;

    while (!foundExisting && index) {
      index = index - 1;

      if (Object(built["Equals"])(messages[index], message)) {
        foundExisting = true;
      }
    }

    if (foundExisting) {
      return {
        index: index,
        messages: messages
      };
    }

    return false;
  },
  add: function add(message) {
    var findResults = Messages.find(message);

    if (findResults) {
      return;
    }

    var newMessages = Messages.messages.slice();
    newMessages.push(message);
    Messages.messages$.next(newMessages);
    return Messages.messages;
  },
  remove: function remove(message) {
    var findResults = Messages.find(message);

    if (!findResults) {
      return;
    }

    findResults.messages.splice(findResults.index, 1);
    Messages.messages$.next(findResults.messages);
    return Messages.messages;
  },
  closeBtnString: "<button-element overlay-message-close class=\"nomargin\">Close</button-element>"
};
Object.defineProperties(Messages, {
  messages: {
    get: function get() {
      return Messages.messages$.value.slice();
    },
    set: function set(message) {
      Messages.add(message);
    }
  }
});
server.subscribe("appError", function (data) {
  Messages.add({
    header: "Error",
    body: data.error,
    button: Messages.closeBtnString
  });
});
var maxWait = 1000;

var waitForReadyState = function waitForReadyState(el) {
  maxWait = maxWait - 1;

  if (!maxWait) {
    return;
  }

  if (!el.state.shown) {
    return requestAnimationFrame(function () {
      return waitForReadyState(el);
    });
  }

  el.state.shown.subscribe(function (shown) {
    if (!shown && Messages.messages[0]) {
      Messages.remove(Messages.messages[0]);
    }
  });
};

var waitForOverlayMessage = built["ComponentStore"].watchForTag("overlay-message", function (el) {
  if (el && el.id === "app-messages") {
    waitForOverlayMessage();
    waitForReadyState(el);
  }
});
// CONCATENATED MODULE: ./src/client/views/project-settings/index.js




var project_settings_submit = function submit(host) {
  if (!services_projects.project.name || !services_projects.project.packagePath || !services_projects.project.testsPath) {
    var reasons = [];

    if (!services_projects.project.name) {
      reasons.push("Project must have a name.");
      host.elements.name.setError(reasons[reasons.length - 1]);
    }

    if (!services_projects.project.packagePath) {
      reasons.push("Project must have a path to it's package.json file.");
      host.elements.packagePath.setError(reasons[reasons.length - 1]);
    }

    if (!services_projects.project.testsPath) {
      reasons.push("Project must have a glob to find tests.");
      host.elements.testsPath.setError(reasons[reasons.length - 1]);
    }

    return Messages.add({
      header: "Invalid settings",
      body: reasons.join(" "),
      button: Messages.closeBtnString
    });
  }

  services_projects.save(services_projects.project);
};

var project_settings_componentName = "project-settings";
var project_settings_componentRoot = ".".concat(project_settings_componentName, "-container");

var project_settings_template = __webpack_require__(30);

var project_settings_style = __webpack_require__(31).toString();

var project_settings_done = function done(el, host) {
  return Object(built["ObserveEvent"])(el, "done").subscribe(function () {
    return project_settings_submit(host);
  });
};

var project_settings_value = function value(el, key) {
  return Object(built["ObserveEvent"])(el, "inputchange").subscribe(function (val) {
    return services_projects.project$.value[key] = Object(built["Get"])(val, "detail.0.path");
  });
};

var project_settings_elements = {
  root: {
    selector: project_settings_componentRoot
  },
  name: {
    selector: ".".concat(project_settings_componentName, "-name"),
    onChange: function onChange(el, host) {
      el.eventSubscriptions = {
        done: project_settings_done(el, host),
        value: Object(built["ObserveEvent"])(el, "inputchange").subscribe(function (val) {
          return services_projects.project$.value.name = val.detail;
        })
      };
    }
  },
  packagePath: {
    selector: ".".concat(project_settings_componentName, "-package"),
    onChange: function onChange(el, host) {
      el.eventSubscriptions = {
        done: project_settings_done(el, host),
        value: project_settings_value(el, "packagePath")
      };
    }
  },
  testsPath: {
    selector: ".".concat(project_settings_componentName, "-tests-path"),
    onChange: function onChange(el, host) {
      el.eventSubscriptions = {
        done: project_settings_done(el, host),
        value: Object(built["ObserveEvent"])(el, "inputchange").subscribe(function (val) {
          return services_projects.project$.value.testsPath = val.detail;
        })
      };
    }
  },
  requiresBabel: {
    selector: ".".concat(project_settings_componentName, "-requires-babel"),
    onChange: function onChange(el, host) {
      el.eventSubscriptions = {
        done: project_settings_done(el, host),
        value: Object(built["ObserveEvent"])(el, "inputchange").subscribe(function (e) {
          return services_projects.project$.value.requiresBabel = e.detail;
        })
      };
    }
  },
  submit: {
    selector: ".".concat(project_settings_componentName, "-submit"),
    onChange: function onChange(el, host) {
      el.eventSubscriptions = {
        click: Object(built["ObserveEvent"])(el, "click").subscribe(function () {
          return project_settings_submit(host);
        })
      };
    }
  },
  "delete": {
    selector: ".".concat(project_settings_componentName, "-delete"),
    onChange: function onChange(el) {
      el.eventSubscriptions = {
        click: Object(built["ObserveEvent"])(el, "click").subscribe(function () {
          services_projects["delete"](services_projects.project);
          services_projects.project$.next({});
        })
      };
    }
  },
  empty: {
    selector: ".".concat(project_settings_componentName, "-empty")
  },
  content: {
    selector: ".".concat(project_settings_componentName, "-content")
  },
  transition: {
    selector: ".".concat(project_settings_componentName, "-transition"),
    onChange: function onChange(el, host) {
      el.eventSubscriptions = {
        editing: services_projects.editing$.subscribe(function (editing) {
          if (typeof el.transitionChild !== "function") {
            return;
          }

          host.elements.root.classList[services_projects.isNew ? "add" : "remove"]("new-project");
          el.transitionChild(host.elements[editing ? "content" : "empty"]);
        }),
        project: services_projects.project$.subscribe(function (project) {
          var name = host.elements.name;

          if (!name) {
            return;
          }

          host.elements.name.value = project.name;
          host.elements.testsPath.value = project.testsPath;
          host.elements.requiresBabel.value = project.requiresBabel;
          host.elements.packagePath.value = undefined;
          host.elements.packagePath.pathvalue = project.packagePath;
        })
      };
    }
  }
};
var ProjectSettings = Object(built["WCConstructor"])({
  componentName: project_settings_componentName,
  componentRoot: project_settings_componentRoot,
  template: project_settings_template,
  style: project_settings_style,
  elements: project_settings_elements
});
Object(built["WCDefine"])(project_settings_componentName, ProjectSettings);
/* harmony default export */ var project_settings = (ProjectSettings);
// CONCATENATED MODULE: ./src/client/views/no-project/index.js


var no_project_componentName = "no-project";
var no_project_componentRoot = ".".concat(no_project_componentName, "-container");

var no_project_template = __webpack_require__(32);

var no_project_style = __webpack_require__(33).toString();

var setTransition = function setTransition(el, index, host) {
  cancelAnimationFrame(host.timer);
  clearTimeout(host.setTimer);

  if (typeof el.transitionTo !== "function") {
    return host.timer = requestAnimationFrame(function () {
      return setTransition(el, index, host);
    });
  }

  if (index) {
    host.setTimer = setTimeout(function () {
      return el.setCurrent(index);
    }, 620);
  } else {
    el.setCurrent(index);
  }
};

var no_project_elements = {
  transition: {
    selector: ".".concat(no_project_componentName, "-transition"),
    onChange: function onChange(el, host) {
      el.eventSubscriptions = {
        project: services_projects.project$.subscribe(function (project) {
          setTransition(el, project && project.id ? 0 : 1, host);
        })
      };
    }
  }
};
var NoProject = Object(built["WCConstructor"])({
  componentName: no_project_componentName,
  componentRoot: no_project_componentRoot,
  template: no_project_template,
  style: no_project_style,
  elements: no_project_elements
});
Object(built["WCDefine"])(no_project_componentName, NoProject);
/* harmony default export */ var no_project = (NoProject);
// CONCATENATED MODULE: ./src/client/views/test-progress/index.js


var test_progress_componentName = "test-progress";
var test_progress_componentRoot = ".".concat(test_progress_componentName, "-container");

var test_progress_template = __webpack_require__(34);

var test_progress_style = __webpack_require__(35).toString();

function runnerUpdate(host, message) {
  host.elements.header.textContent = "Running tests...";
  host.elements.messages.appendChild(Object(built["CreateElement"])({
    tagName: "div",
    "class": "".concat(test_progress_componentName, "-content-entry"),
    innerHTML: message.string
  }));
}

function runningTests(host, visible) {
  if (visible) {
    host.elements.header.textContent = "Preparing tests...";
    host.elements.messages.innerHTML = "";
  }

  host.elements.root.classList[visible ? "add" : "remove"]("show");
}

var test_progress_elements = {
  root: {
    selector: test_progress_componentRoot
  },
  header: {
    selector: ".".concat(test_progress_componentName, "-header")
  },
  messages: {
    selector: ".".concat(test_progress_componentName, "-messages")
  },
  cancel: {
    selector: ".".concat(test_progress_componentName, "-cancel-btn"),
    onChange: function onChange(el) {
      el.eventSubscriptions = {
        cancel: Object(built["ObserveEvent"])(el, "click").subscribe(function () {
          return server.send("cancelTests");
        })
      };
    }
  }
};
var TestProgress = Object(built["WCConstructor"])({
  componentName: test_progress_componentName,
  componentRoot: test_progress_componentRoot,
  template: test_progress_template,
  style: test_progress_style,
  elements: test_progress_elements,
  onDisconnected: function onDisconnected(host) {
    return Object(built["ObserverUnsubscribe"])(host);
  },
  onConnected: function onConnected(host) {
    host.eventSubscriptions = {
      runnerUpdate: server.subscribe("runnerUpdate", function (data) {
        return runnerUpdate(host, data);
      }),
      runningTests: server.subscribe("runningTests", function (data) {
        return runningTests(host, data);
      })
    };
  }
});
Object(built["WCDefine"])(test_progress_componentName, TestProgress);
/* harmony default export */ var test_progress = (TestProgress);
// CONCATENATED MODULE: ./src/client/views/app-content/index.js









var app_content_componentName = "app-content";
var app_content_componentRoot = ".".concat(app_content_componentName, "-container");

var app_content_template = __webpack_require__(36);

var app_content_style = __webpack_require__(37).toString();

var app_content_elements = {
  newProjectBtn: {
    selector: "#new-project-btn",
    onChange: function onChange(el) {
      el.eventSubscriptions = {
        click: Object(built["ObserveEvent"])(el, "click").subscribe(function () {
          return services_projects.newProject();
        })
      };
    }
  },
  overlayMessages: {
    selector: "#app-messages"
  },
  spinner: {
    selector: "#app-spinner"
  }
};
var AppContent = Object(built["WCConstructor"])({
  componentName: app_content_componentName,
  componentRoot: app_content_componentRoot,
  template: app_content_template,
  style: app_content_style,
  elements: app_content_elements,
  onConnected: function onConnected(host) {
    var messageSlots = ["header", "body", "button"];
    host.eventSubscriptions = {
      messages: Messages.messages$.subscribe(function (messages) {
        var message = messages[0];
        var overlayMessages = host.elements.overlayMessages;
        overlayMessages.innerHTML = "";

        if (!message) {
          return overlayMessages.shown = false;
        }

        messageSlots.forEach(function (slot) {
          overlayMessages.appendChild(Object(built["CreateElement"])({
            tagName: "div",
            innerHTML: Object(built["ValidateHtml"])(messages[0][slot], [], ["script"]).sanitized,
            slot: slot
          }));
        });
        overlayMessages.shown = true;
      }),
      loadingProjects: services_projects.loading$.subscribe(function (loading) {
        return host.elements.spinner.visible = loading;
      })
    };
  },
  onDisconnected: function onDisconnected(host) {
    Object(built["ObserverUnsubscribe"])(host);
  }
});
Object(built["WCDefine"])(app_content_componentName, AppContent);
/* harmony default export */ var app_content = (AppContent);
// EXTERNAL MODULE: ./src/client/styles/vars.scss
var vars = __webpack_require__(3);
var vars_default = /*#__PURE__*/__webpack_require__.n(vars);

// CONCATENATED MODULE: ./src/client/services/theme.js



var bodyStyle = __webpack_require__(38).toString();

var buttonStyles = __webpack_require__(39).toString();

var inputStyles = __webpack_require__(40).toString();

var progressBarStyles = __webpack_require__(41).toString();

var contentCollapseStyles = __webpack_require__(42).toString();

var spinnerElementStyles = __webpack_require__(43).toString();

var theme_Theme = function Theme() {
  Object(built["AppendStyleElement"])(bodyStyle, document.head, "body-style");
  built["ComponentStore"].addTheme("button-element", {
    theme: buttonStyles
  });
  built["ComponentStore"].addTheme("content-collapse", {
    theme: contentCollapseStyles
  });
  built["ComponentStore"].addTheme("spinner-element", {
    theme: spinnerElementStyles
  });
  built["ComponentStore"].addTheme("input-field", {
    theme: inputStyles,
    accentcolor: vars_default.a.locals.primary
  });
  built["ComponentStore"].addTheme("progress-bar", {
    theme: progressBarStyles,
    color: vars_default.a.locals.primary
  });
};

/* harmony default export */ var theme = (theme_Theme);
// CONCATENATED MODULE: ./src/client/index.js




theme();

/***/ })
/******/ ]);