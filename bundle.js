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
/******/ 	__webpack_require__.p = "/contact-book.github.io/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/UI/button/button.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/UI/button/button.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".submitBtn{\\r\\n    outline: none;\\r\\n    border-radius: 10%;\\r\\n    font-weight: bold;\\r\\n    margin: 4%;\\r\\n    display: block;\\r\\n    position: relative;\\r\\n}\\r\\n\\r\\n.invalidSubmit{\\r\\n    background: rgb(230, 34, 20) !important; \\r\\n    color: rgb(202, 202, 202) !important;\\r\\n}\\r\\n\\r\\n.cancelBtn{\\r\\n    outline: none;\\r\\n    font-size: 10%;\\r\\n}\\r\\n\\r\\n.refreshBtn{\\r\\n    width: fit-content;\\r\\n    font-size: larger;\\r\\n    outline: none;\\r\\n    border-radius: 10%;\\r\\n    font-weight: bold;\\r\\n    background: darkgray;\\r\\n}\\r\\n\\r\\n/*TABLET QUERIES*/\\r\\n/*TABLET*/\\r\\n@media (max-width : 1024px ) and (min-width : 768px) {\\r\\n    .submitBtn{\\r\\n        width: 20vw;\\r\\n        height: 4vh;\\r\\n        font-size: 3vw;\\r\\n    }\\r\\n }\\r\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/UI/button/button.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/UI/form/form.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/UI/form/form.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"form{\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n}\\r\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/UI/form/form.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/UI/input/input.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/UI/input/input.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".inputAndLabel{\\r\\n    margin: 5%;\\r\\n}\\r\\n.inputBox{\\r\\n   background: transparent;\\r\\n   border: none;\\r\\n   border-bottom : 0.3vh dashed black;\\r\\n   padding-left: 1%; \\r\\n   outline: none;\\r\\n   font-family: \\\"Comic Sans MS\\\", cursive, sans-serif;\\t\\r\\n}\\r\\n.label{\\r\\n    margin-right: 2vw; \\r\\n    margin-left: 2vw;\\r\\n    font-size: 1.5vw; \\r\\n}\\r\\n\\r\\n.inputBox, .label{\\r\\n    display: block;\\r\\n}\\r\\n\\r\\n.inputBox, .label{\\r\\n    position: relative;\\r\\n}\\r\\n\\r\\n.rightCredintials{\\r\\n    border-bottom-color: green;\\r\\n}\\r\\n\\r\\n.wrongCredintials{\\r\\n    border-bottom-color: rgb(214, 39, 8);\\r\\n}\\r\\n\\r\\n/*-------------------------------------------------------------------------*/\\r\\n/*TABLET QUERIES*/\\r\\n@media (max-width : 1024px ) and (min-width : 768px) {\\r\\n    .label{\\r\\n        font-size: 4vw;\\r\\n    }\\r\\n    .inputBox{\\r\\n        width: 40%;\\r\\n        font-size: 3vw;\\r\\n    }\\r\\n }  \\r\\n/*SMART PHONE QUERIES*/\\r\\n@media (max-width : 500px){\\r\\n    .inputAndLabel{\\r\\n        margin: 2%;\\r\\n    }\\r\\n    .label{\\r\\n        font-size: 28px;\\r\\n        display: block;\\r\\n    }\\r\\n    .inputBox{\\r\\n        width: 80%;\\r\\n    }\\r\\n}\\r\\n@media(max-width : 380px) {\\r\\n    .inputAndLabel{\\r\\n        margin: 3%;\\r\\n    }\\r\\n}\\r\\n@media(max-width : 330px){\\r\\n    .label{\\r\\n        font-size: 20px;\\r\\n    }\\r\\n} \", \"\"]);\n\n\n//# sourceURL=webpack:///./src/UI/input/input.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/UI/modal/modal.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/UI/modal/modal.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".modal{\\r\\n    height: 100%;\\r\\n    width: 100%;\\r\\n    background: rgba(0, 0, 0, 0.5);\\r\\n    text-align: center;\\r\\n    padding-top: 30vh;\\r\\n    position: fixed;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    z-index: 10;\\r\\n}\\r\\n\\r\\n.msg{\\r\\n    color: white;\\r\\n    font-size: 3rem;\\r\\n    font-weight: bolder;\\r\\n}\\r\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/UI/modal/modal.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/contacts/styles/contactCreate.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/contacts/styles/contactCreate.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"/*CONTACTS*/\\r\\n.contact{\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    margin-top: 3%;\\r\\n}\\r\\n\\r\\n.contactButtons{\\r\\n    margin-left: 2.5%;\\r\\n    border: none;\\r\\n    background: transparent;\\r\\n    cursor: pointer;\\r\\n    font-size: 20px;\\r\\n    height: 3.5vh;\\r\\n    width: auto;\\r\\n}\\r\\n/*--------------------------------------------------------------*/\\r\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/contacts/styles/contactCreate.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/contacts/styles/contactPopUp.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/contacts/styles/contactPopUp.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".contactPopUps{\\r\\n    position: fixed;\\r\\n    height: 60vh;\\r\\n    padding-top: 2vh;\\r\\n    width: 40vw;\\r\\n    left : 33vw;\\r\\n    top: 28vh;\\r\\n    border-radius: 3%;\\r\\n    border: dashed black;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n}\\r\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/contacts/styles/contactPopUp.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/palette/styles/paletteList.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/palette/styles/paletteList.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"/*STYLE TABLE\\r\\n   1- GENERAL\\r\\n   2- MEDIA QUERIES\\r\\n      2-1 COMBINED\\r\\n      2-2 TABLET\\r\\n      2-3 SMART PHONES*/\\r\\n/*1- GENERAL*/\\r\\n.palettePopUp{\\r\\n   border: black dashed;\\r\\n   position: fixed;\\r\\n   top: 35vh;\\r\\n   left : 4.5vw;\\r\\n   height: 50vh;\\r\\n   width: 15vw;\\r\\n   display: flex;\\r\\n   flex-direction: column;\\r\\n   align-items: center;\\r\\n   padding-top: 1vh;\\r\\n}\\r\\n \\r\\n.blockList{\\r\\n   height: 100%;\\r\\n   width: 100%;\\r\\n   display: grid;\\r\\n   grid-template-columns: 49% 49%;\\r\\n   grid-auto-rows: 20%;\\r\\n   grid-gap: 2%;\\r\\n   overflow-y: auto;\\r\\n   margin-top: 1vh;\\r\\n}\\r\\n\\r\\n.paletteBlock{\\r\\n   background: whitesmoke;\\r\\n   text-align: center;\\r\\n   padding-top: 5%;\\r\\n   overflow-wrap: break-word;\\r\\n   cursor: pointer;\\r\\n}\\r\\n\\r\\n/*----------------------------------------------*/\\r\\n/*2- MEDIA QUERIES*/\\r\\n/*2-1 COMBINED*/\\r\\n@media(max-width : 1024px){\\r\\n   .palettePopUp{\\r\\n       left: 7vw;\\r\\n   }\\r\\n   .blockList{\\r\\n       width: 40vw;\\r\\n   }\\r\\n}\\r\\n/*------------------------------------------------*/\\r\\n/*2-2 TABLET*/\\r\\n@media (max-width : 1024px ) and (min-width : 768px) {\\r\\n   .paletteBlock{\\r\\n       font-size: 3vw;\\r\\n   }\\r\\n}  \\r\\n/*------------------------------------------------*/\\r\\n/*2-3 SMART PHONES*/\\r\\n\\r\\n@media (max-width : 380px){\\r\\n    .palettePopUp{\\r\\n        top : 30vh;\\r\\n    }\\r\\n   .blockList{\\r\\n       height: 50vh;\\r\\n   }\\r\\n}\\r\\n\\r\\n@media (max-width : 500px) and (min-width : 385px) {\\r\\n   .palettePopUp{\\r\\n       top: 38vh;\\r\\n   }\\r\\n}\\r\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/palette/styles/paletteList.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesGlobal/contactList.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesGlobal/contactList.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"/*-------------------*/\\r\\n/*STYLE TABLE:\\r\\n  1- CONTACT LIST OUTSIDE STRUCTURE\\r\\n  2- CONTACT LIST INSIDE ELEMENTS\\r\\n    2-1 DYNAMIC ELEMENTS\\r\\n----------------------*/\\r\\n/*1- CONTACT LIST OUTSIDE STRUCTURE*/\\r\\n#contactMain{\\r\\n    overflow-y: auto;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    padding: 2%;\\r\\n}\\r\\n/*--------------------------------------------------------------*/\\r\\n/*2- CONTACT LIST INSIDE ELEMENTS*/\\r\\n/*2-1 DYNAMIC ELEMENTS*/\\r\\n#contactMain .title{\\r\\n    font-family: monospace;\\r\\n    font-size: 1.5rem;\\r\\n    top: 1vh;\\r\\n    margin : 2%;\\r\\n}\\r\\n#contactMain .addButton{\\r\\n    height: 3vh;\\r\\n    width: 2vw;\\r\\n    text-align: center;\\r\\n    outline: none;\\r\\n    margin : 2%;\\r\\n}\\r\\n\\r\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/stylesGlobal/contactList.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesGlobal/footer.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesGlobal/footer.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".footer{\\r\\n    grid-area: footer;\\r\\n    margin-top : 13vh;\\r\\n    margin-left: 2vw;\\r\\n    font-family: monospace;\\r\\n    font-size: inherit;\\r\\n    font-weight: bold;\\r\\n}\\r\\n\\r\\n\\r\\n/* TABLET*/\\r\\n@media (max-width : 1024px ) and (min-width : 768px) {\\r\\n    .footer{\\r\\n        font-size: 2.5vw;\\r\\n    }\\r\\n }  \\r\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/stylesGlobal/footer.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesGlobal/header.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesGlobal/header.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"*, *::before, *::after {box-sizing: border-box}\\r\\n/*----------------------------\\r\\n  STYLE TABLE :\\r\\n  1- HEADER GLOBAL SELECTORS\\r\\n  2- HEADER TYPES\\r\\n    2-1 SIGN/LOG HEADER\\r\\n    2-2 SIGN OUT HEADER\\r\\n  3- NAV BUTTONS\\r\\n  4- MEDIA QUERIES \\r\\n    4-1 TABLET\\r\\n    4-2 SMART PHONES\\r\\n  ----------------------------*/\\r\\n\\r\\n/*1- HEADER GLOBAL SELECTORS*/\\r\\nheader{\\r\\n  grid-area: header;\\r\\n  padding: 2vh;\\r\\n  background: rosybrown;\\r\\n}\\r\\n/*-----------------------------*/\\r\\n/*2- HEADER TYPES*/\\r\\n/*2-1 SIGN/LOG HEADER*/\\r\\n.signLogHeader{\\r\\n  display: grid;\\r\\n  grid-template-columns: 20%  50%  30%;\\r\\n  grid-template-areas:\\r\\n               \\\"logo . registartion\\\";\\r\\n}\\r\\n\\r\\n.signLogButtons{\\r\\n  grid-area: registartion;\\r\\n  display: grid;\\r\\n  grid-template-columns: 45%  45%;\\r\\n  grid-gap: 1%;\\r\\n}\\r\\n/*-----------------------------*/\\r\\n/*2-2 SIGN OUT HEADER*/\\r\\n.signOutHeader{\\r\\n  display: grid;\\r\\n  grid-template-columns: 20%  60%  20%;\\r\\n  grid-template-areas:\\r\\n               \\\"logo  . signOut\\\";\\r\\n}\\r\\n\\r\\n.signOutButton{\\r\\n  grid-area: signOut;\\r\\n}\\r\\n/*-----------------------------*/\\r\\n\\r\\n/*3- NAV BUTTONS*/\\r\\n.navButton{\\r\\n  text-decoration: none;\\r\\n  border: none;\\r\\n  color: white;\\r\\n  font-weight: bolder;\\r\\n  text-align: center;\\r\\n  border-radius: 5%;\\r\\n  height: 7vh;\\r\\n  width: 10vw;\\r\\n  cursor: pointer;\\r\\n  padding: 0;\\r\\n  margin-top: 1%;\\r\\n  background: blanchedalmond;\\r\\n}\\r\\n.navButton:hover{\\r\\n  margin-top: 2%;\\r\\n  outline: none;\\r\\n}\\r\\n/*--------------------------------------------------------------*/\\r\\n/*4- MEDIA QUERIES*/\\r\\n/*4-1 TABLET*/\\r\\n@media (max-width : 1024px ) and (min-width : 768px) {\\r\\n  .signLogHeader{\\r\\n    grid-template-columns: 30% 20% 50%;\\r\\n  }\\r\\n  .signOutHeader{\\r\\n    grid-template-columns: 35% 30% 35%;\\r\\n  }\\r\\n  .navButton{\\r\\n    width: 20vw;\\r\\n    font-size: 1.5em;\\r\\n  }\\r\\n  \\r\\n}  \\r\\n@media (max-width : 767px) and (min-width : 501px){\\r\\n  .signLogHeader{\\r\\n    grid-template-columns: 30% 12% 58%;\\r\\n  }\\r\\n  .navButton{\\r\\n    width: 23vw;\\r\\n  }\\r\\n}\\r\\n/*------------------------------------------------*/\\r\\n/*4-2 SMART PHONES*/\\r\\n@media (max-width : 500px) and (min-width : 320px) {\\r\\n  .signLogHeader{\\r\\n    grid-template-columns: 30% 10% 60%;\\r\\n  }\\r\\n  .signOutHeader{\\r\\n    grid-template-columns: 30% 40% 30%;\\r\\n  }\\r\\n  .navButton{\\r\\n    width: 25vw;\\r\\n  }\\r\\n\\r\\n}\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/stylesGlobal/header.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesGlobal/logo.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesGlobal/logo.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"\\r\\n/*PERSON ICON*/\\r\\n.person-icon{\\r\\n    background: black;\\r\\n    position: inherit;\\r\\n    height:80%;\\r\\n    width: 70%;\\r\\n    border-radius:   50%/100px 100px 0 0;\\r\\n  }\\r\\n  .person-icon::before{\\r\\n    content: \\\"\\\";\\r\\n    background: black;\\r\\n    height: 60%;\\r\\n    width: 80%;\\r\\n    display: block;\\r\\n    position: inherit;\\r\\n    top: -65%;\\r\\n    left: 14%;\\r\\n    border-radius: 50%;\\r\\n  }\\r\\n  #icon{\\r\\n    position: absolute;\\r\\n    height: 60%;\\r\\n    width: 70%;\\r\\n    left: 25%;\\r\\n    top: 45%;\\r\\n  }\\r\\n/*-------------------------------------------------*/\\r\\n/*LOGO*/\\r\\n  #logo{\\r\\n    grid-area: logo;\\r\\n    height: 10vh;\\r\\n    width: 4vw;\\r\\n    border-radius: 15%;\\r\\n    padding-top: 1vh;\\r\\n    box-sizing:border-box;\\r\\n    position: relative;\\r\\n    overflow: hidden;\\r\\n    margin-left: 4%;\\r\\n    margin-top: 1%;\\r\\n    background: blanchedalmond;\\r\\n  }\\r\\n  \\r\\n  @media  (max-width: 1100px) {\\r\\n    #logo{\\r\\n      width: 7vw;\\r\\n    }\\r\\n  }\\r\\n  /* TABLET*/\\r\\n  @media (max-width : 1024px ) and (min-width : 768px) {\\r\\n    #logo{\\r\\n      width: 10vw;\\r\\n    }\\r\\n    \\r\\n  } \", \"\"]);\n\n\n//# sourceURL=webpack:///./src/stylesGlobal/logo.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesGlobal/main.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesGlobal/main.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"body main{\\r\\n    grid-area: main;\\r\\n    height: 65vh;\\r\\n    width: 20vw;\\r\\n    text-align: center;\\r\\n    border-left: ridge 0.5vw ;\\r\\n    border-radius: 3%;\\r\\n    -webkit-box-shadow: 13px 5px 32px -19px rgba(0,0,0,1);\\r\\n    -moz-box-shadow: 13px 5px 32px -19px rgba(0,0,0,1);\\r\\n    box-shadow: 13px 5px 32px -19px rgba(0,0,0,1);\\r\\n}\\r\\n\\r\\n/*2- DISPLAY CLASSES*/\\r\\n/*USED FOR TEMP ROUTING*/\\r\\n.hide{\\r\\n   display: none;\\r\\n}\\r\\n\\r\\n.show{\\r\\n   display : block;\\r\\n} \\r\\n\\r\\n/*3- MEDIA QUERIES*/\\r\\n@media (max-width : 900px ) {\\r\\n    main{\\r\\n       width : 30VW ;\\r\\n    }\\r\\n }  \\r\\n @media (max-width : 600px ) {\\r\\n    main{\\r\\n       width : 35VW ;\\r\\n    }\\r\\n }\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/stylesGlobal/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesGlobal/palette.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesGlobal/palette.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"/*-------------------------\\r\\n    STYLE TABLE :\\r\\n    1- PALETTE INTERFACE\\r\\n    2- MEDIA QUERIES\\r\\n        2-1 TABLET\\r\\n        2-3 SMART PHONES*/\\r\\n/*1- PALETTE INTERFACE*/\\r\\n.paletteArea{\\r\\n    grid-area: palette;\\r\\n    margin-left: 2%;\\r\\n}\\r\\n.paletteArea img{\\r\\n    width: 3vw;\\r\\n    height: auto;\\r\\n    cursor: pointer;\\r\\n}\\r\\n/*----------------------------------------------*/\\r\\n/*2- MEDIA QUERIES*/\\r\\n/*2-1 TABLET*/\\r\\n@media (max-width : 1024px ) and (min-width : 768px) {\\r\\n    .paletteArea img{\\r\\n        margin-top: 35%;\\r\\n        margin-left: 25%;\\r\\n        width: 8vw;   \\r\\n    }\\r\\n}\\r\\n/*------------------------------------------------*/\\r\\n/*2-2 SMART PHONES*/\\r\\n\\r\\n@media (max-width : 500px) and (min-width : 320px) {\\r\\n.paletteArea img{\\r\\n    margin-top: 55%;\\r\\n    margin-left: 25%;  \\r\\n    width: 8vw;    \\r\\n  }\\r\\n}  \", \"\"]);\n\n\n//# sourceURL=webpack:///./src/stylesGlobal/palette.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesGlobal/paletteClasses.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesGlobal/paletteClasses.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"/*PALETTE STYLE CLASSES\\r\\n    1- DEFAULT\\r\\n    2- FLOWERY\\r\\n    3- SEA SIDE\\r\\n    4- oranges\\r\\n    5- vintage\\r\\n    6- winter\\r\\n    7- jungle\\r\\n    8- pastel\\r\\n    9- fire\\r\\n    10- gold*/\\r\\n\\r\\n/*1- DEFAULT*/\\r\\n.default ,.default .submitBtn, .default .colorList{\\r\\n    background: #faf5ef;\\r\\n}\\r\\n\\r\\n.default header, .default .contactPopUps {\\r\\n    background:  #d7d1c9;\\r\\n}\\r\\n\\r\\n.default main, .default input::-webkit-auto-fill{\\r\\n    background: #99b19c;\\r\\n    border-left-color: #849b87;\\r\\n }\\r\\n\\r\\n.default header nav button{\\r\\n    background: #672f2f;\\r\\n    -webkit-box-shadow: 0px 26px 0px 0px #4b2222;\\r\\n    -moz-box-shadow: 0px 26px 0px 0px #4b2222;\\r\\n    box-shadow: 0px 11px 0px 0px #4b2222;\\r\\n}\\r\\n\\r\\n.default .title{\\r\\n    background : #849b87;\\r\\n }\\r\\n\\r\\n.default #logo{\\r\\n    background: #672f2f;\\r\\n    -webkit-box-shadow: 2px 2px 0px 2px #4b2222;\\r\\n    -moz-box-shadow: 2px 2px 0px 2px #4b2222;\\r\\n    box-shadow: 2px 2px 0px 2px #4b2222;\\r\\n }\\r\\n/*-----------------------------------------------------------------------------------*/\\r\\n/*2- FLOWERY*/\\r\\n.flowery,.flowery .submitBtn, .flowery .colorList{\\r\\n    background: rgb(252, 220, 209);\\r\\n}\\r\\n\\r\\n.flowery header, .flowery .contactPopUps{\\r\\n    background: rgb(235, 202, 203);\\r\\n}\\r\\n\\r\\n.flowery header nav button{\\r\\n    background: rgb(235, 187, 185);\\r\\n    -webkit-box-shadow: 0px 26px 0px 0px rgb(194, 154, 152,1);\\r\\n    -moz-box-shadow: 0px 26px 0px 0px rgba(194, 154, 152,1);\\r\\n    box-shadow: 0px 11px 0px 0px rgb(194, 154, 152,1);\\r\\n    color: black;\\r\\n}\\r\\n\\r\\n.flowery main, .flowery input::-webkit-auto-fill{\\r\\n    background: rgb(244, 233, 229);\\r\\n    border-left-color: rgb(241, 209, 198);\\r\\n}\\r\\n\\r\\n.flowery .title{\\r\\n    background: rgb(248, 248, 246);\\r\\n}\\r\\n\\r\\n .flowery #logo{\\r\\n    background: rgb(243, 197, 182);\\r\\n    -webkit-box-shadow: 2px 2px 0px 2px rgb(214, 184, 174,1);\\r\\n    -moz-box-shadow: 2px 2px 0px 2px rgba(214, 184, 174,1);\\r\\n    box-shadow: 2px 2px 0px 2px rgba(214, 184, 174,1);\\r\\n}\\r\\n/*------------------------------------------------------------------------------------*/\\r\\n/*SEA SIDE*/\\r\\n.seaSide, .seaSide .submitBtn, .seaSide .colorList{\\r\\n    background: rgb(90, 188, 185);\\r\\n}\\r\\n\\r\\n.seaSide header, .seaSide .contactPopUps{\\r\\n    background: rgb(238, 203, 113);\\r\\n}\\r\\n\\r\\n.seaSide header nav button{\\r\\n    background: rgb(2, 28, 68);\\r\\n    -webkit-box-shadow: 0px 26px 0px 0px rgb(0, 9, 20,1);\\r\\n    -moz-box-shadow: 0px 26px 0px 0px rgba(0, 9, 20,1);\\r\\n    box-shadow: 0px 11px 0px 0px rgb(0, 9, 20,1);\\r\\n}\\r\\n\\r\\n.seaSide main, .seaSide input::-webkit-auto-fill{\\r\\n    background: rgb(130, 212, 187);\\r\\n    border-left-color: rgb(103, 212, 180);\\r\\n}\\r\\n.seaSide .title{\\r\\n    background: rgb(166, 244, 220);\\r\\n}\\r\\n.seaSide #logo{\\r\\n    background: rgb(90, 188, 185);\\r\\n    -webkit-box-shadow: 2px 2px 0px 2px rgb(57, 151, 148,1);\\r\\n    -moz-box-shadow: 2px 2px 0px 2px rgba(57, 151, 148,1);\\r\\n    box-shadow: 2px 2px 0px 2px rgba(57, 151, 148,1);\\r\\n}\\r\\n/*-------------------------------------------------------------------------------------*/\\r\\n/*oranges*/\\r\\n.oranges, .oranges .submitBtn, .oranges .colorList{\\r\\n    background: #ffeadb;\\r\\n}\\r\\n\\r\\n.oranges header, .oranges .contactPopUps{\\r\\n    background: #f7c5a8;\\r\\n}\\r\\n\\r\\n.oranges header nav button{\\r\\n    background: #679b9b;\\r\\n    -webkit-box-shadow: 0px 26px 0px 0px rgba(84, 131, 131,1);\\r\\n    -moz-box-shadow: 0px 26px 0px 0px rgba(84, 131, 131,1);\\r\\n    box-shadow: 0px 11px 0px 0px rgba(84, 131, 131,1);\\r\\n}\\r\\n\\r\\n.oranges main, .oranges input::-webkit-auto-fill{\\r\\n    background: #ff9a76;\\r\\n    border-left-color: #f78860;\\r\\n}\\r\\n.oranges .title{\\r\\n    background: #f78860;\\r\\n}\\r\\n.oranges #logo{\\r\\n    background: #679b9b;\\r\\n    -webkit-box-shadow: 2px 2px 0px 2px rgba(91, 156, 156,1);\\r\\n    -moz-box-shadow: 2px 2px 0px 2px rgba(91, 156, 156,1);\\r\\n    box-shadow: 2px 2px 0px 2px rgba(91, 156, 156,1);\\r\\n}\\r\\n/*-------------------------------------------------------------------------------------*/\\r\\n/*vintage*/\\r\\n.vintage, .vintage .submitBtn, .vintage .colorList{\\r\\n    background: #7d5e2a;\\r\\n}\\r\\n\\r\\n.vintage header, .vintage .contactPopUps{\\r\\n    background: #9dc6a7;\\r\\n}\\r\\n\\r\\n.vintage header nav button{\\r\\n    background: #231903;\\r\\n    -webkit-box-shadow: 0px 26px 0px 0px rgba(27, 19, 1,1);\\r\\n    -moz-box-shadow: 0px 26px 0px 0px rgba(27, 19, 1,1);\\r\\n    box-shadow: 0px 11px 0px 0px rgba(27, 19, 1,1);\\r\\n}\\r\\n\\r\\n.vintage main, .vintage input::-webkit-auto-fill{\\r\\n    background: #d1f5d3;\\r\\n    border-left-color: #bff7c1;\\r\\n}\\r\\n.vintage .title{\\r\\n    background: #bff7c1;\\r\\n}\\r\\n.vintage #logo{\\r\\n    background: #d1f5d3;\\r\\n    -webkit-box-shadow: 2px 2px 0px 2px rgba(166, 250, 169,1);\\r\\n    -moz-box-shadow: 2px 2px 0px 2px rgba(166, 250, 169,1);\\r\\n    box-shadow: 2px 2px 0px 2px rgba(166, 250, 169,1);\\r\\n}\\r\\n/*-------------------------------------------------------------------------------------*/\\r\\n/*winter*/\\r\\n.winter, .winter .submitBtn, .winter .colorList{\\r\\n    background: #204051;\\r\\n}\\r\\n\\r\\n.winter header, .winter .contactPopUps{\\r\\n    background: #84a9ac;\\r\\n}\\r\\n\\r\\n.winter header nav button{\\r\\n    background: #3b6978;\\r\\n    -webkit-box-shadow: 0px 26px 0px 0px #2d515e;\\r\\n    -moz-box-shadow: 0px 26px 0px 0px #2d515e;\\r\\n    box-shadow: 0px 11px 0px 0px #2d515e;\\r\\n}\\r\\n\\r\\n.winter main, .winter input::-webkit-auto-fill{\\r\\n    background: #cae8d5;\\r\\n    border-left-color: #acc5b5;\\r\\n}\\r\\n.winter .title{\\r\\n    background: #acc5b5;\\r\\n}\\r\\n.winter #logo{\\r\\n    background: #3b6978;\\r\\n    -webkit-box-shadow: 2px 2px 0px 2px #2d515e;\\r\\n    -moz-box-shadow: 2px 2px 0px 2px #2d515e;\\r\\n    box-shadow: 2px 2px 0px 2px #2d515e;\\r\\n}\\r\\n/*-------------------------------------------------------------------------------------*/\\r\\n/*jungle*/\\r\\n.jungle, .jungle .submitBtn, .jungle .colorList{\\r\\n    background: #96bb7c;\\r\\n}\\r\\n\\r\\n.jungle header, .jungle .contactPopUps{\\r\\n    background: #d6efc7;\\r\\n}\\r\\n\\r\\n.jungle header nav button{\\r\\n    background: #184d47;\\r\\n    -webkit-box-shadow: 0px 26px 0px 0px #133d38;\\r\\n    -moz-box-shadow: 0px 26px 0px 0px #133d38;\\r\\n    box-shadow: 0px 11px 0px 0px #133d38;\\r\\n}\\r\\n\\r\\n.jungle main, .jungle input::-webkit-auto-fill{\\r\\n    background: #eebb4d;\\r\\n    border-left-color: #d6a947;\\r\\n}\\r\\n.jungle .title{\\r\\n    background: #d6a947;\\r\\n}\\r\\n.jungle #logo{\\r\\n    background: #184d47;\\r\\n    -webkit-box-shadow: 2px 2px 0px 2px #133d38;\\r\\n    -moz-box-shadow: 2px 2px 0px 2px #133d38;\\r\\n    box-shadow: 2px 2px 0px 2px #133d38;\\r\\n}\\r\\n/*-------------------------------------------------------------------------------------*/\\r\\n/*pastel*/\\r\\n.pastel, .pastel .submitBtn, .pastel .colorList{\\r\\n    background: #e5cfe5;\\r\\n}\\r\\n\\r\\n.pastel header, .pastel .contactPopUps{\\r\\n    background: #f6def6;\\r\\n}\\r\\n\\r\\n.pastel header nav button{\\r\\n    background: #cff6cf;\\r\\n    -webkit-box-shadow: 0px 26px 0px 0px #b2dab2;\\r\\n    -moz-box-shadow: 0px 26px 0px 0px #b2dab2;\\r\\n    box-shadow: 0px 11px 0px 0px #b2dab2;\\r\\n    color: black;\\r\\n}\\r\\n\\r\\n.pastel main, .pastel input::-webkit-auto-fill{\\r\\n    background: #cfe5cf;\\r\\n    border-left-color: #accaac;\\r\\n}\\r\\n.pastel .title{\\r\\n    background: #accaac;\\r\\n}\\r\\n.pastel #logo{\\r\\n    background: #cff6cf;\\r\\n    -webkit-box-shadow: 2px 2px 0px 2px #b2dab2;\\r\\n    -moz-box-shadow: 2px 2px 0px 2px #b2dab2;\\r\\n    box-shadow: 2px 2px 0px 2px #b2dab2;\\r\\n}\\r\\n/*-------------------------------------------------------------------------------------*/\\r\\n/*fire*/\\r\\n.fire, .fire .submitBtn, .fire .colorList{\\r\\n    background: #2f2519;\\r\\n}\\r\\n\\r\\n.fire header, .fire .contactPopUps{\\r\\n    background: #fa7d09;\\r\\n}\\r\\n\\r\\n.fire header nav button{\\r\\n    background: #2f2519;\\r\\n    -webkit-box-shadow: 0px 26px 0px 0px #1f1811;\\r\\n    -moz-box-shadow: 0px 26px 0px 0px #1f1811;\\r\\n    box-shadow: 0px 11px 0px 0px #1f1811;\\r\\n}\\r\\n\\r\\n.fire main, .fire input::-webkit-auto-fill{\\r\\n    background: #ff4301;\\r\\n    border-left-color: #e63f02;\\r\\n}\\r\\n.fire .title{\\r\\n    background: #e63f02;\\r\\n}\\r\\n.fire #logo{\\r\\n    background: #2f2519;\\r\\n    -webkit-box-shadow: 2px 2px 0px 2px #1f1811;\\r\\n    -moz-box-shadow: 2px 2px 0px 2px #1f1811;\\r\\n    box-shadow: 2px 2px 0px 2px #1f1811;\\r\\n}\\r\\n/*-------------------------------------------------------------------------------------*/\\r\\n/*gold*/\\r\\n.gold, .gold .submitBtn, .gold .colorList{\\r\\n    background: #e0ab5b;\\r\\n}\\r\\n\\r\\n.gold header, .gold .contactPopUps{\\r\\n    background: #94784c;\\r\\n}\\r\\n\\r\\n.gold header nav button{\\r\\n    background: #6e4c41;\\r\\n    -webkit-box-shadow: 0px 26px 0px 0px #583d34;\\r\\n    -moz-box-shadow: 0px 26px 0px 0px #583d34;\\r\\n    box-shadow: 0px 11px 0px 0px #583d34;\\r\\n}\\r\\n\\r\\n.gold main, .gold input::-webkit-auto-fill{\\r\\n    background: #ffe76a;\\r\\n    border-left-color: #e2cc5c;\\r\\n}\\r\\n.gold .title{\\r\\n    background: #e2cc5c;\\r\\n}\\r\\n.gold #logo{\\r\\n    background: #6e4c41;\\r\\n    --webkit-box-shadow: 2px 2px 0px 2px #583d34;\\r\\n    -moz-box-shadow: 2px 2px 0px 2px #583d34;\\r\\n    box-shadow: 2px 2px 0px 2px #583d34;\\r\\n}\\r\\n/*-------------------------------------------------------------------------------------*/\\r\\n/*TEMPORARY*/\\r\\n.submitBtn:hover , .submitBtn:focus{\\r\\n    background: green;\\r\\n}\\r\\n \", \"\"]);\n\n\n//# sourceURL=webpack:///./src/stylesGlobal/paletteClasses.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesGlobal/style.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesGlobal/style.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"*, *::before, *::after {box-sizing: border-box}\\r\\nhtml ,body{\\r\\n   margin : 0;\\r\\n   padding: 0;\\r\\n}\\r\\n\\r\\n/*-----------------\\r\\nSTYLE TABLE :\\r\\n1- GLOBAL SELECTORS\\r\\n2- DISPLAY CLASSES\\r\\n/*-------------------\\r\\n  1- GLOBAL SELECTORS\\r\\n  -------------------*/\\r\\nbody {\\r\\noverflow: hidden;\\r\\nheight: 100vh;\\r\\nwidth: 100vw;  \\r\\ndisplay : grid;\\r\\ngrid-template-columns: 40% 20% 40%;\\r\\ngrid-template-rows: 15% 60% 25%;\\r\\ngrid-gap: 3%;\\r\\ngrid-template-areas: \\\"header header header\\\"\\r\\n                       \\\". main .\\\"\\r\\n                       \\\"palette footer footer\\\"; \\r\\nfont-family: \\\"Comic Sans MS\\\", cursive, sans-serif;\\r\\n}\\r\\n\\r\\n/*---------------------------------------------------------------------*/\\r\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/stylesGlobal/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/UI/button/button.css":
/*!**********************************!*\
  !*** ./src/UI/button/button.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./button.css */ \"./node_modules/css-loader/dist/cjs.js!./src/UI/button/button.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/UI/button/button.css?");

