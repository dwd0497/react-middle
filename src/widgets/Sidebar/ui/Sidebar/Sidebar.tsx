import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import {useState} from "react";
import {LangSwitcher} from "shared/ui/LangSwitcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const toggleCollapse = () => {
        setCollapsed((prev) => !prev);
    }

    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <button onClick={toggleCollapse}>
                Toggle
            </button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    )
}