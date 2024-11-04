<template>
  <div class="word">
    <br />
    <div class="word-tit">文本类文档</div>
    <hr style="margin-top: 20px; width: 95%; margin-left: 10px" />
  </div>
  <div class="page">
    <ul>
      <li v-for="item in paginatedData" :key="item.id">
        <div class="page-tit">{{ item.title }}</div>
        <div class="page-change" @click="toWrite">编辑</div>
        <div class="page-tag" :style="{ backgroundColor: item.background }">
          {{ item.tag }}
        </div>
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
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const items = [
  {
    id: 1,
    title: "树犹如此 - 白先勇",
    tag: "文本类文档",
    time: "2024年9月23日",
    background: "#D0D1D2",
  },
  {
    id: 2,
    title: "习近平新时代中国特色社会主义思想",
    tag: "文本类文档",
    time: "2024年9月23日",
    background: "#D0D1D2",
  },
  {
    id: 3,
    title: "智在指尖，爱在夕阳",
    tag: "文本类文档",
    time: "2024年9月23日",
    background: "#D0D1D2",
  },
  {
    id: 4,
    title: "第四周会会议总结",
    tag: "文本类文档",
    time: "2024年9月22日",
    background: "#D0D1D2",
  },
  {
    id: 5,
    title: "第三周会会议总结",
    tag: "文本类文档",
    time: "2024年9月22日",
    background: "#D0D1D2",
  },
  {
    id: 6,
    title: "第二周会会议总结",
    tag: "文本类文档",
    time: "2024年9月21日",
    background: "#D0D1D2",
  },
  {
    id: 7,
    title: "科技创新对企业发展的影响感想",
    tag: "文本类文档",
    time: "2024年9月21日",
    background: "#D0D1D2",
  },
  {
    id: 8,
    title: "军事理论论文",
    tag: "文本类文档",
    time: "2024年9月20日",
    background: "#D0D1D2",
  },
  {
    id: 9,
    title: "第一周会会议总结",
    tag: "文本类文档",
    time: "2024年9月18日",
    background: "#D0D1D2",
  },
  {
    id: 10,
    title: "毛概作业2",
    tag: "文本类文档",
    time: "2024年9月16日",
    background: "#D0D1D2",
  },
  {
    id: 11,
    title: "毛概作业1",
    tag: "文本类文档",
    time: "2024年9月16日",
    background: "#D0D1D2",
  },
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

const toWrite = () => {
  router.push("/Texts");
};
</script>

<style scoped>
.word {
  margin-left: 40px;
  margin-top: 30px;
}
.word .word-tit {
  font-family: Source Han Sans;
  font-size: 20px;
  font-weight: bold;
  line-height: normal;
  letter-spacing: 0em;
  font-variation-settings: "opsz" auto;
  font-feature-settings: "kern" on;
  color: rgba(0, 0, 0, 0.5);
}
.page ul li {
  width: 92.5%;
  height: 60px;
  margin-top: 10px;
  margin-left: 50px;
  border-bottom: 0.5px solid gray;
  list-style: none;
  cursor: pointer;
}
.page ul li .page-tit {
  margin-left: 20px;
  margin-top: 0px;
  float: left;
}
.page ul li .page-change {
  float: right;
  color: #003ad2;
  margin-top: 5px;
  margin-right: 30px;
}
.page ul li .page-tag {
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
.page ul li .page-time {
  float: right;
  margin-right: 20px;
  margin-top: 0px;
  font-size: 13px;
}
.pageSize {
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
.pageSize ul li {
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
