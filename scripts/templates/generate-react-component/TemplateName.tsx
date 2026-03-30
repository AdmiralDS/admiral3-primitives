import { forwardRef } from 'react';

import { StyledTemplateName } from './style';
import type { TemplateNameProps } from './types';

/** TemplateName primitive component. */
export const TemplateName = forwardRef<HTMLDivElement, TemplateNameProps>(({ children, ...props }, ref) => {
  return (
    <StyledTemplateName ref={ref} {...props}>
      {children}
    </StyledTemplateName>
  );
});

TemplateName.displayName = 'TemplateName';
