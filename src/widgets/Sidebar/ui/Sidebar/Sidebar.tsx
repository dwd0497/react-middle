import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { useState } from 'react';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { useTranslation } from 'react-i18next';
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
            <button type="button" onClick={toggleCollapse} data-testid="sidebar__toggle">
                {t('Переключить')}
            </button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
