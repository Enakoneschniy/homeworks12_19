class Worker {
    _name;
    _surname;
    _rate;
    _days;

    get name() {
        return this._name;
    }

    get surname() {
        return this._surname;
    }

    get rate() {
        return this._rate;
    }

    get days() {
        return this._days;
    }

    constructor (name, surname, rate, days) {
        this._name = name;
        this._surname = surname;
        this._rate = rate;
        this._days = days;
    };

    getSalary(){
        return this._rate * this._days
    };
}

const worker = new Worker("ivan", "ivanov", 18, 20);
const worker2 = new Worker("paul", "oslo", 91, 15);

console.log(worker.name);
console.log(worker.getSalary());
console.log(worker2.name);
console.log(worker2.getSalary());