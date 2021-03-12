/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Fragment } from 'react';

const pinkInput = css`
    background-color: pink;
`;
const RedPasswordInput = (props) => (
    <input
        type="password"
        css={css`
            background-color: red;
            display: block;
        `}
        {...props}
    />
);

export const ComponentCssInJs = () => {
    return (
        <Fragment>
            <div>
                <RedPasswordInput placeholder="red" />
                <RedPasswordInput placeholder="pink" css={pinkInput} />
            </div>
        </Fragment>
    );
};
