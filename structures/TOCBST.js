export default class TOCBST{
    constructor(){
        this.root = null;
    }

    add(value){
        let temp = new TOCBSTNode(value);

        if(this.isEmpty()){
            this.root = temp;
            return true;
        }

        let current = this.root;

        while(current != null){
            if(current.getValue() === value)
                return false;
            
            if(current.getValue() > value && current.getLeft() == null){
                current.setLeft(temp);
                return true;
            }

            if(current.getValue() < value && current.getRight() == null){
                current.setRight(temp);
                return true;
            }

            if(current.getValue() > value)
                current = current.getLeft();
            else
                current = current.getRight();
        }

        return false;
    }

    isEmpty(){
        return this.root == null;
    }

    getRoot(){
        return this.root;
    }
}

class TOCBSTNode{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
    
    getValue(){
        return this.value;
    }

    getLeft(){
        return this.left;
    }

    setLeft(left){
        this.left = left;
    }

    getRight(){
        return this.right;
    }

    setRight(right){
        this.right = right;
    }
}