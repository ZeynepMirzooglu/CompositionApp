import { createApp } from 'vue'
import App from './App.vue';
import ToastPlugin from 'vue-toast-notification';
import Header from '@/components/Fixed/Header.vue'
import Loading from './components/Utility/Loading.vue';
import 'vue-toast-notification/dist/theme-bootstrap.css';
const app = createApp(App);
app.use(ToastPlugin);
app.component('app-header',Header);
app.component('app-loading',Loading)
app.mount('#app');