/***/ }),

/***/ "./src/UI/button/buttons.js":
/*!**********************************!*\
  !*** ./src/UI/button/buttons.js ***!
  \**********************************/
/*! exports provided: createSubmitBtn, createCancelBtn, createRefreshBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createSubmitBtn\", function() { return createSubmitBtn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createCancelBtn\", function() { return createCancelBtn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createRefreshBtn\", function() { return createRefreshBtn; });\n/* harmony import */ var _button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.css */ \"./src/UI/button/button.css\");\n/* harmony import */ var _button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_button_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actions_domElements_removeElem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/domElements/removeElem */ \"./src/actions/domElements/removeElem.js\");\n\r\n\r\n\r\nconst createSubmitBtn = (value,func) => {\r\n    const btn = createBtn();\r\n    btn.setAttribute(\"class\",\"submitBtn\")\r\n    btn.value = value;\r\n    btn.addEventListener(\"click\",(event)=>{\r\n        if(func()){\r\n            Object(_actions_domElements_removeElem__WEBPACK_IMPORTED_MODULE_1__[\"removeTargetParent\"])(event); \r\n        }\r\n    });\r\n    return btn;\r\n}\r\n\r\nconst createCancelBtn = () => {\r\n    const btn = createBtn();\r\n    btn.setAttribute(\"class\",\"cancelBtn\")\r\n    btn.value = 'X';\r\n    btn.addEventListener(\"click\",(event)=>{Object(_actions_domElements_removeElem__WEBPACK_IMPORTED_MODULE_1__[\"removeTargetParent\"])(event)});\r\n    return btn;\r\n}\r\n\r\nconst createRefreshBtn = () =>{\r\n    const btn = createBtn();\r\n    btn.setAttribute(\"class\",\"refreshBtn\");\r\n    btn.value = \"REFRESH\";\r\n    btn.addEventListener(\"click\",()=>{window.location.reload();});\r\n    return btn;\r\n}\r\n\r\nconst createBtn = () =>{\r\n    const btn = document.createElement(\"input\");\r\n    btn.setAttribute(\"type\" , \"button\");\r\n    return btn;\r\n}\n\n//# sourceURL=webpack:///./src/UI/button/buttons.js?");

