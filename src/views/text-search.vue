<template>
    <div class="person"><person/></div>
    <div class="editor"><tinymce/></div>
</template>
<script setup>
import person from '@/components/person.vue'
import tinymce from '@/components/tinymce.vue'
import search from '@/components/search.vue'
</script>
<style>
.editor{
    width: 71%;
    height: 90%;
    margin-left: 2.5%;
}
</style>