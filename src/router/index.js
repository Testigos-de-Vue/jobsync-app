import {createRouter, createWebHistory} from "vue-router";

// Pages
import Login from "../authentication/pages/login.component.vue";
import Register from "../authentication/pages/register.component.vue";
import PasswordRecovery from "../authentication/pages/password-recovery.component.vue";
import CreateOrganization from "../organizations/pages/create-organization.component.vue";
import Settings from "../settings/pages/settings.component.vue";
import Recruitments from "../organizations/pages/recruitments.component.vue"
import Home from "../recruiters/pages/recruiters-home.component.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/login', name: 'Login', component: Login },
    { path: '/register', name: 'Register', component: Register },
    { path: '/password-recovery', name: 'Password Recovery', component: PasswordRecovery},
    { path: '/create-organization', name: 'Create Organization', component: CreateOrganization },
    { path: '/settings', name: 'Settings', component: Settings },
    { path: '/recruitments', name: 'Recruitments', component: Recruitments },
    { path: '/home', name: 'Home', component: Home},
  ]
});

export default router;