import { useEffect, useState } from 'react';

import { DocsContainer } from '@storybook/addon-docs/blocks';
import type { DocsContainerProps } from '@storybook/addon-docs/blocks';
import { GLOBALS_UPDATED } from 'storybook/internal/core-events';
import { themes } from 'storybook/theming';

import {
  getPreferredSimpleTheme,
  isStorybookAdmiralTheme,
  resolveStorybookShellTheme,
  type StorybookAdmiralTheme,
} from './storybookThemes';

const getInitialTheme = (context: DocsContainerProps['context']): StorybookAdmiralTheme => {
  try {
    const story = context.storyById();
    const theme = context.getStoryContext(story).globals.theme;

    return isStorybookAdmiralTheme(theme) ? theme : 'system';
  } catch {
    return 'system';
  }
};

export const DocsThemeContainer = (props: DocsContainerProps) => {
  const [selectedTheme, setSelectedTheme] = useState<StorybookAdmiralTheme>(() => getInitialTheme(props.context));
  const [preferredTheme, setPreferredTheme] = useState(getPreferredSimpleTheme);

  useEffect(() => {
    const handleGlobalsUpdated = ({ globals }: { globals: { theme?: unknown } }) => {
      setSelectedTheme(isStorybookAdmiralTheme(globals.theme) ? globals.theme : 'system');
    };

    props.context.channel.on(GLOBALS_UPDATED, handleGlobalsUpdated);
    return () => props.context.channel.off(GLOBALS_UPDATED, handleGlobalsUpdated);
  }, [props.context.channel]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => setPreferredTheme(getPreferredSimpleTheme());

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const resolvedTheme = resolveStorybookShellTheme(selectedTheme, preferredTheme);

  return <DocsContainer {...props} theme={themes[resolvedTheme]} />;
};
