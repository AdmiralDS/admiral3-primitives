import { CheckBox, type CheckBoxProps } from '@admiral-ds/admiral3-primitives';

import { StoryDemoContainer } from '../../stories/StoryContainers';
import { CHECK_BOX_DIMENSIONS } from '../constants';

export const CheckBoxSizesTemplate = (args: CheckBoxProps) => (
  <StoryDemoContainer $direction="column" $gap="16px">
    {CHECK_BOX_DIMENSIONS.map((dimension) => (
      <CheckBox {...args} key={dimension} dimension={dimension}>
        Размер {dimension.toUpperCase()}
      </CheckBox>
    ))}
  </StoryDemoContainer>
);
