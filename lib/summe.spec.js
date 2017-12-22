'use strict';

const { summeSimpel, summeBesser } = require('./summe');

describe('berechne summe', () => {
	it('mit simpler summen funktion', () => {
		expect(summeSimpel([1, 2, 3, 4, 5])).toEqual(15);
	});
	it('mit simpler summen funktion, mit anderen params', () => {
		expect(summeSimpel([1, 2, 3, 4, 5, 6])).toEqual(21);
	});

	it('mit besserer summen funktion', () => {
		expect(summeBesser([1, 2, 3, 4, 5])).toEqual(15);
	});
	it('mit besserer summen funktion, mit anderen params', () => {
		expect(summeBesser([1, 2, 3, 4, 5, 6])).toEqual(21);
	});
});
