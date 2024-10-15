<template>
    <div class="word">
        <div class="word-tit">全部文档</div>
        <hr style="margin-top: 20px;width: 95%;margin-left: 10px;">
    </div>
    <div class="page">
      <ul>
        <li v-for="item in paginatedData" :key="item.id">
          <div class="page-tit">{{ item.title }}</div>
          <div class="page-change" @click="toWrite">编辑</div>
          <div class="page-tag" :style="{ backgroundColor: item.background }">{{ item.tag }}</div>
          <div class="page-time">{{ item.time }}</div>
        </li>
      </ul>
    </div>
       <div class="pageSize">
        <ul>
          <li v-for="page in pageCount" :key="page" @click="setPage(page)">
            {{ page }}
          </li>
        </ul>
       </div>
      
        
      
    
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import {useRouter} from 'vue-router'
  const router=useRouter()
  const items = [
    { id: 1, title: '毛泽东思想的形成与发展',tag:'文本类文档',time:'2024年9月23日',background:'#D0D1D2'},
    { id: 2, title: '大学物理试卷A',tag:'数学类文档',time:'2024年9月23日',background:'#FFC6AB'},
    { id: 3, title: '智在指尖，爱在夕阳',tag:'文本类文档',time:'2024年9月23日',background:'#D0D1D2'},
    { id: 4, title: '日记9.22',tag:'多图类文档',time:'2024年9月22日',background:'#ABCCF9'},
    { id: 5, title: '工作清单',tag:'列表清单',time:'2024年9月22日',background:'#D195AF'},
    { id: 6, title: '高等数学题库A',tag:'数学类文档',time:'2024年9月21日',background:'#FFC6AB'},
    { id: 7, title: '高等数学题库B',tag:'数学类文档',time:'2024年9月21日',background:'#FFC6AB'},
    { id: 8, title: '线性代数题库A',tag:'数学类文档',time:'2024年9月20日',background:'#FFC6AB'},
    { id: 9, title: '智链文辅',tag:'文本类文档',time:'2024年9月20日',background:'#D0D1D2'},
    { id: 10, title: '高等数学题库A',tag:'数学类文档',time:'2024年9月21日',background:'#FFC6AB'},
  ];
  
  const pageSize = 7; 
  const currentPage = ref(1); 
  
  
  const pageCount = computed(() => Math.ceil(items.length / pageSize));
  
  
  const paginatedData = computed(() => {
    const start = (currentPage.value - 1) * pageSize;
    return items.slice(start, start + pageSize);
  });
  
  
  function setPage(page) {
    currentPage.value = page;
  }

  const toWrite=() =>{
    router.push('/Texts')
  }
  </script>
  
  <style scoped>
  .word{
    margin-left: 40px;
    margin-top: 30px;
    }
    .word .word-tit{
        font-family: Source Han Sans;
        font-size: 18px;
        font-weight: bold;
        line-height: normal;
        letter-spacing: 0em;
        font-variation-settings: "opsz" auto;
        font-feature-settings: "kern" on;
        color: rgba(7, 7, 7, 0.341);
    }
  .page ul li{
    width: 92.5%;
    height: 60px;
    margin-top: 10px;
    margin-left: 50px;
    border-bottom: 0.5px solid gray;
    list-style: none;
    cursor: pointer;
  }
  .page ul li .page-tit{
    margin-left: 20px;
    margin-top: 0px;
    float: left;
  }
  .page ul li .page-change{
    float: right;
    color: #003AD2;
    margin-top: 5px;
    margin-right: 30px;
    
  }
  .page ul li .page-tag{
    clear: both;
    width: 80px;
    height: 25px;
    background-color: rgb(202, 205, 205);
    border-radius: 12px;
    font-size: 13px;
    text-align: center;
    line-height: 25px;
    float: left;
    color: rgba(0, 0, 0, 0.6);
    margin-left: 15px;
  }
  .page ul li .page-time{
    float: right;
    margin-right: 20px;
   margin-top: 0px;
   font-size: 13px;
  }
  .pageSize{
    position: fixed;
    bottom: 20px; 
    left: 90%;
    transform: translateX(-50%); 
    width: 200px; 
    height: 40px;
    /* background-color: antiquewhite; */
    display: flex;
    justify-content: left; 
    align-items: center; 
    z-index: 1000; 
  }
  .pageSize ul li{
    width: 25px;
    height: 25px;
    background-color: #003465;
    color: aliceblue;
    float: left;
    list-style: none;
    margin-left: 10px;
    border-radius: 50px;
    text-align: center;
    cursor: pointer;
  }
  </style>
  