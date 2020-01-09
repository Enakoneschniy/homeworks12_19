class ContentEvent extends ButtonEvent {
    selectRunMetod(action) {this[action]();}

    run() {
        let s = $("#text_code").val();

        $("#result").append(`<p>Результат: ${eval(s)}</p>`);
    }
}