#!/usr/bin/env node
import getStdin from 'get-stdin';
import meow from 'meow';
import toSingleQuotes from 'to-single-quotes';

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
	(async () => {
		init(await getStdin());
	})();
}
