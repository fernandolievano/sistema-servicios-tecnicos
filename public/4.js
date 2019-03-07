(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/caja/Caja.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/caja/Caja.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Caja',
  components: {
    IngresosRetiros: function IngresosRetiros() {
      return __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! ./IngresosRetiros.vue */ "./resources/js/components/views/caja/IngresosRetiros.vue"));
    }
  },
  data: function data() {
    return {
      active: 0
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(['caja']), {
    totalCaja: function totalCaja() {
      return this.caja.caja.total;
    }
  }),
  created: function created() {
    this.fetchCaja();
    this.fetchIngresosYRetiros();
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    fetchCaja: 'caja/fetchCaja',
    fetchIngresosYRetiros: 'caja/fetchIngresosYRetiros'
  }), {
    formatoDinero: function formatoDinero(precio) {
      var formato = precio.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
      formato = "".concat(formato, " ARS");
      return formato;
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/caja/Caja.vue?vue&type=template&id=405075da&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/caja/Caja.vue?vue&type=template&id=405075da&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
      _c(
        "v-tabs",
        {
          attrs: {
            color: "blue-grey darken-3",
            dark: "",
            centered: "",
            flat: "",
            "icons-and-text": ""
          },
          model: {
            value: _vm.active,
            callback: function($$v) {
              _vm.active = $$v
            },
            expression: "active"
          }
        },
        [
          _c("v-tabs-slider", { attrs: { color: "light-green darken-1" } }),
          _vm._v(" "),
          _c(
            "v-tab",
            [
              _vm._v("\n      Ingresos y Retiros\n      "),
              _c("v-icon", [_vm._v("attach_money")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-tab",
            [
              _vm._v("\n      Otras cosas\n      "),
              _c("v-icon", [_vm._v("cloud")])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "bottom-shadow" },
        [
          _c(
            "v-toolbar",
            {
              attrs: {
                color: "blue-grey darken-3",
                dense: "",
                dark: "",
                flat: ""
              }
            },
            [
              _c("v-toolbar-title", { staticClass: "display-1" }, [
                _vm._v("\n        Caja:\n        "),
                _vm.totalCaja > 0
                  ? _c(
                      "span",
                      { staticClass: "light-green--text text--lighten-2" },
                      [_vm._v(_vm._s(_vm.formatoDinero(_vm.totalCaja)))]
                    )
                  : _vm.totalCaja < 0
                  ? _c("span", { staticClass: "red--text text--lighten-1" }, [
                      _vm._v(_vm._s(_vm.formatoDinero(_vm.totalCaja)))
                    ])
                  : _vm.totalCaja === 0
                  ? _c("span", { staticClass: "gray--text" }, [
                      _vm._v(_vm._s(_vm.formatoDinero(_vm.totalCaja)))
                    ])
                  : _vm._e()
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-tabs-items",
        {
          model: {
            value: _vm.active,
            callback: function($$v) {
              _vm.active = $$v
            },
            expression: "active"
          }
        },
        [
          _c("v-tab-item", [_c("IngresosRetiros")], 1),
          _vm._v(" "),
          _c("v-tab-item", [_vm._v("\n      Otras cosas\n    ")])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/views/caja/Caja.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/views/caja/Caja.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Caja_vue_vue_type_template_id_405075da_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Caja.vue?vue&type=template&id=405075da&scoped=true& */ "./resources/js/components/views/caja/Caja.vue?vue&type=template&id=405075da&scoped=true&");
/* harmony import */ var _Caja_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Caja.vue?vue&type=script&lang=js& */ "./resources/js/components/views/caja/Caja.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Caja_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Caja_vue_vue_type_template_id_405075da_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Caja_vue_vue_type_template_id_405075da_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "405075da",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/views/caja/Caja.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/views/caja/Caja.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/views/caja/Caja.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Caja_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Caja.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/caja/Caja.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Caja_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/views/caja/Caja.vue?vue&type=template&id=405075da&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/views/caja/Caja.vue?vue&type=template&id=405075da&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Caja_vue_vue_type_template_id_405075da_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Caja.vue?vue&type=template&id=405075da&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/caja/Caja.vue?vue&type=template&id=405075da&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Caja_vue_vue_type_template_id_405075da_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Caja_vue_vue_type_template_id_405075da_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);