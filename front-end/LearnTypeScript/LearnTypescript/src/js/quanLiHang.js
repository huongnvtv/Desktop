"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuanLiHang = void 0;
const product_1 = require("./product");
class QuanLiHang {
    constructor() {
        var sp1 = new product_1.Product(1, 'Chuột Không Dây Logitech M590', 610000, 'Chuột Không Dây Logitech M590', true, './src/img/anhsp1.jpg');
        this._productList = [];
        this.addProduct(sp1);
    }
    getProducts() {
        return this._productList;
    }
    getProductById() {
        var motSp = new product_1.Product(1, 'Chuột Không Dây Logitech M590', 610000, 'Chuột Không Dây Logitech M590', true, './src/img/anhsp1.jpg');
        return motSp;
    }
    addProduct(sp) {
        this._productList.push(sp);
    }
    showProduct() {
        return '';
    }
    set productList(v) {
        this._productList = v;
    }
    get productList() {
        return this._productList;
    }
}
exports.QuanLiHang = QuanLiHang;
