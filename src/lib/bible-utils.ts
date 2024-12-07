import { bibleBooks } from '@/config/bible'

// Função para normalizar texto (remover acentos, espaços extras e converter para minúsculo)
export function normalizeText(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '')
}

// Função para encontrar o livro pelo nome ou abreviatura
export function findBook(bookInput: string): typeof bibleBooks[number] | undefined {
  const normalizedInput = normalizeText(bookInput)
  
  // Primeiro tenta encontrar por match exato da abreviatura
  const exactAbbrevMatch = bibleBooks.find(book => 
    book.abbrev.pt === normalizedInput
  )
  if (exactAbbrevMatch) return exactAbbrevMatch

  // Depois tenta encontrar por match exato do nome
  const exactNameMatch = bibleBooks.find(book => 
    normalizeText(book.name) === normalizedInput
  )
  if (exactNameMatch) return exactNameMatch

  // Por último, procura por inclusão no nome
  return bibleBooks.find(book => 
    normalizeText(book.name).includes(normalizedInput)
  )
}

interface ParsedReference {
  book: string | null
  chapter: number | null
  startVerse: number | null
  endVerse: number | null
}

export function parseBibleReference(reference: string): ParsedReference {
  const result: ParsedReference = {
    book: null,
    chapter: null,
    startVerse: null,
    endVerse: null,
  }

  // Regex atualizada para capturar diferentes formatos
  // Aceita: "1 Coríntios 13:4-7", "1Co 13:4-7", "1 Co 13.4-7"
  const regex = /^((?:[123]\s+)?[\wÀ-ú]+)\s+(\d+)[:.]\s*(\d+)(?:-(\d+))?$/i

  const match = reference.trim().match(regex)

  if (!match) return result

  const [, bookName, chapter, startVerse, endVerse] = match
  const book = findBook(bookName)

  if (book) {
    result.book = book.abbrev.pt
    result.chapter = parseInt(chapter)
    result.startVerse = parseInt(startVerse)
    result.endVerse = endVerse ? parseInt(endVerse) : result.startVerse

    // Validação adicional
    if (result.chapter > book.chapters) {
      return {
        book: null,
        chapter: null,
        startVerse: null,
        endVerse: null,
      }
    }
  }

  return result
} 

export function formatReference(reference: ParsedReference): string {
  if (!reference.book || !reference.chapter || !reference.startVerse) {
    return ''
  }

  // Usa findBook para pegar o nome completo do livro
  const book = findBook(reference.book)
  const bookName = book ? book.name : reference.book

  return reference.startVerse === reference.endVerse
    ? `${bookName} ${reference.chapter}.${reference.startVerse}`
    : `${bookName} ${reference.chapter}.${reference.startVerse}-${reference.endVerse}`
} 

export function parseReference(reference: string): ParsedReference {
  const regex = /^([\w\s]+)\s+(\d+)[.:](\d+)(?:\-(\d+))?$/i
  const match = reference.trim().match(regex)
  
  if (!match) {
    throw new Error('Invalid reference format')
  }

  const [, book, chapter, startVerse, endVerse] = match
  return {
    book: book.trim(),
    chapter: parseInt(chapter, 10),
    startVerse: parseInt(startVerse, 10),
    endVerse: endVerse ? parseInt(endVerse, 10) : parseInt(startVerse, 10)
  }
}
