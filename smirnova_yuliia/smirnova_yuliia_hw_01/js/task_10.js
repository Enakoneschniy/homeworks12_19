let itemWord = "товар";
let itemAmount = prompt("Введите число предметов у вас в корзине");

let lastNumber = itemAmount[itemAmount.length - 1];
if (lastNumber == 1) {
    alert(`У вас в корзине ${itemAmount + ' ' + itemWord}`)
} else if (lastNumber >= 2 && lastNumber <= 4) {
    alert(`У вас в корзине ${itemAmount + ' ' + itemWord + 'а'}`)
} else {
    alert(`У вас в корзине ${itemAmount + ' ' + itemWord  + 'ов'}`)
}