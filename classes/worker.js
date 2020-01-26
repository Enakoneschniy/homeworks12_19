export default class Worker {
    #name;
    #surname;
    #rate;
    #days;
    constructor (name, surname, rate, days){
        this.#name = name;
        this.#surname = surname;
        this.#rate = rate;
        this.#days = days
    }
    getSalary() {
        return (this.rate * this.days);
    }
    get name(){
        return this.#name;
    }
    get surname() {
        return this.#surname;
    }
    get rate() {
        return this.#rate;
    }
    set rate(value) {
        if(typeof value !== `` && value !== `string ` && value >= 0 ){
            this.#rate = value;
        }
    }
    get days() {
        return this.#days;
    }
    set days(value) {
        if(typeof value !== `` && value !== `string ` && value >= 0 ){
            this.#days = value;
        }
    }
}

