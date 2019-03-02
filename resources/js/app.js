/* eslint-disable no-unused-vars */
import './bootstrap'
import 'babel-polyfill'
import 'vuetify/dist/vuetify.min.css'
import 'nprogress/nprogress.css'

// vue
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueSweetalert2 from 'vue-sweetalert2'

// vue-router and vuex
import router from './router'
import store from './store/store'

// components
import App from './components/App.vue'

Vue.use(VueSweetalert2)
Vue.use(Vuetify)

const app = new Vue({
  el: '#app',
  router,
  store,
  components: { App }
})
