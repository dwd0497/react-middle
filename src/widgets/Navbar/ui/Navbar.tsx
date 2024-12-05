import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    const onToggleAuthModal = useCallback(() => {
        setIsAuthModalOpen((prevState) => !prevState);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.login}>
                <Button
                    theme={ButtonTheme.CLEAR}
                    onClick={onToggleAuthModal}
                >
                    {t('Войти')}
                </Button>
            </div>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Modal isOpen={isAuthModalOpen} onClose={onToggleAuthModal}>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Accusamus aliquam aliquid, cumque ex modi nobis sapiente. Debitis deserunt, itaque iusto
                necessitatibus possimus quia quisquam quo quod vero voluptas. Mollitia, ut?
            </Modal>
        </div>
    );
};
