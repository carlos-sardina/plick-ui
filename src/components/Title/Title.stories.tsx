import type { Meta, StoryObj } from '@storybook/react';
import { Title, ITitle } from './Title';

const meta: Meta<ITitle> = {
  component: Title,
  title: 'Components/Title',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<ITitle>;

export const Default: Story = { args: { text: 'Titulo default' } };

export const Secondary: Story = {
  render: (args) => (
    <div>
      <Title {...args} />
    </div>
  ),
};
Secondary.args = { text: 'Titulo secundario' };
