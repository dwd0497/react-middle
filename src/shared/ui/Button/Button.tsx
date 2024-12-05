import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    CLEAR = 'clear',
    OUTLINED = 'outlined',
}

export enum ButtonSize {
    M = 'm',
    L = 'l',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    size?: ButtonSize;
    square?: boolean;
}

export const Button: FC<ButtonProps> = ({
    className, children, theme = ButtonTheme.PRIMARY, size = 'm', square = false, ...otherProps
}) => (
    <button
        type="button"
        className={classNames(
            cls.Button,
            { [cls.square]: square },
            [className, cls[theme], cls[size]],
        )}
        {...otherProps}
    >
        {children}
    </button>
);
