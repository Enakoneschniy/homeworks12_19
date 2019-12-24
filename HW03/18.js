let array = [[1, 2, 3], [4, 5], [6]];
let sumValues = 0;
for(let i = 0; i < array.length; i++){
    for (let j = 0; j < array[i].length; j++)
    {
        sumValues+=array[i][j];
    }
}
console.log(sumValues);
