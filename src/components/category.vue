<template>
<div class="category">
    <div class="category-tit">文档分类</div>
    <div class="category-item">
        <div class="item" @click="toAllText" style="cursor: pointer;background: linear-gradient(115deg, #FFF9C5 -4%, #A4C59D 109%);color: #030004;"><img src="../img/text.svg" alt="" style="position: absolute;margin-top: 2%;margin-left: -6%;width: 18%;">文本类文档</div>
        <div class="item" @click="toAllMath" style="cursor: pointer;background: linear-gradient(118deg, #FFB4B4 -1%, #FFDC9E 106%);color: #030004;"><img src="../img/math.svg" alt="" style="position: absolute;margin-top: 5%;margin-left: 7%;">数学类文档</div>
        <div class="item" @click="toAllPic" style="cursor: pointer;background: linear-gradient(118deg, #A9CFFD 0%, #CE6161 120%);"><img src="../img/pic.svg" alt="" style="position: absolute;margin-top: 1%;margin-left: -6%;">多图类文档</div>
        <div class="item" @click="toAllList" style="cursor: pointer;background: linear-gradient(115deg, #F8AFCE 0%, #030004 105%);"><img src="../img/list.svg" alt="" style="position: absolute;margin-top: 4%;margin-left: 7%;">列表清单</div>
    </div>
</div>
</template>
<script setup>
import {useRouter} from 'vue-router'
const router=useRouter()
const toAllText=()=>{
  router.push('/AllText')
}
</script>
<style scoped>
.category{
    margin-left: 40px;
}
.category-tit{
    font-family: Source Han Sans;
    font-size: 18px;
    font-weight: bold;
    line-height: normal;
    letter-spacing: 0em;
    font-variation-settings: "opsz" auto;
    font-feature-settings: "kern" on;
    color: rgba(7, 7, 7, 0.341);
}
.category-item {
    height: 140px;
    width: 100%;
    margin-top: 20px;
}
.category-item .item{
    width: 23%;
    height: 100%;
    float: left;
    margin-left: 20px;
    border-radius: 10px;
    text-align: center;
    line-height: 140px;
    color: aliceblue;
    
}
.category-item .item:nth-child(1){
    margin-left: 0px;
}
</style>