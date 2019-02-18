<template>
    <v-form ref="formservicio" v-model="valid" lazy-validation @submit.prevent="store">
        <v-container grid-list-xs>
            <v-layout row wrap>
                <v-flex sm10 offset-sm1 offset-md2 md8>
                    <v-card>
                        <v-card-title primary-title>
                            <h2 class="display-3">Nuevo Servicio</h2>
                            <v-alert
                                v-model="success"
                                type="success"
                                dismissable
                                transition="scale-transition"
                            >
                                Nuevo servicio añadido exitosamente
                            </v-alert>
                        </v-card-title>
                        <v-responsive grid-list-xs>
                            <v-container>
                                <v-layout row wrap>
                                    <v-flex xs12>
                                        <v-text-field
                                            v-model="formulario.titulo"
                                            label="Título del servicio"
                                            required
                                            :rules="generales"
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex xs12>
                                        <v-text-field
                                            v-model="formulario.descripcion"
                                            label="Descripción del servicio"
                                            required
                                            :rules="generales"
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex xs12>
                                        <v-text-field
                                            v-model.number="formulario.valor"
                                            label="Valor que tendrá el servicio"
                                            required
                                            :rules="generales"
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex xs6>
                                        <v-btn type="submit" large block color="success"
                                            >Añadir</v-btn
                                        >
                                    </v-flex>
                                    <v-flex xs6>
                                        <v-btn
                                            large
                                            block
                                            flat
                                            color="primary"
                                            @click.prevent="another"
                                        >
                                            Añadir otro
                                        </v-btn>
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
            titulo: '',
            descripcion: '',
            valor: ''
        },
        generales: [v => !!v || 'Este campo es requerido']
    }),
    methods: {
        store() {
            const url = '/api/v1/servicios/store'

            this.formulario.valor = this.formulario.valor.toFixed(2)

            const params = Object.assign({}, this.formulario)

            axios.post(url, params).then(() => {
                this.success = true
            })
        },
        another() {
            this.$refs.formservicio.reset()
            this.success = false
        }
    }
}
</script>

<style></style>
