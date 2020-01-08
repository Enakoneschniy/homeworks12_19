$(document).ready(function () {
    $("input").ready(function () {
        $('fieldset').append(getButtonHTML(taskRepos));
    });
});

function getButtonHTML(task){
    return task.reduce((html, task)=>
        html + `\n <button class="btn-task" type="button" data-action="${task.id}">${task.name}</button>`
        ,'');
};

function getContextHTML(id) {
    let result = String(taskRepos[id].realiz.reduce((res, mas)=>res+mas+'\n\n',''));
    result += `task${+id+1}()`;
    return `<h2>${taskRepos[id].name}</h2>
            <p>${taskRepos[id].descript}</p>
            <form class="form_task">
                <div>
                    <p><textarea id ="text_code" name="message" placeholder="Code">${result}</textarea></p>
                </div>
                <div class="form_task_btn">
                    <p><button class="btn-run-task" type="button" data-action="run">Пересчитать</button></p>
                <div id="result">
                    <!--JS create-->
                </div>
                </div>
   
            </form>`
}

new SidebarEvent(sidebar).selectRunMetod(0);

new ContentEvent(content);
