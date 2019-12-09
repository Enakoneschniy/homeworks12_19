let apartmentNumber = prompt('Введите номер квартиры');
if (apartmentNumber >= 1 && apartmentNumber <= 20) {
    alert("Квартира находится в подъезде №1")
} else if (apartmentNumber >= 21 && apartmentNumber <= 48) {
    alert("Квартира находится в подъезде №2")
} else if (apartmentNumber >= 48 && apartmentNumber <= 90) {
    alert("Квартира находится в подъезде №3")
} else {
    alert("Такой квартиры нет. В этом доме квартиры с номерами 1-90")
}