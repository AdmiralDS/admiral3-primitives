import styled from 'styled-components';

import { BadgeDot, type BadgeDotProps } from '@admiral-ds/admiral3-primitives';

import { BADGE_DOT_APPEARANCES, BADGE_DOT_DIMENSIONS } from '../constants';

const Appearances = styled.div`
  display: grid;
  gap: 16px;
`;

const AppearanceRow = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const BadgeDotList = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const BadgeDotAppearancesTemplate = (args: BadgeDotProps) => {
  return (
    <Appearances>
      {BADGE_DOT_APPEARANCES.map((appearance) => (
        <AppearanceRow key={appearance}>
          <BadgeDotList>
            {BADGE_DOT_DIMENSIONS.map((dimension) => (
              <BadgeDot key={dimension} {...args} appearance={appearance} dimension={dimension} />
            ))}
          </BadgeDotList>
          <span>{appearance}</span>
        </AppearanceRow>
      ))}
    </Appearances>
  );
};
