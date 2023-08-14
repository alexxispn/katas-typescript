import {alphabeticalSort} from './alphabeticalSort';

describe('alphabetical', () => {
    it('should return an empty list when receives an empty list', () => {
        expect(alphabeticalSort([])).toEqual([]);
    });
    it('should return a list with one element when receives a list with one element', () => {
        expect(alphabeticalSort(['a'])).toEqual(['a']);
    });
    it('should return a list with two elements in alphabetical order when receives a list with two elements in reverse alphabetical order', () => {
        expect(alphabeticalSort(['b', 'a'])).toEqual(['a', 'b']);
    });
    it('should return a list with three elements in alphabetical order when receives a list with three elements in' +
        ' random alphabetical order', () => {
        expect(alphabeticalSort(['c', 'b', 'a'])).toEqual(['a', 'b', 'c']);
    });
    it('should return a list with some words with the same first letter in alphabetical order when receives a list' +
        ' with some elements with the same first letter in reverse alphabetical order', () => {
        expect(alphabeticalSort(['antena', 'amor', 'aguacate'])).toEqual(['aguacate', 'amor', 'antena']);
    });
});
