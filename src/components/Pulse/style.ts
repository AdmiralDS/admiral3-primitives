import styled, { css } from 'styled-components';

import { cssToken } from '#src/theme/cssToken';

import type { PulseDimension, PulseStatus } from './types';

const getPulseColor = css<{ $status: PulseStatus | { background?: string } }>`
  ${({ $status }) => {
    switch ($status) {
      case 'danger':
        return cssToken('--admiral-color-error-base-1-rest', (theme) => theme.color.error.base._1.rest);
      case 'success':
        return cssToken('--admiral-color-success-base-1-rest', (theme) => theme.color.success.base._1.rest);
      case 'warning':
        return cssToken('--admiral-color-warning-base-1-rest', (theme) => theme.color.warning.base._1.rest);
      case 'info':
        return cssToken('--admiral-color-primary-base-1-rest', (theme) => theme.color.primary.base._1.rest);
      default:
        return (
          $status?.background ||
          cssToken('--admiral-color-primary-base-1-rest', (theme) => theme.color.primary.base._1.rest)
        );
    }
  }}
`;

const getSize = css<{ $dimension: PulseDimension }>`
  ${({ $dimension }) => {
    switch ($dimension) {
      case 's':
        return '6px';
      case 'l':
        return '14px';
      case 'm':
      default:
        return '10px';
    }
  }}
`;

export const PulseElement = styled.div<{
  $dimension: PulseDimension;
  $status: PulseStatus | { background?: string };
  $cssMixin?: ReturnType<typeof css>;
  $dismiss?: boolean;
}>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  block-size: ${(p) => (p.$dimension == 'l' ? 16 : p.$dimension == 'm' ? 12 : 8)}px;
  inline-size: ${(p) => (p.$dimension == 'l' ? 16 : p.$dimension == 'm' ? 12 : 8)}px;
  border-radius: 50%;
  --pulse-color: ${getPulseColor};
  background-color: var(--pulse-color);

  &:before {
    content: '';
    border: none;
    position: absolute;
    background-color: transparent;
    border-radius: 50%;
    width: ${getSize};
    height: ${getSize};
    box-sizing: border-box;
    animation-name: ${(p) =>
      p.$dismiss ? 'none' : p.$dimension == 'l' ? 'animation-l' : p.$dimension == 'm' ? 'animation-m' : 'animation-s'};
    animation-duration: 2500ms;
    animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
    animation-iteration-count: infinite;
  }

  @keyframes animation-s {
    0% {
      opacity: 100%;
      filter: blur(0.2px);
      box-shadow: inset 0 0 0 1px var(--pulse-color);
    }

    80% {
      transform: scale(3.3);
      opacity: 0%;
      box-shadow: inset 0 0 0 0.4px var(--pulse-color);
      filter: blur(0.2px);
    }

    100% {
      opacity: 0%;
    }
  }

  @keyframes animation-m {
    0% {
      opacity: 100%;
      box-shadow: inset 0 0 0 1px var(--pulse-color);
      filter: blur(0.33px);
    }
    80% {
      transform: scale(2.8);
      opacity: 0%;
      box-shadow: inset 0 0 0 0.7px var(--pulse-color);
      filter: blur(0.33px);
    }
    100% {
      opacity: 0%;
    }
  }

  @keyframes animation-l {
    0% {
      opacity: 100%;
      filter: blur(0.33px);
      box-shadow: inset 0 0 0 1px var(--pulse-color);
    }
    80% {
      transform: scale(2.5);
      opacity: 0%;
      filter: blur(0.33px);
      box-shadow: inset 0 0 0 1.2px var(--pulse-color);
    }
    100% {
      opacity: 0%;
    }
  }

  ${(p) => p.$cssMixin}
`;
