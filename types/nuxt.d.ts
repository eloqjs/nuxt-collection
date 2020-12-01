import type { Collection, ItemData } from '@eloqjs/collection'

import type { ModuleOptions } from './module'
export * from '@eloqjs/collection'

declare module '@nuxt/types' {
  interface Context {
    $collect<Item extends ItemData>(collection: Item[]): Collection<Item>
    $collect<Item extends ItemData>(...items: Item[]): Collection<Item>
  }

  interface NuxtAppOptions {
    $collect<Item extends ItemData>(collection: Item[]): Collection<Item>
    $collect<Item extends ItemData>(...items: Item[]): Collection<Item>
  }

  interface Configuration {
    collection?: ModuleOptions
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $collect<Item extends ItemData>(collection: Item[]): Collection<Item>
    $collect<Item extends ItemData>(...items: Item[]): Collection<Item>
  }
}

declare module 'vuex/types/index' {
  interface Store {
    $collect<Item extends ItemData>(collection: Item[]): Collection<Item>
    $collect<Item extends ItemData>(...items: Item[]): Collection<Item>
  }
}
