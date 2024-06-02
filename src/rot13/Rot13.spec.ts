import {Rot13} from "./Rot13";

describe("Rot13", () => {
    it("converts char 'a' in 'n'", () => {
        expect(new Rot13().convert("a")).toBe("n")
    })

    it("converts char 'b' in 'o'", () => {
        expect(new Rot13().convert("b")).toBe("o")
    })

    it("converts char 'c' in 'p'", () => {
        expect(new Rot13().convert("c")).toBe("p")
    })

})
