#!/usr/bin/env node

const minimist = require('minimist');
const mdinject = require('./mdinject');

const {
	_: [markdownFilePath],
	eol: endOfLine,
	trim: trimLeadingWhitespace
} = minimist(process.argv.slice(2));

mdinject(markdownFilePath, {endOfLine, trimLeadingWhitespace}).then(result => process.stdout.write(result));
