import { collect, Collection } from '@eloqjs/collection'

const options = <%= serialize(options) %>

Collection.config = options

export default function (_context, inject) {
  inject('collect', collect)
}
