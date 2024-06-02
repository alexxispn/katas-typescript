import {Rot13} from "./Rot13";

describe("Rot13", () => {
    it("converts char 'a' in 'n'", () => {
        expect(new Rot13().convert("a")).toBe("n")
    })
})
