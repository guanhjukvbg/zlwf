<template>
<div class="category">
    <div class="category-tit">文档分类</div>
    <div class="category-item">
        <div class="item">文本类文档</div>
        <div class="item">数学类文档</div>
        <div class="item">多图类文档</div>
        <div class="item">列表清单</div>
    </div>
</div>
</template>
<script setup>

</script>
<style scoped>
.category{
    margin-left: 30px;
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
    background-color: aquamarine;
    text-align: center;
    line-height: 140px;
}
</style>