import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum Theme {
    PRIMARY = 'primary',
    CLEAR = 'clear',
    OUTLINED = 'outlined',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: Theme;
}

export const Button: FC<ButtonProps> = ({
    className, children, theme = Theme.PRIMARY, ...otherProps
}) => (
    <button
        type="button"
        className={classNames(cls.Button, {}, [className, cls[theme]])}
        {...otherProps}
    >
        {children}
    </button>
);
