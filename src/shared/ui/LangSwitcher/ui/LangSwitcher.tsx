import {useTranslation} from "react-i18next";
import {Button, Theme} from "shared/ui/Button";

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
    const {t, i18n} = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    }

    return (
        <Button theme={Theme.CLEAR} onClick={toggleLanguage}>
            {t('Русский')}
        </Button>
    )

}