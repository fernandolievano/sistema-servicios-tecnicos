(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/repuestos/RepuestoNuevo.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/repuestos/RepuestoNuevo.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
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
  name: 'NuevoRepuesto',
  data: function data() {
    return {
      valid: false,
      success: false,
      formulario: {
        repuesto: null,
        descripcion: null,
        cantidad: null,
        precio_unitario: null
      },
      generales: [function (v) {
        return !!v || 'Este campo es requerido';
      }]
    };
  },
  methods: {
    store: function store() {
      var _this = this;

      var url = "/api/v1/repuestos/store";
      var params = Object.assign({}, this.formulario);
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(url, params).then(function () {
        _this.success = true;

        _this.$store.dispatch('indexRepuestos');
      });
    },
    another: function another() {
      this.$refs.formrepuesto.reset();
      this.success = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/repuestos/RepuestoNuevo.vue?vue&type=template&id=088c9b3d&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/repuestos/RepuestoNuevo.vue?vue&type=template&id=088c9b3d& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
    "v-form",
    {
      ref: "formrepuesto",
      attrs: { "lazy-validation": "" },
      on: {
        submit: function($event) {
          $event.preventDefault()
          return _vm.store($event)
        }
      },
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
        "v-container",
        { attrs: { "grid-list-xs": "" } },
        [
          _c(
            "v-layout",
            { attrs: { row: "", wrap: "" } },
            [
              _c(
                "v-flex",
                {
                  attrs: {
                    sm10: "",
                    "offset-sm1": "",
                    "offset-md2": "",
                    md8: ""
                  }
                },
                [
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-card-title",
                        [
                          _c(
                            "v-layout",
                            { attrs: { row: "", wrap: "" } },
                            [
                              _c("v-flex", { attrs: { xs12: "" } }, [
                                _c("h2", { staticClass: "display-3" }, [
                                  _vm._v("Nuevo Repuesto")
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
                                        type: "success",
                                        dismissable: "",
                                        transition: "scale-transition"
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
                                        "\n                                    Nuevo repuesto añadido exitosamente\n                                "
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
                      ),
                      _vm._v(" "),
                      _c(
                        "v-responsive",
                        [
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
                                            _vm.$set(
                                              _vm.formulario,
                                              "repuesto",
                                              $$v
                                            )
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
                                          label: "Descripción",
                                          rules: _vm.generales
                                        },
                                        model: {
                                          value: _vm.formulario.descripcion,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.formulario,
                                              "descripcion",
                                              $$v
                                            )
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
                                          name: "cantidad",
                                          label: "Cantidad o Stock",
                                          rules: _vm.generales
                                        },
                                        model: {
                                          value: _vm.formulario.cantidad,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.formulario,
                                              "cantidad",
                                              _vm._n($$v)
                                            )
                                          },
                                          expression: "formulario.cantidad"
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
                                          name: "precio_unitario",
                                          label: "Precio unitario",
                                          rules: _vm.generales
                                        },
                                        model: {
                                          value: _vm.formulario.precio_unitario,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.formulario,
                                              "precio_unitario",
                                              _vm._n($$v)
                                            )
                                          },
                                          expression:
                                            "formulario.precio_unitario"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-flex",
                                    { attrs: { xs6: "" } },
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            type: "submit",
                                            large: "",
                                            block: "",
                                            color: "success"
                                          }
                                        },
                                        [_vm._v("Añadir")]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-flex",
                                    { attrs: { xs6: "" } },
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            large: "",
                                            block: "",
                                            flat: "",
                                            color: "primary"
                                          },
                                          on: {
                                            click: function($event) {
                                              $event.preventDefault()
                                              return _vm.another($event)
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                        Añadir otro\n                                    "
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

/***/ "./resources/js/components/views/repuestos/RepuestoNuevo.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/views/repuestos/RepuestoNuevo.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RepuestoNuevo_vue_vue_type_template_id_088c9b3d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RepuestoNuevo.vue?vue&type=template&id=088c9b3d& */ "./resources/js/components/views/repuestos/RepuestoNuevo.vue?vue&type=template&id=088c9b3d&");
/* harmony import */ var _RepuestoNuevo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RepuestoNuevo.vue?vue&type=script&lang=js& */ "./resources/js/components/views/repuestos/RepuestoNuevo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RepuestoNuevo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RepuestoNuevo_vue_vue_type_template_id_088c9b3d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RepuestoNuevo_vue_vue_type_template_id_088c9b3d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/views/repuestos/RepuestoNuevo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/views/repuestos/RepuestoNuevo.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/views/repuestos/RepuestoNuevo.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RepuestoNuevo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RepuestoNuevo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/repuestos/RepuestoNuevo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RepuestoNuevo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/views/repuestos/RepuestoNuevo.vue?vue&type=template&id=088c9b3d&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/views/repuestos/RepuestoNuevo.vue?vue&type=template&id=088c9b3d& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RepuestoNuevo_vue_vue_type_template_id_088c9b3d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RepuestoNuevo.vue?vue&type=template&id=088c9b3d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/repuestos/RepuestoNuevo.vue?vue&type=template&id=088c9b3d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RepuestoNuevo_vue_vue_type_template_id_088c9b3d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RepuestoNuevo_vue_vue_type_template_id_088c9b3d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);