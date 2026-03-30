import { themes } from '@admiral-ds/admiral3-tokens';
import type { BuiltTheme } from '@admiral-ds/admiral3-tokens';
import type { ExecutionContext } from 'styled-components';

export const cssToken = (name: string, fallback: (theme: BuiltTheme) => string) => {
  return ({ theme }: ExecutionContext) => {
    try {
      return `var(${name}, ${fallback(theme as BuiltTheme)})`;
    } catch {
      return `var(${name}, ${fallback(themes.light)})`;
    }
  };
};

export type CssToken = ReturnType<typeof cssToken>;
