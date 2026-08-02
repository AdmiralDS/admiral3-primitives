import type { Meta, StoryObj } from '@storybook/react-vite';
import styled from 'styled-components';

import { RadioButton, type RadioButtonProps } from '@admiral-ds/admiral3-primitives';

import { RadioButtonPlaygroundTemplate } from './RadioButtonPlayground.template';
import radioButtonPlaygroundTemplateRaw from './RadioButtonPlayground.template?raw';

const meta = {
  title: 'Components/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  argTypes: {
    dimension: { control: 'radio', options: ['m', 's', 'xs'] },
  },
} satisfies Meta<typeof RadioButton>;

export default meta;

const defaultArgs: RadioButtonProps = {
  children: 'RadioButton',
  extraText: 'Additional text',
  name: 'radio-playground',
};

export const Playground: StoryObj<RadioButtonProps> = {
  args: defaultArgs,
  render: RadioButtonPlaygroundTemplate,
  parameters: { docs: { source: { code: radioButtonPlaygroundTemplateRaw } } },
};

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  gap: 24px 40px;
`;

export const States: StoryObj = {
  render: () => (
    <Gallery>
      <RadioButton name="states">Rest</RadioButton>
      <RadioButton name="states" defaultChecked>
        Active
      </RadioButton>
      <RadioButton name="states" error>
        Error
      </RadioButton>
      <RadioButton name="states" disabled extraText="hrbjherbvfjre">
        Disabled
      </RadioButton>
      <RadioButton name="states" disabled defaultChecked>
        Active disabled
      </RadioButton>
      <RadioButton name="states" readOnly defaultChecked>
        Read only
      </RadioButton>
    </Gallery>
  ),
};

export const ReadOnly: StoryObj = {
  render: () => (
    <Gallery>
      <RadioButton name="readonly" readOnly>
        One
      </RadioButton>
      <RadioButton name="readonly" readOnly defaultChecked>
        Two
      </RadioButton>
      <RadioButton name="readonly" readOnly>
        Three
      </RadioButton>
    </Gallery>
  ),
};

export const Sizes: StoryObj = {
  render: () => (
    <Gallery>
      <RadioButton dimension="m">Medium</RadioButton>
      <RadioButton dimension="s">Small</RadioButton>
      <RadioButton dimension="xs">Extra small</RadioButton>
    </Gallery>
  ),
};

export const Fieldset: StoryObj = {
  render: () => (
    <fieldset data-dimension="s" disabled>
      <RadioButton dimension="m" defaultChecked>
        Inherits S and disabled
      </RadioButton>
    </fieldset>
  ),
};
