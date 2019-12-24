let array = [22, 32, 1, 3, 132];
let newArray = [];
for( let index in array) {
    if(array[index] > 0 && array[index] < 10){
        newArray.push(array[index]);
    }
}
console.log(newArray);