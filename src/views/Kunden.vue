<template>
  <div class="mainTable">
    <TableComp
      v-if="Kunden[0]"
      :update="Kunden"
      @delete="delKundefn"
      @edit="editKundefn"
    ></TableComp>
  </div>
  <KundenForm v-if="showForm" @submitKunde="submitForm" @abort="showForm = !showForm"></KundenForm>
</template>

<script  lang="ts">
import { computed, defineProps, onMounted, reactive, ref } from 'vue'
import { useStore, Mutation, Action } from '@/store/index'
import KundenForm from '../components/KundenForm.vue'
import TableComp from '../components/TableComp.vue'
import { Kunde } from '@/model/schema'

export default {
  components: { KundenForm, TableComp },
  data(c) {
    return {
      showForm: false,
      formMode: 'add',
    }
  },
  setup(prop) {
    const store = useStore()
    const storesyncKunden = () => store.dispatch(Action.syncKunden)
    onMounted(storesyncKunden)
    const Kunden = computed(() => store.state.Kunden)
    return { Kunden, store }
  },
  methods: {
    submitForm(payload: Kunde) {
      if (this.formMode === 'add') {
        this.addKunde(payload)
      }
      if (this.formMode === 'edit') {
        this.updateKunde(payload)
      }
      console.warn('wrong from mode')
      return
    },
    addKundefn() {
      let target: Kunde = { Nachname: '', Vorname: '', Alter: 0, Kontaktdaten_id: 0 }
      this.store.state.editKunde = target
      this.formMode = 'add'
      this.showForm = true
    },
    editKundefn(index: number) {
      let target = this.store.state.Kunden[index]
      this.store.state.editKunde = target
      this.formMode = 'edit'
      this.showForm = true
    },
    updateKunde(kunde: Kunde) {
      this.store.dispatch(Action.updateKunde, kunde)
      this.formMode = ''
      this.showForm = false
    },
    addKunde(kunde: Kunde) {
      this.store.dispatch(Action.addKunde, kunde)
      this.formMode = ''
      this.showForm = false
    },
    delKundefn(id: number) {
      this.store.dispatch(Action.deleteKunde, id)
    },
  },
}
</script>

