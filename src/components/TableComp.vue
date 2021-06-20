<template>
  <div class="px-8 prose w-full mb-4">
    <table class="table-auto">
      <thead>
        <tr>
          <th v-for="(key, index) in Headers" :key="index">{{ key }}</th>
          <th @click="addfn" class="clickable">+</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(obj, index) in update" :key="index">
          <td v-for="(value, key) in obj" :key="key">{{ value }}</td>
          <td><button @click="delfn(obj.id)">del</button></td>
          <td><button @click="editfn(index)">edit</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'
interface dbObj {
  id: number
}
export default {
  props: {
    update: {
      type: Array as PropType<Array<dbObj>>,
      required: true
    },
  },
  emits: ['edit', 'delete','add'],
  setup(props,ctx) {
    const Headers = Object.keys(props.update[0])
    const editfn= (index:number)=> ctx.emit('edit',index)
    const delfn= (id:number)=> ctx.emit('delete',id)
    const addfn= ()=> ctx.emit('add')
    return { Headers ,editfn,delfn,addfn}
  },
}
</script>

<style>
</style>