class SidebarEvent extends ButtonEvent {
    selectRunMetod(action) {
        $("#content_task, #result").empty();
        $("#content_task").append(getContextHTML(action));
    }
};
