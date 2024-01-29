let rand = (min, max) => Math.floor(Math.random() * (max - min)) + min;
let arr = new Array(15);

let max = -1000;
let sum = 0;
let count = 0;

for(let i = 0; i < arr.length; i++)
    arr[i] = rand(-100, 100);

arr.sort(x = (a, b) => a - b);
max = arr[arr.length - 1];

for(let i = 0; i < arr.length; i++)
{
    if(arr[i] < 0) {
        count++;
        continue;
    }

    if(arr[i] > 0) sum += arr[i];
}

console.log("Массив: " + arr);
console.log(`Максимальный элемент массива: ${max} с индексом ${arr.length - 1}`);
console.log(`Сумма положительных элементов массива: ${sum}`);
console.log(`Количество отрицательных элементов массива: ${count}`);