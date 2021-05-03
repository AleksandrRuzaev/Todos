import { formatString } from './utils';

describe('Utils test suit', () => {
    const allCount = 5;
    const leftCount = 3;

    test('simple string', () => {
        const value = 'simple string';

        expect(formatString(value)).toBe(value);
    });

    test('format string with one value', () => {
        expect(formatString('{0} items left', allCount)).toBe('5 items left');
    });

    test('format string with two values', () => {
        expect(formatString('all items = {0}, {1} items left', allCount, leftCount)).toBe(
            'all items = 5, 3 items left',
        );
    });

    test('format string with two values and one slot', () => {
        expect(formatString('{0} items left', allCount, leftCount)).toBe('5 items left');
    });
});
