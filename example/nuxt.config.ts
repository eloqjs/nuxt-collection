import { NuxtConfig } from '@nuxt/types'

import collectionModule from '../src/index'

const config: NuxtConfig = {
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/tailwindcss'],
  modules: [collectionModule],
  collection: {
    newQuery: ({ item }) => {
      return item
    }
  }
}

export default config
