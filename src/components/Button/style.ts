import { textStyles } from '@admiral-ds/admiral3-tokens';
import styled, { type CSSObject } from 'styled-components';

// import { BUTTON_ROOT_DATA_ATTRIBUTE } from './constants';
import { buttonAppearanceMixin } from './appearanceMixins';
import type { ButtonDimension, StyledButtonProps } from './types';
import { cssToken } from '../../theme/cssToken';

const buttonTypography: Record<ButtonDimension, CSSObject> = {
  L: textStyles.button.button1,
  M: textStyles.button.button1,
  S: textStyles.button.button2,
  XS: textStyles.button.button3,
};

const buttonGap: Record<ButtonDimension, number> = {
  L: 8,
  M: 8,
  S: 6,
  XS: 6,
};

const buttonPadding: Record<ButtonDimension, string> = {
  L: '11px 19px',
  M: '7px 15px',
  S: '5px 11px',
  XS: '3px 7px',
};

export const StyledButton = styled.button.attrs<
  StyledButtonProps & {
    'data-appearance': string;
    'data-dimension': string;
  }
>((props) => ({
  'data-appearance': props.$appearance,
  'data-dimension': props.$dimension,
}))<StyledButtonProps>`
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  gap: ${({ $dimension }) => buttonGap[$dimension]}px;
  padding: ${({ $dimension }) => buttonPadding[$dimension]};
  ${({ $dimension }) => buttonTypography[$dimension]}
  white-space: nowrap;
  appearance: none;
  border: none;
  border-radius: ${cssToken('--admiral-radius-by-base-4-medium', (theme) => theme.radius.byBase['4'].medium)};
  vertical-align: middle;
  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};
  ${buttonAppearanceMixin}
`;

/** Вопросы:
 * 7) Пример с иконками (нужны ли отдельные параметры)
 * 10) квадратное отображение
 * 11) whiteStatic/colored/neutral
 * 12) Custom color config
 */
