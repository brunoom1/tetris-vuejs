import Piece from "./Piece";
import Block from "./Block";
import config from "./config";
import Game from "./Game";

var Stage = config.Stage;

export default {
  funcs: [

    function(){ // L
        var piece = new Piece();
        piece.addBlock(new Block(), 0, 0)
            .addBlock(new Block(), 0, 1)
            .addBlock(new Block(), 0, 2)
            .addBlock(new Block(), 1, 2);

        piece.setPosition(Stage.size.c * Game.blockSize.w / 2 , 0);

        return piece;
    },
  
    function(){ // 0
      var piece = new Piece();
      piece.addBlock(new Block(), 0, 0)
          .addBlock(new Block(), 0, 1)
          .addBlock(new Block(), 1, 0)
          .addBlock(new Block(), 1, 1)
          .rotate = () => {}; // anula método de rotação nesta peça, já que ela não necessida de girar

      piece.setPosition(Stage.size.c * Game.blockSize.w / 2, 0);

      return piece;    
    },

    function(){ // I
      var piece = new Piece();
      piece.point_center = {x: -2, y: 2};

      piece.addBlock(new Block(), 0, 0)
          .addBlock(new Block(), 0, 1)
          .addBlock(new Block(), 0, 2)
          .addBlock(new Block(), 0, 3);

      piece.setPosition(Stage.size.c * Game.blockSize.w / 2, 0);
      return piece;    
    },

    function(){ // t
      var piece = new Piece();
      piece.point_center = {x: 0, y: 1};
      piece.addBlock(new Block(), 0, 0)
          .addBlock(new Block(), 1, 0)
          .addBlock(new Block(), 2, 0)
          .addBlock(new Block(), 1, 1);

      piece.setPosition(Stage.size.c * Game.blockSize.w / 2, 0);
      return piece;    
    },

    function(){ // n
      var piece = new Piece();
      piece.point_center = {x: 0, y: 1};
      piece.addBlock(new Block(), 0, 0)
          .addBlock(new Block(), 1, 0)
          .addBlock(new Block(), 1, 1)
          .addBlock(new Block(), 2, 1);
          
      piece.setPosition(Stage.size.c * Game.blockSize.w / 2, 0);
      return piece;    
    }    


  ],

  new: function(type){
    return this.funcs[type]();
  }, 

  generate: function(){
    var piece = this.new(Math.abs(Math.floor(Math.random() * this.funcs.length)));

    var blocks = piece.getBlocks();
    for(var i = 0; i < blocks.length; i++){
      Block.blocks.push(blocks[i]);
    }
    return piece;
  }
}