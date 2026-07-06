import styled from 'styled-components';

import { Button, type ButtonProps } from '@admiral-ds/admiral3-primitives';

import { StoryDemoContainer } from '../../stories/StoryContainers';
import { BUTTON_APPEARANCES } from '../constants';

const Appearances = styled.div`
  display: grid;
  gap: 16px;
`;

const AppearanceRow = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const ButtonList = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const appearanceLabels: Record<(typeof BUTTON_APPEARANCES)[number], string> = {
  solid: 'Solid Button',
  flat: 'Flat Button',
  outline: 'Outline Button',
  ghost: 'Ghost Button',
};

export const ButtonAppereancesTemplate = (args: ButtonProps) => {
  return (
    <StoryDemoContainer>
      <Appearances>
        {BUTTON_APPEARANCES.map((appearance) => (
          <AppearanceRow key={appearance}>
            <ButtonList>
              <Button {...args} appearance={appearance} colorMode="colored">
                {args.children}
              </Button>
              <Button {...args} appearance={appearance} colorMode="neutral">
                {args.children}
              </Button>
              {appearance !== 'solid' && appearance !== 'ghost' && (
                <Button {...args} appearance={appearance} colorMode="staticWhite">
                  {args.children}
                </Button>
              )}
            </ButtonList>
            <span>{appearanceLabels[appearance]}</span>
          </AppearanceRow>
        ))}
      </Appearances>
    </StoryDemoContainer>
  );
};
