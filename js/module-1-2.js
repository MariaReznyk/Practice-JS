// ? Якщо змінна а дорівнює 10, виведіть на екран "Вірно!", фнакше виведіть "Невірно!"

const checkIfTen = function (num) { 
    num === 10 ? console.log('Вірно!') : console.log('Невірно!');
}

checkIfTen(10);

// function checkIfTen(a) {
//     if (a === 10) {
//         console.log('Вірно!')
//     } else {
//         console.log('Невірно!')
//     }
// }

// ? Напишіть програму, яка отримує від користувача кількість хвилин і виводить час у форматі годин та хвлин

const formatTime = function (minutes) {
    let hours = Math.floor(minutes / 60);

    let modifiedHours = String(hours).padStart(2, '0'); // додає попереду 0, якщо кількість символів менше 2
    let modifiedMinutes = String(minutes % 60).padStart(2, '0');

    console.log(`${modifiedHours}:${modifiedMinutes}`);
}

formatTime(621);

// ? За допомогою циклу for знайдіть всі парні числа в проміжку, виведіть їх в консоль, знайдіть їх сумму та середнє арифметичне

const calcAverage = function (a, b) { 
    let total = 0;
    let counter = 0;

    for (let i = a; i <= b; i++) {
        if (i % 2 === 0) {
            total += i;
            console.log(i);
            counter++;
        }
     }

    console.log(`total:${total}`);
    console.log(`mediana:${total / counter}`);
}

calcAverage(2, 10);

