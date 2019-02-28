/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import * as cliente from './modules/cliente'
import * as equipo from './modules/equipo'
import * as repuesto from './modules/repuesto'
import * as servicio from './modules/servicio'
import * as ticket from './modules/tickets'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  modules: {
    cliente,
    equipo,
    repuesto,
    servicio,
    ticket
  }
})
