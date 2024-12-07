export interface Devotional {
  id: string
  userId: string
  book: string
  chapter: number
  verse: number
  content: string
  reflection?: string
  completed: boolean
  createdAt: Date
  completedAt?: Date
} 