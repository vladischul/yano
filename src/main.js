import { createApp, ref } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './router';

const parties = ref([
    "CDU/CSU",
    "AfD",
    "SPD",
    "Grüne",
    "FDP",
    "BSW",
    "Linke"
]);


// Pass the parties prop to the App component
const app = createApp(App, { parties })
app.use(router);
app.mount("#app")


