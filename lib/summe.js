'use strict';

const R = require('ramda');

module.exports.summeSimpel = (values) => {
	let summe = 0;
	for (let i = 0; i < values.length; i++) {
		summe += values[i];
	}
	return summe;
};

module.exports.summeBesser = (values) => {
	const summe = values.reduce((total, current) => total + current, 0);
	return summe;
};

module.exports.summeRamda = values => R.sum(values);

module.exports.summeRamdaAddStandardReduce = values => values.reduce(R.add);
