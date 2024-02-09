const clicks = 0;
const mass = ['X', 'O'];
var flag = true;
let winner = null;
const kl = ['X','X','X'];
const kl1 = ['O','O','O'];

function Button_click() {
    flag = !flag;
    var btn = event.target; // Получаем нажатую кнопку

    btn.innerText = mass[Number(flag)];
    checkWinner()
}

function checkWinner() { // Функция проверки победы
let buttons = [
  [document.getElementById('btn1'), document.getElementById('btn2'), document.getElementById('btn3')],
  [document.getElementById('btn4'), document.getElementById('btn5'), document.getElementById('btn6')],
  [document.getElementById('btn7'), document.getElementById('btn8'), document.getElementById('btn9')]
];

let count = 0;
  for(let i = 0; i < buttons.length; i++){
    count = 1;
    for(let j = 1; j < buttons[0].length; j++){
        if(buttons[i][j].innerText == "") continue;
        if(buttons[i][j].innerText == buttons[i][j - 1].innerText)
            count++;
        else
            break;
    }
    if(count == 3) {
        alert("Конец");
        break;
    }
  }

if(count === 3) return;

for(let i = 0; i < buttons.length; i++){
  count = 1;
  for(let j = 1; j < buttons[0].length; j++){
    if(buttons[j][i].innerText == "") continue;
    if(buttons[j][i].innerText == buttons[j - 1][i].innerText)
        count++;
    else
        break;
  }
  if(count == 3) {
    alert("Конец");
    break;
  }
}

if(count === 3) return;
count = 1;
for(let i = 1; i < buttons.length; i++){
  if(buttons[i][i].innerText == "") continue;
  if(buttons[i][i].innerText == buttons[i - 1][i - 1].innerText)
    count++;
  else
    break;
}

if(count == 3) {
  alert("Конец");
} 

if(count === 3) return;

for(let i = 1; i < buttons.length; i++){
  count = 1;
  for(let j = buttons[i].length - 2; j >= 0; j--){
    if(buttons[i][j].innerText == "") continue;
    if(buttons[i][j].innerText == buttons[i - 1][j + 1].innerText)
      count++;
    else
      break;
  }
  if(count == 3) {
    alert("Конец");
    break;
  } 
}

}