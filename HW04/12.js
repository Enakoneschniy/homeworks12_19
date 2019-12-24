let str = prompt(`Please, input a string`,``);
let arr = str.split(` `);
let newStr = ``;
function ucfirst(word) {
    return word[0].toUpperCase() + word.slice(1);
}
for(let i = 0; i < arr.length; i++){
    newStr += ucfirst(arr[i]) + ` `;
}
console.log(newStr);