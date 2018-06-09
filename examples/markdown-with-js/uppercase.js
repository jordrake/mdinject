const toUpperCase = require('./uppercase');

describe('toUpperCase', () => {
	it('should convert all characters to uppercase', () => {
		// mdinject-start uppercase
		expect(toUpperCase('test')).toBe('TEST');
		// mdinject-end uppercase
	});
});
