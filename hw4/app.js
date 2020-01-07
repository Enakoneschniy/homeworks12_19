//Task 1

function getAllNumbers(num, i = 1) {

    if (num >= i) {  

        console.log(i);

        getAllNumbers(num, ++i)
        
    }
    
}


//Task 2

function getNumbersFromAToB(a, b) {

    if (a == b) {

        console.log(a)
    }
    else if (a < b) {

        console.log(a)
        getNumbersFromAToB(++a, b)

    }

    else if (a > b) {

        console.log(a)
        getNumbersFromAToB(--a, b)

    }

}

//Task 3

function getAmountOfNumbers(num) {
  
    
    let count = 0

    if (num % 10 == num) {

        return num

    }

    let lastNumber = num % 10
    console.log(lastNumber);
    
    
    return count += lastNumber + getAmountOfNumbers((num - lastNumber) / 10)
    

}

//console.log(getAmountOfNumbers(12590000090000879))

//Task 4

function showAllNumbersReverse(num) {

    if (num % 10 == num) {

        console.log(num)
        return

    }

    let lastNumber = num % 10
    console.log(lastNumber)
    showAllNumbersReverse((num - lastNumber)/10)

}

//Task 5

function showAllNumbers(num) {

    if (num % 10 == num) {

        console.log(num)
        return  

    }
    else {
        let lastNumber = num % 10
        showAllNumbers((num - lastNumber)/10)
        console.log(lastNumber);
        return
        }

}

//Check
// showAllNumbers(123456789)

//Task 12
{
let newArr = ['a', 'b', 'c'].concat([1, 2,3])
}
// console.log(newArr);

//Task 13
{
    let array = ['a', 'b', 'c']
    array.splice(array.length, 0, 1, 2, 3)
    // console.log(array);
    
}

//Task 14
{
    let array = [1, 2, 3]
    array.splice(0, 0, 4, 5, 6)
    // console.log(array);
    
}


//Task 15
{
    let arr1 = [1, 2, 3, 4, 5, 6]
    let arr2 = arr1.slice(0, 3)
    // console.log(arr2);
    
}

//Task 16
{
    let arr1 = [1, 2, 3, 4, 5, 6]
    let arr2 = arr1.slice(-3, -1)
    // console.log(arr2);
    
}

//Task 17

{
  let array = [1, 2, 3, 4, 5]
  array.splice(1, 2)
//   console.log(array);
  

}

//Task 18
{
    let array = [1, 2, 3, 4, 5],
    arr2 = array.splice(1, 3)
    // console.log(arr2);
    

}

// Task 19
{
    let array = [1, 2, 3, 4, 5]
    array.splice(3, 0, 'a', 'b', 'c')
    // console.log(array);
    
}

//Task 20
{
    let obj = {
        js: 'test',
        jq: 'hello',
        css: 'world'
    },
    keys = Object.keys(obj)
    // console.log(keys);
    
    
}