<template>
  <div class="px-8 prose w-full">
    <table class="table-auto">
      <thead>
        <tr>
          <th>id</th>
          <th>Vorname</th>
          <th>Nachname</th>
          <th>Alter</th>
          <th>Kontaktdaten_id</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(kunde,index) in Kunden" :key="index">
          <td>{{ kunde.id }}</td>
          <td>{{ kunde.Vorname }}</td>
          <td>{{ kunde.Nachname }}</td>
          <td>{{ kunde.Alter }}</td>
          <td>{{ kunde.Kontaktdaten_id }}</td>
          <td><button @click="editKundefn(index)">edit</button></td>
        </tr>
      </tbody>
    </table>
  </div>
  <KundenForm v-if="showForm" :kunde="editKunde" :showForm="showForm"></KundenForm>
</template>

<script  lang="ts">
import { computed, defineProps, onMounted, reactive ,ref} from 'vue'
import { useStore, Mutation, Action } from '@/store/index'
import KundenForm from '../components/KundenForm.vue'
import { Kunde } from '@/model/schema'

export const showForm = ref(false)

export default {
  components:{KundenForm},
  setup() {
    const store = useStore()
    const editKunde = reactive<Kunde>({})
    const storesyncKunden = () => store.dispatch(Action.syncKunden)
    onMounted(storesyncKunden)
    const editKundefn = (index)=>{
      let target = store.state.Kunden[index]
      
      editKunde.Nachname = target.Nachname
      editKunde.Vorname = target.Vorname
      editKunde.Alter = target.Alter
      editKunde.Kontaktdaten_id = target.Kontaktdaten_id
      showForm.value = true
    }
    const Kunden = computed(() => store.state.Kunden)
    return { Kunden ,showForm,editKunde,editKundefn }
  },
}
</script>
