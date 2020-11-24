import { get, loadConfig, setup } from '@nuxtjs/module-test-utils'

describe('module', () => {
  let nuxt: any

  beforeAll(async () => {
    ;({ nuxt } = await setup(loadConfig(__dirname, '../../example')))
  }, 60000)

  afterAll(async () => {
    await nuxt.close()
  })

  test('plugin', async () => {
    const html = await get('/')
    expect(html).toContain('Works!')
  })
})
