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
const path = require('path');
const fs = require('fs');

function getPackageDir(filepath) {
    let currDir = path.dirname(require.resolve(filepath));
    while (true) {
        if (fs.existsSync(path.join(currDir, 'package.json'))) {
            return currDir;
        }
        const { dir, root } = path.parse(currDir);
        if (dir === root) {
            throw new Error(`Could not find package.json in the parent directories starting from ${filepath}.`);
        }
        currDir = dir;
    }
}

module.exports = {
    stories: [
        '../src/**/*.stories.@(mdx|tsx)',
    ],
    addons: ['@storybook/addon-essentials'],
    webpackFinal: async (config) => {
        /*
        스토리북 6 과 이모션 11 이 잔깐 호환이 안맞는 부분이 있다.
        alias 로 해결함
        https://github.com/storybookjs/storybook/issues/13277
        */
        config.resolve.alias = {
            ...config.resolve.alias,
            "@emotion/react": getPackageDir('@emotion/react'),
            "@emotion/styled": getPackageDir('@emotion/styled'),
        };
        return config;
    },
    babel: (config) => {
        config.presets.push(require.resolve('@emotion/babel-preset-css-prop'));
        return config;
    },
};
