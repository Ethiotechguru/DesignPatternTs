"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorted = void 0;
// export interface Sortable {
// 	compar(i: number, j: number): boolean;
// 	swap(i: number, j: number): void;
// 	length: number;
// }
class Sorted {
    sort() {
        let j = this.length - 1;
        while (j > 1) {
            for (let i = 0; i < j; i++) {
                if (this.compar(i, i + 1)) {
                    this.swap(i, i + 1);
                }
            }
            j--;
        }
    }
}
exports.Sorted = Sorted;
