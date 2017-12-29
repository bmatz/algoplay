'use strict';

const R = require('ramda');

module.exports.addToList = (recentList, item) => {
	if (!recentList || !item) {
		throw new Error('missing params!');
	}

	// mach aus recentlist ein array das nach order sortier ist
	const ids = Object.keys(recentList);
	// const items = recentList[item.id]
	console.log('current ids', ids);

	const array = [];
	ids.forEach((id) => {
		array.push(recentList[id]);
	});
	console.log('arrayyyy : ', array);
	console.log('ramda yay: ', R.values(recentList));
	// if (recentList[item.order]) {
	// }
	const newList = {
		[item.id]: {
			id: item.id,
			name: item.name,
			order: 0,
		},
	};
	const result = Object.assign(recentList, newList);
	// console.log(newList[item.id]);
	return result;
};
