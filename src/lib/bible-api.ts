'use server'

const BIBLE_API_URL = 'https://www.abibliadigital.com.br/api'
const API_TOKEN = process.env.BIBLE_API_KEY

interface BibleVerseResponse {
  text: string
  book: {
    name: string
  }
}

export async function fetchBibleVerses(book: string, chapter: number, startVerse: number, endVerse: number) {
  try {
    const verses = []
    for (let verse = startVerse; verse <= endVerse; verse++) {
      const response = await fetch(
        `${BIBLE_API_URL}/verses/nvi/${book}/${chapter}/${verse}`,
        {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
          },
        }
      )

      if (!response.ok) {
        throw new Error(`Failed to fetch bible verse ${verse}`)
      }

      const data: BibleVerseResponse = await response.json()
      verses.push(data)
    }
    return verses
  } catch (error) {
    console.error('Error fetching bible verses:', error)
    throw error
  }
}

// Lista de livros disponíveis permanece inalterada
export async function fetchBibleBooks() {
  const response = await fetch(`${BIBLE_API_URL}/books`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch bible books')
  }

  const data = await response.json()
  return data
}

// Buscar capítulos de um livro permanece inalterada
export async function fetchBookChapters(book: string) {
  const response = await fetch(`${BIBLE_API_URL}/books/${book}`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch book chapters')
  }

  const data = await response.json()
  return data.chapters
}