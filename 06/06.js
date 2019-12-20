let flat = prompt('Enter namber of flat');
if (flat>=1 && flat<=20){
    console.log('porch №1');
} else if (flat>=21 && flat<=48){
    console.log('porch №2');
} else if (flat>=49 && flat<=90){
    console.log('porch №3');
} else if (flat<1 || flat>90){
    console.log('There is no such flat in this house');
}