'use strict';
// этот код работает в современном режиме
let message1 = confirm('Готов решить математическую задачу? :)');
if (message1) {
    alert("Круто! Давай перейдём к самой задаче!");
 } else {
    alert("Не ленись! Возвращайся, когда будешь в настроении ;P");
do {
   let message1 = confirm('Готов решить математическую задачу? :)');
   if (message1 == true) {
      alert("Круто! Давай перейдём к самой задаче!"); break;
   } else {
      alert("Не ленись! Возвращайся, когда будешь в настроении ;P");
   }
} while (message1 !== true);

let number1 = 4;
console.log ( typeof number1 );
let number01 = ++number1;
// alert(number1);

let string1 = "10";
let number2 = Number( string1 );
console.log ( typeof number2 );
// alert(number2);

let number3 = 19;
let number03 = ++number3;
console.log ( typeof number03 );
// alert(number3);

let string2 = "15";
let example01 = Number( string2 );
let number4 = example01;
console.log ( typeof number4 );
// alert(number4);

let example02 = 50;
let number5 = example02 + 5;
console.log ( typeof number5 );
// alert(number5);

const x = `((${number5} + ${number01}) - (${number2} + ${number03})) / ${number1} = ?`;

const b = ((number5 + number01) - (number2 + number03)) / number1;
console.log(b);

const y = +prompt(`Чему будет равен этот пример?
              ${x}`); // prompt возвращает строку, преобразуем к числу с помощью унарного +.;

if (isNaN(y) == true) {
   while ( isNaN( y ) == true ) {
      const y = +prompt(`Чему будет равен этот пример?
              ${x}`);
      if ( isNaN( y ) !== true ) break;
   }
}

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
 }//Без неё почему-то файл не проходит (выдаёт ошибку)
 
