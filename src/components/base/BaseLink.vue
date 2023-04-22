<script setup lang="ts">

const props = defineProps({
  href: {
    type: String,
    required: true
  },
  target: {
    type: String,
    default: '_blank'
  },
  showStyle: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <a
    :href="props.href"
    :target="props.target"
    rel="noopener noreferrer"
    :class="props.showStyle ? '' : 'hide-link'">
    <slot></slot>
  </a>
</template>