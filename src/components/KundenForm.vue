<template>
  <div class="px-8 prose"></div>
  <form>
    <p>Vorname</p>
    <input type="text" v-model="kunde.Vorname" />
    <p>Nachname</p>
    <input type="text" v-model="kunde.Nachname" />
    <p>Alter</p>
    <input type="text" v-model="kunde.Alter" />
    <p>kont</p>
    <input type="text" v-model="kunde.Kontaktdaten_id" />    
  </form>
  <button @click="submitKunde">OK</button>
</template>

<script  lang="ts">
import { Kunde } from '@/model/schema'
import { PropType } from 'vue'
import { useStore,  Action } from '@/store/index'

export default {
  props: {
    kunde: {
      type: Object as PropType<Kunde>,
      required: true,
    },
    showForm: Boolean
  },
  setup(props){
    const store = useStore()
    const submitKunde = ()=>{
      store.dispatch(Action.addKunde,props.kunde)
      props.showForm = false
    }
    return {submitKunde}
  }
}
</script>
