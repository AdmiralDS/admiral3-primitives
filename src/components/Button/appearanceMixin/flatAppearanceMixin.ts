import { css } from 'styled-components';

import { flatColors } from './colors';
import { cssToken } from '../../../theme/cssToken';
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
    background-color: ${cssToken(
      '--admiral-color-base-neutral-opacity-rest',
      (theme) => theme.color.base.neutral.opacity.rest,
    )};
    color: ${cssToken('--admiral-color-text-neutral-disable-rest', (theme) => theme.color.text.neutral.disable.rest)};
    border-color: ${cssToken(
      '--admiral-color-base-neutral-opacity-rest',
      (theme) => theme.color.base.neutral.opacity.rest,
    )};
    &&& *[fill^='#'] {
      fill: ${cssToken('--admiral-color-text-neutral-disable-rest', (theme) => theme.color.text.neutral.disable.rest)};
    }
  }
`;
