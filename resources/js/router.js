/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import store from './store/store'
import Index from './components/views/Index.vue'
import Caja from './components/views/caja/Caja.vue'
import Clientes from './components/views/clientes/Clientes.vue'
import Equipos from './components/views/equipos/Equipos.vue'
import Servicios from './components/views/servicios/Servicios.vue'
import Repuestos from './components/views/repuestos/Repuestos.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/clientes',
      name: 'clientes',
      component: Clientes
    },
    {
      path: '/servicios',
      name: 'servicios',
      component: Servicios
    },
    {
      path: '/repuestos',
      name: 'repuestos',
      component: Repuestos
    },
    {
      path: '/equipos',
      name: 'equipos',
      component: Equipos
    },
    {
      path: '/descargar/ticket_final/:id',
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
      path: '/descargar/ticket_inicial/:id',
      name: 'ticket_inicial',
      component: () => import('./components/views/clientes/TicketInicial.vue'),
      props: true,
      beforeEnter(routeTo, routeFrom, next) {
        store
          .dispatch('ticket/fetchInicial', routeTo.params.id)
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
      component: Caja
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
