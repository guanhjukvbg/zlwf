<template>
    <div class="word">
        <hr style="margin-top: 20px;width: 95%;margin-left: 10px;">
    </div>
    <div class="page">
      <!-- 数据渲染 -->
      <ul>
        <li v-for="item in paginatedData" :key="item.id">
          <div class="page-tit">{{ item.title }}</div>
          <div class="page-delete" >删除</div>
          <div class="page-back">还原</div>
          <div class="page-tag" :style="{ backgroundColor: item.background }">{{ item.tag }}</div>
          <div class="page-time">{{ item.time }}</div>
        </li>
      </ul>
    </div>
      <!-- 分页控制 -->
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
  
  const items = [
    { id: 1, title: '职业发展规划',tag:'文本类文档',time:'删除于2024年9月21日 23:14',background:'#D0D1D2'},
    { id: 2, title: '日记9.10',tag:'多图类文档',time:'删除于2024年9月20日 15:44',background:'#ABCCF9'},
    { id: 3, title: '2019-线性代数期中试卷',tag:'数学类文档',time:'删除于2024年9月20日 09:46',background:'#FFC6AB'},
    { id: 4, title: '2020-线性代数期中试卷',tag:'数学类文档',time:'删除于2024年9月20日 08:17',background:'#FFC6AB'},
    { id: 5, title: '2021-线性代数期中试卷',tag:'数学类文档',time:'删除于2024年9月20日 00:50',background:'#FFC6AB'},
    { id: 6, title: '2019-线性代数期末试卷',tag:'数学类文档',time:'删除于2024年9月19日 23:55',background:'#FFC6AB'},
    { id: 7, title: '2019-线性代数期末试卷',tag:'数学类文档',time:'删除于2024年9月19日 21:03',background:'#FFC6AB'},
    { id: 8, title: '中国近代史纲要题库(2)',tag:'文本类文档',time:'删除于2024年9月19日 11:07',background:'#D0D1D2'},
    { id: 9, title: '历史小组作业',tag:'文本类文档',time:'删除于2024年9月18日 10:36',background:'#D0D1D2'},
    { id: 10, title: '中国近代史纲要题库(1)',tag:'文本类文档',time:'删除于2024年9月18日 10:10',background:'#D0D1D2'},
    { id: 11, title: '职业发展规划',tag:'文本类文档',time:'删除于2024年9月17日 23:14',background:'#D0D1D2'},
    { id: 12, title: '日记9.10',tag:'多图类文档',time:'删除于2024年9月17日 15:44',background:'#ABCCF9'},
    { id: 13, title: '日记9.03',tag:'数学类文档',time:'删除于2024年9月16日 09:46',background:'#ABCCF9'},
    { id: 14, title: '2020-线性代数期中试卷',tag:'数学类文档',time:'删除于2024年9月12日 08:17',background:'#FFC6AB'},
    { id: 15, title: '2021-线性代数期中试卷',tag:'数学类文档',time:'删除于2024年9月12日 00:50',background:'#FFC6AB'},
    { id: 16, title: '日记9.01',tag:'数学类文档',time:'删除于2024年9月11日 23:55',background:'#ABCCF9'},
  ];
  
  const pageSize = 10; 
  const currentPage = ref(1); 
  
  
  const pageCount = computed(() => Math.ceil(items.length / pageSize));
  
  
  const paginatedData = computed(() => {
    const start = (currentPage.value - 1) * pageSize;
    return items.slice(start, start + pageSize);
  });
  
  
  function setPage(page) {
    currentPage.value = page;
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
  .page ul li .page-back{
    float: right;
    color: #003AD2;
    margin-top: 5px;
    margin-right: 30px;
    
  }
  .page ul li .page-delete{
    float: right;
    color: #D20000;
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
  