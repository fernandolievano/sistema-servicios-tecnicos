/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import store from './store/store'

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
    },
    {
      path: '/equipos',
      name: 'equipos',
      component: () => import('./components/views/equipos/Equipos.vue')
    },
    {
      path: '/imprimir/ticket_final/:id',
      name: 'factura',
      component: () => import('./components/views/equipos/TicketFinal.vue'),
      props: true,
      beforeEnter(routeTo, routeFrom, next) {
        store
          .dispatch('ticket/fetchFinal', routeTo.params.id)
          .then(ticket => {
            // eslint-disable-next-line no-param-reassign
            routeTo.params.ticket = ticket
            next()
          })
          .catch(error => {
            //
          })
      }
    },
    {
      path: '/caja',
      name: 'caja',
      component: () => import('./components/views/caja/Caja.vue')
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
