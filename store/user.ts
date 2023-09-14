import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const loggedIn = ref(false)
  return { loggedIn }
})
