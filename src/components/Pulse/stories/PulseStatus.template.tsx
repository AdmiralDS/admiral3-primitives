import styled from 'styled-components';

import { Pulse, type PulseProps } from '@admiral-ds/admiral3-primitives';

import { StoryDemoContainer, StoryDemoDescription } from '../../stories/StoryContainers';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const PulseStatusTemplate = (props: PulseProps) => {
  return (
    <>
      <StoryDemoContainer $gap="16px" $direction="column">
        <StoryDemoDescription>
          Компонент выполнен в одном цвете (и основание и волна) и имеет четыре цвета-статуса: info (по умолчанию),
          danger, success, warning. Пользователь может задать свой кастомный цвет из палитры библиотеки. Для того, чтобы
          задать кастомный статус в параметр status нужно передать объект со свойством background и значением кастомного
          цвета.
        </StoryDemoDescription>
        <Wrapper>
          <Pulse {...props} status="info" />
          <Pulse {...props} status="danger" />
          <Pulse {...props} status="success" />
          <Pulse {...props} status="warning" />
          <Pulse {...props} status={{ background: '#8A3FFC' }} />
        </Wrapper>
      </StoryDemoContainer>
    </>
  );
};
