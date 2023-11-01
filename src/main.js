import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import en from '@/lang/en.json';
import ru from '@/lang/ru.json';
import '@/assets/css/new.css'
window.$ = window.jQuery = require('jquery');

const t = createI18n({
    locale: 'ru',
    allowComposition: true,
    messages: {
        en: en,
        ru: ru
    }
})

createApp(App).use($).use(t).mount('#app')
