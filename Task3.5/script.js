let a = parseInt(prompt("Введите число: "));

alert(NameDay(a));

function NameDay(day){
    switch(day){
        case 1:
        return "Понедельник";

        case 2:
        return "Вторник";

        case 3:
        return "Среда";

        case 4:
        return "Четверг";

        case 5:
        return "Пятница";

        case 6:
        return "Суббота";

        case 7:
        return "Воскресенье";

        default:
        return "Не верный ввод";
    }
}