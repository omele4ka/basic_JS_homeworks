"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

const arrTask2 = [];
let sum = 0;
for (let i = 0; i < 5; i++) {
  arrTask2.push(Math.floor(Math.random() * 9));
  sum += arrTask2[i];
}
console.log(arrTask2);
console.log(sum);

let minValue = arrTask2[0];
for (let j = 0; j < arrTask2.length; j++) {
  if (arrTask2[j] < minValue) {
    minValue = arrTask2[j];
  }
}
console.log(minValue);

const newArr = [];
for (let k = 0; k < arrTask2.length; k++) {
  if (arrTask2[k] === 3) {
    newArr.push(k);
  }
}
console.log(newArr);
