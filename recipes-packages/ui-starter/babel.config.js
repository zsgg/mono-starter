module.exports = {
    plugins: ['@emotion/babel-plugin'],
    presets: [
        [
            '@babel/preset-react',
            { importSource: '@emotion/react', runtime: 'automatic' },
        ],
    ],
};
