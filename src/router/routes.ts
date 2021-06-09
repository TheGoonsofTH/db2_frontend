import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Kunden from "@/views/Kunden.vue";
export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/kunden",
    name: "Kunden",
    component: Kunden,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];