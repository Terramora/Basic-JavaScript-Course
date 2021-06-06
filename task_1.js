//Написать функцию, преобразующую число в объект.
// Передавая на вход число от 0 до 999, надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни.
// Например, для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
// Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.


function f(num) {
    if (num < 0 || num > 999) {
        console.log('Число не соответствует диапазону!');
        return {};
    }
    let result = {
        units: 0,
        dozens: 0,
        hundreds: 0
    };
    for (let i = 0; num > 0; i++) {
        let key = '';
        if (i === 0) key = 'units';
        else if (i === 1) key = 'dozens';
        else key = 'hundreds';
        result[key] = num % 10;
        num = parseInt(num / 10);

    }
    return result;
}

console.log(f(1000))