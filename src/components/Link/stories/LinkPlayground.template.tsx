import { ServiceShareOutline } from '@admiral-ds/admiral3-icons';

import { Link, type LinkProps } from '@admiral-ds/admiral3-primitives';

export const LinkPlaygroundTemplate = (args: LinkProps) => {
  return (
    <Link {...args}>
      {args.children}
      <ServiceShareOutline />
    </Link>
  );
};
