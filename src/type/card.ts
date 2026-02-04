import { type Picture } from './picture'
import { type Word } from './word'

type PictureCard = {
  type: 'picture'
  level: string
  data: Picture
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

export type Card = PictureCard | WordCard | QuestionCard
