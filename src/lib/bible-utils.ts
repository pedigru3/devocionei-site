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

  console.log(normalizedInput)
  
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
  const regex = /^((?:[123]\s+)?[\wÀ-ú\s]+)\s*(\d+)[:.]\s*(\d+)(?:-(\d+))?$/i
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