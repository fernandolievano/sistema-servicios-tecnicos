(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/equipos/TicketFinal.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/equipos/TicketFinal.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/npm/index.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'TicketFinal',
  props: {
    ticket: {
      type: Object,
      required: true
    }
  },
  computed: {
    details: function details() {
      return this.$store.state.ticket.details;
    }
  },
  methods: {
    imprimir: function imprimir(id) {
      var filename = "ticket_final".concat(this.ticket.id);
      html2canvas__WEBPACK_IMPORTED_MODULE_1___default()(document.getElementById(id)).then(function (canvas) {
        // eslint-disable-next-line new-cap
        var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_0___default.a('p', 'mm', 'a4');
        pdf.addImage(canvas.toDataURL('image/png', 1.0), 'PNG', 5, 5);
        pdf.addImage(canvas.toDataURL('image/png', 1.0), 'PNG', 5, 148);
        pdf.save(filename);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/equipos/TicketFinal.vue?vue&type=style&index=0&id=79cc5a53&lang=css&media=print&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/equipos/TicketFinal.vue?vue&type=style&index=0&id=79cc5a53&lang=css&media=print&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css);", ""]);

// module
exports.push([module.i, "\n.table th[data-v-79cc5a53] {\n  text-align: center\n}\n.table td[data-v-79cc5a53] {\n  text-align: center\n}\n.icon-ticket[data-v-79cc5a53] {\n  width: 10%;\n  top:0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/equipos/TicketFinal.vue?vue&type=style&index=0&id=79cc5a53&lang=css&media=print&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/equipos/TicketFinal.vue?vue&type=style&index=0&id=79cc5a53&lang=css&media=print&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TicketFinal.vue?vue&type=style&index=0&id=79cc5a53&lang=css&media=print&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/equipos/TicketFinal.vue?vue&type=style&index=0&id=79cc5a53&lang=css&media=print&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/equipos/TicketFinal.vue?vue&type=template&id=79cc5a53&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/equipos/TicketFinal.vue?vue&type=template&id=79cc5a53&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
          _c("v-flex", { attrs: { xs6: "" } }, [
            _c(
              "table",
              {
                staticClass:
                  "table table-light table-sm table-borderless text-center",
                attrs: { id: _vm.ticket.id + "ticket_final" }
              },
              [
                _c("thead", [
                  _c("tr", [
                    _c("th", { attrs: { colspan: "3" } }, [
                      _c("h3", [_vm._v("Ciber X-Gamer")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("th", { attrs: { colspan: "3" } }, [
                      _c("img", {
                        staticClass: "icon-ticket mx-auto",
                        attrs: { src: "/images/xg-icon.png", alt: "icon" }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("th", { attrs: { colspan: "3" } }, [
                      _vm._v("Av. Mac Lean 333, Las Breñas, Chaco")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("th", { attrs: { colspan: "3" } }, [
                      _vm._v(
                        "\n              " +
                          _vm._s(_vm._f("date")(new Date())) +
                          "\n            "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", { staticClass: "border-bottom" }, [
                    _c("th", { attrs: { colspan: "3" } }, [
                      _vm._v("Ticket n° " + _vm._s(_vm.ticket.id))
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  [
                    _vm.details.repuestos.length > 0
                      ? _c("tr", [
                          _c("td", { staticClass: "text-muted" }, [
                            _c("b", [_vm._v("Repuestos")])
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-muted" }, [
                            _c("b", [_vm._v("Cantidad")])
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-muted" }, [
                            _c("b", [_vm._v("Precio unitario")])
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm._l(_vm.details.repuestos, function(repuesto) {
                      return _c("tr", { key: repuesto.repuesto }, [
                        _c("td", [_vm._v(_vm._s(repuesto.repuesto))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(repuesto.cantidad))]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm._f("price")(repuesto.precio_unitario))
                          )
                        ])
                      ])
                    }),
                    _vm._v(" "),
                    _vm.details.servicios.length > 0
                      ? _c("tr", [
                          _c("td", { staticClass: "text-muted" }, [
                            _c("b", [_vm._v("Servicios")])
                          ]),
                          _vm._v(" "),
                          _c("td"),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-muted" }, [
                            _c("b", [_vm._v("Costo")])
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm._l(_vm.details.servicios, function(servicio) {
                      return _c("tr", { key: servicio.titulo }, [
                        _c("td", [_vm._v(_vm._s(servicio.servicio))]),
                        _vm._v(" "),
                        _c("td"),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(_vm._s(_vm._f("price")(servicio.precio)))
                        ])
                      ])
                    }),
                    _vm._v(" "),
                    _c("tr", { staticClass: "border-top" }, [
                      _c(
                        "td",
                        {
                          staticClass: "text-center h5",
                          attrs: { colspan: "3" }
                        },
                        [
                          _c("b", [
                            _vm._v(
                              "Total " +
                                _vm._s(_vm._f("price")(_vm.ticket.total))
                            )
                          ])
                        ]
                      )
                    ])
                  ],
                  2
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs12: "" } },
            [
              _c(
                "v-btn",
                {
                  attrs: { color: "primary", block: "" },
                  on: {
                    click: function($event) {
                      return _vm.imprimir(_vm.ticket.id + "ticket_final")
                    }
                  }
                },
                [_vm._v("Imprimir Ticket")]
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

/***/ "./resources/js/components/views/equipos/TicketFinal.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/views/equipos/TicketFinal.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TicketFinal_vue_vue_type_template_id_79cc5a53_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TicketFinal.vue?vue&type=template&id=79cc5a53&scoped=true& */ "./resources/js/components/views/equipos/TicketFinal.vue?vue&type=template&id=79cc5a53&scoped=true&");
/* harmony import */ var _TicketFinal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TicketFinal.vue?vue&type=script&lang=js& */ "./resources/js/components/views/equipos/TicketFinal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TicketFinal_vue_vue_type_style_index_0_id_79cc5a53_lang_css_media_print_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TicketFinal.vue?vue&type=style&index=0&id=79cc5a53&lang=css&media=print&scoped=true& */ "./resources/js/components/views/equipos/TicketFinal.vue?vue&type=style&index=0&id=79cc5a53&lang=css&media=print&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TicketFinal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TicketFinal_vue_vue_type_template_id_79cc5a53_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TicketFinal_vue_vue_type_template_id_79cc5a53_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "79cc5a53",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/views/equipos/TicketFinal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/views/equipos/TicketFinal.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/views/equipos/TicketFinal.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketFinal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TicketFinal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/equipos/TicketFinal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketFinal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/views/equipos/TicketFinal.vue?vue&type=style&index=0&id=79cc5a53&lang=css&media=print&scoped=true&":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/components/views/equipos/TicketFinal.vue?vue&type=style&index=0&id=79cc5a53&lang=css&media=print&scoped=true& ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketFinal_vue_vue_type_style_index_0_id_79cc5a53_lang_css_media_print_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TicketFinal.vue?vue&type=style&index=0&id=79cc5a53&lang=css&media=print&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/equipos/TicketFinal.vue?vue&type=style&index=0&id=79cc5a53&lang=css&media=print&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketFinal_vue_vue_type_style_index_0_id_79cc5a53_lang_css_media_print_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketFinal_vue_vue_type_style_index_0_id_79cc5a53_lang_css_media_print_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketFinal_vue_vue_type_style_index_0_id_79cc5a53_lang_css_media_print_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketFinal_vue_vue_type_style_index_0_id_79cc5a53_lang_css_media_print_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketFinal_vue_vue_type_style_index_0_id_79cc5a53_lang_css_media_print_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/views/equipos/TicketFinal.vue?vue&type=template&id=79cc5a53&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/views/equipos/TicketFinal.vue?vue&type=template&id=79cc5a53&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketFinal_vue_vue_type_template_id_79cc5a53_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TicketFinal.vue?vue&type=template&id=79cc5a53&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/equipos/TicketFinal.vue?vue&type=template&id=79cc5a53&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketFinal_vue_vue_type_template_id_79cc5a53_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketFinal_vue_vue_type_template_id_79cc5a53_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);