'use strict';

const { maximumSimpel, maximumBesser } = require('./maximum');

describe('berechne maximum', () => {
	it('mit simpler maximum funktion', () => {
		expect(maximumSimpel([1, 2, 28, 3, 4, 5])).toEqual(28);
	});
	it('mit simpler maximum funktion, mit anderen params', () => {
		expect(maximumSimpel([1, 31, 2, 3, 4, 5, 6])).toEqual(31);
	});

	it('mit besserer maximum summen funktion', () => {
		expect(maximumBesser([1, 2, 28, 3, 4, 5])).toEqual(28);
	});
	it('mit besserer maximum summen funktion, mit anderen params', () => {
		expect(maximumBesser([1, 31, 2, 3, 4, 5, 6])).toEqual(31);
	});
});
