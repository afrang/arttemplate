import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import firstpage from "./components/pages/firstpage";
import gallery from "./components/pages/gallery";
import workshop from "./components/pages/workshop";
import about from "./components/pages/about";
import register from "./components/pages/register";
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
    {
      path:'/workshop',
      name:'',
      component:workshop
    },
    {
      path:'/about',
      name:'',
      component:about
    }, {
      path:'/register',
      name:'',
      component:register
    },
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
