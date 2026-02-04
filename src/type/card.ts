import { type Emoji } from './emoji'
import { type Word } from './word'

type EmojiCard = {
  type: 'emoji'
  level: string
  data: Emoji
}

type WordCard = {
  type: 'word'
  level: string
  data: Word
}

type QuestionCard = {
  type: 'question'
  level: string
  data: {
    question: string
  }
}

export type Card = EmojiCard | WordCard | QuestionCard
