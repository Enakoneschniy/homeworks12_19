let mat = [];
const g = 10;
for(let index = 0; index < g; index++){
    mat[index] = [];
    for(let cell = 0; cell < g; cell++){
        mat[index][cell] = index + 1;
        if(cell > 0) {
            mat[index][cell]+= cell * mat[index][0];
        }
    }
}
console.log(mat);
