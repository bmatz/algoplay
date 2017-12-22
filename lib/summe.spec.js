'use strict';

const summe = require('./summe');

describe('berechne summe', () => {
    it('mit erster summen funktion', () => {
        expect(summe([1, 2, 3, 4, 5])).toEqual(15);
    });
    it('mit erster summen funktion, mit anderen params', () => {
        expect(summe([1, 2, 3, 4, 5, 6])).toEqual(21);
    });
});
