import { ServiceInfoSolid } from '@admiral-ds/admiral3-icons';
import styled from 'styled-components';

import { RadioButton, type RadioButtonDimension, type RadioButtonProps } from '@admiral-ds/admiral3-primitives';

import { StoryDemoContainer } from '../../stories/StoryContainers';
import { RADIO_BUTTON_DIMENSIONS } from '../constants';

const RadioButtonList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const RadioWithInformer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 5px;
`;

const Informer = styled.span<{ $dimension: RadioButtonDimension }>`
  margin-left: 4px;
  width: ${(p) => (p.$dimension === 'm' ? 24 : p.$dimension === 's' ? 20 : 16)}px;

  color: var(--admiral-color-neutral-text-2-rest);
  &:hover {
    color: var(--admiral-color-primary-text-1-hover);
  }
`;

const INFORMER_TEXT = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';

// TODO в дальнейшем заменить title на Hint

export const RadioButtonInformerTemplate = (args: RadioButtonProps) => (
  <StoryDemoContainer>
    <RadioButtonList>
      {RADIO_BUTTON_DIMENSIONS.map((dimension) => (
        <RadioWithInformer key={dimension}>
          <RadioButton {...args} name={`radio-informer-${dimension}`} dimension={dimension} extraText="Add text">
            Dimension — {dimension}
          </RadioButton>
          <Informer $dimension={dimension} title={INFORMER_TEXT} aria-label={INFORMER_TEXT}>
            <ServiceInfoSolid />
          </Informer>
        </RadioWithInformer>
      ))}
    </RadioButtonList>
  </StoryDemoContainer>
);
