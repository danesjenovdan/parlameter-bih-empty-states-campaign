
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { property: 'og:image', content: 'https://imgur.com/a/xBRacq3' },
      { property: 'ogs:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://cdn.ba.parlameter.si/v1/parlassets/icons/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;900&display=swap' },
      { rel: 'stylesheet', href: 'https://unpkg.com/aos@next/dist/aos.css' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: ['@/assets/style/main.scss'],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/aos.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
