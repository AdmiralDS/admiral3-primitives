import { cssToken } from '../../../theme/cssToken';
import type { CssToken } from '../../../theme/cssToken';
import type { ButtonColorMode, ButtonAppearance } from '../types';

type ColorSet = 'background' | 'backgroundHover' | 'backgroundPress' | 'color' | 'border';
type SolidColorSet = 'background' | 'backgroundHover' | 'backgroundPress' | 'color';
type FlatColorSet = SolidColorSet;
type GhostColorSet = SolidColorSet;
type OutlineColorSet = ColorSet;

/** apperance='solid и colorMode='colored' */
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

/** apperance='solid и colorMode='neutral' */
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

/** apperance='flat и colorMode='colored' */
const flatWithColoredMode: Record<FlatColorSet, CssToken> = {
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
};

/** apperance='flat и colorMode='neutral' */
const flatWithNeutralMode: Record<FlatColorSet, CssToken> = {
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
};

/** apperance='flat и colorMode='staticWhite' */
const flatWithStaticWhiteMode: Record<FlatColorSet, CssToken> = {
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
};

/** apperance='outline и colorMode='colored' */
const outlineWithColoredMode: Record<OutlineColorSet, CssToken> = {
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
};

/** apperance='outline и colorMode='neutral' */
const outlineWithNeutralMode: Record<OutlineColorSet, CssToken> = {
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
};

/** apperance='outline и colorMode='staticWhite' */
const outlineWithStaticWhiteMode: Record<OutlineColorSet, CssToken> = {
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
};

/** apperance='ghost и colorMode='colored' */
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

/** apperance='ghost и colorMode='neutral' */
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

export const solidColors: Record<ButtonColorMode, Record<SolidColorSet, CssToken>> = {
  colored: solidWithColoredMode,
  neutral: solidWithNeutralMode,
  staticWhite: solidWithColoredMode,
};
export const flatColors: Record<ButtonColorMode, Record<FlatColorSet, CssToken>> = {
  colored: flatWithColoredMode,
  neutral: flatWithNeutralMode,
  staticWhite: flatWithStaticWhiteMode,
};
export const outlineColors: Record<ButtonColorMode, Record<OutlineColorSet, CssToken>> = {
  colored: outlineWithColoredMode,
  neutral: outlineWithNeutralMode,
  staticWhite: outlineWithStaticWhiteMode,
};
export const ghostColors: Record<ButtonColorMode, Record<GhostColorSet, CssToken>> = {
  colored: ghostWithColoredMode,
  neutral: ghostWithNeutralMode,
  staticWhite: ghostWithColoredMode,
};

export const getColors = (
  apperance: ButtonAppearance,
): Record<ButtonColorMode, Partial<Record<ColorSet, CssToken>>> => {
  if (apperance === 'flat') return flatColors;
  if (apperance === 'outline') return outlineColors;
  if (apperance === 'ghost') return ghostColors;
  return solidColors;
};
