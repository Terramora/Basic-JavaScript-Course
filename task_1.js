// Создать функцию, генерирующую шахматную доску.
//     Можно использовать любые html-теги. 
//     Доска должна быть верно разлинована на черные и белые ячейки. 
//     Строки должны нумероваться числами от 1 до 8, столбцы — латинскими буквами A, B, C, D, E, F, G, H.

let main = document.getElementById('main');
let table = document.createElement('table');
main.appendChild(table);

function isEven(n) {
    return n % 2 === 0;
}

for (let i = 9; i >= 1; i--) {
    let tr = document.createElement('tr');
    table.appendChild(tr);
    if (i === 9) {
        tr.insertAdjacentHTML('beforeend', '<th></th>');
        for (let item of ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']) tr.insertAdjacentHTML('beforeend', `<th>${item}</th>`);
    } else {
        tr.insertAdjacentHTML('beforeend', `<th>${i}</th>`);
        for (let j = 1; j <= 8; j++) {
            if (isEven(i) == isEven(j)) tr.insertAdjacentHTML('beforeend', '<td class="light"></td>');
            else tr.insertAdjacentHTML('beforeend', '<td class="dark"></td>');
        }
    }

}
table.classList.add('chess-board');