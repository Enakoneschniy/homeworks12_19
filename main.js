const nums = '123456';
let changedNums = "";

for (let i = 0; i < nums.length; i += 2){
    changedNums += nums[i + 1];
    changedNums += nums[i];
}

console.log(changedNums);