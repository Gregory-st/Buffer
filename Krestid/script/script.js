const mass = ['X', 'O'];
var flag = true;
let winner = false;

function Button_click() {
  if(winner) {
      alert("Игра окончена");
      return; 
    }
    var btn = event.target; // Получаем нажатую кнопку

    if(btn.innerText == ""){
      flag = !flag;
      btn.innerText = mass[Number(flag)];
    }

    winner = checkWinner();

    if(winner == null){ 
      alert("Нечья");
      winner = true;
      return;
    }

    if(winner) alert("Победили " + (mass[Number(flag)] === "X" ? "крестики":"нолики"));
}

function checkWinner() { // Функция проверки победы
  let poleNotEmpty = 0;
  let buttons = [
  [document.getElementById('btn1'), document.getElementById('btn2'), document.getElementById('btn3')],
  [document.getElementById('btn4'), document.getElementById('btn5'), document.getElementById('btn6')],
  [document.getElementById('btn7'), document.getElementById('btn8'), document.getElementById('btn9')]
];

let countChars = 0; //Счетчик символов

  for(let i = 0; i < buttons.length; i++){
    countChars = 1;
    for(let j = 1; j < buttons[0].length; j++){
        if(buttons[i][j].innerText == "") continue;
        if(buttons[i][j].innerText == buttons[i][j - 1].innerText) //Проверка последовательность по горизонтали
            countChars++;
        else
            break;
    }
    if(countChars == 3){
      document.getElementById("horizontal").style.top = `calc(50% - ${245 - 107 * i}px)`;
      break;
    }
  }

if(countChars === 3) { 
  document.getElementById("horizontal").style.visibility = "visible";
  return true; 
}

for(let i = 0; i < buttons.length; i++){
  countChars = 1;
  for(let j = 1; j < buttons[0].length; j++){
    if(buttons[j][i].innerText == "") continue;
    if(buttons[j][i].innerText == buttons[j - 1][i].innerText) //Проверка последовательность по вертикали
        countChars++;
    else
        break;
  }
  if(countChars == 3){
    document.getElementById("vertical").style.left = `calc(50% - ${95 - (105 * i)}px)`;
    break;
  }
}

if(countChars === 3){
  document.getElementById("vertical").style.visibility = "visible";
  return true;
}

countChars = 1;
for(let i = 1; i < buttons.length; i++){
  if(buttons[i][i].innerText == "") continue;
  if(buttons[i][i].innerText == buttons[i - 1][i - 1].innerText) //Проверка последовательности на главной диагонали
    countChars++;
  else
    break;
}

if(countChars === 3){
  document.getElementById("maindiagonal").style.visibility = "visible";
  return true;
}

countChars = 1;
for(let i = 1, j = buttons[i].length - 2; i < buttons.length; i++, j--){
  if(buttons[i][j].innerText == "") continue;
  if(buttons[i][j].innerText == buttons[i - 1][j + 1].innerText)  //Проверка последовательности на пободной диагонали
    countChars++;
  else
    break;
  if(countChars == 3)
    break;
}

if(countChars === 3) { 
  document.getElementById("sidediagonal").style.visibility = "visible";
  return true; 
}

buttons.forEach(a => {
  a.forEach(b => {
    if(b.innerText != "")
      poleNotEmpty++;
  });
});

if(poleNotEmpty === buttons.length * buttons[0].length)
  return null;

return false;

}