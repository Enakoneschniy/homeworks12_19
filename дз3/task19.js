let Size = parseInt(prompt('ВВедите размер матрицы'));

let arr = [];
arr.length = Size;


for (let i = 0; i < Size; i++) {
    arr[i] = [];
    arr[i].length = Size;

}
for (let i = 0; i < Size; i++) {
    for (let j = 0; j < Size; j++) {
        i == j ? arr[i][j] = 1 :
            i == Size - 1 - j ? arr[i][j] = 2 :
                i < j && i > Size - 1 - j ? arr[i][j] = 4 :
                    i < j && i < Size - 1 - j ? arr[i][j] = 3 :
                        i > j && i > Size - 1 - j ? arr[i][j] = 5 :
                            i > j && i < Size - 1 - j ? arr[i][j] = 6 :
                                arr[i][j] = 0;
    }


}

console.log(arr);

Size = parseInt(prompt('Ведите размер таблицы умножения'));
arr = [];
arr.length = Size;

for (let i = 1; i <= Size; i++) {
    arr[i - 1] = [];
    for (let j = 1; j <= Size; j++) {
        arr[i - 1][j - 1] = i * j;
    }
}
console.log(arr);

Size = parseInt(prompt('Ведите количество строк в триугольнике паскаля'));
const STartNumber = parseInt(prompt('Введите стартовое значение в триугольнике'));
arr = [];
arr.length = Size;

for (let i = 0; i < Size; i++) {
    arr[i] = [];
    for (let j = 0; j <= i; j++) {
        j == 0 || j == i ? arr[i][j] = STartNumber : arr[i][j] = arr[i - 1][j] + arr[i - 1][j - 1];
    }
}
console.log(arr);