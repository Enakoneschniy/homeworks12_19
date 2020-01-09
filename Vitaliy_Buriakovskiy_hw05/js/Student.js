class Student extends User{
    #yearReceipt;

    constructor(name, surname, year){
        super(name, surname);
        this.year = year;
    }

    getCourse(){
        return this.year - this.#yearReceipt;
    }

    setYearReceipt (year){
        this.#yearReceipt = year;
    }
}