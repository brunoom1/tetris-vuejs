<script>

import Translate from "./../translation-functions";

export default {
  name: 'configuration', 
  data: function (){
    return {
      t: Translate
    }
  },
  methods: {
    '__': Translate.__,
    updateLang(evt){
      var lang = evt.target.value;
      Translate.setLang(lang);
    }
  }
}

</script>

<style scoped>
  ul{
    list-style: none;
    margin: 0px;
    padding: 0px;
  }

  label{
    text-transform: uppercase;
  }
</style>

<template>
  
  <div class="page index">
    <img src="./../assets/images/logo.png" alt="Tetris logo" id="logo" />
    
    <h2>{{ __("page_configuration_title") }}</h2>

    <a href="#"> {{ __("button_forward") }} </a>

    <div>
      <h3>{{ __("page_configuration_language") }}</h3>
      <ul>
        <li v-for="l in t.getLanguages()">
          <label><input type="radio" name="lang" v-on:change="updateLang" v-bind:value="l" v-bind:checked="t.getCurrentLanguage() == l"> {{ l }} </label>
        </li>
      </ul>
    </div>

  </div>

</template>