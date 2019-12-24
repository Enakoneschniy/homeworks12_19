let str = prompt(`Please, input a string`, ``);
let arr = str.split(``);
let newArray = [];
for(let index in arr){
    if(arr[index] % 2 === 0){
        newArray.push(--arr[index]);
    }else newArray.push(++arr[index]);
}
let newStr = newArray.join(``);
console.log(newStr);
