import styled from 'styled-components';

import { Button, type ButtonProps } from '@admiral-ds/admiral3-primitives';

import { StoryDemoContainer, StoryDemoDescription } from '../../stories/StoryContainers';

const Appearance = styled.div`
  display: flex;
  gap: 16px;
`;

export const ButtonCustomColorTemplate = (args: Omit<ButtonProps, 'appearance' | 'colorMode'>) => {
  return (
    <StoryDemoContainer $direction="column" $gap="16px">
      <StoryDemoDescription>
        По умолчанию Button окрашивается в соответствии с параметром <code>appearance</code>, однако с помощью настройки{' '}
        <code>colorConfig</code> можно частично или полностью изменить цветовое окрашивание Button, кроме режимов{' '}
        <code>colorMode='neutral'</code> и <code>colorMode='staticWhite'</code>. Когда кнопка находится в данных
        режимах, она не подлежит кастомизации.
      </StoryDemoDescription>
      <Appearance>
        <Button
          {...args}
          colorConfig={{
            backgroundColor: {
              rest: 'var(--admiral-color-base-status-error-base1-rest)',
              hover: 'var(--admiral-color-base-status-error-base1-hover)',
              press: 'var(--admiral-color-base-status-error-base1-press)',
            },
          }}
        />
        <Button
          {...args}
          appearance="flat"
          colorConfig={{
            backgroundColor: {
              rest: 'var(--admiral-color-base-status-error-base3-rest)',
              hover: 'var(--admiral-color-base-status-error-base3-hover)',
              press: 'var(--admiral-color-base-status-error-base3-press)',
            },
            textColor: 'var(--admiral-color-text-status-error-text1-rest)',
          }}
        />
        <Button
          {...args}
          appearance="outline"
          colorConfig={{
            borderColor: 'var(--admiral-color-stroke-status-error-stroke1-rest)',
            textColor: 'var(--admiral-color-text-status-error-text1-rest)',
          }}
        />
        <Button
          {...args}
          appearance="ghost"
          colorConfig={{
            textColor: 'var(--admiral-color-text-status-error-text1-rest)',
          }}
        />
      </Appearance>
      <Appearance>
        <Button
          {...args}
          colorConfig={{
            backgroundColor: {
              rest: 'var(--admiral-color-base-status-success-base1-rest)',
              hover: 'var(--admiral-color-base-status-success-base1-hover)',
              press: 'var(--admiral-color-base-status-success-base1-press)',
            },
          }}
        />
        <Button
          {...args}
          appearance="flat"
          colorConfig={{
            backgroundColor: {
              rest: 'var(--admiral-color-base-status-success-base3-rest)',
              hover: 'var(--admiral-color-base-status-success-base3-hover)',
              press: 'var(--admiral-color-base-status-success-base3-press)',
            },
            textColor: 'var(--admiral-color-text-status-success-text1-rest)',
          }}
        />
        <Button
          {...args}
          appearance="outline"
          colorConfig={{
            borderColor: 'var(--admiral-color-stroke-status-success-stroke1-rest)',
            textColor: 'var(--admiral-color-text-status-success-text1-rest)',
          }}
        />
        <Button
          {...args}
          appearance="ghost"
          colorConfig={{
            textColor: 'var(--admiral-color-text-status-success-text1-rest)',
          }}
        />
      </Appearance>
    </StoryDemoContainer>
  );
};
