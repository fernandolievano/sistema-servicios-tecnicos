<template>
    <div>
        <v-tabs
            v-model="active"
            color="transparent"
            centered
            icons-and-text
            light
            slider-color="green darken-2"
        >
            <v-tab>Lista de Repuestos <v-icon>memory</v-icon></v-tab>
            <v-tab>Nuevo Repuesto <v-icon>add</v-icon></v-tab>
        </v-tabs>
        <v-tabs-items v-model="active">
            <v-tab-item>
                <index-repuestos></index-repuestos>
            </v-tab-item>
            <v-tab-item>
                <nuevo-repuesto></nuevo-repuesto>
            </v-tab-item>
        </v-tabs-items>
    </div>
</template>

<script>
export default {
    name: 'Repuestos',
    components: {
        IndexRepuestos: () => import('./RepuestosIndex.vue'),
        NuevoRepuesto: () => import('./RepuestoNuevo.vue')
    },
    data: () => ({
        active: 0
    })
}
</script>

<style></style>
