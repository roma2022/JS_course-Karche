'use strict';
// этот код работает в современном режиме
let message1 = 'Готов решить математическую задачу? :)';
alert(message1);

let message2 = 'Круто! Давай перейдём к самой задаче!';
alert(message2);

let number1 = 4;
typeof number1;
let number01 = ++number1;
// alert(number1);

let string1 = "10";
let number2 = Number( string1 );
typeof number2;
// alert(number2);

let number3 = 19;
let number03 = ++number3;
typeof number03;
// alert(number3);

let string2 = "15";
let example01 = Number( string2 );
let number4 = example01;
typeof number4;
// alert(number4);

let example02 = 50;
let number5 = example02 + 5;
typeof number5;
// alert(number5);

let x = `((${number5} + ${number01}) - (${number2} + ${number03})) / ${number1} = ?`;

let b = ((number5 + number01) - (number2 + number03)) / number1;

let y = prompt(`Чему будет равен этот пример?
              ${x}`);

if ( y < 0 && y < b ) {
   alert( "Это чересчур мало..." );
} else if ( y > 0 && y < b ) {
   alert( "Это слишком мало..." );
} else if ( y < 100 && y > b ) {
   alert( "Это слишком много..." );
} else if ( y > 100 && y > b ) {
   alert( "Это чересчур много..." );
} else if ( y == '' || y == null ) {
   alert( "Пустая строка не является ответом!" );
} else if ( y == b ) {
   alert( "Верно!" );
} else {
   alert("Неверно!");
}


