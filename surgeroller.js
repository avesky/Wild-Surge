const surgeArray = require('./clean.json');
const Chance = require('chance');

const chance = new Chance();
const surgePick =  6424//chance.natural({max: surgeArray.length - 1 });
const regex = /(\d+d\d+)(\+\d+)?/g;

console.log(
	surgePick,
	surgeArray[surgePick].replace(
		regex,
		(_,c1,c2) => {
			const roll =chance.rpg(c1, {sum: true});
			const add = c2 ? Number(c2) : 0;

			console.log({roll,add})

			return roll + add;
		}
	)
);
