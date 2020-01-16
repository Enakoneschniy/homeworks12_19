class CatalogButtonEvent extends ButtonEvent {
    #catalog;

    constructor (event, catalog){
        super(event);
        this.#catalog = catalog;
    }

    selectRunMetod(action) {
        let value;
        [action, value] = action.split('_');
        this[action](value);

        this.#catalog.renderButtonFilter();
        $(".goods").empty();
        $(".goods").append(this.#catalog.renderProduct);
        $(".aside_center").empty();
        $(".aside_center").append(catalog.renderButtonNumber());

        catalog.renderButtonPagePrevNext();
    }

    fltr(value) {
        this.#catalog.filterCategories = value;

    }
    search() {
        this.#catalog.filterSearch = $("#search_edit").val();
    }
    pdgPrevious() {
        if(this.#catalog.page <= 1)  return;
        this.#catalog.filterPage = this.#catalog.page-1;
    }
    pdgNumber(value) {
        this.#catalog.filterPage = +value;
    }
    pdgNext() {
        if(this.#catalog.page >= this.#catalog.totalPage)  return;
        this.#catalog.filterPage = this.#catalog.page+1;
    }
}