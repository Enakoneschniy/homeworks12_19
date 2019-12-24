function isEven(num) {
    return num % 2 === 0? true: false;
}

let arr = [];
let evenArr = [];
for (let i = 0; i < 10; i++ ){
    arr[i] = Math.round(Math.random()*100);
    if(isEven(arr[i]))
    {
        evenArr.push(arr[i]);
    }
}
console.log(evenArr);

