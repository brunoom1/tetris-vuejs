if(!window.localStorage.language){
  window.localStorage.language = 'pt';
}

import pt from "./langs/pt";
import en from "./langs/en";

var languages = ['pt', 'en'];
var langs = {
  pt, en
};

export default {
  __(str){

    if(langs[window.localStorage.language][str]){
      return langs[window.localStorage.language][str];
    }
    
    return str;
  }, 
  getLanguages(){
    return languages;
  },
  getCurrentLanguage(){
    return window.localStorage.language;
  },
  setLang(lang){
    window.localStorage.language = lang;
  }
}