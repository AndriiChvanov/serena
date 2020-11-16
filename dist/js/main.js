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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/slider */ \"./js/module/slider.js\");\n/* harmony import */ var _module_cruise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/cruise */ \"./js/module/cruise.js\");\n\n\nObject(_module_slider__WEBPACK_IMPORTED_MODULE_0__[\"slide\"])(\".gallery__slider\", \".gallery__inner\", \".gallery__slide\", \".gallery__slides\", \".gallery__btn li\", \".gallery__btn-up li\");\nObject(_module_slider__WEBPACK_IMPORTED_MODULE_0__[\"slide\"])(\".cruise__menu-slider\", \".cruise__menu-slider-inner\", \".cruise__menu-slider-slide\", \".cruise__menu-slider-slides\", \".cruise__menu-slider-btn li\");\nObject(_module_cruise__WEBPACK_IMPORTED_MODULE_1__[\"cruise\"])();\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./js/module/cruise.js":
/*!*****************************!*\
  !*** ./js/module/cruise.js ***!
  \*****************************/
/*! exports provided: cruise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cruise\", function() { return cruise; });\nfunction cruise() {\n  var a = document.querySelectorAll(\".cruise__menu-price-l p img\");\n\n  var _loop = function _loop(i) {\n    a[i].addEventListener(\"click\", function (e) {\n      var b = \"url(icons/menuOkHov.svg)\";\n      a[i].style.content = b;\n      console.log(a[i].style.content);\n    });\n  };\n\n  for (var i = 0; i < a.length; i++) {\n    _loop(i);\n  }\n\n  var p = document.querySelector(\".cruise__menu-price-r-plus\");\n  var m = document.querySelector(\".cruise__menu-price-r-minus\");\n  var s = document.querySelector(\".cruise__menu-price-r span\");\n  var d = document.querySelector(\".cruise__menu-price-buy span\");\n  p.addEventListener(\"click\", function (e) {\n    var a = parseInt(s.innerHTML);\n    a = parseInt(s.innerHTML) + 1;\n    s.innerHTML = a;\n    d.innerHTML = parseInt(d.innerHTML) + 32500 + \" \" + \"₽\";\n  });\n  m.addEventListener(\"click\", function (e) {\n    var a = parseInt(s.innerHTML);\n    a = parseInt(s.innerHTML) - 1;\n    s.innerHTML = a;\n    d.innerHTML = parseInt(d.innerHTML) - 32500 + \" \" + \"₽\";\n  });\n}\n\n\n\n//# sourceURL=webpack:///./js/module/cruise.js?");

/***/ }),

/***/ "./js/module/slider.js":
/*!*****************************!*\
  !*** ./js/module/slider.js ***!
  \*****************************/
/*! exports provided: slide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"slide\", function() { return slide; });\nfunction slide(selector, inner, slide, slidess, btn, btn1) {\n  var trigger = document.querySelectorAll(selector);\n\n  var _loop = function _loop(i) {\n    var width = window.getComputedStyle(trigger[i].querySelector(inner)).width;\n    var slides = trigger[i].querySelectorAll(slide);\n    var slidesField = trigger[i].querySelector(slidess);\n    var dots = trigger[i].querySelectorAll(btn);\n    var dots1 = trigger[i].querySelectorAll(btn1);\n    slidesField.style.width = 100 * slides.length + \"%\";\n    slides.forEach(function (slide) {\n      slide.style.width = width;\n    });\n    var offset = 0;\n    var slideIndex = 0;\n    var sliderId = trigger[i].getAttribute(\"id\");\n    var dotsSlide = document.querySelectorAll(\"#\".concat(sliderId, \" \").concat(btn));\n    var dotsSlide1 = document.querySelectorAll(\"#\".concat(sliderId, \" \").concat(btn1));\n\n    for (var a = 0; a < dotsSlide.length; a++) {\n      dotsSlide[a].addEventListener(\"click\", function (e) {\n        e.preventDefault();\n        var slideTo = e.target.getAttribute(\"data-slide-to\");\n        slideIndex = slideTo;\n        offset = +width.replace(/\\D/g, \"\") * slideTo;\n        slidesField.style.transform = \"translateX(-\".concat(offset, \"px)\");\n        dots.forEach(function (dot) {\n          return dot.classList.remove(\"active\");\n        });\n        dots[slideIndex].classList.add(\"active\");\n      });\n    }\n\n    for (var _a = 0; _a < dotsSlide1.length; _a++) {\n      dotsSlide1[_a].addEventListener(\"click\", function (e) {\n        e.preventDefault();\n        var slideTo = e.target.getAttribute(\"data-slide-to\");\n        slideIndex = slideTo;\n        offset = +width.replace(/\\D/g, \"\") * slideTo;\n        slidesField.style.transform = \"translateX(-\".concat(offset, \"px)\");\n        dots1.forEach(function (dot) {\n          return dot.classList.remove(\"active\");\n        });\n        dots1[slideIndex].classList.add(\"active\");\n      });\n    }\n  };\n\n  for (var i = 0; i < trigger.length; i++) {\n    _loop(i);\n  }\n}\n\n\n\n//# sourceURL=webpack:///./js/module/slider.js?");

/***/ })

/******/ });