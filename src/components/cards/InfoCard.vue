<script setup lang="ts">
import BaseCard from '@/components/base/BaseCard.vue';

const props = defineProps({
  icon: {
    type: String,
    default: undefined
  },
  title: {
    type: String,
    default: undefined
  },
  content: {
    type: String,
    default: undefined
  }
})
</script>

<template>
  <base-card tonal>
    <v-row
      justify="center"
      class="pa-1">
      <v-col cols="1">
        <slot name="icon">
          <v-icon :icon="props.icon ? props.icon : 'mdi-information-outline' " />
        </slot>
      </v-col>

      <v-col>
        <slot>
          <b>{{ props.title }}</b>
          <p>{{ props.content }}</p>
        </slot>
      </v-col>
    </v-row>
  </base-card>
</template>