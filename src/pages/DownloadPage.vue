<script setup lang="ts">
import { computed } from 'vue';
import { useBrowserUtil } from '@/composables';
import BasePage from '@/components/base/BasePage.vue';
import InfoCard from '@/components/cards/InfoCard.vue';
import DownloadCard from '@/components/cards/DownloadCard.vue';

const { getCurrentBrowser, getAllBrowsers } = useBrowserUtil()

const allBrowsers = getAllBrowsers();
const currentBrowser = getCurrentBrowser();

const browsers = computed(() => {
  const browsers = allBrowsers.slice();

  // sort browsers so that the current browser is first
  const currentBrowserIndex = browsers.findIndex(browser => browser.name === currentBrowser?.name);
  browsers.unshift(browsers.splice(currentBrowserIndex, 1)[0]);

  // sort browsers so that the supported browsers are first
  browsers.sort((a, b) => {
    if (a.download && !b.download) return -1;
    if (!a.download && b.download) return 1;
    return 0;
  });

  return browsers;
});

</script>

<template>
  <base-page title="Download">
    <v-row>
      <v-col class="text-center">
        <h2>Supported browsers</h2>
      </v-col>

      <v-divider class="border-opacity-0" />

      <v-col class="text-center">
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
        v-for="browser in browsers"
        :key="browser.name"
        md="4">
        <download-card :browser="browser" />
      </v-col>
    </v-row>
  </base-page>
</template>