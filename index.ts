import * as R from 'ramda'

// Helpers
import { generateItemList } from './helpers'

// Solution
export const getMaxConsecutivesByType = (list: List, itemType: Type) => {
  const parsedList = R.groupWith(
    R.eqBy((item) => item === itemType),
    R.pluck('type')(list),
  )

  return R.pipe(
    R.filter<Type[], 'array'>((item) => item.includes(itemType)),
    R.map(({ length }) => length),
    R.reduce(R.max, 0),
  )(parsedList)
}

// Local Tests
// console.log(getMaxConsecutivesByType(generateItemList(50), 'A'))
