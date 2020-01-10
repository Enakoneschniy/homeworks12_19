
import Worker from './classes/worker'
import workerMod1 from './classes/workerMod1(task7)'
import workerMod2 from './classes/workerMod2(task8)'
import MyString from './classes/MyString'
import Student from './classes/Student'
import Hamburger from './classes/Hamburger'


//Task 6
{
    let firstWorker = new Worker('Ivan', 'Ivanov', 10, 20),
    secondWorker = new Worker('Afanasii', 'Afanasiev', 20, 19)

    {// Check:
        // console.log(`   Name:${firstWorker.name}
        //     Surname:${firstWorker.surname}
        //     Rate: ${firstWorker.rate}
        //     Days: ${firstWorker.days}
        //     Salary: ${firstWorker.getSalary()}`);

        // console.log(`   Name: ${secondWorker.name}
        //     Surname:${secondWorker.surname}
        //     Rate: ${secondWorker.rate}
        //     Days: ${secondWorker.days}
        //     Salary: ${secondWorker.getSalary()}`);}
    }

    // Amount of salaries:
    // console.log(`Amount of salaries: ${firstWorker.getSalary() + secondWorker.getSalary()}`);
}

//Task 7
{
    let firstWorker = new workerMod1('Ivan', 'Ivanov', 10, 20),
        secondWorker = new workerMod1('Afanasii', 'Afanasiev', 20, 19)

    {// Check:
        // console.log(`   Name:${firstWorker.name}
        //     Surname:${firstWorker.surname}
        //     Rate: ${firstWorker.rate}
        //     Days: ${firstWorker.days}
        //     Salary: ${firstWorker.getSalary()}`);
    }
}

//Task 8
{
    let firstWorker = new workerMod2('Ivan', 'Ivanov', 10, 20),
        secondWorker = new workerMod2('Afanasii', 'Afanasiev', 20, 19)

    {// Check:
        // console.log(`   Name:${firstWorker.name}
        //     Surname:${firstWorker.surname}
        //     Rate: ${firstWorker.rate}
        //     Days: ${firstWorker.days}
        //     Salary: ${firstWorker.getSalary()}`);

        // console.log(firstWorker.rate);

        // firstWorker.rate = 20

        // console.log(firstWorker.rate);

        // console.log(firstWorker.days);


        // firstWorker.days = 30
        // console.log(firstWorker.days);
    }



}

//Task 9
{
    let str = new MyString


    { //Check
        // console.log(str.reverse('javascript'));
        // str.reverse('javascript')
        // console.log(str.ucFirst('javascript'));
        // console.log(str.ucWords('i love javascript'));
    }

}

//Task 10
{
    const student = new Student('Ivan', 'Ivanov', 2016)

    {   //Check
        // console.log(student.name);
        // console.log(student.surname);
        // console.log(student.year);
        // console.log(student.getFullName());
        // console.log(student.getCourse());
    }




}

//Task 22
{
let hamburger = new Hamburger('big', 'salad')
let hamb2 = new Hamburger('small', 'potatoes')

{ //Check methods
// console.log('w/o cond', hamburger.calculateCalories());
// console.log(hamburger.calculatePrice());

// hamburger.addCondiment()

// console.log('with cond', hamburger.calculatePrice());
// console.log(hamburger.calculateCalories());

// console.log('w/o may', hamb2.calculateCalories());
// console.log(hamb2.calculatePrice());

// hamb2.addMayonnaise()

// console.log('with may', hamb2.calculateCalories());
// console.log(hamb2.calculatePrice());


}

{ //Check for throwing errors:
// console.log('------------');

// let hamb3 = new Hamburger(123, 456)

// console.log('------------');


// let hamb4 = new Hamburger ('middle', 'salad')

// console.log(hamb4.calculateCalories());


// console.log('------------');

// let hamb5 = new Hamburger ('big', 'banana')

// console.log(hamb5.calculatePrice()); 
}


}

