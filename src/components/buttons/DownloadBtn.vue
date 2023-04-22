<script setup lang="ts">
import { useBrowserUtil } from '@/composables';
import BaseBtn from '@/components/base/BaseBtn.vue';
import BaseLink from '@/components/base/BaseLink.vue';
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

const { getCurrentBrowser } = useBrowserUtil()
const currentBrowser = getCurrentBrowser();

</script>

<template>
  <!-- supported -->
  <base-link
    v-if="currentBrowser?.download"
    :href="currentBrowser?.download">
    <base-btn
      large
      :color="props.color"
      :block="props.block">
      Download
      <base-image
        v-if="currentBrowser"
        :src="currentBrowser.logo"
        :alt="`${currentBrowser.name} icon`"
        height="20px"
        class="mx-1" />
    </base-btn>
  </base-link>

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
