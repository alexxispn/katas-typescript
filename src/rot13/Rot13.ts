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

        if (this.isLowerCase(char)) {
            return this.rotate13Letter(this.alphabetLowerCased, char)
        } else {
            return this.rotate13Letter(this.alphabetUpperCased, char)
        }
    }

    private rotate13Letter(alphabet: string, char: string) {
        return alphabet[(alphabet.indexOf(char) + 13) % 26];
    }

    private isSpecialChar(char: string) {
        return !(this.alphabetLowerCased + this.alphabetUpperCased).includes(char)
    }

    private isLowerCase(letter: string): boolean {
        return this.alphabetLowerCased.includes(letter)
    }
}
