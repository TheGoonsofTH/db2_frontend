<template>
  <div class="px-8 prose"></div>
  <form>
    <div>
      <p>momentane_Inzidenz </p>
      <input type="number" v-model="editcoronaInfo.momentane_Inzidenz" />
      <p>maxAnzahlPersonnen_pro_qm</p>
      <input type="number" v-model="editcoronaInfo.maxAnzahlPersonnen_pro_qm" />
      <p>Datum</p>
      <input  type="date" v-model="editcoronaInfo.Datum" />
    </div>
  </form>
  <div>
    <button
      @click="submit"
      class="
        focus:outline-none
        text-sm
        w-24
        py-3
        rounded-md
        font-semibold
        text-white
        bg-blue-500
        ring-0
      "
    >
      OK
    </button>

    <button
      @click="abort"
      class="
        focus:outline-none
        text-sm
        w-24
        py-3
        rounded-md
        font-semibold
        text-white
        bg-red-500
        ring-01
      "
    >
      X
    </button>
  </div>
</template>

<script  lang="ts">
import {  coronaInfo } from '@/model/schema'
import { computed, PropType, reactive } from 'vue'

export default {
  props: {
    editcoronaInfo: {
      type:Object as PropType<coronaInfo>,
      required:true
      },
  },
  emits: ['submitForm', 'abort'],
  setup(props, ctx) {
    const submit = () => {
      ctx.emit('submitForm', props.editcoronaInfo)
    }
    const abort = () => {
      ctx.emit('abort')
    }
    return { submit,  abort }
  },
}
</script>

<style scoped>
button {
  margin: 1rem;
}
form{
  display: flex;
  flex-direction: row;
  gap: 1em;
}
</style>