//Объявить две целочисленные переменные — a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму;
// Ноль можно считать положительным числом.

let a = parseInt(prompt('Введите целочисленное а: ', '1')),  b = parseInt(prompt('Введите целочисленное b: ', '-5'));


if (a >= 0 && b >= 0)
{
    alert('Разность чисел: ' + (a - b));
}
else if (a < 0 && b < 0)
{
    alert('Произведение чисел: ' + (a * b));
}
else
{
    alert('Сумма чисел: ' + (a + b));
}