/***/ }),

/***/ "./src/UI/form/form.css":
/*!******************************!*\
  !*** ./src/UI/form/form.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./form.css */ \"./node_modules/css-loader/dist/cjs.js!./src/UI/form/form.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/UI/form/form.css?");

/***/ }),

/***/ "./src/UI/form/form.js":
/*!*****************************!*\
  !*** ./src/UI/form/form.js ***!
  \*****************************/
/*! exports provided: createForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createForm\", function() { return createForm; });\n/* harmony import */ var _button_buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../button/buttons */ \"./src/UI/button/buttons.js\");\n/* harmony import */ var _input_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../input/input */ \"./src/UI/input/input.js\");\n/* harmony import */ var _utilities_typeCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/typeCheck */ \"./src/utilities/typeCheck.js\");\n/* harmony import */ var _form_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form.css */ \"./src/UI/form/form.css\");\n/* harmony import */ var _form_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_form_css__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\r\n\r\nconst createForm = (formStorage, metaData,onSubmit, inputValues) =>{\r\n    if(Object(_utilities_typeCheck__WEBPACK_IMPORTED_MODULE_2__[\"isObject\"])(formStorage) && Object(_utilities_typeCheck__WEBPACK_IMPORTED_MODULE_2__[\"isObject\"])(metaData) && Object(_utilities_typeCheck__WEBPACK_IMPORTED_MODULE_2__[\"isFunction\"])(onSubmit) && Object(_utilities_typeCheck__WEBPACK_IMPORTED_MODULE_2__[\"isObject\"])(inputValues)){  \r\n        const formTemplate = JSON.parse(JSON.stringify(formStorage));\r\n        const form = createFormElement(metaData.formId,metaData.formClass);\r\n        const submitBtn = Object(_button_buttons__WEBPACK_IMPORTED_MODULE_0__[\"createSubmitBtn\"])(\"submit\",()=>{if(onSubmit(formTemplate)) return true;});\r\n        const inputFields = createInputsWithEventHandler(formTemplate,submitBtn,inputValues);\r\n        form.append(inputFields,submitBtn);\r\n        return form;\r\n    }\r\n}\r\n\r\nconst createFormElement = (id, styleClass) => {\r\n    const form = document.createElement(\"form\");\r\n    form.setAttribute(\"id\",id);\r\n    form.className = styleClass;\r\n    return form;\r\n}\r\n\r\nconst  createInputsWithEventHandler = (formTemplate,submitBtn,inputValues) => {\r\n    const inputFields = Object(_input_input__WEBPACK_IMPORTED_MODULE_1__[\"createInputs\"])(inputValues,formTemplate);\r\n    for(let input of inputFields.childNodes){\r\n        input.addEventListener(\"input\",()=>{formValidationCheck(formTemplate,submitBtn);})\r\n    }\r\n    return inputFields; \r\n}\r\n\r\nconst formValidationCheck = (formTemplate,submitBtn) =>{\r\n    for(let field in formTemplate){\r\n        if(formTemplate[field].hasChanged && !formTemplate[field].isValid){\r\n            submitBtn.classList.contains(\"invalidSubmit\")? null : submitBtn.classList.add(\"invalidSubmit\");\r\n            break;\r\n        }\r\n        submitBtn.classList.contains(\"invalidSubmit\")? submitBtn.classList.remove(\"invalidSubmit\") : null;\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/UI/form/form.js?");

/***/ }),

/***/ "./src/UI/input/input.css":
/*!********************************!*\
  !*** ./src/UI/input/input.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./input.css */ \"./node_modules/css-loader/dist/cjs.js!./src/UI/input/input.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/UI/input/input.css?");

/***/ }),

/***/ "./src/UI/input/input.js":
/*!*******************************!*\
  !*** ./src/UI/input/input.js ***!
  \*******************************/
