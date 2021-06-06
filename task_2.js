// Продолжить работу с интернет-магазином:
// В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// Реализуйте такие объекты.
// Перенести функционал подсчета корзины на объектно-ориентированную базу.

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
console.log(bucket.bucket);
console.log(bucket.total_price());
