import {createRouter, createWebHistory} from "vue-router";

// Pages
import Login from "../authentication/pages/login.component.vue";
import Register from "../authentication/pages/register.component.vue";
import PasswordRecovery from "../authentication/pages/password-recovery.component.vue";
import PasswordForgot from "../authentication/pages/password-forgot.component.vue";
import Organization from "../organizations/pages/organization-profile.component.vue";
import OrganizationCreation from "../organizations/pages/organization-creation.component.vue";
import Settings from "../settings/pages/settings.component.vue";
import ProfileSettingsForm from "../settings/components/profile-settings-form.component.vue";
import AppSettingsForm from "../settings/components/app-settings-form.component.vue";
import Recruitments from "../organizations/pages/recruitments.component.vue"
import Home from "../recruiters/pages/recruiters-home.component.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/home'},
    { path: '/login', name: 'Log In', component: Login },
    { path: '/register', name: 'Register', component: Register },
    { path: '/settings', name: 'Settings', component: Settings,
      children: [
        { path: '', redirect: '/settings/profile', component: ProfileSettingsForm },
        { path: 'profile', name: 'Profile Settings', component: ProfileSettingsForm },
        { path: 'app', name: 'App Settings', component: AppSettingsForm }
      ]
    },
    { path: '/password-forgot', name: 'Password Forgot ', component: PasswordForgot},
    { path: '/password-recovery', name: 'Password Recovery', component: PasswordRecovery},
    { path: '/organization', name: 'Organization', component: Organization },
    { path: '/organizations/create', name: 'Organization Creation', component: OrganizationCreation },
    { path: '/recruitments', name: 'Recruitments', component: Recruitments },
    { path: '/home', name: 'Home', component: Home},
  ]
});

export default router;