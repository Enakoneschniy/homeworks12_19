class ButtonEvent {
    constructor(elem) {
        this._elem = elem;
        elem.addEventListener("click", this.onClick.bind(this));
    }

    selectRunMetod(action) {
    }

    onClick(event) {
        let action = event.target.dataset.action;
        if (action) {
            this.selectRunMetod(action);
        }
    };
}
