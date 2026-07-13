import styled from 'styled-components';

import { Button, type ButtonProps } from '@admiral-ds/admiral3-primitives';

import { StoryDemoContainer, StoryDemoDescription } from '../../stories/StoryContainers';

const State = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  align-self: flex-start;
`;

export const ButtonStatesTemplate = (args: ButtonProps) => {
  return (
    <StoryDemoContainer $gap="16px" $direction="column">
      <State>
        <Button {...args} disabled />
        <StoryDemoDescription>Disable</StoryDemoDescription>
      </State>
      <State>
        <Button {...args} displayAsDisabled />
        <StoryDemoDescription>Display as disable</StoryDemoDescription>
      </State>
      <State>
        <Button {...args} loading />
        <StoryDemoDescription>Loading</StoryDemoDescription>
      </State>
      <State>
        <Button {...args} loading loadingPosition="start" />
        <StoryDemoDescription>Loading with Spinner start position</StoryDemoDescription>
      </State>
      <State>
        <Button {...args} loading loadingPosition="end" />
        <StoryDemoDescription>Loading with Spinner end position</StoryDemoDescription>
      </State>
      <State>
        <Button {...args} skeleton appearance="outline" />
        <StoryDemoDescription>Skeleton</StoryDemoDescription>
      </State>
    </StoryDemoContainer>
  );
};
