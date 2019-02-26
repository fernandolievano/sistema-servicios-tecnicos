/* eslint-disable no-unused-vars */
import './bootstrap'
import 'babel-polyfill'
import 'vuetify/dist/vuetify.min.css'

// vue
import Vue from 'vue'
import Vuetify from 'vuetify'

// vue-router and vuex
import router from './router'
import store from './store/store'

// components
import App from './components/App.vue'

Vue.use(Vuetify)

const app = new Vue({
  el: '#app',
  router,
  store,
  components: { App }
})
