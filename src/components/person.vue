<template>
<div class="person">
    <img src="../img/back.svg" alt="" @click="back" style="float: left;width: 25px;cursor: pointer;margin-top: 25px;margin-left: 2.5%;">
    <input type="text" placeholder="请输入标题" v-model="inputValue" @input="sendTitle">
    

</div>
</template>
<script setup>
import {useRouter} from 'vue-router'
import { ref } from 'vue';
import axios from 'axios';


const router=useRouter()
const back=()=>{
  router.push('/')
}

const inputValue = ref('')
const sendTitle = async()=>{
    if(inputValue.value.trim() === ''){
        return;
    }
    try{
        const response  = await axios.post('/',{
            data:inputValue.value
        });
        console.log('响应：',response.data)
    }catch(error){
        console.error('发送数据时出错：',error)
    }
}

</script>
<style scoped>
.person{
    width: 100%;
    height: 70px;
    
}
.person .tx{
    width: 35px;
    height: 35px;
    border-radius: 50px;
    margin-right: 65px;
    margin-top: 12px;
    cursor: pointer;
    float: right;
}
.person .pl{
    float: left;
    width: 300px;
    height: 35px;
    border-left: 2px solid gainsboro;
    font-size: 22px;
    line-height: 35px;
    margin-left: 30px;
    margin-top: 20px;
    color: aliceblue;
    text-indent: 8px;
}
.person input{
    border: none;
    background-color: #003465;
    text-indent: 8px;
    height: 35px;
    font-size: 22px;
    margin-left: 30px;
    margin-top: 20px;
    color: aliceblue;
    border-left: 2px solid gainsboro;
}
::-webkit-input-placeholder {
/* WebKit browsers，webkit内核浏览器 */
color: aliceblue;
}
.person input:focus{
    outline: none;
    border-left: 2px solid gainsboro;
    color: aliceblue;
}
</style>