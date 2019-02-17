(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/clientes/Clientes.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/clientes/Clientes.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  components: {
    nuevoCliente: function nuevoCliente() {
      return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ./ClienteNuevo.vue */ "./resources/js/components/views/clientes/ClienteNuevo.vue"));
    },
    indexClientes: function indexClientes() {
      return Promise.all(/*! import() */[__webpack_require__.e(6), __webpack_require__.e(0)]).then(__webpack_require__.bind(null, /*! ./ClientesIndex.vue */ "./resources/js/components/views/clientes/ClientesIndex.vue"));
    }
  },
  data: function data() {
    return {
      activeBtn: 0
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/clientes/Clientes.vue?vue&type=template&id=704f1493&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/clientes/Clientes.vue?vue&type=template&id=704f1493& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
            centered: "",
            color: "transparent",
            light: "",
            "icons-and-text": ""
          },
          model: {
            value: _vm.activeBtn,
            callback: function($$v) {
              _vm.activeBtn = $$v
            },
            expression: "activeBtn"
          }
        },
        [
          _c("v-tabs-slider", { attrs: { color: "primary" } }),
          _vm._v(" "),
          _c(
            "v-tab",
            [
              _vm._v("\n            Lista de clientes\n            "),
              _c("v-icon", [_vm._v("people")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-tab",
            [
              _vm._v("\n            Nuevo\n            "),
              _c("v-icon", [_vm._v("add")])
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
            value: _vm.activeBtn,
            callback: function($$v) {
              _vm.activeBtn = $$v
            },
            expression: "activeBtn"
          }
        },
        [
          _c("v-tab-item", [_c("index-clientes")], 1),
          _vm._v(" "),
          _c("v-tab-item", [_c("nuevo-cliente")], 1)
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

/***/ "./resources/js/components/views/clientes/Clientes.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/views/clientes/Clientes.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Clientes_vue_vue_type_template_id_704f1493___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Clientes.vue?vue&type=template&id=704f1493& */ "./resources/js/components/views/clientes/Clientes.vue?vue&type=template&id=704f1493&");
/* harmony import */ var _Clientes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Clientes.vue?vue&type=script&lang=js& */ "./resources/js/components/views/clientes/Clientes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Clientes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Clientes_vue_vue_type_template_id_704f1493___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Clientes_vue_vue_type_template_id_704f1493___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/views/clientes/Clientes.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/views/clientes/Clientes.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/views/clientes/Clientes.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Clientes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Clientes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/clientes/Clientes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Clientes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/views/clientes/Clientes.vue?vue&type=template&id=704f1493&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/views/clientes/Clientes.vue?vue&type=template&id=704f1493& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Clientes_vue_vue_type_template_id_704f1493___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Clientes.vue?vue&type=template&id=704f1493& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/clientes/Clientes.vue?vue&type=template&id=704f1493&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Clientes_vue_vue_type_template_id_704f1493___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Clientes_vue_vue_type_template_id_704f1493___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);