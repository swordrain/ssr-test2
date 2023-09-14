// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@vant/nuxt', '@pinia/nuxt'],
  routeRules: {
    '/': { redirect: '/home' },
  },
  app: {
    head: {
      charset: 'utf-8',
      title: 'VFANS',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
})
