const surgeArray = [
	"0001 1d1 of caster's fingers turn to stone",
	'0002 3d100 bees swarm harmlessly around the caster for several weeks',
	"0003 6d100 sparkling motes dance about the caster's head until dawn",
	"0004 1d100% of caster's body turns to iron for -2d47- rounds",
	'0005 56d12 ducklings identify the caster as their mother'
];

const surgePick = Math.floor(Math.random() * surgeArray.length);

const regexDie = /d([0-9]+)/;
const regexNumDie = /([0-9]+)d/;
const regexTotal = /[0-9]+d[0-9]+/;

const dieToRoll = regexDie.exec(surgeArray[surgePick]);
const numDie = regexNumDie.exec(surgeArray[surgePick]);
const dieReplace = regexTotal.exec(surgeArray[surgePick]);

function rollDie() {
	return Math.floor(Math.random() * dieToRoll[1]) + 1;
}
const dieToSum = [];
for (let i = 0; i < numDie[1]; i++) {
	dieToSum.push(rollDie());
}

dieTotal = 0;
for (let i = 0; i < dieToSum.length; i++) {
	dieTotal += dieToSum[i];
}
// console.log(dieToSum, surgeArray[surgePick].replace(dieReplace, dieTotal));

const surge = () => {
	// *** constants 
	const findDiceRegex = /(\d+)d(\d+)/g; // regexr.com/4sk80

	// *** helper functions
	// returns an integer in the interval [0, limit)
	const randomNumber = (limit) => Math.floor(Math.random() * limit);

	// returns an integer in the interval [1, sides]
	// might be replaced by chancejs eventually: https://chancejs.com/
	const rollADie = (sides) => randomNumber(sides) + 1;

	// returns the sum of an array of numbers
	const sumArray = (array) => array.reduce((sum, curr) => sum + curr, 0);

	// returns an array of dice rolls
	const getArrayOfDiceRolls = (numberOfDice, numberOfSides) =>
		// see "using arrow functions" under examples: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#Examples
		Array.from({length: numberOfDice}, () => rollADie(numberOfSides));
	

	// *** surge logic 
	const surgeIndex = randomNumber(surgeArray.length);
	const rawSurgeText = surgeArray[surgeIndex];
	
	return rawSurgeText
		// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Specifying_a_function_as_a_parameter
		.replace(findDiceRegex, (_, numberOfDice, numberOfSides) => {
			const diceRolls = getArrayOfDiceRolls(numberOfDice, numberOfSides);
			
			return sumArray(diceRolls);
		});
}

console.log(surge());
