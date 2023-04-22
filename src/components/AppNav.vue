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
  <v-app-bar
    app
    flat
    class="bar-container">
    <router-link
      class="bar-logo hide-link mt-2 pa-1"
      to="/">
      <app-logo :hide-name="smAndDown" />
    </router-link>

    <v-spacer />

    <div v-if="!smAndDown">
      <download-btn
        v-if="!extensionInstalled"
        class="mx-1"/>
      <demo-btn class="mx-1"/>
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