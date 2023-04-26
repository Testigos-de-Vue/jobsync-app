import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import i18n from "./i18n.js";

// Prime Vue
import PrimeVue from "primevue/config";
import 'primevue/resources/primevue.min.css';

// App Theme
import 'primevue/resources/themes/soho-light/theme.css';

// Add Components
import 'primeicons/primeicons.css';
import DataTable from "primevue/datatable";
import Card from "primevue/card";
import {Icon} from "primevue/icons";
import InputText from "primevue/inputtext";
import Button from "primevue/button";

createApp(App)
    .use(PrimeVue, { ripple: true })
    .use(i18n)
    .component('pv-card',Card)
    .component('pv-button',Button)
    .component('pv-datatable',DataTable)
    .component('pv-icon',Icon)
    .component('pv-inputtext',InputText)
    .mount('#app')
