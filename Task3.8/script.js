let rand = (min, max) => Math.floor(Math.random() * (max - min)) + min;

let digit = rand(0, 11);
alert("Игра отгадай число от 0 до 10");
let version = -1;

for(let i = 4; i >= 0; i--)
{
    version = parseInt(prompt("Введите число:"));
    if(version === digit)
    {
        alert("Вы отгадали число " + version);
        break;
    }

    alert(`Увы вы не угадали :( \nУ вас осталось ${i} ${i > 0 ? "попытки" : "попыток"}`);
}

if(version != digit) alert("Вы проиграли");
