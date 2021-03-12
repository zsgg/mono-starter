/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
    testURL: 'http://www.bizhows.com',
    transform: {
        '^.+\\.(ts|tsx)$': ['babel-jest'],
    },
    transformIgnorePatterns: ['/node_modules/'],
};
