import {fruitCounter} from "./fruitCounter";
import {FRUIT} from "../FRUIT";

describe('fruitCounter', () => {
    it('returns an empty object when there are no fruits', () => {
        const fruits: FRUIT[] = []
        expect(fruitCounter(fruits)).toEqual({})
    })
    it('returns an object with a single fruit when there is one fruit', () => {
      const fruits: FRUIT[] = [FRUIT.APPLE]
        expect(fruitCounter(fruits)).toEqual({apple: 1})
    })
    it('returns an object with the fruits count', () => {
        const fruits: FRUIT[] = [FRUIT.ORANGE, FRUIT.APPLE, FRUIT.LEMON, FRUIT.ORANGE, FRUIT.ORANGE]
        expect(fruitCounter(fruits)).toEqual({
            orange: 3,
            apple: 1,
            lemon: 1
        })
    })
})
