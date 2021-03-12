module.exports = {
    plugins: [
        // 'dynamic-import-node',
        // ['dynamic-import-node', { noInterop: true }],
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-transform-template-literals',
    ],
    presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        '@babel/preset-typescript',
        '@babel/preset-react',
    ],
};
