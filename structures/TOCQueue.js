export default class TOCQueue{
    constructor(){
        this.queue = [];
    }

    enqueue(value){
        this.queue.push(value);
        return this.size();
    }

    dequeue(){
        let temp = this.peek();
        this.queue.splice(0, 1);
        return temp;
    }

    peek(){
        return this.queue[0];
    }

    isEmpty(){
        return this.queue.length == 0;
    }

    size(){
        return this.queue.length;
    }
}