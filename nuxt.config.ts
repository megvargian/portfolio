// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts', "@nuxtjs/tailwindcss", 'nuxt-icon', 'nuxt-particles'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      }
    }
  },
  googleFonts: {
    preload: true,
    families: {
      "Hanken Grotesk": true
    }
  }
})