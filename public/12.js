(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/equipos/EquipoRetirar.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/equipos/EquipoRetirar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      autoUpdate: true,
      isUpdatingR: false,
      isUpdatingS: false,
      dialog: false,
      valid: false,
      success: false,
      serviciosRequeridos: [],
      repuestosUsados: [],
      detail: {
        servicios: [],
        repuestos: []
      },
      ticket: null
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(['repuesto', 'servicio'])),
  watch: {
    isUpdatingR: function isUpdatingR(val) {
      var _this = this;

      if (val) {
        // eslint-disable-next-line no-return-assign
        setTimeout(function () {
          return _this.isUpdatingR = false;
        }, 1500);
      }
    },
    isUpdatingS: function isUpdatingS(val) {
      var _this2 = this;

      if (val) {
        // eslint-disable-next-line no-return-assign
        setTimeout(function () {
          return _this2.isUpdatingS = false;
        }, 1500);
      }
    }
  },
  mounted: function mounted() {
    this.fetchRepuestos();
    this.fetchServicios();
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    fetchRepuestos: 'repuesto/fetchAll',
    fetchServicios: 'servicio/fetchAll',
    createFinal: 'ticket/createFinal',
    setDetails: 'ticket/sendDetails'
  }), {
    generarTicket: function generarTicket() {
      var self = this;
      var pagoTotal = 0; // eslint-disable-next-line no-plusplus

      for (var i = 0; i <= self.repuestosUsados.length; i++) {
        if (self.repuestosUsados !== null && self.repuestosUsados !== undefined) {
          var precio = self.repuestosUsados[i].precio_unitario_venta;
          var cantidad = self.self.repuestosUsados[i].cantidad_utilizada;
          pagoTotal += precio * cantidad; // para detalle en la factura

          var repuestoDetail = {
            repuesto: self.repuestosUsados[i].repuesto,
            cantidad: self.repuestosUsados[i].cantidad_utilizada,
            precio_unitario: self.repuestosUsados[i].precio_unitario_venta
          };
          self.detail.repuestos.push(repuestoDetail);
        }
      } // eslint-disable-next-line no-plusplus


      for (var _i = 0; _i <= self.serviciosRequeridos.length; _i++) {
        if (self.serviciosRequeridos[_i] !== null && self.serviciosRequeridos[_i] !== undefined) {
          var _precio = self.serviciosRequeridos[_i].valor;
          var _cantidad = self.serviciosRequeridos[_i].cantidad_requerida;
          pagoTotal += _precio * _cantidad;
          var servicioDetail = {
            servicio: self.serviciosRequeridos[_i].titulo,
            precio: self.serviciosRequeridos[_i].valor,
            cantidad: self.serviciosRequeridos[_i].cantidad_requerida
          };
          self.detail.servicios.push(servicioDetail);
        }
      }

      self.setDetails(self.detail);
      var servicios = self.serviciosRequeridos;
      var joinedServicios = servicios.map(function (serv) {
        return serv.titulo;
      }).join(', ');
      var repuestos = self.repuestosUsados;
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
        cliente_id: self.clienteId,
        equipo_id: self.equipoId,
        total: pagoTotal,
        mensaje: message
      };
      var request = Object.assign({}, formulario);
      var url = '/api/v1/tickets/store/final';
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(url, request).then(function (response) {
        self.success = true;
        self.ticket = response.data;
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
                                      _c("v-autocomplete", {
                                        attrs: {
                                          items: _vm.repuesto.repuestos,
                                          disabled: _vm.isUpdatingR,
                                          chips: "",
                                          color: "blue-grey lighten-2",
                                          label: "Repuestos utilizados",
                                          "item-text": "repuesto",
                                          "return-object": "",
                                          multiple: ""
                                        },
                                        scopedSlots: _vm._u([
                                          {
                                            key: "selection",
                                            fn: function(data) {
                                              return [
                                                _c(
                                                  "v-chip",
                                                  {
                                                    staticClass:
                                                      "chip--select-multi",
                                                    attrs: {
                                                      selected: data.selected,
                                                      close: ""
                                                    },
                                                    on: {
                                                      input: function($event) {
                                                        return data.parent.selectItem(
                                                          data.item
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                      " +
                                                        _vm._s(
                                                          data.item.repuesto
                                                        ) +
                                                        "\n                    "
                                                    )
                                                  ]
                                                )
                                              ]
                                            }
                                          },
                                          {
                                            key: "item",
                                            fn: function(data) {
                                              return [
                                                typeof data.item !== "object"
                                                  ? [
                                                      _c(
                                                        "v-list-tile-content",
                                                        {
                                                          domProps: {
                                                            textContent: _vm._s(
                                                              data.item
                                                            )
                                                          }
                                                        }
                                                      )
                                                    ]
                                                  : [
                                                      _c(
                                                        "v-list-tile-content",
                                                        [
                                                          _c(
                                                            "v-list-tile-title",
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  data.item
                                                                    .repuesto
                                                                )
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "v-list-tile-sub-title",
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  data.item
                                                                    .precio_unitario_venta
                                                                )
                                                              )
                                                            ]
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    ]
                                              ]
                                            }
                                          }
                                        ]),
                                        model: {
                                          value: _vm.repuestosUsados,
                                          callback: function($$v) {
                                            _vm.repuestosUsados = $$v
                                          },
                                          expression: "repuestosUsados"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _vm.repuestosUsados.length > 0
                                    ? _c(
                                        "v-flex",
                                        { attrs: { xs12: "" } },
                                        [
                                          _c("h4", [_vm._v("Repuestos")]),
                                          _vm._v(" "),
                                          _vm._l(_vm.repuestosUsados, function(
                                            repuesto
                                          ) {
                                            return _c(
                                              "v-layout",
                                              {
                                                key: repuesto.id,
                                                attrs: { row: "", wrap: "" }
                                              },
                                              [
                                                _c(
                                                  "v-flex",
                                                  { attrs: { xs12: "" } },
                                                  [
                                                    _c(
                                                      "h5",
                                                      {
                                                        staticClass:
                                                          "primary--text"
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            repuesto.repuesto
                                                          )
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-flex",
                                                  {
                                                    attrs: { xs12: "", md6: "" }
                                                  },
                                                  [
                                                    _c("v-text-field", {
                                                      attrs: {
                                                        label: "Precio",
                                                        required: ""
                                                      },
                                                      model: {
                                                        value:
                                                          repuesto.precio_unitario_venta,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            repuesto,
                                                            "precio_unitario_venta",
                                                            _vm._n($$v)
                                                          )
                                                        },
                                                        expression:
                                                          "repuesto.precio_unitario_venta"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-flex",
                                                  {
                                                    attrs: { xs12: "", md6: "" }
                                                  },
                                                  [
                                                    _c("v-text-field", {
                                                      attrs: {
                                                        label:
                                                          "Cantidad requerida",
                                                        required: ""
                                                      },
                                                      model: {
                                                        value:
                                                          repuesto.cantidad_utilizada,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            repuesto,
                                                            "cantidad_utilizada",
                                                            _vm._n($$v)
                                                          )
                                                        },
                                                        expression:
                                                          "repuesto.cantidad_utilizada"
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
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "v-flex",
                                    { attrs: { xs12: "" } },
                                    [
                                      _c("v-autocomplete", {
                                        attrs: {
                                          items: _vm.servicio.servicios,
                                          disabled: _vm.isUpdatingS,
                                          chips: "",
                                          color: "blue-grey lighten-2",
                                          label: "Servicios Requeridos",
                                          "item-text": "titulo",
                                          "return-object": "",
                                          multiple: ""
                                        },
                                        scopedSlots: _vm._u([
                                          {
                                            key: "selection",
                                            fn: function(data) {
                                              return [
                                                _c(
                                                  "v-chip",
                                                  {
                                                    staticClass:
                                                      "chip--select-multi",
                                                    attrs: {
                                                      selected: data.selected,
                                                      close: ""
                                                    },
                                                    on: {
                                                      input: function($event) {
                                                        return data.parent.selectItem(
                                                          data.item
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                      " +
                                                        _vm._s(
                                                          data.item.titulo
                                                        ) +
                                                        "\n                    "
                                                    )
                                                  ]
                                                )
                                              ]
                                            }
                                          },
                                          {
                                            key: "item",
                                            fn: function(data) {
                                              return [
                                                typeof data.item !== "object"
                                                  ? [
                                                      _c(
                                                        "v-list-tile-content",
                                                        {
                                                          domProps: {
                                                            textContent: _vm._s(
                                                              data.item
                                                            )
                                                          }
                                                        }
                                                      )
                                                    ]
                                                  : [
                                                      _c(
                                                        "v-list-tile-content",
                                                        [
                                                          _c(
                                                            "v-list-tile-title",
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  data.item
                                                                    .titulo
                                                                )
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "v-list-tile-sub-title",
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  data.item
                                                                    .valor
                                                                )
                                                              )
                                                            ]
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    ]
                                              ]
                                            }
                                          }
                                        ]),
                                        model: {
                                          value: _vm.serviciosRequeridos,
                                          callback: function($$v) {
                                            _vm.serviciosRequeridos = $$v
                                          },
                                          expression: "serviciosRequeridos"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _vm.serviciosRequeridos.length > 0
                                    ? _c(
                                        "v-flex",
                                        { attrs: { xs12: "" } },
                                        [
                                          _c("h4", [_vm._v("Servicios")]),
                                          _vm._v(" "),
                                          _vm._l(
                                            _vm.serviciosRequeridos,
                                            function(servicio) {
                                              return _c(
                                                "v-layout",
                                                {
                                                  key:
                                                    servicio.id +
                                                    servicio.titulo,
                                                  attrs: { row: "", wrap: "" }
                                                },
                                                [
                                                  _c(
                                                    "v-flex",
                                                    { attrs: { xs12: "" } },
                                                    [
                                                      _c(
                                                        "h5",
                                                        {
                                                          staticClass:
                                                            "primary--text"
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              servicio.titulo
                                                            )
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-flex",
                                                    {
                                                      attrs: {
                                                        xs12: "",
                                                        md6: ""
                                                      }
                                                    },
                                                    [
                                                      _c("v-text-field", {
                                                        attrs: {
                                                          label: "Costo",
                                                          required: ""
                                                        },
                                                        model: {
                                                          value: servicio.valor,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              servicio,
                                                              "valor",
                                                              _vm._n($$v)
                                                            )
                                                          },
                                                          expression:
                                                            "servicio.valor"
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-flex",
                                                    {
                                                      attrs: {
                                                        xs12: "",
                                                        md6: ""
                                                      }
                                                    },
                                                    [
                                                      _c("v-text-field", {
                                                        attrs: {
                                                          label:
                                                            "Cantidad requerida",
                                                          required: ""
                                                        },
                                                        model: {
                                                          value:
                                                            servicio.cantidad_requerida,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              servicio,
                                                              "cantidad_requerida",
                                                              _vm._n($$v)
                                                            )
                                                          },
                                                          expression:
                                                            "servicio.cantidad_requerida"
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              )
                                            }
                                          )
                                        ],
                                        2
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