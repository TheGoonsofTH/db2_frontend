<template>
  <div class="px-8 prose">
    <table class="table-auto">
  <thead>
    <tr>
      <th>id</th>
      <th>Vorname</th>
      <th>Nachname</th>
      <th>Alter</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="kunde in Kunden" :key="kunde.id">
      <td>{{kunde.id}}</td>
      <td>{{kunde.Vorname}} </td>
      <td>{{kunde.Nachname}} </td>
      <td>{{kunde.Alter}} </td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, onMounted } from 'vue'

import { useStore, Mutation,Action } from '@/store/index'

const store = useStore()
const storesyncKunden = ()=>store.dispatch(Action.syncKunden)
onMounted(storesyncKunden)
const Kunden = computed(() => store.state.Kunden)
const props = defineProps<{
  msg: string
}>()

</script>
