class Product {
    constructor(cod, title, image, price, categories) {
        this.id = Math.random().toString(36).substr(2, 9);//uuidv4();
        this.cod = cod;
        this.title = title;
        this.image = image;
        this.price = price;
        this.categories = categories;
    }

    get rendering() {

        return `
                <div class="product">
                    <div class="product_title">
                        <h3>${this.title}</h3>
                    </div>
                    <div class="product_picture">
                        <div><a class="product_img" data-action="addProduct_${this.id}" href="#"><img src="${this.image}"/></a></div>
                    </div>
                    <div class="product_argument">
                        <div><p>Price: <span class="product_price">US $${this.price}</span></p></div>
                        <div><p>COD: <span class="product_code">${this.cod}</span></p></div>
                    </div>
                </div>`
    }
}
