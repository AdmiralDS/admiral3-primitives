import type { ComponentType } from 'react';
import { useEffect, useState } from 'react';

import type { Preview } from '@storybook/react-vite';

import { DocsThemeContainer } from './DocsThemeContainer';
import './preview.css';

const getPreferredTheme = () => {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const PreviewThemeShell = ({ Story, selectedTheme }: { Story: ComponentType; selectedTheme: string }) => {
  const [preferredTheme, setPreferredTheme] = useState(getPreferredTheme);
  const theme = selectedTheme === 'system' ? preferredTheme : selectedTheme;

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => setPreferredTheme(getPreferredTheme());

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    document.body.classList.remove('sb-theme-light', 'sb-theme-dark');
    document.body.classList.add(`sb-theme-${theme}`);
  }, [theme]);

  return <Story />;
};

const PreviewThemeDecorator = (Story: ComponentType, context: { globals: { theme?: string } }) => {
  return <PreviewThemeShell Story={Story} selectedTheme={context.globals.theme || 'system'} />;
};

const preview: Preview = {
  tags: ['autodocs'],
  decorators: [PreviewThemeDecorator],
  initialGlobals: {
    theme: 'system',
  },
  globalTypes: {
    theme: {
      description: 'Preview theme',
      toolbar: {
        title: 'Theme',
        icon: 'mirror',
        items: [
          { value: 'system', title: 'System' },
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    a11y: {
      test: 'error',
    },
    layout: 'fullscreen',
    docs: {
      container: DocsThemeContainer,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
