<script setup>
import person from '@/components/person.vue'
import tinymcelist from '@/components/tinymce-list.vue'
</script>

<template>
  <div class="person"><person/></div>
  <div class="editor"><tinymcelist/></div>
</template>
<style>
.editor{
    width: 95%;
    height: 90%;
    margin-left: 2.5%;
}
</style>
