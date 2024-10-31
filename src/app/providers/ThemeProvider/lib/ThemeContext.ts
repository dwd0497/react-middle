import { createContext } from 'react';

export enum Theme {
    LIGHT ='light',
    DARK = 'dark'
}

interface IThemeContext {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<IThemeContext>({});

export const LS_THEME_KEY = 'theme';
