class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getFullName() {
        return this.name + " " + this.surname;
    }
}

class Student extends User {
    constructor (name, surname, year) {
        super(name, surname);
        this.year = year;
    }

    getCourse() {
        const date = new Date().getFullYear();
        return date - this.year;
    }
}

const student = new Student("Tod", "Oushen", 2018);
console.log(student.getCourse());
console.log(student.getFullName());