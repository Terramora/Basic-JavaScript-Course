//Реализовать четыре основные арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.

function f(a, b) {
    return 'Сумма: ' + (a + b) + ', разница: ' + (a - b) + ', произведение: ' + (a * b) + ', частное: ' + (a / b)
}

alert(f(parseInt(prompt('Введите a: ', '10')), parseInt(prompt('Введите b: ', '2'))))