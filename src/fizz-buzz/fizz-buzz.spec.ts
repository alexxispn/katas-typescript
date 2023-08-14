import {fizzBuzz, FizzBuzz} from './fizz-buzz';

describe('fizzBuzz', () => {
    it('should return 1 when 1 is given', () => {
        expect(fizzBuzz(1)).toEqual(['1']);
    });
    it('should return an error message when the given number is less than 1', () => {
        expect(fizzBuzz(0)).toEqual([FizzBuzz.ERROR_GIVEN_NUMBER_IS_LESS_THAN_1]);
    });
    it('should return 1, 2 when 2 is given', () => {
        const given = 2;

        const expectedResult = ['1', '2'];
        expect(fizzBuzz(given)).toEqual(expectedResult)
    });
    it('should return a Fizz instead of those numbers which are divisible by 3', () => {
        const given = 3;

        const expectedResult = ['1', '2', FizzBuzz.FIZZ];
        expect(fizzBuzz(given)).toEqual(expectedResult)
    });
})
