webpackHotUpdate("main",{

/***/ "./src/api/custom-api.ts":
/*!*******************************!*\
  !*** ./src/api/custom-api.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var createCustomApi = function createCustomApi() {
  return function () {
    return {
      foo: function foo() {
        return "hello";
      }
    };
  };
};

/* harmony default export */ __webpack_exports__["default"] = (createCustomApi);

/***/ }),

/***/ "./src/custom-api.ts":
false,

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var piral_polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! piral/polyfills */ "./node_modules/piral/polyfills.js");
/* harmony import */ var piral_polyfills__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(piral_polyfills__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var piral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! piral */ "./node_modules/piral/lib/index.js");
/* harmony import */ var piral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(piral__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var piral_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! piral-search */ "./node_modules/piral-search/lib/index.js");
/* harmony import */ var piral_search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(piral_search__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout */ "./src/layout.tsx");
/* harmony import */ var _api_custom_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/custom-api */ "./src/api/custom-api.ts");




 // change to your feed URL here (either using feed.piral.cloud or your own service)

var feedUrl = "https://feed.piral.cloud/api/v1/pilet/matrix-feed";

var _renderInstance = Object(piral__WEBPACK_IMPORTED_MODULE_1__["renderInstance"])({
  layout: _layout__WEBPACK_IMPORTED_MODULE_3__["layout"],
  errors: _layout__WEBPACK_IMPORTED_MODULE_3__["errors"],
  extendApi: [Object(_api_custom_api__WEBPACK_IMPORTED_MODULE_4__["default"])(), Object(piral_search__WEBPACK_IMPORTED_MODULE_2__["createSearchApi"])(), Object(piral__WEBPACK_IMPORTED_MODULE_1__["createFeedsApi"])()],
  requestPilets: function requestPilets() {
    return fetch(feedUrl).then(function (res) {
      return res.json();
    }).then(function (res) {
      return res.items;
    });
  }
}),
    root = _renderInstance.root;

setTimeout(function () {
  alert(root.foo());
}, 2000);

/***/ })

})
//# sourceMappingURL=main.b2c8f8a88b8a7b0aa847.hot-update.js.map