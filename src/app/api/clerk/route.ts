import prisma from '@/lib/prisma'
import { WebhookEvent } from '@clerk/nextjs/server'

export async function POST(request: Request) {
  const payload: WebhookEvent = await request.json()

  if (!payload.data.id) {
    return new Response('Error occured -- no user id', {
      status: 400
    })
  }
  
  // create user in database
  await prisma.user.create({
    data: {
      id: payload.data.id,
    }
  })

  return new Response('', { status: 200 })
}