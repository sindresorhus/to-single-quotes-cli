import childProcess from 'child_process';
import test from 'ava';

test('main', t => {
	childProcess.execFile('./cli.js', ['"unicorn"'], {
		cwd: __dirname
	}, (err, stdout) => {
		t.ifError(err);
		t.is(stdout.trim(), '\'unicorn\'');
		t.end();
	});
});

test('stdin', t => {
	childProcess.exec('echo \'"unicorn"\' | ./cli.js', {
		cwd: __dirname
	}, (err, stdout) => {
		t.ifError(err);
		t.is(stdout.trim(), '\'unicorn\'');
		t.end();
	});
});
