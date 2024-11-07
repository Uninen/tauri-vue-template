<script setup lang="ts">
import { invoke } from '@tauri-apps/api/core'
const store = useStore()

const greetMsg = ref('')
const name = ref('')
const storeGreet = computed(() => store.storeGreet)

async function greet() {
  // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
  greetMsg.value = await invoke('greet', { name: name.value })
  store.name = name.value
}
</script>

<template>
  <div>
    <form class="" @submit.prevent="greet">
      <input id="greet-input" v-model="name" placeholder="Enter a name..." />
      <button type="submit" class="btn">Greet</button>
    </form>
    <p>{{ greetMsg }}</p>
    <p>{{ storeGreet }}</p>
  </div>
</template>
