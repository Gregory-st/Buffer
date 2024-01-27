let x = parseInt(prompt("Введите размерность 1 таблицы: "));
let y = parseInt(prompt("Введите размерность 2 таблицы: "));
let result = "";
for(let i = 1; i <= x; i++){
    for(let j = 1; j <= y; j++)
        result += i * j + "\t"
    console.log(result + "\n");
    result = "";
}