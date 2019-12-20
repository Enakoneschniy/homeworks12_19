const arr = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
];

const newArr = [];

for (let i = 0; i < arr.length; i++) {
    if (isEven(arr[i])) {
        newArr.push(arr[i]);
    }
}
function isEven(num) {
    return num % 2 === 0;
}

console.log(newArr);