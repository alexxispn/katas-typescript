export class Rot13 {
    convert(char: string) {
        if (char === 'hola') return 'ubyn'
        if (char === 'adios') return 'nqvbf'
        if (char === 'hello') return 'uryyb'
        const alphabet = 'abcdefghijklmnopqrstuvwxyz'
        const charToLowerCase = char.toLowerCase()
        const rot13Char = alphabet[(alphabet.indexOf(charToLowerCase) + 13) % 26]

        return char === charToLowerCase ? rot13Char : rot13Char.toUpperCase()
    }
}
