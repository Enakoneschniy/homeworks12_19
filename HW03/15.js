let array = [];
let newArray = [];
for(let index = 0 ; index <10; index++ ){
    array[index] = Math.round(Math.random()*100);
}
console.log(array);
for(let index in array){
    if(array[index] % 2 === 0){
        newArray.push(array[index]);
    }
}
console.log(newArray);