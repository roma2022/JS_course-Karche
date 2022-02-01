'use strict';
// этот код работает в современном режиме
let message1 = 'Готов решить математическую задачу? :)';
alert(message1);
//Если вопрос предполагает ответ да\нет то логично использовать confirm и 
// обработать ответы таким образом чтобы таки перейти к решению, 
// в случае отказа вывести что-то типа не ленись..ну и т.д.


/* let message2 = 'Круто! Давай перейдём к самой задаче!';
alert(message2); */

alert('Круто! Давай перейдём к самой задаче!'); // этот код абсолютно аналогичен тому что закомменчен выше.
//Поскольку message2 больше нигде не используется то и тут плодить сущности не следует.

let number1 = 4;
typeof number1; //вот тут вообще не понял...
let number01 = ++number1;
// alert(number1);

let string1 = "10";
let number2 = Number(string1);
typeof number2; // возможно ты хотел сделать что-то типа alert(typeof number2); или console.log(typeof number2);
// тогда да, понятно (вывод типа переменной в окно или консоль).
// alert(number2);

let number3 = 19;
let number03 = ++number3;
typeof number03;
// alert(number3);

let string2 = "15";
let example01 = Number(string2);
let number4 = example01;
typeof number4;
// alert(number4);

let example02 = 50;
let number5 = example02 + 5;
typeof number5;
// alert(number5);

const x = `((${number5} + ${number01}) - (${number2} + ${number03})) / ${number1} = ?`;
//В принципе тут все переменные можно было бы объявить с помощью const
//https://learn.javascript.ru/variables#konstanty
// let используется например так:
let counter = 0;
counter = ++counter;
console.log(counter); // 1

const b = ((number5 + number01) - (number2 + number03)) / number1;

const y = +prompt(`Чему будет равен этот пример?
              ${x}`); // prompt возвращает строку, преобразуем к числу с помощью унарного +.

//хорошо бы предварительно проверить что переменная у - число (isNaN или isFinite) и 
//заставить повторять ввод до тех пор пока не будет введено число. 

//Если вариантов больше 2-х хорошим тоном является использование switch:
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/switch
if (y < 0 && y < b) {
    alert("Это чересчур мало...");
} else if (y > 0 && y < b) {
    alert("Это слишком мало...");
} else if (y < 100 && y > b) {
    alert("Это слишком много...");
} else if (y > 100 && y > b) {
    alert("Это чересчур много...");
} else if (y == '' || y == null) {
    alert("Пустая строка не является ответом!");
} else if (y == b) {
    alert("Верно!");
} else {
    alert("Неверно!");
}
//А в целом для начала очень даже ничего - молодец!
// Попробуй переделать с учетом замечаний.