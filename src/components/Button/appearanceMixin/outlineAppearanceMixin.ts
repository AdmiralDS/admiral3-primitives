import { css } from 'styled-components';

import { cssToken } from '../../../theme/cssToken';

export const outlineAppearanceMixin = css`
  background-color: ${cssToken(
    '--admiral-color-base-neutral-invisible-rest',
    (theme) => theme.color.base.neutral.invisible.rest,
  )};
  color: ${cssToken('--admiral-color-text-primary-text1-rest', (theme) => theme.color.text.primary.text1.rest)};
  border: 1px solid
    ${cssToken('--admiral-color-stroke-primary-stroke1-rest', (theme) => theme.color.stroke.primary.stroke1.rest)};
  &&& *[fill^='#'] {
    fill: ${cssToken('--admiral-color-text-primary-text1-rest', (theme) => theme.color.text.primary.text1.rest)};
  }

  &&&:hover {
    background-color: ${cssToken(
      '--admiral-color-base-neutral-invisible-hover',
      (theme) => theme.color.base.neutral.invisible.hover,
    )};
  }

  &&&:active {
    background-color: ${cssToken(
      '--admiral-color-base-neutral-invisible-press',
      (theme) => theme.color.base.neutral.invisible.press,
    )};
  }

  &&&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: ${cssToken(
      '--admiral-color-base-neutral-invisible-rest',
      (theme) => theme.color.base.neutral.invisible.rest,
    )};
    color: ${cssToken('--admiral-color-text-neutral-disable-rest', (theme) => theme.color.text.neutral.disable.rest)};
    border-color: ${cssToken(
      '--admiral-color-stroke-neutral-stroke2-rest',
      (theme) => theme.color.stroke.neutral.stroke2.rest,
    )};
    &&& *[fill^='#'] {
      fill: ${cssToken('--admiral-color-text-neutral-disable-rest', (theme) => theme.color.text.neutral.disable.rest)};
    }
  }
`;
