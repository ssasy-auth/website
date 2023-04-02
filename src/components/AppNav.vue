<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useDisplay } from 'vuetify';
import { Bridge } from '@ssasy-auth/extension';
import AppLogo from '@/components/AppLogo.vue';
import DemoBtn from '@/components/buttons/DemoBtn.vue';
import DownloadBtn from '@/components/buttons/DownloadBtn.vue';

const { smAndDown } = useDisplay();

const extensionInstalled = ref<boolean>(false);

onMounted(async () => {
  extensionInstalled.value = await Bridge.isExtensionInstalled();
});
</script>

<template>
  <v-app-bar app flat color="transparent" class="bar-container">
    <router-link class="bar-logo hide-link mt-2 pa-1" to="/">
      <app-logo />
    </router-link>

    <v-spacer />

    <div v-if="!smAndDown">
      <demo-btn v-if="extensionInstalled"/>
      <download-btn v-else />
    </div>
  </v-app-bar>
</template>

<style scoped>
.bar-container {
  position: relative;
}

.bar-logo {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

@media (min-width: 601px) {
  .bar-container {
    position: inherit;
    padding-left: 50px;
    padding-right: 50px;
  }

  .bar-logo {
    position: inherit;
    left: inherit;
    transform: none;
  }
}</style>