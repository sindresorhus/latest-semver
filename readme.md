# latest-semver [![Build Status](https://travis-ci.org/sindresorhus/latest-semver.svg?branch=master)](https://travis-ci.org/sindresorhus/latest-semver)

> Get the latest stable [semver](http://semver.org) version from an array of versions

Can be useful when you have an unsorted list of versions, like git tags, and want to get the semantically latest version.


## Install

```
$ npm install latest-semver
```


## Usage

```js
const latestSemver = require('latest-semver');

latestSemver([
	'v1.8.0-alpha.1',
	'v1.3.16',
	'v1.7.0',
	'v1.6.9'
]);
//=> '1.7.0'

latestSemver([
	'unicorn',
	'v1.8.0-alpha.1'
]);
//=> undefined
```


## API

Non-semver versions and prereleases are ignored.

### latestSemver(versions)

#### versions

Type: `string[]`


## Related

- [to-semver](https://github.com/sindresorhus/to-semver) - Get an array of valid, sorted, and cleaned semver versions from an array of strings
- [semver-regex](https://github.com/sindresorhus/semver-regex) - Regular expression for matching semver versions
- [semver-diff](https://github.com/sindresorhus/semver-diff) - Get the diff type of two semver versions: `0.0.1` `0.0.2` → `patch`
- [semver-truncate](https://github.com/sindresorhus/semver-truncate) - Truncate a semver version: `1.2.3` → `1.2.0`


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
