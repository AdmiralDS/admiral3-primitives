import styled from 'styled-components';

import { Button, type ButtonProps } from '@admiral-ds/admiral3-primitives';

import { StoryDemoContainer } from '../../stories/StoryContainers';

const Appearances = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const ButtonStatesTemplate = (args: ButtonProps) => {
  return (
    <StoryDemoContainer>
      <Appearances>
        <Button {...args} disabled />
        <Button {...args} displayAsDisabled />
        <Button {...args} loading />
        <Button {...args} loading loadingPosition="start" />
        <Button {...args} loading loadingPosition="end" />
        <Button {...args} skeleton />
      </Appearances>
    </StoryDemoContainer>
  );
};
