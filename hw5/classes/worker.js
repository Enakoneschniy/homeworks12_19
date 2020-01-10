export default class {

    constructor (name, surname, rate, days) {

        this.name = name
        this.surname = surname
        this.rate = rate
        this.days = days
    }
    
    getSalary() {
        return this.rate * this.days
    }
}