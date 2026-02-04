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
  const index = shownWordIndex.value

  if (index === null) return null
  return words[index]
})
</script>

<template>
  <main>
    <div>
      <div class="card">
        <div class="card-thema">Thema: {{ shownWord?.thema || '?' }}</div>
        <div class="card-word">
          <span :title="shownWord?.article || ''">
            {{ shownWord?.word || '?' }}
          </span>
        </div>
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
  margin-bottom: 32px;
}

.card-thema {
  border-bottom: 1px solid black;
  text-align: center;
  padding: 8px;
  font-size: large;
}

.card-word {
  text-align: center;
  font-size: xx-large;
  padding: 48px 8px;
}

.actions {
  text-align: center;
}

.actions button {
  cursor: pointer;
  padding: 8px 16px;
}
</style>
