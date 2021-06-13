// Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре.
//     Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
//     Пустая корзина должна выводить строку «Корзина пуста»;
// Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
class Bucket {
    constructor() {
        this.bucket = {}
    }

    add_product(name, price, count) {
        this.bucket[name] = {'price': price, 'count': count}
    }

    total_price() {
        let total = 0
        for (let key in this.bucket) {
            total += this.bucket[key]['price'] * this.bucket[key]['count'];
        }
        return total;
    }

}

let bucket = new Bucket();
bucket.add_product('tv', 20000, 1);
bucket.add_product('phone', 50000, 1);
bucket.add_product('ps4pro', 40000, 1);
bucket.add_product('gamepad', 5000, 2);

let main = document.getElementById('main');


function gen_bucket(bucket) {
    let dl = document.createElement('dl');
    for (let key in bucket.bucket) {
        let dt = document.createElement('dt');
        let price = document.createElement('dd');
        let count = document.createElement('dd');
        dt.textContent = 'Товар - ' + key + ':';
        price.textContent = 'Стоимость: ' + bucket.bucket[key]['price'];
        count.textContent = 'Количество: ' + bucket.bucket[key]['count'];
        dt.appendChild(count);
        dt.appendChild(price);
        dl.appendChild(dt);

    }
    let dt = document.createElement('dt');
    dt.textContent = 'Total: ';
    let price = document.createElement('dd');
    price.textContent = bucket.total_price();
    dt.appendChild(price);
    dl.appendChild(dt);
    main.appendChild(dl);


}

if (Object.keys(bucket.bucket).length > 0) gen_bucket(bucket)
else main.insertAdjacentHTML("beforebegin", '<p>Корзина пуста</p>')