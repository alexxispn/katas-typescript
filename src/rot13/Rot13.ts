export class Rot13 {
    private alphabetLowerCased = 'abcdefghijklmnopqrstuvwxyz'
    private alphabetUpperCased = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    convert(text: string): string {
        const extractedChars = text.split('')
        const convertedChars = extractedChars.map((char) => this.convertChar(char))

        return convertedChars.join('')
    }

    private convertChar(char: string) {
        if (this.isSpecialChar(char)) {
            return char
        }

        return this.isLowerCase(char)
            ? this.alphabetLowerCased[(this.alphabetLowerCased.indexOf(char.toLowerCase()) + 13) % 26]
            : this.alphabetUpperCased[(this.alphabetUpperCased.indexOf(char.toUpperCase()) + 13) % 26]
    }

    private isSpecialChar(char: string) {
        return !(this.alphabetLowerCased + this.alphabetUpperCased).includes(char)
    }

    private isLowerCase(letter: string): boolean {
        return this.alphabetLowerCased.includes(letter)
    }
}
