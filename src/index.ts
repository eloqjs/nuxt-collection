// eslint-disable-next-line
import { resolve } from 'path'
import { Collection } from '@eloqjs/collection'
import type { Module } from '@nuxt/types'

import type { ModuleOptions } from '../types'

const collectionModule: Module<ModuleOptions> = function (moduleOptions) {
  Collection.config = {
    ...this.options.collection,
    ...moduleOptions
  }

  this.addPlugin({
    src: resolve(__dirname, '../templates/plugin.js'),
    fileName: 'collection.js'
  })
}

export default collectionModule
export const meta = require('../package.json')
