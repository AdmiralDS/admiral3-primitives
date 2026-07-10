import { Skeleton, type SkeletonProps } from '@admiral-ds/admiral3-primitives';
import styled from 'styled-components';

export const StoryDemoContainer = styled.div<StoryDemoContainerProps>`
  box-sizing: border-box;
  inline-size: 100%;
  padding: 32px;
  display: flex;
  flex-direction: ${({ $direction = 'row' }) => $direction};
  align-items: center;
  justify-content: center;
  gap: ${({ $gap = '0' }) => $gap};

  ${({ $withBackground = true }) =>
    $withBackground &&
    css`
      background-color: var(--admiral-color-neutral-base-2-rest);
    `}
`;

export const SkeletonPlaygroundTemplate = (args: SkeletonProps) => {
  return <Skeleton {...args} />;
};
