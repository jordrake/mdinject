const util = require('util');
const fs = require('fs');
const glob = require('glob');
const mdinject = require('./mdinject');

const readFilePromise = util.promisify(fs.readFile);
const globPromise = util.promisify(glob);

function example(exampleFolder, options) {
	test(exampleFolder, async () => {
		const inPathPromise = globPromise(`examples/${exampleFolder}/in?(.*)`);
		const outPathPromise = globPromise(`examples/${exampleFolder}/out?(.*)`);

		const [[inPath], [outPath]] = await Promise.all([inPathPromise, outPathPromise]);

		const expectedPromise = readFilePromise(outPath, 'utf8');
		const actualPromise = mdinject(inPath, options);

		const [expected, actual] = await Promise.all([expectedPromise, actualPromise]);

		expect(actual).toEqual(expected);
	});
}

example('basic');
example('multiple-files');
example('interleaved');
example('markdown-with-js');
example('unused-tags');
example('no-trim', {trimLeadingWhitespace: false});
example('custom-eol', {endOfLine: 'eol'});
