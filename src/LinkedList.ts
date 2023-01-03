import { Sorted } from "./Sorter";
class MyNode {
  next:any;
  constructor(public val:number){}
}
export class LinkedList extends Sorted{
  head:MyNode | null = null;
  count:number = 0;
  get length(){
    return this.count;
  }
  add(val:number):void{
    let node = new MyNode(val);
    if(!this.head){
      this.head = node;
    }else{
      let tail = this.head;
      while(tail.next){
        tail = tail.next;
      }
      tail.next = node;
    }
    this.count++;
  }
  at(index:number){
    if(!this.head){
      throw new Error("Something went wrong")
    }
    let counter = 0;
    let node = this.head;
    while(node){
      if(counter === index){
        return node;
      }
      counter++;
      node = node.next;
    }
    throw new Error("index out of bound")
  }
  compar(i:number,j:number):boolean{
    if(!this.head){
      throw new Error("List is empty");
    }
    return this.at(i).val>this.at(j).val;
  }
  swap(i:number,j:number){
    let leftNode = this.at(i);
    let rightNode = this.at(j);
    let temp = leftNode.val;
    leftNode.val = rightNode.val;
    rightNode.val = temp;
  }
  print(){
    if(this.head===null){
      throw new Error("List is Empty to print");
    }
    let node = this.head;
    while(node){
      console.log(node.val);
      node = node.next;
    }
  }
}