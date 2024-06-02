export class Rot13 {
    private alphabet = 'abcdefghijklmnopqrstuvwxyz';

    convert(word: string): string {
        return word.split('').map((char) => this.convertChar(char)).join('')
    }

    private convertChar(char: string) {
        if (this.isSpecialChar(char)) {
            return char
        }
        const rot13Char = this.alphabet[(this.alphabet.indexOf(char.toLowerCase()) + 13) % 26]

        return char === char.toLowerCase() ? rot13Char : rot13Char.toUpperCase()
    }

    private isSpecialChar(char: string) {
        return !this.alphabet.includes(char.toLowerCase())
    }
}
