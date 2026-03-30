import { textStyles } from '@admiral-ds/admiral3-tokens';
import styled, { type CSSObject } from 'styled-components';

import { BADGE_SIZE_PARAMETERS } from './constants';
import type { BadgeAppearance, BadgeSize, StyledBadgeProps } from './types';
import { cssToken } from '../../theme/cssToken';
import type { CssToken } from '../../theme/cssToken';

export const badgeBackgroundColors: Record<BadgeAppearance, CssToken> = {
  neutral1: cssToken('--admiral-color-base-neutral-base1-rest', (theme) => theme.color.base.neutral.base1.rest),
  neutral1Inactive: cssToken('--admiral-color-base-neutral-base1-rest', (theme) => theme.color.base.neutral.base1.rest),
  neutral1Disable: cssToken('--admiral-color-base-neutral-base1-rest', (theme) => theme.color.base.neutral.base1.rest),
  neutral2: cssToken('--admiral-color-base-neutral-opacity-rest', (theme) => theme.color.base.neutral.opacity.rest),
  neutral2Inactive: cssToken(
    '--admiral-color-base-neutral-opacity-rest',
    (theme) => theme.color.base.neutral.opacity.rest,
  ),
  neutral2Disable: cssToken(
    '--admiral-color-base-neutral-opacity-rest',
    (theme) => theme.color.base.neutral.opacity.rest,
  ),
  neutral3: cssToken('--admiral-color-base-neutral-inverted-rest', (theme) => theme.color.base.neutral.inverted.rest),
  info: cssToken('--admiral-color-base-primary-base1-rest', (theme) => theme.color.base.primary.base1.rest),
  warning: cssToken(
    '--admiral-color-base-status-warning-base1-rest',
    (theme) => theme.color.base.status.warning.base1.rest,
  ),
  success: cssToken(
    '--admiral-color-base-status-success-base1-rest',
    (theme) => theme.color.base.status.success.base1.rest,
  ),
  error: cssToken('--admiral-color-base-status-error-base1-rest', (theme) => theme.color.base.status.error.base1.rest),
  whiteStatic: cssToken(
    '--admiral-color-text-neutral-static-white-1',
    (theme) => theme.color.text.neutral.staticWhite[1],
  ),
};

export const badgeTextColors: Record<BadgeAppearance, CssToken> = {
  neutral1: cssToken('--admiral-color-text-neutral-text1-rest', (theme) => theme.color.text.neutral.text1.rest),
  neutral1Inactive: cssToken('--admiral-color-text-neutral-text2-rest', (theme) => theme.color.text.neutral.text2.rest),
  neutral1Disable: cssToken(
    '--admiral-color-text-neutral-disable-rest',
    (theme) => theme.color.text.neutral.disable.rest,
  ),
  neutral2: cssToken('--admiral-color-text-neutral-text1-rest', (theme) => theme.color.text.neutral.text1.rest),
  neutral2Inactive: cssToken('--admiral-color-text-neutral-text2-rest', (theme) => theme.color.text.neutral.text2.rest),
  neutral2Disable: cssToken(
    '--admiral-color-text-neutral-disable-rest',
    (theme) => theme.color.text.neutral.disable.rest,
  ),
  neutral3: cssToken('--admiral-color-text-neutral-inverted-rest', (theme) => theme.color.text.neutral.inverted.rest),
  info: cssToken('--admiral-color-text-neutral-static-white-1', (theme) => theme.color.text.neutral.staticWhite[1]),
  warning: cssToken('--admiral-color-text-neutral-static-white-1', (theme) => theme.color.text.neutral.staticWhite[1]),
  success: cssToken('--admiral-color-text-neutral-static-white-1', (theme) => theme.color.text.neutral.staticWhite[1]),
  error: cssToken('--admiral-color-text-neutral-static-white-1', (theme) => theme.color.text.neutral.staticWhite[1]),
  whiteStatic: cssToken('--admiral-color-text-primary-text1-rest', (theme) => theme.color.text.primary.text1.rest),
};

export const badgeTypography: Record<BadgeSize, CSSObject> = {
  S: textStyles.caption.caption1,
  M: textStyles.body.body2Long,
};

export const StyledBadge = styled.div.attrs<
  StyledBadgeProps & {
    'data-appearance': string;
    'data-dimension': string;
  }
>((props) => ({
  'data-appearance': props.$colorConfig ? 'custom' : props.$appearance,
  'data-dimension': String(props.$dimension),
}))<StyledBadgeProps>`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  min-width: ${({ $dimension }) => BADGE_SIZE_PARAMETERS[$dimension].size}px;
  height: ${({ $dimension }) => BADGE_SIZE_PARAMETERS[$dimension].size}px;
  padding: 0 ${({ $dimension }) => BADGE_SIZE_PARAMETERS[$dimension].horizontalPadding}px;
  border-radius: var(--Round, 1000px);
  background-color: ${(props) =>
    props.$colorConfig?.backgroundColor ?? badgeBackgroundColors[props.$appearance](props)};
  color: ${(props) => props.$colorConfig?.textColor ?? badgeTextColors[props.$appearance](props)};
  white-space: nowrap;
  ${({ $dimension }) => badgeTypography[$dimension]}
`;
