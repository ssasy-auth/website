<script setup lang="ts">
import { useDisplay } from 'vuetify/lib/framework.mjs';
import BaseImage from './base/BaseImage.vue';
import LogoImage from '@/assets/images/logo.svg'

interface Links {
  name: string;
  url: string;
}

const links: Links[] = [
  {
    name: 'Demo',
    url: 'https://demo.ssasy.net'
  },
  {
    name: 'Github',
    url: 'https://github.com/ssasy-auth'
  }
]

const { smAndDown } = useDisplay();

</script>

<template>
  <v-footer
    id="foot"
    app
    absolute>
    <v-row :class="`pa-1 ${smAndDown ? 'text-center' : '' }`">
      <!-- ssasy -->
      <v-col
        cols="11"
        md="3"
        order="2"
        order-md="1">
        <base-image
          :src="LogoImage"
          alt="ssasy logo"
          height="20px"
          class="mx-1" />
        <span class="mx-1">&copy; 2023 <code class="brand">ssasy</code></span>
      </v-col>

      <!-- links -->
      <v-col
        cols="11"
        md="auto"
        order="1"
        order-md="2">
        <v-row>
          <v-col
            v-for="link in links"
            :key="link.name"
            cols="12"
            md="auto">
            <a
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="mx-1">
              {{ link.name }}
            </a>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-footer>
</template>

<style scoped>
#foot{
  min-height: 200px;
  padding-top: 25px;
}

ul {
  list-style-type: none;
  padding: 0;
}
</style>