export class Rot13 {
    convert(char: string) {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz'
        if(char === 'n') {
            return 'a'
        }
        return alphabet[alphabet.indexOf(char) + 13]
    }
}
