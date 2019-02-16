<template>
    <v-toolbar class="blue-grey darken-3" dark dense>
        <v-toolbar-items>
            <v-btn :to="{ name: 'servicios' }" flat>
                Servicios
            </v-btn>
            <v-btn :to="{ name: 'repuestos' }" flat>
                Repuestos
            </v-btn>
            <v-btn :to="{ name: 'clientes' }" flat>
                Clientes
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
    name: 'Toolbar'
}
</script>

<style></style>
