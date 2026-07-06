import { css } from 'styled-components';

import { outlineColors } from './colors';
import { cssToken } from '../../../theme/cssToken';
import type { ButtonColorMode } from '../types';

export const outlineAppearanceMixin = css<{ $colorMode: ButtonColorMode }>`
  background-color: ${(p) => outlineColors[p.$colorMode].background};
  color: ${(p) => outlineColors[p.$colorMode].color};
  box-shadow: inset 0 0 0 1px ${(p) => outlineColors[p.$colorMode].border};
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
    background-color: ${cssToken(
      '--admiral-color-base-neutral-invisible-rest',
      (theme) => theme.color.base.neutral.invisible.rest,
    )};
    color: ${cssToken('--admiral-color-text-neutral-disable-rest', (theme) => theme.color.text.neutral.disable.rest)};
    border-color: ${cssToken(
      '--admiral-color-stroke-neutral-stroke2-rest',
      (theme) => theme.color.stroke.neutral.stroke2.rest,
    )};
    &&& *[fill^='#'] {
      fill: ${cssToken('--admiral-color-text-neutral-disable-rest', (theme) => theme.color.text.neutral.disable.rest)};
    }
  }
`;
