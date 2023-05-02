import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import i18n from "./i18n.js";

// Prime Vue
import PrimeVue from "primevue/config";
import 'primevue/resources/primevue.min.css';

// App Theme
import 'primevue/resources/themes/viva-light/theme.css';

// Router
import router from "./router/index.js";

// Add Components
import 'primeicons/primeicons.css';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button'
import Sidebar from "primevue/sidebar";
import Checkbox from "primevue/checkbox";
import Dropdown from "primevue/dropdown";
import FileUpload from "primevue/fileupload";
import Message from "primevue/message";
import Card from "primevue/card";
import Calendar from 'primevue/calendar'


createApp(App)
  .use(PrimeVue, { ripple: true })
  .use(i18n)
  .use(router)
  .component('pv-message', Message)
  .component('pv-file-upload', FileUpload)
  .component('pv-checkbox', Checkbox)
  .component('pv-dropdown', Dropdown)
  .component('pv-sidebar', Sidebar)
  .component('pv-input', InputText)
  .component('pv-button', Button)
  .component('pv-card', Card)
  .component('pv-calendar', Calendar)
  .mount('#app')
