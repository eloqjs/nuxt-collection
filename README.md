# nuxt-collection

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> Nuxt module for ELOQJS Collection.

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `@eloqjs/nuxt-collection` dependency to your project

```bash
yarn add nuxt-collection # or npm install nuxt-collection
```

2. Add `@eloqjs/nuxt-collection` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    '@eloqjs/nuxt-collection',

    // With options
    ['@eloqjs/nuxt-collection', { /* module options */ }]
  ]
}
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) João Pedro Antunes Silva <joao-pedroas@hotmail.com>

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-collection/latest.svg
[npm-version-href]: https://npmjs.com/package/nuxt-collection

[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-collection.svg
[npm-downloads-href]: https://npmjs.com/package/nuxt-collection

[github-actions-ci-src]: https://github.com/eloqjs/nuxt-collection/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/eloqjs/nuxt-collection/actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/github/eloqjs/nuxt-collection.svg
[codecov-href]: https://codecov.io/gh/eloqjs/nuxt-collection

[license-src]: https://img.shields.io/npm/l/nuxt-collection.svg
[license-href]: https://npmjs.com/package/nuxt-collection
