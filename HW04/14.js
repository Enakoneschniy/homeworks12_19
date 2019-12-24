let str = prompt(`Please, input a string`,``);
let word = prompt(`please, input a word for search`,``).toLowerCase();
let arr = str.split(` `);
function inArray(word,arr) {
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i].toLowerCase();
        if(arr[i] === word){
            return `True`;
        }
    }
    return `False`;
}
console.log(inArray(word,arr));

