export class Rot13 {
    private alphabet = 'abcdefghijklmnopqrstuvwxyz';

    convert(word: string): string {
        return word.split('').map((char) => this.convertChar(char)).join('')
    }

    private convertChar(char: string) {
        if (!char.match(/[a-zA-Z]/)) {
            return char
        }
        const charToLowerCase = char.toLowerCase()
        const rot13Char = (this.alphabet)[(this.alphabet.indexOf(charToLowerCase) + 13) % 26]

        return char === charToLowerCase ? rot13Char : rot13Char.toUpperCase()
    }
}
