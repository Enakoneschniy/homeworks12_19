a = prompt("Количество");
function declOfNum(number, titles)
{
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
}
alert(a + declOfNum(a, [' товар',' товара',' товаров']));