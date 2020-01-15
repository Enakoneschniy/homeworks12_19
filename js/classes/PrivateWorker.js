export default class {
    constructor() {
        let name, surname, rate, days;

        this.setName = function (n) {
            name = n;
        };
        // this.getName = function () {
        //     return name;
        // };

        this.setSurname = function (n) {
            surname = n;
        };
        // this.getSurname = function () {
        //     return surname;
        // };

        this.setRate = function (n) {
            rate = n;
        };
        // this.getRate = function () {
        //     return rate;
        // };

        this.setDays = function (n) {
            days = n;
        };
        // this.getDays = function () {
        //     return days;
        // };

        this.getFullName = function () {
            return name + ` ` + surname;
        };
        this.getSalary = function () {
            return rate * days;
        }
    }
}


// export default function PrivateWorker () {
//     let name, surname, rate, days;
//
//     this.setRate = function (newRate) {
//         rate = newRate;
//     };
//     this.setDays = function (newDays) {
//         days = newDays;
//     };
//     this.getFullName = function () {
//         return name + ` ` + surname;
//     };
//     this.getSalary = function () {
//         return rate * days;
//     }
// }
//
