import Vue from 'vue';
import Router from 'vue-router';
import Index from './../components/Index.vue';
import Configuration from './../components/Configuration.vue'
import Play from './../components/Play.vue'

Vue.use(Router)

var router =  new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index
    },
    {
      path: '/configurations',
      name: 'configurations',
      component: Configuration
    },
    {
      path: '/play',
      name: 'play',
      component: Play
    }    
  ]
});

export default router;
