import { Collection, ItemData } from '@eloqjs/collection'
import { getContext, setupTest } from '@nuxt/test-utils'

type Collect = <Item extends ItemData>(collection: Item[]) => Collection<Item>

describe('module', () => {
  let testContext, plugin
  const nuxtContext: {
    $collect: Collect | null
  } = {
    $collect: null
  }

  setupTest({
    testDir: __dirname,
    fixture: 'fixture',
    configFile: 'nuxt.config.ts',
    server: true,
    config: {
      collection: {
        primaryKey: () => 'slug'
      }
    }
  })

  it('should inject plugin', async () => {
    testContext = getContext()

    plugin = (
      await import(testContext.nuxt!.options.buildDir + '/collection.js')
    ).default

    plugin(nuxtContext, (_: any, data: Collect) => {
      nuxtContext.$collect = data
    })

    expect(nuxtContext.$collect).toBeDefined()

    const collection = (nuxtContext.$collect as Collect)([])

    expect(collection).toBeInstanceOf(Collection)
    // @ts-ignore
    expect(collection.primaryKey()).toBe('slug')
  })
})
