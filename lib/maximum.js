'use strict';

module.exports.maximumSimpel = (values) => {
	let maximum = 0;
	for (let i = 0; i < values.length; i++) {
		if (values[i] > maximum) {
			maximum = values[i];
		}
	}
	return maximum;
};

module.exports.maximumBesser = values => Math.max(...values);
