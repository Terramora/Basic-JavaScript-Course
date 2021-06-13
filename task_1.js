class Bucket {
    constructor() {
        this.bucket = {}
    }

    add_product(name, price, count) {
        if (this.bucket.hasOwnProperty(name)) {
            this.bucket[name]['count']++
        }
        else this.bucket[name] = {'price': price, 'count': count}
    }

    total_price() {
        let total = 0
        for (let key in this.bucket) {
            total += this.bucket[key]['price'] * this.bucket[key]['count'];
        }
        return total;
    }

}

function add_bucket(name, price, count) {
    bucket.add_product(name, price, count);
    while (main.hasChildNodes()) {
        main.removeChild(main.firstChild);}
    gen_bucket(bucket);
}

let bucket = new Bucket();
bucket.add_product('tv', 20000, 1);
bucket.add_product('phone', 50000, 1);
bucket.add_product('ps4pro', 40000, 1);
bucket.add_product('gamepad', 5000, 2);

let main = document.getElementById('bucket');


function gen_cards() {
    let section = document.getElementById('cards');
    for (let i = 0; i < 4; i++) {
        let div = document.createElement("div");
        let img = document.createElement("img");
        let h3 = document.createElement("h3");
        let p_with = document.createElement("p");
        let p_withou = document.createElement("p");
        let buttom = document.createElement("button");
        p_with.textContent = '3 450 руб.';
        p_with.classList = 'price';
        p_withou.textContent = 'Выполнена из денима и декорирована искусственным мехом';
        buttom.setAttribute("onclick", "add_bucket('Куртка джинсовая', 3450, 1)");
        buttom.textContent = 'В корзину';
        h3.textContent = 'Куртка джинсовая';
        img.src = 'img/GALCAUR.jpg_q50.jpg';
        div.classList = 'card';
        div.appendChild(img);
        div.appendChild(h3);
        div.appendChild(p_with);
        div.appendChild(p_withou);
        div.appendChild(buttom);
        section.appendChild(div);

    }

}

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
gen_cards();
if (Object.keys(bucket.bucket).length > 0) gen_bucket(bucket)
else main.insertAdjacentHTML('afterbegin', '<p>Корзина пуста</p>')