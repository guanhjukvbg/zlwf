<template>
    <div class="person"><person/></div>
    <div class="editor"><tinymce/></div>
    <div class="search"><search/></div>
</template>
<script setup>
import person from '@/components/person1.vue'
import tinymce from '@/components/tinymce.vue'
import search from '@/components/search.vue'
</script>
<style>
.editor{
    width: 71%;
    float: left;
    height: 90%;
    margin-left: 2.5%;
}
.search{
    float:right;
    width: 23%;
    margin-right: 2.5%;
}
</style>