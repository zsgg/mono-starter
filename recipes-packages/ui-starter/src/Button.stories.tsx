import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from './Button';

export default {
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    component: Button,
    title: 'Example/Button',
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Button',
    primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
    label: 'Button',
    size: 'large',
};

export const Small = Template.bind({});
Small.args = {
    label: 'Button',
    size: 'small',
};
