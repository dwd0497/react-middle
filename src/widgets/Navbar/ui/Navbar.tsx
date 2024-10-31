import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <AppLink to="/" theme={AppLinkTheme.INVERTED}>Main page</AppLink>
        <AppLink to="about" theme={AppLinkTheme.INVERTED}>About page</AppLink>
    </div>
);
