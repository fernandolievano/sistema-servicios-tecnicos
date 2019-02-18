<template>
    <v-container align-center>
        <v-layout row wrap>
            <v-flex v-for="(cliente, index) in clientes" :key="index" xs12 sm6 md4>
                <v-card class="ma-2 pa-2 elevation-24">
                    <v-responsive min-height="220">
                        <v-card-title primary-title>
                            <v-layout row wrap>
                                <v-flex xs12>
                                    <h3 v-text="cliente.nombre"></h3>
                                    <h3 v-text="cliente.apellido"></h3>
                                </v-flex>
                                <v-flex xs12>
                                    <v-list two-line subheader>
                                        <v-subheader>Información de contacto</v-subheader>

                                        <v-list-tile>
                                            <v-list-tile-content>
                                                <v-list-tile-title>Teléfono</v-list-tile-title>
                                                <v-list-tile-sub-title
                                                    v-text="cliente.telefono"
                                                ></v-list-tile-sub-title>
                                            </v-list-tile-content>
                                        </v-list-tile>
                                        <v-list-tile>
                                            <v-list-tile-content>
                                                <v-list-tile-title>Dirección</v-list-tile-title>
                                                <v-list-tile-sub-title
                                                    v-text="cliente.direccion"
                                                ></v-list-tile-sub-title>
                                            </v-list-tile-content>
                                        </v-list-tile>
                                    </v-list>
                                </v-flex>
                            </v-layout>
                        </v-card-title>
                    </v-responsive>
                    <v-card-actions>
                        <v-container grid-list-xs class="text-xs-center">
                            <v-layout row wrap>
                                <v-flex>
                                    <v-tooltip top>
                                        <template #activator="data">
                                            <v-btn
                                                color="success"
                                                fab
                                                small
                                                depressed
                                                v-on="data.on"
                                            >
                                                <v-icon>
                                                    add
                                                </v-icon>
                                            </v-btn>
                                        </template>
                                        <span>Nuevo Equipo</span>
                                    </v-tooltip>
                                </v-flex>
                                <v-flex>
                                    <equipos-cliente
                                        :cliente="cliente.nombre"
                                        :equipos="cliente.equipos"
                                        :id-cliente="cliente.id"
                                    ></equipos-cliente>
                                </v-flex>
                                <v-flex>
                                    <editar-cliente :id="cliente.id"></editar-cliente>
                                </v-flex>
                                <v-flex>
                                    <v-tooltip top>
                                        <template #activator="data">
                                            <v-btn
                                                color="error"
                                                fab
                                                depressed
                                                small
                                                v-on="data.on"
                                                @click.prevent="eliminar(cliente)"
                                            >
                                                <v-icon>clear</v-icon>
                                            </v-btn>
                                        </template>
                                        <span>Eliminar cliente</span>
                                    </v-tooltip>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'
import { mapState } from 'vuex'

export default {
    components: {
        EditarCliente: () => import('./ClienteEditar.vue'),
        EquiposCliente: () => import('./ClienteEquipos.vue')
    },
    computed: {
        ...mapState(['clientes'])
    },
    mounted() {
        this.$store.dispatch('indexClientes')
    },
    methods: {
        eliminar(cliente) {
            swal({
                title: `¿Estás de eliminar a ${cliente.nombre} ${
                    cliente.apellido
                } de la lista de clientes?`,
                icon: 'warning',
                buttons: ['No', 'Sí, estoy seguro']
            }).then(value => {
                if (value) {
                    const url = `/api/v1/clientes/${cliente.id}`

                    axios.delete(url).then(() => {
                        swal('Usuario eliminado', '...', 'success')
                        this.$store.dispatch('indexClientes')
                    })
                }
            })
        }
    }
}
</script>

<style>
/* html {
    border-top: 15px solid black;
} */
</style>
