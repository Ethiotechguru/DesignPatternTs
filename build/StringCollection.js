"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringCollection = void 0;
const Sorter_1 = require("./Sorter");
class StringCollection extends Sorter_1.Sorted {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compar(i, j) {
        return this.data[i].toLowerCase() > this.data[j].toLowerCase();
    }
    swap(i, j) {
        const data = this.data.split("");
        let temp = data[i];
        data[i] = data[j];
        data[j] = temp;
        this.data = data.join("");
    }
}
exports.StringCollection = StringCollection;
