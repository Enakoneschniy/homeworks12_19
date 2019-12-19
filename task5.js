let FrontDoor = () => {
    const FlatNumber = parseFloat(prompt('Введите номер квартиры'));
    FlatNumber >= 1 && FlatNumber <= 20 ? console.log('Первый подьезд'):
    FlatNumber >= 21 && FlatNumber <= 48 ? console.log('Второй подьезд'):
    FlatNumber >= 49 && FlatNumber <= 90 ? console.log('Третий подьезд'):
    console.log('Такой квартиры в этом доме нет');
}
FrontDoor();

