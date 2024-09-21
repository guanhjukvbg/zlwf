<script setup>
import person from '@/components/person.vue'
import tinymce_pic from '@/components/tinymce-pic.vue'
</script>

<template>
  <div class="person"><person/></div>
  <div class="editor"><tinymce_pic/></div>
</template>
<style>
.editor{
    width: 95%;
    height: 90%;
    margin-left: 2.5%;
}
</style>
