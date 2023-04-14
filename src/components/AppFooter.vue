<script setup lang="ts">
import { useDisplay } from 'vuetify/lib/framework.mjs';

interface Links {
  name: string;
  url: string;
}

const links: Links[] = [
  {
    name: 'Github',
    url: 'https://github.com/ssasy-auth'
  },
  {
    name: 'Docs',
    url: 'https://github.com/ssasy-auth/core#readme'
  },
  {
    name: 'Try Demo',
    url: 'https://demo.ssasy.net'
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
        <code
          class="brand"
          style="padding-bottom: 15px;">ssasy</code> &copy; 2023
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