import {addAllNumbers} from './add-all-numbers';

describe('addAllNumbers', () => {
    it('should return 0 when receiving an empty array', () => {
        expect(addAllNumbers([])).toBe(0)
    });
    it('should return the number when there is an array with only one number', () => {
        expect(addAllNumbers([1])).toBe(1)
        expect(addAllNumbers([3])).toBe(3)
    });
});
