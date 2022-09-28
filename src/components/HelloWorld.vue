<script setup lang="ts">
import { invoke } from '@tauri-apps/api/tauri'
defineProps<{ msg: string }>()

const count = ref(0)
async function backendAdd() {
  count.value = await invoke('backend_add', { number: count.value })
}
</script>

<template>
  <div class="w-9/12 mx-auto">
    <h1>{{ msg }}</h1>

    <p>
      Recommended IDE setup:
      <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
      +
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
      +
      <a href="https://github.com/tauri-apps/tauri-vscode" target="_blank">Tauri</a>
      +
      <a href="https://github.com/rust-lang/rust-analyzer" target="_blank">rust-analyzer</a>
    </p>

    <p>See <code>README.md</code> for more information.</p>

    <p>
      <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Docs </a>
      |
      <a href="https://vuejs.org/guide/introduction.html" target="_blank">Vue 3 Docs</a>
      |
      <a href="https://tauri.app/v1/guides/" target="_blank">Tauri Docs</a>
    </p>

    <div class="justify-center my-6 text-center border border-white/10">
      <div class="p-8 text-lg font-bold"> Count is: {{ count }} </div>

      <div class="w-full space-x-2">
        <button type="button" class="btn" @click="count++">Add 1</button>

        <button type="button" class="btn" @click="backendAdd">Add 2 in backend</button>
      </div>
    </div>
    <p>
      Edit
      <code>src/components/HelloWorld.vue</code> to test hot module replacement. Find the backend
      function from <code>src-tauri/src/main.rs</code>.
    </p>
  </div>
</template>
