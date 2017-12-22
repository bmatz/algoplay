'use strict';

module.exports = (e) => {
	let summe = 0;
	for (let i = 0; i < e.length; i++) {
		summe += e[i];
	}
	return summe;
};
