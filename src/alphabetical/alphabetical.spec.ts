import {alphabeticalSort} from './alphabeticalSort';

describe('alphabetical', () => {
    it('should return an empty list when receives an empty list', () => {
        expect(alphabeticalSort([])).toEqual([]);
    });
    it('should return a list with one element when receives a list with one element', () => {
        expect(alphabeticalSort(['a'])).toEqual(['a']);
    });
});
