import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import i18n from "./i18n.js";

// Prime Vue
import PrimeVue from "primevue/config";
import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.css';

// App Theme
import 'primevue/resources/themes/soho-light/theme.css';

// Add Components
import 'primeicons/primeicons.css';

createApp(App)
    .use(PrimeVue, { ripple: true })
    .use(i18n)
    .mount('#app')
