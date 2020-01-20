const surgeArray = [
	"0001 1d1 of caster's fingers turn to stone",
	'0002 3d100 bees swarm harmlessly around the caster for several weeks',
	"0003 6d100 sparkling motes dance about the caster's head until dawn",
	"0004 1d100% of caster's body turns to iron for -2d47- rounds",
	'0005 56d12 ducklings identify the caster as their mother'
];

const surgePick = Math.floor(Math.random() * surgeArray.length);

//const dieToRoll =
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


const rollADie = (sides) => Math.floor(Math.random() * sides) + 1
const evaluateDice = (dice, sides) => 
	Array.from({length: dice}, () => rollADie(sides))
	.reduce((sum, curr) => sum + curr, 0)

// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Specifying_a_function_as_a_parameter
const surgeWithDiceReplaced = surgeArray[surgePick]
	.replace(/(\d+)d(\d+)/g, (_, num, dice) => evaluateDice(num, dice)); 
console.log(surgeWithDiceReplaced);
