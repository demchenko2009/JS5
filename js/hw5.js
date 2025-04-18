


// Створіть змінну для зберігання номера місяця. За номером місяця визначайте пору року 
// і виводьте відповідне повідомлення.

// 1 ВАР

const monat = Number(prompt("Введіть номер місяця як номер 1/12"));

switch (monat) {
    case 1:
        console.log("1.01.2025 січень, знову ця зима");
        break;
    case 2:
        console.log("1.02.2025 лютий знову ця, зима");
        break;
    case 3:
        console.log("1.03.2025 березень О вже, весна");
        break;
    case 4:
        console.log("1.04.2025 квітень, весна");
        break;
    case 5:
        console.log("1.05.2025 травень, ЩЕ МІСЯЦЬ ДО КАНІКУЛ, весна");
        break;
    case 6:
        console.log("1.06.2025 червень КАНІКУЛИ,  літо");
        break;
    case 7:
        console.log("1.07.2025  КАНІКУЛИ, липень,  літо");
        break;
    case 8:
        console.log("1.08.2025  КАНІКУЛИ серпень, літо");
        break;
    case 9:
        console.log("1.09.2025 новий срок  вересень,осінь");
        break;
    case 10:
        console.log("1.10.2025  новий срок жовтень,осінь");
        break;
    case 11:
        console.log("1.11.2025 новий срок листопад, осінь");
        break;
    case 12:
        console.log("1.12.2025 ось і пройшов рік грудень, зима");
        break;
    
    default:
        console.log("не мае такого місяцю");
        
}

//2 ВАР


const numberssMonth = Number(prompt("Введіть номер місяця від 1 до 12:"));

if (numberssMonth >= 1 && numberssMonth <= 2 || numberssMonth === 12) {

    console.log("Зима");

} else if (numberssMonth >= 3 && numberssMonth <= 5) {
    console.log("Весна");

} else if (numberssMonth >= 6 && numberssMonth <= 8) {
    console.log("Літо");

} else if (numberssMonth >= 9 && numberssMonth <= 11) {
    console.log("Осінь");

} else {
    console.log("не ВЕРНО");

}





// Створіть змінну для зберігання назви кольору. Виводьте повідомлення відповідно до вибраного кольору:
//  якщо "червоний" — "стоп", "зелений" — "йти", "жовтий" — "чекати".

const color = prompt("Введіть колір світлофора: зелений, жовтий, червоний").toLowerCase().trim();
switch (color) {
    case "зелений":
        console.log("йти");
        break;
    case "жовтий":
        console.log("чекати");
        break;
    case "червоний":
        console.log("стоп");
        break;

    default:
        console.log("виберіть нормальний колір)");
        
}



// Створіть змінні для зберігання двох чисел та оператора (як у списку select).
//  Виконайте відповідну операцію та виведіть результат. У випадку ділення на нуль — виведіть попередження.

let zahl1 = Number(prompt("Введіть число"));
let zahl2 = Number(prompt("Введіть друге число"));
let helfe = prompt("введіть оператор *, /, -, +");
let tauschen;

switch (helfe) {
    case "+":
        tauschen = zahl1 + zahl2;
        break;
    case "-":
        tauschen = zahl1 - zahl2;
        break;
    case "*":
        tauschen = zahl1 * zahl2;
        break;
    case "/":
        if (zahl2 === 0) {
            console.log("На 0 не ділиться");
        } else {
            tauschen = zahl1 / zahl2;
        }
        break;

    default:
        console.log("Не можимо вам допомогти");

}

console.log(tauschen);







