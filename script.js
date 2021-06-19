let popup = document.getElementById('popup');
let bucket_counter = document.getElementById('bucket-counter');
let bucket_popup = document.getElementById('section-1');
let address_popup = document.getElementById('section-2');
let comment_popup = document.getElementById('section-3');
let next_section = document.getElementById('nextSection');
let current_section = 1;

let items = [['Куртка джинсовая', 3450, 'img/New-Diamonds-Paillette-Woman-Coats-Blaser-Water-Wash-Denim-Jackets-for-Women-Casual-Ladies-Jeans-Cardigan.jpg', 'Выполнена из денима и декорирована искусственным мехом'],
    ['Джинсы Texas', 4628, 'img/загруженное.png', 'хлопок 100%'], ['КроссовкиWILD ', 3999, 'img/загруженное (1).png', 'Как бы далеко вы ни зашли, вы не пожалеете.']]


function popped() {
    popup.style.visibility = 'hidden';
    bucket_popup.style.visibility = 'hidden';
    address_popup.style.visibility = 'hidden';
    comment_popup.style.visibility = 'hidden';

}

function popups() {
    popup.style.visibility = 'visible';
    bucket_popup.style.visibility = 'visible';
}

function nextSection() {
    if (bucket_popup.style.visibility == 'visible') {
        bucket_popup.style.visibility = 'hidden';
        address_popup.style.visibility = 'visible';

    }
    else if (address_popup.style.visibility == 'visible') {
        address_popup.style.visibility = 'hidden';
        comment_popup.style.visibility = 'visible';

    }
    else {
        comment_popup.style.visibility = 'hidden';
        bucket_popup.style.visibility = 'visible';
    }
}

class Bucket {
    constructor() {
        this.bucket = {}
    }

    add_product(name, price, count) {
        if (this.bucket.hasOwnProperty(name)) {
            this.bucket[name]['count']++
        } else this.bucket[name] = {'price': price, 'count': count}
    }

    del_product(name){
        if (this.bucket.hasOwnProperty(name)) {
            if (--this.bucket[name]['count'] === 0) delete this.bucket[name]
        }
        else console.log('Такого товара нет.')
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
    draws_bucket();
}

function dell_bucket(name) {
    bucket.del_product(name);
    draws_bucket();
}

let bucket = new Bucket();


function gen_bucket(bucket) {
    let dl = document.createElement('dl');
    for (let key in bucket.bucket) {
        let dt = document.createElement('dt');
        let price = document.createElement('dd');
        let count = document.createElement('dd');
        let buttom = document.createElement("button");
        buttom.setAttribute("onclick", `dell_bucket('${key}')`);
        buttom.textContent = 'Удалить';
        dt.textContent = 'Товар - ' + key + ':';
        price.textContent = 'Стоимость: ' + bucket.bucket[key]['price'];
        count.textContent = 'Количество: ' + bucket.bucket[key]['count'];
        dt.appendChild(count);
        dt.appendChild(price);
        dt.appendChild(buttom);
        dl.appendChild(dt);


    }
    bucket_counter.textContent = 'Bucket: ' + bucket.total_price() + 'p'
    bucket_popup.appendChild(dl);
}


function draws_bucket() {
    while (bucket_popup.hasChildNodes()) {
        bucket_popup.removeChild(bucket_popup.firstChild);
    }
    if (Object.keys(bucket.bucket).length > 0) gen_bucket(bucket)
    else bucket_counter.textContent = 'Bucket: корзина пуста'

}


function gen_cards() {
    let section = document.getElementById('cards');
    for (let item of items) {
        let div = document.createElement("div");
        let img = document.createElement("img");
        let h3 = document.createElement("h3");
        let p_with = document.createElement("p");
        let p_withou = document.createElement("p");
        let buttom = document.createElement("button");
        p_with.textContent = item[1];
        p_withou.textContent = item[3];
        buttom.setAttribute("onclick", `add_bucket('${item[0]}', '${item[1]}', 1)`);
        buttom.textContent = 'В корзину';
        h3.textContent = item[0];
        img.src = item[2];
        div.classList = 'card';
        div.appendChild(img);
        div.appendChild(h3);
        div.appendChild(p_with);
        div.appendChild(p_withou);
        div.appendChild(buttom);
        section.appendChild(div);

    }

}

draws_bucket()
gen_cards()