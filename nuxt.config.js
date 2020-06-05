
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Otvorite parlamente',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Podpiši za otvaranje Parlamentarne skupštini Bosne i Hercegovine, Parlamenta Federacije BiH i Narodne skupštine Republike Srpske.' },
      { property: 'og:image', content: 'https://imgur.com/a/xBRacq3' },
      { property: 'ogs:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:title', content: 'Otvorite parlamente' },
      { property: 'og:description', content: 'Podpiši za otvaranje Parlamentarne skupštini Bosne i Hercegovine, Parlamenta Federacije BiH i Narodne skupštine Republike Srpske.' },
      { property: 'twitter:card', content: 'summary' },
      { property: 'twitter:title', content: 'Otvorite parlamente' },
      { property: 'twitter:description', content: 'Podpiši za otvaranje Parlamentarne skupštini Bosne i Hercegovine, Parlamenta Federacije BiH i Narodne skupštine Republike Srpske.' }
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
  },
  modern: true
}
