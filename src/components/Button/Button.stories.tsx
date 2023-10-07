import type { Meta, StoryObj } from '@storybook/react';
import { Button, IButton } from './Button';

const meta: Meta<IButton> = { component: Button, title: 'Components/Button', tags: ['autodocs'] };
export default meta;

type Story = StoryObj<IButton>;

export const Default: Story = { args: { text: 'Continuar' } };

export const Secondary: Story = {
  render: (args) => <div><Button {...args} /></div>,
};
Secondary.args = { text: 'Otra acción' };