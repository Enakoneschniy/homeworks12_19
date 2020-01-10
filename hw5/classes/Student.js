import User from './User'

export default class extends User {
    constructor (name, surname, year) {
        super(name, surname)
        this.year = year
    }

    getCourse() {
        let now = new Date()
        const currentYear = now.getFullYear()
        if ((currentYear - this.year) >= 5) {
            return 'Student has been already graduated!'
        }
        else {
            return (currentYear - this.year) + 1
        }

    }
}