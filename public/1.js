(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/clientes/ClienteEquipoNuevo.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/clientes/ClienteEquipoNuevo.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'NuevoEquipoCliente',
  components: {
    TicketInicial: function TicketInicial() {
      return Promise.all(/*! import() */[__webpack_require__.e(26), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, /*! ./TicketInicial.vue */ "./resources/js/components/views/clientes/TicketInicial.vue"));
    }
  },
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
      success: false,
      valid: false,
      formulario: {
        equipo: '',
        modelo: '',
        descripcion: '',
        diagnostico: '',
        estado: 'En Reparación',
        cliente_id: ''
      },
      generales: [function (v) {
        return !!v || 'Este campo es requerido';
      }],
      ticketId: null
    };
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])({
    clear: 'ticket/clearInicial'
  }), {
    closeThis: function closeThis() {
      this.dialog = false;
      this.$refs.nuevoequipo.reset();
      this.success = false;
      this.clear();
    },
    store: function store() {
      var _this = this;

      var url = '/api/v1/equipos/store';
      this.formulario.cliente_id = this.idCliente;
      var params = Object.assign({}, this.formulario);
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(url, params).then(function (response) {
        _this.success = true;

        _this.$refs.nuevoequipo.reset();

        _this.ticketId = response.data;
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
          _vm._v("\n    Añadir nuevo equipo\n    "),
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
                      attrs: { dark: "", flat: "", disabled: _vm.success },
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
                                      attrs: { type: "success" },
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
                                        "\n                  Equipo registrado con éxito\n                "
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _vm.success
                                ? _c(
                                    "v-flex",
                                    { attrs: { xs12: "" } },
                                    [
                                      _c("TicketInicial", {
                                        attrs: { "ticket-id": _vm.ticketId }
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
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.success === false
                    ? _c(
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
                                      rules: _vm.generales
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
                                      rules: _vm.generales
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
                                  _c("v-text-field", {
                                    attrs: {
                                      name: "descripcion",
                                      label: "Breve descripción del equipo",
                                      required: "",
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
                                  _c("v-textarea", {
                                    attrs: {
                                      name: "diagnostico",
                                      label: "Diagnóstico del equipo",
                                      required: "",
                                      rules: _vm.generales
                                    },
                                    model: {
                                      value: _vm.formulario.diagnostico,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.formulario,
                                          "diagnostico",
                                          $$v
                                        )
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
                    : _vm._e()
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