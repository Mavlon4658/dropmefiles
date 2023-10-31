import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { createI18n } from 'vue-i18n'
import en from '@/lang/en.json';
import ru from '@/lang/ru.json';
import '@/assets/css/new.css'

const t = createI18n({
    locale: 'ru',
    allowComposition: true,
    messages: {
        en: en,
        ru: ru
    }
})

createApp(App).use(t).use(store).use(router).mount('#app')
