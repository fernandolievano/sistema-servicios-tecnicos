(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/repuestos/AñadirStock.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/repuestos/AñadirStock.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuelidate */ "./node_modules/vuelidate/lib/index.js");
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuelidate__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* eslint-disable no-unused-expressions */



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'IncrementarStock',
  mixins: [vuelidate__WEBPACK_IMPORTED_MODULE_2__["validationMixin"]],
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data: function data() {
    return {
      dialog: false,
      valid: false,
      invalid: false,
      success: false,
      nuevaCantidad: 0
    };
  },
  validations: {
    nuevaCantidad: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"],
      numeric: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["numeric"]
    },
    repuesto: {
      precio_unitario_compra: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"],
        numeric: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["numeric"]
      }
    }
  },
  computed: {
    repuesto: function repuesto() {
      return this.$store.getters['repuesto/getRepuestoById'](this.id);
    },
    erroresPrecioCompra: function erroresPrecioCompra() {
      var errors = [];
      if (!this.$v.repuesto.precio_unitario_compra.$dirty) return errors;
      !this.$v.repuesto.precio_unitario_compra.required && errors.push('Debes completar este campo');
      !this.$v.repuesto.precio_unitario_compra.numeric && errors.push('Este campo debe contener un valor numérico');
      return errors;
    },
    erroresCantidad: function erroresCantidad() {
      var errors = [];
      if (!this.$v.nuevaCantidad.$dirty) return errors;
      !this.$v.nuevaCantidad.required && errors.push('Debes completar este campo');
      !this.$v.nuevaCantidad.numeric && errors.push('Este campo debe contener un valor numérico');
      return errors;
    }
  },
  methods: {
    actualizar: function () {
      var _actualizar = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var url, params;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.$v.$touch();

                if (!this.$v.$invalid) {
                  _context.next = 5;
                  break;
                }

                this.invalid = true;
                _context.next = 12;
                break;

              case 5:
                url = "/api/v1/repuestos/update/stock/".concat(this.id);
                params = Object.assign({}, this.repuesto);
                params.nueva_cantidad = this.nuevaCantidad;
                _context.next = 10;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.put(url, params);

              case 10:
                this.invalid = false;
                this.success = true;

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function actualizar() {
        return _actualizar.apply(this, arguments);
      }

      return actualizar;
    }()
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/repuestos/AñadirStock.vue?vue&type=template&id=881017be&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/repuestos/AñadirStock.vue?vue&type=template&id=881017be& ***!
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
        { attrs: { slot: "activator", color: "success" }, slot: "activator" },
        [_vm._v("\n    Actualizar Stock\n    "), _c("v-icon", [_vm._v("add")])],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card",
        [
          _c(
            "v-toolbar",
            { attrs: { color: "success", dense: "", dark: "" } },
            [
              _c(
                "v-btn",
                {
                  attrs: { icon: "", dark: "" },
                  on: {
                    click: function($event) {
                      _vm.dialog = false
                    }
                  }
                },
                [_c("v-icon", [_vm._v("close")])],
                1
              ),
              _vm._v(" "),
              _c("v-toolbar-title", [
                _vm._v("Actualizar stock de " + _vm._s(_vm.repuesto.repuesto))
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
                      on: { click: _vm.actualizar }
                    },
                    [_vm._v("Listo")]
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
              ref: "incstock",
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
                    "v-container",
                    { attrs: { "grid-list-xs": "" } },
                    [
                      _c(
                        "v-layout",
                        { attrs: { row: "", wrap: "" } },
                        [
                          _c("v-flex", { attrs: { xs12: "" } }, [
                            _c("h1", [
                              _vm._v(
                                "Stock " +
                                  _vm._s(_vm.repuesto.repuesto) +
                                  ": " +
                                  _vm._s(
                                    _vm.repuesto.cantidad + _vm.nuevaCantidad
                                  )
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
                                    type: "error",
                                    transition: "scale-transition",
                                    dismissible: ""
                                  },
                                  model: {
                                    value: _vm.invalid,
                                    callback: function($$v) {
                                      _vm.invalid = $$v
                                    },
                                    expression: "invalid"
                                  }
                                },
                                [
                                  _vm._v(
                                    "Por favor corrija los errores para continuar"
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-alert",
                                {
                                  attrs: {
                                    type: "success",
                                    transition: "scale-transition",
                                    dismissible: ""
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
                                    "\n                Los cambios se efectuaron con éxito\n              "
                                  )
                                ]
                              )
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
                                  name: "precio_unitario_compra",
                                  label:
                                    "Si el precio de compra es el mismo de la ultima vez no es necesario cambiar este campo",
                                  placeholder: "Precio de compra por unidad",
                                  "error-messages": _vm.erroresPrecioCompra
                                },
                                on: {
                                  input: function($event) {
                                    return _vm.$v.repuesto.precio_unitario_compra.$touch()
                                  },
                                  blur: function($event) {
                                    return _vm.$v.repuesto.precio_unitario_compra.$touch()
                                  }
                                },
                                model: {
                                  value: _vm.repuesto.precio_unitario_compra,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.repuesto,
                                      "precio_unitario_compra",
                                      _vm._n($$v)
                                    )
                                  },
                                  expression: "repuesto.precio_unitario_compra"
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
                                  label: "Cantidad a añadir",
                                  "error-messages": _vm.erroresCantidad
                                },
                                on: {
                                  input: function($event) {
                                    return _vm.$v.nuevaCantidad.$touch()
                                  },
                                  blur: function($event) {
                                    return _vm.$v.nuevaCantidad.$touch()
                                  }
                                },
                                model: {
                                  value: _vm.nuevaCantidad,
                                  callback: function($$v) {
                                    _vm.nuevaCantidad = _vm._n($$v)
                                  },
                                  expression: "nuevaCantidad"
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

/***/ "./resources/js/components/views/repuestos/AñadirStock.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/views/repuestos/AñadirStock.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _A_adirStock_vue_vue_type_template_id_881017be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AñadirStock.vue?vue&type=template&id=881017be& */ "./resources/js/components/views/repuestos/AñadirStock.vue?vue&type=template&id=881017be&");
/* harmony import */ var _A_adirStock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AñadirStock.vue?vue&type=script&lang=js& */ "./resources/js/components/views/repuestos/AñadirStock.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _A_adirStock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _A_adirStock_vue_vue_type_template_id_881017be___WEBPACK_IMPORTED_MODULE_0__["render"],
  _A_adirStock_vue_vue_type_template_id_881017be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/views/repuestos/AñadirStock.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/views/repuestos/AñadirStock.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/views/repuestos/AñadirStock.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_A_adirStock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AñadirStock.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/repuestos/AñadirStock.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_A_adirStock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/views/repuestos/AñadirStock.vue?vue&type=template&id=881017be&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/views/repuestos/AñadirStock.vue?vue&type=template&id=881017be& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_A_adirStock_vue_vue_type_template_id_881017be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AñadirStock.vue?vue&type=template&id=881017be& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/repuestos/AñadirStock.vue?vue&type=template&id=881017be&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_A_adirStock_vue_vue_type_template_id_881017be___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_A_adirStock_vue_vue_type_template_id_881017be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);