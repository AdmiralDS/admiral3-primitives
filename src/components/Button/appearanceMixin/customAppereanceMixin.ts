import { css } from 'styled-components';

import { getColors } from './colors';
import { cssToken } from '../../../theme/cssToken';
import type { CssToken } from '../../../theme/cssToken';
import type { ButtonColorMode, ButtonAppearance, ButtonColorConfig } from '../types';

export type CustomColorSet = {
  background: CssToken;
  backgroundHover: CssToken;
  backgroundPress: CssToken;
  border: CssToken;
  color: CssToken;
};

export const customColors: Record<ButtonColorMode, CustomColorSet> = {
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

export const customAppearanceMixin = css<{
  $colorConfig?: ButtonColorConfig;
  $colorMode: ButtonColorMode;
  $appearance: ButtonAppearance;
}>`
  background-color: ${(p) =>
    p.$colorMode === 'colored' && p.$colorConfig?.backgroundColor?.rest
      ? p.$colorConfig.backgroundColor.rest
      : getColors(p.$appearance)[p.$colorMode].background};

  color: ${(p) =>
    p.$colorMode === 'colored' && p.$colorConfig?.textColor
      ? p.$colorConfig.textColor
      : getColors(p.$appearance)[p.$colorMode].color};

  ${(p) =>
    p.$colorMode === 'colored' && p.$colorConfig?.borderColor
      ? `box-shadow: inset 0 0 0 1px ${p.$colorConfig.borderColor};`
      : 'border' in getColors(p.$appearance)[p.$colorMode]
        ? `box-shadow: inset 0 0 0 1px ${getColors(p.$appearance)[p.$colorMode].border};`
        : ''}

  &&& *[fill^='#'] {
    fill: ${(p) =>
      p.$colorMode === 'colored' && p.$colorConfig?.textColor
        ? p.$colorConfig.textColor
        : getColors(p.$appearance)[p.$colorMode].color};
  }

  &&&:hover {
    background-color: ${(p) =>
      p.$colorMode === 'colored' && p.$colorConfig?.backgroundColor?.hover
        ? p.$colorConfig.backgroundColor.hover
        : getColors(p.$appearance)[p.$colorMode].backgroundHover};
  }

  &&&:active {
    background-color: ${(p) =>
      p.$colorMode === 'colored' && p.$colorConfig?.backgroundColor?.press
        ? p.$colorConfig.backgroundColor.press
        : getColors(p.$appearance)[p.$colorMode].backgroundPress};
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
