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

        return this.isLowerCase(char)
            ? this.rotate13Letter(char, this.alphabetLowerCased)
            : this.rotate13Letter(char, this.alphabetUpperCased)
    }

    private rotate13Letter(char: string, alphabet: string): string {
        return alphabet[(alphabet.indexOf(char) + 13) % 26]
    }

    private isSpecialChar(char: string): boolean {
        return !(this.alphabetLowerCased + this.alphabetUpperCased).includes(char)
    }

    private isLowerCase(letter: string): boolean {
        return this.alphabetLowerCased.includes(letter)
    }
}
