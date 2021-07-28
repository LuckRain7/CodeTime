(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./web/components/brief/index.vue?vue&type=script&lang=ts&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./web/components/brief/index.vue?vue&type=script&lang=ts& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['data'],
  data: function data() {
    return {
      briefData: this.data[0].data
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./web/components/layout/App.vue?vue&type=script&lang=ts&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./web/components/layout/App.vue?vue&type=script&lang=ts& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// 在这里可以进行一些全局组件的注册逻辑
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./web/components/player/index.vue?vue&type=script&lang=ts&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./web/components/player/index.vue?vue&type=script&lang=ts& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['data'],
  data: function data() {
    return {
      playData: this.data[0].data,
      play: false
    };
  },
  methods: {
    playVideo: function playVideo() {
      this.play = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./web/components/recommend/index.vue?vue&type=script&lang=ts&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./web/components/recommend/index.vue?vue&type=script&lang=ts& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['data']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./web/components/search/index.vue?vue&type=script&lang=ts&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./web/components/search/index.vue?vue&type=script&lang=ts& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "vuex");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_1__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


/* harmony default export */ __webpack_exports__["default"] = ({
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])({
    searchText: function searchText(state) {
      return state.searchStore.searchText;
    }
  })),
  methods: {
    setText: function setText(e) {
      this.$store.dispatch('searchStore/setText', {
        payload: {
          text: e.target.value
        }
      });
    },
    toSearch: function toSearch() {
      location.href = "https://search.youku.com/search_video?keyword=".concat(this.searchText);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./web/pages/detail/render$id.vue?vue&type=script&lang=ts&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./web/pages/detail/render$id.vue?vue&type=script&lang=ts& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "vuex");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/player */ "./web/components/player/index.vue");
/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/search */ "./web/components/search/index.vue");
/* harmony import */ var _components_brief__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/brief */ "./web/components/brief/index.vue");
/* harmony import */ var _components_recommend__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/recommend */ "./web/components/recommend/index.vue");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Player: _components_player__WEBPACK_IMPORTED_MODULE_2__["default"],
    Search: _components_search__WEBPACK_IMPORTED_MODULE_3__["default"],
    Brief: _components_brief__WEBPACK_IMPORTED_MODULE_4__["default"],
    Recommend: _components_recommend__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])({
    detailData: function detailData(state) {
      var _state$detailStore;

      return (_state$detailStore = state.detailStore) === null || _state$detailStore === void 0 ? void 0 : _state$detailStore.data;
    }
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./web/pages/index/render.vue?vue&type=script&lang=ts&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./web/pages/index/render.vue?vue&type=script&lang=ts& ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "vuex");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vant_lib_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vant/lib/button */ "vant/lib/button");
/* harmony import */ var vant_lib_button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vant_lib_button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vant_lib_button_index_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vant/lib/button/index.less */ "./node_modules/vant/lib/button/index.less");
/* harmony import */ var vant_lib_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vant/lib/field */ "vant/lib/field");
/* harmony import */ var vant_lib_field__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vant_lib_field__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vant_lib_field_index_less__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vant/lib/field/index.less */ "./node_modules/vant/lib/field/index.less");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/index */ "./web/utils/index.ts");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Button: vant_lib_button__WEBPACK_IMPORTED_MODULE_4___default.a,
    Field: vant_lib_field__WEBPACK_IMPORTED_MODULE_6___default.a
  },
  data: function data() {
    return {
      text: ""
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapState"])({
    indexData: function indexData(state) {
      var _state$indexStore;

      return (_state$indexStore = state.indexStore) === null || _state$indexStore === void 0 ? void 0 : _state$indexStore.data;
    }
  })),
  methods: {
    sumbit: function sumbit() {
      var _this = this;

      return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(_this);
                _context.next = 3;
                return window.fetch("/codetime/upload", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    "x-csrf-token": _utils_index__WEBPACK_IMPORTED_MODULE_8__["default"].getCookie("csrfToken")
                  },
                  body: JSON.stringify({
                    content: _this.text
                  })
                });

              case 3:
                data = _context.sent;
                console.log(data);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-hot-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./web/components/brief/index.vue?vue&type=style&index=0&id=0ae141a6&lang=less&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-hot-loader!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!./node_modules/css-loader??ref--5-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??postcss!./node_modules/less-loader/dist/cjs.js??ref--5-4!./node_modules/vue-loader/lib??vue-loader-options!./web/components/brief/index.vue?vue&type=style&index=0&id=0ae141a6&lang=less&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(false) { var cssReload; }
  

/***/ }),

/***/ "./node_modules/css-hot-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./web/components/layout/index.vue?vue&type=style&index=0&lang=less&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-hot-loader!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!./node_modules/css-loader??ref--5-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??postcss!./node_modules/less-loader/dist/cjs.js??ref--5-4!./node_modules/vue-loader/lib??vue-loader-options!./web/components/layout/index.vue?vue&type=style&index=0&lang=less& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(false) { var cssReload; }
  

/***/ }),

/***/ "./node_modules/css-hot-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./web/components/player/index.vue?vue&type=style&index=0&id=d5c980b8&lang=less&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-hot-loader!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!./node_modules/css-loader??ref--5-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??postcss!./node_modules/less-loader/dist/cjs.js??ref--5-4!./node_modules/vue-loader/lib??vue-loader-options!./web/components/player/index.vue?vue&type=style&index=0&id=d5c980b8&lang=less&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(false) { var cssReload; }
  

/***/ }),

/***/ "./node_modules/css-hot-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./web/components/recommend/index.vue?vue&type=style&index=0&id=ff5d5e22&lang=less&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-hot-loader!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!./node_modules/css-loader??ref--5-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??postcss!./node_modules/less-loader/dist/cjs.js??ref--5-4!./node_modules/vue-loader/lib??vue-loader-options!./web/components/recommend/index.vue?vue&type=style&index=0&id=ff5d5e22&lang=less&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(false) { var cssReload; }
  

/***/ }),

/***/ "./node_modules/css-hot-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./web/components/search/index.vue?vue&type=style&index=0&id=5ee97dab&lang=less&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-hot-loader!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!./node_modules/css-loader??ref--5-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??postcss!./node_modules/less-loader/dist/cjs.js??ref--5-4!./node_modules/vue-loader/lib??vue-loader-options!./web/components/search/index.vue?vue&type=style&index=0&id=5ee97dab&lang=less&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(false) { var cssReload; }
  

/***/ }),

/***/ "./node_modules/css-hot-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./web/pages/index/render.vue?vue&type=style&index=0&id=6781c9f2&lang=less&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-hot-loader!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!./node_modules/css-loader??ref--5-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??postcss!./node_modules/less-loader/dist/cjs.js??ref--5-4!./node_modules/vue-loader/lib??vue-loader-options!./web/pages/index/render.vue?vue&type=style&index=0&id=6781c9f2&lang=less&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(false) { var cssReload; }
  

/***/ }),

/***/ "./node_modules/ssr-plugin-vue/cjs/entry/create.js":
/*!*********************************************************!*\
  !*** ./node_modules/ssr-plugin-vue/cjs/entry/create.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStore = exports.createRouter = void 0; // @ts-nocheck

var Vue = __webpack_require__(/*! vue */ "vue");

var Vuex = __webpack_require__(/*! vuex */ "vuex");

var Router = __webpack_require__(/*! vue-router */ "vue-router");

var ssr_temporary_routes_1 = __webpack_require__(/*! ssr-temporary-routes */ "./node_modules/ssr-temporary-routes/route.js"); // without tsconfig esModuleInterop options must use the compatible syntax


var RealVue = Vue["default"] || Vue;
var RealRouter = Router["default"] || Router;
var RealVuex = Vuex["default"] || Vuex;
RealVue.use(RealRouter);
RealVue.use(RealVuex);

function createRouter() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _a;

  return new RealRouter({
    mode: 'history',
    routes: ssr_temporary_routes_1.FeRoutes,
    base: (_a = options.base) !== null && _a !== void 0 ? _a : '/'
  });
}

exports.createRouter = createRouter;

function createStore() {
  return new Vuex.Store(ssr_temporary_routes_1.store !== null && ssr_temporary_routes_1.store !== void 0 ? ssr_temporary_routes_1.store : {});
}

exports.createStore = createStore;

/***/ }),

/***/ "./node_modules/ssr-plugin-vue/cjs/entry/server-entry.js":
/*!***************************************************************!*\
  !*** ./node_modules/ssr-plugin-vue/cjs/entry/server-entry.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");

var _asyncToGenerator = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Vue = __webpack_require__(/*! vue */ "vue");

var ssr_server_utils_1 = __webpack_require__(/*! ssr-server-utils */ "ssr-server-utils");

var vuex_router_sync_1 = __webpack_require__(/*! vuex-router-sync */ "vuex-router-sync");

var serialize = __webpack_require__(/*! serialize-javascript */ "serialize-javascript"); // @ts-expect-error


var Routes = __webpack_require__(/*! ssr-temporary-routes */ "./node_modules/ssr-temporary-routes/route.js");

var create_1 = __webpack_require__(/*! ./create */ "./node_modules/ssr-plugin-vue/cjs/entry/create.js");

var FeRoutes = Routes.FeRoutes,
    App = Routes.App,
    layoutFetch = Routes.layoutFetch,
    Layout = Routes.Layout,
    BASE_NAME = Routes.BASE_NAME;

var serverRender = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(ctx, config) {
    var _a, _b, router, store, ViteMode, cssOrder, jsOrder, dynamic, mode, customeHeadScript, chunkName, path, routeItem, dynamicCssOrder, manifest, isCsr, fetch, layoutFetchData, fetchData, combineAysncData, state, app;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            router = create_1.createRouter();
            store = create_1.createStore();
            ViteMode = process.env.BUILD_TOOL === 'vite';
            vuex_router_sync_1.sync(store, router);
            cssOrder = config.cssOrder, jsOrder = config.jsOrder, dynamic = config.dynamic, mode = config.mode, customeHeadScript = config.customeHeadScript, chunkName = config.chunkName;
            path = ctx.request.path; // 这里取 pathname 不能够包含 queyString

            if (BASE_NAME) {
              path = ssr_server_utils_1.normalizePath(path);
            }

            routeItem = ssr_server_utils_1.findRoute(FeRoutes, path);

            if (routeItem) {
              _context.next = 10;
              break;
            }

            throw new Error("\n    \u67E5\u627E\u7EC4\u4EF6\u5931\u8D25\uFF0C\u8BF7\u786E\u8BA4\u5F53\u524D path: ".concat(path, " \u5BF9\u5E94\u524D\u7AEF\u7EC4\u4EF6\u662F\u5426\u5B58\u5728\n    \u82E5\u521B\u5EFA\u4E86\u65B0\u7684\u9875\u9762\u6587\u4EF6\u5939\uFF0C\u8BF7\u91CD\u65B0\u6267\u884C npm start \u91CD\u542F\u670D\u52A1\n    "));

          case 10:
            dynamicCssOrder = cssOrder;

            if (!(dynamic && !ViteMode)) {
              _context.next = 16;
              break;
            }

            dynamicCssOrder = cssOrder.concat(["".concat(routeItem.webpackChunkName, ".css")]);
            _context.next = 15;
            return ssr_server_utils_1.addAsyncChunk(dynamicCssOrder, routeItem.webpackChunkName);

          case 15:
            dynamicCssOrder = _context.sent;

          case 16:
            if (!ViteMode) {
              _context.next = 20;
              break;
            }

            _context.t0 = {};
            _context.next = 23;
            break;

          case 20:
            _context.next = 22;
            return ssr_server_utils_1.getManifest();

          case 22:
            _context.t0 = _context.sent;

          case 23:
            manifest = _context.t0;
            isCsr = !!(mode === 'csr' || ((_a = ctx.request.query) === null || _a === void 0 ? void 0 : _a.csr));

            if (isCsr) {
              ssr_server_utils_1.logGreen("Current path ".concat(path, " use csr render mode"));
            }

            fetch = routeItem.fetch; // 根据 path 匹配 router-view 展示的组件

            router.push(path);
            layoutFetchData = {};
            fetchData = {};

            if (isCsr) {
              _context.next = 39;
              break;
            }

            if (!layoutFetch) {
              _context.next = 35;
              break;
            }

            _context.next = 34;
            return layoutFetch({
              store: store,
              router: router.currentRoute
            }, ctx);

          case 34:
            layoutFetchData = _context.sent;

          case 35:
            if (!fetch) {
              _context.next = 39;
              break;
            }

            _context.next = 38;
            return fetch({
              store: store,
              router: router.currentRoute
            }, ctx);

          case 38:
            fetchData = _context.sent;

          case 39:
            combineAysncData = Object.assign({}, layoutFetchData !== null && layoutFetchData !== void 0 ? layoutFetchData : {}, fetchData !== null && fetchData !== void 0 ? fetchData : {});
            state = Object.assign({}, (_b = store.state) !== null && _b !== void 0 ? _b : {}, combineAysncData); // @ts-expect-error

            app = new Vue({
              router: router,
              store: store,
              render: function render(h) {
                var injectCss = [];

                if (ViteMode) {
                  injectCss.push(h('link', {
                    attrs: {
                      rel: 'stylesheet',
                      href: "/server/static/css/".concat(chunkName, ".css")
                    }
                  }));
                } else {
                  dynamicCssOrder.forEach(function (css) {
                    if (manifest[css]) {
                      injectCss.push(h('link', {
                        attrs: {
                          rel: 'stylesheet',
                          href: manifest[css]
                        }
                      }));
                    }
                  });
                }

                var injectScript = ViteMode ? [h('script', {
                  attrs: {
                    type: 'module',
                    src: '/node_modules/ssr-plugin-vue/esm/entry/client-entry.js'
                  }
                })] : jsOrder.map(function (js) {
                  return h('script', {
                    attrs: {
                      src: manifest[js]
                    }
                  });
                });
                var viteClient = h('script', {
                  attrs: {
                    type: 'module',
                    src: '/@vite/client'
                  }
                });
                return h(Layout, {
                  props: {
                    ctx: ctx,
                    config: config,
                    asyncData: combineAysncData,
                    fetchData: layoutFetchData
                  }
                }, [h('template', {
                  slot: 'remInitial'
                }, [h('script', {}, ["var w = document.documentElement.clientWidth / 3.75;document.getElementsByTagName('html')[0].style['font-size'] = w + 'px'"])]), ViteMode && h('template', {
                  slot: 'viteClient'
                }, [viteClient]), h('template', {
                  slot: 'customeHeadScript'
                }, customeHeadScript === null || customeHeadScript === void 0 ? void 0 : customeHeadScript.map(function (item) {
                  return h('script', Object.assign({}, item.describe, {
                    domProps: {
                      innerHTML: item.content
                    }
                  }));
                })), h('template', {
                  slot: 'children'
                }, [isCsr ? h('div', {
                  // csr 只需渲染一个空的 <div id="app"> 不需要渲染具体的组件也就是 router-view
                  attrs: {
                    id: 'app'
                  }
                }) : h(App, {
                  props: {
                    ctx: ctx,
                    config: config,
                    fetchData: combineAysncData
                  }
                })]), h('template', {
                  slot: 'initialData'
                }, [isCsr ? h('script', {
                  domProps: {
                    innerHTML: "window.__USE_VITE__=".concat(ViteMode)
                  }
                }) : h('script', {
                  domProps: {
                    innerHTML: "window.__USE_SSR__=true; window.__INITIAL_DATA__ =".concat(serialize(state), ";window.__USE_VITE__=").concat(ViteMode)
                  }
                })]), h('template', {
                  slot: 'cssInject'
                }, injectCss), h('template', {
                  slot: 'jsInject'
                }, injectScript)]);
              }
            });
            return _context.abrupt("return", app);

          case 43:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function serverRender(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports["default"] = serverRender;

/***/ }),

