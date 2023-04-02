<script setup lang="ts">
import { useDisplay } from 'vuetify';
import { useSidebarStore } from '@/stores';
import AppLogo from './AppLogo.vue';

const sidebarStore = useSidebarStore();

const { smAndDown } = useDisplay();

</script>

<template>
  <v-app-bar app flat color="transparent" class="bar-container">
    <v-app-bar-nav-icon v-if="smAndDown" icon="mdi-account-circle" @click="sidebarStore.toggle" />

    <router-link class="bar-logo hide-link mt-2 pa-1" to="/">
      <app-logo />
    </router-link>

    <v-spacer />
  </v-app-bar>
</template>

<style scoped>
@media (max-width: 600px) {
  .bar-container {
    position: relative;
  }

  .bar-logo {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
}

@media (min-width: 601px) {
  .bar-container {
    padding-left: 50px;
  }
}
</style>