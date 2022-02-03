export const uniques = set => Array.from(new Set(set))

export const selectIn = (field, things) => things.map(thing => thing[field])

export const uniqueValuesForFieldIn = (field, things) => uniques(selectIn(field, things))

export const filterOnFieldWithValue = (field, fieldValue, things) => things.filter(thing => thing[field] === fieldValue)

const {sin, cos, PI, round} = Math
const IN_RADIANS_360_DEGREES = 2 * PI

export const angleToRadians = (angle) => IN_RADIANS_360_DEGREES * angle / 360

export const coordinatesOnCircle = (radius, angle) => (
  {
    x: round(radius * sin(angleToRadians(angle))),
    y: round(radius * cos(angleToRadians(angle)))
  }
)

export const range = (length, min, max) => {
  const step = (max - min) / (length - 1)
  return Array.from({length}).map((_, index) => index * step + min)
}

export const mapValueToRange = (valueInFromRange, fromMin, fromMax, toMin, toMax) => toMin + (valueInFromRange - fromMin) * (toMax - toMin) / (fromMax - fromMin)

export const pairPermutationsOf = array => {
  if (array.length < 2) return []
  const head = array[0]
  const tail = array.slice(1)
  const pairs = tail.map(tailPiece => [head, tailPiece])
  return [...pairs, ...pairPermutationsOf(tail)]
}
