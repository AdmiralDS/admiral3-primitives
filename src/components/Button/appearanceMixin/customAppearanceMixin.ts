import { css } from 'styled-components';

import { getToken } from './colors';
import type { ButtonColorMode, ButtonAppearance, ButtonColorConfig } from '../types';

export const customAppearanceMixin = css<{
  $colorMode: ButtonColorMode;
  $appearance: ButtonAppearance;
  $colorConfig?: ButtonColorConfig;
  $skeleton?: boolean;
}>`
  background-color: ${(p) =>
    p.$colorMode === 'colored' && p.$colorConfig?.backgroundColor?.rest
      ? p.$colorConfig.backgroundColor.rest
      : getToken(p.$appearance)[p.$colorMode].background};

  color: ${(p) =>
    p.$colorMode === 'colored' && p.$colorConfig?.textColor
      ? p.$colorConfig.textColor
      : getToken(p.$appearance)[p.$colorMode].color};

  ${(p) =>
    p.$colorMode === 'colored' && p.$colorConfig?.borderColor
      ? css`
          box-shadow: inset 0 0 0 1px ${p.$colorConfig.borderColor};
        `
      : 'border' in getToken(p.$appearance)[p.$colorMode]
        ? css`
            box-shadow: inset 0 0 0 1px ${getToken(p.$appearance)[p.$colorMode].border};
          `
        : ''}
  ${(p) => (p.$skeleton ? 'box-shadow: none;' : '')}

  &&& *[fill^='#'] {
    fill: ${(p) =>
      p.$colorMode === 'colored' && p.$colorConfig?.textColor
        ? p.$colorConfig.textColor
        : getToken(p.$appearance)[p.$colorMode].color};
  }

  &&&:hover {
    background-color: ${(p) =>
      p.$colorMode === 'colored' && p.$colorConfig?.backgroundColor?.hover
        ? p.$colorConfig.backgroundColor.hover
        : getToken(p.$appearance)[p.$colorMode].backgroundHover};
  }

  &&&:active {
    background-color: ${(p) =>
      p.$colorMode === 'colored' && p.$colorConfig?.backgroundColor?.press
        ? p.$colorConfig.backgroundColor.press
        : getToken(p.$appearance)[p.$colorMode].backgroundPress};
  }

  &&&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: ${(p) =>
      p.$colorMode === 'colored' && p.$colorConfig?.backgroundColorDisabled
        ? p.$colorConfig.backgroundColorDisabled
        : getToken(p.$appearance)[p.$colorMode].backgroundDisabled};
    color: ${(p) =>
      p.$colorMode === 'colored' && p.$colorConfig?.textColorDisabled
        ? p.$colorConfig.textColorDisabled
        : getToken(p.$appearance)[p.$colorMode].colorDisabled};
    ${(p) =>
      p.$colorMode === 'colored' && p.$colorConfig?.borderColorDisabled
        ? css`
            box-shadow: inset 0 0 0 1px ${p.$colorConfig.borderColorDisabled};
          `
        : 'borderDisabled' in getToken(p.$appearance)[p.$colorMode]
          ? css`
              box-shadow: inset 0 0 0 1px ${getToken(p.$appearance)[p.$colorMode].borderDisabled};
            `
          : ''}
    &&& *[fill^='#'] {
      fill: ${(p) =>
        p.$colorMode === 'colored' && p.$colorConfig?.textColorDisabled
          ? p.$colorConfig.textColorDisabled
          : getToken(p.$appearance)[p.$colorMode].colorDisabled};
    }
  }
`;
