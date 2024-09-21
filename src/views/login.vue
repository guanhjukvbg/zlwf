<template>
    <div class="body">
        <img class="pic" src="../img/Saly-10.svg" alt="">
        <div class="content">
            <div class="content-tit">欢迎使用智链文辅</div>
            <div class="content-info">
                <div class="p">账号</div>
                <input type="text" placeholder="请输入" style="text-indent:10px;">
            </div>
            <div class="content-info">
                <div class="p">密码</div>
                <input type="password" placeholder="请输入" style="text-indent:10px;">
            </div>
            <div class="content-info" style="margin-top: 10px;">
                <div class="p" style="font-size: 12px;color: aliceblue;">忘记密码？</div>
            </div>
            <button @click="toHome">登录</button>
            <div class="zhuce">还没有账号？立即注册</div>
        </div>
    </div>
</template>
<script setup>
import {useRouter,useRoute} from 'vue-router'
const router=useRouter()
const route=useRoute()
const toHome=()=>{
    router.push('/')
}
</script>
<style scoped>
.body 
{
    background-image: url('/bg.png');
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    width: 100%;
    height: 100%;
   
}
.pic{
    position: absolute;
    float: left;
    width: 28%;
    margin: 12% 12%;
}
.content{
    float: right;
    margin-top: 10%;
    margin-right: 12%;
    width: 35%;
    height: 60%;
    border-radius: 40px;
    opacity: 1;
    background: rgba(88, 130, 193, 0.28);
    box-sizing: border-box;
    border-image: linear-gradient(134deg, rgba(88, 130, 193, 0.49) 1%, rgba(88, 130, 193, 0.11) 96%) 3;
    backdrop-filter: blur(25px);
}
.content-tit{
    margin-top: 10%;
    margin-left: 15%;
    opacity: 1;
    font-family: Microsoft YaHei;
    font-size: 28px;
    font-weight: bold;
    line-height: 53px;
    display: flex;
    align-items: center;
    letter-spacing: 0px;
    color: #FFFFFF;
}
.content-info{
    margin-left: 15%;
    margin-top: 20px
}
.content-info .p{
    font-family: Microsoft YaHei;
    font-size: 15px;
    font-weight: normal;
    line-height: 25px;
    display: flex;
    align-items: center;
    letter-spacing: 0px;
    color: #FFFFFF;
    margin-bottom: 5px;
}
.content-info input{
    width: 80%;
    height: 40px;
    border-radius: 8px;
    opacity: 1;
    background: #FFFFFF;
    box-sizing: border-box;
    border: 1px solid #BCBEC0;
}
.content-info input:focus{
	outline: solid rgba(62, 139, 206, 0.62);
	border-width: 1px;
}
.content button{
    margin-left: 15%;
    width: 68%;
    height: 40px;
    border-radius: 8px;
    background: #003465;
    font-family: Microsoft YaHei;
    font-size: 18px;
    font-weight: bold;
    line-height: 28px;
    border: none;
    text-align: center;
    color: #FFFFFF;
}
.content .zhuce{
    position: relative;
    text-align: center;
    margin-top: 13%;
    font-size: 14px;
    font-weight: normal;
    line-height: 20px;
    color: #FFFFFF;
}
</style>