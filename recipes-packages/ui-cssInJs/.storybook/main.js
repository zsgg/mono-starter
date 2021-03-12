// module.exports = {
//     //다른 스토리북 참조
//     refs: {
//         'design-system': {
//             title: 'Storybook Design System',
//             url: 'https://5ccbc373887ca40020446347-yldsqjoxzb.chromatic.com',
//         },
//     },
//     stories: [
//         '../src/**/*.stories.mdx',
//         '../src/**/*.stories.@(js|jsx|ts|tsx)',
//     ],
//     addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
//     typescript: {
//         check: true,
//         checkOptions: {},
//         reactDocgen: 'react-docgen-typescript',
//         reactDocgenTypescriptOptions: {
//             shouldExtractLiteralValuesFromEnum: true,
//             propFilter: (prop) =>
//                 prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
//         },
//     },
// };
module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
};
