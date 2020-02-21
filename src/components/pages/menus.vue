<template>
    <div>
        <div class="mm ">
            <ul class="mymenus">
                <li v-for="(item,index) in $parent.$parent.menu" :key="index"><a :href="item.url" v-text="item.name+' '"></a></li>

            </ul>
        </div>
        <hr>

    </div>
</template>

<script>
    export default {
        name: "menu"
    }
</script>

<style scoped>
    .mymenus li{
        display: inline;
        list-style: none;
        margin-left: 20px;


    }
    .mymenus li a:hover{
        font-weight: bold;
    }
    .mymenus li a{
        color: #666666;
        text-decoration: none;
        font-family: Parastoo;
        font-size: 14px;

    }
    .mymenus{
        text-align: center;
        height: 30px;




    }
    .mm{
        width: 100%;
        text-align: center;

        padding-top: 10px;
    }

</style>