import { css } from 'styled-components';

import { cssToken } from '../../../theme/cssToken';

export const flatAppearanceMixin = css`
  background-color: ${cssToken(
    '--admiral-color-base-primary-base3-rest',
    (theme) => theme.color.base.primary.base3.rest,
  )};
  color: ${cssToken('--admiral-color-text-primary-text1-rest', (theme) => theme.color.text.primary.text1.rest)};
  border: 1px solid
    ${cssToken('--admiral-color-base-primary-base3-rest', (theme) => theme.color.base.primary.base3.rest)};
  &&& *[fill^='#'] {
    fill: ${cssToken('--admiral-color-text-primary-text1-rest', (theme) => theme.color.text.primary.text1.rest)};
  }

  &&&:hover {
    background-color: ${cssToken(
      '--admiral-color-base-primary-base3-hover',
      (theme) => theme.color.base.primary.base3.hover,
    )};
    border-color: ${cssToken(
      '--admiral-color-base-primary-base3-hover',
      (theme) => theme.color.base.primary.base3.hover,
    )};
  }

  &&&:active {
    background-color: ${cssToken(
      '--admiral-color-base-primary-base3-press',
      (theme) => theme.color.base.primary.base3.press,
    )};
    border-color: ${cssToken(
      '--admiral-color-base-primary-base3-press',
      (theme) => theme.color.base.primary.base3.press,
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
