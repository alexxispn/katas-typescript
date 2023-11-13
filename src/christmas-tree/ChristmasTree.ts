export class ChristmasTree {
    private readonly rows: number
    private indentation: string = ` `
    private branchSymbol: string = `*`
    private baseSymbol: string = `|`
    private rowSeparator: string = `\n`

    private constructor(rows: number) {
        this.rows = rows
    }

    static fromRows(rows: number): ChristmasTree {
        if (rows < 1) {
            throw new Error(`Christmas tree must have at least one row`)
        }
        return new ChristmasTree(rows)
    }

    render(): string {
        return this.getTree()
    }

    private getBase(): string {
        return this.indentation.repeat(this.getTopBaseIndentationNumber()) + this.baseSymbol
    }

    private getTop(): string {
        return this.indentation.repeat(this.getTopBaseIndentationNumber()) + this.branchSymbol
    }

    private getBranch(rowNumber: number): string {
        const rowWidth: number = this.rows + rowNumber
        const branchIndentation: number = this.getTopBaseIndentationNumber() - rowNumber
        const branchWidth: number = rowWidth - branchIndentation
        return this.indentation.repeat(branchIndentation) + this.branchSymbol.repeat(branchWidth)
    }

    private getTree(): string {
        let tree: string = this.getTop()
        for (let i = 1; i < this.rows; i++) {
            tree += this.rowSeparator + this.getBranch(i)
        }
        tree += this.rowSeparator + this.getBase()
        return tree
    }

    private getTopBaseIndentationNumber(): number{
        return this.rows - 1
    }
}
