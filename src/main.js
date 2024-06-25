import { createApp } from "vue";
const app = createApp(App);

/* ----------------------------- Import ------------------------------- */

import App from "./App.vue"; /* App Component */
import "./style.css"; /* Tailwind CSS */
import router from "./router"; /* Router File */
import Plugins from "./plugins"; /* Plugins */

/* ------------------------------ Use --------------------------------- */

app.use(router); /* Router File */
app.use(Plugins); /* Plugins */
app.mount("#app"); /* App Mount */
