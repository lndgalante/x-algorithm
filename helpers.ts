import sampleSize from 'lodash.samplesize'

// Constants
const TYPES: Type[] = ['A', 'B']

export const generateItemList = (length: number): List => {
  return Array.from({ length }, (_, index) => ({ id: index, type: sampleSize(TYPES, 1)[0] }))
}
