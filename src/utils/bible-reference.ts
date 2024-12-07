interface ParsedReference {
  book: string
  chapter: number
  startVerse: number
  endVerse: number
}

export function parseReference(reference: string): ParsedReference {
  const regex = /^([\w\s]+)\s+(\d+)\.(\d+)(?:\-(\d+))?$/i
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

export function formatReference(reference: ParsedReference): string {
  const { book, chapter, startVerse, endVerse } = reference
  return startVerse === endVerse
    ? `${book} ${chapter}.${startVerse}`
    : `${book} ${chapter}.${startVerse}-${endVerse}`
} 