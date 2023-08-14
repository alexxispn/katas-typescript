import {fizzBuzz} from './fizz-buzz';

describe('fizzBuzz', () => {
    it('should return 1 when 1 is given', () => {
        expect(fizzBuzz(1)).toBe('1');
    });
})
