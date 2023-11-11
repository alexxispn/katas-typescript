import {FRUIT} from "../FRUIT";
import {FruitCounter} from "./FruitCounter";

describe('FruitCounter', () => {
    it('returns an empty object when there are no fruits', () => {
        const fruits: FRUIT[] = []
        const count = FruitCounter.fromFruits(fruits)
        expect(count.hasCount({}))
    })
    it('returns an object with a single fruit when there is one fruit', () => {
        const fruits: FRUIT[] = [FRUIT.APPLE]
        const count = FruitCounter.fromFruits(fruits)
        expect(count.hasCount({apple: 1}))
    })
    it('returns an object with the fruits count', () => {
        const fruits: FRUIT[] = [FRUIT.ORANGE, FRUIT.APPLE, FRUIT.LEMON, FRUIT.ORANGE, FRUIT.ORANGE]
        const count = FruitCounter.fromFruits(fruits)
        expect(count.hasCount({
            orange: 3,
            apple: 1,
            lemon: 1
        }))
    })
})
