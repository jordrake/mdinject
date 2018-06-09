const trimAll = require('./trim-all');

test('removes leading whitespace equal to the smallest amount of whitespace', () => {
	const lines = [
		'       i have a lot of whitespace',
		'             but i have a bit more',
		'       i have the same starting amount of whitespace',
		'    but i have the smallest amount of whitespace'
	];

	expect(trimAll(lines)).toEqual([
		'   i have a lot of whitespace',
		'         but i have a bit more',
		'   i have the same starting amount of whitespace',
		'but i have the smallest amount of whitespace'
	]);
});

test('handles strings that are only whitespace', () => {
	const lines = [
		'    ',
		'         foo',
		'         bar'
	];

	expect(trimAll(lines)).toEqual([
		'',
		'foo',
		'bar'
	]);
});
