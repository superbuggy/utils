const { log } = Math;
import { uniques } from "./general";
import { nPowersOf, primes } from "./math";

export const ratioToCents = (numerator, denominator) => (1200 * log(numerator / denominator)) / log(2);

const octaveReducedPrimes = () =>
  uniques(
    [...primes(101)].slice(1, -1).map((num) => {
      const powersOf2 = [nPowersOf(8, 2)];
      const denominator = powersOf2.find((power) => num / power < 2 && num / power > 1);
      return [num, denominator]
    })
  );
