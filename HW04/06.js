function getDivisors(num) {
    let arr = [];
    for (let i = 1; i <= num; i++){
        if(num % i === 0){
            arr.push(i);
        }
    }
    console.log(arr);
}
let num = prompt(`Please, input a value`, ``);
getDivisors(num);
