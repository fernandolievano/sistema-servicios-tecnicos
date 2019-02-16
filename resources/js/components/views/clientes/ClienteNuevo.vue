<template>
    <v-form ref="formcliente" v-model="valid" lazy-validation @submit.prevent="store">
        <v-container>
            <v-layout row wrap>
                <v-flex xs12>
                    <v-card>
                        <v-card-title primary-title>
                            <h2 class="display-3">Registrar nuevo cliente</h2>
                            <v-alert
                                v-model="success"
                                type="success"
                                dismissable
                                transition="scale-transition"
                            >
                                Cliente registrado exitosamente, ahora continúe con el registro del
                                equipo
                            </v-alert>
                        </v-card-title>
                        <v-responsive>
                            <v-container>
                                <v-layout row wrap>
                                    <v-flex xs12 sm8>
                                        <v-text-field
                                            v-model="formulario.nombre"
                                            label="Nombre"
                                            required
                                            :rules="generales"
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 sm8>
                                        <v-text-field
                                            v-model="formulario.apellido"
                                            label="Apellido"
                                            required
                                            :rules="generales"
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 sm8>
                                        <v-text-field
                                            v-model="formulario.direccion"
                                            label="Dirección"
                                            required
                                            :rules="generales"
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 sm8>
                                        <v-text-field
                                            v-model="formulario.telefono"
                                            label="Teléfono"
                                            required
                                            :rules="generales"
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 sm8>
                                        <v-text-field
                                            v-model="formulario.email"
                                            label="E-mail"
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 sm8>
                                        <v-btn type="submit" large color="success">Registar</v-btn>
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

export default {
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
    methods: {
        store() {
            const url = '/api/v1/clientes/store'
            const params = Object.assign({}, this.formulario)

            axios
                .post(url, params)
                .then(response => {
                    this.$store.dispatch('indexClientes')
                    this.$refs.formcliente.reset()
                    this.success = true
                    console.log(response.data)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}
</script>

<style></style>
