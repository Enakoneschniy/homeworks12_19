function createArr(value, size) {
    let arr = [];
    for(let i = 0; i < size ; i++){
        arr.push(value);

    }
console.log(arr)
}
value = prompt(`Please, input a value`,``);
size = prompt(`Please, input a size`, ``);
createArr(value, size);
