const surgeArray = [
	"0001 1d10 of caster's fingers turn to stone",
	'0002 3d100 bees swarm harmlessly around the caster for several weeks',
	"0003 6d100 sparkling motes dance about the caster's head until dawn",
	"0004 9d100% of caster's body turns to iron for that many rounds",
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
console.log(dieToSum, surgeArray[surgePick].replace(dieReplace, dieTotal));
