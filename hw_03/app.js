{
    console.log(`HW_03 Task01`)
}
{
    let number;
    number = 1;
    while (number <= 400) {
        console.log(number++)
    }
}
{
    console.log(`HW_03 Task02`)
}
{
    let number = 1;
    while (number < 13) {
        console.log(number += 3)
    }
}
{
    console.log(`HW_03 Task03`)
}
{
    let number = 654;
    while (number >= 0) {
        console.log(number--)
    }
}
{
    console.log(`HW_03 Task04`)
}
{
    let number = 1983;
    while (number <= 2017) {
        console.log(number++)
    }
}
{
    console.log(`HW_03 Task05`)
}
{
    let number = -6;
    do {
        console.log(number += 2);
    } while (number < 100);
}
{
    console.log(`HW_03 Task06`)
}
{
    for (let number = 1; number <= 9; number++) {
        console.log(7 * number)
    }
}
{
    console.log(`HW_03 Task07`)
}
{
    for (let number = 1000; number <= 2000; number++) {
        console.log(String.fromCharCode(number))
    }
}
{
    console.log(`HW_03 Task08`)
}
{
    let sum = 0;
    for (let number = 1; number <= 100; number++) {
        sum += number;
    }
    console.log(sum);
}
{
    console.log(`HW_03 Task09`)
}
{
    let result = 1;
    for (let number = 1; number < 50; number++) {
        result = result * number;
    }
    console.log(result);
}
{
    console.log(`HW_03 Task10`)
}
{
    let arrLength = prompt(`Enter a length of array`),
        array = [],
        arrElement = `x`;
    for (let n = 1; n <= arrLength; n++) {
        array.push(arrElement);
        arrElement += `x`;
    }
    console.log(array);
}
{
    console.log(`HW_03 Task11`)
}
{
    let arrLength = prompt(`Enter a length of array`),
        array = [],
        arrElement = `1`;
    for (let n = 1; n <= arrLength; n++) {
        array.push(n * arrElement);
        arrElement += `1`;
    }
    console.log(array);
}
{
    console.log(`HW_03 Task12`)
}
{
    let array = [3, 2, 6, 5, 0, 19],
        sum = 0;
    for (let n = 1; n <= array.length; n++) {
        sum += array[n];
        if (sum > 10) {
            console.log(n);
            break;
        }
    }
}
{
    console.log(`HW_03 Task13`)
}
{
    let array = [3, 2, 6, 5, 0, 19];
    for (let a = 0, b = array.length - 1; a < b; a++, b--) {
        [array[a], array[b]] = [array[b], array[a]]
    }
    console.log(array);
}
{
    console.log(`HW_03 Task14`)
}
{
    let array = [12, -5, 3, 15, 2, 7, -1, 52, 4],
        newArray = [array.filter(element => element > 0 && element < 10)];
    console.log(newArray);
}
{
    console.log(`HW_03 Task15`)
}
{
    let array = [12, -5, 3, 15, 2, 7, -1, 52, 4],
        newArray = [array.filter(element => element % 2 === 0)];
    console.log(newArray);
}
{
    console.log(`HW_03 Task16`)
}
{
    let array = [1, 2, 3, 4, 5, 6];
    array.splice(0, 6, 2, 1, 4, 3, 6, 5);
    console.log(array);
}
{
    console.log(`HW_03 Task17`)
}
{
    let array = [1, 2, 3, 4, 5, 6];
    array.splice(0, 6, 5, 6, 3, 4, 1, 2);
    console.log(array);
}
{
    console.log(`HW_03 Task18`)
}
{
    let array = [[1, 2, 3], [4, 5], [6]];
    let sum = 0;
    for (let n = 0; n < array.length; n++) {
        for (let i = 0; n < array[n].length; i++) {
            sum += array[n][i];
        }
    }
    console.log(sum);
}




