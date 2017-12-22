'use strict';

const dummy = require('./dummy');

describe('dummy', () => {
	it('should be 1', () => {
		expect(dummy()).toEqual(1);
	});
});
