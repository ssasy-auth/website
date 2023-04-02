<script setup lang="ts">
import { useExtenralWebsite } from '@/composables';
import BaseBtn from '@/components/base/BaseBtn.vue';
import BaseImage from '@/components/base/BaseImage.vue';
import LogoImage from '@/assets/images/logo.svg';

const DEMO_URL = 'https://demo-client-3hla6.ondigitalocean.app/';

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

</script>

<template>
  <base-btn
    large
    :color="props.color"
    :block="props.block"
    @click="sendTo(DEMO_URL)">
    Try demo
    <base-image
      :src="LogoImage"
      alt="app logo"
      height="20px"
      class="mx-1" />
  </base-btn>
</template>
