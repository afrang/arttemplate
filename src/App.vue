<template>
  <div id="app" >
    <Slide right >
      <div class="p-0">
        <ul class="list-group" style="margin-top: -30px; ">
          <li v-for="(item,index) in menu" :key="index" class="menuitem "
              style="line-height: 10px;text-align: right;"   >
            <div @mouseover="master=item.image"   >
              <a :href="item.url" >
                <h3 style="font-size: 16px;" v-text="item.name"    ></h3>
                <h6 style="color:#aaa; font-size: 10px;" v-text="item.description"></h6>

              </a>
            </div>
          </li>
        </ul>
      </div>

    </Slide>
    <router-view></router-view>

  </div>
</template>

<script>
  import { Slide } from 'vue-burger-menu'  // import the CSS transitions you wish to use, in this case we are using `Slide`

export default {
  name: 'App',
  components: {
      Slide // Register your component

  },
  data() {
    return {
      master:null,

      menu:{
        0:{
          name:'خانه',
          description:'صغحه اصلی',
          url:'/',
          image:'/media/01.jpg',
          color:'green'
        },

        2:{
          name:'ورکشاپ ',
          description:'ورکشاپ های و نمایشگاه های خارجی',
          url:'/workshop',
          image:'/media/03.jpg',
          color:'red'
        },
        3:{
          name:'آموزش',
          description:'دوره های دوساله یونسکو\tآموزش',
          url:'/learning',
          image:'/media/04.jpg',
          color:'#FF3975'
        },
        4:{
          name:'نمایشگاه ',
          description:'نمایشگاه ها و ورکشاپ های داخلی',
          url:'/expo',
          image:'/media/05.jpg',
          color:'#FF3975'
        },
        5:{
          name:'ثبت نام  ',
          description:'ثبت نام ورک شاپ های خارجی',
          url:'/register',
          image:'/media/06.jpg',
          color:'blue'
        },
        6:{
          name:'آثار   ',
          description:'آثار هنرجویان',
          url:'/gallery',
          image:'/media/07.jpg',
          color:'#00BFED'
        },
        7:{
          name:'تماس با ما  ',
          description:'راه های ارتباطی و ارسال دیدگاه ها',
          url:'/contactus',
          image:'/media/01.jpg',
          color:'#FF3399'
        },
      }

    }
      },
    mounted() {

  }
}
</script>

<style>
  @import "assets/icofont/icofont.min.css";

  body, html {
    height: 100%;
    margin: 0;
  }
  #app {
    /* The image used */

    /* Full height */
    height: 100%;

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .footer {
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #cdcdc9;
    color: #333;
    text-align: center;
    font-size: 12px;
    position: relative;
  }
</style>
