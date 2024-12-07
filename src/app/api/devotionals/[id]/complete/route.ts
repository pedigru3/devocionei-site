import { NextResponse } from 'next/server'
import { DevotionalRepository } from '@/repositories/devotional-repository'
import { auth } from '@clerk/nextjs/server'

const repository = new DevotionalRepository()

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { userId } = await auth()
  
  if (!userId) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    )
  }

  try {
    const { reflection } = await request.json()
    const devotional = await repository.complete(params.id, reflection)
    
    if (!devotional) {
      return NextResponse.json(
        { error: 'Devotional not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(devotional)
  } catch (error) {
    console.error('Error completing devotional:', error)
    return NextResponse.json(
      { error: 'Error completing devotional' },
      { status: 500 }
    )
  }
}