import Game from "./Game";

export default {
  rotate: function(){
    Game.currentpiece.rotate();
  },
  start: function(){
    Game.start();
  },
  moveDown: function(){
    if(Game.currentpiece){
      Game.currentpiece.moveDown();
    }
  },
  moveRight: function(){
    if(Game.currentpiece){
      Game.currentpiece.moveRight();
    }
  },
  moveLeft: function(){
    if(Game.currentpiece){
      Game.currentpiece.moveLeft();
    }
  },
  stopMoveDown: function(){
    if(Game.currentpiece){
    }
  }
}