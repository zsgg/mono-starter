import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

export type ButtonProps = {
    /**
     * Button contents
     */
    label: string;
} & ButtonStyledProps;

type ButtonStyledProps = {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
};

const StyledButton = styled.button<ButtonStyledProps>`
    margin: 2rem 3rem;
    color: ${(props) => (props.primary ? 'hotpink' : 'turquoise')};
    background-color: ${(props) => props.backgroundColor};
`;

const red = css`
    color: red !important;
`;

/**
 * Primary UI component for user interaction
 */
export const Button = ({
    primary = false,
    backgroundColor,
    label,
    onClick,
}: ButtonProps) => {
    return (
        <StyledButton
            onClick={onClick}
            primary={primary}
            backgroundColor={backgroundColor}
        >
            {label}
            <div css={red}>red</div>
        </StyledButton>
    );
};
