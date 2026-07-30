import { forwardRef, useId, useLayoutEffect, useRef } from 'react';

import MinusMIcon from './assets/Minus_M.svg?react';
import MinusSIcon from './assets/Minus_S.svg?react';
import MinusXsIcon from './assets/Minus_XS.svg?react';
import SuccessMIcon from './assets/Success_M.svg?react';
import SuccessSIcon from './assets/Success_S.svg?react';
import SuccessXsIcon from './assets/Success_XS.svg?react';
import {
  Background,
  CheckboxComponentHint,
  CheckboxComponentLabel,
  CheckboxComponentLabelText,
  Input,
  StyledCheckBox,
} from './style';
import type { CheckBoxProps } from './types';
import { refSetter } from '../../utils/refSetter';

const SUCCESS_ICONS = {
  m: SuccessMIcon,
  s: SuccessSIcon,
  xs: SuccessXsIcon,
};

const MINUS_ICONS = {
  m: MinusMIcon,
  s: MinusSIcon,
  xs: MinusXsIcon,
};

/** Поле выбора с поддержкой checked, indeterminate, disabled, readOnly и error состояний. */
export const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(
  (
    {
      dimension = 'm',
      indeterminate = false,
      error = false,
      readOnly = false,
      children,
      extraText,
      disabled = false,
      onChange,
      onClick,
      onKeyDown,
      'aria-describedby': ariaDescribedBy,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      ...props
    },
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const generatedId = useId();
    const StateIcon = indeterminate ? MINUS_ICONS[dimension] : SUCCESS_ICONS[dimension];
    const labelId = `${generatedId}-label`;
    const extraTextId = `${generatedId}-extra-text`;
    const describedBy = [ariaDescribedBy, extraText ? extraTextId : undefined].filter(Boolean).join(' ') || undefined;

    useLayoutEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    return (
      <StyledCheckBox $dimension={dimension} $disabled={disabled} $error={error} $readOnly={readOnly}>
        <Input
          {...props}
          ref={refSetter(inputRef, ref)}
          type="checkbox"
          disabled={disabled}
          readOnly={readOnly}
          data-read-only={readOnly}
          aria-describedby={describedBy}
          aria-invalid={error || undefined}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy ?? (!ariaLabel && children ? labelId : undefined)}
          aria-checked={indeterminate ? 'mixed' : undefined}
          onChange={(event) => {
            if (!readOnly) onChange?.(event);
          }}
          onClick={(event) => {
            onClick?.(event);
            if (readOnly) event.preventDefault();
          }}
          onKeyDown={(event) => {
            onKeyDown?.(event);
            if (readOnly && event.key === ' ') event.preventDefault();
          }}
        />
        <Background aria-hidden="true">
          <StateIcon data-icon={indeterminate ? 'minus' : 'success'} focusable="false" />
        </Background>
        {children && (
          <CheckboxComponentLabel $dimension={dimension} $disabled={disabled}>
            <CheckboxComponentLabelText id={labelId}>{children}</CheckboxComponentLabelText>
            {extraText && (
              <CheckboxComponentHint id={extraTextId} $dimension={dimension}>
                {extraText}
              </CheckboxComponentHint>
            )}
          </CheckboxComponentLabel>
        )}
      </StyledCheckBox>
    );
  },
);

CheckBox.displayName = 'CheckBox';
