<template>
  <TableForm
    v-if="reservierung"
    @edit="editReservierungfn"
    @delete="delReservierungfn"
    :update="reservierung"
  ></TableForm>
  <ReserierungsForm
    v-if="showForm"
    @submitForm="submitForm"
    :reservierung="editReservierung"
    @abort="abortForm"
  ></ReserierungsForm>
</template>

<script  lang="ts">
import { computed, onMounted } from 'vue'
import { useStore, Mutation, Action } from '@/store/index'
import ReserierungsForm from '../components/ReservierungsForm.vue'
import { Kunde, Reservierung } from '@/model/schema'
import TableForm from '../components/TableComp.vue'

export default {
  components: { ReserierungsForm, TableForm },
  data(c) {
    return {
      showForm: false,
      formMode: 'add',
      editReservierung: {},
    }
  },
  setup(prop) {
    const store = useStore()
    const storesyncKunden = () => store.dispatch(Action.syncReserverierungen)
    onMounted(storesyncKunden)
    const reservierung = computed(() => store.state.Reservierungen)

    return { reservierung, store }
  },
  methods: {
    submitForm(payload: Reservierung) {
      if (this.formMode === 'add') {
        this.addReservierung(payload)
      }
      if (this.formMode === 'edit') {
        this.updateReservierung(payload)
      }
      console.warn('wrong from mode')
      return
    },
    abortForm() {
      this.showForm = false
      this.store.dispatch(Action.syncReserverierungen)
    },
    addReservierungfn() {
      this.formMode = 'add'
      this.showForm = true
    },
    editReservierungfn(index: number) {
      let target = this.store.state.Reservierungen[index]
      this.editReservierung = target
      this.formMode = 'edit'
      this.showForm = true
    },
    updateReservierung(Reservierung: Reservierung) {
      this.store.dispatch(Action.updateReservierung, Reservierung)
      this.formMode = ''
      this.showForm = false
    },
    addReservierung(Reservierung: Reservierung) {
      this.store.dispatch(Action.addReservierung, Reservierung)
      this.formMode = ''
      this.showForm = false
    },
    delReservierungfn(id: number) {
      this.store.dispatch(Action.deleteKunde, id)
    },
  },
}
</script>
