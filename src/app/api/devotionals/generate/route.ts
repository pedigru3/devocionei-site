import { OpenAI } from 'openai'
import { NextResponse } from 'next/server'
import { fetchBibleVerses } from '@/lib/bible-api'
import { DevotionalRepository } from '@/repositories/devotional-repository'
import { auth } from '@clerk/nextjs/server'
import prisma from '@/lib/prisma'
import { formatReference } from '@/utils/bible-reference'

const configuration = {
  apiKey: process.env.OPENAI_API_KEY,
}
const openai = new OpenAI(configuration)
const devotionalRepository = new DevotionalRepository()

export async function POST(request: Request) {
  const { userId } = await auth()
  
  if (!userId) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    )
  }

  try {
    const { book, chapter, startVerse, endVerse } = await request.json()
    const reference = formatReference({ book, chapter, startVerse, endVerse })

    const bibleData = await fetchBibleVerses(book, chapter, startVerse, endVerse)

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "Você é um assistente especializado em criar devocionais cristãos reflexivos e profundos. Você é cristocentrico e sabe como tudo aponta para Cristo. Você se inspira muito ao falar no pastor Jonas Madureira."
        },
        {
          role: "user",
          content: `Crie uma devocional baseada em ${book} ${chapter}:${startVerse}-${endVerse}. 
          Inclua: 
          1. Uma breve contextualização
          2. Uma pergunta sobre o contexto
          3. Uma pergunta sobre a aplicação prática
          4. Uma sugestão de oração`
        }
      ],
    })

    const devotionalContent = completion.choices[0].message.content

    const user = await prisma.user.findUnique({
      where: { id: userId }
    })

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    const devotional = await devotionalRepository.create({
      userId,
      reference,
      content: devotionalContent || '',
    })

    return NextResponse.json(devotional)
  } catch (error) {
    console.error('Error generating devotional:', error)
    return NextResponse.json(
      { error: 'Error generating devotional' },
      { status: 500 }
    )
  }
} 