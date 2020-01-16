class CatalogProductEvent extends ButtonEvent {
    #catalog;

    constructor (event, catalog){
        super(event);
        this.#catalog = catalog;
    }

    selectRunMetod(action) {
        let value;
        [action, value] = action.split('_');
        this[action](value);

    }

    addProduct(valie){

    }
}