import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Kunden from "@/views/Kunden.vue";
import Reservierungen from "@/views/Reservierungen.vue";

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
    path: "/reservierungen",
    name: "Reservierungen",
    component: Reservierungen,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];