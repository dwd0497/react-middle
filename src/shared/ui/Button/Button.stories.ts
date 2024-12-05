import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button, ButtonTheme } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'shared/Button',
    component: Button,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        theme: ButtonTheme.PRIMARY,
        children: 'Button',
    },
};

export const Clear: Story = {
    args: {
        theme: ButtonTheme.CLEAR,
        children: 'Button',
    },
};

export const Outlined: Story = {
    args: {
        theme: ButtonTheme.OUTLINED,
        children: 'Button',
    },
};

export const Inverted: Story = {
    args: {
        theme: ButtonTheme.INVERTED,
        children: 'Button',
    },
};

export const SizeM: Story = {
    args: {
        theme: ButtonTheme.INVERTED,
        children: 'Button',
    },
};

export const SizeL: Story = {
    args: {
        theme: ButtonTheme.INVERTED,
        children: 'Button',
    },
};

export const Square: Story = {
    args: {
        theme: ButtonTheme.PRIMARY,
        children: '?',
        square: true,
    },
};
