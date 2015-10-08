#!/usr/bin/env node
/* eslint-disable no-mixed-spaces-and-tabs */
'use strict';
const getStdin = require('get-stdin');
const meow = require('meow');
const toSingleQuotes = require('to-single-quotes');

const cli = meow(`
	Usage
	  $ to-single-quotes <string>
	  $ echo <string> | to-single-quotes

	Example
	  $ to-single-quotes 'I love "unicorns"'
	  I love 'unicorns'
`);

function init(data) {
	console.log(toSingleQuotes(data));
}

const input = cli.input[0];

if (!input && process.stdin.isTTY) {
	console.error('String required');
	process.exit(1);
}

if (input) {
	init(input);
} else {
	getStdin().then(init);
}
