(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      otros: [],
      nuevoItem: {
        detalle: '',
        cantidad: 1,
        costo: 0
      },
      detail: {
        servicios: [],
        repuestos: [],
        otros: []
      },
      ticket: null
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])(['repuesto', 'servicio'])),
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
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])({
    fetchRepuestos: 'repuesto/fetchAll',
    fetchServicios: 'servicio/fetchAll',
    createFinal: 'ticket/createFinal',
    setDetails: 'ticket/sendDetails'
  }), {
    añadirItem: function () {
      var _aAdirItem = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var nuevo;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                nuevo = Object.assign({}, this.nuevoItem);
                _context.next = 3;
                return this.otros.push(nuevo);

              case 3:
                this.nuevoItem.descripcion = '';
                this.nuevoItem.cantidad = 1;
                this.nuevoItem.costo = 0;

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function aAdirItem() {
        return _aAdirItem.apply(this, arguments);
      }

      return aAdirItem;
    }(),
    quitarItem: function quitarItem(index) {
      this.otros.splice(index, 1);
    },
    generarTicket: function generarTicket() {
      var self = this;
      var pagoTotal = 0;
      self.repuestosUsados.forEach(function (repuesto) {
        pagoTotal += repuesto.precio_unitario_venta * repuesto.cantidad_utilizada; // detalle ticket

        var repuestoDetail = {
          repuesto: repuesto.repuesto,
          cantidad: repuesto.cantidad_utilizada,
          precio_unitario: repuesto.precio_unitario_venta
        };
        self.detail.repuestos.push(repuestoDetail);
      });
      self.serviciosRequeridos.forEach(function (servicio) {
        pagoTotal += servicio.valor * servicio.cantidad_requerida; // detalle ticket

        var servicioDetail = {
          servicio: servicio.titulo,
          precio: servicio.valor,
          cantidad: servicio.cantidad_requerida
        };
        self.detail.servicios.push(servicioDetail);
      });
      self.otros.forEach(function (item) {
        pagoTotal += item.costo * item.cantidad; //  detalle ticket

        var otroDetail = {
          descripcion: item.descripcion,
          costo: item.costo,
          cantidad: item.cantidad
        };
        self.detail.otros.push(otroDetail);
      });
      self.setDetails(self.detail);
      var servicios = self.serviciosRequeridos;
      var joinedServicios = servicios.map(function (serv) {
        return serv.titulo;
      }).join(', ');
      var repuestos = self.repuestosUsados;
      var joinedRepuestos = repuestos.map(function (rep) {
        return rep.repuesto;
      }).join(', ');
      var otrosR = self.otros;
      var joinedOtros = otrosR.map(function (item) {
        return item.descripcion;
      }).join(', ');
      var message = '';

      if (servicios.length < 1 && otrosR.length < 1) {
        message = "Ingresos por la venta de los siguientes repuestos: ".concat(joinedRepuestos, ".");
      } else if (repuestos.length < 1 && otrosR.length < 1) {
        message = "Ingresos por servicios t\xE9cnicos: ".concat(joinedServicios, ".");
      } else if (servicios.length < 1 && repuestos.length < 1) {
        message = "Ingresos por: ".concat(joinedOtros, ".");
      } else {
        message = "Ingresos por por la venta de los siguientes repuestos: ".concat(joinedRepuestos, ", por servicios t\xE9cnicos: ").concat(joinedServicios, " y otros: ").concat(joinedOtros, ".");
      }

      var formulario = {
        cliente_id: self.clienteId,
        equipo_id: self.equipoId,
        total: pagoTotal,
        mensaje: message
      };
      var request = Object.assign({}, formulario);
      var url = '/api/v1/tickets/store/final';
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(url, request).then(function (response) {
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
                      _c("v-alert", { attrs: { type: "success" } }, [
                        _vm._v(
                          "\n          Ticket generado con éxito\n        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-divider"),
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
                                                key:
                                                  repuesto.id +
                                                  repuesto.repuesto,
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
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "v-flex",
                                    { attrs: { xs12: "" } },
                                    [
                                      _c("v-sheet", [
                                        _c("h4", [_vm._v("Otros")])
                                      ])
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-flex",
                                    { attrs: { xs12: "" } },
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
                                                  attrs: { md4: "", xs12: "" }
                                                },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      label: "Descripción",
                                                      required: ""
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.nuevoItem
                                                          .descripcion,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.nuevoItem,
                                                          "descripcion",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "nuevoItem.descripcion"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-flex",
                                                {
                                                  attrs: { md4: "", xs12: "" }
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
                                                        _vm.nuevoItem.cantidad,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.nuevoItem,
                                                          "cantidad",
                                                          _vm._n($$v)
                                                        )
                                                      },
                                                      expression:
                                                        "nuevoItem.cantidad"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-flex",
                                                {
                                                  attrs: { md4: "", xs12: "" }
                                                },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      label: "Costo",
                                                      required: ""
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.nuevoItem.costo,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.nuevoItem,
                                                          "costo",
                                                          _vm._n($$v)
                                                        )
                                                      },
                                                      expression:
                                                        "nuevoItem.costo"
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
                                                        color: "primary",
                                                        small: ""
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          _vm.añadirItem()
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                        Añadir\n                        "
                                                      ),
                                                      _c("v-icon", [
                                                        _vm._v(
                                                          "\n                          add\n                        "
                                                        )
                                                      ])
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
                                          _vm.otros.length > 0
                                            ? _c(
                                                "v-layout",
                                                {
                                                  staticClass: "mt-3",
                                                  attrs: { row: "", wrap: "" }
                                                },
                                                [
                                                  _c(
                                                    "v-flex",
                                                    { attrs: { xs12: "" } },
                                                    [
                                                      _c("h4", [
                                                        _vm._v("Extras")
                                                      ]),
                                                      _vm._v(" "),
                                                      _vm._l(
                                                        _vm.otros,
                                                        function(item, index) {
                                                          return _c(
                                                            "v-sheet",
                                                            {
                                                              key:
                                                                item.descripcion,
                                                              attrs: {
                                                                color: "pa-2"
                                                              }
                                                            },
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
                                                                      item.descripcion
                                                                    )
                                                                  )
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "v-layout",
                                                                {
                                                                  attrs: {
                                                                    row: "",
                                                                    wrap: ""
                                                                  }
                                                                },
                                                                [
                                                                  _c(
                                                                    "v-flex",
                                                                    {
                                                                      attrs: {
                                                                        md4: "",
                                                                        xs12: ""
                                                                      }
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "v-text-field",
                                                                        {
                                                                          attrs: {
                                                                            label:
                                                                              "Descripción",
                                                                            required:
                                                                              ""
                                                                          },
                                                                          model: {
                                                                            value:
                                                                              item.descripcion,
                                                                            callback: function(
                                                                              $$v
                                                                            ) {
                                                                              _vm.$set(
                                                                                item,
                                                                                "descripcion",
                                                                                $$v
                                                                              )
                                                                            },
                                                                            expression:
                                                                              "item.descripcion"
                                                                          }
                                                                        }
                                                                      )
                                                                    ],
                                                                    1
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "v-flex",
                                                                    {
                                                                      attrs: {
                                                                        md4: "",
                                                                        xs12: ""
                                                                      }
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "v-text-field",
                                                                        {
                                                                          attrs: {
                                                                            label:
                                                                              "Cantidad requerida",
                                                                            required:
                                                                              ""
                                                                          },
                                                                          model: {
                                                                            value:
                                                                              item.cantidad,
                                                                            callback: function(
                                                                              $$v
                                                                            ) {
                                                                              _vm.$set(
                                                                                item,
                                                                                "cantidad",
                                                                                _vm._n(
                                                                                  $$v
                                                                                )
                                                                              )
                                                                            },
                                                                            expression:
                                                                              "item.cantidad"
                                                                          }
                                                                        }
                                                                      )
                                                                    ],
                                                                    1
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "v-flex",
                                                                    {
                                                                      attrs: {
                                                                        md4: "",
                                                                        xs12: ""
                                                                      }
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "v-text-field",
                                                                        {
                                                                          attrs: {
                                                                            label:
                                                                              "Costo por unidad/servicio",
                                                                            required:
                                                                              ""
                                                                          },
                                                                          model: {
                                                                            value:
                                                                              item.costo,
                                                                            callback: function(
                                                                              $$v
                                                                            ) {
                                                                              _vm.$set(
                                                                                item,
                                                                                "costo",
                                                                                _vm._n(
                                                                                  $$v
                                                                                )
                                                                              )
                                                                            },
                                                                            expression:
                                                                              "item.costo"
                                                                          }
                                                                        }
                                                                      )
                                                                    ],
                                                                    1
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "v-flex",
                                                                    {
                                                                      attrs: {
                                                                        xs12: ""
                                                                      }
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "footer",
                                                                        {
                                                                          staticClass:
                                                                            "text-xs-right"
                                                                        },
                                                                        [
                                                                          _c(
                                                                            "v-btn",
                                                                            {
                                                                              attrs: {
                                                                                flat:
                                                                                  "",
                                                                                small:
                                                                                  ""
                                                                              },
                                                                              on: {
                                                                                click: function(
                                                                                  $event
                                                                                ) {
                                                                                  return _vm.quitarItem(
                                                                                    index
                                                                                  )
                                                                                }
                                                                              }
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                "Eliminar"
                                                                              )
                                                                            ]
                                                                          )
                                                                        ],
                                                                        1
                                                                      )
                                                                    ]
                                                                  )
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