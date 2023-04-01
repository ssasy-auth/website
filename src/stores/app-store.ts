import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', () => {
  const visible = ref(false)

  function toggle() {
    visible.value = !visible.value
  }

  return {
    visible,
    toggle
  }
})

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