/***/ "./node_modules/ssr-temporary-routes/route.js":
/*!****************************************************!*\
  !*** ./node_modules/ssr-temporary-routes/route.js ***!
  \****************************************************/
/*! exports provided: FeRoutes, Layout, App, store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeRoutes", function() { return FeRoutes; });
/* harmony import */ var _store_index_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store/index.ts */ "./web/store/index.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "store", function() { return _store_index_ts__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _components_layout_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/layout/index.vue */ "./web/components/layout/index.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return _components_layout_index_vue__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _components_layout_App_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/layout/App.vue */ "./web/components/layout/App.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "App", function() { return _components_layout_App_vue__WEBPACK_IMPORTED_MODULE_2__["default"]; });


var FeRoutes = [{
  "fetch":  false ? undefined : __webpack_require__(/*! @/pages/detail/fetch.ts */ "./web/pages/detail/fetch.ts")["default"],
  "path": "/detail/:id",
  "component":  false ? undefined : __webpack_require__(/*! @/pages/detail/render$id.vue */ "./web/pages/detail/render$id.vue")["default"],
  "webpackChunkName": "detail-id"
}, {
  "fetch":  false ? undefined : __webpack_require__(/*! @/pages/index/fetch.ts */ "./web/pages/index/fetch.ts")["default"],
  "path": "/",
  "component":  false ? undefined : __webpack_require__(/*! @/pages/index/render.vue */ "./web/pages/index/render.vue")["default"],
  "webpackChunkName": "index"
}];




/***/ }),

/***/ "./node_modules/vant/lib/button/index.less":
/*!*************************************************!*\
  !*** ./node_modules/vant/lib/button/index.less ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(false) { var cssReload; }
  

/***/ }),

/***/ "./node_modules/vant/lib/field/index.less":
/*!************************************************!*\
  !*** ./node_modules/vant/lib/field/index.less ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(false) { var cssReload; }
  

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./web/components/brief/index.vue?vue&type=template&id=0ae141a6&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./web/components/brief/index.vue?vue&type=template&id=0ae141a6&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "brief-info" }, [
    _vm._ssrNode(
      '<div class="brief-title" data-v-0ae141a6><span class="[\'icon-GOLDEN\']" data-v-0ae141a6>' +
        _vm._ssrEscape(_vm._s(_vm.briefData.mark.data.text)) +
        "</span> <h1 data-v-0ae141a6>" +
        _vm._ssrEscape(_vm._s(_vm.briefData.showName)) +
        '</h1></div> <div class="brief-score" data-v-0ae141a6>' +
        _vm._ssrList(_vm.briefData.subTitleList, function(item, index) {
          return (
            "<span" +
            _vm._ssrClass(
              null,
              item.subtitleType === "PLAY_VV" ? "hotVv" : ""
            ) +
            " data-v-0ae141a6>" +
            (item.subtitleType === "PLAY_VV"
              ? "<img" +
                _vm._ssrAttr("src", _vm.briefData.heatIcon) +
                " alt data-v-0ae141a6>"
              : "<!---->") +
            " " +
            (index > 0
              ? '<span class="divide" data-v-0ae141a6>/</span>'
              : "<!---->") +
            " <span data-v-0ae141a6>" +
            _vm._ssrEscape(_vm._s(item.subtitle)) +
            "</span></span>"
          )
        }) +
        "</div>"
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./web/components/layout/App.vue?vue&type=template&id=185cf71c&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./web/components/layout/App.vue?vue&type=template&id=185cf71c& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "app" } }, [_c("router-view")], 1)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./web/components/layout/index.vue?vue&type=template&id=9a12cea6&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./web/components/layout/index.vue?vue&type=template&id=9a12cea6& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "html",
    [
      _vm._ssrNode(
        "<head>",
        "</head>",
        [
          _vm._ssrNode(
            '<meta charSet="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"> <meta name="theme-color" content="#000000"> <title>Serverless Side Render for Vue</title> '
          ),
          _vm._t("viteClient"),
          _vm._ssrNode(" "),
          _vm._t("remInitial"),
          _vm._ssrNode(" "),
          _vm._t("customeHeadScript"),
          _vm._ssrNode(" "),
          _vm._t("cssInject")
        ],
        2
      ),
      _vm._ssrNode(" "),
      _vm._ssrNode(
        "<body>",
        "</body>",
        [
          _vm._t("children"),
          _vm._ssrNode(" "),
          _vm._t("initialData"),
          _vm._ssrNode(" "),
          _vm._t("jsInject")
        ],
        2
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./web/components/player/index.vue?vue&type=template&id=d5c980b8&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./web/components/player/index.vue?vue&type=template&id=d5c980b8&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._ssrNode(
      _vm.play
        ? '<div data-v-d5c980b8><video src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" controls="controls" autoPlay class="video" data-v-d5c980b8>\n      your browser does not support the video tag\n    </video></div>'
        : '<div class="playerContainer"' +
            _vm._ssrStyle(
              null,
              { background: "url(" + _vm.playData.img + ") 0 0 /cover" },
              null
            ) +
            ' data-v-d5c980b8><div class="title" data-v-d5c980b8>' +
            _vm._ssrEscape("\n      " + _vm._s(_vm.playData.title) + "\n    ") +
            '</div> <img src="https://gw.alicdn.com/tfs/TB1eA6FEW61gK0jSZFlXXXDKFXa-135-135.png" class="ico" data-v-d5c980b8> <div class="layer" data-v-d5c980b8></div></div>'
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./web/components/recommend/index.vue?vue&type=template&id=ff5d5e22&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./web/components/recommend/index.vue?vue&type=template&id=ff5d5e22&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._ssrNode(
      '<div class="title" data-v-ff5d5e22>\n    为你推荐\n  </div> <div class="reContainer" data-v-ff5d5e22>' +
        _vm._ssrList(_vm.data, function(item) {
          return (
            '<div class="reContent" data-v-ff5d5e22><img' +
            _vm._ssrAttr("src", item.data.img) +
            ' data-v-ff5d5e22> <div class="vTitle" data-v-ff5d5e22>' +
            _vm._ssrEscape(
              "\n        " + _vm._s(item.data.title) + "\n      "
            ) +
            '</div> <div class="subTitle" data-v-ff5d5e22>' +
            _vm._ssrEscape(
              "\n        " + _vm._s(item.data.subtitle) + "\n      "
            ) +
            "</div></div>"
          )
        }) +
        "</div>"
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./web/components/search/index.vue?vue&type=template&id=5ee97dab&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./web/components/search/index.vue?vue&type=template&id=5ee97dab&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "searchContainer" }, [
    _vm._ssrNode(
      '<input type="text" placeholder="该搜索框内容会在所有页面共享"' +
        _vm._ssrAttr("value", _vm.searchText) +
        ' class="input" data-v-5ee97dab> <img src="https://img.alicdn.com/tfs/TB15zSoX21TBuNjy0FjXXajyXXa-48-48.png" alt class="searchImg" data-v-5ee97dab>'
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./web/pages/detail/render$id.vue?vue&type=template&id=29d0a63f&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./web/pages/detail/render$id.vue?vue&type=template&id=29d0a63f& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("Search"),
      _vm._ssrNode(" "),
      _vm.detailData
        ? [
            _c("Player", { attrs: { data: _vm.detailData.data[0].dataNode } }),
            _vm._ssrNode(" "),
            _c("Brief", { attrs: { data: _vm.detailData.data[1].dataNode } }),
            _vm._ssrNode(" "),
            _c("Recommend", {
              attrs: { data: _vm.detailData.data[2].dataNode }
            })
          ]
        : _vm._ssrNode(
            '<img src="https://gw.alicdn.com/tfs/TB1v.zIE7T2gK0jSZPcXXcKkpXa-128-128.gif" class="loading">'
          )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./web/pages/index/render.vue?vue&type=template&id=6781c9f2&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./web/pages/index/render.vue?vue&type=template&id=6781c9f2&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "content" },
    [
      _vm._ssrNode("<h1 data-v-6781c9f2>导入 WakaTime 数据</h1> "),
      _vm._ssrNode(
        '<div style="margin-top: 20px" data-v-6781c9f2>',
        "</div>",
        [
          _c("Field", {
            staticClass: "text-area",
            attrs: {
              placeholder: "WakaTime Content",
              type: "textarea",
              autosize: "",
              rows: "40"
            },
            model: {
              value: _vm.text,
              callback: function($$v) {
                _vm.text = $$v
              },
              expression: "text"
            }
          })
        ],
        1
      ),
      _vm._ssrNode(" "),
      _vm._ssrNode(
        '<div style="margin-top: 20px" data-v-6781c9f2>',
        "</div>",
        [
          _c(
            "Button",
            { attrs: { type: "primary" }, on: { click: _vm.sumbit } },
            [_vm._v(" 提交 ")]
          )
        ],
        1
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./web/components/brief/index.vue":
/*!****************************************!*\
  !*** ./web/components/brief/index.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_0ae141a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=0ae141a6&scoped=true& */ "./web/components/brief/index.vue?vue&type=template&id=0ae141a6&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=ts& */ "./web/components/brief/index.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  var style0 = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=0ae141a6&lang=less&scoped=true& */ "./web/components/brief/index.vue?vue&type=style&index=0&id=0ae141a6&lang=less&scoped=true&")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_0ae141a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_0ae141a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  "0ae141a6",
  "27c3082e"
  
)

component.options.__file = "web/components/brief/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./web/components/brief/index.vue?vue&type=script&lang=ts&":
/*!*****************************************************************!*\
  !*** ./web/components/brief/index.vue?vue&type=script&lang=ts& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--2-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./web/components/brief/index.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./web/components/brief/index.vue?vue&type=style&index=0&id=0ae141a6&lang=less&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./web/components/brief/index.vue?vue&type=style&index=0&id=0ae141a6&lang=less&scoped=true& ***!
  \**************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_hot_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_1_node_modules_css_loader_index_js_ref_5_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_less_loader_dist_cjs_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0ae141a6_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-hot-loader!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!../../../node_modules/css-loader??ref--5-2!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/less-loader/dist/cjs.js??ref--5-4!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=0ae141a6&lang=less&scoped=true& */ "./node_modules/css-hot-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./web/components/brief/index.vue?vue&type=style&index=0&id=0ae141a6&lang=less&scoped=true&");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./web/components/brief/index.vue?vue&type=template&id=0ae141a6&scoped=true&":
/*!***********************************************************************************!*\
  !*** ./web/components/brief/index.vue?vue&type=template&id=0ae141a6&scoped=true& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0ae141a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=0ae141a6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./web/components/brief/index.vue?vue&type=template&id=0ae141a6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0ae141a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0ae141a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./web/components/layout/App.vue":
/*!***************************************!*\
  !*** ./web/components/layout/App.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_185cf71c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=185cf71c& */ "./web/components/layout/App.vue?vue&type=template&id=185cf71c&");
/* harmony import */ var _App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=ts& */ "./web/components/layout/App.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_185cf71c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_185cf71c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "6100ac0a"
  
)

component.options.__file = "web/components/layout/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./web/components/layout/App.vue?vue&type=script&lang=ts&":
/*!****************************************************************!*\
  !*** ./web/components/layout/App.vue?vue&type=script&lang=ts& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--2-0!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./web/components/layout/App.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./web/components/layout/App.vue?vue&type=template&id=185cf71c&":
/*!**********************************************************************!*\
  !*** ./web/components/layout/App.vue?vue&type=template&id=185cf71c& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_185cf71c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=185cf71c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./web/components/layout/App.vue?vue&type=template&id=185cf71c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_185cf71c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_185cf71c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./web/components/layout/index.vue":
/*!*****************************************!*\
  !*** ./web/components/layout/index.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_9a12cea6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=9a12cea6& */ "./web/components/layout/index.vue?vue&type=template&id=9a12cea6&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=less& */ "./web/components/layout/index.vue?vue&type=style&index=0&lang=less&")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _index_vue_vue_type_template_id_9a12cea6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_9a12cea6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  null,
  "2c380fcc"
  
)

component.options.__file = "web/components/layout/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./web/components/layout/index.vue?vue&type=style&index=0&lang=less&":
/*!***************************************************************************!*\
  !*** ./web/components/layout/index.vue?vue&type=style&index=0&lang=less& ***!
  \***************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_hot_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_1_node_modules_css_loader_index_js_ref_5_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_less_loader_dist_cjs_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-hot-loader!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!../../../node_modules/css-loader??ref--5-2!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/less-loader/dist/cjs.js??ref--5-4!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=less& */ "./node_modules/css-hot-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./web/components/layout/index.vue?vue&type=style&index=0&lang=less&");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./web/components/layout/index.vue?vue&type=template&id=9a12cea6&":
