let d;

d = new Date();

console.log(d);

console.log(typeof d);

d = d.toString();

console.log(d);

d = new Date(2021, 0, 10, 12, 30, 0);

console.log(d);

d = new Date ('2021-07-10T12:30:00');

console.log(d);

d = new Date('07/10/2021 12:30:00')

console.log(d);

d =new Date ('2021-07-10');

console.log(d);

d =new Date ('07-10-2022');

console.log(d);

d = Date.now();

console.log(d);

d = new Date ('07-10-2022 12:30:00');
d = d.getTime();

console.log(d);

d = d.valueOf();

console.log(d);

d = new Date(1759167006284);

console.log(d);

d = Math.floor(Date.now() / 1000);

console.log(d);













