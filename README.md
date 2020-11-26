# @eloqjs/nuxt-collection

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Code Climate maintainability][code-climate-maintainability-src]][code-climate-maintainability-href]
[![Codecov][codecov-src]][codecov-href]
[![Gitpod ready-to-code][gitpod-src]][gitpod-href]
[![Contributions][contributions-src]][contributions-href]
[![License][license-src]][license-href]

> The collection for your resources. Made specifically to work with arrays of objects from your API Responses.

- [✨ &nbsp;Release Notes](https://collection.eloqjs.com/releases)
- [📖 &nbsp;Read the Documentation](https://collection.eloqjs.com)

## Features
- Made specifically to work with arrays of objects
- Handle objects wrapped in a `data` key
- Extends the Array class
- Names and conventions that makes sense
- Models support, fully compatible with [vue-api-query](https://github.com/robsontenorio/vue-api-query),
  [sarala](https://github.com/milroyfraser/sarala/) and [coloquent](https://github.com/DavidDuwaer/Coloquent)
- Integrable `fresh` and `toQuery`
- TypeScript support

[📖 &nbsp;Read the Documentation](https://collection.eloqjs.com)

## Setup

1. Add `@eloqjs/nuxt-collection` dependency to your project

```bash
yarn add @eloqjs/nuxt-collection # or npm install @eloqjs/nuxt-collection
```

2. Add `@eloqjs/nuxt-collection` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    '@eloqjs/nuxt-collection',

    // With options
    ['@eloqjs/nuxt-collection', { /* module options */ }],
    
    // Module Options
    collection: {}
  ]
}
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## Credits

- 🔥 Inspiration from [Laravel Eloquent Collections](https://laravel.com/docs/eloquent-collections).

- 💎 Based on [collect.js](https://github.com/ecrmnn/collect.js) by [Daniel Eckermann](https://github.com/ecrmnn).
  Thank you so much for your amazing package!

- ❤️ Whoever contributes to this project!

## License

[MIT License](./LICENSE)

Copyright (c) João Pedro Antunes Silva

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@eloqjs/nuxt-collection/latest.svg
[npm-version-href]: https://npmjs.com/package/@eloqjs/nuxt-collection

[npm-downloads-src]: https://img.shields.io/npm/dt/@eloqjs/nuxt-collection.svg
[npm-downloads-href]: https://npmjs.com/package/@eloqjs/nuxt-collection

[github-actions-ci-src]: https://img.shields.io/github/workflow/status/eloqjs/nuxt-collection/Test%20and%20Release?label=actions&logo=github&style=flat-square
[github-actions-ci-href]: https://github.com/eloqjs/nuxt-collection/actions?query=workflow%3ATest%20and%20Release

[code-climate-maintainability-src]: https://img.shields.io/codeclimate/maintainability/eloqjs/nuxt-collection?logo=code-climate&style=flat-square
[code-climate-maintainability-href]: https://codeclimate.com/github/eloqjs/nuxt-collection/maintainability

[codecov-src]: https://img.shields.io/codecov/c/github/eloqjs/nuxt-collection.svg?logo=codecov&style=flat-square
[codecov-href]: https://codecov.io/gh/eloqjs/nuxt-collection

[codecov-src]: https://img.shields.io/codecov/c/github/eloqjs/nuxt-collection.svg
[codecov-href]: https://codecov.io/gh/eloqjs/nuxt-collection

[gitpod-src]: https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod&style=flat-square
[gitpod-href]: https://gitpod.io/#https://github.com/eloqjs/collection

[contributions-src]: https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat-square
[contributions-href]: https://github.com/eloqjs/nuxt-collection/issues

[license-src]: https://img.shields.io/github/license/eloqjs/nuxt-collection?style=flat-square
[license-href]: https://github.com/eloqjs/nuxt-collection/blob/dev/LICENSE.md
