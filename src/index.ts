import { resolve } from 'path'
import type { Module } from '@nuxt/types'

import type { ModuleOptions } from '../types'

const collectionModule: Module<ModuleOptions> = function (moduleOptions) {
  const options: ModuleOptions = {
    ...this.options.collection,
    ...moduleOptions
  }

  Object.keys(options).forEach(
    (key) => options[key] === undefined && delete options[key]
  )

  this.addPlugin({
    src: resolve(__dirname, '../templates/plugin.js'),
    fileName: 'collection.js',
    options
  })
}

export default collectionModule
export const meta = require('../package.json')
