<script setup lang="ts">
import { ref, computed } from 'vue'
import { Codemirror } from 'vue-codemirror'
import { oneDark } from '@codemirror/theme-one-dark'
import { javascript } from '@codemirror/lang-javascript'
import type { PropType } from 'vue'
import type { Code } from '@/composables/useMarketing'

const props = defineProps({
  code: {
    type: Object as PropType<Code>,
    required: true
  }
})

const code = ref(props.code.snippet);

const extensions = computed(() => {
  const base = [ oneDark ];

  if(props.code.language === 'javascript'){
    base.push(javascript())
  }

  return base;
})

</script>

<template>
  <codemirror
    v-model="code"
    :disabled="true"
    :tab-size="2"
    :indent-with-tab="true"
    :extensions="extensions"/>
</template>