export class Character {
    constructor(
        private health: number = 1000,
        private level: number = 1
    ) {
    }

    getHealth(): number {
        return this.health
    }

    getLevel(): number {
        return this.level
    }
}
