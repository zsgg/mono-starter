module.exports = {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-recommended',
        'stylelint-config-recommended-scss',
        'stylelint-config-css-modules',
    ],
    plugins: ['stylelint-scss', 'stylelint-order'],
    rules: {
        'no-empty-source': 0,
    },
};
