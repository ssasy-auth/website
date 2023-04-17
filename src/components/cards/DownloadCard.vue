<script setup lang="ts">
import { ref } from 'vue';
import BaseCard from '@/components/base/BaseCard.vue';
import BaseImage from '@/components/base/BaseImage.vue';
import BaseBtn from '@/components/base/BaseBtn.vue';
import { useExtenralWebsite } from '@/composables';
import type { Browser } from '@/composables';
import type { PropType } from 'vue';

const props = defineProps({
  browser: {
    type: Object as PropType<Browser>,
    required: true
  }
})

const browser = ref<Browser>(props.browser)
const { sendTo } = useExtenralWebsite();

</script>

<template>
  <base-card
    flat
    class="text-center">
    <base-image
      :src="browser.logo"
      :alt="`${browser.name} icon`"
      height="50px"
      class="mx-auto" />
          
    <v-card-title>
      {{ browser.name }}
    </v-card-title>

    <v-card-actions>
      <base-btn
        v-if="browser.download"
        block
        large
        @click="sendTo(browser.download)">
        Download
      </base-btn>

      <base-btn
        v-else
        large
        block
        disabled>
        Coming soon...
      </base-btn>
    </v-card-actions>
  </base-card>
</template>