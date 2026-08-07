import type { Meta, StoryObj } from '@storybook/react-vite';
import styled from 'styled-components';

import { Pulse } from '@admiral-ds/admiral3-primitives';

import { PulseDimensionTemplate } from './PulseDimension.template';
import pulseDimensionRaw from './PulseDimension.template?raw';
import { PulsePlaygroundTemplate } from './PulsePlayground.template';
import pulsePlaygroundRaw from './PulsePlayground.template?raw';
import { PulseStatusTemplate } from './PulseStatus.template';
import pulseStatusRaw from './PulseStatus.template?raw';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Separator = styled.div`
  height: 20px;
  width: 100%;
`;

const Description = () => (
  <Desc>
    Компонент Pulse — анимированный компонент, используется для привлечения дополнительного внимания к определенному
    месту или элементу интерфейса. Компонент имеет зацикленную анимацию в виде расходящейся от основания концентрической
    исчезающей волны.
    <Separator />
    Не рекомендуется использовать больше одного компонента Pulse на странице во избежании визуального шума.
    <Separator />
    Учитывайте размер анимации. Она в два с небольшим раза больше размера компонента. Не ставьте компонент вплотную к
    границам фреймов, что бы не обрезалась анимированная волна.
  </Desc>
);

const meta = {
  title: 'Components/Pulse',
  tags: ['autodocs'],
  decorators: undefined,
  component: Pulse,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    componentSubtitle: <Description />,
    layout: 'centered',
  },
  argTypes: {
    dimension: {
      options: ['l', 'm', 's'],
      control: { type: 'radio' },
    },
    status: {
      options: ['info', 'danger', 'success', 'warning'],
      control: { type: 'radio' },
    },
    cssMixin: {
      control: false,
    },
    dismiss: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Pulse>;

export default meta;

export const Playground: StoryObj = {
  render: (args) => <PulsePlaygroundTemplate {...args} />,

  parameters: {
    docs: {
      source: {
        code: pulsePlaygroundRaw,
      },
    },
  },
};

export const Sizes: StoryObj = {
  render: (args) => <PulseDimensionTemplate {...args} />,

  parameters: {
    docs: {
      source: {
        code: pulseDimensionRaw,
      },
    },
  },
};

export const Status: StoryObj = {
  render: (args) => <PulseStatusTemplate {...args} />,

  parameters: {
    docs: {
      source: {
        code: pulseStatusRaw,
      },
    },
  },
};
