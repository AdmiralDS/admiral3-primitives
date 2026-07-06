import { css } from 'styled-components';

import { solidColors } from './colors';
import { cssToken } from '../../../theme/cssToken';
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
