import test from 'ava';
import execa from 'execa';

test('main', async t => {
	const {stdout} = await execa('./cli.js', ['"unicorn"']);
	t.is(stdout, '\'unicorn\'');
});

test('stdin', async t => {
	const {stdout} = await execa('./cli.js', {input: '"unicorn"'});
	t.is(stdout, '\'unicorn\'');
});
