<script setup lang="ts">
import { ref, computed } from 'vue'
import { cards } from '@/data/cards'

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * (max + 1))
}

const shownCardIndex = ref<null | number>(null)

function handleRandom() {
  shownCardIndex.value = getRandomInt(cards.length - 1)
}

const shownCard = computed(() => {
  const index = shownCardIndex.value
  if (index === null) return null
  return cards[index]
})
</script>

<template>
  <main>
    <div>
      <template v-if="shownCard?.type === 'word'">
        <div class="word-card">
          <div v-if="shownCard.data.thema" class="word-card-thema">{{ shownCard.data.thema }}</div>
          <div class="word-card-word">
            <span :title="shownCard.data.article || ''">{{ shownCard.data.word_de }}</span>
          </div>
        </div>
      </template>

      <template v-else-if="shownCard?.type === 'question'">
        <div class="question-card">
          <p>{{ shownCard.data.question }}</p>
        </div>
      </template>

      <template v-else-if="shownCard?.type === 'emoji'">
        <div class="emoji-card">
          <p>{{ shownCard.data.emoji }}</p>
        </div>
      </template>
      <!-- <template v-else> ? </template> -->

      <div class="actions">
        <button @click="handleRandom()">random</button>
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

.word-card {
  max-width: calc(100vw - 16px);
  width: 400px;
  border: 1px solid black;
  margin-bottom: 32px;
}

.word-card-thema {
  border-bottom: 1px solid black;
  text-align: center;
  padding: 8px;
  font-size: large;
}

.word-card-word {
  text-align: center;
  font-size: xx-large;
  padding: 48px 8px;
}

.question-card {
  max-width: calc(100vw - 16px);
  width: 400px;
  border: 1px solid black;
  margin-bottom: 32px;
  padding: 8px;
  text-align: center;
  font-size: x-large;
}

.emoji-card {
  max-width: calc(100vw - 16px);
  width: 400px;
  border: 1px solid black;
  margin-bottom: 32px;
  padding: 0 8px;
  text-align: center;
  font-size: 96px;
  line-height: 1em;
}

.actions {
  text-align: center;
}

.actions button {
  cursor: pointer;
  padding: 16px 20px;
  border: none;
  border-radius: 8px;
  background-color: skyblue;
}

.actions button:hover {
  background-color: deepskyblue;
}
</style>
