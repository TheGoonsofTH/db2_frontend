<template>
  <nav m-1 >
        <router-link v-for="route in currentRoutes" :key="route.path" :to="route.path">
          {{ route.name }}
        </router-link>
  </nav>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { routes } from "./router/routes";
export default {
  setup(){
    const currentRoutes = routes
    
    return { currentRoutes }
  }
}
</script>

<style >
#app{
  flex-direction: column;
}
nav{
  border: 5px grey;
  padding-block-end: 1em;
  display: flex;
  height: 3rem;
  justify-content: flex-start;
  align-items: flex-end;
}
nav a{
margin: auto;
}

nav a:hover{
  border-radius: 10px;
  background-color:hsl(0, 0%, 90%) ;

}
nav a:active {
    background-color:hsla(0, 0%, 90%, 0.575) ;
}

main{
  margin-block-start: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
}
</style>


