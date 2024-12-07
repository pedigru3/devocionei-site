export interface Devotional {
  id: string
  userId: string
  reference: string
  content: string
  reflection?: string
  completed: boolean
  createdAt: Date
  completedAt?: Date
} 