<script setup lang="ts">
import { useDisplay } from 'vuetify/lib/framework.mjs';
import BaseImage from './base/BaseImage.vue';
import AppLogo from '@/assets/images/logo.svg';

const { mdAndUp } = useDisplay();
</script>

<template>
  <v-row align='center'>
    <v-col id="logo-image">
      <base-image
        :src="AppLogo"
        alt="ssasy logo"
        height="50px" />
    </v-col>

    <v-col
      v-if="mdAndUp"
      id="logo-name">
      <code
        class="brand"
        style="color: inherit;">ssasy</code>
    </v-col>
  </v-row>
</template>

<style scoped>
#logo-name {
  font-size: 2rem;
  font-weight: bold;
}
</style>