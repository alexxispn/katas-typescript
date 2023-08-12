import {addAllNumbers} from './add-all-numbers';

describe('addAllNumbers', () => {
    it('should return 0 when receiving an empty array', () => {
        expect(addAllNumbers([])).toBe(0)
    });
});

