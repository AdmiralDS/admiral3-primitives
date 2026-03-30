import styled from 'styled-components';

import { BadgeDot, type BadgeDotProps } from '@admiral-ds/admiral3-primitives';

import { BADGE_DOT_DIMENSIONS } from '../constants';

const BadgeDotList = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const BadgeDotSizesTemplate = (args: BadgeDotProps) => {
  return (
    <BadgeDotList>
      {BADGE_DOT_DIMENSIONS.map((dimension) => (
        <BadgeDot key={dimension} {...args} dimension={dimension} />
      ))}
    </BadgeDotList>
  );
};
