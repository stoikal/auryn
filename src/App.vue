<script setup lang="ts">
import { ref, computed } from 'vue'
import { words } from '@/data/words'

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * (max + 1))
}

const shownWordIndex = ref<null | number>(null)

function handleRandom() {
  shownWordIndex.value = getRandomInt(words.length - 1)
}

const shownWord = computed(() => {
  return words[shownWordIndex.value]
})
</script>

<template>
  <main>
    <div>
      <div class="card">
        <div class="card-thema">Thema: {{ shownWord?.thema || '?' }}</div>
        <div class="card-word">{{ shownWord?.word || '?' }}</div>
      </div>
      <div class="actions">
        <button @click="handleRandom()">randomize</button>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  display: grid;
  place-items: center;
  min-height: 100vh;
}

.card {
  width: 400px;
  border: 1px solid black;
  margin-bottom: 16px;
}

.card-thema {
  border-bottom: 1px solid black;
  text-align: center;
  padding: 8px;
}

.card-word {
  text-align: center;
  font-size: x-large;
  padding: 48px 8px;
}

.actions {
  text-align: center;
}

.actions button {
  cursor: pointer;
}
</style>
