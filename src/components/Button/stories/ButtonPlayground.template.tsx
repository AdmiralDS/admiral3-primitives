import { Button, type ButtonProps } from '@admiral-ds/admiral3-primitives';

import { StoryDemoContainer } from '../../stories/StoryContainers';

export const ButtonPlaygroundTemplate = (args: ButtonProps) => {
  return (
    <StoryDemoContainer>
      <Button {...args} />
    </StoryDemoContainer>
  );
};
