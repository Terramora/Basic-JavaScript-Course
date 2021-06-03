// С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
const checkSimpleNum = (num) => {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let i = 0;
while (i <= 100) {
    if (checkSimpleNum(i)) { //на каждой итерации проверяем через функцию на true false;
        console.log(i);
    }
    ++i;
}
