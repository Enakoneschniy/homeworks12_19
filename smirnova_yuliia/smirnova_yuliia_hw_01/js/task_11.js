//Types of items in the shop
let chewingGum = "Жевательная резинка";
let chewingGumBrands = ["Orbit", "Dirol"];
let chewingGumTastes = ["Фруктовый","Мятный"];
let cigarettes = "Сигареты";
let cigarettesBrands = ["Ватра", "Парламент"];
let cigarettesTastes = ["Без вкуса", "Ментол", "Шоколад"];


let itemAmount;
let itemList = [chewingGum, cigarettes];
let buyerAnswers = ["Да", "Нет"];
let itemPrice = 100500;
let buyerInput = prompt("Здравствуйте, что будете заказывать?", itemList);
if (buyerInput === chewingGum) {
    let chewingGumBrand = prompt("Какой марки?", chewingGumBrands);
    let chewingGumTaste = prompt("С каким вкусом?", chewingGumTastes);
    let buyerAnswer = prompt(`Ваш заказ ${chewingGumBrand + chewingGumTaste}. Что-нибудь ещё?`, buyerAnswers);
    if (buyerAnswer === "Да") {
        prompt("Что ещё будете заказывать?", itemList);
    } else {
        prompt(`С вас ${itemPrice} + "тугриков"`);
    }
}

if (buyerInput === cigarettes) {
    prompt("Какой марки?", cigarettesBrand);
if (cigarettesBrand[1] || cigarettesBrand[2]) {
    prompt('Что-нибудь ещё?')
}

} else {
    alert('Такого товара нет')
}