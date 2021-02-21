const { performance } = require("perf_hooks");

const knapsackSolver = {
	size: 0,
	values: [],
	weights: [],
	boundary: 0,
	
	solve: function() {
		const maxBin = "1".repeat(this.size);
		const maxDec = parseInt(maxBin, 2);

		let utility = -1;
		let solution = null;
		let attempts = 0;

		const timeStart = performance.now();

		for (let dec = 1; dec <= maxDec; dec++) {
			const bin = dec.toString(2);
			const prefix = "0".repeat(this.size - bin.length);
			const altStr = prefix + bin;

			const altArr = [];

			for (const i in altStr) {
				altArr.push(parseInt(altStr[i]));
			}
			
			let goal = 0;
			let constraint = 0;

			for (let i = 0; i < altArr.length; i++) {
				goal += altArr[i] * this.values[i];
				constraint += altArr[i] * this.weights[i];
			}

			if (goal > utility && constraint <= this.boundary) {
				utility = goal;
				solution = altArr;
				attempts++;
			}
		}

		const timeEnd = performance.now();

		return { 
			utility: utility, 
			solution: solution, 
			attempts: attempts,
			ms: timeEnd - timeStart
		};
	}
};

module.exports = { knapsackSolver };
