

import { createApp } from 'vue'
import App from './App.vue'
import RtrcUI,{GenQrcode} from '../components/index.ts'
const app = createApp(App)
app.use(GenQrcode)
app.use(RtrcUI)
app.mount('#app')
