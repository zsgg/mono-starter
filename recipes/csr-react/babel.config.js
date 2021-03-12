const presets = [
    [
        '@babel/preset-env',
        {
            corejs: {
                version: 3,
            },
            targets: {
                chrome: '79',
                ie: '10',
            },
            useBuiltIns: 'usage',
        },
    ],
    '@babel/preset-react',
];

const plugins = [
    [
        '@emotion',
        {
            autoLabel: 'dev-only',
            cssPropOptimization: true,
            labelFormat: '[local]',
            sourceMap: true,
        },
    ],
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
    extends: '../../babel.config.js',
    plugins,
    presets,
};
