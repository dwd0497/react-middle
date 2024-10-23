import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher />
            <AppLink to='/' theme={AppLinkTheme.INVERTED} className={cls.right}>Main page</AppLink>
            <AppLink to='about' theme={AppLinkTheme.INVERTED}>About page</AppLink>
        </div>
    )
}