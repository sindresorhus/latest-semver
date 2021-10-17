/**
Get the latest stable [semver](https://semver.org) version from an array of versions.

Non-semver versions and prereleases are ignored.

@example
```
import latestSemver from 'latest-semver';

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
*/
export default function latestSemver(versions: readonly string[]): string | undefined;
