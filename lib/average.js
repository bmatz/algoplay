'use strict';

const R = require('ramda');

module.exports.averageSimpel = (values) => {
	let summe = 0;

	for (let i = 0; i < values.length; i++) {
		summe += values[i];
	}
	const average = summe / values.length;
	return average;
};

module.exports.averageBesser = values => R.divide(R.sum(values), values.length);
