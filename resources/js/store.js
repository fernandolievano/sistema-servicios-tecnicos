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
        equipos: []
    },
    actions: {
        indexClientes({ commit }) {
            const url = '/api/v1/clientes/get'
            axios
                .get(url)
                .then(response => {
                    const clientes = response.data
                    commit('SET_CLIENTES', clientes)
                })
                .catch(error => {
                    console.error(error)
                })
        },
        indexEquipos({ commit }) {
            const url = '/api/v1/equipos/get'

            axios
                .get(url)
                .then(response => {
                    const equipos = response.data
                    commit('SET_EQUIPOS', equipos)
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
        CLEAR_ID(state) {
            state.clienteID = ''
        }
    },
    getters: {
        clienteByID: state => id => {
            return state.clientes.find(cliente => cliente.id === id)
        }
    }
})
