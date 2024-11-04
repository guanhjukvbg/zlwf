<template>
  <div class="sidebar">
    <div class="logo-details" @click="toHome">
      <img src="../img/cloud-fill (1).svg" alt="智链文辅" />
      <span class="logo_name">智链文辅</span>
    </div>
    <ul class="nav-links">
      <li>
        <div class="iocn-link">
          <img class="icon" src="../img/edit-box-fill.svg" alt="" />
          <span class="link_name">新建文档</span>
          <img class="arrow" src="../img/arrow.svg" alt="" />
        </div>
        <ul class="sub-menu">
          <!-- <li class="link_name">新建文档类别</li> -->
          <li @click="toMath">数学类文档</li>
          <li @click="toText">文本类文档</li>
          <li @click="toPic">多图类文档</li>
          <li @click="toList">列表清单</li>
        </ul>
      </li>
      <li @click="toSet">
        <div class="iocn-link">
          <img class="icon" src="../img/Sliders_Horizontal.svg" alt="" />
          <span class="link_name">设置</span>
        </div>
        <ul class="sub-menu">
          <li>设置</li>
        </ul>
      </li>
      <li @click="toBin">
        <div class="iocn-link">
          <img class="icon" src="../img/Bin.svg" alt="" />
          <span class="link_name">回收站</span>
        </div>
        <ul class="sub-menu">
          <li>回收站</li>
        </ul>
      </li>
      <li>
        <div class="profile-details">
          <div class="profile-content">
            <img src="../img/头像.png" alt="profile" />
          </div>
          <div class="name-job">
            <div class="profile_name">Guan</div>
            <div class="job">汪汪队立大功</div>
          </div>
          <img class="out" src="../img/log-out.svg" alt="" />
        </div>
      </li>
    </ul>
  </div>
  <section class="home-section">
    <div class="home-content">
      <img src="../img/Hamburger_3.svg" alt="" class="bx-menu" />
      <span class="text">我的文档</span>
    </div>
    <category />
    <page />
  </section>
</template>
<script setup>
import "../assets/menu-style.css";
import category from "@/components/category.vue";
import page from "@/components/PaginationComponent.vue";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const toHome = () => {
  router.push("/");
};
const toText = () => {
  router.push("/Texts");
};
const toMath = () => {
  router.push("/Math");
};
const toPic = () => {
  router.push("/Pic");
};
const toList = () => {
  router.push("/listdemo");
};
const toSet = () => {
  router.push("/setting");
};
const toBin = () => {
  router.push("/bin");
};
onMounted(() => {
  let arrow = document.querySelectorAll(".arrow");
  for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e) => {
      let arrowParent = e.target.parentElement.parentElement;
      arrowParent.classList.toggle("showMenu");
    });
  }

  let sidebar = document.querySelector(".sidebar");
  let sidebarBtn = document.querySelector(".bx-menu");
  console.log(sidebarBtn);
  sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("close");
  });
});
</script>
<style></style>
