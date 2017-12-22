'use strict';

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
