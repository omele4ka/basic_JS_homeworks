// Задание 3
// Пользователь с клавиатуры вводит 3 числа, 
// необходимо создать функцию, которая определяет 
// максимальное значение среди этих чисел

'use strict';


const userNum1 = +prompt('Введите первое число');
const userNum2 = +prompt('Введите второе число');
const userNum3 = +prompt('Введите третье число');

function maxUserNumber(num1, num2, num3) {
    if (!Number.isFinite(num1) || !Number.isFinite(num2) || !Number.isFinite(num3)){
        console.log('Данные введены некорректно!');
    } else if(num1 > num2 && num1 > num3) {
        console.log(`Максимальное число ${num1}`);
    } else if(num2 > num1 && num2 > num3) {
        console.log(`Максимальное число ${num2}`);
    } else {
        console.log(`Максимальное число ${num3}`);
    }
}

maxUserNumber(userNum1, userNum2, userNum3);