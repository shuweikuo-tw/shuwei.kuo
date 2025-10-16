export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'This is ShuWei',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Open to work.' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' }
      ]
    },
    baseURL: process.env.NODE_ENV === 'production' ? '/shuwei.kuo/' : '/'
  },
  nitro: {
    prerender: {
      routes: ['/experience']
    }
  },
  ssr: false,
  target: 'static'
})