import {alphabeticalSort} from './alphabeticalSort';

describe('alphabetical', () => {
    it('should return an empty list when receives an empty list', () => {
        expect(alphabeticalSort([])).toEqual([]);
    });
});
