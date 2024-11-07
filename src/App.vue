<script setup lang="ts">
import GreetComponent from './components/GreetComponent.vue'
const store = useStore()
store.initApp()
</script>

<template>
  <main class="flex-1 flex flex-col items-center justify-center min-h-screen">
    <h1>Welcome to Tauri 2 + Vue</h1>

    <div class="flex flex-row">
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo vite" alt="Vite logo" />
      </a>
      <a href="https://tauri.app" target="_blank">
        <img src="/tauri.svg" class="logo tauri" alt="Tauri logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    <p>Click on the Tauri, Vite, and Vue logos to learn more.</p>

    <GreetComponent />
  </main>
</template>
