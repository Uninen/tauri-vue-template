import { devtools } from '@vue/devtools'
import { createApp } from 'vue'
import App from './App.vue'

if (process.env.NODE_ENV === 'development') {
  devtools.connect('http://localhost', 8098)
}

createApp(App).mount('#app')
