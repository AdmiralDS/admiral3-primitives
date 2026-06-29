import { Spinner, type SpinnerProps } from '@admiral-ds/admiral3-primitives';

import { StoryDirtyContainer } from '../../stories/StoryContainers';
import { SPINNER_APPEARANCES, SPINNER_DIMENSIONS } from '../constants';

export const SpinnerDirtyTemplate = (args: SpinnerProps) => {
  return (
    <StoryDirtyContainer>
      {SPINNER_APPEARANCES.map((appearance) =>
        SPINNER_DIMENSIONS.map((dimension) => (
          <Spinner key={`${appearance}-${dimension}`} {...args} appearance={appearance} dimension={dimension} />
        )),
      )}
    </StoryDirtyContainer>
  );
};
