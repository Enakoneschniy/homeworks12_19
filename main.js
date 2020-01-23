let arr = [1, 2, 3, 4, 5];
arr.splice(1, 0, 'a', 'b');
arr.splice(5, 0, 'c');
arr.splice(7, 0, 'e');

console.log(arr);