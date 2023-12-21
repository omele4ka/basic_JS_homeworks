// Задание 1
// Создайте функцию которая возводит переданное число в куб, 
// необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

'use strict';

function cubeNumber(num) {
    return num ** 3;
}

console.log(cubeNumber(2) + cubeNumber(3));