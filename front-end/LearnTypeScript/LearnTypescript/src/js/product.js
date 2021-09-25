"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(id, name, price, description, status, img) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._description = description;
        this._status = status;
        this._img = img;
    }
    // id
    get id() {
        return this._id;
    }
    set id(v) {
        this._id = v;
    }
    // name
    get name() {
        return this._name;
    }
    set name(v) {
        this._name = v;
    }
    //price
    get price() {
        return this._price;
    }
    set price(v) {
        this._price = v;
    }
    //description
    get description() {
        return this._description;
    }
    set description(v) {
        this._description = v;
    }
    //status
    get status() {
        return this._status;
    }
    set status(v) {
        this._status = v;
    }
    //img
    get img() {
        return this._img;
    }
    set img(v) {
        this._img = v;
    }
}
exports.Product = Product;
