import { css } from 'styled-components';

import { cssToken } from '../../../theme/cssToken';
import type { CssToken } from '../../../theme/cssToken';
import type { ButtonColorMode } from '../types';

type GhostColorSet = 'background' | 'backgroundHover' | 'backgroundPress' | 'color';

const ghostWithColoredMode: Record<GhostColorSet, CssToken> = {
  background: cssToken(
    '--admiral-color-base-neutral-invisible-rest',
    (theme) => theme.color.base.neutral.invisible.rest,
  ),
  backgroundHover: cssToken(
    '--admiral-color-base-neutral-invisible-hover',
    (theme) => theme.color.base.neutral.invisible.hover,
  ),
  backgroundPress: cssToken(
    '--admiral-color-base-neutral-invisible-press',
    (theme) => theme.color.base.neutral.invisible.press,
  ),
  color: cssToken('--admiral-color-text-primary-text1-rest', (theme) => theme.color.text.primary.text1.rest),
};

const ghostWithNeutralMode: Record<GhostColorSet, CssToken> = {
  background: cssToken(
    '--admiral-color-base-neutral-invisible-rest',
    (theme) => theme.color.base.neutral.invisible.rest,
  ),
  backgroundHover: cssToken(
    '--admiral-color-base-neutral-invisible-hover',
    (theme) => theme.color.base.neutral.invisible.hover,
  ),
  backgroundPress: cssToken(
    '--admiral-color-base-neutral-invisible-press',
    (theme) => theme.color.base.neutral.invisible.press,
  ),
  color: cssToken('--admiral-color-text-neutral-text1-rest', (theme) => theme.color.text.neutral.text1.rest),
};

const ghostColors: Record<ButtonColorMode, Record<GhostColorSet, CssToken>> = {
  colored: ghostWithColoredMode,
  neutral: ghostWithNeutralMode,
  staticWhite: ghostWithColoredMode,
};

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
