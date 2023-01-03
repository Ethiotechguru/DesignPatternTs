import { LinkedList } from "./LinkedList";
import { NumberCollection } from "./NumberCollection";
import { StringCollection } from "./StringCollection";
const numCollection = new NumberCollection([3, 2, 7, 5, 80, 1, 10, 4, 9, 6]);
numCollection.sort();
const strCollection = new StringCollection('MihiRet');
strCollection.sort();


console.log(numCollection.data);
console.log(strCollection.data);
const node = new LinkedList();

node.add(20);
node.add(4);
node.add(-2)
node.add(10);
node.add(3);
node.add(0)
node.add(30);
node.add(9);
node.sort();
node.print();


