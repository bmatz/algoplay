'use strict';

const R = require('ramda');

// ramdafiziert-in-der-pfeife-geraucht-PIPE
module.exports.addToListV4 = (recentList, item) => {
	const indexedMap = R.addIndex(R.map);
	return R.pipe(
		R.dissoc(item.id),
		R.values,
		R.sortBy(R.prop('order')),
		R.take(5),
		R.concat([item]),
		indexedMap((value, index) => R.assoc('order', index, value)),
		R.indexBy(R.prop('id')),
	)(recentList);
};

module.exports.addToList = (recentList, item) => {
	if (!recentList || !item) {
		throw new Error('missing params!');
	}
	// mach aus recentlist ein array das nach order sortier ist
	// const ids = Object.keys(recentList);
	// const items = recentList[item.id]
	// console.log('current ids', ids);
	// const array = [];
	// ids.forEach((id) => {
	// 	array.push(recentList[id]);
	// });
	// console.log('das arrrrayyyyy', array[0]);
	// console.log('arrayyyy : ', array);
	// console.log('ramda yay: ', R.values(recentList));
	// if (recentList[item.order]) {
	// }

	// die recentlist in ein array umwandeln
	const itemsArray = R.values(recentList);
	// sortiere das array anhand der orders
	const sortArray = itemsArray.sort((itemA, itemB) => itemA.order > itemB.order);
	// entferne die items ab den indizes 5
	const shortenedArray = sortArray.slice(0, 4);
	// dursuche das array nach der id des items
	const itemIndex = shortenedArray.findIndex(value => item.id === value.id);
	// falls das item vorhanden ist das item aus dem array entfernen
	if (itemIndex > -1) {
		shortenedArray.splice(itemIndex, 1);
	}
	// füge das neue item an der ersten stelle hinzu
	shortenedArray.unshift(item);
	// editiere die order anhand der indizes
	// TODO: WICHHTIG dorchs hirn inhalieren
	// shortenedArray.map((value, index) => {
	// 	return Object.assign({}, value, { order: index });
	// });

	const finalArray = shortenedArray.map((value, index) =>
		Object.assign({}, value, { order: index }));
	// array in ein objekt umwandeln
	const finalObject = {};

	finalArray.forEach((value) => {
		finalObject[value.id] = value;
	});
	return finalObject;
};

// ramdafiziert
module.exports.addToListV3 = (recentList, item) => {
	// die recentlist in ein array umwandeln
	const recentListCopy = R.dissoc(item.id, recentList);
	const itemsArray = R.values(recentListCopy);
	// sortiere das array anhand der orders
	const sortArray = R.sortBy(R.prop('order'), itemsArray);
	// entferne die items ab den indizes 5
	const shortenedArray = R.take(5, sortArray);
	// füge das neue item an der ersten stelle hinzu
	const itemAddedArray = [item, ...shortenedArray];
	// editiere die order anhand der indizes
	const indexedMap = R.addIndex(R.map);
	const finalArray = indexedMap(
		(value, index) => R.assoc('order', index, value),
		itemAddedArray,
	);
	// array in ein objekt umwandeln
	const finalObject = R.indexBy(R.prop('id'), finalArray);

	return finalObject;
};

const myProp = name => item => item[name];
const myAssoc = (name, value, item) => Object.assign({}, item, { [name]: value });
const myDissoc = (name, item) => {
	const newObj = Object.assign({}, item);
	delete newObj[name];
	return newObj;
};
const myIndexBy = (expression, array) => {
	let result = {};
	array.forEach((item) => {
		result = myAssoc(expression(item), item, result);
	});
	return result;
};
const mySort = (sortByFn, array) =>
	array.sort((itemA, itemB) => sortByFn(itemA) > sortByFn(itemB));
const myTake = (max, array) => array.slice(0, max - 1);
const myMap = (iteratorFn, array) => array.map(iteratorFn);

const helpers = {
	assoc: myAssoc,
	dissoc: myDissoc,
	prop: myProp,
	indexBy: myIndexBy,
	sortBy: mySort,
	take: myTake,
	map: myMap,
};
// optimiert
module.exports.addToListV2 = (recentList, item) => {
	// die recentlist in ein array umwandeln
	const recentListCopy = helpers.dissoc(item.id, recentList);
	const itemsArray = R.values(recentListCopy);
	// sortiere das array anhand der orders
	const sortArray = helpers.sortBy(helpers.prop('order'), itemsArray);
	// entferne die items ab den indizes 5
	const shortenedArray = helpers.take(5, sortArray);
	// füge das neue item an der ersten stelle hinzu
	const itemAddedArray = [item, ...shortenedArray];
	// editiere die order anhand der indizes
	const finalArray = helpers.map(
		(value, index) => helpers.assoc('order', index, value),
		itemAddedArray,
	);
	// array in ein objekt umwandeln
	const finalObject = helpers.indexBy(helpers.prop('id'), finalArray);

	return finalObject;
};
