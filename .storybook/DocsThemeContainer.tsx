import { useEffect, useState } from 'react';

import { DocsContainer } from '@storybook/addon-docs/blocks';
import type { DocsContainerProps } from '@storybook/addon-docs/blocks';
import { GLOBALS_UPDATED } from 'storybook/internal/core-events';
import { themes } from 'storybook/theming';

type StorybookTheme = 'system' | 'light' | 'dark';

const themeOptions: StorybookTheme[] = ['system', 'light', 'dark'];

const getPreferredTheme = (): Exclude<StorybookTheme, 'system'> => {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const isStorybookTheme = (theme: unknown): theme is StorybookTheme => {
  return typeof theme === 'string' && themeOptions.includes(theme as StorybookTheme);
};

const resolveTheme = (theme: StorybookTheme): Exclude<StorybookTheme, 'system'> => {
  return theme === 'system' ? getPreferredTheme() : theme;
};

const getInitialTheme = (context: DocsContainerProps['context']): StorybookTheme => {
  try {
    const story = context.storyById();
    const theme = context.getStoryContext(story).globals.theme;

    return isStorybookTheme(theme) ? theme : 'system';
  } catch {
    return 'system';
  }
};

export const DocsThemeContainer = (props: DocsContainerProps) => {
  const [selectedTheme, setSelectedTheme] = useState<StorybookTheme>(() => getInitialTheme(props.context));
  const [preferredTheme, setPreferredTheme] = useState(getPreferredTheme);

  useEffect(() => {
    const handleGlobalsUpdated = ({ globals }: { globals: { theme?: unknown } }) => {
      setSelectedTheme(isStorybookTheme(globals.theme) ? globals.theme : 'system');
    };

    props.context.channel.on(GLOBALS_UPDATED, handleGlobalsUpdated);
    return () => props.context.channel.off(GLOBALS_UPDATED, handleGlobalsUpdated);
  }, [props.context.channel]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => setPreferredTheme(getPreferredTheme());

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const resolvedTheme = selectedTheme === 'system' ? preferredTheme : resolveTheme(selectedTheme);

  return <DocsContainer {...props} theme={themes[resolvedTheme]} />;
};
