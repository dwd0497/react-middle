import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { classNames } from 'shared/lib/classNames/classNames';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={toggleLanguage}
            className={classNames('', {}, [className])}
        >
            {t('Русский')}
        </Button>
    );
};
