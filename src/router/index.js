import {createRouter, createWebHistory} from "vue-router";

// Pages
import Login from "../authentication/pages/login.component.vue";
import Register from "../authentication/pages/register.component.vue";
import CreateOrganization from "../organizations/pages/create-organization.component.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/login', name: 'Login', component: Login },
    { path: '/register', name: 'Register', component: Register },
    { path: '/create-organization', name: 'Create Organization', component: CreateOrganization }
  ]
});

export default router;