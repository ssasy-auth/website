import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  const dark = ref(false)

  function toggle() {
    dark.value = !dark.value
  }

  return {
    dark,
    toggle
  }
})