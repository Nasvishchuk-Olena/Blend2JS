//1. Використовуючи функцію if...else,
//напишіть код, який буде запитувати:
//"Яка офіційна назва JavaScript?"
//Якщо користувач ввів "ECMAScript",
//то показувати через alert: "Вірно!"
//у противному випадку показати:"Не знаєте? ECMAScript!"

// const promptName = prompt("Яка офіційна назва JavaScript?");
//Variant 1
// if (promptName === "ECMAScript") {alert("Вірно!");

// } else {
//     alert("Не знаєте? ECMAScript!");

// }
//Variant 2
//promptName === "ECMAScript" ? alert("Вірно!") : alert("Не знаєте? ECMAScript!");

//Variant 3
// const message =
//   promptName === "ECMAScript" ? "Вірно!" : "Не знаєте? ECMAScript!";
// alert(message);


//2. Напишіть програму, яка отримує від користувача через prompt()
//число (кількість хвилин) і виведе в консоль
//рядок у форматі годин і хвилин, тобто 70 має повернути у консоль "01:10"
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart


/* 
// String to HH:MM
const promptString = prompt('Give number of minutes:');
const hours = String(Math.floor((promptString / 60))).padStart(2, 0);
const minutes = String(promptString % 60).padStart(2, 0);

console.log(`${hours}:${minutes}`);
 */

//3. Напишите цикл, который выводит в консоль
//числа от max до min по убыванию
// Выведите в консоль всех четных чисел от min до max


// const max = 55;
// const min = 10;
// let total = 0;

// for(let i = max; i >= min; i -= 1) {
//     if (i % 2 === 0) {
//     console.log(i); 
//     total += i;
//     }
// }
// console.log(total)