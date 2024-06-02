import {Rot13} from "./Rot13";

describe("Rot13", () => {
    it.each([
      ['a', 'n'],
      ['b', 'o'],
      ['c', 'p'],
    ])('converts char %s in %s', (char, rot13Char) => {
        expect(new Rot13().convert(char)).toBe(rot13Char)
    })
})
