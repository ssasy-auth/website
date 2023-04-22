<script setup lang="ts">
import { ref } from 'vue';
import BaseCard from '@/components/base/BaseCard.vue';
import BaseLink from '@/components/base/BaseLink.vue';
import BaseImage from '@/components/base/BaseImage.vue';
import BaseBtn from '@/components/base/BaseBtn.vue';
import type { Browser } from '@/composables';
import type { PropType } from 'vue';

const props = defineProps({
  browser: {
    type: Object as PropType<Browser>,
    required: true
  }
})

const browser = ref<Browser>(props.browser)

</script>

<template>
  <base-link
    v-if="browser.download"
    :href="browser.download"
    target="_blank"
    rel="noopener noreferrer"
    class="hide-link">
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
          block
          large>
          Download
        </base-btn>
      </v-card-actions>
    </base-card>
  </base-link>

  <base-card
    v-else
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
        large
        block
        disabled>
        Coming soon...
      </base-btn>
    </v-card-actions>
  </base-card>
</template>