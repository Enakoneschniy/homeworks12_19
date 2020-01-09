class Worker {
    #name;
    #surname;
    #rate;
    #days;

    constructor(name, surname, rate, days) {
        this.#name = name;
        this.#surname = surname;
        this.#rate = rate;
        this.#days = days;
        this._name = name;
        this._surname = surname;
        this._rate = rate;
        this._days = days;
    }

    get name() {
        return this.#name;
    }

    get surname() {
        return this.#surname;
    }

    get rate() {
        return this.#rate;
    }

    get days() {
        return this.#days;
    }

    set rate(value) {
        this.#rate = value;
    }

    set days(value) {
        this.#days = value;
    }

    getSalary() {
        return this.#rate * this.#days;
    }
}