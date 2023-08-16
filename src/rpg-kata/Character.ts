export class Character {
    constructor(private health: number = 1000) {
    }

    getHealth(): number {
        return this.health
    }
}