/*!************************************************************************!*\
  !*** ./web/components/layout/index.vue?vue&type=template&id=9a12cea6& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_9a12cea6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=9a12cea6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./web/components/layout/index.vue?vue&type=template&id=9a12cea6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_9a12cea6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_9a12cea6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./web/components/player/index.vue":
/*!*****************************************!*\
  !*** ./web/components/player/index.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_d5c980b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=d5c980b8&scoped=true& */ "./web/components/player/index.vue?vue&type=template&id=d5c980b8&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=ts& */ "./web/components/player/index.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  var style0 = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=d5c980b8&lang=less&scoped=true& */ "./web/components/player/index.vue?vue&type=style&index=0&id=d5c980b8&lang=less&scoped=true&")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_d5c980b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_d5c980b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  "d5c980b8",
  "0e5cb6c3"
  
)

component.options.__file = "web/components/player/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./web/components/player/index.vue?vue&type=script&lang=ts&":
/*!******************************************************************!*\
  !*** ./web/components/player/index.vue?vue&type=script&lang=ts& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--2-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./web/components/player/index.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./web/components/player/index.vue?vue&type=style&index=0&id=d5c980b8&lang=less&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./web/components/player/index.vue?vue&type=style&index=0&id=d5c980b8&lang=less&scoped=true& ***!
  \***************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_hot_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_1_node_modules_css_loader_index_js_ref_5_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_less_loader_dist_cjs_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_d5c980b8_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-hot-loader!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!../../../node_modules/css-loader??ref--5-2!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/less-loader/dist/cjs.js??ref--5-4!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=d5c980b8&lang=less&scoped=true& */ "./node_modules/css-hot-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./web/components/player/index.vue?vue&type=style&index=0&id=d5c980b8&lang=less&scoped=true&");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./web/components/player/index.vue?vue&type=template&id=d5c980b8&scoped=true&":
/*!************************************************************************************!*\
  !*** ./web/components/player/index.vue?vue&type=template&id=d5c980b8&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d5c980b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=d5c980b8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./web/components/player/index.vue?vue&type=template&id=d5c980b8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d5c980b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d5c980b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./web/components/recommend/index.vue":
/*!********************************************!*\
  !*** ./web/components/recommend/index.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_ff5d5e22_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=ff5d5e22&scoped=true& */ "./web/components/recommend/index.vue?vue&type=template&id=ff5d5e22&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=ts& */ "./web/components/recommend/index.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  var style0 = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=ff5d5e22&lang=less&scoped=true& */ "./web/components/recommend/index.vue?vue&type=style&index=0&id=ff5d5e22&lang=less&scoped=true&")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_ff5d5e22_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_ff5d5e22_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  "ff5d5e22",
  "29969170"
  
)

component.options.__file = "web/components/recommend/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./web/components/recommend/index.vue?vue&type=script&lang=ts&":
/*!*********************************************************************!*\
  !*** ./web/components/recommend/index.vue?vue&type=script&lang=ts& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--2-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./web/components/recommend/index.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./web/components/recommend/index.vue?vue&type=style&index=0&id=ff5d5e22&lang=less&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./web/components/recommend/index.vue?vue&type=style&index=0&id=ff5d5e22&lang=less&scoped=true& ***!
  \******************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_hot_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_1_node_modules_css_loader_index_js_ref_5_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_less_loader_dist_cjs_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ff5d5e22_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-hot-loader!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!../../../node_modules/css-loader??ref--5-2!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/less-loader/dist/cjs.js??ref--5-4!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=ff5d5e22&lang=less&scoped=true& */ "./node_modules/css-hot-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./web/components/recommend/index.vue?vue&type=style&index=0&id=ff5d5e22&lang=less&scoped=true&");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./web/components/recommend/index.vue?vue&type=template&id=ff5d5e22&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./web/components/recommend/index.vue?vue&type=template&id=ff5d5e22&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_ff5d5e22_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=ff5d5e22&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./web/components/recommend/index.vue?vue&type=template&id=ff5d5e22&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_ff5d5e22_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_ff5d5e22_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./web/components/search/index.vue":
/*!*****************************************!*\
  !*** ./web/components/search/index.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_5ee97dab_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=5ee97dab&scoped=true& */ "./web/components/search/index.vue?vue&type=template&id=5ee97dab&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=ts& */ "./web/components/search/index.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  var style0 = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=5ee97dab&lang=less&scoped=true& */ "./web/components/search/index.vue?vue&type=style&index=0&id=5ee97dab&lang=less&scoped=true&")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_5ee97dab_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_5ee97dab_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  "5ee97dab",
  "4faa166c"
  
)

component.options.__file = "web/components/search/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./web/components/search/index.vue?vue&type=script&lang=ts&":
/*!******************************************************************!*\
  !*** ./web/components/search/index.vue?vue&type=script&lang=ts& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--2-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./web/components/search/index.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./web/components/search/index.vue?vue&type=style&index=0&id=5ee97dab&lang=less&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./web/components/search/index.vue?vue&type=style&index=0&id=5ee97dab&lang=less&scoped=true& ***!
  \***************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_hot_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_1_node_modules_css_loader_index_js_ref_5_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_less_loader_dist_cjs_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5ee97dab_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-hot-loader!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!../../../node_modules/css-loader??ref--5-2!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/less-loader/dist/cjs.js??ref--5-4!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=5ee97dab&lang=less&scoped=true& */ "./node_modules/css-hot-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./web/components/search/index.vue?vue&type=style&index=0&id=5ee97dab&lang=less&scoped=true&");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./web/components/search/index.vue?vue&type=template&id=5ee97dab&scoped=true&":
/*!************************************************************************************!*\
  !*** ./web/components/search/index.vue?vue&type=template&id=5ee97dab&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5ee97dab_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=5ee97dab&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./web/components/search/index.vue?vue&type=template&id=5ee97dab&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5ee97dab_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5ee97dab_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./web/pages/detail/fetch.ts":
/*!***********************************!*\
  !*** ./web/pages/detail/fetch.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/(function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(_ref, ctx) {
    var _ctx$apiDeatilservice;

    var store, router, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            store = _ref.store, router = _ref.router;

            if (true) {
              _context.next = 9;
              break;
            }

            _context.next = 4;
            return window.fetch("/api/detail/".concat(router.params.id));

          case 4:
            _context.next = 6;
            return _context.sent.json();

          case 6:
            _context.t0 = _context.sent;
            _context.next = 12;
            break;

          case 9:
            _context.next = 11;
            return ctx === null || ctx === void 0 ? void 0 : (_ctx$apiDeatilservice = ctx.apiDeatilservice) === null || _ctx$apiDeatilservice === void 0 ? void 0 : _ctx$apiDeatilservice.index(ctx.params.id);

          case 11:
            _context.t0 = _context.sent;

          case 12:
            data = _context.t0;
            _context.next = 15;
            return store.dispatch('detailStore/initialData', {
              payload: data
            });

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref2.apply(this, arguments);
  };
})());

/***/ }),

/***/ "./web/pages/detail/render$id.vue":
/*!****************************************!*\
  !*** ./web/pages/detail/render$id.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _render$id_vue_vue_type_template_id_29d0a63f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render$id.vue?vue&type=template&id=29d0a63f& */ "./web/pages/detail/render$id.vue?vue&type=template&id=29d0a63f&");
/* harmony import */ var _render$id_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render$id.vue?vue&type=script&lang=ts& */ "./web/pages/detail/render$id.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _render$id_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _render$id_vue_vue_type_template_id_29d0a63f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _render$id_vue_vue_type_template_id_29d0a63f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  null,
  "57044f40"
  
)

component.options.__file = "web/pages/detail/render$id.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./web/pages/detail/render$id.vue?vue&type=script&lang=ts&":
/*!*****************************************************************!*\
  !*** ./web/pages/detail/render$id.vue?vue&type=script&lang=ts& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_render$id_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--2-0!../../../node_modules/vue-loader/lib??vue-loader-options!./render$id.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./web/pages/detail/render$id.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_render$id_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./web/pages/detail/render$id.vue?vue&type=template&id=29d0a63f&":
/*!***********************************************************************!*\
  !*** ./web/pages/detail/render$id.vue?vue&type=template&id=29d0a63f& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_render$id_vue_vue_type_template_id_29d0a63f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./render$id.vue?vue&type=template&id=29d0a63f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./web/pages/detail/render$id.vue?vue&type=template&id=29d0a63f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_render$id_vue_vue_type_template_id_29d0a63f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_render$id_vue_vue_type_template_id_29d0a63f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./web/pages/index/fetch.ts":
/*!**********************************!*\
  !*** ./web/pages/index/fetch.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/(function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(_ref, ctx) {
    var _ctx$apiService;

    var store, router, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            store = _ref.store, router = _ref.router;

            if (true) {
              _context.next = 9;
              break;
            }

            _context.next = 4;
            return window.fetch('/api/index');

          case 4:
            _context.next = 6;
            return _context.sent.json();

          case 6:
            _context.t0 = _context.sent;
            _context.next = 12;
            break;

          case 9:
            _context.next = 11;
            return ctx === null || ctx === void 0 ? void 0 : (_ctx$apiService = ctx.apiService) === null || _ctx$apiService === void 0 ? void 0 : _ctx$apiService.index();

          case 11:
            _context.t0 = _context.sent;

          case 12:
            data = _context.t0;
            _context.next = 15;
            return store.dispatch('indexStore/initialData', {
              payload: data
            });

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref2.apply(this, arguments);
  };
})());

/***/ }),

/***/ "./web/pages/index/render.vue":
/*!************************************!*\
  !*** ./web/pages/index/render.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _render_vue_vue_type_template_id_6781c9f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.vue?vue&type=template&id=6781c9f2&scoped=true& */ "./web/pages/index/render.vue?vue&type=template&id=6781c9f2&scoped=true&");
/* harmony import */ var _render_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.vue?vue&type=script&lang=ts& */ "./web/pages/index/render.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  var style0 = __webpack_require__(/*! ./render.vue?vue&type=style&index=0&id=6781c9f2&lang=less&scoped=true& */ "./web/pages/index/render.vue?vue&type=style&index=0&id=6781c9f2&lang=less&scoped=true&")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _render_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _render_vue_vue_type_template_id_6781c9f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _render_vue_vue_type_template_id_6781c9f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  "6781c9f2",
  "61e96c88"
  
)

component.options.__file = "web/pages/index/render.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./web/pages/index/render.vue?vue&type=script&lang=ts&":
/*!*************************************************************!*\
  !*** ./web/pages/index/render.vue?vue&type=script&lang=ts& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_render_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--2-0!../../../node_modules/vue-loader/lib??vue-loader-options!./render.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./web/pages/index/render.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_render_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./web/pages/index/render.vue?vue&type=style&index=0&id=6781c9f2&lang=less&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./web/pages/index/render.vue?vue&type=style&index=0&id=6781c9f2&lang=less&scoped=true& ***!
  \**********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_hot_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_1_node_modules_css_loader_index_js_ref_5_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_less_loader_dist_cjs_js_ref_5_4_node_modules_vue_loader_lib_index_js_vue_loader_options_render_vue_vue_type_style_index_0_id_6781c9f2_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-hot-loader!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!../../../node_modules/css-loader??ref--5-2!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/less-loader/dist/cjs.js??ref--5-4!../../../node_modules/vue-loader/lib??vue-loader-options!./render.vue?vue&type=style&index=0&id=6781c9f2&lang=less&scoped=true& */ "./node_modules/css-hot-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./web/pages/index/render.vue?vue&type=style&index=0&id=6781c9f2&lang=less&scoped=true&");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./web/pages/index/render.vue?vue&type=template&id=6781c9f2&scoped=true&":
/*!*******************************************************************************!*\
  !*** ./web/pages/index/render.vue?vue&type=template&id=6781c9f2&scoped=true& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_render_vue_vue_type_template_id_6781c9f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./render.vue?vue&type=template&id=6781c9f2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./web/pages/index/render.vue?vue&type=template&id=6781c9f2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_render_vue_vue_type_template_id_6781c9f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_render_vue_vue_type_template_id_6781c9f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./web/store/index.ts":
/*!****************************!*\
  !*** ./web/store/index.ts ***!
  \****************************/
/*! exports provided: modules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modules", function() { return modules; });
/* harmony import */ var _modules_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/index */ "./web/store/modules/index.ts");
/* harmony import */ var _modules_detail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/detail */ "./web/store/modules/detail.ts");
/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/search */ "./web/store/modules/search.ts");



var modules = {
  indexStore: _modules_index__WEBPACK_IMPORTED_MODULE_0__["indexStore"],
  detailStore: _modules_detail__WEBPACK_IMPORTED_MODULE_1__["detailStore"],
  searchStore: _modules_search__WEBPACK_IMPORTED_MODULE_2__["searchStore"]
};


/***/ }),

/***/ "./web/store/modules/detail.ts":
/*!*************************************!*\
  !*** ./web/store/modules/detail.ts ***!
  \*************************************/
/*! exports provided: detailStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detailStore", function() { return detailStore; });
var detailStore = {
  namespaced: true,
  state: {
    data: {}
  },
  mutations: {
    setData: function setData(state, payload) {
      state.data = payload;
    }
  },
  actions: {
    initialData: function initialData(_ref, _ref2) {
      var commit = _ref.commit;
      var payload = _ref2.payload;
      commit('setData', payload);
    }
  }
};


/***/ }),

/***/ "./web/store/modules/index.ts":
/*!************************************!*\
  !*** ./web/store/modules/index.ts ***!
  \************************************/
/*! exports provided: indexStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexStore", function() { return indexStore; });
var indexStore = {
  namespaced: true,
  state: {
    data: {}
  },
  mutations: {
    setData: function setData(state, payload) {
      state.data = payload.data;
    }
  },
  actions: {
    initialData: function initialData(_ref, _ref2) {
      var commit = _ref.commit;
      var payload = _ref2.payload;
      commit('setData', payload);
    }
  }
};


/***/ }),

/***/ "./web/store/modules/search.ts":
/*!*************************************!*\
  !*** ./web/store/modules/search.ts ***!
  \*************************************/
/*! exports provided: searchStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchStore", function() { return searchStore; });
var searchStore = {
  namespaced: true,
  state: {
    searchText: ''
  },
  mutations: {
    setText: function setText(state, payload) {
      state.searchText = payload.text;
    }
  },
  actions: {
    setText: function setText(_ref, _ref2) {
      var commit = _ref.commit;
      var payload = _ref2.payload;
      commit('setText', payload);
    }
  }
};


/***/ }),

