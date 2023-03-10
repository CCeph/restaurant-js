/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=DM+Sans&family=Heebo&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Imports DM Sans and Heebo */\\n\\n* {\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  margin: 0;\\n}\\n\\n/*Grid styling for the whole page layout*/\\n.main-grid {\\n  display: grid;\\n  height: 100vh;\\n  grid-template: 1.5fr 9fr 50px / 1fr;\\n}\\n\\n/*Start of Header styling*/\\n\\n.header {\\n  background-color: #010101;\\n  color: white;\\n  display: grid;\\n  grid-template: 1fr / 1fr 1fr;\\n  justify-content: space-around;\\n  grid-gap: 20%;\\n}\\n\\n.header h1 {\\n  text-align: center;\\n  align-self: center;\\n  padding: 0.2rem 1rem;\\n\\n  font-family: \\\"DM Sans\\\", system-ui, \\\"Segoe UI\\\", Roboto, Helvetica, Arial,\\n    sans-serif, \\\"Apple Color Emoji\\\", \\\"Segoe UI Emoji\\\", \\\"Segoe UI Symbol\\\";\\n  letter-spacing: 0.4rem;\\n  font-size: 1.5rem;\\n}\\n\\n.header .nav {\\n  justify-self: center;\\n  align-self: center;\\n  display: flex;\\n  justify-content: space-around;\\n  gap: 2rem;\\n\\n  font-size: 1.5rem;\\n  font-family: Roboto;\\n  border-radius: 5px;\\n  border: 1px solid black;\\n}\\n\\n.nav button {\\n  background-color: transparent;\\n  color: white;\\n  border: none;\\n  font-size: 0.9rem;\\n}\\n\\n.nav button:hover {\\n  color: rgb(177, 177, 177);\\n}\\n\\n/*End of Header styling*/\\n\\n/*Start of main styling*/\\n\\n.banner {\\n  display: flex;\\n  justify-content: center;\\n}\\n\\n.banner > img {\\n  width: 100vw;\\n}\\n\\n.main .intro {\\n  display: flex;\\n  text-align: justify;\\n}\\n\\n.intro > p {\\n  font-size: 1.2rem;\\n  padding: 1rem;\\n}\\n\\n.main h2 {\\n  text-align: center;\\n  font-family: \\\"Heebo\\\", system-ui, \\\"Segoe UI\\\", Roboto, Helvetica, Arial,\\n    sans-serif, \\\"Apple Color Emoji\\\", \\\"Segoe UI Emoji\\\", \\\"Segoe UI Symbol\\\";\\n  letter-spacing: 0.08rem;\\n  font-size: 1.6rem;\\n}\\n\\n.hours p {\\n  text-align: center;\\n  font-family: \\\"DM Sans\\\";\\n  font-size: 1.15rem;\\n}\\n\\n.menu-grid {\\n  display: grid;\\n  grid-template: 1fr / 1fr 1fr;\\n  justify-items: center;\\n}\\n\\n.menu-grid img {\\n  width: 300px;\\n  height: 200px;\\n}\\n\\n.menu-grid .image-container {\\n  display: flex;\\n  justify-content: center;\\n}\\n\\n.menu-grid > .food-container {\\n  margin: 20px;\\n  text-align: center;\\n}\\n\\n/*Start of form styling*/\\n\\nform {\\n  display: flex;\\n  flex-direction: column;\\n  width: 50%;\\n  margin: auto;\\n}\\n\\nform :is(label, input, textarea, button) {\\n  display: block;\\n  margin-bottom: 10px;\\n  padding: 0;\\n}\\n\\nform :is(input, textarea) {\\n  padding: 5px;\\n  font-size: 1rem;\\n}\\n\\nform button {\\n  padding: 5px;\\n  width: 100px;\\n  align-self: center;\\n}\\n\\n/*End of form styling*/\\n\\n/*End of main styling*/\\n\\n/*Start of Footer styling*/\\n\\n.footer {\\n  background-color: black;\\n  color: white;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n/*End of Footer styling*/\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createAboutPage)\n/* harmony export */ });\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n\n\nfunction createHoursText() {\n  const hoursText = document.createElement(\"div\");\n  hoursText.classList.add(\"hours\");\n\n  // Used to simplify code as many linebreaks are needed.\n  const linebreak = document.createElement(\"br\");\n\n  const lineOne = document.createElement(\"p\");\n  lineOne.textContent = \"Monday - Friday: 11 AM to 8 PM\";\n  hoursText.appendChild(lineOne);\n  hoursText.appendChild(linebreak);\n  const lineTwo = document.createElement(\"p\");\n  lineTwo.textContent = \"Saturday: 11 AM to 11 PM\";\n  hoursText.appendChild(lineTwo);\n  hoursText.appendChild(linebreak);\n  const lineThree = document.createElement(\"p\");\n  lineThree.textContent = \"Sunday: 11 AM to 5 PM\";\n  hoursText.appendChild(lineThree);\n  hoursText.appendChild(linebreak);\n\n  return hoursText;\n}\n\nfunction createContactForm() {\n  const contactForm = document.createElement(\"form\");\n  contactForm.setAttribute(\"action\", \" \");\n\n  // name\n  const nameLabel = document.createElement(\"label\");\n  contactForm.appendChild(nameLabel);\n  nameLabel.textContent = \"Name: (Required)\";\n  nameLabel.setAttribute(\"for\", \"name\");\n\n  const nameInput = document.createElement(\"input\");\n  contactForm.appendChild(nameInput);\n  nameInput.setAttribute(\"type\", \"text\");\n  nameInput.setAttribute(\"required\", \"\");\n  nameInput.setAttribute(\"id\", \"name\");\n\n  // email\n  const emailLabel = document.createElement(\"label\");\n  contactForm.appendChild(emailLabel);\n  emailLabel.textContent = \"Email: (Required)\";\n  emailLabel.setAttribute(\"for\", \"email\");\n\n  const emailInput = document.createElement(\"input\");\n  contactForm.appendChild(emailInput);\n  emailInput.setAttribute(\"type\", \"text\");\n  emailInput.setAttribute(\"required\", \"\");\n  emailInput.setAttribute(\"id\", \"email\");\n\n  // subject\n  const subjectLabel = document.createElement(\"label\");\n  contactForm.appendChild(subjectLabel);\n  subjectLabel.textContent = \"Subject: (Required)\";\n  subjectLabel.setAttribute(\"for\", \"subject\");\n\n  const subjectInput = document.createElement(\"input\");\n  contactForm.appendChild(subjectInput);\n  subjectInput.setAttribute(\"type\", \"text\");\n  subjectInput.setAttribute(\"required\", \"\");\n  subjectInput.setAttribute(\"id\", \"subject\");\n\n  // message\n  const messageLabel = document.createElement(\"label\");\n  contactForm.appendChild(messageLabel);\n  messageLabel.textContent = \"Message: (Required)\";\n  messageLabel.setAttribute(\"for\", \"message\");\n\n  const messageInput = document.createElement(\"textarea\");\n  contactForm.appendChild(messageInput);\n  messageInput.setAttribute(\"id\", \"message\");\n  messageInput.setAttribute(\"cols\", \"30\");\n  messageInput.setAttribute(\"rows\", \"10\");\n  messageInput.setAttribute(\"required\", \"\");\n\n  // submit\n  const submit = document.createElement(\"button\");\n  contactForm.appendChild(submit);\n  submit.textContent = \"Submit\";\n\n  return contactForm;\n}\n\nfunction createContactText() {\n  const contactText = document.createElement(\"div\");\n  contactText.classList.add(\"contact\");\n\n  const contactForm = createContactForm();\n  contactText.appendChild(contactForm);\n\n  return contactText;\n}\n\nfunction createBodyMain() {\n  const body = document.createElement(\"div\");\n  body.classList.add(\"main\");\n\n  const hoursTitle = document.createElement(\"h2\");\n  hoursTitle.textContent = \"Hours\";\n  body.appendChild(hoursTitle);\n\n  const hoursText = createHoursText();\n  body.appendChild(hoursText);\n\n  const contactUsTitle = document.createElement(\"h2\");\n  contactUsTitle.textContent = \"Contact Us\";\n  body.appendChild(contactUsTitle);\n\n  const contactUsText = createContactText();\n  body.appendChild(contactUsText);\n\n  return body;\n}\n\nfunction createMainGrid() {\n  const mainGrid = document.createElement(\"div\");\n  mainGrid.classList.add(\"main-grid\");\n\n  const header = (0,_homepage__WEBPACK_IMPORTED_MODULE_0__.createHeader)();\n  mainGrid.appendChild(header);\n\n  const bodyMain = createBodyMain();\n  mainGrid.appendChild(bodyMain);\n\n  const footer = (0,_homepage__WEBPACK_IMPORTED_MODULE_0__.createFooter)();\n  mainGrid.appendChild(footer);\n\n  return mainGrid;\n}\n\nfunction createAboutPage() {\n  const mainGrid = createMainGrid();\n  _homepage__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(mainGrid);\n}\n\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"content\": () => (/* binding */ content),\n/* harmony export */   \"createFooter\": () => (/* binding */ createFooter),\n/* harmony export */   \"createHeader\": () => (/* binding */ createHeader),\n/* harmony export */   \"default\": () => (/* binding */ createHomePage)\n/* harmony export */ });\n/* harmony import */ var _resources_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resources/restaurant.jpg */ \"./src/resources/restaurant.jpg\");\n\n\n// Bind DOM\nconst content = document.querySelector(\"#content\");\n\nfunction createTitle() {\n  const title = document.createElement(\"h1\");\n  title.textContent = \"SMOKEY BARBECUE\";\n\n  return title;\n}\n\nfunction createHomeButton() {\n  const homeBtn = document.createElement(\"button\");\n  homeBtn.textContent = \"Home\";\n  homeBtn.classList.add(\"home\");\n  return homeBtn;\n}\n\nfunction createMenuButton() {\n  const menuBtn = document.createElement(\"button\");\n  menuBtn.textContent = \"Menu\";\n  menuBtn.classList.add(\"menu\");\n  return menuBtn;\n}\n\nfunction createContactButton() {\n  const contactBtn = document.createElement(\"button\");\n  contactBtn.textContent = \"Contact Us\";\n  contactBtn.classList.add(\"contact\");\n  return contactBtn;\n}\n\nfunction createNav() {\n  const nav = document.createElement(\"nav\");\n  nav.classList.add(\"nav\");\n\n  nav.appendChild(createHomeButton());\n  nav.appendChild(createMenuButton());\n  nav.appendChild(createContactButton());\n\n  return nav;\n}\n\nfunction createHeader() {\n  const header = document.createElement(\"div\");\n  header.classList.add(\"header\");\n\n  header.appendChild(createTitle());\n  header.appendChild(createNav());\n\n  return header;\n}\n\nfunction createBanner() {\n  const banner = document.createElement(\"div\");\n  banner.classList.add(\"banner\");\n\n  const bannerImg = new Image();\n  bannerImg.src = _resources_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__;\n  banner.appendChild(bannerImg);\n\n  return banner;\n}\n\nfunction createIntro() {\n  const intro = document.createElement(\"div\");\n  intro.classList.add(\"intro\");\n\n  const paragraph = document.createElement(\"p\");\n  paragraph.textContent = `This restaurant is amazing. Lorem ipsum dolor sit amet,\n    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n    labore et dolore magna aliqua. Cursus mattis molestie a iaculis at\n    erat. Sed tempus urna et pharetra. Laoreet non curabitur gravida\n    arcu ac. Mi ipsum faucibus vitae aliquet nec ullamcorper.\n    Consequat nisl vel pretium lectus quam id leo. Tincidunt lobortis\n    feugiat vivamus at. Accumsan lacus vel facilisis volutpat est\n    velit. Tortor consequat id porta nibh venenatis cras sed felis\n    eget. Urna nunc id cursus metus aliquam.`;\n  intro.appendChild(paragraph);\n\n  return intro;\n}\n\nfunction createBodyMain() {\n  const bodyMain = document.createElement(\"div\");\n  bodyMain.classList.add(\"main\");\n\n  const banner = createBanner();\n  bodyMain.appendChild(banner);\n\n  const intro = createIntro();\n  bodyMain.appendChild(intro);\n\n  return bodyMain;\n}\n\nfunction createFooter() {\n  const footer = document.createElement(\"footer\");\n  footer.classList.add(\"footer\");\n\n  const text = document.createElement(\"p\");\n  text.textContent = \"Copyright of CCeph\";\n  footer.appendChild(text);\n\n  return footer;\n}\n\nfunction createMainGrid() {\n  const mainGrid = document.createElement(\"div\");\n  mainGrid.classList.add(\"main-grid\");\n\n  const header = createHeader();\n  mainGrid.appendChild(header);\n\n  const bodyMain = createBodyMain();\n  mainGrid.appendChild(bodyMain);\n\n  const footer = createFooter();\n  mainGrid.appendChild(footer);\n\n  return mainGrid;\n}\n\nfunction createHomePage() {\n  const mainGrid = createMainGrid();\n  content.appendChild(mainGrid);\n}\n\n\n//# sourceURL=webpack://restaurant/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\n// Bind DOM\nconst content = document.querySelector(\"#content\");\n\nfunction deletePage() {\n  content.innerHTML = \"\";\n}\n\nfunction bindEvents() {\n  // Binds the home button to replacing the current page with the home page.\n  const homeBtn = document.querySelector(\".nav .home\");\n  // eslint-disable-next-line no-use-before-define\n  homeBtn.addEventListener(\"click\", createHomePage);\n\n  const menuBtn = document.querySelector(\".nav .menu\");\n  // eslint-disable-next-line no-use-before-define\n  menuBtn.addEventListener(\"click\", createMenuPage);\n\n  const contactBtn = document.querySelector(\".nav .contact\");\n  // eslint-disable-next-line no-use-before-define\n  contactBtn.addEventListener(\"click\", createContactPage);\n}\n\n// Erases the current page and replaces it with the Home page.\n\nfunction createHomePage() {\n  deletePage();\n  (0,_homepage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  bindEvents();\n}\n\n// Erases the current page and replaces it with the Menu page.\n\nfunction createMenuPage() {\n  deletePage();\n  (0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  bindEvents();\n}\n\n// Erases the current page and replaces it with the Contact page.\n\nfunction createContactPage() {\n  deletePage();\n  (0,_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  bindEvents();\n}\n\n// Currently only used for debugging. Change to createHomePage() later.\ncreateHomePage();\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createContactPage)\n/* harmony export */ });\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _resources_steak_feast_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resources/steak-feast.jpg */ \"./src/resources/steak-feast.jpg\");\n/* harmony import */ var _resources_salmon_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resources/salmon.jpg */ \"./src/resources/salmon.jpg\");\n/* harmony import */ var _resources_burger2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resources/burger2.jpg */ \"./src/resources/burger2.jpg\");\n/* harmony import */ var _resources_burger3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resources/burger3.jpg */ \"./src/resources/burger3.jpg\");\n/* harmony import */ var _resources_wings_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resources/wings.jpg */ \"./src/resources/wings.jpg\");\n/* harmony import */ var _resources_shrimp_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resources/shrimp.jpg */ \"./src/resources/shrimp.jpg\");\n\n\n\n\n\n\n\n\nfunction createDish(name, imageSrc, description) {\n  const foodContainer = document.createElement(\"div\");\n  foodContainer.classList.add(\"food-container\");\n\n  const imageContainer = document.createElement(\"div\");\n  imageContainer.classList.add(\"image-container\");\n  foodContainer.appendChild(imageContainer);\n\n  const image = new Image();\n  image.src = imageSrc;\n  imageContainer.appendChild(image);\n\n  const foodTitle = document.createElement(\"h3\");\n  foodTitle.textContent = name;\n  foodContainer.appendChild(foodTitle);\n\n  const foodText = document.createElement(\"p\");\n  if (description === undefined) {\n    foodText.textContent = `Lorem ipsum dolor sit amet, \n    consectetur adipiscing elit, sed do eiusmod tempor incididunt\n    ut labore et dolore magna aliqua.`;\n  } else {\n    foodText.textContent = description;\n  }\n  foodContainer.appendChild(foodText);\n\n  return foodContainer;\n}\n\nfunction createBodyMain() {\n  const body = document.createElement(\"div\");\n  body.classList.add(\"menu-grid\");\n\n  const firstItem = createDish(\"Steak Feast\", _resources_steak_feast_jpg__WEBPACK_IMPORTED_MODULE_1__);\n  body.appendChild(firstItem);\n\n  const secondItem = createDish(\"Slider\", _resources_burger2_jpg__WEBPACK_IMPORTED_MODULE_3__);\n  body.appendChild(secondItem);\n\n  const thirdItem = createDish(\"Burger\", _resources_burger3_jpg__WEBPACK_IMPORTED_MODULE_4__);\n  body.appendChild(thirdItem);\n\n  const fourthItem = createDish(\"Salmon\", _resources_salmon_jpg__WEBPACK_IMPORTED_MODULE_2__);\n  body.appendChild(fourthItem);\n\n  const fifthItem = createDish(\"Wings\", _resources_wings_jpg__WEBPACK_IMPORTED_MODULE_5__);\n  body.appendChild(fifthItem);\n\n  const sixthItem = createDish(\"Shrimp\", _resources_shrimp_jpg__WEBPACK_IMPORTED_MODULE_6__);\n  body.appendChild(sixthItem);\n\n  return body;\n}\n\nfunction createMainGrid() {\n  const mainGrid = document.createElement(\"div\");\n  mainGrid.classList.add(\"main-grid\");\n\n  const header = (0,_homepage__WEBPACK_IMPORTED_MODULE_0__.createHeader)();\n  mainGrid.appendChild(header);\n\n  const bodyMain = createBodyMain();\n  mainGrid.appendChild(bodyMain);\n\n  const footer = (0,_homepage__WEBPACK_IMPORTED_MODULE_0__.createFooter)();\n  mainGrid.appendChild(footer);\n\n  return mainGrid;\n}\n\nfunction createContactPage() {\n  const mainGrid = createMainGrid();\n  _homepage__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(mainGrid);\n}\n\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/resources/burger2.jpg":
/*!***********************************!*\
  !*** ./src/resources/burger2.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"deabc2b1dc5780f8cb03.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/resources/burger2.jpg?");

/***/ }),

/***/ "./src/resources/burger3.jpg":
/*!***********************************!*\
  !*** ./src/resources/burger3.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e2f1f88f2fe516025ed0.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/resources/burger3.jpg?");

/***/ }),

/***/ "./src/resources/restaurant.jpg":
/*!**************************************!*\
  !*** ./src/resources/restaurant.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9cad1edd60893d4f39f9.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/resources/restaurant.jpg?");

/***/ }),

/***/ "./src/resources/salmon.jpg":
/*!**********************************!*\
  !*** ./src/resources/salmon.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f0e1b7806db933e34b30.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/resources/salmon.jpg?");

/***/ }),

/***/ "./src/resources/shrimp.jpg":
/*!**********************************!*\
  !*** ./src/resources/shrimp.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"36ad9679eacc8f1ebe57.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/resources/shrimp.jpg?");

/***/ }),

/***/ "./src/resources/steak-feast.jpg":
/*!***************************************!*\
  !*** ./src/resources/steak-feast.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"79d371a5c3241df285ff.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/resources/steak-feast.jpg?");

/***/ }),

/***/ "./src/resources/wings.jpg":
/*!*********************************!*\
  !*** ./src/resources/wings.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2740510f74bd21538ada.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/resources/wings.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;