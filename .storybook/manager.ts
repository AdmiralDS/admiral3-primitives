import { useEffect, useState } from 'react';

import { addons, types, useGlobals } from 'storybook/manager-api';
import { themes } from 'storybook/theming';

import {
  getPreferredSimpleTheme,
  isStorybookAdmiralTheme,
  resolveStorybookShellTheme,
  type StorybookAdmiralTheme,
} from './storybookThemes';

let selectedTheme: StorybookAdmiralTheme = 'system';

const setManagerTheme = (theme: unknown) => {
  selectedTheme = isStorybookAdmiralTheme(theme) ? theme : 'system';

  addons.setConfig({
    theme: themes[resolveStorybookShellTheme(selectedTheme)],
  });
};

setManagerTheme(selectedTheme);

const ThemeSyncTool = () => {
  const [globals] = useGlobals();
  const [preferredTheme, setPreferredTheme] = useState(getPreferredSimpleTheme);

  useEffect(() => {
    setManagerTheme(globals.theme);
  }, [globals.theme, preferredTheme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => setPreferredTheme(getPreferredSimpleTheme());

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
