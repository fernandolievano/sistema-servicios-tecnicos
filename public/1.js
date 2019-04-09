(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/clientes/ClienteEquipoNuevo.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/clientes/ClienteEquipoNuevo.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuelidate */ "./node_modules/vuelidate/lib/index.js");
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vuelidate__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__);


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

/* eslint-disable no-unused-expressions */




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'NuevoEquipoCliente',
  mixins: [vuelidate__WEBPACK_IMPORTED_MODULE_3__["validationMixin"]],
  props: {
    cliente: {
      type: String,
      default: 'Cliente'
    },
    idCliente: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    return {
      dialog: false,
      valid: false,
      invalid: false,
      formulario: {
        equipo: '',
        modelo: '',
        descripcion: '',
        diagnostico: '',
        estado: 'En Reparación',
        cliente_id: ''
      },
      ticketId: null
    };
  },
  computed: {
    erroresEquipo: function erroresEquipo() {
      var errors = [];
      if (!this.$v.formulario.equipo.$dirty) return errors;
      !this.$v.formulario.equipo.required && errors.push('Este campo es requerido para continuar con el registro');
      !this.$v.formulario.equipo.minLength && errors.push('Este campo debe contener más de 5 caracteres');
      return errors;
    },
    erroresModelo: function erroresModelo() {
      var errors = [];
      if (!this.$v.formulario.modelo.$dirty) return errors;
      !this.$v.formulario.modelo.required && errors.push('Este campo es requerido para continuar con el registro');
      !this.$v.formulario.modelo.minLength && errors.push('Este campo debe contener más de 2 caracteres');
      return errors;
    },
    erroresDescripcion: function erroresDescripcion() {
      var errors = [];
      if (!this.$v.formulario.descripcion.$dirty) return errors;
      !this.$v.formulario.descripcion.required && errors.push('Este campo es requerido para continuar con el registro');
      !this.$v.formulario.descripcion.minLength && errors.push('Este campo debe contener más de 5 caracteres');
      return errors;
    },
    erroresDiagnostico: function erroresDiagnostico() {
      var errors = [];
      if (!this.$v.formulario.diagnostico.$dirty) return errors;
      !this.$v.formulario.diagnostico.required && errors.push('Este campo es requerido para continuar con el registro');
      !this.$v.formulario.diagnostico.minLength && errors.push('Este campo debe contener más de 10 caracteres');
      return errors;
    }
  },
  validations: {
    formulario: {
      equipo: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"],
        minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["minLength"])(5)
      },
      modelo: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"],
        minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["minLength"])(2)
      },
      descripcion: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"],
        minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["minLength"])(5)
      },
      diagnostico: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"],
        minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["minLength"])(10)
      }
    }
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])({
    clear: 'ticket/clearInicial'
  }), {
    closeThis: function closeThis() {
      this.dialog = false;
      this.$refs.nuevoequipo.reset();
      this.$v.$reset();
      this.success = false;
      this.clear();
    },
    store: function () {
      var _store = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var url, params, response;
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
                _context.next = 17;
                break;

              case 5:
                url = '/api/v1/equipos/store';
                this.formulario.cliente_id = this.idCliente;
                params = Object.assign({}, this.formulario);
                _context.next = 10;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(url, params);

              case 10:
                response = _context.sent;
                this.ticketId = response.data;
                this.$refs.nuevoequipo.reset();
                this.$v.$reset();
                _context.next = 16;
                return this.successMessage();

              case 16:
                this.$router.push({
                  name: 'ticket_inicial',
                  params: {
                    id: this.ticketId
                  }
                });

              case 17:
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
    }(),
    successMessage: function successMessage() {
      this.$swal.fire({
        title: 'Equipo registrado con éxito',
        text: 'Ahora continúe con el registro del equipo',
        type: 'success'
      });
    }
  })
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
        lazy: "",
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
          attrs: { slot: "activator", block: "", small: "", color: "success" },
          slot: "activator"
        },
        [
          _vm._v("Añadir nuevo equipo\n    "),
          _c("v-icon", { attrs: { right: "" } }, [_vm._v("add")])
        ],
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
              _c("v-toolbar-title", [_vm._v("Nuevo equipo")]),
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
                          return _vm.store($event)
                        }
                      }
                    },
                    [_vm._v("Registrar")]
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
              ref: "nuevoequipo",
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
                                    "Nuevo equipo de " + _vm._s(_vm.cliente)
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
                                        "\n                  Por favor corrija los errores para continuar\n                "
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
                                  name: "equipo",
                                  label: "Equipo",
                                  required: "",
                                  "error-messages": _vm.erroresEquipo
                                },
                                on: {
                                  input: function($event) {
                                    return _vm.$v.formulario.equipo.$touch()
                                  },
                                  blur: function($event) {
                                    return _vm.$v.formulario.equipo.$touch()
                                  }
                                },
                                model: {
                                  value: _vm.formulario.equipo,
                                  callback: function($$v) {
                                    _vm.$set(_vm.formulario, "equipo", $$v)
                                  },
                                  expression: "formulario.equipo"
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
                                  name: "modelo",
                                  label: "Modelo del equipo",
                                  required: "",
                                  "error-messages": _vm.erroresModelo
                                },
                                on: {
                                  input: function($event) {
                                    return _vm.$v.formulario.modelo.$touch()
                                  },
                                  blur: function($event) {
                                    return _vm.$v.formulario.modelo.$touch()
                                  }
                                },
                                model: {
                                  value: _vm.formulario.modelo,
                                  callback: function($$v) {
                                    _vm.$set(_vm.formulario, "modelo", $$v)
                                  },
                                  expression: "formulario.modelo"
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
                              _c("v-textarea", {
                                attrs: {
                                  name: "descripcion",
                                  label: "Breve descripción del equipo",
                                  required: "",
                                  "error-messages": _vm.erroresDescripcion
                                },
                                on: {
                                  input: function($event) {
                                    return _vm.$v.formulario.descripcion.$touch()
                                  },
                                  blur: function($event) {
                                    return _vm.$v.formulario.descripcion.$touch()
                                  }
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
                              _c("v-textarea", {
                                attrs: {
                                  name: "diagnostico",
                                  label: "Diagnóstico del equipo",
                                  required: "",
                                  "error-messages": _vm.erroresDiagnostico
                                },
                                on: {
                                  input: function($event) {
                                    return _vm.$v.formulario.diagnostico.$touch()
                                  },
                                  blur: function($event) {
                                    return _vm.$v.formulario.diagnostico.$touch()
                                  }
                                },
                                model: {
                                  value: _vm.formulario.diagnostico,
                                  callback: function($$v) {
                                    _vm.$set(_vm.formulario, "diagnostico", $$v)
                                  },
                                  expression: "formulario.diagnostico"
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