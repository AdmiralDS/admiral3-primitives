import { textStyles } from '@admiral-ds/admiral3-tokens';
import styled, { type CSSObject } from 'styled-components';

// import { BUTTON_ROOT_DATA_ATTRIBUTE } from './constants';
import { buttonAppearanceMixin } from './appearanceMixin/index';
import type { ButtonDimension, StyledButtonProps } from './types';
import { cssToken } from '../../theme/cssToken';

const buttonTypography: Record<ButtonDimension, CSSObject> = {
  l: textStyles.button.button1,
  m: textStyles.button.button1,
  s: textStyles.button.button2,
  xs: textStyles.button.button3,
};

const buttonGap: Record<ButtonDimension, number> = {
  l: 8,
  m: 8,
  s: 6,
  xs: 6,
};

const buttonPadding: Record<ButtonDimension, string> = {
  l: '11px 19px',
  m: '7px 15px',
  s: '5px 11px',
  xs: '3px 7px',
};

// TODO такое ощущение, что styled.attrs применяет Partial<StyledButtonProps>,
// так как ts не подсвечивает ошибку, если не передан обязательный параметр
// Подумать, в чем дело, может data-атрибуты вынести на уровень компонентов?

export const StyledButton = styled.button.attrs<
  StyledButtonProps & {
    'data-appearance': string;
    'data-dimension': string;
  }
>((props) => ({
  'data-appearance': props.$colorConfig ? 'custom' : props.$appearance,
  'data-dimension': String(props.$dimension),
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

  &:focus-visible {
    outline-offset: 2px;
    outline: 2px solid
      ${cssToken('--admiral-color-stroke-primary-stroke1-rest', (theme) => theme.color.stroke.primary.stroke1.rest)};
  }
`;

/** Вопросы:
 * 7) Пример с иконками (нужны ли отдельные параметры)
 * 10) квадратное отображение
 * 11) whiteStatic/colored/neutral
 * 12) Custom color config
 */
