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
                                    <v-btn flat fab color="warning">Editar</v-btn>
                                </v-flex>
                                <v-flex>
                                    <v-btn color="error">Eliminar</v-btn>
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
        }
    }
}
</script>
<style></style>
