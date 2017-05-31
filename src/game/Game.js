import config from "./config"
var Stage = config.Stage;

import Object from "./Object"
import Block from "./Block"
import Piece from "./Piece"
import pieceFactor from "./PieceFactor"
import Controller from "./Controller"


var Game = {
  loopFrameId: null,
  currentpiece: null,
  nextpiece: null,
  blockSize: {w: 0, h: 0},
  piecesFixas: [],

  // inicia funcoes importantes para o jogo
  init: function(){
    var canvas = document.getElementById('game');

    this.c2d = canvas.getContext("2d");

    this.currentpiece = pieceFactor.generate();
    this.nextpiece = pieceFactor.generate();

    this.blockSize.w = this.c2d.canvas.width / Stage.size.c;
    this.blockSize.h = this.c2d.canvas.height / Stage.size.l; 

    Block.blocks = [];
  },

  // recupera jogo, quando este e fechado ou pausado para o caso de o usuario quiser continuar mais tarde
  recuperate: function(){

  },

  // inicia loop do jogo, mas nao reinicia pontos e etc
  start: function(){
    this.loopFrameId = setInterval(function(g){
      g.update();
      g.repaint();
      g.paint();

    }, 1000 / config.fps, this);
  },

  // reinicia o game do estado inicial
  reinit: function(){

  },

  // pausa o game, salva informacoes localmente 
  pause: function(){

  },

  // fecha o jogo
  close: function(){

  },

  onColision: function(evt){
    switch(evt.type){
      case "bottom": {
        if(evt.item1){
          
          evt.item1.velocidade = 1;

          var blocks = evt.item1.getBlocks();

          var has_blocks_offscreen = true;

          while(has_blocks_offscreen){
            item = evt.item1;
            item.setPosition(item.x, item.y - 1);      

            for(var i = 0; i < blocks.length; i++){
              if(blocks[i].getPosition().y + item.y >= Stage.size.l){
                break;
              }   
              else{
                has_blocks_offscreen = false;
              }
            }
          } 
        }

        this.piecesFixas.push(this.currentpiece);
        this.currentpiece = null;
        this.currentpiece = this.nextpiece;
        this.nextpiece = pieceFactor.generate();        

      }; break;

      case "block": {

        this.piecesFixas.push(this.currentpiece);
        this.currentpiece = null;
        this.currentpiece = this.nextpiece;
        this.nextpiece = pieceFactor.generate();        

      }; break;

      case "left": {
        if(evt.item1){
          item = evt.item1;
          item.setPosition(0, item.y);      

        } 
      }; break;      
    }

    this.verifyLines();    
  },

  // altera posicao dos objetos
  update: function(){

    // verificar se a piece ja chegou ao seu limite, para baixo
    if(this.currentpiece){
      this.currentpiece.moveDown();      

      // var pos = this.currentpiece.getPosition();
      // var blocks = this.currentpiece.getBlocks();

      // for(var i = 0; i < blocks.length; i++){

      //   // verifica se houve contato com outra piece abaixo
      //   var houveContato = false;

      //   for(var x = 0; x < this.piecesFixas.length; x ++){
      //     var fblocks = this.piecesFixas[x].getBlocks();
      //     for(var n = 0; n < fblocks.length; n ++){

      //       if(  fblocks[n].y + this.piecesFixas[x].getPosition().y - 1 == blocks[i].y + pos.y 
      //         && blocks[i].x + pos.x == fblocks[n].x + this.piecesFixas[x].x){
      //         this.onColision({
      //           item1: this.currentpiece,
      //           item2: fblocks[n],
      //           type: 'block'
      //         });
      //       }
      //     }
      //   }

      //   if(blocks[i].getPosition().y + pos.y == Stage.size.l){
      //     this.onColision({
      //       item1: this.currentpiece,
      //       type: 'bottom'
      //     });
      //   }

      //   if(blocks[i].getPosition().x + pos.x < 0){
      //     this.onColision({
      //       item1: this.currentpiece,
      //       type: 'left'
      //     });
      //   }

      //   if(blocks[i].getPosition().x + pos.x >= Stage.size.c){
      //     this.onColision({
      //       item1: this.currentpiece,
      //       type: 'right'
      //     });
      //   }
      // }
    }
  },

  // realiza pinturas dos objetos no canvas
  paint: function(){
    if(this.currentpiece) this.currentpiece.paint(this.c2d);

    if(this.piecesFixas) 
      for(var i = 0; i < this.piecesFixas.length; i++){
        this.piecesFixas[i].paint(this.c2d);
      }
  },

  repaint: function(){

    if(config.showGrid){
      var lastFillStyle = this.c2d.fillStyle;
      var lastStrokeStyle = this.c2d.strokeStyle;

      this.c2d.fillStyle = "#f0f0f0";
      this.c2d.strokeStyle = "#ffffff";

      for(var l = 0; l < Stage.size.l; l ++){
        for(var c = 0; c < Stage.size.c; c ++){
          this.c2d.fillRect(c * this.blockSize.w, l * this.blockSize.h, this.blockSize.w, this.blockSize.h);
          this.c2d.strokeRect(c * this.blockSize.w, l * this.blockSize.h, this.blockSize.w, this.blockSize.h);
        }
      } 
      this.c2d.fillStyle = lastFillStyle;
      this.c2d.strokeStyle = lastStrokeStyle;
    }
    else{
      this.c2d.clearRect(0, 0, this.c2d.canvas.width, this.c2d.canvas.height);      
    }

  }
};

export default Game;