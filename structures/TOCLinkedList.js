export default class TOCLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    add(value){
        let temp = new TOCLinkedListNode(value);
        if(this.head == null){
            this.head = temp;
            return true;
        }

        if(this.tail == null){
            this.head.setNext(temp);
            this.tail = this.head.getNext();
            return true;
        }

        let current = new TOCLinkedListNode(value);
        this.tail.setNext(current);
        this.tail = this.tail.getNext();
        return true
        
    }

    isEmpty(){
        return this.head == null;
    }

    remove(){
        this.head = this.head.getNext();
        return true;
    }

    first(){
        return this.head;
    }

    last(){
        if(this.tail == null)
            return this.head;
        return this.tail;
    }
}

class TOCLinkedListNode{
    constructor(value){
        this.value = value;
        this.next = null;
    }
    
    getValue(){
        return this.value;
    }

    getNext(){
        return this.next;
    }

    setNext(next){
        this.next = next;
    }
}