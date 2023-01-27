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

// String to HH:MM
// const promptString = prompt('Give number of minutes:');
// const hours = String(Math.floor((promptString / 60))).padStart(2, 0);
// const minutes = String(promptString % 60).padStart(2, 0);

// console.log(`${hours}:${minutes}`);

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

//4. Напишіть код, який буде запитувати "Hello, please enter your login!"
//логін за допомогою prompt і логувати результат у консоль браузера

//Якщо нажали клавішу Esc, то вивести у консоль рядок "Authorization has been canceled"
//Якщо користувач вводить щось відмінне від "admin", то вивести рядок "Goodbye!"
//Якщо користувач вводить "admin", то prompt запитує пароль (Please enter your password).

//Пароль перевіряти так:
//Якщо нажали клавішу Esc, то вивести у консоль рядок "Authorization has been canceled"
//Якщо користувач вводить щось відмінне від "adminPassword", то вивести рядок "Goodbye!"
//Якщо користувач вводить "adminPassword", то вивести у консоль рядок "Hello!"

// const login = prompt("Hello, please enter your login!");
// console.log(login);
// switch (login) {
//     case null:
//         console.log("Authorization has been canceled")
//         break;
//     case 'admin':
//         const password = prompt('Please enter your password')
//         switch (password) {
//             case null:
//                 console.log("Authorization has been canceled")
//                 break;
//             case 'adminPassword':
//                 console.log("Hello!")
//                 break;

//             default: console.log("Goodbye!")
//                 break;
//         }

//         break;

//     default: console.log("Goodbye!")
//         break;
// }
//5. При завантаженні сторінки користувачу у prompt пропонується ввести число 'Hello, enter please the number.'.
// Введене число додається до значення змінної total.
//Операція введення числа продовжується до тих пір, поки користувач не натисне кнопку Cancel у prompt.
//Після того, як користувач припинив введення і натиснув кнопку Cancel, показати alert з рядком "The total sum of the entered numbers is [number]."
//Робити перевірку, що користувач ввів саме число, а не інший тип даних не потрібно.
// let total = 0;
// let check = true;

// do {
//   let inputNumber = prompt("Hello, enter please the number.");
//   if (inputNumber === null) {
//     check = !check;
//   } else {
//       total += +inputNumber;//приведение к числу с по. унарного плюс
//       total += Number(inputNumber);
//     console.log(total);
//   }
// } while (check);
// console.log(`The total sum of the entered numbers is ${total}`);


//Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt і викликає callback функцію
//greet(name) - це коллбек, яка приймає ім'я і логує в консолі рядок "Hi, <name>"
//Реалізуй перевірку, що prompt не пустий

// function letMeSeeYourName(callback) {
// const name = prompt("What is your name?");
// callback(name);
// }

// function greet(name) {
//     if(!name) {
        
//         return
//     }
//     console.log(`Hi, ${name}`);
// }

// letMeSeeYourName(greet);