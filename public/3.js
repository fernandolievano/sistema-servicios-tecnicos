(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/clientes/ClienteEquipoNuevo.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/clientes/ClienteEquipoNuevo.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _this = undefined;

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
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'NuevoEquipoCliente',
  props: {
    id: {
      type: Number,
      required: true,
      default: 0
    },
    cliente: {
      type: String,
      default: 'Cliente'
    }
  },
  data: function data() {
    return {
      dialog: false,
      success: false,
      valid: false,
      formulario: {
        equipo: '',
        modelo: '',
        descripcion: '',
        diagnostico: '',
        estado: 'Reparación',
        cliente_id: _this.id
      },
      generales: [function (v) {
        return !!v || 'Este campo es requerido';
      }]
    };
  },
  methods: {
    closeThis: function closeThis() {
      this.dialog = false;
    },
    store: function store() {//
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/clientes/ClienteEquipoNuevo.vue?vue&type=template&id=4a73cb38&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/clientes/ClienteEquipoNuevo.vue?vue&type=template&id=4a73cb38& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
    "v-dialog",
    {
      attrs: {
        fullscreen: "",
        "hide-overlay": "",
        transition: "dialog-bottom-transition"
      },
      model: {
        value: _vm.dialog,
        callback: function($$v) {
          _vm.dialog = $$v
        },
        expression: "dialog"
      }
    },
    [
      _c(
        "v-btn",
        {
          attrs: {
            slot: "activator",
            fab: "",
            small: "",
            depressed: "",
            color: "success"
          },
          slot: "activator"
        },
        [_c("v-icon", [_vm._v("add")])],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card",
        [
          _c(
            "v-toolbar",
            { attrs: { dark: "", color: "success", dense: "" } },
            [
              _c(
                "v-btn",
                { attrs: { icon: "", dark: "" }, on: { click: _vm.closeThis } },
                [_c("v-icon", [_vm._v("close")])],
                1
              ),
              _vm._v(" "),
              _c("v-toolbar-title", [_vm._v("Nuevo equipo ")]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-toolbar-items",
                [
                  _c("v-btn", { attrs: { dark: "", flat: "" } }, [
                    _vm._v("Registrar")
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-form",
            {
              attrs: { "lazy-validation": "" },
              model: {
                value: _vm.valid,
                callback: function($$v) {
                  _vm.valid = $$v
                },
                expression: "valid"
              }
            },
            [
              _c(
                "v-responsive",
                [
                  _c(
                    "v-card-title",
                    { attrs: { "primary-title": "" } },
                    [
                      _c(
                        "v-container",
                        { attrs: { "grid-list-xs": "" } },
                        [
                          _c(
                            "v-layout",
                            { attrs: { row: "", wrap: "" } },
                            [
                              _c("v-flex", { attrs: { xs12: "" } }, [
                                _c("h2", { staticClass: "display-3" }, [
                                  _vm._v(
                                    "\n                                    Nuevo equipo de " +
                                      _vm._s(_vm.cliente) +
                                      " " +
                                      _vm._s(_vm.formulario.cliente_id) +
                                      "\n                                "
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-flex",
                                { attrs: { xs12: "" } },
                                [
                                  _c(
                                    "v-alert",
                                    {
                                      attrs: {
                                        dismissible: "",
                                        type: "success"
                                      },
                                      model: {
                                        value: _vm.success,
                                        callback: function($$v) {
                                          _vm.success = $$v
                                        },
                                        expression: "success"
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                    Nuevo equipo registrado exitosamente\n                                "
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-container",
                    { attrs: { "grid-list-xs": "" } },
                    [_c("v-layout", { attrs: { row: "", wrap: "" } })],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
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

/***/ "./resources/js/components/views/clientes/ClienteEquipoNuevo.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/views/clientes/ClienteEquipoNuevo.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ClienteEquipoNuevo_vue_vue_type_template_id_4a73cb38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClienteEquipoNuevo.vue?vue&type=template&id=4a73cb38& */ "./resources/js/components/views/clientes/ClienteEquipoNuevo.vue?vue&type=template&id=4a73cb38&");
/* harmony import */ var _ClienteEquipoNuevo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClienteEquipoNuevo.vue?vue&type=script&lang=js& */ "./resources/js/components/views/clientes/ClienteEquipoNuevo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ClienteEquipoNuevo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ClienteEquipoNuevo_vue_vue_type_template_id_4a73cb38___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ClienteEquipoNuevo_vue_vue_type_template_id_4a73cb38___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/views/clientes/ClienteEquipoNuevo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/views/clientes/ClienteEquipoNuevo.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/views/clientes/ClienteEquipoNuevo.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClienteEquipoNuevo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ClienteEquipoNuevo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/clientes/ClienteEquipoNuevo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClienteEquipoNuevo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/views/clientes/ClienteEquipoNuevo.vue?vue&type=template&id=4a73cb38&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/views/clientes/ClienteEquipoNuevo.vue?vue&type=template&id=4a73cb38& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClienteEquipoNuevo_vue_vue_type_template_id_4a73cb38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ClienteEquipoNuevo.vue?vue&type=template&id=4a73cb38& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/clientes/ClienteEquipoNuevo.vue?vue&type=template&id=4a73cb38&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClienteEquipoNuevo_vue_vue_type_template_id_4a73cb38___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClienteEquipoNuevo_vue_vue_type_template_id_4a73cb38___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);