<script setup>
import person from '@/components/person.vue'
import tinymcemath from '@/components/tinymce-math.vue'
</script>

<template>
  <div class="person"><person/></div>
  <div class="editor"><tinymcemath/></div>
</template>
<style>
.editor{
    width: 95%;
    height: 90%;
    margin-left: 2.5%;
}
</style>