<template>
  <div v-if="!showbegleiterOld || showbegleiterNew" class="begleiterButtons">
    <button
      class="
        focus:outline-none
        text-sm
        w-24
        py-3
        rounded-md
        font-semibold
        text-white
        bg-yellow-500
        ring-01
        
      "
    >
      Neuer Begleiter Hinzufügen
    </button>
    <button @click="showbegleiterOld=!showbegleiterOld"
      class="
        focus:outline-none
        text-sm
        w-24
        py-3
        rounded-md
        font-semibold
        text-white
        bg-yellow-500
        ring-01
        m-1
      "
    >
      Bestehenden Kunden Hinzufügen
    </button>
  </div>
  <div id="begleiterNew"></div>
  <div id="begleiterOld" v-if="showbegleiterOld" class="w-screen">
  <KundenComp @submitKunde="submitForm" @abort="showbegleiterOld = !showbegleiterOld"></KundenComp>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import KundenComp from './KundenFormBegleiter.vue'

export default {
  props: {
    ReservierungsId: {
      type: Number,
      default: 0,
    },
  },
  data(){
    return {
      showbegleiterOld:false,
      showbegleiterNew:false,
      showForm : false,
    }
  },
  components: { KundenComp },
  setup() {
    const store = useStore()
    const kunden = computed(() => store.state.editKunde)
    return {  kunden }
  },
  methods:{
    submitForm(){}
  }
}
</script>

<style>
</style>