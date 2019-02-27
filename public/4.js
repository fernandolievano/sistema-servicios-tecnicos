(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/clientes/ClienteNuevo.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/clientes/ClienteNuevo.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    NuevoEquipoCliente: function NuevoEquipoCliente() {
      return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ./ClienteEquipoNuevo.vue */ "./resources/js/components/views/clientes/ClienteEquipoNuevo.vue"));
    }
  },
  data: function data() {
    return {
      valid: false,
      success: false,
      formulario: {
        nombre: '',
        apellido: '',
        direccion: '',
        telefono: '',
        email: ''
      },
      cliente: {},
      generales: [function (v) {
        return !!v || 'Este campo es requerido';
      }]
    };
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    create: 'cliente/createCliente'
  }), {
    store: function store() {
      var _this = this;

      var params = Object.assign({}, this.formulario);
      this.create(params).then(function (response) {
        _this.success = true;

        _this.$refs.formcliente.reset();

        _this.cliente = response;
      });
    }
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
                          _vm.success
                            ? _c(
                                "v-layout",
                                { attrs: { row: "", wrap: "" } },
                                [
                                  _c("v-divider"),
                                  _vm._v(" "),
                                  _c("v-flex", { attrs: { xs12: "" } }, [
                                    _c(
                                      "h3",
                                      {
                                        staticClass: "success--text display-5"
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
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "v-flex",
                                    { attrs: { xs12: "" } },
                                    [
                                      _c("nuevo-equipo-cliente", {
                                        attrs: {
                                          cliente: _vm.cliente,
                                          nuevo: true
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            : _vm._e()
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
                                          rules: _vm.generales
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
                                          rules: _vm.generales
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
                                          rules: _vm.generales
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
                                          rules: _vm.generales
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
                                        attrs: { label: "E-mail" },
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
                                        [_vm._v("Registar")]
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