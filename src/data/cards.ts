import { type Card } from '@/type/card'
import { words } from './words'

export const cards: Card[] = [
  ...words.map((word) => ({
    type: 'word' as const,
    level: 'A1',
    data: word,
  })),
]
