import {checkout} from "./checkout";

describe('checkout', () => {
    it('should return 50 when we passed one A', () => {
        expect(checkout('A')).toBe(50)
    })
    it('should return 30 when we passed one B', () => {
        expect(checkout('B')).toBe(30)
    });
    it('should return 20 when we passed one C', () => {
        expect(checkout('C')).toBe(20)
    });
    it('should return 15 when we passed one D', () => {
        expect(checkout('D')).toBe(15)
    });
})
