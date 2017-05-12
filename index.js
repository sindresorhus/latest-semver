'use strict';
const toSemver = require('to-semver');

module.exports = versions => toSemver(versions, {includePrereleases: false})[0];
