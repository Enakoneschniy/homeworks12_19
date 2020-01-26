import Worker from './classes/worker';
const ivan = new Worker(`Ivan`, `Ivanov`, `400`, `22`);
console.log(ivan);
console.log(ivan.getSalary());
const vasya = new Worker(`Vasya`, `Vasil`, `350`, `25`);
console.log(vasya.getSalary());
console.log(ivan.getSalary() + vasya.getSalary());
