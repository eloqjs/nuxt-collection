import { collect, Collection } from '@eloqjs/collection'

const options = <%= serialize(options) %>

Collection.getFresh = options.getFresh
Collection.newQuery = options.newQuery
Collection.primaryKey = options.primaryKey

export default function (_context, inject) {
  inject('collect', collect)
}
