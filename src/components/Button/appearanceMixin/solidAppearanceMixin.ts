import { css } from 'styled-components';

import { cssToken } from '../../../theme/cssToken';
import type { CssToken } from '../../../theme/cssToken';
import type { ButtonColorMode } from '../types';

type SolidColorSet = 'background' | 'backgroundHover' | 'backgroundPress' | 'color';

const solidWithColoredMode: Record<SolidColorSet, CssToken> = {
  background: cssToken('--admiral-color-base-primary-base1-rest', (theme) => theme.color.base.primary.base1.rest),
  backgroundHover: cssToken(
    '--admiral-color-base-primary-base1-hover',
    (theme) => theme.color.base.primary.base1.hover,
  ),
  backgroundPress: cssToken(
    '--admiral-color-base-primary-base1-press',
    (theme) => theme.color.base.primary.base1.press,
  ),
  color: cssToken('--admiral-color-text-neutral-static-white-1', (theme) => theme.color.text.neutral.staticWhite[1]),
};

const solidWithNeutralMode: Record<SolidColorSet, CssToken> = {
  background: cssToken('--admiral-color-base-neutral-inverted-rest', (theme) => theme.color.base.neutral.inverted.rest),
  backgroundHover: cssToken(
    '--admiral-color-base-neutral-inverted-hover',
    (theme) => theme.color.base.neutral.inverted.hover,
  ),
  backgroundPress: cssToken(
    '--admiral-color-base-neutral-inverted-press',
    (theme) => theme.color.base.neutral.inverted.press,
  ),
  color: cssToken('--admiral-color-text-neutral-inverted-rest', (theme) => theme.color.text.neutral.inverted.rest),
};

const solidColors: Record<ButtonColorMode, Record<SolidColorSet, CssToken>> = {
  colored: solidWithColoredMode,
  neutral: solidWithNeutralMode,
  staticWhite: solidWithColoredMode,
};

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