/***/ "./web/utils/index.ts":
/*!****************************!*\
  !*** ./web/utils/index.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function getCookie(name) {
  var arr,
      reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg)) return unescape(arr[2]);else return null;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  getCookie: getCookie
});

/***/ }),

/***/ 0:
/*!*********************************************************************!*\
  !*** multi ./node_modules/ssr-plugin-vue/cjs/entry/server-entry.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nowcoder/code/RAIN/CodeTime/node_modules/ssr-plugin-vue/cjs/entry/server-entry.js */"./node_modules/ssr-plugin-vue/cjs/entry/server-entry.js");


/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),

/***/ "ssr-server-utils":
/*!***********************************!*\
  !*** external "ssr-server-utils" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ssr-server-utils");

/***/ }),

/***/ "vant/lib/button":
/*!**********************************!*\
  !*** external "vant/lib/button" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("vant/lib/button");

/***/ }),

/***/ "vant/lib/field":
/*!*********************************!*\
  !*** external "vant/lib/field" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("vant/lib/field");

/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "vue-router":
/*!*****************************!*\
  !*** external "vue-router" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),

/***/ "vuex":
/*!***********************!*\
  !*** external "vuex" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),

/***/ "vuex-router-sync":
/*!***********************************!*\
  !*** external "vuex-router-sync" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("vuex-router-sync");

/***/ })

