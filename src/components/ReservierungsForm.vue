<template>
  <div class="px-8 prose"></div>
  <form>
    <div>
      <p>Datum</p>
      <input type="date" v-model="reservierung.Datumszeit" />
      <p>Gelöscht</p>
      <input type="checkbox" v-model="reservierung.deleted" />
      <p>Storniert</p>
      <input type="checkbox" v-model="reservierung.storniert" />
      <p>Reservierer</p>
      <input type="text" v-model="reservierung.reservierer_id" />
    </div>
    <div>
      <p>wähle Reservierer</p>
      <select v-model="reservierung.reservierer_id" name="kunden"  id="Kunden-select">
        <option value="">--Reservierer--</option>
        <option v-for="(kunde, index) in Kunden" :key="index" :value="kunde.id">
          {{ kunde.Vorname }} {{kunde.Nachname}}
        </option>
      </select>
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
import { Reservierung } from '@/model/schema'
import { computed, onMounted, PropType, reactive, ref } from 'vue'
import { useStore, Mutation, Action } from '@/store/index'

export default {
  props: {
    reservierung: {
      type: Object as PropType<Reservierung>,
      required: true,
    },
  },
  emits: ['submitForm', 'abort'],
  setup(props, ctx) {
    const submit = () => {
      ctx.emit('submitForm', props.reservierung)
    }
    const abort = () => {
      ctx.emit('abort')
    }
    const store = useStore()
    const storesyncKunden = () => store.dispatch(Action.syncKunden)
    onMounted(storesyncKunden)
    const Kunden = computed(() => store.state.Kunden)
    const selectedKunde = ref(0)
    return { submit, abort,Kunden ,selectedKunde}
  },
}
</script>

<style scoped>
button {
  margin: 1rem;
}
form {
  display: flex;
  flex-direction: row;
  gap: 1em;
}
</style>