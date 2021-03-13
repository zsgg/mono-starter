const presets = [
    [
        '@babel/preset-env',
        {
            corejs: {
                version: 3,
            },
            targets: {
                chrome: '79',
            },
            useBuiltIns: 'usage',
        },
    ],
    '@babel/preset-typescript',
    [
        '@babel/preset-react',
        { importSource: '@emotion/react', runtime: 'automatic' },
    ],
    '@emotion/babel-preset-css-prop',
];

const plugins = [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-transform-template-literals',
    '@babel/plugin-proposal-class-properties',
    '@emotion/babel-plugin',
];

module.exports = {
    env: {
        development: {
            plugins: ['react-hot-loader/babel'],
        },
        production: {
            plugins: ['@babel/plugin-transform-template-literals'],
            presets: ['minify'],
        },
    },
    plugins,
    presets,
};
