import {FRUIT} from "../FRUIT";
import {Counter} from "../counter";

export class FruitCounter {
    private readonly counter: Counter

    private constructor(fruits: FRUIT[]) {
        this.counter = this.calculateCount(fruits)
    }

    static fromFruits(fruits: FRUIT[]): FruitCounter {
        return new FruitCounter(fruits)
    }

    private calculateCount(fruits: FRUIT[]): Counter {
        return fruits.reduce(this.getFruitCount, {})
    }

    private getFruitCount = (counter: Counter, fruit: FRUIT): Counter => {
        counter[fruit] = (counter[fruit] || 0) + 1;
        return counter
    }

    hasCount(expectedCount: Counter): boolean {
        return this.counter === expectedCount
    }
}
