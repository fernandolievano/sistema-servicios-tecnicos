import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import example from './components/ExampleComponent.vue'

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/example',
            name: 'example',
            component: example
        }
    ]
})