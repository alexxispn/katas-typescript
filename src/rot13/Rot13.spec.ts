import {Rot13} from "./Rot13";

describe("Rot13", () => {
    describe("convert chars in the first half of the alphabet", () => {
        it.each([
            ['a', 'n'],
            ['b', 'o'],
            ['c', 'p'],
        ])('char %s in %s', (char, rot13Char) => {
            expect(new Rot13().convert(char)).toBe(rot13Char)
        })
    })
})
