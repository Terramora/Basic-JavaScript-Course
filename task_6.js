//Реализовать функцию с тремя параметрами:
// function mathOperation(arg1, arg2, operation), где arg1, arg2 — значения аргументов, operation — строка с названием операции.
// В зависимости от переданного значения выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (применить switch).

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return arg1 + arg2;
        case '-':
            return arg1 - arg2;
        case '*':
            return arg1 * arg2;
        case '/':
            return arg1 / arg2;
        default:
            return 'Такого оператора нет!'
    }
}

alert(mathOperation(parseInt(prompt('Введите arg1: ', '10')), parseInt(prompt('Введите arg2: ', '10')), prompt('Введите тип операции из доступных: +, -, *, /', '+')))