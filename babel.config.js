module.exports = {
    plugins: [
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-transform-template-literals',
        '@babel/plugin-proposal-class-properties',
    ],
    presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        '@babel/preset-typescript',
        '@babel/preset-react',
    ],
};
