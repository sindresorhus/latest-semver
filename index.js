import toSemver from 'to-semver';

export default function latestSemver(versions) {
	return toSemver(versions, {includePrereleases: false})[0];
}
