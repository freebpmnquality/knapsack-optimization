const { knapsackSolver } = require("./knapsack.js");

const values = [3, 5, 4, 2];
const weights = [5, 10, 6, 5];
const boundary = 14;

knapsackSolver.size = values.length;
knapsackSolver.values = values;
knapsackSolver.weights = weights;
knapsackSolver.boundary = boundary;

const solution = knapsackSolver.solve();

console.log(solution);
