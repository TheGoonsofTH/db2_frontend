<template>
  <div class="px-8 prose"></div>
  <form>
    <div class="leftcol">
      <p>Vorname</p>
      <input type="text" v-model="kunde.Vorname" />
      <p>Nachname</p>
      <input type="text" v-model="kunde.Nachname" />
      <p>Alter</p>
      <input type="number" v-model="kunde.Alter" />
      <select v-model="selectedAdr"  name="pets" @change="log(selectedAdr)" id="pet-select">
        <option  value="">--Please choose an option--</option>
        <option  v-for="(adresse,index) in adressen" :key="index" :value="adresse.id">{{adresse.strasse}}</option>
      </select>
    </div>
    <div>
      <p>E-Mail</p>
      <input type="email" id="email" v-model="kunde.EMail" />
      <p>Telefonnummer</p>
      <input type="number" v-model="kunde.Telefonnummer" />
      <p>Strasse</p>
      <input type="text" id="strasse" v-model="kunde.strasse" />
      <p>Hausnummer</p>
      <input type="text" id="Hausnummer" v-model="kunde.Hausnummer" />
      <p>stadt</p>
      <input type="text" id="stadt" v-model="kunde.stadt" />
      <p>zipcode</p>
      <input type="text" id="zipcode" v-model="kunde.zipcode" />
    </div>
  </form>
  <div>
    <button
      @click="submitKunde"
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
import { Kunde } from '@/model/schema'
import { computed, PropType, reactive, ref } from 'vue'
import { useStore, Action } from '@/store/index'

export default {
  props: {
    update: Boolean,
  },
  emits: ['submitKunde', 'abort'],
  setup(props, ctx) {
    const kunde  = computed(() => store.state.editKunde)

    const store = useStore()
    const submitKunde = () => {
      ctx.emit('submitKunde', kunde.value)
    }
    const adressen = computed(()=> store.state.Adressen)
    const abort = () => {
      ctx.emit('abort')
    }
    const selectedAdr = ref('')
    const log = (id:number) => {
      let target = store.getters.getAdressbyid(id)
      let doc = document.getElementById('strasse')
      store.state.editKunde.strasse = target?.strasse
      store.state.editKunde.Hausnummer = target?.Hausnummer
      store.state.editKunde.stadt = target?.stadt
      store.state.editKunde.zipcode = target?.zipcode
      
    }
    
    return { submitKunde, kunde, abort,adressen ,log ,selectedAdr}
  },
}
</script>

<style scoped>
.leftcol{
  display: flex;
  flex-direction: column;
}

select{
  margin: auto;
}

button {
  margin: 1rem;
}
form {
  display: flex;
  flex-direction: row;
  gap: 1em;
}
</style>