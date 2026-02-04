type Word = {
  word: string
  article: string
  class: string
  thema: string
}

const sichVorstellen: Word[] = [
  { word: 'Name', article: 'die', class: '', thema: 'Sich vorstellen' },
  { word: 'Alter', article: 'die', class: '', thema: 'Sich vorstellen' },
  { word: 'Telefonnumer', article: 'die', class: '', thema: 'Sich vorstellen' },
  { word: 'E-Meil-Addresse', article: 'die', class: '', thema: 'Sich vorstellen' },
  { word: 'Sprachen', article: 'die', class: '', thema: 'Sich vorstellen' },
]

export const words: Word[] = [...sichVorstellen]
