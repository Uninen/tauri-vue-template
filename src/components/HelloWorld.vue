<script setup lang="ts">
import { invoke } from '@tauri-apps/api/tauri'
defineProps<{ msg: string }>()

const count = ref(0)
async function backendAdd() {
  count.value = await invoke('backend_add', { number: count.value })
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Docs </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <div class="p-8 text-lg font-bold"> Count is: {{ count }} </div>

  <div class="w-full space-x-2">
    <button type="button" class="btn" @click="count++">Add 1</button>

    <button type="button" class="btn" @click="backendAdd">Add 2 in backend</button>
  </div>
  <p>
    Edit
    <code>src/components/HelloWorld.vue</code> to test hot module replacement. Find the backend
    function from <code>src-tauri/src/main.rs</code>.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