/*! exports provided: createInputs, createInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createInputs\", function() { return createInputs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createInput\", function() { return createInput; });\n/* harmony import */ var _utilities_validation_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/validation/validation */ \"./src/utilities/validation/validation.js\");\n/* harmony import */ var _utilities_typeCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/typeCheck */ \"./src/utilities/typeCheck.js\");\n/* harmony import */ var _input_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input.css */ \"./src/UI/input/input.css\");\n/* harmony import */ var _input_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_input_css__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\n\r\n\r\nconst createInputs = (inputValueObject,form) =>{\r\n    const inputFields = document.createElement(\"div\");\r\n    if(Object(_utilities_typeCheck__WEBPACK_IMPORTED_MODULE_1__[\"isObject\"])(inputValueObject)){\r\n        for (const value in inputValueObject) {\r\n            inputFields.appendChild(createInput(inputValueObject[value],form));\r\n        }  \r\n    }\r\n    return inputFields;\r\n}\r\n\r\nconst createInput = (inputObj,form) => {\r\n    const inputAndLabel = document.createElement(\"div\");\r\n    inputAndLabel.setAttribute(\"class\",\"inputAndLabel\");\r\n    const label = createLabel(inputObj.label);\r\n    const inputBox = createInputBox(inputObj.id,inputObj.type,form);\r\n    inputAndLabel.append(label,inputBox);\r\n    return inputAndLabel;\r\n}\r\n\r\nconst createInputBox = (id,type,form) => {\r\n    const inputBox = document.createElement(\"input\");\r\n    inputBox.setAttribute(\"id\" , id);                                                \r\n    inputBox.setAttribute(\"class\" , \"inputBox\");\r\n    inputBox.addEventListener(\"input\",()=>{onInput({element : inputBox, id : id,\r\n    type : type},form)});\r\n    return inputBox;\r\n}\r\n\r\nconst onInput = (input,form) =>{\r\n    form[input.id].value = input.element.value;\r\n        const isValid = Object(_utilities_validation_validation__WEBPACK_IMPORTED_MODULE_0__[\"validateInput\"])({value : input.element.value, type : input.type});\r\n        form[input.id].isValid = isValid;\r\n        form[input.id].hasChanged = true;\r\n        toggleValidationClasses(isValid,input.element);\r\n}\r\n\r\nconst toggleValidationClasses = (isValid , inputBox) =>{\r\n    switch(isValid){\r\n        case true : \r\n            toggleRightCredintialsClass(inputBox);\r\n            break;\r\n        case false :  \r\n            toggleWrongCredintialsClass(inputBox);\r\n            break;\r\n    }\r\n}\r\n\r\nconst toggleRightCredintialsClass = (inputBox) =>{\r\n    if(!inputBox.classList.contains(\"rightCredintials\")){\r\n        if(inputBox.classList.contains(\"wrongCredintials\")){\r\n             inputBox.classList.replace(\"wrongCredintials\",\"rightCredintials\");\r\n        }else{\r\n            inputBox.classList.add(\"rightCredintials\");\r\n        }\r\n    }\r\n}\r\n\r\nconst toggleWrongCredintialsClass = (inputBox) =>{\r\n    if(!inputBox.classList.contains(\"wrongCredintials\")){\r\n        if(inputBox.classList.contains(\"rightCredintials\")){\r\n                inputBox.classList.replace(\"rightCredintials\",\"wrongCredintials\");\r\n        }else{\r\n            inputBox.classList.add(\"wrongCredintials\");\r\n        }\r\n    }\r\n}\r\n\r\n\r\nconst createLabel = (value) => {\r\n    const label = document.createElement(\"label\");\r\n    label.setAttribute(\"class\" , \"label\");\r\n    label.innerText = value;\r\n    return label;\r\n}\n\n//# sourceURL=webpack:///./src/UI/input/input.js?");

/***/ }),

/***/ "./src/UI/modal/modal.css":
/*!********************************!*\
  !*** ./src/UI/modal/modal.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./modal.css */ \"./node_modules/css-loader/dist/cjs.js!./src/UI/modal/modal.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/UI/modal/modal.css?");

/***/ }),

/***/ "./src/UI/modal/modal.js":
/*!*******************************!*\
  !*** ./src/UI/modal/modal.js ***!
  \*******************************/
/*! exports provided: createModal, removeModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createModal\", function() { return createModal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeModal\", function() { return removeModal; });\n/* harmony import */ var _modal_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.css */ \"./src/UI/modal/modal.css\");\n/* harmony import */ var _modal_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modal_css__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconst createModal = () =>{\r\n    const modal = document.createElement('div');\r\n    modal.className = \"modal\";\r\n    return modal\r\n}\r\n\r\nconst removeModal = () =>{\r\n    const modal = document.querySelector('.modal');\r\n    modal.parentNode.removeChild(modal);\r\n}\n\n//# sourceURL=webpack:///./src/UI/modal/modal.js?");

/***/ }),

/***/ "./src/actions/contacts/contactsActions.js":
/*!*************************************************!*\
  !*** ./src/actions/contacts/contactsActions.js ***!
  \*************************************************/
/*! exports provided: onSubmit, onEdit, onDelete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _onSubmit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onSubmit */ \"./src/actions/contacts/onSubmit.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"onSubmit\", function() { return _onSubmit__WEBPACK_IMPORTED_MODULE_0__[\"onSubmit\"]; });\n\n/* harmony import */ var _onEdit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onEdit */ \"./src/actions/contacts/onEdit.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"onEdit\", function() { return _onEdit__WEBPACK_IMPORTED_MODULE_1__[\"onEdit\"]; });\n\n/* harmony import */ var _onDelete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./onDelete */ \"./src/actions/contacts/onDelete.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"onDelete\", function() { return _onDelete__WEBPACK_IMPORTED_MODULE_2__[\"onDelete\"]; });\n\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/actions/contacts/contactsActions.js?");

/***/ }),

/***/ "./src/actions/contacts/onDelete.js":
/*!******************************************!*\
  !*** ./src/actions/contacts/onDelete.js ***!
  \******************************************/
/*! exports provided: onDelete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onDelete\", function() { return onDelete; });\n/* harmony import */ var _errHandler_errHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../errHandler/errHandler */ \"./src/errHandler/errHandler.js\");\n/* harmony import */ var _registration_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../registration/user */ \"./src/registration/user.js\");\n/* harmony import */ var _constants_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/const */ \"./src/constants/const.js\");\n\r\n\r\n\r\n\r\nconst onDelete = (index,id) =>{\r\n    fetch(_constants_const__WEBPACK_IMPORTED_MODULE_2__[\"proxyUrl\"] + 'https://contact-book-backend.herokuapp.com/contactDelete',{\r\n            method : 'DELETE',\r\n            headers : {\r\n                'Accept': 'application/json',\r\n                'Content-Type': 'application/json',\r\n                \"x-access-token\" : _registration_user__WEBPACK_IMPORTED_MODULE_1__[\"userInfoCopy\"].token\r\n            },\r\n            body : JSON.stringify({\r\n                id : id\r\n            })\r\n            }).then((res)=>{\r\n                if(res.status === 204){\r\n                    _constants_const__WEBPACK_IMPORTED_MODULE_2__[\"contactList\"].removeChild(_constants_const__WEBPACK_IMPORTED_MODULE_2__[\"contactList\"].childNodes[index]);\r\n                }else{\r\n                    Object(_errHandler_errHandler__WEBPACK_IMPORTED_MODULE_0__[\"displayErrScreen\"])(\"could not delete contact\");\r\n                }\r\n            }).catch((err)=>{\r\n                Object(_errHandler_errHandler__WEBPACK_IMPORTED_MODULE_0__[\"displayErrScreen\"])(\"server error, could not delete contact\");\r\n            });\r\n}\n\n//# sourceURL=webpack:///./src/actions/contacts/onDelete.js?");

/***/ }),

/***/ "./src/actions/contacts/onEdit.js":
/*!****************************************!*\
  !*** ./src/actions/contacts/onEdit.js ***!
  \****************************************/
/*! exports provided: onEdit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onEdit\", function() { return onEdit; });\n/* harmony import */ var _contacts_contactCreate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../contacts/contactCreate */ \"./src/contacts/contactCreate.js\");\n/* harmony import */ var _utilities_validation_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/validation/validation */ \"./src/utilities/validation/validation.js\");\n/* harmony import */ var _domElements_buttonManipulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../domElements/buttonManipulation */ \"./src/actions/domElements/buttonManipulation.js\");\n/* harmony import */ var _utilities_extract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/extract */ \"./src/utilities/extract.js\");\n/* harmony import */ var _errHandler_errHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../errHandler/errHandler */ \"./src/errHandler/errHandler.js\");\n/* harmony import */ var _registration_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../registration/user */ \"./src/registration/user.js\");\n/* harmony import */ var _constants_const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants/const */ \"./src/constants/const.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst onEdit = (targetedContact,newContactInfo,contactId) =>{\r\n    if(Object(_utilities_validation_validation__WEBPACK_IMPORTED_MODULE_1__[\"validateContact\"])(newContactInfo)){\r\n        editContact(targetedContact,newContactInfo,contactId);\r\n        return true;\r\n    }else{\r\n        Object(_domElements_buttonManipulation__WEBPACK_IMPORTED_MODULE_2__[\"submitBtnToAlert\"])(event);\r\n        return false;\r\n    }\r\n}\r\n\r\nconst editContact = (targetedContact, newContactInfo,contactId) =>{\r\n    const contact = Object(_utilities_extract__WEBPACK_IMPORTED_MODULE_3__[\"extractContactValues\"])(newContactInfo);\r\n    contact.contactId = contactId;\r\n    fetch(_constants_const__WEBPACK_IMPORTED_MODULE_6__[\"proxyUrl\"] + 'https://contact-book-backend.herokuapp.com/contactEdit',{\r\n            method : 'PUT',\r\n            headers : {\r\n                'Accept': 'application/json',\r\n                'Content-Type': 'application/json',\r\n                \"x-access-token\" : _registration_user__WEBPACK_IMPORTED_MODULE_5__[\"userInfoCopy\"].token\r\n            },\r\n            body : JSON.stringify(contact)\r\n            }).then((res)=>{\r\n                return res.json();\r\n            }).then((contact)=>{\r\n                const extractedContactInfo = Object(_utilities_extract__WEBPACK_IMPORTED_MODULE_3__[\"extractContact\"])(contact);\r\n                const newContact = Object(_contacts_contactCreate__WEBPACK_IMPORTED_MODULE_0__[\"createContact\"])(extractedContactInfo);\r\n                editContactList(targetedContact, newContact);\r\n            }).catch((err)=>{\r\n                Object(_errHandler_errHandler__WEBPACK_IMPORTED_MODULE_4__[\"displayErrScreen\"])(\"could not edit contact\");\r\n            });\r\n}\r\n\r\nconst editContactList = (oldContact ,newContact) =>{\r\n    oldContact.parentNode.replaceChild(newContact,oldContact);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/actions/contacts/onEdit.js?");

/***/ }),

/***/ "./src/actions/contacts/onSubmit.js":
/*!******************************************!*\
  !*** ./src/actions/contacts/onSubmit.js ***!
  \******************************************/
/*! exports provided: onSubmit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onSubmit\", function() { return onSubmit; });\n/* harmony import */ var _utilities_validation_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/validation/validation */ \"./src/utilities/validation/validation.js\");\n/* harmony import */ var _domElements_buttonManipulation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domElements/buttonManipulation */ \"./src/actions/domElements/buttonManipulation.js\");\n/* harmony import */ var _domElements_addToDom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../domElements/addToDom */ \"./src/actions/domElements/addToDom.js\");\n/* harmony import */ var _registration_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../registration/user */ \"./src/registration/user.js\");\n/* harmony import */ var _utilities_extract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/extract */ \"./src/utilities/extract.js\");\n/* harmony import */ var _errHandler_errHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../errHandler/errHandler */ \"./src/errHandler/errHandler.js\");\n/* harmony import */ var _constants_const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants/const */ \"./src/constants/const.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst onSubmit = (contactInfo) => {\r\n    if(Object(_utilities_validation_validation__WEBPACK_IMPORTED_MODULE_0__[\"validateContact\"])(contactInfo)){\r\n        addContact(contactInfo);\r\n        return true;\r\n    }else{\r\n        console.log(\"wrong data\");\r\n        Object(_domElements_buttonManipulation__WEBPACK_IMPORTED_MODULE_1__[\"submitBtnToAlert\"])(event);\r\n        return false;\r\n    }\r\n}\r\n\r\nconst addContact = (contactInfo) =>{\r\n    const extractedContact = Object(_utilities_extract__WEBPACK_IMPORTED_MODULE_4__[\"extractContactValues\"])(contactInfo);\r\n    extractedContact.userId = _registration_user__WEBPACK_IMPORTED_MODULE_3__[\"userInfoCopy\"].userId;\r\n    fetch(_constants_const__WEBPACK_IMPORTED_MODULE_6__[\"proxyUrl\"] + 'https://contact-book-backend.herokuapp.com/contactAdd',{\r\n            method : 'PUT',\r\n            headers : {\r\n                'Accept': 'application/json',\r\n                'Content-Type': 'application/json',\r\n                \"x-access-token\" : _registration_user__WEBPACK_IMPORTED_MODULE_3__[\"userInfoCopy\"].token\r\n            },\r\n            body : JSON.stringify(extractedContact)\r\n            }).then((res)=>{\r\n                return res.json();\r\n            }).then((contact)=>{\r\n                if (contact){\r\n                    Object(_domElements_addToDom__WEBPACK_IMPORTED_MODULE_2__[\"addContactToDom\"])(contact);\r\n                }\r\n            }).catch((err)=>{\r\n                Object(_errHandler_errHandler__WEBPACK_IMPORTED_MODULE_5__[\"displayErrScreen\"])(\"could not submit contact\");\r\n            });\r\n}\r\n\n\n//# sourceURL=webpack:///./src/actions/contacts/onSubmit.js?");

/***/ }),

/***/ "./src/actions/domElements/addToDom.js":
/*!*********************************************!*\
  !*** ./src/actions/domElements/addToDom.js ***!
  \*********************************************/
/*! exports provided: addContactToDom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addContactToDom\", function() { return addContactToDom; });\n/* harmony import */ var _contacts_contactCreate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../contacts/contactCreate */ \"./src/contacts/contactCreate.js\");\n/* harmony import */ var _utilities_extract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/extract */ \"./src/utilities/extract.js\");\n/* harmony import */ var _constants_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/const */ \"./src/constants/const.js\");\n\r\n\r\n\r\n\r\n\r\nconst addContactToDom = (contactInfo) => {\r\n    const contactInfoExtract = Object(_utilities_extract__WEBPACK_IMPORTED_MODULE_1__[\"extractContact\"])(contactInfo);\r\n    const contact = Object(_contacts_contactCreate__WEBPACK_IMPORTED_MODULE_0__[\"createContact\"])(contactInfoExtract);\r\n    _constants_const__WEBPACK_IMPORTED_MODULE_2__[\"contactList\"].appendChild(contact);;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/actions/domElements/addToDom.js?");

/***/ }),

