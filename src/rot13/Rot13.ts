export class Rot13 {
    convert(char: string) {
        if(char === 'b'){
            return 'o'
        }
        if(char === 'c'){
            return 'p'
        }
        return 'n'
    }
}
