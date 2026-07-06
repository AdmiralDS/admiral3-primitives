import { css } from 'styled-components';

import { cssToken } from '../../../theme/cssToken';
import type { CssToken } from '../../../theme/cssToken';
import type { ButtonColorMode } from '../types';

export type FlatColorSet = {
  background: CssToken;
  backgroundHover: CssToken;
  backgroundPress: CssToken;
  color: CssToken;
};

export const flatColors: Record<ButtonColorMode, FlatColorSet> = {
  colored: {
    background: cssToken('--admiral-color-base-primary-base3-rest', (theme) => theme.color.base.primary.base3.rest),
    backgroundHover: cssToken(
      '--admiral-color-base-primary-base3-hover',
      (theme) => theme.color.base.primary.base3.hover,
    ),
    backgroundPress: cssToken(
      '--admiral-color-base-primary-base3-press',
      (theme) => theme.color.base.primary.base3.press,
    ),
    color: cssToken('--admiral-color-text-primary-text1-rest', (theme) => theme.color.text.primary.text1.rest),
  },
  neutral: {
    background: cssToken('--admiral-color-base-neutral-opacity-rest', (theme) => theme.color.base.neutral.opacity.rest),
    backgroundHover: cssToken(
      '--admiral-color-base-neutral-opacity-hover',
      (theme) => theme.color.base.neutral.opacity.hover,
    ),
    backgroundPress: cssToken(
      '--admiral-color-base-neutral-opacity-press',
      (theme) => theme.color.base.neutral.opacity.press,
    ),
    color: cssToken('--admiral-color-text-neutral-text1-rest', (theme) => theme.color.text.neutral.text1.rest),
  },
  staticWhite: {
    background: cssToken(
      '--admiral-color-base-neutral-opacity-static-rest',
      (theme) => theme.color.base.neutral.opacityStatic.rest,
    ),
    backgroundHover: cssToken(
      '--admiral-color-base-neutral-opacity-static-hover',
      (theme) => theme.color.base.neutral.opacityStatic.hover,
    ),
    backgroundPress: cssToken(
      '--admiral-color-base-neutral-opacity-static-press',
      (theme) => theme.color.base.neutral.opacityStatic.press,
    ),
    color: cssToken('--admiral-color-text-neutral-static-white-1', (theme) => theme.color.text.neutral.staticWhite[1]),
  },
};

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
