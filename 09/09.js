let years = prompt('Enter working years');
if (years<3){
    console.log('Allowance 0%');
} else if (years>=3 && years<10){
    console.log('Allowance 10%')
} else if (years>=10 && years<20){
    console.log('Allowance 20%')
} else if (years>=20){
    console.log('Allowance 25%')
}