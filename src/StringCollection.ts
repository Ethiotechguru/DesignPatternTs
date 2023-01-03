import { Sorted } from "./Sorter";
export class StringCollection extends Sorted {
	constructor(public data: string) {
    super();
  }
	get length(): number {
		return this.data.length;
	}
	compar(i: number, j: number) {
		return this.data[i].toLowerCase() > this.data[j].toLowerCase();
	}
	swap(i: number, j: number) {
		const data = this.data.split("");
		let temp = data[i];
		data[i] = data[j];
		data[j] = temp;
		this.data = data.join("");
	}
}