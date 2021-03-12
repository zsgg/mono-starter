/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
    testURL: 'http://www.bizhows.com',
    transform: {
        '^.+\\.(ts|tsx|js)$': ['babel-jest', { rootMode: 'upward' }],
    },
    transformIgnorePatterns: ['/node_modules/'],
};
