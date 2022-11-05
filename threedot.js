//Spread JS
const ages1 = [11, 13, 15, 19, 16, 18];
const ages2 = [22, 24, 27, 45, 34, 23, 28];
const ages3 = [33, 36, 38, 37, 39];

const allAges = ages1.concat(ages2).concat(ages3);
console.log(allAges);

const allAges2 = [...ages1, ...ages2, ...ages3];
console.log(allAges2);

const sochib = 650;
const malik = 440;
const dinmujur = 300;

const max = Math.max(sochib, malik, dinmujur);
console.log(max);

const takapoisa = [650, 440, 300];
const max2 = Math.max(...takapoisa);
console.log(max2);