/***/ "./src/actions/domElements/buttonManipulation.js":
/*!*******************************************************!*\
  !*** ./src/actions/domElements/buttonManipulation.js ***!
  \*******************************************************/
/*! exports provided: submitBtnToAlert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"submitBtnToAlert\", function() { return submitBtnToAlert; });\nconst submitBtnToAlert = (event) =>{\r\n    event.target.classList.contains(\"invalidSubmit\") ? null : event.target.classList.add(\"invalidSubmit\")\r\n}\n\n//# sourceURL=webpack:///./src/actions/domElements/buttonManipulation.js?");

/***/ }),

/***/ "./src/actions/domElements/removeElem.js":
/*!***********************************************!*\
  !*** ./src/actions/domElements/removeElem.js ***!
  \***********************************************/
/*! exports provided: removeElemByEventTarget, removeTargetParent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeElemByEventTarget\", function() { return removeElemByEventTarget; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeTargetParent\", function() { return removeTargetParent; });\nconst removeElemByEventTarget = (event) => {\r\n    event.target.parentNode.removeChild(event.target);\r\n}\r\n\r\nconst removeTargetParent = (event) =>{\r\n    const targetParent = event.target.parentNode;\r\n    targetParent.parentNode.removeChild(targetParent);\r\n}\n\n//# sourceURL=webpack:///./src/actions/domElements/removeElem.js?");

/***/ }),

/***/ "./src/actions/registartion/onSignIn.js":
/*!**********************************************!*\
  !*** ./src/actions/registartion/onSignIn.js ***!
  \**********************************************/
/*! exports provided: onSignIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onSignIn\", function() { return onSignIn; });\n/* harmony import */ var _utilities_validation_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/validation/validation */ \"./src/utilities/validation/validation.js\");\n/* harmony import */ var _utilities_admittion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/admittion */ \"./src/utilities/admittion.js\");\n/* harmony import */ var _domElements_buttonManipulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../domElements/buttonManipulation */ \"./src/actions/domElements/buttonManipulation.js\");\n/* harmony import */ var _errHandler_errHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../errHandler/errHandler */ \"./src/errHandler/errHandler.js\");\n/* harmony import */ var _constants_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/const */ \"./src/constants/const.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst onSignIn = (userInfo) =>{\r\n    if(Object(_utilities_validation_validation__WEBPACK_IMPORTED_MODULE_0__[\"validateSignInForm\"])(userInfo)){\r\n        signUser(userInfo);\r\n        return true;\r\n    }else{\r\n        console.log(\"wrong data\");\r\n        Object(_domElements_buttonManipulation__WEBPACK_IMPORTED_MODULE_2__[\"submitBtnToAlert\"])(event);\r\n        return false;\r\n    }\r\n}\r\n\r\nconst signUser = (userInfo) =>{\r\n    fetch(_constants_const__WEBPACK_IMPORTED_MODULE_4__[\"proxyUrl\"] + \"https://contact-book-backend.herokuapp.com/signIn\",{\r\n    method : 'POST',\r\n    headers : {\r\n        'Accept': 'application/json',\r\n        'Content-Type': 'application/json'\r\n    },\r\n    body : JSON.stringify({\r\n        email : userInfo.signInEmail.value,\r\n        password : userInfo.signInPassword.value\r\n    })\r\n    }).then((res)=>{\r\n        if(res.ok){\r\n            return res.json();\r\n        }else{\r\n            return null;\r\n        }\r\n    }).then((user)=>{\r\n        Object(_utilities_admittion__WEBPACK_IMPORTED_MODULE_1__[\"userAdmittionHandler\"])(user,\"user has not been sent from server\");\r\n    }).catch((err)=>{\r\n        Object(_errHandler_errHandler__WEBPACK_IMPORTED_MODULE_3__[\"displayErrScreen\"])(\"could not log in\");\r\n    })\r\n}\r\n\n\n//# sourceURL=webpack:///./src/actions/registartion/onSignIn.js?");

/***/ }),

/***/ "./src/actions/registartion/onSignOut.js":
/*!***********************************************!*\
  !*** ./src/actions/registartion/onSignOut.js ***!
  \***********************************************/
/*! exports provided: onSignOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onSignOut\", function() { return onSignOut; });\n/* harmony import */ var _switchPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../switchPage */ \"./src/switchPage.js\");\n/* harmony import */ var _registration_signIn_signInForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../registration/signIn/signInForm */ \"./src/registration/signIn/signInForm.js\");\n/* harmony import */ var _registration_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../registration/user */ \"./src/registration/user.js\");\n/* harmony import */ var _constants_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/const */ \"./src/constants/const.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst onSignOut = () =>{\r\n    Object(_registration_user__WEBPACK_IMPORTED_MODULE_2__[\"updateUser\"])(null);\r\n    clearContactList();\r\n    changeStyleToDefault();\r\n    goToSignIn();\r\n}\r\n\r\nconst clearContactList = () =>{\r\n    _constants_const__WEBPACK_IMPORTED_MODULE_3__[\"contactList\"].innerHTML = \"\";\r\n    _constants_const__WEBPACK_IMPORTED_MODULE_3__[\"title\"].innerText = \"\";\r\n}\r\n\r\nconst changeStyleToDefault = () =>{\r\n    _constants_const__WEBPACK_IMPORTED_MODULE_3__[\"body\"].className = \"default\";\r\n}\r\n\r\nconst goToSignIn = () =>{\r\n    Object(_registration_signIn_signInForm__WEBPACK_IMPORTED_MODULE_1__[\"appendSignInForm\"])();\r\n    Object(_switchPage__WEBPACK_IMPORTED_MODULE_0__[\"pageChange\"])('signIn');\r\n}\n\n//# sourceURL=webpack:///./src/actions/registartion/onSignOut.js?");

/***/ }),

/***/ "./src/actions/registartion/onSignUp.js":
/*!**********************************************!*\
  !*** ./src/actions/registartion/onSignUp.js ***!
  \**********************************************/
/*! exports provided: onSignUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onSignUp\", function() { return onSignUp; });\n/* harmony import */ var _utilities_admittion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/admittion */ \"./src/utilities/admittion.js\");\n/* harmony import */ var _utilities_validation_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/validation/validation */ \"./src/utilities/validation/validation.js\");\n/* harmony import */ var _domElements_buttonManipulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../domElements/buttonManipulation */ \"./src/actions/domElements/buttonManipulation.js\");\n/* harmony import */ var _errHandler_errHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../errHandler/errHandler */ \"./src/errHandler/errHandler.js\");\n/* harmony import */ var _constants_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/const */ \"./src/constants/const.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst onSignUp = (userInfo) =>{\r\n    if(Object(_utilities_validation_validation__WEBPACK_IMPORTED_MODULE_1__[\"validateSignUpForm\"])(userInfo)){\r\n        signUser(userInfo);\r\n        return true;\r\n    }else{\r\n        Object(_domElements_buttonManipulation__WEBPACK_IMPORTED_MODULE_2__[\"submitBtnToAlert\"])(event);\r\n        return false;\r\n    }\r\n}\r\n\r\nconst signUser = (userInfo) =>{\r\n    fetch(_constants_const__WEBPACK_IMPORTED_MODULE_4__[\"proxyUrl\"] + 'https://contact-book-backend.herokuapp.com/signUp',{\r\n        method : 'POST',\r\n        body : JSON.stringify({ \r\n            firstName : userInfo.signUpFirstName.value,\r\n            lastName : userInfo.signUpLastName.value,\r\n            email : userInfo.signUpEmail.value,\r\n            password : userInfo.signUpPassword.value\r\n        }),\r\n        headers : {\r\n            'Accept': 'application/json',\r\n            'Content-Type': 'application/json',\r\n        },\r\n        }).then((res)=>{\r\n            return  res.json();\r\n        }).then((user)=>{\r\n            Object(_utilities_admittion__WEBPACK_IMPORTED_MODULE_0__[\"userAdmittionHandler\"])(user,\"user has not been registered\");\r\n        }).catch((err)=>{\r\n            Object(_errHandler_errHandler__WEBPACK_IMPORTED_MODULE_3__[\"displayErrScreen\"])(\"could not register user\");\r\n        });\r\n}\r\n\n\n//# sourceURL=webpack:///./src/actions/registartion/onSignUp.js?");

/***/ }),

/***/ "./src/actions/registartion/registrationActions.js":
/*!*********************************************************!*\
  !*** ./src/actions/registartion/registrationActions.js ***!
  \*********************************************************/
/*! exports provided: onSignIn, onSignUp, onSignOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _onSignIn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onSignIn */ \"./src/actions/registartion/onSignIn.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"onSignIn\", function() { return _onSignIn__WEBPACK_IMPORTED_MODULE_0__[\"onSignIn\"]; });\n\n/* harmony import */ var _onSignUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onSignUp */ \"./src/actions/registartion/onSignUp.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"onSignUp\", function() { return _onSignUp__WEBPACK_IMPORTED_MODULE_1__[\"onSignUp\"]; });\n\n/* harmony import */ var _onSignOut__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./onSignOut */ \"./src/actions/registartion/onSignOut.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"onSignOut\", function() { return _onSignOut__WEBPACK_IMPORTED_MODULE_2__[\"onSignOut\"]; });\n\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/actions/registartion/registrationActions.js?");

/***/ }),

/***/ "./src/actions/style/style.js":
/*!************************************!*\
  !*** ./src/actions/style/style.js ***!
  \************************************/
/*! exports provided: updateStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateStyle\", function() { return updateStyle; });\n/* harmony import */ var _constants_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/const */ \"./src/constants/const.js\");\n\r\n\r\nconst updateStyle = (style, userId,token) =>{\r\n    fetch(_constants_const__WEBPACK_IMPORTED_MODULE_0__[\"proxyUrl\"] + 'https://contact-book-backend.herokuapp.com/selectStyle',{\r\n          method : 'POST',\r\n          headers : {\r\n              'Content-Type': 'application/json',\r\n              \"x-access-token\" : token\r\n          },\r\n          body : JSON.stringify({\r\n            data : {\r\n                style : style,\r\n                id : userId\r\n            }\r\n          })\r\n        }).catch((err)=>{\r\n          console.log(err);\r\n        });\r\n}\n\n//# sourceURL=webpack:///./src/actions/style/style.js?");

/***/ }),

/***/ "./src/constants/const.js":
/*!********************************!*\
  !*** ./src/constants/const.js ***!
  \********************************/
/*! exports provided: proxyUrl, contactList, body, title */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"proxyUrl\", function() { return proxyUrl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contactList\", function() { return contactList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"body\", function() { return body; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"title\", function() { return title; });\nconst proxyUrl = \"https://aqueous-coast-32163.herokuapp.com/\";\r\nconst contactList = document.querySelector(\"#contactsList\");\r\nconst body = document.querySelector(\"body\");\r\nconst title = document.querySelector(\".title\");\n\n//# sourceURL=webpack:///./src/constants/const.js?");

/***/ }),

/***/ "./src/contacts/contactCreate.js":
/*!***************************************!*\
  !*** ./src/contacts/contactCreate.js ***!
  \***************************************/
/*! exports provided: createContact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createContact\", function() { return createContact; });\n/* harmony import */ var _actions_contacts_contactsActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/contacts/contactsActions */ \"./src/actions/contacts/contactsActions.js\");\n/* harmony import */ var _editClickEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editClickEvent */ \"./src/contacts/editClickEvent.js\");\n/* harmony import */ var _contactInfoCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactInfoCard */ \"./src/contacts/contactInfoCard.js\");\n/* harmony import */ var _utilities_getInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/getInfo */ \"./src/utilities/getInfo.js\");\n/* harmony import */ var _styles_contactCreate_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/contactCreate.css */ \"./src/contacts/styles/contactCreate.css\");\n/* harmony import */ var _styles_contactCreate_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_contactCreate_css__WEBPACK_IMPORTED_MODULE_4__);\n\r\n\r\n\r\n\r\n\r\n\r\nconst createContact = (contactInfo) => {\r\n    const contactName = createContactName(contactInfo);\r\n    const contContainer = createContactContainer(contactName,contactInfo.id);\r\n    return contContainer;\r\n}\r\n\r\nconst createContactName = (contactInfo) => {\r\n    const contact = document.createElement(\"div\");\r\n    contact.innerText = contactInfo.firstName + \" \" + contactInfo.lastName; \r\n    contact.addEventListener(\"click\",()=>{displayInfoCard(contactInfo, event.target.parentNode)});\r\n    return contact;\r\n}\r\n\r\nconst displayInfoCard = (contactInfo, contElem) =>{\r\n    const infoCard = Object(_contactInfoCard__WEBPACK_IMPORTED_MODULE_2__[\"createInfoCard\"])(contactInfo);\r\n    contElem.appendChild(infoCard);\r\n}\r\n\r\nconst createContactContainer = (contact,contactId) =>{\r\n    const container = document.createElement(\"div\");\r\n    container.className = \"contact\";\r\n    container.append(contact, createEditBtn(()=>Object(_editClickEvent__WEBPACK_IMPORTED_MODULE_1__[\"onEditClick\"])(contactId)), createDeleteBtn(container,contactId));\r\n    return container;\r\n}\r\n\r\n//change the setAttribute calls either to a function or to object.assign\r\nconst createEditBtn = (onEdit) => {\r\n    let editImg = document.createElement(\"IMG\");\r\n    editImg.setAttribute(\"src\",\"src/images/icon.png\");\r\n    editImg.setAttribute(\"alt\",\"edit icon\");\r\n    editImg.setAttribute(\"class\",\"contactButtons\");\r\n    editImg.addEventListener(\"click\",onEdit)\r\n    return editImg; \r\n}\r\n\r\nconst createDeleteBtn = (contact,contactId) => {\r\n    let deleteBtn = document.createElement(\"div\");\r\n    deleteBtn.innerText = \" x \";\r\n    deleteBtn.setAttribute(\"class\",\"contactButtons\");\r\n    deleteBtn.addEventListener(\"click\",()=>Object(_actions_contacts_contactsActions__WEBPACK_IMPORTED_MODULE_0__[\"onDelete\"])(Object(_utilities_getInfo__WEBPACK_IMPORTED_MODULE_3__[\"getIndexOfNode\"])(contact),contactId));\r\n    return deleteBtn;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/contacts/contactCreate.js?");

