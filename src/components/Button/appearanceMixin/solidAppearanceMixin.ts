import { css } from 'styled-components';

import { cssToken } from '../../../theme/cssToken';

export const solidAppearanceMixin = css`
  background-color: ${cssToken(
    '--admiral-color-base-primary-base1-rest',
    (theme) => theme.color.base.primary.base1.rest,
  )};
  color: ${cssToken('--admiral-color-text-neutral-static-white-1', (theme) => theme.color.text.neutral.staticWhite[1])};
  border: 1px solid
    ${cssToken('--admiral-color-base-primary-base1-rest', (theme) => theme.color.base.primary.base1.rest)};
  &&& *[fill^='#'] {
    fill: ${cssToken(
      '--admiral-color-text-neutral-static-white-1',
      (theme) => theme.color.text.neutral.staticWhite[1],
    )};
  }

  &&&:hover {
    background-color: ${cssToken(
      '--admiral-color-base-primary-base1-hover',
      (theme) => theme.color.base.primary.base1.hover,
    )};
    border-color: ${cssToken(
      '--admiral-color-base-primary-base1-hover',
      (theme) => theme.color.base.primary.base1.hover,
    )};
  }

  &&&:active {
    background-color: ${cssToken(
      '--admiral-color-base-primary-base1-press',
      (theme) => theme.color.base.primary.base1.press,
    )};
    border-color: ${cssToken(
      '--admiral-color-base-primary-base1-press',
      (theme) => theme.color.base.primary.base1.press,
    )};
  }

  &&&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: ${cssToken(
      '--admiral-color-base-neutral-opacity-rest',
      (theme) => theme.color.base.neutral.opacity.rest,
    )};
    color: ${cssToken('--admiral-color-text-neutral-disable-rest', (theme) => theme.color.text.neutral.disable.rest)};
    border-color: ${cssToken(
      '--admiral-color-base-neutral-opacity-rest',
      (theme) => theme.color.base.neutral.opacity.rest,
    )};
    &&& *[fill^='#'] {
      fill: ${cssToken('--admiral-color-text-neutral-disable-rest', (theme) => theme.color.text.neutral.disable.rest)};
    }
  }
`;
