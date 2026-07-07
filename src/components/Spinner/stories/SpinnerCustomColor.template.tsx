import { Spinner, type SpinnerProps } from '@admiral-ds/admiral3-primitives';

import { StoryDemoContainer, StoryDemoDescription } from '../../stories/StoryContainers';

export const SpinnerCustomColorsTemplate = (args: SpinnerProps) => {
  return (
    <StoryDemoContainer $direction="column" $gap="16px">
      <StoryDemoDescription $textAlign="center">
        Пользовательские цвета задаются объектом в <code>appearance</code>. Для Spinner передавайте{' '}
        <code>backgroundColor</code> и выбирайте его так, чтобы компонент оставался видимым на выбранном фоне во всех
        темах.
      </StoryDemoDescription>
      <Spinner
        {...args}
        appearance={{
          backgroundColor: 'var(--admiral-color-purple-base-1-rest)',
        }}
      />
    </StoryDemoContainer>
  );
};
