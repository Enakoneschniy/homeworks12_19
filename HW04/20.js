
let isEven = (x) => x % 2 === 0;
function filter(fn,input){
    let newArr = [];
    for(let i = 0; i < input.length; i++ ){
        if(fn(input[i])){
            newArr.push(input[i]);
        }

    }
    return newArr;
}
let input =  [1, 2 ,3, 4, 5, 6];

console.log(filter(isEven,input));

