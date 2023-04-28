<template>
  <div
    class="h-screen grid grid-rows-[auto_1fr] md:grid-rows-1 md:place-items-center bg-tertiary"
    :class="{ ['md:grid-cols-[auto_1fr]']: !this.isAnAuthenticationPath($route.path) }">
    <header class="flex relative md:hidden justify-center items-center bg-white p-4">
      <button
        class="p-2 absolute left-4"
        aria-label="Toggle navigation menu"
        @click="toggleBottomBar"
      >
        <i class="pi pi-bars" style="font-size: 1.5rem"/>
      </button>
      <router-link to="/">
        <img
          class="h-14 w-auto"
          src="/jobsync-logo.png"
          alt="JobSync Logo"
        >
      </router-link>
    </header>
    <aside v-if="!isAnAuthenticationPath($route.path)" class="hidden md:flex p-8 h-full">
      <side-bar v-bind:user="user" />
    </aside>
    <main class="p-8 container h-full">
      <router-view />
    </main>
  </div>
  <mobile-nav-bar
    :visible="visibleMobileBar"
    v-bind:user="user"
    v-on:hide="hideBottomBar"
  />
</template>

<script>
// Dependencies
import SideBar from "./shared/components/side-bar.component.vue";
import MobileNavBar from "./shared/components/mobile-nav-bar.component.vue";
export default {
  components: {MobileNavBar, SideBar},
  data() {
    return {
      visibleMobileBar: false,
      authenticationPaths: new Set(["/login", "/register"]),
      user: {
        id: 1,
        name: "Name LastName super largo",
        profileImageUrl: "https://is3-ssl.mzstatic.com/image/thumb/Purple115/v4/c3/a9/b9/c3a9b968-256b-dea6-e76c-d635f0bb2ee9/source/512x512bb.jpg",
        isRecruiter: true,
        subTitle: "ACME Studios"
      }
    }
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
