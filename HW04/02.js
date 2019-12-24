let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

function sum() {
let sum = 0;
for (let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
        for(let z = 0; z < arr[j].length; z++ ){
            sum += arr[i][j][z];
        }
    }
}console.log(sum);
}
sum();
