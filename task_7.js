//* Сравнить null и 0. Объяснить результат.

alert(null > 0); // false
alert(null == 0); // false
alert(null >= 0); // true

//http://javascript.ru/ecma/part11#a-11.8.4
// 11.8.4 Оператор больше-или-равно ( >= )
// Значение нетерминала ВыражениеОтношения : ВыражениеОтношения >= ВыражениеСдвига вычисляется по следующей схеме:
//
// 1. Вычислить значение ВыраженияОтношения.
//
// 2. Вызвать ПолучитьЗначение(Результата(1)).
//
// 3. Вычислить значение ВыраженияСдвига.
//
// 4. Вызвать ПолучитьЗначение(Результата(3)).
//
// 5. Произвести сравнение Результат(2) < Результат(4) (см. раздел 11.8.5).
//
// 6. Если Результат(5) равен true или undefined - вернуть false. Иначе вернуть true.

//На основании 6-го пункта, предполагаю, что если null < 0 не дает True или undefined, то он отдаст True.