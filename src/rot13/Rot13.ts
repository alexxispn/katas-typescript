export class Rot13 {
    convert(char: string) {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz'
        return alphabet[(alphabet.indexOf(char) + 13) % 26]
    }
}
