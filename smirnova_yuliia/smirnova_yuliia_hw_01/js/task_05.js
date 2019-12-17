let userInputNumberOne = prompt("Введите первое число", );
let userInputNumberTwo = prompt("Введите второе число", );
if (userInputNumberOne > userInputNumberTwo) {
    alert(`Максимальное число ${userInputNumberOne}`)
} else if (userInputNumberTwo > userInputNumberOne){
    alert(`Максимальное число ${userInputNumberTwo}`)
} else if (userInputNumberTwo === userInputNumberOne){
    alert('Числа равны')
}