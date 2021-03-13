module.exports = {
    processors: ["stylelint-processor-styled-components"],
    extends: [
        'stylelint-config-standard',
        'stylelint-config-recommended',
        'stylelint-config-recommended-scss',
        'stylelint-config-css-modules',
        "stylelint-config-styled-components"
    ],
    plugins: ['stylelint-scss', 'stylelint-order'],
    rules: {
        /*
        Stylelint: Expected indentation of 2 spaces (indentation)
        */
        'indentation': [4, { "except": ["block"] }],
        /*
        Stylelint: Unexpected vendor-prefix "-ms-grid-column" (property-no-vendor-prefix)
        */
        'property-no-vendor-prefix': null,
        /*
        Stylelint: Expected "#eeeeee" to be "#eee" (color-hex-length)
        */
        'color-hex-length': null
    },
};
