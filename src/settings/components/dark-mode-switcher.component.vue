<template>
    <div class="card flex justify-content-center">
        <pv-inputswitch 
        v-model="isDarkMode" 
        :checked="isDarkMode"
        @change="toggleDarkMode" />
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            isDarkMode: false,
        };
    },
    created() {
        const storedDarkMode = localStorage.getItem('darkMode');
        if (storedDarkMode !== null) {
            this.isDarkMode = JSON.parse(storedDarkMode);
        }
    },
    methods: {
        toggleDarkMode() {
            document.body.classList.toggle('dark', this.isDarkMode);
            localStorage.setItem('darkMode', JSON.stringify(this.isDarkMode));
        },
        updateTheme(isDarkMode) {
            const theme = this.$primevue.config.theme(isDarkMode);
            this.$primevue.config.theme = theme;
        },
    },
};
</script>

<style scoped></style>