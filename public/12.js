(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/clientes/ClientesIndex.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/clientes/ClientesIndex.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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
    EditarCliente: function EditarCliente() {
      return __webpack_require__.e(/*! import() */ 9).then(__webpack_require__.bind(null, /*! ./ClienteEditar.vue */ "./resources/js/components/views/clientes/ClienteEditar.vue"));
    },
    EquiposCliente: function EquiposCliente() {
      return __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! ./ClienteEquipos.vue */ "./resources/js/components/views/clientes/ClienteEquipos.vue"));
    },
    NuevoEquipoCliente: function NuevoEquipoCliente() {
      return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ./ClienteEquipoNuevo.vue */ "./resources/js/components/views/clientes/ClienteEquipoNuevo.vue"));
    }
  },
  data: function data() {
    return {
      keyword: '',
      show: false
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    filteredClientes: 'cliente/filteredClientes',
    counter: 'cliente/clientesCount'
  }), {
    clientes: function clientes() {
      return this.filteredClientes(this.keyword);
    }
  }),
  mounted: function mounted() {
    this.index();
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    index: 'cliente/fetchAll',
    delete: 'cliente/deleteCliente'
  }), {
    eliminar: function eliminar(cliente) {
      var _this = this;

      this.$swal.fire({
        title: "\xBFEst\xE1s seguro de eliminar a ".concat(cliente.nombre, " ").concat(cliente.apellido, " de la lista de clientes?"),
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, estoy seguro',
        cancelButtonText: 'Cancelar'
      }).then(function (result) {
        if (result.value) {
          _this.delete(cliente.id).then(function () {
            _this.$swal.fire({
              title: 'Cliente eliminado con éxito',
              type: 'success'
            });
          });
        }
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/clientes/ClientesIndex.vue?vue&type=template&id=6c6be52f&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/clientes/ClientesIndex.vue?vue&type=template&id=6c6be52f& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
              attrs: { color: "blue darken-1", dense: "", dark: "", flat: "" }
            },
            [
              _c("v-toolbar-title", [
                _vm._v(" " + _vm._s(_vm.counter) + " clientes registrados ")
              ]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-toolbar-items",
                [
                  _c("v-text-field", {
                    attrs: {
                      dark: "",
                      flat: "",
                      "append-icon": "search",
                      placeholder: "Búsqueda de clientes"
                    },
                    on: {
                      input: function($event) {
                        _vm.show = true
                      }
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
          _vm.show
            ? _c(
                "v-layout",
                { attrs: { row: "", wrap: "" } },
                _vm._l(_vm.clientes, function(cliente, index) {
                  return _c(
                    "v-flex",
                    {
                      key: index + cliente.nombre,
                      attrs: { xs12: "", sm4: "" }
                    },
                    [
                      _c(
                        "v-card",
                        { staticClass: "ma-2 pa-2 elevation-24" },
                        [
                          _c(
                            "v-toolbar",
                            {
                              attrs: {
                                color: "transparent",
                                dense: "",
                                flat: ""
                              }
                            },
                            [
                              _c("v-toolbar-title", [
                                _vm._v(
                                  " " +
                                    _vm._s(cliente.nombre) +
                                    " " +
                                    _vm._s(cliente.apellido) +
                                    " "
                                )
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
                                        color: "error",
                                        flat: "",
                                        fab: "",
                                        small: ""
                                      },
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.eliminar(cliente)
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
                            { attrs: { "min-height": "220" } },
                            [
                              _c(
                                "v-card-title",
                                { attrs: { "primary-title": "" } },
                                [
                                  _c(
                                    "v-layout",
                                    { attrs: { row: "", wrap: "" } },
                                    [
                                      _c(
                                        "v-flex",
                                        { attrs: { xs12: "" } },
                                        [
                                          _c(
                                            "v-list",
                                            {
                                              attrs: {
                                                "three-line": "",
                                                subheader: ""
                                              }
                                            },
                                            [
                                              _c("v-subheader", [
                                                _vm._v(
                                                  "Información de contacto"
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c(
                                                "v-list-tile",
                                                [
                                                  _c(
                                                    "v-list-tile-content",
                                                    [
                                                      _c("v-list-tile-title", [
                                                        _vm._v("Teléfono")
                                                      ]),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-list-tile-sub-title",
                                                        {
                                                          domProps: {
                                                            textContent: _vm._s(
                                                              cliente.telefono
                                                            )
                                                          }
                                                        }
                                                      )
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
                                                        _vm._v("Dirección")
                                                      ]),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-list-tile-sub-title",
                                                        {
                                                          domProps: {
                                                            textContent: _vm._s(
                                                              cliente.direccion
                                                            )
                                                          }
                                                        }
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
                          ),
                          _vm._v(" "),
                          _c(
                            "v-card-actions",
                            [
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
                                          _c("equipos-cliente", {
                                            attrs: {
                                              cliente: cliente.nombre,
                                              equipos: cliente.equipos
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
                                          _c("editar-cliente", {
                                            attrs: { id: cliente.id }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-flex",
                                        { attrs: { xs12: "" } },
                                        [
                                          _c("nuevo-equipo-cliente", {
                                            attrs: {
                                              "id-cliente": cliente.id,
                                              cliente: cliente.nombre
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
                }),
                1
              )
            : _c(
                "v-layout",
                [
                  _c(
                    "v-flex",
                    { staticClass: "text-xs-center", attrs: { xs12: "" } },
                    [
                      _c(
                        "v-icon",
                        {
                          staticStyle: {
                            "font-size": "20em",
                            cursor: "pointer"
                          },
                          on: {
                            click: function($event) {
                              _vm.show = true
                            }
                          }
                        },
                        [_vm._v("people")]
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

/***/ "./resources/js/components/views/clientes/ClientesIndex.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/views/clientes/ClientesIndex.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ClientesIndex_vue_vue_type_template_id_6c6be52f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClientesIndex.vue?vue&type=template&id=6c6be52f& */ "./resources/js/components/views/clientes/ClientesIndex.vue?vue&type=template&id=6c6be52f&");
/* harmony import */ var _ClientesIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClientesIndex.vue?vue&type=script&lang=js& */ "./resources/js/components/views/clientes/ClientesIndex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ClientesIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ClientesIndex_vue_vue_type_template_id_6c6be52f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ClientesIndex_vue_vue_type_template_id_6c6be52f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/views/clientes/ClientesIndex.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/views/clientes/ClientesIndex.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/views/clientes/ClientesIndex.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientesIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ClientesIndex.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/clientes/ClientesIndex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientesIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/views/clientes/ClientesIndex.vue?vue&type=template&id=6c6be52f&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/views/clientes/ClientesIndex.vue?vue&type=template&id=6c6be52f& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientesIndex_vue_vue_type_template_id_6c6be52f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ClientesIndex.vue?vue&type=template&id=6c6be52f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/clientes/ClientesIndex.vue?vue&type=template&id=6c6be52f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientesIndex_vue_vue_type_template_id_6c6be52f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientesIndex_vue_vue_type_template_id_6c6be52f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);