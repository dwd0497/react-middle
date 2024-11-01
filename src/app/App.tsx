import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

export const App = () => {
    const { theme } = useTheme();
    const { t } = useTranslation();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={t('Загрузка...')}>
                <Navbar />
                <div className="page-container">
                    <Sidebar />
                    <div className="page-content">
                        <AppRouter />
                    </div>
                </div>
            </Suspense>
        </div>
    );
};
