<script setup lang="ts">
import BaseBtn from '@/components/base/BaseBtn.vue';
import BaseLink from '@/components/base/BaseLink.vue';
import BaseImage from '@/components/base/BaseImage.vue';
import LogoImage from '@/assets/images/logo.svg';

const DEMO_URL = 'https://demo.ssasy.net';

const props = defineProps({
  color: {
    type: String,
    default: 'primary'
  },
  block: {
    type: Boolean,
    default: false
  },
  extraLarge: {
    type: Boolean,
    default: undefined
  }
})

</script>

<template>
  <base-link :href="DEMO_URL">
    <base-btn
      :large="props.extraLarge !== true"
      :extra-large="props.extraLarge === true"
      :color="props.color"
      :block="props.block">
      Try demo
      <base-image
        :src="LogoImage"
        alt="app logo"
        height="20px"
        class="mx-1" />
    </base-btn>
  </base-link>
</template>
