import styled, { css } from 'styled-components';

import { BUTTON_MIN_HEIGHT } from './constants';
import type { ExampleComponentAppearance } from './types';

const primaryAppearance = css`
  border-color: #0057b8;
  background: #0057b8;
  color: #ffffff;

  &:hover:not(:disabled) {
    background: #004799;
    border-color: #004799;
  }
`;

const secondaryAppearance = css`
  border-color: #c7d2e3;
  background: #ffffff;
  color: #1f2937;

  &:hover:not(:disabled) {
    border-color: #8aa1c2;
    background: #f5f7fa;
  }
`;

export const StyledButton = styled.button<{ $appearance: ExampleComponentAppearance }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: ${BUTTON_MIN_HEIGHT};
  padding: 0 16px;
  border: 1px solid transparent;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;

  ${({ $appearance }) => ($appearance === 'secondary' ? secondaryAppearance : primaryAppearance)}

  &:focus-visible {
    outline: 2px solid #7ab8ff;
    outline-offset: 2px;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
