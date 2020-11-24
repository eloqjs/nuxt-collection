import { resolve } from 'path'
import type { Module } from '@nuxt/types'

import type { ModuleOptions } from '../types'
import defaults from './defaults'

const collectionModule: Module<ModuleOptions> = function (moduleOptions) {
  const options: ModuleOptions = {
    ...defaults,
    ...this.options.collection,
    ...moduleOptions
  }

  this.addPlugin({
    src: resolve(__dirname, '../templates/plugin.js'),
    fileName: 'collection.js',
    options
  })
}

export default collectionModule
export const meta = require('../package.json')
