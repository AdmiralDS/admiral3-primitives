import { css } from 'styled-components';

import { ghostColors } from './colors';
import { cssToken } from '../../../theme/cssToken';
import type { ButtonColorMode } from '../types';

export const ghostAppearanceMixin = css<{ $colorMode: ButtonColorMode }>`
  background-color: ${(p) => ghostColors[p.$colorMode].background};
  color: ${(p) => ghostColors[p.$colorMode].color};
  &&& *[fill^='#'] {
    fill: ${(p) => ghostColors[p.$colorMode].color};
  }

  &&&:hover {
    background-color: ${(p) => ghostColors[p.$colorMode].backgroundHover};
  }

  &&&:active {
    background-color: ${(p) => ghostColors[p.$colorMode].backgroundPress};
  }

  &&&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: ${cssToken(
      '--admiral-color-base-neutral-invisible-rest',
      (theme) => theme.color.base.neutral.invisible.rest,
    )};
    color: ${cssToken('--admiral-color-text-neutral-disable-rest', (theme) => theme.color.text.neutral.disable.rest)};
    border-color: ${cssToken(
      '--admiral-color-base-neutral-invisible-rest',
      (theme) => theme.color.base.neutral.invisible.rest,
    )};
    &&& *[fill^='#'] {
      fill: ${cssToken('--admiral-color-text-neutral-disable-rest', (theme) => theme.color.text.neutral.disable.rest)};
    }
  }
`;
