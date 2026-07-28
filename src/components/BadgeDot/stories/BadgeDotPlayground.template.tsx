import { BadgeDot, type BadgeDotProps } from '@admiral-ds/admiral3-primitives';

import { StoryDemoContainer } from '../../stories/StoryContainers';

export const BadgeDotPlaygroundTemplate = (args: BadgeDotProps) => {
  return (
    <StoryDemoContainer>
      <BadgeDot {...args} />
    </StoryDemoContainer>
  );
};
