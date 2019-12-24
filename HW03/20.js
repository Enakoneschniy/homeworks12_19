let matrix = [];
const n = 10;
for(let i = 0; i < n; i++){
    matrix[i] = [];
    for(let j = 0; j < n; j++){
        if(i === j){
            matrix[i][j] = 1;
        }else if(i === (n - 1)- j){
            matrix[i][j] = 2;
        }else if(j > i && i < (n - 1)- j){
            matrix[i][j] = 3;
        }else if(j < i && i < (n - 1)- j){
            matrix[i][j] = 6;
        }else if(j < i && i > (n - 1)- j){
            matrix[i][j] = 5;
        }else if(j > i && i > (n - 1)- j) {
            matrix[i][j] = 4;
        }else {
            matrix[i][j] = 0;
        }
    }
}
console.log(matrix);