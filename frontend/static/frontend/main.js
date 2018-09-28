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
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/src/components/App.js":
/*!****************************************!*\
  !*** ./frontend/src/components/App.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /home/thomasmc-local/Documents/git-repos/breadsite/frontend/src/components/App.js: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>? (14:2)\\n\\n\\u001b[0m \\u001b[90m 12 | \\u001b[39m    \\u001b[33m<\\u001b[39m\\u001b[33mp\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33mTHIS\\u001b[39m \\u001b[33mIS\\u001b[39m \\u001b[33mA\\u001b[39m \\u001b[33mTEST\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mp\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 13 | \\u001b[39m  \\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mdiv\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 14 | \\u001b[39m  \\u001b[33m<\\u001b[39m\\u001b[33mdiv\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m  \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 15 | \\u001b[39m    \\u001b[33m<\\u001b[39m\\u001b[33mSquare\\u001b[39m value\\u001b[33m=\\u001b[39m\\u001b[32m\\\"tom_test\\\"\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 16 | \\u001b[39m  \\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mdiv\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 17 | \\u001b[39m\\u001b[0m\\n    at _class.raise (/home/thomasmc-local/Documents/git-repos/breadsite/node_modules/@babel/parser/lib/index.js:3939:15)\\n    at _class.jsxParseElementAt (/home/thomasmc-local/Documents/git-repos/breadsite/node_modules/@babel/parser/lib/index.js:3616:14)\\n    at _class.jsxParseElement (/home/thomasmc-local/Documents/git-repos/breadsite/node_modules/@babel/parser/lib/index.js:3626:19)\\n    at _class.parseExprAtom (/home/thomasmc-local/Documents/git-repos/breadsite/node_modules/@babel/parser/lib/index.js:3633:21)\\n    at _class.parseExprSubscripts (/home/thomasmc-local/Documents/git-repos/breadsite/node_modules/@babel/parser/lib/index.js:5924:21)\\n    at _class.parseMaybeUnary (/home/thomasmc-local/Documents/git-repos/breadsite/node_modules/@babel/parser/lib/index.js:5903:21)\\n    at _class.parseExprOps (/home/thomasmc-local/Documents/git-repos/breadsite/node_modules/@babel/parser/lib/index.js:5812:21)\\n    at _class.parseMaybeConditional (/home/thomasmc-local/Documents/git-repos/breadsite/node_modules/@babel/parser/lib/index.js:5784:21)\\n    at _class.parseMaybeAssign (/home/thomasmc-local/Documents/git-repos/breadsite/node_modules/@babel/parser/lib/index.js:5731:21)\\n    at _class.parseParenAndDistinguishExpression (/home/thomasmc-local/Documents/git-repos/breadsite/node_modules/@babel/parser/lib/index.js:6474:28)\\n    at _class.parseExprAtom (/home/thomasmc-local/Documents/git-repos/breadsite/node_modules/@babel/parser/lib/index.js:6284:21)\\n    at _class.parseExprAtom (/home/thomasmc-local/Documents/git-repos/breadsite/node_modules/@babel/parser/lib/index.js:3635:52)\\n    at _class.parseExprSubscripts (/home/thomasmc-local/Documents/git-repos/breadsite/node_modules/@babel/parser/lib/index.js:5924:21)\\n    at _class.parseMaybeUnary (/home/thomasmc-local/Documents/git-repos/breadsite/node_modules/@babel/parser/lib/index.js:5903:21)\\n    at _class.parseExprOps (/home/thomasmc-local/Documents/git-repos/breadsite/node_modules/@babel/parser/lib/index.js:5812:21)\\n    at _class.parseMaybeConditional (/home/thomasmc-local/Documents/git-repos/breadsite/node_modules/@babel/parser/lib/index.js:5784:21)\\n    at _class.parseMaybeAssign (/home/thomasmc-local/Documents/git-repos/breadsite/node_modules/@babel/parser/lib/index.js:5731:21)\\n    at _class.parseFunctionBody (/home/thomasmc-local/Documents/git-repos/breadsite/node_modules/@babel/parser/lib/index.js:6917:24)\\n    at _class.parseArrowExpression (/home/thomasmc-local/Documents/git-repos/breadsite/node_modules/@babel/parser/lib/index.js:6877:10)\\n    at _class.parseParenAndDistinguishExpression (/home/thomasmc-local/Documents/git-repos/breadsite/node_modules/@babel/parser/lib/index.js:6493:12)\\n    at _class.parseExprAtom (/home/thomasmc-local/Documents/git-repos/breadsite/node_modules/@babel/parser/lib/index.js:6284:21)\\n    at _class.parseExprAtom (/home/thomasmc-local/Documents/git-repos/breadsite/node_modules/@babel/parser/lib/index.js:3635:52)\\n    at _class.parseExprSubscripts (/home/thomasmc-local/Documents/git-repos/breadsite/node_modules/@babel/parser/lib/index.js:5924:21)\\n    at _class.parseMaybeUnary (/home/thomasmc-local/Documents/git-repos/breadsite/node_modules/@babel/parser/lib/index.js:5903:21)\\n    at _class.parseExprOps (/home/thomasmc-local/Documents/git-repos/breadsite/node_modules/@babel/parser/lib/index.js:5812:21)\\n    at _class.parseMaybeConditional (/home/thomasmc-local/Documents/git-repos/breadsite/node_modules/@babel/parser/lib/index.js:5784:21)\\n    at _class.parseMaybeAssign (/home/thomasmc-local/Documents/git-repos/breadsite/node_modules/@babel/parser/lib/index.js:5731:21)\\n    at _class.parseVar (/home/thomasmc-local/Documents/git-repos/breadsite/node_modules/@babel/parser/lib/index.js:7765:26)\\n    at _class.parseVarStatement (/home/thomasmc-local/Documents/git-repos/breadsite/node_modules/@babel/parser/lib/index.js:7595:10)\\n    at _class.parseStatementContent (/home/thomasmc-local/Documents/git-repos/breadsite/node_modules/@babel/parser/lib/index.js:7195:21)\");\n\n//# sourceURL=webpack:///./frontend/src/components/App.js?");

/***/ }),

/***/ "./frontend/src/index.js":
/*!*******************************!*\
  !*** ./frontend/src/index.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/App */ \"./frontend/src/components/App.js\");\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_App__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack:///./frontend/src/index.js?");

/***/ })

/******/ });