/***/ }),

/***/ "./src/contacts/contactForm/contactForm.js":
/*!*************************************************!*\
  !*** ./src/contacts/contactForm/contactForm.js ***!
  \*************************************************/
/*! exports provided: displayContactForm, displayEditForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayContactForm\", function() { return displayContactForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayEditForm\", function() { return displayEditForm; });\n/* harmony import */ var _actions_contacts_contactsActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions/contacts/contactsActions */ \"./src/actions/contacts/contactsActions.js\");\n/* harmony import */ var _UI_form_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../UI/form/form */ \"./src/UI/form/form.js\");\n/* harmony import */ var _UI_button_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../UI/button/buttons */ \"./src/UI/button/buttons.js\");\n/* harmony import */ var _formTemplate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formTemplate */ \"./src/contacts/contactForm/formTemplate.js\");\n/* harmony import */ var _styles_contactPopUp_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/contactPopUp.css */ \"./src/contacts/styles/contactPopUp.css\");\n/* harmony import */ var _styles_contactPopUp_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_contactPopUp_css__WEBPACK_IMPORTED_MODULE_4__);\n\r\n\r\n\r\n\r\n\r\n\r\nconst contactMain = document.querySelector(\"#contactMain\");\r\n\r\n\r\nconst inputValues = {\r\n    firstName : {\r\n        id : \"contactFirstName\",\r\n        label : \"First Name : \",\r\n        type : \"name\"\r\n    },\r\n    lastName : {\r\n        id : \"contactLastName\",\r\n        label : \"Last Name : \",\r\n        type : \"name\"\r\n    },\r\n    Email : {\r\n        id : \"contactEmail\",\r\n        label : \"Email : \",\r\n        type : \"email\"\r\n    },\r\n    phoneNumber : {\r\n        id : \"contactPhoneNumber\",\r\n        label : \"Phone Number : \",\r\n        type : \"phoneNumber\"\r\n    },\r\n}\r\n\r\nconst formMetaData = {\r\n    formId : \"contactForm\",\r\n    formClass : \"contactPopUps\"\r\n}\r\n\r\nconst displayContactForm = () => {\r\n    const form = Object(_UI_form_form__WEBPACK_IMPORTED_MODULE_1__[\"createForm\"])(_formTemplate__WEBPACK_IMPORTED_MODULE_3__[\"Form\"],formMetaData,_actions_contacts_contactsActions__WEBPACK_IMPORTED_MODULE_0__[\"onSubmit\"],inputValues);\r\n    addCancelBtnToForm(form);\r\n    appendToContactMain(form);\r\n}\r\n\r\nconst displayEditForm = (targetedContact , onEdit,contactId) =>{\r\n    const form = Object(_UI_form_form__WEBPACK_IMPORTED_MODULE_1__[\"createForm\"])(_formTemplate__WEBPACK_IMPORTED_MODULE_3__[\"Form\"],formMetaData,(formTemp)=>onEdit(targetedContact,formTemp,contactId),inputValues);\r\n    addCancelBtnToForm(form);\r\n    contactMain.appendChild(form);\r\n}\r\n\r\nconst addCancelBtnToForm = (formElement) =>{\r\n    const cancelBtn = Object(_UI_button_buttons__WEBPACK_IMPORTED_MODULE_2__[\"createCancelBtn\"])();\r\n    formElement.insertBefore(cancelBtn,formElement.firstChild);\r\n}\r\n\r\nconst appendToContactMain = (elem) =>{\r\n    contactMain.append(elem);\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/contacts/contactForm/contactForm.js?");

/***/ }),

/***/ "./src/contacts/contactForm/formTemplate.js":
/*!**************************************************!*\
  !*** ./src/contacts/contactForm/formTemplate.js ***!
  \**************************************************/
/*! exports provided: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Form\", function() { return Form; });\nconst Form = {\r\n    contactFirstName : {\r\n        value : \"\",\r\n        isValid : true,\r\n        hasChanged : false,\r\n    },\r\n    contactLastName : {\r\n        value : \"\",\r\n        isValid : true,\r\n        hasChanged : false,\r\n    },\r\n    contactEmail : {\r\n        value : \"\",\r\n        isValid : true,\r\n        hasChanged : false,\r\n    },\r\n    contactPhoneNumber : {\r\n        value : \"\",\r\n        isValid : true,\r\n        hasChanged : false,\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/contacts/contactForm/formTemplate.js?");

/***/ }),

/***/ "./src/contacts/contactInfoCard.js":
/*!*****************************************!*\
  !*** ./src/contacts/contactInfoCard.js ***!
  \*****************************************/
/*! exports provided: createInfoCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createInfoCard\", function() { return createInfoCard; });\n/* harmony import */ var _styles_contactPopUp_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/contactPopUp.css */ \"./src/contacts/styles/contactPopUp.css\");\n/* harmony import */ var _styles_contactPopUp_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_contactPopUp_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _UI_button_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/button/buttons */ \"./src/UI/button/buttons.js\");\n\r\n\r\n\r\nconst createInfoCard = (contactInfo) =>{\r\n    const card = createCardElement();\r\n    const info = createInfo(contactInfo);\r\n    const cancelBtn = Object(_UI_button_buttons__WEBPACK_IMPORTED_MODULE_1__[\"createCancelBtn\"])();\r\n    card.append(cancelBtn,info);\r\n    return card;\r\n}\r\n\r\nconst createCardElement = () =>{\r\n    const infoCard = document.createElement(\"div\");\r\n    infoCard.setAttribute(\"class\",\"contactPopUps\");\r\n    return infoCard;\r\n}\r\n\r\nconst createInfo = (contactInfo) =>{\r\n    const infoObj = contactInfoObj(contactInfo)\r\n    const infoWrap = document.createElement(\"div\");\r\n    assignInfoToElems(infoObj,infoWrap);\r\n    return infoWrap;\r\n}\r\n\r\nconst contactInfoObj = (contactInfo) =>{\r\n    return({\r\n        firstName : {\r\n            label : \"First Name\",\r\n            value : contactInfo.firstName\r\n        },\r\n        lastName : {\r\n            label : \"Last Name\",\r\n            value : contactInfo.lastName\r\n        },\r\n        email : {\r\n            label : \"Email\",\r\n            value : contactInfo.email\r\n        },\r\n        phoneNumber : {\r\n            label : \"Phone Number\",\r\n            value : contactInfo.phoneNumber\r\n        },\r\n    });\r\n}\r\n\r\nconst assignInfoToElems = (contactInfo,infoWrap) => {\r\n    for (const info in contactInfo){\r\n       const pElement = createSingleInfoElement({label : contactInfo[info].label\r\n        ,value : contactInfo[info].value});\r\n       infoWrap.append(pElement);\r\n    }\r\n}\r\n\r\nconst createSingleInfoElement = (info) =>{\r\n    const infoElem = document.createElement(\"p\");\r\n    const infoText = formatInfoInnerTxt(info.label,info.value);\r\n    infoElem.innerText = infoText;\r\n    return infoElem;\r\n}\r\n\r\nconst formatInfoInnerTxt = (label,value) =>{\r\n    return label + \" : \" + value + \" \";\r\n}\r\n\n\n//# sourceURL=webpack:///./src/contacts/contactInfoCard.js?");

/***/ }),

/***/ "./src/contacts/editClickEvent.js":
/*!****************************************!*\
  !*** ./src/contacts/editClickEvent.js ***!
  \****************************************/
/*! exports provided: onEditClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onEditClick\", function() { return onEditClick; });\n/* harmony import */ var _contactForm_contactForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contactForm/contactForm */ \"./src/contacts/contactForm/contactForm.js\");\n/* harmony import */ var _actions_contacts_contactsActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/contacts/contactsActions */ \"./src/actions/contacts/contactsActions.js\");\n\r\n\r\n\r\n\r\nconst onEditClick = (contactId) => {\r\n    const targetedContact = event.target.parentNode;\r\n    Object(_contactForm_contactForm__WEBPACK_IMPORTED_MODULE_0__[\"displayEditForm\"])(targetedContact,_actions_contacts_contactsActions__WEBPACK_IMPORTED_MODULE_1__[\"onEdit\"],contactId);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/contacts/editClickEvent.js?");

/***/ }),

/***/ "./src/contacts/styles/contactCreate.css":
/*!***********************************************!*\
  !*** ./src/contacts/styles/contactCreate.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./contactCreate.css */ \"./node_modules/css-loader/dist/cjs.js!./src/contacts/styles/contactCreate.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/contacts/styles/contactCreate.css?");

/***/ }),

/***/ "./src/contacts/styles/contactPopUp.css":
/*!**********************************************!*\
  !*** ./src/contacts/styles/contactPopUp.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./contactPopUp.css */ \"./node_modules/css-loader/dist/cjs.js!./src/contacts/styles/contactPopUp.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/contacts/styles/contactPopUp.css?");

/***/ }),

/***/ "./src/errHandler/errHandler.js":
/*!**************************************!*\
  !*** ./src/errHandler/errHandler.js ***!
  \**************************************/
/*! exports provided: displayErrScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayErrScreen\", function() { return displayErrScreen; });\n/* harmony import */ var _UI_modal_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../UI/modal/modal */ \"./src/UI/modal/modal.js\");\n/* harmony import */ var _UI_button_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/button/buttons */ \"./src/UI/button/buttons.js\");\nconst body = document.querySelector(\"body\");\r\n\r\n\r\n\r\n\r\nconst displayErrScreen = (msg) =>{\r\n    const message = createErrMsg(msg);\r\n    const refreshBtn = Object(_UI_button_buttons__WEBPACK_IMPORTED_MODULE_1__[\"createRefreshBtn\"])();\r\n    const modal = Object(_UI_modal_modal__WEBPACK_IMPORTED_MODULE_0__[\"createModal\"])();\r\n    modal.appendChild(message);\r\n    modal.appendChild(refreshBtn);\r\n    body.appendChild(modal);\r\n}\r\n\r\nconst createErrMsg = (msg) =>{\r\n    const p = document.createElement('p');\r\n    p.className = \"msg\";\r\n    p.innerText = msg;\r\n    return p;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/errHandler/errHandler.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _contacts_contactForm_contactForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contacts/contactForm/contactForm */ \"./src/contacts/contactForm/contactForm.js\");\n/* harmony import */ var _palette_palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./palette/palette */ \"./src/palette/palette.js\");\n/* harmony import */ var _switchPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./switchPage */ \"./src/switchPage.js\");\n/* harmony import */ var _actions_registartion_registrationActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions/registartion/registrationActions */ \"./src/actions/registartion/registrationActions.js\");\n/* harmony import */ var _registration_signUp_signUpForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registration/signUp/signUpForm */ \"./src/registration/signUp/signUpForm.js\");\n/* harmony import */ var _registration_signIn_signInForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registration/signIn/signInForm */ \"./src/registration/signIn/signInForm.js\");\n/* harmony import */ var _stylesGlobal_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stylesGlobal/style.css */ \"./src/stylesGlobal/style.css\");\n/* harmony import */ var _stylesGlobal_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_stylesGlobal_style_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _stylesGlobal_header_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stylesGlobal/header.css */ \"./src/stylesGlobal/header.css\");\n/* harmony import */ var _stylesGlobal_header_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_stylesGlobal_header_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _stylesGlobal_main_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stylesGlobal/main.css */ \"./src/stylesGlobal/main.css\");\n/* harmony import */ var _stylesGlobal_main_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_stylesGlobal_main_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _stylesGlobal_footer_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./stylesGlobal/footer.css */ \"./src/stylesGlobal/footer.css\");\n/* harmony import */ var _stylesGlobal_footer_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_stylesGlobal_footer_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _stylesGlobal_contactList_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./stylesGlobal/contactList.css */ \"./src/stylesGlobal/contactList.css\");\n/* harmony import */ var _stylesGlobal_contactList_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_stylesGlobal_contactList_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _stylesGlobal_logo_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./stylesGlobal/logo.css */ \"./src/stylesGlobal/logo.css\");\n/* harmony import */ var _stylesGlobal_logo_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_stylesGlobal_logo_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _stylesGlobal_palette_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./stylesGlobal/palette.css */ \"./src/stylesGlobal/palette.css\");\n/* harmony import */ var _stylesGlobal_palette_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_stylesGlobal_palette_css__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _stylesGlobal_paletteClasses_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./stylesGlobal/paletteClasses.css */ \"./src/stylesGlobal/paletteClasses.css\");\n/* harmony import */ var _stylesGlobal_paletteClasses_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_stylesGlobal_paletteClasses_css__WEBPACK_IMPORTED_MODULE_13__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n//Needs serious renaming\r\n/*synopsis:\r\n   1- the user should sign up or log in and then be directed to the contact list\r\n    where he can add , edit and delete contacts.\r\n    \r\n    2-when the user presses the add button in the contact list, a pop up card with a form\r\n    will appear to register the contact information and a save button will save it.\r\n    \r\n    3-once saved the new contact's full name will appear in the list with an edit and delete \r\n    buttons beside it.\r\n    \r\n    4-if the user presses the edit button the pop up card will reappear with the contact's \r\n    information already in place ready to be adjusted\r\n    \r\n    5-if the delete button is pressed the user will be warned if he is sure about the delete\r\n        6-the color palette should be able to change the page's style at any point of the programm*/\r\n\r\nconst logInNav = document.querySelector(\"#logIn\");\r\nconst signUpNav = document.querySelector(\"#signIn\");\r\nconst signOutNav = document.querySelector(\"#signOut\");\r\n\r\nconst addContactButton = document.querySelector(\".addButton\");\r\n\r\nconst paletteIcon = document.querySelector(\"#paletteIcon\");\r\n\r\n\r\nObject(_registration_signIn_signInForm__WEBPACK_IMPORTED_MODULE_5__[\"appendSignInForm\"])();\r\n\r\nlogInNav.addEventListener('click',()=>{\r\n    Object(_registration_signIn_signInForm__WEBPACK_IMPORTED_MODULE_5__[\"appendSignInForm\"])();\r\n    Object(_switchPage__WEBPACK_IMPORTED_MODULE_2__[\"pageChange\"])('signIn')\r\n});\r\nsignUpNav.addEventListener('click',()=>{\r\n    Object(_registration_signUp_signUpForm__WEBPACK_IMPORTED_MODULE_4__[\"appendSignUpForm\"])();\r\n    Object(_switchPage__WEBPACK_IMPORTED_MODULE_2__[\"pageChange\"])('signUp')\r\n});\r\nsignOutNav.addEventListener('click',_actions_registartion_registrationActions__WEBPACK_IMPORTED_MODULE_3__[\"onSignOut\"]);\r\n\r\npaletteIcon.addEventListener('click',_palette_palette__WEBPACK_IMPORTED_MODULE_1__[\"appendPaletteList\"]);\r\n\r\naddContactButton.addEventListener(\"click\",_contacts_contactForm_contactForm__WEBPACK_IMPORTED_MODULE_0__[\"displayContactForm\"]);\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/palette/palette.js":
/*!********************************!*\
  !*** ./src/palette/palette.js ***!
  \********************************/
