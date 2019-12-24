let sumArr = [2,5,8,4,6];
let sumItems = 0;
for(let i = 0; i < sumArr.length; i++){
    sumItems += sumArr[i];
    if(sumItems > 10) {
        console.log(i);
        break;
    }
}
if(i === sumArr.length - 1) {
    console.log(`Sum of all array < 10`)
}
