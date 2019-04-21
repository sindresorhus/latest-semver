import test from 'ava';
import latestSemver from '.';

test('main', t => {
	const versions = [
		'v1.3.16',
		'v1.7.0',
		'v1.6.9',
		'v1.6.8',
		'v1.3.15',
		'v1.6.7'
	];

	t.is(latestSemver(versions), '1.7.0');
});

test('no versions', t => {
	t.is(latestSemver([]), undefined);
	t.is(latestSemver(['foo', 'bar']), undefined);
});

test('handles prerelease versions', t => {
	const versions = [
		'1.2.3-alpha.3',
		'1.2.0',
		'1.0.0'
	];

	t.is(latestSemver(versions), '1.2.0');
});
