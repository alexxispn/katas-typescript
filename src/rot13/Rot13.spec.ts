import {Rot13} from "./Rot13";

describe("Rot13", () => {
    describe("converts chars in the first half of the alphabet", () => {
        it.each([
            ['a', 'n'],
            ['b', 'o'],
            ['m', 'z'],
        ])('char %s in %s', (char, rot13Char) => {
            expect(new Rot13().convert(char)).toBe(rot13Char)
        })
    })

    describe("converts chars in the second half of the alphabet", () => {
        it.each([
            ['n', 'a'],
            ['o', 'b'],
            ['z', 'm'],
        ])('char %s in %s', (char, rot13Char) => {
            expect(new Rot13().convert(char)).toBe(rot13Char)
        })
    })

    describe("converts chars in upper case", () => {
        it.each([
            ['A', 'N'],
            ['B', 'O'],
            ['M', 'Z'],
            ['N', 'A'],
            ['O', 'B'],
            ['Z', 'M'],
        ])('char %s in %s', (char, rot13Char) => {
            expect(new Rot13().convert(char)).toBe(rot13Char)
        })
    })

    describe("converts words", () => {
        it.each([
            ['hola', 'ubyn'],
            ['adios', 'nqvbf'],
            ['hello', 'uryyb'],
            ['HOLA', 'UBYN'],
            ['Hola', 'Ubyn'],
            ['hOLA', 'uBYN'],
        ])('word %s in %s', (word, rot13Word) => {
            expect(new Rot13().convert(word)).toBe(rot13Word)
        })
    })

    describe("converts sentences", () => {
        it.each([
            ['hola adios', 'ubyn nqvbf'],
            ['hello world', 'uryyb jbeyq'],
            ['HOLA ADIOS', 'UBYN NQVBF'],
            ['Hola Adios', 'Ubyn Nqvbf'],
            ['hOLA aDIOS', 'uBYN nQVBF'],
        ])('sentence %s in %s', (sentence, rot13Sentence) => {
            expect(new Rot13().convert(sentence)).toBe(rot13Sentence)
        })
    })

    describe("converts sentences with special characters", () => {
        it.each([
            ['hola, adios', 'ubyn, nqvbf'],
            ['hello, world!', 'uryyb, jbeyq!'],
            ['HOLA, ADIOS', 'UBYN, NQVBF'],
            ['Hola, Adios', 'Ubyn, Nqvbf'],
            ['hOLA, aDIOS', 'uBYN, nQVBF'],
        ])('sentence %s in %s', (sentence, rot13Sentence) => {
            expect(new Rot13().convert(sentence)).toBe(rot13Sentence)
        })
    })
})
