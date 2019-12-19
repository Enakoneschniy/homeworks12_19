const number = +prompt('Введите номер дня недели', '');

switch (number) {
    case 0:
        alert('Понедельник');
        break;
    case 1:
        alert('Вторник');
        break;
    case 2:
        alert('Среда');
        break;
    case 3:
        alert('Четверг');
        break;
    case 4:
        alert('Пятница');
        break;
    case 5:
        alert('Суббота');
        break;
    case 6:
        alert('Воскресенье');
        break;
    default:
        alert('Такого дня недели не существует!')
}