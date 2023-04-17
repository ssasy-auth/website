<script setup lang="ts">
import type { PropType } from 'vue';
import type { Instruction } from '@/composables/useMarketing';
import BaseCard from '../base/BaseCard.vue';
import BaseImage from '../base/BaseImage.vue';
import CodeCard from './CodeCard.vue';

const props = defineProps({
  instruction: {
    type: Object as PropType<Instruction>,
    required: true
  },
  index: {
    type: Number,
    default: undefined
  }
});
</script>

<template>
  <v-row align="start">
    <v-col>
      <base-card :outlined="false">
        <h3>
          <span v-if="index !== undefined">{{index}}. </span>
          {{ props.instruction.title }}</h3>
        <p v-html="props.instruction.description"></p>
      </base-card>
    </v-col>

    <v-col
      v-if="props.instruction.code"
      cols="12"
      md="8">
      <code-card :code="props.instruction.code" />
    </v-col>

    <v-col
      v-if="props.instruction.image"
      cols="12"
      md="8">
      <base-image
        :lazy="true"
        :src="props.instruction.image"
        :alt="'Screenshot of SSASY'"
        width="100%" />
    </v-col>
  </v-row>
</template>