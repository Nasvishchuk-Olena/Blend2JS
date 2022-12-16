//1. Використовуючи функцію if...else,
//напишіть код, який буде запитувати:
//"Яка офіційна назва JavaScript?"
//Якщо користувач ввів "ECMAScript",
//то показувати через alert: "Вірно!"
//у противному випадку показати:"Не знаєте? ECMAScript!"

const promptName = prompt("Яка офіційна назва JavaScript?");
// if (promptName === "ECMAScript") {alert("Вірно!");

// } else {
//     alert("Не знаєте? ECMAScript!");

// }
//promptName === "ECMAScript" ? alert("Вірно!") : alert("Не знаєте? ECMAScript!");
const message =
  promptName === "ECMAScript" ? "Вірно!" : "Не знаєте? ECMAScript!";
alert(message);
