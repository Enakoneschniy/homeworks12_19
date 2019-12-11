//Types of items in the shop
let chewingGum = "Жевательная резинка";
let chewingGumBrand = ["Orbit", "Dirol"];
let chewingGumTaste = ["Фруктовый","Мятный"];

let cigarettes = "Сигареты";
let cigarettesBrand = ["Ватра", "Парламент"];
let cigarettesTaste = ["Без вкуса", "Ментол", "Шоколад"];

let drinks = "Напитки";
let drinksVolume = ["0.33", "0.5", "1"];
let drinksType = ["Алкогольный", "Безалкогольный"];
let drinksAlcoholic = ["Пиво"];
let drinksAlcoholicBrand = ["Оболонь", "Corona", "Черниговское"];
let drinksNonAlcoholic = ["Сок", "Вода", "Энергетик"];
let drinksJuiceBrand = ["Rich", "Jaffa", "Добрый"];
let drinksJuiceTaste = ["Мультифрукт", "Апельсин", "Томат"];
let drinksWaterBrand = ["Бонаква", "Морщинська", "Боржоми"];
let drinksWaterType = ["Сильногазированная", "Слабогазированная", "Негазированная"];
let drinksEnergeticBrand = ["Red Bull", "Revo"];

let buyerChoice = prompt("Здравствуйте, что будете заказывать?");
switch (buyerChoice) {
    case 'Жевательная резинка':
        alert('Orbit или Dirol?');
        switch (buyerChoice) {
        }
}
    case '2':
        alert( 'Два' );
        break;

    case 3:
        alert( 'Никогда не выполнится!' );
        break;
    default:
        alert( 'Неизвестное значение' );
}


