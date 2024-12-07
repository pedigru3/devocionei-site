import { parseBibleReference } from '@/lib/bible-utils'

describe('parseBibleReference', () => {
  it('should parse simple reference correctly', () => {
    const result = parseBibleReference('Jo 3.16')
    expect(result).toEqual({
      book: 'jo',
      chapter: 3,
      startVerse: 16,
      endVerse: 16
    })
  })

  it('should parse reference with verse range', () => {
    const result = parseBibleReference('Gn 1.1-3')
    expect(result).toEqual({
      book: 'gn',
      chapter: 1,
      startVerse: 1,
      endVerse: 3
    })
  })

  it('should handle invalid references', () => {
    const result = parseBibleReference('invalid')
    expect(result).toEqual({
      book: null,
      chapter: null,
      startVerse: null,
      endVerse: null
    })
  })
})