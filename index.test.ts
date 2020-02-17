// Functions
import { getMaxConsecutivesByType } from './'

// Mocks
import { smallSetA, smallSetB } from './mocks'

describe('Test constant samples method by type A', () => {
  test('should get max consecutives in Sample A ', () => {
    expect(getMaxConsecutivesByType(smallSetA, 'A')).toBe(5)
  })

  test('should get max consecutives in Sample B', () => {
    expect(getMaxConsecutivesByType(smallSetB, 'A')).toBe(3)
  })
})
