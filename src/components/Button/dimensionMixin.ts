import { css } from 'styled-components';

import {
  BUTTON_DIMENSION_PARAMETERS,
  BUTTON_ICON_DIMENSION_PARAMETERS,
  BUTTON_PADDING,
  SQUARE_BUTTON_PADDING,
  BUTTON_TYPOGRAPHY,
} from './constants';

const defaultDimensionMixin = css<{ $square?: boolean }>`
  height: ${BUTTON_DIMENSION_PARAMETERS['m']}px;
  ${(p) => (p.$square ? `width: ${BUTTON_DIMENSION_PARAMETERS['m']}px;` : '')}
  padding: ${(p) => (p.$square ? SQUARE_BUTTON_PADDING['m'] : BUTTON_PADDING['m'])};
  & svg {
    width: ${BUTTON_ICON_DIMENSION_PARAMETERS['m']}px;
    height: ${BUTTON_ICON_DIMENSION_PARAMETERS['m']}px;
  }
  ${BUTTON_TYPOGRAPHY['m']}
`;

export const buttonDimensionMixin = css<{ $square?: boolean }>`
  ${defaultDimensionMixin}

  &[data-dimension='l'] {
    height: ${BUTTON_DIMENSION_PARAMETERS['l']}px;
    ${(p) => (p.$square ? `width: ${BUTTON_DIMENSION_PARAMETERS['l']}px;` : '')}
    padding: ${(p) => (p.$square ? SQUARE_BUTTON_PADDING['l'] : BUTTON_PADDING['l'])};
    & svg {
      width: ${BUTTON_ICON_DIMENSION_PARAMETERS['l']}px;
      height: ${BUTTON_ICON_DIMENSION_PARAMETERS['l']}px;
    }
    ${BUTTON_TYPOGRAPHY['l']}
  }

  &[data-dimension='m'] {
    ${defaultDimensionMixin}
  }

  &[data-dimension='s'] {
    height: ${BUTTON_DIMENSION_PARAMETERS['s']}px;
    ${(p) => (p.$square ? `width: ${BUTTON_DIMENSION_PARAMETERS['s']}px;` : '')}
    padding: ${(p) => (p.$square ? SQUARE_BUTTON_PADDING['s'] : BUTTON_PADDING['s'])};
    & svg {
      width: ${BUTTON_ICON_DIMENSION_PARAMETERS['s']}px;
      height: ${BUTTON_ICON_DIMENSION_PARAMETERS['s']}px;
    }
    ${BUTTON_TYPOGRAPHY['s']}
  }

  &[data-dimension='xs'] {
    height: ${BUTTON_DIMENSION_PARAMETERS['xs']}px;
    ${(p) => (p.$square ? `width: ${BUTTON_DIMENSION_PARAMETERS['xs']}px;` : '')}
    padding: ${(p) => (p.$square ? SQUARE_BUTTON_PADDING['xs'] : BUTTON_PADDING['xs'])};
    & svg {
      width: ${BUTTON_ICON_DIMENSION_PARAMETERS['xs']}px;
      height: ${BUTTON_ICON_DIMENSION_PARAMETERS['xs']}px;
    }
    ${BUTTON_TYPOGRAPHY['xs']}
  }
`;
