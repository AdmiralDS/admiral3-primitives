import { css } from 'styled-components';

import { flatColors } from './colors';
import type { ButtonColorMode } from '../types';

export const flatAppearanceMixin = css<{ $colorMode: ButtonColorMode }>`
  background-color: ${(p) => flatColors[p.$colorMode].background};
  color: ${(p) => flatColors[p.$colorMode].color};
  &&& *[fill^='#'] {
    fill: ${(p) => flatColors[p.$colorMode].color};
  }

  &&&:hover {
    background-color: ${(p) => flatColors[p.$colorMode].backgroundHover};
  }

  &&&:active {
    background-color: ${(p) => flatColors[p.$colorMode].backgroundPress};
  }

  &&&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: ${(p) => flatColors[p.$colorMode].backgroundDisabled};
    color: ${(p) => flatColors[p.$colorMode].colorDisabled};
    &&& *[fill^='#'] {
      fill: ${(p) => flatColors[p.$colorMode].colorDisabled};
    }
  }
`;
