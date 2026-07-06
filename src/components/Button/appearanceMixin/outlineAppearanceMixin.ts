import { css } from 'styled-components';

import { cssToken } from '../../../theme/cssToken';
import type { CssToken } from '../../../theme/cssToken';
import type { ButtonColorMode } from '../types';

export type OutlineColorSet = {
  background: CssToken;
  backgroundHover: CssToken;
  backgroundPress: CssToken;
  border: CssToken;
  color: CssToken;
};

export const outlineColors: Record<ButtonColorMode, OutlineColorSet> = {
  colored: {
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
    border: cssToken('--admiral-color-stroke-primary-stroke1-rest', (theme) => theme.color.stroke.primary.stroke1.rest),
    color: cssToken('--admiral-color-text-primary-text1-rest', (theme) => theme.color.text.primary.text1.rest),
  },
  neutral: {
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
    border: cssToken('--admiral-color-stroke-neutral-stroke2-rest', (theme) => theme.color.stroke.neutral.stroke2.rest),
    color: cssToken('--admiral-color-text-neutral-text1-rest', (theme) => theme.color.text.neutral.text1.rest),
  },
  staticWhite: {
    background: cssToken(
      '--admiral-color-base-neutral-invisible-static-rest',
      (theme) => theme.color.base.neutral.invisibleStatic.rest,
    ),
    backgroundHover: cssToken(
      '--admiral-color-base-neutral-invisible-static-hover',
      (theme) => theme.color.base.neutral.invisibleStatic.hover,
    ),
    backgroundPress: cssToken(
      '--admiral-color-base-neutral-invisible-static-press',
      (theme) => theme.color.base.neutral.invisibleStatic.press,
    ),
    border: cssToken(
      '--admiral-color-stroke-neutral-static-white-4',
      (theme) => theme.color.stroke.neutral.staticWhite[4],
    ),
    color: cssToken('--admiral-color-text-neutral-static-white-1', (theme) => theme.color.text.neutral.staticWhite[1]),
  },
};

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
