let age = prompt(`Please, input your age`,``);
function isValidAge(age) {
    if(age >= 16) {
        console.log(`Welcome`);
    }else if(age === undefined || age === ``) {
        age = prompt(`Please, input your age`,``);
        isValidAge(age);
    } else {
        console.log(`You are so young`);
    }
}
isValidAge(age);







