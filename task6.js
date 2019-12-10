let users = [
    {
        username: 'ivan',
        password: '334455'
    },
    {
        username: 'alex',
        password: '777'
    },
    {
        username: 'petr',
        password: 'b5678'
    },
];
let  LoginIn = (users) => {
    let mark = false;
    const Login = prompt('Введите логин');
    for ( let i = 0; i<users.length; i++){
        if (Login === users[i].username) {mark = true
            const Password = prompt('Введите пароль')
            if (Password === users[i].password){
                alert('Добро пожаловать')
                return;
            }
            else {
                alert('Ошибка входа');
                return;
            }
        } 

    }
   if (mark == false) { alert('Таких пользователя не существует')}

}
LoginIn(users);