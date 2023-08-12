import {addAllNumbers} from './add-all-numbers'

describe('addAllNumbers', () => {
    it('should return 0 when receiving an empty array', () => {
        expect(addAllNumbers([])).toBe(0)
    })
    it('should return the number when there is an array with only one number', () => {
        expect(addAllNumbers([1])).toBe(1)
        expect(addAllNumbers([3])).toBe(3)
    })
    it('should return the sum of the numbers given an array of positive numbers', () => {
        expect(addAllNumbers([1, 2, 3, 4])).toBe(10)
        expect(addAllNumbers([10, 20, 15, 5])).toBe(50)
    })
    it('should return the sum of the numbers given an array of negative numbers', () => {
        expect(addAllNumbers([-1, -2, -3, -4])).toBe(-10)
        expect(addAllNumbers([-10, -20, -15, -5])).toBe(-50)
    })
    it('should return the sum of the numbers given an array of positive and negative numbers', () => {
        expect(addAllNumbers([-1, 2, -3, 4])).toBe(2)
        expect(addAllNumbers([10, -20, 15, -5])).toBe(0)
    })
})
