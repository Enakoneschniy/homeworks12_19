class Worker {
    name;
    surname;
    rate;
    days;

    constructor (name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
    };

    getSalary(){
        return this.rate * this.days
    };
}

const worker = new Worker("ivan", "ivanov", 18, 20);
const worker2 = new Worker("paul", "oslo", 91, 15);

console.log(worker.name);
console.log(worker.getSalary());
console.log(worker2.name);
console.log(worker2.getSalary());


