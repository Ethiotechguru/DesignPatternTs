"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const Sorter_1 = require("./Sorter");
class MyNode {
    constructor(val) {
        this.val = val;
    }
}
class LinkedList extends Sorter_1.Sorted {
    constructor() {
        super(...arguments);
        this.head = null;
        this.count = 0;
    }
    get length() {
        return this.count;
    }
    add(val) {
        let node = new MyNode(val);
        if (!this.head) {
            this.head = node;
        }
        else {
            let tail = this.head;
            while (tail.next) {
                tail = tail.next;
            }
            tail.next = node;
        }
        this.count++;
    }
    at(index) {
        if (!this.head) {
            throw new Error("Something went wrong");
        }
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error("index out of bound");
    }
    compar(i, j) {
        if (!this.head) {
            throw new Error("List is empty");
        }
        return this.at(i).val > this.at(j).val;
    }
    swap(i, j) {
        let leftNode = this.at(i);
        let rightNode = this.at(j);
        let temp = leftNode.val;
        leftNode.val = rightNode.val;
        rightNode.val = temp;
    }
    print() {
        if (this.head === null) {
            throw new Error("List is Empty to print");
        }
        let node = this.head;
        while (node) {
            console.log(node.val);
            node = node.next;
        }
    }
}
exports.LinkedList = LinkedList;
