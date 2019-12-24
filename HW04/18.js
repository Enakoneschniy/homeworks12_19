let square = (x) => x * x;
function map(fn,arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++ ){
        newArr.push(fn(arr[i]));
    }
    return newArr;
}
let arr =  [1, 2 ,3];

console.log(map(square,arr));
console.log(map(square, []));

