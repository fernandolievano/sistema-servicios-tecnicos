<template>
    <v-app>
        <toolbar />
        <v-content>
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
import Toolbar from './partials/Toolbar.vue'

export default {
    components: {
        Toolbar
    }
}
</script>

<style>
.v-content {
    background-image: url('~/images/merely_cubed.png') !important;
    background-repeat: repeat;
}
</style>
