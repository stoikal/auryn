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
  { word: 'E-Mail-Addresse', article: 'die', class: '', thema: 'Sich vorstellen' },
  { word: 'Sprachen', article: 'die', class: '', thema: 'Sich vorstellen' },
  { word: 'kommen', article: '', class: '', thema: 'Sich vorstellen' },
  { word: 'wohnen', article: '', class: '', thema: 'Sich vorstellen' },
  { word: 'Hobbys', article: '', class: '', thema: 'Sich vorstellen' },
  { word: 'buchstabieren', article: '', class: '', thema: 'Sich vorstellen' },
]

const cafe: Word[] = [
  { word: 'trinken', article: '', class: '', thema: 'Café' },
  { word: 'möchten', article: '', class: '', thema: 'Café' },
  { word: 'Kaffe', article: '', class: '', thema: 'Café' },
  { word: 'Zahlen', article: '', class: '', thema: 'Café' },
  { word: 'Zusammen oder getrennt', article: '', class: '', thema: 'Café' },
  { word: 'Sprachschule', article: '', class: '', thema: 'Café' },
  { word: 'Das macht...', article: '', class: '', thema: 'Café' },
  { word: 'bestellen', article: '', class: '', thema: 'Café' },
  { word: 'oder', article: '', class: '', thema: 'Café' },
  { word: 'nehmen', article: '', class: '', thema: 'Café' },
]

const imSprachkurs: Word[] = [
  { word: 'Heft', article: '', class: '', thema: 'Im Sprachkurs' },
  { word: 'Radiergummi', article: '', class: '', thema: 'Im Sprachkurs' },
  { word: 'Wörterbuch', article: '', class: '', thema: 'Im Sprachkurs' },
  { word: 'Kuli', article: '', class: '', thema: 'Im Sprachkurs' },
  { word: 'buchstabieren', article: '', class: '', thema: 'Im Sprachkurs' },
  { word: 'auf Deutsch', article: '', class: '', thema: 'Im Sprachkurs' },
  { word: 'verstehen', article: '', class: '', thema: 'Im Sprachkurs' },
  { word: 'wiederholen', article: '', class: '', thema: 'Im Sprachkurs' },
  { word: 'Kreide', article: '', class: '', thema: 'Im Sprachkurs' },
  { word: 'Tafel', article: '', class: '', thema: 'Im Sprachkurs' },
  { word: 'Schwamm', article: '', class: '', thema: 'Im Sprachkurs' },
  { word: 'Papier', article: '', class: '', thema: 'Im Sprachkurs' },
  { word: 'Lampe', article: '', class: '', thema: 'Im Sprachkurs' },
  { word: 'Videorekorder', article: '', class: '', thema: 'Im Sprachkurs' },
  { word: 'Tisch', article: '', class: '', thema: 'Im Sprachkurs' },
  { word: 'Kursbuch', article: '', class: '', thema: 'Im Sprachkurs' },
  { word: 'Fernseher', article: '', class: '', thema: 'Im Sprachkurs' },
  { word: 'Stuhl', article: '', class: '', thema: 'Im Sprachkurs' },
  { word: 'Tasche', article: '', class: '', thema: 'Im Sprachkurs' },
  { word: 'Overheadprojektor', article: '', class: '', thema: 'Im Sprachkurs' },
  { word: 'Computer', article: '', class: '', thema: 'Im Sprachkurs' },
  { word: 'Füller', article: '', class: '', thema: 'Im Sprachkurs' },
  { word: 'Beistift', article: '', class: '', thema: 'Im Sprachkurs' },
  { word: 'CD-Player', article: '', class: '', thema: 'Im Sprachkurs' },
  { word: 'Lernplakat', article: '', class: '', thema: 'Im Sprachkurs' },
  { word: 'Handy', article: '', class: '', thema: 'Im Sprachkurs' },
]

const städteLänder: Word[] = [
  { word: 'Wohnen', article: '', class: '', thema: 'Städte - Länder' },
  { word: 'Leben', article: '', class: '', thema: 'Städte - Länder' },
  { word: 'kommen', article: '', class: '', thema: 'Städte - Länder' },
  { word: 'kennen', article: '', class: '', thema: 'Städte - Länder' },
  { word: 'Haupstadt', article: '', class: '', thema: 'Städte - Länder' },
]

export const words: Word[] = [...sichVorstellen, ...cafe, ...imSprachkurs, ...städteLänder]
