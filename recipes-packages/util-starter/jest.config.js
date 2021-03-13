module.exports = {
    testURL: 'http://www.bizhows.com',
    transform: {
        '^.+\\.(ts|tsx)$': ['babel-jest'],
    },
    transformIgnorePatterns: ['/node_modules/'],
};
