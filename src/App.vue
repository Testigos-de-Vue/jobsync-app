<template>
  <pv-toast />
  <div
    class="h-screen bg-gray-50 dark:bg-slate-900 grid grid-rows-[auto_1fr] md:grid-rows-1 md:place-items-center"
    :class="{'md:grid-cols-[auto_1fr]': !isAnAuthenticationPath($route.path)}"
  >
    <header class="flex relative md:hidden justify-center items-center bg-white dark:bg-tertiary-dark p-4">
      <button
        class="p-2 absolute left-4"
        aria-label="Toggle navigation menu"
        @click="toggleBottomBar"
      >
        <i class="pi pi-bars text-black" style="font-size: 1.5rem"/>
      </button>
      <router-link to="/home">
        <img
          class="h-14 w-auto"
          src="/jobsync-logo.png"
          alt="JobSync Logo"
        >
      </router-link>
    </header>
    <aside v-if="!isAnAuthenticationPath($route.path)" class="hidden md:flex p-8 h-full">
      <side-bar />
    </aside>
    <main class="p-8 w-full h-full">
      <router-view />
    </main>
  </div>
  <mobile-nav-bar
    :visible="visibleMobileBar"
    v-on:hide="hideBottomBar"
  />
</template>

<script>
// Dependencies
import SideBar from "./shared/components/side-bar.component.vue";
import MobileNavBar from "./shared/components/mobile-nav-bar.component.vue";
import {AuthApiService} from "./authentication/services/authApiService.js";
import {useThemeStore} from "./settings/stores/app-theme.store.js";
import {useUserStore} from "./authentication/store/user-store.store.js";
import {computed} from "vue";
export default {
  components: {MobileNavBar, SideBar},
  data() {
    return {
      visibleMobileBar: false,
      authenticationPaths: new Set([
        "/login",
        "/register",
        "/password-recovery",
        "/forgot-password",
        "/recover-password"
      ]),
      authApi: new AuthApiService()
    }
  },
  setup() {
    const userStore = useUserStore();

    const setUser = (user) => {
      userStore.setUser(user);
    };

    return { setUser };
  },
  created() {
    this.$i18n.locale = localStorage.getItem("preferred-language") ?? "en";
    const user = localStorage.getItem("user");
    user && this.setUser(JSON.parse(user));
  },
  computed: {
    theme() {
      return useThemeStore().theme;
    }
  },
  watch: {
    theme(newTheme) {
      const store = useThemeStore();
      store.setTheme(newTheme);
    }
  },
  mounted() {
    const store = useThemeStore();
    store.initTheme();
  },
  methods: {
    isAnAuthenticationPath(path) {
      return this.authenticationPaths.has(path);
    },
    toggleBottomBar() {
      this.visibleMobileBar = !this.visibleMobileBar;
    },
    hideBottomBar(){
      this.visibleMobileBar = false;
    }
  }
}
</script>

<style scoped>
  main {
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  main::-webkit-scrollbar {
    display: none;
  }
</style>
