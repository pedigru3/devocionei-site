import { auth } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { DevotionalRepository } from '@/repositories/devotional-repository'

const repository = new DevotionalRepository()

export async function GET() {
  const { userId } = await auth()
  
  if (!userId) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    )
  }

  try {
    const devotionals = await repository.findByUserId(userId)
    return NextResponse.json(devotionals)
  } catch (error) {
    console.error('Error fetching devotionals:', error)
    return NextResponse.json(
      { error: 'Error fetching devotionals' },
      { status: 500 }
    )
  }
}
