'use strict';

const { averageSimpel, averageBesser } = require('./average');

describe('berechne durchschnitt', () => {
	it('mit simpler average funktion', () => {
		expect(averageSimpel([1, 2, 28, 3, 4, 10])).toEqual(8);
	});
	it('mit simpler average funktion, mit anderen params', () => {
		expect(averageSimpel([1, 3, 2])).toEqual(2);
	});

	it('mit besserer average summen funktion', () => {
		expect(averageBesser([10, 20, 280, 30, 40, 100])).toEqual(80);
	});
	it('mit besserer average summen funktion, mit anderen params', () => {
		expect(averageBesser([10, 30, 20])).toEqual(20);
	});
});
