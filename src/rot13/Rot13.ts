export class Rot13 {
    private alphabetLowerCased = 'abcdefghijklmnopqrstuvwxyz'
    private alphabetUpperCased = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    convert(text: string): string {
        const extractedChars = text.split('')
        const convertedChars = extractedChars.map((char) => this.convertChar(char))

        return convertedChars.join('')
    }

    private convertChar(char: string): string {
        if (this.isSpecialChar(char)) {
            return char
        }

        return this.rotate13Letter(char, this.choseAlphabet(char))
    }

    private isSpecialChar(char: string): boolean {
        return !(this.alphabetLowerCased + this.alphabetUpperCased).includes(char)
    }

    private rotate13Letter(letter: string, alphabet: string): string {
        return alphabet[(alphabet.indexOf(letter) + 13) % 26]
    }

    private choseAlphabet(letter: string) {
        return this.isLowerCase(letter)
            ? this.alphabetLowerCased
            : this.alphabetUpperCased
    }

    private isLowerCase(letter: string): boolean {
        return this.alphabetLowerCased.includes(letter)
    }
}
