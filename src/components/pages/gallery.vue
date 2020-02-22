<template>
    <div>

        <div class="">
            <CoolLightBox
                    :items="itemshow"
                    :index="index"
                    :slideshow="false"
                    :loop="false"
                    @close="index = null">
            </CoolLightBox>
            <Menus></Menus>
            <div class="myback"></div>
            <div class="text-center titletext" style="">هنرمندان </div>

            <div id="myBtnContainer" dir="rtl">
                <button @click="filtered(null)" class="btn active" > نمایش همه</button>
                <button v-for="(item,index) in group" :key="index" @click="filtered(item.id)" class="btn" v-text="item.name"> </button>

                <div class="container">
                    <hr style="border: dashed 1px #999; margin-top: 20px; width: 50%;">
                 <div class="card-columns">
                     <div v-for="(item,index) in itemshow" @click="setIndex(index)"         :key="index" class=" card  mydiv">
                         <img class="card-img-top  w-100" style="width: 100%;"  :src="item.src" :alt="item.name">

                         <div class="card-body">
                             <h5 class="card-title text-right" v-text="item.name"></h5>

                             <footer class="blockquote-footer text-right"> <cite title="Source Title"  v-text="item.description"></cite></footer>

                         </div>

                     </div>

                 </div>
                </div>
            </div>
        </div>

            <!-- END GRID -->
        </div>


</template>

<script>
    import menus from "./menus";
    import CoolLightBox from 'vue-cool-lightbox'

    export default {
        name: "gallery",
        components: {
            Menus:menus,
            CoolLightBox
        },

          data(){
              return {
                  index: null,
                  group:{
                       0:{
                           id:1,
                            name:'آرت دکو'
                        },
                      1:{
                           id:2,
                          name:'سورئال'
                      },
                      2:{
                           id:3,
                          name:'کلاسیک'
                      },
                      3:{
                           id:4,
                          name:'پست مدرنیسم'
                      },
                  },
                  filteruse:null,
                  art:{
                      0:{
                          name:'طرح 1',
                          src:'/media/student/01.jpg',
                          description:'متن طرح 1',
                          group:1
                      },
                      1:{
                          name:'طرح 1',
                          src:'/media/student/02.jpg',
                          description:'متن طرح 31',
                          group:2
                      },
                      2:{
                          name:'طرح 1',
                          src:'/media/student/03.jpg',
                          description:'متن طرح 31',
                          group:2
                      },
                      4:{
                          name:'طرح 1',
                          src:'/media/student/03.jpg',
                          description:'متن طرح 31',
                          group:2
                      },
                      5:{
                          name:'طرح 1',
                          src:'/media/student/01.jpg',
                          description:'متن طرح 1',
                          group:1
                      },
                      6:{
                          name:'طرح 1',
                          src:'/media/student/02.jpg',
                          description:'متن طرح 31',
                          group:2
                      },
                      7:{
                          name:'طرح 1',
                          src:'/media/student/03.jpg',
                          description:'متن طرح 31',
                          group:2
                      },
                  }

              }
          } ,
        computed:{
            itemshow:function () {
                let that=this;
                let b=[];
                if(this.filteruse==null){

                    return  this.art;
                }else {
                    for(let item in this.art){
                        if(this.art[item].group==that.filteruse){
                            b.push(this.art[item]);

                        }
                    }
                    return b;
                }

            }

        },

        methods: {
            setIndex(index) {
                this.index = index
            },
            filtered(item){
                this.filteruse=item;
            }

            // Show filtered elements
        }
    }
</script>

<style scoped>
    .myback{
              background-image: url("/media/student/03.jpg");
        width: 100%;
        height: 400px;
        background-size: cover;
        background-attachment: fixed;
    }
.mydiv{
    border-radius: 20px;
    overflow: hidden;
    background-color: #fff;
    width: 100%;

    transition: all .2s ease-out;
    box-shadow: 0 2px 43px -4px rgba(0,0,0,.19);
    display: -moz-flex;
    display: flex;
    -moz-flex-direction: column;
    flex-direction: column;
    margin-top: 40px !important;
}
    * {
        box-sizing: border-box;
    }

    body {
        background-color: #f1f1f1;
        padding: 20px;
        font-family: Arial;
    }

    /* Center website */
    .main {
        max-width: 1000px;
        margin: auto;
    }

    h1 {
        font-size: 50px;
        word-break: break-all;
    }

    .row {
        margin: 8px -16px;
    }

    /* Add padding BETWEEN each column (if you want) */
    .row,
    .row > .column {
        padding: 8px;
    }

    /* Create three equal columns that floats next to each other */
    .column {
        float: left;
        width: 33.33%;
        display: none; /* Hide columns by default */
    }

    /* Clear floats after rows */
    .row:after {
        content: "";
        display: table;
        clear: both;
    }

    /* Content */
    .content {
        background-color: white;
        padding: 10px;
    }

    /* The "show" class is added to the filtered elements */
    .show {
        display: block;
    }

    /* Style the buttons */
    .btn {
        border: solid 1px #eee;
        outline: none;
        margin-right: 10px;
        border-radius: 45px;
        padding: 12px 16px;
        background-color: white;
        cursor: pointer;

    }

    /* Add a grey background color on mouse-over */
    .btn:hover {
        background-color: #ddd;
    }

    /* Add a dark background color to the active button */
    .btn.active {
        background-color: #666;
        color: white;
    }
    .hr-text {
       height: 2px;
        background:linear-gradient(to left,#f1f1f1 , #000);

    }
    .titletext{
        font-family: Parastoo;
        text-align: center;
        font-size: 30px;
        color: #666666;
        width: 100%;

        margin-top: -200px; margin-bottom: 200px; color:#fff;font-size: 48px;
    }
    #myBtnContainer{
        text-align: center;
        width: 100%;
    }
.btn{
        font-family: Parastoo !important;

    }
</style>