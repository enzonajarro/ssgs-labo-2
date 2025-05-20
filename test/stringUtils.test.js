const {
    reverseString,
    isPalindrome,
    truncateString,
    countCharacters,
} = require('../src/stringUtils');

describe('stringa invertita', () => {
    test('inverte una stringa normale', () => {
        expect(reverseString('ciao')).toBe('oaic');
    });

    test('inverte una stringa vuota', () => {
        expect(reverseString('')).toBe('');
    });

    test('inverte una stringa con spazi', () => {
        expect(reverseString('a b c')).toBe('c b a');
    });
});

describe('stringa palindroma', () => {
    test('riconosce una stringa palindroma semplice', () => {
        expect(isPalindrome('anna')).toBe(true);
    });

    test('riconosce una stringa palindroma con spazi', () => {
        expect(isPalindrome('i topi non avevano nipoti')).toBe(true);
    });
});

describe('tronco di una stringa', () => {
    test('tronca una stringa più lunga di maxLength', () => {
        expect(truncateString('abcdef', 4)).toBe('abcd...');
    });

    test('non tronca una stringa uguale a maxLength', () => {
        expect(truncateString('abcd', 4)).toBe('abcd');
    });

    test('non tronca una stringa più corta di maxLength', () => {
        expect(truncateString('abc', 5)).toBe('abc');
    });
});

describe('conta caratteri', () => {
    test('conta i caratteri di una stringa normale', () => {
        expect(countCharacters('aabbc')).toEqual({ a: 2, b: 2, c: 1 });
    });

    test('conta i caratteri di una stringa vuota', () => {
        expect(countCharacters('')).toEqual({});
    });

    test('conta i caratteri con spazi', () => {
        expect(countCharacters('a a')).toEqual({ a: 2, ' ': 1 });
    });
});