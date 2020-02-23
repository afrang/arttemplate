<template>
    <div class="registerpage">
        <Menus></Menus>
        <blockquote>برای ثبت نام در کلاس ها فرم زیر را کامل نمایید</blockquote>
        <hr class="style16">
        <br>
        <div class="container">
            <form dir="rtl" >
                <div class="p-3">
                    <input type="text" class="form-control w-40 m-1 d-inline"  placeholder="نام *">
                    <input type="text" class="form-control w-40 m-1 d-inline"  placeholder="نام خانوادگی *">
                    <input type="text" class="form-control w-40 m-1 d-inline"  placeholder="شماره همراه *">
                    <input type="text" class="form-control w-40 m-1 d-inline"  placeholder="ایمیل *">
                    <input type="text" class="form-control w-40 m-1 d-inline"  placeholder="شماره ثابت *">
                    <select type="text" class="form-control w-40 m-1 d-inline"  placeholder="شماره ثابت *">
                        <option  disabled>کلاس خود را انتخاب نمایید</option>
                        <option >کلاس شماره 1</option>
                        <option >کلاس شماره 1</option>
                        <option >کلاس شماره 1</option>
                        <option >کلاس شماره 1</option>
                    </select>

                    <textarea class="form-control m-1 mt-5 w-80"></textarea>
                    <hr>
                    <div class="text-center">
                        <input type="button" class="btn btn-secondary align-content-center" value="ارسال">

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
        background-image:
                linear-gradient(0deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.41) 100%),
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
        width: 300px;
        margin: 6% auto;
        text-align: right;
        color: #666666;

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