'use strict'
//import { Cart, Catalog } from './modules/shop'

const catalog = new Catalog();
catalog.loadProducts();
$(".goods").empty();
$(".goods").append(catalog.renderProduct);
$(".aside_center").empty();
$(".aside_center").append(catalog.renderButtonNumber());

new CatalogButtonEvent(contents, catalog);
new CatalogProductEvent(content, catalog);
