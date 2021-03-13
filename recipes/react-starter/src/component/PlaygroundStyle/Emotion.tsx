import { css, CacheProvider } from '@emotion/react';
import styled from '@emotion/styled';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';

const style = css`
    color: hotpink;
    width: 100%;
`;

export const StyledButton = styled.button<{ like?: string }>`
    color: ${(props) => props.like};
`;

const CssDiv = () => <div css={style}>hotpink</div>;
const Grid = () => {
    return (
        <div
            css={css`
                display: grid;
                gap: 12px;
                grid-template-areas: '. . . .';
                grid-template-columns: 1fr;
            `}
        >
            <div>.</div>
            <div>.</div>
            <div>.</div>
            <div>.</div>
        </div>
    );
};

const myCache = createCache({
    key: 'my-prefix-key',
    stylisPlugins: [prefixer],
});

export default () => {
    return (
        <div>
            <CacheProvider value={myCache}>
                <CssDiv />
                <StyledButton>button</StyledButton>
                <Grid />
            </CacheProvider>
        </div>
    );
};
