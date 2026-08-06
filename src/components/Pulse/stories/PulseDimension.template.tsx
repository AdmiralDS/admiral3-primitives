import styled from 'styled-components';

import { Pulse, type PulseProps } from '@admiral-ds/admiral3-primitives';

import { StoryDemoContainer, StoryDemoDescription } from '../../stories/StoryContainers';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const PulseDimensionTemplate = (props: PulseProps) => {
  return (
    <StoryDemoContainer $gap="16px" $direction="column">
      <StoryDemoDescription>Компонент представлен в трёх размерах: L, M (по умолчанию) и S.</StoryDemoDescription>
      <Wrapper>
        <Pulse {...props} dimension="l" />
        <Pulse {...props} dimension="m" />
        <Pulse {...props} dimension="s" />
      </Wrapper>
    </StoryDemoContainer>
  );
};
