<script>

  import Translate from "./../translation-functions";
  import MyGame from "./../game/all";

  export default {
    name: 'play', 
    data: function(){
      return {}
    },
    methods: {
      '__': Translate.__,
      updateLang(evt){
        var lang = evt.target.value;
        Translate.setLang(lang);
      },
      initGame(){
        MyGame.play();
      }
    },

    updated(){
      this.initGame();
    }

  }



</script>

<template>
  
  <div class="container">
    <div class="row">

      <div class="col-lg-8">

        <div class="panel panel-default">
          <div class="panel-body">
            <canvas id="game" style="margin: 0 auto; background-color: #fff" height="400" width="300"></canvas>
          </div>
          <div class="panel-footer">
            <button @click="initGame"> Jogar Agora </button>                          
          </div>
        </div>
        
      </div>
      
    </div>
    
  </div>

  
</template>

<style>
  #canvas{
    background-color: #fff;
    width: 200px;
    height: 300px;
  }

  .ponto{
    position: absolute;
    background-color: red;
    width: 20px;
    height: 20px;
  }
</style>