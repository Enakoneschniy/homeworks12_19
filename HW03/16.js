let array = [1, 2, 3, 4, 5, 6];
let newArray = [];
for(let index in array){
    if(array[index] % 2 === 0){
        newArray.push(--array[index]);
    }else newArray.push(++array[index]);
}
console.log(newArray);
