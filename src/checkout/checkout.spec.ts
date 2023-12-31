import {checkout} from "./checkout"

describe('checkout', () => {
    it('should return 0 when we passed an empty string', () => {
        expect(checkout('')).toBe(0)
    })
    it('should return 50 when we passed one A', () => {
        expect(checkout('A')).toBe(50)
    })
    it('should return 30 when we passed one B', () => {
        expect(checkout('B')).toBe(30)
    })
    it('should return 20 when we passed one C', () => {
        expect(checkout('C')).toBe(20)
    })
    it('should return 15 when we passed one D', () => {
        expect(checkout('D')).toBe(15)
    })
    it('should return the sum of the products when we passed more than one product', () => {
        expect(checkout('AA')).toBe(100)
        expect(checkout('AB')).toBe(80)
        expect(checkout('ABCDA')).toBe(165)
    })
    it('should return an error when we passed an invalid product', () => {
        expect(() => checkout('E')).toThrow('Invalid product')
    })
    it('should return 130 when we passed three A', () => {
        expect(checkout('AAA')).toBe(130)
    })
    it('should return 45 when we passed two B', () => {
        expect(checkout('BB')).toBe(45)
    })
    it('should return the correct price when we passed more than one product with special offer', () => {
        expect(checkout('AABCDADDCD')).toBe(260)
        expect(checkout('AAABBBCCCDDD')).toBe(310)
    })
})
