import { type Card } from '@/type/card'
import { words } from './words'
import { questions } from './questions'

export const cards: Card[] = [
  ...words.map((word) => ({
    type: 'word' as const,
    level: 'A1',
    data: word,
  })),

  ...questions.map((question) => ({
    type: 'question' as const,
    level: 'A1',
    data: {
      question,
    },
  })),
]
