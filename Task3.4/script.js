let a = parseFloat(prompt("Введите a: "));
let b = parseFloat(prompt("Введите b: "));
let c = parseFloat(prompt("Введите c: "));

let desc = b ** 2 + 4 * a * c;

let x1 = 0;
let x2 = 0;
if(desc > 0){
    x1 = (-b + Math.sqrt(desc)) / (a * 2);
    x2 = (-b - Math.sqrt(desc)) / (a * 2);
}
else if(desc === 0){
    x1 = -b / (a * 2);
    x2 = x1;
}
else{
    alert("Нет корней");
    return;
}

alert("Ответ: " + x1 + " " + x2);