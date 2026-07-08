import { css } from 'styled-components';

import { outlineColors } from './colors';
import type { ButtonColorMode } from '../types';

export const outlineAppearanceMixin = css<{ $colorMode: ButtonColorMode; $skeleton?: boolean }>`
  background-color: ${(p) => outlineColors[p.$colorMode].background};
  color: ${(p) => outlineColors[p.$colorMode].color};
  box-shadow: ${(p) => (p.$skeleton ? 'none' : css`inset 0 0 0 1px ${outlineColors[p.$colorMode].border}`)};
  &&& *[fill^='#'] {
    fill: ${(p) => outlineColors[p.$colorMode].color};
  }

  &&&:hover {
    background-color: ${(p) => outlineColors[p.$colorMode].backgroundHover};
  }

  &&&:active {
    background-color: ${(p) => outlineColors[p.$colorMode].backgroundPress};
  }

  &&&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: ${(p) => outlineColors[p.$colorMode].backgroundDisabled};
    color: ${(p) => outlineColors[p.$colorMode].colorDisabled};
    box-shadow: inset 0 0 0 1px ${(p) => outlineColors[p.$colorMode].borderDisabled};
    &&& *[fill^='#'] {
      fill: ${(p) => outlineColors[p.$colorMode].colorDisabled};
    }
  }
`;
