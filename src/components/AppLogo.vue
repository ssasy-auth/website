<script setup lang="ts">
import BaseImage from './base/BaseImage.vue';
import AppLogo from '@/assets/images/logo.svg';

const props = defineProps({
  nameSize: {
    type: String,
    default: '2rem'
  },
  logoSize: {
    type: String,
    default: '50px'
  },
  showCopyright: {
    type: Boolean,
    default: false
  },
  hideLogo: {
    type: Boolean,
    default: false
  },
  hideName: {
    type: Boolean,
    default: false
  },
  hideBrandStyle: {
    type: Boolean,
    default: false
  }
});

</script>

<template>
  <v-row
    align='center'
    justify="center">
    <v-col
      v-if="!props.hideLogo"
      id="logo-image"
      cols="auto">
      <base-image
        v-if="!props.hideLogo"
        :src="AppLogo"
        :height="props.logoSize"
        alt="ssasy logo"/>
    </v-col>

    <v-col
      v-if="!props.hideName"
      id="logo-name"
      cols="auto"
      :style="`font-size: ${props.nameSize}; font-weight: ${props.showCopyright ? 'normal' : 'bold'};`">
      <code
        :class="props.hideBrandStyle ? '' : 'brand'"
        style="color: inherit;">SSASY</code>

      <span v-if="props.showCopyright"> &copy; 2023</span>
    </v-col>
  </v-row>
</template>
