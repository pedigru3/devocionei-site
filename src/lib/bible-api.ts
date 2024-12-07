'use server'

const BIBLE_API_URL = 'https://www.abibliadigital.com.br/api'
const API_TOKEN = process.env.BIBLE_API_KEY

export async function fetchBibleVerse(book: string, chapter: number, verse: number) {
  console.log('API_TOKEN', API_TOKEN)
  console.log(API_TOKEN)
  const response = await fetch(
    `${BIBLE_API_URL}/verses/nvi/${book}/${chapter}/${verse}`,
    {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    }
  )

  if (!response.ok) {
    throw new Error('Failed to fetch bible verse')
  }

  const data = await response.json()
  return data
}

// Lista de livros disponíveis
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

// Buscar capítulos de um livro
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