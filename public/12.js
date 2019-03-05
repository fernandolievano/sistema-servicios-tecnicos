(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/repuestos/RepuestoEditar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/repuestos/RepuestoEditar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
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
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'EditarRepuesto',
  props: {
    id: {
      type: Number,
      required: true,
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
      return this.$store.getters['repuesto/getRepuestoById'](this.id);
    }
  },
  methods: {
    closeThis: function closeThis() {
      this.dialog = false;
    },
    actualizar: function actualizar(id) {
      var _this = this;

      var url = "/api/v1/repuestos/update/".concat(id);
      var params = Object.assign({}, this.formulario);
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(url, params).then(function () {
        _this.success = true;
      }).catch(function (error) {
        return console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/repuestos/RepuestoEditar.vue?vue&type=template&id=894f3db6&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/repuestos/RepuestoEditar.vue?vue&type=template&id=894f3db6& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
      key: _vm.id,
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
          attrs: { slot: "activator", small: "", flat: "", color: "warning" },
          slot: "activator"
        },
        [
          _vm._v("\n    Editar información\n    "),
          _c("v-icon", [_vm._v("edit")])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card",
        [
          _c(
            "v-toolbar",
            { attrs: { color: "warning", dense: "", dark: "" } },
            [
              _c(
                "v-btn",
                { attrs: { icon: "", dark: "" }, on: { click: _vm.closeThis } },
                [_c("v-icon", [_vm._v("close")])],
                1
              ),
              _vm._v(" "),
              _c("v-toolbar-title", [
                _vm._v("\n        Editar información de repuesto\n      ")
              ]),
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
              ref: "editrepuesto",
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
                        "\n          Datos actualizados exitosamente\n        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-container",
                    { attrs: { "grid-list-xs": "" } },
                    [
                      _c(
                        "v-layout",
                        { attrs: { row: "", wrap: "" } },
                        [
                          _c(
                            "v-flex",
                            { attrs: { xs12: "" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  name: "repuesto",
                                  label: "Repuesto",
                                  rules: _vm.generales
                                },
                                model: {
                                  value: _vm.formulario.repuesto,
                                  callback: function($$v) {
                                    _vm.$set(_vm.formulario, "repuesto", $$v)
                                  },
                                  expression: "formulario.repuesto"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { xs12: "" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  name: "descripcion",
                                  label: "Descripción del repuesto",
                                  rules: _vm.generales
                                },
                                model: {
                                  value: _vm.formulario.descripcion,
                                  callback: function($$v) {
                                    _vm.$set(_vm.formulario, "descripcion", $$v)
                                  },
                                  expression: "formulario.descripcion"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { xs12: "" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  name: "valor",
                                  label: "Precio unitario de compra",
                                  rules: _vm.generales
                                },
                                model: {
                                  value: _vm.formulario.precio_unitario_compra,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.formulario,
                                      "precio_unitario_compra",
                                      _vm._n($$v)
                                    )
                                  },
                                  expression:
                                    "formulario.precio_unitario_compra"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { xs12: "" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  name: "valor",
                                  label: "Precio unitario de venta",
                                  rules: _vm.generales
                                },
                                model: {
                                  value: _vm.formulario.precio_unitario_venta,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.formulario,
                                      "precio_unitario_venta",
                                      _vm._n($$v)
                                    )
                                  },
                                  expression: "formulario.precio_unitario_venta"
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

/***/ "./resources/js/components/views/repuestos/RepuestoEditar.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/views/repuestos/RepuestoEditar.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RepuestoEditar_vue_vue_type_template_id_894f3db6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RepuestoEditar.vue?vue&type=template&id=894f3db6& */ "./resources/js/components/views/repuestos/RepuestoEditar.vue?vue&type=template&id=894f3db6&");
/* harmony import */ var _RepuestoEditar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RepuestoEditar.vue?vue&type=script&lang=js& */ "./resources/js/components/views/repuestos/RepuestoEditar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RepuestoEditar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RepuestoEditar_vue_vue_type_template_id_894f3db6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RepuestoEditar_vue_vue_type_template_id_894f3db6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/views/repuestos/RepuestoEditar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/views/repuestos/RepuestoEditar.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/views/repuestos/RepuestoEditar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RepuestoEditar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RepuestoEditar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/repuestos/RepuestoEditar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RepuestoEditar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/views/repuestos/RepuestoEditar.vue?vue&type=template&id=894f3db6&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/views/repuestos/RepuestoEditar.vue?vue&type=template&id=894f3db6& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RepuestoEditar_vue_vue_type_template_id_894f3db6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RepuestoEditar.vue?vue&type=template&id=894f3db6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/repuestos/RepuestoEditar.vue?vue&type=template&id=894f3db6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RepuestoEditar_vue_vue_type_template_id_894f3db6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RepuestoEditar_vue_vue_type_template_id_894f3db6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);