/*! exports provided: appendPaletteList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appendPaletteList\", function() { return appendPaletteList; });\n/* harmony import */ var _UI_button_buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../UI/button/buttons */ \"./src/UI/button/buttons.js\");\n/* harmony import */ var _styles_paletteList_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/paletteList.css */ \"./src/palette/styles/paletteList.css\");\n/* harmony import */ var _styles_paletteList_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_paletteList_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _registration_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../registration/user */ \"./src/registration/user.js\");\n/* harmony import */ var _actions_style_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/style/style */ \"./src/actions/style/style.js\");\n/* harmony import */ var _constants_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/const */ \"./src/constants/const.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst paletteArea = document.querySelector(\".paletteArea\");\r\n\r\nconst paletteStyleClasses = [\"default\",\"flowery\",\"seaSide\",\"oranges\",\"vintage\",\r\n                            \"winter\",\"jungle\",\"pastel\",\"fire\",\"gold\"];\r\n\r\nconst appendPaletteList = () =>{\r\n  const paletteList = createPaletteList();\r\n  paletteArea.appendChild(paletteList);\r\n}\r\n \r\nconst createPaletteList = () =>{\r\n  const blockList = createBlockList();\r\n  const cancelBtn = Object(_UI_button_buttons__WEBPACK_IMPORTED_MODULE_0__[\"createCancelBtn\"])();\r\n  const palettePopUp = createPalettePopUp();\r\n  palettePopUp.append(cancelBtn, blockList);\r\n  return palettePopUp;\r\n}\r\n\r\nconst createPalettePopUp = () =>{\r\n  const palettePopUp = document.createElement('div');\r\n  palettePopUp.setAttribute(\"class\",\"palettePopUp\");\r\n  return palettePopUp;\r\n}\r\n\r\nconst createBlockList = () =>{\r\n  const blockList = document.createElement('div');\r\n  blockList.setAttribute(\"class\",\"blockList\");\r\n  appendStyleBlockToList(blockList);\r\n  return blockList;\r\n}\r\n\r\nconst appendStyleBlockToList = (blockList) =>{\r\n  for (let styleClass of paletteStyleClasses){\r\n    const styleBlock = createPaletteBlock(styleClass);\r\n    blockList.appendChild(styleBlock);\r\n  }\r\n}\r\n\r\nconst createPaletteBlock = (styleValue) =>{\r\n  const paletteBlock = document.createElement('div');\r\n  paletteBlock.setAttribute(\"class\",\"paletteBlock\");\r\n  paletteBlock.innerText = styleValue;\r\n  paletteBlock.addEventListener(\"click\",()=>onChangeStyle(styleValue));\r\n  return paletteBlock;\r\n}\r\n\r\nconst onChangeStyle = (styleValue) =>{\r\n  _constants_const__WEBPACK_IMPORTED_MODULE_4__[\"body\"].className = \"\";\r\n  _constants_const__WEBPACK_IMPORTED_MODULE_4__[\"body\"].classList.add(styleValue);\r\n  updateStyleInDB(styleValue);\r\n}\r\n\r\nconst updateStyleInDB = (style) =>{\r\n  if(_registration_user__WEBPACK_IMPORTED_MODULE_2__[\"userInfoCopy\"].userId){\r\n    Object(_actions_style_style__WEBPACK_IMPORTED_MODULE_3__[\"updateStyle\"])(style , _registration_user__WEBPACK_IMPORTED_MODULE_2__[\"userInfoCopy\"].userId, _registration_user__WEBPACK_IMPORTED_MODULE_2__[\"userInfoCopy\"].token);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/palette/palette.js?");

/***/ }),

/***/ "./src/palette/styles/paletteList.css":
/*!********************************************!*\
  !*** ./src/palette/styles/paletteList.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./paletteList.css */ \"./node_modules/css-loader/dist/cjs.js!./src/palette/styles/paletteList.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/palette/styles/paletteList.css?");

/***/ }),

/***/ "./src/registration/signIn/formTemplate.js":
/*!*************************************************!*\
  !*** ./src/registration/signIn/formTemplate.js ***!
  \*************************************************/
/*! exports provided: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Form\", function() { return Form; });\nconst Form = {\r\n    signInEmail : {\r\n        value : \"\",\r\n        isValid : true,\r\n        hasChanged : false,\r\n    },\r\n    signInPassword : {\r\n        value : \"\",\r\n        isValid : true,\r\n        hasChanged : false,\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/registration/signIn/formTemplate.js?");

/***/ }),

/***/ "./src/registration/signIn/signInForm.js":
/*!***********************************************!*\
  !*** ./src/registration/signIn/signInForm.js ***!
  \***********************************************/
/*! exports provided: appendSignInForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appendSignInForm\", function() { return appendSignInForm; });\n/* harmony import */ var _UI_form_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../UI/form/form */ \"./src/UI/form/form.js\");\n/* harmony import */ var _actions_registartion_registrationActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/registartion/registrationActions */ \"./src/actions/registartion/registrationActions.js\");\n/* harmony import */ var _formTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formTemplate */ \"./src/registration/signIn/formTemplate.js\");\n\r\n\r\n\r\n\r\nconst signInMain = document.querySelector(\"#signInMain\");\r\n\r\nconst inputValues = {\r\n    Email : {\r\n        id : \"signInEmail\",\r\n        label : \"Email\",\r\n        type : \"email\"\r\n    },\r\n    phoneNumber : {\r\n        id : \"signInPassword\",\r\n        label : \"Password\",\r\n        type : \"password\"\r\n    },\r\n}\r\n\r\nconst formMetaData = {\r\n    formId : \"signInForm\",\r\n    formClass : \"signInForm\"\r\n}\r\n\r\nconst appendSignInForm = () =>{\r\n    const signInForm = Object(_UI_form_form__WEBPACK_IMPORTED_MODULE_0__[\"createForm\"])(_formTemplate__WEBPACK_IMPORTED_MODULE_2__[\"Form\"],formMetaData,_actions_registartion_registrationActions__WEBPACK_IMPORTED_MODULE_1__[\"onSignIn\"],inputValues);\r\n    if(signInMain.querySelector(\"#signInForm\")){\r\n        signInMain.replaceChild(signInForm,signInMain.querySelector(\"#signInForm\"))\r\n    }else{\r\n        signInMain.appendChild(signInForm)\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/registration/signIn/signInForm.js?");

/***/ }),

/***/ "./src/registration/signUp/formTemplate.js":
/*!*************************************************!*\
  !*** ./src/registration/signUp/formTemplate.js ***!
  \*************************************************/
/*! exports provided: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Form\", function() { return Form; });\nconst Form = {\r\n    signUpFirstName : {\r\n        value : \"\",\r\n        isValid : true,\r\n        hasChanged : false,\r\n    },\r\n    signUpLastName : {\r\n        value : \"\",\r\n        isValid : true,\r\n        hasChanged : false,\r\n    },\r\n    signUpEmail : {\r\n        value : \"\",\r\n        isValid : true,\r\n        hasChanged : false,\r\n    },\r\n    signUpPassword : {\r\n        value : \"\",\r\n        isValid : true,\r\n        hasChanged : false,\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/registration/signUp/formTemplate.js?");

/***/ }),

/***/ "./src/registration/signUp/signUpForm.js":
/*!***********************************************!*\
  !*** ./src/registration/signUp/signUpForm.js ***!
  \***********************************************/
/*! exports provided: appendSignUpForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appendSignUpForm\", function() { return appendSignUpForm; });\n/* harmony import */ var _UI_form_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../UI/form/form */ \"./src/UI/form/form.js\");\n/* harmony import */ var _actions_registartion_registrationActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/registartion/registrationActions */ \"./src/actions/registartion/registrationActions.js\");\n/* harmony import */ var _formTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formTemplate */ \"./src/registration/signUp/formTemplate.js\");\n\r\n\r\n\r\n\r\nconst signUpMain = document.querySelector(\"#signUpMain\");\r\n\r\nconst inputValues = {\r\n    firstName : {\r\n        id : \"signUpFirstName\",\r\n        label : \"First Name\",\r\n        type : \"name\"\r\n    },\r\n    lastName : {\r\n        id : \"signUpLastName\",\r\n        label : \"Last Name\",\r\n        type : \"name\"\r\n    },\r\n    Email : {\r\n        id : \"signUpEmail\",\r\n        label : \"Email\",\r\n        type : \"email\"\r\n    },\r\n    phoneNumber : {\r\n        id : \"signUpPassword\",\r\n        label : \"Password\",\r\n        type : \"password\"\r\n    },\r\n}\r\n\r\nconst formMetaData = {\r\n    formId : \"signUpForm\",\r\n    formClass : \"signUpForm\"\r\n}\r\n\r\nconst appendSignUpForm = () =>{\r\n    const signUpForm = Object(_UI_form_form__WEBPACK_IMPORTED_MODULE_0__[\"createForm\"])(_formTemplate__WEBPACK_IMPORTED_MODULE_2__[\"Form\"],formMetaData,_actions_registartion_registrationActions__WEBPACK_IMPORTED_MODULE_1__[\"onSignUp\"],inputValues);\r\n    if(signUpMain.querySelector(\"#signUpForm\")){\r\n        signUpMain.replaceChild(signUpForm,signUpMain.querySelector(\"#signUpForm\"));\r\n    }else{\r\n        signUpMain.appendChild(signUpForm);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/registration/signUp/signUpForm.js?");

/***/ }),

/***/ "./src/registration/user.js":
/*!**********************************!*\
  !*** ./src/registration/user.js ***!
  \**********************************/
/*! exports provided: userInfoCopy, updateUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"userInfoCopy\", function() { return userInfoCopy; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateUser\", function() { return updateUser; });\n/* harmony import */ var _actions_domElements_addToDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/domElements/addToDom */ \"./src/actions/domElements/addToDom.js\");\n/* harmony import */ var _constants_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/const */ \"./src/constants/const.js\");\n\r\n\r\n\r\n\r\nlet user = {\r\n    userName : \"\",\r\n    userId : 0,\r\n    contacts : [],\r\n    style : \"default\",\r\n    token : \"\",\r\n}\r\n\r\nconst initialUserState = {\r\n    userName : \"\",\r\n    userId : 0,\r\n    contacts : []\r\n}\r\n\r\nlet userInfoCopy = {};\r\n\r\nconst updateUser = (userInfo) =>{\r\n    if(userInfo){\r\n        user.userName = userInfo.user.user_first_name;\r\n        user.userId = userInfo.user.user_id;\r\n        user.style = userInfo.user.style || \"default\";\r\n        user.token = userInfo.data.accessToken;\r\n        admitUser();\r\n    }else{\r\n        user = JSON.parse(JSON.stringify(initialUserState));\r\n    }\r\n}\r\n\r\nconst admitUser = () =>{\r\n    changeContactTitle(user.userName);\r\n    fetchContacts(user.userId);\r\n    _constants_const__WEBPACK_IMPORTED_MODULE_1__[\"body\"].setAttribute(\"class\",user.style);\r\n    userInfoCopy = JSON.parse(JSON.stringify(user));\r\n}\r\n\r\nconst changeContactTitle = (name)=>{ \r\n    _constants_const__WEBPACK_IMPORTED_MODULE_1__[\"title\"].innerText = `${name}'s contacts`;\r\n}\r\n\r\nconst fetchContacts = (id) =>{\r\n    fetch(_constants_const__WEBPACK_IMPORTED_MODULE_1__[\"proxyUrl\"] + `https://contact-book-backend.herokuapp.com/loadContacts?id=${id}`,{\r\n        method : 'GET',\r\n        headers : {\r\n            'Accept': 'application/json',\r\n            'Content-Type': 'application/json'\r\n        }, \r\n    }).then((res)=>{\r\n        return res.json();\r\n    }).then((contacts)=>{\r\n        createContactList(contacts);\r\n    }).catch((err)=>{\r\n        console.log(err);\r\n    })\r\n}\r\n\r\nconst createContactList = (contacts) =>{\r\n    if(contacts){\r\n        for (let contact of contacts){\r\n            user.contacts.push(contact);\r\n            Object(_actions_domElements_addToDom__WEBPACK_IMPORTED_MODULE_0__[\"addContactToDom\"])(contact);\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/registration/user.js?");

/***/ }),

