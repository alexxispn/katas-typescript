export class Rot13 {
    convert(char: string) {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz'
        const charToLowerCase = char.toLowerCase()
        const rot13Char = alphabet[(alphabet.indexOf(charToLowerCase) + 13) % 26]

        return char === charToLowerCase ? rot13Char : rot13Char.toUpperCase()
    }
}
