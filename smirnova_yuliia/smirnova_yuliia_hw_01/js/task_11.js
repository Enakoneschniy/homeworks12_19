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
        alert(`С вас ${itemPrice} + "тугриков"`);
    }
}

if (buyerInput === cigarettes) {
    let cigarettesBrand = prompt("Какой марки?", cigarettesBrands);
    let cigarettesTaste = prompt("С каким вкусом?", cigarettesTastes);
    let buyerAnswer = prompt(`Ваш заказ ${cigarettesBrand + cigarettesTaste}. Что-нибудь ещё?`, buyerAnswers);
    if (buyerAnswer === "Да") {
        prompt("Что ещё будете заказывать?", itemList);
    } else {
        alert(`С вас ${itemPrice} + "тугриков"`);
    }
}