/***/ "./src/stylesGlobal/contactList.css":
/*!******************************************!*\
  !*** ./src/stylesGlobal/contactList.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./contactList.css */ \"./node_modules/css-loader/dist/cjs.js!./src/stylesGlobal/contactList.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/stylesGlobal/contactList.css?");

/***/ }),

/***/ "./src/stylesGlobal/footer.css":
/*!*************************************!*\
  !*** ./src/stylesGlobal/footer.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./footer.css */ \"./node_modules/css-loader/dist/cjs.js!./src/stylesGlobal/footer.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/stylesGlobal/footer.css?");

/***/ }),

/***/ "./src/stylesGlobal/header.css":
/*!*************************************!*\
  !*** ./src/stylesGlobal/header.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./header.css */ \"./node_modules/css-loader/dist/cjs.js!./src/stylesGlobal/header.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/stylesGlobal/header.css?");

/***/ }),

/***/ "./src/stylesGlobal/logo.css":
/*!***********************************!*\
  !*** ./src/stylesGlobal/logo.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./logo.css */ \"./node_modules/css-loader/dist/cjs.js!./src/stylesGlobal/logo.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/stylesGlobal/logo.css?");

/***/ }),

/***/ "./src/stylesGlobal/main.css":
/*!***********************************!*\
  !*** ./src/stylesGlobal/main.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/stylesGlobal/main.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/stylesGlobal/main.css?");

/***/ }),

/***/ "./src/stylesGlobal/palette.css":
/*!**************************************!*\
  !*** ./src/stylesGlobal/palette.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./palette.css */ \"./node_modules/css-loader/dist/cjs.js!./src/stylesGlobal/palette.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/stylesGlobal/palette.css?");

/***/ }),

/***/ "./src/stylesGlobal/paletteClasses.css":
/*!*********************************************!*\
  !*** ./src/stylesGlobal/paletteClasses.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./paletteClasses.css */ \"./node_modules/css-loader/dist/cjs.js!./src/stylesGlobal/paletteClasses.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/stylesGlobal/paletteClasses.css?");

/***/ }),

/***/ "./src/stylesGlobal/style.css":
/*!************************************!*\
  !*** ./src/stylesGlobal/style.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/stylesGlobal/style.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/stylesGlobal/style.css?");

/***/ }),

/***/ "./src/switchPage.js":
/*!***************************!*\
  !*** ./src/switchPage.js ***!
  \***************************/
/*! exports provided: pageChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pageChange\", function() { return pageChange; });\nconst contactMain = document.querySelector(\"#displayCont\");\r\nconst signUpMain = document.querySelector(\"#signUpMain\");\r\nconst signInMain = document.querySelector(\"#signInMain\");\r\n\r\nconst logHeader = document.querySelector(\"#logNavigation\");\r\nconst outHeader = document.querySelector(\"#outNavigation\");\r\nconst header = document.querySelector(\"header\");\r\n\r\n\r\nconst pageChange = (route) =>{\r\n    switch(route){\r\n        case 'signIn' :\r\n            contactMain.classList.add(\"hide\");\r\n            signUpMain.classList.add(\"hide\");\r\n            signInMain.classList.remove(\"hide\");\r\n            outHeader.classList.add(\"hide\");\r\n            logHeader.classList.remove(\"hide\");\r\n            header.classList.remove(\"signOutHeader\");\r\n            header.classList.add(\"signLogHeader\");\r\n            break;\r\n        case 'signUp' :\r\n            contactMain.classList.add(\"hide\");\r\n            signInMain.classList.add(\"hide\");\r\n            signUpMain.classList.remove(\"hide\");\r\n            break;\r\n        case 'contactList' :\r\n            signInMain.classList.add(\"hide\");\r\n            signUpMain.classList.add(\"hide\");\r\n            contactMain.classList.remove(\"hide\");\r\n            outHeader.classList.remove(\"hide\");\r\n            logHeader.classList.add(\"hide\");\r\n            header.classList.remove(\"signLogHeader\");\r\n            header.classList.add(\"signOutHeader\");\r\n            break;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/switchPage.js?");

/***/ }),

/***/ "./src/utilities/admittion.js":
/*!************************************!*\
  !*** ./src/utilities/admittion.js ***!
  \************************************/
/*! exports provided: userAdmittionHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"userAdmittionHandler\", function() { return userAdmittionHandler; });\n/* harmony import */ var _registration_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../registration/user */ \"./src/registration/user.js\");\n/* harmony import */ var _switchPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../switchPage */ \"./src/switchPage.js\");\n/* harmony import */ var _errHandler_errHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../errHandler/errHandler */ \"./src/errHandler/errHandler.js\");\n\r\n\r\n\r\n\r\nconst userAdmittionHandler = (user,msg) =>{\r\n    if(user){\r\n        Object(_registration_user__WEBPACK_IMPORTED_MODULE_0__[\"updateUser\"])(user);\r\n        Object(_switchPage__WEBPACK_IMPORTED_MODULE_1__[\"pageChange\"])('contactList'); \r\n    }else{\r\n        Object(_errHandler_errHandler__WEBPACK_IMPORTED_MODULE_2__[\"displayErrScreen\"])(msg);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/utilities/admittion.js?");

/***/ }),

/***/ "./src/utilities/extract.js":
/*!**********************************!*\
  !*** ./src/utilities/extract.js ***!
  \**********************************/
/*! exports provided: extractContact, extractContactValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"extractContact\", function() { return extractContact; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"extractContactValues\", function() { return extractContactValues; });\nconst extractContact = (contactServerInfo) =>{\r\n    return {\r\n        firstName : contactServerInfo.contact_first_name,\r\n        lastName : contactServerInfo.contact_last_name,\r\n        email : contactServerInfo.contact_email,\r\n        phoneNumber : contactServerInfo.contact_phone_number,\r\n        id : contactServerInfo.contact_id\r\n    }\r\n}\r\n\r\nconst extractContactValues = (contactObject) =>{\r\n    return {\r\n        firstName : contactObject.contactFirstName.value,\r\n        lastName : contactObject.contactLastName.value,\r\n        email :  contactObject.contactEmail.value,\r\n        phoneNumber : contactObject.contactPhoneNumber.value,\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/utilities/extract.js?");

/***/ }),

/***/ "./src/utilities/getInfo.js":
/*!**********************************!*\
  !*** ./src/utilities/getInfo.js ***!
  \**********************************/
/*! exports provided: getInfoById, getIndexOfNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getInfoById\", function() { return getInfoById; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getIndexOfNode\", function() { return getIndexOfNode; });\nconst getInfoById = (reqInfoArr) =>{ //THE OBJECT PROPERTY HAS THE SAME NAME AS THE ID \r\n    //CONSIDER GIVING USER A CHANCE TO NAME THE OBJECT PROPERTY\r\n    const info = {};\r\n    for (const req of reqInfoArr) {\r\n        info[req] = document.querySelector('#'+req).value;\r\n    }\r\n    return info;\r\n}\r\n\r\nconst getIndexOfNode = (element) =>{\r\n    return Array.prototype.indexOf.call(element.parentNode.children,element);\r\n}\n\n//# sourceURL=webpack:///./src/utilities/getInfo.js?");

/***/ }),

/***/ "./src/utilities/typeCheck.js":
/*!************************************!*\
  !*** ./src/utilities/typeCheck.js ***!
  \************************************/
/*! exports provided: isObject, isFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isObject\", function() { return isObject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isFunction\", function() { return isFunction; });\nconst isObject = (argument) =>{\r\n    return typeof argument === 'object' && argument !== null && typeof argument !== 'function';\r\n}\r\n\r\nconst isFunction = (argument) =>{\r\n    return typeof argument === 'function' && argument !== 'object';\r\n}\n\n//# sourceURL=webpack:///./src/utilities/typeCheck.js?");

/***/ }),

/***/ "./src/utilities/validation/validateContact.js":
/*!*****************************************************!*\
  !*** ./src/utilities/validation/validateContact.js ***!
  \*****************************************************/
/*! exports provided: validateContact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateContact\", function() { return validateContact; });\nconst validateContact = (contactInfo) =>{\r\n    const validFirstName = contactInfo.contactFirstName.isValid && contactInfo.contactFirstName.hasChanged;\r\n    const validLastName = contactInfo.contactLastName.isValid && contactInfo.contactLastName.hasChanged;\r\n    const validEmail = contactInfo.contactEmail.isValid && contactInfo.contactEmail.hasChanged;\r\n    const validPhoneNumber= contactInfo.contactPhoneNumber.isValid && contactInfo.contactPhoneNumber.hasChanged;\r\n\r\n    return validFirstName && validLastName && validEmail && validPhoneNumber;\r\n}\n\n//# sourceURL=webpack:///./src/utilities/validation/validateContact.js?");

/***/ }),

/***/ "./src/utilities/validation/validateForm.js":
/*!**************************************************!*\
  !*** ./src/utilities/validation/validateForm.js ***!
  \**************************************************/
/*! exports provided: validateContactForm, validateSignUpForm, validateSignInForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateContactForm\", function() { return validateContactForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateSignUpForm\", function() { return validateSignUpForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateSignInForm\", function() { return validateSignInForm; });\n/* harmony import */ var _validateInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validateInput */ \"./src/utilities/validation/validateInput.js\");\n\r\n\r\nconst validateContactForm = (contactForm) =>{\r\n    const validFirstName =  Object(_validateInput__WEBPACK_IMPORTED_MODULE_0__[\"validateInput\"])({value : contactForm.contactFirstName , type : \"name\"});\r\n    const validlastName =  Object(_validateInput__WEBPACK_IMPORTED_MODULE_0__[\"validateInput\"])({value : contactForm.contactLastName , type : \"name\"});\r\n    const validEmail=  Object(_validateInput__WEBPACK_IMPORTED_MODULE_0__[\"validateInput\"])({value : contactForm.contactEmail , type : \"email\"});\r\n    const validPhoneNumber=  Object(_validateInput__WEBPACK_IMPORTED_MODULE_0__[\"validateInput\"])({value : contactForm.contactPhoneNumber , type : \"phoneNumber\"});\r\n    if(validFirstName && validlastName && validEmail && validPhoneNumber) return true;\r\n    return false;\r\n}\r\n\r\nconst validateSignUpForm = (userInfo) => {\r\n    const validFirstName = userInfo.signUpFirstName.isValid && userInfo.signUpFirstName.hasChanged;\r\n    const validLastName = userInfo.signUpLastName.isValid && userInfo.signUpLastName.hasChanged;\r\n    const validEmail = userInfo.signUpEmail.isValid && userInfo.signUpEmail.hasChanged;\r\n    const validPassword= userInfo.signUpPassword.isValid && userInfo.signUpPassword.hasChanged;\r\n\r\n    return validFirstName && validLastName && validEmail && validPassword;\r\n}\r\n\r\nconst validateSignInForm = (userInfo) => {\r\n    const validEmail = userInfo.signInEmail.isValid && userInfo.signInEmail.hasChanged;\r\n    const validPassword= userInfo.signInPassword.isValid && userInfo.signInPassword.hasChanged;\r\n\r\n    return  validEmail && validPassword;\r\n}\n\n//# sourceURL=webpack:///./src/utilities/validation/validateForm.js?");

/***/ }),

/***/ "./src/utilities/validation/validateInput.js":
/*!***************************************************!*\
  !*** ./src/utilities/validation/validateInput.js ***!
  \***************************************************/
/*! exports provided: validateInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateInput\", function() { return validateInput; });\nconst validateInput = (input) => {\r\n    switch(input.type){\r\n        case 'name' :\r\n            return isName(input.value);\r\n        case 'email' :\r\n            return isEmail(input.value);\r\n        case 'phoneNumber' :\r\n            return isPhoneNumber(input.value);\r\n        case 'password' :\r\n            return isPassword(input.value);\r\n        default :\r\n            return false;                \r\n    }\r\n}\r\n\r\nconst isName = (value) => {\r\n    if(value.match(/^[A-Za-z]+$/)){\r\n        return true;\r\n    }\r\n    return false;\r\n}\r\n\r\nconst isEmail = (value) => {\r\n    if(value.match(/\\S+@\\S+\\.\\S+/)){\r\n        return true;\r\n    }\r\n    return false;\r\n}\r\n\r\nconst isPhoneNumber = (value) => {\r\n    if(value.match(/^[(]?[0-9]{3}[)]?[-\\s]?[0-9]{3}[-\\s]?[0-9]{4,6}$/)){\r\n        return true;\r\n    }\r\n    return false;\r\n}\r\n\r\nconst isPassword = (value) => {\r\n    if(value.match(/^\\w+$/)){\r\n        return true;\r\n    }\r\n    return false;\r\n}\n\n//# sourceURL=webpack:///./src/utilities/validation/validateInput.js?");

/***/ }),

/***/ "./src/utilities/validation/validation.js":
/*!************************************************!*\
  !*** ./src/utilities/validation/validation.js ***!
  \************************************************/
/*! exports provided: validateContact, validateInput, validateContactForm, validateSignUpForm, validateSignInForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _validateContact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validateContact */ \"./src/utilities/validation/validateContact.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"validateContact\", function() { return _validateContact__WEBPACK_IMPORTED_MODULE_0__[\"validateContact\"]; });\n\n/* harmony import */ var _validateInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validateInput */ \"./src/utilities/validation/validateInput.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"validateInput\", function() { return _validateInput__WEBPACK_IMPORTED_MODULE_1__[\"validateInput\"]; });\n\n/* harmony import */ var _validateForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validateForm */ \"./src/utilities/validation/validateForm.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"validateContactForm\", function() { return _validateForm__WEBPACK_IMPORTED_MODULE_2__[\"validateContactForm\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"validateSignUpForm\", function() { return _validateForm__WEBPACK_IMPORTED_MODULE_2__[\"validateSignUpForm\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"validateSignInForm\", function() { return _validateForm__WEBPACK_IMPORTED_MODULE_2__[\"validateSignInForm\"]; });\n\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/utilities/validation/validation.js?");

/***/ })

/******/ });