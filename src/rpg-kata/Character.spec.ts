import { Character } from './Character';

describe('Character', () => {
    it('should have 1000 health when created', () => {
        const character = new Character()

        expect(character.getHealth()).toBe(1000)
    })
    it('should have level 1 when created', () => {
        const character = new Character()

        expect(character.getLevel()).toBe(1)
    })
})
