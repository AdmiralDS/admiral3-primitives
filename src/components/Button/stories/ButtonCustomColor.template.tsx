import { Button, type ButtonProps } from '@admiral-ds/admiral3-primitives';

import { StoryDemoContainer } from '../../stories/StoryContainers';

export const ButtonCustomColorTemplate = (args: ButtonProps) => {
  return (
    <StoryDemoContainer>
      {/* <Button
        {...args}
        colorConfig={{
          backgroundColor: {
            rest: 'var(--admiral-color-base-status-error-base1-rest)',
            hover: 'var(--admiral-color-base-status-error-base1-hover)',
            press: 'var(--admiral-color-base-status-error-base1-press)',
          },
        }}
      /> */}
      <Button
        {...args}
        appearance="outline"
        colorConfig={{
          borderColor: 'var(--admiral-color-stroke-status-success-stroke1-rest)',
          textColor: 'var(--admiral-color-text-status-success-text1-rest)',
        }}
      />
    </StoryDemoContainer>
  );
};
