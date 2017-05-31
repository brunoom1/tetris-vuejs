<script>

import Translate from "./../translation-functions";

export default{
  name: 'index',
  data: function(){
    return {}
  },
  methods: {
    '__': Translate.__
  }
}


</script>

<template>
  
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <img src="./../assets/images/logo.png" alt="Tetris logo" id="logo" class="center-block img-responsive"/>        
      </div>
    </div>
    
    <div class="row">
      <div class="col-lg-12">
        <ul class="nav nav-pills nav-stacked">
          <li>
            <a href="#play">{{ __("play") }}</a>
          </li>
          <li>
            <a href="#ranking">{{ __("ranking") }}</a>
          </li>
          <li>
            <a href="#configurations">{{ __("configuration") }}</a>
          </li>
        </ul>        
      </div>
  
    </div>    
  </div>  

</template>

