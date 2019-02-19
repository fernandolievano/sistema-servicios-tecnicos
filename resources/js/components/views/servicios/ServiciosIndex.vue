<template>
    <v-container grid-list-xs>
        <v-layout row wrap>
            <v-flex v-for="item in servicios" :key="item.id" xs12 sm6 md4>
                <v-card class="ma-2 pa-2 elevation-24">
                    <v-responsive min-height="220">
                        <v-card-title primary-title>
                            <v-layout row wrap>
                                <v-flex xs12>
                                    <h3 v-text="item.titulo"></h3>
                                </v-flex>
                                <v-flex xs12>
                                    <v-list three-line subheader>
                                        <v-subheader>Acerca del servicio</v-subheader>

                                        <v-list-tile>
                                            <v-list-tile-content>
                                                <v-list-tile-title>Descripción</v-list-tile-title>
                                                <v-list-tile-sub-title>
                                                    {{ item.descripcion }}
                                                </v-list-tile-sub-title>
                                            </v-list-tile-content>
                                        </v-list-tile>
                                        <v-list-tile>
                                            <v-list-tile-content>
                                                <v-list-tile-title>Valor</v-list-tile-title>
                                                <v-list-tile-sub-title>
                                                    {{ formatoValor(item.valor) }}
                                                </v-list-tile-sub-title>
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
                                    <v-btn small depressed fab color="warning">
                                        <v-icon>edit</v-icon>
                                    </v-btn>
                                </v-flex>
                                <v-flex>
                                    <v-btn
                                        fab
                                        small
                                        depressed
                                        color="error"
                                        @click.prevent="eliminar(item)"
                                    >
                                        <v-icon>clear</v-icon>
                                    </v-btn>
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
import { mapState } from 'vuex'
import Swal from 'sweetalert2'
import axios from 'axios'

export default {
    name: 'IndexServicios',
    data: () => ({}),
    computed: {
        ...mapState(['servicios'])
    },
    mounted() {
        this.$store.dispatch('indexServicios')
    },
    methods: {
        formatoValor(valor) {
            let formato = valor.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
            formato = `$${formato}`

            return formato
        },
        eliminar(servicio) {
            const message = `¿Estás seguro de dar de baja al servicio ${servicio.titulo}?`

            Swal.fire({
                title: message,
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, estoy seguro',
                cancelButtonText: 'Cancelar'
            }).then(result => {
                if (result.value) {
                    const url = `/api/v1/servicios/${servicio.id}`

                    axios.delete(url).then(() => {
                        Swal.fire({
                            title: 'Servicio eliminado exitosamente',
                            type: 'success'
                        })
                        this.$store.dispatch('indexServicios')
                    })
                }
            })
        }
    }
}
</script>
<style></style>
