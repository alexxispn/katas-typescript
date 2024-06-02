export class Rot13 {
    convert(word: string): string {
        return word.split('').map((char) => this.convertChar(char)).join('')
    }

    private convertChar(char: string) {
        if (char === ' ') return char
        const alphabet = 'abcdefghijklmnopqrstuvwxyz'
        const charToLowerCase = char.toLowerCase()
        const rot13Char = alphabet[(alphabet.indexOf(charToLowerCase) + 13) % 26]

        return char === charToLowerCase ? rot13Char : rot13Char.toUpperCase()
    }
}
