import { css } from 'styled-components';

import { cssToken } from '../../theme/cssToken';

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

export const ghostAppearanceMixin = css`
  background-color: ${cssToken(
    '--admiral-color-base-neutral-invisible-rest',
    (theme) => theme.color.base.neutral.invisible.rest,
  )};
  color: ${cssToken('--admiral-color-text-primary-text1-rest', (theme) => theme.color.text.primary.text1.rest)};
  border: 1px solid
    ${cssToken('--admiral-color-base-neutral-invisible-rest', (theme) => theme.color.base.neutral.invisible.rest)};
  &&& *[fill^='#'] {
    fill: ${cssToken('--admiral-color-text-primary-text1-rest', (theme) => theme.color.text.primary.text1.rest)};
  }

  &&&:hover {
    background-color: ${cssToken(
      '--admiral-color-base-neutral-invisible-hover',
      (theme) => theme.color.base.neutral.invisible.hover,
    )};
    border-color: ${cssToken(
      '--admiral-color-base-neutral-invisible-hover',
      (theme) => theme.color.base.neutral.invisible.hover,
    )};
  }

  &&&:active {
    background-color: ${cssToken(
      '--admiral-color-base-neutral-invisible-press',
      (theme) => theme.color.base.neutral.invisible.press,
    )};
    border-color: ${cssToken(
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
      '--admiral-color-base-neutral-invisible-rest',
      (theme) => theme.color.base.neutral.invisible.rest,
    )};
    &&& *[fill^='#'] {
      fill: ${cssToken('--admiral-color-text-neutral-disable-rest', (theme) => theme.color.text.neutral.disable.rest)};
    }
  }
`;

/** Уточнить у дизайнера */
export const focusVisibleStyle = css`
  &:focus-visible {
    outline-offset: 2px;
    outline: ${cssToken(
      '--admiral-color-stroke-primary-stroke1-rest',
      (theme) => theme.color.stroke.primary.stroke1.rest,
    )};
  }
`;

export const buttonAppearanceMixin = css`
  &[data-appearance~='solid'] {
    ${solidAppearanceMixin}
  }
  &[data-appearance~='outline'] {
    ${outlineAppearanceMixin}
  }
  &[data-appearance~='flat'] {
    ${flatAppearanceMixin}
  }
  &[data-appearance~='ghost']:not(.button-group > button) {
    ${ghostAppearanceMixin}
  }

  ${focusVisibleStyle}
`;
