import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { useState } from 'react';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import HomeIcon from 'shared/assets/icons/home.svg';

import AboutIcon from 'shared/assets/icons/about.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const toggleCollapse = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])} data-testid="sidebar">
            <Button
                type="button"
                onClick={toggleCollapse}
                data-testid="sidebar__toggle"
                className={cls.toggle}
                theme={ButtonTheme.INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                <AppLink className={cls.link} to={RoutePath.main} theme={AppLinkTheme.INVERTED}>
                    <HomeIcon />
                    <span>{t('Главная страница')}</span>
                </AppLink>
                <AppLink className={cls.link} to={RoutePath.about} theme={AppLinkTheme.INVERTED}>
                    <AboutIcon />
                    <span>{t('Страница о нас')}</span>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>
        </div>
    );
};
