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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.addEventListener('DOMContentLoaded', () => {
  // dropMenu
  const dayInput = document.querySelector('#day-input'),
    dayMenu = document.querySelector('#dropdown__day'),
    dayItems = document.querySelectorAll('.dropdown_day'),
    dayArrow = document.querySelector('#arrow-day'),
    containerInput = document.querySelector('#container-input'),
    containerMenu = document.querySelector('#dropdown__container'),
    containerItems = document.querySelectorAll('.dropdown_container'),
    containerArrow = document.querySelector('#arrow-container'),
    homeInput = document.querySelector('#home-input'),
    homeMenu = document.querySelector('#dropdown__home'),
    homeItems = document.querySelectorAll('.dropdown_homepage'),
    homeArrow = document.querySelector('#arrow-home');
  window.addEventListener('click', e => {
    if (e.target == dayInput) {
      dayMenu.classList.add('active');
      dayInput.classList.add('active');
      dayArrow.classList.add('active');
    } else {
      dayMenu.classList.remove('active');
      dayInput.classList.remove('active');
      dayArrow.classList.remove('active');
    }
    if (e.target == homeInput) {
      homeMenu.classList.add('active');
      homeInput.classList.add('active');
      homeArrow.classList.add('active');
    } else {
      homeMenu.classList.remove('active');
      homeInput.classList.remove('active');
      homeArrow.classList.remove('active');
    }
    if (e.target == containerInput) {
      containerMenu.classList.add('active');
      containerInput.classList.add('active');
      containerArrow.classList.add('active');
    } else {
      containerMenu.classList.remove('active');
      containerInput.classList.remove('active');
      containerArrow.classList.remove('active');
    }
  });
  dayItems.forEach((item, i) => {
    item.addEventListener('click', () => {
      dayInput.value = item.innerHTML;
    });
  });
  homeItems.forEach((item, i) => {
    item.addEventListener('click', () => {
      homeInput.value = item.innerHTML;
    });
  });
  containerItems.forEach((item, i) => {
    item.addEventListener('click', () => {
      containerInput.value = item.innerHTML;
    });
  });
  // form
  const applyBtn = document.querySelector('#apply'),
    cancelBtn = document.querySelector('#cancel'),
    titleInput = document.querySelector('#title-input'),
    sizeInput = document.querySelector('#size-input'),
    codeFirst = document.querySelector('#code__first'),
    codeSecond = document.querySelector('#code__second'),
    codeThird = document.querySelector('#code__third'),
    lightChecked = document.querySelector('#light'),
    darkChecked = document.querySelector('#dark'),
    allInputs = document.querySelectorAll('.form__wrapper-input');
  function maxNumber(input) {
    input.addEventListener('input', () => {
      if (input.value.length > 4) {
        input.value = input.value.slice(0, 4);
      }
    });
  }
  maxNumber(codeFirst);
  maxNumber(codeSecond);
  maxNumber(codeThird);
  // theme style local 
  const body = document.querySelector('#body');
  console.log(body);
  applyBtn.addEventListener('click', () => {
    localStorage.setItem('day', `${dayInput.value}`);
    localStorage.setItem('home', `${homeInput.value}`);
    localStorage.setItem('container', `${containerInput.value}`);
    localStorage.setItem('title', `${titleInput.value}`);
    localStorage.setItem('size', `${sizeInput.value}`);
    localStorage.setItem('code_1', `${codeFirst.value}`);
    localStorage.setItem('code_2', `${codeSecond.value}`);
    localStorage.setItem('code_3', `${codeThird.value}`);
    localStorage.setItem('light', `${lightChecked.checked}`);
    localStorage.setItem('dark', `${darkChecked.checked}`);
    if (localStorage.getItem('light') == 'true') {
      body.classList.remove('dark');
      body.classList.add('light');
      lightChecked.checked = true;
    } else {
      body.classList.add('dark');
      body.classList.remove('light');
      lightChecked.checked = false;
      darkChecked.checked = true;
    }
  });
  function clearInputs() {
    allInputs.forEach(item => {
      item.value = '';
    });
    lightChecked.checked = true;
    darkChecked.checked = false;
    localStorage.removeItem('day');
    localStorage.removeItem('home');
    localStorage.removeItem('container');
    localStorage.removeItem('title');
    localStorage.removeItem('size');
    localStorage.removeItem('code_1');
    localStorage.removeItem('code_2');
    localStorage.removeItem('code_3');
    localStorage.removeItem('light');
    localStorage.removeItem('dark');
    localStorage.setItem('light', `${lightChecked.checked = true}`);
    localStorage.setItem('dark', `${darkChecked.checked = false}`);
  }
  cancelBtn.addEventListener('click', () => {
    clearInputs();
    body.classList.remove('dark');
    body.classList.add('light');
    lightChecked.checked = true;
  });
  function setLocal() {
    if (localStorage.getItem('light') == 'true') {
      body.classList.remove('dark');
      body.classList.add('light');
      lightChecked.checked = true;
    } else {
      body.classList.add('dark');
      body.classList.remove('light');
      lightChecked.checked = false;
      darkChecked.checked = true;
    }
    dayInput.value = localStorage.getItem('day');
    homeInput.value = localStorage.getItem('home');
    containerInput.value = localStorage.getItem('container');
    titleInput.value = localStorage.getItem('title');
    sizeInput.value = localStorage.getItem('size');
    codeFirst.value = localStorage.getItem('code_1');
    codeSecond.value = localStorage.getItem('code_2');
    codeThird.value = localStorage.getItem('code_3');
  }
  setLocal();
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map