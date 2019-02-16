/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/clientes',
            name: 'clientes',
            component: () => import('./components/views/clientes/Clientes.vue')
        },
        {
            path: '/servicios',
            name: 'servicios',
            component: () => import('./components/views/servicios/Servicios.vue')
        },
        {
            path: '/repuestos',
            name: 'repuestos',
            component: () => import('./components/views/repuestos/Repuestos.vue')
        }
    ]
})

router.beforeResolve((to, from, next) => {
    // If this isn't an initial page load.
    if (to.name) {
        // Start the route progress bar.
        NProgress.start()
    }
    next()
})

router.afterEach((to, from) => {
    // Complete the animation of the route progress bar.
    NProgress.done()
})

export default router
