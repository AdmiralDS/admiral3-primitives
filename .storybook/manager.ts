import { useEffect, useState } from 'react';

import { addons, types, useGlobals } from 'storybook/manager-api';
import { themes } from 'storybook/theming';

type StorybookTheme = 'system' | 'light' | 'dark';

const themeOptions: StorybookTheme[] = ['system', 'light', 'dark'];

const getPreferredTheme = (): Exclude<StorybookTheme, 'system'> => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const isStorybookTheme = (theme: unknown): theme is StorybookTheme => {
  return typeof theme === 'string' && themeOptions.includes(theme as StorybookTheme);
};

let selectedTheme: StorybookTheme = 'system';

const setManagerTheme = (theme: unknown) => {
  selectedTheme = isStorybookTheme(theme) ? theme : 'system';

  addons.setConfig({
    theme: themes[selectedTheme === 'system' ? getPreferredTheme() : selectedTheme],
  });
};

setManagerTheme(selectedTheme);

const ThemeSyncTool = () => {
  const [globals] = useGlobals();
  const [preferredTheme, setPreferredTheme] = useState(getPreferredTheme);

  useEffect(() => {
    setManagerTheme(globals.theme);
  }, [globals.theme, preferredTheme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => setPreferredTheme(getPreferredTheme());

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return null;
};

addons.register('admiral-theme-sync', () => {
  addons.add('admiral-theme-sync/tool', {
    title: 'Admiral theme sync',
    type: types.TOOL,
    match: ({ viewMode, tabId }) => !!(viewMode?.match(/^(story|docs)$/) && !tabId),
    render: ThemeSyncTool,
  });
});
