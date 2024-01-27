let a = null;
let b = null
let oper = "";

do{
    a = prompt("Введите первое число:");
}while(a == "");

do{
    b = prompt("Введите второе число:");
}while(b == "");

a = Number(a);
b = Number(b);
oper = prompt("Введите операцию(+ - / *):");

alert("Результат операции: " + Calculate());

function Calculate(){
    switch(oper){
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            if(b == 0) return "Нельзя делить на ноль";
            return a / b;
        default:
            return "Не верная операция";
    }
}