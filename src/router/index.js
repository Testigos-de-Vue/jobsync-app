import {createRouter, createWebHistory} from "vue-router";

// Pages
import Login from "../authentication/pages/login.component.vue";
import Register from "../authentication/pages/register.component.vue";
import PasswordRecovery from "../authentication/pages/password-recovery.component.vue";
import ForgotPassword from "../authentication/pages/password-forgot.component.vue";

import Settings from "../settings/pages/settings.component.vue";
import ProfileSettingsForm from "../settings/components/profile-settings-form.component.vue";
import AppSettingsForm from "../settings/components/app-settings-form.component.vue";

import OrganizationRecruitments from "../recruitment/pages/organization-recruitments.component.vue";
import OrganizationProfile from "../organizations/pages/organization-profile.component.vue";
import OrganizationCreation from "../organizations/pages/organization-creation.component.vue";
import OrganizationSettings from "../organizations/pages/organization-settings.component.vue";
import RecruitersHome from "../recruiters/pages/recruiters-home.component.vue";
import PageNotFoundComponent from "../shared/pages/page-not-found.component.vue";
import RecruitmentDashboard from "../recruitment/pages/recruitment-dashboard.component.vue";
import CandidateApplicationsDashboard from "../recruitment/pages/candidate-applications-dashboard.component.vue";
import {useUserStore} from "../authentication/store/user-store.store.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/home', name: 'Recruiter Home', component: RecruitersHome, meta: { requiresAuth: true }},
    { path: '/login', name: 'Log In', component: Login, meta: { requiresAuth: false }},
    { path: '/register', name: 'Register', component: Register, meta: { requiresAuth: false } },
    { path: '/forgot-password', name: 'Forgot Password', component: ForgotPassword, meta: { requiresAuth: false }},
    { path: '/recover-password', name: 'Password Recovery', component: PasswordRecovery, meta: { requiresAuth: false }},
    { path: '/settings',
      name: 'Settings',
      component: Settings,
      children: [
        { path: '', name: 'Settings redirect', redirect: '/settings/profile', component: ProfileSettingsForm },
        { path: 'profile', name: 'Profile Settings', component: ProfileSettingsForm },
        { path: 'app', name: 'App Settings', component: AppSettingsForm }
      ],
      meta: { requiresAuth: true }
    },
    { path: '/applications', name: 'Applications', component: CandidateApplicationsDashboard, meta: { requiresAuth: true } },
    { path: '/organizations/create', name: 'Organizations Creation', component: OrganizationCreation, meta: { requiresAuth: true } },
    { path: '/organizations/settings', name: 'Organization Settings', component: OrganizationSettings, meta: { requiresAuth: true }},
    // This should go to /TestigosdeVue/home
    { path: '/profile', name: 'Organization', component: OrganizationProfile, meta: { requiresAuth: true } },
    { path: '/recruitments', name: 'Recruitments', component: OrganizationRecruitments, meta: { requiresAuth: true } },
    { path: '/:id/dashboard', name: 'Recruitment Dashboard', component: RecruitmentDashboard, meta: { requiresAuth: true } },
    { path: '/:pathMatch(.*)*', name: 'Error 404', component: PageNotFoundComponent, meta: { requiresAuth: true } },
    { path: '/', redirect: '/home'},
  ]
});

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  if (to.meta.requiresAuth && !userStore.isAuthenticated) {
    next('/login');
  } else {
    next();
  }
})

export default router;