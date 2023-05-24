import {createRouter, createWebHistory} from "vue-router";

// Pages
import Login from "../authentication/pages/login.component.vue";
import Register from "../authentication/pages/register.component.vue";
import PasswordRecovery from "../authentication/pages/password-recovery.component.vue";
import ForgotPassword from "../authentication/pages/password-forgot.component.vue";

import Settings from "../settings/pages/settings.component.vue";
import ProfileSettingsForm from "../settings/components/profile-settings-form.component.vue";
import AppSettingsForm from "../settings/components/app-settings-form.component.vue";

import OrganizationHome from "../organizations/pages/organization-home.component.vue";
import OrganizationRecruitments from "../organizations/pages/recruitments.component.vue";
import OrganizationProfile from "../organizations/pages/organization-profile.component.vue";

import OrganizationCreation from "../organizations/pages/organization-creation.component.vue";
import TeamSelection from "../recruiters/pages/team-selection.component.vue";
import RecruitersHome from "../recruiters/pages/recruiters-home.component.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/login', name: 'Log In', component: Login },
    { path: '/register', name: 'Register', component: Register },
    { path: '/settings', name: 'Settings', component: Settings,
      children: [
        { path: '', redirect: '/settings/profile', component: ProfileSettingsForm },
        { path: 'profile', name: 'Profile Settings', component: ProfileSettingsForm },
        { path: 'app', name: 'App Settings', component: AppSettingsForm }
      ]
    },
    { path: '/organizations', name: 'Recruiters Home', component: RecruitersHome,
      children: [
        { path: '', redirect: '/organizations/home', component: TeamSelection },
        { path: 'home', name: 'Team Selection', component: TeamSelection },
        { path: 'create', name: 'Organizations Creation', component: OrganizationCreation }
      ]
    },
    // This should go to /TestigosdeVue/home
    { path: '/home', name: 'Organization Home', component: OrganizationHome},
    { path: '/forgot-password', name: 'Forgot Password', component: ForgotPassword},
    { path: '/recover-password', name: 'Password Recovery', component: PasswordRecovery},
    { path: '/profile', name: 'Organization', component: OrganizationProfile },
    { path: '/recruitments', name: 'Recruitments', component: OrganizationRecruitments },

    { path: '/', redirect: '/organizations/home'},
  ]
});

export default router;