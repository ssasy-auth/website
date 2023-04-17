<script setup lang="ts">
import { useBrowserUtil, useExtenralWebsite } from '@/composables';
import BaseBtn from '@/components/base/BaseBtn.vue';
import BaseImage from '@/components/base/BaseImage.vue';

const props = defineProps({
  color: {
    type: String,
    default: 'primary'
  },
  block: {
    type: Boolean,
    default: false
  }
})

const { sendTo } = useExtenralWebsite();
const { getCurrentBrowser } = useBrowserUtil()
const currentBrowser = getCurrentBrowser();

</script>

<template>
  <!-- supported -->
  <base-btn
    v-if="currentBrowser?.download"
    large
    :color="props.color"
    :block="props.block"
    @click="sendTo(currentBrowser?.download)">
    Download
    <base-image
      v-if="currentBrowser"
      :src="currentBrowser.logo"
      :alt="`${currentBrowser.name} icon`"
      height="20px"
      class="mx-1" />
  </base-btn>

  <!-- unsupported -->
  <base-btn
    v-else
    large
    :color="props.color"
    :block="props.block"
    to="/download">
    Download
    <base-image
      v-if="currentBrowser"
      :src="currentBrowser.logo"
      :alt="`${currentBrowser.name} icon`"
      height="20px"
      class="mx-1" />
  </base-btn>
</template>
