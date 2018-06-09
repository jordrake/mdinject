const fs = require('fs');
const path = require('path');
const util = require('util');
const detectNewline = require('detect-newline');
const stringReplace = require('string-replace-async');
const between = require('./utils/between');
const trimAll = require('./utils/trim-all');

const readFilePromise = util.promisify(fs.readFile.bind(fs));

const regex = /^.*mdinject '(.*)' '(.*)'.*$/gm;

function mdinject(markdownFilePath, options = {}) {
	const {
		endOfLine = null,
		trimLeadingWhitespace = true
	} = options;

	const markdownFile = fs.readFileSync(markdownFilePath, 'utf8');
	const eolOfMarkdown = detectNewline(markdownFile);

	return stringReplace(markdownFile, regex, async (match, injectFile, tag) => {
		const contents = await readFilePromise(path.resolve(path.dirname(markdownFilePath), injectFile), 'utf8');

		let lines = between(
			line => line.includes(`mdinject-start ${tag}`),
			line => line.includes(`mdinject-end ${tag}`),
			contents.split(/\r?\n/)
		);

		lines = trimLeadingWhitespace ? trimAll(lines) : lines;

		return lines.join(endOfLine || eolOfMarkdown);
	});
}

module.exports = mdinject;
