import { ExampleComponent } from '@admiral-ds/admiral3-primitives';

import type { ExampleComponentProps } from '../ExampleComponent';

export const ExampleComponentDirtyTemplate = (args: ExampleComponentProps) => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '12px',
        alignItems: 'center',
        padding: '16px',
        border: '1px dashed #9aa9bc',
      }}
    >
      <ExampleComponent {...args} />
      <ExampleComponent appearance="secondary" type="button">
        Internal only
      </ExampleComponent>
    </div>
  );
};
