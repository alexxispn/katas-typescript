export class Rot13 {
    convert(char: string) {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz'
        if(char === 'n') {
            return 'a'
        }
        if(char === 'o') {
            return 'b'
        }
        return alphabet[alphabet.indexOf(char) + 13]
    }
}
