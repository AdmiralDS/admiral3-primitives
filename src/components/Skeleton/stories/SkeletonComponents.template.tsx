import styled from 'styled-components';

import { Button, skeletonAnimationMixin } from '@admiral-ds/admiral3-primitives';

import { BUTTON_DIMENSIONS } from '../../Button/constants';
import { StoryDemoContainer } from '../../stories/StoryContainers';

const ButtonList = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

// Ряд компонентов библиотеки могут отображаться с анимацией скелетона, что контролируется через паратмер skeleton.

export const SkeletonComponentsTemplate = () => {
  return (
    <>
      <ButtonList>
        {BUTTON_DIMENSIONS.map((dimension) => (
          <Button key={dimension} dimension={dimension} skeleton>
            Size {dimension.toUpperCase()}
          </Button>
        ))}
      </ButtonList>
    </>
  );
};
