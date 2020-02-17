// Functions
import { getMaxConsecutivesByType } from '.'

// Helpers
import { generateItemList } from './helpers'

// Lists
const smallList = generateItemList(50)
const middleList = generateItemList(500)
const bigList = generateItemList(5000)
const hugeList = generateItemList(50000)

// Performance tests
console.log('\n Performance tests ----->')

console.time('Small List - 50 items')
getMaxConsecutivesByType(smallList, 'A')
console.timeEnd('Small List - 50 items')

console.time('Middle List - 500 items')
getMaxConsecutivesByType(middleList, 'A')
console.timeEnd('Middle List - 500 items')

console.time('Big List - 5k items')
getMaxConsecutivesByType(bigList, 'A')
console.timeEnd('Big List - 5k items')

console.time('Huge List - 50k items')
getMaxConsecutivesByType(hugeList, 'A')
console.timeEnd('Huge List - 50k items')
