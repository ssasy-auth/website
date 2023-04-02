<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNav from './components/AppNav.vue';
import AppFooter from './components/AppFooter.vue';
</script>

<template>
  <v-app>
    <app-nav />
    
    <v-main>
      <v-row justify="center">
        <v-col cols="11" md="9">
          <router-view />
        </v-col>
      </v-row>
    </v-main>

    <app-footer />
  </v-app>
</template>
