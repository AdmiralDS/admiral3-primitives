import styled from 'styled-components';

import { Spinner, type SpinnerProps } from '@admiral-ds/admiral3-primitives';

import { StoryDemoContainer } from '../../stories/StoryContainers';
import { SPINNER_DIMENSIONS } from '../constants';

const SpinnerList = styled.div<{ $appearance?: SpinnerProps['appearance'] }>`
  display: flex;
  align-items: center;
  gap: 16px;
  ${(p) => p.$appearance == 'staticWhite' && `background: var(--admiral-color-base-primary-base1-rest);`}
  ${(p) => p.$appearance == 'inverted' && `background: var(--admiral-color-base-neutral-inverted-rest);`}
`;

export const SpinnerSizesTemplate = (args: SpinnerProps) => {
  return (
    <StoryDemoContainer>
      <SpinnerList $appearance={args.appearance}>
        {SPINNER_DIMENSIONS.map((dimension) => (
          <Spinner key={dimension} {...args} dimension={dimension} />
        ))}
      </SpinnerList>
    </StoryDemoContainer>
  );
};
