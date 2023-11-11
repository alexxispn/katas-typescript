import {FRUIT} from "../FRUIT";
import {Counter} from "../counter";

const getFruitCount = (counter: Counter, fruit: FRUIT) => {
    if (counter[fruit]) {
        counter[fruit]++
    } else {
        counter[fruit] = 1
    }
    return counter
}

export const fruitCounter = (fruits: FRUIT[]): Counter => {
    return fruits.reduce(getFruitCount, {})
}
