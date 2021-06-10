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
import { computed, PropType, reactive } from 'vue'
import { useStore, Action } from '@/store/index'

export default {
  props: {
    update: Boolean,
  },
  emits: ['submitKunde', 'abort'],
  setup(props, ctx) {
    const kunde = computed(() => store.state.editKunde)

    const store = useStore()
    const submitKunde = () => {
      ctx.emit('submitKunde', kunde.value)
    }
    const abort = () => {
      ctx.emit('abort')
    }
    return { submitKunde, kunde, abort }
  },
}
</script>

<style scoped>
button {
  margin: 1rem;
}
</style>