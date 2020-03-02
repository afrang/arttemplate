<template>
    <div>
        <Menus></Menus>
        <nav aria-label="breadcrumb" dir="rtl" style="margin-top: -20px;">
            <ol class="breadcrumb parastoo">
                <!-- Breadcrumb Menu-->
                <li class="breadcrumb-menu text-right" dir="rtl">
                    <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
                        <a class="btn" href="/"><i class="cil-speech">
                            <span class="icofont-home"></span>
                        </i></a>
                        <a class="btn parastoo" href="#">/ <i class="icofont-worker mr-2"></i> آموزش </a>
                    </div>
                </li>
            </ol>
        </nav>
        <div class="myback"></div>
        <div class="text-center titletext" style="">
        <p>آموزش</p>
        <hr>
        </div>
        <div class="container text-right parastoo" dir="rtl">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.

        </div>
        <div class="container text-right parastoo" dir="rtl">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.

        </div>
    </div>
</template>

<script>
    import menus from "./menus";

    export default {
        name: "learning",
        components:{
            Menus:menus
        }
    }
</script>

<style scoped>
.parastoo *{
    font-family: Parastoo;
}
.myback{
    background-image: url("/media/student/03.jpg");
    width: 100%;
    height: 400px;
    background-size: cover;
    background-attachment: fixed;
}
.parastoo{
    font-family: Parastoo;
}
.titletext{
    font-family: Parastoo;
    text-align: center;
    font-size: 30px;
    color: #666666;
    width: 100%;

    margin-top: -200px; margin-bottom: 200px; color: #fff;font-size: 48px;
    text-shadow: -1px -1px 0 #000, 2px -1px 0 #000, -1px 2px 0 #000, 1px 1px 0 #000;

}
</style>