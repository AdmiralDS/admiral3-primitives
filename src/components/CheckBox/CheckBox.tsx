import { forwardRef, useId, useLayoutEffect, useRef } from 'react';

// Иконки отличаются от стандартных из пакета по path
// поэтому для этого компонента выгружены отдельно по размерам
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
      className,
      style,
      onChange,
      onClick,
      ...props
    },
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const generatedId = useId();
    const StateIcon = indeterminate ? MINUS_ICONS[dimension] : SUCCESS_ICONS[dimension];
    const labelId = `${generatedId}-label`;
    const extraTextId = `${generatedId}-extra-text`;

    const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
      if (readOnly) {
        event.preventDefault();
      }

      onClick?.(event);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!readOnly) {
        onChange?.(event);
      }

      event.currentTarget.indeterminate = indeterminate;
    };

    useLayoutEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = indeterminate;
      }
    });

    return (
      <StyledCheckBox
        $dimension={dimension}
        $disabled={disabled}
        $error={error}
        $readOnly={readOnly}
        className={className}
        style={style}
      >
        <Input
          aria-describedby={children && extraText ? extraTextId : undefined}
          aria-invalid={error || undefined}
          aria-labelledby={!props['aria-label'] && children ? labelId : undefined}
          aria-checked={indeterminate ? 'mixed' : undefined}
          aria-readonly={readOnly || undefined}
          disabled={disabled}
          readOnly={readOnly}
          {...props}
          ref={refSetter(inputRef, ref)}
          type="checkbox"
          data-read-only={readOnly ? '' : undefined}
          onChange={handleChange}
          onClick={handleClick}
        />
        <Background aria-hidden="true">
          <StateIcon data-icon={indeterminate ? 'minus' : 'success'} focusable="false" />
        </Background>
        {children && (
          <CheckboxComponentLabel $dimension={dimension} $disabled={disabled}>
            <CheckboxComponentLabelText id={labelId}>{children}</CheckboxComponentLabelText>
            {extraText && (
              <CheckboxComponentHint id={extraTextId} $dimension={dimension} $disabled={disabled}>
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
