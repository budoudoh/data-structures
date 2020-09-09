export default class TOCArray {
  constructor(length){
      this.list = [];
      for(let i =0; i < length; i++){
        this.list.push(null);
      }
  }

  get(index){
    if(index < 0 || index >= this.size())
      return undefined;
    return this.list[index]
  }

  set(index, value){
    if(index < 0 || index >= this.size())
      return false;
    this.list[index] = value;
    return true;
  }

  size(){
    return this.list.length;
  }

}