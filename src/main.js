import { createApp, ref } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './router';


// Pass the parties prop to the App component
const app = createApp(App)
app.use(router);
app.mount("#app")


