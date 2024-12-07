import { OpenAI } from 'openai'
import { NextResponse } from 'next/server'
import { DevotionalRepository } from '@/repositories/devotional-repository'
import { auth } from '@clerk/nextjs/server'
import prisma from '@/lib/prisma'
import { formatReference, parseReference } from '@/lib/bible-utils'

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
    const { reference } = await request.json()

    // Validar se a referência existe
    if (!reference) {
      return NextResponse.json(
        { error: 'Reference is required' },
        { status: 400 }
      )
    }

    // Tentar fazer o parse da referência
    let parsed
    try {
      parsed = parseReference(reference)
    } catch (error) {
      return NextResponse.json(
        { error: 'Invalid reference format' },
        { status: 400 }
      )
    }

    // Validar se todos os campos necessários existem
    if (!parsed.book || !parsed.chapter || !parsed.startVerse) {
      return NextResponse.json(
        { error: 'Invalid reference: missing required fields' },
        { status: 400 }
      )
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "Você é um assistente especializado em criar devocionais cristãos reflexivos e profundos. Você é cristocentrico e sabe como tudo aponta para Cristo. Você se inspira muito ao falar no pastor Jonas Madureira."
        },
        {
          role: "user",
          content: `Crie uma devocional baseada em ${reference}. 
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
      reference: formatReference(parsed),
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