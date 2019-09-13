function range (beginning, end) {
  const directionMultipler = beginning > end ? -1 : 1
  const length = Math.abs(end - beginning + directionMultipler)
  return Array.from({ length }, (_, index) => index * directionMultipler + beginning);
}
