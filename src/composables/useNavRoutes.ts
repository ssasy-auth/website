import type { ActionItem } from '@/components/base/BaseCard.vue'

export function useNavRoutes() {
  const getAppOptions: ActionItem[] = [
    { label: 'Download extension', to: '/download' }
  ];

  return { getAppOptions }
}