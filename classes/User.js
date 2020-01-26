export default class User {
    constructor(name, surname, year){
        this.name = name;
        this.surname = surname;
        this.year = year;
     }
     getFullName() {
        return (`${this.name}  ${this.surname}`);
     }
     getCourse() {
         let today = new Date();
         const currYear = today.getFullYear();
         return currYear - this.year;
     }

}