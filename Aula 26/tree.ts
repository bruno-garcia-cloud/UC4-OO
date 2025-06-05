export class Node<T>{
  protected value:T;
  protected children:Node<T>[] = [];

    constructor(valueConst:T){
        this.value = valueConst
    }

    addChild(child:Node<T>){this.children.push(child)};

    getChildren():Node<T>[]{
        return this.children
    }
}
const rootNode = new Node("A")
const rootNodeB = new Node("B")
const rootNodeC = new Node("C")

rootNode.addChild(rootNodeB);
rootNode.addChild(rootNodeC);



console.log(rootNode.getChildren());
console.log(rootNodeB.getChildren());
console.log(rootNodeC.getChildren());