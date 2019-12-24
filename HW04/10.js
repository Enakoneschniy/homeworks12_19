let arr = [];
arr.length = Math.round(Math.random()*10)
for(let i = 0; i < arr.length; i++){
    arr[i] = Math.round(Math.random()*100)
}
console.log(arr);
function getLengthArr(arr) {
    console.log(arr === undefined ?`Error`:+arr.length);
}
getLengthArr(arr);
