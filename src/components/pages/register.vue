<template>
    <div class="registerpage">
        <Menus></Menus>
        <blockquote>برای ثبت نام در کلاس ها فرم زیر را کامل نمایید</blockquote>
        <hr class="style16">
        <br>
        <div class="container">
            <form dir="rtl" >
                <div class="p-3 row" dir="rtl">
                    <div class="col-sm-4 col-xs-12">
                        <input type="text" class="form-control  m-1 d-inline"  placeholder="نام *">

                    </div>
                    <div class="col-sm-4 col-xs-12">
                        <input type="text" class="form-control   m-1 d-inline"  placeholder="نام خانوادگی *">

                    </div>
                    <div class="col-sm-4 col-xs-12">
                        <input type="text" class="form-control  m-1 d-inline"  placeholder="شماره همراه *">

                    </div>


                    <div class="col-sm-12 col-xs-12">
                        <textarea class="form-control m-1 mt-1 "></textarea>

                    </div>
                    <div class="col-sm-12 col-xs-12 bg-transparent border-info text-right ">
                        <div class="container">
                            <h4 class="text-white mt-4">پنج اثر خود را ارسال نمایید</h4>
                            <hr>
                            <table class="table table-light">
                                <thead>
                                <td>#</td>
                                <td>رزومه</td>
                                <td>آپلود فایل</td>
                                <td>دانلود</td>
                                </thead>
                                <tr>
                                    <td>1</td>
                                    <td><input class="form-control"></td>
                                    <td><input class="form-control" type="file"></td>
                                    <td  class="text-center"><span class="icofont-download btn btn-dark"></span> </td>
                                </tr>
                                <thead>
                                        <td>#</td>
                                        <td>نام اثر</td>
                                        <td>آپلود فایل</td>
                                        <td>نمایش</td>
                                </thead>
                                <tr>
                                    <td>1</td>
                                    <td><input class="form-control"></td>
                                    <td><input class="form-control" type="file"></td>
                                    <td  class="text-center"><span class="icofont-eye btn btn-dark"></span> </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td><input class="form-control"></td>
                                    <td><input class="form-control" type="file"></td>
                                    <td  class="text-center"><span class="icofont-eye btn btn-dark"></span> </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td><input class="form-control"></td>
                                    <td><input class="form-control" type="file"></td>
                                    <td  class="text-center"><span class="icofont-eye btn btn-dark"></span> </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td><input class="form-control"></td>
                                    <td><input class="form-control" type="file"></td>
                                    <td  class="text-center"><span class="icofont-eye btn btn-dark"></span> </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td><input class="form-control"></td>
                                    <td><input class="form-control" type="file"></td>
                                    <td  class="text-center"><span class="icofont-eye btn btn-dark"></span> </td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td><input class="form-control"></td>
                                    <td><input class="form-control" type="file"></td>
                                    <td  class="text-center"><span class="icofont-eye btn btn-dark"></span> </td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td><input class="form-control"></td>
                                    <td><input class="form-control" type="file"></td>
                                    <td  class="text-center"><span class="icofont-eye btn btn-dark"></span> </td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td><input class="form-control"></td>
                                    <td><input class="form-control" type="file"></td>
                                    <td  class="text-center"><span class="icofont-eye btn btn-dark"></span> </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <hr>
                    <div class="text-center col-sm-12 mt-3">
                        <input type="button" class="btn btn-success align-content-center" value="ارسال">

                    </div>

                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import menus from "./menus";
    export default {
        name: "register",
        components:{
            Menus:menus
        }
    }
</script>

<style  lang="scss" scoped>

    .registerpage{
        height: 140%;
        background-image:
                linear-gradient(0deg, rgb(119, 119, 116) 0%, rgba(21, 21, 21, 0.41) 100%),
                url("/media/student/1536498231vb-108.jpg");
        background-size: 400px auto;;
    }
    .w-80{
        width: 80%;
    }
    .w-40{
        width: 40%;
        float: right;
    }
    hr.style16 {
        border-top: 1px dashed #8c8b8b;
    }
    hr.style16:after {
        font-family: Arial;
        content: '\002702';
        display: inline-block;
        position: relative;
        top: -12px;
        left: 40px;
        padding: 0 3px;
        background: #f0f0f0;
        color: #8c8b8b;
        font-size: 18px;
    }

    blockquote {

        font-size: 36px;
        line-height: 120%;
        position: relative;
        font-family: Parastoo;
        width: 40%;
        margin: 2% auto;
        text-align: right;
        color: #fff;

        &:before {
            content: '\201C';
            position: absolute;
            top: -10px;
            left: 0;
            font-family: Arial, sans-serif;
            font-size: 82px;
            font-style: normal;
        }
        &:after {
            content: '\201C';
            position: absolute;
            bottom: -60px;
            right: 0;
            font-family: Arial, sans-serif;
            font-size: 82px;
            font-style: normal;
        }
    }
</style>