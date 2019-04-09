(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/clientes/ClienteNuevo.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/clientes/ClienteNuevo.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuelidate */ "./node_modules/vuelidate/lib/index.js");
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuelidate__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ClienteEquipoNuevo_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ClienteEquipoNuevo.vue */ "./resources/js/components/views/clientes/ClienteEquipoNuevo.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    NuevoEquipoCliente: _ClienteEquipoNuevo_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  mixins: [vuelidate__WEBPACK_IMPORTED_MODULE_2__["validationMixin"]],
  data: function data() {
    return {
      valid: false,
      invalid: false,
      success: false,
      formulario: {
        nombre: '',
        apellido: '',
        direccion: '',
        telefono: '',
        email: ''
      },
      cliente: {}
    };
  },
  computed: {
    erroresNombre: function erroresNombre() {
      var errors = [];
      if (!this.$v.formulario.nombre.$dirty) return errors;
      !this.$v.formulario.nombre.minLength && errors.push('El nombre debe contener más de 3 caracteres');
      !this.$v.formulario.nombre.required && errors.push('Este campo es requerido para el registro');
      return errors;
    },
    erroresApellido: function erroresApellido() {
      var errors = [];
      if (!this.$v.formulario.apellido.$dirty) return errors;
      !this.$v.formulario.apellido.minLength && errors.push('El apellido debe contener más de 3 caracteres');
      !this.$v.formulario.apellido.required && errors.push('Este campo es requerido para el registro');
      return errors;
    },
    erroresDireccion: function erroresDireccion() {
      var errors = [];
      if (!this.$v.formulario.direccion.$dirty) return errors;
      !this.$v.formulario.direccion.required && errors.push('Este campo es requerido para el registro');
      return errors;
    },
    erroresTelefono: function erroresTelefono() {
      var errors = [];
      if (!this.$v.formulario.telefono.$dirty) return errors;
      !this.$v.formulario.telefono.required && errors.push('Este campo es requerido para el registro');
      return errors;
    },
    erroresEmail: function erroresEmail() {
      var errors = [];
      if (!this.$v.formulario.email.$dirty) return errors;
      !this.$v.formulario.email.email && errors.push('Especifique una dirección de correo válida');
      return errors;
    }
  },
  validations: {
    formulario: {
      nombre: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"],
        minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["minLength"])(3)
      },
      apellido: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"],
        minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["minLength"])(3)
      },
      direccion: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"]
      },
      telefono: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"]
      },
      email: {
        email: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["email"]
      }
    }
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])({
    create: 'cliente/createCliente'
  }), {
    store: function () {
      var _store = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var params, response;
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
                _context.next = 14;
                break;

              case 5:
                params = Object.assign({}, this.formulario);
                _context.next = 8;
                return this.create(params);

              case 8:
                response = _context.sent;
                this.cliente = response;
                this.invalid = false;
                this.success = true;
                this.$refs.formcliente.reset();
                this.$v.$reset();

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function store() {
        return _store.apply(this, arguments);
      }

      return store;
    }()
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/clientes/ClienteNuevo.vue?vue&type=template&id=994afe92&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/clientes/ClienteNuevo.vue?vue&type=template&id=994afe92& ***!
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
    "v-form",
    {
      ref: "formcliente",
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
                    md8: "",
                    xs12: ""
                  }
                },
                [
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-card-title",
                        { attrs: { "primary-title": "" } },
                        [
                          _c(
                            "v-layout",
                            { attrs: { row: "", wrap: "" } },
                            [
                              _c("v-flex", [
                                _c("h2", { staticClass: "display-3" }, [
                                  _vm._v("Registrar nuevo cliente")
                                ])
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-layout",
                            { attrs: { row: "", wrap: "" } },
                            [
                              _c(
                                "v-flex",
                                { attrs: { xs12: "" } },
                                [
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
                                        "\n                  Cliente " +
                                          _vm._s(_vm.cliente.nombre) +
                                          " " +
                                          _vm._s(_vm.cliente.apellido) +
                                          " registrado con éxito\n                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
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
                                        "\n                  Por favor corrija los errores para continuar\n                "
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("v-divider"),
                              _vm._v(" "),
                              _vm.success
                                ? _c(
                                    "v-flex",
                                    { attrs: { xs12: "" } },
                                    [
                                      _c("p", { staticClass: "mb-1 mt-3" }, [
                                        _c("small", [
                                          _vm._v(
                                            "Continúe con el proceso de registro"
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("nuevo-equipo-cliente", {
                                        attrs: {
                                          cliente: _vm.cliente.nombre,
                                          "id-cliente": _vm.cliente.id
                                        }
                                      })
                                    ],
                                    1
                                  )
                                : _vm._e()
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
                                          label: "Nombre",
                                          required: "",
                                          "error-messages": _vm.erroresNombre
                                        },
                                        on: {
                                          input: function($event) {
                                            return _vm.$v.formulario.nombre.$touch()
                                          },
                                          blur: function($event) {
                                            return _vm.$v.formulario.nombre.$touch()
                                          }
                                        },
                                        model: {
                                          value: _vm.formulario.nombre,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.formulario,
                                              "nombre",
                                              $$v
                                            )
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
                                    { attrs: { xs12: "" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Apellido",
                                          required: "",
                                          "error-messages": _vm.erroresApellido
                                        },
                                        on: {
                                          input: function($event) {
                                            return _vm.$v.formulario.apellido.$touch()
                                          },
                                          blur: function($event) {
                                            return _vm.$v.formulario.apellido.$touch()
                                          }
                                        },
                                        model: {
                                          value: _vm.formulario.apellido,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.formulario,
                                              "apellido",
                                              $$v
                                            )
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
                                    { attrs: { xs12: "" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Dirección",
                                          required: "",
                                          "error-messages": _vm.erroresDireccion
                                        },
                                        on: {
                                          input: function($event) {
                                            return _vm.$v.formulario.direccion.$touch()
                                          },
                                          blur: function($event) {
                                            return _vm.$v.formulario.direccion.$touch()
                                          }
                                        },
                                        model: {
                                          value: _vm.formulario.direccion,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.formulario,
                                              "direccion",
                                              $$v
                                            )
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
                                    { attrs: { xs12: "" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Teléfono",
                                          required: "",
                                          "error-messages": _vm.erroresTelefono
                                        },
                                        on: {
                                          input: function($event) {
                                            return _vm.$v.formulario.telefono.$touch()
                                          },
                                          blur: function($event) {
                                            return _vm.$v.formulario.telefono.$touch()
                                          }
                                        },
                                        model: {
                                          value: _vm.formulario.telefono,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.formulario,
                                              "telefono",
                                              $$v
                                            )
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
                                    { attrs: { xs12: "" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "E-mail",
                                          "error-messages": _vm.erroresEmail
                                        },
                                        on: {
                                          input: function($event) {
                                            return _vm.$v.formulario.email.$touch()
                                          },
                                          blur: function($event) {
                                            return _vm.$v.formulario.email.$touch()
                                          }
                                        },
                                        model: {
                                          value: _vm.formulario.email,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.formulario,
                                              "email",
                                              $$v
                                            )
                                          },
                                          expression: "formulario.email"
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
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            type: "submit",
                                            block: "",
                                            large: "",
                                            color: "success"
                                          }
                                        },
                                        [_vm._v("Registrar")]
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

/***/ "./resources/js/components/views/clientes/ClienteNuevo.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/views/clientes/ClienteNuevo.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ClienteNuevo_vue_vue_type_template_id_994afe92___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClienteNuevo.vue?vue&type=template&id=994afe92& */ "./resources/js/components/views/clientes/ClienteNuevo.vue?vue&type=template&id=994afe92&");
/* harmony import */ var _ClienteNuevo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClienteNuevo.vue?vue&type=script&lang=js& */ "./resources/js/components/views/clientes/ClienteNuevo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ClienteNuevo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ClienteNuevo_vue_vue_type_template_id_994afe92___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ClienteNuevo_vue_vue_type_template_id_994afe92___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/views/clientes/ClienteNuevo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/views/clientes/ClienteNuevo.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/views/clientes/ClienteNuevo.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClienteNuevo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ClienteNuevo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/clientes/ClienteNuevo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClienteNuevo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/views/clientes/ClienteNuevo.vue?vue&type=template&id=994afe92&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/views/clientes/ClienteNuevo.vue?vue&type=template&id=994afe92& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClienteNuevo_vue_vue_type_template_id_994afe92___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ClienteNuevo.vue?vue&type=template&id=994afe92& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/clientes/ClienteNuevo.vue?vue&type=template&id=994afe92&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClienteNuevo_vue_vue_type_template_id_994afe92___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClienteNuevo_vue_vue_type_template_id_994afe92___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);