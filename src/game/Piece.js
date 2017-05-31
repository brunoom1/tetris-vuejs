import Object from "./Object";
import Game from "./Game";
import config from "./config";

export default class Piece extends Object{

  blocks = [];
  velocidade = 1;
  animacaoLiberada = true;

  // ponto de rotação da peça
  point_center = {x: 0, y: 2};

  constructor(){
    super();
  }

  rotate(){
    for(var i = 0; i < this.blocks.length; i++){
      var pos = this.blocks[i].getPosition();
      this.blocks[i].setPosition(
        (pos.x - this.point_center.x) * 0 - (pos.y - this.point_center.y) * 1, 
        (pos.x - this.point_center.x) * 1 + (pos.y - this.point_center.y) * 0
      );
    }
  }

  moveDown(){
    this.setPosition(this.x, this.y + 1);
  }

  moveLeft(){
    var origem = this.x;
    var destino = this.x - Game.blockSize.w;
    var velocidade = 1;

    if(this.animacaoLiberada){
      this.animacaoLiberada = false;

      var id = setInterval(function(obj){
        origem = origem < destino? destino: origem - velocidade ++ ;
        obj.setPosition(origem, obj.y); 

        if(origem == destino){
          clearInterval(id);
          obj.animacaoLiberada = true;
        }

      }, 1000/config.fps, this);      
    }
  }

  moveRight(){
    var origem = this.x;
    var destino = this.x + Game.blockSize.w;
    var velocidade = 1;

    if(this.animacaoLiberada){
      this.animacaoLiberada = false;

      var id = setInterval(function(obj){
        origem = origem > destino? destino: origem + velocidade ++ ;
        obj.setPosition(origem, obj.y); 

        if(origem == destino){
          clearInterval(id);
          obj.animacaoLiberada = true;
        }

      }, 1000/config.fps, this);      
    }
  }

  // x, y - relativo a peca
  addBlock(block, x, y){
    block.setPosition(x, y);
    this.blocks.push(block);
    return this;
  }

  getBlocks(){
    return this.blocks;
  }

  paint(g){
    for(var i = 0; i < this.blocks.length; i++){
      var lastFillStyle = g.fillStyle;
      var lastStrokeStyle = g.strokeStyle;

      g.fillStyle = "#39c300";
      g.strokeStyle = "#75f87b";

      g.fillRect(
        this.x + Game.blockSize.w * this.blocks[i].x, 
        this.y + Game.blockSize.h * this.blocks[i].y, 
        Game.blockSize.w, 
        Game.blockSize.h
      );
      g.strokeRect(
        this.x + Game.blockSize.w * this.blocks[i].x, 
        this.y + Game.blockSize.h * this.blocks[i].y, 
        Game.blockSize.w, 
        Game.blockSize.h
      );                  
    }
  }

}