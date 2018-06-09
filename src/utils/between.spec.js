const between = require('./between');

test('returns empty array if predicateStart is never true', () => {
	expect(between(
		() => false,
		() => false,
		[
			'line 1',
			'line 2'
		]
	)).toEqual([]);
});

test('returns subset after predicateStart is true and predicateEnd is never true', () => {
	expect(between(
		line => line === 'foo',
		() => false,
		[
			'foo',
			'bar',
			'qux'
		]
	)).toEqual([
		'bar',
		'qux'
	]);
});

test('returns subset between predicateStart and predicateEnd', () => {
	expect(between(
		line => line === 'foo',
		line => line === 'qux',
		[
			'foo',
			'bar',
			'qux'
		]
	)).toEqual([
		'bar'
	]);
});
