import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router  from "./router";
import snackbar from "snackbar";


const app = createApp(App).use(router)

app.mixin({
  methods: {
    showSnackbar(msg:string){
      console.log(msg);
      
      snackbar.show("msg")
    }
  }
})

app.mount('#app')
