import Worker from './classes/worker';
const ivan = new Worker(`Ivan`, `Ivanov`, `400`, `22`);
ivan.days = 32;
console.log(ivan.name);
console.log(ivan.surname);
console.log(ivan.rate);
console.log(ivan.days);