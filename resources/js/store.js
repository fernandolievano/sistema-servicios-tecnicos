/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({
    state: {
        clientes: [],
        cliente: {},
        clienteID: '',
        equipos: [],
        servicios: [],
        repuestos: []
    },
    actions: {
        indexClientes({ commit }) {
            const url = '/clientes/get'
            axios
                .get(url)
                .then(response => {
                    commit('SET_CLIENTES', response.data)
                })
                .catch(error => {
                    console.error(error)
                })
        },
        indexEquipos({ commit }) {
            const url = '/equipos/get'

            axios
                .get(url)
                .then(response => {
                    commit('SET_EQUIPOS', response.data)
                })
                .catch(error => {
                    console.error(error)
                })
        },
        indexServicios({ commit }) {
            const url = '/servicios/get'

            axios
                .get(url)
                .then(response => {
                    commit('SET_SERVICIOS', response.data)
                })
                .catch(error => {
                    console.error(error)
                })
        },
        indexRepuestos({ commit }) {
            const url = '/repuestos/get'

            axios
                .get(url)
                .then(response => {
                    commit('SET_REPUESTOS', response.data)
                })
                .catch(error => {
                    console.error(error)
                })
        }
    },
    mutations: {
        SET_CLIENTES(state, clientes) {
            state.clientes = clientes
        },
        SET_CLIENTE_ID(state, id) {
            state.clienteID = id
        },
        SET_EQUIPOS(state, equipos) {
            state.equipos = equipos
        },
        SET_SERVICIOS(state, servicios) {
            state.servicios = servicios
        },
        SET_REPUESTOS(state, repuestos) {
            state.repuestos = repuestos
        },
        CLEAR_ID(state) {
            state.clienteID = ''
        }
    },
    getters: {
        clienteByID: state => id => {
            return state.clientes.find(cliente => cliente.id === id)
        },
        equiposDeCliente: (state, getters, id) => {
            return getters.clienteByID(id).equipos
        },
        servicioByID: state => id => {
            return state.servicios.find(servicio => servicio.id === id)
        },
        repuestoByID: state => id => {
            return state.repuestos.find(repuesto => repuesto.id === id)
        }
    }
})
