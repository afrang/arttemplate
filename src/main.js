import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import firstpage from "./components/pages/firstpage";
import gallery from "./components/pages/gallery";
import workshop from "./components/pages/workshop";
import contactus from "./components/pages/contactus";
import register from "./components/pages/register";
import expo from "./components/pages/expo";
import learning from "./components/pages/learning";
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
      path:'/contactus',
      name:'',
      component:contactus
    },
    {
      path:'/expo',
      name:'',
      component:expo
    },
    {
      path:'/register',
      name:'',
      component:register
    },
    {
      path:'/learning',
      name:'',
      component:learning
    },
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
