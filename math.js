const { sin, cos, PI, round } = Math;
const IN_RADIANS_360_DEGREES = 2 * PI;

export const mapValueToRange = (valueInFromRange, fromMin, fromMax, toMin, toMax) =>
  toMin + ((valueInFromRange - fromMin) * (toMax - toMin)) / (fromMax - fromMin);

export const angleToRadians = (angle) => (IN_RADIANS_360_DEGREES * angle) / 360;

export const coordinatesOnCircle = (radius, angle) => ({
  x: round(radius * sin(angleToRadians(angle))),
  y: round(radius * cos(angleToRadians(angle))),
});

export const range = (length, min, max, increment) => {
  const step = increment || (max - min) / (length - 1);
  return Array.from({ length }).map((_, index) => index * step + min);
};

export const isPrime = (number) => {
  for (let i = 2; i <= number / 2; i++) {
    if (number % i == 0) return false;
  }
  return true;
};

export function* primes(number) {
  let primesCount = 0;
  for (let i = 2; primesCount < number; i++) {
    if (isPrime(i)) {
      ++primesCount;
      yield i;
    }
  }
}

export function* nPowersOf(length, number) {
  for (let i = 1; i <= length; i++) {
    yield number ** i;
  }
}
