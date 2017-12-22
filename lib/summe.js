'use strict';

module.exports = (values) => {
	let summe = 0;
	for (let i = 0; i < values.length; i++) {
		summe += values[i];
	}
	return summe;
};
