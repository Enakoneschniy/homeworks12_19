let Exp = parseFloat(prompt('ВВедите стаж'));
Exp > 0 ? 
    (Exp < 3 ? console.log('Надбавка 0%') :
        Exp < 10 ? console.log('Надбавка 10%'):
            Exp < 20 ? console.log('Надбавка 20%'):
            console.log('Надбавка 25%'))
    :console.log('Стаж не может быть отрицательным');
