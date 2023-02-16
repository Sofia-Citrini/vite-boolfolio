import { createApp } from 'vue'

import App from './App.vue'
import * as bootstrap from 'bootstrap';

//importazione file router.js
import {router} from './router';

createApp(App).use(router).mount('#app');
