<template>
    <v-form ref="formcliente" v-model="valid" lazy-validation @submit.prevent="store">
        <v-container>
            <v-layout row wrap>
                <v-flex sm10 offset-sm1 offset-md2 md8 xs12>
                    <v-card>
                        <v-card-title primary-title>
                            <v-layout row wrap>
                                <v-flex>
                                    <h2 class="display-3">Registrar nuevo cliente</h2>
                                </v-flex>
                            </v-layout>
                            <v-layout v-if="success" row wrap>
                                <v-divider></v-divider>
                                <v-flex xs12>
                                    <h3 class="success--text display-5">
                                        Cliente registrado exitosamente, ahora continúe con el
                                        registro del equipo
                                    </h3>
                                </v-flex>
                                <v-flex xs12>
                                    <nuevo-equipo-cliente
                                        :id-cliente="id"
                                        :nuevo="true"
                                    ></nuevo-equipo-cliente>
                                </v-flex>
                            </v-layout>
                        </v-card-title>
                        <v-responsive>
                            <v-container>
                                <v-layout row wrap>
                                    <v-flex xs12>
                                        <v-text-field
                                            v-model="formulario.nombre"
                                            label="Nombre"
                                            required
                                            :rules="generales"
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex xs12>
                                        <v-text-field
                                            v-model="formulario.apellido"
                                            label="Apellido"
                                            required
                                            :rules="generales"
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex xs12>
                                        <v-text-field
                                            v-model="formulario.direccion"
                                            label="Dirección"
                                            required
                                            :rules="generales"
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex xs12>
                                        <v-text-field
                                            v-model="formulario.telefono"
                                            label="Teléfono"
                                            required
                                            :rules="generales"
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex xs12>
                                        <v-text-field
                                            v-model="formulario.email"
                                            label="E-mail"
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex xs12>
                                        <v-btn type="submit" block large color="success"
                                            >Registar</v-btn
                                        >
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-responsive>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-form>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'

export default {
    components: {
        NuevoEquipoCliente: () => import('./ClienteEquipoNuevo.vue')
    },
    data: () => ({
        valid: false,
        success: false,
        formulario: {
            nombre: '',
            apellido: '',
            direccion: '',
            telefono: '',
            email: ''
        },
        generales: [v => !!v || 'Este campo es requerido']
    }),
    computed: {
        ...mapState(['id'])
    },
    methods: {
        store() {
            const url = '/api/v1/clientes/store'
            const params = Object.assign({}, this.formulario)

            axios
                .post(url, params)
                .then(response => {
                    this.$store.dispatch('indexClientes')
                    this.$refs.formcliente.reset()
                    this.$store.dispatch('setID', response.data)
                    this.success = true
                })
                .catch(error => {
                    this.errors = error
                })
        }
    }
}
</script>

<style></style>
