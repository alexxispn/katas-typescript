import {ChristmasTree} from "./ChristmasTree";

describe('ChristmasTree', () => {
    it('renders a one row tree given 1 row', () => {
        const tree = ChristmasTree.fromRows(1)
        expect(tree.render()).toEqual(`*
|`)
    })
    it('renders a two row tree given 2 rows', () => {
        const tree = ChristmasTree.fromRows(2)
        expect(tree.render()).toEqual(` *
***
 |`)
    })
    it('renders a three row tree given 3 rows', () => {
        const tree = ChristmasTree.fromRows(3)
        expect(tree.render()).toEqual(`  *
 ***
*****
  |`)
        })
    describe('Errors', () => {
        it('throws an error when given 0 rows', () => {
            expect(() => ChristmasTree.fromRows(0)).toThrowError(`Christmas tree must have at least one row`)
        })
    })
})
