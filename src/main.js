import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import firstpage from "./components/pages/firstpage";
import gallery from "./components/pages/gallery";
import CoolLightBox from 'vue-cool-lightbox';

require('bootstrap');
import ('bootstrap/dist/css/bootstrap.min.css');
import('./assets/app.css');
Vue.use(VueRouter);
Vue.use(CoolLightBox);

Vue.config.productionTip = false
const router=new  VueRouter({
  mode:'history',
  routes:[
    {
      path:'/',
      name:'',
      component:firstpage
    },
    {
      path:'/gallery',
      name:'',
      component:gallery
    },

  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
