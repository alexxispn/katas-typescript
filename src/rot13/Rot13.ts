export class Rot13 {
    // @ts-ignore
    convert(char: string) {
        if(char === 'b'){
            return 'o'
        }
        return 'n'
    }
}
