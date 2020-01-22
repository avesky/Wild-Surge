const surgeArray = require('./clean.json');

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
dieTotal = 0;
if (numDie && dieToRoll) {
	for (let i = 0; i < numDie[1]; i++) {
		dieToSum.push(rollDie());
	}
	for (let i = 0; i < dieToSum.length; i++) {
		dieTotal += dieToSum[i];
	}
}

console.log(surgePick, surgeArray[surgePick].replace(dieReplace, dieTotal));
