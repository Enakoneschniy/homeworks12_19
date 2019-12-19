let DayName = () => {
    debugger
    const NumberOfDay = parseFloat(prompt('Введите день недели'))
switch(NumberOfDay){
    case 1:
        alert('Monday');
        DayName();
        return 
    
    case 2:
        alert('Tuesday');
        DayName();
        return 
    
    case 3:
        alert('Wednesday');
        DayName();
        return 
    
    case 4:
        alert('Thursday');
        DayName();
        return 
    
    case 5:
        alert('Friday');
        DayName();
        return
    
    case 6:
        alert('Saturday');
        DayName();
        return
    
    case 7:
        alert('Sunday');
        DayName();
        return
    
    default:
        alert('Всего доброго');
        return //Wtf?
}
}
DayName();
