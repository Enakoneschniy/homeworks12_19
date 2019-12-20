let products = prompt('How many products in basket?');
x = products.length;
if (products.charAt(x-1)=='1' && products.charAt(x-2)!='1'){
    console.log(products,'товар');
} else if (products.charAt(x-1)=='2' || products.charAt(x-1)=='3' || products.charAt(x-1)=='4'){
    console.log(products,'товара');
}
else {
    console.log(products,'товаров')
}