import Game from "./Game"
import Controller from "./Controller"

export default {
  play: function(){
    Game.init();
    Game.start();

    // inicia o controle
    window.addEventListener("keydown", function(evt){
      switch(evt.keyCode){
        case 40: Controller.moveDown();
          break;
        case 37: Controller.moveLeft();
          break;
        case 39: Controller.moveRight();
          break;
        case 38: Controller.rotate();
          break;
      }
    });
    window.addEventListener("keyup", function(evt){
      switch(evt.keyCode){
        case 40: Controller.stopMoveDown();
          break;
      }
    });    
  }
}