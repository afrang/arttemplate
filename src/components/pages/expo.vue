<template>
    <div>
        <Menus></Menus>

        <div class="container fontparsatoo ">
            <div class="w-100 expotitle">
                <h4>نمایشگاه</h4>
            </div>
            <div v-for="(n, index) in 5"   :key="index" class=" card  mydiv rdaious animations  mt-4" dir="rtl">
                    <div class="p-3  fade-in img-hover-zoom ">
                            <div class="row ">
                                <div class="col-sm-4 col-xs-12 rdaious">
                                    <div  style="overflow: hidden;" class="rdaious">
                                        <img src="/media/111.jpg"  class="rdaious" width="100%">
                                    </div>

                                </div>
                                <div class="col-sm-8 col-xs-12 text-right">
                                    <a href="/page" class="text-decoration-none">
                                        <h3 class="text-black-50">نمایشگاه یونان 2017</h3>

                                    </a>
                                    <small>2017 Greece  ٍExpo</small>
                                    <hr>
                                        <p class="">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، </p>
                                </div>
                            </div>
                    </div>

            </div>





        </div>

    </div>

</template>

<script>
    import menus from "./menus";

    export default {
        name: "expo",
        components:{
            Menus:menus
        }
    }
</script>

<style scoped>
    .animations:hover{
        border-left: solid 10px darkolivegreen;
    }
    .animations{
        border-left: solid 10px #666666;
        -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: fadein 2s; /* Firefox < 16 */
        -ms-animation: fadein 2s; /* Internet Explorer */
        -o-animation: fadein 2s; /* Opera < 12.1 */
        animation: fadein 2s;
    }
.expotitle {
    text-align: center;

    margin-bottom: 20px;
    font-size: 45px;

}
.fontparsatoo *{
    font-family: Parastoo;
}
.expotitle h4{
    width:20%;
    border-bottom: solid 1px #cdcdcd;
    margin-right: auto;
    margin-left: auto;
    padding-bottom: 30px;


}
    .rdaious{
        border-radius: 0px 25px 25px 0px;
    }
#test p {
    margin-top: 25px;
    font-size: 21px;
    text-align: center;

}

@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Internet Explorer */
@-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
    .img-hover-zoom {
        overflow: hidden; /* [1.2] Hide the overflowing of child elements */
    }

    /* [2] Transition property for smooth transformation of images */
    .img-hover-zoom img {
        transition: transform 1s ease;
    }

    /* [3] Finally, transforming the image when container gets hovered */
    .img-hover-zoom:hover img {
        transform: scale(1.2);
    }
</style>