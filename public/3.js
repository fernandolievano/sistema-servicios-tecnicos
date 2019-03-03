(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/clientes/TicketInicial.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/clientes/TicketInicial.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/npm/index.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_2__);
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



/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    ticketId: {
      type: Number,
      required: true,
      default: 0
    }
  },
  data: function data() {
    return {
      show: false
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(['ticket']), {
    ticketInicial: function ticketInicial() {
      return this.ticket.ticketInicial;
    },
    cliente: function cliente() {
      return this.ticketInicial.cliente;
    },
    equipo: function equipo() {
      return this.ticketInicial.equipo;
    }
  }),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    fetch: 'ticket/fetchInicial'
  }), {
    imprimir: function imprimir() {
      this.fetch(this.ticketId);
      var filename = "ticket_inicial".concat(this.ticketId);
      html2canvas__WEBPACK_IMPORTED_MODULE_2___default()(document.querySelector("#ticketInicial".concat(this.ticketId))).then(function (canvas) {
        // eslint-disable-next-line new-cap
        var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_1___default.a('p', 'mm', 'a4');
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 3, 5, 100, 150);
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 107, 5, 100, 150);
        pdf.save(filename);
      });
    },
    mostrarTicket: function mostrarTicket() {
      var _this = this;

      this.fetch(this.ticketId).then(function () {
        _this.show = true;
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/clientes/TicketInicial.vue?vue&type=style&index=0&id=163c3242&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/clientes/TicketInicial.vue?vue&type=style&index=0&id=163c3242&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.icon-ticket[data-v-163c3242] {\n  width: 10%;\n}\n.ticket[data-v-163c3242] {\n  border: 1px solid black;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/clientes/TicketInicial.vue?vue&type=style&index=0&id=163c3242&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/clientes/TicketInicial.vue?vue&type=style&index=0&id=163c3242&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TicketInicial.vue?vue&type=style&index=0&id=163c3242&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/clientes/TicketInicial.vue?vue&type=style&index=0&id=163c3242&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/clientes/TicketInicial.vue?vue&type=template&id=163c3242&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/clientes/TicketInicial.vue?vue&type=template&id=163c3242&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
    "v-container",
    [
      _c(
        "v-layout",
        {
          attrs: { row: "", wrap: "", "align-center": "", "justify-center": "" }
        },
        [
          _c(
            "v-flex",
            { attrs: { xs6: "" } },
            [
              _c(
                "v-btn",
                {
                  attrs: { disabled: !_vm.show, color: "primary", block: "" },
                  on: { click: _vm.imprimir }
                },
                [_vm._v("\n        Imprimir ticket\n      ")]
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
                  attrs: { disabled: _vm.show, block: "", flat: "" },
                  on: { click: _vm.mostrarTicket }
                },
                [_vm._v("\n        Ver ticket\n      ")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.show
        ? _c(
            "v-layout",
            {
              attrs: {
                row: "",
                wrap: "",
                "align-center": "",
                "justify-center": ""
              }
            },
            [
              _c(
                "v-flex",
                {
                  staticClass: "ticket",
                  attrs: { id: "ticketInicial" + _vm.ticketId, xs6: "" }
                },
                [
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-toolbar",
                        { attrs: { flat: "", dense: "" } },
                        [
                          _c("v-toolbar-title", [
                            _c("img", {
                              staticClass: "icon-ticket",
                              attrs: { src: "/images/xg-icon.png", alt: "icon" }
                            })
                          ]),
                          _vm._v(" "),
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-toolbar-items",
                            [
                              _c("v-btn", { attrs: { flat: "" } }, [
                                _vm._v(
                                  " N° " + _vm._s(_vm.ticketInicial.id) + " "
                                )
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-divider"),
                      _vm._v(" "),
                      _c(
                        "v-card-title",
                        { attrs: { "primary-title": "" } },
                        [
                          _c(
                            "v-container",
                            [
                              _c(
                                "v-layout",
                                { attrs: { row: "", wrap: "" } },
                                [
                                  _c("v-flex", { attrs: { xs4: "" } }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "display-1 grey--text text--darken--2"
                                      },
                                      [_vm._v("Cliente")]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "v-flex",
                                    { attrs: { xs8: "" } },
                                    [
                                      _c("v-card-text", [
                                        _c("h1", { staticClass: "title" }, [
                                          _vm._v(
                                            "\n                    " +
                                              _vm._s(
                                                _vm.ticketInicial.cliente.nombre
                                              ) +
                                              " " +
                                              _vm._s(
                                                _vm.ticketInicial.cliente
                                                  .apellido
                                              ) +
                                              "\n                  "
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("v-card-text", [
                                        _c("h4", [_vm._v("Dirección")]),
                                        _vm._v(" "),
                                        _c("p", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.ticketInicial.cliente
                                                .direccion
                                            )
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("v-card-text", [
                                        _c("h4", [_vm._v("Teléfono")]),
                                        _vm._v(" "),
                                        _c("p", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.ticketInicial.cliente.telefono
                                            )
                                          )
                                        ])
                                      ])
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-layout",
                                { attrs: { row: "", wrap: "" } },
                                [
                                  _c("v-flex", { attrs: { xs4: "" } }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "display-1 grey--text text--darken--2"
                                      },
                                      [
                                        _vm._v(
                                          "\n                  Equipo\n                "
                                        )
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "v-flex",
                                    { attrs: { xs8: "" } },
                                    [
                                      _c("v-card-text", [
                                        _c("h1", { staticClass: "title" }, [
                                          _vm._v(
                                            _vm._s(
                                              _vm.ticketInicial.equipo.equipo
                                            )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("p", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.ticketInicial.equipo.modelo
                                            )
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("v-card-text", [
                                        _c("h4", [
                                          _vm._v(
                                            "Descripción del equipo al ser entregado"
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("p", [
                                          _vm._v(
                                            "\n                    " +
                                              _vm._s(
                                                _vm.ticketInicial.equipo
                                                  .descripcion
                                              ) +
                                              "\n                  "
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("v-card-text", [
                                        _c("h4", [_vm._v("Diagnóstico")]),
                                        _vm._v(" "),
                                        _c("p", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.ticketInicial.equipo
                                                .diagnostico
                                            )
                                          )
                                        ])
                                      ])
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
                      _c("v-divider"),
                      _vm._v(" "),
                      _c("v-card-actions", { staticClass: "pa-3" }, [
                        _c("b", [
                          _vm._v(
                            "Equipo recibido el " +
                              _vm._s(_vm.ticket.ticketInicial.created_at)
                          )
                        ])
                      ])
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/views/clientes/TicketInicial.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/views/clientes/TicketInicial.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TicketInicial_vue_vue_type_template_id_163c3242_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TicketInicial.vue?vue&type=template&id=163c3242&scoped=true& */ "./resources/js/components/views/clientes/TicketInicial.vue?vue&type=template&id=163c3242&scoped=true&");
/* harmony import */ var _TicketInicial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TicketInicial.vue?vue&type=script&lang=js& */ "./resources/js/components/views/clientes/TicketInicial.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TicketInicial_vue_vue_type_style_index_0_id_163c3242_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TicketInicial.vue?vue&type=style&index=0&id=163c3242&scoped=true&lang=css& */ "./resources/js/components/views/clientes/TicketInicial.vue?vue&type=style&index=0&id=163c3242&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TicketInicial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TicketInicial_vue_vue_type_template_id_163c3242_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TicketInicial_vue_vue_type_template_id_163c3242_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "163c3242",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/views/clientes/TicketInicial.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/views/clientes/TicketInicial.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/views/clientes/TicketInicial.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketInicial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TicketInicial.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/clientes/TicketInicial.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketInicial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/views/clientes/TicketInicial.vue?vue&type=style&index=0&id=163c3242&scoped=true&lang=css&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/views/clientes/TicketInicial.vue?vue&type=style&index=0&id=163c3242&scoped=true&lang=css& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketInicial_vue_vue_type_style_index_0_id_163c3242_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TicketInicial.vue?vue&type=style&index=0&id=163c3242&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/clientes/TicketInicial.vue?vue&type=style&index=0&id=163c3242&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketInicial_vue_vue_type_style_index_0_id_163c3242_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketInicial_vue_vue_type_style_index_0_id_163c3242_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketInicial_vue_vue_type_style_index_0_id_163c3242_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketInicial_vue_vue_type_style_index_0_id_163c3242_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketInicial_vue_vue_type_style_index_0_id_163c3242_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/views/clientes/TicketInicial.vue?vue&type=template&id=163c3242&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/views/clientes/TicketInicial.vue?vue&type=template&id=163c3242&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketInicial_vue_vue_type_template_id_163c3242_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TicketInicial.vue?vue&type=template&id=163c3242&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/clientes/TicketInicial.vue?vue&type=template&id=163c3242&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketInicial_vue_vue_type_template_id_163c3242_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketInicial_vue_vue_type_template_id_163c3242_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);