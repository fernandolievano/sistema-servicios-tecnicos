(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/clientes/ClienteEditar.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/clientes/ClienteEditar.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
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
  name: 'EditarCliente',
  props: {
    id: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    return {
      dialog: false,
      valid: false,
      success: false,
      generales: [function (v) {
        return !!v || 'Este campo es requerido';
      }]
    };
  },
  computed: {
    formulario: function formulario() {
      return this.$store.getters['cliente/getClienteById'](this.id);
    }
  },
  methods: {
    actualizar: function actualizar(id) {
      var _this = this;

      var url = "/api/v1/clientes/update/".concat(id);
      var params = Object.assign({}, this.formulario);
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(url, params).then(function () {
        _this.success = true;
      });
    },
    closeThis: function closeThis() {
      this.dialog = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/clientes/ClienteEditar.vue?vue&type=template&id=6a472aeb&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/clientes/ClienteEditar.vue?vue&type=template&id=6a472aeb& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
            color: "warning",
            small: "",
            block: "",
            flat: ""
          },
          slot: "activator"
        },
        [
          _vm._v("\n    Editar información\n    "),
          _c("v-icon", { attrs: { right: "" } }, [_vm._v("\n      edit\n    ")])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card",
        [
          _c(
            "v-toolbar",
            { attrs: { dark: "", color: "warning", dense: "" } },
            [
              _c(
                "v-btn",
                { attrs: { icon: "", dark: "" }, on: { click: _vm.closeThis } },
                [_c("v-icon", [_vm._v("close")])],
                1
              ),
              _vm._v(" "),
              _c("v-toolbar-title", [_vm._v("Editar información personal ")]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-toolbar-items",
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { dark: "", flat: "" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.actualizar(_vm.id)
                        }
                      }
                    },
                    [_vm._v("Guardar cambios")]
                  )
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
              ref: "editcliente",
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
                    "v-alert",
                    {
                      attrs: {
                        transition: "scale-transition",
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
                        "\n          Los datos del cliente fueron actualizados con éxito\n        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-container",
                    [
                      _c(
                        "v-layout",
                        { attrs: { row: "", wrap: "" } },
                        [
                          _c(
                            "v-flex",
                            { attrs: { xs12: "", sm8: "" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "Nombre",
                                  required: "",
                                  rules: _vm.generales
                                },
                                model: {
                                  value: _vm.formulario.nombre,
                                  callback: function($$v) {
                                    _vm.$set(_vm.formulario, "nombre", $$v)
                                  },
                                  expression: "formulario.nombre"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { xs12: "", sm8: "" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "Apellido",
                                  required: "",
                                  rules: _vm.generales
                                },
                                model: {
                                  value: _vm.formulario.apellido,
                                  callback: function($$v) {
                                    _vm.$set(_vm.formulario, "apellido", $$v)
                                  },
                                  expression: "formulario.apellido"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { xs12: "", sm8: "" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "Dirección",
                                  required: "",
                                  rules: _vm.generales
                                },
                                model: {
                                  value: _vm.formulario.direccion,
                                  callback: function($$v) {
                                    _vm.$set(_vm.formulario, "direccion", $$v)
                                  },
                                  expression: "formulario.direccion"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { xs12: "", sm8: "" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "Teléfono",
                                  required: "",
                                  rules: _vm.generales
                                },
                                model: {
                                  value: _vm.formulario.telefono,
                                  callback: function($$v) {
                                    _vm.$set(_vm.formulario, "telefono", $$v)
                                  },
                                  expression: "formulario.telefono"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { xs12: "", sm8: "" } },
                            [
                              _c("v-text-field", {
                                attrs: { label: "E-mail" },
                                model: {
                                  value: _vm.formulario.email,
                                  callback: function($$v) {
                                    _vm.$set(_vm.formulario, "email", $$v)
                                  },
                                  expression: "formulario.email"
                                }
                              })
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

/***/ "./resources/js/components/views/clientes/ClienteEditar.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/views/clientes/ClienteEditar.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ClienteEditar_vue_vue_type_template_id_6a472aeb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClienteEditar.vue?vue&type=template&id=6a472aeb& */ "./resources/js/components/views/clientes/ClienteEditar.vue?vue&type=template&id=6a472aeb&");
/* harmony import */ var _ClienteEditar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClienteEditar.vue?vue&type=script&lang=js& */ "./resources/js/components/views/clientes/ClienteEditar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ClienteEditar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ClienteEditar_vue_vue_type_template_id_6a472aeb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ClienteEditar_vue_vue_type_template_id_6a472aeb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/views/clientes/ClienteEditar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/views/clientes/ClienteEditar.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/views/clientes/ClienteEditar.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClienteEditar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ClienteEditar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/clientes/ClienteEditar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClienteEditar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/views/clientes/ClienteEditar.vue?vue&type=template&id=6a472aeb&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/views/clientes/ClienteEditar.vue?vue&type=template&id=6a472aeb& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClienteEditar_vue_vue_type_template_id_6a472aeb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ClienteEditar.vue?vue&type=template&id=6a472aeb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/clientes/ClienteEditar.vue?vue&type=template&id=6a472aeb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClienteEditar_vue_vue_type_template_id_6a472aeb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClienteEditar_vue_vue_type_template_id_6a472aeb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);