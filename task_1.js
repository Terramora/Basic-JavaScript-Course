//Задать температуру в градусах по Цельсию.
// Вывести в alert соответствующую температуру в градусах по Фаренгейту.
// Подсказка: расчет идет по формуле Tf = (9 / 5) * Tc + 32, где Tf — температура по Фаренгейту, Tc — по Цельсию.

let tf, tc;
tc = prompt('Задайте температуру в градусах по Цельсию:', '30');
tf = (9 / 5) * tc + 32;
alert('Температура по Фаренгейту: ' + tf)