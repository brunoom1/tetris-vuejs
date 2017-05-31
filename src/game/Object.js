export default class Object{

  x = 0; 
  y = 0;
  w = 0;
  h = 0;

  setPosition(x, y){
    this.x = x;
    this.y = y;
    return this;
  }

  getPosition(){
    return {x: this.x, y: this.y}
  }

  setSize(w, h){
    this.w = w;
    this.h = h;
    return this;
  }

  getSize(){
    return {w: this.w, h: this.h}
  }

  constructor(){

  }

}