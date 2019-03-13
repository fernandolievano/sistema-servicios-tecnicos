(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/equipos/EquiposIndex.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/equipos/EquiposIndex.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
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

/* eslint-disable react/no-this-in-sfc */

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'IndexEquipos',
  components: {
    EquipoCard: function EquipoCard() {
      return __webpack_require__.e(/*! import() */ 12).then(__webpack_require__.bind(null, /*! ./EquipoCard.vue */ "./resources/js/components/views/equipos/EquipoCard.vue"));
    }
  },
  props: {
    section: {
      type: String,
      default: 'Index'
    }
  },
  data: function data() {
    return {
      keyword: ''
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    filteredEquipos: 'equipo/filteredEquipos',
    equiposByEstado: 'equipo/equiposByEstado',
    counter: 'equipo/equiposCount',
    estadoCounter: 'equipo/countEquiposByEstado'
  }), {
    equipos: function equipos() {
      if (this.section === 'Index') {
        return this.filteredEquipos(this.keyword);
      }

      return this.equiposByEstado(this.section);
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/equipos/EquiposIndex.vue?vue&type=template&id=724e4436&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/equipos/EquiposIndex.vue?vue&type=template&id=724e4436& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
              attrs: {
                color: "deep-orange darken-1",
                dark: "",
                dense: "",
                flat: ""
              }
            },
            [
              _c("v-toolbar-title", [
                _vm._v(
                  "\n        " +
                    _vm._s(_vm.counter) +
                    " equipos registrados\n        "
                ),
                _vm.section !== "Index"
                  ? _c("span", [
                      _vm._v(
                        "\n          | " +
                          _vm._s(_vm.estadoCounter(_vm.section)) +
                          " equipos en estado " +
                          _vm._s(_vm.section)
                      )
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _vm.section === "Index"
                ? _c(
                    "v-toolbar-items",
                    [
                      _c("v-text-field", {
                        attrs: {
                          dark: "",
                          flat: "",
                          solo: "",
                          "background-color": "transparent",
                          "append-icon": "search",
                          placeholder: "Búsqueda de equipos"
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
                : _vm._e()
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-container",
        { attrs: { "align-center": "" } },
        [
          _c(
            "v-layout",
            { staticClass: "my-4", attrs: { row: "", wrap: "" } },
            [
              _c("v-flex", { attrs: { xs12: "" } }, [
                _vm.section === "Index"
                  ? _c("h1", { staticClass: "display-3 text-xs-center" }, [
                      _vm._v("Todos los equipos")
                    ])
                  : _vm.section === "En Reparación"
                  ? _c("h1", { staticClass: "display-3 text-xs-center" }, [
                      _vm._v("\n          Equipos en Reparación\n        ")
                    ])
                  : _vm.section === "Reparado"
                  ? _c("h1", { staticClass: "display-3 text-xs-center" }, [
                      _vm._v("\n          Equipos Reparados\n        ")
                    ])
                  : _vm.section === "Despachado"
                  ? _c("h1", { staticClass: "display-3 text-xs-center" }, [
                      _vm._v("\n          Equipos Despachados\n        ")
                    ])
                  : _vm._e()
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-layout",
            { attrs: { row: "", wrap: "" } },
            _vm._l(_vm.equipos, function(item) {
              return _c("EquipoCard", {
                key: item.equipo + item.id + _vm.section,
                attrs: { item: item }
              })
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

/***/ "./resources/js/components/views/equipos/EquiposIndex.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/views/equipos/EquiposIndex.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EquiposIndex_vue_vue_type_template_id_724e4436___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EquiposIndex.vue?vue&type=template&id=724e4436& */ "./resources/js/components/views/equipos/EquiposIndex.vue?vue&type=template&id=724e4436&");
/* harmony import */ var _EquiposIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EquiposIndex.vue?vue&type=script&lang=js& */ "./resources/js/components/views/equipos/EquiposIndex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EquiposIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EquiposIndex_vue_vue_type_template_id_724e4436___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EquiposIndex_vue_vue_type_template_id_724e4436___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/views/equipos/EquiposIndex.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/views/equipos/EquiposIndex.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/views/equipos/EquiposIndex.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EquiposIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EquiposIndex.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/equipos/EquiposIndex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EquiposIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/views/equipos/EquiposIndex.vue?vue&type=template&id=724e4436&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/views/equipos/EquiposIndex.vue?vue&type=template&id=724e4436& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EquiposIndex_vue_vue_type_template_id_724e4436___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EquiposIndex.vue?vue&type=template&id=724e4436& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/equipos/EquiposIndex.vue?vue&type=template&id=724e4436&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EquiposIndex_vue_vue_type_template_id_724e4436___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EquiposIndex_vue_vue_type_template_id_724e4436___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);