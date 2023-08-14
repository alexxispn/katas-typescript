export enum FizzBuzz {
    FIZZ = 'Fizz',
    BUZZ = 'Buzz',
    FIZZ_BUZZ = 'FizzBuzz',
    ERROR_GIVEN_NUMBER_IS_LESS_THAN_1 = 'Error: Given number is less than 1',
}
export const fizzBuzz = (n: number): string[] => {
    if (n < 1) return [FizzBuzz.ERROR_GIVEN_NUMBER_IS_LESS_THAN_1]
    if (n === 1) return ['1']

    const numbers = Array.from({length: n}, (_, i) => i + 1)
    const isFizz = (number: number) => number % 3 === 0

    return numbers.map(number => {
        if (isFizz(number)) return FizzBuzz.FIZZ
        return number.toString()
    })
}
