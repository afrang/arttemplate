<template>
    <div>

        <div class="p-4">
            <Menus></Menus>
            <div class="text-center titletext">هنرمندان </div>

            <div id="myBtnContainer" dir="rtl">
                <button class="btn active" > نمایش همه</button>
                <button v-for="(item,index) in group" :key="index" class="btn" v-text="item.name"> </button>

                <div class="container">
                    <hr style="border: dashed 1px #999; margin-top: 20px; width: 50%;">
                 <div class="row">

                     <div v-for="(item,index) in art" :key="index" class=" col-4 ">
                         <div class="mydiv m-5 mt-3">
                             <img class="card-img-top  w-100" style="width: 100%;"  :src="item.url" :alt="item.name">
                             <div class="card-body">
                                 <p class="card-text">
                                     <span v-text="item.name"></span>
                                 </p>
                             </div>
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
    export default {
        name: "gallery",
        components: {
            Menus:menus
        },

          data(){
              return {
                  group:{
                       0:{
                            name:'آرت دکو'
                        },
                      1:{
                          name:'سورئال'
                      },
                      2:{
                          name:'کلاسیک'
                      },
                      3:{
                          name:'پست مدرنیسم'
                      },
                  },
                  art:{
                      0:{
                          name:'طرح 1',
                          url:'/media/student/01.jpg',
                          description:'متن طرح 1',
                          group:1
                      },
                      1:{
                          name:'طرح 1',
                          url:'/media/student/02.jpg',
                          description:'متن طرح 31',
                          group:2
                      },
                      2:{
                          name:'طرح 1',
                          url:'/media/student/03.jpg',
                          description:'متن طرح 31',
                          group:2
                      },
                      4:{
                          name:'طرح 1',
                          url:'/media/student/03.jpg',
                          description:'متن طرح 31',
                          group:2
                      },
                      5:{
                          name:'طرح 1',
                          url:'/media/student/01.jpg',
                          description:'متن طرح 1',
                          group:1
                      },
                      6:{
                          name:'طرح 1',
                          url:'/media/student/02.jpg',
                          description:'متن طرح 31',
                          group:2
                      },
                      7:{
                          name:'طرح 1',
                          url:'/media/student/03.jpg',
                          description:'متن طرح 31',
                          group:2
                      },
                  }

              }
          } ,

        methods: {


            // Show filtered elements
        }
    }
</script>

<style scoped>
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
    }
    #myBtnContainer{
        text-align: center;
        width: 100%;
    }
.btn{
        font-family: Parastoo !important;

    }
</style>