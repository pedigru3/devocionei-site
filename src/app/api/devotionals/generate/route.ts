import { OpenAI } from 'openai'
import { NextResponse } from 'next/server'
import { DevotionalRepository } from '@/repositories/devotional-repository'
import { auth } from '@clerk/nextjs/server'
import prisma from '@/lib/prisma'
import { formatReference, parseReference } from '@/lib/bible-utils'


const configuration = {
  apiKey: process.env.OPENAI_API_KEY,
  response_format: {
    type: 'json_object',
  },
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
          content: "Você é um assistente especializado em criar perguntas cristãos reflexivas e profundas. Você é cristocentrico e sabe como tudo aponta para Cristo."
        },
        {
          role: "user",
          content: `
              Seu objetivo é ajudar o usuário com perguntas que aprofundam sua compreensão do texto bíblico, 
              levando-o a refletir e aplicar os ensinamentos à sua vida, 
              mantendo sempre um enfoque cristocêntrico.

              Aqui está um exemplo de como você deve responder:
              "[{\"step\": \"Compreensão\", \"answers\": [\"O que Paulo está instruindo os crentes a fazerem em relação ao seu comportamento e testemunho?\", \""Por que Paulo destaca a importância de estar 'firmes em um só espírito' neste contexto?"\", \"Como Paulo descreve a relação entre fé e sofrimento por Cristo neste trecho?\"]}, {\"step\": \"Reflexão Pessoal\", \"answers\": [\"Em sua vida, você sente que está se portando dignamente conforme o evangelho de Cristo? O que poderia melhorar?\", \"Como você lida com a ideia de 'padecer por Cristo'? Isso causa temor ou te encoraja a ser mais firme na fé?\"]}, {\"step\": \"Aplicação Prática\", \"answers\": [\"O que significa para você 'estar firme em um só espírito' com outros crentes? Como você pode promover essa unidade em sua comunidade?\", \"Como você pode enfrentar desafios e adversidades de maneira que mostre sua confiança em Deus e o poder do evangelho?\"]}]"
              `
        },
        {
          role: "user",
          content: `
              Responda baseado em ${reference}, seguindo sua estrutura:
          `
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