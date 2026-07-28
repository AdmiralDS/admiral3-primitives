import type {
  ComponentPropsWithoutRef,
  ElementType,
  JSXElementConstructor,
  MouseEventHandler,
  ReactElement,
  ReactNode,
  RefAttributes,
} from 'react';

import type { LINK_APPEARANCES, LINK_DIMENSIONS } from './constants';

export type LinkAppearance = (typeof LINK_APPEARANCES)[number];
export type LinkDimension = (typeof LINK_DIMENSIONS)[number];

interface LinkOwnProps {
  /** Цветовой вариант Link. Значение по умолчанию 'colored'. */
  appearance?: LinkAppearance;
  /** Размер Link. Значение по умолчанию 'm'. */
  dimension?: LinkDimension;
  /** Отключает переход и интерактивность Link. */
  disabled?: boolean;
  /** Содержимое компонента. */
  children?: ReactNode;
  /** URL нативной ссылки. */
  href?: string;
  /** Обработчик клика по ссылке. */
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

type LinkAs<C extends ElementType> = C extends keyof React.JSX.IntrinsicElements
  ? C extends 'a'
    ? C
    : never
  : C extends JSXElementConstructor<infer Props>
    ? Props extends object
      ? C
      : never
    : never;

/** Props Link с поддержкой пользовательского компонента, который рендерит HTML-ссылку. */
export type LinkProps<C extends ElementType = 'a'> = LinkOwnProps & {
  /** Компонент, используемый вместо нативного `a`, например Link из библиотеки роутинга. Должен рендерить HTML-ссылку. */
  as?: LinkAs<C>;
} & Omit<ComponentPropsWithoutRef<C>, keyof LinkOwnProps | 'as'>;

/** Полиморфная сигнатура Link. Пользовательский компонент должен пробрасывать ref в HTML-ссылку. */
export type LinkComponent = (<C extends ElementType = 'a'>(
  props: LinkProps<C> & RefAttributes<HTMLAnchorElement>,
) => ReactElement) & {
  displayName?: string;
};

export interface StyledLinkProps {
  $appearance: LinkAppearance;
  $dimension: LinkDimension;
  $disabled: boolean;
}
