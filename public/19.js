(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/repuestos/RepuestosIndex.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/repuestos/RepuestosIndex.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
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
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'IndexRepuestos',
  components: {
    EditarRepuesto: function EditarRepuesto() {
      return __webpack_require__.e(/*! import() */ 16).then(__webpack_require__.bind(null, /*! ./RepuestoEditar.vue */ "./resources/js/components/views/repuestos/RepuestoEditar.vue"));
    }
  },
  data: function data() {
    return {
      keyword: ''
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    counter: 'repuesto/repuestosCount',
    filteredRepuestos: 'repuesto/filteredRepuestos'
  }), {
    repuestos: function repuestos() {
      return this.filteredRepuestos(this.keyword);
    }
  }),
  mounted: function mounted() {
    this.fetch();
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    fetch: 'repuesto/fetchAll',
    eliminarRepuesto: 'repuesto/deleteRepuesto'
  }), {
    precioUnitario: function precioUnitario(precio) {
      var formato = precio.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
      formato = "$".concat(formato);
      return formato;
    },
    eliminar: function eliminar(repuesto) {
      var _this = this;

      var message = "\xBFEst\xE1s seguro de quitar el repuesto ".concat(repuesto.repuesto, " de la lista?");
      this.$swal.fire({
        title: message,
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, estoy seguro',
        cancelButtonText: 'Cancelar'
      }).then(function (result) {
        if (result.value) {
          _this.eliminarRepuesto(repuesto.id).then(function () {
            _this.$swal.fire({
              title: 'Repuesto eliminado con éxito',
              type: 'success'
            });
          }).catch(function () {
            _this.$swal.fire({
              title: 'Error al eliminar repuesto',
              type: 'error'
            });
          });
        }
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/repuestos/RepuestosIndex.vue?vue&type=template&id=8505c92e&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/repuestos/RepuestosIndex.vue?vue&type=template&id=8505c92e& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
        "div",
        { staticClass: "bottom-shadow" },
        [
          _c(
            "v-toolbar",
            {
              attrs: { color: "green darken-2", dark: "", dense: "", flat: "" }
            },
            [
              _c("v-toolbar-title", [
                _vm._v(
                  " " +
                    _vm._s(_vm.counter) +
                    " repuestos diferentes disponibles"
                )
              ]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-toolbar-items",
                [
                  _c("v-text-field", {
                    attrs: {
                      "append-icon": "search",
                      flat: "",
                      dark: "",
                      "background-color": "transparent",
                      solo: "",
                      placeholder: "Búsqueda de repuestos"
                    },
                    model: {
                      value: _vm.keyword,
                      callback: function($$v) {
                        _vm.keyword = $$v
                      },
                      expression: "keyword"
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
      ),
      _vm._v(" "),
      _c(
        "v-container",
        { attrs: { "grid-list-xs": "" } },
        [
          _c(
            "v-layout",
            { attrs: { row: "", wrap: "" } },
            _vm._l(_vm.repuestos, function(item) {
              return _c(
                "v-flex",
                {
                  key: item.id + item.repuesto,
                  attrs: { xs12: "", sm6: "", md4: "" }
                },
                [
                  _c(
                    "v-card",
                    { staticClass: "ma-2 pa-2 elevation-24" },
                    [
                      _c(
                        "v-toolbar",
                        {
                          attrs: { color: "transparent", dense: "", flat: "" }
                        },
                        [
                          _c("v-toolbar-title", [
                            _vm._v(" " + _vm._s(item.repuesto) + " ")
                          ]),
                          _vm._v(" "),
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-toolbar-items",
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: {
                                    fab: "",
                                    small: "",
                                    flat: "",
                                    color: "error"
                                  },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.eliminar(item)
                                    }
                                  }
                                },
                                [_c("v-icon", [_vm._v("clear")])],
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
                        "v-responsive",
                        { attrs: { "min-height": "150" } },
                        [
                          _c(
                            "v-card-title",
                            { attrs: { "primary-title": "" } },
                            [
                              _c(
                                "v-flex",
                                { attrs: { xs12: "" } },
                                [
                                  _c(
                                    "v-list",
                                    {
                                      attrs: { "three-line": "", subheader: "" }
                                    },
                                    [
                                      _c("v-subheader", {
                                        domProps: {
                                          textContent: _vm._s(item.descripcion)
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "v-list-tile",
                                        [
                                          _c(
                                            "v-list-tile-content",
                                            [
                                              _c("v-list-tile-title", [
                                                _vm._v("Stock")
                                              ]),
                                              _vm._v(" "),
                                              _c("v-list-tile-sub-title", {
                                                domProps: {
                                                  textContent: _vm._s(
                                                    item.cantidad
                                                  )
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
                                        "v-list-tile",
                                        [
                                          _c(
                                            "v-list-tile-content",
                                            [
                                              _c("v-list-tile-title", [
                                                _vm._v(
                                                  "Precio unitario de compra"
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("v-list-tile-sub-title", [
                                                _vm._v(
                                                  "\n                        " +
                                                    _vm._s(
                                                      _vm.precioUnitario(
                                                        item.precio_unitario_compra
                                                      )
                                                    ) +
                                                    "\n                      "
                                                )
                                              ])
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-list-tile",
                                        [
                                          _c(
                                            "v-list-tile-content",
                                            [
                                              _c("v-list-tile-title", [
                                                _vm._v(
                                                  "Precio unitario de venta"
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("v-list-tile-sub-title", [
                                                _vm._v(
                                                  "\n                        " +
                                                    _vm._s(
                                                      _vm.precioUnitario(
                                                        item.precio_unitario_venta
                                                      )
                                                    ) +
                                                    "\n                      "
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
                        "v-card-actions",
                        [
                          _c(
                            "v-container",
                            {
                              staticClass: "text-xs-center",
                              attrs: { "grid-list-xs": "" }
                            },
                            [
                              _c(
                                "v-layout",
                                { attrs: { row: "", wrap: "" } },
                                [
                                  _c(
                                    "v-flex",
                                    [
                                      _c("editar-repuesto", {
                                        attrs: { id: item.id }
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
            }),
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

/***/ "./resources/js/components/views/repuestos/RepuestosIndex.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/views/repuestos/RepuestosIndex.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RepuestosIndex_vue_vue_type_template_id_8505c92e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RepuestosIndex.vue?vue&type=template&id=8505c92e& */ "./resources/js/components/views/repuestos/RepuestosIndex.vue?vue&type=template&id=8505c92e&");
/* harmony import */ var _RepuestosIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RepuestosIndex.vue?vue&type=script&lang=js& */ "./resources/js/components/views/repuestos/RepuestosIndex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RepuestosIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RepuestosIndex_vue_vue_type_template_id_8505c92e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RepuestosIndex_vue_vue_type_template_id_8505c92e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/views/repuestos/RepuestosIndex.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/views/repuestos/RepuestosIndex.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/views/repuestos/RepuestosIndex.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RepuestosIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RepuestosIndex.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/repuestos/RepuestosIndex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RepuestosIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/views/repuestos/RepuestosIndex.vue?vue&type=template&id=8505c92e&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/views/repuestos/RepuestosIndex.vue?vue&type=template&id=8505c92e& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RepuestosIndex_vue_vue_type_template_id_8505c92e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RepuestosIndex.vue?vue&type=template&id=8505c92e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/repuestos/RepuestosIndex.vue?vue&type=template&id=8505c92e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RepuestosIndex_vue_vue_type_template_id_8505c92e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RepuestosIndex_vue_vue_type_template_id_8505c92e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);