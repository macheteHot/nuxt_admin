const isProduction = process.env.NODE_ENV === 'production'
const development = {
  apiURL: '/apis', // api 地址
  mobileURL: '' // 手机端地址
}
const production = {
  apiURL: '/api',
  mobileURL: ''
}

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no'
      },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    { src: '~assets/scss/reset.scss', lang: 'scss' },
    // 浏览器自带样式重置
    { src: '~assets/scss/style.scss', lang: 'scss' },
    // 优化 element 样式
    { src: '~assets/scss/optimisedElement.scss', lang: 'scss' }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // $apis 注入到 vue this中
    '@/plugins/apis',
    '@/plugins/element-ui',
    // 自定义指定 v-dialogDrag 弹窗拖拽
    '@/plugins/directive',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/proxy'
    // Doc: https://axios.nuxtjs.org/usage
  ],
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      config.devtool = 'nosources-source-map'
    },
  },
  env: {
    config: isProduction ? production : development
  },
  proxy: {
    '/api': {
      target: 'http://localhost:4000',
      pathRewrite: {
        '^/api' : '/',
        changeOrigin: true
      }
    }
  }
}
