import { defineStore } from 'pinia'

export const useThemeStore = defineStore({
  id: 'theme',
  state: () => ({
    theme: 'light',
  }),
  getters: {
    colorTheme() {
      return this.theme === 'light' ? 'dark' : 'light';
    },
  },
  actions: {
    setTheme(theme) {
      const root = window.document.documentElement;
      root.classList.remove(this.colorTheme);
      root.classList.add(theme);
      this.theme = theme;
      localStorage.setItem('theme', theme);
    },
    initTheme() {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        this.setTheme(savedTheme);
      }
    },
  },
});