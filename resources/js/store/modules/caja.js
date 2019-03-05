/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */

import CajaService from '../../services/CajaService'

export const namespaced = true

export const state = {
  caja: {},
  ingresosYRetiros: []
}

export const mutations = {
  SET_CAJA(state, caja) {
    state.caja = caja
  },
  SET_INGRESOS_Y_RETIROS(state, ingresosYRetiros) {
    state.ingresosYRetiros = ingresosYRetiros
  }
}

export const actions = {
  fetchCaja({ commit }) {
    return CajaService.cajaTotal().then(response => {
      commit('SET_CAJA', response.data)
    })
  },
  fetchIngresosYRetiros({ commit }) {
    return CajaService.ingresosRetiros().then(response => {
      commit('SET_INGRESOS_Y_RETIROS', response.data)
    })
  }
}
