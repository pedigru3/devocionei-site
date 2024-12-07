import prisma from '@/lib/prisma'
import type { Devotional } from '@/types/devotional'

export class DevotionalRepository {
  async create(data: Omit<Devotional, 'id' | 'createdAt' | 'completed'>) {
    return prisma.devotional.create({
      data: {
        ...data,
        completed: false,
      },
    })
  }

  async findById(id: string) {
    return prisma.devotional.findUnique({
      where: { id },
    })
  }

  async findByUserId(userId: string) {
    return prisma.devotional.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    })
  }

  async complete(id: string, reflection?: string) {
    return prisma.devotional.update({
      where: { id },
      data: {
        completed: true,
        completedAt: new Date(),
        reflection,
      },
    })
  }

  async getStreak(userId: string) {
    const devotionals = await prisma.devotional.findMany({
      where: {
        userId,
        completed: true,
      },
      orderBy: {
        completedAt: 'desc',
      },
      select: {
        completedAt: true,
      },
    })

    if (devotionals.length === 0) return 0

    let streak = 1
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    for (let i = 1; i < devotionals.length; i++) {
      const current = devotionals[i].completedAt!
      const previous = devotionals[i - 1].completedAt!

      current.setHours(0, 0, 0, 0)
      previous.setHours(0, 0, 0, 0)

      const diffDays = Math.floor(
        (previous.getTime() - current.getTime()) / (1000 * 60 * 60 * 24)
      )

      if (diffDays === 1) {
        streak++
      } else {
        break
      }
    }

    return streak
  }

  async delete(id: string) {
    return prisma.devotional.delete({
      where: { id },
    })
  }
} 
