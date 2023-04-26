import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import i18n from "./i18n.js";

// Prime Vue
import PrimeVue from "primevue/config";
import 'primevue/resources/primevue.min.css';

// App Theme
import 'primevue/resources/themes/viva-light/theme.css';

// Add Components
import 'primeicons/primeicons.css';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button'

// Router
import {router} from "./router.js";

createApp(App)
    .use(PrimeVue, { ripple: true })
    .use(i18n)
    .use(router)
    .component('pv-input', InputText)
    .component('pv-button', Button)
    .mount('#app')
