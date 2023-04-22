<script setup lang="ts">
import { useBrowserUtil } from '@/composables';
import BasePage from '@/components/base/BasePage.vue';
import InfoCard from '@/components/cards/InfoCard.vue';
import DownloadCard from '@/components/cards/DownloadCard.vue';

const { getCurrentBrowser, getSupportedBrowsers } = useBrowserUtil()

const supportedBrowsers = getSupportedBrowsers();
const currentBrowser = getCurrentBrowser();

</script>

<template>
  <base-page title="Download">
    <v-row justify="center">
      <v-col class="text-center">
        <h2>Supported browsers</h2>
      </v-col>

      <v-divider class="border-opacity-0" />

      <v-col
        class="text-center"
        cols="auto">
        <info-card v-if="!currentBrowser?.download">
          <p>
            It seems like your browser is not supported :(
          </p>
          
          <br>
          
          <p>
            Please download a supported browser to use this extension.
          </p>
        </info-card>
      </v-col>

      <v-divider class="border-opacity-0" />

      <v-col
        v-for="browser in supportedBrowsers"
        :key="browser.name"
        md="4">
        <download-card :browser="browser" />
      </v-col>
    </v-row>
  </base-page>
</template>