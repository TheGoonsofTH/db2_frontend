<template>
  <div class="px-8 prose">
    <h1>{{ msg }}</h1>
    <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
  </div>
</template>

<script setup lang="ts">
import {  defineProps } from 'vue'


const props = defineProps<{
  msg: string
}>()

</script>
