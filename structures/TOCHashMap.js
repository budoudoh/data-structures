export default class TOCHashMap{
    constructor(){
        this.map = new Map();
    }

    add(key, value){
        this.map.set(key, value);
        return this.size();
    }

    get(key){
        return this.map.get(key);
    }

    set(key, value){
        if(this.map.get(key) === undefined)
            return false;
        this.map.set(key, value);
        return true;
    }

    remove(key){
        this.map.delete(key);
        return this.size();
    }

    size(){
        return this.map.size;
    }
}