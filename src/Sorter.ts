
// export interface Sortable {
// 	compar(i: number, j: number): boolean;
// 	swap(i: number, j: number): void;
// 	length: number;
// }
export abstract class Sorted {
	abstract swap(i: number, j: number): void;
	abstract length:number;
	abstract compar(i: number, j: number): boolean;

	sort(): void {
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
