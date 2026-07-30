import { textStyles } from '@admiral-ds/admiral3-tokens';
import styled, { css, type CSSObject } from 'styled-components';

import { CHECK_BOX_DIMENSION_PARAMETERS, CHECK_BOX_ROOT_DATA_ATTRIBUTE } from './constants';
import type { CheckBoxDimension, StyledCheckBoxProps } from './types';
import { cssToken } from '../../theme/cssToken';

const typography: Record<CheckBoxDimension, CSSObject> = {
  m: textStyles.body.body1Short,
  s: textStyles.body.body2Short,
  xs: textStyles.caption.caption1,
};

export const Input = styled.input`
  position: absolute;
  left: 0;
  z-index: 1;
  margin: 0;
  padding: 0;
  border: 0;
  opacity: 0;
  cursor: inherit;
`;

export const Background = styled.span`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  border: 1px solid ${cssToken('--admiral-color-neutral-stroke-2-rest', (theme) => theme.color.neutral.stroke._2.rest)};
  border-radius: ${cssToken('--admiral-radius-by-base-4-small', (theme) => theme.radius.byBase['4'].small)};
  background: ${cssToken('--admiral-color-neutral-base-1-rest', (theme) => theme.color.neutral.base._1.rest)};
  color: ${cssToken('--admiral-color-neutral-text-static-white-1', (theme) => theme.color.neutral.text.staticWhite._1)};

  > svg {
    display: none;
    flex: 0 0 auto;
    overflow: visible;
  }
`;

export const CheckboxComponentLabel = styled.div<{
  $dimension: CheckBoxDimension;
  $disabled: boolean;
}>`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  padding-top: ${({ $dimension }) =>
    (CHECK_BOX_DIMENSION_PARAMETERS[$dimension].containerHeight -
      CHECK_BOX_DIMENSION_PARAMETERS[$dimension].controlSize) /
    2}px;
  color: ${({ $disabled }) =>
    $disabled
      ? cssToken('--admiral-color-neutral-text-disable-rest', (theme) => theme.color.neutral.text.disable.rest)
      : cssToken('--admiral-color-neutral-text-1-rest', (theme) => theme.color.neutral.text._1.rest)};
  ${({ $dimension }) => typography[$dimension]}
`;

export const CheckboxComponentLabelText = styled.span``;

export const CheckboxComponentHint = styled.div<{
  $dimension: CheckBoxDimension;
}>`
  margin-top: 6px;
  color: ${cssToken('--admiral-color-neutral-text-2-rest', (theme) => theme.color.neutral.text._2.rest)};
  ${({ $dimension }) => typography[$dimension]}
`;

export const StyledCheckBox = styled.label.attrs<
  StyledCheckBoxProps & {
    'data-dimension': string;
  }
>((props) => ({
  [CHECK_BOX_ROOT_DATA_ATTRIBUTE]: 'true',
  'data-dimension': props.$dimension,
}))<StyledCheckBoxProps>`
  box-sizing: border-box;
  position: relative;
  display: inline-flex;
  align-items: flex-start;
  min-height: ${({ $dimension }) => CHECK_BOX_DIMENSION_PARAMETERS[$dimension].containerHeight}px;
  vertical-align: middle;
  cursor: ${({ $disabled, $readOnly }) => ($disabled ? 'not-allowed' : $readOnly ? 'default' : 'pointer')};
  user-select: none;

  ${Input} {
    top: ${({ $dimension }) =>
      (CHECK_BOX_DIMENSION_PARAMETERS[$dimension].containerHeight -
        CHECK_BOX_DIMENSION_PARAMETERS[$dimension].controlSize) /
      2}px;
    width: ${({ $dimension }) => CHECK_BOX_DIMENSION_PARAMETERS[$dimension].controlSize}px;
    height: ${({ $dimension }) => CHECK_BOX_DIMENSION_PARAMETERS[$dimension].controlSize}px;
  }

  ${Background} {
    margin-top: ${({ $dimension }) =>
      (CHECK_BOX_DIMENSION_PARAMETERS[$dimension].containerHeight -
        CHECK_BOX_DIMENSION_PARAMETERS[$dimension].controlSize) /
      2}px;
    width: ${({ $dimension }) => CHECK_BOX_DIMENSION_PARAMETERS[$dimension].controlSize}px;
    height: ${({ $dimension }) => CHECK_BOX_DIMENSION_PARAMETERS[$dimension].controlSize}px;
  }

  ${({ $error }) =>
    $error &&
    css`
      ${Input}:not(:checked) + ${Background} {
        border-color: ${cssToken('--admiral-color-error-stroke-1-rest', (theme) => theme.color.error.stroke._1.rest)};
      }
    `}

  ${Input}:checked + ${Background},
  ${Input}:indeterminate + ${Background} {
    border-color: transparent;
    background: ${cssToken('--admiral-color-primary-base-1-rest', (theme) => theme.color.primary.base._1.rest)};
  }

  ${Input}:checked + ${Background} > svg,
  ${Input}:indeterminate + ${Background} > svg {
    display: block;
  }

  ${Input}:not(:disabled):not([data-read-only]):hover + ${Background} {
    background: ${cssToken('--admiral-color-neutral-base-1-hover', (theme) => theme.color.neutral.base._1.hover)};
  }

  ${Input}:not(:disabled):not([data-read-only]):checked:hover + ${Background},
  ${Input}:not(:disabled):not([data-read-only]):indeterminate:hover + ${Background} {
    background: ${cssToken('--admiral-color-primary-base-1-hover', (theme) => theme.color.primary.base._1.hover)};
  }

  ${Input}:not(:disabled):not([data-read-only]):active + ${Background} {
    background: ${cssToken('--admiral-color-neutral-base-1-press', (theme) => theme.color.neutral.base._1.press)};
  }

  ${Input}:not(:disabled):not([data-read-only]):checked:active + ${Background},
  ${Input}:not(:disabled):not([data-read-only]):indeterminate:active + ${Background} {
    background: ${cssToken('--admiral-color-primary-base-1-press', (theme) => theme.color.primary.base._1.press)};
  }

  ${Input}:focus-visible + ${Background} {
    outline: 2px solid
      ${cssToken('--admiral-color-primary-stroke-1-rest', (theme) => theme.color.primary.stroke._1.rest)};
    outline-offset: 2px;
  }

  ${Input}:disabled + ${Background} {
    border-color: transparent;
    background: ${cssToken(
      '--admiral-color-neutral-base-opacity-rest',
      (theme) => theme.color.neutral.base.opacity.rest,
    )};
  }

  ${Input}:disabled:checked + ${Background},
  ${Input}:disabled:indeterminate + ${Background},
  ${Input}[data-read-only]:checked + ${Background},
  ${Input}[data-read-only]:indeterminate + ${Background} {
    background: ${cssToken('--admiral-color-primary-base-1-disable', (theme) => theme.color.primary.base._1.disable)};
  }
`;