/******/ })));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYi9jb21wb25lbnRzL2JyaWVmL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vd2ViL2NvbXBvbmVudHMvbGF5b3V0L0FwcC52dWUiLCJ3ZWJwYWNrOi8vL3dlYi9jb21wb25lbnRzL3BsYXllci9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vL3dlYi9jb21wb25lbnRzL3JlY29tbWVuZC9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vL3dlYi9jb21wb25lbnRzL3NlYXJjaC9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vL3dlYi9wYWdlcy9kZXRhaWwvcmVuZGVyJGlkLnZ1ZSIsIndlYnBhY2s6Ly8vd2ViL3BhZ2VzL2luZGV4L3JlbmRlci52dWUiLCJ3ZWJwYWNrOi8vLy4vd2ViL2NvbXBvbmVudHMvYnJpZWYvaW5kZXgudnVlP2NiZWMiLCJ3ZWJwYWNrOi8vLy4vd2ViL2NvbXBvbmVudHMvbGF5b3V0L2luZGV4LnZ1ZT9mYjJiIiwid2VicGFjazovLy8uL3dlYi9jb21wb25lbnRzL3BsYXllci9pbmRleC52dWU/YzdkYyIsIndlYnBhY2s6Ly8vLi93ZWIvY29tcG9uZW50cy9yZWNvbW1lbmQvaW5kZXgudnVlPzdjMDkiLCJ3ZWJwYWNrOi8vLy4vd2ViL2NvbXBvbmVudHMvc2VhcmNoL2luZGV4LnZ1ZT80MzgzIiwid2VicGFjazovLy8uL3dlYi9wYWdlcy9pbmRleC9yZW5kZXIudnVlPzlkZTEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Nzci1wbHVnaW4tdnVlL2Nqcy9lbnRyeS9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Nzci1wbHVnaW4tdnVlL2Nqcy9lbnRyeS9zZXJ2ZXItZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Nzci10ZW1wb3Jhcnktcm91dGVzL3JvdXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YW50L2xpYi9idXR0b24vaW5kZXgubGVzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFudC9saWIvZmllbGQvaW5kZXgubGVzcyIsIndlYnBhY2s6Ly8vLi93ZWIvY29tcG9uZW50cy9icmllZi9pbmRleC52dWU/NGFkMSIsIndlYnBhY2s6Ly8vLi93ZWIvY29tcG9uZW50cy9sYXlvdXQvQXBwLnZ1ZT8yMmIyIiwid2VicGFjazovLy8uL3dlYi9jb21wb25lbnRzL2xheW91dC9pbmRleC52dWU/YjEwNiIsIndlYnBhY2s6Ly8vLi93ZWIvY29tcG9uZW50cy9wbGF5ZXIvaW5kZXgudnVlPzFmOWMiLCJ3ZWJwYWNrOi8vLy4vd2ViL2NvbXBvbmVudHMvcmVjb21tZW5kL2luZGV4LnZ1ZT9iYmMwIiwid2VicGFjazovLy8uL3dlYi9jb21wb25lbnRzL3NlYXJjaC9pbmRleC52dWU/OTE4YiIsIndlYnBhY2s6Ly8vLi93ZWIvcGFnZXMvZGV0YWlsL3JlbmRlciRpZC52dWU/NjQzNCIsIndlYnBhY2s6Ly8vLi93ZWIvcGFnZXMvaW5kZXgvcmVuZGVyLnZ1ZT8xN2ViIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vd2ViL2NvbXBvbmVudHMvYnJpZWYvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3dlYi9jb21wb25lbnRzL2JyaWVmL2luZGV4LnZ1ZT9jNGRhIiwid2VicGFjazovLy8uL3dlYi9jb21wb25lbnRzL2JyaWVmL2luZGV4LnZ1ZT8xZGNmIiwid2VicGFjazovLy8uL3dlYi9jb21wb25lbnRzL2JyaWVmL2luZGV4LnZ1ZT8wNmFkIiwid2VicGFjazovLy8uL3dlYi9jb21wb25lbnRzL2xheW91dC9BcHAudnVlIiwid2VicGFjazovLy8uL3dlYi9jb21wb25lbnRzL2xheW91dC9BcHAudnVlP2NjM2YiLCJ3ZWJwYWNrOi8vLy4vd2ViL2NvbXBvbmVudHMvbGF5b3V0L0FwcC52dWU/MmM3OCIsIndlYnBhY2s6Ly8vLi93ZWIvY29tcG9uZW50cy9sYXlvdXQvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3dlYi9jb21wb25lbnRzL2xheW91dC9pbmRleC52dWU/OTkzMSIsIndlYnBhY2s6Ly8vLi93ZWIvY29tcG9uZW50cy9sYXlvdXQvaW5kZXgudnVlPzkzMTMiLCJ3ZWJwYWNrOi8vLy4vd2ViL2NvbXBvbmVudHMvcGxheWVyL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi93ZWIvY29tcG9uZW50cy9wbGF5ZXIvaW5kZXgudnVlPzY2Y2EiLCJ3ZWJwYWNrOi8vLy4vd2ViL2NvbXBvbmVudHMvcGxheWVyL2luZGV4LnZ1ZT9mMzM2Iiwid2VicGFjazovLy8uL3dlYi9jb21wb25lbnRzL3BsYXllci9pbmRleC52dWU/ZTdmNCIsIndlYnBhY2s6Ly8vLi93ZWIvY29tcG9uZW50cy9yZWNvbW1lbmQvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3dlYi9jb21wb25lbnRzL3JlY29tbWVuZC9pbmRleC52dWU/NmE3YyIsIndlYnBhY2s6Ly8vLi93ZWIvY29tcG9uZW50cy9yZWNvbW1lbmQvaW5kZXgudnVlPzE4YjciLCJ3ZWJwYWNrOi8vLy4vd2ViL2NvbXBvbmVudHMvcmVjb21tZW5kL2luZGV4LnZ1ZT8zOTUxIiwid2VicGFjazovLy8uL3dlYi9jb21wb25lbnRzL3NlYXJjaC9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vd2ViL2NvbXBvbmVudHMvc2VhcmNoL2luZGV4LnZ1ZT8yNTc4Iiwid2VicGFjazovLy8uL3dlYi9jb21wb25lbnRzL3NlYXJjaC9pbmRleC52dWU/NDk1MSIsIndlYnBhY2s6Ly8vLi93ZWIvY29tcG9uZW50cy9zZWFyY2gvaW5kZXgudnVlPzhhNDMiLCJ3ZWJwYWNrOi8vLy4vd2ViL3BhZ2VzL2RldGFpbC9mZXRjaC50cyIsIndlYnBhY2s6Ly8vLi93ZWIvcGFnZXMvZGV0YWlsL3JlbmRlciRpZC52dWUiLCJ3ZWJwYWNrOi8vLy4vd2ViL3BhZ2VzL2RldGFpbC9yZW5kZXIkaWQudnVlP2YwODciLCJ3ZWJwYWNrOi8vLy4vd2ViL3BhZ2VzL2RldGFpbC9yZW5kZXIkaWQudnVlP2U3Y2MiLCJ3ZWJwYWNrOi8vLy4vd2ViL3BhZ2VzL2luZGV4L2ZldGNoLnRzIiwid2VicGFjazovLy8uL3dlYi9wYWdlcy9pbmRleC9yZW5kZXIudnVlIiwid2VicGFjazovLy8uL3dlYi9wYWdlcy9pbmRleC9yZW5kZXIudnVlP2YxYjkiLCJ3ZWJwYWNrOi8vLy4vd2ViL3BhZ2VzL2luZGV4L3JlbmRlci52dWU/NmI3MSIsIndlYnBhY2s6Ly8vLi93ZWIvcGFnZXMvaW5kZXgvcmVuZGVyLnZ1ZT80OTQzIiwid2VicGFjazovLy8uL3dlYi9zdG9yZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi93ZWIvc3RvcmUvbW9kdWxlcy9kZXRhaWwudHMiLCJ3ZWJwYWNrOi8vLy4vd2ViL3N0b3JlL21vZHVsZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vd2ViL3N0b3JlL21vZHVsZXMvc2VhcmNoLnRzIiwid2VicGFjazovLy8uL3dlYi91dGlscy9pbmRleC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNzci1zZXJ2ZXItdXRpbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ2YW50L2xpYi9idXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ2YW50L2xpYi9maWVsZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInZ1ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInZ1ZS1yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ2dWV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidnVleC1yb3V0ZXItc3luY1wiIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY3JlYXRlU3RvcmUiLCJjcmVhdGVSb3V0ZXIiLCJWdWUiLCJyZXF1aXJlIiwiVnVleCIsIlJvdXRlciIsInNzcl90ZW1wb3Jhcnlfcm91dGVzXzEiLCJSZWFsVnVlIiwiUmVhbFJvdXRlciIsIlJlYWxWdWV4IiwidXNlIiwib3B0aW9ucyIsIl9hIiwibW9kZSIsInJvdXRlcyIsIkZlUm91dGVzIiwiYmFzZSIsIlN0b3JlIiwic3RvcmUiLCJzc3Jfc2VydmVyX3V0aWxzXzEiLCJ2dWV4X3JvdXRlcl9zeW5jXzEiLCJzZXJpYWxpemUiLCJSb3V0ZXMiLCJjcmVhdGVfMSIsIkFwcCIsImxheW91dEZldGNoIiwiTGF5b3V0IiwiQkFTRV9OQU1FIiwic2VydmVyUmVuZGVyIiwiY3R4IiwiY29uZmlnIiwicm91dGVyIiwiVml0ZU1vZGUiLCJwcm9jZXNzIiwiZW52IiwiQlVJTERfVE9PTCIsInN5bmMiLCJjc3NPcmRlciIsImpzT3JkZXIiLCJkeW5hbWljIiwiY3VzdG9tZUhlYWRTY3JpcHQiLCJjaHVua05hbWUiLCJwYXRoIiwicmVxdWVzdCIsIm5vcm1hbGl6ZVBhdGgiLCJyb3V0ZUl0ZW0iLCJmaW5kUm91dGUiLCJFcnJvciIsImR5bmFtaWNDc3NPcmRlciIsImNvbmNhdCIsIndlYnBhY2tDaHVua05hbWUiLCJhZGRBc3luY0NodW5rIiwiZ2V0TWFuaWZlc3QiLCJtYW5pZmVzdCIsImlzQ3NyIiwicXVlcnkiLCJjc3IiLCJsb2dHcmVlbiIsImZldGNoIiwicHVzaCIsImxheW91dEZldGNoRGF0YSIsImZldGNoRGF0YSIsImN1cnJlbnRSb3V0ZSIsImNvbWJpbmVBeXNuY0RhdGEiLCJhc3NpZ24iLCJzdGF0ZSIsIl9iIiwiYXBwIiwicmVuZGVyIiwiaCIsImluamVjdENzcyIsImF0dHJzIiwicmVsIiwiaHJlZiIsImZvckVhY2giLCJjc3MiLCJpbmplY3RTY3JpcHQiLCJ0eXBlIiwic3JjIiwibWFwIiwianMiLCJ2aXRlQ2xpZW50IiwicHJvcHMiLCJhc3luY0RhdGEiLCJzbG90IiwiaXRlbSIsImRlc2NyaWJlIiwiZG9tUHJvcHMiLCJpbm5lckhUTUwiLCJjb250ZW50IiwiaWQiLCJfX2lzQnJvd3Nlcl9fIiwid2luZG93IiwicGFyYW1zIiwianNvbiIsImFwaURlYXRpbHNlcnZpY2UiLCJpbmRleCIsImRhdGEiLCJkaXNwYXRjaCIsInBheWxvYWQiLCJhcGlTZXJ2aWNlIiwibW9kdWxlcyIsImluZGV4U3RvcmUiLCJkZXRhaWxTdG9yZSIsInNlYXJjaFN0b3JlIiwibmFtZXNwYWNlZCIsIm11dGF0aW9ucyIsInNldERhdGEiLCJhY3Rpb25zIiwiaW5pdGlhbERhdGEiLCJjb21taXQiLCJzZWFyY2hUZXh0Iiwic2V0VGV4dCIsInRleHQiLCJnZXRDb29raWUiLCJuYW1lIiwiYXJyIiwicmVnIiwiUmVnRXhwIiwiZG9jdW1lbnQiLCJjb29raWUiLCJtYXRjaCIsInVuZXNjYXBlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNB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Q0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLGdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6IlBhZ2Uuc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiXG48dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJicmllZi1pbmZvXCI+XG4gICAgPGRpdiBjbGFzcz1cImJyaWVmLXRpdGxlXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cIlsnaWNvbi1HT0xERU4nXVwiPnt7IGJyaWVmRGF0YS5tYXJrLmRhdGEudGV4dCB9fTwvc3Bhbj5cbiAgICAgIDxoMT57eyBicmllZkRhdGEuc2hvd05hbWUgfX08L2gxPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJicmllZi1zY29yZVwiPlxuICAgICAgPHNwYW4gdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIGJyaWVmRGF0YS5zdWJUaXRsZUxpc3RcIiA6a2V5PVwiaXRlbS5zdWJ0aXRsZVwiIDpjbGFzcz1cIml0ZW0uc3VidGl0bGVUeXBlID09PSAnUExBWV9WVicgPyAnaG90VnYnIDogJydcIj5cbiAgICAgICAgPGltZyB2LWlmPVwiIGl0ZW0uc3VidGl0bGVUeXBlID09PSAnUExBWV9WVidcIiA6c3JjPVwiYnJpZWZEYXRhLmhlYXRJY29uXCIgYWx0PVwiXCI+XG4gICAgICAgIDxzcGFuIHYtaWY9XCJpbmRleCA+IDBcIiBjbGFzcz1cImRpdmlkZVwiPi88L3NwYW4+XG4gICAgICAgIDxzcGFuPnt7IGl0ZW0uc3VidGl0bGUgfX08L3NwYW4+XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczogWydkYXRhJ10sXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBicmllZkRhdGE6IHRoaXMuZGF0YVswXS5kYXRhXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJsZXNzXCIgc2NvcGVkPlxuQGltcG9ydCBcIi4vaW5kZXgubGVzc1wiO1xuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBpZD1cImFwcFwiPlxuICAgIDxyb3V0ZXItdmlldyAvPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5cbi8vIOWcqOi/memHjOWPr+S7pei/m+ihjOS4gOS6m+WFqOWxgOe7hOS7tueahOazqOWGjOmAu+i+kVxuZXhwb3J0IGRlZmF1bHQge31cbjwvc2NyaXB0PlxuIiwiXG48dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPGRpdiB2LWlmPVwicGxheVwiPlxuICAgICAgPHZpZGVvIHNyYz1cImh0dHA6Ly9jbGlwcy52b3J3YWVydHMtZ21iaC5kZS9iaWdfYnVja19idW5ueS5tcDRcIiBjb250cm9scyBhdXRvUGxheSBjbGFzcz1cInZpZGVvXCI+XG4gICAgICAgIHlvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSB2aWRlbyB0YWdcbiAgICAgIDwvdmlkZW8+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cInBsYXllckNvbnRhaW5lclwiIDpzdHlsZT1cIntiYWNrZ3JvdW5kOiBgdXJsKCR7cGxheURhdGEuaW1nfSkgMCAwIC9jb3ZlcmB9XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAge3sgcGxheURhdGEudGl0bGUgfX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGltZyBjbGFzcz1cImljb1wiIHNyYz1cImh0dHBzOi8vZ3cuYWxpY2RuLmNvbS90ZnMvVEIxZUE2RkVXNjFnSzBqU1pGbFhYWERLRlhhLTEzNS0xMzUucG5nXCIgQGNsaWNrPVwicGxheVZpZGVvXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibGF5ZXJcIiAvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IFsnZGF0YSddLFxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGxheURhdGE6IHRoaXMuZGF0YVswXS5kYXRhLFxuICAgICAgcGxheTogZmFsc2VcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBwbGF5VmlkZW8gKCkge1xuICAgICAgdGhpcy5wbGF5ID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwibGVzc1wiIHNjb3BlZD5cbkBpbXBvcnQgXCIuL2luZGV4Lmxlc3NcIjtcbjwvc3R5bGU+XG4iLCJcbjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cbiAgICAgIOS4uuS9oOaOqOiNkFxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJyZUNvbnRhaW5lclwiPlxuICAgICAgPGRpdiB2LWZvcj1cIml0ZW0gaW4gZGF0YSBcIiA6a2V5PVwiaXRlbS5kYXRhLmhlYXRcIiBjbGFzcz1cInJlQ29udGVudFwiPlxuICAgICAgICA8aW1nIDpzcmM9XCJpdGVtLmRhdGEuaW1nXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ2VGl0bGVcIj5cbiAgICAgICAgICB7eyBpdGVtLmRhdGEudGl0bGUgfX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdWJUaXRsZVwiPlxuICAgICAgICAgIHt7IGl0ZW0uZGF0YS5zdWJ0aXRsZSB9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IFsnZGF0YSddXG5cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cImxlc3NcIiBzY29wZWQ+XG5AaW1wb3J0IFwiLi9pbmRleC5sZXNzXCI7XG48L3N0eWxlPlxuIiwiXG48dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJzZWFyY2hDb250YWluZXJcIj5cbiAgICA8aW5wdXQgOnZhbHVlPVwic2VhcmNoVGV4dFwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJpbnB1dFwiIHBsYWNlaG9sZGVyPVwi6K+l5pCc57Si5qGG5YaF5a655Lya5Zyo5omA5pyJ6aG16Z2i5YWx5LqrXCIgQGlucHV0PVwic2V0VGV4dFwiPlxuICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuYWxpY2RuLmNvbS90ZnMvVEIxNXpTb1gyMVRCdU5qeTBGalhYYWp5WFhhLTQ4LTQ4LnBuZ1wiIGFsdD1cIlwiIGNsYXNzPVwic2VhcmNoSW1nXCIgQGNsaWNrPVwidG9TZWFyY2hcIj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgbWFwU3RhdGUgfSBmcm9tICd2dWV4J1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXB1dGVkOiB7XG4gICAgLi4ubWFwU3RhdGUoe1xuICAgICAgc2VhcmNoVGV4dDogc3RhdGUgPT4gc3RhdGUuc2VhcmNoU3RvcmUuc2VhcmNoVGV4dFxuICAgIH0pXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIHNldFRleHQgKGUpIHtcbiAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdzZWFyY2hTdG9yZS9zZXRUZXh0Jywge1xuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgdGV4dDogZS50YXJnZXQudmFsdWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHRvU2VhcmNoICgpIHtcbiAgICAgIGxvY2F0aW9uLmhyZWYgPSBgaHR0cHM6Ly9zZWFyY2gueW91a3UuY29tL3NlYXJjaF92aWRlbz9rZXl3b3JkPSR7dGhpcy5zZWFyY2hUZXh0fWBcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cImxlc3NcIiBzY29wZWQ+XG5AaW1wb3J0IFwiLi9pbmRleC5sZXNzXCI7XG48L3N0eWxlPlxuIiwiXG48dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPFNlYXJjaCAvPlxuICAgIDx0ZW1wbGF0ZSB2LWlmPVwiZGV0YWlsRGF0YVwiPlxuICAgICAgPFBsYXllciA6ZGF0YT1cImRldGFpbERhdGEuZGF0YVswXS5kYXRhTm9kZVwiIC8+XG4gICAgICA8QnJpZWYgOmRhdGE9XCJkZXRhaWxEYXRhLmRhdGFbMV0uZGF0YU5vZGVcIiAvPlxuICAgICAgPFJlY29tbWVuZCA6ZGF0YT1cImRldGFpbERhdGEuZGF0YVsyXS5kYXRhTm9kZVwiIC8+XG4gICAgPC90ZW1wbGF0ZT5cbiAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgPGltZyBzcmM9XCJodHRwczovL2d3LmFsaWNkbi5jb20vdGZzL1RCMXYueklFN1QyZ0swalNaUGNYWGNLa3BYYS0xMjgtMTI4LmdpZlwiIGNsYXNzPVwibG9hZGluZ1wiPlxuICAgIDwvdGVtcGxhdGU+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IG1hcFN0YXRlIH0gZnJvbSAndnVleCdcbmltcG9ydCBQbGF5ZXIgZnJvbSAnQC9jb21wb25lbnRzL3BsYXllcidcbmltcG9ydCBTZWFyY2ggZnJvbSAnQC9jb21wb25lbnRzL3NlYXJjaCdcbmltcG9ydCBCcmllZiBmcm9tICdAL2NvbXBvbmVudHMvYnJpZWYnXG5pbXBvcnQgUmVjb21tZW5kIGZyb20gJ0AvY29tcG9uZW50cy9yZWNvbW1lbmQnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czoge1xuICAgIFBsYXllcixcbiAgICBTZWFyY2gsXG4gICAgQnJpZWYsXG4gICAgUmVjb21tZW5kXG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgLi4ubWFwU3RhdGUoe1xuICAgICAgZGV0YWlsRGF0YTogc3RhdGUgPT4gc3RhdGUuZGV0YWlsU3RvcmU/LmRhdGFcbiAgICB9KVxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgIDxoMT7lr7zlhaUgV2FrYVRpbWUg5pWw5o2uPC9oMT5cbiAgICAgICAgPGRpdiBzdHlsZT1cIm1hcmdpbi10b3A6IDIwcHhcIj5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtYXJlYVwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXYWthVGltZSBDb250ZW50XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dGFyZWFcIlxuICAgICAgICAgICAgICAgIGF1dG9zaXplXG4gICAgICAgICAgICAgICAgcm93cz1cIjQwXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPVwibWFyZ2luLXRvcDogMjBweFwiPlxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIEBjbGljaz1cInN1bWJpdFwiPiDmj5DkuqQgPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IG1hcFN0YXRlIH0gZnJvbSBcInZ1ZXhcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcInZhbnQvbGliL2J1dHRvblwiO1xuaW1wb3J0IFwidmFudC9saWIvYnV0dG9uL2luZGV4Lmxlc3NcIjtcbmltcG9ydCBGaWVsZCBmcm9tIFwidmFudC9saWIvZmllbGRcIjtcbmltcG9ydCBcInZhbnQvbGliL2ZpZWxkL2luZGV4Lmxlc3NcIjtcbmltcG9ydCB1dGlscyBmcm9tICcuLi8uLi91dGlscy9pbmRleCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb21wb25lbnRzOiB7IEJ1dHRvbiwgRmllbGQgfSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGV4dDogXCJcIixcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIC4uLm1hcFN0YXRlKHtcbiAgICAgICAgICAgIGluZGV4RGF0YTogKHN0YXRlKSA9PiBzdGF0ZS5pbmRleFN0b3JlPy5kYXRhLFxuICAgICAgICB9KSxcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgYXN5bmMgc3VtYml0KCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcyk7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgd2luZG93LmZldGNoKFwiL2NvZGV0aW1lL3VwbG9hZFwiLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgICAgICAgICBcIngtY3NyZi10b2tlblwiOiB1dGlscy5nZXRDb29raWUoXCJjc3JmVG9rZW5cIilcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogdGhpcy50ZXh0LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICB9LFxuICAgIH0sXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwibGVzc1wiIHNjb3BlZCA+XG4uY29udGVudCB7XG4gICAgLnRleHQtYXJlYSB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg4ODg7XG4gICAgfVxuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogMTAwMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMjAwcHg7XG59XG48L3N0eWxlPlxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYyNzQzODU3MTc4MlxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTs7XG4gICAgfVxuICAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjI3NDM5MjQyNjAyXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpOztcbiAgICB9XG4gICIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2Mjc0MzkyNDI2MzBcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIn0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7O1xuICAgIH1cbiAgIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYyNzQzODU3MTgwMlxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTs7XG4gICAgfVxuICAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjI3NDM4NTcxODE3XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpOztcbiAgICB9XG4gICIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2Mjc0NDQzMTIzMDBcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIn0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7O1xuICAgIH1cbiAgIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNyZWF0ZVN0b3JlID0gZXhwb3J0cy5jcmVhdGVSb3V0ZXIgPSB2b2lkIDA7XG4vLyBAdHMtbm9jaGVja1xuY29uc3QgVnVlID0gcmVxdWlyZShcInZ1ZVwiKTtcbmNvbnN0IFZ1ZXggPSByZXF1aXJlKFwidnVleFwiKTtcbmNvbnN0IFJvdXRlciA9IHJlcXVpcmUoXCJ2dWUtcm91dGVyXCIpO1xuY29uc3Qgc3NyX3RlbXBvcmFyeV9yb3V0ZXNfMSA9IHJlcXVpcmUoXCJzc3ItdGVtcG9yYXJ5LXJvdXRlc1wiKTtcbi8vIHdpdGhvdXQgdHNjb25maWcgZXNNb2R1bGVJbnRlcm9wIG9wdGlvbnMgbXVzdCB1c2UgdGhlIGNvbXBhdGlibGUgc3ludGF4XG5jb25zdCBSZWFsVnVlID0gVnVlLmRlZmF1bHQgfHwgVnVlO1xuY29uc3QgUmVhbFJvdXRlciA9IFJvdXRlci5kZWZhdWx0IHx8IFJvdXRlcjtcbmNvbnN0IFJlYWxWdWV4ID0gVnVleC5kZWZhdWx0IHx8IFZ1ZXg7XG5SZWFsVnVlLnVzZShSZWFsUm91dGVyKTtcblJlYWxWdWUudXNlKFJlYWxWdWV4KTtcbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlcihvcHRpb25zID0ge30pIHtcbiAgICB2YXIgX2E7XG4gICAgcmV0dXJuIG5ldyBSZWFsUm91dGVyKHtcbiAgICAgICAgbW9kZTogJ2hpc3RvcnknLFxuICAgICAgICByb3V0ZXM6IHNzcl90ZW1wb3Jhcnlfcm91dGVzXzEuRmVSb3V0ZXMsXG4gICAgICAgIGJhc2U6IChfYSA9IG9wdGlvbnMuYmFzZSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJy8nXG4gICAgfSk7XG59XG5leHBvcnRzLmNyZWF0ZVJvdXRlciA9IGNyZWF0ZVJvdXRlcjtcbmZ1bmN0aW9uIGNyZWF0ZVN0b3JlKCkge1xuICAgIHJldHVybiBuZXcgVnVleC5TdG9yZShzc3JfdGVtcG9yYXJ5X3JvdXRlc18xLnN0b3JlICE9PSBudWxsICYmIHNzcl90ZW1wb3Jhcnlfcm91dGVzXzEuc3RvcmUgIT09IHZvaWQgMCA/IHNzcl90ZW1wb3Jhcnlfcm91dGVzXzEuc3RvcmUgOiB7fSk7XG59XG5leHBvcnRzLmNyZWF0ZVN0b3JlID0gY3JlYXRlU3RvcmU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFZ1ZSA9IHJlcXVpcmUoXCJ2dWVcIik7XG5jb25zdCBzc3Jfc2VydmVyX3V0aWxzXzEgPSByZXF1aXJlKFwic3NyLXNlcnZlci11dGlsc1wiKTtcbmNvbnN0IHZ1ZXhfcm91dGVyX3N5bmNfMSA9IHJlcXVpcmUoXCJ2dWV4LXJvdXRlci1zeW5jXCIpO1xuY29uc3Qgc2VyaWFsaXplID0gcmVxdWlyZShcInNlcmlhbGl6ZS1qYXZhc2NyaXB0XCIpO1xuLy8gQHRzLWV4cGVjdC1lcnJvclxuY29uc3QgUm91dGVzID0gcmVxdWlyZShcInNzci10ZW1wb3Jhcnktcm91dGVzXCIpO1xuY29uc3QgY3JlYXRlXzEgPSByZXF1aXJlKFwiLi9jcmVhdGVcIik7XG5jb25zdCB7IEZlUm91dGVzLCBBcHAsIGxheW91dEZldGNoLCBMYXlvdXQsIEJBU0VfTkFNRSB9ID0gUm91dGVzO1xuY29uc3Qgc2VydmVyUmVuZGVyID0gYXN5bmMgKGN0eCwgY29uZmlnKSA9PiB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICBjb25zdCByb3V0ZXIgPSBjcmVhdGVfMS5jcmVhdGVSb3V0ZXIoKTtcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZV8xLmNyZWF0ZVN0b3JlKCk7XG4gICAgY29uc3QgVml0ZU1vZGUgPSBwcm9jZXNzLmVudi5CVUlMRF9UT09MID09PSAndml0ZSc7XG4gICAgdnVleF9yb3V0ZXJfc3luY18xLnN5bmMoc3RvcmUsIHJvdXRlcik7XG4gICAgY29uc3QgeyBjc3NPcmRlciwganNPcmRlciwgZHluYW1pYywgbW9kZSwgY3VzdG9tZUhlYWRTY3JpcHQsIGNodW5rTmFtZSB9ID0gY29uZmlnO1xuICAgIGxldCBwYXRoID0gY3R4LnJlcXVlc3QucGF0aDsgLy8g6L+Z6YeM5Y+WIHBhdGhuYW1lIOS4jeiDveWkn+WMheWQqyBxdWV5U3RyaW5nXG4gICAgaWYgKEJBU0VfTkFNRSkge1xuICAgICAgICBwYXRoID0gc3NyX3NlcnZlcl91dGlsc18xLm5vcm1hbGl6ZVBhdGgocGF0aCk7XG4gICAgfVxuICAgIGNvbnN0IHJvdXRlSXRlbSA9IHNzcl9zZXJ2ZXJfdXRpbHNfMS5maW5kUm91dGUoRmVSb3V0ZXMsIHBhdGgpO1xuICAgIGlmICghcm91dGVJdGVtKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgXG4gICAg5p+l5om+57uE5Lu25aSx6LSl77yM6K+356Gu6K6k5b2T5YmNIHBhdGg6ICR7cGF0aH0g5a+55bqU5YmN56uv57uE5Lu25piv5ZCm5a2Y5ZyoXG4gICAg6Iul5Yib5bu65LqG5paw55qE6aG16Z2i5paH5Lu25aS577yM6K+36YeN5paw5omn6KGMIG5wbSBzdGFydCDph43lkK/mnI3liqFcbiAgICBgKTtcbiAgICB9XG4gICAgbGV0IGR5bmFtaWNDc3NPcmRlciA9IGNzc09yZGVyO1xuICAgIGlmIChkeW5hbWljICYmICFWaXRlTW9kZSkge1xuICAgICAgICBkeW5hbWljQ3NzT3JkZXIgPSBjc3NPcmRlci5jb25jYXQoW2Ake3JvdXRlSXRlbS53ZWJwYWNrQ2h1bmtOYW1lfS5jc3NgXSk7XG4gICAgICAgIGR5bmFtaWNDc3NPcmRlciA9IGF3YWl0IHNzcl9zZXJ2ZXJfdXRpbHNfMS5hZGRBc3luY0NodW5rKGR5bmFtaWNDc3NPcmRlciwgcm91dGVJdGVtLndlYnBhY2tDaHVua05hbWUpO1xuICAgIH1cbiAgICBjb25zdCBtYW5pZmVzdCA9IFZpdGVNb2RlID8ge30gOiBhd2FpdCBzc3Jfc2VydmVyX3V0aWxzXzEuZ2V0TWFuaWZlc3QoKTtcbiAgICBjb25zdCBpc0NzciA9ICEhKG1vZGUgPT09ICdjc3InIHx8ICgoX2EgPSBjdHgucmVxdWVzdC5xdWVyeSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNzcikpO1xuICAgIGlmIChpc0Nzcikge1xuICAgICAgICBzc3Jfc2VydmVyX3V0aWxzXzEubG9nR3JlZW4oYEN1cnJlbnQgcGF0aCAke3BhdGh9IHVzZSBjc3IgcmVuZGVyIG1vZGVgKTtcbiAgICB9XG4gICAgY29uc3QgeyBmZXRjaCB9ID0gcm91dGVJdGVtO1xuICAgIC8vIOagueaNriBwYXRoIOWMuemFjSByb3V0ZXItdmlldyDlsZXnpLrnmoTnu4Tku7ZcbiAgICByb3V0ZXIucHVzaChwYXRoKTtcbiAgICBsZXQgbGF5b3V0RmV0Y2hEYXRhID0ge307XG4gICAgbGV0IGZldGNoRGF0YSA9IHt9O1xuICAgIGlmICghaXNDc3IpIHtcbiAgICAgICAgLy8gY3NyIOS4i+S4jemcgOimgeacjeWKoeerr+iOt+WPluaVsOaNrlxuICAgICAgICBpZiAobGF5b3V0RmV0Y2gpIHtcbiAgICAgICAgICAgIGxheW91dEZldGNoRGF0YSA9IGF3YWl0IGxheW91dEZldGNoKHsgc3RvcmUsIHJvdXRlcjogcm91dGVyLmN1cnJlbnRSb3V0ZSB9LCBjdHgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmZXRjaCkge1xuICAgICAgICAgICAgZmV0Y2hEYXRhID0gYXdhaXQgZmV0Y2goeyBzdG9yZSwgcm91dGVyOiByb3V0ZXIuY3VycmVudFJvdXRlIH0sIGN0eCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgY29tYmluZUF5c25jRGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGxheW91dEZldGNoRGF0YSAhPT0gbnVsbCAmJiBsYXlvdXRGZXRjaERhdGEgIT09IHZvaWQgMCA/IGxheW91dEZldGNoRGF0YSA6IHt9LCBmZXRjaERhdGEgIT09IG51bGwgJiYgZmV0Y2hEYXRhICE9PSB2b2lkIDAgPyBmZXRjaERhdGEgOiB7fSk7XG4gICAgY29uc3Qgc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCAoX2IgPSBzdG9yZS5zdGF0ZSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDoge30sIGNvbWJpbmVBeXNuY0RhdGEpO1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICBjb25zdCBhcHAgPSBuZXcgVnVlKHtcbiAgICAgICAgcm91dGVyLFxuICAgICAgICBzdG9yZSxcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoaCkge1xuICAgICAgICAgICAgY29uc3QgaW5qZWN0Q3NzID0gW107XG4gICAgICAgICAgICBpZiAoVml0ZU1vZGUpIHtcbiAgICAgICAgICAgICAgICBpbmplY3RDc3MucHVzaChoKCdsaW5rJywge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVsOiAnc3R5bGVzaGVldCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBgL3NlcnZlci9zdGF0aWMvY3NzLyR7Y2h1bmtOYW1lfS5jc3NgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkeW5hbWljQ3NzT3JkZXIuZm9yRWFjaChjc3MgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAobWFuaWZlc3RbY3NzXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5qZWN0Q3NzLnB1c2goaCgnbGluaycsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWw6ICdzdHlsZXNoZWV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogbWFuaWZlc3RbY3NzXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaW5qZWN0U2NyaXB0ID0gVml0ZU1vZGUgPyBbaCgnc2NyaXB0Jywge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ21vZHVsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM6ICcvbm9kZV9tb2R1bGVzL3Nzci1wbHVnaW4tdnVlL2VzbS9lbnRyeS9jbGllbnQtZW50cnkuanMnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KV0gOiBqc09yZGVyLm1hcChqcyA9PiBoKCdzY3JpcHQnLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgc3JjOiBtYW5pZmVzdFtqc11cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICBjb25zdCB2aXRlQ2xpZW50ID0gaCgnc2NyaXB0Jywge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdtb2R1bGUnLFxuICAgICAgICAgICAgICAgICAgICBzcmM6ICcvQHZpdGUvY2xpZW50J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGgoTGF5b3V0LCB7XG4gICAgICAgICAgICAgICAgcHJvcHM6IHsgY3R4LCBjb25maWcsIGFzeW5jRGF0YTogY29tYmluZUF5c25jRGF0YSwgZmV0Y2hEYXRhOiBsYXlvdXRGZXRjaERhdGEgfVxuICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICAgIGgoJ3RlbXBsYXRlJywge1xuICAgICAgICAgICAgICAgICAgICBzbG90OiAncmVtSW5pdGlhbCdcbiAgICAgICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgICAgICAgIGgoJ3NjcmlwdCcsIHt9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhciB3ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIC8gMy43NTtkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaHRtbCcpWzBdLnN0eWxlWydmb250LXNpemUnXSA9IHcgKyAncHgnXCJcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBWaXRlTW9kZSAmJiBoKCd0ZW1wbGF0ZScsIHtcbiAgICAgICAgICAgICAgICAgICAgc2xvdDogJ3ZpdGVDbGllbnQnXG4gICAgICAgICAgICAgICAgfSwgW3ZpdGVDbGllbnRdKSxcbiAgICAgICAgICAgICAgICBoKCd0ZW1wbGF0ZScsIHtcbiAgICAgICAgICAgICAgICAgICAgc2xvdDogJ2N1c3RvbWVIZWFkU2NyaXB0J1xuICAgICAgICAgICAgICAgIH0sIGN1c3RvbWVIZWFkU2NyaXB0ID09PSBudWxsIHx8IGN1c3RvbWVIZWFkU2NyaXB0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjdXN0b21lSGVhZFNjcmlwdC5tYXAoaXRlbSA9PiBoKCdzY3JpcHQnLCBPYmplY3QuYXNzaWduKHt9LCBpdGVtLmRlc2NyaWJlLCB7XG4gICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IGl0ZW0uY29udGVudFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkpKSksXG4gICAgICAgICAgICAgICAgaCgndGVtcGxhdGUnLCB7XG4gICAgICAgICAgICAgICAgICAgIHNsb3Q6ICdjaGlsZHJlbidcbiAgICAgICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgICAgICAgIGlzQ3NyID8gaCgnZGl2Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY3NyIOWPqumcgOa4suafk+S4gOS4quepuueahCA8ZGl2IGlkPVwiYXBwXCI+IOS4jemcgOimgea4suafk+WFt+S9k+eahOe7hOS7tuS5n+WwseaYryByb3V0ZXItdmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJ2FwcCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSkgOiBoKEFwcCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHsgY3R4LCBjb25maWcsIGZldGNoRGF0YTogY29tYmluZUF5c25jRGF0YSB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgaCgndGVtcGxhdGUnLCB7XG4gICAgICAgICAgICAgICAgICAgIHNsb3Q6ICdpbml0aWFsRGF0YSdcbiAgICAgICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgICAgICAgIGlzQ3NyID8gaCgnc2NyaXB0Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IGB3aW5kb3cuX19VU0VfVklURV9fPSR7Vml0ZU1vZGV9YFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSA6IGgoJ3NjcmlwdCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBgd2luZG93Ll9fVVNFX1NTUl9fPXRydWU7IHdpbmRvdy5fX0lOSVRJQUxfREFUQV9fID0ke3NlcmlhbGl6ZShzdGF0ZSl9O3dpbmRvdy5fX1VTRV9WSVRFX189JHtWaXRlTW9kZX1gXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgaCgndGVtcGxhdGUnLCB7XG4gICAgICAgICAgICAgICAgICAgIHNsb3Q6ICdjc3NJbmplY3QnXG4gICAgICAgICAgICAgICAgfSwgaW5qZWN0Q3NzKSxcbiAgICAgICAgICAgICAgICBoKCd0ZW1wbGF0ZScsIHtcbiAgICAgICAgICAgICAgICAgICAgc2xvdDogJ2pzSW5qZWN0J1xuICAgICAgICAgICAgICAgIH0sIGluamVjdFNjcmlwdClcbiAgICAgICAgICAgIF0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGFwcDtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBzZXJ2ZXJSZW5kZXI7XG4iLCJcbiAgICAgICAgaW1wb3J0ICogYXMgc3RvcmUgZnJvbSBcIkAvc3RvcmUvaW5kZXgudHNcIlxuICAgICAgICBleHBvcnQgY29uc3QgRmVSb3V0ZXMgPSBbe1wiZmV0Y2hcIjogX19pc0Jyb3dzZXJfXyA/ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImRldGFpbC1pZC1mZXRjaFwiICovICdAL3BhZ2VzL2RldGFpbC9mZXRjaC50cycpIDogcmVxdWlyZSgnQC9wYWdlcy9kZXRhaWwvZmV0Y2gudHMnKS5kZWZhdWx0LFwicGF0aFwiOlwiL2RldGFpbC86aWRcIixcImNvbXBvbmVudFwiOiAgX19pc0Jyb3dzZXJfXyA/ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImRldGFpbC1pZFwiICovICdAL3BhZ2VzL2RldGFpbC9yZW5kZXIkaWQudnVlJykgOiByZXF1aXJlKCdAL3BhZ2VzL2RldGFpbC9yZW5kZXIkaWQudnVlJykuZGVmYXVsdCxcIndlYnBhY2tDaHVua05hbWVcIjpcImRldGFpbC1pZFwifSx7XCJmZXRjaFwiOiBfX2lzQnJvd3Nlcl9fID8gKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiaW5kZXgtZmV0Y2hcIiAqLyAnQC9wYWdlcy9pbmRleC9mZXRjaC50cycpIDogcmVxdWlyZSgnQC9wYWdlcy9pbmRleC9mZXRjaC50cycpLmRlZmF1bHQsXCJwYXRoXCI6XCIvXCIsXCJjb21wb25lbnRcIjogIF9faXNCcm93c2VyX18gPyAoKSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJpbmRleFwiICovICdAL3BhZ2VzL2luZGV4L3JlbmRlci52dWUnKSA6IHJlcXVpcmUoJ0AvcGFnZXMvaW5kZXgvcmVuZGVyLnZ1ZScpLmRlZmF1bHQsXCJ3ZWJwYWNrQ2h1bmtOYW1lXCI6XCJpbmRleFwifV0gXG4gICAgICAgIGV4cG9ydCB7IGRlZmF1bHQgYXMgTGF5b3V0IH0gZnJvbSBcIkAvY29tcG9uZW50cy9sYXlvdXQvaW5kZXgudnVlXCJcbiAgICAgICAgZXhwb3J0IHsgZGVmYXVsdCBhcyBBcHAgfSBmcm9tIFwiQC9jb21wb25lbnRzL2xheW91dC9BcHAudnVlXCJcbiAgICAgICAgXG4gICAgICAgIGV4cG9ydCB7IHN0b3JlIH1cbiAgICAgICAgXG4gICAgICAgICIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2Mjc0NDMxNTAwNDRcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL2Nzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTs7XG4gICAgfVxuICAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjI3NDQzMTUwMTc4XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9jc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIn0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7O1xuICAgIH1cbiAgIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJyaWVmLWluZm9cIiB9LCBbXG4gICAgX3ZtLl9zc3JOb2RlKFxuICAgICAgJzxkaXYgY2xhc3M9XCJicmllZi10aXRsZVwiIGRhdGEtdi0wYWUxNDFhNj48c3BhbiBjbGFzcz1cIltcXCdpY29uLUdPTERFTlxcJ11cIiBkYXRhLXYtMGFlMTQxYTY+JyArXG4gICAgICAgIF92bS5fc3NyRXNjYXBlKF92bS5fcyhfdm0uYnJpZWZEYXRhLm1hcmsuZGF0YS50ZXh0KSkgK1xuICAgICAgICBcIjwvc3Bhbj4gPGgxIGRhdGEtdi0wYWUxNDFhNj5cIiArXG4gICAgICAgIF92bS5fc3NyRXNjYXBlKF92bS5fcyhfdm0uYnJpZWZEYXRhLnNob3dOYW1lKSkgK1xuICAgICAgICAnPC9oMT48L2Rpdj4gPGRpdiBjbGFzcz1cImJyaWVmLXNjb3JlXCIgZGF0YS12LTBhZTE0MWE2PicgK1xuICAgICAgICBfdm0uX3Nzckxpc3QoX3ZtLmJyaWVmRGF0YS5zdWJUaXRsZUxpc3QsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIFwiPHNwYW5cIiArXG4gICAgICAgICAgICBfdm0uX3NzckNsYXNzKFxuICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICBpdGVtLnN1YnRpdGxlVHlwZSA9PT0gXCJQTEFZX1ZWXCIgPyBcImhvdFZ2XCIgOiBcIlwiXG4gICAgICAgICAgICApICtcbiAgICAgICAgICAgIFwiIGRhdGEtdi0wYWUxNDFhNj5cIiArXG4gICAgICAgICAgICAoaXRlbS5zdWJ0aXRsZVR5cGUgPT09IFwiUExBWV9WVlwiXG4gICAgICAgICAgICAgID8gXCI8aW1nXCIgK1xuICAgICAgICAgICAgICAgIF92bS5fc3NyQXR0cihcInNyY1wiLCBfdm0uYnJpZWZEYXRhLmhlYXRJY29uKSArXG4gICAgICAgICAgICAgICAgXCIgYWx0IGRhdGEtdi0wYWUxNDFhNj5cIlxuICAgICAgICAgICAgICA6IFwiPCEtLS0tPlwiKSArXG4gICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAoaW5kZXggPiAwXG4gICAgICAgICAgICAgID8gJzxzcGFuIGNsYXNzPVwiZGl2aWRlXCIgZGF0YS12LTBhZTE0MWE2Pi88L3NwYW4+J1xuICAgICAgICAgICAgICA6IFwiPCEtLS0tPlwiKSArXG4gICAgICAgICAgICBcIiA8c3BhbiBkYXRhLXYtMGFlMTQxYTY+XCIgK1xuICAgICAgICAgICAgX3ZtLl9zc3JFc2NhcGUoX3ZtLl9zKGl0ZW0uc3VidGl0bGUpKSArXG4gICAgICAgICAgICBcIjwvc3Bhbj48L3NwYW4+XCJcbiAgICAgICAgICApXG4gICAgICAgIH0pICtcbiAgICAgICAgXCI8L2Rpdj5cIlxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgYXR0cnM6IHsgaWQ6IFwiYXBwXCIgfSB9LCBbX2MoXCJyb3V0ZXItdmlld1wiKV0sIDEpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImh0bWxcIixcbiAgICBbXG4gICAgICBfdm0uX3Nzck5vZGUoXG4gICAgICAgIFwiPGhlYWQ+XCIsXG4gICAgICAgIFwiPC9oZWFkPlwiLFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLl9zc3JOb2RlKFxuICAgICAgICAgICAgJzxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiPiA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIHNocmluay10by1maXQ9bm9cIj4gPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiMwMDAwMDBcIj4gPHRpdGxlPlNlcnZlcmxlc3MgU2lkZSBSZW5kZXIgZm9yIFZ1ZTwvdGl0bGU+ICdcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdChcInZpdGVDbGllbnRcIiksXG4gICAgICAgICAgX3ZtLl9zc3JOb2RlKFwiIFwiKSxcbiAgICAgICAgICBfdm0uX3QoXCJyZW1Jbml0aWFsXCIpLFxuICAgICAgICAgIF92bS5fc3NyTm9kZShcIiBcIiksXG4gICAgICAgICAgX3ZtLl90KFwiY3VzdG9tZUhlYWRTY3JpcHRcIiksXG4gICAgICAgICAgX3ZtLl9zc3JOb2RlKFwiIFwiKSxcbiAgICAgICAgICBfdm0uX3QoXCJjc3NJbmplY3RcIilcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKSxcbiAgICAgIF92bS5fc3NyTm9kZShcIiBcIiksXG4gICAgICBfdm0uX3Nzck5vZGUoXG4gICAgICAgIFwiPGJvZHk+XCIsXG4gICAgICAgIFwiPC9ib2R5PlwiLFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLl90KFwiY2hpbGRyZW5cIiksXG4gICAgICAgICAgX3ZtLl9zc3JOb2RlKFwiIFwiKSxcbiAgICAgICAgICBfdm0uX3QoXCJpbml0aWFsRGF0YVwiKSxcbiAgICAgICAgICBfdm0uX3Nzck5vZGUoXCIgXCIpLFxuICAgICAgICAgIF92bS5fdChcImpzSW5qZWN0XCIpXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgIClcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF92bS5fc3NyTm9kZShcbiAgICAgIF92bS5wbGF5XG4gICAgICAgID8gJzxkaXYgZGF0YS12LWQ1Yzk4MGI4Pjx2aWRlbyBzcmM9XCJodHRwOi8vY2xpcHMudm9yd2FlcnRzLWdtYmguZGUvYmlnX2J1Y2tfYnVubnkubXA0XCIgY29udHJvbHM9XCJjb250cm9sc1wiIGF1dG9QbGF5IGNsYXNzPVwidmlkZW9cIiBkYXRhLXYtZDVjOTgwYjg+XFxuICAgICAgeW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlIHZpZGVvIHRhZ1xcbiAgICA8L3ZpZGVvPjwvZGl2PidcbiAgICAgICAgOiAnPGRpdiBjbGFzcz1cInBsYXllckNvbnRhaW5lclwiJyArXG4gICAgICAgICAgICBfdm0uX3NzclN0eWxlKFxuICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICB7IGJhY2tncm91bmQ6IFwidXJsKFwiICsgX3ZtLnBsYXlEYXRhLmltZyArIFwiKSAwIDAgL2NvdmVyXCIgfSxcbiAgICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAnIGRhdGEtdi1kNWM5ODBiOD48ZGl2IGNsYXNzPVwidGl0bGVcIiBkYXRhLXYtZDVjOTgwYjg+JyArXG4gICAgICAgICAgICBfdm0uX3NzckVzY2FwZShcIlxcbiAgICAgIFwiICsgX3ZtLl9zKF92bS5wbGF5RGF0YS50aXRsZSkgKyBcIlxcbiAgICBcIikgK1xuICAgICAgICAgICAgJzwvZGl2PiA8aW1nIHNyYz1cImh0dHBzOi8vZ3cuYWxpY2RuLmNvbS90ZnMvVEIxZUE2RkVXNjFnSzBqU1pGbFhYWERLRlhhLTEzNS0xMzUucG5nXCIgY2xhc3M9XCJpY29cIiBkYXRhLXYtZDVjOTgwYjg+IDxkaXYgY2xhc3M9XCJsYXllclwiIGRhdGEtdi1kNWM5ODBiOD48L2Rpdj48L2Rpdj4nXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF92bS5fc3NyTm9kZShcbiAgICAgICc8ZGl2IGNsYXNzPVwidGl0bGVcIiBkYXRhLXYtZmY1ZDVlMjI+XFxuICAgIOS4uuS9oOaOqOiNkFxcbiAgPC9kaXY+IDxkaXYgY2xhc3M9XCJyZUNvbnRhaW5lclwiIGRhdGEtdi1mZjVkNWUyMj4nICtcbiAgICAgICAgX3ZtLl9zc3JMaXN0KF92bS5kYXRhLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwicmVDb250ZW50XCIgZGF0YS12LWZmNWQ1ZTIyPjxpbWcnICtcbiAgICAgICAgICAgIF92bS5fc3NyQXR0cihcInNyY1wiLCBpdGVtLmRhdGEuaW1nKSArXG4gICAgICAgICAgICAnIGRhdGEtdi1mZjVkNWUyMj4gPGRpdiBjbGFzcz1cInZUaXRsZVwiIGRhdGEtdi1mZjVkNWUyMj4nICtcbiAgICAgICAgICAgIF92bS5fc3NyRXNjYXBlKFxuICAgICAgICAgICAgICBcIlxcbiAgICAgICAgXCIgKyBfdm0uX3MoaXRlbS5kYXRhLnRpdGxlKSArIFwiXFxuICAgICAgXCJcbiAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgJzwvZGl2PiA8ZGl2IGNsYXNzPVwic3ViVGl0bGVcIiBkYXRhLXYtZmY1ZDVlMjI+JyArXG4gICAgICAgICAgICBfdm0uX3NzckVzY2FwZShcbiAgICAgICAgICAgICAgXCJcXG4gICAgICAgIFwiICsgX3ZtLl9zKGl0ZW0uZGF0YS5zdWJ0aXRsZSkgKyBcIlxcbiAgICAgIFwiXG4gICAgICAgICAgICApICtcbiAgICAgICAgICAgIFwiPC9kaXY+PC9kaXY+XCJcbiAgICAgICAgICApXG4gICAgICAgIH0pICtcbiAgICAgICAgXCI8L2Rpdj5cIlxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2VhcmNoQ29udGFpbmVyXCIgfSwgW1xuICAgIF92bS5fc3NyTm9kZShcbiAgICAgICc8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuivpeaQnOe0ouahhuWGheWuueS8muWcqOaJgOaciemhtemdouWFseS6q1wiJyArXG4gICAgICAgIF92bS5fc3NyQXR0cihcInZhbHVlXCIsIF92bS5zZWFyY2hUZXh0KSArXG4gICAgICAgICcgY2xhc3M9XCJpbnB1dFwiIGRhdGEtdi01ZWU5N2RhYj4gPGltZyBzcmM9XCJodHRwczovL2ltZy5hbGljZG4uY29tL3Rmcy9UQjE1elNvWDIxVEJ1Tmp5MEZqWFhhanlYWGEtNDgtNDgucG5nXCIgYWx0IGNsYXNzPVwic2VhcmNoSW1nXCIgZGF0YS12LTVlZTk3ZGFiPidcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFwiU2VhcmNoXCIpLFxuICAgICAgX3ZtLl9zc3JOb2RlKFwiIFwiKSxcbiAgICAgIF92bS5kZXRhaWxEYXRhXG4gICAgICAgID8gW1xuICAgICAgICAgICAgX2MoXCJQbGF5ZXJcIiwgeyBhdHRyczogeyBkYXRhOiBfdm0uZGV0YWlsRGF0YS5kYXRhWzBdLmRhdGFOb2RlIH0gfSksXG4gICAgICAgICAgICBfdm0uX3Nzck5vZGUoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJCcmllZlwiLCB7IGF0dHJzOiB7IGRhdGE6IF92bS5kZXRhaWxEYXRhLmRhdGFbMV0uZGF0YU5vZGUgfSB9KSxcbiAgICAgICAgICAgIF92bS5fc3NyTm9kZShcIiBcIiksXG4gICAgICAgICAgICBfYyhcIlJlY29tbWVuZFwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IGRhdGE6IF92bS5kZXRhaWxEYXRhLmRhdGFbMl0uZGF0YU5vZGUgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdXG4gICAgICAgIDogX3ZtLl9zc3JOb2RlKFxuICAgICAgICAgICAgJzxpbWcgc3JjPVwiaHR0cHM6Ly9ndy5hbGljZG4uY29tL3Rmcy9UQjF2LnpJRTdUMmdLMGpTWlBjWFhjS2twWGEtMTI4LTEyOC5naWZcIiBjbGFzcz1cImxvYWRpbmdcIj4nXG4gICAgICAgICAgKVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiIH0sXG4gICAgW1xuICAgICAgX3ZtLl9zc3JOb2RlKFwiPGgxIGRhdGEtdi02NzgxYzlmMj7lr7zlhaUgV2FrYVRpbWUg5pWw5o2uPC9oMT4gXCIpLFxuICAgICAgX3ZtLl9zc3JOb2RlKFxuICAgICAgICAnPGRpdiBzdHlsZT1cIm1hcmdpbi10b3A6IDIwcHhcIiBkYXRhLXYtNjc4MWM5ZjI+JyxcbiAgICAgICAgXCI8L2Rpdj5cIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiRmllbGRcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1hcmVhXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJXYWthVGltZSBDb250ZW50XCIsXG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dGFyZWFcIixcbiAgICAgICAgICAgICAgYXV0b3NpemU6IFwiXCIsXG4gICAgICAgICAgICAgIHJvd3M6IFwiNDBcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0udGV4dCxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS50ZXh0ID0gJCR2XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidGV4dFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fc3NyTm9kZShcIiBcIiksXG4gICAgICBfdm0uX3Nzck5vZGUoXG4gICAgICAgICc8ZGl2IHN0eWxlPVwibWFyZ2luLXRvcDogMjBweFwiIGRhdGEtdi02NzgxYzlmMj4nLFxuICAgICAgICBcIjwvZGl2PlwiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkJ1dHRvblwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyB0eXBlOiBcInByaW1hcnlcIiB9LCBvbjogeyBjbGljazogX3ZtLnN1bWJpdCB9IH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiIOaPkOS6pCBcIildXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciwgLyogc2VydmVyIG9ubHkgKi9cbiAgc2hhZG93TW9kZSAvKiB2dWUtY2xpIG9ubHkgKi9cbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgKG9wdGlvbnMuZnVuY3Rpb25hbCA/IHRoaXMucGFyZW50IDogdGhpcykuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdFxuICAgICAgICApXG4gICAgICB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9uYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGFlMTQxYTYmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgdmFyIHN0eWxlMCA9IHJlcXVpcmUoXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBhZTE0MWE2Jmxhbmc9bGVzcyZzY29wZWQ9dHJ1ZSZcIilcbmlmIChzdHlsZTAuX19pbmplY3RfXykgc3R5bGUwLl9faW5qZWN0X18oY29udGV4dClcblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBpbmplY3RTdHlsZXMsXG4gIFwiMGFlMTQxYTZcIixcbiAgXCIyN2MzMDgyZVwiXG4gIFxuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIndlYi9jb21wb25lbnRzL2JyaWVmL2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtaG90LWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cG9zdGNzcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS00IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MGFlMTQxYTYmbGFuZz1sZXNzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wYWUxNDFhNiZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xODVjZjcxYyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCI2MTAwYWMwYVwiXG4gIFxuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIndlYi9jb21wb25lbnRzL2xheW91dC9BcHAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xODVjZjcxYyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTlhMTJjZWE2JlwiXG52YXIgc2NyaXB0ID0ge31cbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgdmFyIHN0eWxlMCA9IHJlcXVpcmUoXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9bGVzcyZcIilcbmlmIChzdHlsZTAuX19pbmplY3RfXykgc3R5bGUwLl9faW5qZWN0X18oY29udGV4dClcblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBpbmplY3RTdHlsZXMsXG4gIG51bGwsXG4gIFwiMmMzODBmY2NcIlxuICBcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ3ZWIvY29tcG9uZW50cy9sYXlvdXQvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1ob3QtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS01LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9wb3N0Y3NzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTQhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWxlc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTlhMTJjZWE2JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDVjOTgwYjgmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgdmFyIHN0eWxlMCA9IHJlcXVpcmUoXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWQ1Yzk4MGI4Jmxhbmc9bGVzcyZzY29wZWQ9dHJ1ZSZcIilcbmlmIChzdHlsZTAuX19pbmplY3RfXykgc3R5bGUwLl9faW5qZWN0X18oY29udGV4dClcblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBpbmplY3RTdHlsZXMsXG4gIFwiZDVjOTgwYjhcIixcbiAgXCIwZTVjYjZjM1wiXG4gIFxuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIndlYi9jb21wb25lbnRzL3BsYXllci9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTUtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3Bvc3Rjc3MhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtNCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWQ1Yzk4MGI4Jmxhbmc9bGVzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDVjOTgwYjgmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mZjVkNWUyMiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICB2YXIgc3R5bGUwID0gcmVxdWlyZShcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZmY1ZDVlMjImbGFuZz1sZXNzJnNjb3BlZD10cnVlJlwiKVxuaWYgKHN0eWxlMC5fX2luamVjdF9fKSBzdHlsZTAuX19pbmplY3RfXyhjb250ZXh0KVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIGluamVjdFN0eWxlcyxcbiAgXCJmZjVkNWUyMlwiLFxuICBcIjI5OTY5MTcwXCJcbiAgXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwid2ViL2NvbXBvbmVudHMvcmVjb21tZW5kL2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtaG90LWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cG9zdGNzcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS00IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZmY1ZDVlMjImbGFuZz1sZXNzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mZjVkNWUyMiZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVlZTk3ZGFiJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIHZhciBzdHlsZTAgPSByZXF1aXJlKFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01ZWU5N2RhYiZsYW5nPWxlc3Mmc2NvcGVkPXRydWUmXCIpXG5pZiAoc3R5bGUwLl9faW5qZWN0X18pIHN0eWxlMC5fX2luamVjdF9fKGNvbnRleHQpXG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBcIjVlZTk3ZGFiXCIsXG4gIFwiNGZhYTE2NmNcIlxuICBcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ3ZWIvY29tcG9uZW50cy9zZWFyY2gvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1ob3QtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS01LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9wb3N0Y3NzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTQhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01ZWU5N2RhYiZsYW5nPWxlc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVlZTk3ZGFiJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgSVNTUkNvbnRleHQgfSBmcm9tICdzc3ItdHlwZXMnXG5pbXBvcnQgeyBJbmRleERhdGEgfSBmcm9tICdAL2ludGVyZmFjZSdcbmludGVyZmFjZSBBcGlEZWF0aWxzZXJ2aWNlIHtcbiAgaW5kZXg6ICgpID0+IFByb21pc2U8SW5kZXhEYXRhPlxufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoeyBzdG9yZSwgcm91dGVyIH0sIGN0eD86IElTU1JDb250ZXh0PHtcbiAgYXBpRGVhdGlsc2VydmljZT86IEFwaURlYXRpbHNlcnZpY2Vcbn0+KSA9PiB7XG4gIC8vIOmYheivu+aWh+aho+iOt+W+l+abtOWkmuS/oeaBryBodHRwOi8vZG9jLnNzci1mYy5jb20vZG9jcy9mZWF0dXJlcyRmZXRjaCMlRTUlODglQTQlRTYlOTYlQUQlRTUlQkQlOTMlRTUlODklOEQlRTclOEUlQUYlRTUlQTIlODNcbiAgY29uc3QgZGF0YSA9IF9faXNCcm93c2VyX18gPyBhd2FpdCAoYXdhaXQgd2luZG93LmZldGNoKGAvYXBpL2RldGFpbC8ke3JvdXRlci5wYXJhbXMuaWR9YCkpLmpzb24oKSA6IGF3YWl0IGN0eD8uYXBpRGVhdGlsc2VydmljZT8uaW5kZXgoY3R4LnBhcmFtcy5pZClcbiAgYXdhaXQgc3RvcmUuZGlzcGF0Y2goJ2RldGFpbFN0b3JlL2luaXRpYWxEYXRhJywgeyBwYXlsb2FkOiBkYXRhIH0pXG59XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3JlbmRlciRpZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjlkMGE2M2YmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vcmVuZGVyJGlkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vcmVuZGVyJGlkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBcbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBudWxsLFxuICBcIjU3MDQ0ZjQwXCJcbiAgXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwid2ViL3BhZ2VzL2RldGFpbC9yZW5kZXIkaWQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yZW5kZXIkaWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3JlbmRlciRpZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcmVuZGVyJGlkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yOWQwYTYzZiZcIiIsImltcG9ydCB7IElTU1JDb250ZXh0IH0gZnJvbSAnc3NyLXR5cGVzJ1xuaW1wb3J0IHsgSW5kZXhEYXRhIH0gZnJvbSAnQC9pbnRlcmZhY2UnXG5pbnRlcmZhY2UgSUFwaVNlcnZpY2Uge1xuICBpbmRleDogKCkgPT4gUHJvbWlzZTxJbmRleERhdGE+XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChcbiAgeyBzdG9yZSwgcm91dGVyIH0sXG4gIGN0eD86IElTU1JDb250ZXh0PHtcbiAgICBhcGlTZXJ2aWNlPzogSUFwaVNlcnZpY2VcbiAgfT5cbikgPT4ge1xuICAvLyDpmIXor7vmlofmoaPojrflvpfmm7TlpJrkv6Hmga8gaHR0cDovL2RvYy5zc3ItZmMuY29tL2RvY3MvZmVhdHVyZXMkZmV0Y2gjJUU1JTg4JUE0JUU2JTk2JUFEJUU1JUJEJTkzJUU1JTg5JThEJUU3JThFJUFGJUU1JUEyJTgzXG4gIGNvbnN0IGRhdGEgPSBfX2lzQnJvd3Nlcl9fXG4gICAgPyBhd2FpdCAoYXdhaXQgd2luZG93LmZldGNoKCcvYXBpL2luZGV4JykpLmpzb24oKVxuICAgIDogYXdhaXQgY3R4Py5hcGlTZXJ2aWNlPy5pbmRleCgpXG4gIGF3YWl0IHN0b3JlLmRpc3BhdGNoKCdpbmRleFN0b3JlL2luaXRpYWxEYXRhJywgeyBwYXlsb2FkOiBkYXRhIH0pXG59XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3JlbmRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njc4MWM5ZjImc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vcmVuZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vcmVuZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICB2YXIgc3R5bGUwID0gcmVxdWlyZShcIi4vcmVuZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY3ODFjOWYyJmxhbmc9bGVzcyZzY29wZWQ9dHJ1ZSZcIilcbmlmIChzdHlsZTAuX19pbmplY3RfXykgc3R5bGUwLl9faW5qZWN0X18oY29udGV4dClcblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBpbmplY3RTdHlsZXMsXG4gIFwiNjc4MWM5ZjJcIixcbiAgXCI2MWU5NmM4OFwiXG4gIFxuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIndlYi9wYWdlcy9pbmRleC9yZW5kZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yZW5kZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3JlbmRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTUtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3Bvc3Rjc3MhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtNCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3JlbmRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02NzgxYzlmMiZsYW5nPWxlc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcmVuZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NzgxYzlmMiZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IGluZGV4U3RvcmUgfSBmcm9tICcuL21vZHVsZXMvaW5kZXgnXG5pbXBvcnQgeyBkZXRhaWxTdG9yZSB9IGZyb20gJy4vbW9kdWxlcy9kZXRhaWwnXG5pbXBvcnQgeyBzZWFyY2hTdG9yZSB9IGZyb20gJy4vbW9kdWxlcy9zZWFyY2gnXG5cbmNvbnN0IG1vZHVsZXMgPSB7XG4gIGluZGV4U3RvcmUsXG4gIGRldGFpbFN0b3JlLFxuICBzZWFyY2hTdG9yZVxufVxuZXhwb3J0IHtcbiAgbW9kdWxlc1xufVxuIiwiY29uc3QgZGV0YWlsU3RvcmUgPSB7XG4gIG5hbWVzcGFjZWQ6IHRydWUsXG4gIHN0YXRlOiB7XG4gICAgZGF0YToge31cbiAgfSxcbiAgbXV0YXRpb25zOiB7XG4gICAgc2V0RGF0YSAoc3RhdGUsIHBheWxvYWQpIHtcbiAgICAgIHN0YXRlLmRhdGEgPSBwYXlsb2FkXG4gICAgfVxuICB9LFxuICBhY3Rpb25zOiB7XG4gICAgaW5pdGlhbERhdGEgKHsgY29tbWl0IH0sIHsgcGF5bG9hZCB9KSB7XG4gICAgICBjb21taXQoJ3NldERhdGEnLCBwYXlsb2FkKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQge1xuICBkZXRhaWxTdG9yZVxufVxuIiwiY29uc3QgaW5kZXhTdG9yZSA9IHtcbiAgbmFtZXNwYWNlZDogdHJ1ZSxcbiAgc3RhdGU6IHtcbiAgICBkYXRhOiB7fVxuICB9LFxuICBtdXRhdGlvbnM6IHtcbiAgICBzZXREYXRhIChzdGF0ZSwgcGF5bG9hZCkge1xuICAgICAgc3RhdGUuZGF0YSA9IHBheWxvYWQuZGF0YVxuICAgIH1cbiAgfSxcbiAgYWN0aW9uczoge1xuICAgIGluaXRpYWxEYXRhICh7IGNvbW1pdCB9LCB7IHBheWxvYWQgfSkge1xuICAgICAgY29tbWl0KCdzZXREYXRhJywgcGF5bG9hZClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgaW5kZXhTdG9yZVxufVxuIiwiY29uc3Qgc2VhcmNoU3RvcmUgPSB7XG4gIG5hbWVzcGFjZWQ6IHRydWUsXG4gIHN0YXRlOiB7XG4gICAgc2VhcmNoVGV4dDogJydcbiAgfSxcbiAgbXV0YXRpb25zOiB7XG4gICAgc2V0VGV4dCAoc3RhdGUsIHBheWxvYWQpIHtcbiAgICAgIHN0YXRlLnNlYXJjaFRleHQgPSBwYXlsb2FkLnRleHRcbiAgICB9XG4gIH0sXG4gIGFjdGlvbnM6IHtcbiAgICBzZXRUZXh0ICh7IGNvbW1pdCB9LCB7IHBheWxvYWQgfSkge1xuICAgICAgY29tbWl0KCdzZXRUZXh0JywgcGF5bG9hZClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgc2VhcmNoU3RvcmVcbn1cbiIsImZ1bmN0aW9uIGdldENvb2tpZShuYW1lOiBzdHJpbmcpOiBhbnkge1xuICB2YXIgYXJyLFxuICAgIHJlZyA9IG5ldyBSZWdFeHAoXCIoXnwgKVwiICsgbmFtZSArIFwiPShbXjtdKikoO3wkKVwiKTtcbiAgaWYgKChhcnIgPSBkb2N1bWVudC5jb29raWUubWF0Y2gocmVnKSkpIHJldHVybiB1bmVzY2FwZShhcnJbMl0pO1xuICBlbHNlIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldENvb2tpZSxcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzc3Itc2VydmVyLXV0aWxzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInZhbnQvbGliL2J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ2YW50L2xpYi9maWVsZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ2dWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidnVlLXJvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ2dWV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInZ1ZXgtcm91dGVyLXN5bmNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==