(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/equipos/EquipoRetirar.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/equipos/EquipoRetirar.vue?vue&type=script&lang=js& ***!
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
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    clienteId: {
      type: Number,
      required: true,
      default: 0
    },
    equipoId: {
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
      detail: null,
      serviciosRequeridos: [],
      repuestosUsados: [],
      repuestosUsadosCantidad: []
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(['repuesto', 'servicio'])),
  mounted: function mounted() {
    this.fetchRepuestos();
    this.fetchServicios();
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    fetchRepuestos: 'repuesto/fetchAll',
    fetchServicios: 'servicio/fetchAll',
    createFinal: 'ticket/createFinal'
  }), {
    generarTicket: function generarTicket() {
      var _this = this;

      var pagoTotal = 0; // eslint-disable-next-line no-plusplus

      for (var i = 0; i < this.repuestosUsados.length; i++) {
        var precio = this.repuestosUsados[i].precio_unitario_venta;
        var cantidad = this.repuestosUsadosCantidad[i];
        pagoTotal += precio * cantidad;
      } // eslint-disable-next-line no-plusplus


      for (var _i = 0; _i < this.serviciosRequeridos.length; _i++) {
        pagoTotal += this.serviciosRequeridos[_i].valor;
      }

      var servicios = this.serviciosRequeridos;
      var joinedServicios = servicios.map(function (serv) {
        return serv.titulo;
      }).join(', ');
      var repuestos = this.repuestosUsados;
      var joinedRepuestos = repuestos.map(function (rep) {
        return rep.repuesto;
      }).join(', ');
      var message = '';

      if (servicios.length < 1) {
        message = "Ingresos por la venta de los siguientes repuestos: ".concat(joinedRepuestos, ".");
      } else if (repuestos.length < 1) {
        message = "Ingresos por servicios t\xE9cnicos: ".concat(joinedServicios, ".");
      } else {
        message = "Ingresos por por la venta de los siguientes repuestos: ".concat(joinedRepuestos, " y por servicios t\xE9cnicos: ").concat(joinedServicios, ".");
      }

      var formulario = {
        cliente_id: this.clienteId,
        equipo_id: this.equipoId,
        total: pagoTotal,
        mensaje: message
      };
      var params = Object.assign({}, formulario);
      this.createFinal(params).then(function () {
        _this.success = true;
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/equipos/EquipoRetirar.vue?vue&type=template&id=b0407976&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/equipos/EquipoRetirar.vue?vue&type=template&id=b0407976& ***!
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
    "div",
    [
      _c(
        "v-dialog",
        {
          attrs: {
            lazy: "",
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
              attrs: { slot: "activator", color: "primary", dark: "" },
              slot: "activator"
            },
            [_vm._v("Generar ticket de pago")]
          ),
          _vm._v(" "),
          _c(
            "v-card",
            [
              _c(
                "v-toolbar",
                { attrs: { dark: "", color: "brown darken-4" } },
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
                  _c("v-toolbar-title", [_vm._v("Retirar equipo")]),
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
                          on: { click: _vm.generarTicket }
                        },
                        [_vm._v("Save")]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm.success
                ? _c("div", { staticClass: "success--text" }, [
                    _vm._v("\n        Creado con éxito\n      ")
                  ])
                : _vm._e(),
              _vm._v(" "),
              !_vm.success
                ? _c(
                    "v-form",
                    {
                      ref: "retirarequipo",
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
                      _c("h1", { staticClass: "display-2" }, [
                        _vm._v("Generar ticket de pago")
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-list",
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
                                      _c("h3", [
                                        _vm._v("Repuestos utilizados")
                                      ]),
                                      _vm._v(" "),
                                      _vm._l(_vm.repuesto.repuestos, function(
                                        repuesto,
                                        index
                                      ) {
                                        return _c(
                                          "v-list-tile",
                                          { key: repuesto.repuesto },
                                          [
                                            _c(
                                              "v-layout",
                                              { attrs: { row: "", wrap: "" } },
                                              [
                                                _c(
                                                  "v-flex",
                                                  {
                                                    attrs: { xs12: "", sm6: "" }
                                                  },
                                                  [
                                                    _c(
                                                      "v-list-tile-content",
                                                      [
                                                        _c("v-checkbox", {
                                                          key:
                                                            repuesto.repuesto,
                                                          attrs: {
                                                            label:
                                                              repuesto.repuesto,
                                                            value: repuesto
                                                          },
                                                          model: {
                                                            value:
                                                              _vm
                                                                .repuestosUsados[
                                                                index
                                                              ],
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.repuestosUsados,
                                                                index,
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "repuestosUsados[index]"
                                                          }
                                                        })
                                                      ],
                                                      1
                                                    )
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-flex",
                                                  {
                                                    attrs: { xs12: "", sm6: "" }
                                                  },
                                                  [
                                                    _c(
                                                      "v-list-tile-content",
                                                      [
                                                        _c("v-text-field", {
                                                          key:
                                                            repuesto.precio_unitario_venta,
                                                          attrs: {
                                                            placeholder:
                                                              "Cantidad"
                                                          },
                                                          model: {
                                                            value:
                                                              _vm
                                                                .repuestosUsadosCantidad[
                                                                index
                                                              ],
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.repuestosUsadosCantidad,
                                                                index,
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "repuestosUsadosCantidad[index]"
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
                                      })
                                    ],
                                    2
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-flex",
                                    { attrs: { xs12: "" } },
                                    [
                                      _c("h3", [
                                        _vm._v("Servicios requeridos")
                                      ]),
                                      _vm._v(" "),
                                      _vm._l(_vm.servicio.servicios, function(
                                        servicio,
                                        index
                                      ) {
                                        return _c(
                                          "v-list-tile",
                                          { key: servicio.servicio },
                                          [
                                            _c(
                                              "v-list-tile-content",
                                              [
                                                _c("v-checkbox", {
                                                  key: servicio.titulo,
                                                  attrs: {
                                                    label: servicio.titulo,
                                                    value: servicio
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.serviciosRequeridos[
                                                        index
                                                      ],
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.serviciosRequeridos,
                                                        index,
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "serviciosRequeridos[index]"
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        )
                                      })
                                    ],
                                    2
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/views/equipos/EquipoRetirar.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/views/equipos/EquipoRetirar.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EquipoRetirar_vue_vue_type_template_id_b0407976___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EquipoRetirar.vue?vue&type=template&id=b0407976& */ "./resources/js/components/views/equipos/EquipoRetirar.vue?vue&type=template&id=b0407976&");
/* harmony import */ var _EquipoRetirar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EquipoRetirar.vue?vue&type=script&lang=js& */ "./resources/js/components/views/equipos/EquipoRetirar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EquipoRetirar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EquipoRetirar_vue_vue_type_template_id_b0407976___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EquipoRetirar_vue_vue_type_template_id_b0407976___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/views/equipos/EquipoRetirar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/views/equipos/EquipoRetirar.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/views/equipos/EquipoRetirar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EquipoRetirar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EquipoRetirar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/equipos/EquipoRetirar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EquipoRetirar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/views/equipos/EquipoRetirar.vue?vue&type=template&id=b0407976&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/views/equipos/EquipoRetirar.vue?vue&type=template&id=b0407976& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EquipoRetirar_vue_vue_type_template_id_b0407976___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EquipoRetirar.vue?vue&type=template&id=b0407976& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/equipos/EquipoRetirar.vue?vue&type=template&id=b0407976&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EquipoRetirar_vue_vue_type_template_id_b0407976___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EquipoRetirar_vue_vue_type_template_id_b0407976___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);