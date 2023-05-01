<template>
  <pv-dropdown
    class=""
    v-model="locale"
    :options="languages"
  />
</template>

<script>
export default {
  name: "language-switcher",
  data() {
    return {
      languages: ['English', 'Español'],
      locale: 'English'
    }
  },
  watch: {
    locale(selectedLanguage) {
      this.$i18n.locale = selectedLanguage.slice(0, 2).toLowerCase();
    },
  }
}
</script>

<style scoped>

</style>