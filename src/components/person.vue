<template>
<div class="person">
    <img src="../img/back.svg" alt="" @click="back" style="float: left;width: 25px;cursor: pointer;margin-top: 15px;margin-left: 2.5%;">
    <img class="tx" src="../img/头像.png" alt="" >
    <p>文档编辑</p>

</div>
</template>
<script setup>
import {useRouter} from 'vue-router'
const router=useRouter()
const back=()=>{
  router.push('/')
}
</script>
<style scoped>
.person{
    width: 100%;
    height: 60px;
    
}
.person .tx{
    width: 35px;
    height: 35px;
    border-radius: 50px;
    margin-left: 20px;
    margin-top: 12px;
    cursor: pointer;
    float: left;
}
.person p{
    float: left;
    line-height: 60px;
    color: #ffffff;
    font-size: 18px;
    margin-left: 20px;
}
</style>