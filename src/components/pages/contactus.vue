<template>
    <div class="myfont">
        <Menus></Menus>
        <div class="textaboutbox">
            <div class="container">
                <div class="row mt-5">
                    <div class="col-sm-3 col-xs-12" >
                        <div class="section1"> </div>
                        <div class="section1 mt-2 section2"></div>
                    </div>
                    <div class="col-sm-8 col-xs-12">
                        <div class="blockquote-wrapper">
                            <div class="blockquote">
                                <p>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                                </p>
                                <h4>&mdash;در باره ما <br><em>نام سایت</em></h4>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div class="p-5 text-right" dir="rtl ">
            <h4 class="abouttext">تماس با ما </h4>
            <p class="aboutexter text-right" dir="rtl">
                <strong>
                    <span class="fa icofont-location-pin"></span>
                    <span>آدرس: </span>
                </strong>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
            <p>
        </p>

        </div>
        <div class="container">
            <div style="text-align: center; ">

                <div class="  text-left  text-dark p-4 container-fluid  " dir="rtl">
                    <ul class="list-inline text-center ">
                        <a class="btn btn-social-icon ">
                            <span class="icofont-twitter"></span>
                        </a>
                        <a class="btn btn-social-icon ">
                            <span class="icofont-facebook"></span>
                        </a>
                        <a class="btn btn-social-icon ">
                            <span class="icofont-instagram"></span>
                        </a>
                        <a class="btn btn-social-icon ">
                            <span class="icofont-telegram"></span>
                        </a>
                    </ul>

                    <hr>
                    <div class="container container-fluid row text-center">
                        <div class="col-sm-4"> <span class="icofont-phone"></span> : +98(21)000000000 </div>
                        <div class="col-sm-4"><span class="icofont-mobile-phone"></span> : +98(912)000000000 </div>
                        <div class="col-sm-4"><span class="icofont-phone-circle"></span> : +98(912)000000000 </div>
                    </div>


                </div>


            </div>
        </div>


    </div>
</template>

<script>
    import menus from "./menus";

    export default {
        name: "about",
        components: {
            Menus:menus,
        },
    }
</script>

<style scoped>
    .btn-social-icon{
        border: dashed 1px #888;
        margin: 1px;
        padding: 3px;
        width: 40px;
    }
    .blockquote p {
        font-family: Parastoo;
        position: relative; /* for pseudos */
        color: #777774;
        font-size: 1rem;
        font-weight: normal;
        line-height: 1;
        margin: 0;
        border: 2px solid #fff;
        border: solid 2px;
        border-radius:20px;
        padding: 25px;
        text-align: right;
    }

    /* Blockquote right double quotes */
    .blockquote p:after {
        content:"";
        position: absolute;
        border: 2px solid #777774;
        border-radius: 0 50px 0 0;
        width: 60px;
        height: 60px;
        height: 60px;
        bottom: -60px;
        left: 50px;
        border-bottom: none;
        border-left: none;
        z-index: 3;
    }

    .blockquote p:before {
        content:"";
        position: absolute;
        width: 80px;
        border: 6px solid #dddddd;
        bottom: -3px;
        left: 50px;
        z-index: 2;
    }

    /* increase header size after 600px */
    @media all and (min-width: 600px) {
        .blockquote p {
            font-size: 1rem;
            line-height:1.5;
        }

    }

    /* Blockquote subheader */
    .blockquote h4 {
        position: relative;
        color: #ffffff;
        font-size: 1.3rem;
        font-weight: 400;
        line-height: 1.2;
        margin: 0;
        padding-top: 15px;
        z-index: 1;
        margin-left:150px;
        padding-left:12px;
    }


    .blockquote h4:first-letter {
        margin-left:-12px;
    }
    .textaboutbox{
         background-color: #dddddd;
            padding-top: 20px;
        margin-top: 20px;
        padding-bottom: 20px;
    }
    .section1{
        background-image: url("/media/07.jpg");
        width: 100%;
        height: 150px;
        background-size: cover;
        border-radius: 5px;
        ;
    }
    .section2{
        background-image: url("/media/03.jpg");
    }
    .mybackf{
        width: 60%; border: 1px groove rgba(3,13,3,0.39);
        border-radius: 9px;
        background-image: url("/media/student/03.jpg");
        height: 200px;
        margin-left: auto;
        margin-right: auto;
        background-attachment: fixed;;

    }
.myfont *{
    font-family: Parastoo;
}
    .abouttext{
        text-align: center;
        border-bottom: solid 1px #333333;
        width: 300px;
        margin-right: auto;
        margin-left: auto;
        padding-bottom: 15px;
        font-weight: bold;
    }
    .aboutexter{
        width: 40%;
        margin-right: auto;
        margin-left: auto;
        text-align: center;
        color:#666666;
        margin-top: 50px;
        border-right:dashed 1px #888;

        border-left: dashed 1px #888;
        padding: 10px;
        padding-right: 15px;
        padding-left: 15px;
        background: rgb(255,0,0);
        background: linear-gradient(172deg, rgba(255,0,0,0) 0%, rgba(255,255,255,1) 100%);


    }
</style>