<template>
  <TableForm
    v-if="coronainfo.length > 0"
    @edit="editcoronainfofn"
    @delete="delcoronainfofn"
    @add="addcoronainfofn"
    :update="coronainfo"
  ></TableForm>
  <CoronaForm
    v-if="showForm"
    @submitForm="submitForm"
    :editcoronaInfo="editcoronainfo"
    @abort="abortForm"
  ></CoronaForm>
</template>

<script  lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useStore, Mutation, Action } from '@/store/index'
import CoronaForm from '../components/CoronaForm.vue'
import { coronaInfo } from '@/model/schema'
import TableForm from '../components/TableComp.vue'

export default {
  components: { CoronaForm, TableForm },
  data(c) {
    return {
      showForm: false,
      formMode: 'add',
      editcoronainfo: {},
    }
  },
  setup(prop) {
    const API = 'http://localhost:3000'
    const store = useStore()
    const syncCoronaInfo = async () => {
      let res = await fetch(`${API}/coronainfo`)
      coronainfo.value = await res.json()
    }
    onMounted(syncCoronaInfo)
    const coronainfo = ref<Array<coronaInfo>>([])

    return { coronainfo, store, syncCoronaInfo, API }
  },
  methods: {
    submitForm(payload: coronaInfo) {
      if (this.formMode === 'add') {
        this.addcoronainfo(payload)
      }
      if (this.formMode === 'edit') {
        this.updatecoronainfo(payload)
      }
      console.warn('wrong from mode')
      return
    },
    abortForm() {
      this.showForm = false
      this.syncCoronaInfo
    },
    addcoronainfofn() {
      this.formMode = 'add'
      this.showForm = true
    },
    editcoronainfofn(index: number) {
      this.showSnackbar('you can not edit it')
      this.showForm = false
    },
    updatecoronainfo(coronainfo: coronaInfo) {
      //this.store.dispatch(Action.updatecoronainfo, coronainfo)
      this.showSnackbar('you cant edit it')
      this.formMode = ''
      this.showForm = false
    },
    async addcoronainfo(coronainfo: coronaInfo) {
      let date =  new Date(coronainfo.Datum)
      const options = {
        method: 'POST',
        body: JSON.stringify(coronainfo),
        headers: {
          'Content-Type': 'application/json',
        },
      }
        const res = await fetch(`${this.API}/coronainfo`, options)
        if (res.status !== 200) {
          const msg = await res.json()
          this.showSnackbar(msg.message)          
        } else {
          //this.showSnackbar("coronainfo hinzugefügt")          
        }
      this.formMode = ''
      this.showForm = false
    },
    async delcoronainfofn(id: number) {
      let res = await fetch(this.API + '/coronainfo/' + id, {
        method: 'DELETE',
      })
      this.syncCoronaInfo()
    },
  },
}
</script>
