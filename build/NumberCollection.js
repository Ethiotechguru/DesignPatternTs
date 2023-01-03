"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberCollection = void 0;
const Sorter_1 = require("./Sorter");
class NumberCollection extends Sorter_1.Sorted {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compar(i, j) {
        return this.data[i] > this.data[j];
    }
    swap(i, j) {
        let temp = this.data[j];
        this.data[j] = this.data[i];
        this.data[i] = temp;
    }
}
exports.NumberCollection = NumberCollection;
