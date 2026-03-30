import type { ButtonHTMLAttributes, ReactNode } from 'react';

import { StyledButton } from './style';
import type { ExampleComponentAppearance } from './types';

/** Свойства компонента ExampleComponent. */
export interface ExampleComponentProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Контент, который отображается внутри кнопки. */
  children: ReactNode;
  /** Визуальный вариант кнопки. */
  appearance?: ExampleComponentAppearance;
}

export const ExampleComponent = ({
  children,
  appearance = 'primary',
  type = 'button',
  ...buttonAttributes
}: ExampleComponentProps) => {
  return (
    <StyledButton $appearance={appearance} type={type} {...buttonAttributes}>
      {children}
    </StyledButton>
  );
};
