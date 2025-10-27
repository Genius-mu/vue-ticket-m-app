import { createRouter, createWebHistory } from "vue-router";
import Landing from "/src/pages/Landing.vue";
import Login from "/src/pages/Auth/Login.vue";
import Signup from "/src/pages/Auth/Signup.vue";
import Dashboard from "/src/pages/Dashboard.vue";
import Tickets from "/src/pages/Tickets.vue";

const routes = [
  { path: "/", name: "Landing", component: Landing },
  { path: "/auth/login", name: "Login", component: Login },
  { path: "/auth/signup", name: "Signup", component: Signup },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: "/tickets",
    name: "Tickets",
    component: Tickets,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _, next) => {
  const session = localStorage.getItem("ticketapp_session");
  if (to.meta.requiresAuth && !session) next("/auth/login");
  else next();
});

export default router;
