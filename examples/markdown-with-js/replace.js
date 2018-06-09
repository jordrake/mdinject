const replace = require('./replace');

describe('replace', () => {
	it('should replace text in a string', () => {
		// mdinject-start replace
		expect(
			replace('foobar', 'bar', 'qux')
		).toBe('fooqux');
		// mdinject-end replace
	});
});
