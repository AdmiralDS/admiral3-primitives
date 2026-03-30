import styled from 'styled-components';

import { TEMPLATE_NAME_ROOT_DATA_ATTRIBUTE } from './constants';

export const StyledTemplateName = styled.div.attrs({
  [TEMPLATE_NAME_ROOT_DATA_ATTRIBUTE]: 'true',
})`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
`;
