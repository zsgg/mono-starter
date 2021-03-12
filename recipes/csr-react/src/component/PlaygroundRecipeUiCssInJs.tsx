/** @jsx jsx */
import { jsx } from '@emotion/react';
import { ComponentCssInJs, Sub } from '@zsgg/recipe-package--ui-css-in-js';

export default () => {
    return (
        <div>
            <h1>PlaygroundRecipeUiCssInJs</h1>
            <ComponentCssInJs />
            <Sub.A />
            <Sub.B />
        </div>
    );
};
