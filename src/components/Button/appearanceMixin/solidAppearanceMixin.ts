import { css } from 'styled-components';

import { solidColors } from './colors';
import type { ButtonColorMode } from '../types';

export const solidAppearanceMixin = css<{ $colorMode: ButtonColorMode }>`
  background-color: ${(p) => solidColors[p.$colorMode].background(p)};
  color: ${(p) => solidColors[p.$colorMode].color(p)};
  &&& *[fill^='#'] {
    fill: ${(p) => solidColors[p.$colorMode].color(p)};
  }

  &&&:hover {
    background-color: ${(p) => solidColors[p.$colorMode].backgroundHover};
  }

  &&&:active {
    background-color: ${(p) => solidColors[p.$colorMode].backgroundPress};
  }

  &&&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: ${(p) => solidColors[p.$colorMode].backgroundDisabled};
    color: ${(p) => solidColors[p.$colorMode].colorDisabled};
    &&& *[fill^='#'] {
      fill: ${(p) => solidColors[p.$colorMode].colorDisabled};
    }
  }
`;
