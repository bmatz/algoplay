'use strict';

const { addToList, addToListV4 } = require('./recentList');
// addToList handles a list of max 5 items (shoudd return max 5 items)
// with addToList(list, item) the item is added at the top of the list,
// if it already exists (identified by id) it will also be moved to the top
// an list will be an object with the items indexed by their id
// to handle a correct order in an index based object of items it is necessary
// to save the current position value in the added items (property order)
// an item will look like this
/*
    const item = {
        id: 123,
        name: 'foobar',
    }
*/

// getOrderedList will return the list ordered by their recently added position order
const item = {
	id: 123,
	name: 'foobar',
};
const item2 = {
	id: 234,
	name: 'Samus Aran',
};

const item3 = {
	id: 345,
	name: 'Gandalf',
};
describe('recent list', () => {
	it('adds item on the top of the list', () => {
		const result = addToList({}, item);
		expect(result).toEqual({
			123: {
				id: 123,
				name: 'foobar',
				order: 0,
			},
		});
	});
	it('readds item on top of the list and removes the other one', () => {
		const result = addToList({}, item);
		const result2 = addToList(result, item);
		expect(result2).toEqual({
			123: {
				id: 123,
				name: 'foobar',
				order: 0,
			},
		});
	});
	it('adds item on top even if other items exist', () => {
		const result = addToListV4({}, item2);
		const result2 = addToListV4(result, item);
		const result3 = addToListV4(result2, item3);
		expect(result3).toEqual({
			123: {
				id: 123,
				name: 'foobar',
				order: 1,
			},
			345: {
				id: 345,
				name: 'Gandalf',
				order: 0,
			},
			234: {
				id: 234,
				name: 'Samus Aran',
				order: 2,
			},
		});
	});
	it('readds item on top', () => {
		const result = addToList({}, item2);
		const result2 = addToList(result, item);
		const result3 = addToList(result2, item2);

		expect(result3).toEqual({
			123: {
				id: 123,
				name: 'foobar',
				order: 1,
			},
			234: {
				id: 234,
				name: 'Samus Aran',
				order: 0,
			},
		});
	});
	// it('adds maximal 5 items to list', () => {});
});
