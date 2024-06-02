export class Rot13 {
    private alphabetLowerCased = 'abcdefghijklmnopqrstuvwxyz'

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
            : this.alphabetLowerCased[(this.alphabetLowerCased.indexOf(char.toLowerCase()) + 13) % 26].toUpperCase()
    }

    private isSpecialChar(char: string) {
        return !this.alphabetLowerCased.includes(char.toLowerCase())
    }

    private isLowerCase(letter: string): boolean {
        return letter === letter.toLowerCase()
    }
}
