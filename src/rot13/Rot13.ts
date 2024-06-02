export class Rot13 {
    convert(char: string) {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz'
        if(char === 'n') {
            return 'a'
        }
        if(char === 'o') {
            return 'b'
        }
        if(char === 'p') {
            return 'c'
        }
        return alphabet[alphabet.indexOf(char) + 13]
    }
}
