import { classNames } from 'shared/lib/classNames/classNames';
import {
    ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal = ({
    className, children, isOpen, onClose,
}: ModalProps) => {
    const [isClosing, setIsClosing] = useState(false);
    const refTimer = useRef<ReturnType<typeof setTimeout>>(null);

    const handleClose = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            refTimer.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const handleKeyDown = useCallback((e:KeyboardEvent) => {
        if (e.key === 'Escape') {
            handleClose();
        }
    }, [handleClose]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            clearTimeout(refTimer.current);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown, isOpen]);

    return (
        <Portal>
            <div className={classNames(cls.Modal, { [cls.opened]: isOpen }, [className])}>
                <div className={cls.overlay} onClick={handleClose}>
                    <div
                        className={classNames(cls.content, { [cls.closing]: isClosing })}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
