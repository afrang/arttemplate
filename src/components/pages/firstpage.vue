<template>
    <div id="bg" dir="rtl" :style="btnStyles" >
        <div class="d-block  d-sm-none">

        </div>
        <div class="mymenu" @mouseleave="master=defaultimage">
            <ul class="">
                <li v-for="(item,index) in $parent.menu" :key="index" class="menuitem"

                    :ref="index"  @mouseenter="changecolor(index)"
                    @mouseleave="defaultcolor(index)"
                    @mouseover="master=item.image"
                >
                    <div    >
                        <a :href="item.url" >
                            <h3 v-text="item.name"    ></h3>
                            <h5 v-text="item.description"></h5>

                        </a>
                    </div>
                </li>
            </ul>
        </div>


    </div>
</template>

<script>

    export default {
        name: "firstpage",

        data() {
            return {
                menu:[],
                defaultimage:'/media/intro-bg.jpg',
                master:null,
                hover: false,

            }
        },
        computed: {
            btnStyles:function() {

                return {
                    backgroundImage:"url("+this.master+")",
                    transition: "background 0.4s ease "

                };
            },

        },
        methods: {
            changecolor(color) {
                this.$refs[color][0]['style']['backgroundColor'] = this.$parent.menu[color].color;
                this.$refs[color][0]['children'][0]['children'][0]['children'][1]['style']['color']='#000';
            },
            defaultcolor(color) {
                this.$refs[color][0]['style']['backgroundColor'] = 'transparent';
                this.$refs[color][0]['children'][0]['children'][0]['children'][1]['style']['color']='#e8e8e8';
            },

        },
        mounted() {
            this.master=this.defaultimage;
        }
    }
</script>

<style scoped>

</style>