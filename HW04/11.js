let num = prompt(`Please, input a value of number`,``);
function validNum(num) {
    if(num <= 7){
        return `Value of number < 7`;
    }else if(num === `8`){
        return `7`;
    }else if(num === `9`){
        return `8`;
    }else return (num**2)

}

console.log(validNum(num));