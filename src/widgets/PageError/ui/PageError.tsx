import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, Theme } from 'shared/ui/Button';
import { useCallback } from 'react';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = useCallback(() => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    }, []);

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <Button theme={Theme.CLEAR} onClick={reloadPage}>{t('Обновить страницу')}</Button>
        </div>
    );
};
