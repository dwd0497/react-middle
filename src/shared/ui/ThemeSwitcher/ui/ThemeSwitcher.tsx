import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss";
import {Theme, useTheme} from "app/providers/ThemeProvider";
import ThemeDark from "shared/assets/icons/theme-dark.svg"
import ThemeLight from "shared/assets/icons/theme-light.svg"
import {Button, Theme as ButtonTheme} from "shared/ui/Button";


interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <Button
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
            theme={ButtonTheme.CLEAR}
        >
            {theme === Theme.DARK ? <ThemeDark /> : <ThemeLight />}
        </Button>
    )
}