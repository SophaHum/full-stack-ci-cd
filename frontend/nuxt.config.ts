// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui'
  ],
  app: {
    head: {
      title: 'Full Stack App',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Full Stack Application with CI/CD' }
      ]
    }
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || 'http://localhost:3000/api'
    }
  }
})
