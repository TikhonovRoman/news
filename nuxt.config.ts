// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css:[
        '~/assets/css/main.css'
    ],
    modules: [
      // pinia plugin
      '@pinia/nuxt',
    ],
    imports: {
      dirs: ['./stores'],
    },
    pinia: {
      autoImports: ['defineStore', 'mapStores', 'acceptHMRUpdate'],
    },
    
})
