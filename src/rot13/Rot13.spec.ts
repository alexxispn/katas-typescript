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

    describe("convert chars in the second half of the alphabet", () => {
        it.each([
            ['n', 'a'],
            ['o', 'b'],
            ['p', 'c'],
        ])('char %s in %s', (char, rot13Char) => {
            expect(new Rot13().convert(char)).toBe(rot13Char)
        })
    })

    describe("convert chars at the end of the alphabet", () => {
        it.each([
            ['A', 'N'],
            ['B', 'O'],
            ['C', 'P'],
            ['N', 'A'],
            ['O', 'B'],
            ['P', 'C'],
        ])('char %s in %s', (char, rot13Char) => {
            expect(new Rot13().convert(char)).toBe(rot13Char)
        })
    })
})
