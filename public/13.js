(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/equipos/Estado.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/equipos/Estado.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'BotonEstado',
  props: {
    estado: {
      type: String,
      default: null
    },
    id: {
      type: Number,
      required: true
    }
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    cambiarEstado: 'equipo/estadoEquipo'
  }), {
    // PENDIENTE MIGRAR EL CÓDIGO A VUEX
    marcarComo: function marcarComo(estado, id) {
      var _this = this;

      var url = "/api/v1/equipos/estado/".concat(id);

      if (estado === 'En Reparación') {
        var nuevoEstado = {
          estado: 'Reparado'
        };
        var params = Object.assign({}, nuevoEstado);
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.put(url, params).then(function (response) {
          var msg = "".concat(response.data.equipo, " ").concat(response.data.modelo, " fue reparado");

          _this.cambiarEstado(id, 'Reparado').then(function () {
            _this.$swal.fire({
              title: msg,
              type: 'success'
            });
          });
        });
      } else if (estado === 'Reparado') {
        var _nuevoEstado = {
          estado: 'Despachado'
        };

        var _params = Object.assign({}, _nuevoEstado);

        axios__WEBPACK_IMPORTED_MODULE_1___default.a.put(url, _params).then(function (response) {
          var msg = "".concat(response.data.equipo, " ").concat(response.data.modelo, " fue despachado");

          _this.cambiarEstado(id, 'Despachado').then(function () {
            _this.$swal.fire({
              title: msg,
              type: 'success'
            });
          });
        });
      }
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/equipos/Estado.vue?vue&type=template&id=9f617126&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/equipos/Estado.vue?vue&type=template&id=9f617126&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
      !_vm.estado
        ? _c("p", { staticClass: "title" }, [
            _vm._v("\n    El estado fue actualizado\n  ")
          ])
        : _vm.estado === "En Reparación"
        ? _c(
            "v-btn",
            {
              attrs: { color: "primary" },
              on: {
                click: function($event) {
                  return _vm.marcarComo(_vm.estado, _vm.id)
                }
              }
            },
            [_vm._v("\n    Marcar como Reparado\n  ")]
          )
        : _vm.estado === "Reparado"
        ? _c(
            "v-btn",
            {
              attrs: { color: "success" },
              on: {
                click: function($event) {
                  return _vm.marcarComo(_vm.estado, _vm.id)
                }
              }
            },
            [_vm._v("\n    Marcar como Despachado\n  ")]
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/views/equipos/Estado.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/views/equipos/Estado.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Estado_vue_vue_type_template_id_9f617126_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Estado.vue?vue&type=template&id=9f617126&scoped=true& */ "./resources/js/components/views/equipos/Estado.vue?vue&type=template&id=9f617126&scoped=true&");
/* harmony import */ var _Estado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Estado.vue?vue&type=script&lang=js& */ "./resources/js/components/views/equipos/Estado.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Estado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Estado_vue_vue_type_template_id_9f617126_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Estado_vue_vue_type_template_id_9f617126_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9f617126",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/views/equipos/Estado.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/views/equipos/Estado.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/views/equipos/Estado.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Estado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Estado.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/equipos/Estado.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Estado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/views/equipos/Estado.vue?vue&type=template&id=9f617126&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/views/equipos/Estado.vue?vue&type=template&id=9f617126&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Estado_vue_vue_type_template_id_9f617126_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Estado.vue?vue&type=template&id=9f617126&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/equipos/Estado.vue?vue&type=template&id=9f617126&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Estado_vue_vue_type_template_id_9f617126_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Estado_vue_vue_type_template_id_9f617126_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);