import { computed } from 'vue';
import { useTheme as useVuetifyTheme } from 'vuetify/lib/framework.mjs';
import { useThemeStore } from '@/stores';

export function useTheme() {
  const themeStore = useThemeStore();
  const vuetifyTheme = useVuetifyTheme();

  const darkMode = computed<boolean>(() => {
    return themeStore.dark;
  })
  
  function setDarkMode(value: boolean) {
    themeStore.dark = value;
    vuetifyTheme.global.name.value = value ? 'dark' : 'light';
  }

  return {
    darkMode,
    setDarkMode
  };
}