class Catalog {
    #products = [];
    #categories = '';
    #currentPage = 1;
    #productsOnPage = 6;
    #totalPage = 0;
    #search = '';

    loadProducts() {
        this.#products=[];

        bdProducts.filter(value => value.categories.indexOf(this.#categories) === 0)
            .filter(value => value.title.indexOf(this.#search) !== -1)
            .filter((value, index) => this.#productsOnPage*(this.#currentPage-1)<=index)
            .filter((value, index) => this.#productsOnPage>index)
            .forEach((value) => {
                this.#products.push(
                    new Product(value.cod, value.title, value.image, value.price, value.categories)
                );
            });


        this.#totalPage = Math.ceil(
            bdProducts.filter(value => value.categories.indexOf(this.#categories) === 0)
            .filter(value => value.title.indexOf(this.#search) !== -1)
            .length/this.#productsOnPage
            );
    }

    get renderProduct() {
        this.loadProducts();
        return this.#products.reduce((html, item, index) => {
                                  let s = '';
                                 if ((index)%3==0){
                                    s = `<div class="line"></div>\n`;
                                 }
                               return   html + '\n' + s+ item.rendering;
                                }, '');
    }



    renderButtonNumber() {
        let result = '';
        let btnFocus;

        for (let i = 0; i < this.#totalPage; i++) {
            if (i+1 === this.#currentPage) {
                btnFocus = "on_focus_as"
            } else {
                btnFocus = "off_focus_as"
            }
            result += `<div><a class="aside_ahrf  ${btnFocus}" data-action="pdgNumber_${i + 1}" href="#">${i + 1}</a></div>\n`
        }
        return result;

    }

    renderButtonFilter () {

        $('a[class|="filter_ahrf  on_focus_fl"]').attr("class", "filter_ahrf off_focus_fl")

        switch (this.#categories) {
            case "":
                $('a[data-action|="fltr_all"]').attr("class", "filter_ahrf  on_focus_fl");
                break;
            case "men":
                $('a[data-action|="fltr_men"]').attr("class", "filter_ahrf  on_focus_fl");
                break;
            case "women":
                $('a[data-action|="fltr_women"]').attr("class", "filter_ahrf  on_focus_fl");
                break;
        }
    }

    renderButtonPagePrevNext() {

        $('a[class|="aside_ahrf on_activ_as"]').attr("class", "aside_ahrf off_activ_as");


        if ((this.#totalPage - this.#currentPage) > 0) {
            $('a[data-action|="pdgNext"]').attr("class", "aside_ahrf on_activ_as");
        }
        if (this.#currentPage > 1) {
            $('a[data-action|="pdgPrevious"]').attr("class", "aside_ahrf on_activ_as");
        }

    }

    getProductById(id) {
        return this.#products.find(p => p.id === id)
    }
    get products() {
        return this.#products
    }

    get page(){
        return this.#currentPage;
    }

    get totalPage(){
        return this.#totalPage;
    }

    set filterCategories(categories) {
        if (categories === "all") {categories='';}
        this.#categories = categories;
    }

    set filterPage (page){
        this.#currentPage = page;
    }

    set filterSearch (search){
        this.#search = search;
    }
}
