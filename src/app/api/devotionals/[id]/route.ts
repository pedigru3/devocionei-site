import { auth } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { DevotionalRepository } from '@/repositories/devotional-repository'

const repository = new DevotionalRepository()

export async function DELETE(
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
    await repository.delete(params.id)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting devotional:', error)
    return NextResponse.json(
      { error: 'Error deleting devotional' },
      { status: 500 }
    )
  }
} 