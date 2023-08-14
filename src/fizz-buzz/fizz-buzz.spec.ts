import {fizzBuzz, FizzBuzz} from './fizz-buzz';

describe('fizzBuzz', () => {
    it('should return 1 when 1 is given', () => {
        expect(fizzBuzz(1)).toBe('1');
    });
    it('should return an error message when the given number is less than 1', () => {
        expect(fizzBuzz(0)).toBe(FizzBuzz.ERROR_GIVEN_NUMBER_IS_LESS_THAN_1);
    });
})
