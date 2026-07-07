import { ServiceCheckOutline } from '@admiral-ds/admiral3-icons';
import styled from 'styled-components';

import { Button, type ButtonProps, Badge } from '@admiral-ds/admiral3-primitives';

import { StoryDemoContainer } from '../../stories/StoryContainers';

const Appearances = styled.div`
  display: grid;
  gap: 16px;
`;

export const ButtonIconBadgeTemplate = (args: ButtonProps) => {
  return (
    <StoryDemoContainer>
      <Appearances>
        <Button {...args}>
          <ServiceCheckOutline /> Button
        </Button>
        <Button {...args}>
          Button <ServiceCheckOutline />
        </Button>

        <Button {...args}>
          Button<Badge dimension="s">5</Badge>
        </Button>
      </Appearances>
    </StoryDemoContainer>
  );
};
