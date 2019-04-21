import {expectType} from 'tsd';
import latestSemver = require('.');

expectType<string | undefined>(
	latestSemver(['v1.8.0-alpha.1', 'v1.3.16', 'v1.7.0', 'v1.6.9'])
);
