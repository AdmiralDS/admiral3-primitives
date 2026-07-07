import { cssToken } from '../../../theme/cssToken';
import type { CssToken } from '../../../theme/cssToken';
import type { ButtonColorMode, ButtonAppearance } from '../types';

type ColorSet =
  | 'background'
  | 'backgroundHover'
  | 'backgroundPress'
  | 'backgroundDisabled'
  | 'color'
  | 'colorDisabled'
  | 'border'
  | 'borderDisabled';
type OutlineColorSet = ColorSet;
type SolidColorSet = Exclude<ColorSet, 'border' | 'borderDisabled'>;
type FlatColorSet = Exclude<ColorSet, 'border' | 'borderDisabled'>;
type GhostColorSet = Exclude<ColorSet, 'border' | 'borderDisabled'>;

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
  backgroundDisabled: cssToken(
    '--admiral-color-base-neutral-opacity-rest',
    (theme) => theme.color.base.neutral.opacity.rest,
  ),
  color: cssToken('--admiral-color-text-neutral-static-white-1', (theme) => theme.color.text.neutral.staticWhite[1]),
  colorDisabled: cssToken(
    '--admiral-color-text-neutral-disable-rest',
    (theme) => theme.color.text.neutral.disable.rest,
  ),
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
  backgroundDisabled: cssToken(
    '--admiral-color-base-neutral-opacity-rest',
    (theme) => theme.color.base.neutral.opacity.rest,
  ),
  color: cssToken('--admiral-color-text-neutral-inverted-rest', (theme) => theme.color.text.neutral.inverted.rest),
  colorDisabled: cssToken(
    '--admiral-color-text-neutral-disable-rest',
    (theme) => theme.color.text.neutral.disable.rest,
  ),
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
  backgroundDisabled: cssToken(
    '--admiral-color-base-neutral-invisible-rest',
    (theme) => theme.color.base.neutral.invisible.rest,
  ),
  color: cssToken('--admiral-color-text-primary-text1-rest', (theme) => theme.color.text.primary.text1.rest),
  colorDisabled: cssToken(
    '--admiral-color-text-neutral-disable-rest',
    (theme) => theme.color.text.neutral.disable.rest,
  ),
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
  backgroundDisabled: cssToken(
    '--admiral-color-base-neutral-invisible-rest',
    (theme) => theme.color.base.neutral.invisible.rest,
  ),
  color: cssToken('--admiral-color-text-neutral-text1-rest', (theme) => theme.color.text.neutral.text1.rest),
  colorDisabled: cssToken(
    '--admiral-color-text-neutral-disable-rest',
    (theme) => theme.color.text.neutral.disable.rest,
  ),
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
  backgroundDisabled: cssToken(
    '--admiral-color-base-neutral-opacity-static-rest',
    (theme) => theme.color.base.neutral.opacityStatic.rest,
  ),
  color: cssToken('--admiral-color-text-neutral-static-white-1', (theme) => theme.color.text.neutral.staticWhite[1]),
  colorDisabled: cssToken(
    '--admiral-color-text-neutral-static-white-disable',
    (theme) => theme.color.text.neutral.staticWhite.disable,
  ),
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
  backgroundDisabled: cssToken(
    '--admiral-color-base-neutral-invisible-rest',
    (theme) => theme.color.base.neutral.invisible.rest,
  ),
  border: cssToken('--admiral-color-stroke-primary-stroke1-rest', (theme) => theme.color.stroke.primary.stroke1.rest),
  borderDisabled: cssToken(
    '--admiral-color-stroke-neutral-stroke2-rest',
    (theme) => theme.color.stroke.neutral.stroke2.rest,
  ),
  color: cssToken('--admiral-color-text-primary-text1-rest', (theme) => theme.color.text.primary.text1.rest),
  colorDisabled: cssToken(
    '--admiral-color-text-neutral-disable-rest',
    (theme) => theme.color.text.neutral.disable.rest,
  ),
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
  backgroundDisabled: cssToken(
    '--admiral-color-base-neutral-invisible-rest',
    (theme) => theme.color.base.neutral.invisible.rest,
  ),
  border: cssToken('--admiral-color-stroke-neutral-stroke2-rest', (theme) => theme.color.stroke.neutral.stroke2.rest),
  borderDisabled: cssToken(
    '--admiral-color-stroke-neutral-stroke2-rest',
    (theme) => theme.color.stroke.neutral.stroke2.rest,
  ),
  color: cssToken('--admiral-color-text-neutral-text1-rest', (theme) => theme.color.text.neutral.text1.rest),
  colorDisabled: cssToken(
    '--admiral-color-text-neutral-disable-rest',
    (theme) => theme.color.text.neutral.disable.rest,
  ),
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
  backgroundDisabled: cssToken(
    '--admiral-color-base-neutral-invisible-static-rest',
    (theme) => theme.color.base.neutral.invisibleStatic.rest,
  ),
  border: cssToken(
    '--admiral-color-stroke-neutral-static-white-4',
    (theme) => theme.color.stroke.neutral.staticWhite[4],
  ),
  borderDisabled: cssToken(
    '--admiral-color-stroke-neutral-static-white-4',
    (theme) => theme.color.stroke.neutral.staticWhite[4],
  ),
  color: cssToken('--admiral-color-text-neutral-static-white-1', (theme) => theme.color.text.neutral.staticWhite[1]),
  colorDisabled: cssToken(
    '--admiral-color-text-neutral-static-white-disable',
    (theme) => theme.color.text.neutral.staticWhite.disable,
  ),
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
  backgroundDisabled: cssToken(
    '--admiral-color-base-neutral-invisible-rest',
    (theme) => theme.color.base.neutral.invisible.rest,
  ),
  color: cssToken('--admiral-color-text-primary-text1-rest', (theme) => theme.color.text.primary.text1.rest),
  colorDisabled: cssToken(
    '--admiral-color-text-neutral-disable-rest',
    (theme) => theme.color.text.neutral.disable.rest,
  ),
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
  backgroundDisabled: cssToken(
    '--admiral-color-base-neutral-invisible-rest',
    (theme) => theme.color.base.neutral.invisible.rest,
  ),
  color: cssToken('--admiral-color-text-neutral-text1-rest', (theme) => theme.color.text.neutral.text1.rest),
  colorDisabled: cssToken(
    '--admiral-color-text-neutral-disable-rest',
    (theme) => theme.color.text.neutral.disable.rest,
  ),
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

export const getToken = (apperance: ButtonAppearance): Record<ButtonColorMode, Partial<Record<ColorSet, CssToken>>> => {
  if (apperance === 'flat') return flatColors;
  if (apperance === 'outline') return outlineColors;
  if (apperance === 'ghost') return ghostColors;
  return solidColors;
};
