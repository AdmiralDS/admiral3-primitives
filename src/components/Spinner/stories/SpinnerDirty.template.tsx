import styled from 'styled-components';

import { Spinner, type SpinnerProps } from '@admiral-ds/admiral3-primitives';

import { StoryDirtyContainer } from '../../stories/StoryContainers';
import { SPINNER_APPEARANCES, SPINNER_DIMENSIONS } from '../constants';

const SpinnerList = styled.div<{ $appearance?: SpinnerProps['appearance'] }>`
  display: flex;
  align-items: center;
  gap: 14px;
  ${(p) => p.$appearance == 'staticWhite' && `background: var(--admiral-color-primary-base-1-rest);`}
  ${(p) => p.$appearance == 'inverted' && `background: var(--admiral-color-neutral-base-inverted-rest);`}
`;

export const SpinnerDirtyTemplate = (args: SpinnerProps) => {
  return (
    <StoryDirtyContainer>
      {SPINNER_APPEARANCES.map((appearance) => (
        <SpinnerList key={`${appearance}`} $appearance={appearance}>
          {SPINNER_DIMENSIONS.map((dimension) => (
            <Spinner key={`${appearance}-${dimension}`} {...args} appearance={appearance} dimension={dimension} />
          ))}
        </SpinnerList>
      ))}
    </StoryDirtyContainer>
  );
};
