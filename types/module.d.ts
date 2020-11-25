import type { Collection, ItemData } from '@eloqjs/collection'
import type { Module } from '@nuxt/types'

export interface ModuleOptions {
  fresh?<T extends ItemData>({
    collection,
    include
  }: {
    collection: Collection<T>
    include: string[]
  }): Promise<T[] | Collection<T>>

  primaryKey?<T extends ItemData>({
    collection
  }: {
    collection: Collection<T>
  }): string

  toQuery?<T extends ItemData>({
    collection,
    item
  }: {
    collection: Collection<T>
    item: T
  }): T
}

export const collectionModule: Module<ModuleOptions>
