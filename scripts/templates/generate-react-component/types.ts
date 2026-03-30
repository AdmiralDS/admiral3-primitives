import type { HTMLAttributes, ReactNode } from 'react';

export interface TemplateNameProps extends HTMLAttributes<HTMLDivElement> {
  /** Содержимое компонента. */
  children?: ReactNode;
}
