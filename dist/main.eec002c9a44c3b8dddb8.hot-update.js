webpackHotUpdate("main",{

/***/ "./node_modules/webpack/buildin/harmony-module.js":
false,

/***/ "./src/authApi.ts":
/*!************************!*\
  !*** ./src/authApi.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Creates new Pilet API extensions for the integration of OAuth 2.0.
 */
function createTestAuthApi() {
  return function (context) {
    return (// context.on('before-fetch', client.extendHeaders);
      {
        foo: function foo() {
          return 'hello!';
        }
      }
    );
  };
}

/* harmony default export */ __webpack_exports__["default"] = (createTestAuthApi);

/***/ })

})
//# sourceMappingURL=main.eec002c9a44c3b8dddb8.hot-update.js.map