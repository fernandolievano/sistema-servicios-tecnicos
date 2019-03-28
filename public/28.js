(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/equipos/EquipoRetirar.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/equipos/EquipoRetirar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);


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
      detail: {
        servicios: [],
        repuestos: []
      },
      serviciosRequeridos: [],
      repuestosUsados: [],
      repuestosUsadosCantidad: [],
      ticket: null
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])(['repuesto', 'servicio'])),
  mounted: function mounted() {
    this.fetchRepuestos();
    this.fetchServicios();
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])({
    fetchRepuestos: 'repuesto/fetchAll',
    fetchServicios: 'servicio/fetchAll',
    createFinal: 'ticket/createFinal',
    setDetails: 'ticket/sendDetails'
  }), {
    generarTicket: function () {
      var _generarTicket = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this = this;

        var self, pagoTotal, i, precio, cantidad, repuestoDetail, _i, servicioDetail, servicios, joinedServicios, repuestos, joinedRepuestos, message, formulario, request, url;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                self = this;
                pagoTotal = 0;
                _context.next = 4;
                return console.log(this.serviciosRequeridos);

              case 4:
                for (i = 0; i < this.repuestosUsados.length; i++) {
                  precio = this.repuestosUsados[i].precio_unitario_venta;
                  cantidad = this.repuestosUsadosCantidad[i];
                  pagoTotal += precio * cantidad; // para detalle en la factura

                  repuestoDetail = {
                    repuesto: this.repuestosUsados[i].repuesto,
                    cantidad: this.repuestosUsadosCantidad[i],
                    precio_unitario: this.repuestosUsados[i].precio_unitario_venta
                  };
                  this.detail.repuestos.push(repuestoDetail);
                }

                _context.next = 7;
                return console.log(this.serviciosRequeridos);

              case 7:
                // eslint-disable-next-line no-plusplus
                for (_i = 0; _i < this.serviciosRequeridos.length; _i++) {
                  pagoTotal += this.serviciosRequeridos[_i].valor;
                  servicioDetail = {
                    servicio: this.serviciosRequeridos[_i].titulo,
                    precio: this.serviciosRequeridos[_i].valor
                  };
                  this.detail.servicios.push(servicioDetail);
                }

                this.setDetails(this.detail);
                servicios = this.serviciosRequeridos;
                joinedServicios = servicios.map(function (serv) {
                  return serv.titulo;
                }).join(', ');
                repuestos = this.repuestosUsados;
                joinedRepuestos = repuestos.map(function (rep) {
                  return rep.repuesto;
                }).join(', ');
                message = '';

                if (servicios.length < 1) {
                  message = "Ingresos por la venta de los siguientes repuestos: ".concat(joinedRepuestos, ".");
                } else if (repuestos.length < 1) {
                  message = "Ingresos por servicios t\xE9cnicos: ".concat(joinedServicios, ".");
                } else {
                  message = "Ingresos por por la venta de los siguientes repuestos: ".concat(joinedRepuestos, " y por servicios t\xE9cnicos: ").concat(joinedServicios, ".");
                }

                formulario = {
                  cliente_id: self.clienteId,
                  equipo_id: self.equipoId,
                  total: pagoTotal,
                  mensaje: message
                };
                request = Object.assign({}, formulario);
                url = '/api/v1/tickets/store/final';
                axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(url, request).then(function (response) {
                  _this.success = true;
                  _this.ticket = response.data;
                });

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function generarTicket() {
        return _generarTicket.apply(this, arguments);
      }

      return generarTicket;
    }(),
    servicioInfo: function servicioInfo(titulo, valor) {
      return "".concat(titulo, " - ").concat(valor, " ARS");
    },
    repuestoInfo: function repuestoInfo(repuesto, precio) {
      return "".concat(repuesto, " - ").concat(precio, " ARS");
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
                        [_vm._v("Listo")]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm.success
                ? _c(
                    "div",
                    { staticClass: "text-xs-center" },
                    [
                      _c("h1", { staticClass: "success--text display-2" }, [
                        _vm._v("\n          Creado con éxito\n        ")
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            color: "primary",
                            block: "",
                            to: {
                              name: "factura",
                              params: { id: _vm.ticket.id }
                            }
                          }
                        },
                        [_vm._v("\n          Ver Ticket\n        ")]
                      )
                    ],
                    1
                  )
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
                                                            label: _vm.repuestoInfo(
                                                              repuesto.repuesto,
                                                              repuesto.precio_unitario_venta
                                                            ),
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
                                                    label: _vm.servicioInfo(
                                                      servicio.titulo,
                                                      servicio.valor
                                                    ),
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
                                            ),
                                            _vm._v(" "),
                                            _c("v-list-tile-content", [
                                              _c(
                                                "span",
                                                { staticClass: "caption" },
                                                [
                                                  _vm._v(
                                                    _vm._s(servicio.descripcion)
                                                  )
                                                ]
                                              )
                                            ])
                                          ],
                                          1
                                        )
                                      }),
                                      _vm._v(" "),
                                      _c("span", [
                                        _vm._v(_vm._s(_vm.serviciosRequeridos))
                                      ])
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