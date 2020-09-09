export default class TOCStack{
    constructor(){
        this.stack = [];
    }

    push(value){
        this.stack.splice(0, 0, value);
        return true;
    }

    pop(){
        let temp = this.peek();
        this.stack.splice(0, 1);
        return temp;
    }

    peek(){
        return this.stack[0];
    }

    isEmpty(){
        return this.size() == 0;
    }

    size(){
        return this.stack.length;
    }
}