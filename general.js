export function simpyRange (beginning, end) { //for simps
  const directionMultipler = beginning > end ? -1 : 1
  const length = Math.abs(end - beginning + directionMultipler)
  return Array.from({ length }, (_, index) => index * directionMultipler + beginning);
}

export const uniques = set => Array.from(new Set(set))

export const selectIn = (field, things) => things.map(thing => thing[field])

export const uniqueValuesForFieldIn = (field, things) => uniques(selectIn(field, things))

export const filterOnFieldWithValue = (field, fieldValue, things) => things.filter(thing => thing[field] === fieldValue)

export const pairPermutationsOf = array => {
  if (array.length < 2) return []
  const head = array[0]
  const tail = array.slice(1)
  const pairs = tail.map(aTailItem => [head, aTailItem])
  return [...pairs, ...pairPermutationsOf(tail)]
}
