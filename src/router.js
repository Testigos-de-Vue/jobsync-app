import {createRouter, createWebHistory} from "vue-router";

// Pages
import Login from "./authentication/pages/login.component.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/login', name: 'Login', component: Login },
  ]
});