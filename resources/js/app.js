import './bootstrap'
import 'babel-polyfill'
import 'vuetify/dist/vuetify.min.css'

//vue
import Vue from 'vue'
import Vuetify from 'vuetify'
Vue.use(Vuetify)

//vue-router and vuex
import router from './router'
import store from './store'

//components
import App from './components/App'

const app = new Vue({
    el: '#app',
    router,
    store,
    components: { App }
})
